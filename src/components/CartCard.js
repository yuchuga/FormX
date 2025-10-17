import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Button, ButtonGroup, Card, CardMedia, CardContent, Stack, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { add, decrease } from '../../redux/cartSlice.js'

const styles = {
  card: {
    display: 'flex',
    maxWidth: '100%',
    background: '#000'
  },
  media: {
    width: '100px',
    height: '100px',
    margin: 'auto',
    objectFit: 'cover'
  },
  content: {
    width: '250px',
    height: '125px'
  },
  stack: {
    display: 'flex',
    alignItems: 'flex-start',
    width: '250px',
    height: '90px',
    mb: 1
  },  
  stack2: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: {
    whiteSpace: 'pre-line'
  },
  icon: {
    width: 15,
    height: 15
  }
};

const CartCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Card sx={styles.card}>
      <CardMedia key={product.id} image={product.img} sx={styles.media} />
      <CardContent sx={styles.content}>
        <Stack direction='column' sx={styles.stack}>
          <Typography variant='subtitle1' color='secondary'>{product.name}</Typography>
          <Typography variant='body2' color='secondary' align='left' sx={styles.text}>{product.desc}</Typography>
        </Stack>
        <Stack direction='row' sx={styles.stack2}>
            <ButtonGroup variant='outlined'>
              <Button color='secondary' size='small' onClick={() => dispatch(decrease(product))}>
                <RemoveIcon style={styles.icon}/>
              </Button>
              <Button color='secondary' size='small'>{product.quantity}</Button>
              <Button color='secondary' size='small' onClick={() => dispatch(add(product))}>
                <AddIcon style={styles.icon} />
              </Button>
            </ButtonGroup>
            <Typography variant='subtitle1' color='#b29d81'>${product.price}</Typography>
          </Stack>
      </CardContent>
    </Card>
  );
}

export default CartCard