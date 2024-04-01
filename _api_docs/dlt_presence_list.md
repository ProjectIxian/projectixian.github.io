---
title: Presence List
type: dlt
---
## Presence List
Returns the presence list information.
### Method: `pl`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: presence list JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/pl
```
{
  "result": [
    {
      "version": 1,
      "wallet": {
        "version": 1,
        "addressWithChecksum": "Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO",
        "addressNoChecksum": "Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF",
        "nonce": null,
        "pubKey": null
      },
      "pubkey": "AQAAAAAAAgAA7...u7w/us52kDAAAAAQAB",
      "metadata": null,
      "addresses": [
        {
          "version": 2,
          "device": "izLPtZb0b0qi3AWT061Ihw==",
          "address": "10.23.11.2:10000",
          "type": "M",
          "nodeVersion": "xdc-0.9.2a",
          "lastSeenTime": 1711940304,
          "signature": "Rxcejj...mrezzoITgxAN9rS5eBg9Y="
        }
      ],
      "powSolution": {
        "blockNum": 54,
        "solution": "tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMimsDig==",
        "signingPubKey": "AgAAAAAAAQAA4...AAAABAAE=",
        "checksum": "rNNM7/zYFywZPH/NwhLEWv3qwBc+sf2H7knEwbHDakAT5wp/ltRUE2E4EwtXQk+eaxH9iefLPt2Bbci7QgAAAA==",
        "difficulty": "64359962.47808522",
        "bits": 3909893896016092700
      }
    },
    ...
  ],
  "error": null,
  "id": null
}
```