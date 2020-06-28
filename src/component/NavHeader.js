import React from 'react'
const navBarStyle = {
    backgroundColor: "#e3f2fd",
    padding: "40px"
  }

export default function NavHeader() {
    return (
        // <nav class="navbar navbar-light" style={navBarStyle}>
        //     <img src="images/circle-cropped.png" alt="Lucent Academy" width="80" height="80" />
        //     <div class="collapse navbar-collapse" id="navbarText">
        //         <ul class="navbar-nav mr-auto">
        //             <li class="nav-item active">
        //             <a class="navbar-brand" href="#">Navbar w/ text</a>
        //             </li>
        //         </ul>
        //     </div>
        // </nav>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" style={navBarStyle}>
  <img src="images/circle-cropped.png" alt="Lucent Academy" width="80" height="80" />
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="aboutus">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu" aria-labelledby="dropdown01">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
      </li>
    </ul>
  </div>
</nav>
    )
}