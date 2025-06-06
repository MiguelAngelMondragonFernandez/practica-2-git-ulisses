async function getListResources() {
    const result = await fetch('https://reqres.in/api/unknown',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'reqres-free-v1'
        }
    })
    .then(res => res.json()).catch(error => error);
    return result.data;
}
const PrintList = async () => {
    const list = await getListResources();
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';

    list.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'list-item';
        itemElement.innerHTML = `
            <div class="color-box" style="background-color:${item.color};"></div>
            <h3>${item.name}</h3>
            <div class="resource-info">
            </div>
        `;
        listContainer.appendChild(itemElement);
    });
}

PrintList();