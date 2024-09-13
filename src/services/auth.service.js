import Swal from 'sweetalert2'

const API_URL = 'http://localhost:3500'

export const login = async (username, password) => {
  try {
    const resp = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })

    const data = await resp.json()

    if (!resp.ok) {
      Swal.fire({
        icon: 'error',
        title: 'Login Gagal',
        text: 'Username atau password salah'
      })
      throw new Error('Failed to Login')
    } else {
      const token = data['data'].token
      sessionStorage.setItem('authToken', token)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Login Sukses!',
        text: `Your Token is ${token}`,
        position: 'center',
        showConfirmButton: false,
        timer: 1500
      })
      return token
    }
  } catch (error) {
    return false
  }
}
