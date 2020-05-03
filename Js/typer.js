var line = document.getElementById("line")
var txts = ["Whatever happens, keep breathing", "I may not with you everyday, but I love you everyday", "sweet, so my days with your voice", "i dream of u tonight", "tomorrow you'll be gone", "i stay to watch u fade away", "I love you", "I'm sorry for loving you"];
var speed = 100

async function typewriter(txt) {
  for(let i = 0; i < txt.length; i++){
    line.innerHTML += txt.charAt(i);
    await delay(speed) 
  }
}

async function reverseTypewriter(txt) {
  for(let i = txt.length; i > 0; i--){
    line.innerHTML = line.innerHTML.slice(0,-1)
    await delay(speed)
  }
}

async function writeLoop(){
  
  for(let i = 0; i < txts.length; i++){
    await typewriter(txts[i])
    await delay(4000)
    await reverseTypewriter(txts[i])
    await delay(1000)
  }
  
  writeLoop()
}

function delay(ms){
  return new Promise((resolve)=>{setTimeout(()=>{resolve()},ms)})
}

writeLoop()
