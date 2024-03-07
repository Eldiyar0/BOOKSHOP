import React from "react";
import "./ComBlock.css";
import img2 from "../../img/2.png";

const BooksFilter = () => {
  return (
    <section id="booksFilter">
      <div className="container">
        <div className="booksFilter">
          <div className="booksFilter-main">
            <h3>
              <h4>Filter</h4>
              <p>Clear filters</p>
            </h3>
            <div className="booksFilter-block">
              <h3>Sort By</h3>
              <select>
                <option>Popular</option>
                <option>Popular</option>
              </select>
            </div>
          </div>
          <h4 className="booksFilter_h4">Genres</h4>
          <div className="blockFilter-main">
            <div className="booksFilter1">
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
              <div className="booksFilter1-block">
                <input type="radio" />
                Autographed Books
              </div>
            </div>
            <div className="booksFilter2">
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>

              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
              <div className="booksFilter2-block">
                <img src={img2} alt="" />
                <h4>
                  The Climate Book: <br /> The Facts and the <br /> Solutions
                </h4>
                <h5>by Greta Thunberg</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksFilter;
