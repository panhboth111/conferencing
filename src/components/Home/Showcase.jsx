import {Button, Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import wallpaper from "../../resources/images/wallpaper.jpg"
const useStyles = makeStyles({
    root:{
        position:"relative",
        height:800,
        background:`url(${wallpaper}) no-repeat  center/cover`
    },
    overlay:{
        position:"absolute",
        top:0,
        left:0,
        height:"100%",
        width:"100%",
        background:fade("#000",0.6)
    },
    inner:{
        color:"white",
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
        justifyContent:"center",
        height:"100%",
        maxWidth:850,
        margin:"auto",
        padding:5,
        
        
    },
    title:{
        fontWeight:"bold"
    },
    paragraph:{
        lineHeight:2
    },
    button:{
        marginTop:20,
        borderRadius:30
    }
})
const Showcase = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <div className={classes.overlay}>
                <div className={classes.inner}>
                    <Typography className={classes.title} variant="h1">Personal Project</Typography>
                    <Typography className={classes.paragraph} variant="subtitle2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique erat vitae 
                    faucibus commodo. Fusce consectetur auctor condimentum. Quisque suscipit ligula vel faucibus 
                    viverra. Nullam molestie gravida facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique erat vitae 
                    faucibus commodo. Fusce consectetur auctor condimentum. Quisque suscipit ligula vel faucibus 
                    viverra. Nullam molestie gravida facilisis</Typography>
                    <div><Button variant="contained" color="secondary" size="large" className={classes.button} >Get Started</Button></div>
                </div>
            </div>
        </div>
    )
}
export default Showcase