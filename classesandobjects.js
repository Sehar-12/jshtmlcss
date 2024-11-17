/*prototypes in js
A javascript object is an entity having state and behaviour.(properties and method).
JS objects have a special prperty called prototype.
we can set prototype using  _ _proto_ _.//reference to the object
if object and prototype have same method,object's method is used.
creating objects:
const student={
name:"seher",marks:94.4,
printMarks:function(){
    console.log("marks=",this.marks)//this=the particular object student.marks
}
};
const karanArjun={
    marks:95.5,
    calmarks(){   //another way and most used way to define function inside objects
        console.log("study well to get good marks")
    }
}

karanArjun.__proto__=student;
classes=class is a program-code template for creating objects
these objects will have some state(variables) and some behaviour(functions) inside it.
class MyClass
{
constructor()
{
}
myMethod(){
}
}
let myobj=new MyClass();
class Toyotacar
{
start(){
    console.log("start");
}
stop(){
    console.log("stop");
}
setbrand(brand){
    this.brandname=brand;
}
}
let tcar= new Toyotacar();
tcar.setbrand("fortuner")
constructor() method is: 1.automatically invoked by new
initiales object..
class MyClass
{
constructor()
{
}
myMethod(){}
}
class Toyotacar
{
    constructor(brand,mileage)
    {
        console.log("creating new object");
        this.brandname=brand;
        this.mile=mileage;
    }
start(){
    console.log("start");
}
stop(){
    console.log("stop");
}
}
let tcar= new Toyotacar("fortuner",12);
console.log(tcar);
inheritance=inheritance is passing down prperties and methods from parent class to child class.
class Parent
{
}
class Child extends Parent
{
}
if child and parent have same method ,childs method will be used[Method overriding]
class Parent{
    constructor(){
        this.species="homosapiens"
    }
    hello(){
        console.log("hello world");
    }
}
class child extends Parent{
    name(){
    console.log("its  me seher");}
}
let onj=new child();
console.log(onj);
//SUPER keyword:
the super keyword is used to call the constructor of its parent class to access the parents prperrties and methods.
super(args)//calls Parents constructor
super.parentMethod(args)
class Parent{
    constructor(){
        console.log("enter parent constructor")
        this.species="homosapiens"
    }
    hello(){
        console.log("hello world");
    }
}
class child extends Parent{
     constructor(branch){
        console.log("enter child constructor")
        super();//to invoke parent class constructor
        this.branch=branch;
        console.log("exit child constructor")
    }
    name(){
    console.log("its  me seher");}
}
let obj=new child("cse");
console.log(obj);
class Parent{
    constructor(name){
        this.species="homosapiens";
        this.name=name
    }
    hello(){
        console.log("hello world");
    }
}
class child extends Parent{
     constructor(name){

        super(name);//to invoke parent class constructor
        
    }
    hey()
    {
        super.hello()
    console.log("its  me seher");}
}
let obj=new child("seher");
console.log(obj)
practice questions
1)
let DATA="secret information";
class User
{
    constructor(name,email){
        this.name=name;
        this.email=email;

    }
    viewData(){
        console.log("data=",DATA);
    }
}
let obj=new User("seher","najmuseher03@gmail.com")
let obj1=new User("abc","abc03@gmail.com")
let obj2=new User("xyz","xyz03@gmail.com")

console.log(obj,obj1,obj2);
class Admin extends User
{
    constructor(name,email){
        super(name,email)
    }

    editdata(){
        DATA="new value";
    }
}
let adobj=new Admin("admin","admin@gmail.com");
console.log(adobj)
//error handling:
try-catch
code:
try
{
...normal code
}
catch(err)//err is error object
{
..handling error
}
let a=5;
let b=5;
console.log("a=",a,"b=",b);
console.log("a+b =",a+b);
console.log("a+b =",a+b);
try{
    console.log("a+b =",a+c);//error
}
catch(err)
{
    console.log(err);
}
console.log("a+b =",a+b);
console.log("a+b =",a+b);
CALLBACKS,PROMISES Async await:
async wait>>promise chains>>callback hell
synchronous:synchronous means the code runs in a particular sequence of instuctions given in the program.
Each instruction waits for the previous instruction to complete its execution.
Asynchronous:
Due to synchronous programming,sometimes imp instuctions get blocked due to some previous instuctions,which causes a delay
in the UI.
Asynchronous code execution allows to execute next instructions immediately and doesnt block the flow.
*/
/* synchronous example:console.log("one");
console.log("two");
console.log("three");

asynchronous example:
setTimeout()
function hello(){
    console.log("hello");

}
setTimeout(hello,2000)
or
console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("hello")
},4000);
console.log("three");//output will be one two three hello
CALLBACK:
a callback is a function passed as an argument to another function.
function sum(a,b)
{
    console.log(a+b)
}
function calculator(a,b,sumfun)
{
sumfun(a,b);
}
calculator(1,2,sum);or
const hello=()=>
    {
        console.log("hello");
    }
    setTimeout(hello,3000);
    callback hell:Nested callbacks stacked below one another forming a pyramid structure.
    (pyramid of doom)
    this style of  programming becomes difficult to understand and manage.
    //nesting
    function getData(dataId,getnextdata)
    {
        setTimeout(()=>{
        console.log("data",dataId)
        if(getnextdata){
        getnextdata();
    }
    },2000)
}
//callback hell
getData(123,()=>
{
    console.log("getting data 2...")
    getData(234,()=>
    {
        console.log("getting data 3...")
        getData(345,()=>
        {
            console.log("getting data 4...")
            getData(456);
        })
    })
});
to solve callbacks we have promises
promises:promise is for "eventual" completion of task.it is an object in js.
it is a solution to callback hell.
let promise=new Promise((resolve,reject)=>{
})
    //resolve and reject are the callbacks provided by js
    let promise=new Promise((resolve,reject)=>{
        console.log("iam a promise");
        //resolve(123)
        reject("some error occured");
    })
   2)example
    function getData(dataId,getnextdata)
    {
        return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                console.log("data",dataId)
                resolve("success")
                if(getnextdata){
                getnextdata();
            }
            },5000) 
        })
}
let res=getData(123);
console.log(res)
A javascript promise object can be:
1)pending:the result is undefined
2)reolved:the result is a value(fulfilled) sytax=resolve(result)
3)rejected:the result is an error object syntax=reject(error)
*promise haas state(pending,fulfilled) and some result(result for resolve and error for reject).
T0 USE PROMISES
1)we have 2 functions .then() and .catch()
promise.then((res)=>{....})
promise.catch((err)=>{...})
example:*/
/*promise=new Promise((resolve,reject)=>
{
    console.log("iam a promise")
    reject("some error occured")
});
const getpromise=()=>
    {
       return new Promise((resolve,reject)=>{
            console.log("iam a promise");
            //resolve("succcess")
            reject("some error")
        })
    }

    let promise=getpromise();
    promise.then((res)=>{
        console.log("promise fullfiled",res)
})
promise.catch((err)=>
{
    console.log("promise rejected ",err)
})
promise chaining:

function asyncfunc1(){
    return new Promise((resolve,reject)=>
        {
setTimeout(()=>
{
console.log("some data 1")
resolve("success")
},3000)
        });
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>
        {
setTimeout(()=>
{
console.log("some data 1")
resolve("success")
},3000)
        });
}
console.log("getting data 1")
let p1=asyncfunc1()
p1.then((res)=>
{
    console.log(res)
})
console.log("fetching data 2....")
let p2=asyncfunc2()
p1.then((res)=>
{
    console.log(res)
})
output:
getting data 1
classesandobjects.js:354 fetching data 2....
classesandobjects.js:333 some data 1
classesandobjects.js:352 success
classesandobjects.js:358 success
classesandobjects.js:343 some data 1
//promise chaining
function asyncfunc1(){
    return new Promise((resolve,reject)=>
        {
setTimeout(()=>
{
console.log("some data 1")
resolve("success")
},3000)
        });
}
function asyncfunc2(){
    return new Promise((resolve,reject)=>
        {
setTimeout(()=>
{
console.log("some data 1")
resolve("success")
},3000)
        });
}
console.log("getting data 1")
let p1=asyncfunc1()
p1.then((res)=>
{
    console.log(res);
    console.log("getting data 2...")
    let p2=asyncfunc2()
    p2.then((res)=>
        {
console.log(res);
        })
})
output:
getting data 1
classesandobjects.js:373 some data 1
classesandobjects.js:392 success
classesandobjects.js:393 getting data 2...
classesandobjects.js:383 some data 1
classesandobjects.js:397 success
function getData(dataId,getnextdata)
    {
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId)
        resolve("success")
       
    },2000)
})
    }
//callback hell
// getData(123,()=>
// {
//     console.log("getting data 2...")
//     getData(234,()=>
//     {
//         console.log("getting data 3...")
//         getData(345,()=>
//         {
//             console.log("getting data 4...")
//             getData(456);
//         })
//     })
// });
let p1=getData(1);
p1.then((res)=>
    {
        console.log(res);
        getData(2).then((res)=>{
            console.log(res)
        })
    })
//or actual promise chanining
getData(1).then((res)=>{
    return getData(2);
}).then((res)=>
{
    console.log(res);
})
//ASYNC-AWAIT:
async function always returns a promise.
async function always returns a promise.
syntax=async function myFunc()
{
}
await pauses the execution of its surrounding async function until the promise is settled
 async function hello(){
    console.log("hello")
}
 hello();
function api()
{
    return new Promise((resolve,reject)=>
        {
            setTimeout(()=>{
                console.log("weather data")
                resolve(200)
            },2000);
            });
           
};
async function getwdata()
{
    await api();
    await api()
}
//2)using aync await
function getData(dataId)
    {
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId)
        resolve("success")
       
    },2000)
})
    }
    // using async await
    async function getalldata()
    {
        console.log("getting 1:")
        await getData(1);
        console.log("getting 1:")
        await getData(2);
    }
    getalldata()//unneccssary call to avoid this we have
    IIFE:immediately invoked function expression:
    IIFE is a function that is called immediately as soon as it defined.
    function getData(dataId)
    {
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId)
        resolve("success")
       
    },2000)
})
    }
    // using async await
   ( async function getalldata()
    {
        console.log("getting 1:")
        await getData(1);
        console.log("getting 2:")
        await getData(2);
    })();//() is IIFE we can call only once and only once in use
    //API CALLS,Fetch API:
    the fetch api provides an interface for fetching(sending/receiving) resources.
    it uses request and request objects.
    the fetch() method is used to fetch a resources(data).
    let promise=fetch(url,[options])
    API=Application programming Interface.
    const URL="https://cat-fact.herokuapp.com/facts";
    const factpara=document.querySelector("#fact");
    const btn=document.querySelector("#btn")
    
   /* let getFacts=async()=>{
        console.log("getting data")
    let promise= await fetch(URL)//get request bcz no options
    console.log(promise)//json format= like js object format
    let data =await promise.json();
    console.log(data[0].text);
    factpara.innerText=data[1].text
    }
    btn.addEventListener("click",getFacts)
    
    AJAX is asynchronous js and XML
    JSON is javascript object notation or ajaj  
    json() method:returns a second promise that resolves with the result of parsing the response 
    body text as JSON.(input is JSON,output is js object)
//using promise chain
function getFacts(){
    fetch(URL).then((response)=>
        {
            return response.json();
        }).then((data)=>
        {
            console.log(data);
            factpara.innerText=data[1].text
        })

}
btn.addEventListener("click",getFacts);



//REQUESTS AND RESPONSE
HTTPS VERBS
Response Status Code(refer mdn reference)
*HTTP(hypertext transfer protocal) response headers also contain details about the responses ,such as content type,http status code etc*/
//homework :sending POST req

