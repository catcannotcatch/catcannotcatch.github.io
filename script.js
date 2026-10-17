WaCleanerBttn.onclick = () => {
    const input = prompt("Enter your text:");
    const regex = prompt("Enter regex pattern: \\[.*?~~: , \\*|\"|', \\[.*\]");
    const output = input.replaceAll(/${regex}/g, "");
//    const output = input.replace(new RegExp(regex, "g"), "");
    prompt(output);
};
