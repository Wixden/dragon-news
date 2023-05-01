import { Card } from "flowbite-react";
import moment from "moment/moment";
import React from "react";
import {
  FaEye,
  FaRegBookmark,
  FaRegStar,
  FaShareAlt,
  FaStar,
} from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {
    _id,
    title,
    details,
    image_url,
    author,
    rating,
    total_view,
    others_info,
  } = news;

  return (
    <div className="my-14 border border-gray-300 rounded-md">
      <div className="bg-gray-100 p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="h-10 rounded-full"
            src={author?.img}
            alt={author?.name}
          />
          <div>
            <p>{author?.name}</p>
            <p>
              {moment(author?.published_date).format("dddd, MMMM do, YYYY")}
            </p>
          </div>
        </div>
        <div className="flex gap-2 text-gray-600">
          <Link>
            <FaRegBookmark />
          </Link>
          <Link>
            <FaShareAlt />
          </Link>
        </div>
      </div>
      <div>
        <Card className="shadow-none rounded-none border-none">
          <Link to={`/news/${_id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <img src={image_url} alt="" />
          <div className="py-3">
            <p>
              {details.length < 250 ? <>{details}</> : details.slice(0, 250)}...
            </p>
            <button className="text-amber-500 font-semibold my-2 group">
              <Link to={`/news/${_id}`}>
                Read More
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-1 bg-amber-500 mt-[2px]"></span>
              </Link>
            </button>
          </div>
          <hr />
          <div className="mt-2.5 mb-5 flex items-center justify-between">
            <div className="flex">
              <Rating
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar></FaRegStar>}
                fullSymbol={<FaStar></FaStar>}
                placeholderSymbol={
                  <FaStar className="text-yellow-300"></FaStar>
                }
                readonly
              ></Rating>
              <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                {rating.number}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaEye />
              {total_view}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsCard;
