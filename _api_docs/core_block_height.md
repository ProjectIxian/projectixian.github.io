---
title: Get Block Height
type: core
---
## Get Block Height
Returns the number of Ixian blocks generated so far, usually named 'Block Height'.

### Method: `blockheight`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: number of Ixian blocks since the Genesis block

### Example:
GET http://localhost:8081/blockheight

```
{
	"result": 432178,
	"error": null,
	"id": null
}
```