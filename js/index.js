fetch('https://reqres.in/api/users', {
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
                <td><img src="${user.avatar}" alt="Avatar de ${user.first_name}" width="48" height="48" class="rounded-circle"></td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
            `;
            tbody.appendChild(tr);
        });
    }).catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        const tbody = document.querySelector('table tbody');
        tbody.innerHTML = '<tr><td colspan="4">Failed to load users.</td></tr>';
    });