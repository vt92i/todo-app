import router from "@/router"

const API_URL = import.meta.env.VITE_BASE_URL

// import { useRouter } from 'vue-router'

const login = async (username, password) => { 
  // const router = useRouter()  // Buat instance router

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

    if (resp.ok) {
      // Simpan token ke local storage
      const token = data['data'].token
      localStorage.setItem('token', token) // Simpan token ke local storage

      alert('Login suksessss' + token)

      // Redirect ke halaman yang diinginkan, misalnya halaman dashboard
      // window.location.href = '/tables'  // Menggunakan router.push untuk redirect
      router.push('/tables')
      return token
    } else {
      // Handle error jika login gagal
      alert('Login gagal: ' + data.message)
      return false
    }
  } catch (error) {
    console.error('Error:', error)
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

    alert('Login suksessss')
    router.push('/login')

    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

export { login, register }
