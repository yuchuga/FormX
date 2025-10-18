import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Menu, MenuItem, Stack } from '@mui/material'
import { ROUTES } from '../utils/constants'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { hideOnMobile } from '../themes/commonStyles'

const styles = {
  stack: {
    ...hideOnMobile,
    margin: 'auto'
  },
  button: {
    fontSize: 16,
    logo: {
      fontSize: 28,
    }
  },
  nav: {
    color: '#fff',
    textDecoration: 'none'
  }
};

const menuProps = {
  product: { 'aria-labelledby': 'product-btn' },
  community: { 'aria-labelledby': 'community-btn' },
  about: { 'aria-labelledby': 'about-btn' }
};

const origin = { 
  vertical: 'bottom',
  horizontal: 'center'
};

const origin2 = {
  vertical: 'top',
  horizontal: 'center'
};

const Navlinks = () => {

  const [anchorP, setAnchorP] = useState(null)
  const [anchorC, setAnchorC] = useState(null)
  const [anchorA, setAnchorA] = useState(null)

  const openP = Boolean(anchorP)
  const openC = Boolean(anchorC)
  const openA = Boolean(anchorA)

  const handleClickP = (e) => setAnchorP(e.currentTarget)
  const handleClickC = (e) => setAnchorC(e.currentTarget)
  const handleClickA = (e) => setAnchorA(e.currentTarget)
  
  const handleCloseP = () => setAnchorP(null)
  const handleCloseC = () => setAnchorC(null)
  const handleCloseA = () => setAnchorA(null)

  return (
    <>
      <Stack sx={styles.stack}>
        <Button
          id='product-btn'
          color='inherit' 
          aria-controls={openP ? 'product-menu' : undefined}
          aria-expanded={openP ? 'true' : undefined}
          aria-haspopup='true' 
          onClick={handleClickP}
          endIcon={<KeyboardArrowDownIcon/>}
          sx={styles.button} 
        >
          <NavLink to={ROUTES.PRODUCT} style={styles.nav}>PRODUCT </NavLink>
        </Button>

        <Button 
          id='community-btn'
          color='inherit' 
          aria-controls={openC ? 'community-menu' : undefined}
          aria-expanded={openC ? 'true' : undefined}
          aria-haspopup='true' 
          onClick={handleClickC}
          endIcon={<KeyboardArrowDownIcon/>}
          sx={styles.button}
        >
          <NavLink to={ROUTES.COMMUNITY} style={styles.nav}>COMMUNITY</NavLink>
        </Button>

        <Button color='inherit' href={ROUTES.HOME} sx={styles.button.logo}>FORMX </Button>
        <Button color='inherit' href={ROUTES.SUPPORT} sx={styles.button}>SUPPORT</Button>
        
        <Button 
          id='about-btn'
          color='inherit'
          aria-controls={openA ? 'about-menu' : undefined}
          aria-expanded={openA ? 'true' : undefined}
          aria-haspopup='true' 
          onClick={handleClickA} 
          endIcon={<KeyboardArrowDownIcon/>}
          sx={styles.button}
        >
          <NavLink to={ROUTES.ABOUT} style={styles.nav}>ABOUT</NavLink>
        </Button>
      </Stack>

      {/* Dropdown */}
      <Menu 
        id='product-menu' 
        anchorEl={anchorP} 
        anchorOrigin={origin} 
        open={openP} 
        onClose={handleCloseP} 
        slotProps={{ list: menuProps.product }}
        transformOrigin={origin2} 
      >
        <MenuItem component={Link} to={ROUTES.FORMX}>X Series</MenuItem>
        <MenuItem component={Link} to={ROUTES.FORMN}>N Series</MenuItem>
      </Menu>

      <Menu 
        id='community-menu' 
        anchorEl={anchorC} 
        anchorOrigin={origin} 
        open={openC} 
        onClose={handleCloseC} 
        slotProps={{ list: menuProps.community }}
        transformOrigin={origin2}
      >
        <MenuItem component={Link} to={ROUTES.DISCORD}>Discord</MenuItem>
        <MenuItem component={Link} to={ROUTES.INSTAGRAM}>Instagram</MenuItem>
        <MenuItem component={Link} to={ROUTES.REDDIT}>Reddit</MenuItem>
      </Menu>

      <Menu 
        id='about-menu' 
        anchorEl={anchorA} 
        anchorOrigin={origin} 
        open={openA} 
        onClose={handleCloseA} 
        slotProps={{ list: menuProps.about }}
        transformOrigin={origin2}
      >
        <MenuItem component={Link} to={ROUTES.PRIVACY}>Privacy Policy</MenuItem>
        <MenuItem component={Link} to={ROUTES.TERMS}>Terms & Conditions</MenuItem>
        <MenuItem component={Link} to={ROUTES.WARRANTY}>Warranty</MenuItem>
        <MenuItem component={Link} to={ROUTES.SCPA}>SCPA</MenuItem>
      </Menu>
    </>
  )
}

export default Navlinks