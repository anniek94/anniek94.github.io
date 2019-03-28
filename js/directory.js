
// function animateDirectory(deltaT){
//   if (!timeWhenLastUpdate){
//     timeWhenLastUpdate = deltaT;
//   }
  
//   timeFromLastUpdate = deltaT - timeWhenLastUpdate;

//   $directory_img.css('background-image',`url(./imgs/menu_frame${img_counter}.jpg)`);

//   if(img_counter === 24){
//     img_counter = 1;
//   } else {
//     img_counter++;
//   }
//   return true
// }

// function animLoop( render, element ) {
//     let running, lastFrame = +new Date;
//     function loop( now ) {
//         // stop the loop if render returned false
//         if ( running !== false ) {
//             requestAnimationFrame( loop, element );
//             let deltaT = now - lastFrame;
//             // do not render frame when deltaT is too high
//             if ( deltaT < 160 ) {
//                 running = render( deltaT );
//             }
//             lastFrame = now;
//         }
//     }
//     setTimeout(function(){loop( lastFrame );}, 1000);
// }


function appendFrames(){
  let $directory_img = $("#directory-img")

  for(let i=1; i<=24; i++){
    css_hash = {}
    css_hash['background-image'] = `url(./imgs/menu_frame${i}.jpg)`;
    css_hash['opacity'] = (i == 1) ? "1" : "0";
    $directory_img.append(`<div class='menu_frame' id='menu_frame${i}'></div>`)
    $(`#menu_frame${i}`).css(css_hash);

  }
}

const totalFrames = 24;
const animationDuration = 3300;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;


function step(startTime) {
  // 'startTime' is provided by requestAnimationName function, and we can consider it as current time
  // first of all we calculate how much time has passed from the last time when frame was update
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;

  // then we check if it is time to update the frame
  if (timeFromLastUpdate > timePerFrame) {
    // hide all frames
    $('.menu_frame').css('opacity', 0);
    // and show the required one
    $(`#menu_frame${frameNumber}`).css('opacity', 1);
    // reset the last update time
    timeWhenLastUpdate = startTime;

    // then increase the frame number or reset it if it is the last frame
    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }        
  }

  requestAnimationFrame(step);
}


$(document).ready(function(){
  appendFrames();
  requestAnimationFrame(step);

  $("#works-link").click(()=>{
    window.location.href = "./gallery.html";
  });
  // animateFrames();
  // animLoop(animateDirectory, $directory_img)
  // console.log("READY")
  // setInterval(function(){animateDirectory()}, 500)
})
