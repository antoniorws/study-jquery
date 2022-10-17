$(function(){
    $('#button1').click(
        function(){
            $('html,body').animate(
                {
                    scrollTop: $('#teste1').offset().top
                },
                'slow'
            )
        }
    );
})

$('#button2').click(
    function(){
        $('html,body').animate(
            {
                scrollTop: $('#teste2').offset().top
            },
            'slow'
        )
    }
);


$(function(){
    $('#button3').click(
        function(){
            $('html,body').animate(
                {
                    scrollTop: $('#teste3').offset().top
                },
                'slow'
            )
        }
    );
})
