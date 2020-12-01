import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 300,
    },
    media: {
        height: 300,
        minHeight:140,
    },
});

export default function Porfolio(props) {

    const classes = useStyles();

    let resumeData = props.resumeData;

    return (
        <section id="portfolio" className="portfolio">
            <div className="row">
                <div className="title">Check Out Some of My Works.</div>
                <div className="portfolio_works">
                    {
                        
                        resumeData.portfolio && resumeData.portfolio.map((item) => {
                            return (
                                <Box m={1} p={1} className="portfolio-work">
                                <Card className={classes.root}>
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
                </div>
            </div>
        </section>
    );
}