import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
       
      <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
       <p>Lunara is more than just an eCommerce platform—it's a cosmic shopping experience designed to bring elegance, convenience, and innovation to your fingertips. Inspired by the beauty of the night sky and the limitless possibilities of the universe, Lunara offers a seamless and stylish way to discover the latest trends, timeless classics, and exclusive deals. Whether you're searching for fashion, lifestyle essentials, or unique finds, Lunara curates a stellar collection that transforms online shopping into something magical. With a user-friendly interface, secure transactions, and a commitment to quality, Lunara is your gateway to a universe of endless possibilities.</p>
       <p>At Lunara, shopping is more than a transaction—it’s an adventure through a universe of possibilities. Whether you’re seeking the latest trends, timeless classics, or one-of-a-kind finds, we ensure that every item is handpicked to deliver excellence. Our platform is built for convenience, security, and effortless exploration, making every purchase as smooth as the moonlit sky.
        Join us at Lunara, where the stars align to bring you the best in fashion, lifestyle, and beyond.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>At Lunara, our mission is to revolutionize the eCommerce experience by offering a seamless, stylish, and personalized shopping journey. Inspired by the elegance of the cosmos, we strive to bring customers a curated universe of quality products, blending innovation, convenience, and trust into every purchase.</p>
      </div>
      </div>
         
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Partnering with top brands and artisans to guarantee authenticity and excellence.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Ensuring a user-friendly, secure, and efficient online marketplace.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional customer Service</b>
          <p className='text-gray-600'>Our dedicated support team is always available to assist with inquiries, orders, and concerns, ensuring quick and effective resolutions.</p>
        </div>
      </div>
      <NewsletterBox/>

    </div>
  )
}

export default About