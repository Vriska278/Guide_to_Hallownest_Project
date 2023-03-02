function handleCheckEvent(event){
  let noti = document.querySelector("#noti")
  const allCheckedboxes= [...document.querySelectorAll('input:checked')];
  if(allCheckedboxes.length > 0 && event.target.checked){
    noti.volume = 0.1;
    noti.play();
  }
  else{
    noti.pause();
    noti.currentTime = 0;
  }
}

function magnify(imgID, zoom) {
  var img, glass, w, h, bw;
  img = document.getElementById(imgID);
  glass = document.createElement("DIV");
  glass.setAttribute("class", "img-magnifier-glass");
  img.parentElement.insertBefore(glass, img);
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);


  function moveMagnifier(e) {
    var pos, x, y;
    e.preventDefault();
    pos = getCursorPos(e);
    x = pos.x;
    y = pos.y;
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }

  function getCursorPos(e) {
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}

function removeGlass(){
  var deleteMe = document.querySelector(".img-magnifier-glass")
  deleteMe.remove(document.querySelector(".img-magnifier-glass"))
}


function syncCheck(){
  let checkfull1 = document.querySelector("#checkfull1")
  let check1 = document.querySelector("#check1")
  const allCheckboxes= [...document.querySelectorAll('input')];
  allCheckboxes.forEach(item => {
    item.addEventListener('change', handleCheckEvent)
  });
  checkfull1.addEventListener("change", (event)=>{
    check1.checked = event.target.checked
  });
  check1.addEventListener("change", (event)=>{
    checkfull1.checked = event.target.checked
  });
  let checkfull2 = document.querySelector("#checkfull2")
  let check2 = document.querySelector("#check2")
  checkfull2.addEventListener("change", (event)=>{
    check2.checked = event.target.checked
  });
  check2.addEventListener("change", (event)=>{
    checkfull2.checked = event.target.checked
  });
  let checkfull3 = document.querySelector("#checkfull3")
  let check3 = document.querySelector("#check3")
  checkfull3.addEventListener("change", (event)=>{
    check3.checked = event.target.checked
  });
  check3.addEventListener("change", (event)=>{
    checkfull3.checked = event.target.checked
  });
  let checkfull4 = document.querySelector("#checkfull4")
  let check4 = document.querySelector("#check4")
  checkfull4.addEventListener("change", (event)=>{
    check4.checked = event.target.checked
  });
  check4.addEventListener("change", (event)=>{
    checkfull4.checked = event.target.checked
  });
  let checkfull5 = document.querySelector("#checkfull5")
  let check5 = document.querySelector("#check5")
  checkfull5.addEventListener("change", (event)=>{
    check5.checked = event.target.checked
  });
  check5.addEventListener("change", (event)=>{
    checkfull5.checked = event.target.checked
  });
  let checkfull6 = document.querySelector("#checkfull6")
  let check6 = document.querySelector("#check6")
  checkfull6.addEventListener("change", (event)=>{
    check6.checked = event.target.checked
  });
  check6.addEventListener("change", (event)=>{
    checkfull6.checked = event.target.checked
  });
  let checkfull7 = document.querySelector("#checkfull7")
  let check7 = document.querySelector("#check7")
  checkfull7.addEventListener("change", (event)=>{
    check7.checked = event.target.checked
  });
  check7.addEventListener("change", (event)=>{
    checkfull7.checked = event.target.checked
  });
  let checkfull8 = document.querySelector("#checkfull8")
  let check8 = document.querySelector("#check8")
  checkfull8.addEventListener("change", (event)=>{
    check8.checked = event.target.checked
  });
  check8.addEventListener("change", (event)=>{
    checkfull8.checked = event.target.checked
  });
  let checkfull9 = document.querySelector("#checkfull9")
  let check9 = document.querySelector("#check9")
  checkfull9.addEventListener("change", (event)=>{
    check9.checked = event.target.checked
  });
  check9.addEventListener("change", (event)=>{
    checkfull9.checked = event.target.checked
  });
  let checkfull10 = document.querySelector("#checkfull10")
  let check10 = document.querySelector("#check10")
  checkfull10.addEventListener("change", (event)=>{
    check10.checked = event.target.checked
  });
  check10.addEventListener("change", (event)=>{
    checkfull10.checked = event.target.checked
  });
  let checkfull11 = document.querySelector("#checkfull11")
  let check11 = document.querySelector("#check11")
  checkfull11.addEventListener("change", (event)=>{
    check11.checked = event.target.checked
  });
  check11.addEventListener("change", (event)=>{
    checkfull11.checked = event.target.checked
  });
  let checkfull12 = document.querySelector("#checkfull12")
  let check12 = document.querySelector("#check12")
  checkfull12.addEventListener("change", (event)=>{
    check12.checked = event.target.checked
  });
  check12.addEventListener("change", (event)=>{
    checkfull12.checked = event.target.checked
  });
  let checkfull13 = document.querySelector("#checkfull13")
  let check13 = document.querySelector("#check13")
  checkfull13.addEventListener("change", (event)=>{
    check13.checked = event.target.checked
  });
  check13.addEventListener("change", (event)=>{
    checkfull13.checked = event.target.checked
  });
  let checkfull14 = document.querySelector("#checkfull14")
  let check14 = document.querySelector("#check14")
  checkfull14.addEventListener("change", (event)=>{
    check14.checked = event.target.checked
  });
  check14.addEventListener("change", (event)=>{
    checkfull14.checked = event.target.checked
  });
}
syncCheck();