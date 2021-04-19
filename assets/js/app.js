console.log("connected")

const imgOfUs = document.querySelectorAll("imgOfUs");

const imgOptions = {
    threshold: 1,
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log("Img of Us Intersecting!");
            const dataSrc = entry.target.getAttribute("data-src");
            entry.target.src = dataSrc;
            imgObserver.unobserve(entry.target)
        }
    }, imgOptions);

})

imgOfUs.forEach((image) => {
    imgObserver.observe(image)
})