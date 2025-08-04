import React from 'react';
import { Link } from 'react-router-dom';
import { Download, FolderOpen, Mail, ArrowRight, Code, Smartphone, Database, Sparkles, Star, Zap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Home: React.FC = () => {
  const handleDownloadCV = () => {
    // Simuler le téléchargement du CV
    const link = document.createElement('a');
    link.href = '/cv-naziha-jerou.pdf'; // À remplacer par le vrai fichier
    link.download = 'CV-Naziha-Jerou.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const features = [
    {
      icon: Code,
      title: "Développement Web",
      description: "Applications React modernes et performantes avec les dernières technologies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Applications Mobiles",
      description: "Solutions Flutter cross-platform pour iOS et Android",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Backend & IA",
      description: "APIs robustes et intégration d'intelligence artificielle",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Animation */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '15%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)',
            animation: 'float 10s ease-in-out infinite 2s'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '15%',
            left: '50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            animation: 'float 12s ease-in-out infinite 4s'
          }}></div>
        </div>

        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          maxWidth: '1200px', 
          margin: '0 auto', 
          padding: '0 2rem',
          textAlign: 'center'
        }}>
          {/* Greeting */}
          <div className="animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <Sparkles style={{ width: '1.5rem', height: '1.5rem', color: '#fbbf24' }} />
                <span style={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500, fontSize: '1rem' }}>
                  👋 Bonjour, je suis
                </span>
              </div>
            </div>
            
            {/* Name */}
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              fontWeight: 800,
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 25%, #c7d2fe 50%, #a5b4fc 75%, #818cf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}>
              {personalInfo.name}
            </h1>
            
            {/* Title */}
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3vw, 2rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.4,
              fontWeight: 400
            }}>
              {personalInfo.title}
            </h2>
            
            {/* Description */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              color: 'rgba(255, 255, 255, 0.8)',
              marginBottom: '4rem',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              Développeuse web passionnée par l'innovation et l'excellence technique. 
              Je crée des expériences numériques exceptionnelles qui allient créativité et performance.
            </p>
          </div>

          {/* CTA Buttons */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '1.5rem', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: '5rem'
          }} className="animate-slide-up">
            <button
              onClick={handleDownloadCV}
              className="btn-primary animate-glow"
            >
              <Download style={{ width: '1.5rem', height: '1.5rem' }} />
              <span>Télécharger mon CV</span>
            </button>
            
            <Link to="/projects" className="btn-secondary">
              <FolderOpen style={{ width: '1.5rem', height: '1.5rem' }} />
              <span>Voir mes projets</span>
              <ArrowRight style={{ width: '1.25rem', height: '1.25rem' }} />
            </Link>
          </div>

          {/* Contact Button */}
          <div className="animate-slide-up">
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                padding: '1rem 2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                borderRadius: '50px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div style={{
                width: '3rem',
                height: '3rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
              }}>
                <Mail style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              <span>Me contacter</span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{
            width: '2rem',
            height: '3rem',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '9999px',
            display: 'flex',
            justifyContent: 'center',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '0.25rem',
              height: '0.75rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '9999px',
              marginTop: '0.5rem',
              animation: 'pulse 2s infinite'
            }}></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '8rem 0', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
            <h2 className="section-title">
              Mes domaines d'expertise
            </h2>
            <p className="section-subtitle">
              Spécialisée dans le développement web moderne et les technologies innovantes
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '3rem' 
          }}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="card animate-float"
                style={{ 
                  textAlign: 'center',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div style={{
                  width: '6rem',
                  height: '6rem',
                  background: `linear-gradient(135deg, ${feature.color.split(' ')[0]} 0%, ${feature.color.split(' ')[1]} 100%)`,
                  borderRadius: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)',
                    animation: 'glow 3s ease-in-out infinite'
                  }}></div>
                  <feature.icon style={{ width: '3rem', height: '3rem', color: 'white', zIndex: 1, position: 'relative' }} />
                </div>
                <h3 style={{ 
                  fontSize: '1.75rem', 
                  fontWeight: 700, 
                  color: 'white', 
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section style={{ padding: '6rem 0', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            textAlign: 'center'
          }}>
            <div className="card animate-float" style={{ animationDelay: '0s' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}>
                6+
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500, fontSize: '1.1rem' }}>
                Projets Réalisés
              </div>
            </div>
            <div className="card animate-float" style={{ animationDelay: '0.2s' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}>
                3+
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500, fontSize: '1.1rem' }}>
                Années d'Expérience
              </div>
            </div>
            <div className="card animate-float" style={{ animationDelay: '0.4s' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}>
                15+
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500, fontSize: '1.1rem' }}>
                Technologies Maîtrisées
              </div>
            </div>
            <div className="card animate-float" style={{ animationDelay: '0.6s' }}>
              <div style={{
                fontSize: '3.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                textShadow: '0 0 30px rgba(102, 126, 234, 0.5)'
              }}>
                100%
              </div>
              <div style={{ color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500, fontSize: '1.1rem' }}>
                Satisfaction Client
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 