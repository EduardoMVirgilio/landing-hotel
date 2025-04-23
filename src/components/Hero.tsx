import React from 'react';

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const banners = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Bienvenido a Villa Serena',
      subtitle: 'Su paraíso en la costa, donde cada estancia se convierte en un recuerdo inolvidable',
      position: 'center'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Lujo y Confort',
      subtitle: 'Habitaciones diseñadas para ofrecer la máxima comodidad con vistas espectaculares',
      position: 'right'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Experiencias Exclusivas',
      subtitle: 'Descubra nuestros servicios personalizados y atención al detalle',
      position: 'left'
    }
  ];

  return (
    <section id="home" className="pt-0">
      {banners.map((banner, index) => (
        <div 
          key={banner.id}
          className={`relative min-h-[80vh] ${index !== 0 ? 'mt-8' : 'pt-24'}`}
        >
          <div className="absolute inset-0">
            <img 
              src={banner.image} 
              alt={banner.title} 
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
          
          <div className="relative h-full container mx-auto px-4 flex items-center">
            <div 
              className={`max-w-2xl text-white ${
                banner.position === 'center' ? 'mx-auto text-center' :
                banner.position === 'right' ? 'ml-auto text-right' :
                'mr-auto text-left'
              }`}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {banner.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white text-opacity-90">
                {banner.subtitle}
              </p>
              <div className={`flex flex-wrap gap-4 ${
                banner.position === 'center' ? 'justify-center' :
                banner.position === 'right' ? 'justify-end' :
                'justify-start'
              }`}>
                <button 
                  onClick={() => scrollToSection('rooms')} 
                  className="btn bg-accent hover:bg-accent-dark text-white"
                >
                  Explorar Habitaciones
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="btn bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white"
                >
                  Reservar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Hero;