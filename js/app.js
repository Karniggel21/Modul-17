// ============================================================================
// MODUL 17 – LERNPLATTFORM (APP CONTROLLER)
// ============================================================================

const AppState = {
  currentView: 'home',      // 'home' | 'dive' | 'vpsy' | 'flashcards'
  currentUnitId: null,      // e.g. 'dive-le01' or 'vpsy-le01'
  searchQuery: '',
  flashcards: {
    subjectFilter: 'all',   // 'all' | 'dive' | 'vpsy' | specific unit id
    statusFilter: 'all',    // 'all' | 'open' | 'repeat' | 'learned'
    currentIndex: 0,
    isFlipped: false,
    viewMode: 'single',     // 'single' | 'grid'
    autoAdvance: false,     // optional auto-advance after marking status
    cardStatus: {},         // { [cardId]: 'learned' | 'repeat' } (undefined = 'open')
    shuffledIds: null       // array of card ids or null
  },
  quizAnswers: {},          // { [unitId-qIndex]: selectedOptionIndex }
  revealedExercises: {}     // { [exerciseId]: true }
};

// LocalStorage Persistence
const STORAGE_KEY = 'modul17_learning_state_v2';

function saveState() {
  try {
    const dataToSave = {
      cardStatus: AppState.flashcards.cardStatus,
      autoAdvance: AppState.flashcards.autoAdvance,
      quizAnswers: AppState.quizAnswers
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
  } catch (e) {
    console.warn('Could not save state to localStorage', e);
  }
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      AppState.flashcards.cardStatus = parsed.cardStatus || {};
      AppState.flashcards.autoAdvance = !!parsed.autoAdvance;
      AppState.quizAnswers = parsed.quizAnswers || {};
      return;
    }
    // Migrate v1 state if present
    const oldSaved = localStorage.getItem('modul17_learning_state_v1');
    if (oldSaved) {
      const parsedOld = JSON.parse(oldSaved);
      if (parsedOld.learnedCards) {
        Object.keys(parsedOld.learnedCards).forEach(id => {
          if (parsedOld.learnedCards[id] === true) {
            AppState.flashcards.cardStatus[id] = 'learned';
          }
        });
      }
      AppState.quizAnswers = parsedOld.quizAnswers || {};
    }
  } catch (e) {
    console.warn('Could not load state from localStorage', e);
  }
}

// ============================================================================
// ROUTING & VIEW RENDERING
// ============================================================================

