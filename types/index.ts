export type InventoryCategory =
  | 'Atrativo natural'
  | 'Atrativo cultural'
  | 'Patrimônio histórico'
  | 'Meio de hospedagem'
  | 'Restaurante'
  | 'Agência'
  | 'Evento'
  | 'Equipamento turístico';

export interface Attraction {
  id: string;
  name: string;
  category: InventoryCategory;
  location: string;
  accessibility: string;
  infrastructure: string[];
  rating: number;
  visits: number;
  coords: { x: number; y: number };
}

export type EventType = 'Cultural' | 'Gastronômico' | 'Esportivo' | 'Religioso' | 'Turístico';

export interface TourEvent {
  id: string;
  name: string;
  type: EventType;
  date: string;
  location: string;
  estimatedPublic: number;
  description: string;
  highlight?: boolean;
}

export interface Stat {
  label: string;
  value: string;
  change: string;
}
