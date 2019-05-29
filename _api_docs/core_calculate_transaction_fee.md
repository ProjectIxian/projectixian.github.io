---
title: Calculate Transaction Fee
type: core
---
## Calculate Transaction Fee
This method takes the same parameters as `addtransaction`. It does not generate a transaction object, but rather calculates the size of the resulting Transaction object and therefore the total fee required to send it. The fee is returned as a number in `result`.
 
### Method: `calculatetransactionfee`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | List of Base58 encoded recipient addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2) |
| from | String | No | List of Base58 encoded sending addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2). All addresses must belong to the same private key. If no from parameter is specified, it will be automatically generated, where the addresses with least IxiCash will be spent first. |
| fee | Number | No | Transaction fee, specified in IxiCash per kB. If no fee parameter is specified, the default (which is also the minimum) 0.00005 IxiCash per kB will be used. |

### Output:
- success: required total transaction fee is calculated and returned as a number in result.
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
GET http://localhost:8081/calculatetransactionfee?from=1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq_10000-1PC5kubyLvTmsf16CugqHpBG8B8PK4YjcfSjjLMqbUi8YvkQ_5000&to=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix_15000

```
{
	"result": 0.00005,
	"error": null,
	"id": null
}
```
