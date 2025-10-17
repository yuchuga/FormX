import heroImg from '../assets/images/X1_Series.gif'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../utils/theme.js'

const styles = {
  box1: {
    background: '#000',
    height: { xxs: '15rem', sm: '25rem', lg: '35rem' }
  },
  img: {
    width: '100%',
  },
  stack1: {
    display: 'flex',
    alignItems: 'flex-end',
    position: 'relative',
    top: { xxs: -20, xs: -40, sm: -70, md: -150 },
    left: { xxs: -30, xs: -40, md: -50 }
  },
  title: {
    color: 'secondary.main',
    fontWeight: 500,
    fontSize: { xxs: 20, sm: 30, lg: 48 }
  },
  text: {
    color: 'secondary.main',
    fontSize: { xxs: 14, sm: 18, lg: 24 }
  },
  button: { 
    color: 'secondary.main'
  }
}

const routes = {
  buy: '/pages/products',
  discuss: 'https://discord.gg/P86qn92eHT',
}

const Hero = () => {
  
  const buttonStyle = useMediaQuery('(max-width:430px)') ? 'small' : 'large';

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.box1}>
        <Box>
          <img src={heroImg} alt='heroImg' style={styles.img} />
        </Box>
        <Stack spacing={1} sx={styles.stack1}>
          <Typography variant='h3' sx={styles.title}>X SERIES</Typography>
          <Typography variant='h6' sx={styles.text}>Ultimate Backpack-able PC Build</Typography>
          <Stack direction='row' spacing={2} sx={styles.stack2}>
            <Button color='inherit' size={buttonStyle} variant='outlined' href={routes.buy} sx={styles.button}>BUY</Button>
            <Button color='inherit' size={buttonStyle} variant='outlined' href={routes.discuss} sx={styles.button}>DISCUSS</Button>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  )
}

export default Hero