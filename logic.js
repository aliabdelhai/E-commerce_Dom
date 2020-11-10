

const ECommerce = function()
{

    let itemsInCart = 2;

    const cart = [
        {name: 'mac', price: 9000, img:"images/mac.jpeg"},
        {name: 'iphone', price: 5000, img:"images/iphone.png"}
    ]

    const products = [
        {name: 'mac', price: 9000, img: "images/mac.jpeg"},
        {name: 'iphone', price: 5000, img:"images/iphone.png"},
        {name: 'airpods', price: 1000, img:"images/airpods.jpg"},
        {name: 'ipad', price: 3000, img:"images/ipad.jpg"},
        {name: 'appleWatch', price: 2000, img:"images/appleWatch.jpg"}
    ]

    const getProducts = () => products
    const getCart = () => cart

    const addToCart = function(product){
        itemsInCart++;
        cart.push(product)
    } 
    

    const deleteFromCart = function(product){
        itemsInCart--;
        const Pname = product.name;
        for(let p=0; p < cart.length; p++)
        {
            if(cart[p].name == Pname)
            {
                cart.splice(p,1)
            }
        }
    }

    const getItems = () => itemsInCart

    return {
        getProducts, getCart, addToCart, deleteFromCart, getItems
    }

    





}


