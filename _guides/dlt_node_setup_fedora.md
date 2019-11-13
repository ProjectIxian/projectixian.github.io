---
title: DLT Node setup on Fedora
---

Ixian was tested on Ubuntu (16.04+), Fedora (28+), Centos 7.

# Installing an Ixian DLT Node on Linux (Fedora)

## Prerequisites

* Operating system: recent version of Fedora Linux
* RAM: 4 GB, Recommended 8 GB
* CPU: i3/i5/i7/Xeon or AMD equivalent with at least 2 GHz
* Free Disk Space: 60 GB, 100 GB Recommended
* Internet Connection Speed: 10 Mbps symmetrical or higher, 100 Mbps recommended

## Additional requirements
* Ability to forward a port from the public internet to the machine running the DLT Node. (Default port is TCP 10234.)
* A minimum of 2000 IXI is required to operate an Ixian DLT master node.


## Install required software
1. Install a recent Mono release for linux by following the guide for your Linux distribution here: [Mono Installation Guide](https://www.mono-project.com/download/stable/). When installing, use the "mono-devel" package:
```
dnf install mono-devel
```

2. Install additional required packages:
```
dnf install nuget msbuild git gcc unzip make
```

3. Prepare a directory for the Ixian Project:
```
mkdir ~/Ixian
cd ~/Ixian
```

4. Acquire the latest Ixian sources from github. Two repositories are required to build a DLT Master node:
```
git clone -b master https://github.com/ProjectIxian/Ixian-Core.git
git clone -b master https://github.com/ProjectIxian/Ixian-DLT.git
```
The directory structure should look like this:
```
.
..
Ixian-Core
Ixian-DLT
```

5. Switch into the `Ixian-DLT` directory and download the required NuGet packages:
```
cd Ixian-DLT
nuget restore DLTNode.sln
```

6. Compile the DLT Node executable in the ‘Release Configuration’:
```
msbuild DLTNode.sln /p:Configuration=Release
```

7. Ixian DLT Node requires the Argon2 library to function. In order to build one for your system, follow these steps:
..a. Obtain the Argon2 source code from github:
```
cd ~/Ixian
git clone https://github.com/P-H-C/phc-winner-argon2.git
```
..b. Compile the Argon2 source:
```
cd phc-winner-argon2
make
```
..c. Copy the resulting Argon2 library to the IxianDLT folder. Please note that the file should be renamed to ‘libargon2.so’:
```
cp libargon2.so.1 ~/Ixian/Ixian-DLT/IxianDLT/bin/Release/libargon2.so
```

8. Switch to the Ixian binaries folder:
```
cd ~/Ixian/Ixian-DLT/IxianDLT/bin/Release
```

9. (Optional) Download and unpack the bootstrap data file to enable faster synchronization. The link to the current bootstrap file can be found on the Ixian website. At the time of writing the link to the bootstrap file is [https://ixian.io/data.zip](https://ixian.io/data.zip).
```
cd ~/Ixian/Ixian-DLT/IxianDLT/bin/Release
curl -o bootstrap.zip [LINK TO THE BOOTSTRAP FILE]
unzip bootstrap.zip
rm bootstrap.zip
```

The Ixian DLT node is now ready to start.

## Running the software

Switch to the Ixian DLT binaries folder and issue the command to start the IxianDLT software:
```
mono IxianDLT.exe
```

The output should look like this:

![Ixian Console Output](https://projectixian.github.io/assets/images/guide_deb_1.png)

### Creating a wallet

If this is the first time that you're starting Ixian DLT, a new wallet will be generated for you. You have to set your new wallet's password to proceed. This password will be used to encrypt the ixian.wal wallet file and will be required every time you start the Ixian DLT node.

It is recommended to periodically copy the wallet to a safe location, preferably on an offline media (USB Key), or a different machine. The file is encrypted using AES256.
The wallet file is called **ixian.wal**.

### Verifying the status of the DLT Node

While the node is running, it will display a logo and some basic information in the command window. Please do not close this window, as closing it will cause the DLT Node to shut down.

![Ixian Run Information](https://projectixian.github.io/assets/images/guide_deb_1.png)

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

If you need to run the DLT Node with different settings, it can be tedious to type them out every time you wish to start the software. It is recommended to create a shell script (**.sh**) with the options already set. To do this, follow the guide below:

1. Switch to the unpacked Ixian DLT folder. If you have followed the above instructions for building, the command should be `cd ~/Ixian/Ixian-DLT/IxianDLT/bin/Release`.
3. Create a new script using your preferred text editor. This example uses *vi*: `vi StartIxian.sh`.
4. Press *i* to switch the VI editor into *'input mode'*.
5. Type or paste the IxianDLT command into the file. You may use the command below, which includes the most common options, as the starting point.
`IxianDLT.exe -p 10234 -a 8081 --threads 2`
6. Press `Escape` to exit the input mode, then type `:wq` to save the file and quit the VI editor.
7. Make the script file executable: `chmod u+x StartXian.sh`.
8. Use the new "StartIxian.sh" file to start the DLT Node with the specified options `./StartIxian.sh`.

## Upgrading the DLT Node software

When a new version is released, you can upgrade the software using the following checklist:

Note: It is recommended to backup the wallet file **ixian.wal** before performing any upgrade or changing any settings on the command line.

Note: We assume that you have followed the above instructions and the Ixian directory names are as follows:
| Directory | Path |
| --- | --- |
| Ixian-Core | ~/Ixian/Ixian-Core |
| Ixian-DLT | ~/Ixian/Ixian-DLT |
| Executable | ~/Ixian/Ixian-DLT/IxianDLT/bin/Release |

If you have placed the Ixian source code folders elsewhere, change them in the below description. Furthermore, if you copied the executable files from the bin/Release folder someplace else, you will need to repeat the copy step to overwrite old executable files with new ones.

0. Save the ixian wallet file: `cp ~/Ixian/Ixian-DLT/IxianDLT/bin/Release/ixian.wal ~/ixian.wal.backup`.
1. Shutdown the Ixian DLT Node.
2. Switch to the Ixian-Core directory: `cd ~/Ixian/Ixian-Core`.
3. Update the sources to the latest version: `git pull`.
4. Switch to the Ixian-DLT directory: `cd ~/Ixian/Ixian-DLT`.
5. Update the sources to the latest version: `git pull`.
6. Update nuget packages: `nuget restore DLTNode.sln`.
7. Compile the new sources: `msbuild DLTNode.sln /p:Configuration=Release`.
8. Start the Ixian DLT Node again. The node will use the existing wallet file and downloaded data, so it will not need to generate a new wallet or synchronize again.


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