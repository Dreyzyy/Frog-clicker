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
        const listaComValores = { //Alterar valores dos upgrades
            'Mosca ingerida' : 25, //+1 feito
            'Lavou o pé' : 500, //+5 feito
            'Pulou em uma vitória-régia' : 2500, //+25 feito
            'Te beijaram mas nada aconteceu' :  5000, //+50 feito
            'O egito é lindo...' : 10000, //+200 feito
            'O tal do kermit' : 20000, //+500 feito
            'Tiana passou por você' : 500000, //+2000k feito
            'Parabéns! Seu sapo evoluiu para um Frogadier' : 1000000, // 1M -> +5000k feito
            'Pepe está em live' : 10000000, // 10M -> +25000k feito
            'Crazy fog quase te atropela!' : 50000000, // 50M -> 100k
            'Plus ultra! rewbt!': 200000000, // 200M -> 500k
            'Sapo-cururu...' : 500000000, // 500M -> 5M
            'Seu mestre Yokozuna chegou para te ajudar' : 1_000_000_000 // 1B -> 25M
        }
        const numeroDosValores = [1, 5, 25, 50, 200, 500, 2000, 5000, 25000, 100000, 500000, 5000000, 25000000]; //Alterar força do clique

        const itemUm = document.createElement('li');
        itemUm.textContent = `Mosca ingerida - Custa ${listaComValores['Mosca ingerida']} pontos`;
        const botaoUm = document.createElement('button');
        botaoUm.textContent = 'comprar'
        itemUm.appendChild(botaoUm);
        listaUpgrades.appendChild(itemUm);

        botaoUm.addEventListener('click', () => {
            if(pontos >= listaComValores['Mosca ingerida']) {
            pontos = pontos - listaComValores['Mosca ingerida'];
            pontosPorClique = pontosPorClique + numeroDosValores[0];
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
        itemDois.textContent = `Lavou o pé - Custa ${listaComValores['Lavou o pé']} pontos`;
        const botaoDois = document.createElement('button');
        botaoDois.textContent = 'comprar'
        itemDois.appendChild(botaoDois);
        listaUpgrades.appendChild(itemDois);

        botaoDois.addEventListener('click', () => {
            if(pontos >= listaComValores['Lavou o pé']) {
                pontos = pontos - listaComValores['Lavou o pé'];
                pontosPorClique = pontosPorClique + numeroDosValores[1];
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
        itemTres.textContent = `Pulou em uma vitória-régia - Custa ${listaComValores['Pulou em uma vitória-régia']} pontos`;
        const botaoTres = document.createElement('button');
        botaoTres.textContent = 'comprar';
        itemTres.appendChild(botaoTres);
        listaUpgrades.appendChild(itemTres);

        botaoTres.addEventListener('click', () => {
            if(pontos >= listaComValores['Pulou em uma vitória-régia']) {
                pontos = pontos - listaComValores['Pulou em uma vitória-régia'];
                pontosPorClique = pontosPorClique + numeroDosValores[2];
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
        itemQuatro.textContent = `Te beijaram mas nada aconteceu - Custa ${listaComValores['Te beijaram mas nada aconteceu']} pontos`;
        const botaoQuatro = document.createElement('button');
        botaoQuatro.textContent = 'comprar';
        itemQuatro.appendChild(botaoQuatro);
        listaUpgrades.appendChild(itemQuatro);

        botaoQuatro.addEventListener('click', () => {
            if(pontos >= listaComValores['Te beijaram mas nada aconteceu']) {
                pontos = pontos - listaComValores['Te beijaram mas nada aconteceu'];
                pontosPorClique = pontosPorClique + numeroDosValores[3];
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
        itemCinco.textContent = `O egito é lindo... - Custa ${listaComValores['O egito é lindo...']} pontos`;
        const botaoCinco = document.createElement('button');
        botaoCinco.textContent = 'comprar'
        itemCinco.appendChild(botaoCinco);
        listaUpgrades.appendChild(itemCinco);

        botaoCinco.addEventListener('click', () => {
            if(pontos >= listaComValores['O egito é lindo...']) {
                pontos = pontos - listaComValores['O egito é lindo...'];
                pontosPorClique = pontosPorClique + numeroDosValores[4];
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
        itemSeis.textContent = `kermit? - Custa ${listaComValores['O tal do kermit']} pontos`;
        const botaoSeis = document.createElement('button');
        botaoSeis.textContent = 'Comprar';
        itemSeis.appendChild(botaoSeis);
        listaUpgrades.appendChild(itemSeis);

        botaoSeis.addEventListener('click', () => {
            if(pontos >= listaComValores['O tal do kermit']) {
                pontos = pontos - listaComValores['O tal do kermit'];
                pontosPorClique = pontosPorClique + numeroDosValores[5];
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
        const itemSete = document.createElement('li');
        itemSete.textContent = `Tiana passou por você - Custa ${listaComValores['Tiana passou por você']} pontos`;
        const botaoSete = document.createElement('button');
        botaoSete.textContent = 'Comprar';
        itemSete.appendChild(botaoSete);
        listaUpgrades.appendChild(itemSete);

        botaoSete.addEventListener('click', () => {
            if(pontos >= listaComValores['Tiana passou por você']) {
                pontos = pontos - listaComValores['Tiana passou por você'];
                pontosPorClique = pontosPorClique + numeroDosValores[6];
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

        const itemOito = document.createElement('li');
        itemOito.textContent = `Parabéns! Seu sapo evoluiu para um Frogadier - Custa ${listaComValores['Parabéns! Seu sapo evoluiu para um Frogadier']} pontos`;
        const botaoOito = document.createElement('button');
        botaoOito.textContent = 'Comprar';

        itemOito.appendChild(botaoOito);
        listaUpgrades.appendChild(itemOito);

        botaoOito.addEventListener('click', () => {
            if(pontos >= listaComValores['Parabéns! Seu sapo evoluiu para um Frogradier']) {
                pontos = pontos - listaComValores['Parabéns! Seu sapo evoluiu para um Frogadier'];
                pontosPorClique = pontosPorClique + numeroDosValores[7];
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

        const itemNove = document.createElement('li');
        itemNove.textContent = `Pepe está em live - Custa ${listaComValores['Pepe está em live']} pontos`;
        const botaoNove = document.createElement('button');
        botaoNove.textContent = 'Comprar';
        itemNove.appendChild(botaoNove);
        listaUpgrades.appendChild(itemNove);

        botaoNove.addEventListener('click', () => {
            if(pontos >= listaComValores['Pepe está em live']) {
                pontos = pontos - listaComValores['Pepe está em live'];
                pontosPorClique = pontosPorClique + numeroDosValores[8];
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

        const itemDez = document.createElement('li');
        itemDez.textContent = `Crazy fog quase te atropela! - Custa ${listaComValores['Crazy fog quase te atropela!']} pontos`;
        const botaoDez = document.createElement('button');
        botaoDez.textContent = 'Comprar';
        itemDez.appendChild(botaoDez);
        listaUpgrades.appendChild(itemDez);

        botaoDez.addEventListener('click', () => {
            if(pontos >= listaComValores['Crazy fog quase te atropela!']) {
                pontos = pontos - listaComValores['Crazy fog quase te atropela!'];
                pontosPorClique = pontosPorClique + numeroDosValores[9];
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

        const itemOnze = document.createElement('li');
        itemOnze.textContent = `Plus ultra! rewbt! - Custa ${listaComValores['Plus ultra! rewbt!']} pontos`;
        const botaoOnze = document.createElement('button');
        botaoOnze.textContent = 'Comprar';
        itemOnze.appendChild(botaoOnze);
        listaUpgrades.appendChild(itemOnze);

        botaoOnze.addEventListener('click', () => {
            if(pontos >= listaComValores['Plus ultra! rewbt!']) {
                pontos = pontos - listaComValores['Plus ultra! rewbt!'];
                pontosPorClique = pontosPorClique + numeroDosValores[10];
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

        const itemDoze = document.createElement('li');
        itemDoze.textContent = `Sapo-cururu... - Custa ${listaComValores['Sapo-cururu...']} pontos`;
        const botaoDoze = document.createElement('button');
        botaoDoze.textContent = 'Comprar';
        itemDoze.appendChild(botaoDoze);
        listaUpgrades.appendChild(itemDoze);

        botaoDoze.addEventListener('click', () => {
            if(pontos >= listaComValores['Sapo-cururu...']) {
                pontos = pontos - listaComValores['Sapo-cururu...'];
                pontosPorClique = pontosPorClique + numeroDosValores[11];
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

        const itemTreze = document.createElement('li');
        itemTreze.textContent = `Seu mestre Yokozuna chegou para te ajudar - Custa ${listaComValores['Seu mestre Yokozuna chegou para te ajudar']} pontos`;
        const botaoTreze = document.createElement('button');
        botaoTreze.textContent = 'Comprar';
        itemTreze.appendChild(botaoTreze);
        listaUpgrades.appendChild(itemTreze);

        botaoTreze.addEventListener('click', () => {
            if(pontos >= listaComValores['Seu mestre Yokozuna chegou para te ajudar']) {
                pontos = pontos - listaComValores['Seu mestre Yokozuna chegou para te ajudar'];
                pontosPorClique = pontosPorClique + numeroDosValores[12];
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
    }

    function forcaDoClique() {
        let mudarClique = document.getElementById('forca-clique');
        mudarClique.innerHTML = pontosPorClique;
    }