import React from 'react';

import './_how-to.scss';

const NewsListing = props =>
  (<section className="howto" id="howto">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="howto-title">How to</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <ol className="howto-list">
            {props.data.map((item, i) =>
              (<li className="howto-list-item" key={i}>
                {item.title}
              </li>),
            )}
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
            <img
            className="img-fluid"
            src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
            alt="Group of pandas eating bamboo"
          />
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;
