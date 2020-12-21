import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    portfolio: {
        backgroundColor: '#8D99AE',
    },
    title: {
        color: "#000",
        textAlign: "center",
        fontWeight: "bold",
    },
    portfolioWorks: {
        textAlign: 'center',
    },
    portfolioWork: {
        width: '40%',
        height: '400px',
        display: 'inline-block',
        margin: '0 2%'
    },
    card: {
        maxWidth: 500,
        minWidth: 300,
    },
    media: {
        height: 300,
        minHeight: 140,
        width: '100%',
    },
});

export default function Porfolio(props) {
    const classes = useStyles();
    let resumeData = props.resumeData;
    return (
        <section id="portfolio" className={classes.portfolio}>
            <Box>
                <Typography className={classes.title} variant="h2" component="p">
                    Check Out Some of My Works.
                </Typography>
                <Box className={classes.portfolioWorks}>
                    {
                        resumeData.portfolio && resumeData.portfolio.map((item) => {
                            return (
                                <Box m={1} p={1}  
                                display="flex"
                                flexWrap="nowrap" 
                                alignContent="flex-start"
                                className={classes.portfolioWork}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardMedia
                                                className={classes.media}
                                                image={process.env.PUBLIC_URL + item.imgurl}
                                                title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h4" component="h2">
                                                    {item.name}
                                                </Typography>
                                                <Typography variant="body2" color="textPrimary" component="h5">
                                                    {item.description}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box>
        </section>
    );
}