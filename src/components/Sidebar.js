import { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'

const styles = {
  menuIcon: {
    display: { xs: 'block', md: 'none' }
  },
  box: {
    background: '#000',
    color: '#fff',
    height: '100%',
    width: { xs: 250, sm: 350 },
    p: 2,
  },
  stack: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  divider: {
    bgcolor: '#808080',
    mt: 1,
    mb: 1
  },
}

const Sidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpen = () => {
    setOpenDrawer(true)
  };

  const handleClose = () => {
    setOpenDrawer(false)
  };

  return (
    <>
      <IconButton size='large' edge='start' color='inherit' onClick={handleOpen}>
        <MenuIcon sx={styles.menuIcon} />
      </IconButton>
      <Drawer anchor='left' open={openDrawer} onClose={handleClose}>
        <Box sx={styles.box}>
          <Stack sx={styles.stack}>
            <IconButton size='large' color='secondary' onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={styles.divider} />
          <Typography variant='subtitle1'>PRODUCT</Typography>
          <Divider sx={styles.divider} />
          <Typography variant='subtitle1'>COMMUNITY</Typography>
          <Divider sx={styles.divider} />
          <Typography variant='subtitle1'>SUPPORT</Typography>
          <Divider sx={styles.divider} />
          <Typography variant='subtitle1'>ABOUT</Typography>
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar