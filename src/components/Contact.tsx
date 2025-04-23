import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2 className="text-white">Contacto</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading mb-6">Información de Contacto</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-full text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Dirección</h4>
                    <p className="text-white text-opacity-80">
                      Avenida del Mar 123<br />
                      29001, Costa del Sol<br />
                      Málaga, España
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-full text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Teléfono</h4>
                    <p className="text-white text-opacity-80">
                      <a href="tel:+34952123456" className="hover:text-accent transition-colors">
                        +34 952 123 456
                      </a><br />
                      <span className="text-sm">(Recepción 24h)</span>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white bg-opacity-10 rounded-full text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-1">Email</h4>
                    <p className="text-white text-opacity-80">
                      <a href="mailto:info@villaserena.com" className="hover:text-accent transition-colors">
                        info@villaserena.com
                      </a><br />
                      <a href="mailto:reservas@villaserena.com" className="hover:text-accent transition-colors">
                        reservas@villaserena.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-heading mb-6">Horarios de Atención</h3>
              
              <div className="bg-white bg-opacity-5 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-accent" />
                  <h4 className="text-xl font-medium">Horarios</h4>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Recepción:</span>
                    <span className="font-medium">24 horas</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Restaurante:</span>
                    <span className="font-medium">7:00 - 23:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Piscina:</span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gimnasio:</span>
                    <span className="font-medium">7:00 - 22:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Spa:</span>
                    <span className="font-medium">10:00 - 20:00</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn bg-accent hover:bg-accent-dark w-full text-center flex items-center justify-center gap-2"
                >
                  <MapPin size={20} />
                  <span>Cómo llegar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;