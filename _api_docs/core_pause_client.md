---
title: Pause Network Client
type: core
---
## Pause Network Client
Disconnects from all servers.
### Method: `pauseClient`
### Input parameters:
None.

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the string "Network Client paused." in result field.

### Example:
GET http://localhost:8081/pauseClient
```
{
  "result": "Network Client paused.",
  "error": null,
  "id": null
}
```
