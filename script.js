//                                              semana 1

// 1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. 
// Vamos usar estas características para definir exemplos destes objetos usando o código.

// jogadores da NBA

// 2. Agora, crie três conjuntos de variáveis utilizando as características que você definiu acima. 
// Lembre-se que deve ser o mesmo tipo de item, com três conjuntos de dados diferentes.

// paul george
// const   Nome0 ='paul george';
// const   Posição0 ='Ala-armador';
// const   Idade0 = 32;
// const   Altura0 = 2.03;
// const   Peso0 = 99;
// const   Veterano0 = true;
// const   TimesAnteriores0 =['Fresno State Bulldogs mens basketball(2008.1 - 2010.1','indiana pacers(2010.2 - 2017.1)','oklahoma city thunder(2017.2 - 2019.1)', 'LA clippers(2019.2 - now)']
// console.log(`Nome: ${Nome0.toLocaleUpperCase()} \nPosição: ${Posição0} \nIdade: ${Idade0} Anos \nAltura: ${Altura0}m \nPeso: ${Peso0} kg \nVeterano: ${Veterano0} \nTimes Anteriores: ${TimesAnteriores0}`)


// kevin durant
// const   Nome1 ='kevin durant';
// const   Posição1 ='Ala-pivô';
// const   Idade1 = 33;
// const   Altura1 = 2.08;
// const   Peso1 = 1.08;
// const   Veterano1 = true;
// const   TimesAnteriores1 =['Texas Longhorns mens basketball(2006.1 - 2007.1)','Seattle SuperSonics(2007.2 - 2008.1)','Oklahoma City Thunder(2008.2 - 2016.1)', 'Golden State Warriors(2016.2 - 2019.2)','Brooklin Nets(2020.1 - Now)'];
// console.log(`Nome: ${Nome1.toLocaleUpperCase()} \nPosição: ${Posição1} \nIdade: ${Idade1} Anos \nAltura: ${Altura1}m \nPeso: ${Peso1} kg \nVeterano: ${Veterano1} \nTimes Anteriores: ${TimesAnteriores1}`)


// lebron james
// const   Nome2 ='lebron james';
// const   Posição2 = 'Ala';
// const   Idade2 = 37;
// const   Altura2 = 2.06;
// const   Peso2 = 113;
// const   Veterano2 = true;
// const   TimesAnteriores2 =['Cleveland Cavaliers(2003.1 - 2010.1)','Miami Heat(2010.2 - 2014.1)','Cleveland Cavaliers(2014.2 - 2018.1)', 'LA Lakers(2018.2 - now)'];
// console.log(`Nome: ${Nome2.toLocaleUpperCase()} \nPosição: ${Posição2} \nIdade: ${Idade2} Anos \nAltura: ${Altura2}m \nPeso: ${Peso2} kg \nVeterano: ${Veterano2} \nTimes Anteriores: ${TimesAnteriores2}`)


// 3. Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
// Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;

// const mediaIdade = (Idade0+Idade1+Idade2) /3;
// console.log('A media de idade dos jogadores é:', mediaIdade,'anos')
// const  mediaAlturaJogadorres =(Altura0+Altura1+Altura2) /3;
// console.log('A media de altura do time é:', mediaAlturaJogadorres, 'metros')
// const mediaPesoJogadores = (Peso0+Peso1+Peso2) /3;
// console.log('A media de peso do time é:', mediaPesoJogadores, 'Kg')

// 4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os valores
// de variáveis booleanas criadas até aqui são verdadeiras.

// const Veteranos = Veterano0 && Veterano1 && Veterano2;
// console.log(Veteranos)

//                                      semana 2

// 1. Crie pelo menos mais uma característica para o item que você criou. 
// Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo, isto é, se é um array de strings, 
// só deve receber strings.

// item  está nas linhas: 18,29,40

// 2. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
//  O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.

// item está nas linhas: 19,30,41

//                                      semana 3

// 1. Transforme os itens que criamos nas últimas semanas em objetos.
// jogadoresListados = {
// paulGeorge: { 
//     Nome: 'paul george'.toUpperCase(),
//     Posição: 'Ala-armador',
//     Idade: 32,
//     Altura: 2.03,
//     Peso: 99,
//     Veterano: true,
//     TimesAnteriores: ['Fresno State Bulldogs mens basketball(2008.1 - 2010.1','indiana pacers(2010.2 - 2017.1)','oklahoma city thunder(2017.2 - 2019.1)', 'LA clippers(2019.2 - now)']
//     },
// kevinDurant: {
//     Nome: 'kevin durant'.toUpperCase(),
//     Posição: 'Ala-pivô',
//     Idade: 33,
//     Altura: 2.08,
//     Peso: 1.08,
//     Veterano: true,
//     TimesAnteriores: ['Texas Longhorns mens basketball(2006.1 - 2007.1)','Seattle SuperSonics(2007.2 - 2008.1)','Oklahoma City Thunder(2008.2 - 2016.1)', 'Golden State Warriors(2016.2 - 2019.2)','Brooklin Nets(2020.1 - Now)']
//     },
// lebronJames: {
//     Nome: 'lebron james'.toUpperCase(),
//     Posição: 'Ala',
//     Idade: 37,
//     Altura: 2.06,
//     Peso: 113,
//     Veterano: true,
//     TimesAnteriores: ['Cleveland Cavaliers(2003.1 - 2010.1)','Miami Heat(2010.2 - 2014.1)','Cleveland Cavaliers(2014.2 - 2018.1)', 'LA Lakers(2018.2 - now)']
//     }
// }
//  2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;

