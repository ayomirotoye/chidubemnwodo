import { Avatar, Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import { LockOutlined } from '@mui/icons-material'


function LogIn() {
  return (
    <Container component="main" maxWidth="xs">

        <Box
          sx={{

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent:'center',
            minHeight:'100vh'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in to continue
          </Typography>
          <Box sx={{ mt: 1 }}>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            {/* <Grid container>

              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>

      </Container>
  )
}

export default LogIn