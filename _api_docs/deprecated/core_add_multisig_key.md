---
title: Add MultiSig Key
type: core
---
## Add MultiSig Key
Adds the specified address to the 'allowed signers' list of the target multisig wallet. If the wallet is not a multisig wallet, this command will change it into one.  
Note: After this transaction is processed, the required signatures does not change. You must also issue a transaction `changemultisigs` to adjust the number of required signatures.  
In the event where the wallet is newly converted into a multisig wallet, the required signers value will be 1, meaning that *either* of the addresses may use the wallet.

### Method: `addmultisigkey`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | Yes | The wallet where the specified signer will be added as an allowed signer. |
| signer | String | Yes | The signing address which will be permitted to use the target wallet. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMS | One or more of the required parameters are missing or invalid. |
| RPC_INTERNAL_ERROR | An unknown error occurred while creating the transaction - please check the node's log file. |
 
### Output:
- success: the transaction is added to the Transaction Pool and broadcast to the network and the Transaction object is returned.
- fail: JSON encoded details with a non-null error and a null result

### Example:
```
{
    "result": {
        "id": "16-4aLyz5LksuySmtqHvs5YfE36uym8pqK9gh7E2bUtiqiiwjFNmvapaS55CyJ7",
        "version": 3,
        "blockHeight": "16",
        "nonce": "22160",
        "signature": "4bd9a2560d6be7..6350c4662b1edb43",
        "pubKey": "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv",
        "data": "4d73012400..d9ee46c99b5b06baad",
        "timestamp": "1549980713",
        "type": "5",
        "amount": "0.00000000",
        "applied": "0",
        "checksum": "ff0717335924a41fb2eed9decd4786d6c8d9596e98afb3897185bdb44701806555da8ca9b3724758b2edcfdd",
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