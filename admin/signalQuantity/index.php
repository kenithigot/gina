<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Boxicons -->
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet'>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- My CSS -->
    <link rel="stylesheet" href="../style.css">
    <title>Signal Quantity</title>
</head>
<body>

    <!-- SIDEBAR -->
    <section id="sidebar">
        <a href="#" class="brand text-decoration-none">
            <i class='bi bi-emoji-smile-fill'></i>
            <span class="text mx-3">Admin Dashboard</span>
        </a>
        <ul class="side-menu top list-unstyled">
            <li class="active">
                <a href="#">
                    <i class='bi bi-speedometer'></i>
                    <span class="text mx-2">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="signalQuantity/">
                    <i class="bi bi-reception-4"></i>
                    <span class="text mx-2">Signal Quality</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bi bi-tv'></i>
                    <span class="text mx-2">TV Channel Quality</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bi bi-headphones'></i>
                    <span class="text mx-2">Service Quality</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bi bi-geo'></i>
                    <span class="text mx-2">Accessibility</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <i class='bi bi-star'></i>
                    <span class="text mx-2">Overall Experience</span>
                </a>
            </li>
        </ul>
        <ul class="side-menu list-unstyled">
            <li>
                <a href="#" class="logout">
                    <i class='bi bi-box-arrow-in-left'></i>
                    <span class="text mx-2">Logout</span>
                </a>
            </li>
        </ul>
    </section>
    <!-- SIDEBAR -->

    <!-- CONTENT -->
    <section id="content">
        <!-- MAIN -->
        <main>
            <nav>
                <i class='bx bx-menu'></i> <!-- Sidebar toggle icon -->
                <!-- Other nav content -->
            </nav>
            <div class="head-title">
                <div class="left">
                    <h1>Signal Quantity</h1>
                    <ul class="breadcrumb">
                        <li><a href="#">Signal Quantity</a></li>
                        <li><i class='bx bx-chevron-right'></i></li>
                        <li><a class="active" href="#">Home</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-7">
                    <form class="row g-3">
                        <div class="col-md-6">
                            <label for="aveSignalQuantity" class="form-label">Enter the Average Survey:</label>
                            <input type="text" class="form-control" id="aveSignalQuantity" placeholder="Enter the numbers of survey">
                        </div>
                        <button type="button" class="btn btn-primary btn-lg">Large button</button>
                    </form>
                </div>
                <div class="col-5">
                    <!-- <div class="row">
                        <div class="col-7">
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                        </div>
                        <div class="col">
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                        </div>
                    </div> -->
                </div>
            </div>
            
        </main>
        <!-- MAIN -->

        
    </section>
    <!-- CONTENT -->

    <script>
        // Sample area chart configuration
        const ctx = document.getElementById('myAreaChart').getContext('2d');
        const myAreaChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                    label: 'Revenue',
                    data: [1000, 1500, 1200, 1700, 1400, 1900],
                    backgroundColor: 'rgba(78, 115, 223, 0.05)',
                    borderColor: 'rgba(78, 115, 223, 1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    </script>

    <script src="script.js"></script>
</body>
</html>