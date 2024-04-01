---
title: Add Transaction
type: core
---
## Add Transaction
Generates a new IXI transaction to transfer funds between wallets. Multiple 'from' wallets with different amounts may be specified, as well as multiple target wallets and amounts.

Note: If you do not specify `from`, the required funds and fee will be deducted from the node's addresses (the order depends on the particular implementation). Multiple addresses may be used if the first one chosen does not have sufficient funds.
Alternatively, if you do specify `from`, your total amount must include the required transaction fee. The transaction fee may be calculated in multiple ways:
 - Call the API `createrawtransaction`, which will generate a transaction object but not send it to the network. In this way you can measure the object's size and calculate an appropriate fee. This API takes the same parameters as `addtransaction`.
 - Call the API `calculatetransactionfee`, which will return the required fee amount for the given transaction. This API takes the same parameters as `addtransaction`.
 - Use the `autofee` parameter, which will deduct the required transaction fee from the first specified `from` address. The address must have sufficient funds to cover both the amount and fee. You can change the order of `from` addresses to ensure this.
 
Note: If using the `primaryAddress` parameter, the chosen address (public key) must be a valid signer for all addresses in the `from` list. This is the case if all the `from` addresses were derived from `primaryAddress` via the `generatenewaddress` API. Mixing of `from` addresses from different keypairs is not supported, nor is mixing non-multisig and multisig wallets.
 
### Method: `addtransaction`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| to | String | Yes | List of Base58 encoded recipient addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2) |
| from | String | No | List of Base58 encoded sending addresses with their amounts. Amounts are separated by '_' character. Addresses are separated by '-' character (i.e. address1_amount1-address2_amount2). All addresses must belong to the same private key. If no from parameter is specified, it will be automatically generated, where the addresses with least IxiCash will be spent first. |
| primaryAddress | String | No | Specify if the node is using a wallet with multiple keypairs in order to select the keypair (public key) which will be used to sign the transaction. The chosen primary address must be a valid signer for all addresses listed in the `from` field. |
| fee | Number | No | Transaction fee, specified in IxiCash per kB. If no fee parameter is specified, the default (which is also the minimum) 0.00005 IxiCash per kB will be used. |
| autofee | Boolean | No | If specified, the system will automatically deduct the required fee from the first address given in `from`. This parameter is not required if you have included the appropriate fees somewhere in the `from` list, or are not specifying the `from` list at all. |
| wallet | String | No | Base58 Primary Wallet address in case multiple wallets are being used. |

### Output:
- success: transaction details are returned as a JSON object and the error field is set to null:
- fail JSON encoded details with a non-null error and a null result:

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_ADDRESS_OR_KEY | Addresses specified in the `from` parameter does not belong to this node, or the address in the `to` parameter was invalid.  | 
| RPC_INVALID_PARAMS | Invalid `from` amounts, or invalid `to` amounts were specified. |
| RPC_VERIFY_ERROR | The transaction does not pass verification - this usually means that no usable `"from"` addresses were present, or there was something wrong with the signing key. |
| RPC_WALLET_INSUFFICIENT_FUNDS | Address or addresses specified have insufficient balance to be used for the transaction. |
| RPC_INTERNAL_ERROR | An unexpected error occurred within the node. Please see the node log for details. |

### Example:
GET http://localhost:8081/addtransaction?from=1JKZFqQs4yiH6Dq4bfom7xcpL6zG53DrjcY6HD9QJ6cRWmXdq_10000-1PC5kubyLvTmsf16CugqHpBG8B8PK4YjcfSjjLMqbUi8YvkQ_5000&to=153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix_15000&autofee=true

```
{
  "result": {
    "id": "11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4",
    "version": 7,
    "blockHeight": "11",
    "nonce": "313950",
    "signature": "54b6315260a94dfec4...a166a16472040dae03",
    "pubKey": "JHgSS7hbUNnYWsqz8m...wi5i2EPPWjtyTRYRN",
    "timestamp": "1711936575",
    "type": "0",
    "amount": "515000.00000000",
    "applied": "0",
    "checksum": "c81b2017498e7c838d1d2d960c80e2c18a102959680414dd37ef143bcc777d7796b171d873683f93425a91fd",
    "from": {
      "1": "515000.01000000"
    },
    "to": {
      "153xXfVi1sznPcRqJur8tutgrZecNVYGSzetp47bQvRfNuDix": "15000.00000000",
      "4L5vswa8yS9VKsZzDJ2ry9gWY7KQon5bkvhG1CUuepkwvcy1xQmLsHA9DPmCDbufr": "500000.00000000"
    },
    "fee": "0.01000000",
    "totalAmount": "515000.01000000"
  }
  "error": null,
  "id": null
}
```