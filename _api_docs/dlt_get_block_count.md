---
title: Get Block Count
type: dlt
---
## Get Block Count
Returns the number of Ixian blocks generated so far. This function is provided to improve exchange compatibility
with Bitcoin-based and derivative technology.
### Method: `getblockcount`
### Input parameters:
None

### Errors:
None

### Output:
- success: number of Ixian blocks since the Genesis block

### Example:
GET http://localhost:8081/getblockcount

```
{
	"result": 432178,
	"error": null,
	"id": null
}
```