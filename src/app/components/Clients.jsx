import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Link } from "react-router-dom";
import { REACT_APP_TOKEN } from '../../env_variables'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function Clients() {
  const classes = useStyles();

  const [clients, setClients] = useState([]);
//   const [token, setToken] = useState();

  useEffect(() => {
    clientsGet()
  }, [])

//   const login = () => {
//     var data = {
//         'username':'fernanda',
//         'password': 'password123',
//       }
//       fetch('https://library-website-fullstack.herokuapp.com/login', {
//         method: 'POST',
//         headers: {
//           Accept: 'application/form-data',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       })
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setToken(result.token)
//         }
//       )
//   }

  const clientsGet = () => {
    fetch("https://library-website-fullstack.herokuapp.com/client", {
        headers: {
            'x-session-token': REACT_APP_TOKEN
        }, 
      })
      .then(res => res.json())
      .then(
        (result) => {
          setClients(result)
        }
      )
  }
  

  const UpdateUser = registration_number => {
    window.location = '/update/'+registration_number
  }

  const UserDelete = registration_number => {
    fetch(`https://library-website-fullstack.herokuapp.com/client/${registration_number}`, {
      method: 'DELETE',
      headers: {
        'x-session-token': REACT_APP_TOKEN
    },
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result)
        if (result === 'Client deleted successfully') {
          clientsGet();
        }
      }
    )
  }

  return (
    <div className={classes.root}>
      <Container className={classes.container} maxWidth="lg">    
        <Paper className={classes.paper}>
          <Box display="flex">
            <Box flexGrow={1}>
              <Typography component="h2" variant="h6" color="primary" gutterBottom>
                CLIENTS
              </Typography>
            </Box>
            <Box>
              <Link to="/create">
                <Button variant="contained" color="primary">
                  CREATE
                </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Registration Number</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Cellphone</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((user) => (
                <TableRow key={user.registration_number}>
                  <TableCell align="center">{user.registration_number}</TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.cellphone}</TableCell>
                  <TableCell align="center">
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                      <Button onClick={() => UpdateUser(user.registration_number)}>Edit</Button>
                      <Button onClick={() => UserDelete(user.registration_number)}>Del</Button>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </Paper>
      </Container>
    </div>
    
  );
}

export default Clients;