[[toc]]

# IP Addresses:

## Layer 3

The most significant protocol at layer 3 (also called the network layer) is the Internet Protocol, or IP. IP is the standard for routing packets across interconnected networks--hence, the name internet. It is an encapsulating protocol similar to the way Ethernet is an encapsulating protocol.

//Find info about your IP addresses:

```
 $ ifconfig
```

IPv4: inet 127.0.0.1

IPv6: inet6

> NAT - network address translation

Private IP addresses - are not used anywhere on public internet, reserved for private LANs

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/4a482f3c6b77f4778b3c45146197c1e28f05a05a4cfe64ecf053fc8d2d824c88-image.png)

---

# MAC Addresses:

## Layer 2

MAC (media access control) address
MAC address - ether (first 3 pairs are identifiers):
we can search for the manufacturer with these identifiers here: https://aruljohn.com/mac/1E0023

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/727fc4eab23387aa35b82c0ceea981e1321f0cc5cace635df6e33097e7f167e7-image.png)

---

# TCP vs UDP:

## TCP Transmission Control Protocol

You can think of it as a connection oriented protocol.

- high reliability (we want connection - something like website - something like http or https; ssh; ftp (file transfer protocol) -all of those utilize TCP.

## UDP User Datagram Protocol

This is a connectionless protocol.

- connectionless (something like streaming service or DNS, or voiceover ip)

Scanning - we scan both TCP and UDP

---

# Common Ports and Protocols

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/ff56821b288f06c82cf8e48a7442f9cc754e1df251fd6f2ccbde3a5f07dbdb09-image.png)

## TCP

- FTP (21) - file transfer protocol
- SSH (22) - the same as Telnet (except with SSH you are necrypted)
- Telnet (23) - the ability to log into a machine remotely
- SMTP (25) - relates to mail
- DNS (53) - a way to resolve IP addresses to names (we type website name - google.com - and it knows what IP Address to go to)
- HTTP (80) / HTTPS (443) - HTTP is non-secure (not encrypted) version. Nowadays everything is mostly on HTTPS.
- POP3 (110) - relates to mail
- SMB (139 + 445) - most common port - relates to file shares - we have to think of possible exploits
- IMAP (143) - relates to mail

## UDP

- DNS (53) - here it is the same as the DNS in TCP protocol
- DHCP (67, 68) - I get on a wifi and this will pick a number between a range and assign a random IP address to me for a specific period of time (that was set by someone) opposite of this would be what is called a static address. That works the way that whenever I plug in with this specific computer - there will be the same specific IP address assigned to this very device. How are we going to know that its this device? The MAC address-
- TFTP (69) - Trivial FTP (file transfer protocol) - utilizes UDP instead o TCP
- SNMP (161) - Simple network management protocol
