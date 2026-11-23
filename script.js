// Dados do Roteiro ("Sobre o que falar" sincronizado por seção)
const sectionNotes = {
  "hero": {
    title: "Capa & Epígrafe",
    objective: "Cumprimentar a banca examinadora, apresentar o título do projeto de pesquisa e introduzir a citação de Richard Feynman.",
    talkingPoints: [
      "Cumprimente cordialmente os membros da banca examinadora e o orientador Prof. Dr. Guilherme A. Cardoso.",
      "Apresente seu nome e o título: 'Comparação entre Programação Orientada a Objetos e Design Orientado a Dados em C++ aplicada ao método de Runge-Kutta de 4ª Ordem: Uma Análise do Custo Computacional e da Abstração'.",
      "Destaque a epígrafe de Richard Feynman (1952): fazer as coisas por uma razão sensata, investigando com rigor o real impacto das escolhas de software."
    ],
    transition: "Inicie a rolagem apresentando a contextualização da engenharia de software e a delimitação do escopo."
  },
  "origem": {
    title: "01. Introdução & Contextualização",
    objective: "Explicar a busca por expressividade da POO, a escolha de C++ e a delimitação madura a partir do problema do canhão de Gauss.",
    talkingPoints: [
      "A evolução da Engenharia de Software: a priorização histórica da POO para reduzir complexidade cognitiva por meio de classes e encapsulamento.",
      "C++ como linguagem multiparadigmática e compilada: ambiente determinístico sem máquinas virtuais para medir o custo do paradigma de forma pura.",
      "Origem e Delimitação: O problema inicial do Canhão de Gauss (Coilgun) e a delimitação metodológica ao integrador numérico RK4 para viabilizar o rigor da pesquisa sem gargalos de hardware físico."
    ],
    transition: "Apresente como a relação de troca entre expressividade e desempenho formula o problema central."
  },
  "problema": {
    title: "02. Problema de Pesquisa",
    objective: "Apresentar a tensão entre expressividade e desempenho, enunciando a pergunta de pesquisa formal.",
    talkingPoints: [
      "A tensão central: a abstração facilita a manutenção e notação, mas introduz vtables e cache misses.",
      "DOD como alternativa centrada na máquina para abstração de custo zero (zero-cost abstractions).",
      "Pergunta de Pesquisa: 'Qual é o custo computacional e de abstração imposto pela POO em comparação com o DOD em C++ na implementação de algoritmos numéricos para a resolução de equações diferenciais?'"
    ],
    transition: "Apresente os objetivos definidos para responder a esta pergunta."
  },
  "objetivos": {
    title: "03. Objetivos do Trabalho",
    objective: "Apresentar o objetivo geral, responder às 4 perguntas estratégicas e elencar as etapas específicas.",
    talkingPoints: [
      "Objetivo Geral: Analisar o impacto computacional e o custo de abstração de POO e DOD em C++ na resolução de equações diferenciais via RK4.",
      "Por que comparar dois paradigmas: Isolar o impacto da arquitetura de software mantendo a complexidade O(N) invariante.",
      "Por que em C++: Código nativo compilado sem máquinas virtuais ou Garbage Collector para controle determinístico de memória.",
      "Por que métodos numéricos: Laços com milhões de iterações tornam o padrão de acesso à memória e as cache misses o gargalo determinante.",
      "Por que POO e DOD: Confronto direto entre modelagem mental humana (POO/AoS) e simpatia mecânica com o hardware (DOD/SoA).",
      "Objetivos Específicos: Modelo Lorenz RK4, implementação sob GCC -O3, coleta com perf stat (K=30) e matriz de decisão."
    ],
    transition: "Mostre o panorama da literatura científica e onde se localiza a lacuna acadêmica."
  },
  "estado-arte": {
    title: "04. Estado da Arte & A Lacuna",
    objective: "Demonstrar o que a literatura já abordou e explicitar a lacuna que justifica a pesquisa.",
    talkingPoints: [
      "Estudos Interlinguagens (Prechelt, Pereira): comparam linguagens distintas misturando runtimes, GC e interpretadores com o paradigma.",
      "Manuais de C++ (Fog, Bulka & Mayhew): tratam otimização e vtables como truques práticos isolados da indústria.",
      "A Lacuna Identificada: ausência de estudos empíricos que comparem formalmente POO e DOD aplicando RK4 sob a mesma linguagem compilada."
    ],
    transition: "Apresente a única seção técnica detalhada: o conflito estrutural entre AoS e SoA."
  },
  "aos-soa": {
    title: "05. Seção Técnica: AoS vs. SoA",
    objective: "Explicar didaticamente a mecânica das cache misses e linhas de 64 bytes, demonstrando no simulador interativo.",
    talkingPoints: [
      "Mecânica das Cache Misses: O processador transfere blocos indivisíveis de 64 bytes. Quando o dado não está nas caches L1/L2/L3, o pipeline sofre stall de centenas de ciclos.",
      "POO clássica (Array of Structures - AoS): Ao iterar para atualizar um atributo, carrega atributos adjacentes inúteis, gerando cache misses frequentes por acesso disperso (stride).",
      "Data-Oriented Design (Structure of Arrays - SoA): Vetores contíguos por atributo preenchem 100% da linha de 64 bytes com dados úteis, reduzindo drasticamente cache misses e viabilizando SIMD.",
      "Demonstração Prática: Acione o botão de execução no simulador na tela para contrastar o aproveitamento de banda e vetorização."
    ],
    transition: "Conecte essa mecânica de dados às hipóteses formais de pesquisa."
  },
  "hipoteses": {
    title: "06. Hipóteses de Pesquisa",
    objective: "Apresentar as hipóteses H0 e H1 formuladas no projeto de pesquisa.",
    talkingPoints: [
      "Hipótese Nula (H0): POO e DOD não produzem diferenças estatisticamente significativas em tempo, cache misses e instruções para RK4 com O(N) idêntico (premissa de que o compilador -O3 neutraliza o custo).",
      "Hipótese Alternativa (H1): DOD apresentará reduções significativas em cache misses e tempo total, comprovando a penalidade imposta pela abstração da POO."
    ],
    transition: "Apresente a metodologia experimental montada para testar as hipóteses."
  },
  "metodologia": {
    title: "07. Metodologia da Pesquisa",
    objective: "Detalhar as 4 etapas metodológicas estruturadas do projeto.",
    talkingPoints: [
      "Etapa a: Seleção invariante do algoritmo RK4 sob o Sistema de Lorenz em precisão double.",
      "Etapa b: Implementação C++ rigorosamente equivalente: POO (AoS + vtables) vs DOD (SoA) em GCC -O3 -march=native.",
      "Etapa c: Coleta determinística com contadores de hardware (perf stat, L1/L3 misses, IPC) variando a escala de N com K=30 repetições.",
      "Etapa d: Análise estatística (média, desvio) e correlação de tempo de hardware frente a SLOC e complexidade."
    ],
    transition: "Apresente os resultados esperados a partir da literatura de arquitetura."
  },
  "resultados": {
    title: "08. Resultados Esperados",
    objective: "Apresentar a pré-análise e os desdobramentos técnicos previstos.",
    talkingPoints: [
      "Quebra de Cache: para N pequeno a diferença será sutil; ao extrapolar a L3, a POO exibirá degradação superlinear por acessos dispersos.",
      "Custo de vtables: maior volume de instruções executadas e menor IPC na POO.",
      "Auto-vetorização: layout SoA viabiliza SIMD nativa, processando múltiplos pontos por ciclo.",
      "Matriz de Decisão: diretrizes práticas sobre onde a facilidade de modelagem da POO compensa e onde o DOD é mandatório."
    ],
    transition: "Finalize com o cronograma de atividades e encerramento."
  },
  "conclusao": {
    title: "09. Cronograma & Conclusão",
    objective: "Apresentar o cronograma oficial de etapas do TCC e encerrar a apresentação.",
    talkingPoints: [
      "Cronograma oficial de atividades conforme submetido ao colegiado.",
      "Próximos passos: finalização dos módulos, baterias experimentais no laboratório e redação final da monografia.",
      "Agradecimentos à banca avaliadora e orientador, abrindo para considerações e perguntas."
    ],
    transition: "Fim da apresentação formal."
  }
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  setupScrollSpy();
  setupScrollProgressBar();
  setupTimer();
  setupSpeakerNotesDrawer();
  setupInPageNotesAccordions();
  setupInteractiveSimulator();
  setupBackToTop();
  setupKeyboardShortcuts();
});

