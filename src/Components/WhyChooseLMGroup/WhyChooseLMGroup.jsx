
import '../why-choose-lm-group/why-choose-lm-group.css'; // Import your CSS file

function WhyChooseLMGroup() {
  const reasons = [
    {
      title: 'Team of Experts',
      description: 'Our team consists of more than 100 experienced professionals who are skilled in every field. We provide high quality services in every aspect of development, engineering, design, and management.',
    },
    {
      title: 'Integrated Services',
      description: 'At LM GROUP we cater to all your technical needs under one umbrella. Over 30 specialized services across six core categories support your business holistically.',
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We work closely with each client, providing customized solutions as per their needs and ensuring that our services are helpful in achieving their business goals.',
    },
    {
      title: 'Use of Latest Technologies',
      description: 'We always keep pace with new and innovative technologies, which provide maximum efficiency and competitive advantage to our clients.',
    },
    {
      title: 'Timely and Reliable',
      description: 'We are known for timely delivery and reliability. Working with LM GROUP you can be sure that your projects will be completed on time and on budget.',
    },
    {
      title: 'International Standards',
      description: 'We provide world class services and have successfully worked with international clients. Our services are recognized and respected all over the world.',
    },
  ];

  return (
    <section className="why-choose-lm-group sm:bg-white my-8">
      <h2 className='lg:text-3xl  btn btn-outline border-0 border-b-4 shadow-md my-3  shadow-black'>Why Choose LM GROUP?</h2>
      <div className="reasons">
        {reasons.map((reason, index) => (
          <div className="reason-card" key={index}>
            <h3 className='text-2xl text-orange-500 font-bold'>{reason.title}</h3>
            <p className='font-semibold'>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseLMGroup;