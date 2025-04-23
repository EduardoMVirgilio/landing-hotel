import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Rooms: React.FC = () => {
  const [activeRoom, setActiveRoom] = useState(0);
  const [roomModalOpen, setRoomModalOpen] = useState(false);
  const [currentRoomModal, setCurrentRoomModal] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const rooms = [
    {
      id: 1,
      name: 'Suite Deluxe',
      description: 'Nuestra suite más exclusiva con vistas panorámicas al mar. Amplio dormitorio, sala de estar independiente y terraza privada.',
      capacity: '2-3 personas',
      size: '45 m²',
      amenities: [
        'Cama king size', 
        'Bañera de hidromasaje', 
        'Terraza privada con vistas al mar', 
        'Minibar premium', 
        'TV Smart 55"',
        'Cafetera Nespresso',
        'Servicio de habitaciones 24h'
      ],
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ]
    },
    {
      id: 2,
      name: 'Habitación Superior',
      description: 'Espaciosa y luminosa habitación con balcón privado y vistas parciales al mar. Diseño moderno y todas las comodidades.',
      capacity: '2 personas',
      size: '30 m²',
      amenities: [
        'Cama queen size', 
        'Ducha de efecto lluvia', 
        'Balcón con vistas', 
        'Minibar', 
        'TV Smart 48"',
        'Cafetera'
      ],
      images: [
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ]
    },
    {
      id: 3,
      name: 'Habitación Familiar',
      description: 'Perfecta para familias, cuenta con dos ambientes separados, ideal para viajes con niños. Máximo confort para toda la familia.',
      capacity: '4 personas',
      size: '40 m²',
      amenities: [
        'Dormitorio principal con cama queen', 
        'Zona de niños con dos camas individuales', 
        'Baño completo', 
        'Área de estar', 
        'TV Smart 48"',
        'Nevera pequeña',
        'Caja fuerte'
      ],
      images: [
        'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg?auto=compress&cs=tinysrgb&w=1600'
      ]
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!roomModalOpen) return;
      
      if (e.key === 'Escape') closeRoomModal();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [roomModalOpen]);

  const openRoomModal = (roomIndex: number) => {
    setCurrentRoomModal(roomIndex);
    setCurrentImageIndex(0);
    setRoomModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeRoomModal = () => {
    setRoomModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === rooms[currentRoomModal].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? rooms[currentRoomModal].images.length - 1 : prev - 1
    );
  };

  return (
    <section id="rooms" className="py-20">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Nuestras Habitaciones</h2>
        </div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                onClick={() => setActiveRoom(index)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeRoom === index 
                    ? 'bg-white shadow-sm text-primary' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative rounded-lg overflow-hidden shadow-lg group">
            <img 
              src={rooms[activeRoom].images[0]} 
              alt={rooms[activeRoom].name} 
              className="w-full h-auto transition duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 text-white">
                <button 
                  onClick={() => openRoomModal(activeRoom)}
                  className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-md transition duration-300"
                >
                  Ver más fotos
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl text-primary mb-4 font-heading">
              {rooms[activeRoom].name}
            </h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                {rooms[activeRoom].capacity}
              </span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                {rooms[activeRoom].size}
              </span>
            </div>
            <p className="text-gray-700 mb-6">{rooms[activeRoom].description}</p>
            
            <div className="mb-6">
              <h4 className="text-lg font-medium mb-3">Amenidades</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {rooms[activeRoom].amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              onClick={() => openRoomModal(activeRoom)}
              className="btn btn-primary w-full md:w-auto"
            >
              Ver Detalles y Reservar
            </button>
          </div>
        </div>
      </div>
      
      {/* Room Modal */}
      {roomModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={closeRoomModal}
        >
          <div 
            className="relative max-w-5xl w-full bg-white rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 id="modal-title" className="text-xl font-bold">
                {rooms[currentRoomModal].name}
              </h3>
              <button 
                onClick={closeRoomModal}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-auto flex-grow">
              <div className="relative h-96 mb-6">
                <img 
                  src={rooms[currentRoomModal].images[currentImageIndex]} 
                  alt={`${rooms[currentRoomModal].name} - Imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white z-10 hover:bg-opacity-70 transition-all"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={30} />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 rounded-full text-white z-10 hover:bg-opacity-70 transition-all"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight size={30} />
                </button>
                
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                  {rooms[currentRoomModal].images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50'
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h4 className="text-lg font-medium mb-3">Descripción</h4>
                  <p className="text-gray-700 mb-6">
                    {rooms[currentRoomModal].description}
                  </p>
                  
                  <h4 className="text-lg font-medium mb-3">Amenidades</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    {rooms[currentRoomModal].amenities.map((amenity, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{amenity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-4">Reserva esta habitación</h4>
                  <p className="text-gray-500 text-sm mb-4">
                    {rooms[currentRoomModal].capacity} • {rooms[currentRoomModal].size}
                  </p>
                  
                  <button className="btn btn-accent w-full mb-4">
                    Consultar Disponibilidad
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Contacte con nosotros para más información
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Rooms;