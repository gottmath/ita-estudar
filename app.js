// ===== ITA STUDY HUB - GUIDELINES & ORIENTATIONS =====
const SUBJECTS = {
    matematica: {
        name: "Matemática", icon: "📐", color: "#3b82f6",
        desc: "12 questões na 1ª fase + discursivas na 2ª fase. Base do ITA.",
        topics: [
            {
                id: "m1", name: "Conjuntos", desc: "Teoria dos conjuntos, operações, conjuntos numéricos, indução, princípio das gavetas.", priority: "high",
                subtopics: ["Subconjuntos", "União e Intersecção", "Diferença e Complementar", "Conjuntos Numéricos", "Indução Matemática", "Princípio das Gavetas"],
                guidelines: [
                    "Domine as operações básicas (união, intersecção, diferença) e suas propriedades.",
                    "Entenda profundamente o Princípio da Indução Finita (PIF) — é fundamental para provas discursivas.",
                    "O Princípio das Gavetas (Dirichlet) cai frequentemente em questões de raciocínio lógico/combinatório.",
                    "Não subestime a teoria dos Irracionais e Reais; saiba provar irracionalidade (ex: raiz de 2).",
                    "Foque em problemas que misturam conjuntos com desigualdades e módulos."
                ]
            },
            {
                id: "m2", name: "Funções", desc: "Domínio, imagem, composição, inversão. Funções injetoras, sobrejetoras e bijetoras.", priority: "high",
                subtopics: ["Domínio e Imagem", "Injetora/Sobrejetora/Bijetora", "Composição", "Função Inversa", "Par e Ímpar", "Gráficos"],
                guidelines: [
                    "Saiba determinar domínio e imagem de funções complexas (com raízes, logaritmos, módulos).",
                    "Entenda a diferença visual e algébrica entre funções injetoras, sobrejetoras e bijetoras.",
                    "Composição de funções é chave para questões de cálculo e álgebra.",
                    "Estude a relação gráfica entre f(x) e sua inversa (reflexão na reta y=x).",
                    "Propriedades de paridade (par/ímpar) ajudam a simplificar integrais e gráficos."
                ]
            },
            {
                id: "m3", name: "Logaritmos e Exponenciais", desc: "Função exponencial e logarítmica. Propriedades, equações e inequações.", priority: "high",
                subtopics: ["Função Exponencial", "Função Logarítmica", "Propriedades dos Logaritmos", "Equações Exponenciais", "Inequações Logarítmicas", "Mudança de Base"],
                guidelines: [
                    "Decore todas as propriedades operatórias de logaritmos (produto, quociente, potência, mudança de base).",
                    "Saiba resolver inequações logarítmicas complexas, atentando para a condição de existência (logaritmando > 0, base > 0 e != 1).",
                    "Treine a resolução de sistemas envolvendo exponenciais e logaritmos.",
                    "Entenda o comportamento gráfico das funções exp e log, especialmente o crescimento/decrescimento conforme a base.",
                    "Aplicações em problemas de juros compostos e decaimento radioativo são comuns."
                ]
            },
            {
                id: "m4", name: "Trigonometria", desc: "Funções trigonométricas, identidades, equações. Leis dos senos e cossenos.", priority: "high",
                subtopics: ["Arcos e Ângulos", "Seno/Cosseno/Tangente", "Identidades", "Equações Trigonométricas", "Fórmulas de Adição", "Lei dos Senos e Cossenos"],
                guidelines: [
                    "Este é um dos tópicos mais importantes. Domine todas as fórmulas de transformação (soma em produto, arco duplo, arco metade).",
                    "Saiba resolver equações trigonométricas gerais e em intervalos específicos.",
                    "Lei dos Senos e Cossenos são ferramentas essenciais em geometria plana e espacial.",
                    "Entenda a função inversa (arcsen, arccos, arctg) e seus domínios/imagens.",
                    "Pratique a manipulação algébrica para simplificar expressões trigonométricas gigantes (comum no ITA)."
                ]
            },
            {
                id: "m5", name: "Números Complexos", desc: "Forma algébrica e trigonométrica. Fórmula de Moivre. Raízes da unidade.", priority: "high",
                subtopics: ["Forma Algébrica", "Forma Trigonométrica", "Operações", "Fórmula de Moivre", "Raízes da Unidade", "Plano de Argand-Gauss"],
                guidelines: [
                    "Entenda a interpretação geométrica das operações (soma=vetores, produto=rotação+homotetia).",
                    "A 1ª e 2ª Leis de Moivre são obrigatórias para potências e raízes.",
                    "Raízes da unidade formam polígonos regulares no plano de Argand-Gauss — visualize isso.",
                    "Saiba transitar rapidamente entre forma algébrica (a+bi) e trigonométrica (cis).",
                    "Problemas de lugares geométricos no plano complexo (|z-z0|=R, etc.) caem muito."
                ]
            },
            {
                id: "m6", name: "Polinômios", desc: "Raízes, Teorema do Resto, D'Alembert, Relações de Girard, fatoração.", priority: "high",
                subtopics: ["Divisão de Polinômios", "Teorema do Resto", "Teorema de D'Alembert", "Relações de Girard", "Fatoração"],
                guidelines: [
                    "Relações de Girard para graus 3 e 4 são fundamentais.",
                    "Saiba usar Briot-Ruffini para abaixar o grau de equações.",
                    "Teorema das Raízes Racionais ajuda a 'chutar' raízes inteiras/fracionárias.",
                    "Entenda a multiplicidade de raízes e sua relação com o gráfico (tangência vs corte).",
                    "Polinômios Recíprocos aparecem com frequência; saiba reconhecê-los e resolvê-los."
                ]
            },
            {
                id: "m7", name: "PA e PG", desc: "Progressões aritméticas e geométricas. Soma de PG infinita.", priority: "medium",
                subtopics: ["PA — Termo Geral e Soma", "PG — Termo Geral e Soma", "PG Infinita", "Propriedades"],
                guidelines: [
                    "Não decore apenas fórmulas; entenda a lógica de construção das sequências.",
                    "Soma de PG infinita é crucial para problemas de geometria fractal.",
                    "Propriedades de média aritmética e geométrica em PA/PG (termos equidistantes).",
                    "Problemas misturando PA/PG com logaritmos e geometria."
                ]
            },
            {
                id: "m8", name: "Matrizes e Determinantes", desc: "Operações com matrizes, inversa, determinantes, sistemas lineares.", priority: "high",
                subtopics: ["Operações com Matrizes", "Matriz Inversa", "Determinantes", "Teorema de Laplace", "Sistemas Lineares", "Regra de Cramer"],
                guidelines: [
                    "Saiba calcular determinantes sem Sarrus (Laplace, Chió) para matrizes 4x4 ou maiores.",
                    "Discubra quando um sistema é SPD, SPI ou SI (característica da matriz, escalonamento).",
                    "Propriedades de determinantes (det(kA), det(AB), etc.) salvam muito tempo.",
                    "Matrizes ortogonais e suas propriedades.",
                    "Interpretação geométrica de sistemas lineares (intersecção de planos)."
                ]
            },
            {
                id: "m9", name: "Análise Combinatória", desc: "Princípio fundamental, arranjos, permutações, combinações, Binômio de Newton.", priority: "high",
                subtopics: ["Princípio Fundamental", "Permutações", "Arranjos", "Combinações", "Binômio de Newton"],
                guidelines: [
                    "Entenda a diferença conceitual entre arranjo e combinação (ordem importa vs não importa).",
                    "Permutação com repetição e circular.",
                    "Técnicas avançadas: Problema das combinações completas (barrinhas), Princípio da Inclusão-Exclusão.",
                    "No Binômio de Newton, saiba encontrar o termo geral e a soma dos coeficientes.",
                    "Identidades binomiais (Stifel, Pascal) são úteis para simplificações."
                ]
            },
            {
                id: "m10", name: "Probabilidade", desc: "Probabilidade condicional, eventos independentes, Teorema de Bayes.", priority: "high",
                subtopics: ["Espaço Amostral", "Probabilidade Condicional", "Eventos Independentes", "Teorema de Bayes"],
                guidelines: [
                    "Definição clássica de probabilidade vs geométrica.",
                    "Probabilidade condicional é o tema mais recorrente e \"pegajoso\". Use diagramas de árvore.",
                    "Teorema de Bayes: saiba identificar quando usar (inversão da condicional).",
                    "Binomial de probabilidade (sucesso/fracasso em n tentativas).",
                    "Cuidado com a dependência entre eventos."
                ]
            },
            {
                id: "m11", name: "Geometria Plana", desc: "Triângulos, polígonos, circunferência, áreas, semelhança, congruência.", priority: "high",
                subtopics: ["Triângulos", "Quadriláteros", "Polígonos", "Circunferência", "Áreas", "Semelhança"],
                guidelines: [
                    "Domine semelhança de triângulos e relações métricas no triângulo retângulo.",
                    "Teoremas clássicos: Menelaus, Ceva, Ptolomeu, bisectriz interna/externa (muito úteis no ITA).",
                    "Áreas: saiba várias fórmulas para área de triângulo (base*h, Herão, rs, abc/4R, trigonométrica).",
                    "Potência de ponto em circunferências.",
                    "Quadriláteros inscritíveis e circunscritíveis."
                ]
            },
            {
                id: "m12", name: "Geometria Espacial", desc: "Prismas, pirâmides, cilindros, cones, esferas. Volumes e áreas.", priority: "medium",
                subtopics: ["Prismas", "Pirâmides", "Cilindros", "Cones", "Esferas"],
                guidelines: [
                    "Visualização 3D é essencial. Desenhe cortes e seções transversais para reduzir a problemas planos.",
                    "Troncos de pirâmide e cone (cálculo de volume e área lateral).",
                    "Esfera inscrita e circunscrita em poliedros (cubo, tetraedro, octaedro).",
                    "Princípio de Cavalieri.",
                    "Tetraedro regular: saiba altura, área e volume de cor."
                ]
            },
            {
                id: "m13", name: "Geometria Analítica", desc: "Reta, circunferência, cônicas (elipse, hipérbole, parábola). Lugares geométricos.", priority: "high",
                subtopics: ["Equação da Reta", "Circunferência", "Elipse", "Hipérbole", "Parábola", "Lugares Geométricos"],
                guidelines: [
                    "Distância ponto-reta e ponto-ponto.",
                    "Equações reduzidas e gerais das cônicas. Saiba identificar a cônica pela equação geral.",
                    "Propriedades focais (reflexão) das cônicas.",
                    "Excentricidade e diretrizes.",
                    "Rotação e translação de eixos (menos comum, mas diferencial)."
                ]
            },
            {
                id: "m15", name: "Geometria Analítica 3D", desc: "Planos, retas no espaço, esferas e distâncias.", priority: "medium",
                subtopics: ["Equação do Plano", "Equação da Reta (R3)", "Distâncias", "Esferas", "Posições Relativas"],
                guidelines: [
                    "Vetores no R3: produto escalar e vetorial são a base de tudo.",
                    "Equação geral do plano (ax+by+cz+d=0) e vetores normais.",
                    "Distância ponto-plano e ponto-reta (fórmulas vetoriais).",
                    "Intersecção de planos e retas.",
                    "Esferas no R3: centro e raio."
                ]
            },
            {
                id: "m14", name: "Equações e Inequações", desc: "Equações polinomiais, irracionais, modulares. Inequações e estudo de sinais.", priority: "medium",
                subtopics: ["Eq. Polinomiais", "Eq. Irracionais", "Eq. Modulares", "Inequações"],
                guidelines: [
                    "Estudo de sinal (quadro de sinais) para inequações produto/quociente.",
                    "Em equações irracionais, sempre verifique as raízes encontradas (elevar ao quadrado introduz raízes estranhas).",
                    "Propriedades de módulo (|x| < a <=> -a < x < a).",
                    "Desigualdades clássicas: Médias (MA >= MG >= MH), Cauchy-Schwarz (avançado)."
                ]
            },
        ]
    },
    fisica: {
        name: "Física", icon: "⚡", color: "#f59e0b",
        desc: "12 questões na 1ª fase + discursivas na 2ª fase. Exige profundidade.",
        topics: [
            {
                id: "f1", name: "Cinemática", desc: "MRU, MRUV, vetores, lançamentos, movimento circular.", priority: "high",
                subtopics: ["MRU", "MRUV", "Vetores", "Lançamento Oblíquo", "Movimento Circular"],
                guidelines: [
                    "Cinemática vetorial é essencial. Não trabalhe só com escalares, entenda a decomposição de vetores.",
                    "Lançamento oblíquo: independence dos movimentos (horizontal = MRU, vertical = MUV).",
                    "Movimento Circular: aceleração centrípeta vs tangencial. Acoplamento de polias.",
                    "Gráficos v(t), s(t), a(t): saiba transitar entre eles (área = deslocamento, inclinação = aceleração).",
                    "Movimento relativo (barco no rio, trem na chuva)."
                ]
            },
            {
                id: "f13", name: "Análise Dimensional", desc: "Teorema de Buckingham, homogeneidade dimensional, previsão de fórmulas.", priority: "high",
                subtopics: ["Grandezas Fundamentais", "MLT", "Homogeneidade", "Teorema dos Pi"],
                guidelines: [
                    "Saiba expressar qualquer grandeza em função de M, L, T (Massa, Comprimento, Tempo).",
                    "Use análise dimensional para 'chutar' fórmulas ou verificar consistência.",
                    "Teorema de Buckingham: método passo a passo para deduzir relações físicas.",
                    "Adimensionalidade de argumentos trigonométricos e exponenciais."
                ]
            },
            {
                id: "f14", name: "Estática", desc: "Equilíbrio de ponto material e corpo extenso.", priority: "high",
                subtopics: ["Ponto Material", "Corpo Extenso", "Torque/Momento", "Alavancas", "Centro de Massa"],
                guidelines: [
                    "Condições de equilíbrio: Soma dos Forças = 0 E Soma dos Torques = 0.",
                    "Escolha do polo de rotação: o 'pulo do gato' para anular forças desconhecidas.",
                    "Tipos de apoio (fixo, móvel, engaste) e suas reações.",
                    "Estabilidade de equilíbrio (estável, instável, indiferente).",
                    "Centro de massa vs Centro de gravidade."
                ]
            },
            {
                id: "f15", name: "Hidrostática", desc: "Pressão, Stevin, Pascal, Arquimedes, empuxo.", priority: "medium",
                subtopics: ["Pressão", "Stevin", "Pascal", "Arquimedes", "Empuxo", "Vasos Comunicantes"],
                guidelines: [
                    "Teorema de Stevin (P = Patm + dgh) e paradoxo hidrostático.",
                    "Princípio de Pascal (prensas hidráulicas).",
                    "Arquimedes e Empuxo: E = d_liq * V_sub * g. Cuidado com 'peso aparente'.",
                    "Estabilidade de corpos flutuantes (metacentro - conceito básico).",
                    "Hidrodinâmica básica (Bernoulli e Torricelli) aparece raramente, mas vale conhecer."
                ]
            },
            {
                id: "f2", name: "Dinâmica", desc: "Leis de Newton, atrito, plano inclinado, dinâmica circular.", priority: "high",
                subtopics: ["Leis de Newton", "Atrito", "Plano Inclinado", "Dinâmica Circular", "Sistemas de Corpos"],
                guidelines: [
                    "Diagrama de Corpo Livre: faça SEMPRE. É o passo mais importante.",
                    "Atrito estático (variável) vs cinético (constante). Condição de iminência de movimento.",
                    "Forças em trajetórias curvas (resultante centrípeta). Carro na curva (plana/inclinada).",
                    "Vínculos geométricos (polias móveis, blocos em contato).",
                    "Referenciais não-inerciais e força de inércia (fictícia) as vezes simplificam o problema."
                ]
            },
            {
                id: "f3", name: "Trabalho e Energia", desc: "Trabalho, energia cinética e potencial, conservação, potência.", priority: "high",
                subtopics: ["Trabalho", "Energia Cinética", "Energia Potencial", "Conservação", "Potência"],
                guidelines: [
                    "Teorema da Energia Cinética (Trabalho Resultante = Delta Ec).",
                    "Conservação da Energia Mecânica (sistemas conservativos). Saiba identificar forças dissipativas (atrito).",
                    "Gráficos F(x): área = Trabalho.",
                    "Potência e rendimento.",
                    "Colisões: conservação da quantidade de movimento (sempre) vs conservação da energia (só elásticas)."
                ]
            },
            {
                id: "f4", name: "Gravitação Universal", desc: "Lei da gravitação, Leis de Kepler, campo gravitacional, satélites.", priority: "medium",
                subtopics: ["Lei da Gravitação", "Leis de Kepler", "Campo Gravitacional", "Velocidade Orbital"],
                guidelines: [
                    "3ª Lei de Kepler (T^2/R^3 = cte).",
                    "Força gravitacional como força centrípeta em órbitas circulares.",
                    "Velocidade de escape e energia em órbita (Ec, Ep, Emec).",
                    "Variação da gravidade com a altura e profundidade.",
                    "Órbitas elípticas: conservação do momento angular e da energia."
                ]
            },
            {
                id: "f5", name: "Termodinâmica", desc: "Gases ideais, leis da termodinâmica, máquinas térmicas, Carnot.", priority: "high",
                subtopics: ["Temperatura e Calor", "Gases Ideais", "1ª Lei", "2ª Lei", "Máquinas Térmicas", "Ciclo de Carnot"],
                guidelines: [
                    "Equação de Clapeyron (PV=nRT) e Lei Geral.",
                    "1ª Lei: Conservação de energia (Q = Tau + DeltaU). Convenção de sinais é vital.",
                    "Transformações gasosas (iso: bárica, córica, térmica, adiabática) e seus gráficos PV.",
                    "2ª Lei e Entropia (conceitual). Máquinas térmicas e refrigeradores.",
                    "Ciclo de Carnot (rendimento máximo teórico)."
                ]
            },
            {
                id: "f6", name: "Ondulatória", desc: "Ondas mecânicas, reflexão, refração, difração, interferência, Doppler.", priority: "medium",
                subtopics: ["Ondas Mecânicas", "Reflexão/Refração", "Difração", "Interferência", "Efeito Doppler"],
                guidelines: [
                    "Equação fundamental (v = lambda * f).",
                    "Função de onda y(x,t) = A cos(kx - wt + phi). Saiba interpretar.",
                    "Fenômenos ondulatórios: saiba distinguir (difração, interferência, polarização, ressonância).",
                    "Cordas vibrantes e tubos sonoros (harmônicos).",
                    "Efeito Doppler: fórmula geral (aproximação/afastamento)."
                ]
            },
            {
                id: "f7", name: "Óptica Geométrica", desc: "Reflexão, refração, espelhos, lentes, instrumentos ópticos.", priority: "medium",
                subtopics: ["Reflexão", "Refração (Snell)", "Espelhos", "Lentes", "Instrumentos"],
                guidelines: [
                    "Lei de Snell-Descartes e reflexão total (ângulo limite).",
                    "Equação de Gauss (1/f = 1/p + 1/p') e aumento linear.",
                    "Formação de imagens em espelhos e lentes (real/virtual, direita/invertida).",
                    "Prismas (desvio mínimo) e lâminas de faces paralelas.",
                    "Instrumentos ópticos (microscópio, luneta): associação de lentes."
                ]
            },
            {
                id: "f8", name: "Eletrostática", desc: "Lei de Coulomb, campo elétrico, potencial, capacitores.", priority: "high",
                subtopics: ["Lei de Coulomb", "Campo Elétrico", "Potencial Elétrico", "Capacitores"],
                guidelines: [
                    "Campo e Potencial de cargas pontuais.",
                    "Campo uniforme (placas paralelas) e movimento de cargas nele.",
                    "Potencial e Trabalho (W = q * DeltaV).",
                    "Condutores em equilíbrio eletrostático (campo interno nulo, potencial constante).",
                    "Capacitores: capacitância, energia armazenada, associação (série/paralelo)."
                ]
            },
            {
                id: "f9", name: "Eletrodinâmica", desc: "Corrente, resistência, Lei de Ohm, circuitos, Kirchhoff.", priority: "high",
                subtopics: ["Lei de Ohm", "Resistores", "Circuitos", "Leis de Kirchhoff", "Potência Elétrica"],
                guidelines: [
                    "Leis de Kirchhoff (Nós e Malhas) resolvem qualquer circuito.",
                    "Ponte de Wheatstone equilibrada.",
                    "Geradores e Receptores (equação característica, rendimento).",
                    "Medidores elétricos ideais e reais (amperímetro e voltímetro).",
                    "Simetria em circuitos para simplificação."
                ]
            },
            {
                id: "f10", name: "Magnetismo", desc: "Campo magnético, força magnética, Ampère, indução, Faraday e Lenz.", priority: "high",
                subtopics: ["Campo Magnético", "Força Magnética", "Lei de Ampère", "Lei de Faraday", "Lei de Lenz"],
                guidelines: [
                    "Mão direita para campo, mão esquerda para força (ou regra do tapa).",
                    "Força sobre carga em movimento (Lorentz) e sobre fio com corrente.",
                    "Trajetória helicoidal de cargas em campo magnético.",
                    "Lei de Faraday-Lenz: fluxo magnético variável gera FEM induzida (sentido da corrente).",
                    "Indutância mútua e autoindutância (básico)."
                ]
            },
            {
                id: "f11", name: "MHS", desc: "Movimento harmônico simples, pêndulo, massa-mola.", priority: "medium",
                subtopics: ["Equação do MHS", "Pêndulo", "Massa-Mola", "Energia no MHS"],
                guidelines: [
                    "Associação MHS e MCU.",
                    "Equações horárias x(t), v(t), a(t).",
                    "Período do sistema massa-mola (2pi * sqrt(m/k)) e pêndulo simples.",
                    "Conservação de energia no MHS (cinética + potencial elástica).",
                    "MHS amortecido e forçado (conceitual)."
                ]
            },
            {
                id: "f12", name: "Física Moderna", desc: "Efeito fotoelétrico, dualidade onda-partícula, relatividade.", priority: "low",
                subtopics: ["Efeito Fotoelétrico", "Dualidade Onda-Partícula", "Relatividade Restrita"],
                guidelines: [
                    "Efeito Fotoelétrico: equação de Einstein (E_foton = Trabalho + Ec_max).",
                    "Átomo de Bohr: quantização de energia e raio.",
                    "Relatividade Restrita: dilatação do tempo e contração do espaço. E=mc^2.",
                    "Comprimento de onda de De Broglie."
                ]
            },
        ]
    },
    quimica: {
        name: "Química", icon: "🧪", color: "#10b981",
        desc: "12 questões na 1ª fase + discursivas. Equilíbrio e termoquímica são frequentes.",
        topics: [
            {
                id: "q1", name: "Modelos Atômicos", desc: "Dalton, Thomson, Rutherford, Bohr. Config. eletrônica. Tabela periódica.", priority: "medium",
                subtopics: ["Modelos Atômicos", "Números Quânticos", "Config. Eletrônica", "Tabela Periódica"],
                guidelines: [
                    "Evolução histórica dos modelos e falhas de cada um.",
                    "Modelo de Bohr (postulados, saltos quânticos) é o mais cobrado quantitativamente.",
                    "Números quânticos (principal, secundário, magnético, spin) e Princípio de Pauli.",
                    "Propriedades periódicas: raio, energia de ionização, afinidade eletrônica, eletronegatividade (tendências na tabela)."
                ]
            },
            {
                id: "q13", name: "Radioatividade", desc: "Emissões alfa, beta, gama. Leis de Soddy e Fajans. Cinética radioativa.", priority: "medium",
                subtopics: ["Emissões", "Leis de Decaimento", "Meia-Vida", "Fissão e Fusão", "Energia Nuclear"],
                guidelines: [
                    "Leis de Soddy (Alfa) e Fajans-Soddy (Beta): conservação de massa e carga.",
                    "Poder de penetração vs poder de ionização das partículas.",
                    "Cálculos de meia-vida (P = P0 / 2^n) e datação por Carbono-14.",
                    "Fissão nuclear (reatores, bombas) vs Fusão nuclear (estrelas).",
                    "Defeito de massa e energia de ligação nuclear (E=mc^2)."
                ]
            },
            {
                id: "q2", name: "Ligações Químicas", desc: "Iônica, covalente, metálica. Geometria molecular. Forças intermoleculares.", priority: "medium",
                subtopics: ["Ligação Iônica", "Ligação Covalente", "Geometria Molecular", "Forças Intermoleculares"],
                guidelines: [
                    "Ciclo de Born-Haber (entalpia de rede).",
                    "Teoria da Repulsão dos Pares Eletrônicos (VSEPR) para geometria.",
                    "Hibridização do átomo central (sp, sp2, sp3, sp3d, sp3d2).",
                    "Forças intermoleculares (Van der Waals, dipolo, ligações de hidrogênio) determinam ponto de ebulição e solubilidade."
                ]
            },
            {
                id: "q3", name: "Estequiometria", desc: "Mol, massa molar, balanceamento, reagente limitante, rendimento.", priority: "high",
                subtopics: ["Mol e Massa Molar", "Balanceamento", "Cálculos", "Reagente Limitante", "Rendimento"],
                guidelines: [
                    "Fundamental em toda a prova. Treine rapidez e precisão.",
                    "Identificar reagente limitante e excesso é o primeiro passo.",
                    "Rendimento de reação e pureza dos reagentes.",
                    "Análise elementar/fórmula mínima e molecular.",
                    "Reações consecutivas (cancelar intermediários)."
                ]
            },
            {
                id: "q4", name: "Gases", desc: "Leis dos gases, Clapeyron, misturas gasosas, Lei de Dalton.", priority: "medium",
                subtopics: ["Lei de Boyle", "Lei de Charles", "Clapeyron", "Misturas Gasosas"],
                guidelines: [
                    "Equação de Estado (PV=nRT).",
                    "Lei de Dalton (pressões parciais) e Lei de Amagat (volumes parciais).",
                    "Densidade gasosa e efusão/difusão (Lei de Graham).",
                    "Teoria Cinética dos Gases (conceitual)."
                ]
            },
            {
                id: "q5", name: "Termoquímica", desc: "Entalpia, Lei de Hess, energia de ligação, calorimetria.", priority: "high",
                subtopics: ["Entalpia", "Lei de Hess", "Energia de Ligação", "Calorimetria"],
                guidelines: [
                    "Lei de Hess: a entalpia é função de estado (caminho não importa).",
                    "Entalpia de formação vs Entalpia de combustão.",
                    "Cálculo de DeltaH via energias de ligação (Quebra=Endo, Formação=Exo).",
                    "Energia Livre de Gibbs (DeltaG = DeltaH - TDeltaS) e espontaneidade."
                ]
            },
            {
                id: "q6", name: "Cinética Química", desc: "Velocidade de reação, fatores, lei de velocidade, ativação.", priority: "high",
                subtopics: ["Velocidade de Reação", "Fatores", "Lei de Velocidade", "Energia de Ativação"],
                guidelines: [
                    "Lei de Velocidade (k * [A]^a * [B]^b) experimental.",
                    "Ordem da reação e ordem global.",
                    "Influência da temperatura (Arrhenius), catalisador (abaixa Ea), superfície de contato.",
                    "Mecanismos de reação (etapa lenta determina a velocidade)."
                ]
            },
            {
                id: "q7", name: "Equilíbrio Químico", desc: "Kc, Kp, Le Chatelier, equilíbrio heterogêneo.", priority: "high",
                subtopics: ["Kc e Kp", "Le Chatelier", "Equilíbrio Heterogêneo", "Deslocamento"],
                guidelines: [
                    "Expressão da constante (só gasoso e aquoso). Relação Kp = Kc(RT)^dn.",
                    "Princípio de Le Chatelier: como o sistema reage a perturbações (conc, pressão, temp).",
                    "Quociente de reação (Qc) para prever o sentido.",
                    "Grau de equilíbrio (alfa) e Lei de Ostwald."
                ]
            },
            {
                id: "q8", name: "Equilíbrio Iônico", desc: "pH, pOH, hidrólise, solução tampão, Kps.", priority: "high",
                subtopics: ["pH e pOH", "Hidrólise", "Solução Tampão", "Kps"],
                guidelines: [
                    "Cálculo de pH de ácidos/bases fortes e fracos (Ka, Kb).",
                    "Hidrólise salina: caráter ácido/básico/neutro de sais.",
                    "Solução Tampão (Henderson-Hasselbalch): como funciona e como calcular.",
                    "Kps (Produto de Solubilidade) e efeito do íon comum."
                ]
            },
            {
                id: "q9", name: "Eletroquímica", desc: "Pilhas, potencial de redução, eletrólise, Leis de Faraday.", priority: "high",
                subtopics: ["Pilhas", "Potencial de Redução", "Eletrólise", "Leis de Faraday"],
                guidelines: [
                    "Pilhas: anodo (oxida, negativo), catodo (reduz, positivo), fluxo de elétrons.",
                    "Eletrólise Ígnea vs Aquosa (prioridade de descarga de íons).",
                    "Leis de Faraday: estequiometria da eletrólise (Q = i*t).",
                    "Equação de Nernst (potencial fora das condições padrão) - avançado."
                ]
            },
            {
                id: "q10", name: "Soluções", desc: "Concentração, molalidade, diluição. Propriedades coligativas.", priority: "medium",
                subtopics: ["Concentração", "Molalidade", "Diluição", "Propriedades Coligativas"],
                guidelines: [
                    "Unidades de concentração: molaridade, molalidade, título, ppm.",
                    "Diluição e Mistura de soluções (com e sem reação).",
                    "Propriedades Coligativas: Tonoscopia, Ebulioscopia, Crioscopia, Pressão Osmótica.",
                    "Fator de Van't Hoff para solutos iônicos."
                ]
            },
            {
                id: "q11", name: "Química Orgânica", desc: "Cadeias carbônicas, funções, nomenclatura, isomeria, reações.", priority: "high",
                subtopics: ["Funções Orgânicas", "Nomenclatura", "Isomeria", "Reações de Adição", "Substituição", "Eliminação"],
                guidelines: [
                    "Identificação rápida de funções orgânicas e nomenclatura IUPAC.",
                    "Isomeria: Plana (função, cadeia, posição) e Espacial (geométrica, óptica).",
                    "Propriedades físicas: solubilidade e PE/PF baseados na polaridade e forças.",
                    "Reações Orgânicas: a parte mais difícil. Mecanismos básicos (substituição eletrofílica, adição).",
                    "Polímeros comuns."
                ]
            },
            {
                id: "q12", name: "Reações Inorgânicas", desc: "Ácidos, bases, sais, óxidos. Neutralização, oxirredução.", priority: "medium",
                subtopics: ["Ácidos e Bases", "Sais e Óxidos", "Neutralização", "Oxirredução"],
                guidelines: [
                    "Teorias de Arrhenius, Bronsted-Lowry e Lewis.",
                    "Nomenclatura de ácidos, bases, sais e óxidos.",
                    "Reações de dupla troca (condições de ocorrência).",
                    "Balanceamento REDOX."
                ]
            },
        ]
    },
    portugues: {
        name: "Português", icon: "📝", color: "#ec4899",
        desc: "2ª fase: interpretação, gramática, literatura e redação dissertativa.",
        topics: [
            {
                id: "p1", name: "Interpretação de Texto", desc: "Leitura, análise, inferência, tipologia e gêneros textuais.", priority: "high",
                subtopics: ["Inferência", "Tipologia", "Gêneros", "Coesão e Coerência"],
                guidelines: [
                    "Foco total na capacidade de inferência e leitura crítica.",
                    "Identifique a tese central e os argumentos de suporte do autor.",
                    "Diferencie fatos de opiniões.",
                    "Conheça os mecanismos de coesão (referenciação, elipse, conectivos).",
                    "Vocabulário: o ITA gosta de textos densos e palavras eruditas."
                ]
            },
            {
                id: "p2", name: "Gramática — Morfologia", desc: "Classes de palavras, flexão nominal e verbal, formação de palavras.", priority: "medium",
                subtopics: ["Substantivos", "Adjetivos", "Verbos", "Pronomes", "Conjunções", "Formação de Palavras"],
                guidelines: [
                    "Conjugação verbal (tempos e modos) e correlação verbal.",
                    "Pronomes: colocação pronominal (ênclise, próclise, mesóclise) rigorosa.",
                    "Formação de palavras: derivação e composição.",
                    "Valor semântico das preposições e conjunções."
                ]
            },
            {
                id: "p3", name: "Gramática — Sintaxe", desc: "Análise sintática, período composto, concordância, regência, crase.", priority: "medium",
                subtopics: ["Análise Sintática", "Período Composto", "Concordância", "Regência", "Crase"],
                guidelines: [
                    "Concordância nominal e verbal (casos especiais).",
                    "Regência nominal e verbal (verbos 'chatos' como assistir, aspirar, visar).",
                    "Crase: domínio absoluto das regras (obrigatória, facultativa, proibida).",
                    "Pontuação: uso da vírgula no período composto."
                ]
            },
            {
                id: "p4", name: "Literatura Brasileira", desc: "Trovadorismo ao Modernismo (3 gerações). Tendências contemporâneas.", priority: "medium",
                subtopics: ["Trovadorismo/Barroco", "Romantismo", "Realismo", "Modernismo", "Contemporâneo"],
                guidelines: [
                    "Leia as obras obrigatórias (se houver lista no ano) ou os clássicos recorrentes.",
                    "Entenda as características das escolas literárias e o contexto histórico.",
                    "Confronte estilos (ex: Romantismo vs Realismo).",
                    "Análise de poemas (métrica, rima, figuras) e prosa."
                ]
            },
            {
                id: "p5", name: "Redação", desc: "Dissertação argumentativa. Estrutura, coesão, repertório.", priority: "high",
                subtopics: ["Estrutura Dissertativa", "Argumentação", "Coesão", "Repertório"],
                guidelines: [
                    "Estrutura rígida: Introdução (tese), Desenvolvimento (argumentos), Conclusão (síntese/proposta).",
                    "Coesão textual impecável. Nada de períodos soltos.",
                    "Argumentação sólida baseada em fatos, dados e lógica. Evite senso comum.",
                    "Clareza e concisão. O ITA valoriza objetividade.",
                    "Norma culta rigorosa."
                ]
            },
            {
                id: "p6", name: "Figuras de Linguagem", desc: "Metáfora, metonímia, antítese, ironia, hipérbole e outras.", priority: "low",
                subtopics: ["Metáfora", "Metonímia", "Antítese", "Ironia", "Hipérbole"],
                guidelines: [
                    "Reconhecimento em textos literários e publicitários.",
                    "Função expressiva das figuras.",
                    "Metáfora e Metonímia são as mais comuns."
                ]
            },
        ]
    },
    ingles: {
        name: "Inglês", icon: "🌐", color: "#8b5cf6",
        desc: "12 questões eliminatórias na 1ª fase. Foco em interpretação e gramática.",
        topics: [
            {
                id: "i1", name: "Reading Comprehension", desc: "Interpretação de textos, inferência, vocabulário contextual.", priority: "high",
                subtopics: ["Main Idea", "Inference", "Vocabulary in Context", "Text Structure"],
                guidelines: [
                    "Leitura rápida (Scanning e Skimming) para identificar ideias chave.",
                    "Inferência: ler nas entrelinhas.",
                    "Atenção aos conectivos (However, Although, Therefore) que mudam o sentido.",
                    "O ITA usa textos autênticos (The Economist, Scientific American), acostume-se com o nível."
                ]
            },
            {
                id: "i2", name: "Vocabulary", desc: "Phrasal verbs, collocations, falsos cognatos, expressões idiomáticas.", priority: "high",
                subtopics: ["Phrasal Verbs", "Collocations", "False Cognates", "Idiomatic Expressions"],
                guidelines: [
                    "Falsos cognatos (False Friends) perigosos (ex: actually, pretend).",
                    "Phrasal Verbs comuns (get up, give up, look forward to).",
                    "Vocabulário acadêmico e científico."
                ]
            },
            {
                id: "i3", name: "Grammar", desc: "Verb tenses, conditionals, passive voice, reported speech, connectors.", priority: "high",
                subtopics: ["Verb Tenses", "Conditionals", "Passive Voice", "Reported Speech", "Connectors"],
                guidelines: [
                    "Tempos verbais: uso correto de Present Perfect vs Simple Past.",
                    "Voz passiva (muito usada em textos científicos).",
                    "Conditionals (If clauses): tipos 0, 1, 2 e 3.",
                    "Discurso indireto (Reported Speech)."
                ]
            },
            {
                id: "i4", name: "Quantifiers", desc: "Much, many, few, little, some, any. Countable vs uncountable.", priority: "medium",
                subtopics: ["Much vs Many", "Few vs Little", "Some vs Any", "Countable/Uncountable"],
                guidelines: [
                    "Diferença entre Countable e Uncountable nouns.",
                    "Uso de few/a few e little/a little.",
                    "Quantificadores em contextos específicos."
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
    for (const [k, s] of Object.entries(SUBJECTS))
        s.topics.forEach(t => all.push({ ...t, subjectKey: k, subjectName: s.name, subjectIcon: s.icon }));
    return all;
}
const allTopics = getAllTopics();
const totalTopics = allTopics.length;
const PRIORITY_LABELS = { high: 'Alta Prioridade', medium: 'Média', low: 'Baixa' };

// ===== RENDER SUBJECT =====
function renderSubject(key) {
    const sub = SUBJECTS[key];
    const container = $(`#tab-${key}`);
    let html = `<div class="subject-header"><span class="subject-header-icon">${sub.icon}</span><h1>${sub.name}</h1></div>`;
    html += `<p class="subject-description">${sub.desc}</p><div class="topics-grid">`;
    sub.topics.forEach((t, i) => {
        const checked = isStudied(t.id) ? 'checked' : '';
        const sc = isStudied(t.id) ? 'studied' : '';
        html += `<div class="topic-card ${sc}" data-id="${t.id}">
            <div class="topic-card-header"><span class="topic-number">${i + 1}</span>
                <label class="topic-check" onclick="event.stopPropagation()">
                    <input type="checkbox" ${checked} onchange="toggleStudied('${t.id}');this.closest('.topic-card').classList.toggle('studied')">
                </label>
            </div>
            <h3>${t.name}</h3><p class="topic-card-desc">${t.desc}</p>
            <div class="topic-tags"><span class="topic-tag priority-${t.priority}">${PRIORITY_LABELS[t.priority]}</span></div>
            <div class="topic-card-footer">
                <span class="topic-materials-count">📋 Diretrizes</span>
                <button class="topic-expand-btn" onclick="openModal('${key}','${t.id}')">Ver detalhes →</button>
            </div>
        </div>`;
    });
    html += '</div>';
    container.innerHTML = html;
    container.querySelectorAll('.topic-card').forEach(card => {
        card.addEventListener('click', e => {
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
    // Subtopics
    html += `<div class="modal-section"><h3 class="modal-section-title">🔍 Subtópicos</h3><div class="modal-subtopics">`;
    (topic.subtopics || []).forEach(s => { html += `<span class="modal-subtopic">${s}</span>`; });
    html += '</div></div>';
    // Guidelines
    html += `<div class="modal-section"><h3 class="modal-section-title">💡 Orientações de Estudo</h3><div class="guidelines-list">`;
    if (topic.guidelines && topic.guidelines.length > 0) {
        html += '<ul>';
        topic.guidelines.forEach(g => { html += `<li>${g}</li>`; });
        html += '</ul>';
    } else {
        html += '<p style="color:var(--text-muted)">Sem orientações específicas para este tema.</p>';
    }
    html += '</div></div>';

    $('#modalContent').innerHTML = html;
    $('#modalOverlay').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() { $('#modalOverlay').classList.add('hidden'); document.body.style.overflow = ''; }
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
$$('.sidebar-btn').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));
$$('.subject-progress-card').forEach(card => card.addEventListener('click', () => switchTab(card.dataset.subject)));

// ===== SEARCH =====
function normalize(str) { return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase(); }
function searchTopics(query) {
    if (!query.trim()) return [];
    const q = normalize(query);
    return allTopics.filter(t =>
        normalize(t.name).includes(q) || normalize(t.desc).includes(q) ||
        normalize(t.subjectName).includes(q) ||
        t.subtopics.some(s => normalize(s).includes(q))
    ).slice(0, 12);
}
const searchInput = $('#searchInput'), searchResults = $('#searchResults');
searchInput.addEventListener('input', () => {
    const q = searchInput.value;
    if (!q.trim()) { searchResults.classList.add('hidden'); return; }
    const results = searchTopics(q);
    if (!results.length) {
        searchResults.innerHTML = '<div class="search-result-empty">Nenhum tema encontrado</div>';
    } else {
        searchResults.innerHTML = results.map(t => `
            <div class="search-result-item" data-sub="${t.subjectKey}" data-id="${t.id}">
                <span class="search-result-icon">${t.subjectIcon}</span>
                <div class="search-result-info"><div class="search-result-name">${t.name}</div>
                <div class="search-result-subject">${t.subjectName}</div></div>
            </div>`).join('');
    }
    searchResults.classList.remove('hidden');
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            switchTab(item.dataset.sub);
            setTimeout(() => openModal(item.dataset.sub, item.dataset.id), 100);
            searchResults.classList.add('hidden'); searchInput.value = '';
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
        const b = $(`#badge-${key}`); if (b) b.textContent = `${done}/${total}`;
        const sp = $(`#sp-${key}`); if (sp) sp.textContent = `${done}/${total}`;
        const f = $(`#spfill-${key}`); if (f) f.style.width = `${pct}%`;
    }
    const pct = totalTopics ? Math.round((totalDone / totalTopics) * 100) : 0;
    const sd = $('#statDone'); if (sd) sd.textContent = totalDone;
    const st = $('#statTotal'); if (st) st.textContent = totalTopics;
    const sp = $('#statPending'); if (sp) sp.textContent = totalTopics - totalDone;
    const se = $('#statPercent'); if (se) se.textContent = pct + '%';
    const mf = $('#progressMiniFill'); if (mf) mf.style.width = pct + '%';
    const mt = $('#progressMiniText'); if (mt) mt.textContent = pct + '%';
}

// ===== INIT =====
for (const key of Object.keys(SUBJECTS)) renderSubject(key);
updateAllProgress();
