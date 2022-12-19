const User = require("./model")


exports.listUser = async (req, res) => {
    try {
        const result = await User.find({})
        res.send({result})
        console.log(result,"sd")
    } catch (error) {
        res.send({error})
        
    }
}