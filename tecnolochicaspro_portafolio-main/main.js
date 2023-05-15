let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color:#f9a77a"> Desarrolladora de software en proceso</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
