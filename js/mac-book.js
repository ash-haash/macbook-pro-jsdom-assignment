// declaring function for memory buttons
function getMemoryTotal(extraMemory) {
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraStorageField = document.getElementById('extra-storage-price');
    const extraStoragePrice = extraStorageField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraMemoryField = document.getElementById('extra-memory-price');
    extraMemoryField.innerText = extraMemory;
    const extraMemoryPrice = extraMemoryField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = totalPrice.innerText;

    return totalPrice.innerText;
}
// event handling for 8GB Memory button
document.getElementById('memory-8gb').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getMemoryTotal(0);
})
// event handling for 16GB Memory button
document.getElementById('memory-16gb').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getMemoryTotal(180);
})

// declaring function for storage buttons
function getStorageTotal(extraStorage) {
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraMemoryField = document.getElementById('extra-memory-price');
    const extraMemoryPrice = extraMemoryField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraStorageField = document.getElementById('extra-storage-price');
    extraStorageField.innerText = extraStorage;
    const extraStoragePrice = extraStorageField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraStoragePrice) + parseInt(bestPrice.innerText) + parseInt(extraMemoryPrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = totalPrice.innerText;

    return totalPrice.innerText;
}
// event handling for 256GB SSD storage
document.getElementById('ssd-256gb').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getStorageTotal(0);
})

// event handling for 512GB SSD storage
document.getElementById('ssd-512gb').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getStorageTotal(100);
})

// event handling for 1TB SSD storage
document.getElementById('ssd-1tb').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getStorageTotal(180);
})

// declaring function for delivary charge buttons
function getDeliveryCost(deliveryCost) {
    const deliveryChargeField = document.getElementById('delivery-charge');
    deliveryChargeField.innerText = deliveryCost;
    const deliveryChargeCost = deliveryChargeField.innerText;

    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraStorageField = document.getElementById('extra-storage-price');
    const extraStoragePrice = extraStorageField.innerText;
    const extraMemoryField = document.getElementById('extra-memory-price');
    const extraMemoryPrice = extraMemoryField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = totalPrice.innerText;

    return totalPrice.innerText;
}
// event handling for free delivery button
document.getElementById('free-delivery').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getDeliveryCost(0);
})

// event handlig for fast delivery button
document.getElementById('fast-delivery').addEventListener('click', function () {
    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = getDeliveryCost(20);
})

// Promo Code Section
document.getElementById('promo-apply').addEventListener('click', function () {
    const promoCodeField = document.getElementById('promo-value');
    const promoCodeValue = promoCodeField.value;

    const footerTotalField = document.getElementById('footer-total');
    let footerTotalText = footerTotalField.innerText;
    let footerTotal = parseInt(footerTotalText);
    const totalPriceField = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceField.innerText);

    const percent = 20 / 100 * footerTotal;
    // comparing the promoCode
    if (promoCodeValue == 'stevekaku') {
        const total = totalPrice - percent;
        footerTotalField.innerText = total;
    }
    // clearing the promo code input value
    promoCodeField.value = '';
})