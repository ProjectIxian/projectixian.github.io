---
title: Get Last Blocks
type: dlt
---
## Get Last Blocks
Returns the last 10 blocks as JSON objects.
### Method: `getlastblocks`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured while fetching one or more of the blocks. |

### Output:
- success: list of blocks in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result:

### Example:
GET http://localhost:8081/getlastblocks
```
{
	"result": [
		{
			"Block Number": "71",
			"Version": "2",
			"Block Checksum": "90330a25935159c8048aad049578216379e6bfaa7c85a0e29799c648fc673653",
			"Last Block Checksum": "999ae1525a69e1e076b21c411aae20e1d2ffaae4660abfa9321b488010ae4250",
			"Wallet State Checksum": "2c50b13f2d34fe6bb88cf4401ccbf11381823b78a330a1bd32ed00142297394a",
			"Sig freeze Checksum": "5e16b955a50957271f36af1cab5dffde430559580f10e458366812b99d47a8df",
			"PoW field": "null",
			"Timestamp": "1548940839",
			"Difficulty": "11730489520294945089",
			"Signature count": "3",
			"Transaction count": "1",
			"Transaction amount": "0.20002001",
			"Signatures":"...",
			"TX IDs":"..."
		},
		...
	],
	"error": null,
	"id": null
}
```

Note: the resulting block object is exactly the same as for the `getblock` method, except that this method currently does not support returning data as binary hexadecimal strings.