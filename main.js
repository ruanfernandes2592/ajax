document.addEventListener('DOMContentLoaded', function() {
    const name = document.querySelector('#name');
    const userName = document.querySelector('#username');
    const avatar = document.querySelector('#avatar');
    const repos = document.querySelector('#repos');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/ruanfernandes2592')
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            name.innerText = json.name;
            userName.innerText = json.login;
            avatar.src = json.avatar_url;
            following.innerText = json.following;
            followers.innerText = json.followers;
            repos.innerText = json.public_repos;
            link.href = json.html_url
        }).catch(function() { // Caso ocorra um erro na execução do código.
            alert('Ocorreu um erro ao buscar o endereço, tente novamente mais tarde.');
        });
});