---
title: Get Wallet List
type: dlt
---

## **Debug/Testnet only**

## Get Wallet List
Returns wallets from the wallet list, capped to the first 50 entries. This function is primarily used when debugging or testing and has very little value in production use.

### Method: `walletlist`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: wallet information as a JSON-encoded list in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/walletlist
```
{
  "result": [
    {
      "id": "3oCdu1pZxPBFKqnAXAec2D9WqFX7RPDwNF8bWS7KUqmGnXRm7tKWkVUEVJvYhXiZM",
      "balance": "99900004.29656710",
      "type": "Normal",
      "requiredSigs": "1",
      "allowedSigners": "null",
      "extraData": "null",
      "publicKey": "0100000000000200...ee7103000000010001"
    },
	...
	"error": null,
  "id": null
}
```
