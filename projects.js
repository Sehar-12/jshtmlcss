/*tic tac toe:8 WINNING PATTERN
horizontal winning pattern:0,1,2
3,4,5
6,7,8
vertical winning patttern:0,3,6
1,4,7
2,5,8
cross:
0,4,8
2,4,6*/
let boxes=document.querySelectorAll(".box")
let resetbtn=document.querySelector("#reset")
let turn0=true;//player x,player y
let count=0;
let newbtn=document.querySelector("#NewGame");
    let msgcontainer=document.querySelector(".msg-contain")
    let msg=document.querySelector("#msg");
let warray=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetGame=()=>
    {
        turn0=true;
        enableboxes();
       msgcontainer.classList.add("hide")
       count=0;
    }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>
    {
        if(turn0)
            {
                box.innerText="O";
                turn0=false;
            
            }
            else{
                box.innerText="X";
                turn0=true
            }
            box.disabled=true;
            count++;
          let iswinner= checkwinner();
          if(!iswinner && count==9)
            {
                gamedraw();
            }
    })
})
const gamedraw=()=>
    {
        msg.innerText=`GAME WAS A DRAW`
        msgcontainer.classList.remove("hide");
        disableboxes()
    }
const enableboxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=false;
                box.innerText="";
            }
    }
const disableboxes=()=>
    {
        for(let box of boxes)
            {
                box.disabled=true;
            }
    }
const showwinner=(winner)=>
    {
msg.innerText=`Congrats,Winner is ${winner}`;
msgcontainer.classList.remove("hide")
disableboxes();
    }
const checkwinner=()=>
    {
        for(i of warray){
           posval1= boxes[i[0]].innerText;
           posval2= boxes[i[1]].innerText;
           posval3= boxes[i[2]].innerText;
           if(posval1!=""&&posval2!=""&&posval3!="")
            {
                if(posval1==posval2&&posval1==posval3)
                    {
                        
                        showwinner(posval1)
                    }
                    
            }
        }
    }
    newbtn.addEventListener("click",resetGame)
    resetbtn.addEventListener("click",resetGame)
   
   

    
