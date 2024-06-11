const Home = require("../models/HomeModel")

class HomeController{
    static async post(req, res){
        const home = new Home(req.body);
        try{
            const data = await home.register();
            res.status(200).json(data);
        } catch(error){
            res.status(400).json({error: error.message});
        }
    }

    static async get(req, res){
        const home = new Home(req.body);
        try{
            const data = await home.register();
            console.log(data);
            res.status(200).json(data);
        } catch(error){
            res.status(400).json({error: error.message});
        }
    }

    static async delete(req, res){
        const home = new Home(req.body);
        try{
            const data = home.delete();
            res.status(200).json(data);
        } catch(error){
            res.status(400).json({error: error.message});
        }
    }
}
module.exports = HomeController;