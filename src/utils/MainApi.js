class MainApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getUserData(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse)
    .catch((err) => {
      console.log(err)
    })
  }

  editProfile(data, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
    .then(this._checkResponse)
    .catch((err) => {
      console.log(err)
    })
  }
}

export const mainApi = new MainApi({
  baseUrl: 'https://api.anastasia.movies.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json'
  }
})