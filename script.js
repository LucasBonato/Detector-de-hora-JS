
function carregar() {
    let msg = document.querySelector('div#msg');
    let foto = document.querySelector('img#imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 6 && hora < 12) {
        //Boa manhã
        foto.src = 'img/foto-manha.png';
        document.body.style.background = '#e2cd9f';
    } else if (hora > 12 && hora < 18) {
        //Boa tarde
        foto.src = 'img/foto-tarde.png';
        document.body.style.background = '#b9846f';
    } else {
        //Boa noite
        foto.src = 'img/foto-noite.png'
        document.body.style.background = '#2e3896';
    }
}