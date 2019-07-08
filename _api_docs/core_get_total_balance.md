---
title: Get Total Balance
type: core
---
## Get Total Balance
Gets the total balance of IXIcoins in all currently loaded wallets on this Ixian client. Essentially, this retrieves all your Ixian assets available to you on the chosen node or client.
### Method: `gettotalbalance`
### Input parameters:
None

### Errors:
| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- a JSON object containinly the number of total IxiCoins in local wallets

### Example:
GET http://localhost:8081/gettotalbalance
```
{
	"result": "100000000.00000000",
	"error": null,
	"id": null
}
```
