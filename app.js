// ===== ITA STUDY HUB - DATA & APP =====

const SUBJECTS = {
    matematica: {
        name: "Matemática", icon: "📐", color: "#3b82f6",
        desc: "Base fundamental do vestibular ITA — 12 questões na 1ª fase e discursivas na 2ª fase.",
        topics: [
            {
                id: "m1", name: "Conjuntos", desc: "Teoria elementar dos conjuntos, subconjuntos, operações (união, intersecção, diferença, complementar). Conjuntos numéricos (N, Z, Q, I, R). Princípio da Indução e das Gavetas.",
                priority: "high", subtopics: ["Subconjuntos", "União e Intersecção", "Diferença e Complementar", "Conjuntos Numéricos", "Indução Matemática", "Princípio das Gavetas"],
                materials: [
                    { type: "book", name: "FME Vol.1 — Conjuntos e Funções", author: "Gelson Iezzi", desc: "Capítulos 1-3: teoria completa de conjuntos com exercícios." },
                    { type: "book", name: "Elementos da Matemática Vol.0", author: "Rufino", desc: "Base de conjuntos e lógica matemática." },
                    { type: "exercise", name: "BBF no ITA — Conjuntos", author: "bbfnoita.com.br", desc: "Lista gratuita de exercícios nível ITA." },
                    { type: "video", name: "Conjuntos para ITA/IME", author: "YouTube", desc: "Aulas completas sobre teoria dos conjuntos." }
                ]
            },
            {
                id: "m2", name: "Funções", desc: "Domínio, imagem, contradomínio. Funções injetoras, sobrejetoras e bijetoras. Composição e inversão. Funções pares, ímpares, crescentes e decrescentes.",
                priority: "high", subtopics: ["Domínio e Imagem", "Injetora/Sobrejetora/Bijetora", "Composição de Funções", "Função Inversa", "Função Par e Ímpar", "Gráficos"],
                materials: [
                    { type: "book", name: "FME Vol.1 — Conjuntos e Funções", author: "Gelson Iezzi", desc: "Capítulos 4-8: estudo completo de funções." },
                    { type: "book", name: "Elementos da Matemática Vol.1", author: "Rufino", desc: "Funções com exercícios desafiadores." },
                    { type: "exercise", name: "Provas anteriores ITA — Funções", author: "ITA", desc: "Questões de vestibulares anteriores sobre funções." },
                    { type: "link", name: "Khan Academy — Funções", author: "khanacademy.org", desc: "Curso gratuito online de funções." }
                ]
            },
            {
                id: "m3", name: "Logaritmos e Exponenciais", desc: "Função exponencial e logarítmica. Propriedades dos logaritmos. Equações e inequações exponenciais e logarítmicas. Mudança de base.",
                priority: "high", subtopics: ["Função Exponencial", "Função Logarítmica", "Propriedades dos Logaritmos", "Equações Exponenciais", "Inequações Logarítmicas", "Mudança de Base"],
                materials: [
                    { type: "book", name: "FME Vol.2 — Logaritmos", author: "Gelson Iezzi", desc: "Volume dedicado a logaritmos e exponenciais." },
                    { type: "book", name: "Noções de Matemática Vol.2", author: "Aref Neto", desc: "Logaritmos com teoria aprofundada." },
                    { type: "exercise", name: "BBF no ITA — Logaritmos", author: "bbfnoita.com.br", desc: "Exercícios focados em logaritmos nível ITA." }
                ]
            },
            {
                id: "m4", name: "Trigonometria", desc: "Funções trigonométricas, identidades, equações. Fórmulas de adição, subtração, duplicação e transformação em produto. Leis dos senos e cossenos.",
                priority: "high", subtopics: ["Arcos e Ângulos", "Seno, Cosseno, Tangente", "Identidades Trigonométricas", "Equações Trigonométricas", "Fórmulas de Adição", "Lei dos Senos e Cossenos", "Transformação em Produto"],
                materials: [
                    { type: "book", name: "FME Vol.3 — Trigonometria", author: "Gelson Iezzi", desc: "Volume completo: arcos até equações trigonométricas." },
                    { type: "book", name: "Elementos da Matemática Vol.3", author: "Rufino", desc: "Trigonometria avançada com exercícios ITA/IME." },
                    { type: "exercise", name: "BBF no ITA — Trigonometria", author: "bbfnoita.com.br", desc: "Lista gratuita de trigonometria." },
                    { type: "video", name: "Trigonometria Completa ITA", author: "YouTube", desc: "Playlist completa de trigonometria para ITA." }
                ]
            },
            {
                id: "m5", name: "Números Complexos", desc: "Representação algébrica e trigonométrica. Operações. Raízes complexas. Fórmula de Moivre. Raízes da unidade.",
                priority: "high", subtopics: ["Forma Algébrica", "Forma Trigonométrica", "Operações com Complexos", "Fórmula de Moivre", "Raízes da Unidade", "Plano de Argand-Gauss"],
                materials: [
                    { type: "book", name: "FME Vol.6 — Complexos e Polinômios", author: "Gelson Iezzi", desc: "Teoria completa de números complexos." },
                    { type: "book", name: "Elementos da Matemática Vol.5", author: "Rufino", desc: "Complexos com exercícios desafiadores." },
                    { type: "exercise", name: "BBF no ITA — Complexos", author: "bbfnoita.com.br", desc: "Exercícios de complexos nível ITA." }
                ]
            },
            {
                id: "m6", name: "Polinômios", desc: "Definição, grau, operações. Raízes e propriedades. Teorema do Resto, D'Alembert. Relações de Girard. Fatoração.",
                priority: "high", subtopics: ["Definição e Grau", "Divisão de Polinômios", "Teorema do Resto", "Teorema de D'Alembert", "Relações de Girard", "Fatoração"],
                materials: [
                    { type: "book", name: "FME Vol.6 — Complexos e Polinômios", author: "Gelson Iezzi", desc: "Capítulos de polinômios completos." },
                    { type: "book", name: "Elementos da Matemática Vol.5", author: "Rufino", desc: "Polinômios com foco em ITA." },
                    { type: "exercise", name: "Provas ITA — Polinômios", author: "ITA", desc: "Coletânea de questões de polinômios." }
                ]
            },
            {
                id: "m7", name: "PA e PG", desc: "Progressões aritméticas e geométricas. Propriedades, soma dos termos. Soma de PG infinita. Aplicações.",
                priority: "medium", subtopics: ["PA — Termo Geral e Soma", "PG — Termo Geral e Soma", "PG Infinita", "Propriedades", "Aplicações"],
                materials: [
                    { type: "book", name: "FME Vol.4 — Sequências", author: "Gelson Iezzi", desc: "Progressões aritméticas e geométricas." },
                    { type: "book", name: "Noções de Matemática Vol.4", author: "Aref Neto", desc: "Sequências e séries." },
                    { type: "exercise", name: "Provas ITA — Sequências", author: "ITA", desc: "Questões de PA e PG do ITA." }
                ]
            },
            {
                id: "m8", name: "Matrizes e Determinantes", desc: "Tipos de matrizes, operações, inversa. Determinantes: Sarrus, Laplace, propriedades. Sistemas lineares: Cramer e escalonamento.",
                priority: "high", subtopics: ["Tipos de Matrizes", "Operações com Matrizes", "Matriz Inversa", "Determinantes (Sarrus)", "Teorema de Laplace", "Sistemas Lineares", "Regra de Cramer", "Escalonamento"],
                materials: [
                    { type: "book", name: "FME Vol.4 — Matrizes", author: "Gelson Iezzi", desc: "Matrizes, determinantes e sistemas." },
                    { type: "book", name: "Elementos da Matemática Vol.4", author: "Rufino", desc: "Álgebra linear elementar." },
                    { type: "exercise", name: "Provas ITA — Matrizes", author: "ITA", desc: "Questões de matrizes e determinantes." }
                ]
            },
            {
                id: "m9", name: "Análise Combinatória", desc: "Princípio Fundamental da Contagem. Arranjos, permutações e combinações simples e com repetição. Fatorial.",
                priority: "high", subtopics: ["Princípio Fundamental", "Fatorial", "Permutações", "Arranjos", "Combinações", "Com Repetição"],
                materials: [
                    { type: "book", name: "FME Vol.5 — Combinatória", author: "Gelson Iezzi", desc: "Análise combinatória completa." },
                    { type: "book", name: "Elementos da Matemática Vol.2", author: "Rufino", desc: "Combinatória avançada." },
                    { type: "exercise", name: "Provas ITA — Combinatória", author: "ITA", desc: "Questões de combinatória do ITA." }
                ]
            },
            {
                id: "m10", name: "Probabilidade", desc: "Espaço amostral, eventos. Probabilidade condicional. Eventos independentes. Teorema de Bayes. Binômio de Newton.",
                priority: "high", subtopics: ["Espaço Amostral", "Eventos", "Probabilidade Condicional", "Eventos Independentes", "Teorema de Bayes", "Binômio de Newton"],
                materials: [
                    { type: "book", name: "FME Vol.5 — Probabilidade", author: "Gelson Iezzi", desc: "Probabilidade e estatística." },
                    { type: "exercise", name: "BBF no ITA — Probabilidade", author: "bbfnoita.com.br", desc: "Lista de probabilidade nível ITA." }
                ]
            },
            {
                id: "m11", name: "Geometria Plana", desc: "Triângulos, quadriláteros, polígonos, circunferências. Áreas, perímetros. Semelhança, congruência. Teoremas clássicos.",
                priority: "high", subtopics: ["Triângulos", "Quadriláteros", "Polígonos Regulares", "Circunferência", "Áreas", "Semelhança e Congruência", "Teorema de Pitágoras"],
                materials: [
                    { type: "book", name: "FME Vol.9 — Geometria Plana", author: "Gelson Iezzi", desc: "Geometria plana completa." },
                    { type: "book", name: "Elementos da Matemática Vol.7", author: "Rufino", desc: "Geometria plana avançada." },
                    { type: "exercise", name: "BBF no ITA — Geometria Plana", author: "bbfnoita.com.br", desc: "Lista gratuita de geometria." }
                ]
            },
            {
                id: "m12", name: "Geometria Espacial", desc: "Prismas, pirâmides, cilindros, cones, esferas. Volumes, áreas laterais e totais. Posições relativas.",
                priority: "medium", subtopics: ["Prismas", "Pirâmides", "Cilindros", "Cones", "Esferas", "Troncos", "Volumes e Áreas"],
                materials: [
                    { type: "book", name: "FME Vol.10 — Geometria Espacial", author: "Gelson Iezzi", desc: "Geometria espacial completa." },
                    { type: "exercise", name: "Provas ITA — Geometria Espacial", author: "ITA", desc: "Questões de geometria espacial." }
                ]
            },
            {
                id: "m13", name: "Geometria Analítica", desc: "Coordenadas cartesianas, distância, equações da reta e circunferência. Cônicas: elipse, hipérbole, parábola. Lugares geométricos.",
                priority: "high", subtopics: ["Distância entre Pontos", "Equação da Reta", "Paralelismo e Perpendicularismo", "Circunferência", "Elipse", "Hipérbole", "Parábola", "Lugares Geométricos"],
                materials: [
                    { type: "book", name: "FME Vol.7 — Geometria Analítica", author: "Gelson Iezzi", desc: "Geometria analítica com cônicas." },
                    { type: "book", name: "Elementos da Matemática Vol.6", author: "Rufino", desc: "Geometria analítica avançada." },
                    { type: "exercise", name: "BBF no ITA — Geometria Analítica", author: "bbfnoita.com.br", desc: "Exercícios de analítica nível ITA." }
                ]
            },
            {
                id: "m14", name: "Equações e Inequações", desc: "Equações polinomiais, irracionais, modulares, exponenciais. Inequações de 1º e 2º grau. Sinais.",
                priority: "medium", subtopics: ["Eq. Polinomiais", "Eq. Irracionais", "Eq. Modulares", "Inequações", "Estudo de Sinais"],
                materials: [
                    { type: "book", name: "FME Vol.1", author: "Gelson Iezzi", desc: "Equações e inequações fundamentais." },
                    { type: "exercise", name: "Provas ITA — Equações", author: "ITA", desc: "Questões de equações do ITA." }
                ]
            },
            {
                id: "m15", name: "Limites e Derivadas", desc: "Noção intuitiva de limite. Limite de funções. Continuidade. Derivada como taxa de variação. Regras de derivação.",
                priority: "high", subtopics: ["Noção de Limite", "Limites Laterais", "Continuidade", "Derivada (Definição)", "Regras de Derivação", "Máximos e Mínimos", "Taxa de Variação"],
                materials: [
                    { type: "book", name: "Cálculo Vol.1", author: "James Stewart", desc: "Referência completa de cálculo diferencial." },
                    { type: "book", name: "Elementos da Matemática Vol.8", author: "Rufino", desc: "Limites e derivadas com foco em ITA." },
                    { type: "exercise", name: "Provas ITA — Cálculo", author: "ITA", desc: "Questões de limites e derivadas." },
                    { type: "video", name: "Cálculo para ITA/IME", author: "YouTube", desc: "Playlists de cálculo diferencial para vestibular." }
                ]
            },
            {
                id: "m16", name: "Integrais", desc: "Integral definida e indefinida. Teorema Fundamental do Cálculo. Técnicas de integração. Área sob a curva.",
                priority: "medium", subtopics: ["Integral Indefinida", "Integral Definida", "Teorema Fundamental", "Substituição", "Integração por Partes", "Área sob Curvas"],
                materials: [
                    { type: "book", name: "Cálculo Vol.1", author: "James Stewart", desc: "Integração com exercícios." },
                    { type: "exercise", name: "Provas ITA — Integrais", author: "ITA", desc: "Questões de integrais do ITA." }
                ]
            },
            {
                id: "m17", name: "Somatórios e Produtórios", desc: "Notação sigma e pi. Propriedades dos somatórios. Telescópio. Séries finitas e infinitas.",
                priority: "medium", subtopics: ["Notação Sigma", "Propriedades", "Soma Telescópica", "Séries Finitas", "Notação Pi"],
                materials: [
                    { type: "book", name: "Elementos da Matemática Vol.2", author: "Rufino", desc: "Somatórios e séries com foco ITA." },
                    { type: "exercise", name: "Provas ITA — Somatórios", author: "ITA", desc: "Questões de somatórios." }
                ]
            },
            {
                id: "m18", name: "Binômio de Newton", desc: "Desenvolvimento binomial. Coeficientes binomiais. Triângulo de Pascal. Termo geral.",
                priority: "high", subtopics: ["Coeficientes Binomiais", "Triângulo de Pascal", "Termo Geral", "Propriedades dos Binomiais", "Aplicações"],
                materials: [
                    { type: "book", name: "FME Vol.5", author: "Gelson Iezzi", desc: "Binômio de Newton." },
                    { type: "exercise", name: "Provas ITA — Binômio", author: "ITA", desc: "Questões de binômio de Newton." }
                ]
            },
        ]
    },
    fisica: {
        name: "Física", icon: "⚡", color: "#f59e0b",
        desc: "12 questões na 1ª fase e discursivas na 2ª fase. Exige profundidade em todos os temas.",
        topics: [
            {
                id: "f1", name: "Cinemática", desc: "Movimento retilíneo uniforme e uniformemente variado. Vetores. Lançamentos. Movimento circular.",
                priority: "high", subtopics: ["MRU", "MRUV", "Vetores", "Lançamento Oblíquo", "Movimento Circular", "Cinemática Vetorial"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou, Gualter, Newton", desc: "Cinemática escalar e vetorial completa." },
                    { type: "book", name: "Fundamentos da Física Vol.1", author: "Ramalho, Ferraro, Toledo", desc: "Mecânica: cinemática." },
                    { type: "exercise", name: "Provas ITA — Cinemática", author: "ITA", desc: "Questões de cinemática do ITA." }
                ]
            },
            {
                id: "f2", name: "Dinâmica", desc: "Leis de Newton. Forças de atrito, normal, tração. Plano inclinado. Dinâmica no movimento circular.",
                priority: "high", subtopics: ["Leis de Newton", "Força de Atrito", "Plano Inclinado", "Dinâmica Circular", "Sistemas de Corpos"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou, Gualter, Newton", desc: "Dinâmica completa." },
                    { type: "book", name: "Física Vol.1", author: "Nussenzveig", desc: "Dinâmica aprofundada (nível universitário)." },
                    { type: "exercise", name: "Provas ITA — Dinâmica", author: "ITA", desc: "Questões de dinâmica do ITA." }
                ]
            },
            {
                id: "f3", name: "Trabalho e Energia", desc: "Trabalho de uma força. Energia cinética e potencial. Conservação da energia mecânica. Potência.",
                priority: "high", subtopics: ["Trabalho", "Energia Cinética", "Energia Potencial", "Conservação de Energia", "Potência", "Rendimento"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou", desc: "Trabalho e energia." },
                    { type: "book", name: "Sears & Zemansky Vol.1", author: "Young & Freedman", desc: "Trabalho e energia." }
                ]
            },
            {
                id: "f4", name: "Gravitação Universal", desc: "Lei da gravitação. Leis de Kepler. Campo gravitacional. Energia potencial gravitacional. Satélites.",
                priority: "medium", subtopics: ["Lei da Gravitação", "Leis de Kepler", "Campo Gravitacional", "Velocidade Orbital", "Energia Gravitacional"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou", desc: "Gravitação universal." },
                    { type: "exercise", name: "Provas ITA — Gravitação", author: "ITA", desc: "Questões de gravitação." }
                ]
            },
            {
                id: "f5", name: "Termodinâmica", desc: "Temperatura, calor, dilatação. Gases ideais. Leis da termodinâmica. Máquinas térmicas. Ciclo de Carnot.",
                priority: "high", subtopics: ["Temperatura e Calor", "Dilatação", "Gases Ideais", "1ª Lei da Termodinâmica", "2ª Lei da Termodinâmica", "Máquinas Térmicas", "Ciclo de Carnot"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.2", author: "Helou", desc: "Termodinâmica completa." },
                    { type: "book", name: "Sears & Zemansky Vol.2", author: "Young & Freedman", desc: "Termodinâmica aprofundada." },
                    { type: "exercise", name: "BBF no ITA — Termodinâmica", author: "bbfnoita.com.br", desc: "Exercícios de termodinâmica." }
                ]
            },
            {
                id: "f6", name: "Ondulatória", desc: "Ondas mecânicas e eletromagnéticas. Reflexão, refração, difração, interferência. Som. Efeito Doppler.",
                priority: "medium", subtopics: ["Ondas Mecânicas", "Reflexão e Refração", "Difração", "Interferência", "Ondas Sonoras", "Efeito Doppler"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.2", author: "Helou", desc: "Ondulatória e acústica." },
                    { type: "exercise", name: "Provas ITA — Ondulatória", author: "ITA", desc: "Questões de ondulatória." }
                ]
            },
            {
                id: "f7", name: "Óptica Geométrica", desc: "Reflexão, refração, espelhos e lentes. Instrumentos ópticos. Equação dos fabricantes de lentes.",
                priority: "medium", subtopics: ["Reflexão", "Refração (Lei de Snell)", "Espelhos Planos e Esféricos", "Lentes", "Instrumentos Ópticos"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.2", author: "Helou", desc: "Óptica geométrica." },
                    { type: "exercise", name: "Provas ITA — Óptica", author: "ITA", desc: "Questões de óptica." }
                ]
            },
            {
                id: "f8", name: "Eletrostática", desc: "Carga elétrica. Lei de Coulomb. Campo elétrico. Potencial elétrico. Capacitores.",
                priority: "high", subtopics: ["Carga Elétrica", "Lei de Coulomb", "Campo Elétrico", "Potencial Elétrico", "Capacitores", "Energia Eletrostática"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.3", author: "Helou", desc: "Eletrostática completa." },
                    { type: "book", name: "Sears & Zemansky Vol.3", author: "Young & Freedman", desc: "Eletrostática aprofundada." },
                    { type: "exercise", name: "BBF no ITA — Eletrostática", author: "bbfnoita.com.br", desc: "Exercícios de eletrostática." }
                ]
            },
            {
                id: "f9", name: "Eletrodinâmica", desc: "Corrente elétrica. Resistência e Lei de Ohm. Circuitos elétricos. Potência elétrica. Leis de Kirchhoff.",
                priority: "high", subtopics: ["Corrente Elétrica", "Lei de Ohm", "Resistores", "Circuitos", "Leis de Kirchhoff", "Potência Elétrica"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.3", author: "Helou", desc: "Eletrodinâmica e circuitos." },
                    { type: "exercise", name: "Provas ITA — Eletrodinâmica", author: "ITA", desc: "Questões de circuitos." }
                ]
            },
            {
                id: "f10", name: "Magnetismo", desc: "Campo magnético. Força magnética. Lei de Ampère. Indução eletromagnética. Lei de Faraday e Lenz.",
                priority: "high", subtopics: ["Campo Magnético", "Força Magnética", "Lei de Ampère", "Indução Eletromagnética", "Lei de Faraday", "Lei de Lenz"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.3", author: "Helou", desc: "Magnetismo e eletromagnetismo." },
                    { type: "exercise", name: "Provas ITA — Magnetismo", author: "ITA", desc: "Questões de magnetismo." }
                ]
            },
            {
                id: "f11", name: "MHS", desc: "Movimento harmônico simples. Pêndulo simples. Sistemas massa-mola. Energia no MHS.",
                priority: "medium", subtopics: ["Equação do MHS", "Pêndulo Simples", "Sistema Massa-Mola", "Energia no MHS", "Superposição"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou", desc: "MHS e oscilações." },
                    { type: "exercise", name: "Provas ITA — MHS", author: "ITA", desc: "Questões de MHS." }
                ]
            },
            {
                id: "f12", name: "Física Moderna", desc: "Efeito fotoelétrico. Dualidade onda-partícula. Radiação de corpo negro. Relatividade restrita (noções).",
                priority: "low", subtopics: ["Efeito Fotoelétrico", "Dualidade Onda-Partícula", "Corpo Negro", "Relatividade Restrita", "Modelo Atômico de Bohr"],
                materials: [
                    { type: "book", name: "Física Moderna", author: "Tipler", desc: "Física moderna introdutória." },
                    { type: "exercise", name: "Provas ITA — Física Moderna", author: "ITA", desc: "Questões de física moderna." }
                ]
            },
            {
                id: "f13", name: "Impulso e Quantidade de Movimento", desc: "Impulso. Quantidade de movimento linear. Conservação. Colisões elásticas e inelásticas. Centro de massa.",
                priority: "high", subtopics: ["Impulso", "Quantidade de Movimento", "Conservação do Momento", "Colisões Elásticas", "Colisões Inelásticas", "Centro de Massa", "Coeficiente de Restituição"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou, Gualter, Newton", desc: "Impulso e quantidade de movimento." },
                    { type: "book", name: "Sears & Zemansky Vol.1", author: "Young & Freedman", desc: "Momento e colisões." },
                    { type: "exercise", name: "Provas ITA — Impulso", author: "ITA", desc: "Questões de impulso e colisões." }
                ]
            },
            {
                id: "f14", name: "Estática", desc: "Equilíbrio de ponto material e corpo extenso. Torque. Alavancas. Centro de gravidade.",
                priority: "medium", subtopics: ["Equilíbrio de Ponto Material", "Equilíbrio de Corpo Extenso", "Torque", "Condições de Equilíbrio", "Alavancas", "Centro de Gravidade"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou", desc: "Estática e equilíbrio." },
                    { type: "exercise", name: "Provas ITA — Estática", author: "ITA", desc: "Questões de estática." }
                ]
            },
            {
                id: "f15", name: "Hidrostática", desc: "Pressão. Pressão atmosférica. Teorema de Stevin. Princípio de Pascal. Empuxo (Arquimedes). Vasos comunicantes.",
                priority: "high", subtopics: ["Pressão", "Pressão Atmosférica", "Teorema de Stevin", "Princípio de Pascal", "Empuxo", "Princípio de Arquimedes", "Vasos Comunicantes"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.1", author: "Helou", desc: "Hidrostática completa." },
                    { type: "book", name: "Fundamentos da Física Vol.1", author: "Ramalho", desc: "Mecânica dos fluidos." },
                    { type: "exercise", name: "Provas ITA — Hidrostática", author: "ITA", desc: "Questões de hidrostática." }
                ]
            },
            {
                id: "f16", name: "Calorimetria e Mudança de Fase", desc: "Calor sensível e latente. Equação fundamental da calorimetria. Curvas de aquecimento. Diagrama de fases.",
                priority: "medium", subtopics: ["Calor Sensível", "Calor Latente", "Calorimetria", "Curva de Aquecimento", "Mudanças de Estado", "Diagrama de Fases"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.2", author: "Helou", desc: "Calorimetria e mudanças de fase." },
                    { type: "exercise", name: "Provas ITA — Calorimetria", author: "ITA", desc: "Questões de calorimetria." }
                ]
            },
            {
                id: "f17", name: "Dilatação Térmica", desc: "Dilatação linear, superficial e volumétrica. Dilatação dos líquidos. Dilatação anômala da água.",
                priority: "low", subtopics: ["Dilatação Linear", "Dilatação Superficial", "Dilatação Volumétrica", "Dilatação dos Líquidos", "Dilatação Anômala da Água"],
                materials: [
                    { type: "book", name: "Tópicos de Física Vol.2", author: "Helou", desc: "Dilatação térmica." },
                    { type: "exercise", name: "Provas ITA — Dilatação", author: "ITA", desc: "Questões de dilatação." }
                ]
            },
            {
                id: "f18", name: "Hidrodinâmica", desc: "Equação da continuidade. Equação de Bernoulli. Tubo de Venturi. Aplicações.",
                priority: "low", subtopics: ["Equação da Continuidade", "Equação de Bernoulli", "Tubo de Venturi", "Tubo de Pitot", "Aplicações"],
                materials: [
                    { type: "book", name: "Sears & Zemansky Vol.2", author: "Young & Freedman", desc: "Mecânica dos fluidos." },
                    { type: "exercise", name: "Provas ITA — Fluidos", author: "ITA", desc: "Questões de fluidos em movimento." }
                ]
            },
        ]
    },
    quimica: {
        name: "Química", icon: "🧪", color: "#10b981",
        desc: "12 questões na 1ª fase e discursivas na 2ª fase. Equilíbrio e termoquímica são muito cobrados.",
        topics: [
            {
                id: "q1", name: "Modelos Atômicos", desc: "Dalton, Thomson, Rutherford, Bohr. Números quânticos. Configuração eletrônica. Propriedades periódicas.",
                priority: "medium", subtopics: ["Modelos Atômicos", "Números Quânticos", "Configuração Eletrônica", "Tabela Periódica", "Propriedades Periódicas"],
                materials: [
                    { type: "book", name: "Química Geral Vol.1", author: "Feltre", desc: "Estrutura atômica e tabela periódica." },
                    { type: "book", name: "Princípios de Química", author: "Atkins", desc: "Modelos atômicos aprofundados." }
                ]
            },
            {
                id: "q2", name: "Ligações Químicas", desc: "Iônica, covalente, metálica. Geometria molecular. Polaridade. Forças intermoleculares.",
                priority: "medium", subtopics: ["Ligação Iônica", "Ligação Covalente", "Ligação Metálica", "Geometria Molecular", "Polaridade", "Forças Intermoleculares"],
                materials: [
                    { type: "book", name: "Química Geral Vol.1", author: "Feltre", desc: "Ligações químicas completo." },
                    { type: "exercise", name: "Provas ITA — Ligações", author: "ITA", desc: "Questões de ligações químicas." }
                ]
            },
            {
                id: "q3", name: "Estequiometria", desc: "Mol, massa molar. Balanceamento. Cálculos estequiométricos. Reagente limitante. Pureza e rendimento.",
                priority: "high", subtopics: ["Mol e Massa Molar", "Balanceamento", "Cálculos Estequiométricos", "Reagente Limitante", "Pureza", "Rendimento"],
                materials: [
                    { type: "book", name: "Química Geral Vol.1", author: "Feltre", desc: "Estequiometria completa." },
                    { type: "exercise", name: "Provas ITA — Estequiometria", author: "ITA", desc: "Questões de estequiometria." }
                ]
            },
            {
                id: "q4", name: "Gases", desc: "Leis dos gases. Equação de Clapeyron. Misturas gasosas. Pressão parcial (Lei de Dalton).",
                priority: "medium", subtopics: ["Lei de Boyle", "Lei de Charles", "Equação de Clapeyron", "Misturas Gasosas", "Lei de Dalton"],
                materials: [
                    { type: "book", name: "Química Geral Vol.1", author: "Feltre", desc: "Estudo dos gases." },
                    { type: "exercise", name: "Provas ITA — Gases", author: "ITA", desc: "Questões de gases." }
                ]
            },
            {
                id: "q5", name: "Termoquímica", desc: "Entalpia, variação de entalpia. Lei de Hess. Energia de ligação. Calorimetria.",
                priority: "high", subtopics: ["Entalpia", "Reações Exo/Endotérmicas", "Lei de Hess", "Energia de Ligação", "Calorimetria"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Termoquímica completa." },
                    { type: "exercise", name: "BBF no ITA — Termoquímica", author: "bbfnoita.com.br", desc: "Lista de termoquímica." }
                ]
            },
            {
                id: "q6", name: "Cinética Química", desc: "Velocidade de reação. Fatores que alteram a velocidade. Lei de velocidade. Energia de ativação.",
                priority: "high", subtopics: ["Velocidade de Reação", "Fatores de Velocidade", "Lei de Velocidade", "Energia de Ativação", "Catalisadores"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Cinética química." },
                    { type: "exercise", name: "Provas ITA — Cinética", author: "ITA", desc: "Questões de cinética." }
                ]
            },
            {
                id: "q7", name: "Equilíbrio Químico", desc: "Constante de equilíbrio (Kc, Kp). Princípio de Le Chatelier. Equilíbrio heterogêneo.",
                priority: "high", subtopics: ["Constante Kc e Kp", "Le Chatelier", "Equilíbrio Heterogêneo", "Grau de Equilíbrio", "Deslocamento"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Equilíbrio químico." },
                    { type: "exercise", name: "BBF no ITA — Equilíbrio", author: "bbfnoita.com.br", desc: "Lista de equilíbrio químico." }
                ]
            },
            {
                id: "q8", name: "Equilíbrio Iônico", desc: "pH e pOH. Hidrólise. Solução tampão. Produto de solubilidade (Kps).",
                priority: "high", subtopics: ["pH e pOH", "Hidrólise", "Solução Tampão", "Kps", "Indicadores"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Equilíbrio iônico." },
                    { type: "exercise", name: "BBF no ITA — Equilíbrio Iônico", author: "bbfnoita.com.br", desc: "Lista de equilíbrio iônico." }
                ]
            },
            {
                id: "q9", name: "Eletroquímica", desc: "Pilhas e baterias. Potencial de redução. Eletrólise. Leis de Faraday.",
                priority: "high", subtopics: ["Pilhas", "Potencial de Redução", "Eletrólise", "Leis de Faraday", "Corrosão"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Eletroquímica completa." },
                    { type: "exercise", name: "BBF no ITA — Eletroquímica", author: "bbfnoita.com.br", desc: "Lista de eletroquímica." }
                ]
            },
            {
                id: "q10", name: "Soluções", desc: "Classificação. Concentração, molalidade, fração molar. Diluição e mistura. Propriedades coligativas.",
                priority: "medium", subtopics: ["Tipos de Soluções", "Concentração", "Molalidade", "Diluição", "Propriedades Coligativas", "Pressão Osmótica"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Soluções e propriedades coligativas." },
                    { type: "exercise", name: "Provas ITA — Soluções", author: "ITA", desc: "Questões de soluções." }
                ]
            },
            {
                id: "q11", name: "Química Orgânica", desc: "Cadeias carbônicas, funções orgânicas, nomenclatura, isomeria. Reações orgânicas: adição, substituição, eliminação.",
                priority: "high", subtopics: ["Cadeias Carbônicas", "Funções Orgânicas", "Nomenclatura IUPAC", "Isomeria", "Reações de Adição", "Reações de Substituição", "Reações de Eliminação"],
                materials: [
                    { type: "book", name: "Química Orgânica Vol.3", author: "Feltre", desc: "Química orgânica completa." },
                    { type: "book", name: "Química Orgânica", author: "Martha Reis", desc: "Orgânica com foco em vestibular." },
                    { type: "exercise", name: "Provas ITA — Orgânica", author: "ITA", desc: "Questões de química orgânica." }
                ]
            },
            {
                id: "q12", name: "Reações Inorgânicas", desc: "Ácidos, bases, sais, óxidos. Reações de neutralização, combustão, oxirredução.",
                priority: "medium", subtopics: ["Ácidos e Bases", "Sais", "Óxidos", "Neutralização", "Combustão", "Oxirredução"],
                materials: [
                    { type: "book", name: "Química Geral Vol.1", author: "Feltre", desc: "Reações inorgânicas." },
                    { type: "exercise", name: "Provas ITA — Inorgânica", author: "ITA", desc: "Questões de inorgânica." }
                ]
            },
            {
                id: "q13", name: "Radioatividade", desc: "Emissões alfa, beta e gama. Meia-vida. Fissão e fusão nuclear. Cinética de decaimento.",
                priority: "low", subtopics: ["Emissões Radioativas", "Leis da Radioatividade", "Meia-Vida", "Fissão Nuclear", "Fusão Nuclear", "Cinética de Decaimento"],
                materials: [
                    { type: "book", name: "Química Geral Vol.1", author: "Feltre", desc: "Radioatividade." },
                    { type: "exercise", name: "Provas ITA — Radioatividade", author: "ITA", desc: "Questões de radioatividade." }
                ]
            },
            {
                id: "q14", name: "Polímeros", desc: "Polímeros naturais e sintéticos. Poliadição e policondensação. Borrachas, plásticos, fibras.",
                priority: "low", subtopics: ["Polímeros de Adição", "Polímeros de Condensação", "Borrachas", "Plásticos", "Fibras Sintéticas", "Copolímeros"],
                materials: [
                    { type: "book", name: "Química Orgânica Vol.3", author: "Feltre", desc: "Polímeros e macromoléculas." },
                    { type: "exercise", name: "Provas ITA — Polímeros", author: "ITA", desc: "Questões de polímeros." }
                ]
            },
            {
                id: "q15", name: "Isomeria", desc: "Isomeria plana (cadeia, posição, função, metameria, tautomeria). Isomeria espacial (geométrica e óptica).",
                priority: "high", subtopics: ["Isomeria de Cadeia", "Isomeria de Posição", "Isomeria de Função", "Metameria", "Tautomeria", "Isomeria Geométrica (cis-trans)", "Isomeria Óptica"],
                materials: [
                    { type: "book", name: "Química Orgânica Vol.3", author: "Feltre", desc: "Isomeria completa." },
                    { type: "book", name: "Química Orgânica", author: "Martha Reis", desc: "Isomeria com foco em vestibular." },
                    { type: "exercise", name: "Provas ITA — Isomeria", author: "ITA", desc: "Questões de isomeria." }
                ]
            },
            {
                id: "q16", name: "Propriedades Coligativas", desc: "Tonoscopia, ebulioscopia, crioscopia e osmometria. Pressão osmótica. Efeito sobre soluções eletrolíticas.",
                priority: "medium", subtopics: ["Tonoscopia", "Ebulioscopia", "Crioscopia", "Osmometria", "Pressão Osmótica", "Efeito de Van't Hoff"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Propriedades coligativas." },
                    { type: "exercise", name: "Provas ITA — Coligativas", author: "ITA", desc: "Questões de propriedades coligativas." }
                ]
            },
            {
                id: "q17", name: "Bioquímica", desc: "Carboidratos, lipídeos, aminoácidos e proteínas. Enzimas. Ácidos nucléicos (DNA e RNA).",
                priority: "low", subtopics: ["Carboidratos", "Lipídeos", "Aminoácidos", "Proteínas", "Enzimas", "DNA e RNA"],
                materials: [
                    { type: "book", name: "Química Orgânica Vol.3", author: "Feltre", desc: "Bioquímica orgânica." },
                    { type: "exercise", name: "Provas ITA — Bioquímica", author: "ITA", desc: "Questões de bioquímica." }
                ]
            },
            {
                id: "q18", name: "Dispersões e Coloides", desc: "Soluções verdadeiras, coloidais e suspensões. Efeito Tyndall. Movimento Browniano. Diálise.",
                priority: "low", subtopics: ["Tipos de Dispersão", "Soluções Coloidais", "Efeito Tyndall", "Movimento Browniano", "Diálise"],
                materials: [
                    { type: "book", name: "Química Geral Vol.2", author: "Feltre", desc: "Dispersões e coloides." },
                    { type: "exercise", name: "Provas ITA — Coloides", author: "ITA", desc: "Questões de coloides." }
                ]
            },
        ]
    },
    portugues: {
        name: "Português", icon: "📝", color: "#ec4899",
        desc: "Provas discursivas na 2ª fase com interpretação, gramática, literatura e redação.",
        topics: [
            {
                id: "p1", name: "Interpretação de Texto", desc: "Leitura e análise de textos. Inferência. Tipologia textual. Gêneros textuais.",
                priority: "high", subtopics: ["Análise de Texto", "Inferência", "Tipologia Textual", "Gêneros Textuais", "Coesão e Coerência"],
                materials: [
                    { type: "book", name: "Interpretação de Textos", author: "Vários autores", desc: "Prática de interpretação de textos." },
                    { type: "exercise", name: "Provas ITA — Interpretação", author: "ITA", desc: "Textos de provas anteriores." }
                ]
            },
            {
                id: "p2", name: "Gramática — Morfologia", desc: "Classes de palavras. Flexão nominal e verbal. Processos de formação de palavras.",
                priority: "medium", subtopics: ["Substantivos", "Adjetivos", "Verbos", "Pronomes", "Advérbios", "Conjunções", "Formação de Palavras"],
                materials: [
                    { type: "book", name: "Gramática Normativa", author: "Rocha Lima", desc: "Gramática completa da língua portuguesa." },
                    { type: "exercise", name: "Provas ITA — Gramática", author: "ITA", desc: "Questões de gramática." }
                ]
            },
            {
                id: "p3", name: "Gramática — Sintaxe", desc: "Análise sintática. Período composto. Concordância, regência, crase. Pontuação.",
                priority: "medium", subtopics: ["Análise Sintática", "Período Composto", "Concordância", "Regência", "Crase", "Pontuação"],
                materials: [
                    { type: "book", name: "Gramática Normativa", author: "Rocha Lima", desc: "Sintaxe completa." },
                    { type: "exercise", name: "Provas ITA — Sintaxe", author: "ITA", desc: "Questões de sintaxe." }
                ]
            },
            {
                id: "p4", name: "Literatura Brasileira", desc: "Trovadorismo ao Modernismo. Três gerações modernistas. Tendências contemporâneas.",
                priority: "medium", subtopics: ["Trovadorismo", "Barroco", "Arcadismo", "Romantismo", "Realismo/Naturalismo", "Parnasianismo", "Simbolismo", "Pré-Modernismo", "Modernismo (3 gerações)", "Contemporâneo"],
                materials: [
                    { type: "book", name: "Literatura Brasileira", author: "William Cereja", desc: "Literatura completa com contexto histórico." },
                    { type: "exercise", name: "Provas ITA — Literatura", author: "ITA", desc: "Questões de literatura." }
                ]
            },
            {
                id: "p5", name: "Redação", desc: "Dissertação argumentativa. Estrutura, coesão, coerência. Repertório sociocultural.",
                priority: "high", subtopics: ["Estrutura Dissertativa", "Tese e Argumentação", "Coesão e Coerência", "Repertório", "Proposta de Intervenção"],
                materials: [
                    { type: "book", name: "Redação para Vestibulares", author: "Vários", desc: "Técnicas de redação dissertativa." },
                    { type: "exercise", name: "Redações ITA anteriores", author: "ITA", desc: "Temas de redação de anos anteriores." }
                ]
            },
            {
                id: "p6", name: "Figuras de Linguagem", desc: "Metáfora, metonímia, antítese, ironia, hipérbole, prosopopeia, sinestesia e outras.",
                priority: "low", subtopics: ["Metáfora", "Metonímia", "Antítese", "Ironia", "Hipérbole", "Prosopopeia", "Sinestesia", "Eufemismo"],
                materials: [
                    { type: "book", name: "Gramática Normativa", author: "Rocha Lima", desc: "Figuras de linguagem." },
                    { type: "exercise", name: "Provas ITA — Figuras", author: "ITA", desc: "Questões com figuras de linguagem." }
                ]
            },
            {
                id: "p7", name: "Semântica", desc: "Significação das palavras. Sinonímia, antonímia, polissemia, homonímia, paronímia. Denotação e conotação.",
                priority: "medium", subtopics: ["Sinonímia", "Antonímia", "Polissemia", "Homonímia", "Paronímia", "Denotação e Conotação", "Ambiguidade"],
                materials: [
                    { type: "book", name: "Gramática Normativa", author: "Rocha Lima", desc: "Semântica da língua portuguesa." },
                    { type: "exercise", name: "Provas ITA — Semântica", author: "ITA", desc: "Questões de semântica e significação." }
                ]
            },
            {
                id: "p8", name: "Variação Linguística", desc: "Variações regionais, sociais, históricas e situacionais. Registro formal e informal. Norma culta.",
                priority: "low", subtopics: ["Variação Regional", "Variação Social", "Variação Histórica", "Variação Situacional", "Norma Culta", "Registro Formal/Informal"],
                materials: [
                    { type: "book", name: "Gramática Normativa", author: "Rocha Lima", desc: "Variação linguística." },
                    { type: "exercise", name: "Provas ITA — Variação", author: "ITA", desc: "Questões de variação linguística." }
                ]
            },
            {
                id: "p9", name: "Literatura Portuguesa", desc: "Trovadorismo ao Modernismo português. Fernando Pessoa, Camões, Eça de Queirós, José Saramago.",
                priority: "low", subtopics: ["Trovadorismo Português", "Classicismo (Camões)", "Romantismo Português", "Realismo (Eça de Queirós)", "Fernando Pessoa", "Modernismo Português"],
                materials: [
                    { type: "book", name: "Literatura Portuguesa", author: "William Cereja", desc: "Literatura portuguesa com contexto histórico." },
                    { type: "exercise", name: "Provas ITA — Lit. Portuguesa", author: "ITA", desc: "Questões de literatura portuguesa." }
                ]
            },
            {
                id: "p10", name: "Funções da Linguagem", desc: "Emotiva, referencial, conativa, fática, metalinguística e poética. Identificação em textos.",
                priority: "medium", subtopics: ["Função Emotiva", "Função Referencial", "Função Conativa", "Função Fática", "Função Metalinguística", "Função Poética"],
                materials: [
                    { type: "book", name: "Gramática Normativa", author: "Rocha Lima", desc: "Funções da linguagem." },
                    { type: "exercise", name: "Provas ITA — Funções", author: "ITA", desc: "Questões de funções da linguagem." }
                ]
            },
            {
                id: "p11", name: "Versificação e Poesia", desc: "Estrutura do poema. Métrica, rima, ritmo. Escansão. Versos livres e regulares.",
                priority: "low", subtopics: ["Métrica", "Rima", "Ritmo", "Escansão", "Verso Livre", "Formas Fixas (Soneto)"],
                materials: [
                    { type: "book", name: "Literatura Brasileira", author: "William Cereja", desc: "Versificação e análise poética." },
                    { type: "exercise", name: "Provas ITA — Poesia", author: "ITA", desc: "Questões de análise poética." }
                ]
            },
            {
                id: "p12", name: "Análise de Textos Argumentativos", desc: "Identificação de tese, argumentos, estratégias argumentativas. Análise crítica e contra-argumentação.",
                priority: "high", subtopics: ["Identificação de Tese", "Tipos de Argumento", "Estratégias Argumentativas", "Contra-Argumentação", "Falácias Lógicas"],
                materials: [
                    { type: "book", name: "Argumentação e Linguagem", author: "Koch", desc: "Teoria da argumentação aplicada a textos." },
                    { type: "exercise", name: "Provas ITA — Argumentação", author: "ITA", desc: "Questões de análise argumentativa." }
                ]
            },
        ]
    },
    ingles: {
        name: "Inglês", icon: "🌐", color: "#8b5cf6",
        desc: "12 questões na 1ª fase (eliminatória — nota mínima obrigatória). Foco em interpretação e gramática.",
        topics: [
            {
                id: "i1", name: "Reading Comprehension", desc: "Interpretação de textos em inglês. Inferência, vocabulário contextual, ideia principal.",
                priority: "high", subtopics: ["Main Idea", "Inference", "Vocabulary in Context", "Author's Purpose", "Text Structure"],
                materials: [
                    { type: "book", name: "Inglês para Vestibulares", author: "Vários", desc: "Prática de interpretação em inglês." },
                    { type: "exercise", name: "Provas ITA — Reading", author: "ITA", desc: "Textos de provas anteriores." },
                    { type: "link", name: "News in Levels", author: "newsinlevels.com", desc: "Notícias em níveis de inglês para prática." }
                ]
            },
            {
                id: "i2", name: "Vocabulary", desc: "Vocabulário avançado. Phrasal verbs. Collocations. Falsos cognatos. Prefixos e sufixos.",
                priority: "high", subtopics: ["Phrasal Verbs", "Collocations", "False Cognates", "Prefixes & Suffixes", "Idiomatic Expressions"],
                materials: [
                    { type: "book", name: "English Vocabulary in Use — Advanced", author: "Cambridge", desc: "Vocabulário avançado do inglês." },
                    { type: "exercise", name: "Provas ITA — Vocabulary", author: "ITA", desc: "Questões de vocabulário." }
                ]
            },
            {
                id: "i3", name: "Grammar", desc: "Verb tenses, conditionals, passive voice, reported speech, articles, prepositions, connectors.",
                priority: "high", subtopics: ["Verb Tenses", "Conditionals", "Passive Voice", "Reported Speech", "Articles", "Prepositions", "Connectors"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Gramática completa do inglês." },
                    { type: "exercise", name: "Provas ITA — Grammar", author: "ITA", desc: "Questões de gramática." }
                ]
            },
            {
                id: "i4", name: "Much/Many & Quantifiers", desc: "Quantifiers (much, many, few, little, some, any). Countable vs uncountable nouns.",
                priority: "medium", subtopics: ["Much vs Many", "Few vs Little", "Some vs Any", "Countable Nouns", "Uncountable Nouns"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Capítulo de quantifiers." },
                    { type: "exercise", name: "Provas ITA — Quantifiers", author: "ITA", desc: "Questões de quantifiers." }
                ]
            },
            {
                id: "i5", name: "Relative Clauses", desc: "Defining and non-defining relative clauses. Relative pronouns (who, which, that, whose, where, when).",
                priority: "high", subtopics: ["Defining Clauses", "Non-defining Clauses", "Who/Which/That", "Whose", "Where/When", "Omission of Pronoun"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Relative clauses." },
                    { type: "exercise", name: "Provas ITA — Relative Clauses", author: "ITA", desc: "Questões de relative clauses." }
                ]
            },
            {
                id: "i6", name: "Conjunctions & Linking Words", desc: "Coordinating, subordinating and correlative conjunctions. Discourse markers and transitions.",
                priority: "high", subtopics: ["And/But/Or/So", "Although/Despite", "However/Nevertheless", "Therefore/Consequently", "Moreover/Furthermore", "Correlative Conjunctions"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Conjunctions e linking words." },
                    { type: "exercise", name: "Provas ITA — Conjunctions", author: "ITA", desc: "Questões de conjunctions." },
                    { type: "link", name: "BBC Learning English — Linking", author: "bbc.co.uk", desc: "Curso gratuito de conectivos." }
                ]
            },
            {
                id: "i7", name: "Modal Verbs", desc: "Can, could, may, might, must, shall, should, will, would. Obligation, permission, ability, probability.",
                priority: "high", subtopics: ["Can/Could", "May/Might", "Must/Have to", "Should/Ought to", "Will/Would", "Shall", "Modals of Deduction"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Modal verbs." },
                    { type: "exercise", name: "Provas ITA — Modals", author: "ITA", desc: "Questões de modal verbs." }
                ]
            },
            {
                id: "i8", name: "Conditionals (If Clauses)", desc: "Zero, first, second, third and mixed conditionals. Unless, provided that, as long as.",
                priority: "high", subtopics: ["Zero Conditional", "First Conditional", "Second Conditional", "Third Conditional", "Mixed Conditionals", "Unless/Provided"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Conditionals." },
                    { type: "exercise", name: "Provas ITA — Conditionals", author: "ITA", desc: "Questões de conditionals." }
                ]
            },
            {
                id: "i9", name: "Word Formation", desc: "Prefixes, suffixes, word roots. Noun, adjective, verb and adverb formation. Word families.",
                priority: "medium", subtopics: ["Prefixes (un-, re-, dis-)", "Suffixes (-tion, -ness, -ful)", "Word Roots", "Noun Formation", "Adjective Formation", "Word Families"],
                materials: [
                    { type: "book", name: "English Vocabulary in Use — Advanced", author: "Cambridge", desc: "Word formation avançado." },
                    { type: "exercise", name: "Provas ITA — Word Formation", author: "ITA", desc: "Questões de formação de palavras." }
                ]
            },
            {
                id: "i10", name: "Gerund vs Infinitive", desc: "Verbs followed by gerund, infinitive, or both. Changes in meaning. Common patterns.",
                priority: "medium", subtopics: ["Verbs + Gerund", "Verbs + Infinitive", "Verbs + Both", "Changes in Meaning", "Preposition + Gerund"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Gerund and infinitive." },
                    { type: "exercise", name: "Provas ITA — Gerund/Infinitive", author: "ITA", desc: "Questões de gerund vs infinitive." }
                ]
            },
            {
                id: "i11", name: "Comparative & Superlative", desc: "Comparative and superlative forms. Regular and irregular. As...as, the...the, more and more.",
                priority: "medium", subtopics: ["Comparative Regular", "Comparative Irregular", "Superlative", "As...As", "The...The", "Double Comparatives"],
                materials: [
                    { type: "book", name: "English Grammar in Use", author: "Raymond Murphy", desc: "Comparatives and superlatives." },
                    { type: "exercise", name: "Provas ITA — Comparatives", author: "ITA", desc: "Questões de comparatives." }
                ]
            },
            {
                id: "i12", name: "Idiomatic Expressions", desc: "Expressões idiomáticas comuns em provas. Interpretação de significados figurados.",
                priority: "medium", subtopics: ["Idioms de Corpo", "Idioms de Animais", "Idioms de Cores", "Expressões Formais", "Slang vs Formal"],
                materials: [
                    { type: "book", name: "English Vocabulary in Use — Advanced", author: "Cambridge", desc: "Expressões idiomáticas avançadas." },
                    { type: "exercise", name: "Provas ITA — Idioms", author: "ITA", desc: "Questões de expressões idiomáticas." }
                ]
            },
        ]
    }
};

