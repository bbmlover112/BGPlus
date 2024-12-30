async function LoadExtension(){
    try {
    const response = await fetch("https://raw.githubusercontent.com/bbmlover112/BGHotPatch/refs/heads/main/main.js");
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

        const respText = await response.text()
        eval(respText)
    } catch (error) {
        console.error(error.message);
    }
}

console.log("Loading extension.")
LoadExtension();