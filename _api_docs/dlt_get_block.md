---
title: Get Block
type: dlt
---
## Get Block
Returns specified block data, either as a JSON object or as a binary object converted into hexadecimal.
### Method: `getblock`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| num | Number | Yes | Block number to retrieve. |
| bytes | Boolean | No | If specified, the block data will be returned as a hexadecimal string. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The specified block number was invalid. |
| RPC_INTERNAL_ERROR | An unexpected error occured within the node. Please see the node log for details. |

### Output:
- success: block details are returned as a JSON object and the error field is set to null
- fail: JSON encoded details with a non-null error and a null result:

### Example:
GET http://localhost:8081/getblock?num=50

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
		]"
	},
	"error": null,
	"id": null
}
```