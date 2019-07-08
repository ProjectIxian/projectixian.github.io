---
title: Stress Test
type: dlt
---
## **DEBUG/TESTNET ONLY**

## Stress Test
Performs a stress test of the Ixian DLT network. **DEBUG/TESTNET ONLY**
Depending on the type of the test, the node will execute a number of transactions, protocol messages or connections, 
all of which is intended to measure the network's throughput and latency values when the DLT is running under load.

Note: Normal transaction rules apply, so transaction fees **will** be paid if this is executed in the live network, or the node sending these connection requests and protocol messages will be blacklisted.
Note: The target for connection and protocol tests is a node on the local network. This must be changed by recompiling the source code, so as to protect the production network if someone accidentally calls
this API function.

### Method: `stress`
### Input parameters:
| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| type | String | no | Type of the stress test to perform. Transaction Spam is the default. |
| num | Number | no | Number of requests or transactions to send. |

### Types
| Name | Description |
| --- | --- |
| txspam | Send a large number of transctions, each 0.01 Ixi, to the foundation address. Normal transaction fees apply. |
| protocol | Send a fake PoW solution to the predefined node. |
| connect | Attempt to connect to the pre-programmed local node numerous times. |
| txfilegen | Generates a binary file with transactions to allow faster sending. |
| txfilespam | Sends transactions from a binary file. |

### Errors:
None

### Output:
- a JSON object containinly only the string "Stress test started" as the result.

### Example:
GET http://localhost:8081/stress?type=txspam&num=4000
```
{
	"result": "Stress test started",
	"error": null,
	"id": null
}
```
