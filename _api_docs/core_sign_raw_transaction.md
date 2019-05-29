---
title: Sign Raw Transaction
type: core
---
## Sign Raw Transaction
Applies the node's signature to a raw transaction and returns a modified hexadecimal value.  

Note: If a signed transaction is given as an input, the signature is overwritten.

### Method: `signrawtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| transaction | string | Yes | The encoded transaction, as returned by [Create Raw Transaction](#create-raw-transaction) |


### Output:
- success: transaction is returned as a hexadecimal string and the error field is set to null. This transaction is not added to the network.
- fail JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The `transaction` parameter is missing or does not represent a valid transaction object. |

### Example:
GET http://localhost:8081/signrawtransaction?transaction=0300000...0ad2a25212b003ef0259697760e0

```
{
{
	"result": "03000000000000000e313...cd149493f0d973b7d7bb9b6",
	"error": null,
	"id": null
}
}
```