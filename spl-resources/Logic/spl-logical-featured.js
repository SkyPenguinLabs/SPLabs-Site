/**
 * SkyPenguinLabs Product Filter System PoC 
 * A component to display and filter products by category and search text
 */
class SPLProductFilter {
    constructor(containerId = 'spl-products-container') {
        this.container = document.getElementById(containerId);
        this.products = [];
        this.categories = new Set();
        this.activeCategory = 'all';
        this.searchTerm = '';

        if (!this.container) {
            console.error(`Container with ID '${containerId}' not found`);
            return;
        }

        this.setupEventListeners();
    }

    /**
     * Add a product to the catalog [ auto-gen desc ]
     * @param {Object} product - Product data
     * @param {string} product.id - Unique product ID
     * @param {string} product.title - Product title
     * @param {string} product.category - Product category (e.g., 'books', 'ebooks', 'lessons')
     * @param {string} product.description - Product description
     * @param {string|number} product.price - Product price
     * @param {string} product.link - URL to product page
     */
    addProduct(product) {
        if (!product.id || !product.title || !product.category || !product.price) {
            console.error('Product must have id, title, category, and price');
            return;
        }

        this.products.push(product);
        this.categories.add(product.category);
    }

    /**
     * Set up multiple products at once
     * @param {Array} products - Array of product objects
     */
    setProducts(products) {
        products.forEach(product => this.addProduct(product));
    }

    setupEventListeners() {
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('spl-filter-btn')) {
                const category = e.target.dataset.category;
                const buttons = this.container.querySelectorAll('.spl-filter-btn');
                buttons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                this.activeCategory = category;
                this.filterProducts();
            }
        });
        this.container.addEventListener('input', (e) => {
            if (e.target.classList.contains('spl-filter-search-input')) {
                this.searchTerm = e.target.value.toLowerCase().trim();
                this.filterProducts();
            }
        });
    }

    filterProducts() {
        const filteredProducts = this.products.filter(product => {
            const categoryMatch = this.activeCategory === 'all' || product.category === this.activeCategory;
            const searchMatch = this.searchTerm === '' ||
                product.title.toLowerCase().includes(this.searchTerm) ||
                product.description.toLowerCase().includes(this.searchTerm);

            return categoryMatch && searchMatch;
        });

        this.renderProducts(filteredProducts);
    }

    renderProducts(filteredProducts) {
        const productGrid = this.container.querySelector('.spl-product-grid');
        if (!productGrid) {
            return; 
        }

        productGrid.innerHTML = '';

        if (filteredProducts.length === 0) {
            productGrid.innerHTML = `
                <div class="spl-product-empty">
                    <i class="fas fa-search"></i>
                    <p>Psssttttt....you should.uh check your input- and...try again (no such product exists..)</p>
                </div>
            `;
            return;
        }

        filteredProducts.forEach(product => {
            const productEl = this.createProductElement(product);
            productGrid.appendChild(productEl);
        });
    }

    /**
     * Create a product element <dyn html> 
     * @param {Object} product - Product data
     * @returns {HTMLElement} - Product element
     */
    createProductElement(product) {
        const productEl = document.createElement('div');
        productEl.className = 'spl-product-item';
        productEl.dataset.category = product.category;

        productEl.innerHTML = `
            <div class="spl-product-content">
                <div class="spl-product-category">${product.category}</div>
                <h3 class="spl-product-title">${product.title}</h3>
                <p class="spl-product-description">${product.description}</p>
                <div class="spl-product-footer">
                    <div class="spl-product-price">${typeof product.price === 'number' ? `$${product.price.toFixed(2)}` : product.price}</div>
                    <a href="${product.link}" class="spl-product-link">View Details</a>
                </div>
            </div>
        `;

        return productEl;
    }

    initialize() {
        if (!this.container) return;
        //// <dyn html> 
        const categoryButtons = ['all', ...this.categories].map(category => {
            return `
                <button class="spl-filter-btn ${category === 'all' ? 'active' : ''}" data-category="${category}">
                    ${category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            `;
        }).join('');

        //// Filtering UI portion <dyn html> 
        const filterUI = `
            <div class="spl-filter-header">
                <div class="spl-filter-categories">
                    ${categoryButtons}
                </div>
                <div class="spl-filter-search">
                    <i class="fas fa-search"></i>
                    <input type="text" class="spl-filter-search-input" placeholder="Search products...">
                </div>
            </div>
            <div class="spl-product-grid">
                <!-- Products will be rendered here -->
            </div>
        `;

        this.container.innerHTML = filterUI;
        this.filterProducts();
    }
}

