---
title: Get Best Block Hash
type: dlt
---
## Get Best Block Hash
Returns the latest hash value of the best chain. This function is provided to improve compatibility
with Bitcoin-based exchanged.
Please note that Ixian doesn't support the concept of multiple concurrent chains, so this function will always
return the latest accepted block's checksum value.
The only scenario where this API might return incorrect results is in the event of a network split, before the nodes
have re-connected and performed appropriate chain reorganization.
### Method: `getbestblockhash`
### Input parameters:
None

### Errors:
| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |


### Output:
- success: checksum value of the latest (best) block

### Example:
GET http://localhost:8081/getbestblockhash

```
{
	"result": "i0qSovdA0TMJVGZqAZn+aof7Jdlm5c9XEXUbioIvUEY/AJAz0J0wliBL3UM=",
	"error": null,
	"id": null
}
```