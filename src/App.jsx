import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import Home from './Home';
import Pets from './Pets';

function App() {
  return (
    <Router>
    <>

<nav className="navbar navbar-expand-lg navbar- ">
    <div className="container-fluid">
      <a className="navbar-brand " href="/"><img src="images/logoo.jpg" style={{height: 40}} /><span style={{color: 'rgb(2, 10, 77)', fontFamily: '"Baloo 2", cursive', fontWeight: 700, marginLeft: 10, fontSize: 30}}>Get Pet</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className><i className="fa-solid fa-bars" /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/" style={{color: 'rgb(73, 36, 9)'}}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pets" style={{color: 'rgb(73, 36, 9)'}}>Pets</Link>
          </li>
        
        </ul>
        <form className="d-flex">
          <img src="images/social media icons-02.png" style={{height: 30}} />&nbsp; <img src="images/social media icons-03.png" style={{height: 30}} /> &nbsp;<img src="images/social media icons-04.png" style={{height: 30}} />
        </form>
      </div>
    </div>
  </nav>


<Routes>

<Route path='/' element={<Home/>}/>
<Route path='/pets' element={<Pets/>}/>


</Routes>



<footer>
    <div className="container-fluid" style={{backgroundColor: 'rgb(255, 222, 73)'}}>
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h1 style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive', fontWeight: 700}}>Get Pet</h1>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Opening Hours</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>8:00 am- 5:00 pm</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="fa-brands fa-facebook" style={{color: 'rgb(73, 36, 9)'}}/><span style={{marginLeft: 7,color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}> Facebook</span></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="fa-brands fa-twitter" style={{color: 'rgb(73, 36, 9)'}}/><span style={{marginLeft: 10,color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}> Twitter</span></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="fa-brands fa-instagram" style={{color: 'rgb(73, 36, 9)'}}/> <span style={{marginLeft: 10,color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Instagram</span></a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>About</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>About</a></li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                <button className="btn btn-primary" type="button">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2022 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3"> </li>
            <li className="ms-3"><a className="link-dark" href="#" style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#" style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  </footer>

    </>
      </Router>
  );
}

export default App;
