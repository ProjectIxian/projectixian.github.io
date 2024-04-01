---
title: Send Raw Transaction
type: core
---
## Send Raw Transaction
Takes a hexadecimal representation of a valid, signed transaction and sends it to the network. In order to generate a valid transaction value, use the methods [Create Raw Transaction](#create-raw-transaction) and [Sign Raw Transaction](#sign-raw-transaction).

### Method: `sendrawtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| transaction | string | Yes | The encoded transaction, as returned by [Create Raw Transaction](#create-raw-transaction) |


### Output:
- success: transaction details are returned as a JSON object and the error field is set to null
- fail JSON encoded details with a non-null error and a null result

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The `transaction` parameter is missing or does not represent a valid transaction object. |
| RPC_VERIFY_ERROR | The transaction was not valid, or an unexpected error has occurred in the node. Please see the node's log for details. |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Example:
GET http://localhost:8081/sendrawtransaction?transaction=03000000000000000e313...cd149493f0d973b7d7bb9b6

```
{
  "result": {
    "id": "13-jbFyKmVfFtV86rjMnbxrmYuUzn3D7T3s6hZU1HfzbjPMT2A4jHhkR56CLsER",
    "version": 3,
    "blockHeight": "13",
    "nonce": "7535",
    "signature": "36d459...985ec859bb6ca",
    "pubKey": "3zzdr4iT48AbaVudpGjZQi22fGiz4XupTfweGiiFjGNVVqfx6h4M2CF9H6bKjqTjj",
    "timestamp": "1551519157",
    "type": "0",
    "amount": "10000.00000000",
    "applied": "0",
    "checksum": "2d8368037d16aba9b650f3fd5a61a937505a1b43a6989d7ba500e72d7f60d0a2988fc5c5afe997015b8529ec",
    "from": {
      "1": "10000.00005000"
    },
    "to": {
      "5EVv1FqciHzJtPQbA8kBTaPzdSCzLVJ2X6oBTFA198au1qjoML6TjYz75h8w2QUv1": "10000.00000000"
    },
    "fee": "0.00005000",
    "totalAmount": "10000.00005000"
  },
  "error": null,
  "id": null
}
```