---
title: Programming Objects
---

# Block
## C# Object
`IXICore.Block`

## Description
Represents the fundamental structure of a DLT block, a basic object of the block chain.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| blockNum | ulong | Sequential number of the block. |
| transactions | List<string> | List of all transaction IDs which were included in this block. |
| signatures | List<byte[][]> | List of all signatures on this block. |
| frozenSignatures | List<byte[][]> | List of signatures which were frozen according to the Block Version 5 concept. |
| signatureCount | int | Number of signatures on the block - this field is used only for compacted block. (See Superblock functionality.) |
| version | int | Block version. Current active version = 5. |
| blockChecksum | byte[] | SHA512 checksum of the block contents. Please note that the checksum does not include the signatures. (See: signatureFreezeChecksum) |
| lastBlockChecksum | byte[] | Checksum for the previous block in the chain. (blockNum - 1) |
| walletStateChecksum | byte[] | Checksum of the contents of the [Wallet State](#Wallet-State) |
| signatureFreezeChecksum | byte[] | Checksum for the fifth-previous block's signature fields. This 'locks' the signature field for the block `blockNum-5`. |
| timestamp | long | Unix epoch value, representing the moment this block was generated. (One second precision.) |
| difficulty | ulong | PoW Difficulty value, representing the hashing difficulty to calculate a `PoW Solution` for this block. (link wiki page on pow) |
| superBlockSegments | Dictionary<ulong, SuperBlockSegment> | Only populated for Superblocks. Contains a list of previous blocks and their checksums since the previous Superblock. |
| lastSuperBlockChecksum | byte[] | Checksum of the previous Superblock. The Superblocks form a slower block chain on top of the Ixian block chain and store the most critical information for old regular blocks - this prevents certain exploit types due to the Redacted Blockchain concept. |
| lastSuperBlockNum | ulong | Number of the previous Superblock. As of Block Version 5 every 1000th block should be a Superblock (there should be 999 regular blocks between two superblocks), but this value has changed (and might change again), so this field tracks the previous Superblock in the chain. |
| powField | byte[] | PoW solution for this block. Note: this field is not transmitted over the network, because it can easily be obtained from the [Transaction Pool](#Transaction-Pool) |
| compacted | bool | Indicates whether this block has been compacted by using Superblocks, as per Block Version 5 concepts. |



# Block Chain
## C# Object
`DLT.BlockChain`

## Description
Represents the DLT blocks in the node's memory. If the node is a `full history node`, this is also the object which reads archived blocks from cold storage.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| blocks | List<[Block](#Block)> | A sequential list of the Blocks in the current `redactedWindow`. |
| blocksDictionary | Dictionary<ulong, [Block](#Block)> | Secondary lookup method for blocks in memory for faster access. |
| lastBlockReceivedTime | long | Unix epoch value for when the most recent block was received from the network. Used either to determine when the next block should be generated (for the currently elected nodes), or to detect if the DLT network has stalled. |
| lastBlock | Block | The most recent accepted block - because it is used quite often this local variable acts as a cache for faster lookups. |
| lastBlockNum | ulong | Number of the most recently accepted block. |
| lastBlockVersion | int | Block Version of the most recently accepted block. |
| lastSuperBlockNum | ulong | Number of the most recently accepted Superblock. |
| lastSuperBlockChecksum | byte[] | Checksum value of the most recently accepted Superblock. |
| genesisBlock | Block | Holds a copy of the Genesis block in its entirety. Used to verify legitimacy of the chain by following Superblocks and then normal Blocks from the Genesis to the current bloclheight. |
| Count | long | Number of blocks in memory. |



# Transaction
## C# Object
`IXICore.Transaction`

## Description
Represents all possible transaction types that the network currently supports. In order to transfer funds or make a change to a wallet, you use the `Transaction` class to create a transaction object and send add it to the Node's [Transaction Pool](#Transaction-Pool). The node will then send it to the rest of the network, provided it passes validation.

## Enumerations
### Transaction Type
Represents the transaction type:

| Enum | Code | Description |
| --- | --- | --- |
| Normal | 0 | Generic transaction - transfer of funds from one set of wallets to another set of wallets. |
| PoWSolution | 1 | Special transaction for submitting a PoW solution for a specific block. The originator of this transaction is rewarded by the PoW solution reward, if the solution is valid. |
| StakingReward | 2 | Special transaction generated automatically by the network, which rewards participating nodes. (Based on the signature list for the blocks, which have had their signatures frozen - link to sigfreeze docs) |
| Genesis | 3 | Special transaction which is only valid in the very first block and creates the initial balance for some wallets, so that the network is able to start. |
| MultisigTX | 4 | Transaction which facilitates multiple-owner wallets and wallets which require majority approval before funds can be withdrawn. |
| ChangeMultisigWallet | 5 | Special transaction for changing the properties of a multisig wallet. |
| MultisigAddTxSignature | 6 | Special transaction, used only in combination with `MultisigTX`, which adds signatures for the originating `MultisigTX` transaction. |

### MultisigWalletChangeType
Type of change which is performed on a multisig wallet. Only valid for the Transaction type `ChangeMultisigWallet`.

| Enum | Code | Description |
| --- | --- | --- |
| AddSigner | 1 | Enables adding allowed signers for a multisig wallet. Note: This may also be used on a regular wallet, which is then converted to a multisig wallet. |
| DelSigner | 2 | Allows removing allowed signers from a multisig wallet. |
| ChangeReqSigs | 3 | Sets the number of required signatures before a `MultisigTX` is considered valid for a multisig wallet. |

## Fields

| Field | Type | Description |
| --- | --- | --- |
| version | int | Version of the transaction. Higher versions enable new features and support new address and key formats. It is recommended to always generate the highest possible version of transactions. |
| id | string | Unique transaction identifier. |
| type | int | Transaction type. See [Transaction Types](#transaction-types) |
| amount | IxiNumber | Total amount of funds being trasferred or deposited. |
| fee | IxiNumber | Total fee that must be paid in order that this transaction is processed. Fee has a specified minimum, depending on the transaction object length in bytes, but it may be increased by clients to priorizite transactions. |
| fromList | SortedDictionary<byte[], IxiNumber> | A list of originating wallets, where the amount and fee will be deducted. Please note that the sum of all `Value` fields in the dictionary must be equal to `amount + fee`. |
| toList | SortedDictionary<byte[], IxiNumber | A list of destination wallets, where the funds will be deposited. Please note that the sum of all `Value` fields in the dictionary must be equal to `amount`. |
| data | byte[] | Additional data associated with the transaction. Used for `MultisigTX` and variants. May be set by the user for normal transactions. |
| blockHeight | ulong | The highest currently accepted block when the transaction was generated. This helps protect against replay attacks. |
| nonce | int | Unique value tied to a particular DLT node which created the transaction. This helps protect against replay attacks. |
| timeStamp | long | Time when the transaction was generated, represented as the unix epoch value. |
| checksum | byte[] | Checksum of all transaction data to ensure integrity during network transfer. |
| signature | byte[] | Signature from the owner of the wallets in `fromList`. |
| pubKey | byte[] | Public key for the signature. If the public key is already in the Presence List (the wallets in `fromList` have already been a part of transactions), this field can be omitted. |
| applied | ulong | Block number in which this transaction has been applied. This field is not transmitted over the network. |
| fromLocalStorage | bool | Flag indicating if the transaction was loaded from a local file (i.e.: When the node was restarted). This field is not transmitted over the network. |

# Transaction Pool
## C# Object
`DLT.TransactionPool`

## Description
Contains all [Transactions](#transaction) which are referenced in the current window of the redacted blockchain.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| transactions | Dictionary<string, [Transaction](#transaction)> | A dictionary of all transactions, accessed through their transaction id (txid). |

# Wallet
## C# Object
`IXICore.Wallet`

## Description
The `Wallet` object contains primarily the amount of funds for a specific Ixian DLT wallet. This structure is held and synchronized by the DLT Master nodes and checked using the field `walletStateChecksum` in the `Block` object.  

## Enumerations
### Wallet Types
Wallet types currently include:

| Value | Type name | Description |
| --- | --- | --- |
| 0 | Normal | Normal wallet |
| 1 | Multisig | Wallet, which requires multiple signatures in order to withdraw funds. |

## Fields

| Field | Type | Description |
| --- | --- | --- |
| id | byte[] | Unique wallet address. The address is generated from the user's public key and the 'wallet nonce'. |
| balance | IxiNumber | Amount of funds in the wallet. |
| type | [WalletType](#wallet-types)  | Type of the wallet. |
| requiredSigs | byte | Only for `type == Multisig` - the number of required signatures before a transaction to spend funds from this wallet is valid. |
| allowedSigners | byte[][] | Addresses of other wallets who are allowed as signers on this wallet. Only for `type == Multisig`. |
| data | byte[] | Additional wallet data. Mainly planned to be used with S2. |
| publicKey | byte[] | Public key which is used to sign transactions for this wallet. This field may be empty, if the public key for a particular address is not yet known. |
| countAllowedSigners | byte | Returns the list of additional signing addresses which are allowed for this wallet. If the wallet is not a MultiSig wallet, this value will be 0. Note: The wallet's primary address is not counted in this number. `countAllowedsigners = 1` means there are two possible signing addresses for the wallet, therefore `requiredSigs` may have the value 2. (Primary owner and one other allowed signer.) |

# Wallet State
## C# Object
`DLT.WalletState`

## Note
The WalletState object is under redesign as part of the `WalletStateJournal` implementation of transactional logging.

## Description
This object is responsible for maintaining the Ixian 'Wallet State' - the list of all known wallets in the Ixian DLT. The WalletState includes methods to calculate its own checksum, which then becomes bart of each [Block](#block).  
In this method, each accepted `Block` confirms a particular state of all wallets. This includes their balances, configuration (see `MultiSig Wallets`) and any additional user-data which is attached.  
  
In addition to holding the current state of all wallets, the `WalletState` object can also 'snapshot' the state and later return to the saved snapshot. This allows the node to run efficient "What if" scenarios when testing validity of blocks or individual transactions.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| stateLock | Object | Used for internal multithreaded synchronization. |
| version | int | Version of the `WalletState`, used primarily to determine the maximum version of `Address` it can contain. |
| walletState | Dictionary<byte[], [Wallet](#wallet)> | A dictionary of all currently-known wallets. They are accessed through their addresses, which are internally represented as byte arrays. |
| cachedChecksum | byte[] | After each complete checksum is calculated, it is stored in this field. If any wallet is changed in any way, this field is reset to null. This enables faster checksum lookups when the contents of the `WalletState` havent' changed between calls. |
| wsDelta | Dictionary<byte[], [Wallet](#wallet) | Internal structure which enables the 'snapshot' functionality. |
| cachedDeltaChecksum | byte[] | Similar as `cachedChecksum`, but is instead used whenever a WalletState snapshot exists. |
| cachedTotalSupply | IxiNumber | Used to acche the total amount of IXI in circulation, to speed up lookup for subsequent calls if the WS content have not changed. |
| numWallets | int | Shortcut variable which returns the number of wallets in WalletState. |
| hasSnapshot | bool | Returns true if a WalletState snapshot currently exists. |

# Address
## C# Object
`IXICore.Address`

## Description
The `Address` object is primarily used to convert different input address types into an address byte array, which is used elsewhere in the Node. It can properly handle all versions of address data passed to it.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| version | int | The version of the address, which was recognized from the input data. |
| address | byte[] | The internal representation of an address, which can be used to look up a specific Wallet. |
| nonce | byte[] | Used for Address v1 and above - specifies the `nonce` value which was used to generate this wallet from a primary public key. The primary address for each public key has this value set to `null`. Derived (additional) addresses may have any `nonce` value, but it is the implementation's responsibiltiy to track which ones are in use. In order to make this simpler, the reference implementation uses sequential `nonce` values. |

# Presence
## C# Object
`IXICore.Presence`

## Description
A single presence object contains information about a live node or client on the DLT/S2 network. The structure contains all the required data to locate the node or client.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| version | int | Presence entry vesion. Currenty fixed at 0x0. |
| wallet | byte[] | Node or Client's wallet address. |
| pubkey | byte[] | The public key associated with the presence. This field may be null if the public key has not been encountered yet in a transaction. |
| metadata | byte[] | Additional information about the node or client. Mainly indended for use with S2 clients. |
| addresses | List<[PresenceAddress](#presenceaddress)> | List of contact points where this node or client may be reached. |


# Presence Address
## C# Object
`IXICore.PresenceAddress`

## Description
Presence address contains enough information to allow contacting the owner of the presence (DLT node, S2 node or a client). It includes information on which relay node this specific address is registered.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| version | int | Presence address vesion. Currenty fixed at 0x0. |
| device | string | ID of the device - for use when a single wallet is used by multiple devices belonging to the same user. |
| address | string | The address where this device is reachable - usually "IP:port". |
| type | char | Type of the node represented by this presence. See the table 'Presence Types' below. |
| nodeVersion | string | Version of the software running on this device. |
| lastSeenTime | long | Timestamp of the moment when this device was last seen, represented by the unix epoch. |
| signature | byte[] | Signature by the owner of the address to prevent tampering with the presence list. |

## Type Code

| Type code | Description |
| --- | --- |
| M | Master node - processess DLT transactions and participates in the Ixian Consensus algorithm. |
| R | Relay node - Transmits and receives messages for the S2 network. |
| D | Client (direct connection) - Client device which is able to be directly contactet - (public IP and no NAT/Firewall). |
| C | Client (via relay) - Client, which must be contacted via its relay node. |

Note: For the address type 'C', the `address` field will contain the relay node's address.

# Presence List
## C# Object
`IXICore.PresenceList`

## Description
The Presence List object holds all [Presences](#presence) currently known to the DLT node.

## Fields

| Field | Type | Description |
| --- | --- | --- |
| presences | List<[Presence](#presence)> | A list of all known presences. |
| curNodePresenceAddress | [PresenceAddress](#presence-address) | The `PresenceAddress` which represents the node. |
| curNodePresence | [Presence](#presence) | The `Presence` which represents the node. |
| presenceCount | Dictionary<char, long> | Number of nodes for each node type. See [Presence Address](#presence-address) for type codes. |
| keepAliveThread | Thread | The thread process which occasionally send keep alive messages to their neighbors to ensure they are still reachable. |
| autoKeepAlive | bool | Flag indicating whether the `PresenceList` object should automatically send keep alive messages to refresh its own Presence List entry in the neighbor nodes. If this field is set to `false`, the `keepAliveThread` will stop running. |
| forceSendKeepAlive | bool | If this field is set to `true`, the PresenceList will send out a KeepAlive message as soon as possible, rather than waiting for the next KeepAlive interval to expire. |