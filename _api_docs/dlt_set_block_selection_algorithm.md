---
title: Set Block Selection Algorithm
type: dlt
---
## Status
Modifies the running DLT Node or Miner software and changes the way blocks are selected for mining. It is also possible to activate or deactivate mining using this method.

## Algorithms
| ID  | Name | Description |
| --- | --- | --- |
| -1 | No algorithm | Stop mining. |
| 0 | lowestDifficulty | Pick the block with the lowest difficulty value. |
| 1 | randomLowestDifficulty | Sort blocks from easiest to hardest and pick a random block within the easiest 500 blocks. |
| 2 | latestBlock | Pick the most recent accepted block. |
| 3 | random | Pick a random block. |


### Method: `setBlockSelectionAlgorithm`
### Input parameters:
| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| algorithm | Number | Yes | New block selection algorithm. See the values above. |


### Errors:
| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: JSON result with all null values
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/setBlockSelectionAlgorithm?algorithm=
```
{
	"result": null,
	"error": null,
	"id": null
}
```
