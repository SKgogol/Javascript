//level 1 
//1
let challenge = '30 Days of JavaScript';
//2
console.log(challenge);//30 Days of JavaScript
//3
let len = challenge.length;
console.log(len);
//4
str = challenge.toUpperCase();
console.log(str);//30 DAYS OF JAVASCRIPT
//5
str1 = challenge.toLowerCase();
console.log(str1);//30 days of javascript
//6
let index = challenge.indexOf(' ');
let str3 =
    challenge.substring(0, index !== -1 ?
        index : challenge.length);
console.log(str3);//30
//7
str4 = challenge.slice(3);
console.log(str4);//days of javascript
//8
str5 = challenge.includes("Script");
console.log(str5);//true
//9
str6 = challenge.split(" ");
//10
str7 = challenge.split(" ");
//11
let string1 = "Facebook,Google,Microsoft,Apple,IBM,Oracle,Amazon";
str8 = string1.split(",");
//12
let str9 = challenge.replace("JavaScript", "Python");
console.log(str9);
//13
let str10 = challenge.charAt(15);
console.log(str10);//S
//14
let str11 = challenge.charCodeAt('J');
console.log(str11);//51
//15
let str12 = challenge.indexOf("a");
console.log(str12);//4
//16
let str13 = challenge.lastIndexOf("a");
console.log(str13);//14
//17
let text1 = "You cacnot end a sentence with because because because it is a conjuction  ";
let result = text1.indexOf("because");
console.log(result);//31
//18
let result1 = text1.lastIndexOf("because");
console.log(result1);//47
//19
let result2 = text1.search("because");
console.log(result2);//31
//20
let str14 = challenge.trim();
console.log(str14);
//21
let str15 = challenge.startsWith("30");
console.log(str15);//true
//22
let str16 = challenge.endsWith("JavaScript");
console.log(str16);//true
//23
let str17 = challenge.match("a");
console.log(str17);
//24
let text2 = "30 Days of";
let text3 = "JavaScript";
let result4 = text2.concat(text3);
console.log(result4);
//25
let str18 = challenge.repeat(2);
console.log(str18);

//level 2
//1
console.log('the quote "there is no exercise better for the heart than reaching down and liftiing people up." - by John Holmes teaches us to help one another ');
//2
console.log("Love is not patronizing and charity isnt about pity,its is about Love Charity and Love are the same-- with charity you give love ,so dont just give money but reach out your hand instead");
//3
let num='10';
console.log(typeof(num)===typeof(10));//false
let new_num=parseInt('10');
console.log(typeof(new_num)===typeof(10));//true

//4
let num1=parseFloat('9.8');
let num2=10;
console.log(typeof(num1)===typeof(num2));//true
//5
let string='puthon';
let string1='jargon';
if(string.endsWith('on')==true && string1.endsWith('on')==true)
{
    console.log("present in both");
}
//6
let sen = "I hope this course is not full of jargon";
if(sen.endsWith("jargon")==true)
{
    console.log("Is in the sentence");
}
//7
let randomnum=Math.random();
let randomnum1=randomnum*100;
console.log(Math.floor(randomnum1));
//8
let randomnum2=randomnum*50 + 50;
console.log(Math.floor(randomnum2));
//9
let randomnum3=randomnum*255;
console.log(Math.floor(randomnum3));
//10
let word="javascript";
let len=word.length;
let randomnumb=randomnum*len;
let charec=word.charAt(Math.floor(randomnumb));
console.log(charec);
//11
let i ;
let j;
let newstring="";
for (i=1;i<=5;i++)
{
    newstring+=i;
    for(j=-1;j<3;j++)
    {
        newstring+='\t';
        newstring+= i*Math.pow(i,j);
    }
    newstring+='\n';

}
console.log(newstring);
//12
let text1 = "You cannot end a sentence with because because because it is a conjuction "
let text2=text1.replace("because",'');
let text3=text2.replace("because",'');
let text4=text3.replace("because",'');

console.log(text4);









