import { useState, useEffect, useContext } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import CartSidebar from './CartSidebar'
import Searchbar from './Searchbar'
import Sidebar from './Sidebar'
import Navlinks from './Navlinks'
import { Link } from 'react-router-dom'
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material'
import { PCData } from '../utils/data.js'
import { AccountContext } from '../auth/Account'

const styles = {
  appbar: {
    height: 80,
    justifyContent: 'center'
  },
  toolbar: {
    justifyContent: 'space-between'
  }
}

const routes = {
  home: '/',
  login: '/account/login'
}

const Navbar = () => {

  const [status, setStatus] = useState(false) //login status
  const { getSession, logout } = useContext(AccountContext)

  useEffect(() => {
    runSession()
  });

  const runSession = () => {
    getSession()
      .then((session) => {
        console.log('Session', session)
        setStatus(true)
      })
      .catch((error) => {
        console.log(error)
      })
  };
  
  return (
    <AppBar position='static' sx={styles.appbar}>
      <Toolbar sx={styles.toolbar}>
        <Searchbar placeholder='Search our store' data={PCData} />
        <Sidebar />
        <Navlinks />

        <Stack direction='row'>
          <Link to={routes.login}>
            <IconButton size='large' color='secondary' aria-label='login'>
              <AccountCircleIcon />
            </IconButton>
          </Link>

          {status &&
            <IconButton size='large' color='secondary' aria-label='logout' onClick={logout}>
              <LogoutIcon />
            </IconButton>
          }
          <CartSidebar />
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar