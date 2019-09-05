$('#syutty').hover(
    function(){
    $('#syutty').css('color','red');
},
    function(){
    $('#syutty').css('color','magenta');
    }
);

$('#syutty').click(function(){
    event.preventDefault();
    $(this).css('font-size','60px');
});
    
$('#ddd').click(function(){
    event.preventDefault();
    $('#dd').css('font-size','18px');
    $('#dd').css('opacity',0.95);
});

$('#ttt').click(function(){
    $('#tt').css('font-size','18px');
    $('#tt').css('opacity',0.95);
    event.preventDefault();
});

$('#ccc').click(function(){
    event.preventDefault();
    $('#cc').css('font-size','18px');
    $('#cc').css('opacity',0.95);
});
});
