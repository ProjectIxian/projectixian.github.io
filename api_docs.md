---
layout: api_docs
title: API Documentation
---
# API Documentation

Find all the information that is needed for seamless integration with Ixian.

Ixian uses HTTP GET or POST requests (default port 8081 for DLT mainnet, 8181 for DLT testnet, 8001 for S2 mainnet and 8101 for S2 testnet) for communication with the API and always responds with a JSON response in the body of the HTTP response.

The response looks generally like this:
```
{
    "id": [currently unused],
    "result": [object],
    "error": {
        "code": [integer],
        "message": [string]
    }
}
```
All three fields are optional, but either `"result"` or `"error"` will always be present.
The structure of the `"result"` field is dependent on the type of query - please see specific API commands for details.

