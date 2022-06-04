var numbersList = [];
var numberInputEl = document.getElementById('numb');
var numberListEl = document.getElementById('list');
var resultEl= document.getElementById('result');

function getNumberOnInput() {
    return parseInt(numberInputEl.value);
}

function isValidNumber(n) {
    return n >= 1 && n <= 100;
}

function isNumberOnTheList(n) {
    return numbersList.indexOf(n) != -1;
}

function addNumber() {
    var noi = getNumberOnInput();
    if (!isValidNumber(noi)) {
        return alert('Valor escolhido inválido, digite um número entre 1 e 100.');
    }
    if (isNumberOnTheList(noi)) {
        return alert('O número escolhido já está na lista, escolha outro número.')
    }
    var newOption = document.createElement('option');
    newOption.text = `Valor ${noi} adicionado.`;
    numberListEl.appendChild(newOption);
    numbersList.push(noi);
    numberInputEl.value = '';
    numberInputEl.focus();
    resultEl.innerText = '';
}

function finalize() {
    if (!numbersList.length) {
        return alert('Você precisa ter adicionado ao menos 1 número para finalizar.');
    }
    var sum = 0;
    var max = numbersList[0];
    var min = max;
    for (var n in numbersList) {
        sum += numbersList[n];
        max = Math.max(max, numbersList[n]);
        min = Math.min(min, numbersList[n]);
    }
    resultEl.innerText = `
    Ao todo, temos ${numbersList.length} números cadastrados.

    O maior valor informado foi ${max}.

    O menor valor informado foi ${min}.

    Somando todos os valores, temos ${sum}.
    
    A média dos valores digitados é ${(sum/numbersList.length).toFixed(2)}.`;
}

function clearInputs() {
    if (confirm('Isto apagará todos os números escolhidos e o resultado atual.')) {
        numbersList = [];
        numberInputEl.value = '';
        numberListEl.innerHTML = '';
        resultEl.innerText = '';
        numberInputEl.focus();
    }
}