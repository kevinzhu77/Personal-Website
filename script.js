var count = 0;

function scrollToSkills() {
    document.getElementById("skills").scrollIntoView();
}

function scrollToProjects() {
    document.getElementById("portfolio").scrollIntoView();
}

function scrollToExperiences() {
    document.getElementById("relevantExperience").scrollIntoView();
}

function openSideBar () {
    if (count % 2 == 0) {
        document.getElementById("sideBar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        count = count + 1;
    } else {
        document.getElementById("sideBar").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
        count = count + 1;
    }
}

function closeSideBar () {
    document.getElementById("sideBar").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    count = count + 1;
}