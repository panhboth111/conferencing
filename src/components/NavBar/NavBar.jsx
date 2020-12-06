import {AppBar,Toolbar, Typography,Button} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow:1,
  },
  links:{
      textDecoration:"none",
  },
  navitems:{
      color:"black",
      marginRight:30
  },
}));

const NavBar = () => {
    const classes = useStyles()
    const routeItems = [{title:"Home",route:"/"},{title:"About",route:"/"}]
    
    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        353 Conferencing
                    </Typography>
                    {routeItems.map((item,index) => <NavLink to={item.route} className={classes.links} ><Typography variant="h6" className={classes.navitems} key={index}>{item.title}</Typography></NavLink>)}
                    <Button color="secondary" variant="contained">Login</Button>
                </Toolbar>
            </AppBar>
      </div>
    )
}

export default NavBar