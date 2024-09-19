<?php
include('../../src/authentication.php');

if (isset($_POST["data_id"])) {
    $data_id = $_POST["data_id"];

    // Prepare the SQL statement
    $stmt = $conn->prepare("DELETE FROM dav_data WHERE data_id = ?");
    $stmt->bind_param("i", $data_id);

    // Execute the prepared statement
    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => $stmt->error]); // Provide error details
    }

    $stmt->close();
    mysqli_close($conn);
} else {
    echo json_encode(['success' => false]);
}
