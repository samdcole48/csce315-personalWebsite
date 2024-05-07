function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
        const s1 = document.getElementById("mainStyleSheet");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
        const fileName = s1.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    //if file name is light.css set it to dark.css, else set it to light.css
    //can also just write a normal if else statement like you would in c++ or java
        const newFileName = fileName == "darkMode.css" ? "neonMode.css" : "darkMode.css"
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
        s1.setAttribute("href", newFileName);

        const s2 = document.getElementById("logo");
        const fileName2 = s2.getAttribute("src");
        const newFileName2 = fileName2 == "darkModeLogo-noBackground.png" ? "neonModeLogo.png" : "darkModeLogo-noBackground.png";
        s2.setAttribute("src", newFileName2);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("currStyle", newFileName);
    localStorage.setItem("currLogo", newFileName2);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    const style = localStorage.getItem("currStyle") || "darkMode.css";
    // 2 (b) get html style element by ID
    const s3 = document.getElementById("mainStyleSheet");
    // 2 (c) replace href attribute of html element.
    s3.setAttribute("href", style);

    const logo = localStorage.getItem("currLogo") || "darkModeLogo-noBackground.png";
    const s4 = document.getElementById("logo");
    s4.setAttribute("src", logo);
    
}
