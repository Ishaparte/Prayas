const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    },
    pid:{
        type: Number,
    },
    year:{
        type: String,
    },
    department:{
        type: String,
    },
});


// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

module.exports = mongoose.model('User', UserSchema);