// Catálogos da UBERTRIZ 1.0 usados pela Clínica (fonte: conversa_TRIZ_SUPERTRIZ_UBERTRIZ_completa.md)
window.UBZ = {
  C: {C01:"Elemento ausente",C02:"Propriedades incompatíveis",C03:"Perda de características essenciais",C04:"Estado não alcançado",C05:"Estados excludentes",C06:"Estado oscila ou se deteriora",C07:"Função insuficiente",C08:"Funções conflitantes",C09:"Função instável",C10:"Conexão ausente",C11:"Relações incompatíveis",C12:"Dependências prejudiciais",C13:"Fluxo insuficiente",C14:"Fluxos concorrentes",C15:"Fluxo inadequadamente variável",C16:"Escassez de recurso",C17:"Usos concorrentes do recurso",C18:"Recurso se esgota",C19:"Objetivo indefinido",C20:"Objetivos inconciliáveis",C21:"Objetivo muda",C22:"Restrição desconhecida",C23:"Restrições incompatíveis",C24:"Restrição contextual",C25:"Capacidade ausente no agente",C26:"Interesses divergentes",C27:"Comportamento imprevisível",C28:"Condição ausente",C29:"Exigências de contexto incompatíveis",C30:"Ambiente muda",C31:"Tempo insuficiente",C32:"Sequências ou ritmos incompatíveis",C33:"Efeitos retardados",C34:"Informação ausente",C35:"Modelos incompatíveis",C36:"Conhecimento obsoleto"},

  // componente ontológico de cada contradição (linhas da tabela da Parte IV)
  CROW: ["Entidade","Estado","Função","Relação","Fluxo","Recurso","Objetivo","Restrição","Agente","Contexto","Tempo","Conhecimento"],

  U: {
    U01:["REVELAR","Expor","Tornar visível variável, relação ou condição."],
    U02:["REVELAR","Inferir","Reconstruir o que se quer a partir de evidência indireta."],
    U03:["REVELAR","Triangular","Combinar perspectivas e fontes independentes."],
    U04:["REDEFINIR","Reenquadrar","Mudar a pergunta ou a descrição."],
    U05:["REDEFINIR","Redelimitar","Mudar as fronteiras do sistema."],
    U06:["REDEFINIR","Reorientar","Reformular o objetivo."],
    U07:["SEPARAR","Separar no espaço","Distribuir exigências em regiões distintas."],
    U08:["SEPARAR","Separar no tempo","Atender exigências incompatíveis em momentos distintos."],
    U09:["SEPARAR","Separar funções","Desacoplar funções ou responsabilidades."],
    U10:["REORGANIZAR","Retopologizar","Mudar conexões, caminhos e dependências."],
    U11:["REORGANIZAR","Rehierarquizar","Mudar níveis de organização e decisão."],
    U12:["REORGANIZAR","Reacoplar","Criar ou modificar ligações."],
    U13:["REDISTRIBUIR","Redistribuir carga","Realocar demanda e esforço."],
    U14:["REDISTRIBUIR","Redistribuir agência","Realocar capacidade e controle."],
    U15:["REDISTRIBUIR","Redistribuir consequências","Alterar quem arca com custos e benefícios."],
    U16:["CONVERTER","Converter meio","Entregar a função por outro mecanismo."],
    U17:["CONVERTER","Converter função","Dar outra função a um elemento."],
    U18:["CONVERTER","Converter perda","Aproveitar um efeito residual."],
    U19:["REGULAR","Retroalimentar","Ajustar a ação pelo resultado observado."],
    U20:["REGULAR","Antecipar","Agir antes que o problema se manifeste."],
    U21:["REGULAR","Condicionar","Regras que mudam segundo estado ou contexto."],
    U22:["PROTEGER","Redundar","Criar caminhos ou canais alternativos."],
    U23:["PROTEGER","Isolar","Impedir a propagação de um efeito prejudicial."],
    U24:["PROTEGER","Reverter","Preservar a opção de desfazer."],
    U25:["EXPERIMENTAR","Sondar","Intervenção mínima (prévia) para informar."],
    U26:["EXPERIMENTAR","Comparar","Distinguir efeitos de alternativas."],
    U27:["EXPERIMENTAR","Refutar","Buscar evidência contra a hipótese."],
    U28:["ALINHAR","Compatibilizar incentivos","Aproximar interesse local e resultado coletivo."],
    U29:["ALINHAR","Negociar restrições","Revisar exigências modificáveis."],
    U30:["ALINHAR","Instituir regras","Criar coordenação e padrão comum."],
    U31:["MATERIALIZAR","Escalonar","Dividir a transformação em etapas viáveis."],
    U32:["MATERIALIZAR","Capacitar","Criar condições de execução."],
    U33:["MATERIALIZAR","Transicionar","Manter as funções durante a mudança."],
    U34:["EVOLUIR","Variar","Produzir alternativas sob novas condições."],
    U35:["EVOLUIR","Selecionar","Reter apenas o que atende aos critérios."],
    U36:["EVOLUIR","Memorizar","Incorporar resultados ao repertório."]
  },

  I: {I01:"Funcionalidade",I02:"Eficiência",I03:"Simplicidade",I04:"Confiabilidade",I05:"Segurança",I06:"Distribuição justa",I07:"Autonomia",I08:"Adaptabilidade",I09:"Observabilidade",I10:"Reversibilidade",I11:"Sustentabilidade",I12:"Evolutividade"},

  PF: {P01:["Correção","Como remover comportamento indesejado?"],P02:["Otimização","Como melhorar o resultado sob restrições?"],P03:["Invenção","Como produzir nova capacidade?"],P04:["Diagnóstico","O que produz o fenômeno?"],P05:["Explicação","Por que acontece?"],P06:["Predição","O que pode acontecer sob certas condições?"],P07:["Decisão","Qual alternativa atende aos critérios?"],P08:["Coordenação","Como compatibilizar atividades?"],P09:["Negociação","Como lidar com interesses divergentes?"],P10:["Exploração","Que possibilidades não foram descobertas?"],P11:["Descoberta","Que relações ou regras desconhecidas existem?"],P12:["Criação","Como gerar configuração nova e significativa?"],P13:["Controle","Como manter uma variável sob condições desejadas?"],P14:["Adaptação","Como preservar funções quando o ambiente muda?"],P15:["Demonstração","Como verificar proposições?"],P16:["Metaproblema","E se a formulação do problema é problemática?"]},

  L: {L01:["Lógica","Há contradição formal?"],L02:["Física","É compatível com a física conhecida?"],L03:["Técnica","Existe capacidade técnica?"],L04:["Material","Há recursos disponíveis?"],L05:["Temporal","Cabe no horizonte exigido?"],L06:["Institucional","É compatível com regras e responsabilidades?"],L07:["Humana","Os participantes têm condições e capacidade?"],L08:["Contextual","Funciona nas condições do ambiente?"]},

  ESC: {micro:"Micro — elemento da tela", meso:"Meso — fluxo ou tela inteira", macro:"Macro — produto, canais e contexto"},

  DOM: {comercio:"Comércio eletrônico",financas:"Finanças e pagamentos",saude:"Saúde",educacao:"Educação",publico:"Serviços públicos",trabalho:"Trabalho e sistemas internos",mobilidade:"Mobilidade e viagens",ia:"IA e algoritmos",casa:"Casa e dispositivos",comunicacao:"Comunicação e redes"},

  SEVN: {1:"Cosmético",2:"Menor",3:"Grave",4:"Catastrófico"},
  // gravidade pela rubrica de Nielsen: impacto pesa em dobro; frequência e persistência completam
  sevDe: (f,i,p) => { const s = 2*i + f + p; return s<=5?1 : s<=7?2 : s<=9?3 : 4; },
  ST: {sub:"Subtrair — remove algo", add:"Acrescentar — introduz algo", mod:"Transformar — muda o que existe"}
};
window.PROBLEMAS = [];
