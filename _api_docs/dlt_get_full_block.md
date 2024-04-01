---
title: Get Full Block
type: dlt
---
## Get Full Block
Returns specified block data with full transactions and superblock data included.
### Method: `getfullblock`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| num | Number | Yes | Block number to retrieve. |

### Errors:

| Error | Description |
| --- | --- |
| RPC_INVALID_PARAMETER | The specified block number was invalid. |
| RPC_INTERNAL_ERROR | An unknown error occurred while fetching the block. |


### Output:
- success: block details are returned as a JSON object and the error field is set to null
- fail: JSON encoded details with a non-null error and a null result:

### Example:
GET http://localhost:8081/getfullblock?num=12

```
{
  "result": {
    "Block Number": "12",
    "Version": "11",
    "Block Checksum": "fd6885d31d98d6ece1af2625e62f3b0518de6fb0c3ca5398c8a3d9af1d558b0c02bda7603b3ffc615d69f7eef24c766ddd6b27b2504d1fe7fe4113595d19a92a",
    "Last Block Checksum": "83a701bebaee8733ffe4a8e1871a0e2e813f3ac3acaef4c889f00b80a106319a8e045b3fc5810605cafaee270b8572852e6d63ceefd451f90ae61c95863df03b",
    "Wallet State Checksum": "2600672b98467ef7125aeaecbf34b3bab13a3ff56f6ff8d30341acabe1c2e1576f4a1fe0b8c618cf4673397bdec62d84b924d1efca83890cd69a16b4ea37ed75",
    "RegName State Checksum": "ef0dd1be8dcc9fb9fec8991857ca70d1426e915c3662147e22d58af1001af8f28400832c662788eb2ec1e7347b61a356d275897c13239c727dc50fa92379adcc",
    "Sig freeze Checksum": "ae5f2adb4c253a075606685f0db901d5ecdf4013411d44fd8a260e4b9724079bd0734988080dababe0551bd20ede307ac2bca5cd868c3d9a2bc3f85b7d529243",
    "PoW field": "null",
    "Timestamp": "1711936599",
    "Difficulty": "11730489520294945089",
    "Hashrate": "2999",
    "Compacted Sigs": "False",
    "Signature count": "2",
    "Required Signature count": "2",
    "Total Signer Difficulty": "754533268.88705909",
    "Required Signer Difficulty": "5100000.00000000",
    "Transaction count": "2",
    "Transaction amount": "550000.00000000",
    "Total fees": "0.02000000",
    "Signatures": "[{\"blockNum\":0,\"blockHash\":null,\"signature\":\"RuEvTDOeQWJLSnDS2t8yUB1wY7X10Mjd00F2ommDXHs+hTWgBy9UQkYonLSLDkspLgEK/NWew4Tu9NvmocmfY5Ofg0q6rbZ9XFhsDU8f/YG6dCq0qsE6FurWdFANRdjm1CZ2scpUCqRgOGaqIlAn3VwgWiR0agLzlunNf5wZyU+Cf6Nr9xa7+6uKmGi2cVR6VADAY8o4UlMnRdU8HpAR2IpAcR7gj82MjAVwiqQA8qO5TMvvT4AkDI2PygbeZBYElZBQad3Mwm5nYn/QugHXJav9s6VcD42CgawpRpgh07UJACEPbdxQIvAFBGk2r+foP3TTdBZxYhGLrlF7IzXkGQ==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO\",\"addressNoChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMhYaCjg==\",\"signingPubKey\":\"AgAAAAAAAQAA3OJn6RNStxxcmU3kfub1YTPLwSKvLZw1foEYjniQuqWvvLCyKgfGcziaUmuj9sGfGiPKX2Qk2GtTWnTlVr7gRe6lX44kJZ+8jK+DlFV/mVChVWKmUz5NLFPNvK1897QZY2ObB5/vekUUWDzyi9rH53wWHXKHrlGGzHM60uE1jAKznPCQzAMZ3tUhC8VPYon7FORLIH101CdzlrUuMmhLb9tlNYhr894HFjOlDNMkneYpnshdbEIyI6YYojOvQpkKKv0eklRN4nzVPPytuR9+DExQvszf0SGCAf3XxPx8wzI0g13DEoA8mBBCjcTfcBpe+FmILIIIMNrZxjuDkGT7+QMAAAABAAE=\",\"checksum\":\"y+kFXtFnU/tEdWOdvuTNs5GDkGVbXVpB/MlZ+VonxzBUYUs5ezWzBMWCyeb16b2mSt0wFankgRS02rUGDQAAAA==\",\"difficulty\":\"329717278.65639821\",\"bits\":3894776630873429121}},{\"blockNum\":0,\"blockHash\":null,\"signature\":\"aQzJdOPvHswoh/5oBdsLQjy99sX1uuwAEb/DiLIbFjChnJ4QbEbVXKw/VtavR4Ii61sN5y+py4WQ4fGxPejzX8r5Psl9cMLlK2vpUKhriqjJlfcvztsADPfw37ZzJAURZH1l5YUiiZan8u1269RPzKUFTwYAZtC47y1UVf49NLnh5zczv86gatpNJKNeWFuG+eJGUK+4j3DbA+PeyPbkXVYsuUzSyH24bCMFVRArdPE0hIHSQ3ojX0MMwoRtNZGK8iMSGsYZ1+Vg1gmJuDqi0vBMbYYFktn5Novpy9x1oKyh6TLwfxafe0aN6TZT08uF/Gs5YOMaY1L7Mm6/Wfefaw==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57XoCFi8\",\"addressNoChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57Xo\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"/r2nTNsRX9+RYQKSeQUbouALPEvkGGU6DDdhQDVT390LpisQ8daqkPgP81bdyLb0t+Sh7LNf/jFlz7EKz4wdBA==\",\"signingPubKey\":\"AgAAAAAAAQAAs0gqEw13NegI7OOguIOpqdRFqvqrnaRCiqs7KGUHzYtKE/HfisoGj17KDduSxYTLwz0+0g8ZuR6shQshmmo5obbiQuDTHi78vbM3PmPkx/yPhYzi0j/vPZgANnd5R2/EYG29RhOdJDxWIPL2jCgwNc+UsGa8tZF5VVB3fb1frHDHIVV2CYWZoofOOdK9w00mcFUyvZmCQ0BC8elONMd2i2zZZuoKH5mKb9as/pT8juU9PBxcRzrOSL4agWz9Ni70cUF0TccNhFbTdouGmq3HUpv1ux44Tc+sP89Kr3elInP1eeMGM2943LMO3yVh69Ry9FJ8MLwXlDLzOfyK2BEFCQMAAAABAAE=\",\"checksum\":\"i3Bkfyxl78asZk0E+/1YbhPVrAFpat8a7BFbBZuBgRhGaorG93d8XAv11ciqcUUhUT7EQpBcmkDI7zQcCgAAAA==\",\"difficulty\":\"424815990.23066088\",\"bits\":3893955841501970586}}]",
    "Frozen Signatures": "[{\"blockNum\":0,\"blockHash\":null,\"signature\":\"RuEvTDOeQWJLSnDS2t8yUB1wY7X10Mjd00F2ommDXHs+hTWgBy9UQkYonLSLDkspLgEK/NWew4Tu9NvmocmfY5Ofg0q6rbZ9XFhsDU8f/YG6dCq0qsE6FurWdFANRdjm1CZ2scpUCqRgOGaqIlAn3VwgWiR0agLzlunNf5wZyU+Cf6Nr9xa7+6uKmGi2cVR6VADAY8o4UlMnRdU8HpAR2IpAcR7gj82MjAVwiqQA8qO5TMvvT4AkDI2PygbeZBYElZBQad3Mwm5nYn/QugHXJav9s6VcD42CgawpRpgh07UJACEPbdxQIvAFBGk2r+foP3TTdBZxYhGLrlF7IzXkGQ==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZFYZkO\",\"addressNoChecksum\":\"Ab7Bkj6gj6Bm5WukZVeptezz2oLEhLcBDXehZQ583aEuTdb+n78AQzGqRqZF\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMhYaCjg==\",\"signingPubKey\":\"AgAAAAAAAQAA3OJn6RNStxxcmU3kfub1YTPLwSKvLZw1foEYjniQuqWvvLCyKgfGcziaUmuj9sGfGiPKX2Qk2GtTWnTlVr7gRe6lX44kJZ+8jK+DlFV/mVChVWKmUz5NLFPNvK1897QZY2ObB5/vekUUWDzyi9rH53wWHXKHrlGGzHM60uE1jAKznPCQzAMZ3tUhC8VPYon7FORLIH101CdzlrUuMmhLb9tlNYhr894HFjOlDNMkneYpnshdbEIyI6YYojOvQpkKKv0eklRN4nzVPPytuR9+DExQvszf0SGCAf3XxPx8wzI0g13DEoA8mBBCjcTfcBpe+FmILIIIMNrZxjuDkGT7+QMAAAABAAE=\",\"checksum\":\"y+kFXtFnU/tEdWOdvuTNs5GDkGVbXVpB/MlZ+VonxzBUYUs5ezWzBMWCyeb16b2mSt0wFankgRS02rUGDQAAAA==\",\"difficulty\":\"329717278.65639821\",\"bits\":3894776630873429121}},{\"blockNum\":0,\"blockHash\":null,\"signature\":\"aQzJdOPvHswoh/5oBdsLQjy99sX1uuwAEb/DiLIbFjChnJ4QbEbVXKw/VtavR4Ii61sN5y+py4WQ4fGxPejzX8r5Psl9cMLlK2vpUKhriqjJlfcvztsADPfw37ZzJAURZH1l5YUiiZan8u1269RPzKUFTwYAZtC47y1UVf49NLnh5zczv86gatpNJKNeWFuG+eJGUK+4j3DbA+PeyPbkXVYsuUzSyH24bCMFVRArdPE0hIHSQ3ojX0MMwoRtNZGK8iMSGsYZ1+Vg1gmJuDqi0vBMbYYFktn5Novpy9x1oKyh6TLwfxafe0aN6TZT08uF/Gs5YOMaY1L7Mm6/Wfefaw==\",\"recipientPubKeyOrAddress\":{\"version\":1,\"addressWithChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57XoCFi8\",\"addressNoChecksum\":\"AX/5B43yaFLWKrgwFEvbKh8GK2nm/OHd/WxYoYLncQSWuHo1Ta5Lzw+o57Xo\",\"nonce\":null,\"pubKey\":null},\"powSolution\":{\"blockNum\":1,\"solution\":\"/r2nTNsRX9+RYQKSeQUbouALPEvkGGU6DDdhQDVT390LpisQ8daqkPgP81bdyLb0t+Sh7LNf/jFlz7EKz4wdBA==\",\"signingPubKey\":\"AgAAAAAAAQAAs0gqEw13NegI7OOguIOpqdRFqvqrnaRCiqs7KGUHzYtKE/HfisoGj17KDduSxYTLwz0+0g8ZuR6shQshmmo5obbiQuDTHi78vbM3PmPkx/yPhYzi0j/vPZgANnd5R2/EYG29RhOdJDxWIPL2jCgwNc+UsGa8tZF5VVB3fb1frHDHIVV2CYWZoofOOdK9w00mcFUyvZmCQ0BC8elONMd2i2zZZuoKH5mKb9as/pT8juU9PBxcRzrOSL4agWz9Ni70cUF0TccNhFbTdouGmq3HUpv1ux44Tc+sP89Kr3elInP1eeMGM2943LMO3yVh69Ry9FJ8MLwXlDLzOfyK2BEFCQMAAAABAAE=\",\"checksum\":\"i3Bkfyxl78asZk0E+/1YbhPVrAFpat8a7BFbBZuBgRhGaorG93d8XAv11ciqcUUhUT7EQpBcmkDI7zQcCgAAAA==\",\"difficulty\":\"424815990.23066088\",\"bits\":3893955841501970586}}]",
    "Frozen Signature count": "2",
    "Sig Checksum": "4b5c92cbf7be019353dc2ab9d59435f631b88f5de4fb08008e7a6aaee743b2566da7120d0e9600cff00857261318e3c78060ce2a129ea35b75a9f6babe6a6456",
    "Signer Bits": "0000000000000000",
    "TX IDs": "[\"11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4\",\"11-2HJD6X8nJoe1sDNHkPspSLBK3Qsi5wp9HBCViYe3VCTFPrcH9zLFPZG43VgsE\"]",
    "Last Superblock": "0",
    "Last Superblock checksum": "null",
    "Transactions": "[{\"id\":\"11-284bKK4GvGV9stfEGqu1CP4A9T3tTzrbkUsUd2JestPVE3KDPM5Um7sn3Dfv4\",\"version\":7,\"blockHeight\":\"11\",\"nonce\":\"313950\",\"signature\":\"54b6315260a94dfec40ef12dc63d506f7a464744f5b30c142d0999a0ab04b059e7a56e651e3c86be45e0f86d33cdec8a3add2e03104dee23358853ab3f0280954507fe1981e0692f4f93eb019311a11cfe1275517b6cf854be21b255a31c434f33437be06231d92165bb17e2aee9dc88ad8581b528ce246ab98a83fc6c266bb5ab80afcacec51c24091eda469c50612ae0bfad8be9deb6d42a9bbebdedccbd9504d7adc8df5d85ffd51877163f6ec3feb86f0be54e3d60b7ae11ad72007f1c4c280caaaeb9cf009fec22218be663d43a822c8156a9024f5e6091e9be2309f1e779fd1b35a7c6b93bd15e7099db9254a4bb265cad80a38016f32d97e6c2b6bb30c20eef49c35631e67cf0a3345fb05477ab8586e3a74dc7962f1246a676d6eeeaaf9406fb3267f72fab670caa3633f4c862b032e74c9bf80a1f035e7813468b991736c74f81007a15f48fde931d450b6e4aec19f2a1e1ef79e0b7d5e209b219883d7fa5d47c757e9c9dd2f5ca443e551eb18184c72e77461bc066dc1ff535d74b86c01fc33bcfc06af5eb0a104e05726bf1d75d34ceba9a66f2e4592974a4df5a17232acc73467783abc17e147921fccd14fd2fd9e058b5275ad723777864264f601350328758576cfc74c6dc997523d29664b39026e8ee417b85fff52f0ef42ffa6af94b8ea4327140a1e88dd9c0434d0fb0c125f6b11ba166a16472040dae03\",\"pubKey\":\"JHgSS7hbUNnYWsXgTbs2qz8mDmgPK8PnzXCTz7TZY81Sv14nRiRMrYyfbTPXWEjVRudMRo67MCyuis4wF7L6AcJUonnr6CRW5cLtCYXXxZbEpe6fvTyfJKYACxyXhVqtSNC7dxeoHN7hFPxX9MCjrupv9setJp4LswHbUmpuzqavg24F5mE3EMHts2njt3UVjX3gkmU5JQiXvQR52KdYBK6rQ3Q82d2Y4hvLcatkBhFJGwt87hUY2UM9aSyn3oCEtFE9d3vSXHYU4HcCJG8oWfcdStMgf2s9ewSB1peuRqjaAzyT6Eft7SBgMLkyQTRWgU6vh2Dd54FeMTKMkMCCX3JqrUZXmiJqijNGduttk9a4dSP4vMYyoi7DFS3dGmMiZ8x7EjygnUQrd4CJUY2B7kzaMun3XkaYwFARY2YrQH3phEsW9rYKuKxec6zR3R4yhTEtRQybLg4ZqD4MvHTW629VvSeQFgLyunf9s9isG7eX1MQqyAyxtz8qJw4uz4AKAr3dgrTi37j7qbPQqSXzaApxE3MXtB91WjYybDPwsXzKvEGYRSJsf6LHfVHKbTpfQ3HQ5aMCYBQJwo4FNf8x9dg1fgcNTpSosiUWhEi75JUDu6DMCzGWBBiR6DNT6PwGrjNnAyU3WAg9mCxLHoiiZjx6pc2EgPircSd1AgpNvgMohdU2U2j3NFmiMazymoYwi5i2EPPWjtyTRYRN\",\"timestamp\":\"1711936575\",\"type\":\"0\",\"amount\":\"500000.00000000\",\"applied\":\"12\",\"checksum\":\"c81b2017498e7c838d1d2d960c80e2c18a102959680414dd37ef143bcc777d7796b171d873683f93425a91fd\",\"from\":{\"1\":\"500000.01000000\"},\"to\":{\"4L5vswa8yS9VKsZzDJ2ry9gWY7KQon5bkvhG1CUuepkwvcy1xQmLsHA9DPmCDbufr\":\"500000.00000000\"},\"fee\":\"0.01000000\",\"totalAmount\":\"500000.01000000\"},{\"id\":\"11-2HJD6X8nJoe1sDNHkPspSLBK3Qsi5wp9HBCViYe3VCTFPrcH9zLFPZG43VgsE\",\"version\":7,\"blockHeight\":\"11\",\"nonce\":\"586146\",\"signature\":\"961868522d63d355ef24512a41eef70f6f92a2d43c2177a0174702e870d02604863adfc3e127291384fe57982103d52470015e5fc967ddf2da6cf50ab2005d732b65cea75ae0dde9b402172a4b122ba52dad1e1886fe228e80f572646839aa253b5e2b4224ea925cad02bfbac87042182df8b4449e6fb118d978eb59201e89bcc3940a03e7b81b4b222a6e6a03821d6b3bd5505135d1fb85a9ad69d4fae023caec218a7ca0bb9b387c386bb28df37d90ffb17831b77868b8f837fb14b7bdd6e7f923ec4bd363cb6c65f23e19946ae8f9fa150332fb01209b75c7d5ebc57749868318d67671578f8ec2827c5247bad48f7fd34d71494c2b02f46c614da69ea585cea8fabcf11a147e7b1ea7d7d6869bdaeec225fb58b1026e2e88c1b6d27e63045268f3e897f289ebd780af20f661a5ca609537ad1ac51f5e2f2b261be1c1b818dfe6c42b9aff3891fabd531e2137a018e73042461a60cec92761cc197fea2dd413500b78f2b39d0ffc9b313ba9aaeefdaa5f9917f2093d45afa69fc2bcd12342085f0d7122323d2783d459ba97a0be94424bb8d414e7f951cead56a4c5803a7be5d6a66e684fc5ec2bb733bf6b0c6cf2a14f91128ae045e6cedfbcbb15f9002541e4204f3d5f83df7ac9625099461164a6005323f714684f62a1c2bccb3fc5b3e082663342746fc234e5f75ab0ba4a04ef2e84af91b6664f9ad8dd00ac501406\",\"pubKey\":\"JHgSS7hbUNnYWsXgTbs2qz8mDmgPK8PnzXCTz7TZY81Sv14nRiRMrYyfbTPXWEjVRudMRo67MCyuis4wF7L6AcJUonnr6CRW5cLtCYXXxZbEpe6fvTyfJKYACxyXhVqtSNC7dxeoHN7hFPxX9MCjrupv9setJp4LswHbUmpuzqavg24F5mE3EMHts2njt3UVjX3gkmU5JQiXvQR52KdYBK6rQ3Q82d2Y4hvLcatkBhFJGwt87hUY2UM9aSyn3oCEtFE9d3vSXHYU4HcCJG8oWfcdStMgf2s9ewSB1peuRqjaAzyT6Eft7SBgMLkyQTRWgU6vh2Dd54FeMTKMkMCCX3JqrUZXmiJqijNGduttk9a4dSP4vMYyoi7DFS3dGmMiZ8x7EjygnUQrd4CJUY2B7kzaMun3XkaYwFARY2YrQH3phEsW9rYKuKxec6zR3R4yhTEtRQybLg4ZqD4MvHTW629VvSeQFgLyunf9s9isG7eX1MQqyAyxtz8qJw4uz4AKAr3dgrTi37j7qbPQqSXzaApxE3MXtB91WjYybDPwsXzKvEGYRSJsf6LHfVHKbTpfQ3HQ5aMCYBQJwo4FNf8x9dg1fgcNTpSosiUWhEi75JUDu6DMCzGWBBiR6DNT6PwGrjNnAyU3WAg9mCxLHoiiZjx6pc2EgPircSd1AgpNvgMohdU2U2j3NFmiMazymoYwi5i2EPPWjtyTRYRN\",\"data\":\"0141409be670f26e3a9d0fa3e4da555e334e7b5db53d6fd88e9e2e13d5b6a0f5e3ed2166b39cf6dce8e8282a30ae5e11bab9d92676d134fe5edff4c73235e2aec6b7c5fd002f0d000a2d01bec1923ea08fa066e56ba46557a9b5ecf3da82c484b7010d77a1650e7cdda12e4dd6fe9fbf004331aa46a6452d01bec1923ea08fa066e56ba46557a9b5ecf3da82c484b7010d77a1650e7cdda12e4dd6fe9fbf004331aa46a645\",\"timestamp\":\"1711936582\",\"type\":\"4\",\"amount\":\"50000.00000000\",\"applied\":\"12\",\"checksum\":\"e4823660dd8a05e6fdcba47b0ee8811ab28aa76ee386df3622e2450faa174bca797fbb65b73ac44da97546fd\",\"from\":{\"1\":\"50000.01000000\"},\"to\":{\"125D6XDzTZzQUWsyQZmQZmQZmQZmQZmQZmQZmQZmQZmQb8t25\":\"50000.00000000\"},\"fee\":\"0.01000000\",\"totalAmount\":\"50000.01000000\"}]",
    "Superblock segments": "{}"
  },
  "error": null,
  "id": null
}
```

Note: The block format is essentially the same as for the method `getlastblocks` and the transaction details are the same as for the method `gettransaction`.