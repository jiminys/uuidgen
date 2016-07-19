# uuidgen

cli for uuid generation.

## usage:

uuidgen [-h|-r|-t]

* -h: Print this message.
* -r: Generate a random-based UUID. This method creates a UUID consisting mostly of random bits. It requires that the operating system have a high quality random number generator, such as /dev/random.
* -t: Generate a time-based UUID. This method creates a UUID based on the system clock plus the system's ethernet hardware address, if present.