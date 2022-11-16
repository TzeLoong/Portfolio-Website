
// moving eyes 

document.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const anchor = document.getElementById('anchor');
  const rekt = anchor.getBoundingClientRect();
  const anchorX = rekt.left + rekt.width/2;
  const anchorY = rekt.top + rekt.width/2;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  console.log(angleDeg);

  const eyes = document.querySelectorAll('.eye');
  eyes.forEach(eye => {
    eye.style.transform = `rotate(${-30 + angleDeg}deg)`
  })
  
})

function angle (cx, cy, ex, ey) {
  const dy = ey-cy;
  const dx = ex-cx;
  const rad = Math.atan2(dy, dx);
  const deg = rad * 180 / Math.PI;
  return deg;
}

// About Me Page 
// ------------------------------------------------------------------------------


let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for(tablink of tablinks) {
    tablink.classList.remove("active-link");
  }

  for(tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab")


}

// portfolio
// ------------------------------------------------------------------------------


