import React, { useEffect, useState } from "react";
import { Sidebar } from "flowbite-react";
import { BsFire, BsGlobeAmericas } from "react-icons/bs";
import { GiBlackFlag } from "react-icons/gi";
import { FaBars, FaCalendarAlt } from "react-icons/fa";
import { RiPagesFill, RiBrushFill } from "react-icons/ri";
import { MdSportsEsports, MdMovieFilter, MdNaturePeople } from "react-icons/md";
import { Link } from "react-router-dom";

import first from "../../../assets/images/1.png";
import second from "../../../assets/images/2.png";
import third from "../../../assets/images/3.png";
import moment from "moment/moment";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://dragon-news-server-itsakhtar-outlookcom.vercel.app/categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-fit col-span-3 sticky top-0 ">
      <Sidebar aria-label="Sidebar with multi-level dropdown example">
        <h2 className="text-2xl font-bold text-gray-600 mb-5">All Category</h2>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {categories.map((category) => (
              <Sidebar.Item
                href={`/category/${category.id}`}
                key={category.id}
                icon={
                  (category.name === "All News" && RiPagesFill) ||
                  (category.name === "Breaking News" && BsFire) ||
                  (category.name === "Regular News" && FaBars) ||
                  (category.name === "International News" && BsGlobeAmericas) ||
                  (category.name === "Sports" && MdSportsEsports) ||
                  (category.name === "Entertainment" && MdMovieFilter) ||
                  (category.name === "Culture" && MdNaturePeople) ||
                  (category.name === "Arts" && GiBlackFlag)
                }
              >
                {category.name}
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
        <div className="my-10 space-y-8">
          <div className="shadow-md p-5 rounded-md">
            <img src={first} alt="" />
            <h4 className="my-4 text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              exercitationem.
            </h4>
            <div className="flex gap-3 items-center text-gray-500">
              <FaCalendarAlt />
              {moment().format("dddd, MMMM do, YYYY")}
            </div>
          </div>
          <div className="shadow-md p-5 rounded-md">
            <img src={second} alt="" />
            <h4 className="my-4 text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              exercitationem.
            </h4>
            <div className="flex gap-3 items-center text-gray-500">
              <FaCalendarAlt />
              {moment().format("dddd, MMMM do, YYYY")}
            </div>
          </div>
          <div className="shadow-md p-5 rounded-md">
            <img src={third} alt="" />
            <h4 className="my-4 text-base font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
              exercitationem.
            </h4>
            <div className="flex gap-3 items-center text-gray-500">
              <FaCalendarAlt />
              {moment().format("dddd, MMMM do, YYYY")}
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default LeftNav;
