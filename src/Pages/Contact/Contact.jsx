import React, { useState } from "react";
import "./contact.css";
import { TfiEmail, TfiMap, TfiMobile } from "react-icons/tfi";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import InputFiled from "../../Components/Shared/InputFiled/InputFiled";
import { ScrollRestoration } from "react-router-dom";
import { useContactSubmissions } from "../../hooks/useContactSubmissions";

const Contact = () => {
  const { submitContact, loading, error } = useContactSubmissions();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus({
        type: 'error',
        message: '请填写所有必填字段'
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus({
        type: 'error',
        message: '请输入有效的邮箱地址'
      });
      return;
    }

    try {
      const result = await submitContact(formData);
      
      if (result.error) {
        setSubmitStatus({
          type: 'error',
          message: `提交失败: ${result.error}`
        });
      } else {
        setSubmitStatus({
          type: 'success',
          message: '感谢您的留言！我们将尽快与您联系。'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      }
    } catch (err) {
      setSubmitStatus({
        type: 'error',
        message: '提交过程中发生错误，请稍后重试'
      });
    }
  };

  return (
    <>
      <PageHeader pageName={"Get In Touch"} sortName={"Contact"} />
      
      {/* --------- START ADDRESS --------- */}
      <section className="address_area section-padding">
        <div className="container">
          <div className="row text-center">
            <div
              className="col-lg-4 col-sm-4 col-xs-12 "
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="single_address">
                <i>
                  <TfiMap />
                </i>
                <h4>Our Location</h4>
                <p>
                  123 Innovation Drive, Tech City <br /> TC 12345
                </p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="single_address sabr">
                <i>
                  <TfiMobile />
                </i>
                <h4>Telephone</h4>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 987-6543</p>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-4 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="single_address">
                <i>
                  <TfiEmail />
                </i>
                <h4>Send email</h4>
                <p>hello@example.com</p>
                <p>info@company.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- END ADDRESS ---------  */}

      {/* ------ start CONTACT */}
      <section id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title-two">
            <h2>Send your message.</h2>
          </div>
          <div className="row">
            <div
              className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <div className="contact">
                {/* Status Message */}
                {submitStatus && (
                  <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                    {submitStatus.message}
                  </div>
                )}

                <form className="form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <InputFiled
                        label={"Name"}
                        name={"name"}
                        type={"text"}
                        required={true}
                        placeholder={""}
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputFiled
                        label={"Email"}
                        name={"email"}
                        type={"email"}
                        required={true}
                        placeholder={""}
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputFiled
                        label={"Phone (Optional)"}
                        name={"phone"}
                        type={"tel"}
                        required={false}
                        placeholder={""}
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <InputFiled
                        label={"Company (Optional)"}
                        name={"company"}
                        type={"text"}
                        required={false}
                        placeholder={""}
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-12">
                      <InputFiled
                        label={"Your Subject"}
                        name={"subject"}
                        type={"text"}
                        required={true}
                        placeholder={""}
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        rows="6"
                        name="message"
                        className="form-control"
                        required="required"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                      ></textarea>
                    </div>
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        className="home_one"
                        disabled={loading}
                        title="Submit Your Message!"
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------- END CONTACT */}

      <ScrollRestoration/>
    </>
  );
};

export default Contact;