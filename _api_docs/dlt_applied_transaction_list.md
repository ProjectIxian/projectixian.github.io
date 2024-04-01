---
title: Applied Transaction List
type: dlt
---
## Applied Transaction List
Returns the list of applied transactions in the memory pool.
### Method: `txa`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| fromIndex | Number | No | Starting index (used for splitting the results into pages). |
| count | Number | No | Number of results to fetch. By itself, this parameter is useful for fetching only the recent history, but combined with `fromIndex` this parameters enables fetching results in pages. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: applied transaction list JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/txa
```
{
  "result": {
    "11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4": {
      "id": "11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4",
      "version": 7,
      "blockHeight": "11",
      "nonce": "313950",
      "signature": "54b6315260a94dfec40...a166a16472040dae03",
      "pubKey": "JHgSS7hbUNnYWsXgTbs2...5i2EPPWjtyTRYRN",
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
    ...
  },
  "error": null,
  "id": null
}
```