---
title: Get Full Block
type: core
---
## Get Full Block
Returns specified block data with full transactions included.
### Method: `getfullblock`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| num | Number | Yes | Block number to retrieve. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The specified block number was invalid. |
| RPC_INTERNAL_ERROR | An unknown error occured while fetching the block. |


### Output:
- success: block details are returned as a JSON object and the error field is set to null
- fail: JSON encoded details with a non-null error and a null result:

### Example:
GET http://localhost:8081/getfullblock?num=50

```
{
	"result": {
		"Block Number": "50",
		"Version": "2",
		"Block Checksum": "92efa8dc14175cddfbd31f41fad14a3e73cdc78298f74c322df1725a6aa189c1",
		"Last Block Checksum": "453848a354570441ceded657f229a9df07f653120636e80f5b18dba1fb288c6b",
		"Wallet State Checksum": "8906b11174faacc776930de40b41f230ad702212d900a04448702cdf10c5b2d0",
		"Sig freeze Checksum": "464c6a6e88db2aac2eb534312213adb528334a0e8eb98db8ab92196d0ec86811",
		"PoW field": "null",
		"Timestamp": "1548940147",
		"Difficulty": "11730489520294945089",
		"Signature count": "3",
		"Transaction count": "1",
		"Transaction amount": "0.20002000",
		"Signatures": "[
			[\"H7tj...4kvmX9QqHUy2qMriDVOlUQcttNPmRBLRw=\",\"AC9ELmKQl8QNkA0XjWUiqPU7MjbKxfcQi3MxGpuJKgwIPoaD\"],
			[\"tME0...aiWgNf2Jcu+8chlE0tUodf0x+j/NiCsWg=\",\"AFUKPO4W+0rVPp8LJcHdL+HaY8N8IoPgv7jaAO3UeAdPqDAc\"],
			[\"zT8h...PJmQwJ8JXESIFWJhbiDSuQfv6xZm/XQHQ=\",\"AK2U1C1+vRWrFdIzeFixcGl29ytd/QH142eb9s8pkzx3AMmA\"]
		]",
		"TX IDs": "[
			\"stk-44-49-4Eywy3ngSxpvVbXTKopcuXe1xetoR4ALAsmfCBFiMtvd\"
		]",
		"Transactions": "[
			{
				\"id\": \"stk-44-49-4Eywy3ngSxpvVbXTKopcuXe1xetoR4ALAsmfCBFiMtvd\",
				\"version\": 1,
				\"blockHeight\": \"49\",
				\"nonce\": \"0\",
				\"signature\": \"5374616b65\",
				\"pubKey\": \"1ixianinfinimine234234234234234234234234234242HP\",
				\"data\": \"2c00000000000000\",
				\"timeStamp\": \"1548940147\",
				\"type\": \"2\",
				\"amount\": \"0.20002000\",
				\"applied\": \"0\",
				\"checksum\": \"36781655c23b509f85e46513608ba359b849795580344c5340c778c51e466fd1\",
				\"from\": {
					\"1\": \"0.20002000\"
				},
				\"to\": {
					\"15iYQBgVhq4JeY3TUfNaMBNFkz27UCQWFjjay14C4b3EuHofG\": \"0.10003000\",
					\"19V9VYuGfqoGjRbGZgcF8XNrAeb5REF8gCZKhp7ZsNX3rG8VZ\":\"0.00010001\",
					\"1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq\":\"0.09988999\"},
					\"fee\":\"0.00000000\"
			}
		]
	},
	"error": null,
	"id": null
}
```

Note: The block format is essentially the same as for the method `getlastblock` and the transaction details are the same as for the method `gettransaction`.