import {Grid, Typography} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import hangout from "../../resources/images/hangout.jpg"

const useStyles = makeStyles({
    root:{
        padding:100
    },
    container:{
        justifyContent:"center",
        alignItems:"center"
    },
    textGrid:{
        textAlign:"center"
    },
    title:{
        fontWeight:"bold"
    },
    paragraph:{
        marginTop:30,
        lineHeight:2,

    }
})

const Showcase2 = () => {
    const classes = useStyles()
    return(
        <div className={classes.root}>
            <Grid className={classes.container} container>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <img src={hangout} alt=""/>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6} className={classes.textGrid}>
                    <Typography variant="h3" className={classes.title} >Let's hangout!</Typography>
                    <Typography className={classes.paragraph} >Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Phasellus tristique erat vitae faucibus commodo. Fusce consectetur 
                    auctor condimentum. Quisque suscipit ligula vel faucibus viverra. Nullam molestie 
                    gravida facilisis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus 
                    tristique erat vitae faucibus commodo. Fusce consectetur auctor condimentum. Quisque 
                    suscipit ligula vel faucibus viverra. Nullam molestie gravida facilisis</Typography>
                </Grid>
            </Grid>
        </div>
    )
}
export default Showcase2