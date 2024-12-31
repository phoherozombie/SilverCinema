import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "./styles/styles.css";
import "./styles/queries.css";

const Home = () => {
  return (
    <html lang="en">
      <Head>
        <title>Movie Booking System</title>
      </Head>
      <body>
        <div>
          <Navbar />
        </div>
      </body>
    </html>
  );
};

export default Home;