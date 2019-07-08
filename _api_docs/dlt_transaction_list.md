---
title: Transaction List
type: dlt
---
## Transaction List
Returns the list of all transactions in the redacted window.
### Method: `tx`
### Input parameters:
| fromIndex | Number | No | Starting index (used for splitting the results into pages). |
| count | Number | No | Number of results to fetch. By itself, this parameter is useful for fetching only the recent history, but combined with `fromIndex` this parameters enables fetching results in pages. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: transaction list JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/tx
```
{
	"result": {
		"stk-91-96-GEBR49QVbNoc4q8HirWTa9oAixWiNQ9TNJnBnU49VsbU": {
			"id": "stk-91-96-GEBR49QVbNoc4q8HirWTa9oAixWiNQ9TNJnBnU49VsbU",
			"version": 1,
			"blockHeight": "96",
			"nonce": "0",
			"signature": "5374616b65",
			"pubKey": "1ixianinfinimine234234234234234234234234234242HP",
			"data": "5b00000000000000",
			"timeStamp": "1548941727",
			"type": "2",
			"amount": "0.20002001",
			"applied": "97",
			"checksum": "bee300c0b2596d66f82e15ac1e431cfce7391d1f0daec41a25326990817ff163",
			"from": {
				"1":"0.20002001"
			},
			"to": {
			"15iYQBgVhq4JeY3TUfNaMBNFkz27UCQWFjjay14C4b3EuHofG": "0.10003001",
			"19V9VYuGfqoGjRbGZgcF8XNrAeb5REF8gCZKhp7ZsNX3rG8VZ": "0.00010001",
			"1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq": "0.09988999"
		},
		"fee": "0.00000000",
        "totalAmount": "0.20002001"
		},
		...
	},
	"error": null,
	"id": null
}
```