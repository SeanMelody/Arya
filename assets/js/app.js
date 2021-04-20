console.log("connected")

const aryaImg = document.querySelectorAll(".aryaImg")

const imgOptions = {
    threshold: 1,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("Arya Image Intersecting!");
            const dataSrc = entry.target.getAttribute("data-src");
            entry.target.src = dataSrc;
            imgObserver.unobserve(entry.target)
        }
    }, imgOptions);

})

aryaImg.forEach((image) => {
    imgObserver.observe(image)
})