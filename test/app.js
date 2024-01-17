document.addEventListener('DOMContentLoaded', function() {
    var table = document.getElementById('responsiveTable');
    table.addEventListener('click', function(e) {
        var row = e.target.parentNode;
        if (row.tagName === 'TR') {
            row.classList.toggle('clicked');
        }
    });
});

function toggleDetails(button) {
    var currentRow = button.parentNode.parentNode;
    var nextRow = currentRow.nextElementSibling;
    nextRow.classList.toggle('show');
}

