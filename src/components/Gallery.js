import React from 'react';
import {motion} from 'framer-motion'


// import CheckoutForm from './CheckoutForm';
// import PlanCard from './PlanCard';
// import ModalForm from './ModalForm';

const Gallery = () => {
  // const [toggle, setToggle] = useState(false);
 

  return (
    <div className='p-4 bg-black'>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://i.pinimg.com/originals/e6/35/59/e63559189e8b08b9b4ec3e6279d3558e.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://i.pinimg.com/736x/29/26/a8/2926a826d8e42975f0f59b0810bfe59e.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://img.freepik.com/premium-photo/portrait-female-bodybuilder-doing-routine-exercises-gym-generated-by-ai_313044-547.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://i.pinimg.com/736x/4f/ec/8c/4fec8c0a907f9d98819ce13872fa4091.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-58840833.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://images.prismic.io/netrevs/c1428a9b201bae4a69cba4c1d9b89ca3c5cde31f_shutterstock_743889451.jpg?auto=compress,format&w=1200&h=1200&fit=crop"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://i.pinimg.com/originals/47/6e/2e/476e2ebf69d406f1814f1ea1cca01cae.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://media.gq-magazine.co.uk/photos/5d13a012976fa34a1af3a580/master/w_1600%2Cc_limit/Rings-Black-GQ-04Apr16_b.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://i.pinimg.com/736x/fe/15/d7/fe15d7d389f40cf922fa68cb0a200794.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGd5bSUyMHdvcmtvdXR8ZW58MHx8MHx8fDA%3D"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://i.pinimg.com/originals/e6/35/59/e63559189e8b08b9b4ec3e6279d3558e.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://i.pinimg.com/736x/29/26/a8/2926a826d8e42975f0f59b0810bfe59e.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://img.freepik.com/premium-photo/portrait-female-bodybuilder-doing-routine-exercises-gym-generated-by-ai_313044-547.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://i.pinimg.com/736x/4f/ec/8c/4fec8c0a907f9d98819ce13872fa4091.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://thumbs.dreamstime.com/b/closeup-portrait-muscular-man-workout-barbell-gym-brutal-bodybuilder-athletic-six-pack-perfect-abs-shoulders-58840833.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center "
            src="https://images.prismic.io/netrevs/c1428a9b201bae4a69cba4c1d9b89ca3c5cde31f_shutterstock_743889451.jpg?auto=compress,format&w=1200&h=1200&fit=crop"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://i.pinimg.com/originals/47/6e/2e/476e2ebf69d406f1814f1ea1cca01cae.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://media.gq-magazine.co.uk/photos/5d13a012976fa34a1af3a580/master/w_1600%2Cc_limit/Rings-Black-GQ-04Apr16_b.jpg"
            alt="gallery-photo"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg object-cover object-center"
            src="https://i.pinimg.com/736x/fe/15/d7/fe15d7d389f40cf922fa68cb0a200794.jpg"
            alt="gallery-photo"
          />
        </div>
      </div>
    </div>


    </div>
  )
};

export default Gallery;
