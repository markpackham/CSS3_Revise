//Hide the paragraph so it looks like we're loading it after the spinner has spun
document.querySelector(".main p").style.display = "none";
document.querySelector(".main").classList.add("spinner-1");

// Mimic Server Request
setTimeout(() => {
    document.querySelector(".main").classList.remove("spinner-1");
    //Show the paragraph so it looks like it magically loaded
    document.querySelector(".main p").style.display = "block";
}, 4000);