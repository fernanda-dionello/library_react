import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router-dom';
import { useStyles } from './UpdateClient.styles';

function UpdateClient() {
  const updateStyles = useStyles();

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://library-website-fullstack.herokuapp.com/client/${id}`, {
      headers: {
        'x-session-token':sessionStorage.getItem('token')
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
        'x-session-token': sessionStorage.getItem('token')
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
    <Container className={updateStyles.container} maxWidth="xs">
      <div className={updateStyles.paper}>
        <Typography className={updateStyles.client} component="h1" variant="h5">
          Client
        </Typography>
        <form className={updateStyles.form} onSubmit={handleSubmit}>
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
            className={updateStyles.submit}
          >
            Update
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default UpdateClient;