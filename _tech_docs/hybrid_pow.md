---
title: Hybrid PoW
---

# Difficulty Problem
One of the bigger challenges when designing new DLT concepts is security. Based on the method of operation, it is critical that potential
attackers do not have an easy way to subvert network operation. We must make it difficult for malicious users to alter the blockchain for their
own benefit, or disrupt the service, while maintaining a low barrier to entry for legitimate users. We have named this concept the 'Difficulty
problem'

Here is a non-comprehensive list of possible modes of operation:

* **Proof-of-Work (Bitcoin, most other cryptocurrencies)**: Barrier to exploitation is the required computing power to produce new, valid blocks.
An attacker must be able to generate blocks, which will be accepted by the network, and do so faster than the rest of the network (51% attack).
The mathematical problem, which is being solved to ensure the difficulty of this computation has not, as of yet, been found to have cryptographic
weaknesses, therefore this approach is now considered safe.

* **Proof-of-Stake (Ethereum - UPCOMING)**: Here, the difficulty in subverting the network lies in the requirement to own pre-existing funds,
before valid blocks may be generated and appended to the network. An attacker must own significant amounts of the digital currency in order to
subvert the network operation. Proof of Stake is employed much more rarely than Proof-of-Work, but significant weaknesses of the approach have not, so
far, been put forward. The approach is considered safe, because an attacker would need significant investment into the cryptocurrency in order
to gain enough 'voting power' in the network to do harm.

* **Proof-of-Space, Proof-of-Capacity**: This approach requires commitment of significant amounts of memory or disk space in order to calculate
valid blocks. This is similar to Proof-of-Work, whereas an attacker must make a large monetary investment into hardware before he or she would
be able to subvert operations.

A constant is quickly revealed: A would-be attacker must invest into either hardware, processing time (cloud) or the targeted cryptocurrency,
in order to manipulate the blockchain. Depending on the size of the network and the valuation of the currency, the investment quickly becomes
prohibitively large.


# IXIAN's Consensus Algorithm
IXIAN was designed to allow quick DLT node setup with low-cost hardware. This negates the entry price and therefore opens the cryptocurrency
to manipulation attacks. In order to solve this issue, a certain number of funds is required for each Node before it can participate in the
IXIAN Consensus algorithm, so that only nodes (wallets) with sufficient, pre-existing funds are eligible to sign newly generated blocks.


# Issue: Barrier to Entry
Because of the initial funds requirement, new nodes will have a harder time joining the DLT. This can reduce growth and, therefore, adaptation.
We wanted the network to be truly democratic and allow anyone someway to participate.

To this end, we have designed a new approach to DLT 'Difficulty problem' described above. We have named it 'Hybrid Proof DLT'.


# Hybrid Mode of Operation
n order for the DLT to easily accept new users, and at the same time make it difficult to create enough voting power to subvert the blockchain
operations, we have implemented a partial Proof-of-Work strategy for new nodes.

While the main part of the network operates on a Proof-of-Stake basis, nodes which do not have enough funds to participate may instead opt
for a variant of the Proof-of-Work algorithm. This participation is not to be used for new block signing (therefore even a 51% attack would not
be able to subvert the network in a timely fashion), but it is used for generating new currency.

Since solution of the Proof-of-Work puzzle is not required, network can operate normally even if there are no active 'miners'.


# Technical Implementation

## Active History
Because IXIAN is a redacted blockchain, the entire block history is not saved with every node, but only on a few 'Full History Nodes'. The part
of the blockchain, which must be held in memory by each participating node is called the 'Active History', and can be dynamically determined by
the network after a suitable algorithm is decided. The default window for the ‘Active History’ (called the “Redacted Window Size”), is 7 days
(20000 blocks).


## Blank Proof-of-Work field
Each block in the chain includes a field for a possible Proof-of-Work solution. This space consists of a solution to the block puzzle and a
signature from the node which has calculated the challenge.
Block signatures are still sufficient for validating the transactions in the block. The blank PoW solution field is not included in the
verifying signature for the block, which means that the PoW field can be changed at any time.
A simplified chain with the blank PoW field is represented below:

