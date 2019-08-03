---
title: Calculate Transaction Fee
type: core
---
## Calculate Transaction Fee
This method takes the same parameters as `addtransaction`, except for `autofee`. It does not generate a Transaction object, but rather calculates the size of the resulting Transaction object and therefore the total fee required to send it. The fee is returned as a decimal number in `result`.

Note: If you do not specify `from`, the required funds and fee will be deducted from the node's addresses (the order is implementation-defined). Multiple addresses may be used if the first one chosen does not have sufficient funds. If the order (and amounts) matters, then use the `from` parameter and specify manually.

Note: If using the `primaryAddress` parameter, the chosen address (public key) must be a valid signer for all addresses in the `from` list. This is the case if all the `from` addresses were derived from `primaryAddress` via the `generatenewaddress` API. Mixing of `from` addresses from different keypairs is not supported, nor is mixing non-multisig and multisig wallets.


### Method: `calculatetransactionfee`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | List of Base58 encoded recipient addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2) |
| from | String | No | List of Base58 encoded sending addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2). All addresses must belong to the same private key. If no from parameter is specified, it will be automatically generated, where the addresses with least IxiCash will be spent first. |
| primaryAddress | String | No | Specify if the node is using a wallet with multiple keypairs in order to select the keypair (public key) which will be used to sign the transaction. The chosen primary address must be a valid signer for all addresses listed in the `from` field. |
| fee | Number | No | Transaction fee, specified in IxiCash per kB. If no fee parameter is specified, the default (which is also the minimum) 0.00005 IxiCash per kB will be used. |

### Output:
- success: required total transaction fee is calculated and returned as a number in result.
- fail JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_ADDRESS_OR_KEY | Addresses specified in the `from` parameter does not belong to this node, or `to` address is invalid. | 
| RPC_INVALID_PARAMS | Invalid `from` amounts, or invalid `to` amounts were specified. |
| RPC_VERIFY_ERROR | The transaction does not pass verification - this usually means that no usable `from` addresses were present, or there was something wrong with the signing key. |
| RPC_WALLET_INSUFFICIENT_FUNDS | Address or addresses specified have insufficient balance to be used for the transaction. |
| RPC_TRANSACTION_ERROR | An error occured while adding the transaction, check the message and log file for details. |
| RPC_INTERNAL_ERROR | An unexpected error occured within the node. Please see the node log for details. |

### Example:
GET http://localhost:8081/calculatetransactionfee?from=1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq_10000-1PC5kubyLvTmsf16CugqHpBG8B8PK4YjcfSjjLMqbUi8YvkQ_5000&to=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix_15000

```
{
	"result": "0.00005",
	"error": null,
	"id": null
}
```
