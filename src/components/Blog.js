import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section class="blogs" id="blogs">
        <h1 class="heading">
          our <span>blogs</span>
        </h1>

        <div class="box-container">
          {blog.map((item, index) => (
            <div class="box" key={index * Math.random()}>
              <div class="image">
                <img src={item.img} alt="" />
              </div>
              <div class="content">
                <a href="/" class="title">
                  tasty and refreshing spices
                </a>
                <span>by admin / 21st may, 2023</span>
                <p>
                  "Stay updated with our blog.
                  Discover the latest culinary trends, chef's secrets,
                  and stories behind your favorite dishes."
                </p>
                <a href="/" class="btn">
                  read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
