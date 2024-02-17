import { useCallback, useState } from "react";
import { axiosInstance } from "../helpers";

export const useFetchData = () => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const getData = useCallback(async (url) => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const { data } = await axiosInstance.get(url);
      setState((prev) => ({ ...prev, data, loading: false }));
    } catch (error) {
      setState((prev) => ({ ...prev, error, loading: false }));
    }
  }, []);
  return {
    ...state,
    getData,
    setState,
  };
};
