---
title: Delete MultiSig Key
type: core
---
## Delete MultiSig Key
Deletes the specified address from the 'allowed signers' list of the target multisig wallet. If all other signers, except the original wallet owner, are removed, the wallet will be converted into a normal wallet.  
Note: You cannot use this to remove the original owner of the wallet. You cannot remove a signer if doing so will leave the wallet unusuable (if the change would bring the number of allowed signers below the required signatures).

### Method: `delmultisigkey`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | Yes | The wallet where the specified signer will be removed from allowed signers. |
| signer | String | Yes | The signing address which will be removed from the target wallet. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMS | One or more of the required parameters are missing or invalid. |
| RPC_INTERNAL_ERROR | An unknown error occured while creating the transaction - please check the node's log file. |
 
### Output:
- success: the transaction is added to the Transaction Pool and broadcast to the network and the Transaction object is returned.
- fail: JSON encoded details with a non-null error and a null result

### Example:
```
{
    "result": {
        "id": "25-27QZ5kmBCWp8e7ufkbJrxX2HqaFCQakHk7SsDvfea4HeBXMqV28yCw6HXXihb",
        "version": 3,
        "blockHeight": "25",
        "nonce": "84286",
        "signature": "6789fc53819b..5783981f06947c7b21",
        "pubKey": "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv",
        "data": "4d730224..dc101d9ee46c99b5b06baad",
        "timestamp": "1549981011",
        "type": "5",
        "amount": "0.00000000",
        "applied": "0",
        "checksum": "7fe9182d6de44916ab9d074c46c214adfcdf1fe2e80f3a42e2074f04be8f0a38e66caeacab69e0fc8e1d48f1",
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
