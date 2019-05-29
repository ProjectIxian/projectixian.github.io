---
title: Block Height
type: core
---
## Block Height
Returns current block height of the node.
### Method: `blockheight`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: block height as an ulong in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/blockheight
```
{
	"result": 140,
	"error": null,
	"id": null
}
```
