import Image from "next/image";
import Navbar from "../../components/Navbar";
import { Bot, FileText, BrainCircuit, Sparkles, ArrowRight, Activity } from "lucide-react";

export default function HevarAssistant() {
    return (
        <div className="page" style={{ padding: 0 }}>
            <Navbar />

            {/* HERO SECTION - Centered & Massive */}
            <header style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', paddingTop: '160px', paddingBottom: '60px', textAlign: 'center', paddingLeft: '20px', paddingRight: '20px' }}>
                <div className="fadeUp" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(139, 92, 246, 0.1)', padding: '8px 16px', borderRadius: '30px', color: '#8B5CF6', fontSize: '1rem', fontWeight: 600, marginBottom: '24px', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
                    <Bot size={18} /> Flagship AI Agent
                </div>
                <h1 className="fadeUp" style={{ animationDelay: '0.1s', fontSize: '5rem', fontWeight: 800, marginBottom: '20px', lineHeight: 1.1, background: 'linear-gradient(135deg, #FFFFFF 0%, #8B5CF6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', letterSpacing: '-0.02em' }}>
                    Hevar Assistant.
                </h1>
                <p className="fadeUp" style={{ animationDelay: '0.2s', fontSize: '1.4rem', color: '#9CA3AF', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto 40px auto' }}>
                    An advanced artificial intelligence engineered for deep voice and text interaction. Transform unstructured data arrays into clear, actionable intelligence instantly.
                </p>
                <div className="fadeUp" style={{ animationDelay: '0.3s', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                    <a href="#demo" style={{ background: '#8B5CF6', color: '#fff', padding: '14px 32px', borderRadius: '50px', fontSize: '1.1rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)', transition: '0.3s' }}>
                        Interact Now <ArrowRight size={20} />
                    </a>
                </div>
            </header>

            {/* FULL WIDTH HERO IMAGE (REDUCED SIZE) */}
            <div className="fadeUp" style={{ animationDelay: '0.4s', width: '100%', maxWidth: '1000px', margin: '0 auto 120px auto', padding: '0 20px' }}>
                <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden', border: '1px solid rgba(139, 92, 246, 0.2)', boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 100px rgba(139, 92, 246, 0.15)' }}>
                    <Image
                        src="/products/hevar_assistant_product_header_1772182839817.png"
                        alt="Hevar AI Assistant Core"
                        width={1000}
                        height={562}
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617, transparent 20%)' }}></div>
                </div>
            </div>

            {/* SHOWCASE SECTION - Zig Zag 1 */}
            <div style={{ width: '100%', background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)', padding: '120px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '80px', alignItems: 'center' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '40px', backdropFilter: 'blur(20px)' }}>
                        <div style={{ background: '#0F172A', borderRadius: '16px', padding: '30px', border: '1px solid rgba(139, 92, 246, 0.2)', boxShadow: 'inset 0 0 20px rgba(0,0,0,0.5)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                <span style={{ color: '#9CA3AF' }}>Knowledge Vectors</span>
                                <span style={{ color: '#8B5CF6', fontWeight: 'bold' }}>42M+ indexed</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                <span style={{ color: '#9CA3AF' }}>Avg response latency</span>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>210ms</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#9CA3AF' }}>Format Compatibility</span>
                                <span style={{ color: '#10B981', fontWeight: 'bold' }}>PDF, XLS, PPTX</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div style={{ width: '60px', height: '60px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <BrainCircuit color="#8B5CF6" size={32} />
                        </div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', color: '#F8FAFC' }}>Unparalleled Document QA</h2>
                        <p style={{ fontSize: '1.1rem', color: '#9CA3AF', lineHeight: 1.7, marginBottom: '30px' }}>
                            Feed the assistant raw PDFs, financial Excel models, or internal knowledge bases. It instantly parses contextual meaning, allowing you to interrogate your deepest data silos conversationally.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#E5E7EB' }}>
                            {['Vector similarity search across thousands of pages', 'Mathematical logic resolution for buried metrics', 'Dynamic citation pinpointing'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', fontSize: '1.1rem' }}>
                                    <Sparkles color="#8B5CF6" size={24} /> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* SHOWCASE SECTION - Grid */}
            <div style={{ maxWidth: '1200px', margin: '120px auto', padding: '0 20px' }}>
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '20px' }}>Generative Intelligence</h2>
                    <p style={{ fontSize: '1.2rem', color: '#9CA3AF', maxWidth: '600px', margin: '0 auto' }}>Beyond strict retrieval, Hevar Assistant synthesizes new constructs on the fly.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '50px', transition: 'transform 0.3s', cursor: 'default' }} className="serviceCard">
                        <FileText color="#06B6D4" size={40} style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '16px' }}>Dynamic Document Generation</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.1rem' }}>Request the AI to synthesize multiple disparate sources into a brand new, highly formatted PDF or presentation covering exactly what you specify.</p>
                    </div>
                    <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '24px', padding: '50px', transition: 'transform 0.3s', cursor: 'default' }} className="serviceCard">
                        <Activity color="#8B5CF6" size={40} style={{ marginBottom: '24px' }} />
                        <h3 style={{ fontSize: '1.8rem', color: '#F8FAFC', marginBottom: '16px' }}>Continuous Learning Loop</h3>
                        <p style={{ color: '#9CA3AF', lineHeight: 1.6, fontSize: '1.1rem' }}>The agent actively learns from your company&apos;s nomenclature and preferred formatting standards over time, getting sharper every week.</p>
                    </div>
                </div>
            </div>

            {/* CALL TO ACTION */}
            <div style={{ width: '100%', background: 'linear-gradient(135deg, #4C1D95 0%, #0F172A 100%)', padding: '100px 20px', textAlign: 'center', borderTop: '1px solid #8B5CF6', borderBottom: '1px solid #8B5CF6' }}>
                <h2 style={{ fontSize: '3rem', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px' }}>Unlock the hidden value in your data.</h2>
                <p style={{ fontSize: '1.2rem', color: '#C4B5FD', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>Schedule an AI maturity assessment and witness Hevar Assistant parse your company&apos;s documentation live.</p>
                <a href="mailto:contact@hevarquantum.com" style={{ display: 'inline-block', background: '#FFFFFF', color: '#4C1D95', padding: '16px 40px', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 700, textDecoration: 'none', transition: '0.3s', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                    Assess Context Integration
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
