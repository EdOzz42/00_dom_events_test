var p1 = window.document.getElementsByTagName('p')[0]
p1.style.background = 'black'
p1.innerText = 'O resultado estará aqui em baixo' /*Essa variável, p1, vai selecionar o primeiro parágrafo e aplicar um fundo preto nele*/

/*var div = window.document.getElementById('caq')
div.style.fontFamily = 'Comic Sans MS'
div.style.color = 'aquamarine'*/

/*var div = window.document.querySelector('div#caq')*/ /*Quando pegar um elemento que tem um id usamos # para selecionar esse elemento através do query selector */
var div = window.document.querySelector('div.caq') /*Quando pegar um elemento que tem uma class usamos . para selecionar esse elemento através do query selector */
div.style.background = 'turquoise'

 /*var title = window.document.getElementsByName('hname')[0]
title.style.color = 'yellow' */ /*Usando o método de seleção getelementsByName para tingir o título de amarelo*/

console.log(
    window.document.getElementsByClassName('cont')
) /*Selecionando todos os elementos do body e vendo através do console*/
