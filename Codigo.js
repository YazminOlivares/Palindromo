let palindromo = "reconocer";
let palindro2 = palindromo.split('').reverse().join('');

if(palindromo.match(palindro2)){
    console.log("La palabra es un palindromo.")
}else{
    console.log("La palabra no es un palindromo.")
}
