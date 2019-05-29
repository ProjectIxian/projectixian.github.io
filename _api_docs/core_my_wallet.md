---
title: My Wallet
type: core
---
## My Wallet
Returns all the wallets in the node's wallet file and their balances.
### Method: `mywallet`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: result field contains JSON-encoded list of wallets and balances and the with error field is set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/mywallet
```
{
	"result": {
		"1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq": "99880008.39139947",
		"1PC5kubyLvTmsf16CugqHpBG8B8PK4YjcfSjjLMqbUi8YvkQ5": "11240.00000000"
	},
	"error": null,
	"id": null
}
```
