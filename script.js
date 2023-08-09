function tabela(){
    document.getElementById("addDuplas").style.display =  'none';
    document.getElementById("setDuplas").style.display =  'none';

    var numDuplas = document.getElementById("setDuplas").value;
    var numColunas = Math.floor(Math.log2(numDuplas));
    var tabela = document.getElementById("tabela");
    tabela.style.display = 'flex';


    var contCol = 1;//conta o numero de colunas
    var aux = 1;//serve para escrever o numero da dupla
    var aux2 = 0;
    var jogoExtra = numDuplas - (2**numColunas)

    //verifica se ira criar uma coluna adicional 
    if(!Number.isInteger(Math.log2(numDuplas)) && jogoExtra*2 < 2**numColunas && numDuplas > 2**numColunas){
        var coluna = document.createElement('div');
        tabela.appendChild(coluna);

        coluna.classList.add('coluna');
        coluna.setAttribute("id", "coluna"+(contCol));
        
        //cria as posições extras
        for(var j = 0; j < jogoExtra*2; j++){
            var pos = document.createElement('div');
            tabela.appendChild(pos);

            pos.classList.add('pos');
            pos.setAttribute("id", "pos"+(j+1)+"_col"+(contCol));

            document.getElementById("coluna"+(contCol)).appendChild(pos);

            //escreve o numero da dupla
            document.getElementById("pos"+(j+1)+"_col"+(contCol)).innerHTML = "dupla"+aux;
      
            aux++;
        }
        contCol++;
        aux2++;
    }else if(jogoExtra*2 >= 2**numColunas){
        numColunas++;
    }

    //cria as colunas
    for(numColunas; numColunas > 0; numColunas--){
        var coluna = document.createElement('div');
        tabela.appendChild(coluna);

        coluna.classList.add('coluna');
        coluna.setAttribute("id", "coluna"+(contCol));

        //cria as posições
        for(var i = 0; i < 2**(numColunas); i++){
            var pos = document.createElement('div');
            tabela.appendChild(pos);

            pos.classList.add('pos');
            pos.setAttribute("id", "pos"+(i+1)+"_col"+(contCol));

            document.getElementById("coluna"+(contCol)).appendChild(pos);

            //escreve os numeros das duplas n tendo jogos extras
            if(aux2 == 0 && contCol == 1){
                document.getElementById("pos"+(i+1)+"_col"+(contCol)).innerHTML = "dupla"+(aux);
                aux++;
            }
            //escreve os numeros das duplas tendo jogos extras
            if(i+1>jogoExtra && aux2 == 1 && contCol == 2){
                document.getElementById("pos"+(i+1)+"_col"+(contCol)).innerHTML = "dupla"+(aux);
                aux++;
            }

            //escreve null nas posições vagas
            if(i+1>numDuplas){
                document.getElementById("pos"+(i+1)+"_col"+(contCol)).innerHTML = "null";
            }

        }     
        contCol++;
    }
}


