---
title: Unapplied Transaction List
type: dlt
---
## Unapplied Transaction List
Returns the list of unapplied transactions in the memory pool.
### Method: `txu`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| fromIndex | Number | No | Starting index (used for splitting the results into pages). |
| count | Number | No | Number of results to fetch. By itself, this parameter is useful for fetching only the recent history, but combined with `fromIndex` this parameters enables fetching results in pages. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: unapplied transaction list JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/txu
```
{
	"result": {
		"125-Eau8yftyoMnt316Hb8YJvzc9jZvSLUwdq2UxhppWFpng": {
			"id": "125-Eau8yftyoMnt316Hb8YJvzc9jZvSLUwdq2UxhppWFpng",
			"version": 2,
			"blockHeight": "125",
			"nonce": "6178",
			"signature": "0b8afc5d9e1..4eb9e9126b612ee730cb686f657434bbc55cc",
			"pubKey": "1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq",
			"timeStamp": "1548942726",
			"type": "0",
			"amount": "20000.00000000",
			"applied":"0", 
			"checksum": "f1cf2631009697fd8724091391e5990a281724393fc37ab6d5091c49d63236fe",
			"from": {
				"1": "20000.00005000"
			},
			"to": {
				"15iYQBgVhq4JeY3TUfNaMBNFkz27UCQWFjjay14C4b3EuHofG": "20000.00000000"
			},
			"fee": "0.00005000"
            "totalAmount": "20000.00005000"
		},
		...
	},
	"error": null,
	"id": null
}
```