function navigateTo(view, unitId = null) {
  AppState.currentView = view;
  AppState.searchQuery = '';

  if (view === 'dive') {
    AppState.currentUnitId = unitId || DIVE_DATA.units[0].id;
  } else if (view === 'vpsy') {
    AppState.currentUnitId = unitId || VPSY_DATA.units[0].id;
  } else if (view === 'flashcards') {
    if (unitId) {
      AppState.flashcards.subjectFilter = unitId;
      AppState.flashcards.statusFilter = 'all';
      AppState.flashcards.currentIndex = 0;
      AppState.flashcards.isFlipped = false;
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function renderApp() {
  updateNavState();
  const main = document.getElementById('main-content');
  if (!main) return;

  switch (AppState.currentView) {
    case 'home':
      main.innerHTML = renderHomeView();
      break;
    case 'dive':
      main.innerHTML = renderSubjectView('dive', DIVE_DATA);
      break;
    case 'vpsy':
      main.innerHTML = renderSubjectView('vpsy', VPSY_DATA);
      break;
    case 'flashcards':
      main.innerHTML = renderFlashcardsView();
      break;
  }
}

function updateNavState() {
  const links = document.querySelectorAll('[data-nav-view]');
  links.forEach(link => {
    const targetView = link.getAttribute('data-nav-view');
    if (targetView === AppState.currentView) {
      link.classList.add('bg-slate-900', 'text-white');
      link.classList.remove('text-slate-700', 'hover:bg-slate-100');
    } else {
      link.classList.remove('bg-slate-900', 'text-white');
      link.classList.add('text-slate-700', 'hover:bg-slate-100');
    }
  });
}

// ============================================================================
// VIEW 1: HOME VIEW (Exakt nach Sketch & ohne Fülltexte)
// ============================================================================

function renderHomeView() {
  const allCards = [...DIVE_DATA.flashcards, ...VPSY_DATA.flashcards];
  const totalCards = allCards.length;
  const learnedCount = allCards.filter(c => AppState.flashcards.cardStatus[c.id] === 'learned').length;
  const repeatCount = allCards.filter(c => AppState.flashcards.cardStatus[c.id] === 'repeat').length;
  const learnedPercent = Math.round((learnedCount / totalCards) * 100);

  return `
    <div class="max-w-5xl mx-auto px-4 py-8">
      <!-- SKETCH CONTAINER -->
      <div class="rounded-2xl border-2 border-slate-300 bg-white p-6 md:p-10 shadow-sm">
        
        <!-- HEADER ZEILE AUS SKETCH: | MODUL 17 | -->
        <div class="border-b-2 border-dashed border-slate-200 pb-5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold bg-slate-900 text-white tracking-wider">
              MODUL 17
            </span>
            <span class="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Digitale Verwaltung & Verwaltungspsychologie III
            </span>
          </div>
          <div class="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
            <span>📅 Klausurtermin:</span>
            <span class="font-bold text-slate-900">01.12.2026 (120 Min.)</span>
          </div>
        </div>

        <!-- ZENTRIERTER GRUSS AUS SKETCH: Willkommen zurück! 👋 -->
        <div class="text-center my-10 md:my-12">
          <h1 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2">
            Willkommen zurück! <span class="inline-block">👋</span>
          </h1>
        </div>

        <!-- DIE 2 CARDS AUS DEM SKETCH: NEBENEINANDER -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          
          <!-- LINKE CARD: DIGITALE VERWALTUNG -->
          <div class="group relative rounded-xl border-2 border-slate-200 hover:border-slate-800 bg-slate-50/60 hover:bg-white p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-3xl">💻</span>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-100 text-sky-800">
                  40 % Klausuranteil
                </span>
              </div>
              <h2 class="text-lg font-bold text-slate-900 mb-4 tracking-wide uppercase">
                Digitale Verwaltung
              </h2>
              <div class="flex flex-wrap gap-1.5 mb-6">
                <button onclick="navigateTo('dive', 'dive-le01')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-sky-100 hover:text-sky-900 text-slate-700 transition-colors">LE 01 Transformation</button>
                <button onclick="navigateTo('dive', 'dive-le02')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-sky-100 hover:text-sky-900 text-slate-700 transition-colors">LE 02 Sicherheit</button>
                <button onclick="navigateTo('dive', 'dive-le03')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-sky-100 hover:text-sky-900 text-slate-700 transition-colors">LE 03 Change</button>
                <button onclick="navigateTo('dive', 'dive-le04')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-sky-100 hover:text-sky-900 text-slate-700 transition-colors">LE 04 Agilität</button>
              </div>
            </div>

            <!-- BUTTON AUS SKETCH: [ Öffnen ] -->
            <button onclick="navigateTo('dive')" class="w-full py-3 px-4 rounded-lg bg-white border-2 border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
              <span>[ Öffnen ]</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>

          <!-- RECHTE CARD: VERWALTUNGSPSYCHOLOGIE -->
          <div class="group relative rounded-xl border-2 border-slate-200 hover:border-slate-800 bg-slate-50/60 hover:bg-white p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-3xl">🧠</span>
                <span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800">
                  60 % Klausuranteil
                </span>
              </div>
              <h2 class="text-lg font-bold text-slate-900 mb-4 tracking-wide uppercase">
                Verwaltungspsychologie
              </h2>
              <div class="flex flex-wrap gap-1.5 mb-6">
                <button onclick="navigateTo('vpsy', 'vpsy-le01')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-purple-100 hover:text-purple-900 text-slate-700 transition-colors">LE 01–02 Interkulturell</button>
                <button onclick="navigateTo('vpsy', 'vpsy-le03')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-purple-100 hover:text-purple-900 text-slate-700 transition-colors">LE 03–05 Deeskalation</button>
                <button onclick="navigateTo('vpsy', 'vpsy-le06')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-purple-100 hover:text-purple-900 text-slate-700 transition-colors">LE 06–07 Virtuelle Führung & Komm.</button>
                <button onclick="navigateTo('vpsy', 'vpsy-le08')" class="px-2.5 py-1 rounded text-[11px] font-medium bg-slate-200/80 hover:bg-purple-100 hover:text-purple-900 text-slate-700 transition-colors">LE 08 Vertrauen & Widerstand</button>
                <button onclick="navigateTo('vpsy', 'vpsy-le04')" class="px-2.5 py-1 rounded text-[11px] font-semibold bg-purple-100 hover:bg-purple-200 text-purple-900 transition-colors">10 Techniken</button>
              </div>
            </div>

            <!-- BUTTON AUS SKETCH: [ Öffnen ] -->
            <button onclick="navigateTo('vpsy')" class="w-full py-3 px-4 rounded-lg bg-white border-2 border-slate-800 text-slate-900 hover:bg-slate-900 hover:text-white font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2">
              <span>[ Öffnen ]</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>

        <!-- UNTERE FULL-WIDTH CARD AUS SKETCH: KARTEIKARTEN-TRAINER -->
        <div class="rounded-xl border-2 border-slate-800 bg-slate-900 text-white p-6 md:p-8 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <span class="text-4xl">🗂️</span>
            <div>
              <div class="flex flex-wrap items-center gap-2 mb-2">
                <h2 class="text-xl font-bold tracking-wide uppercase">
                  Karteikarten-Trainer
                </h2>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-400 text-amber-950">
                  ${totalCards} Karten
                </span>
              </div>
              <div class="flex flex-wrap items-center gap-3 text-xs">
                <div class="w-40 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                  <div class="bg-emerald-400 h-2 rounded-full transition-all duration-300" style="width: ${learnedPercent}%"></div>
                </div>
                <span class="font-mono text-emerald-400 font-bold">✓ ${learnedCount} gelernt</span>
                <span class="font-mono text-amber-400 font-bold">⟳ ${repeatCount} noch üben</span>
              </div>
            </div>
          </div>

          <!-- BUTTON AUS SKETCH: [ Starten ] -->
          <button onclick="navigateTo('flashcards')" class="whitespace-nowrap px-8 py-3.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-amber-950 font-extrabold text-sm tracking-wider uppercase transition-colors shadow-sm flex items-center justify-center gap-2">
            <span>[ Starten ]</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </button>
        </div>

      </div>
    </div>
  `;
}

// ============================================================================
// VIEW 2 & 3: SUBJECT VIEW (DIGITALE VERWALTUNG & VERWALTUNGSPSYCHOLOGIE)
// ============================================================================

function renderSubjectView(type, subjectData) {
  const currentUnit = subjectData.units.find(u => u.id === AppState.currentUnitId) || subjectData.units[0];
  const isDive = type === 'dive';

  return `
    <div class="max-w-7xl mx-auto px-4 py-6">
      
      <!-- SUBJEKT-KOPF -->
      <div class="bg-white rounded-xl border border-slate-200 p-5 mb-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <button onclick="navigateTo('home')" class="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1">
              &larr; Startseite
            </button>
            <span class="text-slate-300">/</span>
            <span class="text-xs font-bold font-mono px-2 py-0.5 rounded ${isDive ? 'bg-sky-100 text-sky-800' : 'bg-purple-100 text-purple-800'}">
              ${subjectData.meta.code}
            </span>
          </div>
          <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span>${isDive ? '💻' : '🧠'}</span>
            <span>${subjectData.meta.title}</span>
          </h1>
          <p class="text-xs text-slate-600 mt-1">
            ${subjectData.meta.subtitle}
          </p>
        </div>

        <div class="flex items-center gap-2">
          <!-- SUCHLEISTE -->
          <div class="relative w-full sm:w-64">
            <input 
              type="text" 
              id="subject-search-input"
              value="${AppState.searchQuery}"
              oninput="handleSearch(this.value)"
              placeholder="Thema oder Begriff suchen..." 
              class="w-full text-xs rounded-lg border border-slate-300 py-2 pl-8 pr-3 text-slate-800 focus:outline-none focus:border-slate-800"
            />
            <svg class="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>

          <button onclick="navigateTo('flashcards', '${currentUnit.id}')" class="whitespace-nowrap px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm">
            <span>🗂️</span>
            <span>Karten (${subjectData.flashcards.filter(c => c.unit === currentUnit.id).length})</span>
          </button>
        </div>
      </div>

      <!-- HAUPTBEREICH MIT SEITENLEISTE (LERNEINHEITEN) & INHALT -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <!-- SIDEBAR: LERNEINHEITEN-LISTE -->
        <div class="lg:col-span-4 space-y-2">
          <div class="bg-white rounded-xl border border-slate-200 p-3 shadow-sm">
            <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1">
              Lerneinheiten (${subjectData.units.length})
            </div>
            <div class="space-y-1">
              ${subjectData.units.map(unit => {
                const isActive = unit.id === currentUnit.id;
                return `
                  <button 
                    onclick="selectUnit('${unit.id}')"
                    class="w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all flex items-start justify-between gap-2 ${
                      isActive 
                        ? 'bg-slate-900 text-white font-bold shadow-sm' 
                        : 'text-slate-700 hover:bg-slate-100 font-medium'
                    }"
                  >
                    <div>
                      <div class="text-[10px] font-mono opacity-70">${unit.code}</div>
                      <div class="leading-snug">${unit.title}</div>
                    </div>
                    <span class="text-[10px] px-1.5 py-0.5 rounded font-mono ${isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-200/80 text-slate-600'}">
                      ${unit.sections.length} Abschn.
                    </span>
                  </button>
                `;
              }).join('')}
            </div>

            <!-- SCHNELL-LINK FÜR VPSY: 10 DEESKALATIONSTECHNIKEN -->
            ${!isDive ? `
              <div class="mt-4 pt-3 border-t border-slate-200">
                <button 
                  onclick="selectUnit('vpsy-le04'); setTimeout(() => { const el = document.getElementById('vpsy-le04-s3'); if(el) el.scrollIntoView({behavior: 'smooth'}); }, 100);"
                  class="w-full p-2.5 rounded-lg text-xs font-bold bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 transition-colors flex items-center justify-between"
                >
                  <span class="flex items-center gap-1.5">
                    <span>🛡️</span>
                    <span>10 Deeskalationstechniken</span>
                  </span>
                  <span class="text-[10px] font-mono bg-purple-200/80 px-1.5 py-0.5 rounded">Tabelle</span>
                </button>
              </div>
            ` : ''}
          </div>

          <!-- LERNZIEL-BOX -->
          <div class="bg-amber-50/60 rounded-xl border border-amber-200 p-4 shadow-sm text-xs">
            <div class="font-bold text-amber-950 uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5">
              <span>🎯</span>
              <span>Klausurrelevante Lernziele (${currentUnit.code})</span>
            </div>
            <ul class="space-y-1.5 text-slate-700">
              ${currentUnit.lernziele.map(lz => `
                <li class="flex items-start gap-2">
                  <span class="text-amber-600 font-bold">&bull;</span>
                  <span class="leading-relaxed">${lz}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>

        <!-- MAIN CONTENT AREA -->
        <div class="lg:col-span-8 space-y-6">
          
          <!-- CURRENT UNIT BANNER -->
          <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 mb-1">
              <span>${currentUnit.code}</span>
              <span>·</span>
              <span>${subjectData.meta.code}</span>
            </div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">
              ${currentUnit.title}
            </h2>
          </div>

          <!-- SECTIONS / THEMENBLÖCKE -->
          <div class="space-y-6" id="unit-sections-container">
            ${renderFilteredSections(currentUnit.sections, AppState.searchQuery)}
          </div>

          <!-- ÜBUNGEN & FALLSTUDIEN DER VORLESUNG -->
          ${currentUnit.exercises && currentUnit.exercises.length > 0 ? `
            <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div class="flex items-center gap-2">
                <span class="text-lg">✍️</span>
                <h3 class="text-base font-bold text-slate-900">
                  Übungsaufgaben der Vorlesung & Lösungen
                </h3>
              </div>
              <div class="space-y-3">
                ${currentUnit.exercises.map((ex, exIdx) => {
                  const exId = `${currentUnit.id}-ex-${exIdx}`;
                  const isRevealed = AppState.revealedExercises[exId];
                  return `
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <div class="font-bold text-slate-900 mb-1">${ex.title}</div>
                      <p class="text-slate-700 leading-relaxed mb-3">${ex.question}</p>
                      
                      ${isRevealed ? `
                        <div class="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-slate-800 leading-relaxed mt-2 animate-fadeIn">
                          ${ex.answer}
                        </div>
                        <button onclick="toggleExercise('${exId}')" class="mt-2 text-[11px] font-semibold text-slate-500 hover:text-slate-800">
                          Lösung ausblenden &uarr;
                        </button>
                      ` : `
                        <button onclick="toggleExercise('${exId}')" class="px-3 py-1.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold transition-colors">
                          Lösung anzeigen &darr;
                        </button>
                      `}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <!-- MINI-QUIZ ZUR LERNEINHEIT -->
          ${currentUnit.quiz && currentUnit.quiz.length > 0 ? `
            <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-lg">📝</span>
                  <h3 class="text-base font-bold text-slate-900">
                    Wissens-Check (${currentUnit.code})
                  </h3>
                </div>
                <span class="text-xs text-slate-500 font-mono">${currentUnit.quiz.length} Fragen</span>
              </div>
              
              <div class="space-y-4 text-xs">
                ${currentUnit.quiz.map((qItem, qIdx) => {
                  const answerKey = `${currentUnit.id}-${qIdx}`;
                  const selected = AppState.quizAnswers[answerKey];
                  const hasAnswered = selected !== undefined;
                  const isCorrect = selected === qItem.correct;

                  return `
                    <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div class="font-bold text-slate-900 text-xs mb-3">
                        Frage ${qIdx + 1}: ${qItem.q}
                      </div>
                      <div class="space-y-1.5">
                        ${qItem.options.map((opt, optIdx) => {
                          let optClasses = 'border-slate-200 bg-white hover:bg-slate-100 text-slate-800';
                          if (hasAnswered) {
                            if (optIdx === qItem.correct) {
                              optClasses = 'border-emerald-300 bg-emerald-50 text-emerald-950 font-bold';
                            } else if (optIdx === selected) {
                              optClasses = 'border-rose-300 bg-rose-50 text-rose-950';
                            } else {
                              optClasses = 'border-slate-200 bg-white opacity-50';
                            }
                          }

                          return `
                            <button 
                              ${hasAnswered ? 'disabled' : ''}
                              onclick="answerQuiz('${answerKey}', ${optIdx})"
                              class="w-full text-left p-2.5 rounded-lg border text-xs transition-colors flex items-center justify-between ${optClasses}"
                            >
                              <span>${opt}</span>
                              ${hasAnswered && optIdx === qItem.correct ? '<span class="text-emerald-700 font-bold">&check;</span>' : ''}
                              ${hasAnswered && optIdx === selected && !isCorrect ? '<span class="text-rose-700 font-bold">&times;</span>' : ''}
                            </button>
                          `;
                        }).join('')}
                      </div>

                      ${hasAnswered ? `
                        <div class="mt-3 p-2.5 rounded-lg ${isCorrect ? 'bg-emerald-50 text-emerald-900 border border-emerald-200' : 'bg-rose-50 text-rose-900 border border-rose-200'} text-[11px] leading-relaxed">
                          <strong>${isCorrect ? 'Richtig!' : 'Leider nicht ganz:'}</strong> ${qItem.explanation}
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

        </div>
      </div>
    </div>
  `;
}

function renderFilteredSections(sections, query) {
  const q = (query || '').toLowerCase().trim();
  const filtered = sections.filter(sec => {
    if (!q) return true;
    return sec.title.toLowerCase().includes(q) ||
           sec.badge.toLowerCase().includes(q) ||
           sec.content.toLowerCase().includes(q) ||
           (sec.keyTakeaway && sec.keyTakeaway.toLowerCase().includes(q));
  });

  if (filtered.length === 0) {
    return `
      <div class="p-8 text-center bg-white rounded-xl border border-slate-200 text-slate-500 text-xs">
        Keine Abschnitte gefunden für „<strong>${query}</strong>“. Bitte Suchbegriff anpassen.
      </div>
    `;
  }

  return filtered.map(section => `
    <div id="${section.id}" class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm space-y-4">
      <div class="flex items-center justify-between border-b border-slate-100 pb-3">
        <span class="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
          ${section.badge}
        </span>
      </div>

      <h3 class="text-base font-bold text-slate-900">
        ${section.title}
      </h3>

      <div class="text-slate-700">
        ${section.content}
      </div>

      ${section.keyTakeaway ? `
        <div class="p-3 rounded-lg bg-slate-900 text-slate-100 text-xs flex items-start gap-2.5 mt-3">
          <span class="text-amber-400 text-sm">💡</span>
          <div>
            <span class="font-bold text-amber-400">Klausur-Merksatz:</span>
            <span class="text-slate-200">${section.keyTakeaway}</span>
          </div>
        </div>
      ` : ''}
    </div>
  `).join('');
}

// ============================================================================
// FLASHCARD HELPERS (3-Status-System: 'open' | 'repeat' | 'learned')
// ============================================================================

function getCardsBySubjectFilter() {
  const allCards = [...DIVE_DATA.flashcards, ...VPSY_DATA.flashcards];
  const sf = AppState.flashcards.subjectFilter;

  let cards = allCards;
  if (sf === 'dive') {
    cards = DIVE_DATA.flashcards;
  } else if (sf === 'vpsy') {
    cards = VPSY_DATA.flashcards;
  } else if (sf.startsWith('dive-') || sf.startsWith('vpsy-')) {
    cards = allCards.filter(c => c.unit === sf);
  }

  if (AppState.flashcards.shuffledIds) {
    const idMap = new Map(cards.map(c => [c.id, c]));
    const shuffled = AppState.flashcards.shuffledIds
      .map(id => idMap.get(id))
      .filter(Boolean);
    cards.forEach(c => {
      if (!shuffled.includes(c)) shuffled.push(c);
    });
    return shuffled;
  }

  return cards;
}

function getCardStatus(cardId) {
  return AppState.flashcards.cardStatus[cardId] || 'open';
}

function getActiveCards() {
  const subjectCards = getCardsBySubjectFilter();
  const stFilter = AppState.flashcards.statusFilter;

  if (stFilter === 'learned') {
    return subjectCards.filter(c => getCardStatus(c.id) === 'learned');
  }
  if (stFilter === 'repeat') {
    return subjectCards.filter(c => getCardStatus(c.id) === 'repeat');
  }
  if (stFilter === 'open') {
    return subjectCards.filter(c => getCardStatus(c.id) === 'open');
  }
  return subjectCards;
}

// ============================================================================
// VIEW 4: KARTEIKARTEN-TRAINER (Überarbeitet mit klarem 3-Status-System)
// ============================================================================

function renderFlashcardsView() {
  const allCards = [...DIVE_DATA.flashcards, ...VPSY_DATA.flashcards];
  const subjectCards = getCardsBySubjectFilter();
  const activeCards = getActiveCards();

  const subjectFilter = AppState.flashcards.subjectFilter;
  const statusFilter = AppState.flashcards.statusFilter;

  // Counts within current subject selection
  const countAll = subjectCards.length;
  const countLearned = subjectCards.filter(c => getCardStatus(c.id) === 'learned').length;
  const countRepeat = subjectCards.filter(c => getCardStatus(c.id) === 'repeat').length;
  const countOpen = subjectCards.filter(c => getCardStatus(c.id) === 'open').length;

  const total = activeCards.length;
  if (AppState.flashcards.currentIndex >= total) {
    AppState.flashcards.currentIndex = Math.max(0, total - 1);
  }

  const currentCard = activeCards[AppState.flashcards.currentIndex];
  const currentStatus = currentCard ? getCardStatus(currentCard.id) : 'open';
  const isFlipped = AppState.flashcards.isFlipped;

  // Border & Badge styles based on current card's status
  let cardBorderClass = 'border-slate-300';
  let statusBadgeHtml = '<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-600 border border-slate-200">⚪ Offen</span>';
  if (currentStatus === 'learned') {
    cardBorderClass = 'border-emerald-500 ring-2 ring-emerald-200';
    statusBadgeHtml = '<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">✓ Gelernt</span>';
  } else if (currentStatus === 'repeat') {
    cardBorderClass = 'border-amber-500 ring-2 ring-amber-200';
    statusBadgeHtml = '<span class="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300">⟳ Noch üben</span>';
  }

  return `
    <div class="max-w-4xl mx-auto px-4 py-8">
      
      <!-- KOPFZEILE -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div>
          <button onclick="navigateTo('home')" class="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 mb-1">
            &larr; Startseite
          </button>
          <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
            <span>🗂️</span>
            <span>Karteikarten-Trainer</span>
          </h1>
        </div>

        <!-- FACH-AUSWAHL & ANSICHT -->
        <div class="flex flex-wrap items-center gap-2">
          <select 
            onchange="setCardSubjectFilter(this.value)"
            class="text-xs rounded-lg border border-slate-300 py-2 px-3 bg-white text-slate-800 focus:outline-none focus:border-slate-800 font-semibold"
          >
            <option value="all" ${subjectFilter === 'all' ? 'selected' : ''}>Alle Fächer (${allCards.length})</option>
            <option value="dive" ${subjectFilter === 'dive' ? 'selected' : ''}>💻 Digitale Verwaltung (${DIVE_DATA.flashcards.length})</option>
            <option value="vpsy" ${subjectFilter === 'vpsy' ? 'selected' : ''}>🧠 Verwaltungspsychologie (${VPSY_DATA.flashcards.length})</option>
            <optgroup label="Digitale Verwaltung Einheiten">
              ${DIVE_DATA.units.map(u => `
                <option value="${u.id}" ${subjectFilter === u.id ? 'selected' : ''}>${u.shortTitle}</option>
              `).join('')}
            </optgroup>
            <optgroup label="Verwaltungspsychologie Einheiten">
              ${VPSY_DATA.units.map(u => `
                <option value="${u.id}" ${subjectFilter === u.id ? 'selected' : ''}>${u.shortTitle}</option>
              `).join('')}
            </optgroup>
          </select>

          <button 
            onclick="shuffleCards()" 
            class="px-3 py-2 rounded-lg bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors"
            title="Stapel mischen"
          >
            🔀 Mischen
          </button>

          <button 
            onclick="resetCardProgress()" 
            class="px-3 py-2 rounded-lg bg-white border border-slate-300 hover:bg-rose-50 hover:text-rose-700 hover:border-rose-300 text-slate-600 text-xs font-semibold transition-colors"
            title="Lernfortschritt zurücksetzen"
          >
            🔄 Reset
          </button>

          <!-- VIEW MODE TOGGLE (SINGLE / GRID) -->
          <div class="flex rounded-lg border border-slate-300 overflow-hidden bg-white">
            <button 
              onclick="setCardViewMode('single')" 
              class="px-3 py-2 text-xs font-bold ${AppState.flashcards.viewMode === 'single' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}"
              title="Einzelkarte"
            >
              Einzel
            </button>
            <button 
              onclick="setCardViewMode('grid')" 
              class="px-3 py-2 text-xs font-bold ${AppState.flashcards.viewMode === 'grid' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'}"
              title="Alle als Liste/Raster"
            >
              Liste
            </button>
          </div>
        </div>
      </div>

      <!-- STATUS-FILTER-LEISTE (Klickbare Tabs für Alle / Offen / Noch üben / Gelernt) -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
        <button 
          onclick="setCardStatusFilter('all')"
          class="p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
            statusFilter === 'all' 
              ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-sm' 
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
          }"
        >
          <span class="text-xs">Alle Karten</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded ${statusFilter === 'all' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-700'}">${countAll}</span>
        </button>

        <button 
          onclick="setCardStatusFilter('open')"
          class="p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
            statusFilter === 'open' 
              ? 'bg-slate-800 text-white border-slate-800 font-bold shadow-sm' 
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400'
          }"
        >
          <span class="text-xs">⚪ Offen</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded ${statusFilter === 'open' ? 'bg-slate-700 text-white' : 'bg-slate-100 text-slate-600'}">${countOpen}</span>
        </button>

        <button 
          onclick="setCardStatusFilter('repeat')"
          class="p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
            statusFilter === 'repeat' 
              ? 'bg-amber-500 text-white border-amber-500 font-bold shadow-sm' 
              : 'bg-amber-50/60 text-amber-900 border-amber-200 hover:border-amber-400'
          }"
        >
          <span class="text-xs font-semibold">⟳ Noch üben</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded font-bold ${statusFilter === 'repeat' ? 'bg-amber-600 text-white' : 'bg-amber-200/80 text-amber-950'}">${countRepeat}</span>
        </button>

        <button 
          onclick="setCardStatusFilter('learned')"
          class="p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
            statusFilter === 'learned' 
              ? 'bg-emerald-600 text-white border-emerald-600 font-bold shadow-sm' 
              : 'bg-emerald-50/60 text-emerald-900 border-emerald-200 hover:border-emerald-400'
          }"
        >
          <span class="text-xs font-semibold">✓ Gelernt</span>
          <span class="text-xs font-mono px-2 py-0.5 rounded font-bold ${statusFilter === 'learned' ? 'bg-emerald-700 text-white' : 'bg-emerald-200/80 text-emerald-950'}">${countLearned}</span>
        </button>
      </div>

      ${total === 0 ? `
        <div class="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-sm">
          <div class="text-3xl mb-2">✨</div>
          <h3 class="font-bold text-slate-900 text-base mb-1">Keine Karten in diesem Filter</h3>
          <p class="text-xs text-slate-600 mb-4">
            ${statusFilter === 'repeat' ? 'Du hast aktuell keine Karten als „Noch üben“ markiert.' : statusFilter === 'learned' ? 'Du hast in dieser Auswahl noch keine Karten als „Gelernt“ markiert.' : 'Keine offenen Karten mehr übrig!'}
          </p>
          <button onclick="setCardStatusFilter('all')" class="px-4 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs">
            Alle ${countAll} Karten anzeigen
          </button>
        </div>
      ` : AppState.flashcards.viewMode === 'single' ? `
        
        <!-- SINGLE CARD 3D FLIP CONTAINER -->
        <div class="space-y-4">
          <!-- PROGRESS BAR & CARD COUNT -->
          <div class="flex items-center justify-between text-xs font-mono text-slate-600">
            <span>Karte <strong>${AppState.flashcards.currentIndex + 1}</strong> von <strong>${total}</strong></span>
            <div class="flex items-center gap-2">
              ${statusBadgeHtml}
            </div>
          </div>

          <div class="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
            <div class="bg-slate-900 h-1.5 transition-all duration-200" style="width: ${((AppState.flashcards.currentIndex + 1) / total) * 100}%"></div>
          </div>

          <!-- THE FLIP CARD -->
          <div 
            onclick="flipCard()"
            class="group cursor-pointer select-none perspective"
          >
            <div 
              id="flashcard-inner-3d"
              class="flashcard-inner relative w-full min-h-[320px] rounded-2xl transform-style-3d shadow-md hover:shadow-lg ${isFlipped ? 'is-flipped' : ''}"
            >
              <!-- VORDERSEITE -->
              <div 
                class="absolute inset-0 w-full h-full p-8 rounded-2xl bg-white border-2 ${cardBorderClass} flex flex-col justify-between backface-hidden"
              >
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-700">
                    ${currentCard.unitLabel} · ${currentCard.category}
                  </span>
                  <span class="text-xs text-slate-400 group-hover:text-slate-700 transition-colors font-medium">
                    Klicken zum Umdrehen 🔄
                  </span>
                </div>

                <div class="py-8 text-center my-auto">
                  <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Frage / Begriff</span>
                  <p class="text-lg md:text-xl font-bold text-slate-900 leading-snug">
                    ${currentCard.front}
                  </p>
                </div>

                <div class="text-center text-[11px] text-slate-400">
                  Klicken oder <kbd class="px-1.5 py-0.5 rounded bg-slate-100 border text-slate-700 font-mono">Leertaste</kbd> zum Wenden
                </div>
              </div>

              <!-- RÜCKSEITE -->
              <div 
                class="absolute inset-0 w-full h-full p-8 rounded-2xl bg-slate-900 text-white border-2 ${currentStatus === 'learned' ? 'border-emerald-400' : currentStatus === 'repeat' ? 'border-amber-400' : 'border-slate-800'} flex flex-col justify-between rotate-y-180 backface-hidden"
              >
                <div class="flex items-center justify-between">
                  <span class="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-amber-400">
                    ANTWORT & DEFINITION
                  </span>
                  <span class="text-xs text-slate-400">
                    Klicken zum Zurückdrehen 🔄
                  </span>
                </div>

                <div class="py-4 my-auto overflow-y-auto max-h-[210px]">
                  <div class="text-sm md:text-base text-slate-100 leading-relaxed font-normal whitespace-pre-line">
                    ${currentCard.back}
                  </div>
                </div>

                <div class="text-center text-[11px] text-slate-400">
                  Bewerten mit <kbd class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">1</kbd> Gelernt &nbsp;·&nbsp;
                  <kbd class="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">2</kbd> Noch üben
                </div>
              </div>
            </div>
          </div>

          <!-- STEUERUNGSLEISTE UNTER DER KARTE -->
          <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <!-- NAVIGATION VOR / ZURÜCK -->
            <div class="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <button 
                onclick="prevCard()" 
                ${AppState.flashcards.currentIndex === 0 ? 'disabled' : ''}
                class="px-4 py-2.5 rounded-lg border text-xs font-bold transition-colors ${
                  AppState.flashcards.currentIndex === 0 
                    ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed' 
                    : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-800'
                }"
              >
                &larr; Zurück
              </button>

              <button 
                onclick="flipCard()" 
                class="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
              >
                🔄 Wenden
              </button>

              <button 
                onclick="nextCard()" 
                ${AppState.flashcards.currentIndex >= total - 1 ? 'disabled' : ''}
                class="px-4 py-2.5 rounded-lg border text-xs font-bold transition-colors ${
                  AppState.flashcards.currentIndex >= total - 1 
                    ? 'bg-slate-50 border-slate-200 text-slate-300 cursor-not-allowed' 
                    : 'bg-white border-slate-300 hover:bg-slate-100 text-slate-800'
                }"
              >
                Weiter &rarr;
              </button>
            </div>

            <!-- BEWERTUNGS-BUTTONS: NOCH ÜBEN & GELERNT -->
            <div class="flex items-center gap-2.5 w-full sm:w-auto">
              <button 
                onclick="rateCard('${currentCard.id}', 'repeat')"
                class="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  currentStatus === 'repeat'
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'bg-white border-amber-300 text-amber-900 hover:bg-amber-50'
                }"
              >
                <span>⟳</span>
                <span>Noch üben (2)</span>
              </button>

              <button 
                onclick="rateCard('${currentCard.id}', 'learned')"
                class="flex-1 sm:flex-none px-5 py-2.5 rounded-lg border-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  currentStatus === 'learned'
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-white border-emerald-300 text-emerald-900 hover:bg-emerald-50'
                }"
              >
                <span>✓</span>
                <span>Gelernt (1)</span>
              </button>
            </div>

          </div>

          <!-- OPTION: AUTOMATISCH WEITERSCHALTEN -->
          <div class="flex items-center justify-end gap-2 text-xs text-slate-500 px-1">
            <label class="inline-flex items-center gap-2 cursor-pointer select-none">
              <input 
                type="checkbox" 
                ${AppState.flashcards.autoAdvance ? 'checked' : ''} 
                onchange="toggleAutoAdvance(this.checked)"
                class="rounded border-slate-300 text-slate-900 focus:ring-slate-900"
              />
              <span>Nach Bewertung („Gelernt“ / „Noch üben“) automatisch zur nächsten Karte springen</span>
            </label>
          </div>
        </div>

      ` : `
        
        <!-- GRID / LISTEN-ANSICHT: ALLE KARTEN DES AKTUELLEN FILTERS -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${activeCards.map(card => {
            const st = getCardStatus(card.id);
            const borderCls = st === 'learned' 
              ? 'border-emerald-400 bg-emerald-50/10' 
              : st === 'repeat' 
              ? 'border-amber-400 bg-amber-50/10' 
              : 'border-slate-200 bg-white';

            return `
              <div class="p-5 rounded-xl border-2 ${borderCls} shadow-sm flex flex-col justify-between space-y-3 bg-white">
                <div class="space-y-3">
                  <div class="flex items-center justify-between gap-2 text-[10px] font-mono">
                    <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">
                      ${card.unitLabel} · ${card.category}
                    </span>
                    <div class="flex items-center gap-1.5">
                      <button 
                        onclick="rateCard('${card.id}', 'repeat')"
                        class="px-2.5 py-1 rounded font-sans font-bold text-[11px] border transition-colors ${
                          st === 'repeat' 
                            ? 'bg-amber-500 text-white border-amber-500' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-amber-400 hover:text-amber-800'
                        }"
                      >
                        ⟳ Noch üben
                      </button>
                      <button 
                        onclick="rateCard('${card.id}', 'learned')"
                        class="px-2.5 py-1 rounded font-sans font-bold text-[11px] border transition-colors ${
                          st === 'learned' 
                            ? 'bg-emerald-600 text-white border-emerald-600' 
                            : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-800'
                        }"
                      >
                        ✓ Gelernt
                      </button>
                    </div>
                  </div>
                  <div class="font-bold text-slate-900 text-sm">
                    ${card.front}
                  </div>
                </div>
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-100 text-xs text-slate-700 whitespace-pre-line leading-relaxed">
                  ${card.back}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;
}

// ============================================================================
// CONTROLLER EVENT HANDLERS
// ============================================================================

function selectUnit(unitId) {
  AppState.currentUnitId = unitId;
  AppState.searchQuery = '';
  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSearch(query) {
  AppState.searchQuery = query;
  const container = document.getElementById('unit-sections-container');
  if (!container) return;

  const subjectData = AppState.currentView === 'dive' ? DIVE_DATA : VPSY_DATA;
  const currentUnit = subjectData.units.find(u => u.id === AppState.currentUnitId) || subjectData.units[0];
  container.innerHTML = renderFilteredSections(currentUnit.sections, query);
}

function toggleExercise(exId) {
  AppState.revealedExercises[exId] = !AppState.revealedExercises[exId];
  renderApp();
}

function answerQuiz(answerKey, selectedOption) {
  AppState.quizAnswers[answerKey] = selectedOption;
  saveState();
  renderApp();
}

function setCardSubjectFilter(subjectFilter) {
  AppState.flashcards.subjectFilter = subjectFilter;
  AppState.flashcards.shuffledIds = null;
  AppState.flashcards.currentIndex = 0;
  AppState.flashcards.isFlipped = false;
  renderApp();
}

function setCardStatusFilter(statusFilter) {
  AppState.flashcards.statusFilter = statusFilter;
  AppState.flashcards.currentIndex = 0;
  AppState.flashcards.isFlipped = false;
  renderApp();
}

function setCardViewMode(mode) {
  AppState.flashcards.viewMode = mode;
  renderApp();
}

function toggleAutoAdvance(checked) {
  AppState.flashcards.autoAdvance = checked;
  saveState();
}

function flipCard() {
  AppState.flashcards.isFlipped = !AppState.flashcards.isFlipped;
  const cardEl = document.getElementById('flashcard-inner-3d');
  if (cardEl) {
    cardEl.classList.toggle('is-flipped', AppState.flashcards.isFlipped);
  } else {
    renderApp();
  }
}

function prevCard() {
  AppState.flashcards.isFlipped = false;
  if (AppState.flashcards.currentIndex > 0) {
    AppState.flashcards.currentIndex--;
  }
  renderApp();
}

function nextCard() {
  const activeCards = getActiveCards();
  AppState.flashcards.isFlipped = false;
  if (AppState.flashcards.currentIndex < activeCards.length - 1) {
    AppState.flashcards.currentIndex++;
  }
  renderApp();
}

function shuffleCards() {
  AppState.flashcards.currentIndex = 0;
  AppState.flashcards.isFlipped = false;
  const cards = getCardsBySubjectFilter();
  const ids = cards.map(c => c.id);
  for (let i = ids.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ids[i], ids[j]] = [ids[j], ids[i]];
  }
  AppState.flashcards.shuffledIds = ids;
  renderApp();
}

function resetCardProgress() {
  if (confirm('Möchtest du den gesamten Lernstand der Karteikarten („Gelernt“ / „Noch üben“) wirklich zurücksetzen?')) {
    AppState.flashcards.cardStatus = {};
    AppState.flashcards.statusFilter = 'all';
    AppState.flashcards.currentIndex = 0;
    AppState.flashcards.isFlipped = false;
    saveState();
    renderApp();
  }
}

function rateCard(cardId, newStatus) {
  const currentStatus = AppState.flashcards.cardStatus[cardId];
  const stFilter = AppState.flashcards.statusFilter;

  // Toggle back to 'open' if clicking the already active status in 'all' view without autoAdvance
  if (currentStatus === newStatus && stFilter === 'all' && !AppState.flashcards.autoAdvance) {
    delete AppState.flashcards.cardStatus[cardId];
  } else {
    AppState.flashcards.cardStatus[cardId] = newStatus;
  }

  saveState();

  // Check if the card stays in the current filtered list or is removed by the filter
  const cardStaysInFilter = (stFilter === 'all') || (getCardStatus(cardId) === stFilter);

  if (!cardStaysInFilter) {
    // Card leaves the current filtered view; the next card automatically slides into currentIndex
    AppState.flashcards.isFlipped = false;
    renderApp();
    return;
  }

  if (AppState.flashcards.autoAdvance && AppState.flashcards.viewMode === 'single') {
    const activeCards = getActiveCards();
    AppState.flashcards.isFlipped = false;
    if (AppState.flashcards.currentIndex < activeCards.length - 1) {
      AppState.flashcards.currentIndex++;
    }
  }

  renderApp();
}

// Tastatursteuerung für Karteikarten (Space: Wenden, 1: Gelernt, 2: Noch üben, ArrowLeft/Right: Navigation)
window.addEventListener('keydown', (e) => {
  if (AppState.currentView !== 'flashcards' || AppState.flashcards.viewMode !== 'single') return;
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

  const activeCards = getActiveCards();
  const currentCard = activeCards[AppState.flashcards.currentIndex];
  if (!currentCard) return;

  if (e.code === 'Space') {
    e.preventDefault();
    flipCard();
  } else if (e.key === '1') {
    rateCard(currentCard.id, 'learned');
  } else if (e.key === '2') {
    rateCard(currentCard.id, 'repeat');
  } else if (e.key === 'ArrowRight') {
    nextCard();
  } else if (e.key === 'ArrowLeft') {
    prevCard();
  }
});

// App-Initialisierung
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderApp();
});
