let elForm = document.querySelector("form");
let elFirstName = document.querySelector("#first-name");
let elLastName = document.querySelector("#last-name");
let elUserImg = document.querySelector("#user-img");
let elButton = document.querySelector("#submit-btn");

elForm.addEventListener("submit", function(e){
    e.preventDefault();
    let elUl = document.querySelector("ul");
    const elLi = document.createElement("li");
    elLi.className ="flex flex-col gap-5 w-1/5 m-auto mt-10 py-8 px-5 shadow-2xl rounded-2xl bg-gray-400 bg-opacity-50";
    const img = document.createElement("img");
    img.setAttribute("src" ,`${elUserImg.value}`)
    let textName = document.createElement("h2")
    let textName2 = document.createElement("h2")
    textName.textContent = elFirstName.value;
    textName2.textContent = elLastName.value;
    elLi.appendChild(img)
    elLi.appendChild(textName)
    elLi.appendChild(textName2)
    elUl.appendChild(elLi);
})
