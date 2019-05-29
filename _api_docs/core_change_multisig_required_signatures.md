---
title: Change MultiSig Required Signatures
type: core
---
## Change MultiSig Required Signatures
Changes the required number of signatures on a multisig wallet. The required number of signatures is the minimum number of additional signatures for any transaction performed on a multisig wallet before the transaction is executed.  
Note: The required number of signatures cannot be increased to such a value that would make the wallet unusuable. (More required signatures than allowed signers.  
Note: Any combination of allowed signatures will enable the transaction, as long as the number of required signatures is reached.

### Method: `changemultisigs`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | Yes | The multisig wallet which will have its required signatures alterred. |
| sigs | String | Yes | New number of signatures. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMS | One or more of the required parameters are missing or invalid. |
| RPC_INVALID_PARAMETER | The `sigs` parameter was not a number or was out of range. |
| RPC_INTERNAL_ERROR | An unknown error occured while creating the transaction - please check the node's log file. |
 
### Output:
- success: the transaction is added to the Transaction Pool and broadcast to the network and the Transaction object is returned.
- fail: JSON encoded details with a non-null error and a null result

### Example:
```
{
    "result": {
        "id": "22-kqKnZqEUnXuHwKVU1hNU1sFtbeY49ymr9S6BPHr3n9CVbN6jadWaJ9MXhw12",
        "version": 3,
        "blockHeight": "22",
        "nonce": "55626",
        "signature": "63f03ab39d93267..2559fad1763510c9851",
        "pubKey": "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv",
        "data": "4d730302..9ee46c99b5b06baad",
        "timestamp": "1549980883",
        "type": "5",
        "amount": "0.00000000",
        "applied": "0",
        "checksum": "f22dda59a601ff28451136c0f8f84bfa9eef59d4b56c3218c635ddd11badc7c963c5f55041de9b7b347630b9",
        "from": {
            "1": "0.00010000"
        },
        "to": {
            "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv": "0.00000000"
        },
        "fee": "0.00010000"
    },
    "error": null,
    "id": null
}
```
