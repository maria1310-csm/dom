
function alterarImagem(){
    document.getElementById('imagem').src = "cat.png";
    }
    
    document.getElementById('botao').addEventListener('click', alterarImagem)
    
    
    function alterarTexto(){
      document.getElementById("titulo").innerText = "maria cassamasimo tarefa";
    }
     document.getElementById('botaoTitulo').addEventListener('click', alterarTexto)
    
    
     function alterarCor(){
        document.getElementById('descricao').style.color = "red";
    
     }
    
     document.getElementById('botaoCor').addEventListener('click', alterarCor)
    
    function tocarAudio(){
      document.getAnimations('audio').addEventListener('click', "explosion.way");
      Audio.onplay();
    }
    
    
    document.getElementById('alterarBotao').addEventListener('click', function(){
    
      const buttons = document.querySelectorAll('button');
    
      buttons.forEach(button => {
       button.classList.toggle('active');
      });
      
    });
    