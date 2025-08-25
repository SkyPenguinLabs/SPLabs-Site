const tldrSlides = [
    {
        title: "Home engineered skeletal software YOU get to play with!",
        image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/CourseDemoSS/SPLDemoApp_1SickBit.png",
        description: "This is a comprehensive overview of our course offerings and methodology. Our courses are designed to be practical, concise, and immediately applicable to real-world scenarios. So we spend time on courses which involve practical examples, building and engineering applications specific to that scenario, which makes it drastically different each time. This allows our courses to be fluid"
    },
    {
        title: "Diverse Content Coverage",
        image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/CourseDemoSS/SPLDemoApp_2ElectronLogin.png",
        description: "We even build apps using same styles and methodologies using other frameworks, such as ElectronJS, to practice topics such as ASAR reverse engineering, JS de-obfuscation, and more. "
    },
    {
        title: "Sample courses for everyone",
        image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/CourseDemoSS/SampleCoursesForAll.png",
        description: "Part of our anti-scam effort is to give you a taste of what you are getting before you buy it. If you don't like it, why would you buy it right? Each course samples about 10 pages of content which is free to read so you can grasp the structure, quality, and value of that in relation to your scenario!"
    },
    {
        title: "Quality for Everything!",
        image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/CourseDemoSS/CourseTwoPage.png",
        description: "Courses written and released by us, products released, and even experimental content attempts to build to the best quality it can for what we release them for! This is also why we aim to be the lowest priced provider out there. "
    },
    {
        title: "BTW, WE DO IT RIGHT! Not, like everyone else",
        image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/CourseDemoSS/Samples.png",
        description: "We actually WANT you to find the demo's, so we make it extremely easy to navigate the collective repository for all demo assets, files and walkthroughs, readme's and notices, etc. Additionally, we include information on each course invividually here, and give you all the information you need to know if we are right for you"
    },
    {
        title: "Wan't to stay safe? Wan't to KNOW who we are?",
        image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/CourseDemoSS/HashDb.png",
        description: "Since piracy is annoying, and people are assholes, content gets unfortunately, sold elsewhere. Or, the course samples, get edited, and changed over, used as clickbait to get people to download malicious files. To make sure you have an official product, SHA1 hash the file with sha1sum, and compare the hash on our GitHub @SkyPenguinLabs/SPL-CourseDemos/CourseResources/HelpUsFightPiracy!"
    }
];

let currentSlide = 0;

function GoToImageUrlIfClicked() {
    const CurrentImageURl = tldrSlides[currentSlide];
    window.location = CurrentImageURl.image;
    console.log(CurrentImageURl.image); 
    alert("Redirecting you to the image's source :D, our GitHub!"); 
}

function toggleTldrOverlay() {
    const overlay = document.getElementById('tldrOverlay');
    const isVisible = overlay.classList.contains('show');

    if (isVisible) {
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    } else {
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
        loadSlide(0);
    }
}

function loadSlide(index) {
    if (index < 0 || index >= tldrSlides.length) return;

    currentSlide = index;
    const slide = tldrSlides[index];

    document.getElementById('slideTitle').textContent = slide.title;
    document.getElementById('slideImage').src = slide.image;
    document.getElementById('slideDescription').textContent = slide.description;

    // Update navigation buttons
    const prevBtn = document.querySelector('.slide-prev');
    const nextBtn = document.querySelector('.slide-next');

    prevBtn.disabled = (index === 0);
    nextBtn.disabled = (index === tldrSlides.length - 1);
}

function changeSlide(direction) {
    const newIndex = currentSlide + direction;
    if (newIndex >= 0 && newIndex < tldrSlides.length) {
        loadSlide(newIndex);
    }
}


// Close overlay when clicking outside
document.addEventListener('click', function (event) {
    const overlay = document.getElementById('tldrOverlay');
    const tldrContent = document.querySelector('.tldr-content');

    if (overlay && overlay.classList.contains('show') &&
        !tldrContent.contains(event.target) &&
        !event.target.classList.contains('tldr-trigger')) {
        toggleTldrOverlay();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function (event) {
    const overlay = document.getElementById('tldrOverlay');
    if (overlay && overlay.classList.contains('show')) {
        switch (event.key) {
            case 'Escape':
                toggleTldrOverlay();
                break;
            case 'ArrowLeft':
                changeSlide(-1);
                break;
            case 'ArrowRight':
                changeSlide(1);
                break;
        }
    }
});