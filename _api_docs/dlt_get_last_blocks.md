---
title: Get Last Blocks
type: dlt
---
## Get Last Blocks
Returns the last 10 blocks as JSON objects.
### Method: `getlastblocks`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred while fetching one or more of the blocks. |

### Output:
- success: list of blocks in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result:

### Example:
GET http://localhost:8081/getlastblocks
```
{
  "result": [
    {
      "Block Number": "141",
      "Version": "11",
      "Block Checksum": "5ac6e40110fed2f51247e9e4c4d88aaed40210930b8107c2613e3c23f11d670ec6308aa596737d3b875e8d36f5ac4c27bcc89108160f01f6766c50a87b40e8ff",
      "Last Block Checksum": "992e330ab42a476f5d2bbd040a68f97fad85f5dde467918813ba8a91f6fe4cdbfcc9380a62cb716df21ac49438842efa1c63377dd709b13302a9cab0e909b186",
      "Wallet State Checksum": "086d138f4dbfc4b451e1ab6cf668920616293b50139151d23a74ef82673e73d6a9e14a001f52c87c5e44070e04123604543f6ee2e5ffa916a0fb9560b20dbb63",
      "RegName State Checksum": "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "Sig freeze Checksum": "86f20b9fb5f2c3bb251da877718cdfa3a5f56e0cf14f5793ae5ee9177e3b57acd9db7b6b65ecae303eb7bab745405773a5045964b734e6fe45a7208bde1ad95a",
      "PoW field": "null",
      "Timestamp": "1711940528",
      "Difficulty": "11730489520294945089",
      "Hashrate": "2999",
      "Compacted Sigs": "False",
      "Signature count": "3",
      "Required Signature count": "2",
      "Total Signer Difficulty": "497037650.71164806",
      "Required Signer Difficulty": "5100000.00000000",
      "Transaction count": "0",
      "Transaction amount": "0.00000000",
      "Total fees": "0.05787037",
      "Signatures": "[{\"blockNum\":141,\"blockHash\":\"WsbkARD+0vUSR+nkxNiKrtQCEJMLgQfCYT48I/EdZw7GMIqllnN9O4dejTb1rEwnvMiRCBYPAfZ2bFCoe0Do/w==\",\"signature\":\"W4IrIKPr0sjDslfZE/JQrIw8KBg5TFKlwrPt3KmZUNPtOO0Fk4s/zUdvuP5cOyFhk0B5HzxB2zNVJ2k/hyZjClmT0KcxjxfjEBpWgchzK/pFQ/Vjia3LmRnacoaZeqh6MHxU5dc+4ZgM2e7cLxuAZFtCgzWHL9Oq8n+rees87nuT/ikWjhp2s/sxRsg2dipsQ9kbfK+wEbSiuVAYWb33qO5oic9ckZLxQGTUaEZrzZaFQc+A8OXr3a8M75mmYyQd3tg6+YL8HMufEB7gU659gXYJjv/QMfKP5M33IGP26gdhv67HdjXjPSQWUzN8/7ELU7/CMO7YBYhuDUgDF0oKsw==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AZCQzUzcufMr3dRSxxy9lb+U9DNbgieu6Nk/CRAwn+if2d0zz/SSo/zwRhBhBrIN\",\"addressNoChecksum\":\"AZCQzUzcufMr3dRSxxy9lb+U9DNbgieu6Nk/CRAwn+if2d0zz/SSo/zwRhBh\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":63,\"solution\":\"+Jr2wf9M7m/4EYefb5A0EUZclf2dPZrk9DZuzWcweSYYaf9ehfSVGGaJ+ll3GcrdTJfuaooRSr+r9lXEawFJUw==\",\"signingPubKey\":\"AgAAAAAAAQAAwxG9K0FsStvIr81nN+lqw8QazZseS2nDcpxjgJDFz8nLTgCbM5PmmGUpGqIOwLd9ZMrCnztPGRwtq60ZxmTuF/aIP7CZbxX2i7AFGwaGcp0G2SOLqRYlkwQpNdtNcBVQjnRCu/k0IPebxZZZzPbwAqkLH1YaeCzfAobEdWHSwvJF4uXIWHlsh/rUHX5/pqd8iM1f+1ZLCzjFpH4o86oQNWv5BHYaqFw9espkcYpm76jsLExYHztSWuw8kJOeJPcSNWCHsZzVEwxanQYRz8dn7XUb17dsO9Yn28R2OYzfIePiyucJYNsYhTyrwRrj1aimi8b1zlK7m34T7ISjRu9gDQMAAAABAAE=\",\"checksum\":\"ZItPJoBgarW5wC25NojMkPM2nRhQJAUVOcI6GwSHQlj31eu48ixaYeln7d+ap5sQUvhoO+hsOUDPqflTEgAAAA==\",\"difficulty\":\"234338752.83116645\",\"bits\":3896268959389794361}},{\"blockNum\":141,\"blockHash\":\"WsbkARD+0vUSR+nkxNiKrtQCEJMLgQfCYT48I/EdZw7GMIqllnN9O4dejTb1rEwnvMiRCBYPAfZ2bFCoe0Do/w==\",\"signature\":\"RMwZE9XpcMkrO7uo4wecVXkWSN5k8WfQERGv/tWZnK8Tv/3IgsBp34ghcHq3eq2bDN8MwFtRs1xztsy9n5oTb01SG038QZc8Z+H9g2eHPJpU/1LBB2euIil0TjWxLgX4u5mmmiGXMmkS6fYebYniskN9C7pbOiAdf+rN6Ea2QYatlTTGRPtra4QeBMidrjVpjOnwVuqAuQIIKIuBENu4jSptd6UNV8y/eGFVoo7/iBUqrJ6704lnLeaxWM0oFyjXBiYFVCHFpXObnfQCp2gJjaY1568OIxmqK8kluzyisGHqhHmgfsEKtXmweJhC6HOByen2lAYXpA2hvnOErBWSOA==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO\",\"addressNoChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":54,\"solution\":\"tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMimsDig==\",\"signingPubKey\":\"AgAAAAAAAQAA4UuqtJql9hKoLWp/ZSHtFhG9NZKWRghWuaPvOkNn6tSjqcv5PtAh8OYdPtCIfdblgbtVyIohBjuwhAP9PL6uDFUnfVgle0z1xjDPLG/kapfXduZNRPbMB4STj/2h4yq71ar62lxNsc/9q8k/ZoDb9dIb62ZJ9zmWXW/+cIMmdd/hK8nzp28BDGKUSkRGkp4SWHw1FuRDXNmKrp5QwnFbxQL4Qiorrm7JF8O3TOLGoCk8ctALDwzAhHeLdvpBL+I1Np6fiuWfAlN1fnfJXnbJfZNWoj6AGdYkDGtA4lmgtBT2C88uWzja8G3yReOOcHlu87wglSEKSGn+3a+5mzeWwQMAAAABAAE=\",\"checksum\":\"rNNM7/zYFywZPH/NwhLEWv3qwBc+sf2H7knEwbHDakAT5wp/ltRUE2E4EwtXQk+eaxH9iefLPt2Bbci7QgAAAA==\",\"difficulty\":\"64359962.47808522\",\"bits\":3909893896016092478}},{\"blockNum\":141,\"blockHash\":\"WsbkARD+0vUSR+nkxNiKrtQCEJMLgQfCYT48I/EdZw7GMIqllnN9O4dejTb1rEwnvMiRCBYPAfZ2bFCoe0Do/w==\",\"signature\":\"2ftD6+81Fvxj2MaN5nzFUkG+hD8UqE0+jqOOyh0SSbpQm5d1X6K4AZpyAj3a/AcOWeVVpBV3EgsSrB7+haIriXW7AKMs4e1UGugt2ddErSwpVMbZELdov3OEekJoXQGu7vvAmsaarWlJxUyi+CfOVeydkhjr1UMM/qGjITjL65KDzoH/SL73jY+qEwyGBI87EEJ0IFdhYLHVsUOWd6aIAL4kD7gPxUNUoYz3m+s8GDiwm3kP7MLJja9E1rZ7m4ccgl1X83HLJS0kE1GVwdGdNYxWrVzUi7PxLFYu68RvBQ0ahPdGGEKn/rLDH9834qdiZfZaFjNPPu/uk3WJtoZQOw==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57XoCFi8\",\"addressNoChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57Xo\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":109,\"solution\":\"/r2nTNsRX9+RYQKSeQUbouALPEvkGGU6DDdhQDVT390LpisQ8daqkPgP81bdyLb0t+Sh7LNf/jFlz7EK276yZA==\",\"signingPubKey\":\"AgAAAAAAAQAA5asTegwBLItZTX70IZVtEDKAmrrJ93AXV/NVIkbF7/hMPkUn6rDfIaCkSRrOydxADtwexhGkzw6Mvizi1kfQVxHnZQwohGSUGHVgxZB5C6Y9rMawrwpkVlaMD+gliaPGroiOrgoYXBPgC44Jhucq6BWHCvDmP1os7UmiT/cz2qUE2RFrQk/K0enlZUT3vEezqgoqa+FekL6320D+kIS3KPCjRPpHYDBHygASKfAHiuA59p/N+MHj4nViG3RddSSY4/7b02l7WVcSEZnFWz42uvf9g+zRf/fZHc4dOiADUyuz7SLTrHuQVI3GeCMnJQZTUJS/RhwaE+YvhnI+FYq/WQMAAAABAAE=\",\"checksum\":\"c573X/+P3d6tR82LkmTUME8crPONQWBxZuyVlStXmKGXN+h5goMYRCFEnoPXROwYE8+uf/pcBTleepmnFQAAAA==\",\"difficulty\":\"198338935.40239639\",\"bits\":3897205330183862533}}]",
      "Sig Checksum": "7be56a933c134a92d5dee43d92b102110313208d24342df4588c03e9f34f0e63dff0a462d091494e9fdeec79c96aecc4b4ebf9aad61a2b422e3df23ed7660357",
      "Signer Bits": "0000000000000000",
      "TX IDs": "[]",
      "Last Superblock": "0",
      "Last Superblock checksum": "null"
    },
    ...
  ],
  "error": null,
  "id": null
}
```

Note: the resulting block object is exactly the same as for the `getblock` method, except that this method currently does not support returning data as binary hexadecimal strings.