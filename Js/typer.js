var line = document.getElementById("line")
var txts = ["Whatever happens, Keep breathing", "I may not with you everyday, But I love you everyday", "Sweet, So my days with your voice", "I dream of you tonight", "Tomorrow you'll be gone", "I stay to watch you fade away", "I love you", "I'm sorry for loving you"];
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
