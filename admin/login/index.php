<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="../../style.css" rel="stylesheet">

        <!-- Sweetalert Library -->
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

        <!-- Bootstrap Library -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        
    </head>
    <body style="background-color:#6d46c7">
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div class="added p-5" style="border:1px solid #6d46c7">
            <form onsubmit="return login()">
                <div class="d-flex justify-content-center">
                    <img src="../../src/imgs/logo.png" alt="Logo" width="100" style="border-radius:9px">
                </div><br>
                <div class="mb-3">
                    <label for="adminEmail" class="form-label">Username:</label>
                    <input type="text" class="form-control" id="adminEmail" placeholder="Enter username">
                </div>
                <div class="mb-3">
                    <label for="adminPassword" class="form-label">Password:</label>
                    <input type="password" class="form-control" id="adminPassword" placeholder="Enter password">
                </div><br>
                <div class="d-flex justify-content-around">
                    <button type="button" class="btn btn-secondary px-4" onclick="backBtn()">Back</button>
                    <button type="submit" class="btn btn-primary px-4">Login</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        //Redirect to landing page
        function backBtn() {
            window.location.href = '../../'; 
        }

        // Function to handle the login process
        function login() {
            const username = document.getElementById("adminEmail").value;
            const password = document.getElementById("adminPassword").value;

            // Basic validation to check if fields are filled
            if (username === "" || password === "") {
                Swal.fire({
                    icon: 'warning',
                    title: 'Oops...',
                    text: 'Please fill in both fields.',
                    confirmButtonText: 'OK'
                });
                return false;
            }

            // Mock password check (you can replace this with actual validation)
            if (username === "admin" && password === "admin") {
                // Show success alert with a timer and redirect after the timer ends
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Redirecting ....',
                    timer: 3000, 
                    timerProgressBar: true, 
                    showConfirmButton: false, 
                    willClose: () => {
                        // Redirect to the next page after timer finishes
                        window.location.href = '../../admin/'; // Replace with your target page
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Wrong username or password.',
                    confirmButtonText: 'Try Again'
                });
            }
            return false; 
        }
    </script>
</body>
    
</html>