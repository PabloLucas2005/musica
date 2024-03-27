let img = document.getElementById("img")
let audio = document.getElementById("audio")
let trackName = document.getElementById("track-name")
let trackArtist = document.getElementById("track-artist")
let back = document.getElementById("back")
let play = document.getElementById("play")
let foward = document.getElementById("foward")
let currentMusic = document.getElementById("current-time")
let totalMusic = document.getElementById("total-duration")
let progress = document.getElementById("progress")

let playing = false
let index = 0

let data = [
    {
        image: "assets/images/logo_9.jpg",
        title: "Carry on my wayward son",
        artist: "Kansas",
        file: "assets/Musicas/Carry on my wayward son.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Back in Black",
        artist: "AC/DC",
        file: "assets/Musicas/Rock.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Highway to Hell ",
        artist: "AC/DC",
        file: "assets/Musicas/AC_DC - Highway to Hell .mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Iron Man ",
        artist: "Black Sabbath",
        file: "assets/Musicas/Iron Man.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },
        
    {
        image: "assets/images/logo_9.jpg",
        title: "Back",
        artist: "Pearl Jam",
        file: "assets/Musicas/Back Pear Jam.mp4",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Alive",
        artist: "Pearl Jam",
        file: "assets/Musicas/Alive Pearl Jam.mp4",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "The unforgiven",
        artist: "Metallica",
        file: "assets/Musicas/Metallica - The Unforgiven.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },
    
    {
        image: "assets/images/logo_9.jpg",
        title: "Given to Fly",
        artist: "Pearl Jam",
        file: "assets/Musicas/Given To Fly Pearl Jam.mp4",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "I Don't Want To Miss A Thing",
        artist: "Aerosmith",
        file: "assets/Musicas/I Don't Want To Miss A Thing - Aerosmith.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Wonderwall",
        artist: "Oassis",
        file: "assets/Musicas/WonderWall oassis.mp4",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },
    {
        image: "assets/images/logo_9.jpg",
        title: "Losing My Religion",
        artist: "R.E.M",
        file: "assets/Musicas/Losing My Religion  R.E.M.mp4",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "What's going on",
        artist: "4 Non Blonds",
        file: "assets/Musicas/whatsgoing.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Stairway to Heaven",
        artist: "Led Zeppelin",
        file: "assets/Musicas/Stairway to Heaven.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Refrão de Bolero + Piano Bar",
        artist: "Humberto Gessinger",
        file: "assets/Musicas/Refrão de Bolero + Piano Bar.mp4",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "Anjos pra quem tem fé",
        artist: "O Rappa",
        file: "assets/Musicas/Anjos.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },

    {
        image: "assets/images/logo_9.jpg",
        title: "A cera",
        artist: "O surto",
        file: "assets/Musicas/O Surto - A Cera.mp3",
        background: "linear-gradient(35deg, #00326f 10%, #0077ef 35%, #00326f 100%)"
    },
        
]

localStorage.setItem("newData", JSON.stringify(data))
let musics = JSON.parse(localStorage.newData)

function RenderMe(){
    img.src = musics[index].image
    audio.src = musics[index].file
    document.body.style.backgroundImage = musics[index].background
    trackName.innerHTML = musics[index].title
    trackArtist.innerHTML = musics[index].artist
}
RenderMe()

function playPause(){
    playing ? goPause() : goPlay()
}
function goPause(){
    audio.pause()
    play.src = "assets/buttons/play-circle.svg"
    playing = false
}
function goPlay(){
    audio.play()
    play.src = "assets/buttons/pause-circle.svg"
    playing = true
}
function updateProgress(){
    let porcent = Math.floor((audio.currentTime / audio.duration) * 100)
    progress.value = porcent
    currentMusic.innerHTML = secondsInMinutes(Math.floor(audio.currentTime)
    )
    totalMusic.innerHTML = secondsInMinutes(Math.floor(audio.duration))
    if(audio.currentTime == audio.duration) {
        nextMusic()
    }
}
function changeProgress(){
    audio.currentTime = progress.value / progress.max * audio.duration
    goPlay()
    audio.play()
}
function secondsInMinutes(second) {
    let minutes = Math.floor(second / 60)
    let seconds = second % 60

    if(seconds < 10) {
        seconds = '0' + seconds
    }
    return minutes + ":" + seconds
}

function backMusic(){
    index --
    if(index < 0){
        index = musics.length - 1
    }
    RenderMe()
    goPlay()
}

function nextMusic(){
    index ++
    if(index > musics.length - 1){
        index = 0
    }
    RenderMe()
    goPlay()
}

play.addEventListener("click", playPause)
audio.addEventListener("timeupdate", updateProgress)
progress.addEventListener("change", changeProgress)
back.addEventListener("click", backMusic)
foward.addEventListener("click", nextMusic)
