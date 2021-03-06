import React, {useEffect} from "react";


const ContactUs = () => {
  useEffect(() => {
    document.title = 'Contact Us | Limpupa';
 }, [])

  return (
    <div>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
        {/* <div className="container mb-60">
          <div id="google-map"></div>
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">Contact Us</h3>
                <p className="contact-page-message mb-25">
                  Claritas est etiam processus dynamicus, qui sequitur
                  mutationem consuetudium lectorum. Mirum est notare quam
                  littera gothica, quam nunc putamus parum claram anteposuerit
                  litterarum formas human.
                </p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax"></i> Address
                  </h4>
                  <p>123 Main Street, Anytown, CA 12345 – USA</p>
                </div>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-phone"></i> Phone
                  </h4>
                  <p>Mobile: (08) 123 456 789</p>
                  <p>Hotline: 1009 678 456</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o"></i> Email
                  </h4>
                  <p>yourmail@domain.com</p>
                  <p>support@hastech.company</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content pt-sm-55 pt-xs-55">
                <h3 className="contact-page-title">Tell Us Your Message</h3>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    action="http://demo.hasthemes.com/limupa-v3/limupa/mail.php"
                    method="post"
                  >
                    <div className="form-group">
                      <label>
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="customerName"
                        id="customername"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Your Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="customerEmail"
                        id="customerEmail"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        name="contactSubject"
                        id="contactSubject"
                      />
                    </div>
                    <div className="form-group mb-30">
                      <label>Your Message</label>
                      <textarea
                        name="contactMessage"
                        id="contactMessage"
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        id="submit"
                        className="li-btn-3"
                        name="submit"
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
                <p className="form-messege"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
