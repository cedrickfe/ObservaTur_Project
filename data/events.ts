import { TourEvent } from '@/types';

export const events: TourEvent[] = [
  { id: 'e1', name: 'Semana da Cultura Regional', type: 'Cultural', date: '2026-04-05', location: 'Teatro Municipal', estimatedPublic: 1800, description: 'Apresentações artísticas e oficinas locais.', highlight: true },
  { id: 'e2', name: 'Festival Sabores da Cidade', type: 'Gastronômico', date: '2026-04-10', location: 'Mercado Central', estimatedPublic: 3200, description: 'Circuito de chefs e produtores locais.', highlight: true },
  { id: 'e3', name: 'Maratona Rota das Serras', type: 'Esportivo', date: '2026-04-14', location: 'Largo da Serra', estimatedPublic: 2500, description: 'Prova esportiva com percurso turístico.' },
  { id: 'e4', name: 'Romaria de São Miguel', type: 'Religioso', date: '2026-04-21', location: 'Santuário Municipal', estimatedPublic: 4100, description: 'Evento tradicional com peregrinação guiada.' },
  { id: 'e5', name: 'Feira Nacional de Turismo Local', type: 'Turístico', date: '2026-04-27', location: 'Centro de Convenções', estimatedPublic: 3700, description: 'Negócios, destinos e inovação para o trade.' }
];
