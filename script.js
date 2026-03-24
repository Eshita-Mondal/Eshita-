// Function to load and display products
async function loadProducts(jsonFile, sortOrder = 'asc') {
    try {
        const response = await fetch(jsonFile);
        const products = await response.json();

        // Sort products based on order
        if (sortOrder === 'desc') {
            products.sort((a, b) => b.id.localeCompare(a.id));
        } else {
            products.sort((a, b) => a.id.localeCompare(b.id));
        }

        // Render products
        renderProducts(products);
    } catch (error) {
        console.error('Error loading products:', error);
        document.getElementById('products-grid').innerHTML = '<p>Error loading products. Please try again.</p>';
    }
}

// Function to render product cards
function renderProducts(products) {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <div class="product-letter">${product.id}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-tagline">${product.tagline}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <span class="product-rating">${product.rating}</span>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
