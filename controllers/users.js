
const User = require("../models/user");
// const Listing=require("../models/listing");



module.exports.renderSignupForm= (req,res) => {
    res.render("users/signup.ejs");
}

module.exports.signup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;

        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err); // ✅ now correct
            }
            req.flash("success", "Welcome to Wanderlust!");
            return res.redirect("/listings"); // ✅ single response
        });

    } catch (e) {
        req.flash("error", e.message);
        return res.redirect("/signup"); // ✅ stop execution
    }
};

module.exports.renderLoginForm = (req,res) => {
    res.render("users/login.ejs");
}

module.exports.login = (req, res) => {
    req.flash("success","Welcome back to Wanderlust !");
    let redirectUrl = res.locals.redirectUrl || "/listings";
    return res.redirect(redirectUrl); // ✅ prevents double response
};

    module.exports.logout = (req, res, next) => {
    req.logout((err) => {
if(err){
   return next(err);
}
req.flash("success","you are logged out");
return res.redirect("/listings");
    })
}