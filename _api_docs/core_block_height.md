---
title: Get Block Height
type: core
---
## Get Block Height
Returns the number of Ixian blocks generated so far, usually named 'Block Height'.

### Method: `getblockheight`
### Input parameters:
None

### Errors:
None

### Output:
- success: number of Ixian blocks since the Genesis block

### Example:
GET http://localhost:8081/getblockheight

```
{
	"result": 432178,
	"error": null,
	"id": null
}
```