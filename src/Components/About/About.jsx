import me from "../../assets/about/about.jpg"

const About = () => {
    return (
        <div className="flex gap-8">
            <div className="flex-1" >
                <img className="w-full h-[856]" src={me} alt="" />
            </div>
        <div className='py-5 gap-10 flex-1'>
        <h2 className='text-4xl font-bold mb-5'>About Me</h2>
            <h2 className='text-2xl mb-5'>Hello, I'm Sadek hossain, a passionate web developer with a creative mindset and
                 a strong technical background.</h2>
            <h2 className='text-2xl mb-5'>With 2 years of experience in the industry, I specialize in: </h2> 
            <ul className='text-2xl'>
             <li>1. Front-end development, creating visually stunning and responsive user interfaces using HTML, CSS, and JavaScript</li>
          </ul>

          <h2 className="text-2xl mb-5">  Whether you're a startup looking to establish your online presence, an organization in need of web solutions, or a fellow developer seeking collaboration, I'm always excited to take on new challenges and help bring your digital vision to life.br
          </h2>
<h2 className="text-2xl mb-5">Thank you for visiting my portfolio, and I look forward to connecting with you. Let's build something amazing together!</h2>
        </div>
        </div>
    );
};

export default About;