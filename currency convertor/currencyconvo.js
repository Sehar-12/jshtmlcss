const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1";

const dropdowns=document.querySelectorAll(".dropdown select")
const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")
const msg=document.querySelector(".msg")
let amount=document.querySelector(".amount input");
window.addEventListener("load",()=>
{
    updateexchangerate()
})

for(let select of dropdowns)
    {
        for(code in countryList)
            {
              let newoption=document.createElement("option")
              newoption.innerText=code;
              newoption.value=code;
              if(select.name==="from"&& code==="USD")
                {
                    newoption.selected="selected";
                }
                else if(select.name==="to"&& code==="INR")
                    {
                        newoption.selected="selected";
                    }
              select.append(newoption);
      
            }
            select.addEventListener("change",(evt)=>
            {
                updateFlag(evt.target);
            })
    }
    const updateFlag=(ele)=>
        {
let curcode=ele.value;
let countrycode=countryList[curcode];
let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
let img=ele.parentElement.querySelector("img");
img.src=newsrc;
 }
const btn=document.querySelector("form button")
btn.addEventListener("click", async (evt)=>
{
evt.preventDefault();
updateexchangerate();
});
  
const updateexchangerate=async()=>{
     // console.log(fromCurr.value);
    //console.log(toCurr.value);
    const url=`${BASE_URL}/currencies/${fromCurr.value.toLowerCase()}.json`;
    let response=await fetch(url);
    //console.log(response);
    if(!response.ok)
        {
            msg.innerText="Failed to fetch exchange rate";
            return
        }
        let data=await response.json()
        //console.log(data)
let amtval=amount.value;
if(amtval==""||amtval<1)
    {
        amtval=1;
        amount.value=1;
    }
        let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()]
      let finalamount=amtval*rate;
msg.innerText=`${amtval} ${fromCurr.value}=${finalamount} ${toCurr.value}`
};


