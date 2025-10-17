
import axios from 'axios'
import { useState, useEffect } from 'react'

const useAxios = (url, params) => {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url, params)
      setData(response.data)
    } catch (e) {
      console.error(e)
      setError(e)
    } finally {
      setLoading(false)
    }
  };

  return { data, error, loading }
};

export default useAxios