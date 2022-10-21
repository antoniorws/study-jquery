# Study-JQuery

# 1. Base para tudo no JQuery:
$(seletor).açao();


## 2. Boas práticas, verificar se o documento está pronto
$(document).ready(function(){
});


## 3. Esconder botão
```
$(document).ready(function  () {
    $('#btnHome').click(function(){
        $('#divHome').hide();
    });
    $('#btnShow').click(function(){
        $('div').show();
    });
});
```

## 4. Simplificando

```
$(function(){
    $('#btnHome').click(function(){
        $('#divHome').hide();
    });
    $('#btnShow').click(function(){
        $('div').show();
    });
})
```

## 5. Alterando CSS
### Propriedade do CSS
### Valor que vai receber a mudança 
```
$((function(){
    $('button3').click(function(){
        $('h1').css("color", "red");
    });
    $('button1').click(function(){
        $('h2').css("color", "blue");
    });
}); 
```

## 6. Fade in e Fade out
```
$((function(){
    $('#btnHome').click(function(){
        $('#divHome h1').fadeOut();
        $('#divHome h1').delay(3000);
        $('#divHome h1').fadeIn();
    });
}); 
```

## 7. Encadeamento em bloco
```
$((function(){
    $('#btnHome').click(function(){
        $('#divHome h1').fadeOut()
        .delay(3000)
        .fadeIn();
    });
}); 
```

## 8. CSS em uma única linha (padrão camel case)
```
$((function(){
    $('button3').click(function(){
        $('h1').css({
            color, "red"
            }
        ).('h1').fadeOut().('h1').delay(3000).('h1').fadeIn();
    });
}); 

$("#teste1").css({
                color: 'red',
                fontSize: '10px'
            });
```

## 9. Adicionando e removendo classes
```
$(function(){
    $('#button1').click(function(){
        $('#teste1').removeClass('red').addClass('green');
    })
    $('#button2').click(function(){
        $('#teste1').removeClass('green').addClass('red');
    })
    $('#button3').click(function(){
        $('#teste1').removeClass('red');
    })
})
```

## 10. Scroll com click de botão
```
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
```
```
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
```
```
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
```
