---
title: Generate New Address
type: core
---
## Generate New Address
Generates new address for receiving and spending IxiCash, using the chosen public key. The parameter `address` controls which keypair will be used to generate a new address. The specified address must have a public and private keypair loaded in the running node or client.

Note: The required 'nonce' value used to generate a new address is determined automatically.

### Method: `generatenewaddress`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| address | String | No | Primary address (key pair) which will be used to generate a new address. |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

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
