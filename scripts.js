var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.shadowColor = "#ece8ef";
c.shadowBlur = 10;

for (let i = 0; i < 1000; i++) {
  var x = Math.random() * window.innerWidth
  var y = Math.random() * window.innerHeight
  if ( i % 3 == 0) {
    c.fillStyle = 'rgba(255, 127, 81, 0.15)';
    c.fillRect (x, y, 150, 150);
    console.log("1")
  } else if (i % 5 == 0) {
    c.fillStyle = 'rgba(236, 232, 239, 0.3)';
    c.fillRect (x, y, 150, 150);
    console.log("2")
  } else if (i % 7 == 0) {
    c.fillStyle = 'rgba(206, 66, 87, 0.2)';
    c.fillRect (x, y, 150, 150);
    console.log("3")
  } else if (i % 2 == 0) {
    c.fillStyle = 'rgba(67, 146, 241, 0.2)';
    c.fillRect (x, y, 150, 150);
    console.log("4")
  } else {
    c.fillStyle = 'rgba(255, 155, 84, 0.1)';
    c.fillRect (x, y, 150, 150);
    console.log("5")
  }
}



