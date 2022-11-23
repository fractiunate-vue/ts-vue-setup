import Api from '@/services/Api'

export default {
    async register(credentials) {
        console.log(credentials);
        return Api().post('register', credentials);
    }
}


// AuthenticationService.register({
//     email: 'testmail@gmail.com',
//     password: 'changeme'
// });
