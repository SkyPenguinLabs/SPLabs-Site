//////////////////////////////////// SITE COMPONENT - BOOK DETAILS MODAL  ///////////////////////////////// > Header Component Logic #1 
////
//// The logic below is defined for handling the component which showcases the book details on the site. This is 
//// triggered by clicking the '(e)Books' label at the top of the site 
////




const courseData = {
    //// pricing here was estimated given we want to sell 150 different copies a year.
    //// at 15.00/hr. 
    ///////////////// @PAID - Engineering & Reverse Engineering Courses
    'math_reverse_engineering': {
        title: 'Mathematics & Its Applications In RE',
        subtitle: 'REC2 - A small little lesson that introduces you to the different aspects of the way reverse engineering is used',
        pages: '21',
        level: 'Beginner',
        date: 'Aug 2025',
        price: '$9.81',
        description: 'People do not cover the surface area of mathematics and its applications to RE much. This lesson is here to remind beginners how much math goes behind advanced sides of reverse engineering, exploit development, and even tooling & engineering in relation to frameworks like disassemblers.',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/REC2_SAMPLE_QR.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/CourseSamples/Engineering%20%26%20Reverse%20Engineering%20Lesson%20SAMPLES/%5BSAMPLE%5D%20%20REC2%20-%20How%20Mathematics%20Is%20Applied%20To%20Reverse%20Engineering%20%5BSAMPLE%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4348332575/rec2-how-mathematics-is-applied-to?ref=shop_home_active_2&dd=1&logging_key=fbcab1a95fb3c5bf5aac12108d2227fa3a365a40%3A4348332575',

    },
    'analyzing_gui_components_for_windows': {
        title: 'How to analyze GUI components built for x64, Windows apps',
        subtitle: 'REC5 - Analyzing Graphical Applications developed for the Windows Operating system for x64 targets',
        pages: '52',
        level: 'Beginner',
        date: 'Aug 2025',
        price: '$19.63',
        description: 'This course will take a demonstrative application engineered internally by SkyPenguinLabs engineers and will teach you how to breakdown graphical applications built for Windows, specifically facing x64 targets. You will learn a lot here, but make sure you read the demo to understand the content',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/REC6_SAMPLE_QR.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/CourseSamples/Engineering%20%26%20Reverse%20Engineering%20Lesson%20SAMPLES/_%5BSAMPLE%5D%20REC6%20-%20How%20to%20analyze%20GUI%20components%20built%20for%20x64%2C%20Windows%20%20%5BSAMPLE%5D%20(1).pdf',
        BuyURL: '',

    },
    'time_managing_re_process': {
        title: 'Offensive Tooling & Development Introduction',
        subtitle: 'REC4 - Developing Offensive Tools & Scripts - Intro',
        pages: '31',
        level: 'Beginner',
        date: 'Aug 2025',
        price: '$11.78',
        description: 'I am sure, as a reverse engineer you may have been stuck on a tight time schedule when trying to make a deliverable. But get lost finding ways to cut the amount of time you spend on the reversing process. This lesson walks through some interesting methods that cut you small amounts of time which may just save your deliverable from being late!',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/REC2_SAMPLE_QR.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/CourseSamples/Engineering%20%26%20Reverse%20Engineering%20Lesson%20SAMPLES/%5BSAMPLE%5D%20PRGC3%20-%20The%20Art%20of%20Frontend%20Validation%20%5BSAMPLE%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4348340931/rec4-time-managing-the-reversing-process?ref=shop_home_active_3&dd=1&logging_key=8d11866b40d85b35d0d1315b7e2458489761bec4%3A4348340931',

    },
    ///////////////// @PAID - General Development 
    'golang_modules_in_depth_for_beginners': {
        title: 'Learning how to Go modules work',
        subtitle: 'PRGC1 - Go modules for beginners',
        pages: '21',
        level: 'Beginner',
        date: 'Aug 2025',
        price: '$8.20',
        description: "Lets take to the rig and try to understand how Go's confusing ass module system works. Yeah, I said it, rage against this confusing piece of machinery! No but for real, this lesson covers the basics to surface level intro to what Golang modules are and how they work conceptually",
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/PRGC1_SAMPLE_QR.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/CourseSamples/Development%20Lesson%20SAMPLES/%5BSAMPLE%5D%20PRGC1%20-%20Go%20Modules%20In%20Depth%20For%20Beginners%20%5BSAMPLE%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4347410908/prgc1-go-modules-in-depth-for-beginners?ref=shop_home_active_1&dd=1&logging_key=c288ab43725963b3bdced90d9ab56fd209145a02%3A4347410908',

    },
    ///////////////// @PAID - Offensive Tool Development 
    'ethereum_detection_ELF': {
        title: 'Auto-detecting Ethereum in Binaries (ELF)',
        subtitle: 'REC5 - Using Go to build fun unique scanning tools that apply to niche scenarios',
        pages: '21',
        level: 'Beginner',
        date: 'Aug 2025',
        price: '$21.59',
        description: "Develop defensive tools to automatically detect cryptocurrency-related malware in ELF files",
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/REC5_SAMPLE_QR.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/CourseSamples/Development%20Lesson%20SAMPLES/%5BSAMPLE%5D%20OPRGC1%20-%20Proper%20Offensive%20Tooling%20%26%20Development%20Introduction%20%5BSAMPLE%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4346916926/rec5-static-analysis-for-ethereum?ref=shop_home_active_1&dd=1&logging_key=c9fa08a014cf305bdb526ff8818d834d9c179871%3A4346916926',

    },



    ////////////// @PAID COURSES -  Offensive Tool Developer 
    ////////////// @PAID BOOKS   - ALL OF THE BOOKS BY SKYPENGUIN LABS
    'liquid_docs_vol1': {
        title: 'Liquid Docs Vol. 1, Season 1 ',
        subtitle: 'A full comprehensive summary guide for season 1 of the course drops for Aug2025!',
        pages: 'N/A',
        level: 'None',
        date: 'Aug 2025',
        price: 'Unevaluated',
        description: 'The first season of the Liquid Docs series, pushing SkyPenguinLabs away from phsyical manual production into digital ebooks which highlight some of the primary content of the courses published here, along with external, extended versions of course content meant to remind you why we exist',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/EbookSample_LiquidDocs.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/EbookSamples/%5BDEMO%5D%20Liquid%20Docs%20Vol%20.1%20-%20Season%201%20_%20SkyPenguinLabs%20%5BDEMO%5D.pdf',
        BuyURL: '', //// none yet, unreleased

    },
    'ebooks_bhgm': {
        title: 'Black Hat Go Manual',
        subtitle: 'A quick, fun and simple guide to learning niche things about Go as a beginner ',
        pages: '260',
        level: 'Student',
        date: 'Jul 17th 2023',
        price: '$15.56',
        description: 'Similar to Go, was designed to be a better version of the Go manual but with the Python programming language. Not only designed with more thought towards content in mind, but a lot more thought and effort into editing the actual content',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/EbookSample_BHGM.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/EbookSamples/%5BDEMO%5D%20Black%20Hat%20Go%20Manual%20%5BDEMO%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4346693185/bhgm-black-hat-go-manual-digital-copy?ref=shop_home_active_3&dd=1&logging_key=9169194907d9501f249df2916972935b533f07f7%3A4346693185',

    },
    'ebooks_bhpm': {
        title: 'Black Hat Python Manual',
        subtitle: 'Fun and simple pocket guide to nifty python3 things',
        pages: '347',
        level: 'Student',
        date: 'October 3, 2023',
        price: '$17.89',
        description: 'The first season of the Liquid Docs series, pushing SkyPenguinLabs away from phsyical manual production into digital ebooks which highlight some of the primary content of the courses published here, along with external, extended versions of course content meant to remind you why we exist',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/EbookSample_BHPM.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/EbookSamples/%5BDEMO%5D%20Black%20Hat%20Python%20Manual%20%5BDEMO%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4346694246/bhpm-black-hat-python-manual-digital?ref=shop_home_active_3&dd=1&logging_key=2c81a9a37cce504c917deadfbf9223852a921e79%3A4346694246',

    },
    'ebooks_ghfm': {
        title: 'GHFM',
        subtitle: 'Want to pick up some fundamentals/theory with game hacking?',
        pages: '391',
        level: 'Student',
        date: 'January 6, 2024',
        price: '$21.00',
        description: 'A full fledged theoretical booklet rather than a technical, summary-based booklet which aims to walk you through some fun niche things within the game hacking world.',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/EbookSampl_GHFM.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/EbookSamples/%5BDEMO%5D%20Game%20Hackers%20Field%20Manual%20%5BDEMO%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4346700566/ghfm-game-hackers-field-manual-digital?ref=shop_home_active_2&dd=1&logging_key=43948f55356e4e28441d1b70823f06b0dd2494d6%3A4346700566',

    },
    'ebooks_refm': {
        title: 'REFM',
        subtitle: 'Dont know what RE is? This manual covers enough surface level to get you started in this information war',
        pages: '386',
        level: 'Student',
        date: 'Aug 2025',
        price: '$23.00',
        description: 'Another theoretical manual, but the final manual produced by SkyPenguinLabs indicating the move over into e-manual like content while being able to introduce the reader to the theory of reverse engineering, for a full book series called the Reverse Engineers Codex. Additionally, this is a higher quality manual, with custom images, branding, and other various additions that make it unique to SPL',
        author: {
            name: 'Totally_Not_A_Haxxer',
            position: 'Offensive Security Analyst',
            bio: 'Haxxer works as a cybersecurity researcher and the owner of SkyPenguinLabs. '
        },
        QrUrl: 'https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/QRs/EbookSample_LiquidDocs.png',
        SampleURL: 'https://github.com/SkyPenguinLabs/SPL-CourseDemos/blob/main/EbookSamples/%5BDEMO%5D%20Liquid%20Docs%20Vol%20.1%20-%20Season%201%20_%20SkyPenguinLabs%20%5BDEMO%5D.pdf',
        BuyURL: 'https://www.etsy.com/listing/4346715012/refm-reverse-engineering-field-manual?ref=shop_home_active_1&dd=1&logging_key=b718a22ff20e2ba00a251c762fb0e86be968efe5%3A4346715012',

    },
};


