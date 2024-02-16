const video = document.getElementById("video")

const startWebcam = ()=>{
    navigator.mediaDevices.getUserMedia({"video":true, "audio":false}).then((stream)=>{
        video.srcObject = stream;
    }).catch((error)=>{
        console.error(error);
    })
}
startWebcam()