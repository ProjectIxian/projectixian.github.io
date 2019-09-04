---
title: Ixian DLT Whitepaper
---

# Contents
1. Introduction
2. Features
3. High Level Overview
4. Implementation Details
    1. Addresses
    2. WalletState
    3. Transactions
    4. Blocks
    5. Superblocks
    6. Redaction
5. Communication
6. Ixiac - Hybrid Consensus Algorithm
7. TIV/Light Clients
8. Quantum Resistance
9. Scaling plans
10. Conclusion


# 1. Introduction

Ixian is a decentralized, open-source crypto-platform, rather than just a simple DLT. This whitepaper explains the DLT aspect which, while critical to the operation of the network, comprises only a small part of the final Ixian vision. At the time of writing this document, the following components are envisioned as the basic implementation of Ixian:
* Ixian DLT (Distributed Ledger)
* Ixian S2 (P2P data transmission network)
* Spixi (Instant Messaging app which leverages Ixian DLT and Ixian S2 for decentralized functionality)

Further technical resources will be released alongside all Ixian sub-projects which will allow third party developers to connect and take advantage of the Ixian Platform for their own applications and technologies.

The goal of Ixian is to improve upon existing methods and solve some problems inherent in contemporary blockchain technology. We believe that DLT can be made better and this is our attempt to show that.



# 2. Features

The core Ixian Platform is comprised of three main Ixian Products: The Ixian DLT, the S2 Streaming network and the Spixi Instant Messaging Client. This document is concerned primarily with the Ixian DLT Product, but major features for all three sub-projects are listed to showcase the Ixian Advantage.

## Ixian DLT
 * Consensus-based block acceptance that allows the network to dynamically adjust the requirement for block validity. (Termed `Ixiac` algorithm.)
 * Fast and stable block validation and acceptance, based on the "Distributed Lockstep" method, which allows parallel computation by the distinct nodes.
 * Redacted Blockchain, which allows new nodes to join the network quickly and efficiently, without large downloads or massive recomputation.
 * Hybrid consensus and Proof-of-Work algorithms, taking advantage of the former for low processing cost of network operation and the latter for rapid currency generation in the initial phases.


## Ixian S2
* A new-age distribution technology, which enables content creators to reach prospective users with unprecedented ease.
* Dynamically adjusting and re-routing to automatically handle any workload optimally.
* Supply-and-Demand driven: The participating S2 nodes receive payments for their broadcasting services based on the amount of data transferred. Market forces will increase or decrease the number of relay nodes based on demand.
* End-to-end encryption: Private communication stays private. Messages cannot be decrypted except by the intended recipient(s), no matter how many S2 Nodes they may pass through.


## Spixi Instant Messaging Client
* Decentralized architecture ensures practically no downtime. Backend is based on the Ixian DLT ledger and Ixian S2 broadcasting network to provide ultimate decentralization and security.
* Cryptographically safe, which means that messages may only be read by the intended recipient.
* Multi-platform (PC, iOS, Android, others)
* Closely tied with the Ixian DLT, enabling cryptocurrency wallet features right in the IM client.
* Messages are not stored in any one country or central location. There is no legal entity which possesses all the messages, so no entity can meaningfully demand "decryption keys".


# 3. High-Level Overview

## Why is Ixian Different?
Ixian is a completely new implementation of the blockchain concept. We have termed our method the 'Redacted Blockchain' and it differs from contemporary DLT technology in several key areas:
* Full Wallets are stored with every DLT Master node
* Complete blockchain history is not required for normal operation
* Presence list with all DLT Master nodes is stored and updated by each Master node
* Signature Freeze, a method which allows nodes to keep signing already accepted blocks until a certain threshold (currently this is set to the most recent 5 blocks), but prevents tampering after that.
* Completely custom code base - Ixian is not a fork of an existing project
* Custom, new consensus algorithm for operation (`Ixiac`)
* Ixian was designed from the ground up to support a large number of users


## Encryption and Signatures

