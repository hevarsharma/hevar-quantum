import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Database, RefreshCcw, Cloud, Cpu, ArrowRight, Share2 } from "lucide-react";

export default function MSVisa() {
    return (
        <div className="page" style={{ padding: 0 }}>
            <Navbar />

            {/* HERO SECTION - Centered & Massive */}
            <header style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="fadeUp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(6, 182, 212, 0.1)', padding: '8px 16px', borderRadius: '30px', color: '#06B6D4', fontSize: '1rem', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
                    <Database size={18} /> Enterprise Data Tooling
                </div>
                <h1 className="fadeUp" style={{ animationDelay: '0.1s', fontSize: '5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1, background: 'linear-gradient(135deg, #FFFFFF 0%, #06B6D4 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                    MS Visa.
                </h1>
                <p className="fadeUp" style={{ animationDelay: '0.2s', fontSize: '1.4rem', color: '#9CA3AF', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 40px auto' }}>
                    An intelligent SaaS engine built for zero-downtime enterprise data conversion. We utilize leading large language models to automate complex, conversational schema migrations directly on Azure.
                </p>
                <div className="fadeUp" style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a href="#demo" style={{ background: '#06B6D4', color: '#020617', padding: '14px 32px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)', transition: '0.3s' }}>
                        Start Migration <ArrowRight size={20} />
                    </a>
                </div>
            </header>

            {/* FULL WIDTH HERO IMAGE (REDUCED SIZE) */}
            <div className="fadeUp" style={{ animationDelay: '0.4s', width: '100%', maxWidth: '1000px', margin: '0 auto 120px auto', padding: '0 20px' }}>
                <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(6, 182, 212, 0.2)', boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(6, 182, 212, 0.15)' }}>
                    <Image
                        src="/products/ms_visa_product_header_1772182853452.png"
                        alt="MS Visa Data Migration Interface"
                        width={1000}
                        height={562}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617, transparent 20%)' }}></div>
                </div>
            </div>

            {/* SHOWCASE SECTION - Zig Zag 1 */}
            <div style={{ width: '100%', background: 'linear-gradient(to bottom, transparent, rgba(6, 182, 212, 0.05), transparent)', padding: '120px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <RefreshCcw color="#06B6D4" size={32} />
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', color: '#F8FAFC' }}>Conversational Migrations</h2>
                        <p style={{ fontSize: '1.1rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '30px' }}>
                            Say goodbye to writing massive conversion scripts. Our Smart Chatbot interface asks you what your source layer is, and computes the destination bindings automatically based on your instructions.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#E5E7EB' }}>
                            {['Cross-language parsing (e.g. SAP ABAP to SQL, PLSQL to SQL)', 'Real-time schema mapping validation', 'Automated anomaly detection in the pipeline'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.1rem' }}>
                                    <Cloud color="#06B6D4" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px', backdropFilter: 'blur(20px)' }}>
                        <div style={{ background: '#0F172A', borderRadius: '16px', padding: '30px', border: '1px solid rgba(6, 182, 212, 0.2)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                <span style={{ color: '#9CA3AF' }}>Transform Speed</span>
                                <span style={{ color: '#06B6D4', fontWeight: 'bold' }}>50GB / min</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                <span style={{ color: '#9CA3AF' }}>Databricks Compute Nodes</span>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>Auto-scaling</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#9CA3AF' }}>Schema Precision</span>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>99.99%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* SHOWCASE SECTION - Grid */}
            <div style={{ maxWidth: '1200px', margin: '120px auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '20px' }}>Engineered on Azure</h2>
                    <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '600px', margin: '0 auto' }}>Natively leveraging Microsoft logic with Databricks orchestration for unparalleled processing power.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '50px', transition: 'transform 0.3s', cursor: 'default' }} className="serviceCard">
                        <Cpu color="#3B82F6" size={40} style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '16px' }}>Llama & Mixtral Core</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.1rem' }}>We employ leading LLMs hosted within Databricks to accurately interpret complex, idiosyncratic stored procedures uniquely tailored by your legacy systems.</p>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '50px', transition: 'transform 0.3s', cursor: 'default' }} className="serviceCard">
                        <Share2 color="#06B6D4" size={40} style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '16px' }}>Azure Cosmos DB Layer</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.1rem' }}>Post-transformation integrity is actively buffered across globally distributed, high-throughput Azure Cosmos connections ensuring zero data loss.</p>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div style={{ width: '100%', background: 'linear-gradient(135deg, #0891B2 0%, #0F172A 100%)', padding: '100px 20px', textAlign: 'center', borderTop: '1px solid #06B6D4', borderBottom: '1px solid #06B6D4' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>Ready to Modernize Your Data Layer?</h2>
                <p style={{ fontSize: '1.2rem', color: '#A5F3FC', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>Don&apos;t let legacy frameworks throttle your analytical potential. Connect with our architects today.</p>
                <a href="mailto:contact@hevarquantum.com" style={{ display: 'inline-block', background: '#FFFFFF', color: '#0891B2', padding: '16px 40px', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', transition: '0.3s', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                    Analyze Database Constraints
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
