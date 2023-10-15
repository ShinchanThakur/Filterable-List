const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const filterText = filterInput.value.toUpperCase();
    const ul = document.getElementById('names');
    const li = ul.querySelectorAll('li.collection-item');
}