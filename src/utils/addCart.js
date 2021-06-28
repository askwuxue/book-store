export default function addCart(product, next) {
    console.log('product: ', product);
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
        Array.from(
            new Set(cart.map(product => product._id)))
            .map(idItem => cart
                .find(product => product._id === idItem))
        // 添加到localStorage
        window.localStorage.setItem('cart', JSON.stringify(cart))
        next && next();
    }
}