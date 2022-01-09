[[toc]]

# Subnetting:

if we run ifconfig in our terminal

```css
$ ifconfig
```

we can fing our `netmask 255.255.255.0`which is also known as a `subnet mask` or a `subnet`

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/474a8701b99fb8d149637b4dceafb64e1261841fa464122898ebfada1c9986c5-image.png)

## Compute the amount of hosts avalible based on subnet mask settings:

We have 4 numbers devided by "." (in our case 255.255.255.0) - each can have 8 bits switched on. If all 8 bits are on then it gives us number 255. If 0 bits are on it gives us 0. So all together we can have 32 bits.

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/d41f69ed3efc46f250f6021c758b5bde61c15ee2ed762a80ac38cd78cfffafa3-image.png)

---

If we start adding ones (from left to right only) (switching the bits on)-> /the number of bits (the /24) increases, number of Hosts decreaces
![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/b9c78fdbf75eff7af9cd3364b60764413703f44007ccfb5cc5606df3ce2e8b2d-image.png)

---

We have 4 numbers devided by "." - each can have 8 bits switched on. So all together we can have 32 bits.

---

How to calculate the number of Hosts?
Maximum bits on is 32. If we have all bits on - we would calculate it like this:

hosts = 2^0 (which is 1)
if the number of bits that are on (are ones) decreses. for example the number of bits switched on would be 31 then:

hosts = 2^1 (which is 2)

number of bits switched on 30:
hosts = 2^2 (which is 4)

number of bits switched on 29:
hosts = 2^3 (which is 8)

number of bits switched on 28:
hosts = 2^4 (which is 16)

number of bits switched on 27:
hosts = 2^5 (which is 32)

number of bits switched on 26:
hosts = 2^6 (which is 64)

number of bits switched on 25:
hosts = 2^7 (which is 128)

number of bits switched on 24:
hosts = 2^8 (which is 256)

and so ono and so on....

:::warning
Always subtract 2 from host total so 256 - 2 = 254 etc.
:::

## Subnetting cheatsheet

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/0e0503f53fee73de8fd04e0199dd8fe278de029268c97190ae4f2c4543eaf4df-image.png)

---

CIDR is the number of bits that are switched on.
Subnet - corresponds to the amount of possibilities of the bits being flipped on.

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/1645d940a82a14eec610d44d267231c9756cf6355dafb2f8f2de9a504f1c0ec7-image.png)
8 bits on - correspons to the first number being on its maximum (255). 16bits on means the second number is also 255. if we had 17 bits then it would mean first two numbers are 255.255.128.0. If we had 18bits on we would have 255.255.192.0 (because 128 + 64 is 192).

---

## Example

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/55bef89b190800b7966c6648f2d17612c9f8f04cc41038545602e8de4b4e967c-image.png)
We have IP address 192.168.1.0/24

Subnet:

1/4 number takes 8 bits out of 24 = 255
2/4 number takes 8 bits out of 24 = 255
3/4 number takes 8 bits out of 24 = 255
4/4 number has no more bits to take from = 0
Subnet = 255.255.255.0

---

Hosts:

2 ^ (32-numOfBitsSwitchedOn) in our case 2 ^ (32-24) = 2 ^8 = 256
:::warning
Always subtract 2 from host total. Hosts avalible are always - 2 because we use 2 addresses for Network and Broadcast. So 256 - 2 = 254 etc.
:::

---

Network:

192.168.1.X where X = frist non-host address avalible to us between 0 and 255. So it would be 192.168.1.0

---

Broadcast:

tells us the range of the addresses avalible to us. If we have `/24` - it gives us 256 addresses (254 of them avalible for hosts because Network and Broadcast takes two) - We start counting them from 0 (which is reserved for the Network address) - we can go up to 255 - which will give us total of 256 addresses). So the Broadcast address would be 192.168.1.255, because 255 is the end of the range of our avalible addresses.

:::note
Simply We can just calculate it like this:

XY = 2 ^ (32-numOfBitsSwitchedOn) // which is the same as when we calculate hosts except we dont substruct 2 but only 1.

Broadcast is the same as Network address and you add XY to the last number.

![image.png](https://boostnote.io/api/teams/__vB7-dyj/files/176e77a4525053257a6dcba41e82f2c830cd6722cf388c03d37964336270508f-image.png)

## :::
