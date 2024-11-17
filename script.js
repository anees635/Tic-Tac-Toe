let btn=document.querySelectorAll('.btn');
let mes=document.getElementById('mes');
let newbtn=document.querySelector('.newgame');
let resbtn=document.querySelector('.resetbtn');
let sign_o=true;
let count=0;


btn.forEach( (box) => {
    box.addEventListener('click',() => {
        if(sign_o == true)
        {
            sign_o=false;
            box.innerText='O';
        }
        else
        {
            sign_o=true;
            box.innerText='X';
        }
        box.disabled = true;
        winnercheck();
        count++;       
        if(count == "9" && !winnercheck())
            {
               drawmes();
            }
    })
});

const winpatt=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const winnercheck=() => {
      for(let pattern of winpatt)
      {
         let posi1=btn[pattern[0]].innerText;
         let posi2=btn[pattern[1]].innerText;
         let posi3=btn[pattern[2]].innerText;

         if( posi1 != "" && posi2 != "" && posi3 != "" )
         {
             if(posi1==posi2 && posi2==posi3)
             {
                  givemes(posi1);
                  
             }
             
         }
      }
};

const drawmes= ()=>{
    mes.classList.remove("hide");
    mes.innerText=`Game is Draw`;
    disabledbtn();
    newbtn.classList.remove("hide");
    resbtn.classList.add("hide");
}

const givemes=(val)=>{
    mes.classList.remove("hide");
    mes.innerText=`Congratulation. Winner is ${val}`;
    disabledbtn();
    newbtn.classList.remove("hide");
    resbtn.classList.add("hide");
};

const disabledbtn=() =>{
    for(let box of btn)
    {
        box.disabled=true;
    }
}

const enabledbtn=() =>{
    for(let box of btn)
    {
        box.disabled=false;
        box.innerText="";
    }
}

const resetgame=() =>{
    enabledbtn();
    sign_o=true;
    resbtn.classList.remove("hide");
    newbtn.classList.add("hide");
    count=0;
}

newbtn.addEventListener('click',() =>{
   resetgame();
   mes.classList.add("hide");
});

resbtn.addEventListener('click',() =>{
    resetgame();
    mes.classList.add("hide");
 });