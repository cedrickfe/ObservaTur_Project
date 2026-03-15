import { ChartCard } from '@/components/ChartCard';
import { Card, Container, Input, SectionHeader, Select } from '@/components/ui';
import { visitorProfile, visitorStats } from '@/data/visitors';

export const CollectionPage = () => (
  <Container>
    <SectionHeader title="Coleta de Dados de Visitantes" description="Simulação de check-in via QR Code e avaliação de experiência para inteligência turística." />
    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', marginBottom: 16 }}>
      <Card>
        <h3 style={{ marginTop: 0 }}>Como funciona</h3>
        <p style={{ color: 'var(--color-text-muted)' }}>Visitantes realizam check-in via QR Code em atrativos, respondem um formulário rápido e os dados alimentam indicadores estratégicos.</p>
      </Card>
      <Card>
        <h3 style={{ marginTop: 0 }}>QR Code simulado</h3>
        <div style={{ width: 140, height: 140, border: '1px dashed var(--color-border-strong)', borderRadius: 12, display: 'grid', placeItems: 'center' }}>QR</div>
      </Card>
      <Card>
        <h3 style={{ marginTop: 0 }}>Estatísticas</h3>
        {visitorStats.map((item) => <p key={item.label}><strong>{item.value}</strong> · {item.label}</p>)}
      </Card>
    </section>

    <section className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))' }}>
      <Card>
        <h3 style={{ marginTop: 0 }}>Formulário de avaliação</h3>
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))' }}>
          <Input placeholder="Origem do visitante" />
          <Select options={['Motivação da visita', 'Lazer', 'Negócios', 'Evento']} />
          <Select options={['Tempo de permanência', '1 dia', '2 a 3 dias', '4+ dias']} />
          <Select options={['Avaliação da experiência', 'Excelente', 'Boa', 'Regular']} />
          <Select options={['Recomendaria o local?', 'Sim', 'Talvez', 'Não']} />
        </div>
      </Card>
      <ChartCard title="Perfil do visitante">
        {visitorProfile.map((item) => (
          <div key={item.label} style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>{item.label}</span><strong>{item.value}%</strong></div>
            <div style={{ background: 'var(--color-hover)', borderRadius: 999, height: 8 }}><div style={{ width: `${item.value}%`, background: 'var(--color-primary)', height: '100%', borderRadius: 999 }} /></div>
          </div>
        ))}
      </ChartCard>
    </section>
  </Container>
);
