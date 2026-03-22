import "./home.css";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { ArrowRight, Package, Cpu, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="page">

        {/* HERO */}
        <section className="hero">
          <h1 className="title fadeUp" style={{ animationDelay: '0.1s' }}>Engineering Intelligence.</h1>

          <h2 className="subtitle fadeUp" style={{ animationDelay: '0.2s' }}>
            Building Scalable Future Systems.
          </h2>

          <p className="description fadeUp" style={{ animationDelay: '0.3s' }}>
            Hevar Quantum builds AI-driven platforms, secure backend architectures,
            and enterprise-grade data systems designed for scale.
          </p>

          <div className="buttonContainer fadeUp" style={{ animationDelay: '0.4s' }}>
            <a href="#products" className="primaryButton" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Explore Products <ArrowRight size={18} />
            </a>

            <a href="#contact" className="secondaryButton">
              Work With Us
            </a>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* PRODUCTS */}
        <section id="products" className="products fadeUp" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <h2 className="sectionTitle" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '60px', background: 'linear-gradient(to right, #06B6D4, #3B82F6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>
            Our Products
          </h2>
          <div className="cardContainer" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <Link href="/products/logihub" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                  <Package size={32} color="#3B82F6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#F8FAFC' }}>LogiHub</h3>
                <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '1rem' }}>An end-to-end logistics automation and partner integration platform, mediating between e-commerce vendors and delivery channels.</p>
              </div>
            </Link>

            <Link href="/products/hevar-assistant" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
                <div style={{ background: 'rgba(139, 92, 246, 0.1)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                  <Cpu size={32} color="#8B5CF6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#F8FAFC' }}>Hevar Assistant</h3>
                <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '1rem' }}>An AI Agent engineered for voice and text, capable of document processing, QA, mathematical data logic, and file generation.</p>
              </div>
            </Link>

            <Link href="/products/ms-visa" style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
                <div style={{ background: 'rgba(6, 182, 212, 0.1)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                  <Database size={32} color="#06B6D4" />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px', color: '#F8FAFC' }}>MS Visa</h3>
                <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '1rem' }}>Enterprise SaaS data migration layer powered by Databricks LLMs to intelligently scale transformations on native Azure.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* VISION */}
        <section id="vision" className="vision fadeUp" style={{ padding: '120px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 className="visionTitle" style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '40px', background: 'linear-gradient(to right, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Rethinking Intelligent Infrastructure
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '1.2rem', color: '#9CA3AF', lineHeight: 1.8, textAlign: 'justify' }}>
            <p>
              At Hevar Quantum, we do not just build software; we engineer deep technological ecosystems. We believe the next epoch of enterprise capability will be defined by systems that are not merely functional, but <strong style={{ color: '#F8FAFC' }}>autonomously intelligent</strong> and inherently scalable.
            </p>
            <p>
              Our architectural philosophy centers on decoupling complex monolithic structures into high-throughput, containerized microservices. By leveraging <strong style={{ color: '#F8FAFC' }}>advanced LLM-driven decision engines, real-time WebRTC networking, and distributed data lakes</strong>, we eliminate infrastructural bottlenecks.
            </p>
            <p>
              Whether it is orchestrating zero-downtime CI/CD pipelines across multi-region Kubernetes clusters, or deploying active neural networks capable of parsing millions of unstructured documents milliseconds after ingestion, Hevar Quantum is constructing the foundational layer for the next iteration of the web.
            </p>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="fadeUp" style={{ padding: '80px 20px 120px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 0.9) 100%)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', padding: '60px', display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center', boxShadow: '0 30px 60px rgba(0,0,0,0.5)' }}>
            <div style={{ flex: '1 1 300px', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', opacity: 0.3, filter: 'blur(20px)', borderRadius: '24px' }}></div>
              <Image
                src="/team/hemant_sharma.jpg"
                alt="Hemant Sharma - Founder"
                width={400}
                height={400}
                style={{ width: '100%', height: 'auto', borderRadius: '20px', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <div style={{ flex: '2 1 400px' }}>
              <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', color: '#3B82F6', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.1em' }}>Leadership</h2>
              <h3 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px', lineHeight: 1.1 }}>Hemant Sharma</h3>
              <h4 style={{ fontSize: '1.4rem', color: '#9CA3AF', marginBottom: '30px', fontWeight: 400 }}>Founder & Principal Architect</h4>
              <p style={{ color: '#E5E7EB', fontSize: '1.15rem', lineHeight: 1.7, marginBottom: '24px' }}>
                With a deep specialization in distributed backend engines and applied artificial intelligence, Hemant drives the technical vision of Hevar Quantum. His philosophy centers on aggressively replacing legacy, manual workflows with mathematically sound, automated pipelines.
              </p>
              <p style={{ color: '#9CA3AF', fontSize: '1.05rem', lineHeight: 1.6 }}>
                Under his leadership, Hevar Quantum functions not just as a development agency, but as an advanced engineering partner capable of architecting foundational systems that gracefully handle infinite scale.
              </p>
            </div>
          </div>
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