---
title: Get Activity
type: core
---
## Get Activity
Retrieves the activity for the currently loaded wallet with optional filtering on type and paging support.
 
### Method: `activity`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| fromIndex | Number | No | Starting index (used for splitting the results into pages). |
| count | Number | No | Number of results to fetch. By itself, this parameter is useful for fetching only the recent history, but combined with `fromIndex` this parameters enables fetching results in pages. |
| type | Number | No | Type of the activity to fetch as a number. See below. |
| orderBy | String | No | Ordering method of requested data. Can be "insertedTimestamp", "timestamp" or "blockheight". Default is "insertedTimestamp". |
| descending | Boolean | No | Ordering direction of requested data, set to "true" for descending order. Default is ascending order.  |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |

### Activity Types

| Id | Type | Detail |
| --- | --- | --- |
| 100 | TransactionReceived | A transaction has been received. (Destination address belongs to the currently loaded wallet. |
| 101 | TransactionSent | A transaction has been sent from the currently loaded wallet. |
| 200 | MiningReward | A mining reward has been received by the currently loaded wallet. |
| 201 | StakingReward | A staking reward has been received by the currently loaded wallet. |
| 202 | TxFeeReward | A transaction fee reward has been received by the currently loaded wallet. |
| 300 | ContactRequest | A contact request has been received. |

### Output:
- activity details are returned as a JSON object and the error field is set to null:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |


### Example:
GET http://localhost:8081/activity

```
{
  "result": [
    {
      "seedHash": "Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO",
      "wallet": "4iMKArchGjmLsZFsj2tYrBgPjjypvEwquB2pnbEvYAyihSeEi1FN5XBsWru2iKDXK",
      "from": "1ixianinfinimine234234234234234234234234234242HP",
      "toList": "||4iMKArchGjmLsZFsj2tYrBgPjjypvEwquB2pnbEvYAyihSeEi1FN5XBsWru2iKDXK:/tkU||5DY8ZF2Y1xbB2n7V7c3z8pcAoLAsScAVAiZdcnqBPbLuGHiq9RWamn83hautJvEoy:ZEwj||4C62hPSVNHTXe4aMtgoFYZ3KVCNXmkCr7MmJRprWukvtUSWTsMsm6UaPLqmiVtnh1:7tI/||4L5vswa8yS9VKsZzDJ2ry9gWY7KQon5bkvhG1CUuepkwvcy1xQmLsHA9DPmCDbufr:mDW5AA==",
      "type": 201,
      "data": "APyudjHAmnhQfZitq5BY8vgA1PboOXgm10RmMaeGWaHiltRiQdXyrWoA4pE9OKTq",
      "value": "0.01366526",
      "timestamp": 1709254781,
      "status": 2,
      "blockHeight": 30383,
      "txid": "stk-30377-30382-HBEF6nRAb4qudWecJQnopZCfseUGYXp2KKVvpcbCNYZSAmqCTw4cpcqN7aN5",
      "id": "EvniSJUZje4PU46HAqybNoQpZ8mKrpUULcY6oniijR3XehRovo9TSw2fBBMG"
    },
    ...
  ],
  "error": null,
  "id": null
}
```
