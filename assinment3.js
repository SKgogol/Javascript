//level 1:
//1
let firstname="Sounak";
let lastname="Kundu";
let country ="india";
let city="howrah";
let age = 20;
let isMarried=false;
let year=2024;
console.log(typeof(firstname));//string
console.log(typeof(lastname));//string
console.log(typeof(country));//string
console.log(typeof(city));//string
console.log(typeof(age));//number
console.log(typeof(isMarried));//boolean
console.log(typeof(year));//number
//2
console.log(typeof('10')===typeof(10));//false
//3
let num=parseInt(9.8)
console.log(typeof(num)===typeof(10))//true
//4
//truthy value
let isFollow=true;
let isVoter=true;
let isStudent=true;
//falsy value
let isCreator=false;
let isPass=false;
let isDisabled=false;
//5
// 1. 4 > 3    true
// 2. 4 >= 3   true
// 3. 4 < 3    false
// 4. 4 <= 3   false
// 5. 4 == 4   true
// 6. 4 === 4  true
// 7. 4 != 4   false
// 8. 4 !== 4   false
// 9. 4 != '4'  false
// 10. 4 == '4' true
// 11. 4 === '4' false
console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4!=='4');
console.log(4=='4');
console.log(4==='4');
let str="python";
let str1="jargon";
console.log(str.length!=str1.length);//false
//6
// 1. 4 > 3 && 10 < 12    true
// 2. 4 > 3 && 10 > 12    false
// 3. 4 > 3 || 10 < 12    true
// 4. 4 > 3 || 10 > 12    true
// 5. !(4 > 3)             false
// 6. !(4 < 3)             true
// 7. !(false)             true
// 8. !(4 > 3 && 10 < 12)  false
// 9. !(4 > 3 && 10 > 12)  true
// 10. !(4 === '4')     true
console.log( 4 > 3 && 10 < 12);
console.log( 4 > 3 && 10 > 12);
console.log( 4 > 3 || 10 < 12);
console.log( 4 > 3 || 10 > 1);
console.log(!(4 > 3));
console.log( !(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log( !(4 > 3 && 10 > 12));
console.log( !(4 === '4'));
//7
const now =new Date();
console.log(now.getFullYear());//2024
console.log(now.getMonth());//march
console.log(now.getDate());//14
console.log(now.getDay());//4
//console.log(now.getHours());//18
//console.log(now.getMinutes());//23
//console.log(now.getTime());//171042078

//level 2:
//1
 let base=prompt("Enter the base")
 let heigth=prompt("Enter the height");
 let area=0.5*base*heigth;
console.log("The area of the triangle is = "+ area)
//2
 let a=prompt("Enter the Side a");
 let b=prompt("Enter the Side b");
 let c=prompt("Enter the Side c");
 let s1=parseInt(a);
 let s2=parseInt(b);
 let s3=parseInt(c);
 let p=s1+s2+s3;
 console.log("The perimeter of the triangle is" + p);
 //3
let length=prompt("Enter the length")
let width=prompt("Enter the width")
let area2=length*width;
let len=parseInt(length)
let wid=parseInt(width)
let peri=(len+wid)*2;
console.log(area2,peri)
//4
let radius=prompt("Enter the radius")
let area3=PI*radius*radius;
console.log(area3);
//5
//y=m*x+c is the equation of straight line
let m=2;//coeffient of x
let con=-2;//constant value
console.log("The slope is "+m);
//6
let x1=2
let y1=2
let x2=6
let y2=10

let slope=(y2-y1)/(x2-x1)
console.log(slope)
//7
console.log(slope/m);//comparing the two slopes
//slopes are equal
//8
//let y=sx^2+qx+r form
let x=prompt("Enter the value of x");
let y=x*x+6*x+9;
console.log(y);
//if x=-3then the value of y;
//9
let hour=prompt("Enter the hours")
let rate=prompt("Enter the rate per hour")
let earning=hour*rate;
console.log(earning)
//10
let myname="Sounak"
if(myname.length>=7)
{
    console.log("YOUR NAME IS LONG ");
}
else{
    console.log("YOUR NAME IS SHORT")
}
//11
let first_name="Sounak"
let family_name="Gogol"
if(first_name.length=family_name)
{
    console.log(`Your first name,${first_name}is longer than your family name,${family_name} `)
}
else{
    console.log(`Your family name ${family_name}is longer than your first name,${first_name}`)
}
//12
let myAge=250
let yourAge=25
let age_diff=myAge-yourAge
console.log(`I am ${age_diff} years older than you`);
//13
let birth_year=prompt("Enter the birth year ")
let curr=new Date();
let curr_year=curr.getFullYear();
let diff_year=curr_year-birth_year;
if(diff_year>=18)
{
    console.log(`You are ${diff_year}.You are old enough to drive.`)
}
else{
    console.log(`You are ${diff_year}.You will be allowed to drive after 3 years.`)
}
//14
let live=prompt("Enter number of years")
let sec=live*12*30*24*3600;
console.log(`you lived ${sec} seconds `);
//15
let time=new Date()
let years=time.getFullYear()
let month=time.getMonth()
let date=time.getDate()
let hours=time.getHours()
let minite=time.getMinutes()
console.log(`${years}-${month}-${date} ${hours}:${minite}`)
console.log(`${date}-${month}-${years} ${hours}:${minite}`)
console.log(`${date}/${month}/${years} ${hours}:${minite}`)






















