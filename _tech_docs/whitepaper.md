---
title: Ixian Whitepaper
---

# Introduction

## Summary

The IXIAN Ecosystem is comprised of three main IXIAN Products: The IXIAN DLT, the S2 Streaming network and the SPIXI Instant Messaging Client. This document is concerned primarily with the IXIAN DLT Product, but major features for all three sub-projects are listed to showcase the IXIAN Advantage.

### Ixian DLT
 * Consensus-based block acceptance that allows the network to dynamically adjust the requirement for block validity.
 * Fast and stable block validation and acceptance, based on the “Distributed Lockstep” method, which allows parallel computation by the distinct nodes.
 * Redacted Blockchain, which allows new nodes to join the network quickly and efficiently, without large downloads or massive recomputation.
 * Hybrid Proof-of-Work and Proof-of-Stake algorithm, which takes advantage of both methods where appropriate for new currency generation.


### Ixian S2
* A new-age distribution technology, which enables content creators to reach prospective users with unprecedented ease.
* Dynamically adjusting and re-routing to automatically handle any workload.
* Supply-and-Demand driven: The participating S2 nodes receive payouts for their broadcasting services based on the amount of data transferred. Market forces will increase or decrease the number of participants based on demand.
* End-to-end encryption: Private communication stays private. Messages cannot be decrypted except by the intended recipient(s), no matter how many S2 Nodes they may pass through.


### SPIXI Instant Messaging Client
* Absolutely no downtime because of the decentralized architecture. Backend is based on the IXIAN DLT ledger to provide ultimate decentralization and security.
* Cryptographically safe, which means that messages may only be read by the intended recipient.
* Multi-platform (PC, iOS, Android, others)
* Closely tied with the IXIAN DLT, enabling cryptocurrency wallet features right in the IM client.
* Messages are not stored in any one country or a central location. There is no legal entity which possesses all the messages, so governments cannot meaningfully demand “decryption keys”.


## Advantages of IXIAN Redacted DLT
* **Consensus-based block acceptance**, which allows the network to dynamically adjust the threshold for block validity. Incorrect or manipulative blocks are simply discarded by the network majority.
* **Limited blockchain size** means that new nodes may be created more quickly and with fewer resources. Storing the entire chain is entirely optional - the network can function with only the recent block history.
* **Hybrid-PoW-PoS model**. New currency is introduced into the network by a combination of Proof-of-Work and Proof-of-Stake models, allowing nodes to pick whichever suits them best.
* **Persistent**, immediate wallet state. Each node holds a copy of the currently valid state of the network, which is additionally verified by a specific field in each block. In this way, balance and wallet status lookups can be performed on any node extremely quickly. Because each block is signed by the majority of the network, this also implies that the majority of the network agrees on the current status and balance of each wallet.
* **High throughput**. Ixian was designed from the start to enable a high throughput of transactions, as well as rapid transaction confirmation. These requirements are mandated by the S2 network. Ixian therefore targets a 30-second block generation window, with actual block times between 30 and 45 seconds..


# Basic Network Concepts

## Node
A _Node_ in this document represents a piece of software which interacts with others over the public Internet and performs all the required calculations and manipulations to drive the Ixian DLT. There can exist multiple different implementations of the same technology (for example, in different programming languages), but as long as they all use the same protocol (i.e.: speak the same language), they can work together to drive the Ixian DLT and S2 networks.

