function submit() {
    var init, end, count, message = '';
    // Getting inputs' values
    init = getInitialValue();
    if (init == null) return;

    end = getFinalValue(init);
    if (end == null) return;

    count = getCounter();
    if (count == null) return;

    // Forming the message
    if (count > 0) {
        if (end < init) {
            setBordersColor('#ff0000')
            showMessage('Operação infinita. Inverta o sinal do valor inicial, final ou do passo.');
            return;
        }
        for (var i = init; i <= end; i+=count) {
            message += i + ' 👉 ';
        }
    } else {
        if (end > init) {
            setBordersColor('#ff0000')
            showMessage('Operação infinita. Inverta o sinal do valor inicial, final ou do passo.');
            return;
        }
        for (var i = init; i >= end; i+=count) {
            message += i + ' 👉 ';
        }
    }
    message += '🏁';
    // Showing the message
    showMessage(message);
}

function getInitialValue() {
    var min = Number.MIN_SAFE_INTEGER;
    var max = Number.MAX_SAFE_INTEGER;
    var init = parseInt(document.getElementById('inicio').value);
    if (isNaN(init) || init < min || init > max) {
        document.getElementById('inicio').style.borderColor = '#ff0000';
        showMessage('Valor inicial inválido.');
        return null;
    }
    return init;
}

function getFinalValue(init) {
    var min = Number.MIN_SAFE_INTEGER;
    var max = Number.MAX_SAFE_INTEGER;
    var end = parseInt(document.getElementById('fim').value);
    if (isNaN(end) || end < min || end > max) {
        document.getElementById('fim').style.borderColor = '#ff0000';
        showMessage('Valor final inválido.');
        return null;
    }
    if (end == init) {
        showMessage(`${init} 👉 🏁`);
        return null;
    }
    return end;
}

function getCounter() {
    var count = parseInt(document.getElementById('passo').value);
    if (isNaN(count) || count == 0) {
        document.getElementById('passo').style.borderColor = '#ff0000';
        showMessage('Valor do passo inválido, este número deve ser diferente de zero.');
        return null;
    }
    return count;
}

function setBordersColor(color) {
    color = color || '';
    document.getElementById('inicio').style.borderColor = color;
    document.getElementById('fim').style.borderColor = color;
    document.getElementById('passo').style.borderColor = color;
}

function showMessage(string) {
    document.getElementById('mensagem').innerText = string;
}