import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            bookID,
            isbn,
            average_rating,
            language_code,
            ratings_count,
            img,
            authors,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End of title */}
              {/* product authors */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>model: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    ISBN: <span className="text-uppercase">{isbn}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <ReactStars
                    count={average_rating}
                    size={10}
                    isHalf={true}
                    activeColor="#ffd700"
                  />
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Ratings Count:
                  </p>
                  <p className="text-muted lead">{ratings_count}</p>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Language Code:
                  </p>
                  <p className="text-muted lead">{language_code}</p>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Authors:
                  </p>
                  <p className="text-muted lead">{authors}</p>
                  {/* buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(bookID);
                        value.openModal(bookID);
                      }}
                    >
                      {inCart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
