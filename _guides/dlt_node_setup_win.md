---
title: DLT Node setup on Windows
---

# Installing an Ixian DLT Node on Windows

## Prerequisites

* Operating system: Windows 7 or higher, Recommended Windows 10
..* Alternatively: Windows Server 2008 R2 or higher, Recommended Windows Server 2016
* RAM: 4 GB, Recommended 8 GB
* CPU: i3/i5/i7/Xeon or AMD equivalent with at least 2 GHz
* Free Disk Space: 60 GB, 100 GB Recommended
* Internet Connection Speed: 10 Mbps symmetrical or higher, 100 Mbps recommended

## Additional requirements
* Ability to forward a port from the public internet to the machine running the DLT Node. (Default port is TCP 10234.)
* A minimum of 2000 IXI is required to operate an Ixian DLT master node.

## Obtaining the software
Visit the Ixian Github [Releases](https://github.com/ProjectIxian/Ixian-DLT/releases) page and obtain the latest available version as a ZIP package. The release file is available in the "Assets" section of each release announcement.

![Release Package](https://projectixian.github.io/assets/images/guide_win_1.png)

## (Optional) (Optional) Download and unpack the bootstrap data file to enable faster synchronization. The link to the current bootstrap file can be found on the Ixian website. At the time of writing the link to the bootstrap file is [https://ixian.io/data.zip](https://ixian.io/data.zip).
The data from the archive should be placed in the same folder as the Ixian executables.

## Running the software

Unpack the archive and start the node by double-clicking the IxianDLT executable, or by issuing the command IxianDLT.exe from a console window.
The output should look like this:

![Ixian Console Output](https://projectixian.github.io/assets/images/guide_win_2.png)

Note: When starting Ixian DLT software on Windows 10 operating systems for the first time, a Windows Defender SmartScreen might pop up that looks like the image below. You have to click on "More info" and then "Run anyway" to proceed.
This is expected and occurs becuse Ixian does not yet have a code signing certificate in this early stage of development.

![Smart Screen Popup 1](https://projectixian.github.io/assets/images/guide_win_3.png)
![Smart Screen Popup 2](https://projectixian.github.io/assets/images/guide_win_4.png)

### Creating a wallet

If this is the first time that you're starting Ixian DLT, a new wallet will be generated for you. You have to set your new wallet's password to proceed. This password will be used to encrypt the ixian.wal wallet file and will be required every time you start the Ixian DLT node.
Additionally, if this is the first time that you're starting Ixian DLT, a firewall window may pop-up (as seen on the image below). Select private and public networks and click "Allow access".

![Ixian Firewall Window](https://projectixian.github.io/assets/images/guide_win_5.png)

It is recommended to periodically copy the wallet to a safe location, preferably on an offline media (USB Key), or a different machine. The file is encrypted using AES256.
The wallet file is called **ixian.wal**.

### Verifying the status of the DLT Node

While the node is running, it will display a logo and some basic information in the command window. Please do not close this window, as closing it will cause the DLT Node to shut down.

![Ixian Run Information](https://projectixian.github.io/assets/images/guide_win_6.png)

When the Ixian DLT Node first starts, the status text will display **synchronizing** while the software is retrieving the required information from the DLT network. When this process has been completed, the status text will change to **active**.

If the DLT Node is shut down and later restarted, it will have to synchronize again, but since most of the data will already be stored on the local disk, the synchronization phase will be much shorter.


### Using your Ixian wallet

In order to interact with the running DLT Node and use the built-in wallet software, open a web browser and navigate to [http://localhost:8081](http://localhost:8081).

If you have configured a different *API Port*, then change the port number in the link like so: **http://localhost:PORT_NUMBER**.

The Ixian built-in Wallet looks like this:

![Ixian Built-In Wallet](https://projectixian.github.io/assets/images/guide_win_7.png)


## Changing the settings

Ixian DLT Node settings are provided on the command line when starting the IxianDLT executable. The most important parameters are:
* **-p** DLT Port: If you are for some reason unable to port-forward the default port, 10234, you may use a different port. The `-p` switch will change which port the software uses for DLT communication.
* **-i** External IP address: The IxianDLT software will use UPnP to try and determine the external IP address of your node. If this fails for some reason, you can specify the external address using the `-i` option.
* **-a** API Port: This changes the port on which the node accepts API commands, as well as the port on which the built-in wallet operates. If you provide a different API port, then the built-in wallet for the node will be at **http://localhost:API_PORT**.
* **--threads**: Tells the DLT Node how many threads to create for the internal Ixian Miner. Default is 2. Use `--disableMiner` to prevent the DLT Node from mining IXI Coins.
* **--disableMiner**: Tells the DLT Node not to start the built-in Ixian Miner.
* **--help**: Displays a short help with some other, less frequently used command options.

If you need to run the DLT Node with different settings, it can be tedious to type them out every time you wish to start the software. It is recommended to create a batch file (**.bat**) with the options already set. To do this, follow the guide below:

1. Toggle showing file extensions in Windows Explorer:

![Show File Extensions](https://projectixian.github.io/assets/images/guide_win_8.png)
2. Browse to the unpacked Ixian DLT folder.
3. Create a new text file and change its name to "Start Ixian.bat" (note the changed extension from .txt to .bat). Windows will ask you if you really wish to change the file's extension, which you should confirm.
4. Type or paste the IxianDLT command into the file. You may use the command below, which includes the most common options, as the starting point.
`IxianDLT.exe -p 10234 -a 8081 --threads 2`
5. Use the new "Start Ixian.bat" file to start the DLT Node with the specified options.
6. (Optional) Disable "Show file extensions" in Windows Explorer in the same way you enabled them in step 1.


## Upgrading the DLT Node software

When a new version is released, you can upgrade the software using the following checklist:

Note: It is recommended to backup the wallet file **ixian.wal** before performing any upgrade or changing any settings on the command line.

1. Shutdown the Ixian DLT Node.
2. Obtain the new release package from the Ixian [Releases](https://github.com/ProjectIxian/Ixian-DLT/releases) Github page.
3. Extract the contents of the release package and overwrite files.
4. Start the Ixian DLT Node again. The node will use the existing wallet file and downloaded data, so it will not need to generate a new wallet or synchronize again.

## Configuration file

An alternative to creating a batch or shell script is the Ixian DLT configuration file, which can be used to configure the most important settings.

The format of the file is simple INI (without sections):
* Each option is specified on its own line
* Option syntax is `option_name = option_value`
* Whitespace is not important
* Lines starting with `;` are ignored
* Option names are case-sensitive

A list of options supported by the config file is:

| Option name | Type | Repeatable | Default | Description |
| --- | --- | --- | --- |
| dltPort | int | No | 10234 | TCP port number for the Master Node, when running on the main network. |
| testnetDltPort | int | No | 11234 | TCP port number for the Master Node, when running on the test network. |
| apiPort | int | No | 8081 | Port for the internal REST API server to listen for commands. Note: This port is only avilable on the localhost interface (127.0.0.1). |
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

Any repeatable options may be specified more than once. If nonrepeatable options are specified multiple times, the last one is used.