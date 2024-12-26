const input=document.querySelectorAll("input")
const button=document.querySelectorAll("button")
const elementsWrapper=document.querySelector(".elements")


const orderedlist=document.createElement("ol");
orderedlist.classList.add("some-class");

button.addEventListener("click",()=>{

    const listItem=document.createElement("li")
    listItem.classList.add("test");

    const headerTwo=document.createElement("h2");
    headerTwo.textContent=input.value;
    listItem.append(headerTwo);
    orderedlist.append(listItem);
    input.value="";

});
elementsWrapper.append(orderedlist);