const value = document.querySelector("#value");
const bar = document.querySelector(".strength");
const show = document.querySelector(".show");

value.addEventListener("input", ()=>{
    const passInput = value.value;
    let strength = 0;
    console.log(passInput);
    if(passInput.length >=8) strength += 1;  
    if(/[0-9]/.test(passInput)) strength += 1;
    if(/[A-Z]/.test(passInput)) strength += 1;
    if(/[^A-Za-z0-9]/.test(passInput)) strength += 1;

    switch(strength){
        case 0:
        case 1:{
                (bar.style.width = "25%"),
                (bar.style.backgroundColor = "Red"),
                (show.innerHTML = "Weak");
                break;
            }
        case 2: {
                (bar.style.width = "50%"),
                (bar.style.backgroundColor = "Yellow"),
                (show.innerHTML = "Medium");
                break;
            }
        case 3: {
                (bar.style.width = "75%"),
                (bar.style.backgroundColor = "Orange"),
                (show.innerHTML = "Strong");
                break;
            }   
        case 4: {
                (bar.style.width = "100%"),
                (bar.style.backgroundColor = "Green"),
                (show.innerHTML = "Very Strong");
                break;
            }     
    }
    });
