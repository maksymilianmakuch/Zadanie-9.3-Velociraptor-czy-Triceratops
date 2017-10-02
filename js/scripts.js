var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUC = dinosaur.toUpperCase();
var text2 = text.replace('Velociraptor', dinosaurUC);
console.log(text2.substr(0,  text2.length/2 ));