---
title: Get Balance
type: dlt
---
## Get Balance
Returns balance of the specified address.
### Method: `getbalance`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| address | String | Yes | Base58 encoded wallet address |

### Output:
- success: address balance in the result field and the error field set to null
- fail: JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unexpected error occured within the node. Please see the node log for details. |

Note: No error is returned if attempting to read the balance for a nonexistant wallet. In this case, a balance of "0.00000000" is returned.

### Example:
GET http://localhost:8081/getbalance?address=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix

```
{
	"result": "0.00102720",
	"error": null,
	"id":null
}
```