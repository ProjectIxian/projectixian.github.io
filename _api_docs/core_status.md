---
title: Status
type: core
---
## Status
Returns the status of the node.
### Method: `status`

### Input parameters:
| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| verbose | Boolean | No | Additional details are returned. |


### Errors:
| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: status JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/status
```
{
  "result": {
    "Core Version": "xcore-0.5.0-dev",
    "Node Version": "xdc-0.6.6-dev",
    "Network type": "testnet",
    "My time": 1562605579,
    "Network time difference": 0,
    "My External IP": "10.10.103.66",
    "Queues": "Rcv: 0, RcvTx: 0, SendClients: 0, SendServers: 0, Storage: 0, Logging: 0, Pending Transactions: 0",
    "Block Height": 13,
    "Block Version": 4,
    "Network Block Height": 13,
    "Node Type": "M",
    "Connectable": true
  },
  "error": null,
  "id": null
}
```
