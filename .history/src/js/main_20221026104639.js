const cep = document.querySelector('#cep')

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        meth
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`)

    console.log(cep.value)
})