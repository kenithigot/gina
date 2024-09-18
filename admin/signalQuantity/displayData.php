<?php
    include('../../src/authentication.php');

    // Fetch data from the database table
    $sql = "SELECT * FROM dav_category";  // Add all required fields
    $result = $conn->query($sql);

    $data = array();

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
    }
    $conn->close();

    // Return the data in JSON format
    echo json_encode(array("data" => $data));
?>
