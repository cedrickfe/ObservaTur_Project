import { attractions } from '@/data/attractions';
import { inventoryDistribution, overviewStats, seasonality, visitorFlow } from '@/data/stats';
import { Card, Container, SectionHeader } from '@/components/ui';
import { StatCard } from '@/components/StatCard';
import { ChartCard } from '@/components/ChartCard';

const BarList = ({ data, keyLabel, keyValue }: { data: any[]; keyLabel: string; keyValue: string }) => (
  <div style={{ display: 'grid', gap: 10 }}>
    {data.map((item) => (
      <div key={item[keyLabel]}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}><span>{item[keyLabel]}</span><span>{item[keyValue]}</span></div>
        <div style={{ height: 8, borderRadius: 20, background: 'var(--color-hover)', marginTop: 4 }}>
          <div style={{ width: `${item[keyValue] / Math.max(...data.map((d) => d[keyValue])) * 100}%`, background: 'var(--color-primary)', height: '100%', borderRadius: 20 }} />
        </div>
      </div>
    ))}
  </div>
);

export const DashboardPage = () => (
  <Container>
    <SectionHeader title="ObservaTur · Visão Geral" description="Painel executivo para monitoramento de turismo municipal e suporte à decisão estratégica." />

    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(210px,1fr))', marginBottom: 16 }}>
      {overviewStats.map((stat) => <StatCard key={stat.label} {...stat} />)}
    </section>

    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', marginBottom: 16 }}>
      <ChartCard title="Fluxo de visitantes"><BarList data={visitorFlow} keyLabel="month" keyValue="value" /></ChartCard>
      <ChartCard title="Sazonalidade"><BarList data={seasonality} keyLabel="period" keyValue="value" /></ChartCard>
      <ChartCard title="Distribuição do inventário"><BarList data={inventoryDistribution} keyLabel="name" keyValue="value" /></ChartCard>
    </section>

    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
      <Card>
        <h3 style={{ marginTop: 0 }}>Ranking de atrativos mais visitados</h3>
        {attractions.slice().sort((a, b) => b.visits - a.visits).slice(0, 5).map((item, idx) => (
          <p key={item.id} style={{ margin: '8px 0', display: 'flex', justifyContent: 'space-between' }}><span>{idx + 1}. {item.name}</span><strong>{item.visits.toLocaleString('pt-BR')}</strong></p>
        ))}
      </Card>
      <Card>
        <h3 style={{ marginTop: 0 }}>Insights simulados</h3>
        <ul style={{ paddingLeft: 16, color: 'var(--color-text-muted)' }}>
          <li>Picos de fluxo em fins de semana prolongados.</li>
          <li>Eventos gastronômicos aumentam permanência média em 18%.</li>
          <li>Região central concentra 46% da movimentação turística.</li>
        </ul>
      </Card>
    </section>
  </Container>
);
