// Variable declaration
let star = "";

for(i=0; i<=6; i++)
{
    // affiches une nouvelle ligne vertical
    for(j=0; j<i; j++){ 
        
        star += " * ";
    }
    // "\n" return
    star += "\n";
}
alert(`Le result's :\n${star}`);