![Sample Ixian Chain](https://projectixian.github.io/assets/images/hpow_image1.png)


## Transaction Type: Puzzle-Solved
A new transaction type is introduced for the Proof-of-Work operations. This transaction consists of a PoW solution for any block, which is
present in the Active History at the moment when the transaction is processed, as shown in the image below.

![Active History](https://projectixian.github.io/assets/images/hpow_image2.png)

The targeted block must currently have no solution for the PoW puzzle. 
Once this transaction is verified by a DLT node and the containing block is accepted by the network, the details are added to the Active History
into the blank PoW field. That block now has a filled PoW field, and is confirmed by a transaction in an accepted block. Based on this, new
currency is generated and awarded to the node which calculated the puzzle.

Graphical representation of the PoW award process:

![PoW Award](https://projectixian.github.io/assets/images/hpow_image3.png)


## Solution Details - Technical
The PoW solution is formed in the following manner:

![PoW Solution](https://projectixian.github.io/assets/images/hpow_d1.png)

Where PoW is the solution to the PoW problem using the “Argon2ID” hashing functions, whose input message, called “pwd” in the reference Argon
implementation is the combination of the target block checksum - BlockChecksum - and the address of the walled which will receive the reward for
solving the puzzle - SolverAddress.
The solution is found by inserting a random, 128-bit value as Nonce, until a hash is found which meets certain criteria based on the _difficulty_
Block parameter.


## Difficulty Adjustments
Because new nodes join the network and start searching for the PoW solution, while other nodes stop, the difficulty must be adjusted to reflect the
current network's total hashing power. If the difficulty is too easy, too many Blocks will have their PoW solution. Conversely, if the difficulty
is too high, too few Blocks will be solved.
The difficulty should be selected such, that roughly 50% of all Blocks in the active history are solved before they are redacted.

The Block difficulty is an 8-byte unsigned integer, which represents the characteristic of the PoW solution value to which a valid solution must
conform. In IXIAN, the entire solution range (a solution is a 256-bit number) is split into 2^64 sub-ranges. The difficulty number, being a 64-bit
unsigned integer, selects one of the sub-ranges, which is interpreted as the absolute ceiling.
A valid PoW solution must be numerically below the chosen ceiling.


In order to convert the difficulty number into a 'hash-ceiling', the following method is used:
1. A bitwise inverse of the difficulty value is calculated (one's complement)
2. A zero-value, 256-bit number is generated.
3. Bits from the inverted difficulty are inserted into the empty 256-bit number at bit positions 13 - 76 (bit 1 is the most significant bit).
4. Bits before the inserted value are set to zero.
5. Bits after the inserted value are set to one.

The resulting hash-ceiling value represents the upper limit of the 256-bit PoW solution. Solutions, which are numerically less than the
hash-ceiling are considered valid for the given difficulty.

The exact distribution of the sub-ranges allow IXIAN to set a wide range of difficulties. In order to prevent some possible exploits, a lower
limit has been set on the difficulty value.
The lowest possible difficulty is therefore defined to be 0xA2CB1211629F6141, wich equates to (on average) 180000 hashes required in order to
find a valid solution. The number can be achieved by 10 miners, with 300 H/s each - this was defined as an approximation of the minimum network
size. With the total hashing power of 3000 H/s, a block solution should be found approximately every 60 seconds.
Since the blocks are generated at 30-second intervals, the resulting solution ratio should be near 50%.

Upper bound on the difficulty is not specified, so the theoretical maximum difficulty could be 0xFFFFFFFFFFFFFFFF, which would require 1.15 
zetta-hashes on average to find a block solution. This number was deemed sufficiently large. It would require about 16 quintillion miners at 
1200 H/s each) to keep up with the 50% solution ratio.
