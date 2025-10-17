import ProductCard from './ProductCard'
import { Grid, Stack, Typography } from '@mui/material'
import { sample } from '../../redux/search'

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
    background: '#000',
  },
  text: {
    maxWidth: '100%',
    background: '#9f8561'
  }
};

const Products = () => {

  return (
    <div>
      <Stack>
        <Typography variant='h6' color='#fff' align='center' sx={styles.text}>X Series - ALL</Typography>
      </Stack>
      <Grid container spacing={4} sx={styles.grid}>
        {sample.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <ProductCard product={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products