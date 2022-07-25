import { useState, useEffect } from "react";
import { json } from "d3";

const jsonURL = `https://gist.githubusercontent.com/vivek2606/81207e5bbdcb0abd8a4105cbb4e90920/raw/weather-data.json`

export const useData = () => {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      json(jsonURL).then(setData)
    }, []);
  
    return data;
  }