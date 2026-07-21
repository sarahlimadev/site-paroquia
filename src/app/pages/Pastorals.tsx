import {
  Heart,
  Users,
  BookOpen,
  Baby,
  Music,
  Church,
  Handshake,
  Cross,
  Globe,
  UserCheck,
  Pill,
  GraduationCap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function Pastorals() {
  const pastorals = [
    {
      icon: Baby,
      title: "Pastoral da Criança",
      description:
        "Dedicada ao cuidado e desenvolvimento integral das crianças de 0 a 6 anos e suas famílias, promovendo vida digna e saúde.",
      activities: [
        "Acompanhamento nutricional e de saúde",
        "Orientação às famílias",
        "Celebração da vida",
        "Visitas domiciliares",
      ],
      schedule: "Reuniões mensais - Segundo sábado às 14h",
      coordinator: "Maria das Graças Silva",
    },
    {
      icon: Users,
      title: "Pastoral Familiar",
      description:
        "Promove a evangelização das famílias, fortalecendo os laços familiares à luz do Evangelho e dos valores cristãos.",
      activities: [
        "Encontros de casais",
        "Preparação para o matrimônio",
        "Acompanhamento de famílias",
        "Celebrações e retiros",
      ],
      schedule: "Reuniões quinzenais - Primeiro e terceiro domingo às 16h",
      coordinator: "José e Ana Paula Oliveira",
    },
    {
      icon: BookOpen,
      title: "Catequese",
      description:
        "Formação na fé para crianças, adolescentes e adultos, preparando para os sacramentos da Primeira Eucaristia e Crisma.",
      activities: [
        "Catequese de Primeira Comunhão",
        "Catequese de Crisma",
        "Catequese de adultos",
        "Formação de catequistas",
      ],
      schedule: "Sábados às 15h (crianças) / Domingos às 16h (crisma)",
      coordinator: "Profª. Carla Mendes",
    },
    {
      icon: Heart,
      title: "Pastoral da Saúde",
      description:
        "Leva conforto espiritual e solidariedade aos enfermos, idosos e pessoas em situação de fragilidade física ou emocional.",
      activities: [
        "Visitas a enfermos e hospitais",
        "Comunhão aos impossibilitados",
        "Apoio a familiares",
        "Celebrações especiais",
      ],
      schedule: "Reuniões mensais - Terceiro domingo às 15h",
      coordinator: "Enf. Beatriz Santos",
    },
    {
      icon: Music,
      title: "Pastoral Litúrgica",
      description:
        "Organiza e anima as celebrações litúrgicas, através dos diversos ministérios que servem à comunhão e participação.",
      activities: [
        "Equipe de canto e música",
        "Ministros Extraordinários da Eucaristia",
        "Leitores e comentaristas",
        "Equipe de acolhida",
      ],
      schedule: "Ensaio coral - Quintas às 19h30 / Reuniões mensais",
      coordinator: "Maestro João Pedro",
    },
    {
      icon: Church,
      title: "Pastoral da Juventude",
      description:
        "Espaço de formação, oração e missão para jovens, estimulando o protagonismo juvenil na Igreja e na sociedade.",
      activities: [
        "Encontros formativos",
        "Grupos de oração",
        "Ações missionárias",
        "Retiros e eventos",
      ],
      schedule: "Domingos às 17h",
      coordinator: "Lucas Ferreira",
    },
    {
      icon: Handshake,
      title: "Pastoral da Caridade",
      description:
        "Promove ações de solidariedade e assistência às pessoas em situação de vulnerabilidade social, vivendo o amor ao próximo.",
      activities: [
        "Distribuição de cestas básicas",
        "Auxílio emergencial",
        "Campanhas solidárias",
        "Visitas às famílias necessitadas",
      ],
      schedule: "Atendimento: Terças e quintas das 9h às 11h",
      coordinator: "Francisca Lima",
    },
    {
      icon: Cross,
      title: "Ministério de Acólitos",
      description:
        "Formação de crianças e adolescentes que servem ao altar durante as celebrações litúrgicas.",
      activities: [
        "Formação litúrgica",
        "Serviço ao altar",
        "Retiros espirituais",
        "Encontros formativos",
      ],
      schedule: "Encontros aos sábados às 14h",
      coordinator: "Pe. André Luiz Santos",
    },
    {
      icon: Globe,
      title: "Pastoral da Comunicação",
      description:
        "Responsável pela divulgação das atividades paroquiais através das redes sociais, boletins e comunicação visual.",
      activities: [
        "Gestão de redes sociais",
        "Produção de boletins",
        "Cobertura de eventos",
        "Comunicação interna",
      ],
      schedule: "Reuniões quinzenais - Sábados às 16h",
      coordinator: "Rafael Costa",
    },
    {
      icon: UserCheck,
      title: "Pastoral Vocacional",
      description:
        "Promove e acompanha o discernimento vocacional, cultivando vocações ao sacerdócio, vida religiosa e laicato.",
      activities: [
        "Encontros vocacionais",
        "Acompanhamento espiritual",
        "Visitas a seminários",
        "Dia de oração pelas vocações",
      ],
      schedule: "Encontros mensais - Último domingo às 15h",
      coordinator: "Diácono Marcos Silva",
    },
    {
      icon: Pill,
      title: "Pastoral da Sobriedade",
      description:
        "Acolhe e acompanha pessoas e famílias que enfrentam problemas com dependência química e alcoolismo.",
      activities: [
        "Grupos de apoio",
        "Acompanhamento personalizado",
        "Palestras e formação",
        "Apoio às famílias",
      ],
      schedule: "Reuniões semanais - Quartas às 19h30",
      coordinator: "Dr. Paulo Henrique",
    },
    {
      icon: GraduationCap,
      title: "Pastoral da Educação",
      description:
        "Promove a educação cristã e o acompanhamento às escolas e comunidades educativas da região.",
      activities: [
        "Formação de educadores",
        "Apoio escolar",
        "Catequese escolar",
        "Eventos educativos",
      ],
      schedule: "Reuniões mensais - Primeiro sábado às 9h",
      coordinator: "Profª. Sandra Rodrigues",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1729089049653-24312fdca908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwY2h1cmNoJTIwY29tbXVuaXR5fGVufDF8fHx8MTc3NjI1NjE5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pastorais e Ministérios</h1>
          <p className="text-xl">Venha servir e construir o Reino de Deus</p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">
              Participe da Vida Paroquial
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              As pastorais e ministérios são grupos organizados de leigos, religiosos e sacerdotes
              que trabalham juntos para evangelizar, servir e construir a comunidade paroquial. Cada
              pastoral tem uma missão específica, mas todas convergem para o mesmo objetivo: viver e
              anunciar o Evangelho de Jesus Cristo.
            </p>
            <p className="text-lg text-gray-700">
              Todos são convidados a participar! Escolha a pastoral que mais se identifica com seus
              dons e talentos, e venha fazer parte dessa grande família.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Pastorais */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {pastorals.map((pastoral, index) => {
              const Icon = pastoral.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <CardHeader className="bg-gradient-to-br from-blue-50 to-white">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-blue-900">{pastoral.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base text-gray-700">
                      {pastoral.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                          <Church className="w-4 h-4 text-blue-900" />
                          Atividades
                        </h4>
                        <ul className="space-y-1 ml-6">
                          {pastoral.activities.map((activity, idx) => (
                            <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-blue-900 mb-1">Reuniões:</p>
                        <p className="text-sm text-gray-700">{pastoral.schedule}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-gray-900 mb-1">Coordenador(a):</p>
                        <p className="text-sm text-gray-700">{pastoral.coordinator}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Quer Participar de Uma Pastoral?</h2>
                <p className="text-lg mb-6">
                  Entre em contato conosco para saber mais sobre como você pode servir à comunidade
                  através das pastorais e ministérios da paróquia.
                </p>
                <div className="space-y-2 mb-8">
                  <p className="text-lg">
                    <strong>Secretaria Paroquial</strong>
                  </p>
                  <p>Segunda a Sexta: 8h às 12h / 14h às 17h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="mt-3">
                    <strong>Telefone:</strong> (81) 3555-1234
                  </p>
                  <p>
                    <strong>E-mail:</strong> paroquia@nslourdespirapama.com.br
                  </p>
                </div>
                <Button size="lg" variant="secondary">
                  Entre em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
