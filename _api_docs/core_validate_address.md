---
title: Validate Address
type: core
---
## Validate Address
Ensures that the given address is in the correct format.
### Method: `validateaddress`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| address | String | Yes | Wallet address to validate |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_ADDRESS_OR_KEY | The provided vaue does not represent a valid Ixian address, or there was no value provided. |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |


### Output:
- success: string "OK" in the result field.
- fail: JSON encoded error details and the result field set to null

### Example:
GET http://localhost:8081/validateaddress?address=4qX7Uot9BbweZh56gVeXWRwoe2Wb6vesNJtZJzm672uHUqucsHENe1849Vy5V4mHg
```
{
    "result": "OK",
    "error": null,
    "id": null
}
```
