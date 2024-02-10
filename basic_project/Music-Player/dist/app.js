let playBtn=document.getElementById('play-btn');
let progress=document.getElementById('progress');
let songList=document.getElementById('song-list');


let num=1;
let songs = [
    {
        name:'song1',
        id:1
    },
    {
        name:'song2',
        id:2
    },
    {
        name:'song3',
        id:3
    },
    {
        name:'song4',
        id:4
    }
]

let audio=new Audio('./assest/song1.mp3');

for(let song of songs){
    let li=document.createElement('li');
    li.setAttribute('id',song.id);
    li.innerText=song.name;
    li.classList.add('song-item');
    songList.append(li);
}



audio.addEventListener('timeupdate',()=>{
   
    let cp=audio.currentTime*100/audio.duration;
    progress.value=cp;
   
})
progress.addEventListener('change',()=>{
    let updatedTime = audio.duration * progress.value / 100;
    audio.currentTime = updatedTime;
})
playBtn.addEventListener('click' , ()=>{
    audio.paused ? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-play')){
        playBtn.children[0].classList.remove('fa-play')
        playBtn.children[0].classList.add('fa-pause')
    }
    else{
        playBtn.children[0].classList.remove('fa-pause')
        playBtn.children[0].classList.add('fa-play')
    }
})


songList.addEventListener('click',(e)=>{
    let songId=e.target.getAttribute('id');
    num=songId;
    audio.src=`./assest/song${songId}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
})



let forward=document.getElementById('forward');
let backward=document.getElementById('backward');

forward.addEventListener('click',(e)=>{
    
    num=((num)%songs.length)+1;

    console.log(num);
    audio.src=`./assest/song${num}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
    
})
backward.addEventListener('click',()=>{
    num=((num)%songs.length)-1;
    if(num<=0){
        num=num+songs.length;
    }
    console.log(num);
    audio.src=`./assest/song${num}.mp3`;
    audio.currentTime = 0;
    audio.play();
    playBtn.children[0].classList.add('fa-pause');
    playBtn.children[0].classList.remove('fa-play');
})























