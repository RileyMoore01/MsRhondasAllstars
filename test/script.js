function toggleDropdown(button) {
    // var currentRow = button.parentNode.parentNode;
    // var dropdownRow = currentRow.previousElementSibling;
    // dropdownRow.classList.toggle('show');

    var info = document.getElementsByClassName('extra');
    var block = document.getElementById('dropdown-content');
    block.style.display = 'block';

    for(var i = 0, length = info.length; i < length; i++) {
        console.log(info[i].style.display);
        if(info[i].style.display === ''){
            info[i].style.display = 'table-cell';
        } 
        else {
           info[i].style.display = '';
        } 
     }
}
