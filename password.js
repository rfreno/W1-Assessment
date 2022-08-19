// Create a variable called password and set its value to a string of your choice
let password = "strongpassword!"

// test first to see if the password is at least 10 chars
if (password.length > 10) {
    // test the password for a maximum length of 20 chars
    if (password.length > 20){
        console.log("That's a little long, don't you think? \n" + 
        "  __   __ _______ __   __   _______ _______ ___ ___            \n" +
        " |  | |  |       |  | |  | |       |   _   |   |   |           \n" +
        " |  |_|  |   _   |  | |  | |    ___|  |_|  |   |   |           \n"+
        " |       |  | |  |  |_|  | |   |___|       |   |   |           \n"+
        " |_     _|  |_|  |       | |    ___|       |   |   |___   ___  \n"+
        "   |   | |       |       | |   |   |   _   |   |       | |   | \n"+
        "   |___| |_______|_______| |___|   |__| |__|___|_______| |___| \n")
    } // test the password for at least one uppercase and one lowercase letter 
    else if (/[a-z]/.test(password) === false || /[A-Z]/.test(password) === false) {
        console.log("There's a 'shift' key on your keyboard for a reason. \n" + 
        "  __   __ _______ __   __   _______ _______ ___ ___            \n" +
        " |  | |  |       |  | |  | |       |   _   |   |   |           \n" +
        " |  |_|  |   _   |  | |  | |    ___|  |_|  |   |   |           \n"+
        " |       |  | |  |  |_|  | |   |___|       |   |   |           \n"+
        " |_     _|  |_|  |       | |    ___|       |   |   |___   ___  \n"+
        "   |   | |       |       | |   |   |   _   |   |       | |   | \n"+
        "   |___| |_______|_______| |___|   |__| |__|___|_______| |___| \n")
    }// test the password for at least one number and one character
    else if ((/[0-9]/.test(password) === true) && (/[A-Za-z]/.test(password) === true)) {
        console.log("Great password choice!\n" + 
      "     _______. __    __    ______   ______  _______     _______.     _______.    __  \n" +
      "    /       ||  |  |  |  /      | /      ||   ____|   /       |    /       |   |  | \n" +
      "   |   (----`|  |  |  | |  ,----'|  ,----'|  |__     |   (----`   |   (----`   |  | \n" +
      "    \\   \\    |  |  |  | |  |     |  |     |   __|     \\   \\        \\   \\       |  | \n" +
    ".----)   |   |  `--'  | |  `----.|  `----.|  |____.----)   |   .----)   |      |__| \n" +
    "|_______/     \\______/   \\______| \\______||_______|_______/    |_______/       (__) \n")
    } 
} else { // default message for failure
    console.log("That's actually a weak password. \n" + 
   "  __   __ _______ __   __   _______ _______ ___ ___            \n" +
   " |  | |  |       |  | |  | |       |   _   |   |   |           \n" +
   " |  |_|  |   _   |  | |  | |    ___|  |_|  |   |   |           \n"+
   " |       |  | |  |  |_|  | |   |___|       |   |   |           \n"+
   " |_     _|  |_|  |       | |    ___|       |   |   |___   ___  \n"+
   "   |   | |       |       | |   |   |   _   |   |       | |   | \n"+
   "   |___| |_______|_______| |___|   |__| |__|___|_______| |___| \n")
}
