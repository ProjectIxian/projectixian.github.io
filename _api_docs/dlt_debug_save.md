---
title: Save Debugging Snapshot
type: dlt
---
## **DEBUG/TESTNET ONLY**

## Save Debugging Snapshot
This function saves the running state of the DLT Node software into a binary file for easier debugging. Personal information and encryption keys are
not saved.

### Method: `debugsave`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| 400 | An error occured while saving the snapshot. |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- a JSON object containinly only the string "Stress test started" as the result.

### Example:
GET http://localhost:8081/debugsave
```
{
	"result": "Debug Snapshot SAVED",
	"error": null,
	"id": null
}
```
