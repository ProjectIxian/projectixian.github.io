---
title: Reconnect
type: core
---
## Reconnect
Stops all network operations, disconnects all clients and servers, then restarts the networking and attempts to reconnect to the network.
### Method: `reconnect`
### Input parameters:
None

### Errors:
None

### Output:
- a JSON object containinly only the string "Reconnecting node to network now." as the result.

### Example:
GET http://localhost:8081/reconnect
```
{
	"result": "Reconnecting node to network now.",
	"error": null,
	"id": null
}
```
