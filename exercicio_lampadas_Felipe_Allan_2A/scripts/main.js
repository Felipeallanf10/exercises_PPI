const myImage1 = document.querySelector('#myImage1')
const myImage2 = document.querySelector('#myImage2')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')

myImage1.onclick = () => {
    console.log(myImage1.src.indexOf("imagens/pic_bulbon.gif") != -1)
    if(myImage1.src.indexOf("imagens/pic_bulbon.gif") != -1){
        myImage1.src = 'imagens/pic_bulboff.gif'    
    } else if(myImage1.src.indexOf("imagens/pic_bulboff.gif") != -1){
        myImage1.src = 'imagens/pic_bulbon.gif'
    }
}
myImage2.onclick = () => {
    console.log(myImage2.src.indexOf("imagens/pic_bulbon.gif") != -1)
    if(myImage2.src.indexOf("imagens/pic_bulbon.gif") != -1){
        myImage2.src = 'imagens/pic_bulboff.gif'    
    } else if(myImage2.src.indexOf("imagens/pic_bulboff.gif") != -1){
        myImage2.src = 'imagens/pic_bulbon.gif'
    }
}

 btn1.onclick = () => {
     myImage1.src = './imagens/pic_bulbon.gif',
    myImage2.src = './imagens/pic_bulboff.gif'
    }

btn2.onclick = () => {
    myImage2.src = './imagens/pic_bulbon.gif',
    myImage1.src = './imagens/pic_bulboff.gif'
}