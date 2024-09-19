<?php
    include('../../src/authentication.php');

    if (isset($_POST["submitData"])) {

        $inputData = mysqli_real_escape_string($conn, $_POST["inputData"]);
        $selectQuality = mysqli_real_escape_string($conn, $_POST["selectQuality"]);


        $stmt = $conn->prepare("INSERT INTO dav_data (valueNum, uniqueKey) VALUES (?, ?)");
        $stmt->bind_param("ss", $inputData, $selectQuality);

        if ($stmt->execute()) {
            echo "<script>
                window.onload = function() {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Data Saved Successfully',
                    }).then(() => {
                        window.location.href = '../signalQuantity/';
                    });
                };
            </script>";
        } else {
            echo "<script>
                window.onload = function() {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'There was a problem saving the data.',
                    });
                };
            </script>";
        }

        $stmt->close();
    }
?>
