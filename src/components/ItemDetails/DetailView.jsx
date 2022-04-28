import React, {  useEffect } from 'react';
// import React, { useState, useEffect } from 'react';
import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
// import { Box, Typography, makeStyles, CircularProgress, Button, Grid } from '@material-ui/core';
import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
// import { getProductById } from '../../service/api';
import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../../redux/actions/productAction.js';

const useStyles = makeStyles(theme => ({
    component: {
        marginTop: 55,
        background: '#F2F2F2'
    },
    container: {
        background: '#FFFFFF',
        // margin: '0 80px',
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            margin: 0
        }
    },
    rightContainer: {
        marginTop: 50,
        '& > *': {
            marginTop: 10
        }
    },
    price: {
        fontSize: 28
    },
    smallText: {
        fontSize: 14,
    },
    greyTextColor: {
        color: '#878787'
    }
}));

const data = {
    id: '',
    url: '',
    detailUrl: '',
    title: {
        shortTitle: '',
        longTitle: '',
    },
    price: {
        mrp: 0,
        cost: 0,
        discount: ''
    },
    description: '',
    discount: '',
    tagline: ''
};

const DetailView = ({  match }) => {
    const classes = useStyles();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    // const [ product, setProduct ] = useState(data);
    // const [ loading, setLoading ] = useState(false);
    

    // const [ quantity, setQuantity ] = useState(1);

    const productDetails = useSelector(state => state.getProductDetails);
    const { loading, product } = productDetails;

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        if (product && Number(id) !== product.id)
            dispatch(getProductDetails(Number(id)));
    }, [dispatch, product, match, loading, id]);

    

    // useEffect(() => {
    //     getProductValues();
    // }, []);

    // const getProductValues = async () => {
    //     setLoading(true);
    //     const response = await getProductById(id);
    //     console.log(response.data);
    //     setProduct(response.data);
    //     setLoading(false);
    // }

    return (
        <Box className={classes.component}>
            <Box></Box>
            {product && Object.keys(product).length &&
                <Grid container className={classes.container}>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8} xs={12} className={classes.rightContainer}>
                        <Typography>{product.title.longTitle}</Typography>
                        <Typography className={clsx(classes.greyTextColor, classes.smallText)} style={{ marginTop: 5 }}>
                            8 Ratings & 1 Reviews
                            <span><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt="Purva" /></span>
                        </Typography>
                        <Typography>
                            <span className={classes.price}>₹{product.price.cost}</span>&nbsp;&nbsp;&nbsp;
                            <span className={classes.greyTextColor}><strike>₹{product.price.mrp}</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>{product.price.discount} off</span>
                        </Typography>
                        <ProductDetail product={product} />
                    </Grid>
                </Grid>
            }
        </Box>
    )
}

export default DetailView;