---
title: Get Unspent Transaction Outputs Stats
type: dlt
---
## Get Unspent Transaction Outputs Stats
Returns statistical information about unspent transaction outputs for the currently accepted block. This function is provided
to improve compatibility with Bitcoin-based or derivative exchanges.
Please note that due to the differences in technology, the information returned by this API call differs from the results of calling
a similar function in Bitcoin's API.
For Ixian, only the as-yet unapplied transactions are included in the calculation.
### Method: `gettxoutsetinfo`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |


### Output:
- success: statistics about unapplied transactions

### Example:
GET http://localhost:8081/gettxoutsetinfo

```
{
	"result": {
		"height": 432189,
		"bestblock": "oqXr3eKVDkYao7BxABnOfzYjXvvUIEbWeDXjGNasQl3A2Z2327QU/7sW3rw=",
		"transactions": 44,
		"txouts": 49,
		"total_amount": "50000.00005000"
	},
	"error": null,
	"id": null
}
```