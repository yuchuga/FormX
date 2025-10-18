import HeroImg from '../assets/images/X1_Series.gif'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import { flexEnd2 } from '../themes/commonStyles'
import { ROUTES } from '../utils/constants'

const styles = {
  box1: {
    background: '#000',
    height: { xs: '15rem', sm: '25rem', lg: '35rem' }
  },
  img: {
    width: '100%',
  },
  stack1: {
    ...flexEnd2,
    position: 'relative',
    top: { xs: -40, sm: -70, md: -150 },
    left: { xs: -40, md: -50 }
  },
  title: {
    color: 'secondary.main',
    fontWeight: 500,
    fontSize: { sm: 30, lg: 50 }
  },
  text: {
    color: 'secondary.main',
    fontSize: { sm: 18, lg: 24 }
  },
  button: { 
    color: 'secondary.main'
  }
};

const Hero = () => {
  
  const buttonStyle = useMediaQuery('(max-width:430px)') ? 'small' : 'large';

  return (
    <Box sx={styles.box1}>
      <Box>
        <img src={HeroImg} alt='heroImg' style={styles.img} />
      </Box>
      <Stack spacing={1} sx={styles.stack1}>
        <Typography variant='h3' sx={styles.title}>X SERIES</Typography>
        <Typography variant='h6' sx={styles.text}>Ultimate Backpackable PC Build</Typography>
        <Stack>
          <Button color='inherit' size={buttonStyle} variant='outlined' href={ROUTES.BUY} sx={styles.button}>BUY</Button>
          <Button color='inherit' size={buttonStyle} variant='outlined' href={ROUTES.DISCUSS} sx={styles.button}>DISCUSS</Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Hero