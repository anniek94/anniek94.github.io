let cur_background = 1;


function switchBackground(){
  if(cur_background === 1){
    cur_background = 2
    $("#enter-img").removeClass("background-1").addClass("background-2");
  } else {
    cur_background = 1
    $("#enter-img").removeClass("background-2").addClass("background-1");
  }
}

$(document).ready(function(){
  setInterval(function(){ switchBackground() }, 1000);

  $("#enter-img").click(()=>{
    window.location.href = "./directory.html";
  });
});
