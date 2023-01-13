'use strict'
/* 
a -> ai
e -> enter
i -> imes
o -> ober
u -> ufat 

"gato" => "gaitober"
gaitober" => "gato"
*/
const textCopied = document.querySelector('.textCopied')
const string = document.querySelector('#encode')
const textEncoded = document.querySelector('#decode')


textCopied.style.display='none'


const encode = ()=>{

    var textEncode = string.value.toLowerCase()

    
    textEncode = textEncode.replace(/e/img, 'enter').replace(/i/img, 'imes').replace(/a/img, 'ai').replace(/o/img, 'ober').replace(/u/img, 'ufat')

    textEncoded.innerHTML = textEncode
    
    
}

const decode = ()=>{
    
    var textDecode = string.value

    textDecode = textDecode.replace(/enter/img, 'e').replace(/imes/img, 'i').replace(/ai/img, 'a').replace(/ober/img, 'o').replace(/ufat/img, 'u')

    textEncoded.innerHTML = textDecode
}

const getText = () =>{
    let textSelected = document.querySelector('#decode')

    textSelected.select();
    textSelected.setSelectionRange(0, 99999);

    // Copy the text inside the text field
    navigator.clipboard.writeText(textSelected.value);

    // Alert the copied text
    textCopied.style.display='block'
}
