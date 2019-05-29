---
title: Status
type: core
---
## Status
Returns the status of the node.
### Method: `status`
### Input parameters:
None

### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occured in the node. Please check the node log for details. |

### Output:
- success: status JSON-encoded in tje result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/status
```
{
	"result": {
		"Node Version": "xdc-0.6.1a-dev",
		"Network type": "testnet",
		"My time": 1548942886,
		"Network time difference": 0,
		"My External IP": "172.20.207.81",
		"Queues": "Rcv: 0, RcvTx: 0, SendClients: 0, SendServers: 0, Storage: 0, Logging: 0",
		"Node Deprecation Block Limit": 216000,
		"DLT Status": "Active",
		"Block Processor Status": "Running",
		"Block Height":130, "Block Version": 2,
		"Required Consensus": 3,
		"Wallets": 5,
		"Presences": 3,
		"Supply": "200020024.00235090",
		"Applied TX Count": 126,
		"Unapplied TX Count": 0,
		"WS Checksum": "6f9e68d6ea27ee59a6f40f6493502c78e639fde149e6a4a9220d197deb21b1cb",
		"WS Delta Checksum": "6f9e68d6ea27ee59a6f40f6493502c78e639fde149e6a4a9220d197deb21b1cb",
		"Network Clients": [
			"172.20.207.81:55700",
			"172.20.207.81:55859"
		],
		"Network Servers": [
		],
		"Masters": 3,
		"Relays": 0,
		"Clients": 0,
		"Workers": 0
	},
	"error": null,
	"id": null
}
```
