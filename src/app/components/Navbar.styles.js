import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "inherit"
    },
    title: {
        flexGrow: 1,
    },
    navlink:{
        color: '#fff',
        textDecoration: 'none'
    },
    toolbar:{
        background: "#4095be"
    }
}));

