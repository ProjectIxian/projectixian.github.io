---
title: Supply
type: dlt
---
## Supply
Returns current total IxiCash supply in the network.
### Method: `supply`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: IXI supply as a decimal number in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/supply
```
{
	"result": "200020026.20262112",
	"error": null,
	"id": null
}
```
