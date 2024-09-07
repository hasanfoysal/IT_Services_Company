import img from '../../assets/image.png'

const Ceo = () => {
    return (
        <div>
               <div className="hero bg-slate-600 text-white  min-h-screen mt-10 rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse justify-between">
   <img
      src={img}
      className="max-w-sm rounded-lg shadow-2xl  lg:w-[400px] lg:h-[550px] md:w-[300px] md:h-[450px] w-[200px] h-[350px] lg:ml-40 " />
    <div className=' mt-10'>
    <h1 className="lg:text-3xl  my-2 text-2xl font-bold">Dear well wishers, <span className='text-orange-500 shadow-lg shadow-slate-600'>I am Mahmud Hasan,</span>  <br /> I am pleased to introduce myself as Founder and Managing Director of LM GROUP. </h1>
   <p className="py-6">
   At LM GROUP we are committed to providing the highest quality IT services. Our services are divided into six main categories: Developer, Programmer, Engineer, Administrator, Designer/Creative, and Management/Support. We offer more than 30 specialized services in each of these categories, enabling us to provide reliable and complete services to our clients. We are an organization capable of providing integrated and comprehensive services, which sets us apart from other organizations.


 <h3 className='mt-4'>  Our team consists of more than 100 highly skilled professionals working with deep knowledge and experience in their respective fields. We are committed to delivering beyond your expectations and taking your business to new heights of success.
 </h3>
 <h1 className='mt-4'>We look forward to the opportunity to work with you and hope that our services will contribute immensely to the growth of your business. Let's take your business forward in the digital age together.</h1>
      </p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Ceo;