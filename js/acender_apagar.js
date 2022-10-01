function acender() {
    var cont = 0;
    var btnAcender = document.getElementById('btn-acender');
    var displayAcesso = document.getElementById('contador-acender');

    btnAcender.onclick = function () {
        document.getElementById('lampada').src = './img/Lampada_EPPG24-2-.png';
        cont++;
        displayAcesso.innerHTML = cont;
    }
}

function apagar() {
    var cont = 0;
    var btnAcender = document.getElementById('btn-apagar');
    var displayAcesso = document.getElementById('contador-apagar');

    btnAcender.onclick = function () {
        document.getElementById('lampada').src = './img/ews409front-550x550.png';
        cont++;
        displayAcesso.innerHTML = cont;
    }
}