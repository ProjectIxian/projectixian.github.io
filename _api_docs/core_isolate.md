---
title: Isolate
type: core
---
## Isolate
Stops all network operations and disconnects all clients and servers.
### Method: `isolate`
### Input parameters:
None

### Errors:
None

### Output:
- a JSON object containinly only the string "Isolating from network now." as the result.

### Example:
GET http://localhost:8081/isolate
```
{
	"result": "Isolating from network now.",
	"error": null,
	"id": null
}
```