For the following description of the Ixian protocol, a “DLT Node” is assumed to be the official Ixian DLT program, available at [The IXIAN website](https://www.ixian.io) or from [IXIAN GitHub project page](https://github.com/ProjectIxian/Ixian-DLT). This is referred to as the “Reference Implementation” and has the following characteristics:
* The primary programming language is C#, with certain parts implemented in C and some third-party libraries in either C++ or C.
* The target platforms include primarily Windows and Linux, but it is planned to increase support for other platforms, wherever .NET or Mono
are supported. See: [Mono-Supported Platforms](https://www.mono-project.com/docs/about-mono/supported-platforms/) for a list.
* The full and most up-to-date feature set of the Ixian DLT is always implemented in the reference implementation. This includes two distinct code branches:
..* **master**: is the stable branch with the current recommended version of the Ixian DLT node for mainstream use. This is what runs the  Ixian main network.
..* **development**: is the unstable branch with new features that are currently being worked upon. This branch may include code that is not  yet ready for production or has remaining bugs.
* The primary toolset for building the Ixian reference implementation is Microsoft’s Visual Studio. Mono is supported as a secondary toolset.

The node at present is executed as a console application – that is to say, when a node is started, it will display a console with some status information. It is possible to switch the status overview display into a detailed log output and back. Future versions of Ixian are intended to run as Windows Services or daemons under Linux (or equivalent technology, depending on the operating system).


## Node Communication
Ixian nodes communicate over the TCP/IP protocol, which is well-supported on the public Internet. Each node, upon startup, will open communication lines (sockets) to multiple other nodes. The addresses which a node reaches out to are cached in the node’s local storage, but if this information is not available, for example when the node starts for the first time, it will reach out to the Ixian Seed nodes. The seed nodes at the time of writing are listed in the table below:
* seed1.ixian.io - 193.95.221.67
* seed2.ixian.io - 90.157.141.46
* seed3.ixian.io - 104.244.72.236
* seed4.ixian.io - 199.195.249.51

These addresses are “baked” into the reference Ixian source code and therefore into the Ixian DLT binary. Users, wishing to start their own, separate networks based on Ixian technology, should change these values when compiling the source code. Once a TCP socket is established, the node will begin communicating with its own protocol, which is documented on the [GitHub Documentation Page](https://projectixian.github.io/tech_docs/protocol.html) Each Ixian node will reach out to multiple other nodes, chosen at random from a list of all known Ixian nodes, but it will also listen for incoming connections. All directly connected nodes are referred to as “neighbors”. The default TCP communication port is 10234, but may be changed either in the source code, the configuration file or on the command line when starting a particular node, if the default port is for some reason inappropriate.

Please note that each node must be reachable over the public Internet so that it may accept new communication requests from other nodes. This is a prerequisite for the smooth operation of the network. In the cases where proxy technologies, such as NAT are used, appropriate port-forwarding rules must be configured. For installation and configuration details, see [IXIAN Guides](https://projectixian.github.io/guides.html)

During a node’s lifecycle, it is expected that it will often terminate some of the connections to its neighbors and reconnect to new nodes. In this way, it is harder for the network to form isolated “islands” of nodes and thus come into a network-split situation. This feature also helps prevent certain types of network-based exploits.


## Information Stored Within a Node
Each node must hold some critical information in order to function. The reference implementation has the following structures always present in memory:
* The redacted window of the blockchain. See the chapter [Redacted History](redacted-history) for details on the redacted blockchain technology.
* Transactions, which are referenced by blocks in the redacted window.
* Unapplied transactions, which are waiting for inclusion into a block.
* Wallet State, which has details about all existing Ixian wallets and their balances, as well as other data.
* Presence List, which contains all currently reachable Ixian nodes, as well as S2, Spixi and other clients. In addition to keeping this data in memory, the reference node implementation will store the data in files on disk, which enables the node to restart rapidly after shutting down or failing. If the node is configured as a “Full history” node (see [Redacted History](redacted-history)), this on-disk structure will also contain all the blocks and transactions from the beginning of the Ixian blockchain.

For a detailed description of each data structure in the Ixian node, please see the documentation page at:
[IXIAN Programming Objects](https://projectixian.github.io/tech_docs/objects.html)


## Block
Because a Block is the most critical data structure of the Ixian DLT network, and is also referenced throughout this document, its structure is briefly explained here.

The various data fields contained in each block are documented below:

| Field | Type | Description |
| --- | --- | --- |
| blockNum | ulong | Sequential number of the block. |
| transactions | List<Transaction> | List of all transaction IDs which were included in this block.|
| signature | List<byte[][]> | List of all signatures on this block. |
| version | int | Block version. Current active version = 5. |
| blockChecksum | byte[] | A checksum of the block contents. Please note that the checksum does not include the signatures. (See: signatureFreezeChecksum) |
| lastBlockChecksum | byte[] | Checksum for the previous block in the chain. (blockNum - 1) |
| walletStateChecksum | byte[] | Checksum of the contents of the Wallet State. |
| signatureFreezeChecksum | byte[] | Checksum for the fifth-previous block's signature fields. This 'locks' the signature field for the block blockNum-5. |
| timestamp | long | Unix epoch value, representing the moment this block was generated. (One second precision.)|
| difficulty | ulong | PoW Difficulty value, representing the hashing difficulty to calculate a PoW Solution for this block.|
| powField | byte[] | PoW solution for this block. Note: this field is not transmitted over the network, because it can easily be obtained from the Transaction Pool.|

Each block includes several checksum values, which are calculated using the Cryptographic primitives documented at this address: [IXIAN Cryptographic Primitives](https://projectixian.github.io/tech_docs/crypto_primitives.html)

The checksum values are explained below:
* Block Checksum: This field is a cryptographically secure hash of the most important block fields: blockNum, transactions, version,  lastBlockChecksum, walletStateChecksum, signatureFreezeChecksum, difficulty.
* Last Block Checksum: This field repeats the checksum of the previous block. This indirectly confirms the previous block and prevents nodes from changing old blocks in order to introduce invalid transactions.
* Wallet State Checksum: This field contains the checksum value for the Wallet State.

You will note that the Block Checksum does not include all the fields in the block. Some fields are excluded from this checksum because of reasons given below:
* signatures: Because the Block Checksum is generated when the block is first created, the final signatures cannot yet be known. This field
is therefore expected to change and is “fixed” in a future block.
* powField: This field is created with a null (zero) value when a block is first generated and may be filled out later during the Ixian PoW process See [IXIAN Hybrid PoW](https://projectixian.github.io/tech_docs/hybrid_pow.html)
* timestamp: This accuracy field cannot be verified exactly by neighboring DLT nodes, so it is not included in the block checksum.


# Generating New blocks

## Choosing the Nodes
With each block generation cycle, only a small subset of nodes should generate the next block. In order to assure this, some of the fixed signatures are chosen in a pseudo-random manner. This information does not need to be communicated to the network, because it is calculated using a predetermined formula from existing information in the blockchain history, upon which all nodes already agree.

The election process uses these pieces of information:
* Time (in seconds) since the previous block was generated.
* List of all signatures from the 6th last block (not counting the block being generated)

This process yields the same result on all nodes which have a valid block chain, therefore the choice does not need to be communicated or agreed upon. In some rare cases where slight differences would cause another result (e.g.: edge cases due to minute clock differences), an invalid elected node will be determined, but the node will disregard its own generated block and accept one from the network, if it has sufficient signatures from other DLT nodes.

In the cases where a node incorrectly determines itself to be the elected node signer, the other nodes will reject this block and sign the valid one. Sometimes it will happen that a node will go offline shortly before it chosen to generate a block. The network will detect this when a block isn’t generated in some determined period of time and will elect a different node to do so. This will only cause a slight delay before the next block is accepted.


## Data Put Into the New Block
When the elected node generates a new block, it will fill its data fields with the values it considers appropriate. These include:
* Block Number: Blocks are numbered sequentially, so this is simply the most recent accepted block’s number plus one.
* timestamp: This is the “unix epoch” value (number of seconds since 1970-01-01 00:00:00) of the moment when the block was generated, with 1-second precision.
* difficulty: This is the estimated mining difficulty. The formula for calculating this is explained in [IXIAN Hybrid PoW](https://projectixian.github.io/tech_docs/hybrid_pow.html).
* version: this is the current version of the blockchain, which is hard-coded in the node’s configuration.
* lastBlockChecksum: This field is a copy of the previous block’s checksum field.
* transactions: The node will pick waiting transactions from its memory and include them in the generated block. The order of transactions picked is dependent on the implementation, but in the reference code oldest transaction are picked first. Note: Only the transaction IDs are included to reduce the block size.
* walletStateChecksum: The transactions chosen in the `transactions` field are temporarily applied to the currently valid Wallet State in order to calculate the next valid state. The checksum from the resulting state is put into the field `walletStateChecksum` in order to ensure that all nodes arrive at the same result when applying the listed transactions.
* signatures: this field initially contains only the elected node’s signature. As other nodes process and validate this block, they will add their own signatures if they agree with the results.
* powField: this field is left blank and used later in the PoW process. See [IXIAN Hybrid PoW](https://projectixian.github.io/tech_docs/hybrid_pow.html)
* signatureFreezeChecksum: This field ‘freezes’ signatures for a past block (currently 5th last block, not counting the block being generated), in order to prevent manipulating the signature history. 5 blocks (in ideal network conditions this should be about 2:30 minutes) is the accepted time when slower nodes may yet sign a block which has otherwise already been accepted by the majority. For details, see [Signature Freeze](signature-freeze).


## Block Distribution and Signing
The elected node generates a block with the data in the previous section, signs it with its own key and transmits it to its neighbors. The neighbors perform their own validation, which in reference implementation includes:
1. Basic verification, which includes:
..a. Block has been generated by the elected node
..b. Block number is sequential
..c. Block checksum matches its contents
..d. Currently present signatures are valid
..e. Signature Freeze field matches the data in the past block
..f. Difficulty is calculated according to the difficulty rules
2. Detailed verification:
..a. Transactions in the block are valid (signatures match wallets, amounts do not exceed balances, etc…)
..b. Wallet state checksum matches – this is done by temporarily applying the transactions to the currently valid Wallet state and the result compared with the field `walletStateChecksum`.

If the node finds all the checks in order, it will add its own signature to the list and inform its neighbors of the change. Only the new signature is transmitted to save network bandwidth. The neighbors will then propagate this signature until it has spread to all the Master nodes. If a specific neighbor has not yet received the currently worked-upon block, it will request it from the network. There is no need to transmit and re-transmit the data again.

Note: Until version 0.6.4 the entire block was transmitted in order to speed up block propagation.


## If the Generated Block is Invalid
If a malicious or corrupt node generates a block which is considered invalid by the Ixian protocol, such a block is simply discarded and the generator is added to a black list and eventually disconnected from the network. (The node which produced an invalid block is not immediately disconnected, as the error might have occurred due to a software bug, rather than malicious intent.) Because each node will perform its own validity checks, and it is expected that ‘honest’ or correct nodes outnumber the malicious or corrupted ones, only the proper block will accumulate enough signatures to be accepted by the network majority and invalid blocks will simply be discarded when encountered. In this way, the Ixian network can be considered “self-healing”.


## More About Signatures
The signature is simply a cryptographically encrypted `blockChecksum` value, created by the signing node’s private RSA key. See  [IXIAN Cryptographic Primitives](https://projectixian.github.io/tech_docs/crypto_primitives.html) for details. Because of this, a node’s signature ‘validates’ exactly the same fields as `blockChecksum`: blockNum, transactions, version, lastBlockChecksum,  walletStateChecksum, signatureFreezeChecksum, difficulty.


### Signature Freeze

The field `signatures` itself is validated by using a concept we called “Signature Freeze”. The reasoning leading to this procedure is as follows:
* Block is considered ‘accepted’ as soon as the number of signatures reaches the consensus limit. The consensus is defined as 75% of the active Master nodes. The number of active Master nodes is determined as the average number of signatures over the most recent five ‘frozen’ blocks (from 9th last block to 5th last block).
* The Master nodes are most easily identified as the nodes, which are participating in the consensus algorithm and signing blocks.
* If the signatures on a block were ‘frozen’ at the moment the block was accepted, the consensus would decrease by 25% on each block cycle, making exploits on the network trivial.
* Some nodes are slower and will not be able to supply a signature before the node is accepted every time. Some window to catch-up must therefore be allowed.

It was decided that a 5-block window when the signatures may still be added is acceptable. Each block therefore accepts new signatures for the five most recent blocks. When a new block is being generated, the elected node examines the signatures on the oldest ‘non-frozen’ block, which is the 5th last block from the end of the accepted chain, calculates a checksum of all the signatures it has accumulated so far and writes the result into the `signatureFreezeChecksum` field for the new block.

During the process of block acceptance, other nodes may inquire the generating DLT node for the exact contents of the 5th last block’s `signatures` field in order to align it with their own data. If it differs too much (or does not have enough signatures), the newly generated block is considered invalid and the elected node is suspected of attempting to manipulate signature history.

Note: After each node has signed the new block as valid, others may inquire it for the valid `signatures` field of the 5th last block, thus reducing the network traffic to the elected block.

With the acceptance of the new block, the `signatures` field for the 5th last block is considered ‘frozen’ and may no longer change. From this point forward, that field may be used as if it represents the currently active Master nodes on the DLT network.


### Choosing the valid signatures for the consensus
Because accepting all participating nodes' signatures for every generated block would prove to be prohibitively large once the network reaches a ceratain size, only a subset of the available signatures will be accepted. The number of signatures on every block is limited to 1000, and the
signatures are selected based on the following criteria:
_TODO_


# Redacted History

## Full History Is Not Always Needed
The original idea of the blockchain only included the concept of ‘transactions’. State of each individual wallet could be determined by following all the blocks from the genesis block to the present moment and tracking all changes to the wallet. Of course nodes could optimize the process by caching the resulting data, but this was purely done locally and not normally communicated to the
network.

In Ixian DLT we have decided to change this concept. The state of all wallets becomes an integral data structure for all Ixian nodes. See [IXIAN Data formats](https://projectixian.github.io/tech_docs/data_formats.html) for details. This state is synchronized from the Ixian Network when a node starts. The exact contents of the Wallet State are validated in each block that is accepted, through the `walletStateChecksum` field. Because each block contains a list of transactions, each node is able to apply the changes to the previous valid wallet state and examine the resulting wallet state to ensure it matches expectation.

Based on this concept, several statements can be made:
* Each node contains the status and balance of all known wallets (even if the wallet owner is not yet known)
* With each accepted block, the state of all wallets is validated again.
* Master nodes must synchronize the wallet state in full before they can begin operating.

Following from this, it is apparent that the full history of blocks is not required for the network to function. The current state of wallets is maintained and validated purely through the majority consensus. Some history is required for the essential blockchain operations. At the time of writing, this history has been set to 20000 blocks (in ideal network conditions, this would be about 7 days, if the block target of 30 seconds is generally reached). Nodes are allowed and able to store all the history – these kinds of nodes are called ‘Full history nodes’ and will in the future be incentivized by additional rewards for performing functions that require all history. (Some examples: Blockchain explorer, Regulatory enforcement of transaction history, Complete network/wallet state validation, light-weight node transaction look-up.)


## Superblocks
In order to defend against certain types of history-rewriting attacks which become possible with the IXIAN's Redacted History design, a concept of *Superblocks* has been introduced. A *Superblock* is a special type of DLT Block, which is inserted in place of every 1000th normal Block. The purpose of the *Superblock* is to validate the previous 1000 Blocks and their transactions. This allows Nodes and light-weight clients to quickly validate large parts of the Redacted History.


## Redaction Process
In the reference implementation, the blockchain is redacted if the chain is longer than 20000 blocks. Redaction of older blocks is deferred until a *Superblock* containing the obsolete Blocks is generated.

When a block is redacted, a few things happen:
* The block is removed from the Block Chain structure in memory.
* The transactions, which are a part of that block in the `transactions` field are removed from the Transaction Pool in memory.
* The block is removed from the on-disk storage (this step is skipped if the node is a ‘Full history node’)
The redaction process ensures that the relevant data structures (Block Chain and Transaction Pool) remain small and fast, thus allowing nodes with a low amount of storage to process the chain and contribute signatures.


# Generating New Currency

## The Problem to Solve
The Ixian block chain deviates from the more common approach by other DLT projects by not limiting the total IXI coin supply. Because currency is lost (wallet keys are deleted or forgotten), and because the demand for currency increases over time in any healthy economy, one of the two things must happen:
* More currency is generated and put into circulation.
* Value of the existing currency increases dramatically over time.


Because the Ixian project is aiming at a stable ecosystem where work and services are rewarded, rather than an investment-based economy, where hoarding the currency yields greater benefits, we wanted to keep the price of IXI coins relatively stable and low enough for normal usage. Therefore, the reference node implementation includes several methods for generating new currency. The actual rate at which new IXI coins are created is beyond the scope of this document and will be determined by the Ixian development board in the future.
 
Currency in the Ixian DLT is generated through three distinct processes:
* Genesis block (pre-mine): Several wallets were created when the Genesis block was generated. That block includes a certain number of IXI coins in the wallets. The coins are intended to bootstrap the Ixian economy by:
..* Providing initial coin supply for network operation
..* Cover the cost of promotions, exchanges, bounties, faucets, …
..* Funding the development of the technology
* Block Signing Award: Each participating Master node will receive a certain number of new coins with each block. The amount received is based on the targeted yearly inflation rate and the number of signing nodes.
* Proof-of-Work: In order to quickly generate starting funds for the general community to start participating in the Ixian network, a Proof-of-Work style system is in place which allows nodes to solve mathematical riddles in exchange for new IXI coins. This process is expected to run until a certain number of IXI coins are in circulation, then it will be deactivated. More details about this process can be found in the following document: [IXIAN Hybrid PoW](https://projectixian.github.io/tech_docs/hybrid_pow.html)

The exact values of these rewards, as well as the valuation of IXI coin in fiat currencies is beyond the scope of this document.

The reason these two methods were chosen is so that their shortcomings can be mitigated:
* Participation reward is generally slower and rewards nodes which have been actively participating in the network for some time. This is unsuitable for new members wishing to join the network.
* PoW is energy intensive and requires additional hardware in order to generate income. The power used to perform PoW is ‘wasted’ more often than not. We did not wish to encourage huge energy consumption in order to operate the Ixian DLT.

For these reasons, the initial currency is expected to be mostly generated via PoW (the pre-mine is planned to be a small part of the IXI coin supply within the first ten years). In the future, the reward method will generate the majority of the required new currency and the PoW system will be discontinued.
 
Another reason for PoW at the start of the blockchain is the so-called “node-investment”. If it is too easy to create nodes, a malicious actor could create thousands of DLT nodes with their own (invalid) validation logic and therefore take over the network operation. The entire network’s operation would be suspect from that point forward. As an additional security measure, legitimate nodes will refuse to accept these invalid blocks/transactions and will simply wait for the next correct block. In the worst case scenario, this will cause the legitimate part of the network to halt until the situation is resolved.

By requiring new DLT nodes to acquire initial funds, we have made starting a Master node more difficult (but not overly so), while starting many Master nodes is prohibitively expensive in terms of either CPU power or IXI coins.


## Hybrid Proof-of-Work
One of the bigger challenges when designing new DLT concepts is security. Based on the method of operation, it is critical that potential attackers do not have an easy way to subvert network operation. We must make it difficult for malicious users to alter the blockchain for their own benefit, or disrupt the service, while maintaining a low barrier to entry for legitimate users. We have named this concept the 'Difficulty problem'

Here is a non-comprehensive list of possible modes of operation:

* **Proof-of-Work (Bitcoin, most other cryptocurrencies)**: Barrier to exploitation is the required computing power to produce new, valid blocks. An attacker must be able to generate blocks, which will be accepted by the network, and do so faster than the rest of the network (51% attack). The mathematical problem, which is being solved to ensure the difficulty of this computation has not, as of yet, been found to have cryptographic weaknesses, therefore this approach is now considered safe.

* **Proof-of-Stake (Ethereum - UPCOMING)**: Here, the difficulty in subverting the network lies in the requirement to own pre-existing funds, before valid blocks may be generated and appended to the network. An attacker must own significant amounts of the digital currency in order to subvert the network operation. Proof of Stake is employed much more rarely than Proof-of-Work, but significant weaknesses of the approach have not, so far, been put forward. The approach is considered safe, because an attacker would need significant investment into the cryptocurrency in order to gain enough 'voting power' in the network to do harm.

* **Proof-of-Space, Proof-of-Capacity**: This approach requires commitment of significant amounts of memory or disk space in order to calculate valid blocks. This is similar to Proof-of-Work, whereas an attacker must make a large monetary investment into hardware before he or she would be able to subvert operations.

A constant is quickly revealed: A would-be attacker must invest into either hardware, processing time (cloud) or the targeted cryptocurrency, in order to manipulate the blockchain. Depending on the size of the network and the valuation of the currency, the investment quickly becomes prohibitively large.

More technical details on how IXIAN uses a combination of above methods can be found here: [IXIAN Hybrid PoW](https://projectixian.github.io/tech_docs/hybrid_pow.html)


# Presence List

## Keeping Track of the Network
Because the IXIAN DLT was primarily designed to support the operation of the S2 Streaming network and the SPIXI client, it was considered beneficial to include some presence information right in the DLT network. This will reduce the amount of book-keeping S2 Nodes will have to perform and make application development easier. The component, which performs this function is called the “Presence List”.

## Structure of the Presence List
Detailed structure can be found here: [IXIAN Programming Objects](https://projectixian.github.io/tech_docs/objects.html)

As a short reference, the following pieces of information are tracked by all DLT Master Nodes:
* Wallet address and public key (if available)
* One or more directly-connectable addresses (if any)
* One or more relay-addresses: A list of Relay S2 Nodes where this particular client may be found.
* Record age
* Unique device ID (Please note that this is not tied into the device hardware in any way - it is simply a randomly generated identifier.)

As clients cease communicating, their PL records will age and be removed from the list. This will keep the Presence List accurate with only the currently online clients. This function enables, for example, the SPIXI client to know where the messages should be delivered, even if the recipient has multiple connected devices on different networks.

