const API_URL = 'https://963b-202-152-145-45.ngrok-free.app'

const login = async (username, password) => {
  try {
    console.log('you are here')
    const resp = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    const data = await resp.json()

    alert('Login sukses')
    return data['data'].token
  } catch (error) {
    return false
  }
}

const register = async (username, name, password) => {
  try {
    const resp = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, name, password })
    })

    const data = await resp.json()

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export { login, register }
