'use client';
import { useMemo, useState } from 'react';
import { attractions } from '@/data/attractions';
import { inventoryCategories } from '@/data/categories';
import { Badge, Card, Container, Input, SectionHeader, Select } from '@/components/ui';

export const InventoryPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Todas');

  const filtered = useMemo(() => attractions.filter((item) =>
    (category === 'Todas' || item.category === category) && item.name.toLowerCase().includes(search.toLowerCase())), [search, category]);

  return (
    <Container>
      <SectionHeader title="Inventário Turístico" description="Gestão de ativos turísticos municipais com filtros por categoria e busca inteligente." />
      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px,1fr))', marginBottom: 16 }}>
        {inventoryCategories.map((cat) => <Card key={cat}><strong>{cat}</strong><p style={{ marginBottom: 0, color: 'var(--color-text-muted)' }}>{attractions.filter((a) => a.category === cat).length} itens</p></Card>)}
      </section>
      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', marginBottom: 16 }}>
        <Input placeholder="Buscar por nome do atrativo" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Select options={['Todas', ...inventoryCategories]} value={category} onChange={(e) => setCategory(e.target.value)} />
      </section>
      <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))' }}>
        {filtered.map((item) => (
          <Card key={item.id}>
            <h3 style={{ marginTop: 0 }}>{item.name}</h3>
            <Badge>{item.category}</Badge>
            <p><strong>Local:</strong> {item.location}</p>
            <p><strong>Acessibilidade:</strong> {item.accessibility}</p>
            <p><strong>Infraestrutura:</strong> {item.infrastructure.join(', ')}</p>
            <p style={{ marginBottom: 0 }}><strong>Avaliação:</strong> {item.rating}</p>
          </Card>
        ))}
      </section>
    </Container>
  );
};
