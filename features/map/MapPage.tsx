'use client';
import { useState } from 'react';
import { attractions } from '@/data/attractions';
import { inventoryCategories } from '@/data/categories';
import { Card, Container, SectionHeader, Select } from '@/components/ui';

export const MapPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedPoint, setSelectedPoint] = useState(attractions[0]);
  const points = attractions.filter((a) => selectedCategory === 'Todas' || a.category === selectedCategory);

  return (
    <Container>
      <SectionHeader title="Mapa Turístico" description="Visualização territorial simulada dos pontos de interesse e equipamentos." />
      <div style={{ maxWidth: 320, marginBottom: 16 }}><Select options={['Todas', ...inventoryCategories]} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} /></div>
      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
        <Card>
          <div style={{ height: 420, background: 'linear-gradient(#f8fafc, #eef2f7)', borderRadius: 12, position: 'relative' }}>
            {points.map((point) => (
              <button key={point.id} onClick={() => setSelectedPoint(point)} style={{ position: 'absolute', left: `${point.coords.x}%`, top: `${point.coords.y}%`, transform: 'translate(-50%, -50%)', border: 'none', borderRadius: '999px', width: 12, height: 12, background: 'var(--color-primary)', cursor: 'pointer' }} />
            ))}
          </div>
        </Card>
        <div className="grid">
          <Card>
            <h3 style={{ marginTop: 0 }}>Pontos turísticos</h3>
            <div style={{ maxHeight: 200, overflow: 'auto' }}>{points.map((point) => <p key={point.id} style={{ margin: '8px 0' }}>{point.name}</p>)}</div>
          </Card>
          <Card>
            <h3 style={{ marginTop: 0 }}>Detalhes do ponto</h3>
            <p><strong>{selectedPoint.name}</strong></p>
            <p>{selectedPoint.category} · {selectedPoint.location}</p>
            <p style={{ marginBottom: 0 }}>Avaliação: {selectedPoint.rating}</p>
          </Card>
        </div>
      </section>
    </Container>
  );
};
