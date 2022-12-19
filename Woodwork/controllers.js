const Woodwork = require("./model")


exports.listTimber = async (req, res) => {
    try {
        const result = await Woodwork.find({})
        res.send({result})
        console.log(result,"sd")
    } catch (error) {
        res.send({error})
        
    }
}

exports.createTimber = async (req, res) => {
    //req request , res response
    try {
      const userObj = {
        timber_price:req.body. timber_price,
        lumber_price: req.body. lumber_price,
        wyrdwoodplank_price:req.body.wyrdwoodplank_price,
        ironwoodplank_price: req.body. ironwoodplank_price,
        greenwood_price:req.body.greenwood_price,
        agedwood_price: req.body.agedwood_price,
        wyrdwood_price:req.body.wyrdwood_price,
        ironwood_price: req.body.ironwood_price,
        sandpaper_price: req.body.sandpaper_price,
   
      };
      const timberPrice = await Woodwork.create(userObj);
      res.send({ timberPrice });
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };