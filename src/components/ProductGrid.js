import { Card, CardMedia, Grid, useMediaQuery } from '@mui/material'
import image1 from '../assets/images/p1.jpg'
import image2 from '../assets/images/p2.jpg'
import image3 from '../assets/images/p3.jpg'
import image4 from '../assets/images/p4.jpg'
import image5 from '../assets/images/p5.jpg'
import image6 from '../assets/images/p6.jpg'

const styles = {
  grid: {
    display: 'flex',
    justifyContent: 'center',
    background: '#000',
    height: '37.5rem',
    p: 2,

    '@media (max-width: 430px)': {
      height: '80rem'
    },

    '@media ((min-width: 760px) and (max-width: 1024px))': {
      height: '60rem'
    },
  },
  card: {
    width: 450,
    '@media (max-width: 430px)': {
      width: 350
    },
    '@media ((min-width: 760px) and (max-width: 820px))': {
      maxWidth: 370
    }
  },
}

const ProductGrid = () => {

  const mediaStyle = useMediaQuery('(max-width:430px)') ? '190' : '250'
  
  const imgArray=[image1, image2, image3, image4, image5, image6]

  return (
    <Grid container spacing={2} sx={styles.grid}>
      {imgArray.map((item, i) => (
        <Grid key={i} item xs='auto' sm={6} md='auto' lg={4}>
          <Card sx={styles.card}>
            <CardMedia
              component='img'
              height={mediaStyle}
              image={item}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default ProductGrid