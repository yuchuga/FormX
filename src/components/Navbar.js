import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import CartSidebar from './Cart'
import Searchbar from './Searchbar'
import Sidebar from './Sidebar'
import Navlinks from './Navlinks'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, IconButton, Stack, Toolbar } from '@mui/material'
import { PCData } from '../utils/data'
import { useAccount } from '../auth/AccountProvider'
import { ROUTES } from '../utils/constants'
import { flexBetween } from '../themes/commonStyles'

const styles = {
  appbar: {
    ...flexBetween,
    height: 80
  },
  toolbar: {
    ...flexBetween
  }
};

const Navbar = () => {

  const [status, setStatus] = useState(false) //login status
  const { getSession, logout } = useAccount()

  useEffect(() => {
    runSession()
  });

  const runSession = async () => {
    try {
      await getSession()
      setStatus(true)
    } catch (e) {
      console.error(e)
    }
  };
  
  return (
    <AppBar position='static' sx={styles.appbar}>
      <Toolbar sx={styles.toolbar}>
        <Searchbar placeholder='Search our store' data={PCData} />
        <Sidebar />
        <Navlinks />

        <Stack>
          <Link to={ROUTES.LOGIN}>
            <IconButton size='large' color='secondary'>
              <AccountCircleIcon />
            </IconButton>
          </Link>

          {status &&
            <IconButton size='large' color='secondary' onClick={logout}>
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