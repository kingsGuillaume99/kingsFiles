var family = {
  self: "Sébastien",
  sister: "Laurence",
  brother: "Ludovic",
  cousin_1: "Pauline",
  cousin_2: "Guillaume",
};

if(!Object.prototype.debug){
    Object.prototype.debug = function(){
        var text =  'Object {\n';
        for ( var i in this ){
            if(i !== "debug"){
                text += '['+i+'] =>'+this[i]+'\n';
            }
        }

        alert(text +'}');
    }
}

family.debug();