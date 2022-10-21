$(function(){
    $('html,body').animate(
        {
            scrollTop: $('html,body').offset().top
        },
        'slow'
    )

    $('#btnHome').click(function(){
        $('html,body').animate(
            {
                scrollTop: $('#divHome').offset().top
            },
            'slow'
        )
    });
    $('#btnInfo').click(function(){
        $('html,body').animate(
            {
                scrollTop: $('#divInfo').offset().top
            },
            'slow'
        )
    });
    $('#btnContato').click(function(){
        $('html,body').animate(
            {
                scrollTop: $('#divContato').offset().top
            },
            'slow'
        )
    });
})