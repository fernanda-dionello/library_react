import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { REACT_APP_TOKEN } from "../../env_variables";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function UpdateClient() {
  const classes = useStyles();

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://library-website-fullstack.herokuapp.com/client/${id}`, {
      headers: {
        'x-session-token': REACT_APP_TOKEN
      },
    })
      .then(res => res.json())
      .then(
        (result) => {
          setName(result[0].name)
          setCellphone(result[0].cellphone)
        }
      )
  }, [id])

  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'registration_number': id,
      'name': name,
      'cellphone': cellphone,
    }
    fetch(`https://library-website-fullstack.herokuapp.com/client/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
        'x-session-token': REACT_APP_TOKEN
      },
      body: JSON.stringify(data),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result)
        if (result === 'Client updated successfully') {
          window.location.href = '/';
        }
      }
    )
  }

  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          User
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="clientName"
                variant="outlined"
                required
                fullWidth
                id="clientName"
                label="Client Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cellphone"
                label="Cellphone"
                value={cellphone}
                onChange={(e) => setCellphone(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default UpdateClient;