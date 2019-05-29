---
title: Generate New Address
type: core
---
## Generate New Address
Generates new address for receiving and spending IxiCash, using the node's public key.
### Method: `generatenewaddress`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: new address in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/generatenewaddress
```
{
	"result": "1KXcNjfyChUPhMK5Wnkj8ZQ6GQCiYs65uBaWkK9jdCvrWuDgS",
	"error": null,
	"id": null
}
```
