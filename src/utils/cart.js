export function addCart(product, next) {
    let cart = [];
    // 判断window存在
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('cart')) {
            cart = JSON.parse(window.localStorage.getItem('cart'));
        }
        // 添加商品数据到购物车
        cart.push({
            ...product,
            count: 1
        });
        // 删选唯一数据
        let newArray = Array.from(new Set(cart.map(product => product._id)));
        let finalArray = newArray.map(idItem => cart.find(product => product._id === idItem))
        // 添加到localStorage
        window.localStorage.setItem('cart', JSON.stringify(finalArray));
        next && next();
    }
}

// 获取购物车信息
export function getCart() {
    let cart = [];
    // 判断window存在
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('cart')) {
            cart = JSON.parse(window.localStorage.getItem('cart'));
        }
    }
    return cart;
}

// 更新购物车信息
export function updateCart(productId, count) {
    let cart = [];
    // 判断window存在
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('cart')) {
            cart = JSON.parse(window.localStorage.getItem('cart'));
            let product = cart.find(item => item._id === productId);
            product.count = count;
            window.localStorage.setItem('cart', JSON.stringify(cart));
            // TODO 为什么cart没有更新
            // console.log('cart: ', cart);
        }
    }
    return cart;
}

// 删除购物车数据
export function deleteProduct(productId) {
    let cart = [];
    // 判断window存在
    if (typeof window !== 'undefined') {
        if (window.localStorage.getItem('cart')) {
            cart = JSON.parse(window.localStorage.getItem('cart'));
            let index = cart.findIndex(item => item._id === productId);
            cart.splice(index, 1);
            window.localStorage.setItem('cart', JSON.stringify(cart));
        }
    }
    return cart;
}