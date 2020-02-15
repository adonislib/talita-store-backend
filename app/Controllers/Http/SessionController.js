'use strict'

const User = use('App/Models/User');

class SessionController {
    async create ({ request, auth, response }) { 
        const { email, password } = request.all();
        const token = await auth.attempt(email, password);
        const user = await User.findBy('email', email);

        return response.json({
            user,
            token
        });
    }
}

module.exports = SessionController;