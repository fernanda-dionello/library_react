import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        overflowX: "hidden"
    },
    headerItem: {
        textAlign: "center",
        color: "#fff",
        textTransform: "capitalize",
        fontSize: 16,
        letterSpacing: 1,
        backgroundColor: "#4095be"
    },
    items: {
        textAlign: "center",
        color: "#5d5e60"
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    createLink: {
        margin: "1% 3%",
        textDecoration: "none"
    },
    createButton: {
        backgroundColor: "#4095be",
        color: "#fff"
    },
    clientsTitle: {
        letterSpacing: "1px",
        margin: "1% 3%",
        color: "#5d5e60"
    },
    grid: {
        overflowX: "auto"
    }
}));