let defaultStyle = {
    width: 3840,
    height: 4320
}
let resizeStyle = {
    width: defaultStyle.width + 'px',
    height: defaultStyle.height + 'px',
    transform: "scale(1) translate(-50%, -50%)",
}
$('#screenAdapter').css(resizeStyle)
setScale();
window.onresize = Debounce(setScale, 100);
// * 123
function Debounce(fn, t) {
    const delay = t || 500;
    let timer;
    return function () {
        const args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        const context = this;
        timer = setTimeout(() => {
            timer = null;
            fn.apply(context, args);
        }, delay);
    };
}
// * 456
function getScale() {
    console.log(456)
    const w = window.innerWidth / defaultStyle.width;
    const h = window.innerHeight / defaultStyle.height;
    return w < h ? w : h;
}
// * 789
function setScale() {
    console.log(123)
    resizeStyle.transform =
        "scale(" + getScale() + ") translate(-50%, -50%)";
    console.log(resizeStyle.transform);
    $('#screenAdapter').css(resizeStyle);
}