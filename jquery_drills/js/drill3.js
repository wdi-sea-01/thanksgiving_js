$(function(){


    console.log('The dom is ready! (drill 3)');
    $('.shape').hover(function(){
        $(this).removeClass('ball');
        setRandomBackground(this);
    },function(){
        $(this).addClass('ball');
        setRandomBackground(this);
    });

});

var setRandomBackground = function(obj){
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    $(obj).css('background','rgba('+r+','+g+','+b+',1)')
}

