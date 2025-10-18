import { API } from 'aws-amplify'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from 'react-hook-form'
import { Button, Container, TextField, Typography } from '@mui/material'
import * as Utils from '../utils/constants.js'

const styles = {
  container: {
    ...flexCenter,
    flexDirection: 'column',
    height: '100vh',
    mb: 5,
  },
  title: {
    color: '#fff',
    mb: 2
  },
  button: {
    background: '#9f8561',
    height: '3rem',
    '&:hover': {
      background: '#9f8561',
    }
  },
}

const Signup = () => {
  
  const navigate = useNavigate()

  const createAccount = async (data) => {
    try {
      await API.post(Utils.ENDPOINTS.SIGNUP, data)
      .then(result => {
        if (result && result.body) {
          const response = JSON.parse(result.body)
          console.log('SIGNUP API', response)
        }
      })
    } catch (e) {
      console.log(e)
    }
  };

  const onSubmit = async (data) => {
    console.log('onSubmit', data)
    await createAccount(data)
    navigate(Utils.ROUTES.LOGIN_URL)
  };

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  });

  return (
    <div style={{ background: '#000' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxWidth='xl' sx={styles.container}>
          <Typography ariant='h4' align='center' gutterBottom sx={styles.title}>CREATE ACCOUNT</Typography>
            
            <Controller
              name='firstName'
              control={control}
              rules={{ 
                required: 'First Name is required',
                pattern: {
                  value: Utils.NAME_REGEX,
                  message: Utils.NAME_ERROR,
                }
              }}
              render={({ field }) => (
                <TextField 
                  {...field}
                  fullWidth 
                  label='First Name'
                  margin='normal'
                  error={!!errors.firstName} 
                  helperText={errors.firstName?.message}
                  sx={styles.text}
                />
              )}
            />

            <Controller
              name='lastName'
              control={control}
              rules={{ 
                required: 'Last Name is required',
                pattern: {
                  value: Utils.NAME_REGEX,
                  message: Utils.NAME_ERROR,
                }
              }}
              render={({ field }) => (
                <TextField 
                  {...field}
                  fullWidth 
                  label='Last Name'  
                  error={!!errors.lastName} 
                  helperText={errors.lastName?.message}
                  sx={styles.text}
                />
              )}
            />

            <Controller
              name='email'
              control={control}
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: Utils.EMAIL_REGEX,
                  message: Utils.EMAIL_ERROR,
                }
                }}
              render={({ field }) => (
                <TextField   
                  {...field}
                  fullWidth 
                  label='Email' 
                  error={!!errors.email} 
                  helperText={errors.email?.message}
                  sx={styles.text}
                />
              )}
            />

            <Controller
              name='password'
              control={control}
              rules={{ 
                required: 'Password is required',
                pattern: {
                  value: Utils.PASSWORD_REGEX,
                  message: Utils.PASSWORD_ERROR,
                }
              }}
              render={({ field }) => (
                <TextField 
                  {...field}
                  fullWidth
                  label='Password' 
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  sx={styles.text}
                />
              )}
            />

            <Button fullWidth type='submit' size='large' sx={styles.button}>
              CREATE
            </Button>
        </Container>
      </form>
    </div>
  )
}

export default Signup