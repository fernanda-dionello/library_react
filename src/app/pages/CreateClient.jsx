import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './CreateClient.styles';

function CreateClient() {
  const createStyle = useStyles();
  
  const handleSubmit = event => {
    event.preventDefault();
    var data = {
      'name': name,
      'cellphone': cellphone,
    }
    fetch('https://library-website-fullstack.herokuapp.com/client', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
        'x-session-token': sessionStorage.getItem('token')
      },
      body: JSON.stringify([data]),
    })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result)
        if (result === 'Client(s) created successfully') {
          window.location.href = '/';
        }
      }
    )
  }

  const [name, setName] = useState('');
  const [cellphone, setCellphone] = useState('');
  return (
    <Container className={createStyle.container} maxWidth="xs">
      <div className={createStyle.paper}>
        <Typography variant="h5" className={createStyle.clientTitle}>
          Clients
        </Typography>
        <form className={createStyle.form} onSubmit={handleSubmit}>
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
                onChange={(e) => setCellphone(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={createStyle.submit}
          >
            Create
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default CreateClient;