import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="article blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>
      <section className="blog-post">
        <ul className="blog-posts-list">
          <li className="blog-post-item">
            <a href="/#">
              <figure className="blog-banner-box">
                <img src="./images/blog-1.jpg" alt="Design" loading="lazy" />
              </figure>
              <div className="blog-content">
                <div className="blog-meta">
                  <p className="blog-category">design</p>
                  <span className="dot"></span>
                  <time dateTime="2023-04-23">Apr 04, 2023</time>
                </div>
                <h3 className="h3 blog-item-title">Design conference in 2023</h3>
                <p className="blog-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur, autem?
                </p>
              </div>
            </a>
          </li>
          <li class="blog-post-item">
              <a href="/#">

                <figure class="blog-banner-box">
                  <img src="./images/blog-2.jpg" alt="Best fonts every designer" loading="lazy"/>
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>
                    <span class="dot"></span>
                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Best fonts every designer</h3>

                  <p class="blog-text">
                    Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="/#">

                <figure class="blog-banner-box">
                  <img src="./images/blog-3.jpg" alt="Design digest #80" loading="lazy"/>
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Design digest #80</h3>

                  <p class="blog-text">
                    Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="/#">

                <figure class="blog-banner-box">
                  <img src="./images/blog-4.jpg" alt="UI interactions of the week" loading="lazy"/>
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">UI interactions of the week</h3>

                  <p class="blog-text">
                    Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="/#">

                <figure class="blog-banner-box">
                  <img src="./images/blog-5.jpg" alt="The forgotten art of spacing" loading="lazy"/>
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">The forgotten art of spacing</h3>

                  <p class="blog-text">
                    Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                </div>

              </a>
            </li>

            <li class="blog-post-item">
              <a href="/#">

                <figure class="blog-banner-box">
                  <img src="./images/blog-6.jpg" alt="Design digest #79" loading="lazy"/>
                </figure>

                <div class="blog-content">

                  <div class="blog-meta">
                    <p class="blog-category">Design</p>

                    <span class="dot"></span>

                    <time datetime="2022-02-23">Fab 23, 2022</time>
                  </div>

                  <h3 class="h3 blog-item-title">Design digest #79</h3>

                  <p class="blog-text">
                    Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.
                  </p>

                </div>

              </a>
            </li>
        </ul>
      </section>
    </div>
  );
};

export default Blog;
