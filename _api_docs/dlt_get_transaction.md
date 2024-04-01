---
title: Get Transaction
type: dlt
---
## Get Transaction
Returns the information about a specified transaction.
### Method: `gettransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | String | Yes | Transaction id of the transaction to retrieve |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The specified transaction id was invalid. |
| RPC_INTERNAL_ERROR | An unknown error occurred while fetching the transaction details. |

### Output:
- success: transaction information JSON encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/gettransaction?id=11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4
```
{
  "result": {
    "id": "11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4",
    "version": 7,
    "blockHeight": "11",
    "nonce": "313950",
    "signature": "54b6315260a94d...6b11ba166a16472040dae03",
    "pubKey": "JHgSS7hbUNnYWsXgT...ohdU2U2j3NFmiMazymoYwi5i2EPPWjtyTRYRN",
    "timestamp": "1711936575",
    "type": "0",
    "amount": "500000.00000000",
    "applied": "12",
    "checksum": "c81b2017498e7c838d1d2d960c80e2c18a102959680414dd37ef143bcc777d7796b171d873683f93425a91fd",
    "from": {
      "1": "500000.01000000"
    },
    "to": {
      "4L5vswa8yS9VKsZzDJ2ry9gWY7KQon5bkvhG1CUuepkwvcy1xQmLsHA9DPmCDbufr": "500000.00000000"
    },
    "fee": "0.01000000",
    "totalAmount": "500000.01000000"
  },
  "error": null,
  "id": null
}
```
