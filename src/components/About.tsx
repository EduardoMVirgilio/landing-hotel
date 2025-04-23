import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Sobre Nosotros</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Fachada de Villa Serena al atardecer" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl text-primary mb-4 font-heading">Nuestra Historia</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              En el corazón de la costa mediterránea, Villa Serena nace en 2010 con la misión de ofrecer una experiencia de alojamiento excepcional. 
              Lo que comenzó como un pequeño establecimiento familiar, hoy se ha convertido en un referente de hospitalidad en la región.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Cada rincón de Villa Serena ha sido diseñado con mimo y dedicación para transmitir la esencia del Mediterráneo: 
              luz, calidez y una conexión única con el entorno natural que nos rodea.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestro equipo, formado por profesionales apasionados por el turismo y la atención al cliente, 
              trabaja cada día para asegurar que su estancia sea perfecta, cuidando hasta el último detalle para que usted 
              solo tenga que preocuparse de disfrutar.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-medium">13 años de experiencia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <span className="font-medium">Equipo profesional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;