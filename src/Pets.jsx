import React from 'react'

const Pets = () => {
  return (
    <div>
<div>
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
  <link rel="stylesheet" href="style.css" type="text/css" />

  <br /><br /><br />
  <h1 className="display-2 text-center" style={{fontFamily: '"Baloo 2", cursive', color: 'teal', fontWeight: 600}}>Dogs</h1>
  <br /><br />
  <div className="container">
    <center> <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet1.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Black Dotted Dog</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 8000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet2.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Multicolor Dog</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 3000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet3.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>White Dog</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 10000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet4.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Australian Shepherd</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 15000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet5.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Puppy Dog</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 15000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet6.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Basset Hound</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 200000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
      </div></center>
  </div>
  <br /><br /><br /><br /><br /><br />  
  <h1 className="display-2 text-center" style={{fontFamily: '"Baloo 2", cursive', color: 'teal', fontWeight: 600}}>Cats</h1>
  <br /><br />
  <div className="container">
    <center> <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet7.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Kittens</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 7000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet8.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Brown Persian Cat</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 15000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet9.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Kitten</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 4000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet10.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Russian Cat</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 9000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet11.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}> Gray Persian Cat</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 20000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet12.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Black Stripes Cat</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 2500 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
      </div></center>
  </div>
  <br /><br /><br /><br /><br /><br />  
  <h1 className="display-2 text-center" style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>Parrots</h1>
  <br /><br />
  <div className="container">
    <center> <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet13.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Rio Parrot</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 40000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet14.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Green Parrot</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 6000 PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet15.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Cockatiel</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 150000  PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet16.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Australian Parrot</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 500   PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet17.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Blue Macaw</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 250000    PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12"><br /><br />
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/pet18.jpg" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
          <h2 style={{fontFamily: '"Baloo 2", cursive', fontWeight: 600}}>Red Macaw</h2>
          <h4 style={{fontFamily: '"Baloo 2", cursive', color: 'darkgreen', fontWeight: 600}}>Price: 180000    PKR</h4>
          <center><a className="btn btn- btn-" href="#" role="button" id="Dog">Buy Now</a></center>
        </div>
      </div></center>
  </div>
  <br /><br /><br />
  {/* <footer>
    <div className="container-fluid" style={{backgroundColor: 'rgb(255, 222, 73)'}}>
      <footer className="py-5">
        <div className="row">
          <div className="col-6 col-md-2 mb-3">
            <h1 style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive', fontWeight: 700}}>Get Pet</h1>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 " style={{color: 'rgb(73, 36, 9)', fontFamily: '"Baloo 2", cursive'}}>Opening Hours</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">8:00 am- 5:00 pm</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="fa-brands fa-facebook" /><span style={{marginLeft: 7}}> Facebook</span></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="fa-brands fa-twitter" /><span style={{marginLeft: 10}}> Twitter</span></a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 "><i className="fa-brands fa-instagram" /> <span style={{marginLeft: 10}}>Instagram</span></a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></li>
              <li className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></li>
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
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
            <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
          </ul>
        </div>
      </footer>
    </div>
  </footer> */}
</div>

    </div>
  )
}

export default Pets