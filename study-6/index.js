$(function(){
    $('#btnHome').click(function(){
        $('#divHome h1').fadeOut();
        $('#divHome h1').delay(3000);
        $('#divHome h1').fadeIn();
    });
    $('#btnInfo').click(function(){
        $('#divInfo').hide();
    });
    $('#btnContato').click(function(){
        $('#divContato').hide();
    });
    $('#btnShow').click(function(){
        $('div').show();
    });
})