// 1. Barra de Progresso de Rolagem
function setupScrollProgressBar() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;
  });
}

// 2. ScrollSpy: Rastreia a seção visível e atualiza o menu superior
let currentActiveSectionId = "hero";

function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link-item a');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        currentActiveSectionId = id;

        // Atualiza links do menu
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Atualiza a gaveta de anotações caso esteja aberta
        updateDrawerNotes(id);
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

// 3. Gaveta Lateral de Anotações do Apresentador
const notesDrawer = document.getElementById('notesDrawer');
const notesContent = document.getElementById('notesContent');
const notesCurrentSlideEl = document.getElementById('notesCurrentSlide');
const btnToggleNotes = document.getElementById('btnToggleNotes');
const btnCloseNotes = document.getElementById('btnCloseNotes');

function setupSpeakerNotesDrawer() {
  if (!btnToggleNotes || !notesDrawer) return;

  btnToggleNotes.addEventListener('click', () => toggleDrawer());
  if (btnCloseNotes) {
    btnCloseNotes.addEventListener('click', () => toggleDrawer(false));
  }
}

function toggleDrawer(forceState) {
  const isOpen = notesDrawer.classList.contains('open');
  const shouldOpen = forceState !== undefined ? forceState : !isOpen;

  if (shouldOpen) {
    notesDrawer.classList.add('open');
    btnToggleNotes.classList.add('active');
    updateDrawerNotes(currentActiveSectionId);
  } else {
    notesDrawer.classList.remove('open');
    btnToggleNotes.classList.remove('active');
  }
}

