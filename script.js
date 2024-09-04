const videoInput= document.getElementById('videoInput');
const convertButton= document.getElementById('convertButton');
const audioOutput= document.getElementById('audioOutput');

convertButton.addEventListener('click',()=>{
    const file = videoInput.files[0];
    if(file){
        const videoUrl =URL.createObjectURL(file);
        const audio = new Audio(videoUrl);
        audioOutput.src=audio.src;
    }

})
