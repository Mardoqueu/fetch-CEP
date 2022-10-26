const cep = document.querySelector('#cep')

cep.addEventListener('blur', (e) => {
    let search = cep.value.replace("-", "")

    fetch(``)

    console.log(cep.value)
})