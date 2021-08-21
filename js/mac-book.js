document.getElementById('memory-8gb').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraStorageField = document.getElementById('extra-storage-price');
    const extraStoragePrice = extraStorageField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraMemoryField = document.getElementById('extra-memory-price');
    extraMemoryField.innerText = 0;
    const extraMemoryPrice = extraMemoryField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
})

document.getElementById('memory-16gb').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraStorageField = document.getElementById('extra-storage-price');
    const extraStoragePrice = extraStorageField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraMemoryField = document.getElementById('extra-memory-price');
    extraMemoryField.innerText = 180;
    const extraMemoryPrice = extraMemoryField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
})
// event handling for 256GB SSD button
document.getElementById('ssd-256gb').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraMemoryField = document.getElementById('extra-memory-price');
    const extraMemoryPrice = extraMemoryField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraStorageField = document.getElementById('extra-storage-price');
    extraStorageField.innerText = 0;
    const extraStoragePrice = extraStorageField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraStoragePrice) + parseInt(bestPrice.innerText) + parseInt(extraMemoryPrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
})

// storage buttons handling
document.getElementById('ssd-512gb').addEventListener('click', function () {
    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraMemoryField = document.getElementById('extra-memory-price');
    const extraMemoryPrice = extraMemoryField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraStorageField = document.getElementById('extra-storage-price');
    extraStorageField.innerText = 100;
    const extraStoragePrice = extraStorageField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraStoragePrice) + parseInt(bestPrice.innerText) + parseInt(extraMemoryPrice) + parseInt(deliveryChargeCost);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
})

// event handling for 1TB SSD
document.getElementById('ssd-1tb').addEventListener('click', function () {

    const bestPrice = document.getElementById('best-price');
    bestPrice.innerText = 1299;
    const extraMemoryField = document.getElementById('extra-memory-price');
    const extraMemoryPrice = extraMemoryField.innerText;
    const deliveryChargeField = document.getElementById('delivery-charge');
    const deliveryChargeCost = deliveryChargeField.innerText;

    const extraStorageField = document.getElementById('extra-storage-price');
    extraStorageField.innerText = 180;
    const extraStoragePrice = extraStorageField.innerText;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = parseInt(extraStoragePrice) + parseInt(bestPrice.innerText) + parseInt(extraMemoryPrice) + parseInt(deliveryChargeCost);
    // totalPrice.innerText = parseInt(extraMemoryPrice.innerText) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice.innerText) + parseInt(deliveryChargeCost.innerText);
    const footerTotal = document.getElementById('footer-total');
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
})

// event handlig for delivery cost button free delivery
document.getElementById('free-delivery').addEventListener('click', function () {
    const deliveryChargeField = document.getElementById('delivery-charge');
    deliveryChargeField.innerText = 0;
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
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
})

// event handlig for delivery cost button fast delivery
document.getElementById('fast-delivery').addEventListener('click', function () {
    const deliveryChargeField = document.getElementById('delivery-charge');
    deliveryChargeField.innerText = 20;
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
    footerTotal.innerText = parseInt(extraMemoryPrice) + parseInt(bestPrice.innerText) + parseInt(extraStoragePrice) + parseInt(deliveryChargeCost);
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
    if (promoCodeValue == 'stevekaku') {
        const total = totalPrice - percent;
        footerTotalField.innerText = total;
    }
    // else {
    //     const p = document.createElement('p');
    //     p = 'Please insert a valid promo code';
    //     const promo = document.getElementById('promo');
    //     promo.appendChild('p');
    // }
    promoCodeField.value = '';
})