function updateDrawerNotes(sectionId) {
  if (!notesDrawer.classList.contains('open')) return;

  const note = sectionNotes[sectionId] || sectionNotes["hero"];
  notesCurrentSlideEl.textContent = note.title;

  let bulletsHtml = note.talkingPoints.map(point => `<li>${point}</li>`).join('');

  notesContent.innerHTML = `
    <div style="margin-bottom: 20px;">
      <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 6px;">
        🎯 Objetivo da Seção
      </div>
      <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.5;">${note.objective}</p>
    </div>

    <div style="margin-bottom: 20px;">
      <div style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--accent-amber); margin-bottom: 8px;">
        💬 Sobre o que falar (Roteiro Guia)
      </div>
      <ul style="list-style: none; padding: 0;">
        ${bulletsHtml}
      </ul>
    </div>

    <div style="background: rgba(245, 158, 11, 0.1); border: 1px dashed rgba(245, 158, 11, 0.4); padding: 12px; border-radius: 8px; font-size: 0.85rem; color: #fbbf24; line-height: 1.45;">
      <strong>🔗 Conexão / Transição:</strong> ${note.transition}
    </div>
  `;
}

// 4. Acordeões de Anotações dentro de cada Seção
function setupInPageNotesAccordions() {
  const toggles = document.querySelectorAll('.section-notes-toggle');
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const body = document.getElementById(targetId);
      if (body) {
        body.classList.toggle('open');
        const icon = toggle.querySelector('.toggle-icon');
        if (icon) {
          icon.textContent = body.classList.contains('open') ? '▲ Ocultar' : '▼ Expandir';
        }
      }
    });
  });
}

// 5. Cronômetro da Apresentação
let timerSeconds = 0;
let timerInterval = null;
let isTimerRunning = false;
const timerDisplay = document.getElementById('timerDisplay');
const btnTimerToggle = document.getElementById('btnTimerToggle');
const btnTimerReset = document.getElementById('btnTimerReset');

function setupTimer() {
  if (!btnTimerToggle) return;

  function updateTimerDisplay() {
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  function startTimer() {
    if (isTimerRunning) return;
    isTimerRunning = true;
    btnTimerToggle.textContent = '⏸';
    timerInterval = setInterval(() => {
      timerSeconds++;
      updateTimerDisplay();
    }, 1000);
  }

  function pauseTimer() {
    isTimerRunning = false;
    btnTimerToggle.textContent = '▶';
    clearInterval(timerInterval);
  }

  function toggleTimer() {
    if (isTimerRunning) pauseTimer();
    else startTimer();
  }

  function resetTimer() {
    pauseTimer();
    timerSeconds = 0;
    updateTimerDisplay();
  }

  btnTimerToggle.addEventListener('click', toggleTimer);
  btnTimerReset.addEventListener('click', resetTimer);
}

// 6. Botão Voltar ao Topo
function setupBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 7. Atalhos de Teclado
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 's' || e.key === 'S' || e.key === 'n' || e.key === 'N') {
      toggleDrawer();
    } else if (e.key === 'Escape') {
      toggleDrawer(false);
    } else if (e.key === 't' || e.key === 'T') {
      if (btnTimerToggle) btnTimerToggle.click();
    }
  });
}

