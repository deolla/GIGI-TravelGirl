// NO PROBLEM HERE.. JUST A MIDDLEWARE FUNCTION TO CHECK IF USER IS AUTHENTICATED OR NOT

// Function to ensure user is authenticated
export function ensureAuth(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("Authenticated");
        return next();
    } else {
        console.log("Not Authenticated");
        res.redirect('/');
    }
}

// Function to ensure user is a guest (not authenticated)
export function ensureGuest(req, res, next) {
    if (req.isAuthenticated()) {
        console.log("Authenticated");
        res.redirect('./homePage');
    } else {
        console.log("Not Authenticated");
        return next();
    }
}

// FUNCTION TO CHECK IF USER IS LOGGED IN
function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}
