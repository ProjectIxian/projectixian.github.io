---
title: Add MultiSig Transaction
type: core
---
## Add MultiSig Transaction
Creates an initial transaction for a Multi-Signature wallet. The transaction is broadcast to the network, but not executed until the minimum number of required signatures are added.

### Method: `addmultisigtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | A list of destination addresses and amounts for each in the same format as for `addtransaction` |
| fee | Number | No | Desired transaction fee per KB, if you would like to increase it from the default value (lower values will be rejected. |
| from | String | No | An address of the originating Multisig wallet which will be deducted. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_WALLET_ERROR | The specified wallet is not a multisig wallet. |
| RPC_WALLET_INSUFFICIENT_FUNDS | The balance on the `from` wallet is too low for this transaction. |
| RPC_WALLET_INSUFFICIENT_FUNDS | An unknown error occurred while creating the transaction - please check the node's log file. |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |
 
### Output:
- success: the transaction is added to the Transaction Pool and broadcast to the network and the Transaction object is returned.
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/addmultisigtransaction?from=1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv&to=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix_15000

```
{
	"result": {
		"id": "15-CoxywacZbqiK1sf84R6nuYyW32u5sDbTqD4VZgpeGChw",
		"version": 2,
		"blockHeight": "15",
		"nonce": "47961",
		"signature": "537b159c193..c2ce2d7c2",
		"data": "7dc3adb039..997aa3a8452a6844cc4e6c6",
		"pubKey": "1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv",
		"timeStamp": "1547587273",
		"type": "4",
		"amount": "15000.00000000",
		"applied": "0",
		"checksum": "0765a87d5393ad8742de1f8a9ce39f2ae1f1a5a6e7bafc066e454c1856661326",
		"from": {
			"0":"15000.00015000",
		},
		"to": {
			"1CQy94c7iNv1QGv9P4UQmgLEPMNzrkq89gdVWiq87CundLWKv": "15000.00000000"
		},
		"fee": "0.00015000",
		"totalAmount": "15000.00015000"
	},
	"error": null,
	"id": null
}
```
