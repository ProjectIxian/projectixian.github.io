---
title: Rescan Blockchain
type: dlt
---
## Rescan Blockchain
Rescans the entire blockchain and fills the activity file with information relevant to the loaded wallet.
### Method: `rescanblockchain`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| from | Number | No | Start scanning from this blockheight upward. Default 0 |

### Output:
- success: notification that the rescan has been started
- fail: JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_MISC_ERROR | Activity scanner is already running. |

Note: Current status of the blockchain rescan can be viewed from the `/status?vv=true` API output, specifically `Blockchain Scanning Active` and `Activity Scanner Last Block` 

### Example:
GET http://localhost:8081/rescanblockchain?from=1000000

```
{
	"result": "Started activity rescan.",
	"error": null,
	"id":null
}
```
