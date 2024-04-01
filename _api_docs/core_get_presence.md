---
title: Get Presence
type: core
---
## Get Presence
Returns presence information of the specified wallet.
### Method: `getPresence`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| wallet | String | No | Base58 Primary Wallet address. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with the wallet bytes encoded as a hexadecimal string.

### Example:
GET http://localhost:8081/getPresence?wallet=4iMKArchGjmLsZFsj2tYrBgPjjypvEwquB2pnbEvYAyihSeEi1FN5XBsWru2iKDXK
```
{
  "result": {
    "version": 1,
    "wallet": {
      "version": 1,
      "addressWithChecksum": "Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO",
      "addressNoChecksum": "Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF",
      "nonce": null,
      "pubKey": null
    },
    "pubkey": "AQAAAAAAAgAA7Gd0ZN...Wdu7w/us52kDAAAAAQAB",
    "metadata": null,
    "addresses": [
      {
        "version": 2,
        "device": "aSKhScV0tkOaIq0IjNZyWw==",
        "address": "10.23.11.2:10000",
        "type": "M",
        "nodeVersion": "xdc-0.9.2a",
        "lastSeenTime": 1711928565,
        "signature": "ynRhobTOXAMys...M5YmAZxzeNF30vLQudLCY="
      }
    ],
    "powSolution": {
      "blockNum": 271,
      "solution": "z6qt1qRGHMwi2w+dX+gWnPHtIJhM4rmDlBqjQ7VjNuiRUzD2OxcHRs6oVzSjSSbEg2LuQghDGUfAPrZ08M8/DA==",
      "signingPubKey": "AgAAAAAAAQAAlpmt...AqfHk5HQMAAAABAAE=",
      "checksum": "4eNPs8p1lda/BsCCfCeUy9EVs1bZrP9RgH+zWAWSZuF02obk/XhhSHGQRNJVmqs0/mGkqyucT19gIRXCJAAAAA==",
      "difficulty": "116843993.98621778",
      "bits": 3901456573219758000
    }
  },
  "error": null,
  "id": null
}
```
