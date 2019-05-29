---
title: Clients
type: core
---
## Clients
Returns a list of clients that are connected to this node.
### Method: `clients`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: list of clients JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/clients
```
{
	"result": [
		"172.20.207.81:55700",
		"172.20.207.81:55859",
		...
	],
	"error": null,
	"id": null
}
```