const Renderer = function(){
    

    const renderProducts = function(products)
    {
        $('#products').empty()
        for(let product of products)
        {
            let productBox = $(`<div class="product"><p class="product-name">Product: ${product.name}</p><p class="product-price">Price: ${product.price}</p><p class="product-img">${product.img}</p><button class="Add-to-cart">Add to cart</button></div>`)
            $("#products").append(productBox)
        }
    }

    const renderCartProducts = function(cart){
        $('#products').empty()
        for(let product of cart)
        {
            let productBox = $(`<div class="product"><p class="product-name">Product: ${product.name}</p><p class="product-price">Price: ${product.price}</p><p class="product-img">${product.img}</p><button class="DeleteFromCart">Delete from cart</button></div>`)
            $("#products").append(productBox)
        }
        
    }

    return {
        renderProducts, renderCartProducts
    }
}
