---
title: Get Transaction
type: dlt
---
## Get Transaction
Returns the information about a specified transaction.
### Method: `gettransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Yes | Transaction id of the transaction to retrieve |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The specified transaction id was invalid. |
| RPC_INTERNAL_ERROR | An unknown error occured while fetching the transaction details. |

### Output:
- success: transaction information JSON encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/gettransaction?id=1-7on93B4WDRguRpaB22osfJV9EPs24pyJWgTkKpNrLV5p
```
{
	"result": { 
		"id": "stk-44-49-4Eywy3ngSxpvVbXTKopcuXe1xetoR4ALAsmfCBFiMtvd",
		"version": 1,
		"blockHeight": "49",
		"nonce": "0",
		"signature": "5374616b65",
		"pubKey": "1ixianinfinimine234234234234234234234234234242HP",
		"data": "2c00000000000000",
		"timeStamp": "1548940147",
		"type": "2",
		"amount": "0.20002000",
		"applied": "0",
		"checksum": "36781655c23b509f85e46513608ba359b849795580344c5340c778c51e466fd1",
		"from": {
			"1": "0.20002000"
		},
		"to": {
			"15iYQBgVhq4JeY3TUfNaMBNFkz27UCQWFjjay14C4b3EuHofG": "0.10003000",
			"19V9VYuGfqoGjRbGZgcF8XNrAeb5REF8gCZKhp7ZsNX3rG8VZ": "0.00010001",
			"1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq": "0.09988999"
		},
		"fee": "0.00000000"
	},
	"error": null,
	"id": null
}
```
