const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const filterText = filterInput.value.toUpperCase();
    console.log(filterText);
}