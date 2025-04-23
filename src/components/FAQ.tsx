import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'reservas', name: 'Reservas' },
    { id: 'servicios', name: 'Servicios' },
    { id: 'instalaciones', name: 'Instalaciones' }
  ];

  const faqs = {
    general: [
      {
        id: 'g1',
        question: '¿Cuál es el horario de check-in y check-out?',
        answer: 'El check-in está disponible a partir de las 14:00h y el check-out debe realizarse antes de las 12:00h. Si necesita horarios diferentes, consúltenos y haremos lo posible por adaptarnos a sus necesidades.'
      },
      {
        id: 'g2',
        question: '¿Se admiten mascotas?',
        answer: 'Sí, admitimos mascotas en habitaciones seleccionadas con un suplemento adicional. Es necesario notificarlo al hacer la reserva.'
      },
      {
        id: 'g3',
        question: '¿Hay parking disponible?',
        answer: 'Sí, disponemos de parking privado gratuito para nuestros huéspedes.'
      }
    ],
    reservas: [
      {
        id: 'r1',
        question: '¿Cómo puedo realizar una reserva?',
        answer: 'Puede realizar su reserva directamente a través de nuestra web, por teléfono o email. Recomendamos la reserva directa para obtener las mejores condiciones.'
      },
      {
        id: 'r2',
        question: '¿Cuál es la política de cancelación?',
        answer: 'Las cancelaciones realizadas con más de 48 horas de antelación no tienen penalización. Para cancelaciones posteriores o no presentación, se cargará la primera noche.'
      },
      {
        id: 'r3',
        question: '¿Se requiere tarjeta de crédito para reservar?',
        answer: 'Sí, necesitamos una tarjeta de crédito válida para garantizar la reserva. No se realizará ningún cargo hasta su llegada.'
      }
    ],
    servicios: [
      {
        id: 's1',
        question: '¿El desayuno está incluido?',
        answer: 'Sí, todas nuestras tarifas incluyen desayuno buffet completo.'
      },
      {
        id: 's2',
        question: '¿Hay servicio de habitaciones?',
        answer: 'Sí, disponemos de servicio de habitaciones 24 horas.'
      },
      {
        id: 's3',
        question: '¿Ofrecen servicio de traslados?',
        answer: 'Sí, podemos organizar traslados desde/hacia el aeropuerto con cargo adicional.'
      }
    ],
    instalaciones: [
      {
        id: 'i1',
        question: '¿La piscina está climatizada?',
        answer: 'Sí, nuestra piscina exterior está climatizada y disponible todo el año.'
      },
      {
        id: 'i2',
        question: '¿Hay gimnasio?',
        answer: 'Sí, contamos con un gimnasio completamente equipado, disponible para nuestros huéspedes de 7:00 a 22:00.'
      },
      {
        id: 'i3',
        question: '¿Hay WiFi gratuito?',
        answer: 'Sí, ofrecemos WiFi gratuito de alta velocidad en todas las instalaciones del hotel.'
      }
    ]
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Preguntas Frecuentes</h2>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs[activeCategory as keyof typeof faqs].map(faq => (
            <div
              key={faq.id}
              className="mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                aria-expanded={openQuestions.includes(faq.id)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openQuestions.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                )}
              </button>
              
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openQuestions.includes(faq.id)
                    ? 'max-h-48 py-4'
                    : 'max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;