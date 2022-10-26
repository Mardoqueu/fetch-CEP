const cep = document.querySelector('#cep')

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-", "")

    fetch(`https://viacep.com.br/ws/01311100/json/`)

    console.log(cep.value)
})