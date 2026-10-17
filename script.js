document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("ButtonName");
    const output = document.getElementById("output");
    
    button.addEventListener("click", () => {
        runScript();
    });
    function runScript() {
        console.log("JavaScript executed!");

        output.textContent = "JavaScript executed successfully!";

        alert("Hello from script.js!");
    }
});
