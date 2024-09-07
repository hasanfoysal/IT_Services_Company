
import img from '../../../assets/pexels-photo-7606027.webp'
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: `url(${img})`}}>
  <div className="hero-overlay bg-opacity-60 min-h-screen shadow-2xl "><img className='opacity-90 ' /></div>
  <div className="hero-content text-center text-neutral-content">
    <div>
      <h1 className="mb-8 text-xl text-white font-bold">This is The Global IT Service Center</h1>
      <div> <p className="mb-5 lg:text-7xl text-3xl text-white font-bold ">Welcome to LM Group!</p></div>
      
      <p className='text-white lg:my-8 font-bold '>At LM GROUP, we are committed to moving your business forward, providing modern IT solutions tailored to your specific needs.
 Our expertise spans the various fields of development, engineering, design and management, ensuring that you receive integrated and innovative services that will take your business to new heights.
 Join us today and join us in shaping the future of technology.</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;