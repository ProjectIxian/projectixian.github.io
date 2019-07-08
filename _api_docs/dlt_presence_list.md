---
title: Presence List
type: dlt
---
## Presence List
Returns the presence list information.
### Method: `pl`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: presence list JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/pl
```
{
	"result":[
		{
			"version": 0,
			"wallet": "AK2U1C1+vRWrFdIzeFixcGl29ytd/QH142eb9s8pkzx3AMmA",
			"pubkey": "AAIAANl...zOr6aTXAs71VAwAAAAEAAQ==",
			"metadata": null,
			"addresses": [
				{
					"version": 0,
					"device": "57e6814f-fc0f-4b12-ba28-674c18304f5d",
					"address":"172.20.207.81:10000",
					"type": "M",
					"nodeVersion": "xdc-0.6.1a-dev",
					"lastSeenTime": 1548942000,
					"signature": "lQQe7...D85YgNao="
				}
			],
			"owner": " "
		},
		...
	],
	"error": null,
	"id": null
}
```