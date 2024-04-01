---
title: Resume Network Client
type: core
---
## Resume Network Client
Starts connecting to servers again.
### Method: `resumeClient`
### Input parameters:
None.

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the string "Network Client resumed." in result field.

### Example:
GET http://localhost:8081/resumeClient
```
{
  "result": "Network Client resumed.",
  "error": null,
  "id": null
}
```
