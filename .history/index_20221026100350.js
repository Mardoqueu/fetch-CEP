fetch("https://pokeapi.com")
  .then(res => {
    console.log(res.ok) // true
    console.log(res.status) // 200
    return res.json()
  })