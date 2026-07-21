import { Clock, MapPin, Users, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export function Masses() {
  const weekdayMasses = [
    { day: "Segunda-feira", time: "19h00" },
    { day: "Terça-feira", time: "19h00" },
    { day: "Quarta-feira", time: "19h00" },
    { day: "Quinta-feira", time: "19h00" },
    { day: "Sexta-feira", time: "19h00" },
  ];

  const weekendMasses = [
    { day: "Sábado", time: "19h00", note: "Missa antecipada de domingo" },
    { day: "Domingo", time: "7h00", note: "" },
    { day: "Domingo", time: "9h00", note: "" },
    { day: "Domingo", time: "19h00", note: "" },
  ];

  const specialCelebrations = [
    {
      title: "Adoração ao Santíssimo",
      schedule: "Primeira sexta-feira do mês",
      time: "18h00 - 19h00",
      description: "Momento de adoração eucarística antes da Santa Missa.",
    },
    {
      title: "Via Sacra",
      schedule: "Todas as sextas-feiras da Quaresma",
      time: "18h30",
      description: "Meditação da Paixão de Cristo através das 14 estações.",
    },
    {
      title: "Terço em Família",
      schedule: "Todos os dias",
      time: "18h30",
      description: "Oração do Santo Rosário antes da Missa.",
    },
    {
      title: "Celebração Penitencial",
      schedule: "Primeira quinta-feira do mês",
      time: "19h00",
      description: "Momento de reflexão e confissão comunitária.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Horários de Missas</h1>
          <p className="text-xl">Participe das celebrações eucarísticas</p>
        </div>
      </section>

      {/* Informações Gerais */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="shadow-lg bg-blue-50 border-blue-200 mb-12">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-2">Local</h3>
                      <p className="text-gray-700">
                        Igreja Matriz de Nossa Senhora de Lourdes<br />
                        Praça da Matriz, s/n - Pirapama, PE
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-blue-900 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-blue-900 mb-2">
                        Observações Importantes
                      </h3>
                      <p className="text-gray-700">
                        Recomendamos chegar com antecedência. Aos domingos, as missas costumam ter
                        maior participação.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Missas de Dias de Semana */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Missas de Segunda a Sexta
              </h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {weekdayMasses.map((mass, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-blue-900" />
                          <span className="font-semibold text-gray-900">{mass.day}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span className="text-xl font-bold text-blue-900">{mass.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Missas de Final de Semana */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Missas de Final de Semana
              </h2>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {weekendMasses.map((mass, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors gap-2"
                      >
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-blue-900" />
                          <span className="font-semibold text-gray-900">{mass.day}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                          {mass.note && (
                            <span className="text-sm text-gray-600 italic">{mass.note}</span>
                          )}
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span className="text-xl font-bold text-blue-900">{mass.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Celebrações Especiais */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
                Celebrações Especiais
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {specialCelebrations.map((celebration, index) => (
                  <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-900">
                        {celebration.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <div className="flex items-center gap-2 mt-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-semibold">{celebration.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">{celebration.time}</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{celebration.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avisos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Avisos Importantes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Confissões</h3>
                  <p className="text-gray-700">
                    O Sacramento da Reconciliação está disponível 30 minutos antes de cada Missa ou
                    mediante agendamento na secretaria paroquial.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Batizados</h3>
                  <p className="text-gray-700">
                    Celebrados aos domingos após a Missa das 9h00. É necessário participar do curso
                    de preparação. Agende na secretaria.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Casamentos</h3>
                  <p className="text-gray-700">
                    O curso de noivos é realizado mensalmente. Procure a secretaria com pelo menos 6
                    meses de antecedência.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Alterações nos Horários</h3>
                  <p className="text-gray-700">
                    Em dias de solenidades e festas especiais, os horários podem sofrer alterações.
                    Fique atento aos avisos nas missas e nas redes sociais.
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
