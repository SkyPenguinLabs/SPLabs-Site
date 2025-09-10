/*

┏━┛┃ ┃┃ ┃┏━┃┏━┛┏━ ┏━┛┃ ┃┛┏━ ┃  ┏━┃┏━ ┏━┛
━━┃┏┛ ━┏┛┏━┛┏━┛┃ ┃┃ ┃┃ ┃┃┃ ┃┃  ┏━┃┏━┃━━┃
━━┛┛ ┛ ┛ ┛  ━━┛┛ ┛━━┛━━┛┛┛ ┛━━┛┛ ┛━━ ━━┛ ~ SkyPenguinLabs 2025 | Engineer: @Totally_Not_A_Haxxer
-------------------------------------------------------------------------------------------------
|
| Welcome to the first logical component of the SPLabs site. This component is dedicated to managing 
| the featured products that get listed on the site. The idea behind this component was that it would
| allow us to dynamically generate product listings, pretty much whenever and however we wanted to.
|
| The old site had a lot of code, like fucking WAY too much JS for handling basic product listing generation.
| So, I decided to automate it and fix that problem by making a class responsible for dynamically generating 
| and displaying featured product cards. The component simplifies product listing management by handling the 
| creation of structured HTML elements (which have styles standardized in stylesheets) which makes sure that 
| there is some consistency across the site while minimizing the amount of redundant JS and bullshit logic we 
| have to add which slows performance every time we want to add a new product category, listing or type. 
|  
| [A] Products can be initialized with pre-defined data or added dynamically via the API
|
| [B] Each product card includes a title, description (auto-truncated to 150 characters), price,  
| and a customizable purchase link
|
| [C] By default, the component supports up to four featured products at once.  
|
*/

function E(_msg, l) {
    console.error(`[SPL-CONSOLE_ERROR] (spl-logical-product.js) -> ${_msg}`);
    if (l == 1) { // Simply a warning for dev 
        console.log(`[SPL-CONSOLE_WARN] (spl-logical-product.js) -> ${_msg}`)
    }
}

class SPLProductManager {
    constructor(containerId = 'spl-featured-products') {
        this.container = document.getElementById(containerId);
        this.products = [];
        
        if (!this.container) {
            ///// @ERR -> Container missing? 
            E(`Container with ID [${this.container}] not found in the environment`);
        }
    }
    
    /**
     * [FUNC: RegisterProduct] - This will register a product to the class. It requires a standardized
     *                           set of information described below: 
     * 
     * @param {Object} product                  | Product data
     * @param {string} product.title            | Product title
     * @param {string} product.description      | Product description (max 150 chars)
     * @param {string|number} product.price     | Product price
     * @param {string} product.link             | URL to purchase the product
     * @param {string} product.linkText         | Text for the purchase link (optional)
     */
    RegisterProduct(product) {
        if (!product.title || !product.description || !product.price || !product.link) {
            ///// @ERR -> Product data missing? Dev error
            E(`Product must have title, description, price, and link @ATTEMPT_REGISTER->${product}`, 1);
            return;
        }
        
        if (product.description.length > 150) {
            ///// @ERR -> Developer warning, product description will be cut, caps at 150 characters for UI/UX
            E(`PRODUCT_DESC_LENGTH_TOO_LONG -> product description was ${product.description.length} for product ['${product.title}'], cutting in dynamic generation....`);
            product.description = product.description.substring(0, 147) + '...';
        }
        
        ///// @ERR -> 4 max per registration for right now, this is testing
        if (this.products.length < 4) {
            this.products.push(product);
        } else {
            E(`max products reached on registration, quitting product regtistration {TESTING}`, 1)
        }
    }
    

    /**
     * [FUNC: RenderProducts] - Calls to render all products to the DOM
     */
    renderProducts() {
        if (!this.container) return;
        
        //// @Clear
        this.container.innerHTML = '';

        //// @New
        const grid = document.createElement('div');
        grid.className = 'spl-product-grid';
        
        //// @Push->Products to @New
        this.products.forEach(product => {
            const card = this.createProductCard(product);
            grid.appendChild(card);
        });
        
        this.container.appendChild(grid);
    }
    
    /**
     * [FUNC: RenderProducts] - Creates a product card for registration
     *          * @param {Object} product          | Product data
     *          * @returns {HTMLElement}           | Product card element
     */
    createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'spl-product-card';
        
        //// @Create->Header
        const header = document.createElement('div');
        header.className = 'spl-product-header';
        //// @New->Header:Title
        const title = document.createElement('h3');
        title.className = 'spl-product-title';
        title.textContent = product.title;
        header.appendChild(title);
        card.appendChild(header);
        //// @New->Header:Divider
        const divider = document.createElement('hr');
        divider.className = 'spl-product-divider';
        card.appendChild(divider);
        
        //// @Create->Body
        const body = document.createElement('div');
        body.className = 'spl-product-body';
        //// @New->Body:Description
        const description = document.createElement('p');
        description.className = 'spl-product-description';
        description.textContent = product.description;
        body.appendChild(description);
        card.appendChild(body);
        //// @Create->Footer
        const footer = document.createElement('div');
        footer.className = 'spl-product-footer';        
        const price = document.createElement('div');
        price.className = 'spl-product-price';
        price.textContent = typeof product.price === 'number' ? 
            `$${product.price.toFixed(2)}` : product.price;
        const link = document.createElement('a');
        link.className = 'spl-product-link ';
        link.href = product.link;
        link.textContent = product.linkText || 'Purchase';
        

        ///// @Assemble 
        footer.appendChild(price);
        footer.appendChild(link);
        card.appendChild(footer);
        return card;
    }
}

