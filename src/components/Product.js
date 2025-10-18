import ProductCard from './ProductCard'
import { Grid, Stack, Typography } from '@mui/material'
import { PCData } from '../utils/data'

const styles = {
  grid: {
    ...flexJustifyCenter,
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
        {PCData.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Item>
              <ProductCard product={item} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Products