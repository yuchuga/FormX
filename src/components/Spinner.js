import { Box, CircularProgress } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../utils/theme.js'

const styles = {
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#000',
    height: '100vh'
  }
}

const Spinner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.box}>
        <CircularProgress color='secondary' />
      </Box>
    </ThemeProvider>
  )
}

export default Spinner