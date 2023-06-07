
import Home from './Home';
import Navbar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {


  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/create">
                <Create />
            </Route>
            <Route exact path="/blogs/:id">

              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
        <Footer />

      </div>
    </Router>
  );
}



export default App;
