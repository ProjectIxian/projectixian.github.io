---
title: Count Node Versions
type: dlt
---
## Status
Returns the Ixian software versions in use on the network.
### Method: `countnodeversions`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |


### Output:
- node versions are returned as a JSON object and the error field is set to null:

### Example:
GET http://localhost:8081/countnodeversions
```
{
    "result": {
        "xdc-0.6.6-dev": 35,
        "xdc-0.6.5-dev": 21
        },
    "error": null,
    "id": null
}
```
