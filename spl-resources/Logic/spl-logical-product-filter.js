/**
 * SkyPenguinLabs Product Filter System
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
     * Add a product to the catalog
     * @param {Object} product - Product data
     * @param {string} product.id - Unique product ID
     * @param {string} product.title - Product title
     * @param {string} product.category - Product category (e.g., 'books', 'ebooks', 'lessons')
     * @param {string} product.description - Product description
     * @param {string|number} product.price - Product price
     * @param {string} product.link - URL to product page
     */
    addProduct(product) {
        // Validate required fields
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

    /**
     * Set up event listeners for filtering
     */
    setupEventListeners() {
        // Handle category filter clicks
        this.container.addEventListener('click', (e) => {
            if (e.target.classList.contains('spl-filter-btn')) {
                const category = e.target.dataset.category;

                // Update active button
                const buttons = this.container.querySelectorAll('.spl-filter-btn');
                buttons.forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                this.activeCategory = category;
                this.filterProducts();
            }
        });

        // Handle search input
        this.container.addEventListener('input', (e) => {
            if (e.target.classList.contains('spl-filter-search-input')) {
                this.searchTerm = e.target.value.toLowerCase().trim();
                this.filterProducts();
            }
        });
    }

    /**
     * Filter products based on active category and search term
     */
    filterProducts() {
        const filteredProducts = this.products.filter(product => {
            // Filter by category
            const categoryMatch = this.activeCategory === 'all' ||
                product.category === this.activeCategory;

            // Filter by search term
            const searchMatch = this.searchTerm === '' ||
                product.title.toLowerCase().includes(this.searchTerm) ||
                product.description.toLowerCase().includes(this.searchTerm);

            return categoryMatch && searchMatch;
        });

        this.renderProducts(filteredProducts);
    }

    /**
     * Render the product grid
     */
    renderProducts(filteredProducts) {
        const productGrid = this.container.querySelector('.spl-product-grid');
        if (!productGrid) return;

        // Clear product grid
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

        // Add each product
        filteredProducts.forEach(product => {
            const productEl = this.createProductElement(product);
            productGrid.appendChild(productEl);
        });
    }

    /**
     * Create a product element
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

    /**
     * Initialize the filter UI and render products
     */
    initialize() {
        if (!this.container) return;

        // Create category buttons
        const categoryButtons = ['all', ...this.categories].map(category => {
            return `
                <button class="spl-filter-btn ${category === 'all' ? 'active' : ''}" data-category="${category}">
                    ${category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
            `;
        }).join('');

        // Create filter UI
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

        // Render all products initially
        this.filterProducts();
    }
}