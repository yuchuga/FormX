import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Menu, MenuItem, Stack } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const routes = {
  home: '/',
  product: '/collections/all',
  formX: '/products/x1',
  formN: '/products/n1',
  about: '/pages/about',
  community: '/pages/community',
  privacy: '/pages/privacy',
  scpa: '/pages/scpa-opt-out',
  support: '/pages/support',
  terms: '/pages/terms',
  warranty: '/pages/warranty',
  discord: 'https://discord.gg/P86qn92eHT',
  instagram: 'https://www.instagram.com/formdworks/',
  reddit: 'https://www.reddit.com/r/FormD/?rdt=47020'
};

const styles = {
  stack: {
    display: { xs: 'none', sm: 'none', md: 'flex' },
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

  const handleClickP = (e) => {
    setAnchorP(e.currentTarget)
  };

  const handleClickC = (e) => {
    setAnchorC(e.currentTarget)
  };

  const handleClickA = (e) => {
    setAnchorA(e.currentTarget)
  };
  
  const handleCloseP = () => {
    setAnchorP(null)
  };

  const handleCloseC = () => {
    setAnchorC(null)
  };

  const handleCloseA = () => {
    setAnchorA(null)
  };

  return (
    <>
      <Stack direction='row' spacing={3} sx={styles.stack}>
        <Button
          aria-controls={openP ? 'product-menu' : undefined}
          aria-expanded={openP ? 'true' : undefined}
          aria-haspopup='true' 
          color='inherit' 
          id='product-btn'
          onClick={handleClickP}
          sx={styles.button} 
          endIcon={<KeyboardArrowDownIcon/>}
        >
          <NavLink to={routes.product} style={styles.nav}>
            PRODUCT 
          </NavLink>
        </Button>

        <Button 
          aria-controls={openC ? 'community-menu' : undefined}
          aria-expanded={openC ? 'true' : undefined}
          aria-haspopup='true' 
          color='inherit' 
          id='community-btn'
          onClick={handleClickC}
          sx={styles.button}
          endIcon={<KeyboardArrowDownIcon/>}
        >
          <NavLink to={routes.community} style={styles.nav}>
            COMMUNITY
          </NavLink>
        </Button>

        <Button color='inherit' href={routes.home} sx={styles.button.logo}>FORMX </Button>
        <Button color='inherit' href={routes.support} sx={styles.button}>SUPPORT</Button>
        
        <Button 
          aria-controls={openA ? 'about-menu' : undefined}
          aria-expanded={openA ? 'true' : undefined}
          aria-haspopup='true' 
          color='inherit'
          id='about-btn'
          onClick={handleClickA} 
          sx={styles.button}
          endIcon={<KeyboardArrowDownIcon/>}
        >
          <NavLink to={routes.about} style={styles.nav}>
            ABOUT
          </NavLink>
        </Button>
      </Stack>

      {/* Dropdown */}
      <Menu 
        id='product-menu' 
        anchorEl={anchorP} 
        anchorOrigin={origin} 
        open={openP} 
        onClose={handleCloseP} 
        MenuListProps={menuProps.product} 
        transformOrigin={origin2} 
      >
        <MenuItem component={Link} to={routes.formX}>X Series</MenuItem>
        <MenuItem component={Link} to={routes.formN}>N Series</MenuItem>
      </Menu>

      <Menu 
        id='community-menu' 
        anchorEl={anchorC} 
        anchorOrigin={origin} 
        open={openC} 
        onClose={handleCloseC} 
        MenuListProps={menuProps.community} 
        transformOrigin={origin2}
      >
        <MenuItem component={Link} to={routes.discord}>Discord</MenuItem>
        <MenuItem component={Link} to={routes.instagram}>Instagram</MenuItem>
        <MenuItem component={Link} to={routes.reddit}>Reddit</MenuItem>
      </Menu>

      <Menu 
        id='about-menu' 
        anchorEl={anchorA} 
        anchorOrigin={origin} 
        open={openA} 
        onClose={handleCloseA} 
        MenuListProps={menuProps.about} 
        transformOrigin={origin2}
      >
        <MenuItem component={Link} to={routes.privacy}>Privacy Policy</MenuItem>
        <MenuItem component={Link} to={routes.terms}>Terms & Conditions</MenuItem>
        <MenuItem component={Link} to={routes.warranty}>Warranty</MenuItem>
        <MenuItem component={Link} to={routes.scpa}>SCPA</MenuItem>
      </Menu>
    </>
  )
}

export default Navlinks