---
title: Get Registered Names List
type: dlt
---

## **Debug only**

## Get Registered Names List
Returns registered names, capped to the first 50 entries. This function is primarily used when debugging or testing and has very little value in production use.

### Method: `regNameList`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: Registered Names as a JSON-encoded list in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/regNameList
```
{
  "result": [
    {
      "name": "409be670f26e3a9d0fa3e4da555e334e7b5db53d6fd88e9e2e13d5b6a0f5e3ed2166b39cf6dce8e8282a30ae5e11bab9d92676d134fe5edff4c73235e2aec6b7c5",
      "capacity": "10",
      "expirationBlockHeight": "1728404",
      "updatedBlockHeight": "447",
      "allowSubnames": "False",
      "subnamePrice": "0.00000000",
      "subnameFeeRecipient": "null",
      "dataRecords": {},
      "dataMerkleRoot": "null",
      "recoveryHash": "01bec1923ea08fa066e56ba46557a9b5ecf3da82c484b7010d77a1650e7cdda12e4dd6fe9fbf004331aa46a645",
      "nextPkHash": "01bec1923ea08fa066e56ba46557a9b5ecf3da82c484b7010d77a1650e7cdda12e4dd6fe9fbf004331aa46a645",
      "signaturePk": "010000000000020000ec...fb682dabdcce76903000000010001",
      "signature": "10a7c0de5fb682d2838a...25146472a435e47b48edb5b23f5bd"
    }
  ],
  "error": null,
  "id": null
}
```
