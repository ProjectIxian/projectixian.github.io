---
title: Update Name Capacity
type: core
---
## Update Name Capacity
Update Name Capacity for a specified amount.
### Method: `extendName`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | Name to be registered. |
| newCapacity | Number | Yes | New capacity in kB. |
| nextPkHash | String | No | Next Public Key hash in HEX. |
| sigPk | String | No | Signature Public Key hash in HEX. |
| sig | String | No | Signature in HEX. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the transaction in result field, which updates the capacity.

### Example:
GET http://localhost:8081/updateNameCapacity?name=test&newCapacity=200
```
{
  "result": {
    "id": "12-YgoasugxF3umGU4592jJisYRX2iU4xguC5QWa44UvCg4jZt1PT6MAeTQCVgL",
    "version": 7,
    "blockHeight": "12",
    "nonce": "890022",
    "signature": "a36e4270f8f48020e5b7add97f852...88a750a4ab9238d1528a610658da",
    "pubKey": "JHgSS7hbUNnYWsXgTbs2qz8mDm...U2U2j3NFmiMazymoYwi5i2EPPWjtyTRYRN",
    "data": "0441409be670f26e...5a7b27e5cb8c69d376b9190c8d9b56dbfea1614",
    "timestamp": "1711934655",
    "type": "4",
    "amount": "1000000.00000000",
    "applied": "0",
    "checksum": "61747aba78eb1febfeb542789f35f66733d8ef5bc692a84d56fec4264f0723f708b5dca8d9c40b1672f6ab01",
    "from": {
      "1": "1000000.01500000"
    },
    "to": {
      "125D6XDzTZzQUWsyQZmQZmQZmQZmQZmQZmQZmQZmQZmQb8t25": "1000000.00000000"
    },
    "fee": "0.01500000",
    "totalAmount": "1000000.01500000"
  },
  "error": null,
  "id": null
}
```
