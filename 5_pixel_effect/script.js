const canvas = document.getElementById("canvas1")
// ctx is an instance of canvas 2d api object
const ctx = canvas.getContext('2d')
// this two values need be set the same as the value we see in the css file, to make sure we get the correct scaling
canvas.width = 800;
canvas.height = 450;
// create a image instance
const image1 = new Image()
image1.src = 'image.jpg'
// drawImage takes three arguements, image you want to draw, x-coordinate, y-coordinate
image1.addEventListener("load", function(){
    ctx.drawImage(image1,0,0,canvas.width, canvas.height)
    // getImageData method scans what area of your image
    const scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height);
    console.log(scannedImage)
    img.crossOrigin = "Anonymous"
})


