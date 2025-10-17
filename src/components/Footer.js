import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaDiscord, FaInstagram } from "react-icons/fa"
import { YouTube } from '@mui/icons-material'
import { Container, IconButton, Grid, Typography } from '@mui/material'
import { ThemeProvider, styled } from '@mui/material/styles'
import { theme } from '../utils/theme.js'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    background: '#000',
    color: '#fff',
    height: '5rem',
    '@media (max-width: 430px)': {
      height: '7.5rem'
    }
  },
  grid: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 430px)': {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  copyright: {
    display: 'flex',
    alignItems: 'center'
  }, 
  social: {
    '@media (max-width: 430px)': {
      pb: 2
    }
  }
}

const routes = {
  discord: 'https://discord.gg/T9HJsdjv',
  instagram: 'https://www.instagram.com/formdworks/',
  youtube: 'https://www.youtube.com/watch?v=RcLdVLr3Oy8',
}

const Img = styled('img')({
  display: 'block',
  width: '40px',
  height: '40px',
  margin: 'auto'
});

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth='xl' sx={styles.container}>
      <Grid container sx={styles.grid}>
        <Grid item sx={styles.logo}>
         <Img src={logo} alt="logo" /> 
         <Typography variant='subtitle1'>FORMX</Typography>
        </Grid>

        <Grid item sx={styles.copyright}>
          <Typography variant='subtitle1'>&copy; 2024 FormX. All Rights Reserved.</Typography>
        </Grid>

        <Grid item sx={styles.social}>
          <Link to={routes.discord}>
            <IconButton size='large' color='secondary'>
              <FaDiscord />
            </IconButton>
          </Link>
          <Link to={routes.instagram}>
            <IconButton size='large' color='secondary'>
              <FaInstagram />
            </IconButton>
          </Link>
          <Link to={routes.youtube}>
            <IconButton size='large' color='secondary'>
              <YouTube />
            </IconButton>
          </Link>
        </Grid>
      </Grid>
    </Container>
    </ThemeProvider>
  )
}

export default Footer