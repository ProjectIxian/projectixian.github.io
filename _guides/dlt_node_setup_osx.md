---
title: DLT Node setup on macOS
type: dlt
---

Ixian was tested on macOS 10.13 High Sierra and 10.14 Mojave

# Installing an Ixian DLT Node on macOS

## Prerequisites

* Operating system: macOS 10.9 or higher
* RAM: 4 GB, Recommended 8 GB
* CPU: i3/i5/i7/Xeon or AMD equivalent with at least 2 GHz and at least 4 CPU threads
* Free Disk Space: 200 GB, 500 GB Recommended
* Internet Connection Speed: 10 Mbps symmetrical or higher, 100 Mbps recommended

## Additional requirements
* Ability to forward a port from the public internet to the machine running the DLT Node. (Default port is TCP 10234.)
* A minimum of 2000 IXI is required to operate an Ixian DLT master node.


## Install required software
1. Install a recent Mono release for macOS by following the guide here: [Mono Installation Guide](https://www.mono-project.com/docs/getting-started/install/mac/). If you do not intend to edit the Ixian source code, you can choose the *Stable* channel.

2. Install git from the [Git Download page](https://git-scm.com/download/mac)

3. Prepare a directory for the Ixian Project. The commands should be executed in the *Terminal*:
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

9. (Optional) Download and unpack the bootstrap data files to enable faster synchronization:
```
cd ~/Ixian/Ixian-DLT/IxianDLT/bin/Release
curl https://www.ixian.io/data1to300k.zip -o data1to300k.zip
unzip data1to300k.zip
rm data1to300k.zip
curl https://www.ixian.io/data300kto600k.zip -o data300kto600k.zip
unzip data300kto600k.zip
rm data300kto600k.zip
curl https://www.ixian.io/data600kto700k.zip -o data600kto700k.zip
unzip data600kto700k.zip
rm data600kto700k.zip
curl https://www.ixian.io/data700kto800k.zip -o data700kto800k.zip
unzip data700kto800k.zip
rm data700kto800k.zip
curl https://www.ixian.io/data800kto850k.zip -o data800kto850k.zip
unzip data800kto850k.zip
rm data800kto850k.zip
curl https://www.ixian.io/data850kto900k.zip -o data850kto900k.zip
unzip data850kto900k.zip
rm data850kto900k.zip
curl https://www.ixian.io/data900kto950k.zip -o data900kto950k.zip
unzip data900kto950k.zip
rm data900kto950k.zip
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
3. Create a new script using your preferred text editor. This example uses *nano*: `nano StartIxian.sh`.
4. Type or paste the IxianDLT command into the file. You may use the command below, which includes the most common options, as the starting point.
`IxianDLT.exe -p 10234 -a 8081 --threads 2`
5. Save the file and quit the editor. For *nano*, the command is `Ctrl-X`, then `Y`.
6. Make the script file executable: `chmod u+x StartXian.sh`.
7. Use the new "StartIxian.sh" file to start the DLT Node with the specified options `./StartIxian.sh`.

## Upgrading the DLT Node software

When a new version is released, you can upgrade the software using the following checklist:

0. Save the ixian wallet file: `cp ~/Ixian/Ixian-DLT/IxianDLT/bin/Release/ixian.wal ~/ixian.wal.backup`.
1. Shutdown the Ixian DLT Node.
2. Switch to the Ixian-Core directory: `cd ~/Ixian/Ixian-Core`.
3. Update the sources to the latest version: `git pull`.
4. Switch to the Ixian-DLT directory: `cd ~/Ixian/Ixian-DLT`.
5. Update the sources to the latest version: `git pull`.
6. Update nuget packages: `nuget restore DLTNode.sln`.
7. Compile the new sources: `msbuild DLTNode.sln /p:Configuration=Release`.
8. Start the Ixian DLT Node again. The node will use the existing wallet file and downloaded data, so it will not need to generate a new wallet or synchronize again.

Note: It is recommended to backup the wallet file **ixian.wal** before performing any upgrade or changing any settings on the command line.


## Configuration file

See [DLT Node Configuration options](/guides/dlt_config_params.html) for details.