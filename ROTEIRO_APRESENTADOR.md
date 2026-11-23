# Roteiro do Apresentador: Defesa do Projeto de Pesquisa (TCC)

**Aluno:** Victor Gomes Cardoso  
**Orientador:** Prof. Dr. Guilherme A. Cardoso  
**Instituição:** Centro Universitário Filadélfia (UniFil) – Bacharelado em Ciência da Computação  
**Título Oficial:** *Comparação entre Programação Orientada a Objetos e Design Orientado a Dados em C++ Aplicada ao Método de Runge-Kutta de 4ª Ordem: Uma Análise do Custo Computacional e da Abstração*  
**Tempo estimado total:** 15 a 20 minutos (média de 1.5 a 2 minutos por seção)

---

## 📌 Guia de Atalhos da Apresentação Web
Abra o arquivo `index.html` em qualquer navegador:
- `S` ou `N`: Abre/fecha a gaveta lateral de **Roteiro de Apoio**
- `T`: Inicia/pausa o cronômetro no topo da tela
- Rolar a página com o scroll do mouse ou trackpad percorre naturalmente os cards de 1 em 1 por nível.

---

## Capa & Epígrafe
- **Tempo estimado:** 1 minuto
- **Objetivo:** Cumprimentar a banca examinadora, identificar o projeto e introduzir a citação de Richard Feynman.
- **Sobre o que falar:**
  - *"Boa tarde aos membros da banca examinadora e ao meu orientador Prof. Dr. Guilherme."*
  - *"Meu nome é Victor Gomes Cardoso e apresento o projeto de pesquisa do meu TCC em Ciência da Computação."*
  - Enfatize a epígrafe de Richard Feynman (1952): *"Nós temos de fazer as coisas por um bom motivo, uma razão sensata; não apenas porque os outros países fazem."*
  - Conecte com a motivação do trabalho: investigar com base no silício real os motivos e impactos de cada paradigma arquitetural.
- **Transição:** *"Passamos à introdução e à delimitação do escopo da pesquisa."*

---

## 01. Introdução & Contextualização
- **Tempo estimado:** 2 minutos
- **Objetivo:** Explicar a priorização histórica da POO, a escolha de C++ e a delimitação metodológica a partir do Canhão de Gauss.
- **Sobre o que falar:**
  - **Evolução da Engenharia de Software:** A POO consolidou-se para reduzir a complexidade cognitiva do programador por meio de classes e encapsulamento (Dahl & Nygaard, 1966; Goldman & Robinson, 1983).
  - **A Escolha da Linguagem C++:** É nativamente multiparadigmática e compila diretamente para código de máquina nativo, permitindo isolar o custo estrito do paradigma sem os ruídos de máquinas virtuais (Stroustrup, 2013).
  - **Origem e Delimitação:** O trabalho nasceu da investigação do Canhão de Gauss (Coilgun) e da pergunta se um paradigma afeta a dispersão de energia do disparo. Para evitar gargalos de construção física, eletrônica de potência e física eletromagnética, o escopo foi delimitado ao núcleo matemático: a resolução de equações diferenciais sob o método de Runge-Kutta de 4ª Ordem (RK4) aplicado ao Sistema de Lorenz (Wazlawick, 2020).
- **Transição:** *"Essa transição conduz à formulação do problema de pesquisa."*

---

## 02. Problema de Pesquisa
- **Tempo estimado:** 1.5 minutos
- **Objetivo:** Confrontar a busca por expressividade da POO com a simpatia mecânica do DOD, apresentando a pergunta formal.
- **Sobre o que falar:**
  - **Expressividade vs. Desempenho:** A abstração facilita a manutenção e aproxima o código da notação matemática, mas mecanismos como polimorfismo dinâmico (vtables) introduzem sobrecarga de cache misses e indireção.
  - **Data-Oriented Design (DOD):** Abordagem centrada na máquina que visa a organização física contígua dos dados na memória e abstrações de custo zero (Acton, 2014; Fabian, 2018).
  - **Pergunta Formal:** Leia a pergunta norteadora com clareza: *"Qual é o custo computacional e de abstração imposto pela Programação Orientada a Objetos (POO) em comparação com o Data-Oriented Design (DOD) em C++ na implementação de algoritmos numéricos para a resolução de equações diferenciais?"*
