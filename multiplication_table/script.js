var listEl = document.getElementById('mtable');
var numberEl = document.getElementById('number');
numberEl.value = '';
numberEl.focus();

function clearBorders() {
    numberEl.style.borderColor = '';
}

function onMultiplicate() {
    clearMultiplicationTable();
    var number = parseInt(numberEl.value);
    if (isNaN(number)) {
        return onInvalidValue();
    }
    for (var a = 0; a < 10; a++) {
        listEl.innerHTML += `<option value="${a}">${number} x ${a+1} = ${number*(a+1)}</option>`;
    }
    numberEl.value = '';
    numberEl.focus();
}

function clearMultiplicationTable() {
    listEl.innerHTML = '';
}

function onInvalidValue () {
    listEl.innerHTML = '<option value="def">Digite um número acima</option>';
    numberEl.style.borderColor = '#ff0000';
    numberEl.value = '';
    numberEl.focus();
    return alert('Valor inválido, por favor digite um número.');
}