// alert('Olá JavaScript')


// //declarando uma função
// function exibirAlerta(valor){
//     alert(valor)
// }

// exibirAlerta('Este é um alerta feito por função')


// funcao expression
// variavel local = let
// let exibirAlerta = function(valor){
//     alert(valor)
// }

// exibirAlerta('Exibir mensagem função de expressão')


//arrow 
// let exibirAlerta = (){
//     alert(valor)
// }

// exibirAlerta('ExibiExibir mensagem função de expressão ')

//função generator
// let exibirAlerta = (valor)=>{
//     aert(valor)
// }
// exibirAlerta("exir mensagem")

// imprime o valor digitado como alert 
// document é tudo que o HTML tem
// var f = document.forms[0];
// f.addEventListener("submit", function(e){
//     alert(f.a.value)
//     return false;
// })


// //
// f.addEventListener("keyup", function(e){
//     f.a.value=f.a.value.toUpperCase();
// })


//------------
//tipos de dados
// var a=1;
// var b=2;

// alert(a+b)

// var a=1;
// var b="2" + a;

// alert(b)

//------
//esse tipo de estrutura deixa o cdigo mais limpo 
// var aluno="João Paulo"
// var estrutura2=`
//     <table>
//     <tr>
//         <td></td>
//         <td></td>
//         <td></td>
//     </tr>

//     </table>
// `;

// alert(`Meu nome é ${aluno} e tenho 19 anos`)

// let post={
//     title:'titulo do valor',
//     except:'excessao do valor',
//     body:'corpo do valor',
//     tags:[
//         'primeira linha',
//         'segunda linha',
//         'terceira linha'
//     ]

// }
// let {title,except, body, tags} = post;
// var postHtml=` <artile>
// <header>

// </header>
// <section>
//     <div>${except}</div>
//     <div>${body}</div>
// </section
// <footer>
//     <ul>${tags.map(tag=> `<li>${tag}</li>`).join('\n')}</ul>
// </footer>
// `; // isso imprime o html com as variaveis declaradas

// var div=document.querySelector('div');

// div.innerHTML=postHtml;

//---------------------

//operador de atribuição
// var nome='João';
// //nome+='Abreu'; complementa a variavel nome
// var nome2="Henrique"

// allert(nome)

// alert(nome==nome2) -> compara se tem valores iguais

v1 = 10;
v2 = 30;

// alert(v1 > v2) // verfica se v1 é maior que v2 
// alert(v1 < v2) // verifica v1 é menor
// alert(v1 >= v2) // verifica se v1 é maior ou igual
// alert(v1 <= v2) // verifica se v1 é menor ou igual

// if e else 

// if (v1){
//     alert('verdadeiro')
// }else if (v1 == v2){

// }else{
//     alert('false')
// }

// verificação multiplas
// var destino ='Navegantes';
// switch (destino) {
//     case "Navegantes":
//         alert('o voo vai para navegantes');
//         break;
//     case 'São Paulo':
//         alert('o voo vai para SP');
//     break;
//     case 'Curtiba':
//         alert('o voo vai para Curitiba')
//         break;
//     default:
//         alert('Selecione um destino')
//         break;
// }

// laço de repetição 

// primeiro laço
// for (let index = 0; index <=100; index++) { // vai ate 100 
//     console.log(index)
// }

// for (let index = 100; index >=0; index--) { // vai de 100 ate 0
//     console.log(index)
// }

// for (let index = 0; index <100; index++) { // vai ate 99
//     console.log(index)
// }

// var listaClientes = [
//     'maria',
//     'jose',
//     'vitor',
//     'henrique'
// ]
// SEGUNDO
// for(clientes in listaClientes){ // clientes recebe o index(posiçao no obejto)
//     console.log(clientes)
// }

// for( clientes in listaClientes){
//     console.log(listaClientes[clientes]) // cliente é uma variavel local 
// imprime a lista de clientes
// }

// for( clientes in listaClientes){
//     console.log(` ${clientes} => ${listaClientes[clientes]}`) // posiçao e o valor
// }

//TERCEIRO - WHILE - laço condicional ou de repetiçao

// var inc = 0
// while(inc < 10 ){
//     console.log(inc);
//     inc++;
// }

// // primeiro ele roda depois ele verifica se é verdadeiro
// do {
//     console.log(inc);
//     inc++;
// } while (inc < 10);

// for (let index = 0; index < listaClientes.length; index++) {
//     console.log(listaClientes[index])

// }

//------------
//JQUERY    

//inicializando jquery 
$(function () {
    var estados = {
        '12': 'Acre',
        '27': 'Alagoas',
        '16': 'Amapá',
        '13': 'Amazonas',
        '29': 'Bahia',
        '23': 'Ceará',
        '53': 'Distrito Federal',
        '32': 'Espírito Santo',
        '52': 'Goías',
        '21': 'Maranhão',
        '51': 'Mato Grosso',
        '50': 'Mato Grosso do Sul',
        '31': 'Minas Gerais',
        '15': 'Pará',
        '25': 'Paraíba',
        '41': 'Paraná',
        '26': 'Pernambuco',
        '22': 'Piauí',
        '33': 'Rio de Janeiro',
        '24': 'Rio Grande do Norte',
        '43': 'Rio Grande do Sul',
        '11': 'Rondônia',
        '14': 'Roraíma',
        '42': 'Santa Catarina',
        '35': 'São Paulo',
        '28': 'Sergipe',
        '17': 'Tocantins'
    }

    let options = `<option value=""> Selecione um estado </option>`

    for (index in estados) {
        options += `<option value="${index} ">${estados[index]}</option>`
    }

    $('select[name="estados"]').html(options);
    
    
    $('.estados').change(function () {
        let estado = $(this).val();
        //addClass adiciona uma classe ao elemento
        $(this).addClass('estadosDoBrasil');
        // attr adiciona atributos ao elemento html
        // $(this).attr('data-id',10);
        // //ler o valor de um atributo 
        // var nomeSelect = $(this).attr('data-desc');
        // alert(nomeSelect);
        // //verificar se uma classe existe no elemento
        // var existeClass = $(this).hasClass('estados');
        // alert(existeClass)
        //injetar conteudo dentro de um elemento (textos, tags)
        //${variavel} > chamar variavel dentro de string literal com craze
        let seletor = '.preencher';
        $(seletor).html(`O estado selecionado é ${estado}`);
        
        //remover atributo de um elemento
        $(this).removeAttr('data-desc');

        //remover uma classe específica
        // $('.preencher').removeClass('vermelho')
        $('.preencher').toggleClass(['vermellho', 'verde']);

        //trocar/adicionar propriedades css em um elemento
        $('h1').css({
            'background-color':'yellow',
            'font-size': '50px' 
            
        })

        //crntrolar altura de yum elemento
        $('.preencher').heigth(150)

        
    })
    //rolar para um determinado ponto
    $('.goTop').click(function(){
        $(seletor).scrollTop(0);
        return false;
    })
   

    //trocar cor a cada um segundo 
    // setInterval(()=>{
    //     $('.preencher').toggleClass(['vermelho','verde'])
    // },500);

    // setInterval(function(){)
    //  // codigo
    // }, 1000)
})
