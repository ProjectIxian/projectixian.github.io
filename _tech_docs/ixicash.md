---
title: IxiCash Details
---

Offering a strong incentive to run Ixian Nodes is essential in maintaining the Ixian network. This incentive arrives in the form of IxiCash, a cryptocurrency designed for micro transactions.
Using IxiCash you are able to send friends money and pay for premium content. Whether you are providing tech support, performing a live show and broadcasting it to paying viewers, you can charge a service fee in IxiCash.


## Premine
Genesis block (#1) contains 7 transactions that can be considered as pre-mine:

- transaction to 1AAF8ZagTw6UqiQPUoiKjmoAN45jvR8tdmSmeev4uNzq45QWB for 240000 Ixis, intended for setting up extra 12 initial seed nodes as required - this wallet was used by seed1.ixian.io
- transaction to 1NpizdRi5rmw586Aw883CoQ7THUT528CU5JGhGomgaG9hC3EF for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed2.ixian.io
- transaction to 1Dp9bEFkymhN8PcN7QBzKCg2buz4njjp4eJeFngh769H4vUWi for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed3.ixian.io
- transaction to 1SWy7jYky8xkuN5dnr3aVMJiNiQVh4GSLggZ9hBD3q7ALVEYY for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed4.ixian.io
- transaction to 1R2WxZ7rmQhMTt5mCFTPhPe9Ltw8pTPY6uTsWHCvVd3GvWupC for 20000 Ixis, intended for running an Ixian DLT seed node - this wallet was used by seed5.ixian.io
- transaction to 13fiCRZHPqcCFvQvuggKEjDvFsVLmwoavaBw1ng5PdSKvCUGp for 1000000000 Ixis, intended to be used as a reward for developers
- transaction to 16LUmwUnU9M4Wn92nrvCStj83LDCRwvAaSio6Xtb3yvqqqCCz 1000000000 Ixis, intended to be used by the foundation to further evolve Ixian technology

Foundation Address where portion of transaction fees are collected: 153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix

The genesis funds or the so called premine amounts to roughly 2 billion IxiCash (2,000,320,000), of which 1 billion is locked as a team reward for a vesting period
of 5 years (20% to be released at the end of each year). The other 1 billion IxiCash is intended for funding further development and all other important activities.


## Total inflation
A hybrid Ixicash distribution model is in place. For initial distribution, mining seems to be the best way for various reasons.
As more users set up their nodes, the network itself will become more resilient against attackers and increase its capability for handling large numbers of users.
This will mean that more users will participate in the distribution of IxiCash as well. After a sufficient amount of IxiCash has been mined, mining will be permanently
switched off and new currency will only be generated through other means.

The Ixian economy differs substantially from what we are used to in the crypto space. Most cryptocurrencies out there rely on a capped supply and smaller and smaller
emissions over time to increase value for investors and early adopters, whether it be PoW related with reducing block rewards or PoS. We have decided to start with a minimum
supply and gradually increase the rate of new IxiCash generated for the first 5256000 blocks (roughly five years), the idea here is to have a more even distribution of IxiCash
among miners/users. On block 5256000, mining will stop and we expect the total supply at that point to be about 25 billion IxiCash. After block 5256000, the only way to generate
new IxiCash is by running a Master Node, which will inflate the total supply at 5% per year until total supply reaches 50 billion IxiCash. While supply is between 50 billion and
100 billion IxiCash, the inflation rate will be at 1% and after 100 billion IxiCash in circulation (which should happen in about 100 years), it will be fixed to 1 billion IxiCash
per year. By not capping the supply after 100 billion IxiCash in circulation, we are trying to compensate for coins that get lost over time (i.e. by users losing their keys, sending to invalid addresses, ...).

![IxiCash Total inflation chart (Mining + Staking)](https://projectixian.github.io/assets/images/ixicash_total_inflation.png)


## Mining only inflation
The block reward through PoW is increasing all the time, but not to an extent that it would seriously diminish the value of early miners' gains.
What we are trying to achieve is discourage speculators and reduce their influence on the market, and at the same time encourage new miners to join the network and keep the distribution of IxiCash more even.
Comparing block rewards at roughly the end of first year since the genesis block of 4000 IxiCash to 16000 IxiCash after 5 years is a 4-fold increase, while we can expect that the number of miners and
mining power during that time will increase by a much larger factor.

The target mining inflation rate is as follows:
- Target mining inflation rate is 1.2 billion additional Ixis until block 1051200 (roughly 1 year from genesis block)
- 2.5 billion additional Ixis from block 1051200 to block 2102400 (roughly the second year of operation)
- 3.7 billion additional Ixis from block 2102400 to block 3153600 (roughly the third year of operation)
- 5.3 billion additional Ixis from block 3153600 to block 4204800 (roughly the fourth year of operation)
- 6.7 billion additional Ixis from block 4204800 to block 5256001 (roughly the fifth year operation) which totals to about 20 billion Ixis in about five years
After block 5256000, mining IxiCash will no longer be possible, after which time only staking will create more coins.

![IxiCash inflation chart (Mining only)](https://projectixian.github.io/assets/images/ixicash_mining_inflation.png)


## Masternode/Signing only inflation
Each masternode that signs a newly generated block receives a portion of the signing reward and a portion of the transaction fees.
Signing reward and transaction fees are split between all signers of the block (up to 1000) equally.

Signing inflation rate is as follows:
- 0.1% per year until block #86400 (blockheight was reached in less than 2 months)
- 5% per year until 50 billion IxiCash in circulation
- 1% per year after 50 billion IxiCash in circulation
- 1 billion per year after 100 billion IxiCash in circulation

This effectively means that after a certain period of time, and sufficient amount of IxiCash is generated, the staking reward will be locked. This way we will replenish the supply to compensate for lost coins,
but not over inflate the circulating supply. By setting the inflation rates at these levels, we are ensuring the long term sustainability of the Ixian platform.


## Transaction Fees
Transaction fees are collected by masternodes when the transaction is added to the block and the block is accepted by the Ixian network.
Portion of the transaction fees (at the time of writing 3%) is transferred to Ixian's foundation address, intended to further evolve Ixian technology.

At the time of writing minimum transaction fees are set to 0.00005000 IXI per kilobyte of data.
