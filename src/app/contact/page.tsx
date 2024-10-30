

export default function about() {
  return (
    <section className="contact-section">
      <div className="contact-container container">
        <section>
        <div className="contact-section">
            <div className="contact-header">
              <h1 className="contact-title">Contact</h1>
            </div>
            <div className="contact-content">
              <div className="contact-info">
                <h1 className="contact-subtitle">Reach out to me</h1>
                <div>
                <h3 className="contact-phone">+92 346 285003</h3>
                <h3 className="contact-email">nomanbrohi9@gmail.com</h3>
                </div>
                <p className="contact-address">
                  10st Abd EL Aziz Al Soud, 05th Floor, Manial,
                  Roda, Cairo, Egypt.
                </p>
              </div>
              <div className="contact-form-container">
                <form className="contact-form">
                  {/* First Line: Name and Email */}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  {/* Second Line: Message */}
                  <div className="form-field">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Third Line: Attach File */}
                  <div className="file-upload">
                    <label htmlFor="file" className="file-upload-label">
                      Attach File
                    </label>
                    <input type="file" id="file" name="file" className="file-upload-input" />
                  </div>

                  {/* Fourth Line: Submit Button */}
                  <div>
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
