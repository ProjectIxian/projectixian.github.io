---
title: Decode Raw Transaction
type: core
---
## Decode Raw Transaction
This is a convenience function which converts a hex-encoded transaction from its raw format into a JSON object, so that it may be parsed or analyzed.  

Note: This method accepts both a signed or an unsigned raw transaction and will return the appropriate fields in the JSON object.

### Method: `decoderawtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| transaction | string | Yes | The encoded transaction, as returned by [Create Raw Transaction](#create-raw-transaction) |


### Output:
- success: transaction details are returned as a JSON object and the error field is set to null. This transaction is not added to the network.
- fail JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The `transaction` parameter is missing or does not represent a valid transaction object. |

### Example:
GET http://localhost:8081/decoderawtransaction?transaction=0300000...0ad2a25212b003ef0259697760e0

```
{
  "result": {
    "id": "13-jbFyKmVfFtV86rjMnbxrmYuUzn3D7T3s6hZU1HfzbjPMT2A4jHhkR56CLsER",
    "version": 3,
    "blockHeight": "13",
    "nonce": "7535",
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