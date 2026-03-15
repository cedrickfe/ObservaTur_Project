'use client';
import { useState } from 'react';
import { events } from '@/data/events';
import { Badge, Card, Container, SectionHeader, Select } from '@/components/ui';

export const EventsPage = () => {
  const [type, setType] = useState('Todos');
  const filtered = events.filter((event) => type === 'Todos' || event.type === type);

  return (
    <Container>
      <SectionHeader title="Eventos Turísticos" description="Agenda municipal com monitoramento de eventos em destaque e próximos acontecimentos." />
      <div style={{ maxWidth: 320, marginBottom: 16 }}><Select options={['Todos', 'Cultural', 'Gastronômico', 'Esportivo', 'Religioso', 'Turístico']} value={type} onChange={(e) => setType(e.target.value)} /></div>
      <h3>Eventos em destaque</h3>
      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', marginBottom: 16 }}>
        {filtered.filter((event) => event.highlight).map((event) => (
          <Card key={event.id}><Badge>{event.type}</Badge><h4>{event.name}</h4><p>{event.description}</p></Card>
        ))}
      </section>
      <h3>Próximos eventos</h3>
      <section className="grid">
        {filtered.map((event) => (
          <Card key={event.id}>
            <h4 style={{ marginTop: 0 }}>{event.name}</h4>
            <p style={{ margin: '6px 0' }}><strong>Data:</strong> {new Date(event.date).toLocaleDateString('pt-BR')}</p>
            <p style={{ margin: '6px 0' }}><strong>Local:</strong> {event.location}</p>
            <p style={{ margin: '6px 0' }}><strong>Público estimado:</strong> {event.estimatedPublic.toLocaleString('pt-BR')}</p>
            <p style={{ marginBottom: 0 }}>{event.description}</p>
          </Card>
        ))}
      </section>
    </Container>
  );
};
