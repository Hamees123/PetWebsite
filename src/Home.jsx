import React from 'react'

const Home = () => {
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
  {/* <nav className="navbar navbar-expand-lg navbar- ">
    <div className="container-fluid">
      <a className="navbar-brand " href="/"><img src="images/logoo.jpg" style={{height: 40}} /><span style={{color: 'rgb(2, 10, 77)', fontFamily: '"Baloo 2", cursive', fontWeight: 700, marginLeft: 10, fontSize: 30}}>Get Pet</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className><i className="fa-solid fa-bars" /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/pets">Pets</a>
          </li>
        
        </ul>
        <form className="d-flex">
          <img src="images/social media icons-02.png" style={{height: 30}} />&nbsp; <img src="images/social media icons-03.png" style={{height: 30}} /> &nbsp;<img src="images/social media icons-04.png" style={{height: 30}} />
        </form>
      </div>
    </div>
  </nav> */}
  <div className="container-fluid" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-6 " style={{position: 'relative'}}><br /><br /><br /><br /><br />
        <div className="jumbotron">
          <h1 className="display-2" style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>Care of your little pets.</h1>
          <p className style={{letterSpacing: 2, fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem soluta natus et fugit</p>
          <br />
          <a className="btn btn- btn-" href="/pets" role="button" id="main">Explore Pets</a> &nbsp; <a className="btn btn- btn-" href="#" role="button" style={{backgroundColor: 'none', color: 'rgb(255, 72, 27)', fontFamily: '"Baloo 2", cursive', border: 'none', borderRadius: 40, letterSpacing: 2}}><i className="fa-solid fa-play" style={{color: 'rgb(2, 10, 77)', fontSize: 'larger'}} /></a>&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Take A look At Our Pets</span>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-6">
        <br />
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/puppy.png" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br /><br /><br />
  <h1 className="display-4 text-center" style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)'}}>Choose Your Pet</h1>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-md-6">
        <a style={{color: 'black', textDecoration: 'none', cursor: 'pointer'}} onclick="myfunc()"><div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/category1.png" className="d-block w-100" alt="..." id="c" />
              </div>
            </div>
          </div>
          <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>rabbit</h3></a>
      </div>
      <div className="col-lg-3 col-sm-6 col-md-6">
        <a style={{color: 'black', textDecoration: 'none', cursor: 'pointer'}} onclick="myfunc1()"><div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/category2.png" className="d-block w-100" alt="..." id="c" />
              </div>
            </div>
          </div>
          <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Cat</h3></a>
      </div>
      <div className="col-lg-3 col-sm-6 col-md-6">
        <a style={{color: 'black', textDecoration: 'none', cursor: 'pointer'}}><div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/category3.png" className="d-block w-100" alt="..." id="c" />
              </div>
            </div>
          </div>
          <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Dog</h3></a>
      </div>
      <div className="col-lg-3 col-sm-6 col-md-6">
        <a style={{color: 'black', textDecoration: 'none', cursor: 'pointer'}}><div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/category4.png" className="d-block w-100" alt="..." id="c" />
              </div>
            </div>
          </div>
          <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Parrot</h3></a>
      </div>
    </div>
  </div>
  <br /><br /><br /><br /><br />
  <section>
    <div className="container-fluid" style={{backgroundColor: 'rgb(255, 255, 255)'}}>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/about.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12"><br /><br /><br /><br />
          <div className="jumbotron">
            <h1 className="display-2 text-start" style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>&nbsp;About Us</h1><br />
            <p className="lead" style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat nihil quasi sapiente doloremque at alias iure reprehenderit! Consequatur, ipsum quae! Aspernatur a nihil facere? Ducimus voluptas quam beatae commodi molestiae sapiente corporis voluptate, accusantium blanditiis magnam repellendus ipsam molestias quidem natus provident. Quae ut dolor, cumque id nesciunt quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto doloremque eveniet veniam incidunt temporibus harum repellendus architecto possimus voluptate dolor?</p><br /><br />
            {/* <i class="fa-solid fa-circle-check" style="color: darkorange;font-size: 20px;"></i><span style="margin-left: 10px;font-family: 'Baloo 2', cursive;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius.</span><br><br>
    <i class="fa-solid fa-circle-check"  style="color: darkorange;font-size: 20px;"></i><span style="margin-left: 10px;font-family: 'Baloo 2', cursive;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius.</span><br><br>
    <i class="fa-solid fa-circle-check"  style="color: darkorange;font-size: 20px;"></i><span style="margin-left: 10px;font-family: 'Baloo 2', cursive;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eius.</span> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section>
<div class="container-fluid" ><h1 class="display-2 text-center" style="font-family: 'Sigmar One', cursive;color: teal;">Our Pets</h1><br><br><br><br>
<div class="row">
<div class="col-lg-4 col-md-6 col-sm-12 mt-2">
 
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
<div class="carousel-item active">
 <a href=""> <img src="images/dogcateg-01.jpg" class="d-block w-100" alt="..." id="category"></a>
</div>

    </div>
  </div>
<br>
  <center><a class="btn btn- btn-lg" href="#" role="button" id="butt">Get a Dog</a></center>

</div>

<div class="col-lg-4 col-md-6 col-sm-12 mt-2">
 
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
<div class="carousel-item active">
  <a href=""><img src="images/rabbitcateg-01.jpg" class="d-block w-100" alt="..."  id="category"></a>
</div>

    </div>
  </div>
  <br>
  <center><a class="btn btn- btn-lg" href="#" role="button"  id="butt">Get a Rabbit</a></center>
 

</div>
<div class="col-lg-4 col-md-6 col-sm-12 mt-2">
 
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
<div class="carousel-item active">
  <a href=""><img src="images/catscateg-01.jpg" class="d-block w-100" alt="..." id="category"></a>
</div>

    </div>
  </div>
<br>
  <center><a class="btn btn- btn-lg" href="#" role="button"  id="butt">Get a Cat</a></center>

</div>


</div>
</div>


</section> */}
  <br /><br /><br />
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12"><br /><br /><br /><br />
          <div className="jumbotron">
            <h1 className="display-4 " style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>How to take care of your pets?</h1><br />
            <i className="fa-solid fa-paw" style={{color: 'tomato'}} />&nbsp;&nbsp;&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Give your pets 24/7 access to fresh drinking water.</span><br /><br />
            <i className="fa-solid fa-paw" style={{color: 'tomato'}} />&nbsp;&nbsp;&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Pets need healthy food.</span><br /><br />
            <i className="fa-solid fa-paw" style={{color: 'tomato'}} />&nbsp;&nbsp;&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Proper pet care includes providing a safe, cozy shelter.</span><br /><br />
            <i className="fa-solid fa-paw" style={{color: 'tomato'}} />&nbsp;&nbsp;&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Pets need to go to the bathroom regularly.</span><br /><br />
            <i className="fa-solid fa-paw" style={{color: 'tomato'}} />&nbsp;&nbsp;&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Avoid cruel animal attractions.</span><br /><br />
            <i className="fa-solid fa-paw" style={{color: 'tomato'}} />&nbsp;&nbsp;&nbsp;<span style={{fontFamily: '"Baloo 2", cursive'}}>Keep them safe at home.</span><br /><br />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/dd.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <br /><br /><br />
  <section>
    <div className="container">
      <br /><br /><br />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/kkk.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12"><br />
          <div className="jumbotron">
            <h1 className="display-4 " style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>Our Services</h1>
          </div>
          <br /><br />
          <div className="container">
            <div className="row">
              <div className="col-6" style={{boxShadow: '3px 3px 10px rgba(119, 136, 153, 0.418)'}}><br />
                <center> <i className="fa-solid fa-truck" style={{fontSize: 40, color: 'coral'}} /></center>
                <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Fast Delivery</h3>
                <p className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>We provide fast and free delivery all around the world</p>
              </div>
              <div className="col-6" style={{boxShadow: '3px 3px 10px rgba(119, 136, 153, 0.418)'}}><br />
                <center>  <i className="fa-solid fa-hand-holding-medical" style={{fontSize: 40, color: 'rgb(15, 197, 15)'}} /></center>
                <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Care</h3>
                <p className="text-center " style={{fontFamily: '"Baloo 2", cursive'}}>We give all types of medication and take care of your pets</p>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6" style={{boxShadow: '3px 3px 10px rgba(119, 136, 153, 0.418)'}}><br />
                <center> <i className="fa-solid fa-bowl-food" style={{fontSize: 40, color: 'deepskyblue'}} /></center>
                <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Food</h3>
                <p className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>We provide quality and best pet foot for your pets</p>
              </div>
              <div className="col-6" style={{boxShadow: '3px 3px 10px rgba(119, 136, 153, 0.418)'}}><br />
                <center> <i className="fa-regular fa-credit-card" style={{fontSize: 40, color: 'rgb(170, 37, 37)'}} /></center>
                <h3 className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>Safe Payment</h3>
                <p className="text-center" style={{fontFamily: '"Baloo 2", cursive'}}>We ensure you that your payment will be safe and secure with us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* <section>
<div class="container" style="background-color: rgb(11, 211, 177);border-radius: 20px;box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.425);">
  <div class="row">
    <div class="col-lg-4 col-md-6 col-sm-12" >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/service 1.png" class="d-block w-100" alt="..." >
    </div>
    
  </div>
</div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
   <img src="images/service 2-01.png" class="d-block w-100" alt="..." >
    </div>
    
  </div>
</div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-12">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
   <img src="images/service 3-01.png" class="d-block w-100" alt="..." >
    </div>
    
  </div>
</div>
    </div>
  </div>
</div>





</section> */}
  <br /><br /><br /><br />
  <section>
    <div className="container">
      <br /><br /><br />
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="images/parrots.png" className="d-block w-100" alt="..." />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12"><br />
          <div className="jumbotron">
            <h1 className="display-4 " style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>Adopt your new best friends</h1>
            <p className="lead " style={{color: 'rgb(2, 10, 77)', fontFamily: '"Baloo 2", cursive'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quaerat nihil quasi sapiente doloremque at alias iure reprehenderit! Consequatur, ipsum quae! Aspernatur a nihil facere? Ducimus voluptas quam beatae commodi molestiae sapiente corporis voluptate, accusantium blanditiis magnam repellendus ipsam molestias quidem natus provident. Quae ut dolor, cumque id nesciunt quas!</p>
            <a className="btn btn- btn-" href="#" role="button" id="butt">Make new friends</a>
          </div>
        </div>
      </div>
    </div>
  </section><br /><br />
  <div className="container">
    <br /><br /><br />
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/testi.png" className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12"><br /><br /><br />
        <div className="jumbotron">
          <h1 className="display-4 " style={{fontFamily: '"Baloo 2", cursive', color: 'rgb(2, 10, 77)', fontWeight: 600}}>What our customer says</h1>
          <p className="lead " style={{color: 'rgb(2, 10, 77)', fontFamily: '"Baloo 2", cursive'}}>"My experience was good from this website,this website provides me the best pets which I looking for.I have bought more than 10 pets from this website."</p>
        </div>
      </div>
    </div>
  </div>
  <br /><br />
  {/* <footer>
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
  </footer> */}
</div>
    </div>
  )
}

export default Home