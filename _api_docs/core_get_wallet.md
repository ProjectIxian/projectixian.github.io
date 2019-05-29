---
title: Get Wallet
type: core
---
## Get Wallet
Returns the information about a specified address/wallet.
### Method: `getwallet`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Yes | Wallet address to retrieve |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

Note: Attempting to get the details of an invalid value will return empty data (no public key, balance = 0)

### Output:
- success: wallet information JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/getwallet?id=1HT1RvL3bujSsy3q4FR86Kfe8ixwdQVcGf27qcSryUFmV15d3
```
{
	"result": {
		"id": "1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq",
		"balance": "99880008.79095943",
		"type": "Normal",
		"requiredSigs": "1",
		"allowedSigners": "null",
		"extraData": "null",
		"publicKey": "00020000...3000000010001"
	},
	"error": null,
	"id": null
}
```
