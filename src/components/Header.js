import React from "react";
import { graphql, Link, StaticQuery, useStaticQuery } from "gatsby";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import logo from "../../static/images/logo/logo.svg";
import logoMobile from "../../static/images/logo/logo-mobile.svg";
import MenuMobile from "./MenuMobile";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };
  }

  toggleMenu = (menuActive) => {
    this.setState((prevState) => ({
      menuActive: !prevState.menuActive,
    }));
  };

  render() {
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <h1>{this.props.data.site.siteMetadata.title}</h1>
              <p>{this.props.data.site.siteMetadata.description}</p>
            </Link>
          </div>
          <Menu active={this.state.menuActive} />
          {window.innerWidth <= 1300 && (
            <MenuMobile active={this.state.menuActive} />
          )}
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={(data) => <Header data={data} />}
  />
);