Ixian's primary signature algorithm is 4096-bit RSA with truncated SHA512 employed as the main hashing algorithm. The choice was influenced both by security, performance concerns and future proofing. While Elliptic-Curve Cryptography brings some advantages in terms of key- and signature size, the performance (in particular when verifying signatures) is too slow for the use cases required by Ixian.
In addition, some consideration has been put into future, quantum-resistant encryption and signature algorithms. No definitive decision has been made at the time of writing, but Lattice-based encryption and signature schemes appear to be a good candidate. Their key and signature lengths are comparable to modern RSA. Please see the chapter [Quantum Resistance](./dlt_whitepaper.html#quantum-resistance) for more details.


## Node
A _Node_ in this document represents a piece of software which interacts with others over the public Internet and performs all the required calculations and manipulations to drive the Ixian DLT. There can exist multiple different implementations of the same technology (for example, in different programming languages), but as long as they all use the same protocol (i.e.: speak the same language), they can work together to drive the Ixian DLT and S2 networks.

For the following description of the Ixian protocol, a "DLT Node" is assumed to be the official Ixian DLT program, available at [The Ixian website](https://www.ixian.io) or from [Ixian GitHub project page](https://github.com/ProjectIxian/Ixian-DLT). This is referred to as the "Reference Implementation" and has the following characteristics:
* The primary programming language is C#, with certain parts implemented in C and some third-party libraries in either C++ or C.
* The target platforms include primarily Windows and Linux, but it is planned to increase support for other platforms, wherever .NET or Mono are supported. See: [Mono-Supported Platforms](https://www.mono-project.com/docs/about-mono/supported-platforms/) for a list.
* The full and most up-to-date feature set of the Ixian DLT is always implemented in the reference implementation. This includes two distinct code branches:
  * **master**: is the stable branch with the current recommended version of the Ixian DLT node for mainstream use. This is what runs the Ixian main network.
  * **development**: is the unstable branch with new features that are currently being worked upon. This branch may include code that is not  yet ready for production or has remaining bugs.
* The primary toolset for building the Ixian reference implementation is Microsoft's Visual Studio. Mono is supported as a secondary toolset.

The node at present is executed as a console application - that is to say, when a node is started, it will display a console window with some status information. It is possible to switch the status overview display into a detailed log output and back. Future versions of Ixian are intended to run as Windows Services or daemons under Linux (or equivalent technology, depending on the operating system).


### Node Communication
Ixian nodes communicate over the TCP/IP protocol, which is well-supported on the public Internet. Each node, upon startup, will open communication lines (sockets) to multiple other nodes. The addresses which a node reaches out to are cached in the node's local storage, but if this information is not available, for example when the node starts for the first time, it will reach out to the Ixian Seed nodes. The seed nodes at the time of writing are listed in the table below:
* seed1.ixian.io - 193.95.221.67
* seed2.ixian.io - 90.157.141.46
* seed3.ixian.io - 104.244.72.236
* seed4.ixian.io - 199.195.249.51

These addresses are "baked" into the reference Ixian source code and therefore into the Ixian DLT binary. Users, wishing to start their own, separate networks based on Ixian technology, should change these values when compiling the source code. Once a TCP socket is established, the node will begin communicating with the network using Ixian's custom binary protocol, which is documented on the [Ixian network protocol](https://projectixian.github.io/tech_docs/protocol.html). Each Ixian node will reach out to multiple other nodes, chosen at random from a list of all known Ixian nodes, but it will also listen for incoming connections. All directly connected nodes are referred to as "neighbors". The default TCP communication port is 10234, but may be changed either in the source code, the configuration file or on the command line when starting a particular node, if the default port is for some reason inappropriate.

Please note that each node must be reachable over the public Internet so that it may accept new communication requests from other nodes. This is a prerequisite for the smooth operation of the network. In the cases where proxy technologies, such as NAT are used, appropriate port-forwarding rules must be configured. For installation and configuration details, see [Ixian Guides](https://projectixian.github.io/guides.html)

During a node's life cycle, it is expected that it will often terminate some of the connections to its neighbors and reconnect to new nodes. In this way, it is harder for the network to form isolated "islands" of nodes and thus come into a network-split situation. This feature also helps prevent certain types of network-based exploits.


### Information Stored Within a Node
Each node must hold some critical information in order to function. The reference implementation has the following structures always present in memory:
* The redacted window of the blockchain. See the chapter [Redacted History](./dlt_whitepaper.html#redacted-history) for details on the redacted blockchain technology.
* Transactions, which are referenced by blocks in the redacted window.
* Unapplied transactions, which are waiting for inclusion into a block.
* Wallet State, which has details about all existing Ixian wallets and their balances, as well as other data.
* Presence List, which contains all currently reachable Ixian nodes, as well as S2, Spixi and other clients.

In addition to keeping this data in memory, the reference node implementation will store the data in files on disk, which enables the node to restart rapidly after shutting down or failing. If the node is configured as a "Full history" node (see [Redacted History](./dlt_whitepaper.html#redacted-history)), this on-disk structure will also contain all the blocks and transactions from the beginning of the Ixian blockchain.

For a detailed description of each data structure in the Ixian node, please see the documentation page at:
[Ixian Programming Objects](https://projectixian.github.io/tech_docs/objects.html)


## Block

A block is a fundamental piece of the Ixian DLT technology. Each block contains IDs of transactions and links to the previous block and to its associated Wallet State through its checksum fields. These verify that all the transactions included in that particular block have been successfully applied, and also that the given block logically follows from the previous block.

The following must hold true:
* The 'Previous Block checksum' field must match the checksum of the previous block in chain (N-1; where N is the block number of the current block).
* Changes to the WalletState must all be valid and a `delta` WalletState checksum must be generated, which matches the `walletStateChecksum` field in the block.
  * The `delta` checksum contains only the Wallets which were changed in this block.
* If the block is a `Superblock`, the complete WalletState checksum (all Wallets), must be calculated and match the `walletStateChecksum` field in the Superblock.
* The current block's 'checksum' field must include all other checksum fields and some additional metadata in the block.

A block is considered valid if a certain number of nodes sign it with their private key, which corresponds to their Wallet address. The number of required signatures is determined by an algorithm, which is described in the further sections, but can be summarized here:
* A certain number of signers must also have signed the sixth last block - block number N-6. At the time of writing, 50% + 1 signatures are required in order for the block to be accepted.
* The number of total signatures must be some percentage of the last 'signature-frozen' block (block number N-6). (At the time of writing, this percentage is 75%)
* There is a maximum number of signers in order to keep the blocks from growing disproportionately large. (At the time of writing, this is 1000 signatures)
* Signatures, which occur on every block are slowly rotated out of use, based on their speed, so that all participating Master nodes get some reward. (This only comes into effect if there are more than 1000 signing Master nodes.)

Blocks are described in more detail in the [Ixian Programming Objects](https://projectixian.github.io/tech_docs/objects.html) document.


## Block cycle

Ixian DLT diverges from the more common PoW (Proof-of-Work) concept employed by most other blockchains in existence today. As a replacement, Ixian uses a consensus voting mechanism to accept and validate DLT blocks.
The basic algorithm functions approximately like this:
1. A Master node is elected to generate the next block.
2. The block is generated and signed by the generating node.
3. The block is broadcast into the DLT network to other Master nodes.
4. If the block is valid, other Master nodes add their signature to the block.
5. Once the block has accumulated enough signatures, it is considered accepted.
6. After a timeout period, the cycle repeats.

### Choosing the Nodes

With each block generation cycle, only a small subset of nodes should generate the next block. In order to assure this, some of the fixed signatures are chosen in a pseudo-random manner. This information does not need to be communicated to the network, because it is calculated using a predetermined formula from existing information in the blockchain history, upon which all nodes already agree.

The election process uses these pieces of information:
* Time (in seconds) since the previous block was generated.
* List of all signatures from the 6th last block (not counting the block being generated)

This process yields the same result on all nodes which have a valid blockchain, therefore the choice does not need to be communicated or agreed upon. In some rare cases where slight differences would cause another result (e.g.: edge cases due to minute clock differences), an invalid elected node will be determined, but the node will disregard its own generated block and accept one from the network, if it has sufficient signatures from other DLT nodes.

In the cases where a node incorrectly determines itself to be the elected node signer, the other nodes will reject this block and sign the valid one. Sometimes it will happen that a node will go offline shortly before it is chosen to generate a block. The network will detect this when a block isn't generated in some determined period of time and will elect a different node to do so. This will only cause a slight delay before the next block is accepted.


### Data Put Into the New Block

When the elected node generates a new block, it will fill its data fields with the values it considers appropriate. These include:
* Block Number: Blocks are numbered sequentially, so this is simply the most recent accepted block's number plus one.
* timestamp: This is the "Unix epoch" value (number of seconds since 1970-01-01 00:00:00) of the moment when the block was generated, with 1-second precision.
* difficulty: This is the estimated mining difficulty. The formula for calculating this is explained in [Ixian Optional PoW - Mining](https://projectixian.github.io/tech_docs/mining_pow.html).
* version: this is the current version of the block, which is hard-coded in the node's configuration. The version number of the subsequent block must be at least equal (or greater to) to this version number.
* lastBlockChecksum: This field is a copy of the previous block's checksum field.
* transactions: The node will pick waiting transactions from its memory and include them in the generated block. The order of transactions picked is exactly prescribed, see [Block transaction ordering](./dlt_whitepaper.html#block-transaction-ordering) for reference implementation priorities. Note: Only the transaction IDs are included to reduce the block size.
* walletStateChecksum: The transactions chosen in the `transactions` field are temporarily applied to the currently valid Wallet State in order to calculate the next valid state. The checksum from the resulting state is put into the field `walletStateChecksum` in order to ensure that all nodes arrive at the same result when applying the listed transactions.
* signatures: this field initially contains only the elected node's signature. As other nodes process and validate this block, they will add their own signatures if they agree with the results.
* powField: this field is left blank when the block is generated and is populated later when/if a valid PoW solution is found. See [Ixian Optional PoW - Mining](https://projectixian.github.io/tech_docs/mining_pow.html). Note: this field is not transmitted over the network and is maintained locally by each Node.
* signatureFreezeChecksum: This field "freezes" signatures for a past block (currently 5th last block, counting the block currently being generated), in order to prevent manipulating the signature history. 5 blocks (in ideal network conditions this should be about 2:30 minutes) is the accepted time when slower nodes may yet sign a block which has otherwise already been accepted by the majority. For details, see [Signature Freeze](./dlt_whitepaper.html#signature-freeze).

### Block transaction ordering

Waiting transactions are sorted by age (oldest first), then they are selected from the list and inserted into the block in groups as follows:
1. PoW Solution transactions
2. Multisig Wallet Change transactions
3. Multisig transactions
4. All other remaining transactions

The process stops when a maximum number of transactions are added to a block. At the time of writing this is defined as 2000 transactions.


### Block Distribution and Signing

The elected node generates a block with the data in the previous section, signs it with its own key and transmits it to its neighbors. The neighbors perform their own validation, which in reference implementation includes:
1. Basic verification, which includes:
   1. Block has been generated by the elected node
   2. Block number is sequential
   3. Block checksum matches its contents
   4. Currently present signatures are valid
   5. Signature Freeze field matches the data in the past block
   6. Difficulty is calculated according to the difficulty rules
2. Detailed verification:
   1. Transactions in the block are valid (signatures match wallets, amounts do not exceed balances, etc.)
   2. Wallet state checksum matches - this is done by temporarily applying the transactions to the currently valid Wallet state and the result compared with the field `walletStateChecksum`.

If the node finds all the checks in order, it will add its own signature to the list and inform its neighbors of the change. Only the new signature is transmitted to save network bandwidth. The neighbors will then propagate this signature until it has spread to all the Master nodes. If a specific neighbor has not yet received the currently worked-upon block, it will request it from the network. There is no need to transmit and re-transmit the data again.

Note: Until version 0.6.4 the entire block was transmitted in order to speed up block propagation.


### If the Generated Block is Invalid

If a malicious or corrupt node generates a block which is considered invalid by the Ixian protocol, such a block is simply discarded and the generator is added to a black list and eventually disconnected from the network. (The node which produced an invalid block is not immediately disconnected, as the error might have occurred due to a software bug, rather than malicious intent.) Because each node will perform its own validity checks, and it is expected that "honest" or correct nodes outnumber the malicious or corrupted ones, only the proper block will accumulate enough signatures to be accepted by the network majority and invalid blocks will simply be discarded when encountered. In this way, the Ixian network can be considered as "self-healing".

As an additional safety measure, if a block contains invalid transactions or results in an incorrect WalletState, the reference implementation will not accept the block, even if it has sufficient signatures.


## More About Signatures

The signature is simply a cryptographically encrypted `blockChecksum` value, created by the signing node's private RSA key. See  [Ixian Cryptographic Primitives](https://projectixian.github.io/tech_docs/crypto_primitives.html) for details. Because of this, a node's signature "validates" exactly the same fields as `blockChecksum`: blockNum, transactions, version, lastBlockChecksum,  walletStateChecksum, signatureFreezeChecksum, difficulty.

### Signature Freeze

The field `signatures` itself is validated by using a concept we called "Signature Freeze". The reasoning leading to this procedure is as follows:
* Block is considered "accepted" as soon as the number of signatures reaches the consensus limit. The consensus is defined as 75% of the active Master nodes. The number of active Master nodes is determined as the average number of signatures over the blocks N-17 to N-7, where N is the number of the block being verified.
* The Master nodes are most easily identified as the nodes, which are participating in the consensus algorithm and signing blocks.
* If the signatures on a block were "frozen" at the moment the block was accepted, the consensus would decrease by 25% on each block cycle, making exploits on the network trivial.
* Some nodes are slower and will not be able to supply a signature before the node is accepted every time. Some window to catch-up must therefore be allowed.

It was decided that a 5-block window when the signatures may still be added is acceptable. Each block therefore accepts new signatures for the five most recent blocks. When a new block is being generated, the elected node examines the signatures on the oldest "non-frozen" block, which is the 4th last block from the end of the accepted chain, calculates a checksum of all the signatures it has accumulated so far and writes the result into the `signatureFreezeChecksum` field for the new block.

During the process of block acceptance, other nodes may inquire the generating DLT node for the exact contents of the 5th last block's `signatures` field in order to align it with their own data. If it differs too much (or does not have enough signatures), the newly generated block is considered invalid and the elected node is suspected of attempting to manipulate signature history.

Note: After each node has signed the new block as valid, others may inquire it for the valid `signatures` field of the 5th last block, thus reducing the network traffic to the elected block.

With the acceptance of the new block, the `signatures` field for the 5th last block is considered "frozen" and may no longer change. From this point forward, that field may be used as if it represents the currently active Master nodes on the DLT network.


## Redacted History

### Full History Is Not Always Needed

The original idea of the blockchain only included the concept of "transactions". State of each individual wallet could be determined by following all the blocks from the genesis block to the present moment and tracking all changes to the wallet. Of course nodes could optimize the process by caching the resulting data, but this was purely done locally and not normally communicated to the
network.

In Ixian DLT we have decided to change this concept. The state of all wallets becomes an integral data structure for all Ixian nodes. See [Ixian Data formats](https://projectixian.github.io/tech_docs/data_formats.html) for details. This state is synchronized from the Ixian Network when a node starts. The exact contents of the Wallet State are validated in each block that is accepted, through the `walletStateChecksum` field. Because each block contains a list of transactions, each node is able to apply the changes to the previous valid wallet state and examine the resulting wallet state to ensure it matches expectation.

Based on this concept, several statements can be made:
* Each node contains the status and balance of all known wallets (even if the wallet owner is not yet known)
* With each accepted block, the changed wallets are validated by the WalletState delta checksum field.
* With each accepted Superblock, the entire WalletState is validated by the WalletState checksum field.
* Master nodes must synchronize the wallet state in full before they can begin operating.

Following from this, it is apparent that the full history of blocks is not required for the network to function. The current state of wallets is maintained and validated purely through the majority consensus. Some history is required for the essential blockchain operations. At the time of writing, this history has been set to 20000 blocks (in ideal network conditions, this would be about 7 days, if the block target of 30 seconds is generally reached). Nodes are allowed and able to store all the history - these kinds of nodes are called "Full history nodes" and will in the future be incentivized by additional rewards for performing functions that require all history. (Some examples: Blockchain explorer, Regulatory enforcement of transaction history, Complete network/wallet state validation, light-weight node transaction look-up.)

### Superblocks

In order to defend against certain types of history-rewriting attacks which become possible with the Ixian's Redacted History design, a concept of *Superblocks* has been introduced. A *Superblock* is a special type of DLT Block, which is inserted in place of every 1000th normal Block. The purpose of the *Superblock* is to validate the previous 1000 Blocks and their transactions. This allows Nodes and light-weight clients to quickly validate large parts of the Redacted History.


### Redaction Process

In the reference implementation, the blockchain is redacted if the chain is longer than 20000 blocks. Redaction of older blocks is deferred until a *Superblock* containing the obsolete Blocks is generated.

When a block is redacted, a few things happen:
* The block is removed from the blockchain structure in memory.
* The transactions, which are a part of that block in the `transactions` field are removed from the Transaction Pool in memory.
* The block is removed from the on-disk storage (this step is skipped if the node is a "Full history node")
The redaction process ensures that the relevant data structures (blockchain and Transaction Pool) remain small and fast, thus allowing nodes with a low amount of storage to process the chain and contribute signatures.


## Generating New Currency

### The Problem to Solve

The Ixian blockchain deviates from the more common approach by other DLT projects by not limiting the total IXI coin supply. Because currency is lost (wallet keys are deleted or forgotten) and because in any healthy economy the demand for currency increases over time, one of the two things must happen:
* More currency is generated and put into circulation.
* Value of the existing currency increases dramatically.


Because the Ixian project is aiming at a stable ecosystem which rewards work and services, rather than simply holding on to 'digital stock'. Hoarding the currency should not yield greater benefits and wanted to keep the price of IXI coins to remain relatively stable and low enough for normal usage. Therefore, the reference node implementation includes several methods for generating new currency. The actual rate at which new IXI coins are created is hard-coded into the reference implementation and changes based on the current block height to reach the specified targets. The rates are:
* 0.1% yearly inflation for the first month of operation
* 5% inflation from the second month until 50 billion IxiCash is generated
* 1% inflation from 50 billion until 100 billion IxiCash is generated
* 1000 IXIs per block after 100 billion IxiCash is generated

Currency in the Ixian DLT is generated through three distinct processes:
* Genesis block (pre-mine): Several wallets were created when the Genesis block was generated. That block includes a certain number of IXI coins in the wallets. The coins are intended to bootstrap the Ixian economy by:
  * Providing initial coin supply for network operation
  * Cover the cost of promotions, exchanges, bounties, faucets, ...
  * Funding the development of the technology
  * Team (Founder) rewards
* Block Signing Reward: Each participating Master node will receive a certain number of new coins with each block. The amount received is based on the targeted yearly inflation rate and the number of signing nodes.
* Proof-of-Work: In order to quickly generate starting funds for the general community to start participating in the Ixian network, a Proof-of-Work style system is in place which allows nodes to solve mathematical riddles in exchange for new IXI coins. This process is expected to run until a certain number of IXI coins are in circulation, then it will be deactivated. More details about this process can be found in the following document: [Ixian Optional PoW - Mining](https://projectixian.github.io/tech_docs/mining_pow.html)

The exact values of these rewards, as well as the valuation of IXI coin in fiat currencies is beyond the scope of this document.

The reason these two methods were chosen is so that their shortcomings can be mitigated:
* Participation reward is generally slower and rewards nodes which have been actively participating in the network for some time. This is unsuitable for new members wishing to join the network.
* PoW is energy intensive and requires additional hardware in order to generate income. The power used to perform PoW is "wasted" more often than not. We did not wish to encourage huge energy consumption in order to operate the Ixian DLT.

For these reasons, the initial currency is expected to be mostly generated via PoW (the pre-mine is planned to be a small part of the IXI coin supply within the first five years). In the future, the reward method will generate the majority of the required new currency and the PoW system will be discontinued.


### Block Acceptance Criteria

One of the bigger challenges when designing new DLT concepts is security. Based on the method of operation, it is critical that potential attackers do not have an easy way to subvert network operation. We must make it difficult for malicious users to alter the blockchain for their own benefit, or disrupt the service, while maintaining a low barrier to entry for legitimate users. We have named this concept the 'Difficulty problem'

Here is a non-comprehensive list of possible modes of operation:

* **Proof-of-Work (Bitcoin, most other cryptocurrencies)**: Barrier to exploitation is the required computing power to produce new, valid blocks. An attacker must be able to generate blocks, which will be accepted by the network, and do so faster than the rest of the network (51% attack). The mathematical problem, which is being solved to ensure the difficulty of this computation has not, as of yet, been found to have cryptographic weaknesses, therefore this approach is now considered safe for sufficiently large networks where it is infeasible for a single attacker to possess enough hashing power. __Smaller networks may still be taken over or exploited using the 51% attack.__

* **Proof-of-Stake (Ethereum 2.0 - UPCOMING)**: Here, the difficulty in subverting the network lies in the requirement to own pre-existing funds, before valid blocks may be generated and appended to the network. An attacker must own significant amounts of the digital currency in order to subvert the network operation. Proof of Stake is employed less frequently than Proof-of-Work. The approach is considered safe, because an attacker would need significant investment into the cryptocurrency in order to gain enough 'voting power' in the network to do harm. The downside of this method is that the most wealthy wallet owners are in a strong position to decide the future of the network, even overruling the majority of "weaker" participants.

* **Proof-of-Space, Proof-of-Capacity**: This approach requires commitment of significant amounts of memory or disk space in order to calculate valid blocks. This is similar to Proof-of-Work, whereas an attacker must make a large monetary investment into hardware before he or she would be able to subvert operations.

A constant is quickly revealed: A would-be attacker must invest into either hardware, processing time (cloud) or the targeted cryptocurrency, in order to manipulate the blockchain. Depending on the size of the network and the valuation of the currency, the investment quickly becomes prohibitively large.


### Ixiac Algorithm - Hybrid PoW

Ixian's implementation of block acceptance works by letting Master Nodes vote on blocks they consider acceptable. They do this by signing the block's checksum with their Wallet and broadcast their signatures to the network. As soon as a sufficient number of signatures are accumulated, that block is accepted by all participating Master Nodes and added to the blockchain. Invalid or fraudulent blocks (those, which contain illegal transactions), will not garner enough legitimate signatures to be accepted.

The 'PoW' part of Ixiac is a planned method for inclusion to the PL (Presence List). Because the PL is a critical data structure, only valid entries should be submitted. A variant of a PoW problem is planned to be required before any Node is accepted to the PL and thus, the network.
The difficulty of the small PoW problem will be scaled based on the type of the node:
 * More difficult problem for Master Nodes
 * Medium difficulty for S2 Nodes
 * Simpler difficulty for Client Nodes

The solution will have to be re-calculated periodically for the specified node to remain in the Presence List. This makes joining a large number of Master Nodes infeasible, while not requiring a lot of CPU time and energy per block and not overly favoring Master Nodes with more processing power.



## Presence List

### Keeping Track of the Network

Because the Ixian DLT was primarily designed to support the operation of the S2 Streaming network and the Spixi client, it was considered beneficial to include some presence information right in the DLT network. This will reduce the amount of book-keeping S2 Nodes will have to perform and make application development easier. The component, which performs this function is called the "Presence List".

### Structure of the Presence List

Detailed structure can be found here: [Ixian Programming Objects](https://projectixian.github.io/tech_docs/objects.html)

As a short reference, the following pieces of information are tracked by all DLT Master Nodes:
* Wallet address and public key (if available)
* One or more directly-connectable addresses (if any)
* One or more relay-addresses: A list of Relay S2 Nodes where this particular client may be found.
* Record age
* Unique device ID (Please note that this is not tied into the device hardware in any way - it is simply a randomly generated identifier.)
* Cryptographic signature by the address owner, to prevent tampering or falsifying presence information

As clients cease communicating, their PL records will age and be removed from the list. This will keep the Presence List accurate and populated by the currently online clients only. This function enables, for example, the Spixi client to know where the messages should be delivered, even if the recipient has multiple connected devices on different networks.


# 4. Implementation Details

## 4.1. Addresses

Ixian addresses are internally represented as sequences of bytes, or sometimes as strings of alphanumeric characters, such as `42sRHmLArDsi3cqg93FfnV8yfS7ANjZNFaWajc949GhaV9FLS63vrFWjdk1haFfwh`, which is a Base58-checked encoding of the byte sequence.
An address uniquely represents a single wallet in the Ixian DLT.

The basis for generating a wallet address is an RSA public key together with an additional binary value, called the `address nonce`. Each public key can generate infinitely many different address by using distinct `address nonce` values. Due to this design, it is generally impossible to match an address to an appropriate public key, or another address, *until a transaction for that wallet appears on the blockchain*. When funds are spent from a wallet, the correct public key must be made known so as to allow verification of signatures.

A `nonce` value is exactly 16 bytes long, with the only exception when the address being generated represents the `Primary Address` for that specific public key. This Primary Address is calculated with a null `nonce` value.

Nonce values could be completely random, but that would require implementations to store (and backup) these values, since it would not be possible to recreate them in any way. The reference implementation uses the private part of the key to generate a `base` SHA512SQ truncated hash value, which represents the first nonce and therefore the first additional address generated from the public key. More addresses (further nonce values) are generated by always appending the last-used (most recent) nonce to the base nonce and hashing the resulting binary array again.
In this way, it is not possible for any user except the owner of the private key to predict new addresses, while allowing the owner to re-generate them from nothing more than the public/private key pair. Only the first wallet backup is strictly required to regain access to all the addresses.

Despite the public key being known, it is impossible to connect which wallet addresses belong to that key, as long as the wallet balance is not spent.

More details about the Address structure and handling can be found in the *Data Formats*, *Programming Objects* and *Cryptographic Primitives* documents.



## 4.2. WalletState

Ixian DLT nodes hold the state of all Wallets with a nonzero balance, Multi-Signature definition, or user provided data. The WalletState is summarized through a checksum field in every Ixian Block, which confirms that the resulting Wallet State (after applying all the Transactions in that Block) is correct. (See the field `walletStateChecksum` in the document *Programming Objects*.)

In order to perform Block and Transaction validations, the Wallet State must be able to temporarily apply Transactions and later discard these changes. The current implementation uses a mechanism of "snapshotting", which works approximately like this:
1. The Block Processor calls the `snapshot()` function on the Wallet State to begin the process.
2. Any changes to Wallets are made to a separate memory region, leaving the original Wallets intact.
3. Reading from the Wallet State includes:
   1. Checking, if the wallet was changed since `snapshot()` - in this case it is present in the separate memory region.
   2. If the wallet was not found in the separate memory region, it is retrieved as normal. (It was not changed since `snapshot()`.)
4. After any validation and tests are completed, the Block Processor calls the function `revert()` on the Wallet State.
5. Separate memory region is discarded, effectively returning the Wallet State to the condition it was in before the `snapshot()` function was called.

In an upcoming version, this model will change to what we call "Wallet State Journal". The WSJ functions in a slightly different manner:
1. The Block Processor calls the `beginTransaction()` method on the Wallet State.
2. Metadata about the starting point is saved in memory.
3. Any changes to Wallets are made on the Wallet State.
   > 3.1. In addition to changes being made to the wallets, a log (or 'journal') of all changes is stored in a binary format separately.
4. Reading from the Wallet State happens as normal.
5. After validation and tests are done, the Block Processor calls the function `revertTransaction()` on the Wallet State.
6. The binary log (the journal) is played backward until it reaches the point where `beginTransaction()` was called.

The WSJ approach is somewhat more complicated than the snapshotting method, but it allows for certain advantages:
* Because a binary log of changes exists, the WalletState can be stored to disk without it having to be locked for modifications during the saving process.
* When synchronizing the WalletState to fresh nodes, no locking or caching needs to be performed.
* 'Dirty' or corrupt WalletState, which is saved or transmitted as mentioned above, can be put in a consistent state by replaying the journal.
* When sending updates to the Wallet State, nodes can simply exchange the (highly compressed) WSJ data.
* Block reorganization can be performed more easily.



## 4.3. Transactions

The cornerstone of any DLT are the transactions it enables on the constituent Wallets. In Ixian, there are several different Transaction types at the moment:
* Normal transaction: Allows transfer of funds from one or more source Wallets to one or more target Wallets. The source Wallets must all belong to the same public/private key pair, but the destination wallets can be completely different. Public key must be made known for the source Wallets, but not for destination Wallets. In fact, the destination Wallets need not even exist before this transaction gives them funds.
* Multi-signature transactions: There are several distinct types of multi-signature transactions in Ixian:
  * Multisignature "Change" transactions: Which allow modifying Wallets to make them into Multi-signature Wallets, or modifying Multi-signature Wallets to turn them back into normal wallets and also transactions to set the required minimum number of signatures in order to spend funds from a Multi-signature Wallet.
  * Multisignature "Spend" transactions: Which allow funds to be withdrawn from a Multi-signature Wallet. No special transaction is required to _deposit_ funds into a Multi-signature wallet.
* Staking transactions: The naming is a little misleading, because recent versions of Ixian no longer use PoS (Proof-of-Stake) mechanisms for distributing new coins. These transactions identify the nodes which participate in the Ixian Consensus and Signing algorithm and award them a certain amount of coins, thus increasing the total supply and rewarding participating DLT Nodes.
  * PoW transactions: These transactions provide a solution to the PoW problem and award the signer a certain number of IxiCash. It is expected that the PoW mechanism will be deactivated after 5-10 years from the network start, once sufficient initial capital has been generated.
  * Genesis transactions: These transactions do not normally appear on the blockchain. They were used to create the initial Ixian foundation wallets and a number of pre-mined IxiCash to be used for Ixian project development and team rewards.


### Addresses in Transactions

In order to verify that a Transaction's signature is valid, all DLT Master nodes require the public key associated with the withdrawal Wallet (or Wallets). This public key is rather large (4096 bits), so it is not always included in the Transaction. It must only be included if the withdrawal Wallet has never been spent/used in a transaction before and thus its public key is unknown. After the first time a Wallet is used as the source Wallet, the appropriate public key becomes part of the Wallet State on all Master nodes. From that moment forward only the source Wallet Address has to be sent in Transactions.

Because all withdrawal Wallets must belong to the same public/private key pair, it is sufficient to list only the (shorter) address `nonce` values and the respective amounts, since full Wallet addresses can be easily calculated from the public key and nonce value.

Each transaction can deposit funds into multiple destination Wallets. These do not need to belong to the same public key. The list of destinations must include full addresses and amounts per address. The total deposited amount must match the total withdrawal amount minus the transaction fee.



## 4.4. Blocks

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

Each block includes several checksum values, which are calculated using the Cryptographic primitives documented at this address: [Ixian Cryptographic Primitives](https://projectixian.github.io/tech_docs/crypto_primitives.html)

The checksum values are explained below:
* Block Checksum: This field is a cryptographically secure hash of the most important block fields: blockNum, transactions, version, lastBlockChecksum, walletStateChecksum, signatureFreezeChecksum, difficulty.
* Last Block Checksum: This field repeats the checksum of the previous block. This indirectly confirms the previous block and prevents nodes from changing old blocks in order to introduce invalid transactions.
* Wallet State Checksum: This field contains the checksum value for the Wallet State.

You will note that the Block Checksum does not include all the fields in the block. Some fields are excluded from this checksum because of reasons given below:
* signatures: Because the Block Checksum is generated when the block is first created, the final signatures cannot yet be known. This field
is therefore expected to change and is "fixed" in a future block.
* powField: This field is created with a null (zero) value when a block is first generated and may be filled out later during the Ixian PoW process. See [Ixian Optional PoW - Mining](https://projectixian.github.io/tech_docs/mining_pow.html)
* timestamp: This accuracy field cannot be verified exactly by neighboring DLT nodes, so it is not included in the block checksum.



## 4.5. Superblocks

Superblocks are the method which allows us to safely and deterministically remove old entries from the blockchain. The length of the chain kept by all Master nodes is referred to as the "Redaction Window" and is set to 20000 blocks (assuming approximately 30s block intervals, this would amount to about 7 days). After that time blocks become eligible for removal.

Every thousandth (1000th) block is a _Superblock_ and instead of unapplied transaction data, a Superblock contains a list of blocks and their checksums which have been accepted since the previous Superblock.

For example:

| Block Number | Superblock | Contents |
| --- | --- | --- |
| ... | ... | ... |
| 998 | No | Transactions for block 998. |
| 999 | No | Transactions for block 999. |
| 1000 | Yes | checksums for blocks 1-999. |
| 1001 | No | Transactions for block 1001. |
| ... | ... | ... |
| 1999 | No | Transactions for block 1999. |
| 2000 | Yes | checksums for blocks 1001-1999. |
| 2001 | No | Transactions for block 2001. |
| ... | ... | ...|

After a specific block (and thus its transactions) is more than 20000 blocks in the past, it is eligible for redaction, but it is not immediately removed. The redaction process takes place when the next Superblock is generated (this implicitly means that the oldest Superblock in the Redacted Window becomes the 20000th block from the top of the chain). At that point, blocks lower than the oldest Superblock on the chain and their transactions are removed.

Note: Superblocks are removed from the active chain, but stored elsewhere. They incur a slight overhead on all Master nodes which grows over time. A pruning method for Superblock data is planned for a future release, but at least 11-years worth of Superblocks must be kept in history. The reason for this decision is that - together with _Full History Nodes_, Superblocks can be used to identify and help search for relevant transactions as part of some audit or different inquiry. Most financial legislation mandates keeping financial records for a period of 11 years, so that value was also chosen for Ixian DLT's historical data.

### Safer initial synchronization

In traditional blockchains, nodes acquire all blocks ever generated from the genesis (or first) block onward. They can verify that the chain is complete and hasn't been tampered with by querying several other nodes and comparing the most recent block's checksum, then following the chain backwards all the way to block 1.
This is not possible in a redacted blockchain, since most nodes do not have the fully history and the ones which do might require payment before returning that information, so Superblocks provide similar functionality. The genesis block is included in the official Ixian executable and Superblocks form an unbroken chain from that first block all the way to the present (the latest Superblock will by definition be at most 999 blocks in the past and can thus be queried from multiple nodes). Once the new node acquires Superblocks within the Redacted Window, it can verify the intermediate blocks against records in the Superblocks and thus be reasonably sure that they haven't been tampered with at any point, even if the complete history cannot be efficiently examined.


## 4.6. Redaction

One of the key distinguishing features of Ixian is the ability to quickly and easily remove unnecessary data from most Master Nodes. The redaction process happens at the end of the blockchain (that is - the oldest blocks in the 'Redacted window'). This specification requires that at least 20000 blocks remain in memory at all times for the purposes of securing the network and recovering from possible forks due to communication problems.
Once blocks are older than 20000 from the current `Block Height` (the number of the most recently accepted block), they are eligible for removal.

### Redaction and Superblocks

The redaction process is closely tied with the concept of Superblocks and those allow us to trim the chain and prevent certain types of optimizations. Whenever a Superblock is encountered and becomes eligible for redaction, the normal blocks immediately preceding it can be removed entirely (together with transactions which were applied in those blocks). This means that redaction can only happen at 'round' block numbers (multiples of 1000).
Superblocks form an independent chain by liking the current Superblock's checksum field with the previous Superblock's checksum field. An additional advantage of this approach is that older blocks and transactions can be retrieved piecemeal, as required, without downloading the entire chain.

### Full History

Some nodes may elect to maintain a complete history of the blockchain, even though it is not required. Those are called the `Full History Nodes`. The reasons for keeping a complete history may include:
* Long-term verification against certain types of attacks
* Regulatory/legal obligations to maintain financial history
* Extra reward, whenever a user wishes to look up historical data beyond the current 20000 blocks

Because the Superblock chain uniquely identifies intermediate blocks and transactions with appropriate checksums, it is possible to retrieve only a part of the full history (or even a single block), and still be reasonably certain that the acquired block is valid and correct, and that the specified transaction really was included at that point in time. No cross-referencing between different Full History Nodes is required.

# 5. Communication

Ixian uses TCP/IP sockets for communication between nodes. At the time of writing, IPv6 is not fully supported, so users are required to use NAT or a similar technology to provide Internet connectivity to any Master nodes they are running. The default port for an Ixian DLT node is TCP 10234, which may be changed either through the node's command line or in a configuration file.

At the time of writing, this custom protocol is not encrypted, except where any message payload is encrypted by itself, but future versions will employ some sort of TLS (Transport Layer Security) to provide additional protection.

The exact packet format and possible messages are described in the document: [Ixian Network Protocol](https://projectixian.github.io/tech_docs/protocol.html)


# 6. Ixiac - Hybrid Consensus Algorithm

One of the critical considerations when starting a DLT project such as Ixian is user adoption. We wanted to make the platform as open and easy to join as possible. Absolutely anyone interested in the project should be able (with the bare minimal hardware and time investment) to set up their own DLT and S2 nodes and begin participating. Ixian's consensus algorithm relies on sufficient numbers to thwart potential attacks or abuse, so we wanted as many people as possible to join.

The barrier to entry must therefore be simple to surmount for regular users, yet problematic should a bad actor attempt to bring up hundreds, or thousands of nodes online in a short period of time. Ixian's barrier to entry for DLT nodes at the moment is monetary - a Node must possess a certain number of Ixi coins before it can participate as a Master node. These coins may be obtained through different means:
* Purchase or gift from an existing Ixian user
* Trade through a cryptocurrency exchange which supports Ixian
* Mine the coins on low-cost hardware

Eventually this model will change and Master Nodes will no longer require a minimum balance to process the blockchain and add signatures, but there will be a small PoW-type problem in order to generate a valid PL entry, which will preclude a single entity from adding a large number of malicious nodes.

Ixian enables users to generate currency by solving mathematical problems. The amount required is relatively simple to achieve even for old or low-cost hardware, yet sufficiently limiting if someone wishes to create many Master nodes at once. The Ixian Blockchain doesn't require this work - it will keep moving on regardless based on the Ixian Consensus algorithm - but the option of PoW allows generating sufficient initial currency for the network to become viable to a wide range of users, and at the same time precludes us from needing to generate all those coins in the Genesis block. A beneficial side effect of this scheme is that IxiCash should be more evenly distributed between early adopters.


# 7. TIV/Light Clients

TIV (Transaction Inclusion Verification) is a method through which light clients can check in a trustless system if their transaction was successfully included in the blockchain without having to download and verify the full DLT chain themselves.

## Problem to be solved

As the size of the blockchain grows, it becomes more and more infeasible for clients and light wallets to download the entire blockchain and keep it updated from the network. In particular, as the transaction volume increases, the amount of data required would put undue pressure on smaller clients (mobile, embedded, constrained devices), or users with limited data transfer (mobile or restrictive ISP). A solution is required to minimize the required data transfer and enable the client to verify that interesting transactions have been included in the blockchain. "Interesting transactions" are defined as all transactions the client is interested in (to or from the client's address, or other addresses the client is following).

This specification defines a procedure clients can use to verify for transaction inclusion in the Redacted Window, without having to download the entire chain with all its blocks and all applicable transactions.

## Minimal required block headers

In order to calculate and verify the chain of block checksums, an Ixian node (both Master Node and Client), must obtain several fields from each block's header, starting from the most recent block and working backwards. The target block is the block where the transaction was included. This information can be acquired from all master nodes along with the most recent block header.

### Fraud prevention

In order to prevent a malicious node from feeding the client incorrect history, the client must connect to multiple master nodes and compare the returned block checksums for the most recently accepted block. If all master nodes agree on the correct value, then the block header is considered valid. If the checksums differ, the client should reconnect to different master nodes (possibly bootstrapping through a seed node) and try again.
The block number where the interesting transaction is included can be obtained in the same way - by multiple verification. In order to speed up repeated look-ups, the client implementation may store block header data locally, after it has been verified from multiple sources. The maximum amount of data depends on the redacted window size and the block header size. At the time of writing, the block header size is calculated to be between 500 and 90000 bytes, depending on the number of transactions per block. With the redacted window of 20000 blocks, the cache size is estimated between 9.5 MB and 1.7 GB The latter may be prohibitive for embedded or mobile clients, so the number of cached block headers may be reduced to fit acceptable platform limits.

### Following the chain backward

Starting from the most recent block, the client then works backwards along the chain, requesting block headers and comparing the "lastBlockChecksum" field of the newer block with the "blockChecksum" field of the older block. This process may be accelerated by master nodes sending block headers to the client in chunks. The client can receive the entire chain from a single node, or request different chunks from different Master nodes to expedite the download.

### Superblocks:

Once the process of tracking backwards reaches the nearest Superblock, it is no longer necessary to fetch each regular block header. If the target block exists between the most recent Superblock and the previous Superblock, the client can request the target block's header and TXID field directly and verify the checksum using the list in the Superblock. If the target block is further back, the client only has to request each previous Superblock, until the target block is included in a Superblock.

### Following the chain forward
In some cases the client might have part of the blockchain cached (headers only). New blocks keep being added, but the client does not need to be aware of that process. Should, later on, the client wish to verify inclusion of a more recent transaction, the chain can also be followed forward from the client's cache. This may be done through only one Master node, but at the end of the process the client must verify the final block checksum against multiple nodes, to prevent a malicious Master node from tinkering with the chain and feeding the client false information in this scenario.

## Required fields

The fields, required by the client to generate and verify the block checksums, are:

| Field name | Purpose |
| --- | --- |
| Block number and version | Holds the block height of the specific block and allows easier traversal. A block number is a unique identifier of the block. |
| Previous block checksum | Establishes verification that the current block really does follow some previous block and that the chain hadn't been forked between them. |
| Wallet state checksum | Used by Master nodes to verify that applying transactions results in the same state of all Wallets. Not used for TIV, but included because it is a part of the block header. |
| Signature freeze checksum | Used by Master nodes to lock signatures of past blocks and prevent tampering of the chain. Not used for TIV, but included because it is a part of the block header. |
| Transaction list | List of transactions included in the given block. This is where the confirmation that a transaction was included comes from. |

## Proof of Inclusion
The client follows the block headers backwards (and preferably caches this information) until it reaches the block where the interesting transaction is contained. Upon reaching the target block header, the client then requests the list of transaction IDs for that block from any Master node. The list of transaction IDs provides part of the block header's checksum. It would be infeasible for malicious nodes to generate a fake list of transactions so that it would match the required node signature. Similarly, it would be infeasible to calculate false block headers so that they would correctly form a valid chain of checksums.

## Subsequent Lookups
If the client requires multiple look-ups within redacted window time, caching is heavily recommended. The client then only has to follow the chain backwards from the latest cached block header.  If the sought transaction is in a block, for which the client already has confirmed block header data in its local cache, it only needs to ask the node for the transaction list for that particular block in order to confirm inclusion.

# 8. Quantum Resistance

## Emergence of Quantum Computing

During Ixian's inception there was some thought given to the looming emergence of quantum computers (true, universal quantum computers, not simple *quantum annealers*), which would be able to break traditional RSA cryptosystems. In particular, RSA is projected to be vulnerable to a quantum algorithm called *Shor's algorithm*, but the estimated qubit requirement is, for the moment, prohibitively large. At the time of writing, research quantum computers have demonstrated capacities around 50 qubits.
The trend so far seems consistent with *Moore's Law* and useful quantum computers are predicted within the next decade. Current research indicates that large numbers may be efficiently factored using Shor's algorithm by using roughly twice the number of qubits as there are bits in the number.
Ixian uses 4096-bit RSA cryptography, which makes it somewhat resistant to the next few generations of quantum computers.

## Algorithms and Quantum-Resistance

The most problematic algorithms in use by Ixian are the signature schemes (RSA) and the hashing functionality (SHA). These may be broken in time using a variant of the *Shor's algorithm* and *Grover's algorithm* respectively and a plan of action has been established against that eventuality.

At the time of writing, no practical quantum attack on AES has been proposed, so AES with sufficient key sizes (above 128 bits) is considered quantum-resistant. Ixian uses AES256 for all encryption operations and most modern hardware implements this standard, reducing the CPU load.

## Mitigation for RSA

Despite the (seemingly) distant danger, research is already being done in the field of *Post-Quantum Cryptography*. Several schemes have already been proposed to mitigate or nullify the advantage of quantum algorithms. Notable examples include (in the order of most interesting for Ixian to least interesting):
 * Daniel J. Bernstein, et al: [Post-quantum RSA](https://eprint.iacr.org/2017/351.pdf), which would be a drop-in replacement for the current system and would require very little hardware or software changes.
 * Lattice-based Cryptography: [CRYSTALS](https://pq-crystals.org/dilithium/index.shtml)
 * Another Lattice-based scheme: [FrodoKEM](https://frodokem.org/)

## Mitigations for SHA

A quantum algorithm for breaking SHA and similar hashing functions is known as the *Grover's algorithm* and, as of current research, reduces the collision search difficulty to approximately sqrt(d), where d is the number of output bits. SHA256 (SHA2-256) is considered quantum-resistant, but we have chosen SHA2-512 to further increase the margin for Ixian. If quantum CPUs appear faster than anticipated, SHA3 with sufficient key sizes (above 256) and based on Keccak is also considered quantum-resistant. The addition of a key into the hash function involves some changes for the Ixian code base, so additional avenues are also being explored, such as the appearance of a new, quantum-resistant hashing scheme.


# 9. Scaling plans

## Main Factors of Scale - DLT

As the blockchain projects grow, there are several key values which will continue to expand - some in a linear fashion with time and others through participation and use. Some fields, such as Block Height numbers, possible Wallet Addresses, block checksums, WalletState checksums, are large enough to never be a problem. For example, the current addressing scheme uses 360 significant bits for each address. It is essentially impossible to exhaust this space even with many decades of operation.

The problematic values for scaling the technology, and their reasons are listed below:

| Factor | Direct Impact | Secondary Impact | Can be distributed? | Description |
| --- | --- | --- | --- | --- |
| Number of Master Nodes | Number of signatures per block | Blockchain Size, Node Bandwidth | No | More Master Nodes means more signatures before each block is considered accepted, which increases the amount of data in each block and places strain on the network and storage systems of all nodes. |
| Number of Clients | Network Bandwidth | Size of the Presence List | Yes, in a future version | More clients means that each Master Node will have to handle more network connections and use more bandwidth. In addition, the Presence List memory/storage footprint grows, as does the required CPU time to maintain and prune the Presence List. |
| Number of Wallets | Wallet State size | Wallet State Memory Footprint, CPU | Difficult, no plans yet | More Wallets does not directly increase the bandwidth requirement for Master Nodes, except during initial synchronization, but it will require more CPU upkeep and a larger memory structure to keep this data. |
| Transactions | Network Bandwidth | CPU, Blockchain Size | Difficult, no plans yet | Processing more Transactions per second makes the blockchain more usable, but it significantly increases the bandwidth requirement per Master Node, as well as the CPU time and Blockchain storage requirements. |

The Ixian team have put significant thought into potential avenues for scaling and while certain advances are anticipated in hardware and technology, they will likely not be fast enough to match the potential growth of the project. Other solutions have been proposed and are constantly being evaluated for future implementations. In particular, these solutions are planned, but not implemented yet, or are implemented partially:
 * Number of Master Nodes: Block signature count is capped at a certain number (1000, at the time of writing). Faster Nodes are preferred when adding signatures, but all signers are slowly rotated to give every participating node a part of the reward.
 * Number of Clients: Together with the number of active clients, the number of posted transactions is also predicted to rise. This will mean more transaction rewards, which will incentivize creation of more Master Nodes to handle the increased load. There are plans in place (but not yet formalized) to implement a sharding mechanism for the Presence List, which is the most updated structure when there are a large number of clients.
 * Number of Wallets: The entire Wallet State is not verified with each block - only the changed parts are. Additionally, the WSJ technology will allow better control and consistency of updating Wallet State across many Master Nodes.

### Long-Term Scaling Solutions - Super Nodes

The above implementation changes are a partial solution to ensure that Ixian DLT runs at an acceptable pace through the near-to-mid future. A long term solution is proposed as a change of the Ixian architecture. If (when) the Ixian DLT technology becomes interesting and large enough, we expect that larger contributors and participants will create more powerful DLT processing nodes, which will have a significantly better performance, storage and bandwidth capabilities.

By providing extra incentive in the form of blockchain rewards, these more powerful Master Nodes (termed: Super Nodes) should become the primary processors for the Ixian DLT, with smaller, individual Master Nodes serving as verification and safeguards against possible frauds or censorship attempts. Ixian DLT would therefore mainly be processed in data centers, with the 'Community Nodes' checking parts of the calculations to verify that there are no mistakes, omissions or manipulation.


## Scaling for S2

This whitepaper describes mainly the DLT part of the technology, but this chapter will mention the issues of scaling S2. Unlike the Ixian DLT, the S2 streaming network does not currently implement or require network-wide persistent storage, so scaling the S2 is significantly easier. In particular, there are several protocols being implemented or planned to ensure this:
 * S2 relies on market forces (price per transmitted KB) to provide more S2 Nodes when the demand rises and the number of Clients increases.
 * Broadcasting data from a single source to many consumers is a relatively easily solvable scaling problem. Internal S2 communication will allocate more S2 nodes if the number of consumers rises and decrease if it falls.
 * The Presence List of all connected clients will either be handled completely by the DLT, or a sharding mechanism will be employed.

A future S2 implementation may provide persistent storage services, but those are different from the DLT's requirements in that: they don't need to be absolutely correct at every point in time (eventually correct is good enough); and the persisted data is relevant to a small number of Clients (most often just one client), therefore the number of replicas can be kept low. The persistent storage problem does not required one big data store across the entire network - rather it requires many smaller data stores across parts of the network.

# 10. Conclusion

This whitepaper demonstrates a concept whereby a coherent DLT technology can be implemented and secured in zero-trust systems without requiring difficult computations (PoW) or financial investment (PoS) schemes for basic operation. It also shows that a ledger can be implemented where the state of all known wallets is available at all times without the full history of preceding blocks and transactions. The Ixian DLT project provides a reference implementation for this concept, as well as an SDK which may be employed by third-party developers to:<br/>
a. Hook into the Ixian DLT or S2 and build an application on top of Ixian, or<br/>
b. Construct their own, complete separate distributed system using the building blocks provided by Ixian.

## Future

Ixian project is not complete and it is likely that the work will proceed for quite some time. There will always be additional improvements or optimizations to be made, as well as bugs to be fixed. The research into cryptocurrencies and DLT continues and new findings may affect Ixian's future. What we hope to provide is a solid foundation that doesn't change on a protocol level ("set in stone"), from which an ecosystem of users and applications can arise and prompt more developers to build their solutions on Ixian platform.