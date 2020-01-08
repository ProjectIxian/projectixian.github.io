---
title: DLT Node Configuration options
---

## Configuration file

An alternative to creating a batch or shell script is the Ixian DLT configuration file, which can be used to configure the most important settings.
Default filename of the config file is **ixian.cfg** but can be changed by using the `--config` CLI parameter

The format of the file is simple INI (without sections):
* Each option is specified on its own line
* Option syntax is `option_name = option_value`
* Whitespace is not important
* Lines starting with `;` are ignored
* Option names are case-sensitive

A list of options supported by the config file is:

| Option name | Type | Repeatable | Default | Description |
| --- | --- | --- | --- | --- |
| dltPort | int | No | 10234 | TCP port number for the Master Node, when running on the main network. |
| testnetDltPort | int | No | 11234 | TCP port number for the Master Node, when running on the test network. |
| apiPort | int | No | 8081 | Port for the internal REST API server to listen for commands. Note: This port is only available on the localhost interface (127.0.0.1). |
| apiAllowIp | IPv4 Address | Yes | EMPTY | IP Addresses which are allowed to access the REST API interface. |
| apiBind | Bind Point | Yes | http://localhost:8081 | Additional IP interface on which the internal REST API should listen. The API allows full control over the DLT node, so do not change this unless you are absolutely sure. |
| testnetApiPort | int | No | 8181 | Port for the internal REST API server when the node is operating on the test network. |
| addApiUser | Username:Password | Yes | EMPTY | An additional layer of protection - will require all REST API calls to include the given username and password. |
| externalIp | IP Address | No | EMPTY | Configure this if the external IP address cannot be automatically determined via UPnP. |
| addPeer | Hostname or IP Address | Yes | Seed Nodes | Set this to use different Ixian DLT Mater nodes as seed - this option only has an effect in mainnet mode. |
| addTestnetPeer | Hostname or IP Address | Yes | Seed Nodes | Set this to use different Ixian DLT Mater nodes as seed - this option only has an effect in testnet mode. |
| maxLogSize | int | No | 50 | Size of the Ixian DLT log file (in megabytes), before it is automatically rotated. |
| maxLogCount | int | No | 10 | Number of old (full) log files to keep before deleting the oldest. |
| disableMiner | int | No | 0 | If set to anything other than 0, the built-in Ixian DLT miner will not run. |
| disableWebStart | int | No | 0 | If set to a nonzero value, the DLT node will not open its internal wallet page on startup. |
| forceTimeOffset | int | No | 0 | Forces the local node's time to a different value (when the OS clock does not return the correct time). |
| blockStorage | string | No | sqlite | Selects the storage provider for the block and transaction storage. |
| walletNotify | string | No | EMPTY | OS command to run whenever the local wallet is updated. |
| blockNotify | string | No | EMPTY | OS command to run whenever a new block is received by the DLT node. |

Any repeatable options may be specified more than once. If non-repeatable options are specified multiple times, the last one is used.