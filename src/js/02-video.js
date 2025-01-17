import Player from '@vimeo/player';

import throttle from "lodash.throttle";



const iframe = document.querySelector('#vimeo-player');
    const player = new Vimeo.Player(iframe);

    
    const onPlay = function(timeupdate) {
const timeupdateJson = JSON.stringify(timeupdate.seconds);
        console.log(timeupdateJson);
        localStorage.setItem("videoplayer-current-time", timeupdateJson)
    };
    
    player.on('timeupdate', throttle((onPlay), 1000));
    ;

    const currentTime = localStorage.getItem("videoplayer-current-time");
   

    console.log(currentTime);

    player.setCurrentTime(currentTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
    