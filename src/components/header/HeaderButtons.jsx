import React from 'react';
import{Box, Button, makeStyles, Typography, Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const useStyle= makeStyles({
    login: {
        background: '#FFFFFF',
        color: '#219f94',
        textTransform:'none',
        fontWeight:600,
        borderRadius: 2,
        padding: '5px 40px' 
    },
    purva: {
        marginLeft: '0 7% 0 auto',
        display: 'flex',
        '& > *':{
            marginRight: 50,
            alignItems:'center',
            textDecoration:'none',
            color: '#fff'
            
        }
    },
    container: {
        display: 'flex',
        textDecoration:'none',
        color: '#fff'
    }

})

const HeaderButtons = () => {
     const classes = useStyle();
     return(
         <Box className={classes.purva}>
             <Link to='/login' ><Button variant="contained" className={classes.login}>Login</Button></Link>
             <Typography style={{marginTop: 5}}>More</Typography>
             <Link to='/cart' className={classes.container}>
                 <Badge badgeContent={4} color="secondary">
                     <ShoppingCart />
                 </Badge>
                 <Typography  style={{marginLeft: 10}}>Cart</Typography>
             </Link>
         </Box>
        

     )
}

export default HeaderButtons;