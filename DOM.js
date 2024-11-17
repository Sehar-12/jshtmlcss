//document object model//html=hypertext markup language=structure,css=style js=logic
//starter code=<style>
/*window object=represents an open window in a browser.it is browsers object(not javascripts) and is automatically created by browser
it is global object with lots of properties and methods
when a web page is loaded,the browser creates Document object model of the page
console.dir=prints the properties of special objects like document object which is the part of window object
dom is a tree like structure where wvery part is node
//DOM MANIPULATION:accesing the elements:
selecting the id=document.getElementById("myId")
selecting with class=document.getElementByClassName("myClass")
selecting with tag=document.getElementByTagName("p")
let r=document.getElementById("javascript")
console.dir(r);//if not exist null
let headings=document.getElementsByClassName("heading")//returns html collection
console.dir(headings);
console.log(headings)
let paras=document.getElementsByTagName("p")
console.dir(paras)
query selector
document.querySelector("myId/myClass/tag")//returns only first element
document.querySelector("myId/myClass/tag")//returns a nodelist
let ele=document.querySelector("p")
console.dir(ele)
let allele=document.querySelectorAll("p")
console.dir(allele)
PROPERTIES:get/set the properties
tagName:returns tag for element nodes.
innerText:returns the text content of the element and all its children
innerHTML:returns the plain text or HTML contents in the element
textContent:returns textual content even for hidden elements
dom structure=tree like tructure
<body>
<div>
<img></img>
<h1></h1>
<p></p>
<div></div>
</div>//text node//firstchild//lastchild
<script></script>
let firstele=document.querySelector("#javascript");
ge=firstele.firstChild
console.log(ge)
let divs=document.querySelectorAll(".box")
for(let div of divs)
    {

        div.innerText=prompt("enter new text")
    }
        attributes:
        1)getAttribute(attr)//to get the attribute value
        2)setAtrribute(attr,value)//to set the attribute val th
        style:
        1)node.style
        
       let div=document.querySelector("div")
       console.log(div)
      let id= div.getAttribute("id")
      console.log(id)
      para=document.querySelector("p")
    console.log(para.setAttribute("class","newclass"))
    console.log(box.style)
    div.style.backgroundColor="purple"
    div.style.width="100px"
    div.style.height="100px"
    insert elements:
    let el=document.createElement("div")
    node.append(el)//adds at the end of the node
    node.prepend(el)//adds at the start of the node
    node.before(el)//adds before the node(outside)
    node.after(el)//adds after the node(outside)
    DELETE ELEMENT:
    node.removes()//removes node
    let newbtn=document.createElement("button")    
    console.log(newbtn)
    newbtn.innerText="click me!"
    div=document.querySelector("div")
    div.append(newbtn)
    div.prepend(newbtn)
    div.after(newbtn)
img=document.querySelector("img")
console.log(img)
let newheading=document.createElement("h1")
newheading.innerHTML="<i>hey u have to do it</i>"
document.querySelector("body").before(newheading)
let pa=document.querySelector("p")
pa.remove()//appendchild() and reovechild shoould be leart
newbtn=document.createElement("button")
newbtn.innerText="click me";
let bo=document.querySelector("body")
newbtn.style.backgroundColor="red"
newbtn.style.textColor="white"
bo.prepend(newbtn)
let pa=document.querySelector("p")
para.setAttribute("para","newclass")
events:the change in the state of an object is known as an event
events are fired to notify code of "interesting chnges" that may affect the
code execution
mouse events(click,double click etc)
keyword events(keypress,keyup,keydown)
form events(submit etc)
print event nd many more
inline event handling(in html)
in js is given below for event handling
node.event=()=>{
    //handle here
}
btn=document.querySelector("#btn1")
btn1.onclick=()=>
    {
        console.log("btn1 was clicked" )
    }
        event object:it is special object that has details about the event
        all event handlers have access to event objects prop and methods
        node.event=(e)=>
            {
            //
            }
            e.target,e.type,e.clientX,e.clientY
            btn=document.querySelector("#btn1")
btn1.onclick=(e)=>
    {
        console.log(e)
        console.log(e.type)
    }
        event listeners:
        node.addEventListener(event,callback)
        node.removeEventListener(event,callback)
        *Note:the callback referenece should be some tp remove
       btn=document.querySelector("#btn1")
       const r= ()=>
        {
            console.log("clicked 1")
        }
       btn.addEventListener("click",r)
  
    btn.addEventListener("click",()=>
        {
            console.log("clicked -handler 2")

        })
        btn.addEventListener("click",()=>
            {
                console.log("clicked -handler 3")
            })
    btn1.removeEventListener("click",r)
    btn=document.querySelector("#btn1")
    let curmde="light";
    btn.addEventListener("click",()=>{
        if(curmde==="light")
            {
                curmde="dark";
                document.querySelector("body").style.backgroundColor="black"
            }
            else{
                curmde="light"
                document.querySelector("body").style.backgroundColor="white"
            }
            console.log(curmde)
    })*/
   bo=document.querySelector("body")
   div=document.querySelector("#box")
   let cl="light"
   div.addEventListener("mouseover",()=>{
    alert("u r welcomed")
    if(cl=="light")
{
    cl="dark";
    bo.classList.add("dark");
bo.classList.remove("light")}
    else{
        cl="light"
        bo.classList.add("light")
        bo.classList.remove("dark")
    }
    console.log(cl)
   })