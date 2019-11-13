---
title: S2 Node setup on RedHat/Centos
---

Note: This guide should work for most rpm-based distributions, such as:
* CentOS
* RedHat
* Oracle Linux

Ixian was tested on Ubuntu (16.04+), Fedora (28+), Centos 7.

# Installing an Ixian S2 Node on Linux (RedHat/CentOS clones)

## Prerequisites

* Operating system: recent, rpm-based Linux distribution, such as RedHat or CentOS
* RAM: 2 GB, Recommended 4 GB
* CPU: i3/i5/i7/Xeon or AMD equivalent with at least 2 GHz
* Free Disk Space: 10 GB, 20 GB Recommended
* Internet Connection Speed: 10 Mbps symmetrical or higher, 100 Mbps recommended

## Additional requirements
* Ability to forward a port from the public internet to the machine running the S2 Node. (Default port is TCP 10235.)


## Install required software
1. Install a recent Mono release for linux by following the guide for your Linux distribution here: [Mono Installation Guide](https://www.mono-project.com/download/stable/). When installing, use the "mono-devel" package:
```
sudo yum install mono-devel
```

2. Install additional required packages:
```
sudo yum install nuget msbuild git gcc unzip
```

3. Prepare a directory for the Ixian Project:
```
mkdir ~/Ixian
cd ~/Ixian
```

4. Acquire the latest Ixian sources from github. Two repositories are required to build an S2 Relay node:
```
git clone -b master https://github.com/ProjectIxian/Ixian-Core.git
git clone -b master https://github.com/ProjectIxian/Ixian-S2.git
```
The directory structure should look like this:
```
.
..
Ixian-Core
Ixian-S2
```

5. Switch into the `Ixian-S2` directory and download the required NuGet packages:
```
cd Ixian-S2
nuget restore S2Node.sln
```

6. Compile the S2 Node executable in the ‘Release Configuration’:
```
msbuild S2Node.sln /p:Configuration=Release
```

7. Switch to the Ixian binaries folder:
```
cd ~/Ixian/Ixian-S2/IxianS2/bin/Release
```

The Ixian S2 node is now ready to start.

## Running the software

Switch to the Ixian S2 binaries folder and issue the command to start the IxianS2 software:
```
mono IxianS2.exe
```

The output should look like this:

![Ixian Console Output](https://projectixian.github.io/assets/images/guide_s2_deb_1.png)

### Creating a wallet

If this is the first time that you're starting Ixian S2, a new wallet will be generated for you. You have to set your new wallet's password to proceed. This password will be used to encrypt the ixian.wal wallet file and will be required every time you start the Ixian S2 node. The file is encrypted using AES256.

It is recommended to periodically copy the wallet to a safe location, preferably on an offline media (USB Key), or a different machine.
The wallet file is called **ixian.wal**.

### Verifying the status of the S2 Node

While the node is running, it will display a logo and some basic information in the command window. Please do not close this window, as closing it will cause the S2 Node to shut down.

![Ixian Run Information](https://projectixian.github.io/assets/images/guide_s2_deb_1.png)

When the Ixian S2 Node first starts, the status text will display **connecting** while the software is retrieving the required information from the Ixian DLT network. When this process has been completed, the status text will change to **active**.

## Changing the settings

There are several ways in which Ixian software can be configured:

### Configuration on the command line
Ixian S2 Node settings can be provided on the command line when starting the IxianS2 executable. The most important parameters are:
* **-p** S2 Port: If you are for some reason unable to port-forward the default port, 10235, you may use a different port. The `-p` switch will change which port the software uses for S2 communication.
* **-i** External IP address: The IxianS2 software will use UPnP to try and determine the external IP address of your node. If this fails for some reason, you can specify the external address using the `-i` option.
* **-a** API Port: This changes the port on which the node accepts Rest API commands.
* **--help**: Displays a short help with some other, less frequently used command options.

### Configuration file
An alternative to specifying parameters on the command line is the Ixian S2 configuration file, which can be used to configure the most important settings.

The format of the file is simple INI (without sections):
* Each option is specified on its own line
* Option syntax is `option_name = option_value`
* Whitespace is not important
* Lines starting with `;` are ignored
* Option names are case-sensitive

A list of options supported by the config file is:

| Option name | Type | Repeatable | Default | Description |
| --- | --- | --- | --- |
| s2Port | int | No | 10235 | TCP port number for the S2 Node, when running on the main network. |
| testnetS2Port | int | No | 11235 | TCP port number for the S2 Node, when running on the test network. |
| apiPort | int | No | 8001 | Port for the internal REST API server to listen for commands. Note: This port is only avilable on the localhost interface (127.0.0.1). |
| testnetApiPort | int | No | 8101 | Port for the internal REST API server when the node is operating on the test network. |
| addApiUser | Username:Password | Yes | EMPTY | An additional layer of protection - will require all REST API calls to include the given username and password. |
| externalIp | IP Address | No | EMPTY | Configure this if the external IP address cannot be automatically determined via UPnP. |
| addPeer | Hostname or IP Address | Yes | Seed Nodes | Set this to use different Ixian DLT Mater nodes as seed - this option only has an effect in mainnet mode. |
| addTestnetPeer | Hostname or IP Address | Yes | Seed Nodes | Set this to use different Ixian DLT Mater nodes as seed - this option only has an effect in testnet mode. |
| maxLogSize | int | No | 50 | Size of the Ixian S2 log file (in megabytes), before it is automatically rotated. |
| maxLogCount | int | No | 10 | Number of old (full) log files to keep before deleting the oldest. |
| walletNotify | string | No | EMPTY | OS command to run whenever the local wallet is updated. |

Any repeatable options may be specified more than once. If nonrepeatable options are specified multiple times, the last one is used.

### Startup script
If you need to run the S2 Node with different settings, but are unable to use the configuration file, it can be tedious to type them out every time you wish to start the software. It is recommended to create a shell script (**.sh**) with the options already set. To do this, follow the guide below:

1. Switch to the Ixian S2 Release folder. If you have followed the above instructions for building, the command should be `cd ~/Ixian/Ixian-S2/IxianS2/bin/Release`.
3. Create a new script using your preferred text editor. This example uses *nano*: `nano StartIxianS2.sh`.
4. Type or paste the IxianS2 command into the file. You may use the command below, which includes the most common options, as the starting point.
`IxianS2.exe -p 10235 -a 8001 -i 172.16.34.17`
5. Save the file and quit the editor. For *nano*, the command is `Ctrl-X`, then `Y`.
6. Make the script file executable: `chmod u+x StartIxianS2.sh`.
7. Use the new "StartIxian.sh" file to start the S2 Node with the specified options `./StartIxianS2.sh`.

## Upgrading the S2 Node software

When a new version is released, you can upgrade the software using the following checklist:

Note: It is recommended to backup the wallet file **ixian.wal** before performing any upgrade or changing any settings on the command line.

Note: We assume that you have followed the above instructions and the Ixian directory names are as follows:
| Directory | Path |
| --- | --- |
| Ixian-Core | ~/Ixian/Ixian-Core |
| Ixian-S2 | ~/Ixian/Ixian-S2 |
| Executable | ~/Ixian/Ixian-S2/IxianS2/bin/Release |

If you have placed the Ixian source code folders elsewhere, change them in the below description. Furthermore, if you copied the executable files from the bin/Release folder someplace else, you will need to repeat the copy step to overwrite old executable files with new ones.

0. Save the ixian wallet file: `cp ~/Ixian/Ixian-S2/IxianS2/bin/Release/ixian.wal ~/ixian.wal.backup`.
1. Shutdown the Ixian S2 Node.
2. Switch to the Ixian-Core directory: `cd ~/Ixian/Ixian-Core`.
3. Update the sources to the latest version: `git pull`.
4. Switch to the Ixian-S2 directory: `cd ~/Ixian/Ixian-S2`.
5. Update the sources to the latest version: `git pull`.
6. Update nuget packages: `nuget restore S2Node.sln`.
7. Compile the new sources: `msbuild S2Node.sln /p:Configuration=Release`.
8. (Optional) If you have copied the binaries elsewhere, repeat that step.
9. Start the Ixian S2 Node again. The node will use the existing wallet file, so it will not need to generate a new wallet.
