(function (){
    let movil = document.getElementById("movil");
    let principal = document.getElementById("principal");
    // console.log(movil,principal);

    movil.addEventListener('click', function(){
          principal.style.display = principal.style.display == 'flex' ? 'none' : 'flex';
    }
    
    );

})();