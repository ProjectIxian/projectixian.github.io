---
title: Add MultiSig TX Signature
type: core
---
## Add MultiSig TX Signature
Signs an already existing Multi-Signature wallet transaction, thereby permitting the change on the wallet or the withdrawal of funds.  
Note: If there are more allowed signers than the required signatures value, any combination of allowed signatures will work, as long as they reach the required minimum number of signatures that the wallet defines.

### Method: `addmultisigtxsignature`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | Yes | The destination wallet - wallet, which will be changed by the transaction `origtx`. |
| origtx | String | Yes | The multisig transaction you are validating with additional signature. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | One or more of the required parameters are missing or invalid. |
| RPC_TRANSACTION_ERROR | The transaction specified by `origtx` does not exist. |
| RPC_INTERNAL_ERROR | An unknown error occured while creating the transaction - please check the node's log file. |
 
### Output:
- success: the transaction is added to the Transaction Pool and broadcast to the network and the Transaction object is returned.
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/addmultisigtransaction?wallet=1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv&origtx=15-CoxywacZbqiK1sf84R6nuYyW32u5sDbTqD4VZgpeGChw

```
{
    "result": {
        "id": "50-kyfpUJEqKjJwcFv2MzdazCJcpwhqeYW3GwQM6W3tDE4DWDCL6gkwHHWKSiNy",
        "version": 3,
        "blockHeight": "50",
        "nonce": "17678",
        "signature": "8ce677e9488d89a32..5f5195399b343",
        "pubKey": "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv",
        "data": "4d734000000032..0010100000000",
        "timestamp": "1549981848",
        "type": "6",
        "amount": "0.00000000",
        "applied": "0",
        "checksum": "082cfa49212251a10be37bcc23f78e18b1faef6e64c822c2288294675c8120a13814ebd2ec5326e00a777733",
        "from": {
            "1": "0.00010000"
        },
        "to": {
            "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv": "0.00000000"
        },
        "fee": "0.00010000",
		"totalAmount": "0.00010000"
    },
    "error": null,
    "id": null
}
```