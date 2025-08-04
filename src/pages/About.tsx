import React from 'react';
import { Code, Globe, Star, Sparkles, Heart, Users, Zap, Award, BookOpen, Target } from 'lucide-react';
import { personalInfo, skills } from '../data/portfolioData';

const About: React.FC = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    mobile: skills.filter(skill => skill.category === 'mobile'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  const categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    database: 'Base de données',
    tools: 'Outils'
  };

  const categoryIcons = {
    frontend: Globe,
    backend: Code,
    mobile: Sparkles,
    database: Zap,
    tools: Target
  };

  const renderSkillLevel = (level: number) => {
    return (
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            style={{
              width: '1rem',
              height: '1rem',
              color: star <= level ? '#fbbf24' : 'rgba(255, 255, 255, 0.2)',
              fill: star <= level ? '#fbbf24' : 'transparent'
            }}
          />
        ))}
      </div>
    );
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Je m'efforce d'atteindre l'excellence dans chaque projet, en prêtant attention aux détails et en créant des solutions de qualité.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Je reste constamment à jour avec les dernières technologies et tendances pour offrir des solutions innovantes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Je crois en la puissance du travail d'équipe et de la communication efficace pour réussir des projets ambitieux.",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '8rem 0 4rem' }}>
      {/* Background Animation */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'float 10s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          animation: 'float 12s ease-in-out infinite 3s'
        }}></div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '6rem' }} className="animate-fade-in">
          <h1 className="section-title">
            À propos de moi
          </h1>
          <p className="section-subtitle">
            Découvrez mon parcours, mes compétences et ma passion pour le développement
          </p>
        </div>

        {/* Bio Section */}
        <section style={{ marginBottom: '8rem' }} className="animate-slide-up">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', 
            gap: '4rem', 
            alignItems: 'center' 
          }}>
            <div>
              <h2 style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '2rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Mon histoire
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {personalInfo.about.map((paragraph, index) => (
                  <p key={index} style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.8)',
                    lineHeight: 1.7,
                    fontWeight: 300
                  }}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            <div style={{ position: 'relative' }}>
              <div className="card" style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '1px solid rgba(102, 126, 234, 0.2)',
                textAlign: 'center',
                padding: '3rem 2rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.5), transparent)'
                }}></div>
                
                <div style={{
                  width: '5rem',
                  height: '5rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                }}>
                  <Heart style={{ width: '2.5rem', height: '2.5rem', color: 'white' }} />
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
                  Passionnée par l'innovation
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: '1.1rem'
                }}>
                  Je combine créativité et rigueur technique pour créer des solutions exceptionnelles
                </p>
              </div>
              
              {/* Decorative elements */}
              <div style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                width: '2rem',
                height: '2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                opacity: 0.6,
                animation: 'bounceGentle 3s ease-in-out infinite'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '-1rem',
                left: '-1rem',
                width: '1.5rem',
                height: '1.5rem',
                background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                borderRadius: '50%',
                opacity: 0.6,
                animation: 'bounceGentle 3s ease-in-out infinite 1s'
              }}></div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section style={{ marginBottom: '8rem' }} className="animate-slide-up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Compétences techniques
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Maîtrisant un large éventail de technologies modernes
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
              return (
                <div key={category} style={{ animationDelay: `${categoryIndex * 0.2}s` }} className="animate-slide-up">
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    color: 'white',
                    marginBottom: '2rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                    }}>
                      <IconComponent style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                    </div>
                    {categoryNames[category as keyof typeof categoryNames]}
                  </h3>
                  
                  <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                    gap: '1.5rem' 
                  }}>
                    {categorySkills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="card animate-float"
                        style={{ 
                          animationDelay: `${skillIndex * 0.1}s`,
                          padding: '1.5rem'
                        }}
                      >
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center', 
                          marginBottom: '1rem' 
                        }}>
                          <h4 style={{
                            fontWeight: 600,
                            color: 'white',
                            fontSize: '1.1rem'
                          }}>
                            {skill.name}
                          </h4>
                          <span style={{
                            fontSize: '0.875rem',
                            color: 'rgba(255, 255, 255, 0.6)',
                            fontWeight: 500
                          }}>
                            {skill.level}/5
                          </span>
                        </div>
                        {renderSkillLevel(skill.level)}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Languages Section */}
        <section style={{ marginBottom: '8rem' }} className="animate-slide-up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Langues parlées
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Communication fluide dans plusieurs langues
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem' 
          }}>
            {personalInfo.languages.map((language, index) => (
              <div
                key={index}
                className="card animate-float"
                style={{ 
                  textAlign: 'center',
                  padding: '2rem',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 32px rgba(102, 126, 234, 0.3)'
                }}>
                  <Globe style={{ width: '2rem', height: '2rem', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  {language.name}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}>
                  {language.level}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="animate-slide-up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Mes valeurs
            </h2>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Les principes qui guident mon travail
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {values.map((value, index) => (
              <div 
                key={index}
                className="card animate-float"
                style={{ 
                  textAlign: 'center',
                  padding: '2rem',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  background: `linear-gradient(135deg, ${value.color.split(' ')[0]} 0%, ${value.color.split(' ')[1]} 100%)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
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
                  <value.icon style={{ width: '2rem', height: '2rem', color: 'white', zIndex: 1, position: 'relative' }} />
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: 'white',
                  marginBottom: '1rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: 1.6,
                  fontSize: '1rem'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 