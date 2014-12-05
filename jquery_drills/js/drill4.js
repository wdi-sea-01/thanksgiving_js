$(function(){

    console.log('The dom is ready! (drill 4)');

    $('.task-list').find('li').on('click',function(){
        switch($(this).index()){
            case 0:
                $('.stage').find('div').first().hide();
                break;
            case 1:
                $('.stage').find('div').first().find('ul').first().hide();
                break;
            case 2:
                $('.stage div#second ul').first().hide();
                break;
            case 3:
                $('.stage div#second').hide();
                break;
            case 4:
                $('.stage div#second ul>li').eq(3).hide();
                break;
            case 5:
                $('.stage div#first ul>li').first().hide();
                break;
            case 6:
                $('.stage div').first().css('background-color','red');
                break;
            case 7:
                $('.stage div#first ul').eq(1).css('background-color','red');
                break;
            case 8:
                $('.stage ul li:nth-child(2)').css('background-color','red');
                break;
            case 9:
                $('.stage div#second').delay(5000).fadeOut();
                break;
            case 10:
                $('.stage ul li:nth-child(1)').remove();
                break;
            case 11:
                $('.stage #first ul').eq(1).append('<li>My additional item</li>');
                break;
            case 12:
                $('.stage>div>ul').append('<li>My additional item</li>');
                break;
            case 13:
                $('.stage #first ul').eq(1).appendTo('#second');
                break;
        }
        $(this).css('color','red');
    });

    $('#first li').on('click',function(){
        $(this).delay(3000).fadeOut();
    });

    $('#second>ul>li').on('click',function(){
        $(this).find('ul').slideToggle();
    });



});

