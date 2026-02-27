import Image from "next/image";
import Navbar from "../../components/Navbar";
import { ShoppingCart, Zap, CheckCircle2, Workflow } from "lucide-react";

export default function EcommerceIntegration() {
    return (
        <div className="page" style={{ padding: 0 }}>
            <Navbar />

            <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 60px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
                    <div className="fadeUp">
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', padding: '6px 12px', borderRadius: '20px', color: '#3B82F6', fontSize: '0.9rem', fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                            <ShoppingCart size={16} /> Services
                        </div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1, background: 'linear-gradient(to right, #F8FAFC, #9CA3AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Ecommerce Integration
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '40px' }}>
                            Build or integrate a complete e-commerce ecosystem tailored to your business needs — from storefront to delivery pipeline.
                        </p>
                    </div>

                    <div className="fadeUp" style={{ animationDelay: '0.2s', position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 0 40px rgba(59, 130, 246, 0.1)' }}>
                        <Image
                            src="/services/ecommerce_integration_header_1772176991818.png"
                            alt="Ecommerce Integration Architecture"
                            width={800}
                            height={450}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617, transparent 40%)' }}></div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
                    <div className="fadeUp" style={{ animationDelay: '0.3s', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
                        <Zap color="#F59E0B" size={32} style={{ marginBottom: '20px' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#F8FAFC' }}>Business Challenges</h2>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9CA3AF' }}>
                            {['Managing orders manually', 'No automated payment collection', 'Delivery partner integration issues', 'Lack of inventory tracking', 'Disconnected customer communication'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', lineHeight: 1.5 }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4B5563', marginTop: '8px', flexShrink: 0 }} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="fadeUp" style={{ animationDelay: '0.4s', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
                        <Workflow color="#3B82F6" size={32} style={{ marginBottom: '20px' }} />
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#F8FAFC' }}>How We Solve This</h2>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>
                            We design and integrate scalable e-commerce platforms with payment gateways, logistics APIs, CRM systems and customer support automation for a fully connected digital commerce experience.
                        </p>
                    </div>
                </div>

                <div className="fadeUp" style={{ animationDelay: '0.5s', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>Architectural Capabilities</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                        {[
                            { title: 'Storefront Optimization', desc: 'Custom Next.js frontends engineered for sub-second load times and high conversion rates.', icon: <CheckCircle2 color="#10B981" size={24} /> },
                            { title: 'Payment Gateways', desc: 'Secure, PCI-compliant integrations with Stripe, Razorpay, PayPal, and crypto providers.', icon: <CheckCircle2 color="#10B981" size={24} /> },
                            { title: 'Logistics Pipelines', desc: 'Direct webhook connections to 3PL partners like Delhivery and Bluedart for real-time tracking payloads.', icon: <CheckCircle2 color="#10B981" size={24} /> },
                            { title: 'Inventory Auth', desc: 'Centralized inventory management spanning multiple warehouse nodes and physical store locations.', icon: <CheckCircle2 color="#10B981" size={24} /> },
                            { title: 'Customer Data Platforms', desc: 'Unified view of customer behavior enabling hyper-personalized marketing funnels.', icon: <CheckCircle2 color="#10B981" size={24} /> },
                            { title: 'Marketplace Sync', desc: 'Bidirectional state synchronization with Amazon, Shopify, and proprietary vendor systems.', icon: <CheckCircle2 color="#10B981" size={24} /> }
                        ].map((feature, i) => (
                            <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', cursor: 'default' }} className="serviceCard">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '10px', borderRadius: '12px', display: 'flex' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ color: '#F8FAFC', fontSize: '1.2rem', fontWeight: 600 }}>{feature.title}</h3>
                                </div>
                                <p style={{ color: '#9CA3AF', lineHeight: 1.5, fontSize: '0.95rem', paddingLeft: '50px' }}>{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="footer" style={{ marginTop: 0 }}>
                <div className="footerBottom">
                    © {new Date().getFullYear()} Hevar Quantum. All rights reserved.
                </div>
            </footer>
        </div>
    );
}