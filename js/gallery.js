function appendImgs(){
  const $landingGallery = $("#landing_gallery")
  const img_names = [
    "Anne_artwork05.jpg",
    "Sinking Feeling.jpeg",
    "Stained Fibers.jpeg",
    "Tall Fence, Yellow Sun.jpeg",
    "anniekwovnscorrected.png",
    "barkbark004.jpg",
    "birdbutt005.jpg",
    "hell_rain001.jpg",
    "lil_julian002.jpg",
    "lunarscape013.jpg",
    "monolith_wove014.jpg",
    "sabbath003.jpg",
    "smokersmadonna.jpg"
  ]
  html_string = ""
  $.each(img_names, function(i, name){
    html_string += "<a href='./imgs/" + name + "' target='_blank'><img class='img-thumbnail gallery m-2' src='./imgs/" + name + "'/></a>"
    // $landingGallery.append("<img class='img-thumbnail gallery m-2' src='./imgs/" + name + "'/>"
  })
  $landingGallery.append(html_string)
}

$(document).ready(function(){
  appendImgs()
})
