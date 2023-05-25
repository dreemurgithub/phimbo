import Anime from "@/components/home/anime";
import Chart from "@/components/home/Chart";
import New_Series from "@/components/home/new_serires";
import New_single from "@/components/home/new_single";
import Recommend from "@/components/home/recommend";
import Single from "@/components/home/single";
import Soon from "@/components/home/Soon";
import Today from "@/components/home/Today";
import Trailer from "@/components/home/Trailer";
import Update from "@/components/home/update";
import {useEffect, useState} from "react";

export default function Home() {
  const [data_list,setdata_list] = useState({})
  useEffect(()=>{
    fetch('/api/home')
        .then(res=>res.json())
        .then(data=>setdata_list(data))
  },[])
  return <>
    {/*<p>{JSON.stringify(data_list)}</p>*/}
    <div>
      <Recommend/>
      <Update/>
      <Anime/>
      <Single/>
      <New_Series/>
      <New_single/>
      <Chart/>
      <Trailer/>
      <Soon/>
      <Today/>
    </div>
  </>
}
