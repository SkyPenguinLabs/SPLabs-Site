/**
 * SkyPenguinLabs Slideshow Component
 * A responsive slideshow overlay for displaying images with title and description
 */

class SPLSlideshow {
    constructor() {
        // Slideshow container elements
        this.overlay = document.getElementById('spl-slideshow-overlay');
        this.titleElement = document.getElementById('spl-slide-title');
        this.imageElement = document.getElementById('spl-slide-image');
        this.descriptionElement = document.getElementById('spl-slide-description');
        this.indicatorsContainer = document.getElementById('spl-slide-indicators');
        this.closeButton = document.getElementById('spl-slideshow-close');
        
        // Navigation elements
        this.prevButton = document.querySelector('.spl-slide-prev');
        this.nextButton = document.querySelector('.spl-slide-next');
        
        // Slideshow data
        this.slides = [];
        this.currentIndex = 0;
        
        // Initialize the slideshow
        this.initialize();
    }
    
    /**
     * Initialize the slideshow
     */
    initialize() {
        // Close button event
        if (this.closeButton) {
            this.closeButton.addEventListener('click', () => this.close());
        }
        
        // Navigation events
        if (this.prevButton) {
            this.prevButton.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextButton) {
            this.nextButton.addEventListener('click', () => this.nextSlide());
        }
        
        // Handle keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.overlay.classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                this.close();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
            }
        });
        
        // Handle click outside to close
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) {
                this.close();
            }
        });
    }
    
    /**
     * Set the slides for the slideshow
     * @param {Array} slides - Array of slide objects with title, image, and description
     */
    setSlides(slides) {
        if (!Array.isArray(slides) || slides.length === 0) {
            console.error('Invalid slides data');
            return;
        }
        
        this.slides = slides;
        this.currentIndex = 0;
        this.updateIndicators();
    }
    
    /**
     * Create indicator dots for each slide
     */
    updateIndicators() {
        if (!this.indicatorsContainer) return;
        
        this.indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.slides.length; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'spl-slide-indicator';
            if (i === this.currentIndex) {
                indicator.classList.add('active');
            }
            
            indicator.addEventListener('click', () => {
                this.goToSlide(i);
            });
            
            this.indicatorsContainer.appendChild(indicator);
        }
    }
    
    /**
     * Update the content of the current slide
     */
    updateSlideContent() {
        if (this.slides.length === 0) return;
        
        const slide = this.slides[this.currentIndex];
        
        if (this.titleElement) {
            this.titleElement.textContent = slide.title || '';
        }
        
        if (this.imageElement) {
            // Reset the image transition
            this.imageElement.classList.remove('active');
            
            // Update image source
            this.imageElement.src = slide.image || '';
            this.imageElement.alt = slide.title || 'Slideshow image';
            
            // Trigger animation after a short delay
            setTimeout(() => {
                this.imageElement.classList.add('active');
            }, 10);
        }
        
        if (this.descriptionElement) {
            this.descriptionElement.textContent = slide.description || '';
        }
        
        // Update indicators
        const indicators = this.indicatorsContainer.querySelectorAll('.spl-slide-indicator');
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    /**
     * Go to the next slide
     */
    nextSlide() {
        if (this.slides.length <= 1) return;
        
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateSlideContent();
    }
    
    /**
     * Go to the previous slide
     */
    prevSlide() {
        if (this.slides.length <= 1) return;
        
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateSlideContent();
    }
    
    /**
     * Go to a specific slide
     * @param {number} index - Index of the slide to display
     */
    goToSlide(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        this.currentIndex = index;
        this.updateSlideContent();
    }
    
    /**
     * Open the slideshow
     * @param {Array} slides - Optional array of slides to display
     * @param {number} startIndex - Optional starting slide index
     */
    open(slides, startIndex = 0) {
        if (slides) {
            this.setSlides(slides);
            this.currentIndex = startIndex < slides.length ? startIndex : 0;
        }
        
        if (this.slides.length === 0) {
            console.error('No slides to display');
            return;
        }
        
        this.updateSlideContent();
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
    
    /**
     * Close the slideshow
     */
    close() {
        this.overlay.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Create a global instance
const splSlideshow = new SPLSlideshow();

// Example usage:
// const exampleSlides = [
//     {
//         title: 'Image Title 1',
//         image: 'path/to/image1.jpg',
//         description: 'Description for image 1'
//     },
//     {
//         title: 'Image Title 2',
//         image: 'path/to/image2.jpg',
//         description: 'Description for image 2'
//     }
// ];
// 
// // Button click handler
// document.getElementById('slideshow-button').addEventListener('click', () => {
//     splSlideshow.open(exampleSlides);
// });

// Example implementation for the site
document.addEventListener('DOMContentLoaded', () => {
    // Sample slideshow data
    const splScreenshots = [
        {
            title: "SPLabs Course Platform",
            image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/SplWallpapers/SPLWallpaper_WallpaperAsciiCityChaosPixelated.png",
            description: "Our intuitive learning platform designed for cybersecurity professionals."
        },
        {
            title: "Reverse Engineering Workspace",
            image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/SplWallpapers/SPLWallpaper_WallpaperGeneric1.png",
            description: "Custom-built tools and environments for practical reverse engineering exercises."
        },
        {
            title: "SPL Community",
            image: "https://raw.githubusercontent.com/SkyPenguinLabs/SPL-CourseDemos/refs/heads/main/Assets/SkyPenguinLabsGithubBackground.png",
            description: "Join our community of security professionals and learn together."
        }
    ];
    
    // TLDR button opens the slideshow
    const tldrButton = document.querySelector('.spl-button-tertiary');
    if (tldrButton) {
        tldrButton.addEventListener('click', () => {
            splSlideshow.open(splScreenshots);
        });
    }
});

/**
 * Helper function to show slideshow
 * @param {Array} slides - Array of slide objects
 * @param {number} startIndex - Optional starting index
 */
function showSPLSlideshow(slides, startIndex = 0) {
    splSlideshow.open(slides, startIndex);
}