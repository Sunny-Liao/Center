import axios from 'axios';             //Transform request and response data
import querystring from 'querystring';  // Parse and stringify URL query strings


export const register = newUser => {
    var data = querystring.stringify({
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    });

    return axios({
        method:'post',
        url:'http://localhost:3000/users/register',
        data, 
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    })
    .then(response => { 
        console.log(response)
    })
    .catch(error => {
        console.log(error.response)
    });
}
    // return axios
    //     .post('http://localhost:3000/users/register', 
    //     {
    //         data: {
    //         first_name: newUser.first_name,
    //         last_name: newUser.last_name,
    //         email: newUser.email,
    //         password: newUser.password
    //         }
    //     },
    //     {
    //         headers: {
    //             'Content-Type': 'application/json; charset=UTF-8',
    //             'connection':'keep-alive'   
    //         }
    //     })
    //     .then(function(response) {
    //         console.log(response.data);
    //      }).catch(function(error) {
    //         console.log(error.response);
    //      });
        // .then(response => {
        //     alert("Registered!")
        // })
        // .catch(err => {
        //         console.log(err);

        // })


export const login = user => {
    return axios
        .post('http://localhost:3000/users/login', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data.user)
            return response.data.user
        })
        .catch(err => {
            alert("No user found")
        })
}

export const getUsers = (email) => {
    return axios
        .post('http://localhost:3000/users', {
            email: email
        })
        .then(response => {
            return response.data.users
        })
        .catch(err => {
            console.log(err)
        })
}

export const sendToUser = (image, email) => {
    return axios
        .post('http://localhost:3000/send', {
            email,
            image
        })
        .then(response => {
            alert(`sent to ${email}`)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}