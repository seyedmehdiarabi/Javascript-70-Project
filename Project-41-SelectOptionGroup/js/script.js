const country = document.getElementById('country');

country.onchange = ()=>{
    document.getElementById('select_country').innerHTML = country.value + " :"
}