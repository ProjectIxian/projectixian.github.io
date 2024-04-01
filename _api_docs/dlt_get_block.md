---
title: Get Block
type: dlt
---
## Get Block
Returns specified block data, either as a JSON object or as a binary object converted into hexadecimal.
### Method: `getblock`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| num | Number | Yes | Block number to retrieve. |
| bytes | Boolean | No | If specified, the block data will be returned as a hexadecimal string. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The specified block number was invalid. |
| RPC_INTERNAL_ERROR | An unexpected error occurred within the node. Please see the node log for details. |

### Output:
- success: block details are returned as a JSON object and the error field is set to null
- fail: JSON encoded details with a non-null error and a null result:

### Example:
GET http://localhost:8081/getblock?num=50

```
{
  "result": {
    "Block Number": "50",
    "Version": "11",
    "Block Checksum": "aa01845dbc3ab57cede02078499f3dc0c6525bfe2fc10cd120748bca849d7d963db89f3f6d2d98eeeb920fd06289afd785cdc3a63cb3a232c5bee4c48b683404",
    "Last Block Checksum": "2694d770ee01b7fb6b20d51219c98ff29add7e062b66185a9e51c3969652a3c282bb3235ad1f2c452b1efbb18f4151a3cce05dd0e3f5f0379a157b18e84c1471",
    "Wallet State Checksum": "086d138f4dbfc4b451e1ab6cf668920616293b50139151d23a74ef82673e73d6a9e14a001f52c87c5e44070e04123604543f6ee2e5ffa916a0fb9560b20dbb63",
    "RegName State Checksum": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "Sig freeze Checksum": "72d8a439230e2884b5c8ab3672057cde7fd1860d5493519ba69040242657b3a075a18d87cf5e1ca93e9a0727f0a78f05fda46a6c408f428701e0b9f15004965a",
    "PoW field": "null",
    "Timestamp": "1711937760",
    "Difficulty": "11730489520294945089",
    "Hashrate": "2999",
    "Compacted Sigs": "False",
    "Signature count": "3",
    "Required Signature count": "2",
    "Total Signer Difficulty": "1013836307.33581639",
    "Required Signer Difficulty": "5100000.00000000",
    "Transaction count": "0",
    "Transaction amount": "0.00000000",
    "Total fees": "0.05787037",
    "Signatures": "[{\"blockNum\":0,\"blockHash\":null,\"signature\":\"Yf9ba36eXRqwZ7crU4DCbeAexLfjgHo6CNEQ+vIO8EyV+7TQYlfdQmJs1yGXS7fA7WiTev1so7GizwdSH3cZ8aMUf3DncP1xfJnbV93YUnKV+Ky7zH+RlpQCcrvyrwOAD7yZcXMREKdO7k2JieHIFJoyqjCqqic0/xfYNwGC1s2+IilBBRXqpHMi9sicsgfppkVVrzp3OnOy3qHiXYRwvUWzuZA3qUF/t5AlThNFETDfVEz2YI7mMVTpe9cVu0n0cgJpeYcieHZ8JwA9NjHSMJCTNB+LBXWVOMRnsAyoFc7taaukvIDq5295i4DBn07iWNAnySnpynGElC70s3f7Mg==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AZCQzUzcufMr3dRSxxy9lb+U9DNbgieu6Nk/CRAwn+if2d0zz/SSo/zwRhBhBrIN\",\"addressNoChecksum\":\"AZCQzUzcufMr3dRSxxy9lb+U9DNbgieu6Nk/CRAwn+if2d0zz/SSo/zwRhBh\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":10,\"solution\":\"+Jr2wf9M7m/4EYefb5A0EUZclf2dPZrk9DZuzWcweSYYaf9ehfSVGGaJ+ll3GcrdTJfuaooRSr+r9lXEZUAIPA==\",\"signingPubKey\":\"AgAAAAAAAQAA3zltTaIk+mrWW3ZHcogfs3hKQ0HnhdI5o9jv87I3fdGknkMrt0IkR4rCnQ75u+oIKtgYYQK2EvHdYWuc/Xs0cOxzcDlKmuDnDvvpwoLRRoAeyiLfiru6beM3pGyCwsRbnFq8n0GIbN7ffwUDe/h97a0dov50bPFD1u1lsvPpVa21YUDkf6w4jIFubJWTrgREveqt7Q8JILD95uTpymj1nQrLlUJ77HHy2anWlaww7S08PN6V93+Ogq29ViO28UsvYGfVK8O55ILxXSjyiIGNNXObCUTF7ZrENqj82rZmJZOs+yrv6PEr6Rm2lRjLVJLX7dkEy2pGgPpKsau48uC1zQMAAAABAAE=\",\"checksum\":\"tB1TJAdVNjhJBWZ5f92FWJu9v3PBYYy72nh1URtJB2ictNjtMnkGshOcER5z5HoENQmySNIT7y0B5UGQEAAAAA==\",\"difficulty\":\"259303038.44875730\",\"bits\":3895772290364812783}},{\"blockNum\":0,\"blockHash\":null,\"signature\":\"ZE8zgV9Lfz65APa+R8eoLRUcmbvjTSMg9meO4PeEeZ7Fwf0lFKpmjH5No8asadtc5vQXPWMQPMHSLO/1RNQawZWNJockhbgY4K4OP5MrgQoxDtnbHk13W+NcPjz3VVNX3HZDvJYraCbWYqDrYVMulA3+berwL615g9JMjAxyj/T9jX7APNC8KIoMHhaq0HtjlGyPa4M6OuwLRgsz5bnVcaiiey9ietxjCYt0Z1qBGco2syg9OzJnXVTV1DvQD2pf29dPdNk4UJsuuJxrOxJTGhRhOXKjuIxPw0/Dr2YQYMlJcU8U/0CwFM3DoiHCTYqJL9MCaFyyFHXcUMTa6Dxrmg==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO\",\"addressNoChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMhYaCjg==\",\"signingPubKey\":\"AgAAAAAAAQAA3OJn6RNStxxcmU3kfub1YTPLwSKvLZw1foEYjniQuqWvvLCyKgfGcziaUmuj9sGfGiPKX2Qk2GtTWnTlVr7gRe6lX44kJZ+8jK+DlFV/mVChVWKmUz5NLFPNvK1897QZY2ObB5/vekUUWDzyi9rH53wWHXKHrlGGzHM60uE1jAKznPCQzAMZ3tUhC8VPYon7FORLIH101CdzlrUuMmhLb9tlNYhr894HFjOlDNMkneYpnshdbEIyI6YYojOvQpkKKv0eklRN4nzVPPytuR9+DExQvszf0SGCAf3XxPx8wzI0g13DEoA8mBBCjcTfcBpe+FmILIIIMNrZxjuDkGT7+QMAAAABAAE=\",\"checksum\":\"y+kFXtFnU/tEdWOdvuTNs5GDkGVbXVpB/MlZ+VonxzBUYUs5ezWzBMWCyeb16b2mSt0wFankgRS02rUGDQAAAA==\",\"difficulty\":\"329717278.65639821\",\"bits\":3894776630873429121}},{\"blockNum\":0,\"blockHash\":null,\"signature\":\"e3Ij2Y3RkuA16pbhfbTWmwloMff11IuVzGEsRAcsVkT6wHCgRAZLhQ7w5gXEtsRUsdgBgQowOmJcLKHeOuxVX47RTfCGsSv9CScNXtsrLRysIBhZUjY4W9326U+Qcqa4XDwuu0+kwMInA0++fYqwBBzmH//filvZQge3N85j34hK9BSEXVp91y3b8zxMp8KBuJ+C4buUIQR3XzQ6C7hoc1PERknnYd+FXdU2DONCkkcFRtmiUUxLRj0mXMBvqUj2vu/zkj4lWgp+DLuVI1wc00Q9Q/rVXAH+6w+7qe2DuXfnuNfkd7ojxR47XJjyexdtp9/hqykwpnQCNq7/LReS3w==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57XoCFi8\",\"addressNoChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57Xo\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"/r2nTNsRX9+RYQKSeQUbouALPEvkGGU6DDdhQDVT390LpisQ8daqkPgP81bdyLb0t+Sh7LNf/jFlz7EKz4wdBA==\",\"signingPubKey\":\"AgAAAAAAAQAAs0gqEw13NegI7OOguIOpqdRFqvqrnaRCiqs7KGUHzYtKE/HfisoGj17KDduSxYTLwz0+0g8ZuR6shQshmmo5obbiQuDTHi78vbM3PmPkx/yPhYzi0j/vPZgANnd5R2/EYG29RhOdJDxWIPL2jCgwNc+UsGa8tZF5VVB3fb1frHDHIVV2CYWZoofOOdK9w00mcFUyvZmCQ0BC8elONMd2i2zZZuoKH5mKb9as/pT8juU9PBxcRzrOSL4agWz9Ni70cUF0TccNhFbTdouGmq3HUpv1ux44Tc+sP89Kr3elInP1eeMGM2943LMO3yVh69Ry9FJ8MLwXlDLzOfyK2BEFCQMAAAABAAE=\",\"checksum\":\"i3Bkfyxl78asZk0E+/1YbhPVrAFpat8a7BFbBZuBgRhGaorG93d8XAv11ciqcUUhUT7EQpBcmkDI7zQcCgAAAA==\",\"difficulty\":\"424815990.23066088\",\"bits\":3893955841501970586}}]",
    "Frozen Signatures": "[{\"blockNum\":0,\"blockHash\":null,\"signature\":\"Yf9ba36eXRqwZ7crU4DCbeAexLfjgHo6CNEQ+vIO8EyV+7TQYlfdQmJs1yGXS7fA7WiTev1so7GizwdSH3cZ8aMUf3DncP1xfJnbV93YUnKV+Ky7zH+RlpQCcrvyrwOAD7yZcXMREKdO7k2JieHIFJoyqjCqqic0/xfYNwGC1s2+IilBBRXqpHMi9sicsgfppkVVrzp3OnOy3qHiXYRwvUWzuZA3qUF/t5AlThNFETDfVEz2YI7mMVTpe9cVu0n0cgJpeYcieHZ8JwA9NjHSMJCTNB+LBXWVOMRnsAyoFc7taaukvIDq5295i4DBn07iWNAnySnpynGElC70s3f7Mg==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AZCQzUzcufMr3dRSxxy9lb+U9DNbgieu6Nk/CRAwn+if2d0zz/SSo/zwRhBhBrIN\",\"addressNoChecksum\":\"AZCQzUzcufMr3dRSxxy9lb+U9DNbgieu6Nk/CRAwn+if2d0zz/SSo/zwRhBh\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":10,\"solution\":\"+Jr2wf9M7m/4EYefb5A0EUZclf2dPZrk9DZuzWcweSYYaf9ehfSVGGaJ+ll3GcrdTJfuaooRSr+r9lXEZUAIPA==\",\"signingPubKey\":\"AgAAAAAAAQAA3zltTaIk+mrWW3ZHcogfs3hKQ0HnhdI5o9jv87I3fdGknkMrt0IkR4rCnQ75u+oIKtgYYQK2EvHdYWuc/Xs0cOxzcDlKmuDnDvvpwoLRRoAeyiLfiru6beM3pGyCwsRbnFq8n0GIbN7ffwUDe/h97a0dov50bPFD1u1lsvPpVa21YUDkf6w4jIFubJWTrgREveqt7Q8JILD95uTpymj1nQrLlUJ77HHy2anWlaww7S08PN6V93+Ogq29ViO28UsvYGfVK8O55ILxXSjyiIGNNXObCUTF7ZrENqj82rZmJZOs+yrv6PEr6Rm2lRjLVJLX7dkEy2pGgPpKsau48uC1zQMAAAABAAE=\",\"checksum\":\"tB1TJAdVNjhJBWZ5f92FWJu9v3PBYYy72nh1URtJB2ictNjtMnkGshOcER5z5HoENQmySNIT7y0B5UGQEAAAAA==\",\"difficulty\":\"259303038.44875730\",\"bits\":3895772290364812783}},{\"blockNum\":0,\"blockHash\":null,\"signature\":\"ZE8zgV9Lfz65APa+R8eoLRUcmbvjTSMg9meO4PeEeZ7Fwf0lFKpmjH5No8asadtc5vQXPWMQPMHSLO/1RNQawZWNJockhbgY4K4OP5MrgQoxDtnbHk13W+NcPjz3VVNX3HZDvJYraCbWYqDrYVMulA3+berwL615g9JMjAxyj/T9jX7APNC8KIoMHhaq0HtjlGyPa4M6OuwLRgsz5bnVcaiiey9ietxjCYt0Z1qBGco2syg9OzJnXVTV1DvQD2pf29dPdNk4UJsuuJxrOxJTGhRhOXKjuIxPw0/Dr2YQYMlJcU8U/0CwFM3DoiHCTYqJL9MCaFyyFHXcUMTa6Dxrmg==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO\",\"addressNoChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMhYaCjg==\",\"signingPubKey\":\"AgAAAAAAAQAA3OJn6RNStxxcmU3kfub1YTPLwSKvLZw1foEYjniQuqWvvLCyKgfGcziaUmuj9sGfGiPKX2Qk2GtTWnTlVr7gRe6lX44kJZ+8jK+DlFV/mVChVWKmUz5NLFPNvK1897QZY2ObB5/vekUUWDzyi9rH53wWHXKHrlGGzHM60uE1jAKznPCQzAMZ3tUhC8VPYon7FORLIH101CdzlrUuMmhLb9tlNYhr894HFjOlDNMkneYpnshdbEIyI6YYojOvQpkKKv0eklRN4nzVPPytuR9+DExQvszf0SGCAf3XxPx8wzI0g13DEoA8mBBCjcTfcBpe+FmILIIIMNrZxjuDkGT7+QMAAAABAAE=\",\"checksum\":\"y+kFXtFnU/tEdWOdvuTNs5GDkGVbXVpB/MlZ+VonxzBUYUs5ezWzBMWCyeb16b2mSt0wFankgRS02rUGDQAAAA==\",\"difficulty\":\"329717278.65639821\",\"bits\":3894776630873429121}},{\"blockNum\":0,\"blockHash\":null,\"signature\":\"e3Ij2Y3RkuA16pbhfbTWmwloMff11IuVzGEsRAcsVkT6wHCgRAZLhQ7w5gXEtsRUsdgBgQowOmJcLKHeOuxVX47RTfCGsSv9CScNXtsrLRysIBhZUjY4W9326U+Qcqa4XDwuu0+kwMInA0++fYqwBBzmH//filvZQge3N85j34hK9BSEXVp91y3b8zxMp8KBuJ+C4buUIQR3XzQ6C7hoc1PERknnYd+FXdU2DONCkkcFRtmiUUxLRj0mXMBvqUj2vu/zkj4lWgp+DLuVI1wc00Q9Q/rVXAH+6w+7qe2DuXfnuNfkd7ojxR47XJjyexdtp9/hqykwpnQCNq7/LReS3w==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57XoCFi8\",\"addressNoChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57Xo\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"/r2nTNsRX9+RYQKSeQUbouALPEvkGGU6DDdhQDVT390LpisQ8daqkPgP81bdyLb0t+Sh7LNf/jFlz7EKz4wdBA==\",\"signingPubKey\":\"AgAAAAAAAQAAs0gqEw13NegI7OOguIOpqdRFqvqrnaRCiqs7KGUHzYtKE/HfisoGj17KDduSxYTLwz0+0g8ZuR6shQshmmo5obbiQuDTHi78vbM3PmPkx/yPhYzi0j/vPZgANnd5R2/EYG29RhOdJDxWIPL2jCgwNc+UsGa8tZF5VVB3fb1frHDHIVV2CYWZoofOOdK9w00mcFUyvZmCQ0BC8elONMd2i2zZZuoKH5mKb9as/pT8juU9PBxcRzrOSL4agWz9Ni70cUF0TccNhFbTdouGmq3HUpv1ux44Tc+sP89Kr3elInP1eeMGM2943LMO3yVh69Ry9FJ8MLwXlDLzOfyK2BEFCQMAAAABAAE=\",\"checksum\":\"i3Bkfyxl78asZk0E+/1YbhPVrAFpat8a7BFbBZuBgRhGaorG93d8XAv11ciqcUUhUT7EQpBcmkDI7zQcCgAAAA==\",\"difficulty\":\"424815990.23066088\",\"bits\":3893955841501970586}}]",
    "Frozen Signature count": "3",
    "Sig Checksum": "2b5052b73871467441cba99f42214f4ea2507695f281070bc267abb3deef6d9117e6022451e707918991ea3418d3c9c3893a342ddaa1973c8fbc44268966bec4",
    "Signer Bits": "0000000000000000",
    "TX IDs": "[]",
    "Last Superblock": "0",
    "Last Superblock checksum": "null"
  },
  "error": null,
  "id": null
}
```