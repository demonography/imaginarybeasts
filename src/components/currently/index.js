import React from 'react';

import './_currently.scss';
import Img from "gatsby-image";

const NewsListing = props =>
  (<section className="currently" id="currently">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="currently-title">Currently</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <h5>Reading</h5>
          <ul className="currently-list">
            {props.data.map((item, i) =>
              (<li className="currently-list-item" key={i}>
                <a target="_blank" href="{item.currentlyReading.link}"><strong>{item.currentlyReading.title}</strong></a><br/>
                -- {item.currentlyReading.author}
              </li>),
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
