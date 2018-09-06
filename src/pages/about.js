import React from "react";
import PageTransition from "gatsby-plugin-page-transitions";

export default () => (
  <PageTransition>
    <section>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1>Hi, I'm Ris.</h1>
            <p>
              I am a non-binary gendered visual communicator who likes to draw,
              design, code, and eat. Most of the time you will find me doing a
              combination of the above.
            </p>
            <p>
              I graduated from the Alberta College of Art and Design in 2012
              with a degree in Visual Communications and an appreciation for
              caffeinated beverages.
            </p>
            <p>
              I currently work as an interactive designer and a front-end
              developer, with a good dose of illustration on the side.
            </p>
            <p>
              I am also currently growing my skills as a mentor and educator by
              teaching and volunteering.
            </p>
          </div>
        </div>
      </div>
    </section>
  </PageTransition>
);
