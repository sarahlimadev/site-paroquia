import { Droplet, Utensils, Heart, Church, Cross, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export function Sacraments() {
  const sacraments = [
    {
      icon: Droplet,
      title: "Batismo",
      description:
        "Primeiro sacramento da iniciação cristã, pelo qual nos tornamos filhos de Deus e membros da Igreja.",
      requirements: [
        "Certidão de nascimento original",
        "Documento dos pais e padrinhos",
        "Curso de preparação para os pais e padrinhos",
        "Comprovante de participação na catequese (para padrinhos)",
      ],
      schedule: "Domingos após a Missa das 9h00",
      note: "Agende com antecedência mínima de 30 dias na secretaria paroquial.",
    },
    {
      icon: Utensils,
      title: "Primeira Eucaristia",
      description:
        "Sacramento pelo qual recebemos pela primeira vez o Corpo e Sangue de Cristo na Sagrada Comunhão.",
      requirements: [
        "Idade mínima: 9 anos",
        "Certidão de batismo",
        "Frequência regular à catequese",
        "Participação na Missa dominical",
      ],
      schedule: "Celebrações especiais conforme calendário paroquial",
      note: "A preparação ocorre através da catequese aos sábados às 15h.",
    },
    {
      icon: Cross,
      title: "Crisma",
      description:
        "Sacramento que completa o Batismo e nos fortalece com os dons do Espírito Santo para sermos testemunhas de Cristo.",
      requirements: [
        "Idade mínima: 15 anos",
        "Certidão de batismo e primeira comunhão",
        "Frequência à catequese de crisma",
        "Carta de apresentação do padrinho/madrinha",
      ],
      schedule: "Celebração anual conforme orientação do Arcebispo",
      note: "A preparação tem duração de aproximadamente 2 anos.",
    },
    {
      icon: Heart,
      title: "Matrimônio",
      description:
        "Sacramento que une homem e mulher em aliança de amor fiel e indissolúvel, à imagem do amor de Cristo pela Igreja.",
      requirements: [
        "Documentos pessoais e certidões (lista completa na secretaria)",
        "Curso de noivos (obrigatório)",
        "Certidão de batismo atualizada (emitida há menos de 6 meses)",
        "Padrinhos católicos praticantes",
      ],
      schedule: "Conforme agendamento na secretaria",
      note: "Procure a secretaria com pelo menos 6 meses de antecedência.",
    },
    {
      icon: Church,
      title: "Confissão",
      description:
        "Sacramento da Reconciliação, pelo qual recebemos o perdão de Deus através da absolvição do sacerdote.",
      requirements: [
        "Exame de consciência",
        "Arrependimento sincero dos pecados",
        "Propósito de conversão",
      ],
      schedule: "30 minutos antes de cada Missa ou com agendamento",
      note: "Também disponível durante a Quaresma em horários especiais.",
    },
    {
      icon: Cross,
      title: "Unção dos Enfermos",
      description:
        "Sacramento destinado aos enfermos graves e idosos, trazendo força espiritual e, se for da vontade de Deus, a cura física.",
      requirements: [
        "Pessoa enferma ou em situação de risco de vida",
        "Contato com a secretaria paroquial",
      ],
      schedule: "Atendimento emergencial ou conforme agendamento",
      note: "Para casos urgentes, entre em contato diretamente com o pároco.",
    },
    {
      icon: Users,
      title: "Ordem",
      description:
        "Sacramento pelo qual alguns homens são consagrados para servir à Igreja como diáconos, presbíteros ou bispos.",
      requirements: [
        "Formação no seminário",
        "Discernimento vocacional",
        "Aprovação do Arcebispo",
      ],
      schedule: "Conforme calendário arquidiocesano",
      note: "Para informações sobre vocação sacerdotal, contate o Setor Vocacional da Arquidiocese.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1636562705007-67a52b138df8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRob2xpYyUyMGNodXJjaCUyMGludGVyaW9yJTIwYWx0YXJ8ZW58MXx8fHwxNzc2MjU2MjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sacramentos</h1>
          <p className="text-xl">Os sete sinais sagrados da graça de Deus</p>
        </div>
      </section>

      {/* Introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Os Sacramentos da Igreja</h2>
            <p className="text-lg text-gray-700 mb-4">
              Os sacramentos são sinais eficazes da graça, instituídos por Cristo e confiados à
              Igreja, através dos quais nos é dispensada a vida divina. São sete os sacramentos: três
              de iniciação cristã, dois de cura e dois de serviço à comunhão e missão.
            </p>
            <p className="text-lg text-gray-700">
              Nossa paróquia está à disposição para acompanhá-lo em sua caminhada de fé através dos
              sacramentos. Confira abaixo as informações sobre cada um deles.
            </p>
          </div>
        </div>
      </section>

      {/* Lista de Sacramentos */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            {sacraments.map((sacrament, index) => {
              const Icon = sacrament.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-blue-900 mb-2">
                          {sacrament.title}
                        </CardTitle>
                        <CardDescription className="text-base text-gray-700">
                          {sacrament.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-blue-900" />
                          Requisitos
                        </h4>
                        <ul className="space-y-2">
                          {sacrament.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-700">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-3 flex items-center gap-2">
                          <Church className="w-5 h-5 text-blue-900" />
                          Informações
                        </h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm font-semibold text-blue-900 mb-1">Quando:</p>
                            <p className="text-gray-700">{sacrament.schedule}</p>
                          </div>
                          <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                            <p className="text-sm font-semibold text-amber-900 mb-1">
                              Observação:
                            </p>
                            <p className="text-gray-700">{sacrament.note}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Precisa de Mais Informações?</h2>
                <p className="text-lg mb-6">
                  Nossa secretaria paroquial está pronta para atendê-lo e esclarecer todas as suas
                  dúvidas sobre os sacramentos.
                </p>
                <div className="space-y-2">
                  <p className="text-lg">
                    <strong>Horário de Atendimento:</strong>
                  </p>
                  <p>Segunda a Sexta: 8h às 12h / 14h às 17h</p>
                  <p>Sábado: 8h às 12h</p>
                  <p className="mt-4">
                    <strong>Telefone:</strong> (81) 3555-1234
                  </p>
                  <p>
                    <strong>E-mail:</strong> paroquia@nslourdespirapama.com.br
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
