$(function(){

    console.log('The dom is ready! (drill 5)');

    $('#doIt').on('click',function(){
        var who = $('#whoDo').val();
        var what = $('#whatDo').val();
        if(!who || !what){
            alert('You must select an item from both dropdowns.');
            return;
        }
        var items;
        switch(who){
            case 'even':
                items = $('.stage').find('.shape:even');
                break;
            case 'odd':
                items = $('.stage').find('.shape:odd');
                break;
            case 'square':
                items = $('.stage').find('.shape:not(.ball)');
                break;
            case 'circle':
                items = $('.stage').find('.ball');
                break;
            case 'blue':
                items = filterByColor($('.stage .shape'),'rgb(68, 68, 204)');
                break;
            case 'red':
                items = filterByColor($('.stage .shape'),"rgb(255, 50, 50)");
                break;
            case 'purple':
                items = filterByColor($('.stage .shape'),"rgb(255, 0, 255)");
                break;
            case 'orange':
                items = filterByColor($('.stage .shape'),"rgb(255, 180, 0)");
                break;
            case 'yellow':
                items = filterByColor($('.stage .shape'),"rgb(255, 255, 0)");
                break;
        }

        switch(what){
            case 'blue':
                items.css('background-color','rgb(68, 68, 204)');
                break;
            case 'red':
                items.css('background-color','rgb(255, 50, 50)');
                break;
            case 'purple':
                items.css('background-color','rgb(255, 0, 255)');
                break;
            case 'orange':
                items.css('background-color','rgb(255, 180, 0)');
                break;
            case 'yellow':
                items.css('background-color','rgb(255, 255, 0)');
                break;
            case 'circle':
                items.addClass('ball');
                break;
            case 'square':
                items.removeClass('ball');
                break;
            case 'fadein':
                items.fadeIn();
                break;
            case 'fadeout':
                items.fadeOut();
                break;
        }
    });

    //shuffle shapes on first load
    shuffleShapes();
    //shuffle shapes on click of shuffle button
    $('#shuffleThem').on('click',shuffleShapes);
});


var filterByColor = function(obj,color){
    return obj.filter(function(){
        console.log($(this).css('background-color'));
        return $(this).css('background-color')===color;
    });
}

//used to shuffle shapes
var shuffleShapes = function(){
    //loop through each shape (this is jQuery's each not to be confused with Array.forEach())
    $('.shape').each(function(idx){
        //find a valid random position within the bounds of the stage
        var newLeft = Math.floor(Math.random() * ($('.stage').width()-$(this).width()));
        var newTop = Math.floor(Math.random() * ($('.stage').height()-$(this).height()))
        //update the items to their new positions
        $(this).html(idx).animate({left:newLeft+'px',top:newTop+'px'},1000);
    });
}

