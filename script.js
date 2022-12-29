// Déclaration de la première variable
let star = "";
let n = 6;
for(i=0; i<=6; i++)
debugger;
{
    // affiches une nouvelle ligne vertical
    for(j=0; j<i; j++){ 

        star += " * ";
    }
    // "\n" les retours à la ligne
    star += "\n";
}
alert(`Le resultat est :\n${star}`);