// ===== STATE =====
const STORAGE_KEY = 'ita-study-progress';
let studied = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
let currentTab = 'dashboard';

function saveProgress() { localStorage.setItem(STORAGE_KEY, JSON.stringify(studied)); }
function isStudied(id) { return !!studied[id]; }
function toggleStudied(id) { studied[id] = !studied[id]; if (!studied[id]) delete studied[id]; saveProgress(); updateAllProgress(); }

// ===== HELPERS =====
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }
function getAllTopics() {
    const all = [];
    for (const [subKey, sub] of Object.entries(SUBJECTS)) {
        sub.topics.forEach(t => all.push({ ...t, subjectKey: subKey, subjectName: sub.name, subjectIcon: sub.icon }));
    }
    return all;
}
const allTopics = getAllTopics();
const totalTopics = allTopics.length;

const ICONS = { book: '📖', exercise: '📝', video: '🎬', link: '🔗' };
const PRIORITY_LABELS = { high: 'Alta Prioridade', medium: 'Média', low: 'Baixa' };

// ===== RENDER SUBJECT PAGE =====
function renderSubject(key) {
    const sub = SUBJECTS[key];
    const container = $(`#tab-${key}`);
    let html = `<div class="subject-header"><span class="subject-header-icon">${sub.icon}</span><h1>${sub.name}</h1></div>`;
    html += `<p class="subject-description">${sub.desc}</p>`;
    html += `<div class="topics-grid">`;
    sub.topics.forEach((t, i) => {
        const checked = isStudied(t.id) ? 'checked' : '';
        const studiedClass = isStudied(t.id) ? 'studied' : '';
        html += `<div class="topic-card ${studiedClass}" data-id="${t.id}">
            <div class="topic-card-header">
                <span class="topic-number">${i + 1}</span>
                <label class="topic-check" onclick="event.stopPropagation()">
                    <input type="checkbox" ${checked} onchange="toggleStudied('${t.id}'); this.closest('.topic-card').classList.toggle('studied')">
                </label>
            </div>
            <h3>${t.name}</h3>
            <p class="topic-card-desc">${t.desc}</p>
            <div class="topic-tags">
                <span class="topic-tag priority-${t.priority}">${PRIORITY_LABELS[t.priority]}</span>
            </div>
            <div class="topic-card-footer">
                <span class="topic-materials-count">📚 ${t.materials.length} materiais</span>
                <button class="topic-expand-btn" onclick="openModal('${key}','${t.id}')">Ver detalhes →</button>
            </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
    container.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.closest('.topic-check')) return;
            openModal(key, card.dataset.id);
        });
    });
}

// ===== MODAL =====
function openModal(subKey, topicId) {
    const sub = SUBJECTS[subKey];
    const topic = sub.topics.find(t => t.id === topicId);
    if (!topic) return;
    let html = `<div class="modal-topic-subject">${sub.icon} ${sub.name}</div>`;
    html += `<h2 class="modal-topic-title">${topic.name}</h2>`;
    html += `<p class="modal-topic-description">${topic.desc}</p>`;
    html += `<div class="modal-section"><h3 class="modal-section-title">📋 Subtópicos</h3><div class="modal-subtopics">`;
    topic.subtopics.forEach(s => { html += `<span class="modal-subtopic">${s}</span>`; });
    html += '</div></div>';
    html += `<div class="modal-section"><h3 class="modal-section-title">📚 Material de Estudo</h3><div class="material-list">`;
    topic.materials.forEach(m => {
        html += `<div class="material-item">
            <div class="material-icon ${m.type}">${ICONS[m.type]}</div>
            <div class="material-info">
                <div class="material-name">${m.name}</div>
                <div class="material-desc">${m.author} — ${m.desc}</div>
            </div>
            <span class="material-type ${m.type}">${m.type === 'book' ? 'Livro' : m.type === 'exercise' ? 'Exercícios' : m.type === 'video' ? 'Vídeo' : 'Link'}</span>
        </div>`;
    });
    html += '</div></div>';
    $('#modalContent').innerHTML = html;
    $('#modalOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    $('#modalOverlay').classList.add('hidden');
    document.body.style.overflow = '';
}

$('#modalClose').addEventListener('click', closeModal);
$('#modalOverlay').addEventListener('click', e => { if (e.target === $('#modalOverlay')) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ===== NAVIGATION =====
function switchTab(tab) {
    currentTab = tab;
    $$('.tab-content').forEach(el => el.classList.remove('active'));
    $$('.sidebar-btn').forEach(btn => btn.classList.remove('active'));
    $(`#tab-${tab}`).classList.add('active');
    $(`.sidebar-btn[data-tab="${tab}"]`).classList.add('active');
    if (tab !== 'dashboard' && !$(`#tab-${tab}`).innerHTML) renderSubject(tab);
}

$$('.sidebar-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

$$('.subject-progress-card').forEach(card => {
    card.addEventListener('click', () => switchTab(card.dataset.subject));
});

// ===== SEARCH =====
function normalize(str) { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }

function searchTopics(query) {
    if (!query.trim()) return [];
    const q = normalize(query);
    return allTopics.filter(t => {
        return normalize(t.name).includes(q) ||
            normalize(t.desc).includes(q) ||
            normalize(t.subjectName).includes(q) ||
            t.subtopics.some(s => normalize(s).includes(q)) ||
            t.materials.some(m => normalize(m.name).includes(q) || normalize(m.author).includes(q));
    }).slice(0, 12);
}

const searchInput = $('#searchInput');
const searchResults = $('#searchResults');

searchInput.addEventListener('input', () => {
    const q = searchInput.value;
    if (!q.trim()) { searchResults.classList.add('hidden'); return; }
    const results = searchTopics(q);
    if (results.length === 0) {
        searchResults.innerHTML = '<div class="search-result-empty">Nenhum tema encontrado</div>';
    } else {
        searchResults.innerHTML = results.map(t => `
            <div class="search-result-item" data-sub="${t.subjectKey}" data-id="${t.id}">
                <span class="search-result-icon">${t.subjectIcon}</span>
                <div class="search-result-info">
                    <div class="search-result-name">${t.name}</div>
                    <div class="search-result-subject">${t.subjectName}</div>
                </div>
            </div>`).join('');
    }
    searchResults.classList.remove('hidden');
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            switchTab(item.dataset.sub);
            setTimeout(() => openModal(item.dataset.sub, item.dataset.id), 100);
            searchResults.classList.add('hidden');
            searchInput.value = '';
        });
    });
});

