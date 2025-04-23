import React from 'react';
import { Coffee, Wifi, Utensils, Car, School as Pool, DumbbellIcon, Waves, Sunrise } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      id: 1,
      name: 'Desayuno Incluido',
      description: 'Buffet con productos locales frescos y opciones para todos los gustos',
      icon: <Coffee className="h-8 w-8" />
    },
    {
      id: 2,
      name: 'Wi-Fi Gratuito',
      description: 'Conexión de alta velocidad en todas las habitaciones y áreas comunes',
      icon: <Wifi className="h-8 w-8" />
    },
    {
      id: 3,
      name: 'Restaurante',
      description: 'Cocina mediterránea con ingredientes locales de temporada',
      icon: <Utensils className="h-8 w-8" />
    },
    {
      id: 4,
      name: 'Parking Gratuito',
      description: 'Aparcamiento privado para huéspedes durante su estancia',
      icon: <Car className="h-8 w-8" />
    },
    {
      id: 5,
      name: 'Piscina Exterior',
      description: 'Piscina panorámica con vistas al mar y servicio de toallas',
      icon: <Pool className="h-8 w-8" />
    },
    {
      id: 6,
      name: 'Gimnasio',
      description: 'Moderno gimnasio equipado con máquinas de última generación',
      icon: <DumbbellIcon className="h-8 w-8" />
    },
    {
      id: 7,
      name: 'Acceso Playa',
      description: 'Acceso directo a la playa con servicio de hamacas para huéspedes',
      icon: <Waves className="h-8 w-8" />
    },
    {
      id: 8,
      name: 'Terraza Solarium',
      description: 'Amplia terraza con zona chill-out y vistas panorámicas',
      icon: <Sunrise className="h-8 w-8" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center bg-primary text-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{service.name}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;