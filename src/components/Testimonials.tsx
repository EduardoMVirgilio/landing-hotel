import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Ana Rodríguez',
      location: 'Madrid, España',
      date: 'Agosto 2023',
      text: 'Nuestra estancia en Villa Serena fue increíble. El personal amable y atento, las instalaciones impecables y la ubicación inmejorable. Sin duda, repetiremos en nuestras próximas vacaciones.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Carlos Méndez',
      location: 'Barcelona, España',
      date: 'Julio 2023',
      text: 'Una experiencia de 10. La habitación superior superó nuestras expectativas, con unas vistas impresionantes y todas las comodidades. El desayuno es espectacular, con productos locales de gran calidad.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Marie Dubois',
      location: 'París, Francia',
      date: 'Septiembre 2023',
      text: 'Elegimos Villa Serena para celebrar nuestro aniversario y fue una elección perfecta. El equipo preparó detalles especiales en la habitación y nos recomendaron los mejores lugares para visitar.',
      image: 'https://randomuser.me/api/portraits/women/63.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveIndex(prevIndex => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Testimonios</h2>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-auto overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
              >
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  <p className="text-gray-700 text-lg italic mb-6">"{testimonial.text}"</p>
                  
                  <div>
                    <p className="font-medium text-lg">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location} • {testimonial.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-primary z-10 hover:bg-gray-50 transition-all"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md text-primary z-10 hover:bg-gray-50 transition-all"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${index === activeIndex ? 'bg-primary scale-125' : 'bg-gray-300'}`}
              aria-label={`Ver testimonio ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;