---
title: IxiCash Details
---

Offering a strong incentive to run Ixian Nodes is essential in maintaining the Ixian network. This incentive arrives in the form of IxiCash, a cryptocurrency designed for micro transactions.
Using IxiCash you are able to send money to friends and pay for premium content. Whether you are providing tech support, performing a live show and broadcasting it to paying viewers, you can charge a service fee in IxiCash.


## Premine
Genesis block (#1) contains 7 transactions that can be considered as pre-mine:

- transaction to 1AAF8ZagTw6UqiQPUoiKjmoAN45jvR8tdmSmeev4uNzq45QWB for 240000 Ixis, intended for setting up extra 12 initial seed nodes as required - this wallet was used by seed1.ixian.io
- transaction to 1NpizdRi5rmw586Aw883CoQ7THUT528CU5JGhGomgaG9hC3EF for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed2.ixian.io
- transaction to 1Dp9bEFkymhN8PcN7QBzKCg2buz4njjp4eJeFngh769H4vUWi for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed3.ixian.io
- transaction to 1SWy7jYky8xkuN5dnr3aVMJiNiQVh4GSLggZ9hBD3q7ALVEYY for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed4.ixian.io
- transaction to 1R2WxZ7rmQhMTt5mCFTPhPe9Ltw8pTPY6uTsWHCvVd3GvWupC for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed5.ixian.io
- transaction to 13fiCRZHPqcCFvQvuggKEjDvFsVLmwoavaBw1ng5PdSKvCUGp for 1000000000 Ixis, intended to be used as a reward for developers
- transaction to 16LUmwUnU9M4Wn92nrvCStj83LDCRwvAaSio6Xtb3yvqqqCCz 1000000000 Ixis, intended to be used by the foundation to further evolve Ixian technology

The genesis funds or the so called premine amounts to roughly 2 billion IxiCash (2,000,320,000), of which 1 billion is locked as a team reward for a vesting period
of 5 years (20% to be released at the end of each year). The other 1 billion IxiCash is intended for funding further development and all other important activities.


## Total inflation
A hybrid IxiCash distribution model is in place. For initial distribution, mining seems to be the best way for various reasons.
As more users set up their nodes, the network itself will become more resilient against attackers and increase its capability for handling large numbers of users.
This means that more users will participate in the distribution of IxiCash as well. After a sufficient amount of IxiCash has been mined, the mining mechanism will be permanently switched off and new currency will only be generated through other means.

The Ixian economy differs substantially from what we are used to in the crypto space. Most cryptocurrencies out there rely on a capped supply and smaller and smaller
emissions over time to increase value for investors and early adopters, whether it be PoW related with reducing block rewards or PoS. We have decided to start with a minimum
supply and gradually increase the rate of new IxiCash generated for the first 1802000 blocks (roughly two years), the idea here is to have a more even distribution of IxiCash
among miners/users. On block #105120000 (roughly 100 years), mining will stop and we expect the total supply at that point to be about 21 billion IxiCash. After block #105120000, 
the only way to generate new IxiCash is by running a Master Node, which will inflate the total supply at 36 IXIs per block (or 38 million IXIs per year). By not capping the 
supply after 21 billion IxiCash in circulation, we are trying to compensate for coins that get lost over time (i.e. by users losing their keys, sending to invalid addresses, ...).

For IxiCash emission charts and other details visit [https://explorer.ixian.io/?p=emissions](https://explorer.ixian.io/?p=emissions).

## Mining only inflation
The target mining inflation rate is as follows (you must include a 50% target ratio between solved and unsolved blocks when doing inflation calculations. Only every 2nd block should be solved on average):
- starts with 10 IXI and increases by 0.009 IXI with every block until block height #1051200 (roughly 1 year from genesis block). Target mining inflation is 1.2 billion additional IXIs.
- 4740 IXI per block until block height #1802000.
- 2304 IXI per block until block height #6307200.
- 1152 IXI per block until block height #9460800.
- 576 IXI per block until block height #12614400.
- 18 IXI per block until block height #105120000.

## Masternode/Signing only inflation
Each masternode that signs a newly generated block receives a portion of the signing reward and a portion of the transaction fees.
Signing reward and transaction fees are split between all signers of the block (up to 1000) equally.

Signing inflation rate is as follows:
- 0.1% per year until block #86400 (blockheight was reached in less than 2 months)
- 5% per year until block #1802000
- 576 IXI per block until block #6307200
- 288 IXI per block until block #9460800
- 144 IXI per block until block #12614400
- 72 IXI per block until block #15768000
- 36 IXI per block after block #15768000

This effectively means that after a certain period of time, and sufficient amount of IxiCash is generated, the staking reward will be locked. This way we will replenish the supply to compensate for lost coins,
but not over inflate the circulating supply. By setting the inflation rates at these levels, we are ensuring the long term sustainability of the Ixian platform.


## Transaction Fees
Transaction fees are collected by masternodes when the transaction is added to the block and the block is accepted by the Ixian network.

At the time of writing minimum transaction fees are set to 0.00005000 IXI per kilobyte of data.
