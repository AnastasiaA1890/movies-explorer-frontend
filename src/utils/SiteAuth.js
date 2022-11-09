export const BASE_URL = 'https://api.anastasia.movies.nomoredomains.icu';

export const register = ({ name, email, password}) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      email, 
      password
    })
  })
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else if (res.status === 400) {
      return Promise.reject(`Ошибка: некорректно заполнено одно из полей`)
    } else {
      return Promise.reject(`Ошибка: ${res.status}`)
    }
  })
}