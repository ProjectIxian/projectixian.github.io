---
title: Clear Peer Blacklist
type: core
---
## Clear Peer Blacklist
Clears peer blacklist.

### Method: `clearPeerBlacklist`
### Input parameters:
None.

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with "OK" in result field on success.

### Example:
GET http://localhost:8081/clearPeerBlacklist
```
{
  "result": "OK",
  "error": null,
  "id": null
}
```
