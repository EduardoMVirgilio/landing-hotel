import React from 'react';
import { MapPin, Clock, Train, MapIcon } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Ubicación</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl text-primary mb-6 font-heading">Ubicación Privilegiada</h3>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Villa Serena se ubica en una privilegiada zona costera, a tan solo 100 metros de la playa y a 15 minutos 
              a pie del centro histórico. Nuestro alojamiento ofrece el equilibrio perfecto entre tranquilidad y cercanía 
              a los principales puntos de interés de la zona.
            </p>
            
            <div className="mb-8">
              <h4 className="font-medium text-lg mb-3">Puntos de interés cercanos:</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="text-accent mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-medium block">Playa Las Arenas</span>
                    <span className="text-gray-600 text-sm">100 metros (2 minutos a pie)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-accent mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-medium block">Centro Histórico</span>
                    <span className="text-gray-600 text-sm">1.2 km (15 minutos a pie)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-accent mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-medium block">Puerto Deportivo</span>
                    <span className="text-gray-600 text-sm">800 metros (10 minutos a pie)</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-accent mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-medium block">Zona Comercial</span>
                    <span className="text-gray-600 text-sm">500 metros (7 minutos a pie)</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <span className="font-medium block">Check-in / Check-out</span>
                  <span className="text-gray-600 text-sm">14:00h / 12:00h</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="text-primary">
                  <Train size={24} />
                </div>
                <div>
                  <span className="font-medium block">Estación de tren</span>
                  <span className="text-gray-600 text-sm">3 km (taxi disponible)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Vista aérea de la ubicación de Villa Serena" 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            
            <div className="mt-4 text-center">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
              >
                <MapIcon size={18} />
                <span>Ver en Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;