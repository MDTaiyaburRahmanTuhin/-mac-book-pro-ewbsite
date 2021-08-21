const memoryCost0 = document.getElementById('memory-cost-0');
const memoryCost180 = document.getElementById('memory-cost-180');
const extarMemory = document.getElementById('extar-memory');
const storageCost0 = document.getElementById('storage-cost-0');
const storageCost100 = document.getElementById('storage-cost-100');
const storageCost180 = document.getElementById('storage-cost-180');
const extarStorage = document.getElementById('extar-storage');
const deliveryCharge0 = document.getElementById('delivery-charge-0');
const deliveryCharge20 = document.getElementById('delivery-charge-20');
const deliveryCharge = document.getElementById('delivery-charge');
const price = document.getElementById('price');
const totalPrice = document.getElementById('total-price');
const pomoTotalPrice = document.getElementById('pomo-total-price');

function totalUpdate() {
    const faist = parseInt(price.innerText);
    const secc = parseInt(extarMemory.innerText);
    const tuhin = parseInt(extarStorage.innerText);
    const thce = parseInt(deliveryCharge.innerText);
    const full = faist + secc + thce + tuhin;
    totalPrice.innerText = full;
}


memoryCost0.addEventListener('click', function () {
    extarMemory.innerText = '0';
    price.innerText = '1299';
    totalUpdate()
});
memoryCost180.addEventListener('click', function () {
    extarMemory.innerText = '180';
    price.innerText = '1299';
    totalUpdate()
});

storageCost0.addEventListener('click', function () {
    extarStorage.innerText = '0';
    price.innerText = '1299';
    totalUpdate()
});
storageCost100.addEventListener('click', function () {
    extarStorage.innerText = '100';
    price.innerText = '1299';
    totalUpdate()
});
storageCost180.addEventListener('click', function () {
    extarStorage.innerText = '180';
    price.innerText = '1299';
    totalUpdate()
});

deliveryCharge0.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    price.innerText = '1299';
    totalUpdate()
});
deliveryCharge20.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    price.innerText = '1299';
    totalUpdate()
});

