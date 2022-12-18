import './Contact.css'

export default function Contact() {
  const phoneNo = '407-928-0326';
  const email = 'peterpileta@gmail.com';
  const gitProfile = 'https://github.com/peterpileta'
  const linkedIn = 'https://www.linkedin.com/in/peter-pileta';

  return (
    <div className='contact-container'>
        <h1>Contact me</h1>      
        <div className="contact-information">
          <a><i className="fa-solid fa-envelope"></i>{email}</a>
          <a href={gitProfile}><i className="fa-brands fa-github"></i>{gitProfile}</a>
          <a href={linkedIn}><i className="fa-brands fa-linkedin"></i>{linkedIn}</a>
        </div>
    </div>
  )
}