- **Transição:** *"Para responder a essa pergunta, definimos os objetivos da pesquisa."*

---

## 03. Objetivos
- **Tempo estimado:** 2 minutos
- **Objetivo:** Apresentar com clareza o objetivo geral, fundamentar as 4 perguntas estratégicas e elencar as etapas específicas.
- **Sobre o que falar:**
  - **Objetivo Geral:** Analisar o impacto computacional e o custo de abstração de POO e DOD em C++ na resolução de EDOs via RK4, avaliando o compromisso entre expressividade e eficiência de execução.
  - **As 4 Perguntas Estratégicas:**
    1. *Por que comparar dois paradigmas?* Para isolar o impacto estrito da arquitetura de software sobre o hardware, mantendo a complexidade algorítmica $O(N)$ rigorosamente idêntica.
    2. *Por que em C++?* Linguagem compilada nativa sem máquinas virtuais ou Garbage Collector, viabilizando controle determinístico e medições puras de hardware.
    3. *Por que aplicado a métodos numéricos?* Algoritmos iterativos executam milhões de repetições sobre os mesmos dados; o padrão de acesso à memória e as taxas de *cache misses* tornam-se o gargalo determinante de desempenho.
    4. *Por que POO e DOD?* Representam o contraste direto entre o modelo mental humano (POO/AoS) versus a simpatia mecânica com a física do processador (DOD/SoA).
  - **Objetivos Específicos:** 1) Formalizar o modelo numérico (RK4 Lorenz); 2) Implementar sob os dois paradigmas em C++; 3) Estabelecer métricas físicas (tempo via `<chrono>`, falhas de cache L1/L3 via `perf stat` e SIMD); 4) Aferir qualidade do código (SLOC e manutenibilidade); 5) Comparar com repetições determinísticas ($K=30$) e formular a matriz de decisão.
- **Transição:** *"Vejamos agora o que a literatura científica diz a respeito."*

---

## 04. Estado da Arte e A Lacuna
- **Tempo estimado:** 1.5 a 2 minutos
- **Objetivo:** Apontar as limitações da literatura e a originalidade da proposta.
- **Sobre o que falar:**
  - **Estudos Interlinguagens:** Pesquisas clássicas (Prechelt, 2000; Pereira et al., 2017) comparam C, C++, Java e Python, misturando a influência de runtimes, garbage collectors e interpretadores com o paradigma.
  - **Manuais de C++:** Especialistas (Agner Fog, Bulka & Mayhew, Mike Acton) abordam AoS vs. SoA e tabelas virtuais como truques isolados de micro-otimização para desenvolvimento comercial/jogos.
  - **A Lacuna Científica:** Falta um estudo empírico formal, metódico e quantitativo que compare expressamente POO e DOD dentro do mesmo ecossistema nativo C++ sobre integradores numéricos determinísticos.
- **Transição:** *"Avançamos para a seção técnica do trabalho: o conflito estrutural entre AoS e SoA."*

---

## 05. Seção Técnica: AoS vs. SoA (Demonstração Interativa)
- **Tempo estimado:** 3 minutos
- **Objetivo:** Explicar a mecânica das cache misses, a linha de cache de 64 bytes e demonstrar o simulador interativo.
- **Sobre o que falar:**
  - **A Mecânica das Cache Misses:** A CPU não transfere bytes isolados; ela move blocos indivisíveis de 64 bytes (linhas de cache). Se o dado não está nas caches L1/L2/L3, o processador sofre um *stall* de dezenas ou centenas de ciclos de clock para buscá-lo. Em laços numéricos iterativos, falhas de cache são o gargalo primário.
  - **AoS (POO):** Cada partícula encapsula seus atributos `{x, y, z, vx, vy, vz}`. Ao atualizar apenas a coordenada `x`, a CPU é forçada a trazer a estrutura inteira de cada objeto para a linha de cache, descartando mais de 70% dos dados transferidos e gerando frequentes *cache misses* por acesso disperso (*stride*).
  - **SoA (DOD):** Atributos são segregados em vetores paralelos contíguos (`x[]`, `y[]`, `z[]`). Ao ler `x`, 100% da linha de cache contém dados úteis, eliminando desperdício, minimizando *cache misses* e habilitando vetorização SIMD (AVX2).
  - **Demonstração no Simulador:** Alterne entre AoS e SoA e clique em *"▶ Executar Passo: Atualizar Variável X"*, mostrando as células em vermelho (desperdício) no AoS versus células em verde (100% útil) no SoA.
