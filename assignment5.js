//Exercise
//Level-1
//1
let empty_arr=[]
//2
let first_arr=[1,2,3,4,5]
//3
console.log("Length of the first_arr",first_arr.length)
//4
//first item
console.log(first_arr[0])
//middle item
let mid=first_arr.length/2;
console.log(first_arr[mid])
//last item
let len=first_arr.length
console.log(first_arr[len-1])
//5
let mixedDatatypes=[1,'Den',5,'Cave','S',9.8,6]
console.log(mixedDatatypes.length)
//6
let itCompanies=['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']
//7
console.log(itCompanies)
//8
console.log('Number of comapnies ',itCompanies.length)
//9
console.log(itCompanies[0])
let middle=itCompanies.length/2
console.log(itCompanies[middle])
console.log(itCompanies[itCompanies.length-1])
//10
console.log(itCompanies)
//11
let firstele=itCompanies[0].toUpperCase()
console.log(firstele)
let secele=itCompanies[1].toUpperCase()
console.log(secele)
let thirdele=itCompanies[2].toUpperCase()
console.log(thirdele)
let fourthele=itCompanies[3].toUpperCase()
console.log(fourthele)
let fifthele=itCompanies[4].toUpperCase()
console.log(fifthele)
let ysixthele=itCompanies[5].toUpperCase()
console.log(sixthele)
let seventhele=itCompanies[6].toUpperCase()
console.log(seventhele)
//12
console.log(itCompanies,"are big it companies")
//13
let company=prompt("Enter the company")
for(let i=0;i<itCompanies.length,i++)
{
    if(itCompanies[i]==company)
     console.log('Comapny found')
    else
     console.log('comapny not found')
}
//14
let arr=[]
for(let i=0;i<itCompanies.length;i++)
{
    let companys=itCompanies[i]
    if(companys.indexOf('o') !==companys.lastIndexOf('0'))
    {
        arr.push(companys)
    }
}

console.log(arr)

//15
itCompanies.sort()
console.log(itCompanies)
//16
itCompanies.reverse()
console.log(itCompanies)
//17
console.log(itCompanies.slice(0,3))
//18
console.log(itCompanies.slice(len-4,len-1))
//19
console.log(itCompanies(1,len-2))
//20
itCompanies.splice(0,1)
console.log(itCompanies)
//21
itCompanies.splice(middle,1)
console.log(itCompanies)
//22
itCompanies.splice(len-1,1)
console.log(itCompanies)
//23
itCompanies.splice()
console.log(itCompanies)

//level 2//
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words =text.split(' ')

console.log(words)
console.log(words.length)

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
shoppingCart.push('Sugar')
shoppingCart[3]="Green Tea"

//4
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

if(countries.includes("Ethiopia")){
    console,log("ETHIOPIA")
}
else{
    countries.push("Ethiopia")
}
//5
const webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB']
if(webTechs.includes('Sass'))
{
    console.log("Sass is a CSS Preprocess")
}
else{
    webTechs.push("Sass")
    console.log(webTechs)
}
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack=frontEnd.concat(backEnd)
console.log(fullStack)

//Level-3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let leng=ages.length
ages.sort()
console.log("Minmum age is =",ages[0])
console.log("Maximum age is =",ages[leng-1])

let meadian = leng/2;

if(leng%2==0)
{
    console.log("Median values are ",ages[meadian],ages[meadian+1])
}
else{
    console.log("Meadian value is ",ages[meadian])
}


let total=0
for(let i=0;i<leng;i++)
{
    total=total+ages[i]
}
let average=total/len;
console,log(average)

let range=ages[leng-1]-ages[0]
console.log("Range=",range)

//2
let countri=countries.slice(0,10)
console.log(countri)
//3
let length_country=countries.length
    console.log(length_country)

    let mid_value=Math.floor(length_country/2)

    console.log(mid_value)

    if(length_country%2==0)
    {
        console.log(countries[mid_value-1],countries[mid_value])
    }
    else{
        console.log(countries[mid_value])
    }
    //4

    if(length_country % 2==0)
    {
      let firsthalf=countries.slice(0,mid_value)
      let secondhalf=countries.slice(mid_value+1,length_country-1)
    }
    else{
        let firsthalf=countries.slice(0,mid_value+1)
        let secondhalf=countries.slice(mid_value+2,length_country-1)
    }
 console.log(firsthalf)
 console.log(secondhalf)







