const cep = document.querySelector('#cep')

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method:'GET',
        mode: 'cors',
        cache: 'default',
    }

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then(())
    .catch()

})