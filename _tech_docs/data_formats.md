---
title: Data formats
---

# Notes
## Used conventions
The vertical line symbol `|` indicates concatenation, either string or byte array.  
E.g.: "abcd"|"efgh" = "abcdefgh", and  
{ 0x01, 0x02, 0x03 } | { 0x04, 0x05, 0x06} = { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06 }


## Relevant functions
- **sha512(data)** represents calculating a SHA-512 hash on the input `data`.
- **sha512sq(data)** represents calculating a SHA-512 hash twice on the input `data` - equivalent to sha512(sha512(data)).
- **sha512qu(data)** represents calculating a SHA-512 hash four times on the input `data` - equivalent to sha512(sha512(sha512(sha512(data)))).
- **truncate(value, n)** returns the first `n` elements of `value`. If the `value` is an ASCII string, it returns the first `n` ASCII characters. If `value` is a byte array, it returns the first `n` bytes.

***

# Address Format
## Relevant C# objects:
`IXICore.Address`

## v0 Addresses:

### Description
A v0 address always start with the byte 0. The address itself is represented by a truncated sha512qu hash of the wallet's public key (pubkey length may vary). The hash is truncated to 32 bytes. Finally, another sha512sq hash is calculated from the 33-byte array (version|address) and truncated to 3 bytes, which are appended to the address, thus yielding 36 total bytes for a complete address.

### Specification
```
Length = 36 bytes  
Format = version | raw_address | checksum  
  
version = 1 byte, always 0x0 for addresses v0  
raw_address = 32 bytes, `truncate(sha512qu(pubkey) , 32)`  
checksum = 3 bytes, `truncate(sha512sq(version|raw_address), 3)`  

For the primary address (the first address generated from a specific public key):  
raw_address = 32 bytes, `truncate(sha512qu(public_key), 32)`  
  
For subsequent addresses:  
raw_address = 32 bytes, `truncate(sha512qu(primay_address|nonce), 32)`
```

## v1 Addresses:

### Description
The wallet's public key is used to generate a 44-byte truncated sha512sq hash, which is designated the `primary address`. This address is implied to have a `nonce` value of 0.  
When a subsequent address is required for the same public key, the `nonce` value is incremented and a new address is generated from the `primary address` and the new `nonce` value. Implementations might decide to use random `nonce` values, rather than sequential, but make sure that `nonce` values do not repeat - same `nonce` value will produce the same address.

This enables Ixian to rapidly generate as many new addresses as required with a low computational impact. Verification of the new addresses requires the original public key, but since that may be cached, transactions need only include the `primary address` and the `nonce` value, reducing network requirements.

### Specification
```
Length = 48 bytes  
Format = version | raw_address | checksum  
  
version = 1 byte, always 0x1 for addresses v1  
raw_address = 44 bytes, `truncate(sha512sq(pubkey_or_address), 44)`  
checksum = 3 bytes, `truncate(sha512sq(version|raw_address), 3)`  

For the primary address (the first address generated from a specific public key):  
raw_address = 44 bytes, `truncate(sha512sq(public_key), 44)`  
  
For subsequent addresses:  
raw_address = 44 bytes, `truncate(sha512sq(primay_address|nonce), 44)`  
```

***

# Key format
## Relevant C# objects:
`IXICore.IxianKeyPair`
`IXICore.CyrptoLib`

## v0 Public key

### Description
The v0 public key does not have any headers and is always 523 bytes long (4096-bit keys)

### Specification
```
Length = 523 bytes  
Format = raw_pubkey (see v1 raw_pubkey)  
```

## v1 Public key (and v0 Public key with header)

### Description
v1 Pubkey includes the minimum version of address it is able to generate, as well as the version of the pubkey record.  
Note: v0 and v1 pubkeys have exactly the same raw layout, the only difference is the prepended header for v1.

### Specification
```
Length = variable  
Format = address_version | pubkey_version | raw_pubkey  
  
address_version = 1 byte, always 0x1 (future use)  
pubkey_version = 4 bytes, always 0x0 (future use)  
raw_pubkey =   mod_len | modulus  
             | pub_exp_len | pub_exponent  
```

