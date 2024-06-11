const mongoose = require("mongoose");

const HomeSchema = mongoose.Schema({
    name: {type: String, required: true},
    title: {type: String, required: true}
});

const HomeModel = mongoose.model("Teste", HomeSchema);

class Home{
    constructor(body){
        this.body = body;
    }

    async register(){
        const teste = await HomeModel.create(this.body);
        return teste;
    }
}

module.exports = Home;