document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const identifier = document.getElementById('identifier').value;
    const email = document.getElementById('email').value;
    const referential = document.getElementById('referential').value;
    
    console.log('Inscription soumise :', { name, identifier, email, referential });
    
    alert('Réussi !');
    });