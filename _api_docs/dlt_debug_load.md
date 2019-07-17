---
title: Load Debugging Snapshot
type: dlt
---
## **DEBUG/TESTNET ONLY**

## Save Debugging Snapshot
This function loads a previously saved running state of the DLT Node software from a binary file to enable easier debugging. Thus loaded DLT node cannot run, because required encryption keys are not part of the saved snapshot.
not saved.

### Method: `debugsave`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| 400 | An error occured while loading the snapshot. |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- a JSON object containinly only the string "Stress test started" as the result.

### Example:
GET http://localhost:8081/debugload
```
{
	"result": "Debug Snapshot LOADED",
	"error": null,
	"id": null
}
```
