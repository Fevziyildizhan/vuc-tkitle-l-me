var kilo = parseFloat(prompt('Kilonuzu giriniz'))
var boy = parseFloat(prompt('boyunuzu giriniz'))



if(kilo > 0 && boy >0){
   
    var hesap = kilo/(boy/100*boy/100)
    
}else if(hesap < 18.5){
    console.log('zayıfsız : ' +hesap)
}else if(hesap >18.5 && hesap <25){
    console.log('gayet sağlıklı : ' + hesap)
}else if(hesap > 25){
    console.log('kilolusunuz : '+hesap)
}else{
    console.log('böyle kilo olmaz tekrar dene')
}
console.log(hesap)
