---
title: Connect
type: core
---
## Connect
Initiates a network connection to the specified address.
### Method: `connect`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | Hostname or IP address of the target Ixian node. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMS | The required parameter `"to"` was not supplied. |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- a JSON object containinly only the string "Connecting to node `to`" as the result.

### Example:
GET http://localhost:8081/connect?to=192.168.1.25
```
{
	"result": "Connecting to node 192.168.1.25",
	"error": null,
	"id": null
}
```
