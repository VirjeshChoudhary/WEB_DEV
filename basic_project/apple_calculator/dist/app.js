let inp=document.querySelector('input')
let btns=document.querySelectorAll('button')

for(let btn of btns){
    btn.addEventListener('click',(e)=>{
        let btnText = e.target.innerText;
        if(btnText=='C'){
            inp.value="";
        }
        else if(btnText=='='){
            try {
                inp.value=eval(inp.value);
            } catch (error) {
                inp.value="invalid";
            }
        }
        else{
            inp.value+=btnText;
        }
    })
}
