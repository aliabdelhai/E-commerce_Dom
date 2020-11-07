
const ECommerce = function()
{

    let itemsInCart = 2;

    const cart = [
        {name: 'mac', price: 9000, img:"images/mac.jpeg"},
        {name: 'iphone', price: 5000, img:"images/iphone.jpeg"}
    ]

    const products = [
        {name: 'mac', price: 9000, img: "images/mac.jpeg"},
        {name: 'iphone', price: 5000, img:"images/iphone.jpeg"},
        {name: 'airpods', price: 1000, img:"images/airpods.jpeg"},
        {name: 'ipad', price: 3000, img:"images/ipad.jpeg"},
        {name: 'appleWatch', price: 2000, img:"images/appleWatch.jpeg"}
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


