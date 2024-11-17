 /*create a game where u start with any random game number .ask the user to 
    keep guessing the game number untill the user enters correct value*/
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
console.log("U guessed correct number in ",i,"trials");