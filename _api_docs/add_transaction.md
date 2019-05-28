---
title: Add Transaction
---
## Add Transaction
Generates a new IXI transaction to transfer funds between wallets. Multiple 'from' wallets with different amounts may be specified, as well as multiple target wallets and amounts.

Note: If you do not specify `from`, the required funds and fee will be deducted from the node's addresses (the order is unspecified). Multiple addresses may be used if the first one chosen does not have sufficient funds.
Alternatively, if you do specify `from`, your total amount must include the required transaction fee. The transaction fee may be calculated in multiple ways:
 - Call the API `createrawtransaction`, which will generate a transaction object but not send it to the network. In this way you can measure the object's size and calculate an appropriate fee. This API takes the same parameters as `addtransaction`.
 - Call the API `calculatetransactionfee`, which will return the required fee amount for the given transaction. This API takes the same parameters as `addtransaction`.
 - Use the `autofee` parameter, which will deduct the required transaction fee from the first specified `from` address. The address must have sufficient funds to cover both the amount and fee. You can change the order of `from` addresses to ensure this.
 
### Method: `addtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | List of Base58 encoded recipient addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2) |
| from | String | No | List of Base58 encoded sending addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2). All addresses must belong to the same private key. If no from parameter is specified, it will be automatically generated, where the addresses with least IxiCash will be spent first. |
| fee | Number | No | Transaction fee, specified in IxiCash per kB. If no fee parameter is specified, the default (which is also the minimum) 0.00005 IxiCash per kB will be used. |
| autofee | Boolean | No | If specified, the system will automatically deduct the required fee from the first address given in `from`. This parameter is not required if you have included the appropriate fees somewhere in the `from` list, or are not specifying the `from` list at all. |

### Output:
- success: transaction details are returned as a JSON object and the error field is set to null:
- fail JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_ADDRESS_OR_KEY | Addresses specified in the `"from"` parameter does not belong to this node. | 
| RPC_INVALID_PARAMS | Invalid `"from"` amounts, or invalid `"to"` addresses or amounts were specified. |
| RPC_VERIFY_ERROR | The transaction does not pass verification - this usually means that no usable `"from"` addresses were present, or there was something wrong with the signing key. |
| RPC_WALLET_INSUFFICIENT_FUNDS | Address or addresses specified have insufficient balance to be used for the transaction. |
| RPC_TRANSACTION_ERROR | An error occured while adding the transaction, check the message and log file for details. |
| RPC_INTERNAL_ERROR | An unexpected error occured within the node. Please see the node log for details. |

### Example:
GET http://localhost:8081/addtransaction?from=1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq_10000-1PC5kubyLvTmsf16CugqHpBG8B8PK4YjcfSjjLMqbUi8YvkQ_5000&to=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix_15000&autofee=true

```
{
	"result": {
		"id": "15-CoxywacZbqiK1sf84R6nuYyW32u5sDbTqD4VZgpeGChw",
		"version": 2,
		"blockHeight": "15",
		"nonce": "47961",
		"signature": "537b1..0c2ce2d7c2",
		"pubKey": "1FUryQwQL5bs83yxnf5ywkkBDZjV6XezBz5BmMX5ioCRsRVmj",
		"timeStamp": "1547587273",
		"type": "0",
		"amount": "1000.00000000",
		"applied": "0",
		"checksum": "0765a87d5393ad8742de1f8a9ce39f2ae1f1a5a6e7bafc066e454c1856661326",
		"from": {
			"1":"10000.00005000",
			"2":"5000.00000000"
		},
		"to": {
			"153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix": "15000.00000000"
		},
		"fee": "0.00005000"
	},
	"error": null,
	"id": null
}
```