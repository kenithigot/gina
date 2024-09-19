$(document).ready(function() {
    // Initialize the DataTable and assign it to the table variable
    table = $('#signalQuantityTable').DataTable({
        "searching": true,
        "processing": true,
        "ajax": {
            "url": "displayData.php",
            "type": "POST"
        },
        "order": [[0, 'desc']],
        "columns": [
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    return meta.row + 1; // This will give the row number
                }
            },
            { "data": "name" },  // Column mapped to the 'name' field from database
            { "data": "valueNum" }, // Column mapped to the 'valueNum' field from database
            {
                "data": null,
                "render": function (data, type, row) {
                    return '<button class="btn btn-danger btn-sm deleteData" data-id="' + row.data_id + '">Delete</button>';
                }
            }
        ]
    });
});

// Delete Data
$(document).on('click', '.deleteData', function (e) {
    e.preventDefault();
    var data_id = $(this).data('id');

    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this client data!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: 'deleteData.php',
                type: 'POST',
                data: { data_id: data_id }, // Pass the correct ID
                dataType: 'json',
                success: function (response) {
                    if (response.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Successfully Deleted!",
                            text: "User Data Deleted successfully."
                        });
                        table.ajax.reload(); // Reload the table after deletion
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "Failed to delete user data: "
                        });
                    }
                },
                error: function () {
                    alert('Error deleting client');
                }
            });
        }
    });
});

// JavaScript validation
document.getElementById('myForm').addEventListener('submit', function (event) {
    var inputData = document.getElementById('floatingInput').value.trim();

    if (inputData === "") {
        event.preventDefault(); // Prevent form submission
        Swal.fire({
            icon: 'error',
            title: 'Input Required',
            text: 'Please fill in the second content field.',
        });
    }
});

