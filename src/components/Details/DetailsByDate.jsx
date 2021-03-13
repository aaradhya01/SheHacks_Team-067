import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import useStyles from './styles';
import { useTransactionsByDate } from '../../useTransactions';
import { Pie } from 'react-chartjs-2';

function DetailsByDate({ title }) {
    const { total, chartData } = useTransactionsByDate(title);
    const classes = useStyles();
    return (
        <Card className={title === 'Income' ? classes.income : classes.expense} >
            <CardHeader title={title} />
            <CardContent>
                <Typography className={classes.pos} color="textPrimary">
                    Today's
                </Typography>
                <Typography variant="h5">₹{total}</Typography>
                <Pie data={chartData} />
            </CardContent>
        </Card >
    )
}

export default DetailsByDate;