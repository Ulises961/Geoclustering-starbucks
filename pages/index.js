import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";

import Points from "./../Data/points.json";
import showFunc from './../Data/DataAnalysis'
import Layout,{siteTitle} from "../component/Layout/Layout";
import { Card } from "@material-ui/core";
export async function getStaticProps(){
  const organizedPoints = showFunc(Points);
  const originalPoints = Points;
  return {
    props : {originalPoints,organizedPoints}
  }
}



export default function Home({originalPoints, organizedPoints}) {
  const MapWithNoSSR = dynamic(() => import("../component/Map/map"), {
    ssr: false,
  });

 const [markers, setMarkers] = useState(originalPoints);

  const toggleClusteringHandler = ()=> {
    
    console.log("Calculated Means obj ",markers);
    setMarkers(organizedPoints.markers);
    
    console.log("[Index.js] this state ",markers);
  
  }
    
  console.log("[Index.js] this state ",markers);
  
  return (

    
    <Layout home>

        <Head>
          <title>{siteTitle}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section>

        <h1 className={styles.title}>Starbucks in the world</h1>
        <h2 className={styles.description}>- Colored marked by size -</h2>
        </section>
        
        <section className={styles.infoblock}>
       
        <div className={styles.sidebar}>
          {originalPoints.map(()=> <Card></Card>)}
          </div>
          <div className={styles.map}>
          <MapWithNoSSR  markers= {markers}/>   
          </div>
       
       </section>
          
    </Layout>
  );
}
