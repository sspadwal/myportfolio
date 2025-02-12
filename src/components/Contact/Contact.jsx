import './Contact.css'
import theme_pattern from  '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'


function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "3b926122-a398-48ce-a237-475f62498d2c");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            event.target.reset();  // ✅ Clears the form after submission
        }
    };



    return (
        <div id="contact"  className='contact'>
            <div className="contact-title">

            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="theme" />
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1> Let's Talk</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti nobis sit pariatur, temporibus tempora quia molestiae ut nesciunt iste autem!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="mail" />
                            <p>sspadwal01@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="call" />
                            <p>+91-8459456812</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="location" />
                            <p> Mumbai, Maharashtra</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right" method="POST">
                    <label htmlFor=""> Your Name  </label>
                    <input type="text" placeholder='Enter Your Name ' name='name' required />

                    <label htmlFor=""> Your Email  </label>
                    <input type="email" placeholder='Enter Your Email ' name='email' required />

                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" cols="25" rows="10" placeholder='Enter Your Message ' required></textarea>

                    <button type='submit' className="contact-submit">
                        Submit now
                    </button>
                </form>
            </div>
        </div>


    )
}

export default Contact
