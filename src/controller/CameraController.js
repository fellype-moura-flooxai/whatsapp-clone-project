class CameraController {

    constructor(videoEl){

        this._video = videoEl;

        navigator.mediaDevices.getUserMedia({
            video: true
        }).then(steam=>{

            this._videoEl.src = URL.createObjectURL(steam);
            this._videoEl.play();

        }).catch(err=>{
            console.error(err);
        });


    }

}
