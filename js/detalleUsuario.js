document.addEventListener('DOMContentLoaded', () => {
    fetch('https://reqres.in/api/users/2', { method: 'GET' ,
        headers: {
            'Content-Type': 'application/json',
           'x-api-key': 'reqres-free-v1'
        }
    })
        .then(response => response.json())
        .then(data => {
            const user = data.data;
            const container = document.getElementById('user-container');
            container.innerHTML = `
                <img src="${user.avatar}" alt="Avatar de ${user.first_name}" class="avatar">
                <h2>${user.first_name} ${user.last_name}</h2>
                <p>Email: ${user.email}</p>
            `;
        })
        .catch(error => {
            document.getElementById('user-container').innerHTML = '<p>Error al cargar el usuario.</p>';
        });
});