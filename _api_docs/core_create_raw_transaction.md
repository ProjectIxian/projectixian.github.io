---
title: Create Raw Transaction
type: core
---
## Create Raw Transaction
Generates a new IXI transaction, but doesn't add it to the Transaction Pool. This enables manual TX fee calculations and features such as offline transactions.

Note: If you do not specify `from`, the required funds and fee will be deducted from the node's addresses (the order is unspecified). Multiple addresses may be used if the first one chosen does not have sufficient funds.
If you do specify `from`, it will not include any transaction fees. It is up to the caller of this API to examine the returned Transaction object and add the fee in the `from` list. This allows greater flexibility than `autofee` or not specifying the `from` list.  
Note: The transaction can be returned in a raw (binary) form, encoded as a hexadecimal string. In order to convert it into a JSON object, use the API call [Decode Raw Transaction](https://projectixian.github.io/api_docs/core_decode_raw_transaction.html), or supply the parameter `json` when creating the raw transaction.
Note: The returned transaction is not signed.

Note: If using the `primaryAddress` parameter, the chosen address (public key) must be a valid signer for all addresses in the `from` list. This is the case if all the `from` addresses were derived from `primaryAddress` via the `generatenewaddress` API.
 
### Method: `createrawtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | List of Base58 encoded recipient addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2) |
| from | String | No | List of Base58 encoded sending addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2). All addresses must belong to the same private key. If no from parameter is specified, it will be automatically generated, where the addresses with least IxiCash will be spent first. |
| primaryAddress | String | No | Specify if the node is using a wallet with multiple keypairs in order to select the keypair (public key) which will be used to sign the transaction. The chosen primary address must be a valid signer for all addresses listed in the `from` field. |
| fee | Number | No | Transaction fee, specified in IxiCash per kB. If no fee parameter is specified, the default (which is also the minimum) 0.00005 IxiCash per kB will be used. |
| autofee | Boolean | No | If specified, the system will automatically deduct the required fee from the first address given in `from`. This parameter is not required if you have included the appropriate fees somewhere in the `from` list, or are not specifying the `from` list at all. |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |
| json | Boolean | No | If specified, the transaction will be returned as a JSON transaction object and not encoded as a hexstring. |

### Output:
- success: transaction is returned as a hexadecimal string or a JSON object and the error field is set to null. This transaction is not added to the network.
- fail JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_ADDRESS_OR_KEY | Addresses specified in the `from` parameter does not belong to this node, or an invalid `to` address was specified. | 
| RPC_INVALID_PARAMS | Invalid `from` amounts, or invalid `to` amounts were specified. |
| RPC_VERIFY_ERROR | The transaction does not pass verification - this usually means that no usable `from` addresses were present, or there was something wrong with the signing key. |
| RPC_WALLET_INSUFFICIENT_FUNDS | Address or addresses specified have insufficient balance to be used for the transaction. |
| RPC_TRANSACTION_ERROR | An error occurred while adding the transaction, check the message and log file for details. |
| RPC_INTERNAL_ERROR | An unexpected error occurred within the node. Please see the node log for details. |

### Example:
GET http://localhost:8081/createrawtransaction?from=1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq_10000-1PC5kubyLvTmsf16CugqHpBG8B8PK4YjcfSjjLMqbUi8YvkQ_5000&to=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix_15000

```
{
	"result": "0300000...0ad2a25212b003ef0259697760e0",
	"error": null,
	"id": null
}
```