---
title: Get Wallet Backup
type: core
---
## Get Wallet Backup
Retrieves the currently loaded wallet as a hexadecimal string. The wallet is encrypted with the user's password and the value is prefixed with the string `IXIHEX`.
### Method: `getwalletbackup`
### Input parameters:
None

### Errors:
| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- a JSON object with the wallet bytes encoded as a hexadecimal string.

### Example:
GET http://localhost:8081/getwalletbackup
```
{
"result": "IXIHEX0200000050090...cab76cfb758a14",
"error": null,
"id": null
}
```
