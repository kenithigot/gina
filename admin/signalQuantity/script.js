$(document).ready(function() {
    var table = $('#signalQuantityTable').DataTable({
        "searching": true,
        "processing": true,
        "serverSide": true,  // Ensure it's using server-side processing
        "ajax": {
            "url": "displayData.php",
            "type": "POST"
        },
        "order": [[0, 'asc']],
        "columns": [
            {
                "data": null,
                "render": function (data, type, row, meta) {
                    return meta.row + 1; // This will give the row number
                }
            },
            { "data": "input" },  // Column mapped to the 'name' field from database
            { "data": "input" }, // Column mapped to the 'input' field from database
            {
                "data": null,
                "render": function (data, type, row) {
                
                    return '<button class="btn btn-danger btn-sm">Delete</button>';
                }
            }
        ]
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

