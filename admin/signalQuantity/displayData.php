<?php
    include('../../src/authentication.php');

    // Fetch data from the database table
    $sql = "SELECT data_id, name, valueNum, serviceCategory FROM dav_data INNER JOIN dav_category ON dav_data.uniqueKey = dav_category.uniqueKey"; 

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
