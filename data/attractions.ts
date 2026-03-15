import { Attraction } from '@/types';

export const attractions: Attraction[] = [
  { id: '1', name: 'Parque das Águas Claras', category: 'Atrativo natural', location: 'Zona Norte', accessibility: 'Rampa e piso tátil', infrastructure: ['Banheiros', 'Sinalização', 'Estacionamento'], rating: 4.8, visits: 9200, coords: { x: 28, y: 34 } },
  { id: '2', name: 'Centro Histórico Municipal', category: 'Patrimônio histórico', location: 'Centro', accessibility: 'Acesso assistido', infrastructure: ['Guia local', 'Audioguia'], rating: 4.6, visits: 8700, coords: { x: 52, y: 46 } },
  { id: '3', name: 'Museu da Cultura Popular', category: 'Atrativo cultural', location: 'Bairro Cultural', accessibility: 'Elevador', infrastructure: ['Cafeteria', 'Loja', 'Banheiros'], rating: 4.7, visits: 7900, coords: { x: 61, y: 24 } },
  { id: '4', name: 'Hotel Vista Serra', category: 'Meio de hospedagem', location: 'Serra Azul', accessibility: 'Quartos adaptados', infrastructure: ['Wi-Fi', 'Restaurante', 'Piscina'], rating: 4.5, visits: 4600, coords: { x: 74, y: 29 } },
  { id: '5', name: 'Mercado Gastronômico Central', category: 'Restaurante', location: 'Centro', accessibility: 'Acessível', infrastructure: ['Praça de alimentação', 'Wi-Fi'], rating: 4.4, visits: 10300, coords: { x: 46, y: 61 } },
  { id: '6', name: 'Terminal Turístico Intermodal', category: 'Equipamento turístico', location: 'Avenida Principal', accessibility: 'Completa', infrastructure: ['Informações turísticas', 'Bilheteria'], rating: 4.2, visits: 6200, coords: { x: 35, y: 72 } },
  { id: '7', name: 'Agência Roteiros do Vale', category: 'Agência', location: 'Centro', accessibility: 'Atendimento híbrido', infrastructure: ['Aplicativo', 'Guias bilíngues'], rating: 4.3, visits: 3200, coords: { x: 58, y: 67 } },
  { id: '8', name: 'Festival de Inverno', category: 'Evento', location: 'Praça da Cultura', accessibility: 'Área acessível', infrastructure: ['Palco', 'Segurança', 'Alimentação'], rating: 4.9, visits: 12100, coords: { x: 69, y: 51 } }
];
