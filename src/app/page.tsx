import "./home.css";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page">

        {/* HERO */}
        <section className="hero">
          <h1 className="title">Engineering Intelligence.</h1>

          <h2 className="subtitle">
            Building Scalable Future Systems.
          </h2>

          <p className="description">
            Hevar Quantum builds AI-driven platforms, secure backend architectures,
            and enterprise-grade data systems designed for scale.
          </p>

          <div className="buttonContainer">
            <a href="#products" className="primaryButton">
              Explore Products
            </a>

            <a href="#contact" className="secondaryButton">
              Work With Us
            </a>
          </div>
        </section>

        {/* PRODUCTS */}
        <section id="products" className="products fadeUp">
          <h2 className="sectionTitle">Products</h2>

          <div className="cardContainer">
            <div className="card">
              <h3>LogiHub</h3>
              <p>Logistics automation & partner integration platform.</p>
            </div>

            <div className="card">
              <h3>Hevar Assistant</h3>
              <p>AI-powered voice and document intelligence platform.</p>
            </div>

            <div className="card">
              <h3>MS Visa</h3>
              <p>Enterprise data transformation engine for modern analytics workflows.</p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services fadeUp">
          <h2 className="sectionTitle">Services</h2>

          <div className="serviceGrid">
            <div className="serviceCard">
              <h3>AI System Development</h3>
              <p>
                Designing and deploying intelligent systems including LLM integrations,
                voice interfaces, and document intelligence pipelines.
              </p>
            </div>

            <div className="serviceCard">
              <h3>Backend Architecture</h3>
              <p>
                Scalable distributed system design optimized for performance,
                reliability, and observability.
              </p>
            </div>

            <div className="serviceCard">
              <h3>Enterprise Data Engineering</h3>
              <p>
                Databricks, SQL transformation engines, and high-performance data pipelines.
              </p>
            </div>

            <div className="serviceCard">
              <h3>Secure Cloud Deployment</h3>
              <p>
                End-to-end secure infrastructure with CI/CD, containerization,
                and production monitoring.
              </p>
            </div>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="vision fadeUp">
          <h2 className="visionTitle">
            Rethinking Intelligent Infrastructure
          </h2>

          <p className="visionText">
            At Hevar Quantum, we believe the next decade will be defined by intelligent,
            self-evolving systems. Our mission is to engineer scalable architectures
            that integrate AI, data, and distributed infrastructure — building
            the foundation for the next layer of technological evolution.
          </p>

          <p className="visionText">
            From logistics automation to AI-powered document intelligence and
            enterprise data transformation, we design systems that are not only
            performant and secure — but built to evolve.
          </p>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact fadeUp">
          <h2 className="sectionTitle">Let’s Build Something Intelligent</h2>

          <div className="contactContainer">
            <div className="contactInfo">
              <h3>Get in touch</h3>
              <p>
                Whether you’re building AI systems, enterprise platforms, or scalable
                backend infrastructure — we’d love to collaborate.
              </p>
              <p className="contactEmail">
                contact@hevarquantum.com
              </p>
            </div>

            <form
              className="contactForm"
              action="https://formspree.io/f/mvzbwjgw"
              method="POST"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows={5}
                required
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="footerContainer">
            <div className="footerBrand">
              <h3>Hevar Quantum</h3>
              <p>
                Engineering intelligent infrastructure for the next generation
                of scalable systems.
              </p>
            </div>

            <div className="footerLinks">
              <h4>Company</h4>
              <a href="#products">Products</a>
              <a href="#services">Services</a>
              <a href="#vision">Vision</a>
            </div>

            <div className="footerLinks">
              <h4>Connect</h4>
              <a href="#">LinkedIn</a>
              <a href="#">Email</a>
            </div>
          </div>

          <div className="footerBottom">
            © {new Date().getFullYear()} Hevar Quantum. All rights reserved.
          </div>
        </footer>

      </main>
    </>
  );
}