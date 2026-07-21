import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function Contact() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contato</h1>
          <p className="text-xl">Entre em contato conosco</p>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Informações */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">
                  Informações de Contato
                </h2>

                <div className="space-y-6">
                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">Endereço</h3>
                          <p className="text-gray-700">
                            Praça da Matriz, s/n<br />
                            Pirapama, PE<br />
                            CEP 55578-000
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">Telefone</h3>
                          <p className="text-gray-700">
                            (81) 3555-1234<br />
                            WhatsApp: (81) 99999-9999
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">E-mail</h3>
                          <p className="text-gray-700">
                            paroquia@nslourdespirapama.com.br
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-blue-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            Horário de Atendimento
                          </h3>
                          <div className="text-gray-700">
                            <p className="font-semibold mb-1">Secretaria Paroquial:</p>
                            <p>Segunda a Sexta: 8h às 12h / 14h às 17h</p>
                            <p>Sábado: 8h às 12h</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Redes Sociais e Mapa */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Redes Sociais</h2>

                <Card className="shadow-md mb-8">
                  <CardHeader>
                    <CardTitle>Siga-nos nas Redes Sociais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6">
                      Acompanhe nossas atividades, eventos e mensagens através das redes sociais.
                      Fique sempre por dentro das novidades da nossa comunidade paroquial.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Facebook className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Facebook</p>
                          <p className="text-sm text-gray-600">
                            /paroquianslourdespirapama
                          </p>
                        </div>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                      >
                        <Instagram className="w-6 h-6 text-pink-600" />
                        <div>
                          <p className="font-semibold text-gray-900">Instagram</p>
                          <p className="text-sm text-gray-600">@nslourdespirapama</p>
                        </div>
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
                      >
                        <Youtube className="w-6 h-6 text-red-600" />
                        <div>
                          <p className="font-semibold text-gray-900">YouTube</p>
                          <p className="text-sm text-gray-600">
                            Paróquia NS de Lourdes Pirapama
                          </p>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-md">
                  <CardHeader>
                    <CardTitle>Como Chegar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.2304775!2d-35.0!3d-8.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjQnMDAuMCJTIDM1wrAwMCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização da Paróquia"
                      ></iframe>
                    </div>
                    <Button className="w-full bg-blue-900 hover:bg-blue-800" asChild>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=Pirapama,PE"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        Ver no Google Maps
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe Paroquial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Equipe Paroquial
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-md">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-900">Pároco</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2">Pe. José Carlos da Silva</p>
                  <p className="text-gray-700 mb-3">
                    Pastor responsável pela condução espiritual da paróquia.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Atendimento:</strong> Com agendamento prévio
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-900">Vigário Paroquial</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2">Pe. André Luiz Santos</p>
                  <p className="text-gray-700 mb-3">
                    Auxilia nas atividades pastorais e celebrações.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Atendimento:</strong> Com agendamento prévio
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-900">Secretária</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2">Sra. Mariana Costa</p>
                  <p className="text-gray-700 mb-3">
                    Responsável pelo atendimento e organização da secretaria.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Atendimento:</strong> Conforme horário da secretaria
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-md">
                <CardHeader className="bg-blue-50">
                  <CardTitle className="text-xl text-blue-900">Tesoureiro</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="font-semibold text-lg mb-2">Sr. Roberto Alves</p>
                  <p className="text-gray-700 mb-3">
                    Responsável pela administração financeira da paróquia.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Atendimento:</strong> Mediante agendamento
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mensagem Final */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Seja Bem-Vindo!</h2>
                <p className="text-lg mb-6">
                  Nossa paróquia está de portas abertas para recebê-lo. Seja para participar das
                  celebrações, buscar orientação espiritual ou conhecer nossas atividades, você
                  sempre será bem-vindo em nossa comunidade.
                </p>
                <p className="text-xl font-semibold italic">
                  "Onde dois ou três estiverem reunidos em meu nome, eu estou no meio deles."
                  <br />
                  <span className="text-base font-normal">- Mateus 18,20</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
