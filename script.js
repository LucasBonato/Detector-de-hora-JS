
function carregar() {
    let msg = document.querySelector('div#msg');
    let foto = document.querySelector('div#foto');
    let data = new Date();
    let hora = 18;//data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 6 && hora < 12) {
        //Boa manhã
        foto.src = 'foto-manha.png';
    } else if (hora > 12 && hora < 18) {
        //Boa tarde
        foto.src = 'foto-tarde.png';
    } else {
        //Boa noite
        foto.src = 'foto-noite.png';
    }
}