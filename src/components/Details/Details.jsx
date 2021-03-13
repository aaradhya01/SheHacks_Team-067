import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Bar } from "react-chartjs-2";
import { useTransactions } from "../../useTransactions";

import useStyles from "./styles";

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader
        title={title}
        style={{
          background: "linear-gradient(45deg, #ffdbe6 30%, #cff0ec 70%)",
        }}
      />
      <CardContent>
        <Typography variant="h5">₹{total}</Typography>
        <Bar data={chartData}
          options={{ legend: { display: false, position: 'right' } }} />
      </CardContent>
    </Card>
  );
};

export default Details;
