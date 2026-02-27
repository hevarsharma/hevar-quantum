import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Package, ShieldCheck, Users, BarChart3, ArrowRight, Zap } from "lucide-react";

export default function LogiHub() {
    return (
        <div className="page" style={{ padding: 0 }}>
            <Navbar />

            {/* HERO SECTION - Centered & Massive */}
            <header style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="fadeUp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(59, 130, 246, 0.1)', padding: '8px 16px', borderRadius: '30px', color: '#3B82F6', fontSize: '1rem', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
                    <Package size={18} /> Flagship Product
                </div>
                <h1 className="fadeUp" style={{ animationDelay: '0.1s', fontSize: '5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1, background: 'linear-gradient(135deg, #FFFFFF 0%, #3B82F6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                    LogiHub.
                </h1>
                <p className="fadeUp" style={{ animationDelay: '0.2s', fontSize: '1.4rem', color: '#9CA3AF', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 40px auto' }}>
                    The ultimate e-commerce SaaS mediator. We seamlessly connect vendors to delivery channels, automating the logistics pipeline with unprecedented scale and clarity.
                </p>
                <div className="fadeUp" style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a href="#demo" style={{ background: '#3B82F6', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)', transition: '0.3s' }}>
                        Request Access <ArrowRight size={20} />
                    </a>
                </div>
            </header>

            {/* FULL WIDTH HERO IMAGE (REDUCED SIZE) */}
            <div className="fadeUp" style={{ animationDelay: '0.4s', width: '100%', maxWidth: '1000px', margin: '0 auto 120px auto', padding: '0 20px' }}>
                <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(59, 130, 246, 0.2)', boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(59, 130, 246, 0.15)' }}>
                    <Image
                        src="/products/logihub_product_header_1772182824275.png"
                        alt="LogiHub Logistics Dashboard"
                        width={1000}
                        height={562}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617, transparent 20%)' }}></div>
                </div>
            </div>

            {/* SHOWCASE SECTION - Zig Zag 1 */}
            <div style={{ width: '100%', background: 'linear-gradient(to bottom, transparent, rgba(59, 130, 246, 0.05), transparent)', padding: '120px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Users color="#3B82F6" size={32} />
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', color: '#F8FAFC' }}>Designed For Franchises & Vendors</h2>
                        <p style={{ fontSize: '1.1rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '30px' }}>
                            A unified dashboard built not just for direct e-commerce tracking, but engineered for franchise holders of delivery channels. Grant vendors granular access while maintaining administrative oversight over all logistics pipelines.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#E5E7EB' }}>
                            {['Massive reduction in required manual manpower', 'Intelligent automated dispatch rules', 'Granular control over vendor permissions'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.1rem' }}>
                                    <ShieldCheck color="#3B82F6" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px', backdropFilter: 'blur(20px)' }}>
                        <div style={{ background: '#0F172A', borderRadius: '16px', padding: '30px', border: '1px solid rgba(59, 130, 246, 0.2)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                <span style={{ color: '#9CA3AF' }}>Active Vendors</span>
                                <span style={{ color: '#3B82F6', fontWeight: 'bold' }}>+1,240</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                <span style={{ color: '#9CA3AF' }}>Parcels Routed/hr</span>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>45,000</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#9CA3AF' }}>System Status</span>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>Operational</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SHOWCASE SECTION - Grid */}
            <div style={{ maxWidth: '1200px', margin: '120px auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '20px' }}>End-to-End Visibility</h2>
                    <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '600px', margin: '0 auto' }}>Monitor every aspect of the supply chain through our high-performance UI components natively bridging vendors to delivery.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '50px', transition: 'transform 0.3s', cursor: 'default' }} className="serviceCard">
                        <BarChart3 color="#3B82F6" size={40} style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '16px' }}>Financials & Sales</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.1rem' }}>Instant tracking and reconciliation of sales data, invoice generation, and pending financial settlements across the entire franchise ecosystem.</p>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '50px', transition: 'transform 0.3s', cursor: 'default' }} className="serviceCard">
                        <Zap color="#8B5CF6" size={40} style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '16px' }}>Real-time Shipping</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.1rem' }}>Live webhook integrations with Delhivery, DTDC, and Bluedart providing millisecond-accurate tracking state payloads to your vendors.</p>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div style={{ width: '100%', background: 'linear-gradient(135deg, #1E3A8A 0%, #0F172A 100%)', padding: '100px 20px', textAlign: 'center', borderTop: '1px solid #3B82F6', borderBottom: '1px solid #3B82F6' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>Ready to Scale Your Logistics?</h2>
                <p style={{ fontSize: '1.2rem', color: '#93C5FD', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>Contact our engineering team to schedule a technical deep-dive and access a live instance of LogiHub.</p>
                <a href="mailto:contact@hevarquantum.com" style={{ display: 'inline-block', background: '#FFFFFF', color: '#1E3A8A', padding: '16px 40px', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', transition: '0.3s', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                    Contact Engineering
                </a>
            </div>

            <footer className="footer" style={{ marginTop: 0 }}>
                <div className="footerBottom">
                    © {new Date().getFullYear()} Hevar Quantum. All rights reserved.
                </div>
            </footer>
        </div>
    );
}
