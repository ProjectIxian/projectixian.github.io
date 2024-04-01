---
title: Sign
type: core
---
## Sign
Signs a specified string.
### Method: `sign`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| message or hash | String | Yes | Message or hash to be signed. |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the wallet bytes encoded as a hexadecimal string.

### Example:
GET http://localhost:8081/sign?message=test
```
{
  "result": "5237481874cdf80...e3a3b89fce20f735b749eda9fb2cc6",
  "error": null,
  "id": null
}
```
