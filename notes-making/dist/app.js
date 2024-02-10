const notes_container=document.querySelector(".notesContainer");
const btn=document.querySelector("#btn");
// const input_box=document.querySelector(".input_box");
let input_Box;
btn.addEventListener('click',(e)=>{
    input_Box=document.createElement('p');
    input_Box.setAttribute("contenteditable","true");
    let img=document.createElement('img');
    img.src="./assest/download (1).png"
    input_Box.className="inputBox";
    notes_container.appendChild(input_Box).appendChild(img);
})
notes_container.addEventListener('click',(e)=>{
   if(e.target.tagName==="IMG"){
        input_Box.remove();
    }
    
})
 
 
