
import useSWR from "swr";
import { HttpService } from "./http";
const baseUrl = "http://localhost:8080/api"
const fetcher = (...args) => new HttpService(baseUrl).get(...args).then(response => response.json());

export default function pointsCollector(endPoint){

  const {data, error} = useSWR(endPoint, fetcher);
  console.log("shops info provider",data);
  return {
    points: data,
    isLoading: !error && !data,
    isError: error
  }
}