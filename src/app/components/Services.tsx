"use client";

import Link from "next/link";
import { ShoppingCart, Bot, ServerCog, Network, MessageSquare, Cloud, DatabaseZap, Share2 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Ecommerce Integration",
      desc: "Build or integrate a complete e-commerce ecosystem tailored to your business needs — from storefront to delivery pipeline.",
      link: "/services/ecommerce-integration",
      icon: <ShoppingCart size={32} color="#3B82F6" strokeWidth={1.5} />,
      iconBg: "rgba(59, 130, 246, 0.1)"
    },
    {
      title: "AI Agents Development",
      desc: "Custom AI agents that can listen, read, understand and take business decisions based on real-time inputs.",
      link: "/services/ai-agents",
      icon: <Bot size={32} color="#8B5CF6" strokeWidth={1.5} />,
      iconBg: "rgba(139, 92, 246, 0.1)"
    },
    {
      title: "Backend Engine Creation",
      desc: "Design and deployment of scalable backend engines to power your digital ecosystem.",
      link: "/services/backend-engine",
      icon: <ServerCog size={32} color="#06B6D4" strokeWidth={1.5} />,
      iconBg: "rgba(6, 182, 212, 0.1)"
    },
    {
      title: "Space Networking",
      desc: "A collaborative digital environment to co-build, experiment and innovate on emerging technologies.",
      link: "/services/space-networking",
      icon: <Network size={32} color="#10B981" strokeWidth={1.5} />,
      iconBg: "rgba(16, 185, 129, 0.1)"
    },
    {
      title: "Chatbot Development",
      desc: "Chat and voice bot development using Azure, AWS or custom backend architecture.",
      link: "/services/chatbot-development",
      icon: <MessageSquare size={32} color="#F59E0B" strokeWidth={1.5} />,
      iconBg: "rgba(245, 158, 11, 0.1)"
    },
    {
      title: "Deployment",
      desc: "End-to-end infrastructure deployment across cloud or on-prem environments with high availability.",
      link: "/services/deployment",
      icon: <Cloud size={32} color="#3B82F6" strokeWidth={1.5} />,
      iconBg: "rgba(59, 130, 246, 0.1)"
    },
    {
      title: "Secure Data Extraction",
      desc: "Automated and secure extraction of publicly available web data for market intelligence.",
      link: "/services/scraping",
      icon: <DatabaseZap size={32} color="#8B5CF6" strokeWidth={1.5} />,
      iconBg: "rgba(139, 92, 246, 0.1)"
    },
    {
      title: "Social Network Integration",
      desc: "Integrate communication platforms like WhatsApp, Instagram, SMS and more.",
      link: "/services/social-integration",
      icon: <Share2 size={32} color="#EC4899" strokeWidth={1.5} />,
      iconBg: "rgba(236, 72, 153, 0.1)"
    },
  ];

  return (
    <section id="services" className="services fadeUp" style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
      <h2 className="sectionTitle" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '20px', background: 'linear-gradient(to right, #3B82F6, #8B5CF6, #06B6D4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center' }}>
        Our Services
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#9CA3AF', marginBottom: '60px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', textAlign: 'center', lineHeight: '1.6' }}>
        We provide scalable technology solutions to build, automate and deploy your business ecosystem.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {services.map((service, index) => (
          <Link key={index} href={service.link} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '20px', padding: '40px', backdropFilter: 'blur(10px)' }}>
              <div style={{ background: service.iconBg, padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#F8FAFC', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: '#9CA3AF', lineHeight: '1.6', fontSize: '1rem' }}>{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}