import { Button, Card, Container, SectionHeader } from '@/components/ui';

const reports = [
  { title: 'Relatório Institucional', description: 'Resumo executivo para prestação de contas e governança.', indicators: 'Indicadores-chave, evolução trimestral, benchmarks.' },
  { title: 'Relatório de Fluxo Turístico', description: 'Análise de fluxo por período, origem e concentração territorial.', indicators: 'Fluxo mensal, sazonalidade, permanência média.' },
  { title: 'Relatório de Eventos', description: 'Desempenho dos eventos e impacto no turismo local.', indicators: 'Público estimado, ocupação, perfil do visitante.' },
  { title: 'Relatório de Inventário', description: 'Situação atual dos ativos turísticos do município.', indicators: 'Categorias, avaliação média, infraestrutura disponível.' }
];

export const ReportsPage = () => (
  <Container>
    <SectionHeader title="Relatórios Estratégicos" description="Geração simulada de relatórios para apoiar planejamento turístico municipal." />
    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))' }}>
      {reports.map((report) => (
        <Card key={report.title}>
          <h3 style={{ marginTop: 0 }}>{report.title}</h3>
          <p>{report.description}</p>
          <p style={{ color: 'var(--color-text-muted)' }}>{report.indicators}</p>
          <Button>Exportar (simulado)</Button>
        </Card>
      ))}
    </section>
  </Container>
);
