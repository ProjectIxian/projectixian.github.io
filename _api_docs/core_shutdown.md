---
title: Shutdown
type: core
---
## Shutdown
Gracefully shuts down the running Ixian executable and closes the program.  
Note: It is not possible to 'revive' the node after this command exits without access to the remote computer's OS.
### Method: `shutdown`
### Input parameters:
None

### Errors:
None

### Output:
- a JSON object containinly only the string "Node shutdown" as the result.

### Example:
GET http://localhost:8081/shutdown
```
{
	"result": "Node shutdown",
	"error": null,
	"id": null
}
```
