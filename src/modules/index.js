document.addEventListener('mousedown', function(event) {
    var target = event.target;
    var body = document.body;
    var html = document.documentElement;

    body.style.setProperty('--pagex', event.pageX);
    body.style.setProperty('--pagey', event.pageY);

    html.style.setProperty('--clientx', event.clientX);
    html.style.setProperty('--clienty', event.clientY);
    html.style.setProperty('--scrolly', window.pageYOffset);

    target.style.setProperty('--offsetx', event.offsetX);
    target.style.setProperty('--offsety', event.offsetY);
    target.parentElement.style.setProperty('--target-width', target.clientWidth);
    target.parentElement.style.setProperty('--target-height', target.clientHeight);
    target.parentElement.style.setProperty('--target-left', target.offsetLeft);
    target.parentElement.style.setProperty('--target-top', target.offsetTop);
})