- **Transição:** *"Com a mecânica de memória esclarecida, apresentamos as hipóteses formais de teste."*

---

## 06. Hipóteses de Pesquisa
- **Tempo estimado:** 1 minuto
- **Objetivo:** Apresentar as formulações das hipóteses nula ($H_0$) e alternativa ($H_1$).
- **Sobre o que falar:**
  - **Hipótese Nula ($H_0$):** A estruturação em POO ou DOD em C++ não produz diferenças estatisticamente significativas no tempo de execução, falhas de cache L1/L3 e instruções para RK4 com $O(N)$ idêntico (assume que o compilador `-O3` neutraliza o custo).
  - **Hipótese Alternativa ($H_1$):** O DOD apresentará reduções estatisticamente significativas em cache misses e tempo total, comprovando empiricamente a penalidade de abstração imposta pela dispersão de memória da POO (Wazlawick, 2020).
- **Transição:** *"Vejamos o protocolo metodológico estruturado para testar essas hipóteses."*

---

## 07. Metodologia da Pesquisa
- **Tempo estimado:** 2 minutos
- **Objetivo:** Detalhar as 4 etapas metodológicas do projeto.
- **Sobre o que falar:**
  - **Etapa a (Modelo Matemático):** RK4 aplicado ao Sistema de Lorenz sob precisão `double` de 64 bits de passo fixo.
  - **Etapa b (Implementação C++):** POO (AoS com vtables) versus DOD (SoA contíguo) sob GCC com `-O3 -march=native`.
  - **Etapa c (Experimentação e Coleta):** Escalonamento progressivo de $N$ para mapear o confinamento em L1, L2, L3 e transbordamento para a DRAM. Coleta de contadores de hardware via `perf stat` com $K=30$ repetições para normalidade estatística.
  - **Etapa d (Análise dos Resultados):** Tratamento estatístico formal (média, desvio padrão) e avaliação do custo de abstração frente a métricas de software (SLOC e complexidade).
- **Transição:** *"A partir da teoria, o que antecipamos como resultados?"*

---

## 08. Resultados Esperados (Pré-Análise)
- **Tempo estimado:** 1.5 minutos
- **Objetivo:** Apresentar os desdobramentos técnicos previstos na fundamentação teórica.
- **Sobre o que falar:**
  - **Quebra de Cache:** Para $N$ pequeno a diferença será modesta; quando a carga extrapolar a L3, a POO exibirá degradação superlinear por cache misses contínuos.
  - **Custo de vtables:** Maior contagem de instruções e menor IPC na POO decorrente da dupla indireção de ponteiros.
  - **Auto-Vetorização SIMD:** O arranjo SoA viabiliza vetorização nativa pelo compilador, acelerando múltiplos dados simultaneamente.
  - **Matriz de Decisão Arquitetural:** Estabelecer limites práticos de quando a facilidade da POO compensa sua sobrecarga e onde o DOD torna-se indispensável.
- **Transição:** *"Finalizamos com o cronograma de atividades e considerações finais."*

---

## 09. Cronograma de Atividades & Encerramento
- **Tempo estimado:** 1 minuto
- **Objetivo:** Mostrar o cumprimento do cronograma oficial e colocar-se à disposição da banca.
- **Sobre o que falar:**
  - Apresente a matriz temporal oficial do projeto (UniFil 2026/2027).
  - Próximos passos imediatos: baterias automatizadas de testes com `perf` e redação da monografia.
  - Agradeça ao orientador Prof. Dr. Guilherme A. Cardoso e aos membros da banca examinadora.
  - Declare-se à disposição para perguntas e debates.
