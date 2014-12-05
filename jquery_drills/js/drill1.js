$(function(){


    console.log('The dom is ready! (drill 1)');
    $('.shape').on('click',function(){
        $(this).fadeOut(300,function(){
            var newX = Math.round(Math.random() * ($('.stage').width() - $(this).width()));
            var newY = Math.round(Math.random() * ($('.stage').height() - $(this).height()));
            $(this).css({left:newX,top:newY}).fadeIn(300);            
        });


    });

});

