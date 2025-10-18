import { Link } from 'react-router-dom'
import { Container, IconButton, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { flexAlignCenter, flexBetween, flexColumnCenter2 } from '../themes/commonStyles'
import { ROUTES } from '../utils/constants'
import FormxLogo from '../assets/images/Formx_Logo.png'
import DiscordIcon from '../assets/images/discord.png'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const styles = {
  container: {
    ...flexAlignCenter,
    background: '#000',
    color: '#fff',
    height: '5rem',
    '@media (max-width: 430px)': {
      height: '7.5rem'
    }
  },
  grid: {
    ...flexBetween,
    '@media (max-width: 430px)': {
      ...flexColumnCenter2
    }
  },
  logo: {
    ...flexAlignCenter
  },
  copyright: {
    ...flexAlignCenter
  }, 
  social: {
    '@media (max-width: 430px)': {
      pb: 2
    }
  }
};

const Img = styled('img')({
  display: 'block',
  width: '40px',
  height: '40px',
  margin: 'auto'
});

const Footer = () => {
  return (
    <Container maxWidth='xl' sx={styles.container}>
      <Grid container sx={styles.grid}>
        <Grid sx={styles.logo}>
          <Item>
            <Img src={FormxLogo} alt="formx-logo" /> 
            <Typography variant='subtitle1'>FORMX</Typography>
         </Item>
        </Grid>

        <Grid sx={styles.copyright}>
          <Item>
            <Typography variant='subtitle1'>&copy; 2025 FormX. All Rights Reserved.</Typography>
          </Item>
        </Grid>

        <Grid sx={styles.social}>
          <Item>
            <Link to={ROUTES.DISCORD}>
              <IconButton size='large'><DiscordIcon /></IconButton>
            </Link>
            <Link to={ROUTES.INSTAGRAM}>
              <IconButton size='large' color='secondary'><InstagramIcon /></IconButton>
            </Link>
            <Link to={ROUTES.YOUTUBE}>
              <IconButton size='large' color='secondary'><YouTubeIcon /></IconButton>
            </Link>
          </Item>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Footer