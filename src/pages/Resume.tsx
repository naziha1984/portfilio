import React from 'react';
import { Download, Calendar, MapPin, Building, GraduationCap, Briefcase } from 'lucide-react';
import { personalInfo, experiences, education, skills } from '../data/portfolioData';

const Resume: React.FC = () => {
  const handleDownloadCV = () => {
    // Simuler le téléchargement du CV
    const link = document.createElement('a');
    link.href = '/cv-naziha-jerou.pdf'; // À remplacer par le vrai fichier
    link.download = 'CV-Naziha-Jerou.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    mobile: skills.filter(skill => skill.category === 'mobile'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools')
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-title">
            Mon CV
          </h1>
          <p className="section-subtitle">
            Mon parcours professionnel et mes compétences
          </p>
          
          {/* Download Button */}
          <div className="mt-8">
            <button
              onClick={handleDownloadCV}
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Télécharger mon CV (PDF)</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info & Skills */}
          <div className="lg:col-span-1 space-y-8">
            {/* Personal Information */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Building className="w-6 h-6 mr-2 text-primary-600 dark:text-primary-400" />
                Informations personnelles
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Nom complet</h3>
                  <p className="text-gray-600 dark:text-gray-300">{personalInfo.name}</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Localisation</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {personalInfo.location}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">Langues</h3>
                  <div className="space-y-1">
                    {personalInfo.languages.map((language, index) => (
                      <p key={index} className="text-gray-600 dark:text-gray-300">
                        {language.name} - {language.level}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Compétences techniques
              </h2>
              
              <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, categorySkills]) => (
                  <div key={category}>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3 capitalize">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {categorySkills.map((skill) => (
                        <span
                          key={skill.name}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Briefcase className="w-8 h-8 mr-3 text-primary-600 dark:text-primary-400" />
                Expérience professionnelle
              </h2>
              
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <div key={experience.id} className="relative">
                    {/* Timeline line */}
                    {index < experiences.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      {/* Timeline dot */}
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="card p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {experience.period}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                          {experience.company}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {experience.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-3 text-primary-600 dark:text-primary-400" />
                Formation
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative">
                    {/* Timeline line */}
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
                    )}
                    
                    <div className="flex items-start space-x-4">
                      {/* Timeline dot */}
                      <div className="w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      
                      {/* Content */}
                      <div className="card p-6 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        
                        <h4 className="text-lg font-semibold text-accent-600 dark:text-accent-400 mb-3">
                          {edu.institution}
                        </h4>
                        
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Prêt à collaborer ?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Mon CV vous a convaincu ? Je serais ravie de discuter d'opportunités de collaboration 
              ou de répondre à vos questions.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Me contacter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume; 