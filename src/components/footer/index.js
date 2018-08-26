import React from "react";
import Icon from "../icon";
import Github from "../icon/github.icon";
import Dribbble from "../icon/dribbble.icon";
import Behance from "../icon/behance.icon";
import Instagram from "../icon/instagram.icon";
import "./_footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
            i@imaginarybeasts.net
        </div>
        <div className="col-sm-6">
            <div className="social-connect">
              <Icon icon={Github} width={24} height={24} fill={"#fff"} />
              <Icon icon={Dribbble} width={24} height={24} fill={"#fff"} />
              <Icon icon={Behance} width={24} height={24} fill={"#fff"} />
              <Icon icon={Instagram} width={24} height={24} fill={"#fff"} />
            </div>
          </div>
        </div>
      </div>
  </footer>
);

export default Footer;
