---
title: Get Viewing Wallet
type: core
---
## Get Viewing Wallet
Retrieves the currently loaded wallet as a viewing wallet in hexadecimal string. The wallet is encrypted with the user's password and the value is prefixed with the string `IXIHEX`.
### Method: `getViewingWallet`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the viewing wallet bytes encoded as a hexadecimal string.

### Example:
GET http://localhost:8081/getViewingWallet
```
{
  "result": "IXIHEX0200000050090...cab76cfb758a14",
  "error": null,
  "id": null
}
```
