const axios = require('axios').default;
axios.all([
    axios.get('https://api.github.com/users/elisey20')
])
    .then(response => {
        console.log('Login: ', response[0].data.login,'\nDate created: ', response[0].data.created_at);
    });