//writing code for making rules box appear and disappear
let rule_box = document.querySelector("#rules");
let rule_button = document.querySelector("button#rules");

rule_button.addEventListener("click", onClicked);
function changeTextOfButton() {
    if (rule_button.textContent === "Hide Rules")
        rule_button.textContent = "Rules";
    else
        rule_button.textContent = "Hide Rules";
}
function onClicked() {
    rule_box.classList.toggle("invisible");
    changeTextOfButton();
}