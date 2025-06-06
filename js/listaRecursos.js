fetch('https://reqres.in/api/unknown', {
    headers: {'x-api-key': 'reqres-free-v1'}
})
    .then(responde => {
        if (!responde.ok) {
            throw new Error('Network response was not ok');
        }
        return responde.json();
    }).then(data => {
        console.log('Datos:', data.data);
        const users = data.data;
        const tbody = document.querySelector('table tbody');
        tbody.innerHTML = '';
        users.forEach((user, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${user.name}</td>
                <td>${user.year}</td>
                <td>${user.pantone_value}</td>
                <td>${user.color}</td>
                `;
            tbody.appendChild(tr);
        });
    }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        const tbody = document.querySelector('table tbody');
        tbody.innerHTML = '<tr><td colspan="4">Failed to load users.</td></tr>';
    });