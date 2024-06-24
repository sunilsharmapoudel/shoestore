import User from "../models/user.model.js";

const signup = async (req, res, next) => {
    try {
        let { name, email, password, isAdmin } = req.body;
        let userexists = await User.findOne({ email }) //{email: email} since name of key and value are same we can use single name
        if (userexists) {
            let err = new Error(`User with email ${email} already exists!`);
            err.status = 400;
            throw err;
        }

        let newuser = await User.create({
            name,
            email,
            password,
            isAdmin,
        });


        res.send({
            message: `User Registered Sucessfully`,
            user: {
                _id: newuser.id,
                name: newuser.name,
                email: newuser.email,
                isAdmin: newuser.isAdmin,
            },
        });
    }
    catch (error) {
        next(error)
    }
}

export { signup }