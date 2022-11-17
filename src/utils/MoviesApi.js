class MoviesApi {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  
  _checkResponse(res) {
    if(res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Error ${res.status}`)
    }
  }

  getMovies(jwt) {
    return fetch(this._baseUrl, {
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json',
      },
    })
    .then(this._checkResponse)
    .catch((err) => {
      console.log(err)
    })
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
})