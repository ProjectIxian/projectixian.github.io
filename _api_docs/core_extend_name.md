---
title: Extend Name Registration
type: core
---
## Extend Name Registration
Extend name registration for a specified amount of time.
### Method: `extendName`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| name | String | Yes | Name to be registered. |
| extensionTime | Number | Yes | Time in blocks to extend the name for. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the transaction in result field, which extends a name.

### Example:
GET http://localhost:8081/extendname?name=test&extensionTime=864000
```
{
  "result": {
    "id": "446-iSQxh1KZf5bHADpfg9rFnBQWJksF8jtNbQEGMkvR92rskETRK46cvov29Rko",
    "version": 7,
    "blockHeight": "446",
    "nonce": "93785",
    "signature": "5155031ee73...13e3f077009811",
    "pubKey": "JHgSS7hbUN...Ywi5i2EPPWjtyTRYRN",
    "data": "0341409...02f0d00",
    "timestamp": "1711931901",
    "type": "4",
    "amount": "50000.00000000",
    "applied": "0",
    "checksum": "7f72ba1ae8b47b3efb5283fbef7256d861d9e8c2fbdf436faedb4042769991500f41ab8b066dd159a4fcaabc",
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
