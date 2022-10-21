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
    $('#btnHome').click(function(){
        $('#divHome h1')
        .css({
            color: "red",
            fontSize: "100px"
            }
        );
    });
}); 
```

## 9. Adicionando e removendo classes
```
$(function(){
    $('#btnGreen').click(function(){
        $('#divHome h1').removeClass('red').addClass('green');
    });
})
```

## 10. Scroll com click de botão

### Scroll para o topo da página ao fazer refresh
```
$(function(){
    $('html,body').animate(
        {
            scrollTop: $('html,body').offset().top
        },
        'slow'
    )
})
```
### Scroll ao clicar em um botão
```
$(function(){
    $('#btnHome').click(function(){
        $('html,body').animate(
            {
                scrollTop: $('#divHome').offset().top
            },
            'slow'
        )
    });
})
```
```
$(function(){
    $('#btnInfo').click(function(){
        $('html,body').animate(
            {
                scrollTop: $('#divInfo').offset().top
            },
            'slow'
        )
    });
})
```
```
$(function(){
    $('#btnContato').click(function(){
        $('html,body').animate(
            {
                scrollTop: $('#divContato').offset().top
            },
            'slow'
        )
    });
})
```
