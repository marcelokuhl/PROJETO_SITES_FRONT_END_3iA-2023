///////// inicio ///////////


function inicio () {
    console.log('bem vindo a Peans!');

    $('.menus').hide();

}

inicio();


///////// menus ////////////

function criarOpcoes(opcoes) {

    const element = document.querySelector('.menus ul');

    for (let i = 0; i < opcoes.length; i++) {

        let li = document.createElement('li');
        let hr = document.createElement('hr');
        $(li).text(opcoes[i].nome);

        element.appendChild(li);
        element.appendChild(hr);
        
        li.setAttribute('onclick', opcoes[i].func);
    }

    const HR = document.querySelectorAll('.menus ul hr');
    let leng = HR.length;
    element.removeChild(HR[leng-1]);

}

function home() { 

    const opcoes = [
        {
            nome: "História",
            func: ""
        },
        {
            nome: "Valores",
            func: ""
        },
        {
            nome: "Objetivos",
            func: ""
        },
        {
            nome: "Pessoas",
            func: ""
        },
    ]

    criarOpcoes(opcoes)

}

function peans() { 
    
    const opcoes = [
        {
            nome: "História",
            func: ""
        },
        {
            nome: "Valores",
            func: ""
        },
        {
            nome: "Objetivos",
            func: ""
        },
        {
            nome: "Pessoas",
            func: ""
        },
    ]

    criarOpcoes(opcoes)

 }

function produto() { 
    
    const opcoes = [
        {
            nome: "História",
            func: ""
        },
        {
            nome: "Valores",
            func: ""
        },
        {
            nome: "Objetivos",
            func: ""
        },
        {
            nome: "Pessoas",
            func: ""
        },
    ]

    criarOpcoes(opcoes)

 }

function orcamento() { 
    
    const opcoes = [
        {
            nome: "História",
            func: ""
        },
        {
            nome: "Valores",
            func: ""
        },
        {
            nome: "Objetivos",
            func: ""
        },
        {
            nome: "Pessoas",
            func: ""
        },
    ]

    criarOpcoes(opcoes)

 }

function abrirMenu (opcao, t) { 
    const element = document.querySelector('.menus');

    $(element).show();

    let left = $(t).position().left;
    left = parseInt(left); 

    $(element).css('left', left);

    eval(`${opcao}()`)

    const ul = $('.menus ul');

    document.addEventListener('scroll', ()=>{ 

        $(element).hide();
        ul.empty();

    });

    document.addEventListener('mouseup', ()=>{ 

        $(element).hide();
        ul.empty();

    });
}

////////// Saiba Mais ///////////
