<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SweetAlert Library -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- Bootstrap Icons CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    
    <!-- DataTables Bootstrap 4 CSS -->
    <link rel="stylesheet" href="https://cdn.datatables.net/2.1.6/css/dataTables.bootstrap4.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="../style.css">

    <title>Signal Quantity</title>

    <!-- Sidebar Path  -->
    <?php include('../../includes/sidebar.php'); ?>
    
</head>
<body>

    <!-- CONTENT -->
    <section id="content">
        <!-- MAIN -->
        <main>
            <nav>
                <i class='bi bi-list'></i> <!-- Burger icon for sidebar toggle -->
            </nav>
            <div class="head-title">
                <div class="left">
                    <h1>Signal Quantity</h1>
                    <ul class="breadcrumb">
                        <li><a href="../" class="fs-4 text-decoration-none" style="border-bottom:2px solid #506efd">Dashboard</a></li>
                        <li><i class='bi bi-slash-lg fs-4 text-primary'></i></li>
                        <li><a class="fs-4 text-decoration-none text-dark" href="#">Signal Quality</a></li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <form method="POST" id="myForm">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingName" placeholder="Name (Optional)">
                            <label for="floatingName">Name (Optional): <span style="color:red">*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" name="inputData" placeholder="Enter">
                            <label for="floatingInput">Second Content: <span style="color:red">*</span></label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Enter">
                            <label for="floatingInput">Third Content: <span style="color:red">*</span></label>
                        </div>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary" type="submit" name="submitData">Submit</button>
                        </div><br>
                    </form>   
                </div>
                <div class="col-md-9">
                    <div class="card p-4">
                        <div class="table-responsive">
                            <table id="example" class="display table" style="width:100%">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name (Optional)</th>
                                        <th>Input</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- MAIN -->
    </section>
    <!-- CONTENT -->

    <?php include('../../src/script.php'); ?>
    <script src="../script.js"></script>
    <script src="script.js"></script>
    
</body>
</html>
