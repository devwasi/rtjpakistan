var footer = document.getElementById("footer")
var header = document.getElementById("header")

function reUseAbleData(){
header.innerHTML = `
<section>
                    <nav class="navbar navbar-expand-lg p-3">
                        <div class="container">
                            <span class="navbar-brand mb-0 h1"><a href=""><img src="./images/RTJ-Pak-Logo.png"
                                        alt="RTJ Pakistan Logo"></a>
                            </span>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto ms-3 mb-2 mb-lg-0">
                                    <li class="nav-item px-3 fs-5">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item px-3 fs-5">
                                        <a class="nav-link" href="./pages/aboutUs.html">About Us</a>
                                    </li>
                                    <li class="nav-item px-3 fs-5">
                                        <a class="nav-link" href="#">Patron In Chief</a>
                                    </li>
                                    <li class="nav-item px-3 fs-5">
                                        <a class="nav-link" href="#">News and Events</a>
                                    </li>
                                    <li class="nav-item px-3 fs-5">
                                        <a class="nav-link" href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <hr />
                </section>
`
footer.innerHTML = `
<div class="row my-5 p-3">
                    <div class="col-sm-12 col-md-4 mt-3 text-center">
                        <div>
                            <h3 class="cinzelfont fw-bold text-warning">
                                ROOHANI TALABA JAMMAT
                            </h3>
                            <p>
                                Roohani Talaba Jamaat founded on 5th October 1975. Today, its branches are found all
                                around Pakistan. Its head office is located at Allahabad Sharif, Kandiyaro. The students
                                associated with this organization abide by the Shariah of the Holy Prophet (PBUH). Its
                                members include students of the school, colleges and universities.
                            </p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4"></div>
                    <div class="col-sm-12 col-md-4 mt-3 text-center">
                        <div>
                            <div>
                                <h3 class="cinzelfont fw-bold text-warning">
                                    Follow us on social media
                                </h3>
                            </div>
                            <div class="d-flex justify-content-evenly">
                                <a href="" class="text-warning"><i class="fa-brands fa-youtube fs-1"></i></a>
                                <a href="" class="text-warning"><i class="fa-brands fa-facebook fs-1"></i></a>
                                <a href="" class="text-warning"><i class="fa-brands fa-twitter fs-1"></i></a>
                                <a href="" class="text-warning"><i class="fa-brands fa-instagram fs-1"></i></a>
                                <a href="" class="text-warning"><i class="fa-brands fa-whatsapp fs-1"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <p>
                        Copyright © 2023 Roohani Talba Jamaat Pakistan
                    </p>
                </div>
`
}

// window.onload = reUseAbleData()