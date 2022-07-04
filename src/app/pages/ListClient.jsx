import React, { useEffect, useState, useMemo } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Dashboard from "../components/Dashboard";


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

function Clients({ clientService, loginService }) {
  const classes = useStyles();

  const [clients, setClients] = useState([]);
  
  useEffect(() => {
    const authenticateUser = async () => {
      const auth = await loginService.login()
      sessionStorage.setItem('token', auth.token)

      clientsGet();
      
    }

    authenticateUser()
    // eslint-disable-next-line
  }, [loginService])

  const defineDashboard = useMemo(() => ({
    list: clients,
    cellTitle: ['Registration Number', 'Name', 'Cellphone', 'Actions'],
    cellsBind: ['registration_number', 'name', 'cellphone'],
    idKey: 'registration_number'
  }), [clients])

  const clientsGet = () => {
    clientService.getClients().then((clients) => setClients(clients));
  }

  const clientDelete = async registration_number => {
    await clientService.deleteClient(registration_number).then((result) => {
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
          <TableContainer component={Paper}>
            <Dashboard
              builder={defineDashboard}
              onEdit={(id) => clientService.updateClient(id)}
              onDelete={clientDelete}
            />
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}

export default Clients;