
"use client";
import { useState, useEffect } from "react";

type ApiResponse = {
  rates: { [key: string]: number };
};

export default function Home() {

  const API_KEY = "";
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch(`http://api.coinlayer.com/live?access_key=${API_KEY}`)
      .then((response) => response.json())
      .then((jsonConverted: ApiResponse) => {
        console.log("JSON Converted Data : ", jsonConverted);
        setData(jsonConverted);
      });
  }, []);

  return (
    <div className="mainD">
      <div className="headingD">
        <h1 className="heading">Crypto Currency Rates</h1>
      </div>
      <div className="tableD">
        <table className="_table">
          <thead>
            <tr>
              <th>Currency Name</th>
              <th>Rate in $</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td>Currency Name</td>
              <td>Rate in $</td>
            </tr>
          <tr>
              <td>Currency Name</td>
              <td>Rate in $</td>
            </tr>
          <tr>
              <td>Currency Name</td>
              <td>Rate in $</td>
            </tr>
          <tr>
              <td>Currency Name</td>
              <td>Rate in $</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
