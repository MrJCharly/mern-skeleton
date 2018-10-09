const create = (user) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((res) => {
    return res.json()
  })
  .catch((err) => console.log(err))
}

const list = () => {
  return fetch('/api/users', {
    method: 'GET'
  })
  .then((res) => {
    return res.json()
  })
  .catch((err) => console.log(err))
}

export default {
  create,
  list
}
