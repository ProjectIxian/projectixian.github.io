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
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |


### Example:
GET http://localhost:8081/activity

```
{
    "result": [
        {
            "seedHash": "Ac2g5Zh...TMg3p6v",
            "wallet": "4qX7Uo...y5V4mHg",
            "from": "1ixianinfinimine234234234234234234234234234242HP",
            "toList": "||4ixR19HcrGcB...ECc=",
            "type": 201,
            "data": "c3RrLTIwLTI1...N3Q=",
            "value": "0.09990100",
            "timestamp": 1562596905,
            "status": 2,
            "blockHeight": 26,
            "txid": "stk-20-25-2EAa...bysa7t",
            "id": "Voaz...ftiPk"
        }
    ]
    "error": null,
    "id": null
}
```