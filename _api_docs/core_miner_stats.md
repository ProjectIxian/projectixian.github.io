---
title: Miner Stats
type: core
---
## Miner Stats
Returns miner stats of the node.
### Method: `minerstats`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: miner stats JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/minerstats
```
{
	"result": {
		"Hashrate": 101,
		"Search Mode": "randomLowestDifficulty",
		"Current Block": 5,
		"Current Difficulty": 11730489520294945089,
		"Solved Blocks (Local)":0,
		"Solved Blocks (Network)":0,
		"Empty Blocks": 135,
		"Last Solved Block": 0,
		"Last Solved Block Time": "Never"
	},
	"error": null,
	"id": null
}
```