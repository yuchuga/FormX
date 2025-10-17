import * as Utils from '../utils/constants.js'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { API } from 'aws-amplify'
import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../utils/theme.js'

const styles = {
  container: {
    mt: -5
  },
  stack: {
    minHeight: '100vh',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 500,
    textAlign: 'center',
    mb: 2
  }, 
  text: {
    '& .MuiInputLabel-root': {
      color: '#fff',
      '&.Mui-focused': {
        color: '#fff',
      }
    },
    '& .MuiOutlinedInput-root': {
      color: '#fff',
      '& > fieldset': {
        border: '1px solid #fff',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #fff',
      },
      '&:hover fieldset': {
        border: '1px solid #fff',
      },
    },
    '& .MuiFormHelperText-root': {
      ml: 0,
    }
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
  
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  
  const [state] = useState(initialValues);
  const navigate = useNavigate();

  const createAccount = async (values, data) => {
    try {
      await API.post(Utils.FORM_API, '/webform/login', {
        body: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password
        }
      })
      .then(result => {
        if (result && result.body) {
          data = JSON.parse(result.body)
          console.log('statusCode: 200', data);
        }
      })
    } catch (error) {
      console.log('statusCode: 404', error);
    }
  }

  const handleSignUp = async () => {
    if (isValid) {
      await createAccount()
      navigate(Utils.LOGIN_URL)
    }
  }

  const onSubmit = (data) => {
    console.log('onSubmit', data)
  }

  const onError = (errors) => {
    console.log(errors);
  }

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: state
  });

  return (
     <ThemeProvider theme={theme}>
      <div style={{ background: '#000' }}>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Container maxWidth='sm' sx={styles.container}>
            <Stack direction='column' spacing={3} sx={styles.stack}>
              <Typography sx={styles.title}>CREATE ACCOUNT</Typography>
                <TextField 
                  fullWidth 
                  label='First Name'
                  placeholder='Enter your first name' 
                  variant='outlined' 
                  sx={styles.text}
                  {...register('firstName', {
                    required: 'Required',
                    pattern: {
                      value: Utils.NAME_REGEX,
                      message: Utils.FIRSTNAME_ERROR
                    }
                  })}
                  error={!!errors?.firstName} 
                  helperText={errors?.firstName && errors.firstName.message}
                />

                <TextField 
                  fullWidth 
                  label='Last Name' 
                  placeholder='Enter your last name' 
                  variant='outlined' 
                  sx={styles.text}
                  {...register('lastName', {
                    required: 'Required',
                    pattern: {
                      value: Utils.NAME_REGEX,
                      message: Utils.LASTNAME_ERROR
                    }
                  })}
                  error={!!errors?.lastName} 
                  helperText={errors?.lastName && errors.lastName.message}
                />

                <TextField 
                  fullWidth 
                  label='Email' 
                  placeholder='Enter your email'
                  variant='outlined' 
                  sx={styles.text}
                  {...register('email', {
                    required: 'Required',
                    pattern: {
                      value: Utils.EMAIL_REGEX,
                      message: Utils.EMAIL_ERROR
                    }
                  })}
                  error={!!errors?.email} 
                  helperText={errors?.email && errors.email.message}
                />

                <TextField 
                  fullWidth
                  label='Password' 
                  placeholder='Enter your password'
                  variant='outlined'
                  sx={styles.text}
                  {...register('password', {
                    required: 'Required',
                    pattern: {
                      value: Utils.PASSWORD_REGEX,
                      message: Utils.PASSWORD_ERROR
                    }
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password && errors.password.message}
                />

                <Button 
                  fullWidth
                  type='submit'
                  size='large' 
                  variant='contained'
                  onClick={handleSignUp} 
                  sx={styles.button}
                >
                  CREATE
                </Button>
            </Stack>
          </Container>
        </form>
      </div>
    </ThemeProvider>
  )
}

export default Signup