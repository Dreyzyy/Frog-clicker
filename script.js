let pontos = 0;
let pontosPorClique = 1;

siglasNumeros();
clique();
abrirUpgrades(); //Loja
fecharUpgrades(); //Fecha loja
upgrades(); //Upgrades ativos

function mudarTextoDaTela() {
        let registroDePontos = document.getElementById('score');
        registroDePontos.innerHTML = siglasNumeros(pontos);
    }

function clique() {
    const imagem = document.getElementById('frog');
    imagem.addEventListener('click', () => {pontos = pontos + pontosPorClique; mudarTextoDaTela()}) 
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
            'Mosca ingerida' : 50, //+1 feito
            'Lavou o pé' : 250, //+5 feito
            'Pulou em uma vitória-régia' : 1_200, //+25 feito
            'Te beijaram sapinho' :  6_000, //+50 feito
            'O egito é lindo!' : 15_000, //+200 feito
            'O tal do kermit' : 40_000, //+500 feito
            'Tiana passou por você' : 600_000, //+2000k feito
            'Parabéns! Seu sapo evoluiu para um Froakie' : 1_500_000, // 1M -> +5k feito
            'Pepe está em live' : 12_000_000, // 10M -> +25k feito
            'Crazy fog quase te atropela!' : 60_000_000, // 50M -> 100k
            'Plus ultra! rewbt!': 250_000_000, // 200M -> 500k
            'Sapo-cururu...' : 600_000_000, // 500M -> 5M
            'Seu mestre Yokozuna chegou para te ajudar' : 1_200_000_000 // 1B -> 25M
        }
        const numeroDosValores = [1, 5, 25, 50, 200, 500, 2_000, 5_000, 25_000, 100_000, 500_000, 5_000_000, 25_000_000]; //Alterar força do clique

        const itemUm = document.createElement('li');
        const textoUm = document.createElement('span');
        textoUm.textContent = `Mosca ingerida - Custa ${listaComValores['Mosca ingerida']} pontos`;
        itemUm.appendChild(textoUm);

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
        const textoDois = document.createElement('span');
        textoDois.textContent = `Lavou o pé - Custa ${listaComValores['Lavou o pé']} pontos`;
        itemDois.appendChild(textoDois);

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
        const textoTres = document.createElement('span');
        textoTres.textContent = `Pulou em uma vitória-régia - Custa ${siglasNumeros(listaComValores['Pulou em uma vitória-régia'])} pontos`;
        itemTres.appendChild(textoTres);

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
        const textoQuatro = document.createElement('span');
        textoQuatro.textContent = `Te beijaram sapinho - Custa ${siglasNumeros(listaComValores['Te beijaram sapinho'])} pontos`;
        itemQuatro.appendChild(textoQuatro);
        
        const botaoQuatro = document.createElement('button');
        botaoQuatro.textContent = 'comprar';
        itemQuatro.appendChild(botaoQuatro);
        listaUpgrades.appendChild(itemQuatro);

        botaoQuatro.addEventListener('click', () => {
            if(pontos >= listaComValores['Te beijaram sapinho']) {
                pontos = pontos - listaComValores['Te beijaram sapinho'];
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
        const textoCinco = document.createElement('span');
        textoCinco.textContent = `O egito é lindo! - Custa ${siglasNumeros(listaComValores['O egito é lindo!'])} pontos`;
        itemCinco.appendChild(textoCinco);

        const botaoCinco = document.createElement('button');
        botaoCinco.textContent = 'comprar'
        itemCinco.appendChild(botaoCinco);
        listaUpgrades.appendChild(itemCinco);

        botaoCinco.addEventListener('click', () => {
            if(pontos >= listaComValores['O egito é lindo!']) {
                pontos = pontos - listaComValores['O egito é lindo!'];
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
        const textoSeis = document.createElement('span');
        textoSeis.textContent = `kermit? - Custa ${siglasNumeros(listaComValores['O tal do kermit'])} pontos`;
        itemSeis.appendChild(textoSeis);

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
        const textoSete = document.createElement('span');
        textoSete.textContent = `Tiana passou por você - Custa ${siglasNumeros(listaComValores['Tiana passou por você'])} pontos`;
        itemSete.appendChild(textoSete);

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
        const textoOito = document.createElement('span');
        textoOito.textContent = `Parabéns! Seu sapo evoluiu para Froakie - Custa ${siglasNumeros(listaComValores['Parabéns! Seu sapo evoluiu para um Froakie'])} pontos`;
        itemOito.appendChild(textoOito);

        const botaoOito = document.createElement('button');
        botaoOito.textContent = 'Comprar';
    itemOito.appendChild(botaoOito);
        listaUpgrades.appendChild(itemOito);

        botaoOito.addEventListener('click', () => {
            if(pontos >= listaComValores['Parabéns! Seu sapo evoluiu para um Froakie']) {
                pontos = pontos - listaComValores['Parabéns! Seu sapo evoluiu para um Froakie'];
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
        const textoNove = document.createElement('span');
        textoNove.textContent = `Pepe está em live - Custa ${siglasNumeros(listaComValores['Pepe está em live'])} pontos`;
        itemNove.appendChild(textoNove);

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
        const textoDez = document.createElement('span');
        textoDez.textContent = `Crazy fog quase bate em você! - Custa ${siglasNumeros(listaComValores['Crazy fog quase te atropela!'])} pontos`;
        itemDez.appendChild(textoDez);

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
        const textoOnze = document.createElement('span');
        textoOnze.textContent = `Plus ultra! rewbt! - Custa ${siglasNumeros(listaComValores['Plus ultra! rewbt!'])} pontos`;
        itemOnze.appendChild(textoOnze);

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
        const textoDoze = document.createElement('span');
        textoDoze.textContent = `Sapo-cururu... - Custa ${siglasNumeros(listaComValores['Sapo-cururu...'])} pontos`;
        itemDoze.appendChild(textoDoze);

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
        const textoTreze = document.createElement('span');
        textoTreze.textContent = `Seu mestre Yokozuna chegou para te ajudar - Custa ${siglasNumeros(listaComValores['Seu mestre Yokozuna chegou para te ajudar'])} pontos`;
        itemTreze.appendChild(textoTreze);

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
        mudarClique.innerHTML = siglasNumeros(pontosPorClique);
    }