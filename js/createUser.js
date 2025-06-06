document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('createUserForm');
    const div = form.parentElement;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        
        const nombre = document.getElementById('nombre').value;
        const email  = document.getElementById('email').value;
        const avatar = document.getElementById('avatar').value;

        try {
            const response = await fetch('https://reqres.in/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'reqres-free-v1'

                },
                body: JSON.stringify({ nombre, email, avatar })
            });

            const data = await response.json();

            
            if (response.ok) {
                const msg = document.createElement('div');
                msg.className = 'success-message';
                msg.textContent = 'Usuario creado';
                div.appendChild(msg);
                form.reset();
            } else {
                throw new Error('Error al crear usuario');
            }
            
        } catch (err) {
            const msg = document.createElement('div');
            msg.className = 'error-message';
            msg.textContent = err.message;
            div.appendChild(msg);
        }
    });
});