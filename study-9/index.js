$(function(){
    $('#btnGreen').click(function(){
        $('#divHome h1').removeClass('red');
        $('#divHome h1').addClass('green');
    });
    $('#btnRed').click(function(){
        $('#divHome h1').removeClass('green');
        $('#divHome h1').addClass('red');
    });
    $('#btnContato').click(function(){
        $('#divContato').hide();
    });
    $('#btnShow').click(function(){
        $('div').show();
    });
})