// App.js
import './App.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Product from './components/product';
import Footer from './components/footer';
import { useState } from 'react';
function App() {
  const[data,setData]=useState([{
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-wearing-jeans-clothes-sunglasses-fashion-man_158538-5023.jpg?w=360",
    name: "cargo Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 2500,
    isCart:false
  },
  {
    image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4983.jpg?w=360",
    name: "Blue Shirt",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    price: 2400,
    isCart:false
  },
  {
  image: "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-blue-shirt-clothes-fashion-man-posing_158538-4913.jpg?w=360",
  name: "Red Shirt",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  price: 1000,
  isCart:false
},
{
  image: "https://img.freepik.com/free-photo/portrait-sexy-handsome-young-man-posing-studio-with-modern-curly-hairstyle_186202-1614.jpg?w=360",
  name: "Black Shirt",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  price: 800,
  isCart:false
},
{
  image: "https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=360&t=st=1712157484~exp=1712158084~hmac=ace51279aae16de13fe3e5ffa12a4ace4e7570524da047bc818c2e74a6ceb510",
  name: "T-Shirt",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  price: 400,
  isCart:false
},
{
  image: "https://img.freepik.com/free-vector/monocolor-midnight-madness-marathon-t-shirt-design_742173-5733.jpg?w=360&t=st=1712158364~exp=1712158964~hmac=4af34889b7eec9d382ee6bde601eb099a7444657d1f08db90a15e8927f88b90d",
  name: "White T-Shirt",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  price: 700,
  isCart:false
},
{
  image: "https://img.freepik.com/free-vector/color-sport-sneaker_98292-3191.jpg?w=740",
  name: "Shoe",
  description: "running shoe",
  price: 1700,
  isCart:false
},
{
  image: "https://img.freepik.com/free-photo/brown-shoe-isolated-white-background-studio_268835-1353.jpg?w=826",
  name: "Formal shoe",
  description: "leather shoe made of pure Leather good for daily use",
  price: 300,
  isCart:false
}]);
  const[cart,setCart]=useState([])



function handleclick(item){
 
  const update=data.map((value)=>{
   if(value.name==item.name){
    value.isCart = !value.isCart; //true to false false to true
   } 
   return value;   
  })
  setData(update)
  const cartDetails=update.filter((item)=>{//return the alny iscart value is True
    return item.isCart
  })
  setCart(cartDetails)
  console.log(data)
}

  return (
    <>
      <Navbar cart={cart}/>
      <Header />
      <div className="row mx-0 my-4">
        {data.map((item, index) => (
          <div key={index} className='col-xl-3 col-md-4 col-lg-3 col-sm-12 my-2'>
            <Product handleclick={()=>handleclick(item)} image={item.image} name={item.name} description={item.description} price={item.price} isCart={item.isCart}/>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default App;
