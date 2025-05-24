import React, { useState } from "react"
import { Heart, Star, Minus, Plus, ShoppingCart } from "lucide-react"
import img1 from "../assets/Frame1.png"
import img2 from "../assets/Frame2.png"
import img3 from "../assets/Frame3.png"
import Fram18 from "../assets/Frame_18.jpg"
import Rectangle from "../assets/Rectangle.png"

function Badge({ children, className }) {
  return (
    <span
      className={
        "inline-flex items-center justify-center rounded-full bg-red-600 text-white font-semibold " +
        (className || "")
      }
    >
      {children}
    </span>
  )
}

// Simple Button component with optional variants and size
function Button({ children, variant, size, className, ...props }) {
  let baseStyle =
    "inline-flex items-center justify-center rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"

  let variantStyles = {
    default: "bg-black text-white hover:bg-gray-800 focus:ring-black",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-400",
  }

  let sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const appliedVariant = variantStyles[variant] || variantStyles.default
  const appliedSize = sizeStyles[size] || sizeStyles.md

  return (
    <button
      {...props}
      className={`${baseStyle} ${appliedVariant} ${appliedSize} ${className || ""}`}
    >
      {children}
    </button>
  )
}

export default function ProductCart() {
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isInCart, setIsInCart] = useState(false)
  const [cartItems, setCartItems] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const sizes = ["XS", "S", "M", "L", "XL"]
  const price = 7999
  const mrp = 9999

  const productImages = [img1, img2, img3]


  const handleSizeSelect = (size) => {
    setSelectedSize(size)
  }

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1)
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    setIsInCart(true)
    setCartItems((prev) => prev + quantity)
    setTimeout(() => setIsInCart(false), 2000)
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }
    alert(`Proceeding to checkout with ${quantity} item(s) in size ${selectedSize}`)
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Header with cart count */}
      {/* <div className="bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Product Details</h1>
        <div className="relative">
          <ShoppingCart className="w-6 h-6" />
          {cartItems > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
              {cartItems}
            </Badge>
          )}
        </div>
      </div> */}

      <div className="w-full mx-auto sm:p-0 md:p-4 p-14">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Product Images - Desktop */}
          <div className="space-y-4">
            <div className="overflow-hidden h-full">
              <img
                src={Fram18 || "/placeholder.svg"}
                alt="Red Blazer Main"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
           
          </div>

          {/* Product Details - Desktop */}
          <div className="space-y-8 ">
            <div>
            <div className="grid grid-cols-3 gap-4 ">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className="aspect-[3/4] bg-white overflow-hidden cursor-pointer hover:ring-2 hover:ring-red-500 mb-4"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Red Blazer ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
            <div className="border-t border-gray-300 mt-8 mb-4"></div>

             
            
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline gap-3 my-5">
                
                <span className="text-4xl text-gray-900">₹ {price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">MRP incl. of all taxes</span>
              </div>
              {/* <p className="text-sm text-green-600">You save ₹ {(mrp - price).toLocaleString()}</p> */}
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-baseline mb-3">
                  <label className="text-xl font-medium mr-4 text-gray-600">Please select a size</label>
                  <button className="text-sm hover:text-gray-400 text-gray-500  underline">Size chart</button>
                </div>
                <div className="grid grid-cols-5 gap-2 my-10">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`py-3 px-3 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "border-red-500 bg-red-50 text-red-700"
                          : "border-gray-100 bg-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="border-t border-gray-300 mt-8 mb-18"></div>

              </div>

              {/* <div className="space-y-3">
                <label className="text-sm font-medium text-gray-900">Quantity</label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleQuantityChange("decrease")}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increase")}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div> */}
            </div>

            <div className=" flex gap-3 items-center">
              
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-base font-medium"
                size="lg"
              >
                {isInCart ? "Added to Cart!" : "Add to Cart"}
              </Button>

              <Button
                onClick={handleBuyNow}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 text-base font-medium"
                size="lg"
              >
                Buy
              </Button>
            </div>

            <button
              onClick={toggleWishlist}
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-6">
          {/* Product Images - Mobile */}
          <div className="space-y-4 ">
            <div className="overflow-hidden ">
              <img
                src={Rectangle || "/placeholder.svg"}
                alt="Red Blazer Main"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="grid grid-cols-3 gap-2 ">
              {productImages.map((image, index) => (
                <div key={index} className="px-4 bg-white rounded-lg overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Red Blazer ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details - Mobile */}
          <div className="space-y-4 px-4">
            <div>
            <div className="border-t border-gray-300 mt-8 mb-12"></div>
              
             
            </div>

            <div className="flex items-baseline gap-3">
              
              <div className="border-t border-gray-300 mt-8 mb-8"></div>
              
                
                <span className="text-4xl text-gray-900">₹ {price.toLocaleString()}</span>
                <span className="text-sm text-gray-500">MRP incl. of all taxes</span>
              </div>
              

            <div className="space-y-4">
              <div>
                
              <div>
                <div className="flex items-baseline mb-3">
                  <label className="text-xl font-medium mr-4 text-gray-600">Please select a size</label>
                  <button className="text-sm hover:text-gray-400 text-gray-500  underline">Size chart</button>
                </div>
                <div className="grid grid-cols-5 gap-2 my-8">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => handleSizeSelect(size)}
                      className={`py-3 px-3 border rounded-md text-sm font-medium transition-colors ${
                        selectedSize === size
                          ? "border-red-500 bg-red-50 text-red-700"
                          : "border-gray-100 bg-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                

              </div>
                
              </div>

             
            </div>

            <div className="space-y-3">
              <Button onClick={handleBuyNow} className="w-full bg-black hover:bg-gray-800 text-white py-3" size="lg">
                Buy
              </Button>
              <Button
                onClick={handleAddToCart}
                variant="outline"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
                size="lg"
              >
                {isInCart ? "Added to Cart!" : "Add to Cart"}
              </Button>
            </div>

            <button onClick={toggleWishlist} className="flex items-center gap-2 text-sm pb-8 text-gray-600">
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
              {isWishlisted ? "In Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