// 8. Simulador Interativo AoS vs. SoA
function setupInteractiveSimulator() {
  const tabAos = document.getElementById('tabAos');
  const tabSoa = document.getElementById('tabSoa');
  const btnRunStep = document.getElementById('btnRunStep');
  const memCellsContainer = document.getElementById('memCellsContainer');
  const memLegendText = document.getElementById('memLegendText');
  const statBandwidth = document.getElementById('statBandwidth');
  const statSimd = document.getElementById('statSimd');
  const statLatency = document.getElementById('statLatency');

  if (!tabAos || !tabSoa || !btnRunStep || !memCellsContainer) return;

  let currentMode = 'AOS';

  function renderCells() {
    memCellsContainer.innerHTML = '';

    if (currentMode === 'AOS') {
      memLegendText.textContent = "Disposição na Memória: [P0: x, y, z, vx] [P1: x, y, z, vx] [P2: x, y, z, vx] [P3: x, y, z, vx] (AoS Disperso)";
      statBandwidth.textContent = "25%";
      statBandwidth.style.color = "var(--accent-rose)";
      statSimd.textContent = "Inibida (AoS disperso)";
      statSimd.style.color = "var(--accent-rose)";
      statLatency.textContent = "Elevada (Saltos de Stride)";
      statLatency.style.color = "var(--accent-amber)";

      for (let obj = 0; obj < 4; obj++) {
        const fields = ['x', 'y', 'z', 'vx'];
        fields.forEach(f => {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.dataset.field = f;
          cell.dataset.obj = obj;
          cell.textContent = `P${obj}.${f}`;
          memCellsContainer.appendChild(cell);
        });
      }
    } else {
      memLegendText.textContent = "Disposição na Memória: X[0..7] Contíguo | Y[0..7] Contíguo | Z[0..7] Contíguo (SoA Compacto)";
      statBandwidth.textContent = "100%";
      statBandwidth.style.color = "var(--accent-emerald)";
      statSimd.textContent = "AVX2 / 256-bit (4 doubles/ciclo)";
      statSimd.style.color = "var(--accent-emerald)";
      statLatency.textContent = "Mínima (Linear Prefetching)";
      statLatency.style.color = "var(--accent-emerald)";

      for (let i = 0; i < 8; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.field = 'x';
        cell.textContent = `x[${i}]`;
        memCellsContainer.appendChild(cell);
      }
      for (let i = 0; i < 8; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.dataset.field = 'y';
        cell.textContent = `y[${i}]`;
        memCellsContainer.appendChild(cell);
      }
    }
  }

  function runSimulation() {
    const cells = memCellsContainer.querySelectorAll('.cell');

    if (currentMode === 'AOS') {
      cells.forEach(cell => {
        if (cell.dataset.field === 'x') {
          cell.classList.add('active-load');
          cell.classList.remove('waste-load');
        } else {
          cell.classList.add('waste-load');
          cell.classList.remove('active-load');
        }
      });
    } else {
      cells.forEach(cell => {
        if (cell.dataset.field === 'x') {
          cell.classList.add('active-load');
          cell.classList.remove('waste-load');
        } else {
          cell.classList.remove('active-load', 'waste-load');
        }
      });
    }
  }

  tabAos.addEventListener('click', () => {
    currentMode = 'AOS';
    tabAos.classList.add('active');
    tabSoa.classList.remove('active');
    renderCells();
  });

  tabSoa.addEventListener('click', () => {
    currentMode = 'SOA';
    tabSoa.classList.add('active');
    tabAos.classList.remove('active');
    renderCells();
  });

  btnRunStep.addEventListener('click', runSimulation);

  // Inicializa células
  renderCells();
}
