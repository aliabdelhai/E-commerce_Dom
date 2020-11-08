const Renderer = function(){
    

    const renderProducts = function(products)
    {
        $('#products').empty()
        for(let product of products)
        {
            let productBox = 
            $(`<div class="product">
            <p class="name">Product: ${product.name}</p>
            <p class="price">Price: ${product.price}</p>
            <p class="img1"><img src="${product.img}"></p>
            <p class="click"><button class="Add-to-cart">Add to cart</button><p>
            </div>`)
            $("#products").append(productBox)
        }
    }

    const renderCartProducts = function(cart){
        $('#products').empty()
        for(let product of cart)
        {
            let productBox =
             $(`<div class="product">
             <p class="name">Product: ${product.name}</p>
             <p class="price">Price: ${product.price}</p>
             <p class="img1"><img src="${product.img}"</p>
             <p class="click"><button class="DeleteFromCart">Delete from cart</button></p>
             </div>`)
            $("#products").append(productBox)
        }
        
    }

    return {
        renderProducts, renderCartProducts
    }
}
