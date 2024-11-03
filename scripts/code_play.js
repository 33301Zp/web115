8 * 9
72
3 ** 5
243
2**2
4
5 > 4
true
10 > 20
false
3==5
false
5==5
true
3!=5
true
3<=4
true
3*8(6+4)
VM1355:1 Uncaught TypeError: 8 is not a function
    at <anonymous>:1:4
(anonymous) @ VM1355:1
3*8+(6-4)
26
(7+8-4)*5+5-8
52
min(2,5,6,7,8)
VM1472:1 Uncaught ReferenceError: min is not defined
    at <anonymous>:1:1
(anonymous) @ VM1472:1
Math.min(5,6,7,3,1,2)
1
Math.abs(3,7,5,9,10)
3
Math.abs(-1)
1
Math.max(8,10,1,10,30,44,55)
55
Math.sum([3,5,7,10])
VM1897:1 Uncaught TypeError: Math.sum is not a function
    at <anonymous>:1:6
(anonymous) @ VM1897:1
type(5)
VM1919:1 Uncaught ReferenceError: type is not defined
    at <anonymous>:1:1
(anonymous) @ VM1919:1
typeof(9)
'number'
typeof("cold")
'string'
typeof(true)
'boolean'
alert("hello")
undefined
alert("goodbye")
undefined
var answer = prompt("What year were you born?")
undefined
answer
'2001'
alert("If you were born two years later you'd be born in " + answer + 2);
undefined
var year = prompt("What year were you born?");
undefined
alert("If you were born two years later you'd be born in " + year + 2);
undefined
alert("If you were born two years later you'd be born in " + year++2);
VM2459:1 Uncaught SyntaxError: missing ) after argument list
year
'2001'
alert("If you were born two years later you'd be born in " + (year + 2));
undefined
year = parseInt(year);
2001
alert("If you were born two years later you'd be born in " + (year + 2));
undefined
parseInt("22")
22
parseFloat("22")
22
parseInt("hello")
NaN
i.toString("2");
VM3577:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:1
(anonymous) @ VM3577:1
i.toString(2);
VM3592:1 Uncaught ReferenceError: i is not defined
    at <anonymous>:1:1
(anonymous) @ VM3592:1
10.toString(2);
VM3637:1 Uncaught SyntaxError: Invalid or unexpected token
i = 2;
2
i.toString(2);
'10'
i.toString();
'2'
i.toString();
'2'
i = 20'
VM3821:1 Uncaught SyntaxError: Invalid or unexpected token
i = 30;
30
i.toString(2);
'11110'
var name = prompt("What is your name?");
undefined
name
'zoe'
var lastName = prompt("What is your last name?");
undefined
name
'zoe'
lastName
'potts'
alert("Your full name must be " + name + lastName);
undefined
console.log(window.location);
VM5036:1 Location {ancestorOrigins: DOMStringList, href: 'https://cscircles.cemc.uwaterloo.ca/cheatsheet/', origin: 'https://cscircles.cemc.uwaterloo.ca', protocol: 'https:', host: 'cscircles.cemc.uwaterloo.ca', …}
undefined
let timestamp = Date.now();
undefined
console.log(timestamp);
VM5419:1 1724973687225
undefined
let timestamp = Date.now();
undefined
let randomNUmber = Math.random();
undefined
console.log(random);
VM5608:1 Uncaught ReferenceError: random is not defined
    at <anonymous>:1:13
(anonymous) @ VM5608:1
console.log(randomNUmber);
VM5714:1 0.7502616872592678
undefined
console.log(randomNumber);
VM5821:1 Uncaught ReferenceError: randomNumber is not defined
    at <anonymous>:1:13
(anonymous) @ VM5821:1
let randomNUmber = Math.random();
undefined
console.log(randomNumber);
VM5829:1 Uncaught ReferenceError: randomNumber is not defined
    at <anonymous>:1:13
(anonymous) @ VM5829:1
console.log(randomNUmber);
VM5833:1 0.10382178270969056
undefined
console.log(randomNUmber);
VM5837:1 0.10382178270969056
undefined