function functSearch () {
    if ((document.querySelector('.inputLupa').style.width == 0) || (document.querySelector('.inputLupa').style.width == '0px')) {
       
    document.querySelector('.inputLupa').style.width = '18vw';
    document.querySelector('.boxInput').style.border = 'solid white 1px';
    
    
    } else {
        
        document.querySelector('.inputLupa').style.width = 0;
        document.querySelector('.boxInput').style.border = 'none';      
    }
};

function functMenu () {
    // if (document.querySelector('.menuSaida').style.display == 'none'){
    // document.querySelector('.menuSaida').style.display = 'flex';
    // }

    // else {
    //     document.querySelector('.menuSaida').style.display = 'none';
    // }


}