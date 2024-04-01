---
title: Load Wallet
type: core
---
## Load Wallet
Loads another wallet from file. If wallet is already loaded, it won't reload it but just return it's primary address.
### Method: `loadWallet`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| file | String | Yes | Filename of the wallet file. |
| password | String | Yes | Password of the provided wallet. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_WALLET_ERROR | An error occurred. File doesn't exist, is incorrect or incorrect password is used. |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the wallet bytes encoded as a hexadecimal string.

### Example:
GET http://localhost:8081/loadWallet
```
{
  "result": "4iMKArchGjmLsZFsj2tYrBgPjjypvEwquB2pnbEvYAyihSeEi1FN5XBsWru2iKDXK",
  "error": null,
  "id": null
}
```
