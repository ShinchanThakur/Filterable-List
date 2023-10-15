const filterInput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    const filterText = filterInput.value.toUpperCase();
    const ul = document.getElementById('names');
    const li = ul.querySelectorAll('li.collection-item');

    li.forEach((listItem) => {
        const a = listItem.getElementsByTagName('a')[0];
        if (a.innerHTML.toUpperCase().indexOf(filterText) < 0)
            listItem.style.display = 'none';
        else
            listItem.style.display = '';
    });
}