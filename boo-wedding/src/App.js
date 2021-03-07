import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
  return (
    <div className="demo-big-content demo-layout-transparent mdl-layout mdl-js-layout">
        <Layout>
            <Header className="mdl-layout__header mdl-layout__header--transparent" title=" " scroll>
                <Navigation> 
                    <Link to="/ourStory" className="nav-color">Our Story</Link>
                    <Link to="/gallery" className="nav-color">Gallery</Link>
                    <Link to="/festivities" className="nav-color">Festivities</Link>
                    <Link to="/venue" className="nav-color">Venue</Link>
                    <Link to="/registry" className="nav-color">Registry</Link>
                    <Link to="/toDo" className="nav-color">To Do/ To Eat</Link>  
                </Navigation>
            </Header>
            <Drawer title="">
                <Navigation className="nav-color">
                    <Link to="/ourStory" className="nav-color">Our Story</Link>
                    <Link to="/gallery" className="nav-color">Gallery</Link>
                    <Link to="/festivities" className="nav-color">Festivities</Link>
                    <Link to="/venue" className="nav-color">Venue</Link>
                    <Link to="/registry" className="nav-color">Registry</Link>
                    <Link to="/toDo" className="nav-color">To Do/ To Eat</Link>  
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main></Main>
            </Content>
        </Layout>
    </div>
    );
  }
}
export default App;
