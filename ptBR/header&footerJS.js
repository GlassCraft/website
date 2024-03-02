<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="GlassCraft é um jogo que será disponibilizado na Steam em 2024. Controle sua vidraçaria!">
    <style>
    #countdown {
            font-size: 2em;
            font-weight: bold;
            color: #fff;
            background-color: #4285f4;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            margin-top: 20px;
        }

        .cookie-consent {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    display: none;
    padding: 10px;
    text-align: center;
}
        .steam{
            display: none;
        }

        .container{
            font-family: Arial, sans-serif;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background-color: #f5f5f5;
            color: #333;
            padding: 40px;
            box-sizing: border-box;
        }

        .steam {
            margin-top: 10px;
        }

        @keyframes moveArrow {
            0% { transform: translateX(0); }
            41% { transform: translateX(6px); }
            100% { transform: translateX(0); }
        }

        @keyframes moveArrow2 {
            0% { transform: translateX(0); }
            40% { transform: translateX(5px); }
            100% { transform: translateX(0); }
        }

        .seta1 {
            display: inline-block;
            animation: moveArrow2 1s infinite;
        }

        .seta2 {
            display: inline-block;
            animation: moveArrow 1s infinite;
        }

        /* Estilos do botão */
.button {
  background-color: #4CAF50; /* Cor de fundo */
  border: none; /* Remove a borda */
  color: white; /* Cor do texto */
  padding: 15px 32px; /* Espaçamento interno */
  text-align: center; /* Alinhamento do texto */
  text-decoration: none; /* Remove sublinhado */
  display: inline-block; /* Mostra como um elemento em linha */
  font-size: 16px; /* Tamanho da fonte */
  margin: 4px 2px; /* Margem externa */
  cursor: pointer; /* Altera o cursor do mouse */
  border-radius: 10px; /* Borda arredondada */
}

/* Estilos quando o mouse passa por cima */
.button:hover {
  background-color: #45a049; /* Cor de fundo ao passar o mouse */
}

/* Estilos quando o botão é pressionado */
.button:active {
  background-color: #3e8e41; /* Cor de fundo quando pressionado */
  transform: translateY(2px); /* Efeito de pressionamento */
}
    </style>
    <link rel="stylesheet" href="style.css">
    <title>Lançamento</title>
</head>
<body>

    <nav>

    </nav>

    <div class="container">

        <a href="https://play.google.com/store/apps/details?id=com.MaracujaGamessStudio.GlassCraft" class="button">Jogar Agora!</a>

</div>


    <footer>

    </footer>
    <script src="header&footerJS.js"></script>
    <script src="cookiesJavascript.js"></script>

    <script>
        // Data de lançamento do jogo (no seu caso, dia 28)
        const dataLancamento = new Date('2024-03-01T00:00:00Z').getTime();

        // Atualiza o contador a cada segundo
        const interval = setInterval(() => {
            const agora = new Date().getTime();
            const diferenca = dataLancamento - agora;

            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            document.getElementById('countdown').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

            // Verifica se o tempo acabou
            if (diferenca < 0) {
                clearInterval(interval);
                document.getElementById('countdown').innerHTML = 'O jogo foi lançado!';
            }
        }, 1000);
    </script>





</body>
</html>
