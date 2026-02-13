const heart_ani = document.getElementsByClassName('heart')[0]
const heart1_ani = document.getElementsByClassName('heart1')[0]
const thu1_ani = document.getElementsByClassName('letter')[0]
const thu2_ani = document.getElementsByClassName('letter2')[0]
const show1_ani = document.getElementsByClassName('show1')[0]
const bay1_ani = document.getElementsByClassName('flying1')[0]
const bay2_ani = document.getElementsByClassName('flying2')[0]
const bay3_ani = document.getElementsByClassName('flying3')[0]
const bay4_ani = document.getElementsByClassName('flying4')[0]
const bay5_ani = document.getElementsByClassName('flying5')[0]
const bay6_ani = document.getElementsByClassName('flying6')[0]
const bay7_ani = document.getElementsByClassName('flying7')[0]

const cl = document.getElementsByClassName('cl')[0]
const cr = document.getElementsByClassName('cr')[0]

const yes = document.getElementsByClassName('yes')[0]
const no = document.getElementsByClassName('no')[0]
const askbg = document.getElementsByClassName('ask')[0]

const kitplay = document.getElementsByClassName('kitkat')[0]
const bookplay = document.getElementsByClassName('book')[0]
const huyshow = document.getElementsByClassName('huyfm')[0]
const speech = document.getElementsByClassName('speech')[0]

const sound = document.getElementsByClassName('play')[0]

const playButton = document.getElementById("playid")
const playButtonyes = document.getElementById("playidyes")
const playButtonop = document.getElementById("playidop")
const playButtonhuyfm = document.getElementById("playidhuyfm")

playButton.addEventListener("click", () => heart_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => thu1_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => thu2_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => show1_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay1_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay2_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay3_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay4_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay5_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay6_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => bay7_ani.style.animationPlayState = "running")
playButton.addEventListener("click", () => kitplay.style.animationPlayState = "running")

playButtonyes.addEventListener("click", () => askbg.style.animationPlayState = "running")
playButtonyes.addEventListener("click", () => yes.style.animationPlayState = "running")
playButtonyes.addEventListener("click", () => no.style.animationPlayState = "running")

playButtonop.addEventListener("click", () => heart1_ani.style.animationPlayState = "running")
playButtonop.addEventListener("click", () => cl.style.animationPlayState = "running")
playButtonop.addEventListener("click", () => cr.style.animationPlayState = "running")

playButtonhuyfm.addEventListener("click", () => bookplay.style.animationPlayState = "running")
playButtonhuyfm.addEventListener("click", () => huyshow.style.animationPlayState = "running")
playButtonhuyfm.addEventListener("click", () => speech.style.animationPlayState = "running")

playButtonop.addEventListener("click", () => sound.play())



