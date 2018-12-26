import React, { Component } from 'react';
import Header from './Header';
import HomeSectionA from './HomeSectionA';
import HomeSectionB from './HomeSectionB';
import HomeSectionC from './HomeSectionC';
import HomeSectionD from './HomeSectionD';
import Footer from './Footer';


class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSectionA />
        <HomeSectionB />
        <HomeSectionC />
        <HomeSectionD />
        <Footer />
      </div>
    );
  }
}

export default Home;
