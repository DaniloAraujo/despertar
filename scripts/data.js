const modal = document.querySelector('.horarioTransmissao');
const modalTitulo = document.querySelector('.tituloTransmissao');
// const botao = document.querySelector('#btnCulto');
const data = new Date()
const dia = data.getDay()
const hora = data.getHours()

// botao.setAttribute('disabled', '')

if (((dia === 0 && hora >= 10 && hora <= 12) || (dia === 3 && hora >= 19 && hora <= 22))) {
    // botao.removeAttribute('disabled')

    modal.innerHTML += `<div class="ratio ratio-16x9">
    <iframe src="https://www.youtube.com/embed/KsTnUurMR6A"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>"
        title="YouTube video" allowfullscreen></iframe>
            </div>`;

    modalTitulo.innerHTML += `<strong>Live Streaming...</strong>`;
} else {
    modal.innerHTML += `<p>No momento não estamos ao vivo, mas você pode assistir aos outros cultos no Youtube :) <br>
                            <a href="https://www.youtube.com/channel/UCDLjvM9tEdjod3PdgFv8mnw" target="_blank">Igreja Despertar</a>
                        </p>
                        <p>
                            E não esqueça que às 10h no Domingo e às 19:30 na Quarta nós te esperamos
                            para participar junto com a gente!
                        </p>`;

    modalTitulo.innerHTML += `<strong>Sem live no momento.</strong>`;
}