import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url, params) {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  useEffect(() => {
    // Using an IIFE
    (async function anyNameFunction() {
      await axios
        .get(url)
        .then(res => {
          setResults(res.data);
          setLoading(false);
        })
        .catch(function(error) {
          console.log(error);
        });
    })();
  }, []);

  return [loading, results];
}
