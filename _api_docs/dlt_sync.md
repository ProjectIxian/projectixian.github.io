---
title: Synchronize
type: dlt
---
## Synchronize
Drops all information about blocks and transactions, disconnects from all clients and servers, then reconnects and begins synchronization from
the earliest possible block.
Node: If the node is configured as a Full History Node, synchronization will start from the Genesis block, otherwise the node will only resynchronzie the current redacted window.

### Method: `sync`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- a JSON object containinly only the string "Synchronizing to network now." as the result.

### Example:
GET http://localhost:8081/sync
```
{
	"result": "Synchronizing to network now.",
	"error": null,
	"id": null
}
```
