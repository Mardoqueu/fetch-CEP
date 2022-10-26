fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    console.log(res.ok) // true
    console.log(res.status) // 200
    return res.json()
  })