---
title: Register Name
type: core
---
## Register Name
Register an Ixian Name.
### Method: `registerName`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | Name to be registered. |
| registrationTime | Number | Yes | Registration time in blocks. |
| capacity | Number | Yes | Capacity in kB. |
| recoveryHash | String | No | Recovery hash in HEX. |
| pkHash | String | No | PublicKey hash in HEX. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the transaction in result field, which registers a name.

### Example:
GET http://localhost:8081/registerName?name=test&registrationTime=864000&capacity=10
```
{
  "result": {
    "id": "403-yjSY9heSFDLcrvu7yXu3jfKkw4xJoe6YpCULZw3zC4FS89YCEseFByShUANt",
    "version": 7,
    "blockHeight": "403",
    "nonce": "40792",
    "signature": "a3861219705...863b3d2ccd178097981c95b",
    "pubKey": "JHgSS7hbUN...3NFmiMazymoYwi5i2EPPWjtyTRYRN",
    "data": "0141409b...7cdda12e4dd6fe9fbf004331aa46a645",
    "timestamp": "1711930571",
    "type": "4",
    "amount": "50000.00000000",
    "applied": "0",
    "checksum": "ae7c44383cb5a488088abc188f06eb3bf652d4e90922019da84e34e0f2c37b80aff6b83761f8d260b0c93b91",
    "from": {
      "1": "50000.01000000"
    },
    "to": {
      "125D6XDzTZzQUWsyQZmQZmQZmQZmQZmQZmQZmQZmQZmQb8t25": "50000.00000000"
    },
    "fee": "0.01000000",
    "totalAmount": "50000.01000000"
  },
  "error": null,
  "id": null
}
```
