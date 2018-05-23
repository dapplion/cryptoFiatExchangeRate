import React, { Component } from 'react';
import ClipboardJS from 'clipboard'
// Load css
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
// import components
import CoinNameInput from './CoinNameInput';
import CoinValueInput from './CoinValueInput';
import CoinDisplay from './CoinDisplay';
import CalendarDisplay from './CalendarDisplay';
import CopyLinkButton from './CopyLinkButton'
import AppStore from './stores/AppStore'
// API CALLS
import './API/coinList'
// import './API/cm'
// import parameters
import params from './params'
// Start component

new ClipboardJS('.btn');


const Header = props =>
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">{params.headerTitle}</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a href={params.link1.href} className="nav-link slim-nav-text">{params.link1.name}</a>
      </nav>
    </div>
  </header>;


const Footer = props =>
  <footer className="mastfoot mt-auto">
    <div className="inner text-center">
      <p>A <a href="https://giveth.io/">Giveth</a> Social Coding project by <a href="https://github.com/dapplion">dapplion</a>, data from <a href="https://www.cryptocompare.com/api/#">CryptoCompare</a>.</p>
    </div>
  </footer>;


class App extends Component {
  constructor() {
    super();
  }

  render() {

    // Parse URL here

    return (
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
        <Header />

        <main role="main" className="inner cover">
          <h1 className="cover-heading text-center">{params.title}</h1>
          <div className="container">

            <div className="row mb-4">
              <div className="col text-center">
                <CalendarDisplay/>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-sm-6 mb-4">
                <div className="input-group">
                  <CoinValueInput id={'left'}/>
                  <div className="input-group-append">
                    <CoinNameInput id={'left'}/>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 mb-4">
                <div className="input-group">
                  <CoinValueInput id={'right'} readOnly={true}/>
                  <div className="input-group-append">
                    <CoinNameInput id={'right'}/>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col text-center">
                <CopyLinkButton/>
              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

// <CoinValueDisplay
//   price={this.state.price}
// />
// <CoinListDisplays
//   price={this.state.price}
// />


// <div className="ui inverted vertical masthead center aligned segment main">
//   <div className="ui text container">
//     <Container>
//       <h1 className="ui inverted header">{params.title}</h1>
//       <h3>{params.subtitle}</h3>
//
//     </Container>
//   </div>
// </div>





export default App;
