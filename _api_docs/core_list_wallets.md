---
title: List Wallets
type: core
---
## List Wallets
Lists all loaded wallets.

### Method: `listWallets`
### Input parameters:
None.

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- a JSON object with list of loaded wallets in result field on success.

### Example:
GET http://localhost:8081/listWallets
```
{
  "result": [
    "3WFuwLRowdZBTUUGqmUvSfx14U1tT1c2bcpSV3vai7ghi4fQ4jy4Jjf9xq3Gg"
  ],
  "error": null,
  "id": null
}
```
