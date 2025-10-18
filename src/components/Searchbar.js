import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box, Dialog, Grid, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { flexCenter } from '../themes/commonStyles'

const styles = {
  box: {
    display: { xs: 'none', md: 'block' }
  },
  modal: {
    background: '#000',
    color: '#fff',
    height: '40%',
    maxWidth: '100vw',
  },
  grid: {
    ...flexCenter
  },
  text: {
    width: '90%',
    mt: 3,
    ml: 3,
    
    '& .MuiOutlinedInput-root': {
      color: '#fff',
    },
  },
  image: {
    display: 'block',
    height: 50,
    width: 50
  },
  search1: {
    ml: 2
  },
  search2: {
    mt: 3, 
    ml: 2
  },
  close: {
    mt: 3, 
    ml: 1
  },
}

const Img = styled('img')({
  display: 'block',
  width: '150px',
  height: '150px',
  margin: 'auto'
});

const Searchbar = (props) => {
  
  const { placeholder, data } = props
  // console.log('search', props)

  const [filterData, setFilterData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [open, setOpen] = useState(false)

  const handleChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase())
    handleFilter()
  };

  const handleFilter = () => {
    const filteredList = data.filter((item) => item.title.toLowerCase().includes(searchQuery))
    searchQuery !== '' ? setFilterData(filteredList) : setFilterData([])
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setFilterData([])
    setSearchQuery('')
    setOpen(false)
  };

  return (
    <Box class='search-div' sx={styles.box} >
      <IconButton size='large' edge='start' color='inherit' onClick={handleOpen} sx={styles.search1}>
        <SearchIcon />
      </IconButton>
      <Dialog open={open} sx={styles.modal}>
        <AppBar sx={styles.appbar}>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' sx={styles.search2}>
              <SearchIcon />
            </IconButton>
            <TextField
              autoFocus
              placeholder={placeholder}
              value={searchQuery}
              onChange={handleChange}
              sx={styles.text}
            />
            <IconButton size='large' edge='end' color='inherit' onClick={handleClose} sx={styles.close}>
              <CloseIcon />
            </IconButton>
          </Toolbar>
          <Toolbar>
          {filterData?.map((item, index) => {
            return (
              <Grid container spacing={2} direction='row' key={index} sx={styles.grid}>
                <Grid item xs={2}>
                  <Img src={item.img} alt='parts' />
                  <Typography variant='subtitle1'>{item.title}</Typography>
                </Grid>
              </Grid>
            );
          })}
          </Toolbar>
        </AppBar>
      </Dialog>
    </Box>
  )
}

export default Searchbar