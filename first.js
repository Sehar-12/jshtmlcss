// /*const product={
//     name:"Parker Jotter Standard CT Ball pen",
//     rating:4,
//     offer:5,
//     price:217

// };
// console.log(product);

// const profile={
//     name:"shraddakapra",
//     posts:195,
//     followers:"598k",
//     following:4,
//     bio:"Entrepreneur apna college|ex-microsoft,DRDO to educate someone is highest privilegde",
//     isFollow:false
// };
// console.log(profile)*/
// //let a=5;
// //let b=2;
//  //console.log("a",a);
// // console.log("a+b",a+b);
// //console.log("b",b);
// // console.log("a*b",a*b);
// // console.log("a-b",a-b);
// // console.log("a/b",a/b);
// // console.log("a%b",a%b);
// // console.log("a**b",a**b);
// // console.log("++a",a-=1);
// // console.log("--a",--a);
// // console.log("--b",--b);
// // console.log("++b",++b);
// let a=3
// let b=1
// console.log("a&b",a&b)
//conditional statements
/*let age=17;
if(age>18)
    {
        console.log("can vote");
    }
else{
    console.log("u cannot vote");
}
let num=10;
if(num%2===0)
    {
        console.log("even");
    }
    else
    {
        console.log(num,"is odd")
    }*/
   /*ternary operators = condition?true output:false output
   let age=18;
   let r=age>=18 ? "adult":"not adult";//simple or compact if else
   console.log(r);
alert("hello")//one time pop up
let name=prompt("hello")
console.log(name)
num=prompt("Enter a number");
//console.log("number is",num);
for(i=0;i<num;i++)
    {
if(i%5==0)
    {
        console.log(i,"is a multiple of 5");
    }
    }
let score=prompt("enter the score of the student");
if(score>=90 && score<=100)
    {
        console.log("A");
    }
 else if(score>=70 && score<=89)
        {
            console.log("B");
        }
 else if(score>=60 && score<=69)
            {
                console.log("C");
            }
 else  if(score>=50 && score<=59)
                {
                    console.log("D");
                }
                else
                {
                    console.log("F")
                }*/

 /*calculate sum of n numbers
 let sum=0;
 n=prompt("enter the n")
 for(let i=1;i<=n;i++)
    {
        sum+=i;
    }
    console.log("Sum is equal to=",sum);
    //while loop
    let sum=0;
    let n,i=1;
    n=prompt("enter n")
     do
        {
            sum+=i;
            i++;
        }while(i<=n);
        console.log("Sum is equal to=",sum);
        //for of loop, apply loops on strings
        let str="seher";
        let size=0;
        for(let i of str)
            {
                console.log("i=",i);//i will hve the characters
                size++;
            }
            console.log("string size=",size)*/
            //for in loops=objects,arrays

/*to print even numbers from 0 to 100
let j=0;
for( i=0;i<=100;i++)
    {
        if(i%2!==0)
            {
                console.log(i);
                j++;
            }
    }
    console.log("number of even numbers from 0 to 100 is",j)*/
    /*create a game where u start with any random game number .ask the user to 
    keep guessing the game number untill the user enters correct value
    let n;let gm;let i=1;
    gm=Math.floor(Math.random()*100);
   // console.log("the random number is",gm)
   do{
   n = prompt("Hey! Ready to play\n Guess the number");
   if(n==gm)
    {
        alert("Congrats!\n u got it right!");
    }
    else if(n<gm)
    {
    alert("number is small \n Enter the big number..")
        i++;
    }
    else if(n>gm)
        {
            alert("Number is large\n,try with small number..")
            i++;
        }
}while(n!=gm);
console.log("U guessed correct number in ",i,"trials");*/
/*strings
let str="apna college";
let str2='seher';
console.log(str ,  str2)//to find string length str.length we use*/
/*template literals:a way to have embedded expressions in the strings
let obj={
    item:"pen",
    price:45,
};
console.log("the cost of",obj.item,"is",obj.price,"rs")
let out=`the cost of ${obj.item} is ${obj.price} rs`;//string interpolation
console.log(out);
let sent=`this is a template literal`
console.log(sent)*/
//string methods =built in functions to manipulate a string
// let str=" abc seher "
// let str2;
//str2=str.toUpperCase();
//str.toLowerCase,str.trim()=to remove white spaces from start ad end,strings are immutable
//console.log(str2)
//console.log(str.trim())
//str.slice(start,end?)=returns part of the string
//str1.concat(str2)joins str2 to str1
//str.replace(searchVal,newVal)replaces firstmatching value hellolo=helplo,replaceAll=replaces all matching values
//str.charAt(idx)
// string is immutable
// let name=prompt("Enter your full name(without spaces)");
// let str1="@";
// let str2=name.length;
// s=str1.concat(name,str2)
// console.log(s)
//arrays=collection of homogeneous data items,it is an object type
/*let marks=[97,82,75,89,98];
console.log(marks)
console.log(marks.length)
let heroes=["ironman","sonpari"]
console.log(heroes)
marks[2]=98
for(let i=0;i<marks.length;i++)//printing elements of array using loops
    {
        console.log(`marks ${i} is ${marks[i]}`)
    }
//array is mutable type while string is immutable type,
//using for of loop
for(let i of marks)
    {
        console.log(`marks = ${i} `)
    }to find array average
   let marks=[85,97,44,37,76,60]
   let average=0,sum=0;
   for(let i=0;i<marks.length;i++)
    {
        sum+=marks[i];
        average=sum/marks.length;
    }
    console.log("average marks of student is",average)*/
    /*price=[250,645,300,900,50]// to get final price after applying offer
    for(let i=0;i<price.length;i++)
        {
            price[i]=price[i]-price[i]*0.1;
        }

                console.log("final price after applying offer is\n:",price)*/

                /*using for of loop
                price=[250,645,300,900,50]
                let j=0;
                for(let i of price)
                    {
                        console.log(`value before offer: ${i} `);
                        let offer=i/10
                        price[j]=price[j]-offer;
                        console.log(`final price after applying offer is:${price[j]}`);
                        j++;
                    }

                    array methods=push()=add to end
                    pop()=delete from end and return
                    toString:converts array to string
                    concat:joins multiple arrays and returns result
                    unshift():add to start
                    shift:delete from and return
                    slice():returns a piece of array//doesnot change original array
                    splice():change original array(add,remove,replace)
                    let foodItems=["potato","apple"];
                    foodItems.push("chips")
                   r= foodItems.pop()
                    console.log(foodItems)
                    console.log(r)
                    let s=[1,2,3]
                    d=foodItems.concat(s);
                    console.log(d)
                    d.unshift("seher");
                    console.log(d)
                    d.shift();
                    console.log(d)
                    console.log(d.slice(1,4))//ending index is not included
                    d.splice(1,2,"seher","u can do it")//splice(start,ndelete,newele)
                    console.log(d)
                    d.splice(2)//from 2 it deletes and returns all elemensts
                    and array will have other elements before 2;
  d.splice() doesnot return anything doesnot return anything arr is not changed
  let comp=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
  console.log(comp)  
  r=comp.shift();//removes first company
  console.log(comp) 
  comp.splice(1,1,"Ola")        
console.log(comp);
comp.push("Amozon");
console.log(comp)*/
/*functions=block of code used to perform specific task,can be invokedor called
to reduce redundancy functions can be used
function name(){
    console.log("welcome im coding world");
    console.log("seher u can learn javasript");
}
name();

function name(msg,n)//parameter//local variables :block scope
{
    s=(msg+n);
    return s;
}
let a=name("hey seher",10);//argument//global:whole prog
console.log(a)
function sum(a,b)
{
    return a+b;
}
function mul(a,b)
{
return a*b
}below is arrow function
const sum=(a,b)=>
    {
        return a+b
    }
console.log(sum(3,4))
const mult=(a,b)=>
    {
        return a*b;
    }
    console.log(mult(3,4))*/
    /* number of vowels in the string
function numv(msg){
let count=0;
for(let i=0;i<msg.length;i++)
    {
        if(msg[i]=='a'||msg[i]=='e'||msg[i]=='i'||msg[i]=='o'||msg[i]=='u')
            {
                count++;
            }
        }
        return count;

}
d=numv('najmus seher')
console.log(d);

//using arrow function
const numv=(msg)=>
    {
        let count=0;
        for(let i=0;i<msg.length;i++)
            {
                if(msg[i]=='a'||msg[i]=='i'||msg[i]=='o'||msg[i]=='u'||msg[i]=='e')
                    {
                        count++;
                    }
            }
            return count;
    }
    console.log(numv("apna college"))
    for each loop in arrays
    arr.forEach(callback fuction)
    callback function:passed as an argument to another function
    here it is the function to execute each ele of arr
    arr.forEach((val)=>
    {
        console.log(val)
}) 
let arr=["seher","u","have","to do it"]
arr.forEach(function printvae(val){
console.log(val);
})
arr.forEach((val,i,arr)=>{
    console.log(val.toUpperCase(),i,arr)//where val,i,arr can be optional forEach is used only for arrays
})
higher order functions/method=forEach=which takes other function as a parameter or returns a function
num=[1,2,3,4,5,6]
/*num.forEach((val,i,num)=>
{
    console.log(val**2,i,num)
})
    important array methods:map=creates a new array with the results of some operation.
    performs similar operation as forEach
    difference is map returns new array whereas forEach doesnot
    let arr=[1,2,3,4]
   let s= arr.map(val=>{
        return(val**2)
    })
    console.log(s)
    now filter method:creates a new array of elements that give true for condition/filter
    eg:all even elements
    let arr=[1,2,3,4]
let s=arr.filter((val)=>{
        return(val%2==0);
    }) ;
    console.log(s)// gives [2,4]
   let t= arr.map(val=>{
        return(val%2==0)
    })
    console.log(t)//gives true or false [false,true,false,true]
    reduce=performs some operations and reduces the array to a single value.it returns that single value.
    let arr=[1,2,3,4]
    const initial=0//accumultor=res
    const sum=arr.reduce((accumulator,currentvalue)=>accumulator+currentvalue,initial,
    )
   let s=arr.reduce((res,curr)=>
    {
        return res+curr;
    })
    console.log(s)
    let large=arr.reduce((pre,curr)=>{
        return(pre>curr?pre:curr);
    })
    console.log(large)
    arr=[98,99,89,90,87,94]
    let great90=arr.filter((val)=>{
        return(val>90)
    })
    console.log(great90)
n=prompt("enter n")

arr=[]
for(let i=1;i<=n;i++)
    {
        arr.push(i)// or arr[i-1]=i
    }
    let sum=arr.reduce((pre,curr)=>
    {
        return(pre+curr)
    })
    console.log(sum)
    let mul=arr.reduce((pre,curr)=>
        {
            return(pre*curr)//factorial of number
        })
console.log(mul)
arr=[1,2,3]
var map = function(arr, fn) {
    let s=[];
    for(let i=0;i<arr.length;i++){
s.push(fn(arr[i]));
    }
  return s;  
};
let fn=function plusone(n)
{
    return(n+1);
};
k=map(arr,fn);
console.log(`[${k.join(',')}]`);
let mappp=(arr,fn)=>
{
   let incr=[];
    for(let j=0;j<arr.length;j++)
    {
        incr.push(fn(arr[j],j))
    }
    return incr;
}
fn=function plusI(n,i)
{
    return n+i
};
d=mappp(arr,fn)
console.log(`[${d.join(',')}]`)

fn=function constant()
{
    return 42;
}
o=mappp(arr,fn);
console.log(`[${o.join(',')}]`)*/
/* performming array transformatins on each element
arr1=[1,2,3]
var map = function(arr, fn) {
    if (!Array.isArray(arr) || !arr.length) {
        return []; // Return an empty array if arr is not an array or is empty
    }
    let returnedArray=[]
    for(let i=0;i<arr.length;i++)
    {
        returnedArray.push(fn(arr[i],i))
    }
   return returnedArray; 
};
let fn=function plusone(n)
{
    return n+1;
}
const newArray=map(arr1,fn)
console.log(newArray);
let arr2=[1,2,3]
fn=function plusI(n,i)
{
    return n+i
}
const sec=map(arr2,fn)
console.log(sec);
arr3=[10,20,30]
fn=function constant()
{
    return 42;
}
const thir=map(arr3,fn)
console.log(thir);
fn=[-5,-4,-3,-2,-1,0,1,2,3,4,5];
let arr=function square(n)
{
    return Math.pow(n,2);
};
let s=map(fn,arr);
console.log(s);*/


    





    
