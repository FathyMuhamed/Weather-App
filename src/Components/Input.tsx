import React, { useState } from "react";
import { fetchWeather } from "./fetchWeather";
import styles from '../Style/App.module.css';

export const Input = ({ getWeather }: any) => {
  const [query, setQuery] = useState("");
  const Search = async (e: { key: string }) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      getWeather(data);
      setQuery("");
    }
  };

  return (
    <>
      <input
        type='text'
        className={styles.inputDate}
        placeholder='Search New Place...'
        onKeyPress={Search}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </>
  );
};
