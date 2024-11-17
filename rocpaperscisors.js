let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const usercompscore=document.querySelector("#comp-score");

const getCompchoice=()=>
    {
        //rock,paper,scissor
        const options=["rock","paper","scissor"]
       const i= Math.floor(Math.random()*3)
       return options[i];
    }
    const drawGame=()=>
        {
            msg.innerText="The Game was a draw,Play Again"
            msg.style.backgroundColor="pink"
        }
        const genwinner=(userwin,compchoice,userchoice)=>
            {
                if(userwin==true)
                    {
                        userscore++;
                        userscorepara.innerText=userscore;
                     msg.innerText=`Computer's choice=${compchoice} \n User's choice=${userchoice}\n Congrats! U win`
                        msg.style.backgroundColor="green";
                        
                    }
                    else 
                    {
                        compscore++;
                        usercompscore.innerText=compscore;
                     msg.innerText=`Computer's choice=${compchoice}\n  User's choice=${userchoice}\n Sorry,U lose`
                        msg.style.backgroundColor="red";
                    }
            }
const playgame=(choiceId)=>
    {
const userchoice=choiceId;
//generate computer choice
const compchoice=getCompchoice();

if(compchoice==userchoice)
    {
        //Draw Game
        drawGame();
    }
else
{
    let userwin=true;
    if(userchoice=="rock")
    {
        //computers choice can be scissor or paper
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice=="paper")
        {
            //computers choice can be rock or scissor
            userwin=compchoice==="scissor"?false:true
        }
        else if(userchoice=="scissor")
            {
                userwin=compchoice==="rock"?false:true;
            }
genwinner(userwin,compchoice,userchoice)
}
    }
    
choices.forEach((choice)=>
{
    const choiceId=choice.getAttribute("id")
    choice.addEventListener("click",()=>
    {
playgame(choiceId);
    })
})