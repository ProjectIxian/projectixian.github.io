---
title: Get Mining Block
type: dlt
---
## Get Mining Block
Requests a block to begin working on a PoW solution. This method is primarily meant to support mining pool operation, so that miners do not need to function as DLT nodes and can simply request work units from the pool controller or another designated DLT Node.

The function only returns the relevant block data required for computing the PoW solution.

Note: In a cooperative pool mining, the solution should incorporate the pool controller's wallet address, so that it can be successfully verified by the DLT network. The pool controller is responsible for further reward payouts based on miner participation or any other metric at the pool's discretion.

## Algorithms

| ID  | Name | Description |
| --- | --- | --- |
| -1 | No algorithm | Stop mining. |
| 0 | lowestDifficulty | Pick the block with the lowest difficulty value. |
| 1 | randomLowestDifficulty | Sort blocks from easiest to hardest and pick a random block within the easiest 500 blocks. |
| 2 | latestBlock | Pick the most recent accepted block. |
| 3 | random | Pick a random block. |

### Method: `getminingblock`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| algo | Number | Yes | ID of the desired mining algorithm |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The required parameter is missing. |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |


### Output:
- success: Data required to compute PoW soltuion for the block.
- fail: JSON encoded error details and the result field set to null

### Example:
GET http://localhost:8081/getminingblock?algo=1
```
{
  "result": {
    "num": 233456,
    "ver": 4,
    "dif": 11730489520294945000,
    "chk": "vq00ZxZ...QYMCaRmn7GAMhHx4=",
    "adr": "AVB+ikpJqpX6K+dZriTTbuQ/Tt6Eh4oQ3pKpelESHnGD1T0769Sm/ERgb0kCZoNo"
  },
  "error": null,
  "id": null
}
```
