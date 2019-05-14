$(document).ready(function () {
    TweenMax.to($('#oranje-lijn'), 5, { x: -250, ease: Linear.easeInOutQuint, yoyoEase:true, repeat:-1})
    TweenMax.to($('#oranje-balk-boven'), 3, { x: 250, ease: Linear.easeInOutQuint, yoyoEase: true, repeat: -1 })
    TweenMax.to($('#zwarte-balk-3'), 4, { x: 120, ease: Linear.easeInOutQuint, yoyoEase: true, repeat: -1 })
    TweenMax.to($('#zwarte-balk-2'), 3, { x: 400, ease: Linear.easeInOutQuint, yoyoEase: true, repeat: -1 })
    TweenMax.to($('#zwarte-balk-1'), 4, { x: -400, ease: Linear.easeInOutQuint, yoyoEase: true, repeat: -1 })
    TweenMax.to($('#oranje-balk-onder'), 2, { x: -200, ease: Linear.easeInOutQuint, yoyoEase: true, repeat: -1 })
 });



function changeOverlay () {
    var randomNum = Math.round(Math.random() * 150) - 8;
    $('#Artboard-Copy path:eq(' + randomNum + ')').animate({ "opacity" : 0 });
    setTimeout(function() { 
        $('#Artboard-Copy path:eq(' + randomNum + ')').animate({ "opacity" : 1 });
        changeOverlay();
    }, 200);
	    setTimeou2t(function() { 
        $('#Artboard-Copy path:eq(' + randomNum + ')').animate({ "opacity" : 1 });
        setTimeout();
    }, 200);
	
}

$(document).ready(function() {
    changeOverlay();
});



var toggle = false;

function onButtonClick() {
  var body = document.getElementsByTagName('body')[0];
  toggle = !toggle;
  var css = toggle ? 'filter: invert(100%);' : 'filter: invert(0%);';
  body.style = css;
}

var slider =

document.getElementById('slider').addEventListener('input', function (e) {
    document.slider.style.opacity = this.value;
});