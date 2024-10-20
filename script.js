let progress = document.getElementById("progress");
let song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
const songSource = document.getElementById("songSource");
const songName = document.getElementById("songName");
const singerName = document.getElementById("singerName");

// All the songs for Co-Fi
const songs = [
    {title: "Coffee", singer: "beabadobee", src: "assets/Beabadoobee - Coffee.mp3"},
    {title: "Bubble Gum", singer: "Clairo", src: "assets/Bubble Gum.mp3"},
    {title: "Coffee Breath", singer: "Sofia Mills", src: "assets/Coffee Breath.mp3"},
    {title: "Before spring ends（在春天消失之前)", singer: "王OK & 李天责", src: "assets/Before spring ends在春天消失之前.mp3"},
    {title: "Let You Break My Heart Again", singer: "Laufey & Philharmonia Orchestra", src: "assets/Let You Break My Heart Again - Laufey & Philharmonia Orchestra.mp3"},
    {title: "Asleep Among Endives (アンディーヴと眠って)", singer: "Ichiko Aoba", src: "assets/Ichiko Aoba - Asleep Among Endives (アンディーヴと眠って).mp3"},
    {title: "rises the moon", singer: "liana flores", src: "assets/liana flores - rises the moon.mp3"},
    {title: "Army Dreamers", singer: "Kate Bush", src: "assets/Army Dreamers.mp3"},
    {title: "Hatachi No Koi", singer: "Lamp", src: "assets/Hatachi No Koi.mp3"},
    {title: "Show Me How", singer: "Men I Trust", src: "assets/Men I Trust -  Show Me How (album v).mp3"},
    {title: "My Love Mine All Mine", singer: "Mitski", src: "assets/Mitski - My Love Mine All Mine.mp3"},
];
const playIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" id="ctrlIcon"><path fill="#EDE0D4" d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>'

const pauseIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="#EDE0D4" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/></svg>'

let currentSongIndex = 0;

function loadSong(songIndex){
    songSource.src = songs[songIndex].src;
    songName.textContent = songs[songIndex].title;
    singerName.textContent = songs[songIndex].singer;
    song.load();
    song.play();
}

function playPause(){
    if(ctrlIcon.innerHTML.includes('viewBox="0 0 384 512"')){
        ctrlIcon.innerHTML = pauseIcon;
        song.play();
    }
    else{
        ctrlIcon.innerHTML = playIcon;
        song.pause();
    }
}

function previousSong() {
    currentSongIndex = (currentSongIndex === 0) ? songs.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
}

function nextSong() {
    currentSongIndex = (currentSongIndex === songs.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
}

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

if (song.play()){
    ctrlIcon.innerHTML = pauseIcon;
    setInterval(()=>{
        progress.value = song.currentTime
    },250);
}
else{
    ctrlIcon.innerHTML = playIcon;
}

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.innerHTML = pauseIcon;
}