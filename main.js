
const Ecommerce = ECommerce()
const renderer = Renderer()



const allProducts = function(){
    $('#products').empty()
    $('.uses').empty()
    renderer.renderProducts(Ecommerce.getProducts())

}

const cart = function()
{
    $('#products').empty()
    $('.uses').empty()
    renderer.renderCartProducts(Ecommerce.getCart())

}

const aboutUS = function()
{
    $('#products').empty()
    $('.uses').empty()
    const aboutUs = "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops and sells consumer electronics, computer software, and online services. It is considered one of the Big Tech technology companies, alongside Amazon, Google, Microsoft, and Facebook. The company's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple's software includes macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam music identifier and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card."  
    let aboutUsBox = $(`<div class='uses'><div class='US'>${aboutUs}</div></div>`)
    $("body").append(aboutUsBox)
}   

$('#products').on('click', '.Add-to-cart', function(){
    const str1 = $(this).closest('.product').find('.product-name').text()
    let str2 = str1.split(" ")
    let name = str2[1]
    let str3 = $(this).closest('.product').find('.product-price').text()
    let str4 = str3.split(" ")
    let price = str4[1]
    let img = $(this).closest('.product').find('.product-img').text()
    let obj = {name: name, price: price, img:img}
    Ecommerce.addToCart(obj)
    $('.cart-page').text(`cart: ${Ecommerce.getItems()}`)

})



$('#products').on('click', '.DeleteFromCart', function(){
    const str1 = $(this).closest('.product').find('.product-name').text()
    let str2 = str1.split(" ")
    let name = str2[1]
    let str3 = $(this).closest('.product').find('.product-price').text()
    let str4 = str3.split(" ")
    let price = str4[1]
    let img = $(this).closest('.product').find('.product-img').text()
    let obj = {name: name, price: price, img:img}
    Ecommerce.deleteFromCart(obj)
    renderer.renderCartProducts(Ecommerce.getCart())
    $('.cart-page').text(`cart: ${Ecommerce.getItems()}`)

})

