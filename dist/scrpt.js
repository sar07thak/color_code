let color_box = document.querySelector(".color_box");
let click_btn = document.querySelector(".click_btn");
let again_btn = document.querySelector(".again_btn");
let display_Code = document.querySelector(".display_code");


click_btn.addEventListener("click",()=>{
    let random_color = Math.trunc(Math.random()*16777215).toString(16);
    console.log(random_color);
    let code = "#"+random_color;
    color_box.style.backgroundColor = code ;
    display_Code.innerHTML=code;
})

again_btn.addEventListener("click", () => {
    display_Code.innerHTML="Code is : ___________";
    color_box.style.backgroundColor=" #0f172a";
})