---
title: My Public Key
type: core
---
## My Public Key
Returns the primary public key of this node.
### Method: `mypubkey`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: public key in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/mypubkey
```
{
	"result": "00020000...5d1e69cb503000000010001",
	"error": null,
	"id": null
}
```
