---
title: Update Name Records
type: core
---
## Update Name Records
Update Name Records.
### Method: `updateNameRecord`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | Name to be registered. |
| records[] | Array | Yes | Array of records [ "key,TTL,data" ]. |
| nextPkHash | String | No | Next Public Key hash in HEX. |
| sigPk | String | No | Signature Public Key hash in HEX. |
| sig | String | No | Signature in HEX. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the transaction in result field, which updates the name records.

### Example:
GET http://localhost:8081/updateNameRecord?name=test&records[]=abc,2,testData1&records[]=def,3,testData2&records[]=ghi,3,testData3
```
{
  "result": {
    "id": "12-uFz12W98ebdbtMg9egjP5p9f1zWgF3tkQ9YAbCB13LNE6WJmPUM59rDctZ1r",
    "version": 7,
    "blockHeight": "12",
    "nonce": "953806",
    "signature": "3b3faa9a726f0818fa1795be...865d7ff8701b28b059b39c4112cd2",
    "pubKey": "JHgSS7hbUNnYWsXgTbs2qz8mD...FmiMazymoYwi5i2EPPWjtyTRYRN",
    "data": "0241409be670f26e3a9d0fa3e...f34df22cd7fbb324",
    "timestamp": "1711936613",
    "type": "4",
    "amount": "0.00000000",
    "applied": "0",
    "checksum": "a0ba16873ebe68f2f1f319d9f199dbb453a53275aae5f4aad2fcbe0ae533e524cc1c2507498df1448af53599",
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
