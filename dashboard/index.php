<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Unique Cable Network, INC.</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="../style.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    
    </head>

        <nav class="navbar navbar-expand-lg pb-4" style="background-color:#0a2cb1;">
            <div class="container">
                <div class="d-flex justify-content-center align-items-center">
                <img src="../src/imgs/logo.png" class="navbar-bran filtered-img" title="Logo" style="border-radius:8px"></img>
                <h6 class="text-light px-1 logo-info">&nbspUnique Cable <br>&nbspInternet Services</h6>
                </div>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 "></ul>
                    <div class="d-flex px-2 fs-5 fw-bold hov-link" role="search">
                        <li class="nav-item navbar-nav btn-link text-decoration-none text-uppercase">
                            <a class="btn p-2 px-3" aria-current="page" href="#">Home</a>
                        </li>
                    </div>
                    <!-- <div class="d-flex px-2 fs-5 fw-bold hov-link" role="search">
                        <li class="nav-item navbar-nav btn-link text-decoration-none text-uppercase">
                            <a class="btn p-2 px-3" aria-current="page" href="#aboutUs">About</a>
                        </li>
                    </div> -->
                    <div class="d-flex px-2 fs-5 fw-bold hov-link" role="search">
                        <li class="nav-item navbar-nav btn-link text-decoration-none text-uppercase">
                            <a class="btn p-2 px-3" aria-current="page" href="#contactId">Contact</a>
                        </li>
                    </div>
                    <!-- <div class="d-flex px-2 fs-5 fw-bold hov-link" role="search">
                        <li class="nav-item navbar-nav btn-getStarted">
                            <a class="btn p-2 px-4 text-uppercase" aria-current="page" href="#">Login</a>
                        </li>
                    </div> -->
                </div>
            </div>
        </nav>
        <div class="container-fluid">
            <ul class="box-info px-2 mb-5">
                    <li>
                        <i class='bi bi-reception-4 fs-2' style="color:#3a91e6"></i>
                        <span class="text mx-3">
                            <h3>Signal Quality</h3>
                            <p>Customer Satisfaction in terms of signal performance</p>
                        </span>
                    </li>
                    <li>
                        <i class='bi bi-tv fs-2' style="color:#3a91e6"></i>
                        <span class="text mx-3">
                            <h3>TV Channel Quality</h3>
                            <p>Customer Satisfaction in TV channel</p>
                        </span>
                    </li>
                    <li>
                        <i class='bi bi-headphones fs-2' style="color:#3a91e6"></i>
                        <span class="text mx-3">
                            <h3>Service Quality</h3>
                            <p>Customer Satisfaction on services.</p>
                        </span>
                    </li>
                    <li>
                        <i class='bi bi-geo fs-2' style="color:#3a91e6"></i>
                        <span class="text mx-3">
                            <h3>Accessibility</h3>
                            <p>Customer Satisfaction on accessibility</p>
                        </span>
                    </li>
                    <!-- <li>
                        <i class='bi bi-star fs-2' style="color:#3a91e6"></i>
                        <span class="text mx-3">
                            <h3>Overall Experience</h3>
                            <p>Evaluate overall customer experience</p>
                        </span>
                    </li> -->
                </ul>
            </div>
        </div>

        <div class="container-fluid">
            <h1 class="px-2 mb-3 fw-bolder text-primary text-center text-md-left ">Customer Satisfaction Survey</h1>
            <div class="row px-2">
                <div class="col-md-3">
                    <div class="card shadow mb-4 py-2 px-3">
                        <div class="d-flex justify-content-center align-items-center">
                            <i class='bi bi-people fs-2' style="color:#3a91e6"></i>
                            <h5 class="mt-2 mx-2 font-weight-bold text-primary">Number of Respondents</h5>
                        </div>
                        <h4 id="respondentCount" class="text-center fw-bolder">Loading...</h4>    
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h3 class="m-0 font-weight-bold text-primary">Demographic Profile</h3>   
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="pt-4 pb-2">
                                <canvas id="firstPieChart" width="301" height="245" style="display: block; width: 301px; height: 245px;"></canvas>
                            </div>
                            <div class="mt-4 text-center small">
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-primary"></i> Direct
                                </span>
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-success"></i> Social
                                </span>
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-info"></i> Referral
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h3 class="m-0 font-weight-bold text-primary">Gender Profile</h3>   
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="pt-4 pb-2">
                                <canvas id="secondPieChart" width="301" height="245" style="display: block; width: 301px; height: 245px;"></canvas>
                            </div>
                            <div class="mt-4 text-center small">
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-primary"></i> Male
                                </span>
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-success"></i> Female
                                </span>
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-success"></i> Undisclosed
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h3 class="m-0 font-weight-bold text-primary">Location Profile</h3>   
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="pt-4 pb-2">
                                <canvas id="thirdPieChart" width="301" height="245" style="display: block; width: 301px; height: 245px;"></canvas>
                            </div>
                            <div class="mt-4 text-center small">
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-primary"></i> Direct
                                </span>
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-success"></i> Social
                                </span>
                                <span class="mr-2">
                                    <i class="bi bi-circle-fill text-info"></i> Referral
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h3 class="m-0 font-weight-bold text-primary">Signal Quality</h4>
                        </div>
                        <div class="card-body">
                            <div class="chart-bar"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                <canvas id="myBarChart" width="713" height="256" style="display: block; height: 320px; width: 892px;" class="chartjs-render-monitor"></canvas>
                            </div>
                        </div>
                    </div>  
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h3 class="m-0 font-weight-bold text-primary">TV Channel Quality</h4>
                        </div>
                        <div class="card-body">
                            <div class="chart-bar">
                                <canvas id="mySecondBarChart" width="713" height="256" style="display: block; height: 320px; width: 892px;"></canvas>
                            </div>
                        </div>
                    </div>
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h3 class="m-0 font-weight-bold text-primary">Service Quality</h4>
                        </div>
                        <div class="card-body">
                            <div class="chart-bar">
                                <canvas id="myThirdBarChart" width="713" height="256" style="display: block; height: 320px; width: 892px;"></canvas>
                            </div>
                        </div>
                    </div> 
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h3 class="m-0 font-weight-bold text-primary">Accessibility</h4>
                        </div>
                        <div class="card-body">
                            <div class="chart-bar">
                                <canvas id="myForthBarChart" width="713" height="256" style="display: block; height: 320px; width: 892px;"></canvas>
                            </div>
                        </div>
                    </div> 
                </div>    
            </div>
        </div>
        
        <div style="background-color:#0a2cb1;">
            <div class="container" id="contactId">
                <footer class="py-3">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">About</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-light">Contact</a></li>
                    </ul>
                    <h3 class="text-center text-light">Contact Us</h3>
                    <div class="d-flex justify-content-center">
                        <a href="https://www.facebook.com/profile.php?id=100077330374580" class="text-center text-light px-2"><i class="bi bi-facebook fs-3"></i></a>
                        <a href="#" class="text-center text-light px-2"><i class="bi bi-pin-map-fill fs-3"></i></a>
                    </div><br>
                    <p class="text-center text-light m-0"><strong>Disclaimer</strong></p>
                    <p class="text-center text-light"><i>This system is for educational purposes only. The information provided is not professional advice<br> and  should be used at your own risk. We are not responsible for any results from using this system.</i></p>
                </footer>
            </div>
        </div>

        <script>
async function fetchRespondentCount() {
    const url = 'https://script.google.com/macros/s/AKfycbzAfDrWYNtcr5plk3hJALA-cu_hzNKXlWVw1SgeK5rzYuIAdJ7FuuQbrWA6CxFU1SbN/exec'; // Replace with your web app URL

    try {
        const response = await fetch(url);
        const data = await response.json(); // Parse JSON response

        // Update the HTML with the fetched data
        document.getElementById('respondentCount').textContent = data.count;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('respondentCount').textContent = 'Error loading data';
    }
}

fetchRespondentCount();
</script>

        <script src="script.js"></script>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    </body>
</html>