---
title: Cryptographic primitives
---

# Cryptographic primitives
Below is a list of all cryptographic opearations used by the Ixian DLT and S2 networks. The list contains a brief reasoning for the choice and a list places where the primitive is being used.

## Signature - RSA with SHA512
See: [RSACryptoServiceProvider.SignData](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.rsacryptoserviceprovider.signdata?view=netframework-4.7.2)

Key size: Minimum 4096 bits

### Used for

| Code file | Function | Input data | Reason |
| --- | --- | --- | --- |
| Block.cs | applySignature() | blockChecksum | Working of the Ixian's Consensus algorithm - nodes sign the block they consider valid with their private key using RSA/SHA512 to achieve an acceptable speed of verification. |
| Block.cs | verifySignature() | blockChecksum | Each signature on the `Block` is verified agains the signing node's public key in the WalletState. Valid signatures are counted to determine the block acceptance consensus. |
| CoreNetworkProtocol.cs | sendHelloMessage() | unique device identification data | Nodes sign their unique identification when they send the initial protocol handshake message to prevent impersonation on the network. |
| CoreNetworkProtocol.cs | processHelloMessage() | unique device identification data | Upon receiving the Hello message, each node should verify that the signature is valid, in order to prevent impersonation on the network. |
| PresenceList.cs | keepAlive() | unique device id + timestamp | Nodes sign their Keep Alive messages in order to prevent impersonation and Presence List falsification. |
| PresenceList.cs | receiveKeepAlive() | unique device id + timestamp | Keep alive messages which are received from neighbors are verified against the neighbor's public key in the WalletState in order to prevent impersonation and Presence List manipulation. |
| Transaction.cs | multiple functions | transaction checksum | Each transaction is signed by the Node which generated the transaction. RSA/SHA512 is used to achieve an acceptable verification throughput on Master Nodes. |
| Transaction.cs | verifySignature() | transaction checksum | Each transaction is verified before being applied to the block chain, in order to ensure that it was sent by the owner of the wallet. |


## Hashing - SHA512sq
See [SHA512Managed](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.sha512managed?view=netframework-4.7.2)

Note: Ixian uses a squared/truncated version of the SHA512 algorithm. It is calculated as follows:
```
h1 = sha512(input_data);
h2 = sha512(h1);
return h2.First(hash_len);
```

### Used for

| Code file | Function | Input data | Truncated length | Reason |
| --- | --- | --- | --- | --- |
| Address.cs | constructAddress() | base_address | 3 bytes | The last three bytes of an address are the checksum, used to ensure integrity during transmission or save/load. |
| Address.cs | constructAddress_v1 | public_key | 44 bytes | For addressees version 1, the squared/truncated hash value is used as the base of the address. |
| Block.cs | calculateChecksum() | block raw data | 44 bytes | For block version 2, the squared/truncated hash is used as the block checksum. |
| Block.cs | calculateSignatureChecksum() | block signatures | 44 bytes | For block version 2, the squared/truncated hash is used to generated the signature freeze checksum. |
| Activity.cs | id property | activity data | 44 bytes | The hash is used as a unique identifier for each Activity record. |
| CoreNetworkProtocol.cs | prepareProtocolMessage() | 32 bytes | The hash is used by nodes on block version 2 to ensure network message integrity during transmission. |
| CoreNetworkProtocol.cs | readProtocolMessage() | 32 bytes | The hash is used by nodes on block version 2 to ensure network message integrity during transmission. |
| NetworkRemoteEndpoint.cs | sendData() | 32 bytes | The hash is used to ensure network message integrity during transmission by nodes on block version 2. |
| Transaction.cs | generateID() | 44 bytes | The hash is used as a part of the unique transaction identifier in version 2. |
| Transaction.cs | calculateChecksum() | 44 bytes | The hash is used as the transaction checksum, in order to protect the integrity of the data in version 2. This checksum is then used as the input data for the transaction sender signature. |
| Wallet.cs | calculateChecksum() | 44 bytes | The hash is used as the wallet checksum for version 2 wallets in order to prevent tampering and ensure ingegrity. |
| WalletState.cs | calculateWalletStateChecksum() | 64 bytes | The hash is used as the checksum for all wallet data in the WalletState. This is included in each block to validate a certain point-in-time state of all wallets. |
| WalletStorage.cs | generateNewAddress() | 16 bytes | The hashing algorithm is used to derive additional wallet version 1 addresses from the same public key, thus allowing the user to create new wallets and associate them with a single public/private key pair. |


## Hashing - SHA512sq
See [SHA512Managed](https://docs.microsoft.com/en-us/dotnet/api/system.security.cryptography.sha512managed?view=netframework-4.7.2)

Note: Ixian uses a quad/truncated version of the SHA512 algorithm. It is calculated as follows:
```
h1 = sha512(input_data);
h2 = sha512(h1);
h3 = sha512(h2);
h4 = sha512(h3);
return h4.First(hash_len);
```

### Used for

| Code file | Function | Input data | Truncated length | Reason |
| --- | --- | --- | --- | --- |
| Address.cs | constructAddress_v0 | public_key | 44 bytes | For addressees version 0, the quad/truncated hash value was used as the base of the address. |
| Block.cs | calculateChecksum() | block raw data | 44 bytes | For block version 0 and 1, the quad/truncated hash was used as the block checksum. |
| Block.cs | calculateSignatureChecksum() | block signatures | 44 bytes | For block version 0 and 1, the quad/truncated hash was used to generated the signature freeze checksum. |
| Activity.cs | id property | activity data | 44 bytes | The hash was used as a unique identifier for each Activity record. |
| CoreNetworkProtocol.cs | prepareProtocolMessage() | 32 bytes | The hash was used by nodes on block version 0 and 1 to ensure network message integrity during transmission. |
| CoreNetworkProtocol.cs | readProtocolMessage() | 32 bytes | The hash was used by nodes on block version 0 and 1 to ensure network message integrity during transmission. |
| NetworkRemoteEndpoint.cs | sendData() | 32 bytes | The hash was used to ensure network message integrity during transmission by nodes on block version 0 and 1. |
| Transaction.cs | generateID() | 44 bytes | The hash was used as a part of the unique transaction identifier in version 0 and 1. |
| Transaction.cs | calculateChecksum() | 44 bytes | The hash was used as the transaction checksum, in order to protect the integrity of the data in version 0 and 1. This checksum is then used as the input data for the transaction sender signature. |
| Wallet.cs | calculateChecksum() | 44 bytes | The hash was used as the wallet checksum for version 0 and 1 wallets in order to prevent tampering and ensure ingegrity. |
| WalletState.cs | calculateWalletStateChecksum() | 64 bytes | The hash was used as the checksum for all wallet data in the WalletState before block version 2. This is included in each block to validate a certain point-in-time state of all wallets. |
| WalletStorage.cs | generateNewAddress() | 16 bytes | The hashing algorithm is used to derive additional wallet version 0 addresses from the same public key, thus allowing the user to create new wallets and associate them with a single public/private key pair. |
