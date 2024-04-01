---
title: Unload Wallet
type: core
---
## Unload Wallet
Unloads specified wallet.
### Method: `unloadWallet`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with "OK" string, if wallet was unloaded in result field.
- a JSON object with "FAIL" string in result field, if wallet can't be unloaded.

### Example:
GET http://localhost:8081/unloadWallet
```
{
  "result": "OK",
  "error": null,
  "id": null
}
```
