import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

const Services = () => {
    return (
        <div className="lg:max-w-[1400px] sm:bg-white mx-auto my-9">
            <h1 className="text-center text-black font-bold  ml-[70px] md:ml-[200px] lg:ml-[600px] justify-center text-3xl btn btn-outline border-0 border-b-4 shadow-md  shadow-black mt-24">Our Services</h1>
            <p className="text-center mx-10 font-semibold mt-4">At [LM GROUP ] we are committed to providing modern, efficient and world-class services to your business. Our skilled developer team develops secure and scalable software solutions on various technology platforms,
 Which makes your business operations more efficient and improved. Our programmers ensure high quality in every line of code.
which provides maximum performance and security to your technical solution. The Engineer team solves the technical complexities very efficiently and ensures the stability and functionality of your system.</p>
<div className="flex flex-col lg:flex-row md:flex-row justify-between  sm:mt-8 md:mt-10 lg:mt-12">
            <div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full'
      src={img1}
      alt="img1" />
  </figure>
  <div className="card-body bg-black text-white">
 
<h1 className='text-xl text-orange-500'>Title:'Software Development'</h1>
<h3>Description: <hr /> Our skilled developers create secure and scalable software solutions on various technology platforms,
          making your business operations more efficient and improved. We prioritize high-quality code for maximum performance and security.
</h3>
  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
<figure>
    <img className='w-full'
      src={img2}
      alt="img2" />
  </figure>
  <div className="card-body bg-black text-white">
  <h1 className='text-xl text-orange-500'>Title:'Technical Support'</h1>
<h3>Description: <hr />           Our experienced engineers efficiently solve technical complexities to ensure the stability and functionality of your system.

</h3>

  </div>
  </div>

<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3  lg:w-96 shadow-black shadow-md">
<figure>
    <img className='w-full'
      src={img3}
      alt="img3" />
  </figure>
  <div className="card-body bg-black text-white">
  <h1 className='text-xl text-orange-500'>Title:'Information Management & Security'</h1>
<h3>Description: <hr />   Our dedicated administrators effectively manage your organization's information management and security,
enhancing your business security and maintaining continuity.
</h3>
  </div>
</div>

</div>
<div className="flex flex-col lg:flex-row md:flex-row justify-between  sm:mt-8 md:mt-10 lg:mt-12">
            <div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
       <figure>
    <img className='w-full'
      src={img4}
      alt="img4" />
  </figure>
  <div className="card-body bg-black text-white">
 
  <h1 className='text-xl text-orange-500'>Title:'Design & Branding'</h1>
<h3>Description: <hr /> Our creative designers craft and enhance your brand's visual identity, making your products or services more appealing to customers.
</h3>
  </div>
</div>
<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3 lg:w-96 shadow-black shadow-md">
<figure>
    <img className='w-full'
      src={img5}
      alt="img5" />
  </figure>
  <div className="card-body bg-black text-white">
  
  <h1 className='text-xl text-orange-500'>Title: 'Project Management & Support'</h1>
<h3>Description: <hr />           Our management and support team follows the highest standards of project management,
ensuring successful project completion and maximizing the benefits of our services.

</h3>
  </div>
  </div>

<div className="card bg-base-100 w-64 md:w-80 mx-auto my-3  lg:w-96 shadow-black shadow-md">
<figure>
    <img className='w-full'
      src={img6}
      alt="img6" />
  </figure>
  <div className="card-body bg-black text-white">
  <h1 className='text-xl text-orange-500'>Title:'Customer Support'</h1>
<h3>Description: <hr />Customer support is an essential part of our service at LM GROUP. We provide 12/5 customer service which provides anytime help to our customers.
 Our customer support team is trained and experienced, they resolve any customer issues quickly and efficiently.
 We provide customer support through various communication channels such as email, phone, and live chat. Our mission is to provide quick solutions to customer issues and concerns and enhance their experience.
 We are committed to ensure customer satisfaction and provide them with the support they need through our support system.
</h3>
  </div>
</div>

</div>
        </div>
    );
};

export default Services;