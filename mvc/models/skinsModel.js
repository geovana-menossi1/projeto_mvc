const Skin = {
    name: "",
    description: "",
    foto: "",
    seeInfo: function(){
        return `${this.name} and ${this.description}`
    },
    toJSON: function(){
        return{
        "name": this.name,
        "description": this.description,
        "foto": this.foto
        }
    }
}
module.exports = Skin