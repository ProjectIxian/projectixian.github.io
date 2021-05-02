---
title: DLT Node Data Bootstrap
type: dlt
---

Note: downloading the bootstrap data files is not a requirement. It is useful in accelerating the synchronization speed of newly deployed Ixian DLT nodes.

## What are magnets
Magnet is a URI scheme for identifying files by their content, via cryptographic hash value rather than by their location.

Each magnet link fetches a torrent file, which then downloads a zip archive containing the Ixian block sequence specified in it's name.

## How to download
You will need to use a torrent software such as [Transmission](https://transmissionbt.com). It supports Windows, Linux and macOS and has both GUI and commandline support.
For commandline, install the `transmission-cli` repo package.

For GUI versions: Choose File -> Open URL and copy paste the magnet URIs below to fetch the torrent.

For commandline versions: type `transmission-cli MAGNET_LINK_HERE -w ~/Downloads` . Replace `MAGNET_LINK_HERE` with one of the links in the Ixian Data section.

## How to install

If you have the Ixian DLT node running, make sure you shut it down first.

Each downloaded zip archive is between 5 to 10 GB in size and contains the relevant `data` folder files. 

Unzip the archive to the Ixian DLT binary folder. The block sequences share the same first and last block and walletstate files, to make sure the blockchain data is consistent and not altered.

Once the files are unzipped and the data folder contains the requested block sequences, you can start the Ixian DLT node.

## Ixian Data
### Block 0 to 300,000
`magnet:?xt=urn:btih:4f44f5aed6e584d58f5858f49039469ecb467920&dn=data-0-300k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 300,000 to 500,000
`magnet:?xt=urn:btih:a688ee3fcc2c28ad003a23da506c4e34f4d02580&dn=data-300k-500k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 500,000 to 650,000
`magnet:?xt=urn:btih:30dae142b539777deef038efe49c61af3ed05f44&dn=data-500k-650k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 650,000 to 725,000
`magnet:?xt=urn:btih:662ea8b6e3fd685fb4e36a6895a7655daeea2639&dn=data-650k-725k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 725,000 to 800,000
`magnet:?xt=urn:btih:9253446581cbcf5fd6949850784289b89790d6c9&dn=data-725k-800k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 800,000 to 850,000
`magnet:?xt=urn:btih:cc6459dc8715e3098ae4b32a49d9e8e3bfc4e2c8&dn=data-800k-850k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 850,000 to 900,000
`magnet:?xt=urn:btih:cfc970556465bda4da098dbab9265b0cbfba1ac5&dn=data-850k-900k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 900,000 to 1,000,000
`magnet:?xt=urn:btih:13ee621a54f8ed344dd476aae9ed8a206b350e6a&dn=data-900k-1000k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,000,000 to 1,100,000
`magnet:?xt=urn:btih:37c413c7d74775e0d5e10c1addd868ea2cfe0e6c&dn=data-1000k-1100k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,100,000 to 1,200,000
`magnet:?xt=urn:btih:aa44b7e7a8477b835cab0040bfa69f6ef5e7b1d1&dn=data-1100k-1200k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,200,000 to 1,350,000
`magnet:?xt=urn:btih:0c90a83f158ebf46ba1763d7f793af2b581ad095&dn=data-1200k-1350k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,350,000 to 1,500,000
`magnet:?xt=urn:btih:2d8e55b920d1bfa6bf74b1aed388eac8059c30a1&dn=data-1350k-1500k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,500,000 to 1,625,000
`magnet:?xt=urn:btih:e5516cbc3cfab18c15c1ae28e0c1c4f21af631d5&dn=data-1500k-1625k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,625,000 to 1,700,000
`magnet:?xt=urn:btih:6c5d399bbd516fe69944fc734aeb2cf61584495d&dn=data-1625k-1700k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,700,000 to 1,800,000
`magnet:?xt=urn:btih:2f7d0aa58d99ecfb7f5a81de1ff712e1be847d83&dn=data-1700k-1800k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,800,000 to 1,850,000
`magnet:?xt=urn:btih:8496a21a4cb737af9b140c9713c0fd5955f01d08&dn=data-1800k-1850k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,850,000 to 1,870,000
`magnet:?xt=urn:btih:05f900bbdecac1a3c04b438319012247291d93eb&dn=data-1850k-1870k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,870,000 to 1,875,000
`magnet:?xt=urn:btih:4cfe0b87aa3709f67ecc2ad687efc7c31544a715&dn=data-1870k-1875k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

### Block 1,875,000 to 1,880,000
`magnet:?xt=urn:btih:58aab9ac003c99b54870d44584f41f70e9c4cbbf&dn=data-1875k-1880k.zip&tr=udp%3A%2F%2Ftracker-udp.gbitt.info%3A80%2Fannounce&tr=http%3A%2F%2Ftracker.gbitt.info%2Fannounce`

