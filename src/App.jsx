import React, { useState } from 'react'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [previewImages, setPreviewImages] = useState([]);

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicleInfo: '',
    insuranceCo: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = [];
    
    files.forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setPreviewImages(prev => [...prev, evt.target.result]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleEstimateSubmit = (e) => {
    e.preventDefault();
    setToastMessage(`Thank you, ${formData.fullName}! Your photo estimate request for "${formData.vehicleInfo}" has been received. Our team will contact you shortly.`);
    
    // Reset Form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicleInfo: '',
      insuranceCo: '',
      description: ''
    });
    setPreviewImages([]);

    setTimeout(() => {
      setToastMessage('');
    }, 6000);
  };

  return (
    <div className="app-wrapper">
      {/* Top Announcement Bar */}
      <div className="top-bar">
        <div className="container bar-flex">
          <div className="bar-info">
            <span>📍 Serving Grand Ledge, MI & Surrounding Communities</span>
            <span>•</span>
            <span>⏱️ Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
          <div className="bar-cta">
            <a href="tel:5176276600" className="phone-link">📞 Call Us: (517) 627-6600</a>
            <a href="#estimate" className="quick-est-btn">Photo Estimate</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="header">
        <div className="container nav-flex">
          <a href="#" className="brand">
            <span className="brand-icon">🚗</span>
            <div className="brand-text">
              <span className="brand-name">LEDGE'S</span>
              <span className="brand-sub">AUTO BODY & PAINT</span>
            </div>
          </a>
          <nav className={`nav-links ${mobileNavOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setMobileNavOpen(false)}>Services</a>
            <a href="#before-after" onClick={() => setMobileNavOpen(false)}>Before & After</a>
            <a href="#insurance" onClick={() => setMobileNavOpen(false)}>Insurance Help</a>
            <a href="#reviews" onClick={() => setMobileNavOpen(false)}>Reviews</a>
            <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
          </nav>
          <div className="nav-cta-group">
            <a href="#estimate" className="btn btn-primary">Free Photo Estimate</a>
            <button 
              className="mobile-toggle" 
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <span className="badge">Grand Ledge's Trusted Collision Experts</span>
          <h1>Restoring Your Vehicle to Factory Perfection</h1>
          <p>From major collision repairs to precision paint matching and ding removal. We handle all insurance claims from start to finish so you get back on the road worry-free.</p>
          <div className="hero-buttons">
            <a href="#estimate" className="btn btn-primary btn-lg">Upload Damage Photos & Get Quote</a>
            <a href="tel:5176276600" className="btn btn-secondary btn-lg">Call (517) 627-6600</a>
          </div>
          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-number">30+</span>
              <span className="stat-label">Years Local Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100%</span>
              <span className="stat-label">Color Match Guarantee</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">Direct</span>
              <span className="stat-label">Insurance Carrier Billing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2>Comprehensive Auto Body Services</h2>
            <p>Complete structural and cosmetic repair backed by computerized alignment and lifetime paint warranties.</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Collision Repair</h3>
              <p>Complete frame-to-finish structural restoration following minor fender benders or major accidents.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Precision Paint Matching</h3>
              <p>Computer-assisted color code matching in our state-of-the-art down-draft spray booth.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📐</div>
              <h3>Laser Frame Alignment</h3>
              <p>Precision computerized chassis measuring to restore safety specifications to exact OEM factory limits.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🔨</div>
              <h3>Paintless Dent Repair (PDR)</h3>
              <p>Cost-effective removal of hail damage, door dings, and minor creases without disturbing original factory finish.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Insurance Claim Processing</h3>
              <p>We work directly with all insurance companies, handle supplements, and schedule rental cars for you.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚘</div>
              <h3>Bumper & Glass Repair</h3>
              <p>Quick turnaround repair or replacement of cracked bumpers, broken windshields, and side mirrors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section id="before-after" className="section">
        <div class="container">
          <div className="section-header text-center">
            <h2>Our Craftsmanship: Before & After</h2>
            <p>Take a look at recent transformations completed at our Grand Ledge facility.</p>
          </div>
          <div className="ba-grid">
            <div className="ba-card">
              <div className="ba-image-container">
                <img src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80" alt="Front end collision repair" className="ba-img" />
                <span className="ba-tag">Restored</span>
              </div>
              <div className="ba-info">
                <h4>Front Fender & Hood Restoration</h4>
                <p>Full fender replacement, frame pull, and factory tri-coat metallic paint blending.</p>
              </div>
            </div>
            <div className="ba-card">
              <div className="ba-image-container">
                <img src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80" alt="Side door damage repair" className="ba-img" />
                <span className="ba-tag">Restored</span>
              </div>
              <div className="ba-info">
                <h4>Quarter Panel & Door Repair</h4>
                <p>Deep dent repair and complete clear coat refinishing on modern luxury sedan.</p>
              </div>
            </div>
            <div className="ba-card">
              <div className="ba-image-container">
                <img src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=600&q=80" alt="Bumper repair" className="ba-img" />
                <span className="ba-tag">Restored</span>
              </div>
              <div className="ba-info">
                <h4>Rear Bumper & Tail Light Assembly</h4>
                <p>Plastic bumper welding, sensor recalibration, and high-gloss paint refinish.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Assistance Section */}
      <section id="insurance" className="section bg-dark text-white">
        <div className="container">
          <div className="insurance-flex">
            <div className="insurance-text">
              <span className="badge">Hassle-Free Process</span>
              <h2>We Work With ALL Insurance Providers</h2>
              <p>Filing a claim can be stressful. At Ledge's Auto Body, you have the legal right in Michigan to choose your repair shop. We take over carrier communication, file supplemental claims, and make sure your vehicle is restored safely.</p>
              <ul className="check-list">
                <li>✔️ Free detailed itemized estimates for insurance review</li>
                <li>✔️ Direct billing with State Farm, Progressive, Allstate, AAA, Farm Bureau & more</li>
                <li>✔️ Assistance setting up rental vehicle drop-off and pick-up</li>
                <li>✔️ Lifetime warranty on all bodywork and refinishing</li>
              </ul>
              <a href="tel:5176276600" className="btn btn-primary btn-lg mt-3">Speak With an Estimate Specialist</a>
            </div>
            <div className="insurance-box">
              <h3>4 Simple Steps To Your Repair</h3>
              <div className="step-item">
                <div className="step-num">1</div>
                <div>
                  <strong>Get an Estimate</strong>
                  <p>Upload photos online or drop by our Grand Ledge shop.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">2</div>
                <div>
                  <strong>Claim Assistance</strong>
                  <p>We provide your claim officer with detailed documentation.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">3</div>
                <div>
                  <strong>Expert Repair</strong>
                  <p>Master certified technicians restore your car to factory spec.</p>
                </div>
              </div>
              <div className="step-item">
                <div className="step-num">4</div>
                <div>
                  <strong>Keys Returned</strong>
                  <p>Drive away with a clean, fully restored vehicle backed by warranty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* React Photo Upload Estimate Form Section */}
      <section id="estimate" className="section bg-light">
        <div className="container max-w-700">
          <div className="section-header text-center">
            <h2>Request a Photo-Upload Estimate</h2>
            <p>Snap a few pictures of the vehicle damage and submit them below. Our estimators will review your photos and respond with a preliminary estimate.</p>
          </div>
          <form className="card-form" onSubmit={handleEstimateSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input 
                  type="text" 
                  id="fullName" 
                  required 
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  required 
                  placeholder="(517) 555-0199"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="vehicleInfo">Vehicle Year, Make & Model *</label>
                <input 
                  type="text" 
                  id="vehicleInfo" 
                  required 
                  placeholder="e.g. 2021 Ford F-150"
                  value={formData.vehicleInfo}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="insuranceCo">Insurance Carrier (if filing claim)</label>
              <input 
                type="text" 
                id="insuranceCo" 
                placeholder="e.g. State Farm, Auto-Owners, Out-of-pocket"
                value={formData.insuranceCo}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Upload Damage Photos (Click to select) *</label>
              <div className="drop-zone">
                <span className="drop-icon">📷</span>
                <p>Click to select damage photos for instant React state preview</p>
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  style={{ marginTop: '0.5rem' }}
                />
              </div>
              {previewImages.length > 0 && (
                <div className="file-preview-grid">
                  {previewImages.map((src, idx) => (
                    <div key={idx} className="preview-thumb">
                      <img src={src} alt={`Upload ${idx}`} />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Describe the Damage or Incident</label>
              <textarea 
                id="description" 
                rows="4" 
                placeholder="Describe where the damage is located, if the vehicle is drivable, etc."
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">Submit Photo Estimate Request</button>
          </form>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2>What Grand Ledge Drivers Say</h2>
            <p>Read real experiences from local vehicle owners.</p>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Ledge's Auto Body fixed my rear quarter panel after a deer strike. The paint match is 100% flawless. They took care of all insurance paperwork without any headache!"</p>
              <span className="reviewer-name">- Mark S., Grand Ledge</span>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Honest, prompt, and top-tier work. They gave me a fast quote from photos I uploaded online and finished the repair two days early. Highly recommended."</p>
              <span className="reviewer-name">- Sarah T., Grand Ledge</span>
            </div>
            <div className="review-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Great local shop! They straightened out my frame alignment and replaced my bumper. Car drives brand new. Friendly customer service."</p>
              <span className="reviewer-name">- Dave M., Lansing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <footer id="contact" className="footer-contact bg-dark text-white">
        <div className="container grid-footer">
          <div className="footer-info">
            <h3>Ledge's Auto Body</h3>
            <p>Your premier collision repair and paint restoration center in Grand Ledge, MI. Dedicated to quality, precision, and complete customer satisfaction.</p>
            <div className="contact-detail">
              <span>📞 Phone: <a href="tel:5176276600" className="text-accent">(517) 627-6600</a></span>
              <span>📍 Address: Grand Ledge, MI 48837</span>
              <span>⏱️ Hours: Monday - Friday: 8:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="footer-cta text-center">
            <h4>Need Immediate Towing Assistance?</h4>
            <p>Call our direct shop line for assistance with vehicle drop-off or towing guidance.</p>
            <a href="tel:5176276600" className="btn btn-primary btn-lg mt-2">Call (517) 627-6600</a>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p>&copy; 2026 Ledge's Auto Body. React JS Web Application.</p>
        </div>
      </footer>

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="toast-banner">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
