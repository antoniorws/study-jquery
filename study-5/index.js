$(function(){
    $('#btnHome').click(function(){
        $('#divHome h1').css("color", "red");
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