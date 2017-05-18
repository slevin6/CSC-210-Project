var starContainer = $('.container');
var center = {
  x: starContainer.width() / 2,
  y: starContainer.height() / 2
}
var particles = [];

function starCreate () {
  for(var i=0; i<40; i++) {
    var el = $('<div class="particle"></div>')
    starContainer.append(el);
    particles.push(el);
  }
}
function spray (el) {
  var xVariance = Math.random() * 40 * (Math.random()<0.5?-1:1),
      yVariance = Math.random() * 5 * (Math.random()<0.5?-1:1),
      scale = Math.random();
  
  el
    .css({
      opacity: 1,
      transform: 'scale(' + scale + ',' + scale + ')'})
    .delay(1000 * Math.random())
    .animate({
      top: center.y + yVariance,
      left: center.x + xVariance,
      opacity: 1
    }, 0)
    .animate({
      top: Math.random() * starContainer.height() * ((Math.random())<0.5?1:-1),
      left: Math.random() * starContainer.width(),
      opacity: 1
  }, {
    duration: 800,
    complete: function () {
      spray(el);
    },
    ease: 'ease-out'
  });
}

function start () {
  starCreate();
  $('.container h1')
    .animate({
      scale: '1.5'
    });
  for(var i=0; i<particles.length; i++) {
    spray(particles[i]);
  }
}

function explodeStars1() {
  setTimeout(start, 3505);  
  setTimeout(function () {
    window.location.href = "scratchOff.html";
  }, 6000);
}

function explodeStars2() {
  setTimeout(start, 3505);  
  setTimeout(function () {
    window.location.href = "puzzle.html";
  }, 6000);
}

function explodeStars3() {
  setTimeout(start, 3505);  
  setTimeout(function () {
    window.location.href = "endpage.html";
  }, 6000);
}
