import { Church, Heart, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function AboutUs() {
  const values = [
    {
      icon: Church,
      title: "Fé",
      description: "Cultivamos a fé em Jesus Cristo e nos sacramentos da Igreja Católica.",
    },
    {
      icon: Heart,
      title: "Amor",
      description: "Vivemos o amor ao próximo através do serviço e da caridade.",
    },
    {
      icon: Users,
      title: "Comunhão",
      description: "Construímos uma comunidade unida na diversidade e fraternidade.",
    },
    {
      icon: BookOpen,
      title: "Evangelização",
      description: "Anunciamos a Boa Nova de Jesus Cristo a todos.",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nós</h1>
          <p className="text-xl">Conheça nossa história e missão</p>
        </div>
      </section>

      {/* História */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Nossa História
            </h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                A Paróquia Nossa Senhora de Lourdes de Pirapama foi fundada em 1956, fruto da fé e
                dedicação dos primeiros católicos da região. Ao longo de 70 anos, nossa comunidade
                tem sido um farol de esperança e evangelização para todos que buscam uma vida de fé
                e comunhão.
              </p>

              <p>
                Localizada em Pirapama, município de Pernambuco, a paróquia pertence à histórica
                Arquidiocese de Olinda e Recife, uma das mais antigas do Brasil. Nossa padroeira,
                Nossa Senhora de Lourdes, nos inspira a viver com humildade, oração e confiança na
                misericórdia divina.
              </p>

              <p>
                Durante estas sete décadas, a paróquia cresceu não apenas em estrutura física, mas
                principalmente na formação de uma comunidade viva e atuante. Através das diversas
                pastorais, movimentos e grupos de oração, continuamos a missão de evangelizar e
                servir, seguindo o mandamento do amor deixado por Jesus Cristo.
              </p>

              <p>
                Celebrar 70 anos é motivo de profunda gratidão a Deus e a todos que dedicaram suas
                vidas para construir e fortalecer nossa comunidade paroquial. É também um momento de
                renovar nosso compromisso de continuar sendo uma Igreja acolhedora, missionária e
                servidora.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Nossa Missão
            </h2>

            <Card className="shadow-lg mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-gray-700 text-center">
                  "Ser uma comunidade de fé que acolhe, evangeliza e serve, vivendo o amor de Cristo
                  e construindo o Reino de Deus através dos sacramentos, da caridade e da comunhão
                  fraterna."
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="shadow-md">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-blue-900" />
                        </div>
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Estrutura Paroquial */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">
              Estrutura Paroquial
            </h2>

            <div className="space-y-6">
              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Pároco</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">Pe. José Carlos da Silva</p>
                  <p className="text-gray-700">
                    Responsável pela condução espiritual da paróquia e pela celebração dos
                    sacramentos.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Vigário Paroquial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-lg mb-2">Pe. André Luiz Santos</p>
                  <p className="text-gray-700">
                    Auxilia o pároco nas atividades pastorais e celebrações litúrgicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Conselho Paroquial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Composto por representantes das diversas pastorais e movimentos, o Conselho
                    Paroquial colabora na tomada de decisões e no planejamento das atividades da
                    paróquia.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-900">Conselho Econômico</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Responsável pela administração dos bens e recursos da paróquia, garantindo
                    transparência e boa gestão financeira.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Senhora de Lourdes */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa Padroeira: Nossa Senhora de Lourdes
            </h2>

            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p>
                Nossa Senhora de Lourdes apareceu à jovem Bernadette Soubirous em 1858, na cidade de
                Lourdes, na França. Durante as aparições, a Virgem Maria se identificou como a
                "Imaculada Conceição" e pediu oração, penitência e a construção de uma capela.
              </p>

              <p>
                O local das aparições tornou-se um dos principais santuários marianos do mundo,
                conhecido pelas curas miraculosas e pela água da fonte que brotou durante as
                aparições. Milhões de peregrinos visitam Lourdes todos os anos em busca de cura
                física e espiritual.
              </p>

              <p>
                Nossa paróquia honra Nossa Senhora de Lourdes como padroeira, buscando viver sua
                mensagem de conversão, oração e confiança em Deus. A festa de Nossa Senhora de
                Lourdes é celebrada em 11 de fevereiro, sendo um dos momentos mais importantes do
                calendário paroquial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
