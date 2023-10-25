import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Grid, Card, CardContent } from "@mui/material";
import { datas } from "../Data";
export const Colors = () => {
  const [data, setData] = useState([]);
  const [clr, setClr] = useState(datas[0]);

  const handleChange = (optSal) => {
    setClr(optSal);
  };

  useEffect(() => {
    setData([...data, clr]);
  }, [clr]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Select options={datas} onChange={handleChange} />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={12}>
              <Card>
                <CardContent sx={{ bgcolor: item.label, height: 200 }}></CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