document.addEventListener('click', e => { if (!e.target.closest('.search-container')) searchResults.classList.add('hidden'); });
document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); } });

// ===== PROGRESS =====
function updateAllProgress() {
    let totalDone = 0;
    for (const [key, sub] of Object.entries(SUBJECTS)) {
        const done = sub.topics.filter(t => isStudied(t.id)).length;
        const total = sub.topics.length;
        totalDone += done;
        const pct = total ? Math.round((done / total) * 100) : 0;
        const badge = $(`#badge-${key}`);
        if (badge) badge.textContent = `${done}/${total}`;
        const sp = $(`#sp-${key}`);
        if (sp) sp.textContent = `${done}/${total}`;
        const fill = $(`#spfill-${key}`);
        if (fill) fill.style.width = `${pct}%`;
    }
    const pctTotal = totalTopics ? Math.round((totalDone / totalTopics) * 100) : 0;
    const statDone = $('#statDone'); if (statDone) statDone.textContent = totalDone;
    const statPending = $('#statPending'); if (statPending) statPending.textContent = totalTopics - totalDone;
    const statPercent = $('#statPercent'); if (statPercent) statPercent.textContent = pctTotal + '%';
    const miniFill = $('#progressMiniFill'); if (miniFill) miniFill.style.width = pctTotal + '%';
    const miniText = $('#progressMiniText'); if (miniText) miniText.textContent = pctTotal + '%';
}

// ===== INIT =====
for (const key of Object.keys(SUBJECTS)) renderSubject(key);
updateAllProgress();
