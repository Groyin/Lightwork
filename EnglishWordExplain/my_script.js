/*！
 * Copyright (c) 2023 Yida Yin. All rights reserved.
 * Lightwork - v1.0.0
 * Author: Yu Lin
 * License: MIT
 * About author
 * Research Orientation : AIGC , AIGC+ , NLP , LLM
 * Profession : Product Manager , Entrepreneur ， Individual author
 * Email : <yidalinyu@gmail.com> , <316579@whut.edu.cn> , <841529068@qq.com>
 * WeChat & TikTokForChina : yida_linyu
 */
(function() {
const MyEnglishhtmlTemplate = `
<style>
.lightwork-all{
  all: initial;
  background: none;
  border: none;
  border-image: none;
  border-radius: 0;
  box-shadow: none;
  box-sizing: content-box;
  clear: none;
  clip: auto;
  float: none;
  height: auto;
  margin: 0;
  mask: none;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  opacity: 1;
  outline: none;
  overflow: visible;
  padding: 0;
  position: static;
  resize: none;
  transform: none;
  transition: none;
  width: auto;
  z-index: auto;
}
.lightwork-english1{
    color: #fff;
    background-color: #007bff;
    transition: color .15s ease-in-out,background-color .15s ease-in-out;
}
.lightwork-english1:hover {
    color: #f5f5f5;
    background-color:#0069d9;
    }
.lightwork-english8{
    background-color: #007bff;
    transition:background-color .15s ease-in-out;
}
.lightwork-svg{
    fill:white;
    transition: fill .15s ease-in-out,
}
.lightwork-english8:hover {
    background-color:#0069d9;
    }
.lightwork-english8:hover .svg{
    fill:#f5f5f5;
    }
.lightwork-english9{
    cursor: pointer;
    position: fixed;
    right:0px;
    top:24px;
    padding: 10px 10px 10px 14px;
    background-color: white;
    border-radius: 20px 0 0 20px;
    box-shadow: 0 0 8px 4px #00000014;
    pointer-events: all;
    user-select: none;
    touch-action: none;
    z-index:100000;
    transition:background-color .3s ease-in-out;
}
.lightwork-english9:hover{
    background-color:#007bff;
}
</style>
<div class="lightwork-all">
    <div style="
    background-color: rgba(255,255,255);
    position:fixed;
    top:24px;right:24px;
    width:320px;
    border: 1px solid rgba(0,0,0,.1);
    box-shadow:rgba(0, 0, 0 ,0.1) 0px 4px 12px 0px;
    border-radius: 4px;
    z-index:100000;
    font-family:'Microsoft YaHei';
    display:none;
    " id="english3">
        <div style=" display: flex;
        -ms-flex-align: center;
        align-items: center;
        padding: 6px 12px;
        color: #6c757d;
        background-color: rgba(255,255,255,.85);
        background-clip: padding-box;
        border-bottom: 1px solid rgba(0,0,0,.05);
        border-radius: 3px;">
            <div style="font:normal 700 14px 'Microsoft YaHei';color:black;
            margin-right: auto!important;cursor: move;user-select: none;" id="english4">Lightwork</div>
            <div id="english6" style="font:normal 400 14px 'Microsoft YaHei';user-select: none;">Click to start!</div>
            <div style="
            width:40px;
            height:24px;
            border-color: #007bff;
            border: 1px solid transparent;
            PADDING: 2PX 0 0 0;
            font:normal 400 14px 'Microsoft YaHei';
            line-height: 1.5;
            border-radius: 4px;
            user-select: none;
            text-align: center;
            vertical-align: middle;
            display: inline-block;
            font-weight: 400;
            cursor: pointer;
            MARGIN: 3PX 0 3PX 10PX;
            user-select: none;
            box-sizing: border-box;
            " type="submit" id="english1" class="lightwork-english1">ON</div>

            <div style="
            width:24px;
            height:24px;
            border-radius: 4px;
            text-align: center;
            vertical-align: middle;
            cursor: pointer;
            MARGIN: 3PX 0 3PX 10PX;
            box-sizing:border-box;
            user-select: none;
            
            " id="english8" class="lightwork-english8">
                <svg aria-hidden="true" focusable="false" role="img" class="lightwork-svg" viewBox="0 0 16 16" width="15" height="15" fill="white" style="display: inline-block; vertical-align: middle;user-select: none; overflow: visible;">
                    <path d="M6.823 7.823a.25.25 0 0 1 0 .354l-2.396 2.396A.25.25 0 0 1 4 10.396V5.604a.25.25 0 0 1 .427-.177Z"></path>
                    <path d="M1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 .784.784 0 1.75 0ZM1.5 1.75v12.5c0 .138.112.25.25.25H9.5v-13H1.75a.25.25 0 0 0-.25.25ZM11 14.5h3.25a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25H11Z"></path>
                </svg>

            </div>
        </div>
        <div style="padding: 12px;font-size: 14px;display:none;max-height:350px;overflow: auto;color:black;" id="english2">
            <div id="english5"></div>
            <div id="english7"></div>
        </div>
    </div>
    <div id="english9" class="lightwork-english9">
        <img style="width:24px  ;height:24px ;pointer-events: none;" src="https://yinyidalinyu.cn:7001/pluginlightwork/icon2.png" >
    </div>
</div>
`;

const MyEnglishrectangleDiv = document.createElement('div');
//const MyEnglishrectangleDivShadow=MyEnglishrectangleDiv.attachShadow({mode: 'open'});
MyEnglishrectangleDiv.innerHTML = MyEnglishhtmlTemplate;

document.querySelector('html').appendChild(MyEnglishrectangleDiv);

let english1=document.getElementById('english1')
let english2=document.getElementById('english2')
let english3=document.getElementById('english3')
let english4=document.getElementById('english4')
let english5=document.getElementById('english5')
let english6=document.getElementById('english6')
let english7=document.getElementById('english7')
let english8=document.getElementById('english8')
let english9=document.getElementById('english9')

let english_station=0
var selectedText=''
english1.addEventListener('click',function(){
    if(english_station==0){
        english_station=1
        english1.innerText="OFF"
        english2.style.display="block"
        english6.innerText="Ongoing"     
        english5.innerText='Listening. . .'
        document.onmouseup=function(){ 
            let selectedText0 = window.getSelection().toString().trim()
            if(selectedText0!=selectedText){
                selectedText=selectedText0
                if(selectedText.length!=0){
                    english7.innerHTML=""
                    if (selectedText.length>1 && selectedText.length<16) {
                        
                        console.log(selectedText)
                        createAnimation(selectedText,500)
                        let xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function() {
                            if (xhr.readyState === 4 && xhr.status === 200) {
                                let data = JSON.parse(xhr.responseText)
                                stopAnimation()
                                if(data.condition==1){
                                    //search ok
                                    try{
                                        english5.innerText=selectedText
                                        let detail=data.detail.definitions
                                        let detail_nums=detail.length
                                        for(let i=0;i<detail_nums;i++ ){
                                            let englishexplain=detail[i]
                                            let englishnewdiv1 = document.createElement('div')
                                            englishnewdiv1.innerHTML =`           
                                                <div style="padding: 10px 0;">
                                                    <div style="padding: 5px 0;">${englishexplain.type}</div>
                                                    <div>${englishexplain.definition}</div>
                                                    <div style="color: #8c8c8c;padding: 10px 0;">"${englishexplain.example}"</div>
                                                </div>`
                                            english7.appendChild(englishnewdiv1)
                                            if(i!=detail_nums-1){
                                                let englishnewdiv2 = document.createElement('div')
                                                englishnewdiv2.innerHTML=`
                                                    <div style="border-bottom: 1px solid #cdcdcd;"></div>
                                                `
                                                english7.appendChild(englishnewdiv2)
                                            }
                                        }
                                    }catch(error){
                                        //word error
                                        english5.innerText='Word is too complex!'
                                        setTimeout(() => {
                                            english5.innerText='Listening. . .'
                                        }, 3000);
                                        }

                                }
                                else{
                                    //word not found
                                    english5.innerText='Word not found!!'
                                    setTimeout(() => {
                                        english5.innerText='Listening. . .'
                                    }, 3000);
                                }
                            }
                            else{
                                //first request error ip: 43.143.39.43  
                                //console.log('43.143.39.43ERROR')
                                //english5.innerText='Connecting to the server'
                            }
                        };
                        xhr.open('GET', 'https://yinyidalinyu.cn:7005/en?word='+selectedText, true)
                        xhr.send()

                    }
                    else{
                        stopAnimation()
                        english5.innerText='Text length limit!!'
                        setTimeout(() => {
                            english5.innerText='Listening. . .'
                        }, 3000)
                    }
                }
            }
        }
    }
    else{
        english_station=0
        english1.innerText="ON"
        english2.style.display="none"
        document.onmouseup=null
        english6.innerText="Click to start!"
        english7.innerHTML=""
    }
})

english8.onclick=function(){
    english3.style.display="none"
    english_station=0
    english1.innerText="ON"
    english2.style.display="none"
    document.onmouseup=null
    english6.innerText="Click to start!"
    english7.innerHTML=""
    english9.style.display="block"
    english9.style.top=window.getComputedStyle(english3).getPropertyValue('top')    
}
function english9click(){
    english9.style.display="none"
    english3.style.display="block"
}
//english9 move
let mouseYOffset = 0;
let isDragging = false;
let clicknot=3
english9.addEventListener('mousedown', (event) => {
    event.preventDefault();
    mouseYOffset = event.clientY - english9.offsetTop;
    isDragging = true;
});

document.addEventListener('mousemove', (event) => {
    if (!isDragging) return;
    let newTop = event.clientY - mouseYOffset;
    // limit
    const windowHeight = window.innerHeight;
    const english9Height = english9.offsetHeight;
    newTop = Math.max(newTop, 0); 
    newTop = Math.min(newTop, windowHeight - english9Height); 
    english9.style.top = `${newTop}px`;
    clicknot=0
});
    
document.addEventListener('mouseup', () => {
    if(isDragging == true && clicknot==3){
        english9click()
    }
    clicknot=3
    isDragging = false;
});

//gen ...
let intervalId
function createAnimation(baseText, interval) {
  let counter = 0;
  function updateText() {
    counter = (counter + 1) % 4;
    let newText = baseText;
    for (let i = 0; i < counter; i++) {
      newText += '. ';
    }
    english5.innerText = newText;
  }
  intervalId = setInterval(updateText, interval);
}
function stopAnimation() {
  clearInterval(intervalId);
}

//english3 move
let isMouseDown = false;
let offsetX, offsetY;
english4.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    offsetX = event.clientX - english3.getBoundingClientRect().left;
    offsetY = event.clientY - english3.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (event) => {
    if (!isMouseDown) return;

    let newX = event.clientX - offsetX;
    let newY = event.clientY - offsetY;
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    newX = Math.min(Math.max(0, newX), windowWidth - english3.offsetWidth);
    newY = Math.min(Math.max(0, newY), windowHeight - english3.offsetHeight);

    english3.style.right = (windowWidth - newX - english3.offsetWidth) + 'px';
    english3.style.top = newY + 'px';
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let boxRect = english3.getBoundingClientRect();

    if (boxRect.left < 0) {
        english3.style.right = (windowWidth - english3.offsetWidth) + 'px';
    }

    if (boxRect.bottom > windowHeight) {
        english3.style.top = (windowHeight - english3.offsetHeight) + 'px';
    }
});
//over
})()