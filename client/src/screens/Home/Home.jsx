import React from "react";
import "./Home.css";
import PostTiles from "../../components/PostTiles/PostTiles";
import Layout from "../../components/shared/Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostTiles />
      </div>
    </Layout>
  );
};

export default Home;
