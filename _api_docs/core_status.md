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
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: status JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/status
```
{
  "result":{
    "Core Version":"xcore-0.9.2a",
    "Node Version":"xsbc-0.8.0",
    "Network type":"main",
    "My time":1711921632,
    "Network time difference":0,
    "Real network time difference":0,
    "My External IP":"10.11.12.13",
    "My Listening Port":15235,
    "Core Status":1,
    "Block Height":4094011,
    "Block Version":10,
    "Network Block Height":4094011,
    "Node Type":"C",
    "Connectable":true,
    "Queues":{
      "RcvLow":0,
      "RcvMedium":0,
      "RcvHigh":0,
      "SendClients":0,
      "SendServers":0,
      "Logging":0,
      "Pending Transactions":0
    },
    "Presences":1,
    "Masters":0,
    "Relays":0,
    "Clients":1,
    "Network Clients":[
      "10.10.1.3:1212",
      "10.10.1.4:1312"
    ],
    "Network Servers":[
      "10.10.1.1:1012",
      "10.10.1.2:1012"
    ]
  },
  "error":null,
  "id":null
}
```
