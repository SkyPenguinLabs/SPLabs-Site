/*

┏━┛┃ ┃┃ ┃┏━┃┏━┛┏━ ┏━┛┃ ┃┛┏━ ┃  ┏━┃┏━ ┏━┛
━━┃┏┛ ━┏┛┏━┛┏━┛┃ ┃┃ ┃┃ ┃┃┃ ┃┃  ┏━┃┏━┃━━┃
━━┛┛ ┛ ┛ ┛  ━━┛┛ ┛━━┛━━┛┛┛ ┛━━┛┛ ┛━━ ━━┛ ~ SkyPenguinLabs 2025 | Engineer: @Totally_Not_A_Haxxer
-------------------------------------------------------------------------------------------------
|
| The second logical component of this site is primarily the overlay for any tooltip or additional 
| information on the website. A problem with the previous site was that every single box was different
| in some shape or form. This was redundant, and reduced the performance and accessibility of the website
| largely. So, we simplified it, and created an overlay mechanism which dynamically generates and animates
| an overlay, then a box, highlighting all given information ontop of the overlay. This acts as a type of 
| informational component. This component was also designed to handle multiple angles of the generative 
| process. 
|
|
| > Primary Use   : Notification component 
| > Secondary Use : Course information, TLDR, and more.  
*/
class SPLOverlay {
    constructor() {
        ////// @Initialization 
        if (!document.getElementById('spl-overlay-container')) { this.createOverlayContainer(); }
        this.overlayContainer = document.getElementById('spl-overlay-container');
        this.overlayBackground = document.getElementById('spl-overlay-background');
        this.overlayBox = document.getElementById('spl-overlay-box');
        this.overlayTitle = document.getElementById('spl-overlay-title');
        this.overlaySubtitle = document.getElementById('spl-overlay-subtitle');
        this.overlayDescription = document.getElementById('spl-overlay-description');
        this.overlayCloseBtn = document.getElementById('spl-overlay-close');
        
        /////// @DocuListener 
        this.overlayCloseBtn.addEventListener('click', () => this.close());
        this.overlayBackground.addEventListener('click', (e) => {
            if (e.target === this.overlayBackground) {
                this.close();
            }
        });
        
        ////// @Feature->OnEscapeKey (Exit)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
        
        this.isOpen = false;
    }
    
    createOverlayContainer() {
        const container = document.createElement('div');
        container.id = 'spl-overlay-container';
        container.innerHTML = `
            <div id="spl-overlay-background" class="spl-overlay-background">
                <div id="spl-overlay-box" class="spl-overlay-box">
                    <div class="spl-overlay-header">
                        <h2 id="spl-overlay-title" class="spl-overlay-title"></h2>
                        <button id="spl-overlay-close" class="spl-static-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    <h3 id="spl-overlay-subtitle" class="spl-overlay-subtitle"></h3>
                    <div id="spl-overlay-description" class="spl-overlay-description"></div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }
    
    /**
     * Open the overlay with provided content
     * @param {Object} config - Configuration object
     * @param {string} config.title - Overlay title
     * @param {string} config.subtitle - Overlay subtitle
     * @param {string} config.description - Main content/description
     * @param {Function} config.onClose - Optional callback when overlay closes
     */
    open(config) {
        /////// @Content
        this.overlayTitle.textContent = config.title || '';
        this.overlaySubtitle.textContent = config.subtitle || '';
        
        /////// @Description
        if (typeof config.description === 'string') {
            this.overlayDescription.innerHTML = config.description;
        } else {
            this.overlayDescription.innerHTML = '';
            console.error('Description must be a string');
        }
        
        /////// @Callback
        this.onCloseCallback = config.onClose;
        
        /////// @OverlayWithanimation
        this.overlayContainer.style.display = 'block';
        setTimeout(() => {
            this.overlayBackground.classList.add('active');
            this.overlayBox.classList.add('active');
            document.body.classList.add('spl-overlay-open');
            this.isOpen = true;
        }, 10);
    }
    
    /////// @API->Func [overlay.close()]
    close() {
        this.overlayBackground.classList.remove('active');
        this.overlayBox.classList.remove('active');
        document.body.classList.remove('spl-overlay-open');
        ////// @PostAnimation
        setTimeout(() => {
            this.overlayContainer.style.display = 'none';
            this.isOpen = false;
            
            ///// @Callback
            if (typeof this.onCloseCallback === 'function') {
                this.onCloseCallback();
            }
        }, 300); 
    }
}


////// @API->Func [showSPLOverlay]
const splOverlay = new SPLOverlay();
function showSPLOverlay(title, subtitle, description, onClose) {
    splOverlay.open({
        title,
        subtitle,
        description,
        onClose
    });
}


///////// Notification specific function  | Notifications use this overlay system above ^ 
function closeNotification(IDENT) {
    const notification = document.getElementById(`spl-static-notification${IDENT}`);
    if (notification) {
        notification.style.display = 'none';
    }
}