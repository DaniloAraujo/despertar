const modal = document.querySelector('.horarioTransmissao');
const modalTitulo = document.querySelector('.tituloTransmissao');
const data = new Date()
const dia = data.getDay()
const hora = data.getHours()


if (((dia === 0 && hora >= 9 && hora <= 12) || (dia === 3 && hora >= 19 && hora <= 22))) {

    modal.innerHTML += `<a href="https://www.youtube.com/channel/UCDLjvM9tEdjod3PdgFv8mnw">Igreja Despertar</a>`;

    modalTitulo.innerHTML += `<strong>Live Streaming...</strong>`;
} else {
    modal.innerHTML += `<p>Não estamos ao vivo, mas você pode assistir aos outros cultos no Youtube :) <br>
                            <a href="https://www.youtube.com/channel/UCDLjvM9tEdjod3PdgFv8mnw" target="_blank">Igreja Despertar</a>
                        </p>
                        <p>
                            E não esqueça que às 10h no Domingo e às 19:30 na Quarta nós te esperamos
                            para participar junto com a gente!
                        </p>`;

    modalTitulo.innerHTML += `<strong>Sem live no momento.</strong>`;
}


/*
Para quando for transmitir ao vivo.
`<div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/channel/UCDLjvM9tEdjod3PdgFv8mnw"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>"
        title="YouTube video" allowfullscreen></iframe>
        </div>
        <br>
        <hr>
        Informação: Nossas lives são liberadas 10 minutos antes de iniciar o culto.`;

*/