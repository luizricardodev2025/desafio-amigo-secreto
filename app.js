let listaAmigos = [];

function adicionarAmigo() {
    const input = document.querySelector('#amigo');
    const amigo = input.value.trim();

    if (!amigo) {
        alert("⚠️ Por favor insira um nome válido!");
        return;
    }

    if (listaAmigos.includes(amigo)) {
        alert("⚠️ Esse nome já foi adicionado. Use o sobrenome para diferenciar.");
        return;
    }

    listaAmigos.push(amigo);
    exibirAmigos();
    limparCampo();
}

function exibirAmigos() {
    const listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = "";

    listaAmigos.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

function exibeSorteado(texto) {
    const campo = document.querySelector('#resultado');
    campo.innerHTML = "";

    let item = document.createElement('li');
    item.textContent = texto;
    campo.appendChild(item);
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("⚠️ Adicione pelo menos um nome antes de sortear!");
        return;
    }

    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    exibeSorteado(`🎉 O amigo sorteado é: ${amigoSorteado}`);
}

function limparCampo() {
    document.querySelector('#amigo').value = '';
}
