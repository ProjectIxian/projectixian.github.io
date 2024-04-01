---
title: My Wallet
type: core
---
## My Wallet
Returns all the loaded (unlocked) wallets in the node's wallet file and their balances.
### Method: `mywallet`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |


### Output:
- a JSON-encoded list of wallets and balances, with the error field set to null

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
