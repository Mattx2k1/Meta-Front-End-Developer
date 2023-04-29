// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    let message = "%c" + txt;
    let style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message);
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    let fontStyle = "color: tomotato; font-size: 50px"
    if (reason == "birthday") {
        console.log(`%cHappy birthday"`, fontStyle);
    }
} else if (reason == "champions") {
    

}

// Task 3: Run both the consoleStyler and the celebrateStyler functions


// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate() {
    
}
// Call styleAndCelebrate