const password_input = document.querySelector(".pass-container input");
const copy_icon = document.querySelector(".pass-container img");
const range_box = document.querySelector(".pass-range input");
const range_numb = document.querySelector(".pass-range .range-num");
const gen_btn = document.querySelector(".pass-generate");

// console.log(password_input , copy_icon , range_box , range_numb , gen_btn);

// =======================================================
// function for range box:
const range_input = () => {
  range_numb.innerText = range_box.value;
  generate_pass();
};
// range box add event listener:
range_box.addEventListener("input", range_input);

// =======================================================

// generate button working :

// characters for generating random password:
let characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_+<>{}[]|:;,.";

const generate_pass = () => {
  let new_password = ""; //assign variable

  // for loop used and run till range input value
  for (let i = 0; i < range_box.value; i++) {
    let random = Math.floor(Math.random() * characters.length);
    // console.log(characters[random]); just for checking value
    new_password += characters[random];

  }

  password_input.value = new_password;
  
  let copy_src2 = "/icon/icon 7.png"
  copy_icon.src = copy_src2;
};
generate_pass();
gen_btn.addEventListener("click", generate_pass);
// =======================================================
// copy pass input value with copy icon

// function for copy icon:
let copy_src = "/icon/icon 6.png"
const copy = () => {
  navigator.clipboard.writeText(password_input.value);
    copy_icon.src = copy_src;

};
copy_icon.addEventListener("click", copy);


