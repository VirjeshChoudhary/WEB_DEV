let inp=document.querySelector('input');
let btn=document.querySelector('button');
let list=document.querySelector('.list');

function manipulatedata(data){
    // if(data==''){
    //     let figure=document.createElement('figure');
    //     figure.innerHTML=`
            
    //         <h2> not found movie </h2>
            
    //     `
    //     list.append(figure);
    // }
    while(list.firstChild){
        list.firstChild.remove();
    }
    for(let item of data){
        let figure=document.createElement('figure');
        figure.innerHTML=`
            <img src=${item.show.image.medium} />
            <h2> Name: ${item.show.name}</h2>
            <h5> Language: ${item.show.language}</h5>
        `
        list.append(figure);
    }
}

function showdata(temp){
    fetch(`https://api.tvmaze.com/search/shows?q=${temp}`).then((res)=>{
        return res.json();
    }).then((data)=>{
       
        manipulatedata(data); 
    })
    .catch((err)=>{
        console.log(err);
    })
}

btn.addEventListener('click',()=>{
    let temp=inp.value;
    showdata(temp);
    inp.value="";
})


