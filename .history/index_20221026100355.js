fetch("https://pokeapi.com/api/v2")
  .then(res => {
    console.log(res.ok) // true
    console.log(res.status) // 200
    return res.json()
  })