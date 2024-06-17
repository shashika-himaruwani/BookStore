import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
    <div className="descriptionbox-description">
        <p>Embark on an adventure with our new  book, where a brave young hero sets out to explore a magical
             world filled with whimsical creatures, hidden treasures, and important life lessons. With enchanting 
             illustrations and a heartwarming storyline, this book is designed to spark imagination and encourage curiosity
              in young readers. Ideal for bedtime stories or family reading time, it's a delightful journey that teaches the 
              value of friendship, courage, and believing in yourself.
             Get ready to dive into a tale that will inspire kids to dream big and embrace the magic of storytelling.</p>
         <p>Immerse yourself in the captivating world of our latest novel, a compelling blend of mystery, romance, and suspense.
             Follow the journey of complex characters as they navigate through gripping twists and unexpected turns, leading to 
             a climactic revelation that will keep you on the edge of your seat. This book offers a deep exploration of human 
             relationships and emotions, set against a backdrop of intrigue that appeals to readers who crave both 
             intellectual and emotional depth. Perfect for book clubs and solo reading alike, it's a story that will resonate long after the last page is turned.</p>    
    </div>
    </div>
  )
}

export default DescriptionBox
