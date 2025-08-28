let pontos = 0;
let pontosPorClique = 1;

clique();
abrirUpgrades(); //Loja
fecharUpgrades(); //Fecha loja
upgrades(); //Upgrades ativos

function mudarTextoDaTela() {
        let registroDePontos = document.getElementById('score');
        registroDePontos.innerHTML = pontos;
    }

function clique() {
    const imagem = document.getElementById('frog');
    imagem.addEventListener('click', () => {pontos = pontos + pontosPorClique; mudarTextoDaTela('score')}) 
    }

    function abrirUpgrades() {
        let botaoDeUpgrades = document.getElementById('upgrade');
        const abrirAbaLateral = document.getElementById('upgrades');

        botaoDeUpgrades.addEventListener('click', () => {abrirAbaLateral.style.display = 'block'});
    }

    function fecharUpgrades() {
        let botaoDeFecharUpgrades = document.getElementById('close-upgrades');
        const abrirAbaLateral = document.getElementById('upgrades');

        botaoDeFecharUpgrades.addEventListener('click', () => {abrirAbaLateral.style.display = 'none'});
    }

    function upgrades() {
        const pontosInsuficientes = document.getElementById('mensagem-pontos');
        const listaUpgrades = document.getElementById('upgrade-list');
        const listaComValores = {
            'Mosca ingerida' : 25, //+1
            'Lavou o pé' : 100, //+5
            'Pulou em uma vitória-régia' : 500, //+25
            'Te beijaram mas nada aconteceu' :  2000, //+100
            'O egito é lindo...' : 5000, //+500
            'kermit?' : 10000 //+1200
        }

        const itemUm = document.createElement('li');
        itemUm.textContent = 'Mosca ingerida - Custa 25 pontos';
        const botaoUm = document.createElement('button');
        botaoUm.textContent = 'comprar'
        itemUm.appendChild(botaoUm);
        listaUpgrades.appendChild(itemUm);

        botaoUm.addEventListener('click', () => {
            if(pontos >= listaComValores['Mosca ingerida']) {
            pontos = pontos - listaComValores['Mosca ingerida'];
            pontosPorClique = pontosPorClique + 1
            mudarTextoDaTela();
            forcaDoClique();
            } else {
                pontosInsuficientes.style.display = 'block';
                pontosInsuficientes.style.opacity = '1'
                setTimeout(() => {
                    pontosInsuficientes.style.display = 'none';
                    pontosInsuficientes.style.opacity = '0'
                }, 2000);
            }
        })


        const itemDois = document.createElement('li');
        itemDois.textContent = 'Lavou o pé - Custa 100 pontos';
        const botaoDois = document.createElement('button');
        botaoDois.textContent = 'comprar'
        itemDois.appendChild(botaoDois);
        listaUpgrades.appendChild(itemDois);

        botaoDois.addEventListener('click', () => {
            if(pontos >= listaComValores['Lavou o pé']) {
                pontos = pontos - listaComValores['Lavou o pé'];
                pontosPorClique = pontosPorClique + 5;
                mudarTextoDaTela();
                forcaDoClique();
            } else {
                pontosInsuficientes.style.display = 'block';
                pontosInsuficientes.style.opacity = '1'
                setTimeout(() => {
                    pontosInsuficientes.style.display = 'none';
                    pontosInsuficientes.style.opacity = '0'
                }, 2000);
            }
        })

        const itemTres = document.createElement('li');
        itemTres.textContent = 'Pulou em uma vitória-régia - Custa 500 pontos';
        const botaoTres = document.createElement('button');
        botaoTres.textContent = 'comprar';
        itemTres.appendChild(botaoTres);
        listaUpgrades.appendChild(itemTres);

        botaoTres.addEventListener('click', () => {
            if(pontos >= listaComValores['Pulou em uma vitória-régia']) {
                pontos = pontos - listaComValores['Pulou em uma vitória-régia'];
                pontosPorClique = pontosPorClique + 25;
                mudarTextoDaTela();
                forcaDoClique();
            } else {
                pontosInsuficientes.style.display = 'block';
                pontosInsuficientes.style.opacity = '1'
                setTimeout(() => {
                    pontosInsuficientes.style.display = 'none';
                    pontosInsuficientes.style.opacity = '0'
                }, 2000);
            }
        })

        const itemQuatro = document.createElement('li');
        itemQuatro.textContent = 'Te beijaram mas nada aconteceu - Custa 2000 pontos';
        const botaoQuatro = document.createElement('button');
        botaoQuatro.textContent = 'comprar';
        itemQuatro.appendChild(botaoQuatro);
        listaUpgrades.appendChild(itemQuatro);

        botaoQuatro.addEventListener('click', () => {
            if(pontos >= listaComValores['Te beijaram mas nada aconteceu']) {
                pontos = pontos - listaComValores['Te beijaram mas nada aconteceu'];
                pontosPorClique = pontosPorClique + 100;
                mudarTextoDaTela();
                forcaDoClique()
            } else {
                pontosInsuficientes.style.display = 'block';
                pontosInsuficientes.style.opacity = '1'
                setTimeout(() => {
                    pontosInsuficientes.style.display = 'none';
                    pontosInsuficientes.style.opacity = '0'
                }, 2000);
            }
        })

        const itemCinco = document.createElement('li');
        itemCinco.textContent = 'O egito é lindo... - Custa 5000 pontos';
        const botaoCinco = document.createElement('button');
        botaoCinco.textContent = 'comprar'
        itemCinco.appendChild(botaoCinco);
        listaUpgrades.appendChild(itemCinco);

        botaoCinco.addEventListener('click', () => {
            if(pontos >= listaComValores['O egito é lindo...']) {
                pontos = pontos - listaComValores['O egito é lindo...'];
                pontosPorClique = pontosPorClique + 500;
                mudarTextoDaTela()
                forcaDoClique();
            } else {
                pontosInsuficientes.style.display = 'block';
                pontosInsuficientes.style.opacity = '1'
                setTimeout(() => {
                    pontosInsuficientes.style.display = 'none';
                    pontosInsuficientes.style.opacity = '0'
                }, 2000);
            }
        })

        const itemSeis = document.createElement('li');
        itemSeis.textContent = 'kermit? - Custa 20000 pontos';
        const botaoSeis = document.createElement('button');
        botaoSeis.textContent = 'Comprar';
        itemSeis.appendChild(botaoSeis);
        listaUpgrades.appendChild(itemSeis);

        botaoSeis.addEventListener('click', () => {
            if(pontos >= listaComValores['kermit?']) {
                pontos = pontos - listaComValores['kermit?'];
                pontosPorClique = pontosPorClique + 1200;
                mudarTextoDaTela()
                forcaDoClique()
            } else {
                pontosInsuficientes.style.display = 'block';
                pontosInsuficientes.style.opacity = '1'
                setTimeout(() => {
                    pontosInsuficientes.style.display = 'none';
                    pontosInsuficientes.style.opacity = '0'
                }, 2000);
            }
        })
    }

    function forcaDoClique() {
        let mudarClique = document.getElementById('forca-clique');
        mudarClique.innerHTML = pontosPorClique;
    }