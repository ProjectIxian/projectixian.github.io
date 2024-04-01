---
title: Submit Mining Solution
type: dlt
---
## Submit Mining Solution
Submits the given solution to the PoW mining problem for the specified block.

### Method: `submitminingsolution`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce | String | Yes | Nonce value which satisfies the difficulty. |
| blocknum | Number | Yes | Solved block number. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | One or more of the required parameters are missing. |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |


### Output:
- success: Boolean value true in the result field if the solution was accepted, or false if it was not
- fail: JSON encoded error details and the result field set to null

### Example:
GET http://localhost:8081/submitminingsolution?nonce=ca82dacd91...6460d20b7b2a&blocknum=55
```
{
    "result": true,
    "error": null,
    "id": null
}
```
