import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
      marginTop: theme.spacing(2)
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
}));