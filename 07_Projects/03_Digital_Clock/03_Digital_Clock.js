const clock = document.getElementById('clock');

setInterval(function () {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);
// Add this script to your HTML file, before </body>
document.getElementById('clock').addEventListener('click', function() {
    this.classList.toggle('glow-bg');
});