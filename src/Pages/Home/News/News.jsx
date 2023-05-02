import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorINsights from "./EditorINsights";

const News = () => {
  const newsData = useLoaderData();
  // console.log(newsData);
  const { title, image_url, details, category_id } = newsData;

  return (
    <div>
      <div className="p-5 rounded border border-gray-300">
        <img src={image_url} alt="" />
        <h2 className="text-3xl font-bold my-5">{title}</h2>
        <p>{details}</p>
        <Link to={`/category/${category_id}`}>
          <button className="bg-red-700 px-6 py-3 rounded text-white font-medium flex gap-3 items-center my-5">
            <FaArrowLeft />
            All news in this category
          </button>
        </Link>
      </div>
      <EditorINsights />
    </div>
  );
};

export default News;
