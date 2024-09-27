function toggleProject(projectNumber) {
    const details = document.getElementById(`project${projectNumber}-details`);
    const shortText = document.getElementById(`project${projectNumber}-short`);

    if (details.style.display === "block") {
        details.style.display = "none";
        shortText.style.display = "block";
    } else {
        details.style.display = "block";
        shortText.style.display = "none";
    }
}

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

