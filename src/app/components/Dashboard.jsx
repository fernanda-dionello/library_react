import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles, theme } from './Dashboard.styles'
import { ThemeProvider } from "@material-ui/core";

/**
 * @param {Object} [list: any[], idKey: string, cellTitle: string[], cellsBind: string[]] builder
 * @param {Function} onEdit
 * @param {Function} onDelete
 * @returns JSX.Element
 */

const Dashboard = ({ builder, onEdit, onDelete }) => {
  const dashboard = useStyles();
  return (
    <div className={dashboard.container}>
      <Box className={dashboard.header} flexGrow={1}>
        <Typography className={dashboard.clientsTitle} component="h2" variant="h6" color="primary" gutterBottom>
          CLIENTS
        </Typography>
        <Link className={dashboard.createLink} to="/create">
          <Button className={dashboard.createButton} variant="contained">
            CREATE
          </Button>
        </Link>
      </Box>
      <Grid container className={dashboard.grid}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {builder.cellTitle?.map(title => <TableCell className={dashboard.headerItem} key={title}>{title}</TableCell>)}
            </TableRow>
          </TableHead>
          <TableBody>
            {builder.list?.map((item, index) => (
              <TableRow key={index}>
                {builder.cellsBind?.map(cell => <TableCell className={dashboard.items} key={item[cell]}>{item[cell]}</TableCell>)}
                <TableCell align="center">
                  <ThemeProvider theme={theme}>
                    <ButtonGroup color={theme.primary} aria-label="outlined primary button group">
                      <Button onClick={() => onEdit(item[builder.idKey])}>Edit</Button>
                      <Button onClick={() => onDelete(item[builder.idKey])}>Del</Button>
                    </ButtonGroup>
                  </ThemeProvider>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </div>
  )
}

export default Dashboard