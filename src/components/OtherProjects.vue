<template>

    <div class="main">

        <div class="columns">

            <div class="column is-half is-offset-one-quarter">

                <h2>&lt;More Projects/&gt;</h2>

            </div>

        </div>

        <div class="columns">

            <div class="column is-4">
                <a href="https://github.com/jharmon141/cool_vue" target="blank"><h3>&lt;Cool Vue/&gt;</h3></a>
                <a href="https://github.com/jharmon141/cool_vue/" target="blank"><img class="projectLogo" src="../assets/Screen Shot 2017-06-25 at 3.58.25 PM.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>Cool Vue é um dispositivo de partida bifurcado bifurcado no modelo Vue / Webpack. Ele inclui a renderização do lado do servidor de um servidor Node / Express e o Connect Histroy API Fallback.</p>
                    <br>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/axxlfsa/devactio-vuejs" target="blank">github.com/axxlfsa/devactio-vuejs"</a>
                </div>

            </div>

            <div class="column is-4">
                <a href="https://dry-basin-78109.herokuapp.com" target="blank"><h3>&lt;NYT Scrubber/&gt;</h3></a>
                <a href="https://dry-basin-78109.herokuapp.com" target="blank"><img class="projectLogo" src="../assets/Screen Shot 2017-06-25 at 4.24.22 PM.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>Um depurador de artigos que usa a API do New York Times e um banco de dados Graph.cool para salvar artigos de interesse. Este aplicativo da web usa um front-end VueJS e GraphQL / Apollo para fornecer informações do banco de dados.</p>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/axxlfsa/NYT_Vue" target="blank">github.com/axxlfsa/NYT_Vue</a>
                </div>

            </div>

            <div class="column is-4">
                <a href="https://pure-forest-24470.herokuapp.com/" target="blank"><h3>&lt;AeroDev/&gt;</h3></a>
                <a href="https://pure-forest-24470.herokuapp.com/" target="blank"><img class="projectLogo" src="../assets/ScifiTrivia.png"></a>
                <br>
                <br>
                <div class="projectBlurb">
                    <p>Um jogo de trivia que usa temporizadores JavaScript para testar o conhecimento dos jogadores em Ficção Científica. Um jogador tem 20 segundos para cada pergunta antes de o jogo passar automaticamente para a próxima pergunta.</p>
                    <br>
                    <br>
                    <p>Code: </p>
                    <a href="https://github.com/axxlfsa/aero-dev" target="blank">github.com/axxlfsa/aero-dev</a>
                </div>

            </div>

        </div>



    </div>

</template>

<script>

export default {

    name: 'OtherProjects',

}

</script>

<style scoped>

.is-4 {
    margin-bottom: 40px;
}

p {
    font-size: 14px;
}

.projectBlurb {
    width: 75%;
    margin: auto;
}

.projectLogo {
    height: 100px;
    margin: auto;
    display: block;
}

h2 {
    margin-bottom: 100px !important;
    font-size: 24px !important;
    text-align: center;
}

h3 {
    margin-bottom: 25px !important;
    text-align: center;
    color: #929191;
}

h3:hover {
    color: red;
}

a {
    color: dodgerblue !important;
}

a:hover {
    color: red !important;
}
</style>
