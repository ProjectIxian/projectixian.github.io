---
title: Blacklist Peer
type: core
---
## Blacklist Peer
Blacklists peer.

### Method: `blacklistPeer`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| host | String | No | Host address to blacklist. |
| wallet | String | No | Base58 Wallet address of host to blacklist. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with "OK" in result field on success.

### Example:
GET http://localhost:8081/blacklistPeer
```
{
  "result": "OK",
  "error": null,
  "id": null
}
```
