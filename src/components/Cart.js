import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import CircleIcon from '@mui/icons-material/Circle'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import CartCard from './CartCard.js'
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material'
import { getTotal } from '../../redux/cartSlice.js'

const styles = {
  icon: {
    position: 'absolute',
    top: 25,
    left: 22.5,
    width: 15,
    height: 15,
    color: '#b30000'
  },
  box: {
    background: '#000',
    width: '400px',
    height: '100%',
    textAlign: 'center',
    p: 2,
    '@media (max-width: 430px)': {
      width: '300px'
    }
  },
  stack: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  stack2: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    ml: 1,
    width: '380px'
  },
  divider: {
    bgcolor: '#808080',
    mt: 1,
    mb: 4
  }
}

const CartSidebar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const cart = useSelector(state => state.cart)
  const cartProducts = useSelector(state => state.cart.products) //read products state from cart store (array)
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getTotal())
  }, [cart, dispatch]);

  const handleOpen = () => {
    setOpenDrawer(true)
  };

  const handleClose = () => {
    setOpenDrawer(false)
  };

  const renderCart = (cartProducts) => {
    return (
      <div className='cart'>
        {cartProducts?.map((item) => (
          <CartCard key={item.id} product={item} />
        ))}
        <Stack direction='row' sx={styles.stack2}>
          <Typography variant='subtitle1' color='secondary'>SUBTOTAL</Typography>
          <Typography variant='subtitle1' color='#b29d81'>S${cart.totalPrice}</Typography>
        </Stack>
      </div>
    )
  };

  return (
    <>
      <IconButton size='large' color='secondary' aria-label='cart' onClick={handleOpen}>
        <ShoppingBagOutlinedIcon />
        {cartProducts.length > 0 && <CircleIcon style={styles.icon} />}
      </IconButton>

      <Drawer anchor='right' open={openDrawer} onClose={handleClose}>
        <Box sx={styles.box}>
          <Stack direction='row' sx={styles.stack}>
            <Typography variant='h4' color='secondary'>CART</Typography>
            <IconButton size='medium' color='secondary' onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Divider sx={styles.divider} />
          {cartProducts?.length > 0 
            ? renderCart(cartProducts)
            : <Typography variant='subtitle1' align='left' color='secondary'>Your cart is currently empty.</Typography>
          }
        </Box>
      </Drawer>
    </>
  )
}

export default CartSidebar