const input = document.querySelector('#intext');
const button = document.querySelector('#btngenera');

button.addEventListener('click', ()=>{
    if(input.value.length == 0){
        document.getElementById('mensaje').innerHTML='<p style="font-family: univia-pro; font-size:1rem; margin-top:-1%; color:red; ">Debes agregar algo...</p>';
    }else{
        document.getElementById('mensaje').innerHTML='<p style="font-family: univia-pro; font-size:1rem; margin-top:-1%; color:green;">Descarga tu QR</p>';
    }
});