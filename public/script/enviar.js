const botao = document.getElementById("enviar-menssagem")

botao.onclick = EnviarMenssagem

function EnviarMenssagem() {
    botao.blur();

    const CellNumber = "5518996229347";
    const url = `https://api.whatsapp.com/send?phone=${CellNumber}&text=`

    window.open(url)
}