let currentBook = null;


///////// Tab switch routine 
function switchBooksTab(category) {
    document.querySelectorAll('.books-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.books-category').forEach(cat => cat.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById(category).classList.add('active');
    const tabContainer = document.querySelector('.books-tabs');
    const tabs = document.querySelectorAll('.books-tab');
    const activeIndex = Array.from(tabs).indexOf(event.target);
    tabContainer.setAttribute('data-active', activeIndex);
}



////////// Close modal 
function closeBookModal() {
    const modal = document.getElementById('bookDetailModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
    currentBook = null;
}


///////////////////////////////// SITE COMPONENT - DONATION BUTTON ///////////////////////////////// > Header Component Logic #2 
////
//// The logic below is built for the donation button at the top right of the site.
////
////
function toggleDonateDropdown() {
    const dropdown = document.getElementById('donateDropdown');
    dropdown.classList.toggle('show');
}

///////////// Close donate button 
function closeDonateDropdownOutside(e) {
    const dropdown = document.getElementById('donateDropdown');
    const donateButton = document.querySelector('.donate-trigger');

    if (!dropdown.contains(e.target) && !donateButton.contains(e.target)) {
        dropdown.classList.remove('show');
        document.removeEventListener('click', closeDonateDropdownOutside);
    }
}

function redirect_to_course(courseID) {
    if (courseID) {
        const course = courseData[courseID];
        if (!course) {
            return;
        }
        window.location = course.BuyURL;
    }
}

///////////////////////////////// SITE COMPONENT - CONTRIBUTIONS BUTTON ///////////////////////////////// > Site's Main Body Component Logic #1
////
//// The function below is defined specifically to handle the contributions block hiding/unhiding logic
////
////
function toggleContributions() {
    const block = document.getElementById('contributionsBlock');
    if (block.classList.contains('show')) {
        block.classList.remove('show');
        setTimeout(() => {
            block.style.display = 'none';
        }, 300);
    } else {
        block.style.display = 'block';
        setTimeout(() => {
            block.classList.add('show');
        }, 10);
    }
}


///////////////////////////////// SITE COMPONENT - CONTRIBUTIONS BUTTON ///////////////////////////////// > Site's Main Body Component Logic #2
////
//// The logic below goes behind handling all of the course modal and information display logic. 
////
////
let currentCourse = null;
///////// Courses:switchTab 
function switchTab(category) {
    ///// Pop active classes
    document.querySelectorAll('.sidebar-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.course-category').forEach(cat => cat.classList.remove('active'));

    ///// Find target elements
    let targetTab = document.querySelector(`.sidebar-tab[onclick*="${category}"]`);
    let targetCategory = document.getElementById(category);

    ///// Default fallback if elements not found
    if (!targetTab || !targetCategory) {
        console.warn(`Tab or category not found for: ${category}. Falling back to default.`);
        const defaultCategory = 'ebooks'; 
        targetTab = document.querySelector(`.sidebar-tab[onclick*="${defaultCategory}"]`);
        targetCategory = document.getElementById(defaultCategory);
    }

    ////// Activate elements if they exist
    if (targetTab) {
        targetTab.classList.add('active');
    } else {
        console.error('No target tab found, even after fallback');
    }
    
    if (targetCategory) {
        targetCategory.classList.add('active');
        if (window.innerWidth <= 1024) {
            targetCategory.scrollIntoView({ behavior: 'smooth' });
        }
    } else {
        console.error('No target category found, even after fallback');
    }
}

// Function to initialize default tab state
function initializeDefaultTab() {
    const defaultCategory = 'ebooks';
    
    // Remove all active classes first to ensure clean state
    document.querySelectorAll('.sidebar-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.course-category').forEach(cat => cat.classList.remove('active'));
    
    // Set the default tab and category as active
    const defaultTab = document.querySelector(`.sidebar-tab[onclick*="${defaultCategory}"]`);
    const defaultCategoryElement = document.getElementById(defaultCategory);
    
    if (defaultTab) {
        defaultTab.classList.add('active');
    }
    
    if (defaultCategoryElement) {
        defaultCategoryElement.classList.add('active');
    }
    
    console.log('Default tab initialized:', defaultCategory);
}



///////// Courses:toggleSidebar
function toggleSidebar(element) {
    const parentItem = element.parentElement;
    parentItem.classList.toggle('active');
}

//////////// Toggle the switch of a course-info-overlay tab 
function switchModalTab(event) {
    const clickedTab = event.target;
    const tabName = clickedTab.getAttribute('data-tab');
    document.querySelectorAll('.modal-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
    clickedTab.classList.add('active');
    document.getElementById(`${tabName}Tab`).classList.add('active');
}

///////////// Toggle on-course category 
function toggleCourseCategory(courseId) {
    const course = courseData[courseId];
    if (!course) {
        return;
    }
    currentCourse = courseId;
    document.getElementById('modalTitle').textContent = course.title;
    document.getElementById('modalSubtitle').textContent = course.subtitle;
    document.getElementById('modalPages').textContent = course.pages;
    document.getElementById('modalLevel').textContent = course.level;
    document.getElementById('modalDate').textContent = course.date;
    document.getElementById('modalDescription').textContent = course.description;
    document.getElementById('modalBuyBtn').textContent = `Purchase - ${course.price}`;

    /////// Author load
    if (course.author) {
        document.getElementById('authorName').textContent = course.author.name;
        document.getElementById('authorPosition').textContent = course.author.position;
        document.getElementById('authorBio').textContent = course.author.bio;
    }

    ////// QR LOAD
    console.log(course.SampleURL)
    console.log(course.QrUrl)
    if (course.SampleURL !== '') {
        console.log("[+] Adding it")
        console.log(course.SampleURL)
        console.log(course.QrUrl)
        document.getElementById('sampleLink').href = course.SampleURL;
        document.getElementById('barcodeContainer').innerHTML = '<img src="' + course.QrUrl + '"' + 'alt="Course QR Code" width="150" height="150">';
    }

    ////// Reset to first tab
    document.querySelectorAll('.modal-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.modal-tab-content').forEach(content => content.classList.remove('active'));
    document.querySelector('.modal-tab[data-tab="overview"]').classList.add('active');
    document.getElementById('overviewTab').classList.add('active');
    document.getElementById('courseModal').classList.add('show');
    document.body.style.overflow = 'hidden';
}


///////// Courses:DisableCourseModal[Disable]
function DisableCourseModalRender() {
    document.getElementById('courseModal').classList.remove('show');
    document.body.style.overflow = 'auto';
    currentCourse = null;
}


////////////////////////////////////////////////// FUNCTIONALITIES /////////////////////////////////////////////////
// ///
// /// This is not too much of a dynamic site, but it does have some functionality to redirect people to a 
// /// specific link for purchasing or scheduling. The functions below are currently placeholders 
// ///

function previewBook() {
    if (currentBook) {
        alert('Opening preview for this book...');
    }
}

function purchase() {
    if (currentCourse) {
        const course = courseData[currentCourse];
        window.location = course.BuyURL;
        alert(`Redirecting to checkout for ${course.title}...`);
    }
}

function viewDemo() {
    if (currentCourse) {
        window.location = courseData[currentCourse].SampleURL;
        alert('Opening demo for this course...');
    }
}

function bookCall() {
    console.log('Book consultation');
    alert('Opening calendar...');
}


////////////////////////////////////////////////// HELPERS /////////////////////////////////////////////////
// ///
// /// All of the functions used entirely throughout the lifecycle of the JS and HTML 
// ///
// ///
// ///

function closeInfoModal() {
    document.getElementById('infoModalOverlay').classList.remove('show');
    document.body.style.overflow = '';
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Address copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
}

////////////////////////////////////////////////// DOCUMENT LISTENERS /////////////////////////////////////////////////
// ///
// /// All of the document listeners (hotkeys | (esc key, clicking, etc)) and their corresponding handlers 
// ///


//////////// Click listener | Close * overlays on-click (BooksOverlay, BookDetailModal)
document.addEventListener('click', function (e) {
    const booksOverlay = document.getElementById('booksOverlay');
    const bookDetailModal = document.getElementById('bookDetailModal');
    const dropdown = document.getElementById('donateDropdown');
    const donateButton = document.querySelector('.donate-trigger');
    const CourseModal = document.getElementById('courseModal');

    /////// Books listing overlay   
    if (e.target === booksOverlay) {
        toggleBooksOverlay();
    }

    /////// Books details
    if (e.target === bookDetailModal) {
        closeBookModal();
    }

    ////// Course details
    if (e.target === CourseModal) {
        DisableCourseModalRender();
    }

    /////// Donate overlay 
    if (!dropdown.contains(e.target) && !donateButton.contains(e.target)) {
        dropdown.classList.remove('show');
        document.removeEventListener('click', closeDonateDropdownOutside);
    }

});

//////////// Escape key listener | Close * overlays on escape (BooksOverlay, BookDetailModal)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const booksOverlay = document.getElementById('booksOverlay');
        const bookDetailModal = document.getElementById('bookDetailModal');
        const CourseDetailModal = document.getElementById('courseModal');

        if (booksOverlay.classList.contains('show')) {
            toggleBooksOverlay();
        } else if (bookDetailModal.classList.contains('show')) {
            closeBookModal();
        } else if (CourseDetailModal.classList.contains('show')) {
            DisableCourseModalRender();
        }
    }
});

///////// Tab indication on page load | @onload
document.addEventListener('DOMContentLoaded', function () {
    initializeDefaultTab();
    const tabContainer = document.querySelector('.books-tabs');
    if (tabContainer) {
        tabContainer.setAttribute('data-active', '0');
    }

    document.querySelectorAll('.modal-tab').forEach(tab => {
        tab.addEventListener('click', switchModalTab);
    });

    //////// Info / tooltip / whatever 
    const infoTags = document.querySelectorAll('.info-tag');
    infoTags.forEach(tag => {
        tag.addEventListener('click', function () {
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            document.getElementById('infoModalTitle').textContent = title;
            document.getElementById('infoModalDescription').textContent = description;
            document.getElementById('infoModalOverlay').classList.add('show');
            ///// @noscroll
            document.body.style.overflow = 'hidden';
        });
    });
});



//////////// Scrolling selector | @onruntime 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function toggleStoryModal() {
    const overlay = document.getElementById('storyOverlay');
    overlay.classList.toggle('show');
}



function closeNotification(IDENT) {
    const notification = document.getElementById(`staticcont-notification${IDENT}`);
    if (notification) {
        notification.style.display = 'none';
    }
}