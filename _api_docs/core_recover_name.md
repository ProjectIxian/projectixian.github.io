---
title: Recover Registered Name
type: core
---
## Recover Registered Name
Recover a registered name, by using a recovery key.
### Method: `recoverName`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | Name to be registered. |
| nextRecoveryHash | String | No | Next Recovery hash in HEX. |
| nextPkHash | String | No | Next Public Key hash in HEX. |
| sigPk | String | No | Signature Public Key hash in HEX. |
| sig | String | No | Signature in HEX. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the transaction in result field, which recovers a name.

### Example:
GET http://localhost:8081/recoverName?name=test
```
{
  "result": {
    "id": "416-GmLELpqteeTLv551uUtyLADHGw2SxgfPH5EBQn8YVe2PjMZFJqaFYW1GQbCa",
    "version": 7,
    "blockHeight": "416",
    "nonce": "501522",
    "signature": "b58cc4abea30a...ba2a6a0ab227b63e2a9b9439259d7453fc38d",
    "pubKey": "JHgSS7hbUNnYWs...U2j3NFmiMazymoYwi5i2EPPWjtyTRYRN",
    "data": "0541409be670f...a1c2d7f598025146472a435e47b48edb5b23f5bd",
    "timestamp": "1711930988",
    "type": "4",
    "amount": "0.00000000",
    "applied": "0",
    "checksum": "307c3363308fee26da1464b54d4235e101bf2c4c31488d8c7d285f6d4385219c8ad99ad22e6c521abbdd29af",
    "from": {
      "1": "0.01500000"
    },
    "to": {
      "125D6XDzTZzQUWsyQZmQZmQZmQZmQZmQZmQZmQZmQZmQb8t25": "0.00000000"
    },
    "fee": "0.01500000",
    "totalAmount": "0.01500000"
  },
  "error": null,
  "id": null
}
```
