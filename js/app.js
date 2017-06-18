$(function(){
    $(".element").typed({
        strings: ["Hello!", "Salut!", "Ciao!", "Olá!", "Bonjour!", "Hello!"],
        typeSpeed: 20,
        backSpeed: 10,
        loop: false,
        showCursor: true
    });
});

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});