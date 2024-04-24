//Exercise : level-1
//1
let age=prompt("Enter your age:")
if(age>=18)
{
    console.log("You are old enough to drive")
}
else{
    let diff=18-age
    console.log(`You are left with ${diff}} years to drive`)
}

//2
const myage=21
let yourage=prompt("Enter your age")
let differ_age=0
if(myage>=yourage)
{
    differ_age=myage-yourage
    console.log(`Your are ${differ_age} years older than me`)
}
else{
    differ_age=yourage-myage
    console.log(`Your are ${differ_age} years older than me`)
}

//3
let a=prompt("Enter the value of a ")
let b=prompt("Enter the value of b ")
//using if-else
if(a>b)
{
    console.log("a is greater than b")
}
else{
    console.log("a is less than b")
}
//using ternary operator
let result=(a>b)?"a is greater than b":"a is less than b"

console.log(result)

//4
let num=prompt("Enter a number")
if(num % 2 == 0)
{
    console.log(`${num} is an even number`)
}
else{
    console.log(`${num} is an odd number`)
}

//Exercise:Level-2
//1
let number=prompt("enter the number ")
if(num<=100 && num>=80)
{
    console.log("A")
}
else if(num<80 && num>=70)
{
    console.log("B")
}
else if(num<70 && num>=60)
{
    console.log("C")
}
else if(num<60 && num>=50)
{
    console.log("D")
}
else{
    console.log("F")
}

//2
 let month=prompt("Enter the Month")
 if(month=='September' && month=='October' && month=='November')
 {
    console.log("Autumn")
 }
 else if(month=='December' && month=='February' && month=='January')
 {
    console.log("Winter")
 }
 else if(month=='March' && month=='April' && month=='May')
 {
    console.log("Spring")
 }
 else if(month=='June' && month=='July' && month=='August')
 {
    console.log("Summer")
 }
 else{
    console.log("Wrong Input")
 }

 //3
 let day=prompt("Enter the day")
 let days=day.toLowerCase()
 if(days=="monday" || days=="tuesday" || days=="wednesday" || days=="thursday" ||days=="friday")
 {
    console.log(`${day} is a working day`)
 }
 else if(days=="saturday" && days=="sunday")
 {
    console.log(`${day} is a weekend `)
 }

 //Exercise:Level-3
 //1
 let mon=prompt("Enter a month")
 let months=mon.toLowerCase
 if(months=='january' || months=='march' ||months=='may' || months=='july' ||months=='august' || months=='october'||months=='december')
 {
    console.log(`${months} has 31 Days`)
 }
 else if(months=='february')
 {
    connsole.log(`${months} has 28 days`)
 }
 else if(months=='april'|| months=='june'||months=='september'||months=='november')
 {
    console.log(`${months} has 30 days `)
 }

 //2
 let year=propmt("Enter the year")
 if(year%4==0 && year%400==0)
 {
    console.log("Leap Year")
 }


