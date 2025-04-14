document.addEventListener('DOMContentLoaded', () => {
    // Animate products on load
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.classList.add('animate-fadeIn');
        }, index * 200);
    });

    // Change text content dynamically
    const welcomeMessage = document.getElementById('welcomeMessage');
    const changeTextBtn = document.getElementById('changeTextBtn');
    changeTextBtn.addEventListener('click', () => {
        welcomeMessage.textContent = 'Unleash Your Style Today!';
        welcomeMessage.classList.add('animate-fadeIn');
        setTimeout(() => welcomeMessage.classList.remove('animate-fadeIn'), 800);
    });

    // Modify CSS styles
    const toggleStyleBtn = document.getElementById('toggleStyleBtn');
    let isStyled = false;
    toggleStyleBtn.addEventListener('click', () => {
        productCards.forEach(card => {
            if (!isStyled) {
                card.style.backgroundColor = '#f0f4f8';
                card.style.border = '2px solid #1e40af';
                card.style.transform = 'translateY(-5px)';
            } else {
                card.style.backgroundColor = '';
                card.style.border = '';
                card.style.transform = '';
            }
        });
        isStyled = !isStyled;
    });

    // Add new product
    const productList = document.getElementById('productList');
    const addProductBtn = document.getElementById('addProductBtn');
    addProductBtn.addEventListener('click', () => {
        const newProduct = document.createElement('article');
        newProduct.className = 'product-card bg-white rounded-lg shadow-lg overflow-hidden opacity-0';
        newProduct.innerHTML = `
            <img src="https://source.unsplash.com/400x300/?fashion" alt="New Item" class="w-full h-48 object-cover">
            <div class="p-6">
                <h3 class="text-xl font-semibold">New Arrival</h3>
                <p class="text-gray-600 mt-2">Fresh addition to our collection.</p>
                <p class="text-lg font-bold mt-4">$99.99</p>
            </div>
        `;
        productList.appendChild(newProduct);
        setTimeout(() => {
            newProduct.style.opacity = '1';
            newProduct.classList.add('animate-fadeIn');
        }, 100);
    });

    // Remove last product
    const removeProductBtn = document.getElementById('removeProductBtn');
    removeProductBtn.addEventListener('click', () => {
        const lastProduct = productList.lastElementChild;
        if (lastProduct) {
            lastProduct.style.opacity = '0';
            setTimeout(() => productList.removeChild(lastProduct), 300);
        }
    });

    // Smooth scroll for shop now button
    const shopNowBtn = document.getElementById('shopNowBtn');
    shopNowBtn.addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
});