---
title: Ixian network protocol
---

# Network message encoding

Ixian encodes multibyte data in the network message with the little-endian ordering. This was chosen because the primary Ixian platforms are x86-based and this choice slightly improves network performance.

For example, the 4-byte integer value 0x10203040 is encoded in the network data stream as a sequence of four bytes like this:

```
n   : 0x40
n+1 : 0x30
n+2 : 0x20
n+3 : 0x10
```

Byte arrays are sent byte-by-byte and their ordering does not change, for example:
Byte data: [ 0x01, 0x02, 0x03, 0x04 ]

```
n   : 0x01
n+1 : 0x02
n+2 : 0x03
n+3 : 0x04
```

# Ixian Network Messages

All Ixian messages follow the same overall structure with the following fields:

| Field name | Data Type | Description |
| --- | --- | --- |
| Start Byte | byte | A constant byte value which signifies message start. For Ixian this is always 'X' (0x58) |
| Message Code | int | Type of the network message. See a list of message codes below for possible values. |
| Data Length | int | Length of the attached data field. Depends on `Message Code` and message contents. |
| Data Checksum | byte[32] | A `sha512sqTrunc` checksum of the data field. |
| Header Checksum | byte | A custom XOR-based checksum for sanity checking the header structure. See [Header Checksum](/tech_docs/protocol.html#header-checksum) for details. |
| Header End Byte | byte | A constant byte value which signifies header end. For Ixian, this is always 'I' (0x49). |
| Data | byte[] | A variable-sized data block which contains a message specific to the provided `Message Code`. See the list of message codes for possible formats. |

## Header Checksum

Header checksum is calculated as follows:
1. Start with the byte value 0x7F: `sum = 0x07F`
2. Loop through each byte of the header and calculate `sum = sum ^ header_byte`
3. Return the final `sum` value.

The symbol `^` denotes an XOR operation on a single byte.


## Ixian Messge Codes

Currently valid Ixian Message Codes are as follows:

| Name | Value | Structure | Description |
| --- | --- | --- | --- |
| hello | 0 | [Hello](/tech_docs/protocol.html#hello) | This message type is used to initiate communication with another Ixian Node and contains basic identification data |
| helloData | 1 | [Extended Hello](/tech_docs/protocol.html#extended-hello) | This message type is used as a reply to the `hello` message with additional DLT-related data. |
| bye | 2 | [Bye](/tech_docs/protocol.html#bye) | This message should be sent before terminating a connection to another Ixian Node or a client. It contains the reason code for why the connection is being dropped as well as a short, human-readable explanation. |
| getBlock | 3 | [Get Block](/tech_docs/protocol.html#get-block) | This message is used to request data for a particular block. |
| blockData | 4 | [Block Data](/tech_docs/protocol.html#block-data) | This message is sent as a reply to `getBlock` with the requested block details. |
| getTransaction | 9 | [Get Transaction](/tech_docs/protocol.html#get-transaction) | This message is used to request data for a particular transaction. |
| transactionData | 10 | [Transaction Data](/tech_docs/protocol.html#transaction-data) | Used as a reply to `getTransaction` with the requested transaction details. |
| syncWalletState | 13 | [Sync Wallet State](/tech_docs/protocol.html#sync-wallet-state) | Used to request WalletState synchronization from a neighbor node. |
| walletState | 14 | [Wallet State](/tech_docs/protocol.html#wallet-state) | Used to confirm WalletState synchronization as a reply to `syncWalletState` and to include the most important metadata for the WalletState. |
| newTransaction | 16 | [Transaction Data](/tech_docs/protocol.html#transaction-date) | Used to notify a neighboring DLT Node or Client that a new (interesting) transaction has arrived. |
| newBlock | 17 | [Block Data](/tech_docs/protocol.html#block-data) | Used to notify a neighboring DLT Node that a new block has been generated or accepted. |
| getWalletStateChunk | 20 | [Get WalletState Chunk](/tech_docs/protocol.html#get-walletstate-chunk) | Used to request a piece of the WalletState. This is only valid if WalletState synchronization has been established before by the message pair `syncWalletState`, `walletState`. |
| walletStateChunk | 21 | [WalletState Chunk](/tech_docs/protocol.html#walletstate-chunk) | Contains a piece of the WalletState as requested by `getWalletStateChunk`. |
| getPresenceList | 22 | [Get Presence List](/tech_docs/protocol.html#get-presence-list) | Used to request synchronization of the Presence List. |
| presenceList | 23 | [Presence List](/tech_docs/protocol.html#presence-list) | Used to transmit the presence list as requested by `getPresenceList`. |
| updatePresence | 24 | [Update Presence](/tech_docs/protocol.html#update-presence) | Sends an updated Presence to a neighbor DLT Node or a Client. |
| s2data | 26 | [S2 Data](/tech_docs/protocol.html#s2-data) | Used to transmit a piece of data between S2 Relay Nodes. Currently unused. |
| s2failed | 27 | [S2 Failed](/tech_docs/protocol.html#s2-failed) | Signifies that an S2 data transmission was invalid or encountered a problem. Currently unused. |
| s2signature | 28 | [S2 Signature](/tech_docs/protocol.html#s2-signature) | Currently unused. |
| getBalance | 32 | [Get Balance](/tech_docs/protocol.html#get-balance) | Used to request balance for a specified Wallet. Primarily intended for Client -> DLT Node communication. |
| balance | 33 | [Balance](/tech_docs/protocol.html#balance) | Response to `getBalance`. |
| keepAlivePresence | 34 | [Keep Alive Presence](/tech_docs/protocol.html#keep-alive-presence) | Used to broadcast a Node or a Client's status to the network in order to update Presence Lists. |
| getPresence | 35 | [Get Presence](/tech_docs/protocol.html#get-presence) | Requests presence information for a specified Address. |
| getBlockTransactions | 36 | [Get Block Transactions](/tech_docs/protocol.html#get-block-transactions) | Requests transaction for the specified Block. |
| transactionsChunk | 37 | [Transactions Chunk](/tech_docs/protocol.html#transactions-chunk) | Response to `getBlockTransactions` - can be sent multiple times if all Transactions do not fit into a single message. |
| getUnappliedTransactions | 38 | [Get Unapplied Transactions](/tech_docs/protocol.html#get-unapplied-transactions) | Requests all Transactions from the recipient DLT Node which have not yet been applied on the blockchain. |
| extend | 39 | [Extend](/tech_docs/protocol.html#extend) | Currently unused. |
| attachEvent | 40 | [Attach Event](/tech_docs/protocol.html#attach-event) | Sent by Clients to a DLT or S2 Node in order to subscribe to an event (start receiving messages when the specified event occurs). |
| detachEvent | 41 | [Detach Event](/tech_docs/protocol.html#detach-event) | Sent by Clients to a DLT or S2 Node in order to unsubscribe from an event (stop receiving messages related to the specified event). |
| newBlockSignature | 42 | [New Block Signature](/tech_docs/protocol.html#new-block-signature) | Informs a neighbor DLT Node that the specified Block has an additional signature. |
| getBlockSignatures | 43 | [Get Block Signatures](/tech_docs/protocol.html#get-block-signatures) | Requests all signatures for the specified Block. |
| blockSignatures | 44 | [Block Signatures](/tech_docs/protocol.html#block-signatures) | Response to `getBlockSignatures`, containing all signatures for the specified Block. |
| getNextSuperBlock | 45 | [Get Next Superblock](/tech_docs/protocol.html#get-next-superblock) | Requests the next Superblock in the chain based on a Block checksum. |
| getBlockHeaders | 46 | [Get Block Headers](/tech_docs/protocol.html#get-block-headers) | Requests partial Block information (Block Headers only) from a DLT Node. Used primarily by client nodes in the TIV (Transaction Inclusion Verification) process. |
| blockHeaders | 47 | [Block Headers](/tech_docs/protocol.html#block-headers) | Response to `getBlockHeaders`. |
| getRandomPresences | 48 | [Get Random Presences](/tech_docs/protocol.html#get-random-presences) | Requests a number of random Presences of the specified type. Used primarily by Clients when choosing new Nodes to connect to. |

# Message Data

## Hello

### Response to: `nothing`
### Responses: `[Extended Hello](#extended-hello)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Protocol Version | int | Version of the network protocol. |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Public address of the sender. |
| Is Test Net? | bool | Indicator whether this communication is intended for the Ixian Testnet. Mainnet messages must not be processed in the Testnet or vice-versa! |
| Node Type | byte | Type of the sending node. Possible values: 'C' (Client), 'R' (Relay), 'M' (Master), 'H' (Master-Full history). |
| Product Version | string | Version text of the sender. |
| Device ID | string | Unique identifier of the sending device. |
| Pubkey Length | int | Length of the subsequent Public Key field. |
| Pubkey | byte[] | Public Key of the sender. |
| Public Port | int | TCP Port number on which the sender is reachable. (Ignored for Clients which are connecting through a Relay Node.) |
| Timestamp | long | Current timestamp as a number of 100-nanosecond intervals since 1971-01-01. |
| Signature Length | int | Length of the subsequent Signature field. |
| Signature | byte[] | Signature (see below). |
| Challenge Length | int | Length of the subsequent Challenge field. |
| Challenge | byte[] | Random data field which the receiver must successfully sign in order to verify that they own the public key they send in the reply. |

### Signature

The Hello signature is created by concatenating some known pieces of data, then signing the resulting data field with the sender's private key, thus proving that the provided public key really does belong to the sender.
The signature data is a string, constructed as follows:

"Ixian-<device_id>-<timestamp>-<publicIPPort>"
Where:
* device_id is the Device ID provided in the Hello message
* timestamp is the timestamp provided in the Hello message
* publicIPPort is the combination of the node's public IP (can be determined by the recipient) and the Public Port value from the Hello message

## Extended Hello

### Response to: `hello`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Protocol Version | int | Version of the network protocol. |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Public address of the sender. |
| Is Test Net? | bool | Indicator whether this communication is intended for the Ixian Testnet. Mainnet messages must not be processed in the Testnet or vice-versa! |
| Node Type | byte | Type of the sending node. Possible values: 'C' (Client), 'R' (Relay), 'M' (Master), 'H' (Master-Full history). |
| Product Version | string | Version text of the sender. |
| Device ID | string | Unique identifier of the sending device. |
| Pubkey Length | int | Length of the subsequent Public Key field. |
| Pubkey | byte[] | Public Key of the sender. |
| Public Port | int | TCP Port number on which the sender is reachable. (Ignored for Clients which are connecting through a Relay Node.) |
| Timestamp | long | Current timestamp as a number of 100-nanosecond intervals since 1971-01-01. |
| Signature Length | int | Length of the subsequent Signature field. |
| Signature | byte[] | Signature (see below). |
| Latest Block Height | ulong | Number of the most recently accepted Block. |
| Latest Block Checksum Length | int | Length of the subsequent Block checksum field. |
| Latest Block Cehcksum | byte[] | Most recently accepted Block checksum. |
| WalletState Checksum Length | int | Length of the subsequent WalletState checksum field. |
| WalletSTate Checksum | byte[] | Checksum of the WalletState which corresponds to the most recently accepted Block. |
| RESERVED | int | Always 0 - reserved for future use. |
| Block Version | int | Currently active Block Version. |
| RESERVED | ulong | Always 0 - reserved for future use. |
| Challenge Response Length | int | Length of the subsequent Challenge Response field. |
| Challenge Response | byte[] | Response to the challenge from the `hello` message. See below. |

### Challenge Response

The challenge response is simply a signature for the `Challenge` field provided in the corresponding `hello` message. The Signature must be calculated with the sending node's private key, which matches the reported `Public Key` in the `helloData` message.


## Bye

### Response to: `nothing`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Bye Code | int | Reason for the connection being terminated. |
| Message | string | User-friendly message which further explains the reason for disconnect. |
| Additional Data | string | Other, data, dependant on the `Bye Code`. |

### Bye Codes

| Name | Value | Description | Bye Data |
| --- | --- | --- | --- |
| blockInvalidChecksum | 100 | A `Block` was sent with an incorrect checksum. | Additional user-friendly details. |
| blockInvalidForked | 101 | A `Block` which was sent is suspected to be from a forked chain. | Additional user-friendly details. |
| blockInvalidNoConsensus | 102 | A `Block` was sent without sufficient consensus signatures. | Additional user-friendly details. |
| bye | 200 | Unspecified disconnection reason. | None. |
| expectingMaster | 400 | A Master Node was expected. | Additional user-friendly details. |
| forked | 500 | The sending node suspects it is on a forked network. | Additional user-friendly details. |
| deprecated | 501 | A deprecated protocol was used which is not supported. | Additional user-friendly details. |
| incorrectNetworkType | 502 | The connecting node is on a different network (TestNet vs. MainNet). | Additional user-friendly details. |
| insufficientFunds | 599 | The connecting Master Node does not have sufficient funds int he wallet to participate in consensus. | None. |
| incorrectIp | 600 | The IP address specified in the Hello message was invalid. (Not a public IP address.) | IP Address as seen by the remote node. Can be used to update local node's public IP address. |
| notConnectable | 601 | The IP address specified in the Hello message was not reachable for a connection test. | None. |
| tooFarBehind | 602 | The connecting node has fallen too far behind on the blockchain. | Additional user-friendly details. |
| authFailed | 603 | The authentication value does not match the connecting node's address. | Additional user-friendly details. |
| addressMismatch | 604 | The remote node's address does not match the known address for that node. | Additional user-friendly details. |


## Get Block

### Response to: `nothing`
### Responses: `[Block Data](#block-data)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Block Number | ulong | Number of the requested Block. |
| Include Transactions | byte | Whether the response should contain transaction data as well. See Include Transaction values below. |
| Full Header | bool(optional) | Whether to send full or abbreviated Block Header. |

### Include Transaction Values
| Value | Description |
| --- | --- |
| 1 | Omit Staking transactions, but send all user transactions. |
| 2 | Send all user and Staking transactions. |


## Block Data

### Response to: `[Get Block](get-block]`
### Responses: `nothing`

This message contains raw Block bytes, as accepted by the `Block(byte[] from_bytes)` constructor.


## Get Transaction

### Response to: `nothing`
### Responses: `[Transaction Data](#transaction-data)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Transaction ID | string | ID of the required transaction. |
| Block Number | ulong | number of the block where the transaction was accepted. May be 0, in which case all blocks in the Node's current Redacted Window will be searched for the transaction id. |


## Transaction Data

### Response to: `[Get Transaction](get-transaction]`
### Responses: `nothing`

This message contains raw Transaction bytes, as accepted by the `Transaction(byte[] from_bytes)` constructor.


## Sync Wallet State

### Response to: `nothing`
### Responses: `[Wallet State](#wallet-state)`

This message has no fields.

Note: This Protocol Message is deprecated and will no longer be used.

## Wallet State

### Response to: `[Sync Wallet State](sync-wallet-state]`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Version | int | Version of the WalletState the sending Node is using. |
| Block Height | ulong | Current Block height at the start of the sync operation. |
| Count | long | Number of Wallets in the Wallet state at the start of the sync operation. |

Note: This Protocol Message is deprecated and will no longer be used.


## Get WalletState Chunk

### Response to: `nothing`
### Responses: `[WalletState Chunk](#walletstate-chunk)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Chunk Number | int | Number of the requested WalletState Chunk. |

Note: This Protocol Message is deprecated and will no longer be used.


## WalletState Chunk

### Response to: `[Get WalletState Chunk](#get-walletstate-chunk)`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Block Number | ulong | Current Block height - at the time of sending this WalletState chunk. |
| Chunk Number | int | Number of the WalletState Chunk. |
| Num Wallets | int | Number of Wallets in this chunk. |
| Wallets | WalletData | Data for each particular Wallet. |

Note: This Protocol Message is deprecated and will no longer be used.


## Get Presence List

### Response to: `nothing`
### Responses: `[Presence List](#presence-list)`

This message has no fields.


## Presence List

### Response to: `[Get Presence List](#get-presence-list)`
### Responses: `nothing`

This message contains raw PresenceList bytes, as accepted by the `PresenceList.syncFromBytes(byte[] bytes)` function.


## Update Presence

### Response to: `[Get Random Presences](#get-random-presences), [Get Presence](#get-presence))`
### Responses: `nothing`

This message contains raw Presence bytes, as accepted by the `PresenceList.updateFromBytes(byte[] bytes)` function.

Note: Multiple chunks of data may arrive - the `PresenceListupdateFromBytes` will handle it automatically.


## Get Balance

### Response to: `nothing`
### Responses: `[Balance](#balance)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Wallet address for which the balance should be retrieved. |


## Balance

### Response to: `[Get Balance](#get-balance)`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Wallet address for which the balance should be retrieved. |
| Balance | string | Balance encoded as a decimal number in string format. |
| Last Block Number | ulong | Current Block Height at the time of sending this balance information. |


## Keep Alive Presence

### Response to: `nothing`
### Responses: `nothing`

This message contains raw KeepAlive data as accepted by the `PresenceList.receiveKeepAlive(byte[] bytes)` function.


## Get Presence

### Response to: `nothing`
### Responses: `[Update Presence](#update-balance)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Wallet address for which the balance should be retrieved. |


## Get Block Transactions

### Response to: `nothing`
### Responses: `[Transactions Chunk](#transactions-chunk)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Block Number | ulong | Block for which transactions are requested. |
| Request All Transactions | bool | If true, both user and staking transactions are requested, otherwise only user transactions should be returned. |


## Transactions Chunk

### Response to: `[Get Block Transactions](#get-block-transactions)`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Transactions | TransactionRecord[] | A set of transactions, packed so it can be sent over the network. |

### Transaction Record

A transaction record consists of the following fields:

| Name | Type | Description |
| --- | --- | --- |
| Transaction Length | int | Length of the subsequent transaction data. |
| Transaction Bytes | Transaction | Raw byte data, as accepted by the `Transaction(byte[] from_bytes)` constructor. |


## Get Unapplied Transactions

### Response to: `nothing`
### Responses: `[Transactions Chunk](#transactions-chunk)`

This message has no data.


## Attach Event

### Response to: `nothing`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Type | int | Event Type code. |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Wallet address for which the events of type `Type` should be sent. |



## Detach Event

### Response to: `nothing`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Type | int | Event Type code. If the code is -1, then all registered events for this client are unsubscribed. |
| Address Length | int | Length of the subsequent Address field. If 0, all registered events for this client are unsubscribed. |
| Address | byte[] | Wallet address for which the events of type `Type` should no longer be sent. |


## New Block Signature

### Response to: `nothing`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Block Number | ulong | Height of the block for which there is a new signature. |
| Checksum Length | int | Length of the subsequent Checksum field. |
| Checksum | byte[] | Block Checksum for the Block at height `Block Number`. |
| Signature Length | int | Length of the subsequent Signature field. |
| Signature | byte[] | New signature for the block at height `Block Number`. |



## Get Block Signatures

### Response to: `nothing`
### Responses: `[Block Signatures](#block-signatures)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Block Number | ulong | Height of the block for which signatures are requested. |
| Checksum Length | int | Length of the subsequent Checksum field. |
| Checksum | byte[] | Block Checksum for the Block at height `Block Number`. |


## Block Signatures

### Response to: `nothing`
### Responses: `[Get Block Signatures](#get-block-signatures)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Block Number | ulong | Height of the block for which signatures are valid. |
| Checksum Length | int | Length of the subsequent Checksum field. |
| Checksum | byte[] | Block Checksum for the Block at height `Block Number`. |
| Signature Count | int | Number of signatures in this message. |
| Signatures | Signature[] | A list of signatures. |

### Signature structure

| Name | Type | Description |
| --- | --- | --- |
| Signature Length | int | Length of the subsequent Signature field. |
| Signature | byte[] | Signature data. |
| Address Length | int | Length of the subsequent Address field. |
| Address | byte[] | Wallet Address which provided the above signature. |



## Get Next Superblock

### Response to: `nothing`
### Responses: `[Block Data](#block-data)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Include Segments | ulong | Most recent Block Height for which the sender is willing to accept a Superblock, or 0 for no limitation. |
| Full Header | bool | Whether to send a full or an abbreviated header. |
| Checksum Length | int | Length of the subsequent Checksum field. |
| Checksum | byte[] | A Checksum for one of the blocks in the segment leading up to the requested Superblock. |


## Get Block Headers

### Response to: `nothing`
### Responses: `[Block Headers](#block-headers)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| From | ulong | Lower bound Block Height. |
| To | ulong | Upper bound Block Height. |



## Block Headers

### Response to: `[Get Block Headers](#get-block-headers)`
### Responses: `nothing`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Count | ulong | Number of Block Headers in the message. |
| BlockHeaders | BlockHeader[] | Block header data. |

### Block Header

| Name | Type | Description |
| --- | --- | --- |
| Header Length | int | Length of the subsequent BlockHeader. |
| Header | byte[] | Raw bytes as accepted by the `BlockHeader(byte[] from_bytes)` constructor. |


## Get Random Presences

### Response to: `nothing`
### Responses: `[Update Presence](#update-presence)`

### Fields:

| Name | Type | Description |
| --- | --- | --- |
| Type | char | Node type for the requested Presences. |