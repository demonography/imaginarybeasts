/* global graphql */

import React from "react";
import PageTransition from "gatsby-plugin-page-transitions";
import Currently from "../components/currently";
import CreatureFeature from "../components/creature-feature";

const IndexPage = props => (
  <PageTransition>
    <main>
      <CreatureFeature />
    </main>
  </PageTransition>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          currently {
            currentlyReading {
              title
              author
              link
            }
          }
        }
      }
    }
  }
`;
