import Image from "next/image";
import Navbar from "../../components/Navbar";
import { MessageSquare, Zap, CheckCircle2, Workflow } from "lucide-react";

export default function ChatbotDevelopment() {
  return (
    <div className="page" style={{ padding: 0 }}>
      <Navbar />

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '120px 20px 60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '60px', alignItems: 'center', marginBottom: '80px' }}>
          <div className="fadeUp">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(245, 158, 11, 0.1)', padding: '6px 12px', borderRadius: '20px', color: '#F59E0B', fontSize: '0.9rem', fontWeight: 600, marginBottom: '20px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <MessageSquare size={16} /> Services
            </div>
            <h1 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1, background: 'linear-gradient(to right, #F8FAFC, #9CA3AF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Chatbot Development
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#9CA3AF', lineHeight: 1.6, marginBottom: '40px' }}>
              Next-generation chat and voice bot development utilizing large language models and highly optimized semantic decision trees.
            </p>
          </div>

          <div className="fadeUp" style={{ animationDelay: '0.2s', position: 'relative', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.08)', boxShadow: '0 0 40px rgba(245, 158, 11, 0.1)' }}>
            <Image
              src="/services/chatbot_development_header_1772177111670.png"
              alt="Chatbot Semantic Tree"
              width={800}
              height={450}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617, transparent 40%)' }}></div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' }}>
          <div className="fadeUp" style={{ animationDelay: '0.3s', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
            <Zap color="#EC4899" size={32} style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#F8FAFC' }}>Interaction Challenges</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: '#9CA3AF' }}>
              {['Poor contextual understanding', 'Inability to scale customer support', 'Frustrating, rigid decision trees', 'Lack of integration with internal APIs', 'Language and localization barriers'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '12px', lineHeight: 1.5 }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4B5563', marginTop: '8px', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="fadeUp" style={{ animationDelay: '0.4s', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
            <Workflow color="#F59E0B" size={32} style={{ marginBottom: '20px' }} />
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: '#F8FAFC' }}>How We Solve This</h2>
            <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>
              We engineer dynamic conversational interfaces using advanced NLP models. Our bots do more than talk—they securely trigger internal state changes, look up knowledge bases, and resolve complex queries autonomously.
            </p>
          </div>
        </div>

        <div className="fadeUp" style={{ animationDelay: '0.5s', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '40px', textAlign: 'center' }}>Architectural Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Foundational NLP', desc: 'Deep natural language understanding enabling contextual replies far beyond simple keyword recognition.', icon: <CheckCircle2 color="#F59E0B" size={24} /> },
              { title: 'Dynamic State Engines', desc: 'Bots capable of maintaining long-term session context and parsing multi-turn conversations.', icon: <CheckCircle2 color="#F59E0B" size={24} /> },
              { title: 'Multi-lingual Models', desc: 'Native translation layers supporting immediate query resolution in over 50+ regional languages.', icon: <CheckCircle2 color="#F59E0B" size={24} /> },
              { title: 'Voice & Speech', desc: 'Integration with leading STT and TTS models for fluid telephonic or app-based voice interactions.', icon: <CheckCircle2 color="#F59E0B" size={24} /> },
              { title: 'Secure API Execution', desc: 'Authenticated triggers allowing bots to check account balances, issue refunds, or book appointments.', icon: <CheckCircle2 color="#F59E0B" size={24} /> },
              { title: 'RAG Architectures', desc: 'Retrieval Augmented Generation pipelines querying your own proprietary internal documentation.', icon: <CheckCircle2 color="#F59E0B" size={24} /> }
            ].map((feature, i) => (
              <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', transition: 'all 0.3s ease', cursor: 'default' }} className="serviceCard">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                  <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '10px', borderRadius: '12px', display: 'flex' }}>
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