// jogadoresNba = []

// 3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, utilizando o push().
// jogadoresNba.push(paulGeorge, kevinDurant, lebronJames)

// Imprima este array no console.log, ele deve aparecer aproximadamente desta forma:
// console.log(jogadoresNba)

//                                          semana 4

// 1. Altere o item “Adicione os novos objetos no array de objetos, utilizando o push()” (item 3 da semana 3), 
// para criar uma verificação antes de dar o push. A caraterística booleana do objeto deve ser validada. 
// Isto é, o objeto só deve ser adicionado ao array se a propriedade booleana for true;

// if(paulGeorge.Veterano0 === true){
//     jogadoresNba.push(paulGeorge);    
// }else{(alert(`o jogador ${paulGeorge.Nome0.toUpperCase()} não foi adicionado`))

// }if(kevinDurant.Veterano1 === true){
//     jogadoresNba.push(kevinDurant);
// }else{(alert(`o jogador ${kevinDurant.Nome1.toUpperCase()} não foi adicionado`))

// }if(lebronJames.Veterano2 === true){
//     jogadoresNba.push(lebronJames);    
// }else{(alert(`o jogador ${lebronJames.Nome2.toUpperCase()} não foi adicionado`))
// }
// console.log(jogadoresNba)

// 2. Crie uma condição else, que, em caso de valor false na condição acima, exiba um **ALERT** avisando para o usuário que o item
//  não foi adicionado, e não faça o push

// item está nas linhas: 122,126,130

//                                      semnana 5

// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array
//  dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. 
// 💡 Chamamos este processo de reescrever um código já escrito, de refatoração.
// Utilize esta string no relatório.
// for(times in jogadoresListados){
//     const element = jogadoresListados[times].TimesAnteriores.toString();
//     console.log(`times Anteriores: ${element}`)
// }


// // 2.Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, 
// // você não deve mais imprimir individualmente cada item do relatório. 
// // Cada item deve ser exibido a partir de uma iteração do laço. Para testar, 
// // adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

// for(jogador in jogadoresListados){
//   const novoModo = jogadoresListados[jogador]
//   console.log(novoModo)
// }

jogadorAr=[{ 
    nome: 'paul george'.toUpperCase(),
    posicao: 'Ala-armador',
    idade: 32,
    altura: 2.03,
    peso: 99,
    veterano: true,
    foto:"./paul george.png", 
    link:"https://pt.wikipedia.org/wiki/Paul_George",
    timesAnteriores: ['Fresno State Bulldogs mens basketball(2008.1 - 2010.1','indiana pacers(2010.2 - 2017.1)','oklahoma city thunder(2017.2 - 2019.1)', 'LA clippers(2019.2 - Atual)']
    },
    {
    nome: 'kevin durant'.toUpperCase(),
    posicao: 'Ala-pivô',
    idade: 33,
    altura: 2.08,
    peso: 1.08,
    veterano: true,
    foto:"./kevin durant.png", 
    link:"https://pt.wikipedia.org/wiki/Kevin_Durant",
    timesAnteriores: ['Texas Longhorns mens basketball(2006.1 - 2007.1)','Seattle SuperSonics(2007.2 - 2008.1)','Oklahoma City Thunder(2008.2 - 2016.1)', 'Golden State Warriors(2016.2 - 2019.2)','Brooklin Nets(2020.1 - Atual)']
    },
    {
    nome: 'lebron james'.toUpperCase(),
    posicao: 'Ala',
    idade: 37,
    altura: 2.06,
    peso: 113,
    veterano: true,
    foto:"./lebron.png", 
    link:"https://pt.wikipedia.org/wiki/LeBron_James",
    timesAnteriores: ['Cleveland Cavaliers(2003.1 - 2010.1)','Miami Heat(2010.2 - 2014.1)','Cleveland Cavaliers(2014.2 - 2018.1)', 'LA Lakers(2018.2 - Atual)']
    }
]

function pesquisa() {
    const input = document.getElementById("busca");
    console.log(input.value);
    const jogadores = jogadoresBuscados(input)
    console.log(`${jogadores}` ? jogadores: window.alert("não encontrado"))
    verificar(jogadores)
}

function jogadoresBuscados(input) {
    const jogadores = jogadorAr.filter((item) => { return item.nome.toLowerCase() === input.value.toLowerCase()})
    console.log(`${jogadores}`? jogadores : window.alert("não encontrado"))
    if (jogadores.length >= 1) {
        return jogadores
    } else {
        return jogadorAr
    }

}

function verificar(array) {
    const nba = document.getElementById("item1");
    nba.innerHTML =""
    for (let i = 0; i < array.length; i++) {

        nba.innerHTML += ` 
            <ul>
            <img src="${array[i].foto}"alt="">
              <p> <a href='${array[i].link}' target="_blank" >${array[i].nome}</a>
              <li> Posição:${array[i].posicao}</li>
                <li> Idade:${array[i].idade} Anos</li>
                <li> Altura:${array[i].altura} M</li>
                <li> Peso:${array[i].peso} Kg</li>
                <li>Times Anteriores: ${array[i].timesAnteriores}</li></p></ul>`

    }
}
verificar(jogadorAr)