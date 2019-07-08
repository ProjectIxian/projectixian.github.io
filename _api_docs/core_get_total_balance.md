---
title: Get Total Balance
type: core
---
## Get Total Balance
Gets the total balance of IXIcoins in the Ixian DLT network. (Sum of all wallets' amounts)
### Method: `gettotalbalance`
### Input parameters:
None

### Errors:
None

### Output:
- a JSON object containinly the number of total IxiCoin supply as a decimal string.

### Example:
GET http://localhost:8081/gettotalbalance
```
{
	"result": "100000000.00000000",
	"error": null,
	"id": null
}
```
