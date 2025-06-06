async function getListResources(id) {
    const result = await fetch(`https://reqres.in/api/users/${id}`,{
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
    const numRandom = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
    const item = await getListResources(numRandom);
    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = '';


    console.log(item);
    
        const itemElement = document.createElement('div');
        itemElement.className = 'list-item';
        itemElement.innerHTML = `
            <div class="color-box" style="background-color:${item.color};"></div>
            <h3>${item.first_name} ${item.last_name}</h3>
            <picture class="image-container">
                <img src="${item.avatar}" alt="${item.avatar}" class="image">
            </picture>
        `;
        listContainer.appendChild(itemElement);
}

PrintList();