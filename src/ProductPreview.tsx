import React from 'react'
import styles from './ProductPreview.module.scss'
import { Grid , Typography , Paper , ButtonBase, getInputAdornmentUtilityClass } from '@mui/material';

function ProductPreview(props:{img: string, header: string, price: number, id: string, sellCount: number}) {

    function NumberToString(inputNumber : number){
        if (inputNumber >= 1000000){
            return (inputNumber/1000000).toFixed(1) + "M"
        }
        else if(inputNumber >= 1000){
            return (inputNumber / 1000).toFixed(1) + "k"
        }
        else{
            return inputNumber.toString();
        }
    }

    function addCommasToNumber(number) {
        let numString = number.toString();
        numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return numString;
    }

    return (
        <>
        <ButtonBase>
            <Paper sx={{p:1 , margin:'auto' , maxWidth:180 , flexGrow: 1}}>
                <Grid container>
                    <Grid item xs={12}>
                        <img className={styles.img} alt="ProductPreview" src={props.img}></img> 
                    </Grid>
                    <Grid item sx={{height: "auto"}}>
                        <div className="overflow-hidden m-1">
                            <p className="line-clamp-2">
                                {props.header}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} container>
                        <Grid item xs>
                            <Typography variant='subtitle2' align='left' className=' text-teal-300' noWrap>
                                { "$" + addCommasToNumber(props.price)}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant='subtitle2' align='right' color={"#A7A7A7"} noWrap>
                                {"已售出" + NumberToString(props.sellCount)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </ButtonBase>
        </>
    )
}

export default ProductPreview