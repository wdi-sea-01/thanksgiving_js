$(function(){
    var myShape = $('.shape');
    var xMin = myShape.width();
    var yMin = myShape.height();
    var xMax = $('.stage').width() - xMin;
    var yMax = $('.stage').height() - yMin;
    var speed = 200;

    $(document).on('keyup',function(event){
        var shapePos = myShape.position();
        if(myShape.is(':animated')) return;
        switch(event.which){
            case 37: //left
                if(shapePos.left >= xMin) myShape.animate({left:'-='+xMin},speed);
                break;
            case 38: //up
                if(shapePos.top >= yMin) myShape.animate({top:'-='+yMin},speed);
                break;
            case 39: //right
                if(shapePos.left < xMax) myShape.animate({left:'+='+xMin},speed);
                break;
            case 40: //down
                if(shapePos.top < yMax) myShape.animate({top:'+='+yMin},speed);
                break;
        }
    });

});

