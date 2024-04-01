---
title: Servers
type: core
---
## Servers
Returns a list of servers that this node is connected to.
### Method: `servers`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: list of servers JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/servers
```
{
	"result": [
		"172.20.207.81:10000",
		"172.20.207.81:10002",
		...
	],
	"error": null,
	"id": null
}
```
