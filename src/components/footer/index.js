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
        <div className="col-sm-3 offset-sm-3">
            <div className="social-connect">
              <a className="social-connect-link" target="_blank" href="https://github.com/demonography">
                <Icon icon={Github} width={20} height={20} fill={"#fff"} />
              </a>
              <a className="social-connect-link" target="_blank" href="https://dribbble.com/demonography">
                <Icon icon={Dribbble} width={20} height={20} fill={"#fff"} />
              </a>
              <a className="social-connect-link" target="_blank" href="https://www.behance.net/beasts">
                <Icon icon={Behance} width={20} height={20} fill={"#fff"} />
              </a>
              <a className="social-connect-link" target="_blank" href="https://instagram.com/demonography">
                <Icon icon={Instagram} width={20} height={20} fill={"#fff"} />
              </a>
            </div>
          </div>
        </div>
      </div>
  </footer>
);

export default Footer;