## v0 Private key

### Description
The v0 private key does not have any headers. The length varies and is represented by an `int` field before each data element.

### Specification
```
Length = 523 bytes  
Format = raw_privkey (see v1 raw_privkey)  
```

## v1 Private key (and v0 Private key with header)

### Description
v1 Privkey includes the minimum version of address it is able to generate, as well as the version of the privkey record.  
Note: v0 and v1 privkeys have exactly the same raw layout, the only difference is the prepended header for v1.  
Note: The beginning of the private and public key structures is exactly the same. Therefore, a public key can be quickly extracted from the private key.

### Specification
```
Length = variable  
Format = address_version | privkey_version | raw_privkey
  
address_version = 1 byte, always 0x1 (future use)  
privkey_version = 4 bytes, always 0x0 (future use)  
raw_privkey =  mod_len | modulus  
             | pub_exp_len | pub_exponent  
             | p_len | p_prime  
             | q_len | q_prime  
             | dp_len | dp_exponent1  
             | dq_len | dq_exponent2  
             | iq_len | inverse_q  
             | d_len | d_private_exponent  
```

***

# Presence
## Relevant C# objects:
`IXICore.PresenceList`
`IXICore.Presence`

## Description
Presences are how Ixian DLT network keeps track of which nodes and clients are online or offline.

## Specification
```
Length = varies, depending on contents
Format = version
         | wallet_len | wallet
         | pubkey_len | pubkey
         | meta_len | metadata
         | num_addresses | address_record
         | owner
```
Note: For a description of the `address_record` format, see [Presence Address](#presenceaddress) in the next section.

# Presence Address
## Relevant C# objects:
`IXICore.PresenceAddress`

## Description
A presence address represents a network endpoint on which the specific node or client device may be reached.

## Specification
```
Length = varies, depending on contents
Format = version
         | device
         | address
         | type 
         | nodeVersion
         | lastSeenTime
         | sig_len | signature
```

***

# Transaction
## Relevant C# objects:
`IXICore.Transaction`
`IXICore.Transction.Type`
`IXICore.Transaction.MultisigWalletChangeType`
`IXICore.Transaction.MultisigAddrAdd`
`IXICore.Transaction.MultisigAddrDel`
`IXICore.Transaction.MultisigChSig`
`IXICore.Transaction.MultisigTxData`

## Description
The `Transction` object is the cornerstone of any DLT network. It represents a single, atomic operation in much the same way as a transactional database.  
In most cases, a `Transaction` represents the transfer of funds between two wallets, but it may also signify some other change in the network.

## Specification
```
Length = varies, depending on contents
Format = version
         | type
         | amount
         | fee
         | to_list_count | to_list_entry[]
         | from_list_count | from_list_entry[]
         | data_len | data
         | block_height
         | nonce
         | time_stamp
         | checksum_len | checksum
         | signature_len | signature
         | pubkey_len | pubkey

to_list_entry = address_len | address | amount
from_list_entry = address_len | address | amount
```
Note: The amounts are sent as strings with decimal representation of IxiNumber values.
Note: address in to_list_entry or from_list_entry is either a full address or a special address nounce value. Use the functions in the class `DLT.Address` to convert them into a proper format.  
See also: [Address Format](#address-format)

***

# Wallet
## Relevant C# objects:
`IXICore.WalletType`
`IXICore.Wallet`

## Description
The `Wallet` object contains primarily the amount of funds for a specific Ixian DLT wallet. This structure is held and synchronized by the DLT Master nodes and checked using the field `walletStateChecksum` in the `Block` object.

## Specification
```
Length = varies, depending on contents
Format = id_len | id
         | balance
         | data_len | data
         | type
         | required_sigs
         | num_allowed_signers | allowed_signer[]
         | pubkey_len | pubkey

allowed_signer = address_len | address
```
Note: balance is encoded as a string with the decimal representation of IxiNumber.
