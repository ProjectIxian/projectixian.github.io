---
title: Status
type: dlt
---
## Status
Returns the status of the node.

Note: This function overrides the `status` method of the IXICore implementation and returns more details about the DLT node.

### Method: `status`
### Input parameters:

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| verbose | Boolean | No | Additional details are returned. |
| vv | Boolean | No | Additional details are returned. |


### Errors:

| Error | Description |
| --- | --- |
| RPC_INTERNAL_ERROR | An unknown error occurred in the node. Please check the node log for details. |

### Output:
- success: status JSON-encoded in the result field with the error field set to null
- fail: JSON encoded details with a non-null error and a null result

### Example:
GET http://localhost:8081/status
```
{
  "result": {
    "Core Version": "xcore-0.9.2a",
    "Node Version": "xdc-0.9.2a",
    "Network type": "test",
    "My time": 1711941545,
    "Network time difference": 0,
    "Real network time difference": 0,
    "My External IP": "10.23.11.2",
    "My Listening Port": 10000,
    "Node Deprecation Block Limit": 4600023,
    "Update": "",
    "DLT Status": "Active",
    "Core Status": 1,
    "Block Processor Status": "Running",
    "Block Height": 174,
    "Block Version": 11,
    "Block Signature Count": 3,
    "Block Total Signer Difficulty": "353523619.92054555",
    "Block generated seconds ago": 15,
    "Network Block Height": 174,
    "Node Type": "M",
    "Connectable": true,
    "Required Consensus": 2,
    "Signer Difficulty": "10000000.00000001",
    "Signer Bits": "f4caab297fad0137",
    "Signer Hashrate": 159935,
    "Signer Last PoW Solution": {
      "blockNum": 161,
      "solution": "tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMlibShw==",
      "checksum": "F4N1XA+JRPVsgs7GUlh9XSoi4BYRCf+Z+8rDc92p9cGVonc7eutKslw2dSQz9C8z79luWCQkSSL3SXTwpwAAAA==",
      "difficulty": "25574525.73630105",
      "bits": "4922f74974f0a736"
    },
    "Signer Active PoW Solution": {
      "blockNum": 108,
      "solution": "tMfC+E0J5FblvH5C7Yz89mN9mX7fGwR0Cr4gj8qOdMuN1Qf7MPR+eobmG5wCiJLEktmEDaO4J1FuYSYMlCO4Qg==",
      "checksum": "AJ5oD5hdeL6gj0J+DXpsE/DDvLPumoHASAE4Hqulo4PDgyNh7MssFSFinZHAGImFhN5tiHJLaP/43arFZAAAAA==",
      "difficulty": "42620583.04018759",
      "bits": "68fff8ddaac56436"
    },
    "Wallets": 3,
    "Presences": 3,
    "Supply": "199949999.95000000",
    "Applied TX Count": 6,
    "Unapplied TX Count": 0,
    "Names": 1,
    "Names Reward Pool": "49990.56712969",
    "Masters": 3,
    "Relays": 0,
    "Clients": 0,
    "Queues": {
      "RcvLow": 0,
      "RcvMedium": 0,
      "RcvHigh": 0,
      "SendClients": 0,
      "SendServers": 0,
      "Logging": 1,
      "Pending Transactions": 0,
      "Storage": 0,
      "Inventory": 660,
      "Inventory Processed": 660,
      "Activity": 0
    },
    "WS Checksum": "4080272478b10685b210220ac65434db2b4d481adc2da3b0bebf2491768efd8327685d672c3e772a5358db700d34456075142f1e7547bfe81f643c3cb8bae1d6",
    "RN Checksum": "5679fbdcdf5694527dd5f2e36983ca2d6860d32d153b485a1f0529bbb788cecfbf2e5298c1b22bcb020d52de809406db8d54087a708483d3d7435178034aaaa0",
    "Blockchain Scanning Active": false,
    "Activity Scanner Last Block": 0,
    "Network Clients": [
      "10.23.11.2:52752",
      "10.23.11.2:52811"
    ],
    "Network Servers": []
  },
  "error": null,
  "id": null
}
```
