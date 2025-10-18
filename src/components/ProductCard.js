import { useDispatch } from 'react-redux'
import { Card, CardMedia, CardContent, CardActions, IconButton, Stack, Typography } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import { add } from '../hooks/cartSlice'

const styles = {
  card: {
    maxWidth: '100%',
    background: '#000'
  },
  media: {
    width: '250px',
    height: '250px',
    margin: 'auto',
    objectFit: 'cover'
  },
  content: {
    display: 'flex',
    justifyContent: 'center'
  },
  stack: {
    display: 'flex',
    alignItems: 'center'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Card sx={styles.card}>
      <CardMedia image={product.img} title={product.name} sx={styles.media} />
      
      <CardContent sx={styles.content}>
        <Stack direction='column' sx={styles.stack}>
          <Typography variant='h6' color='secondary' gutterBottom>{product.name}</Typography>
          <Typography variant='subtitle1' color='#b29d81'>{product.price_desc}</Typography>
        </Stack>
      </CardContent>

      <CardActions disableSpacing sx={styles.actions}>
        <IconButton color='secondary' onClick={() => dispatch(add(product))}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProductCard