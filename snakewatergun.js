let userscore=0;
let compscore=0;
let userupdate=document.querySelector("#user-score");
let compupdate=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let resetgame=document.querySelector(".msger");
let btn=document.querySelector(".reset")
const res=()=>
    {
        btn.addEventListener("click",()=>
        {
            userupdate.innerText=0;
            compscore=0;
            userscore=0;
            compupdate.innerText=0;
            msg.innerText="Play Your Move";
            msg.style.backgroundColor="black";
        })
    } 
    res();
array=["snake","water","gun"];
choices.forEach((choice)=>
{
    let choiceId=choice.getAttribute("id");
    choice.addEventListener("click",()=>
    {
        playgame(choiceId);
        resetgame.classList.add("hide")
    })
})
const drawGame=()=>
    {
msg.innerText=`Game was a draw`;
msg.style.backgroundColor="darkblue"
    }
const playgame=(choiceId)=>{
    let compchoice=gencompchoice();
if(choiceId==compchoice)
    {
        drawGame();
    }
    else
    {
        let userwin=true;
        if(choiceId=="snake")
            {
                
               userwin= compchoice=="gun"?false:true;
            }
        else if(choiceId=="water")
                {

                  userwin= compchoice=="snake"?false:true;
                }
        else if(choiceId=="gun")
                    {
                   userwin=compchoice=="water"?false:true;
                    }
                    genwinner(compchoice,choiceId,userwin)
    }
}
const gencompchoice=()=>
    {
        i=Math.floor(Math.random()*3)
        return array[i];
    }
    const genwinner=(compchoice,choiceId,userwin)=>
        {
            if(userwin==true)
                {
                    userscore++;
                    userupdate.innerText=userscore;
                    msg.innerText= `You win!\n computer's choice= ${compchoice} \n user's choice=${choiceId}`;
                    msg.style.backgroundColor="darkgreen"
                }  

                else
                {
                    compscore++;
                    compupdate.innerText=compscore;
                   msg.innerText= `You lose!\n computer's choice= ${compchoice} \n user's choice=${choiceId}`;
                     msg.style.backgroundColor="darkred"
                }
        }

