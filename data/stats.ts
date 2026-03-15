import { Stat } from '@/types';

export const overviewStats: Stat[] = [
  { label: 'Atrativos turísticos', value: '148', change: '+12% a/a' },
  { label: 'Meios de hospedagem', value: '62', change: '+5% a/a' },
  { label: 'Restaurantes cadastrados', value: '214', change: '+9% a/a' },
  { label: 'Fluxo estimado de visitantes', value: '95.4 mil', change: '+16% a/a' },
  { label: 'Permanência média', value: '2,8 dias', change: '+0,3 dia' },
  { label: 'Avaliação média de atrativos', value: '4,6/5', change: '+0,2' },
  { label: 'Eventos ativos no mês', value: '18', change: '+4' }
];

export const visitorFlow = [
  { month: 'Jan', value: 6200 },
  { month: 'Fev', value: 7100 },
  { month: 'Mar', value: 8900 },
  { month: 'Abr', value: 9600 },
  { month: 'Mai', value: 8200 },
  { month: 'Jun', value: 10500 }
];

export const seasonality = [
  { period: 'Alta', value: 64 },
  { period: 'Média', value: 24 },
  { period: 'Baixa', value: 12 }
];

export const inventoryDistribution = [
  { name: 'Naturais', value: 24 },
  { name: 'Culturais', value: 20 },
  { name: 'Hospedagem', value: 16 },
  { name: 'Restaurantes', value: 28 },
  { name: 'Outros', value: 12 }
];
