import React from "react";
import './App.css';
import {PageHeader} from "./components/PageHeader";
import {PostList} from "./components/PostList";
import {Footer} from "./components/Footer";
import {Menu} from "./components/Menu";
import {About} from "./components/About";
import {Contact} from "./components/Contact";
import {Route,BrowserRouter} from "react-router-dom";
import {Post} from "./components/Post";
import {AddPost} from "./admin/AddPost";
import {Admin} from "./admin/Admin";

class App extends React.Component{
    constructor() {
        super();
        this.changeH1 = this.changeH1.bind(this);
        this.state = {
            h1: ""

        }
    }
    changeH1(title){
        this.setState({
            h1: title
        })
    }
    render (){
        return(
            <div>
                <BrowserRouter>
                    <Menu/>
                    <PageHeader h1={this.state.h1}/>
                    <Route exact path="/" render={()=><PostList changeH1={this.changeH1}/>}/>
                    <Route path="/admin" render={()=><Admin changeH1={this.changeH1}/>}/>
                    <Route path="/about" render={()=><About changeH1={this.changeH1}/>}/>
                    <Route path="/contact" render={()=><Contact changeH1={this.changeH1}/>}/>
                    <Route path="/post/:id" render={(props)=><Post changeH1={this.changeH1}{...props}/>}/>
                    <hr/>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;