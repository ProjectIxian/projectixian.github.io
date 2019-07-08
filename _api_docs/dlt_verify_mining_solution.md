---
title: Verify Mining Solution
type: dlt
---
## Verify Mining Solution
Checks the given solution against the block's difficulty field to determine if it is valid.

### Method: `verifyminingsolution`
### Input parameters:
| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| nonce | String | Yes | Nonce value which satisfies the difficulty. |
| blocknum | Number | Yes | Solved block number. |
| diff | Number | Yes | Difficulty value. |

### Errors:
| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | One or more of the required parameters are missing. |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |


### Output:
- success: Boolean value true or false in the result field
- fail: JSON encoded error details and the result field set to null

### Example:
GET http://localhost:8081/verifyminingsolution?nonce=ca82dacd91...6460d20b7b2a&blocknum=55&diff=18442206887586635022
```
{
    "result": true,
    "error": null,
    "id": null
}
```
