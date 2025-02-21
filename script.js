// script.js
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', (event) => {
        if (event.target.tagName === 'INPUT' && event.target.type === 'radio') return;
        if (event.target.tagName === 'SELECT') return;

        const options = box.querySelector('.options');
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
});

const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('change', updateSummary); // Directly call updateSummary
});


function updateSummary() {
    const selectedProduct = document.querySelector('input[name="product"]:checked');
    if (!selectedProduct) return; // Handle no selection

    const productValue = selectedProduct.value;
    let total = 0;

    switch (productValue) {
        case '1':
            total = 10;
            break;
        case '2':
            total = 18;
            break;
        case '3':
            total = 24;
            break;
    }

    document.querySelector('.total').textContent = `Total: $${total}.00 USD`;
}

// Initialize the summary
updateSummary();


const addToCartButton = document.querySelector('.add-to-cart');
addToCartButton.addEventListener('click', () => {
    const selectedProduct = document.querySelector('input[name="product"]:checked');
    if (!selectedProduct) {
        alert("Please select a product.");
        return;
    }

    const productValue = selectedProduct.value;
    const selectedSizes = [];
    const selectedColors = [];

    let numItems = 1; // Default to 1 unit
    if (productValue === '2') numItems = 2;
    if (productValue === '3') numItems = 3;

    for (let i = 1; i <= numItems; i++) {
        const sizeSelect = document.getElementById(`size${productValue}-${i}`);
        const colorSelect = document.getElementById(`color${productValue}-${i}`);
        selectedSizes.push(sizeSelect.value);
        selectedColors.push(colorSelect.value);
    }



    console.log("Added to cart:", {
        product: productValue,
        sizes: selectedSizes,
        colors: selectedColors
    });

    alert("Added to cart!");
});