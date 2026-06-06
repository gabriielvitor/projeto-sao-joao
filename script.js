const btnEnviar = document.getElementById('btn-enviar');
const mural = document.getElementById('mural-bilhete');

// Função
btnEnviar.addEventListener('click', function() {
    const deQuem = document.getElementById('de-quem').value || "Anônimo";
    const paraQuem = document.getElementById('para-quem').value;
    const mensagem = document.getElementById('mensagem').value;

    //Validação simples
    if (!paraQuem || !mensagem) {
        alert("Preencha para quem é o bilhete e a mensagem sô! \u{1F33D}");
        return;
    }

    // Estrutura Novo
    const novoBilhete = document.createElement('div');
    novoBilhete.classList.add('bilhete');

    //texto que aparece
    novoBilhete.innerHTML = `
        <p><strong>De:</strong> ${deQuem}</p>
        <p><strong>Para:</strong> ${paraQuem}</p>
        <hr style="border: 0; border-top: 1px dashed #ccc; margin: 8px 0;">
        <p>"${mensagem}"
    `;

    // botão deletar
    const btnDeletar = document.createElement('button');
    btnDeletar.innerText = 'Excluir';
    btnDeletar.classList.add('btn-deletar');

    btnDeletar.addEventListener('click', function() {
        novoBilhete.remove();
    });

    novoBilhete.appendChild(btnDeletar);

    mural.appendChild(novoBilhete);

    document.getElementById('de-quem').value = '';
    document.getElementById('para-quem').value = '';
    document.getElementById('mensagem').value = '';
});