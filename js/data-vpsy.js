// ============================================================================
// MODUL 17: VERWALTUNGSPSYCHOLOGIE (LE 01 – LE 08 + 10 DEESKALATIONSTECHNIKEN)
// Vollständiger Klausurstoff nach den Vorlesungsfolien & Learning Notes
// Modul 17.2 (30%) + Modul 17.1 Psychologie-Teil (30%) = 60% Gesamtklausuranteil
// ============================================================================

const VPSY_DATA = {
  meta: {
    code: 'Modul 17.2 & 17.1 (Psychologie)',
    title: 'Verwaltungspsychologie',
    subtitle: 'HS Bund · Zolldienst · 60 % Klausuranteil (30% IK/Deeskalation + 30% Virtuelle Zsmarbeit)',
    examDate: '01.12.2026'
  },
  units: [
    // ========================================================================
    // LE 01: INTERKULTURELLE KOMMUNIKATION – GRUNDLAGEN
    // ========================================================================
    {
      id: 'vpsy-le01',
      shortTitle: 'LE 01 · Interkulturelle Grundlagen',
      code: 'LE 01',
      title: 'Grundlagen der interkulturellen Kommunikation',
      lernziele: [
        'Die 3 Ebenen der Identität (personale, soziale, kulturelle) und den Kulturbegriff nach Straub (2007) definieren.',
        'Multikulturalität, Interkulturalität und Transkulturalität nach Welsch (1997) sowie Merkmale interkultureller Überschneidungssituationen (Thomas 2016) abgrenzen.',
        'Das Eisbergmodell nach Osgood (1951; Perceptas vs. Conceptas) erklären und begründen, warum Conceptas handlungsleitend sind.',
        'Die 6 Kulturdimensionen nach Geert Hofstede anwenden und den Teufelskreis der Vorurteile sowie Stereotyp, Vorurteil, Diskriminierung und Rassismus rechtlich und psychologisch einordnen.'
      ],
      sections: [
        {
          id: 'vpsy-le01-s1',
          badge: 'Identität & Kultur',
          title: 'Diversitätsrad, 3 Arten von Identität & Kulturbegriff (Straub 2007)',
          content: `
            <div class="space-y-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900 text-sm mb-2">Diversitätsrad (Charta der Vielfalt)</div>
                <p class="text-xs text-slate-700 leading-relaxed">
                  Vier konzentrische Dimensionen prägen jeden Menschen:
                  <strong>1. Persönlichkeit</strong> (Kern) &rarr;
                  <strong>2. Innere Dimension</strong> (Alter, Geschlecht, ethnische Herkunft, sexuelle Orientierung, körperliche Fähigkeiten, Religion/Weltanschauung) &rarr;
                  <strong>3. Äußere Dimension</strong> (Ausbildung, Einkommen, Elternschaft, Familienstand, Geografie) &rarr;
                  <strong>4. Organisationale Dimension</strong> (Funktion, Arbeitsort, Dienstalter, Hierarchieebene).
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-xl bg-sky-50/60 border border-sky-200">
                  <div class="text-xs font-bold uppercase text-sky-800 mb-1">1. Personale Identität</div>
                  <div class="font-semibold text-xs text-slate-900 mb-1">Unverwechselbares Individuum</div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    Körperbild, Aussehen, Alter, Größe, Hautfarbe, Stimme, persönliche Verhaltens- und Charakterzüge. Macht eine Person biologisch und psychisch einmalig.
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-indigo-50/60 border border-indigo-200">
                  <div class="text-xs font-bold uppercase text-indigo-800 mb-1">2. Soziale Identität</div>
                  <div class="font-semibold text-xs text-slate-900 mb-1">Gruppenzugehörigkeiten</div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    Zugehörigkeit zu Kollektiven (Berufsgruppe Zoll, Familie, Sportverein, Peer-Group). <em>Nicht statisch</em> – wandelt sich im Lebensverlauf.
                  </p>
                </div>
                <div class="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div class="text-xs font-bold uppercase text-emerald-800 mb-1">3. Kulturelle Identität</div>
                  <div class="font-semibold text-xs text-slate-900 mb-1">Übergeordneter Orientierungsrahmen</div>
                  <p class="text-xs text-slate-600 leading-relaxed">
                    Sprache, Wertesystem, Religion, Traditionen und geteilte Weltsicht. Bildet die Basis interkultureller Kommunikation. Es existieren auch <strong>hybride Identitäten</strong> (Mehrfachzugehörigkeiten).
                  </p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs">
                <strong class="text-amber-950 block mb-1">Kulturbegriff nach Straub (2007) – Klausurrelevant:</strong>
                <p class="text-slate-800 leading-relaxed">
                  Kultur ist ein dynamisches Set aus <strong>Praktiken, Praxisfeldern und Wissensbeständen</strong>. Im Fokus steht vor allem <strong>implizites und praktisches Wissen</strong> („Wissen <em>der</em> Praxis, kein theoretisches Wissen <em>über</em> die Praxis“ – Mitglieder können eine Handlung ausführen, ohne formal erklären zu können, wie). Kultur entsteht durch Teilhabe und Sozialisation, ist niemals starr abgeschlossen und nur bedingt territorial gebunden.
                </p>
              </div>
            </div>
          `,
          keyTakeaway: 'Kulturelle Identität ist übergeordnet, speist sich aus implizitem Handlungswissen (Straub) und begründet Orientierungsmuster.'
        },
        {
          id: 'vpsy-le01-s2',
          badge: 'Differenzierung · Welsch (1997) & Thomas (2016)',
          title: 'Multikulturalität vs. Interkulturalität vs. Transkulturalität',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">Multikulturalität</span>
                  <p class="text-slate-600">
                    Kulturen existieren nebeneinander innerhalb eines Staatsgebietes, bleiben aber weitgehend isoliert („Mosaik-Modell“ ohne wesentliche Verschmelzung).
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-sky-50 border border-sky-200">
                  <span class="font-bold text-sky-950 block mb-1">Interkulturalität</span>
                  <p class="text-slate-700">
                    Aufeinandertreffen unterschiedlicher Kulturen mit gegenseitigem Austausch und Einfluss. Geht noch von abgegrenzten Kulturkreisen aus.
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                  <span class="font-bold text-emerald-950 block mb-1">Transkulturalität</span>
                  <p class="text-slate-700">
                    Moderne Realität: Keine homogenen Inselkulturen mehr, sondern durch globale Vernetzung, Medien und Migration durchmischte Lebensformen und fluide Verflechtungen.
                  </p>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 block mb-1.5">Merkmale interkultureller Interaktionen (Thomas 2016):</strong>
                <ul class="list-disc list-inside space-y-1 text-slate-700">
                  <li><strong>Das Eigene:</strong> Das vertraute Orientierungs- und Handlungssystem (personale und soziale Identität der handelnden Person).</li>
                  <li><strong>Das Fremde:</strong> Das fremdkulturelle Orientierungssystem, dessen Normen und Signale zunächst unbekannt sind.</li>
                  <li><strong>Kulturelle Überschneidungssituation:</strong> Treffen das Eigene und das Fremde aufeinander, führen widersprüchliche Erwartungen oft zu <em>kognitiver Dissonanz, Verunsicherung, Ratlosigkeit oder Kontrollverlust</em>. Sie erfordert <strong>interkulturelle Handlungskompetenz</strong>; durch Erfahrung findet Gewöhnung statt.</li>
                </ul>
              </div>
            </div>
          `,
          keyTakeaway: 'Interkulturelle Überschneidungssituationen erzeugen Kontrollverlust und kognitive Dissonanz, wenn eigene Handlungsmuster nicht greifen.'
        },
        {
          id: 'vpsy-le01-s3',
          badge: 'Klassisches Modell · Osgood (1951)',
          title: 'Das Eisbergmodell: Perceptas vs. Conceptas',
          content: `
            <div class="space-y-3">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-cyan-50/70 border border-cyan-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold uppercase text-cyan-800">Oberhalb der Wasserlinie (10–20 %)</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-200/80 text-cyan-900">Perceptas</span>
                  </div>
                  <div class="font-bold text-slate-900 text-sm mb-1">Sichtbarer & explikativer Anteil („Das Was“)</div>
                  <p class="text-xs text-slate-600 mb-2">
                    Von lat. <em>percipere</em> = erfassen, wahrnehmen. Umfasst:
                  </p>
                  <ul class="text-xs list-disc list-inside space-y-1 text-slate-700">
                    <li><strong>Soziale Kultur:</strong> Rituale, Begrüßungsformen, Feste, Sitten, Sprache, Schrift, Sozialstruktur.</li>
                    <li><strong>Materielle Kultur:</strong> Kleidung, Uniformen, Essen, Architektur, Kunst, Werkzeuge, Dokumente.</li>
                  </ul>
                  <p class="text-[11px] text-cyan-900 mt-2 font-medium">Leicht beobachtbar, erzeugt aber oft Fehlinterpretationen!</p>
                </div>

                <div class="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-bold uppercase text-indigo-800">Unterhalb der Wasserlinie (80–90 %)</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-200/80 text-indigo-900">Conceptas</span>
                  </div>
                  <div class="font-bold text-slate-900 text-sm mb-1">Unsichtbarer & handlungsleitender Anteil („Das Warum“)</div>
                  <p class="text-xs text-slate-600 mb-2">
                    Von lat. <em>concipere</em> = empfinden, fühlen, begreifen. Umfasst:
                  </p>
                  <ul class="text-xs list-disc list-inside space-y-1 text-slate-700">
                    <li><strong>Mentale Kultur:</strong> Grundannahmen über Mensch & Welt, Wertvorstellungen, Normen, Tabus, Beziehungsmuster, Rollenverständnis, Zeitempfinden.</li>
                  </ul>
                  <p class="text-[11px] text-indigo-900 mt-2 font-semibold">
                    &star; Conceptas sind die eigentliche Ursache für beobachtbares Verhalten (Perceptas). Werte sind erlernbar, fundamentale Basisannahmen für Außenstehende kaum verstehbar!
                  </p>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Wer nur Perceptas beurteilt, begeht Fehlinterpretationen. Erst das Verständnis der Conceptas (Werte, Tabus, Normen) erklärt das Verhalten.'
        },
        {
          id: 'vpsy-le01-s4',
          badge: 'Kulturdimensionen · Geert Hofstede (1980–2010)',
          title: 'Die 6 Kulturdimensionen nach Hofstede (>110.000 Datensätze)',
          content: `
            <div class="space-y-3">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">1. Machtdistanz (PDI)</span>
                  <p class="text-slate-600 mb-1">Ausmaß, in dem ungleiche Machtverteilung akzeptiert wird.</p>
                  <div class="text-[11px] text-slate-700">
                    <strong>Hoch:</strong> Hierarchie normal, Autorität, Vaterfigur (Indien, Malaysia, Venezuela).<br>
                    <strong>Gering:</strong> Gleichberechtigung, flache Hierarchien, Mitsprache (D, Dänemark, Schweiz).
                  </div>
                </div>

                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">2. Individualismus vs. Kollektivismus (IDV)</span>
                  <p class="text-slate-600 mb-1">Fokus auf Einzelperson vs. Wir-Gruppe (<em>nicht Egoismus!</em>).</p>
                  <div class="text-[11px] text-slate-700">
                    <strong>Individualismus:</strong> Eigenverantwortung, Mobilität, „Atome im Gas“ (USA, Australien, D).<br>
                    <strong>Kollektivismus:</strong> Loyalität, Harmonie, Gesichtswahrung, „Atome im Kristall“ (Kolumbien, Äthiopien).
                  </div>
                </div>

                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">3. Maskulinität vs. Feminität (MAS)</span>
                  <p class="text-slate-600 mb-1">Leistungs- vs. Beziehungsorientierung.</p>
                  <div class="text-[11px] text-slate-700">
                    <strong>Maskulin:</strong> Erfolg, Härte, Geld, starre Rollenbilder (Japan, Italien, GB).<br>
                    <strong>Feminin:</strong> Fürsorge, Lebensqualität, Kooperation, Sympathie für Schwächere (Schweden, Norwegen).
                  </div>
                </div>

                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">4. Unsicherheitsvermeidung (UAI)</span>
                  <p class="text-slate-600 mb-1">Bedrohung durch unklare Situationen (<em>nicht Risikovermeidung!</em>).</p>
                  <div class="text-[11px] text-slate-700">
                    <strong>Hoch:</strong> Detaillierte Gesetze, Struktur, Angst vor Neuem (D, Russland, Mexiko).<br>
                    <strong>Gering:</strong> Gelassenheit, Improvisation, gesunder Menschenverstand (GB, Jamaika, Singapur).
                  </div>
                </div>

                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">5. Langzeit- vs. Kurzzeitorientierung (LTO)</span>
                  <p class="text-slate-600 mb-1">Blick auf Zukunft vs. Gegenwart und Vergangenheit.</p>
                  <div class="text-[11px] text-slate-700">
                    <strong>Langzeit:</strong> Zukunftsbezogen, Ausdauer, Sparen, Anpassung (China, Japan).<br>
                    <strong>Kurzzeit:</strong> Traditionen, Pflichterfüllung, schnelle Ergebnisse (USA, GB).
                  </div>
                </div>

                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">6. Genuss vs. Beherrschung (IVR)</span>
                  <p class="text-slate-600 mb-1">Ausleben von Grundbedürfnissen nach Freude und Freizeit.</p>
                  <div class="text-[11px] text-slate-700">
                    <strong>Genuss (Indulgence):</strong> Freies Ausleben persönlicher Wünsche (Australien, USA).<br>
                    <strong>Beherrschung (Restraint):</strong> Strenge gesellschaftliche Normen und Disziplin (China, Russland).
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Hofstede liefert universalistische Vergleichsdimensionen. Wichtig für den Zoll: Hohe PDI und UAI in Deutschland prägen behördliches Auftreten.'
        },
        {
          id: 'vpsy-le01-s5',
          badge: 'Sozialpsychologie & Recht',
          title: 'Teufelskreis der Vorurteile, 4 Kernbegriffe & Gesetze',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="font-bold text-rose-950 block mb-1">Der Teufelskreis der Vorurteile (5 Phasen):</span>
                <div class="grid grid-cols-1 sm:grid-cols-5 gap-2 text-[11px] text-center mt-2">
                  <div class="p-2 rounded bg-white border border-rose-200 font-medium">1. Wenig Information</div>
                  <div class="p-2 rounded bg-white border border-rose-200 font-medium">&rarr; 2. Missverstehen von Verhalten</div>
                  <div class="p-2 rounded bg-white border border-rose-200 font-medium">&rarr; 3. Misstrauen</div>
                  <div class="p-2 rounded bg-white border border-rose-200 font-medium">&rarr; 4. Vorurteile & Feindseligkeit</div>
                  <div class="p-2 rounded bg-white border border-rose-200 font-medium">&rarr; 5. Kontaktabbruch (zurück zu 1)</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-4 gap-2.5">
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">Stereotyp</span>
                  <span class="text-[10px] text-slate-500 font-mono">Kognitive Komponente</span>
                  <p class="text-slate-600 mt-1">Geteilte Überzeugungen und Erwartungen über Eigenschaften von Gruppenmitgliedern.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">Vorurteil</span>
                  <span class="text-[10px] text-slate-500 font-mono">Affektive Komponente</span>
                  <p class="text-slate-600 mt-1">Feindselige, negative emotionale Einstellung gegenüber einer Gruppe.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">Diskriminierung</span>
                  <span class="text-[10px] text-slate-500 font-mono">Verhaltenskomponente</span>
                  <p class="text-slate-600 mt-1">Ungerechtfertigte Benachteiligung oder schädigendes Verhalten. Dient Statussicherung.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">Rassismus</span>
                  <span class="text-[10px] text-slate-500 font-mono">Ideologie & Hierarchie</span>
                  <p class="text-slate-600 mt-1">Kategorisierung in „Wir“ vs. „Nicht-Wir“ mit systematischer Abwertung.</p>
                </div>
              </div>

              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <strong class="text-slate-900">3 Arten von Intergruppenprozessen (Anslinger & Athenstaedt 2015):</strong>
                <span class="text-slate-700"> (1) Eigengruppenfavoritismus (Bevorzugung der eigenen Gruppe), (2) Fremdgruppenablehnung (Abwertung anderer), (3) Intergruppenkonflikt (Ressourcenwettbewerb; abbauüberwindbar durch gemeinsame übergeordnete Ziele – vgl. Sherif 1953).</span>
                <div class="mt-2 text-[11px] text-slate-500 font-mono">
                  Rechtsrahmen: Art. 3 Abs. 3 GG, Art. 21 EU-GRCh, § 1 AGG. Begriffsempfehlung: „rassistische Diskriminierung“ statt „Rasse“.
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Stereotyp (Kopf) &rarr; Vorurteil (Gefühl) &rarr; Diskriminierung (Handeln). Kooperation an gemeinsamen Zielen durchbricht den Zirkel.'
        }
      ],
      exercises: [
        {
          title: 'Fallanalyse: Kulturelle Überschneidung am Zollamt',
          question: 'Ein Abfertigungsbeamter erlebt, dass ein Gewerbetreibender aus dem arabischen Raum bei einer Zollkontrolle sehr nah herantritt, laut spricht und der Beamtin nicht in die Augen blickt. Ordnen Sie dieses Verhalten anhand des Eisbergmodells (Perceptas vs. Conceptas) und Hofstedes Dimensionen ein.',
          answer: '<strong>Lösung:</strong><br>• <strong>Perceptas (Sichtbar):</strong> Geringe Distanz, hohe Lautstärke, vermiedener Blickkontakt.<br>• <strong>Conceptas (Hintergrund):</strong> In arabischen Kulturen bedeutet Lautstärke Engagement und Ernsthaftigkeit (Hall). Blickkontaktvermeidung gegenüber Frauen oder Autoritätspersonen kann ein Zeichen von Respekt und Schamgrenzen sein, nicht Desinteresse.<br>• <strong>Hofstede:</strong> Höhere Kollektivitäts- und Hierarchiewerte (PDI) sowie andere Distanzzonen nach Hall (Intim- und persönliche Distanz liegen näher beieinander).'
        }
      ],
      quiz: [
        {
          q: 'Welche Komponente des Eisbergmodells nach Osgood (1951) steuert primär das menschliche Verhalten?',
          options: [
            'Die Perceptas (Sichtbare Rituale und Kleidung)',
            'Die Conceptas (Werte, Normen, Basisannahmen unter der Wasserlinie)',
            'Die materielle Kultur wie Architektur und Bescheide',
            'Die rein phonetische Sprechweise'
          ],
          correct: 1,
          explanation: 'Conceptas (Werte, Annahmen, Tabus) bilden 80–90% des Eisbergs und sind die eigentliche Ursache für Handlungen.'
        },
        {
          q: 'Was unterscheidet Vorurteil von Diskriminierung in der Sozialpsychologie?',
          options: [
            'Vorurteil ist kognitiv, Diskriminierung ist affektiv',
            'Vorurteil ist die affektive Einstellung, Diskriminierung die beobachtbare Verhaltenskomponente',
            'Diskriminierung existiert nur im Zivilrecht',
            'Vorurteile führen immer zwingend zu Rassismus'
          ],
          correct: 1,
          explanation: 'Stereotyp = Kognition, Vorurteil = Affekt/Gefühl, Diskriminierung = Verhalten/Handlung.'
        }
      ]
    },

    // ========================================================================
    // LE 02: SPANNUNGSVERHÄLTNIS IN VERWALTUNGEN
    // ========================================================================
    {
      id: 'vpsy-le02',
      shortTitle: 'LE 02 · Spannungsfeld Verwaltung',
      code: 'LE 02',
      title: 'Interkulturelles Spannungsverhältnis in Verwaltungen',
      lernziele: [
        'Verbale, nonverbale und paraverbale Unterschiede in der interkulturellen Interaktion analysieren.',
        'Die Besonderheiten der behördlichen Agenten-Klienten-Kommunikation (Macht- und Wissensgefälle, § 23 Abs. 1 VwVfG) erläutern.',
        'Den kommunikativen Eskalationszirkel (Seifert 2000) und die Rolle der Agentendominanz erklären.',
        'Das Hamburger Verständlichkeitskonzept und dessen Einschränkungen (Metaphern, Redundanz) in der interkulturellen Praxis anwenden.'
      ],
      sections: [
        {
          id: 'vpsy-le02-s1',
          badge: 'Kommunikationsebenen',
          title: 'Verbale, nonverbale & paraverbale Fallstricke',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Verbal (Weber 1994)</span>
                <p class="text-slate-600 mb-2">Bedeutungsinhalte weichen stark ab:</p>
                <ul class="list-disc list-inside space-y-1 text-slate-700">
                  <li>„Das ist interessant“ (USA) = Höflicher Widerspruch, kein echtes Interesse.</li>
                  <li>„Ich bin dran“ (D) = Sofortige Erledigung vs. „I am on it“ (USA) = Thema ist registriert.</li>
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Nonverbal (Körpersprache)</span>
                <p class="text-slate-600 mb-2">Gesten haben gegenteilige Bedeutungen:</p>
                <ul class="list-disc list-inside space-y-1 text-slate-700">
                  <li><strong>Daumen hoch:</strong> In D positiv, im Iran/Griechenland obszöne Beleidigung.</li>
                  <li><strong>Kopfnicken:</strong> In Bulgarien & Teilen Griechenlands = „Nein“.</li>
                  <li><strong>OK-Ringzeichen:</strong> In D = OK, in Frankreich = Null/Wertlos, in Syrien = Beleidigung.</li>
                  <li><strong>Schweigen:</strong> In D unangenehm, in Japan Zeichen von Respekt & Reife.</li>
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Paraverbal (Pellegrino 2011)</span>
                <p class="text-slate-600 mb-2">Lautstärke & Tempo täuschen:</p>
                <ul class="list-disc list-inside space-y-1 text-slate-700">
                  <li>Hohe Silbenrate (Spanisch 7,82/s) bedeutet <em>nicht</em> höhere Informationsdichte (Deutsch 0,90, Englisch 1,08 Silben/Info).</li>
                  <li>Hohe Lautstärke (Mittelmeer/Arabien) drückt Engagement aus, nicht Aggression!</li>
                </ul>
              </div>
            </div>
          `,
          keyTakeaway: 'Gesten und Lautstärke dürfen im Zollkontakt niemals vorschnell nach eigener Kultur gedeutet werden.'
        },
        {
          id: 'vpsy-le02-s2',
          badge: 'Behördenkontext · Porila & ten Thije (2007)',
          title: 'Agenten-Klienten-Kommunikation: Macht- & Wissensgefälle',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Definition Behördenkommunikation (Becker-Mrotzek; Hoffmann & Quasthoff):</span>
                <p class="text-slate-700 leading-relaxed">
                  Zeitlich begrenzte, wiederkehrende, biografisch notwendige und regelorientierte Diskurse, die <strong>nicht primär der zwischenmenschlichen Verständigung dienen</strong>, sondern der <strong>abschließenden Problemlösung nach rechtlichen Vorgaben</strong>.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 rounded-lg bg-rose-50/60 border border-rose-200">
                  <span class="font-bold text-rose-950 block mb-1">Klienten (Bürger / Fremdkultur)</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700">
                    <li>Mündliches Laienwissen & Orientierungslosigkeit</li>
                    <li>Existenzielles Betroffensein & Angst vor Sanktionen</li>
                    <li>Erwartung von Korruption/Willkür aus Herkunftsländern &rarr; führt zu Betteln oder Basarverhalten</li>
                    <li>Sprachbarriere (§ 23 Abs. 1 VwVfG: Amtssprache ist Deutsch)</li>
                  </ul>
                </div>

                <div class="p-3 rounded-lg bg-sky-50/60 border border-sky-200">
                  <span class="font-bold text-sky-950 block mb-1">Agenten (Zollbeamtinnen & -beamte)</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700">
                    <li>Professionelles Gesetzes-, Amts- und Ablaufwissen</li>
                    <li>Hoheitsmacht, Zwangsbefugnisse und Akteneinsicht</li>
                    <li>Massenabfertigung & Neutralitätsgebot</li>
                    <li><strong>Dominanz der Agenten:</strong> Beamte bestimmen Struktur, Tempo und Themen des Gesprächs!</li>
                  </ul>
                </div>
              </div>

              <div class="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                <strong class="text-amber-950 block mb-1">Pflicht zur Reparatur (Porila & ten Thije 2007):</strong>
                <p class="text-slate-800">
                  Aufgrund der Agentendominanz liegt die <strong>Verantwortung zur Klärung von Missverständnissen (Reparaturversuche) stets beim Verwaltungshandelnden</strong>. Schweigen oder bloßes Nicken des Klienten bedeutet oft Ratlosigkeit, nicht Zustimmung!
                </p>
              </div>
            </div>
          `,
          keyTakeaway: 'Weil Zollbeamte das Macht- und Wissensmonopol besitzen, müssen sie Verständnis aktiv absichern und Reparaturen einleiten.'
        },
        {
          id: 'vpsy-le02-s3',
          badge: 'Eskalationsdynamik & Verständlichkeit',
          title: 'Kommunikativer Eskalationszirkel (Seifert 2000) & Hamburger Modell',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Kommunikativer Eskalationszirkel (Seifert 2000 – Selbsterfüllende Prophezeiung):</span>
                <p class="text-slate-700 leading-relaxed">
                  1. Abweichende Deutung einer Situation &rarr; 2. Handeln des Gegenübers bestätigt scheinbar eigene Vorurteile und legitimiert rigides Verhalten &rarr; 3. Gegenüber reagiert mit Trotz/Widerstand &rarr; 4. Verfestigung der Feindseligkeit auf beiden Seiten.
                </p>
              </div>

              <div class="p-4 rounded-xl bg-amber-50/60 border border-amber-300">
                <div class="flex items-center justify-between mb-2">
                  <span class="font-bold text-amber-950">Hamburger Verständlichkeitskonzept (Tausch et al. 2011)</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-200 text-rose-900">Achtung: Interkulturelle Ausnahmen!</span>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px] mb-3">
                  <div class="p-2 bg-white rounded border border-amber-200"><strong>1. Einfachheit:</strong> Kurze Sätze, aktive Sprache, geläufige Worte.</div>
                  <div class="p-2 bg-white rounded border border-amber-200"><strong>2. Gliederung:</strong> Übersichtlicher roter Faden, visuelle Trennung.</div>
                  <div class="p-2 bg-white rounded border border-amber-200"><strong>3. Kürze/Prägnanz:</strong> Auf den Kern beschränkt.</div>
                  <div class="p-2 bg-white rounded border border-amber-200"><strong>4. Stilistische Reize:</strong> Lebendige, ansprechende Beispiele.</div>
                </div>
                <div class="p-2.5 rounded bg-rose-100/70 border border-rose-300 text-rose-950">
                  <strong>2 kritische Stolperfallen in der interkulturellen Kommunikation:</strong>
                  <ul class="list-disc list-inside mt-1 space-y-0.5 text-[11px]">
                    <li><strong>Redundanz (Wiederholungen):</strong> Im Hamburger Modell als Ballast abgelehnt – interkulturell aber <em>zwingend notwendig</em>, um Gesagtes mit anderen Worten zu sichern!</li>
                    <li><strong>Metaphern & Redewendungen:</strong> Im Modell empfohlen – interkulturell <em>strikt zu vermeiden</em> (z. B. „blau sein“, „auf dem Holzweg sein“ führen zu massiver Verwirrung).</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Redundanz ist interkulturell Gold wert; bildhafte deutsche Redewendungen sind tückische Verständlichkeitsfallen!'
        }
      ],
      exercises: [
        {
          title: 'Praxis-Check: Hamburger Verständlichkeit im Bescheid',
          question: 'Warum ist der Satz „Da Sie die Frist verpennt haben, stehen Sie jetzt im Regen; das Kind ist in den Brunnen gefallen“ im interkulturellen Zollkontext doppelt ungeeignet?',
          answer: '<strong>Lösung:</strong><br>1. <strong>Kulturelle Metaphern:</strong> „Im Regen stehen“ und „Kind in den Brunnen gefallen“ sind kulturspezifische Redewendungen, die von Fremdsprachigen wörtlich verstanden werden und Panik oder Ratlosigkeit auslösen.<br>2. <strong>Verstoß gegen Sachlichkeit:</strong> „Verpennt haben“ greift das positive Gesicht (Brown & Levinson) des Betroffenen an und wirkt herabwürdigend.'
        }
      ],
      quiz: [
        {
          q: 'Warum liegt die Pflicht zu Reparaturversuchen bei Missverständnissen primär bei den Zollbeamten?',
          options: [
            'Weil der Zoll alle Dolmetscherkosten selbst tragen muss',
            'Weil der Zollbeamte durch Macht- und Wissensmonopol das Gespräch steuert (Agentendominanz)',
            'Weil das BGB dies vorschreibt',
            'Weil Klienten niemals Fragen stellen dürfen'
          ],
          correct: 1,
          explanation: 'Aufgrund des Wissens- und Machtgefälles steuern Agenten die Interaktion und tragen die Verantwortung für Verständigungssicherung.'
        }
      ]
    },

    // ========================================================================
    // LE 03: DEESKALATION – GRUNDLAGEN & GENERAL AGGRESSION MODEL (GAM)
    // ========================================================================
    {
      id: 'vpsy-le03',
      shortTitle: 'LE 03 · Deeskalation & GAM',
      code: 'LE 03',
      title: 'Deeskalation: Grundlagen & General Aggression Model (GAM)',
      lernziele: [
        'Zahlen und Fakten zu Gewalt im öffentlichen Dienst (Bühren et al. 2022) und die 70% Dunkelziffer nennen.',
        'Aggression definieren (3 Kriterien nach Anderson & Bushman 2012) und 2×2-Ausdrucksformen sowie reaktive vs. proaktive Aggression unterscheiden.',
        'Das General Aggression Model (GAM, Allen & Anderson 2017) in seinen 3 Phasen (Inputs &rarr; Innerer Zustand &rarr; Bewertung & Handlung) detailliert skizzieren.',
        'Die Wirkung situativer Faktoren (Lärm ab 95 dB, Waffeneffekt Berkowitz, Schutzausrüstung als Reaktanzreiz, Frustrations-Begründung) erläutern.'
      ],
      sections: [
        {
          id: 'vpsy-le03-s1',
          badge: 'Empirie · Bühren et al. (2022, N = 10.674)',
          title: 'Gewalt im öffentlichen Dienst: Daten & 70 % Dunkelziffer',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block text-lg mb-1">23 %</span>
                <p class="text-slate-600">aller Beschäftigten im öffentlichen Dienst sind mindestens einmal jährlich von Gewalt betroffen.</p>
              </div>
              <div class="p-3 rounded-lg bg-rose-50/70 border border-rose-200">
                <span class="font-bold text-rose-900 block text-lg mb-1">34–38 %</span>
                <p class="text-slate-700">Betroffenheit im <strong>Außendienst mit Durchsetzungsbefugnissen</strong> (Zollkontrollen, Vollstreckung).</p>
              </div>
              <div class="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                <span class="font-bold text-amber-900 block text-lg mb-1">70 %</span>
                <p class="text-slate-700"><strong>Dunkelziffer:</strong> Sieben von zehn Übergriffen werden aus Resignation oder Zeitmangel nicht gemeldet!</p>
              </div>
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block text-sm mb-1">Formen & Folgen</span>
                <p class="text-slate-600">21% Beleidigung, 16% Bedrohung, 3% KV. Folgen: 44% Unwohlsein, 25% psychische Probleme.</p>
              </div>
            </div>
          `,
          keyTakeaway: 'Über ein Drittel der Außendienstkräfte erlebt Übergriffe; die Dunkelziffer liegt bei alarmierenden 70%.'
        },
        {
          id: 'vpsy-le03-s2',
          badge: 'Definition & Formen',
          title: 'Aggressionsbegriff (3 Kriterien) & 2×2-Matrix',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Definition (Anderson & Bushman 2012; Allen & Anderson 2017):</span>
                <p class="text-slate-700 leading-relaxed mb-2">
                  Jegliches Verhalten mit dem unmittelbaren Ziel, einem anderen Lebewesen zu schaden oder es zu verletzen, das motiviert ist, diese Behandlung zu vermeiden.
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px]">
                  <div class="p-2 bg-white rounded border border-slate-200 font-medium">1. Beobachtbares Verhalten (bloße Wutgedanken sind noch keine Aggression)</div>
                  <div class="p-2 bg-white rounded border border-slate-200 font-medium">2. Unmittelbare Schädigungsabsicht (Schadenseintritt irrelevant; Unfall ist keine Aggression)</div>
                  <div class="p-2 bg-white rounded border border-slate-200 font-medium">3. Vermeidungsabsicht des Opfers (einvernehmliche Handlungen sind keine Aggression)</div>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1.5">2×2-Matrix der Ausdrucksformen (Stichler 2019):</span>
                  <div class="grid grid-cols-2 gap-2 text-[11px]">
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Offen-körperlich:</strong> Schlagen, Treten, Spucken</div>
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Offen-verbal:</strong> Anschreien, Bedrohen, Beleidigen</div>
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Verdeckt-körperlich:</strong> Sachbeschädigung am Kfz</div>
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Verdeckt-verbal:</strong> Gerüchte, Dienstaufsichtsbeschwerde</div>
                  </div>
                  <p class="text-[10px] text-slate-500 mt-2">Zusätzlich: <em>Passive Aggression</em> (unterlassene Auskunft) & <em>Verlagerte Aggression</em> (Tritt gegen Wand).</p>
                </div>

                <div class="p-3 rounded-lg bg-sky-50/60 border border-sky-200">
                  <span class="font-bold text-sky-950 block mb-1.5">Reaktive vs. Proaktive Aggression:</span>
                  <ul class="space-y-1.5 text-slate-700 text-[11px]">
                    <li><strong>Reaktiv (affektiv):</strong> Antwort auf Provokation/Verletzung. Hohe Wut/Erregung, impulsiv, Schädigung ist das alleinige Ziel. Keine Kosten-Nutzen-Rechnung.</li>
                    <li><strong>Proaktiv (instrumentell):</strong> Unprovoziert, unemotional, kühl kalkuliert. Schädigung ist nur Mittel zum Zweck (z. B. Flucht bei Zollkontrolle, Raub). Sorgfältige Kosten-Nutzen-Abwägung!</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Reaktive Aggression erfordert Emotionsberuhigung; proaktive Aggression erfordert Konsequenz und Stärke (Kosten erhöhen).'
        },
        {
          id: 'vpsy-le03-s3',
          badge: 'Herzstück der Klausur · Allen & Anderson (2017)',
          title: 'Das General Aggression Model (GAM): Phasen & Kausalität',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-4 rounded-xl bg-slate-900 text-slate-100">
                <span class="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-2">3 Stufen des GAM:</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span class="font-bold text-white block mb-1">1. Inputs</span>
                    <p class="text-slate-300 text-[11px] mb-1">
                      <strong>Personale Variablen (starr):</strong> Persönlichkeit, Werte, Scham, Substanzkonsum.<br>
                      <strong>Situative Variablen (steuerbar!):</strong> Hitze, Lärm, Provokation, Frustration, Waffeneffekt.
                    </p>
                  </div>
                  <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span class="font-bold text-white block mb-1">2. Aktueller innerer Zustand</span>
                    <p class="text-slate-300 text-[11px] mb-1">
                      Dreiklang mit Wechselwirkung:<br>
                      • <strong>Kognitionen</strong> (feindselige Gedanken)<br>
                      • <strong>Affekt</strong> (Ärgerkontinuum)<br>
                      • <strong>Arousal</strong> (physiologische Erregung: Puls, Schweiß).
                    </p>
                  </div>
                  <div class="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <span class="font-bold text-white block mb-1">3. Bewertung & Handlung</span>
                    <p class="text-slate-300 text-[11px] mb-1">
                      Start: <em>Automatische Bewertung</em> &rarr; Wenn Zeit & kognitive Ressourcen fehlen &rarr; <strong>Impulsive Handlung</strong>.<br>
                      Wenn Ressourcen vorhanden &rarr; <em>Neubewertung</em> &rarr; <strong>Überlegte Handlung</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1.5">Situative Hebel der Beamtin/des Beamten:</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] text-slate-700">
                  <div class="p-2.5 bg-white rounded border border-slate-200">
                    <strong>Umweltbedingungen:</strong> Hitze, Gedränge und Lärm (<strong>ab 95 dB</strong> steigt Aggression signifikant, Donnerstein & Wilson 1976) rauben kognitive Ressourcen und erzwingen impulsive Bewertungen.
                  </div>
                  <div class="p-2.5 bg-white rounded border border-slate-200">
                    <strong>Waffeneffekt (Berkowitz 1967):</strong> Sichtbare Waffen oder das demonstrative Anziehen von Quarzsandhandschuhen aktivieren semantische Gewaltnetzwerke im Gedächtnis und können Reaktanz auslösen.
                  </div>
                  <div class="p-2.5 bg-white rounded border border-slate-200">
                    <strong>Frustration & Begründung:</strong> Zielblockaden erzeugen Aggression. Die Akzeptanz steht und fällt mit der <em>Güte und Ruhe der Begründung</em> durch den Beamten!
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Zollbeamte können die Persönlichkeit des Gegenübers nicht ändern – aber die situativen Reize (Lärm, Gestik, Begründung).'
        }
      ],
      exercises: [
        {
          title: 'GAM-Analyse im Zollalltag',
          question: 'Warum führt eine unbegründete Verzögerung an der Grenze bei 35°C Außentemperatur und Baustellenlärm (98 dB) viel schneller zu Gewaltausbrüchen als an einem kühlen, ruhigen Tag?',
          answer: '<strong>Lösung nach dem GAM:</strong><br>1. <strong>Situative Inputs:</strong> Hitze und Lärm (>95 dB) erzeugen massives Unbehagen und erhöhen die physiologische Erregung (Arousal).<br>2. <strong>Ressourcenmangel:</strong> Sie entziehen dem Betroffenen kognitive Kontrollkapazitäten.<br>3. <strong>Automatische Bewertung:</strong> Die unbegründete Zielblockade (Frustration) wird sofort feindselig interpretiert. Mangels Ressourcen zur Neubewertung schlägt das System direkt in eine <strong>impulsive aggressive Handlung</strong> um.'
        }
      ],
      quiz: [
        {
          q: 'Ab welchem Lärmpegel steigt aggressives Verhalten nach Donnerstein & Wilson (1976) reliabel an?',
          options: ['Ab 65 dB', 'Ab 80 dB', 'Ab 95 dB', 'Ab 120 dB'],
          correct: 2,
          explanation: 'Empirisch nachgewiesen ist ein steiler Anstieg aggressiver Reaktionen ab einem Schwellenwert von 95 dB.'
        },
        {
          q: 'Welche Variable im GAM kann von der einschreitenden Beamtin beeinflusst werden?',
          options: [
            'Die Persönlichkeitsstruktur des Kontrollierten',
            'Die Situativen Variablen (Lautstärke, Waffensichtbarkeit, Begründung)',
            'Die genetische Disposition',
            'Der bisherige Alkoholkonsum des Klienten'
          ],
          correct: 1,
          explanation: 'Personale Variablen sind starr; nur situative Variablen können deeskalierend gestaltet werden.'
        }
      ]
    },

    // ========================================================================
    // LE 04: UMGANG MIT PROVOKATIONEN & 10 DEESKALATIONSTECHNIKEN
    // ========================================================================
    {
      id: 'vpsy-le04',
      shortTitle: 'LE 04 · 10 Deeskalationstechniken',
      code: 'LE 04',
      title: 'Umgang mit Provokationen, Distanz & die 10 Deeskalationstechniken',
      lernziele: [
        'Die Falle von „Opfer“ vs. „Konkurrent“ (Brand & Lorei 2025) und professionelle DOs/DON’Ts erläutern.',
        'Die 4 Distanzzonen nach Hall (1966) benennen und die Soziale Distanz (1,2–3,6 m) für den Dienst einordnen.',
        'Die 4 Ziele von Deeskalation im GAM herleiten.',
        'Alle 10 Deeskalationstechniken aus der Referenzübersicht mit konkretem Wortlaut beherrschen.'
      ],
      sections: [
        {
          id: 'vpsy-le04-s1',
          badge: 'Taktik · Brand & Lorei (2025)',
          title: 'Die Provokationsfalle: Weder Opfer noch Konkurrent',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Muster bei Provokationen:</span>
                <p class="text-slate-700 leading-relaxed">
                  Gewaltaffine Personen testen Grenzen aus und drängen Beamte in eine von zwei Rollen:<br>
                  • <strong>Opferrolle:</strong> Lässt sich einschüchtern, ignoriert Grenzverletzungen, weicht unsicher zurück &rarr; Täter wählt Angriff.<br>
                  • <strong>Konkurrentenrolle:</strong> Steigt auf Machtspiele ein, wird sarkastisch oder laut &rarr; Täter sieht Wettbewerb und eskaliert.<br>
                  <strong class="text-emerald-700">Die richtige Haltung:</strong> Professionelle, neutrale Autorität. Person tritt hinter die Sachaufgabe zurück („Wir müssen kontrollieren“ statt „Ich will Sie jetzt belehren“).
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200">
                  <span class="font-bold text-emerald-950 block mb-1">DOs (Deeskalierend)</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    <li>Grenzen sofort ruhig benennen und konsequent einfordern</li>
                    <li>Zielgerichtet bleiben („Kaputte-Schallplatte“-Technik)</li>
                    <li>Wahlmöglichkeiten im Kleinen anbieten (Handlungskontrolle)</li>
                    <li>Sprechtempo drosseln und Atempausen setzen</li>
                  </ul>
                </div>
                <div class="p-3 rounded-lg bg-rose-50/70 border border-rose-200">
                  <span class="font-bold text-rose-950 block mb-1">DON'Ts (Eskalierend)</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    <li>Leere Drohungen aussprechen, die nicht eingelöst werden</li>
                    <li>Grenzverletzungen aus falscher Höflichkeit ignorieren</li>
                    <li>Auf unsachliche Diskussionen inhaltlich einsteigen</li>
                    <li>Mit Gegenseitigkeit argumentieren („Wie Sie mir, so ich Ihnen“)</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Wer sich provoziert fühlt, wird Konkurrent. Ruhige Hartnäckigkeit in der Sache schützt die Kontrolle.'
        },
        {
          id: 'vpsy-le04-s2',
          badge: 'Proxemik · Edward T. Hall (1966)',
          title: 'Die 4 Distanzzonen & Deeskalationsziele im GAM',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px]">
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">1. Intimdistanz</span>
                  <span class="text-slate-500 font-mono">0 bis 0,40 m</span>
                  <p class="text-slate-600 mt-1">Nur für Partner/Familie. Eindringen durch Fremde wirkt extrem bedrohlich.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">2. Persönliche Distanz</span>
                  <span class="text-slate-500 font-mono">0,40 bis 1,20 m</span>
                  <p class="text-slate-600 mt-1">Vertraute Freunde und Kollegen bei lockerer Unterhaltung.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-sky-50 border border-sky-300">
                  <span class="font-bold text-sky-950 block">3. Soziale Distanz</span>
                  <span class="text-sky-700 font-mono">1,20 bis 3,60 m</span>
                  <p class="text-slate-700 mt-1 font-semibold">Standard für Amts- und Geschäftskontakte sowie Befragungen beim Zoll!</p>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block">4. Öffentliche Distanz</span>
                  <span class="text-slate-500 font-mono">3,60 bis 8,00 m+</span>
                  <p class="text-slate-600 mt-1">Reden, Vorträge, Schutzabstand bei Anfahrt.</p>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">4 Kernziele von Deeskalation im GAM:</span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-700">
                  <div><strong>1. Situation positiver gestalten:</strong> Reize reduzieren, Umwelt beruhigen.</div>
                  <div><strong>2. Inneren Zustand beruhigen:</strong> Arousal und Ärger senken.</div>
                  <div><strong>3. Kognitive Ressourcen schonen:</strong> Zeit geben &rarr; schützt vor impulsiver Gewalt.</div>
                  <div><strong>4. Wahrgenommene Kosten erhöhen:</strong> Standfestigkeit zeigen &rarr; stoppt proaktive Gewalt.</div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Im Dienst gilt die Soziale Distanz (1,2–3,6 m): Sie sichert Reaktionszeit und verhindert Bedrohungsgefühle.'
        },
        {
          id: 'vpsy-le04-s3',
          badge: 'Referenzkatalog · Zoll-Leitfaden',
          title: 'Die 10 Deeskalationstechniken im Überblick',
          content: `
            <div class="overflow-x-auto text-xs">
              <table class="w-full text-left border-collapse border border-slate-200">
                <thead>
                  <tr class="bg-slate-100 text-slate-800 text-[11px] uppercase tracking-wider">
                    <th class="p-2.5 border border-slate-200 w-8">#</th>
                    <th class="p-2.5 border border-slate-200 w-44">Technik</th>
                    <th class="p-2.5 border border-slate-200">Psychologische Wirkung / Kern</th>
                    <th class="p-2.5 border border-slate-200 w-64">Beispiel / Formulierung</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-[11px] text-slate-700">
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">1</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Zielgerichtet handeln</td>
                    <td class="p-2.5 border border-slate-200">Fokus auf Einsatzziel, kein Verzetteln in Nebenkriegsschauplätzen; „Kaputte Schallplatte“.</td>
                    <td class="p-2.5 border border-slate-200 italic font-mono text-[10px]">„Ich verstehe Ihren Ärger, dennoch benötige ich jetzt Ihren Frachtbrief.“</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">2</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Ruhig bleiben</td>
                    <td class="p-2.5 border border-slate-200">Senkt Arousal beim Gegenüber (Spiegelneurone); offene Hände, tiefe Atmung.</td>
                    <td class="p-2.5 border border-slate-200">Sprechtempo bewusst halbieren, Pausen aushalten.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">3</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Sachlichkeit</td>
                    <td class="p-2.5 border border-slate-200">Wertungsfreie Sprache, Verzicht auf Vorwürfe oder Sarkasmus, Ich-Botschaften.</td>
                    <td class="p-2.5 border border-slate-200 italic font-mono text-[10px]">„Wir führen hier eine zollrechtliche Routinekontrolle durch.“</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">4</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Geduld</td>
                    <td class="p-2.5 border border-slate-200">Ausreden lassen, kognitive Verarbeitungszeit gewähren &rarr; Neubewertung ermöglichen.</td>
                    <td class="p-2.5 border border-slate-200">Kein Ins-Wort-Fallen, 5 Sekunden Denkpause zulassen.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">5</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Transparenz</td>
                    <td class="p-2.5 border border-slate-200">Abläufe ankündigen und verständlich begründen; reduziert Kontrollverlustangst.</td>
                    <td class="p-2.5 border border-slate-200 italic font-mono text-[10px]">„Ich öffne nun den Kofferraum, um die Plombe abzugleichen.“</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">6</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Zielgruppenadäquate Kommunikation</td>
                    <td class="p-2.5 border border-slate-200">Sprachniveau anpassen, kein Amtsdeutsch, Information portionieren &rarr; schont Ressourcen.</td>
                    <td class="p-2.5 border border-slate-200">Kurze Hauptsätze statt Bandwurmsätze mit Paragrafenketten.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">7</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Eigensicherung</td>
                    <td class="p-2.5 border border-slate-200">Sicherheitsabstand, Blickfeld, Deckung, Körperspannung &rarr; signalisiert Handlungsfähigkeit.</td>
                    <td class="p-2.5 border border-slate-200">Soziale Distanz wahren, Hände nicht in Taschen, Sicherungspartner einteilen.</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">8</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Meta-Kommunikation</td>
                    <td class="p-2.5 border border-slate-200">Vogelperspektive: Die Art des Gesprächs thematisieren, um Eskalationsschleife zu stoppen.</td>
                    <td class="p-2.5 border border-slate-200 italic font-mono text-[10px]">„Ich nehme wahr, dass wir gerade aneinander vorbeireden. Lassen Sie uns kurz durchatmen.“</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">9</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Empathie</td>
                    <td class="p-2.5 border border-slate-200">Perspektive übernehmen, Emotion spiegeln &rarr; wahrt das <em>positive Gesicht</em>.</td>
                    <td class="p-2.5 border border-slate-200 italic font-mono text-[10px]">„Ich verstehe, dass Sie es eilig haben und die Fähre erreichen wollen.“</td>
                  </tr>
                  <tr class="hover:bg-slate-50">
                    <td class="p-2.5 font-bold border border-slate-200">10</td>
                    <td class="p-2.5 font-semibold text-slate-900 border border-slate-200">Akzeptanz schaffen</td>
                    <td class="p-2.5 border border-slate-200">Entscheidungsspielräume bieten &rarr; wahrt das <em>negative Gesicht</em> (Autonomie).</td>
                    <td class="p-2.5 border border-slate-200 italic font-mono text-[10px]">„Möchten Sie die Kiste selbst öffnen oder soll ich das für Sie übernehmen?“</td>
                  </tr>
                </tbody>
              </table>
            </div>
          `,
          keyTakeaway: 'Die 10 Techniken schützen Ressourcen, wahren das Gesicht und lenken das Gegenüber zurück zur Neubewertung.'
        }
      ],
      exercises: [
        {
          title: 'Zuordnung: Technik im Dialog erkennen',
          question: 'Ein Zollbeamter sagt zu einem aufgebrachten Reisenden: „Möchten Sie Ihren Koffer hier auf dem Tisch oder drüben in der Kontrollkabine öffnen?“ Welche Deeskalationstechnik wird angewendet und welches Gesicht wird geschützt?',
          answer: '<strong>Lösung:</strong><br>• <strong>Technik 10 (Akzeptanz schaffen):</strong> Dem Reisenden wird eine Wahlmöglichkeit geboten.<br>• <strong>Schutz des negativen Gesichts:</strong> Nach Brown & Levinson wird sein Autonomiebedürfnis gewahrt („Ich entscheide mit“), wodurch Trotzreaktanz vermieden wird.'
        }
      ],
      quiz: [
        {
          q: 'Welche Distanzzone nach Hall (1966) ist der Standard für Kontrollen und Befragungen im Zolldienst?',
          options: [
            'Intimdistanz (bis 0,40 m)',
            'Persönliche Distanz (0,40 bis 1,20 m)',
            'Soziale Distanz (1,20 bis 3,60 m)',
            'Öffentliche Distanz (über 8 m)'
          ],
          correct: 2,
          explanation: 'Die soziale Distanz (1,20–3,60 m) sichert die körperliche Eigensicherung und respektiert persönliche Freiräume.'
        }
      ]
    },

    // ========================================================================
    // LE 05: POLITENESS THEORY, EMOTIONSREGULATION & NACHSORGE
    // ========================================================================
    {
      id: 'vpsy-le05',
      shortTitle: 'LE 05 · Politeness & Emotionen',
      code: 'LE 05',
      title: 'Politeness Theory, Emotionsregulation & Nachsorge (NETZ)',
      lernziele: [
        'Die Politeness Theory (Brown & Levinson 1987) mit Positiver/Negativer Höflichkeit und FTA-Strategien darstellen.',
        'Die 8 psychologischen Effekte von Ärger (Lerner & Keltner 2001) erläutern.',
        'Die 3 Regulationsstrategien für Ärger (Kjærvik 2023) vergleichen (Widerlegung der Katharsis; Joggen als Ärgerverstärker; Zwerchfellatmung 4-2-4, PMR 7s, Rückwärtszählen 684-7).',
        'Die Funktion des Lachens (Duchenne; Opfersignal) und das System NETZ beim Zoll einordnen.'
      ],
      sections: [
        {
          id: 'vpsy-le05-s1',
          badge: 'Soziolinguistik · Brown & Levinson (1987)',
          title: 'Politeness Theory: Positives vs. Negatives Gesicht & FTAs',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200">
                  <span class="text-xs font-bold uppercase text-sky-800 block mb-1">Positives Gesicht (Positive Face)</span>
                  <div class="font-bold text-slate-900 text-xs mb-1">Bedürfnis nach Wertschätzung & Anerkennung</div>
                  <p class="text-slate-600 mb-2">Wunsch, von anderen gemocht, respektiert und als vollwertiges Mitglied gesehen zu werden.</p>
                  <p class="text-rose-700 text-[11px] font-medium"><strong>Bedroht durch:</strong> Kritik, Tadel, Spott, Unterbrechen, Duzen, Ignorieren, abwertende Blicke.</p>
                  <p class="text-sky-800 text-[11px] mt-1"><strong>Positive Höflichkeit:</strong> Lob, Dank, Siezen, Smalltalk, Interesse zeigen, Gemeinsamkeiten betonen.</p>
                </div>

                <div class="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                  <span class="text-xs font-bold uppercase text-indigo-800 block mb-1">Negatives Gesicht (Negative Face)</span>
                  <div class="font-bold text-slate-900 text-xs mb-1">Bedürfnis nach Handlungsfreiheit & Autonomie</div>
                  <p class="text-slate-600 mb-2">Wunsch, unbehelligt zu bleiben und eigene Entscheidungen frei von Zwang zu treffen.</p>
                  <p class="text-rose-700 text-[11px] font-medium"><strong>Bedroht durch:</strong> Befehle, Verbote, Vorschriften, Drohungen, Ratschläge, Forderungen.</p>
                  <p class="text-indigo-800 text-[11px] mt-1"><strong>Negative Höflichkeit:</strong> Konjunktiv („Könnten Sie bitte...“), Entschuldigungen, Widerwillen andeuten, Optionen bieten.</p>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1.5">Ausführung von Face Threatening Acts (FTAs):</span>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-700">
                  <div class="p-2 bg-white rounded border border-slate-200">
                    <strong>Off-record:</strong> Indirekt/mehrdeutig („Hier zieht es“). Eskaliert leicht, weil Absicht unklar bleibt.
                  </div>
                  <div class="p-2 bg-white rounded border border-slate-200">
                    <strong>On-record unabgemildert:</strong> Befehlston („Aussteigen!“). Erreicht Ziel, maximiert aber Gesichtsbedrohung!
                  </div>
                  <div class="p-2 bg-white rounded border border-slate-200">
                    <strong>On-record abgemildert:</strong> Professioneller Standard („Guten Tag, Zoll. Bitte steigen Sie kurz aus.“).
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Amtsmaßnahmen bedrohen fast immer das negative Gesicht (Autonomie). Negative Höflichkeit mindert diesen Widerstand.'
        },
        {
          id: 'vpsy-le05-s2',
          badge: 'Emotionspsychologie · Lerner & Keltner (2001)',
          title: 'Psychologie des Ärgers: Annäherungsmotivation & 8 Effekte',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="font-bold text-rose-950 block mb-1">Besonderheit von Ärger:</span>
                <p class="text-slate-700 leading-relaxed">
                  Im Gegensatz zu anderen negativen Emotionen wie Angst, Trauer oder Ekel (die zu Rückzug und Vermeidung führen) erzeugt Ärger eine starke <strong>Annäherungs- und Angriffsmotivation</strong>! Er signalisiert Grenzüberschreitung und drängt zum Handeln.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-2">Die 8 psychologischen Effekte von Ärger (Lerner & Keltner 2001):</span>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px] text-slate-700">
                  <div class="p-2 bg-white rounded border border-slate-200">1. Optimistischere Risikoeinschätzung (übersteigertes Risikoverhalten)</div>
                  <div class="p-2 bg-white rounded border border-slate-200">2. Internale Attribution (Schuld wird sofort Person zugeschrieben)</div>
                  <div class="p-2 bg-white rounded border border-slate-200">3. Drastisch erhöhtes Misstrauen gegenüber Gegenüber</div>
                  <div class="p-2 bg-white rounded border border-slate-200">4. Negativere Bewertung von Fremdgruppen / mehr Stereotype</div>
                  <div class="p-2 bg-white rounded border border-slate-200">5. Oberflächliche Informationsverarbeitung bei hoher Scheinsicherheit</div>
                  <div class="p-2 bg-white rounded border border-slate-200">6. Geringe Zugänglichkeit für rationale Gegenargumente</div>
                  <div class="p-2 bg-white rounded border border-slate-200">7. Starkes Rache- und Vergeltungsmotiv</div>
                  <div class="p-2 bg-white rounded border border-slate-200">8. Action Bias (Zwang, sofort aktiv werden zu müssen)</div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Ärgernde Menschen denken oberflächlich, fühlen sich unverwundbar und suchen Schuldige. Argumente prallen ab.'
        },
        {
          id: 'vpsy-le05-s3',
          badge: 'Meta-Analyse · Kjærvik (2023)',
          title: '3 Regulationsstrategien: Mythen vs. Evidenz (Zwerchfellatmung, PMR, Zählen)',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="p-3 rounded-lg bg-rose-50/70 border border-rose-200">
                  <span class="font-bold text-rose-950 block mb-1">1. Ärger rauslassen (Unwirksam!)</span>
                  <p class="text-slate-600 mb-1.5">
                    Das „hydraulische Modell“ (Lorenz 1963; Schnellkochtopf) & Katharsis sind <strong>wissenschaftlich widerlegt</strong>!
                  </p>
                  <p class="text-[11px] text-slate-700 leading-relaxed">
                    Boxsack-Schlagen heizt das Erregungssystem weiter an. <strong>Überraschender Befund:</strong> Joggen gegen akute Wut steigert den empfundenen Ärger, da der Puls hochgetrieben wird!
                  </p>
                </div>

                <div class="p-3 rounded-lg bg-emerald-50/70 border border-emerald-200">
                  <span class="font-bold text-emerald-950 block mb-1">2. Ärger abbauen (Effektiv & evidenzbasiert)</span>
                  <p class="text-slate-600 mb-1.5">Aktivierung des Parasympathikus:</p>
                  <ul class="text-[11px] space-y-1 text-slate-700">
                    <li><strong>Zwerchfellatmung:</strong> 4s Einatmen &rarr; 2s Halten &rarr; 4s Ausatmen (5–6 Züge/min für 2–5 min).</li>
                    <li><strong>Progressive Muskelentspannung (Jacobson):</strong> Muskelgruppen ca. 7 Sek. anspannen, dann lockern.</li>
                    <li><strong>Rückwärtszählen:</strong> In 7er-Schritten von 684 (684, 677, 670...) &rarr; bindet Arbeitsgedächtnis.</li>
                  </ul>
                </div>

                <div class="p-3 rounded-lg bg-amber-50/70 border border-amber-200">
                  <span class="font-bold text-amber-950 block mb-1">3. Ärger unterdrücken (Zwiespältig)</span>
                  <p class="text-slate-600 mb-1.5">Facial-Feedback-Hypothese:</p>
                  <p class="text-[11px] text-slate-700 leading-relaxed">
                    Mimik bewusst neutral halten mildert die Emotion kurzfristig ab. <strong>Aber:</strong> Dauerhaftes Unterdrücken führt zu Grübeln (Rumination) und verzögerter Hypertonie.
                  </p>
                </div>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">Psychologie des Lachens (Gervais & Wilson 2005)</span>
                  <p class="text-slate-600 text-[11px] leading-relaxed">
                    Echtes Lachen (Duchenne) aktiviert Augenmuskeln. Im Dienst hochbrisant: <em>Nervöses oder unsicheres Lachen eines Beamten wird von Tätern als Opfersignal gedeutet</em> und löst Angriffe aus! Spöttisches Lachen vernichtet das positive Gesicht.
                  </p>
                </div>
                <div class="p-3 rounded-lg bg-sky-50/70 border border-sky-200">
                  <span class="font-bold text-sky-950 block mb-1">NETZ: Nachsorge beim Zoll</span>
                  <p class="text-slate-700 text-[11px] leading-relaxed">
                    <strong>Nachsorge-Einsatz-Team-Zoll (NETZ):</strong> Bundesweite psychosoziale Unterstützung nach extremen Dienstunfällen oder Gewaltereignissen (Gliederung in Nord, Mitte, West, Südwest, Südost).
                  </p>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Katharsis ist ein Mythos. Effektive Selbstregulation basiert auf Parasympathikus-Aktivierung (4-2-4 Atmung, PMR, Zählen).'
        }
      ],
      exercises: [
        {
          title: 'Selbstregulations-Check',
          question: 'Warum rät die moderne Psychologie einem Zollbeamten nach einem extrem ärgerlichen Einsatz davon ab, sich durch schnelles Joggen abzureagieren?',
          answer: '<strong>Lösung (Kjærvik 2023):</strong><br>Joggen hält die physiologische Erregung (Arousal: hoher Puls, Cortisol) auf einem Maximalniveau. Dies befeuert über die Rückkoppelungsschleife des GAM die Erregungskomponente des Ärgers weiter („Öl ins Feuer“), anstatt das Nervensystem über den Parasympathikus herunterzuregulieren.'
        }
      ],
      quiz: [
        {
          q: 'Welche Atemtechnik senkt die physiologische Erregung nachweislich optimal?',
          options: [
            'Kurzes, schnelles Hecheln in die Brust',
            'Zwerchfellatmung im Takt 4 Sek. Einatmen – 2 Sek. Halten – 4 Sek. Ausatmen',
            '10 Minuten Luftanhalten',
            'Hyperventilation'
          ],
          correct: 1,
          explanation: 'Die 4-2-4 Taktung aktiviert den Nervus Vagus und senkt Herzfrequenz sowie Muskeltonus.'
        }
      ]
    },

    // ========================================================================
    // LE 06: VIRTUELLE ZUSAMMENARBEIT I (FÜHRUNG, VIRTUALITÄT & MEDIEN)
    // ========================================================================
    {
      id: 'vpsy-le06',
      shortTitle: 'LE 06 · Virtuelle Führung & Kanäle',
      code: 'LE 06',
      title: 'Virtuelle Zusammenarbeit I: Führung, Virtualitätsdimensionen & Medienwahl',
      lernziele: [
        'Die Begriffe Digital Leadership, Digitale Führung und Virtuelle Führung (Hofmann & Regnet 2025) abgrenzen.',
        'Die 6 Dimensionen der Virtualität (Vartiainen 2005) und 10 neue Führungsherausforderungen beschreiben.',
        'Die 4 Dimensionen der Medienkompetenz nach Baacke (1996) darlegen.',
        'Die Media Richness Theory (Daft & Lengel 1986; Overcomplication vs. Oversimplification) auf Behördenkanäle anwenden.'
      ],
      sections: [
        {
          id: 'vpsy-le06-s1',
          badge: 'Terminologie · Hofmann & Regnet (2025)',
          title: 'Begriffsabgrenzung: Digital vs. Virtuell & Virtuelle Teams',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Digital Leadership</span>
                <p class="text-slate-600 leading-relaxed">
                  Übergeordneter strategischer Ansatz: Führung im gesamten Kontext des digitalen Wandels und agiler Arbeitswelten.
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Digitale Führung</span>
                <p class="text-slate-600 leading-relaxed">
                  Schwerpunkt auf dem <strong>Einsatz moderner Informations- und Kommunikationstechnologien</strong> zur Prozessoptimierung.
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-sky-50 border border-sky-200">
                <span class="font-bold text-sky-950 block mb-1">Virtuelle Führung</span>
                <p class="text-slate-700 leading-relaxed">
                  Führung von Beschäftigten über <strong>räumliche, zeitliche und organisatorische Distanzen</strong> hinweg ohne ständigen Sichtkontakt.
                </p>
              </div>
            </div>
            <div class="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs mt-3">
              <strong class="text-slate-900">Virtuelle Teams (Konradt & Hertel 2002):</strong> Ortsunabhängige, flexible Gruppen, die über IKT ergebnisorientiert vernetzt sind.<br>
              <strong class="text-slate-900">Hybride Teams:</strong> Wechsel zwischen Präsenztagen im Amt und Homeoffice/mobiler Arbeit.
            </div>
          `,
          keyTakeaway: 'Virtuelle Führung adressiert die Distanzüberbrückung; Digitale Führung den Werkzeugeinsatz.'
        },
        {
          id: 'vpsy-le06-s2',
          badge: 'Struktur · Vartiainen (2005) & Meyer et al. (2011)',
          title: '6 Virtualitätsdimensionen & 10 Führungsanforderungen',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1.5">6 Dimensionen der Virtualität (Vartiainen 2005):</span>
                <div class="grid grid-cols-2 md:grid-cols-6 gap-2 text-center text-[11px]">
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>1. Ort</strong> (räumlich)</div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>2. Zeit</strong> (synchron/asynchron)</div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>3. Art d. Zusammenarbeit</strong></div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>4. Zeitl. Begrenztheit</strong></div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>5. Mobilität d. MA</strong></div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>6. Vielfältigkeit</strong></div>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                <span class="font-bold text-amber-950 block mb-1">10 neue Führungsanforderungen durch fehlenden Direktkontakt (Hofmann & Regnet):</span>
                <p class="text-slate-800 text-[11px] leading-relaxed">
                  Erschwert werden: <strong>(1) Koordination</strong>, <strong>(2) Früherkennung von Überlastung</strong>, <strong>(3) Beurteilung der Kooperation</strong>, <strong>(4) Erkennen von Konflikten</strong>, <strong>(5) Informelle Kommunikation (Flurfunk fällt weg)</strong>, <strong>(6) Zeitnahes Feedback</strong>, <strong>(7) Wir-Gefühl</strong>, <strong>(8) Gleichbehandlung von Remote- vs. Präsenzkräften</strong>, <strong>(9) Vertrauensaufbau</strong> und <strong>(10) Leistungsbewertung</strong> (erfordert Steuerung über Ergebnisse statt Anwesenheit).
                </p>
              </div>
            </div>
          `,
          keyTakeaway: 'Ohne Präsenz entfällt die informelle Flurkommunikation. Führung muss Vertrauen und Zielvereinbarungen institutionalisieren.'
        },
        {
          id: 'vpsy-le06-s3',
          badge: 'Medientheorie · Daft & Lengel (1986)',
          title: 'Media Richness Theory (MRT) & Medienkompetenz nach Baacke',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Medienkompetenz (Baacke 1996) – 4 Dimensionen:</span>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-2 text-[11px] text-slate-700">
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>1. Medien-Kritik:</strong> Quellen & Manipulation reflektieren.</div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>2. Medien-Kunde:</strong> Funktionswissen, Hard-/Software, Recht.</div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>3. Medien-Nutzung:</strong> Bedienkompetenz & Medienkonsum steuern.</div>
                  <div class="p-2 bg-white rounded border border-slate-200"><strong>4. Medien-Gestaltung:</strong> Eigene Inhalte produktiv erzeugen.</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-sky-50/70 border border-sky-300">
                <span class="font-bold text-sky-950 block mb-1.5">Media Richness Theory (Daft & Lengel 1986):</span>
                <p class="text-slate-700 mb-2 leading-relaxed">
                  Kanäle unterscheiden sich in ihrer Reichhaltigkeit (Reichtum an Feedback, Hinweisreizen, Sprache, Personalisierung). Es muss ein <strong>Fit (Passung)</strong> zwischen Kanal und Aufgabenkomplexität herrschen:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px]">
                  <div class="p-2.5 rounded bg-white border border-rose-300">
                    <strong class="text-rose-900 block mb-0.5">Oversimplification (Verarmung)</strong>
                    Reicharmes Medium (z. B. E-Mail) für komplexe/konflikthafte Aufgabe &rarr; fehlende Mimik/Rückmeldung führt zu Missverständnissen und massiver Konflikteskalation.
                  </div>
                  <div class="p-2.5 rounded bg-white border border-amber-300">
                    <strong class="text-amber-900 block mb-0.5">Overcomplication (Überfrachtung)</strong>
                    Reichhaltiges Medium (z. B. 2-stündige Videokonferenz) für simple Routinefragen &rarr; Zeitverschwendung, Ablenkung und Frustration.
                  </div>
                </div>
              </div>

              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <strong class="text-slate-900">4 Facetten der Informationsüberflutung (Moser et al. 2002):</strong>
                <span class="text-slate-700"> (1) Zu hohe Datenmenge übersteigt kognitive Kapazität, (2) Zersplitterung des Workflows durch Benachrichtigungen, (3) Zwang zu oberflächlicher Bearbeitung, (4) Psychische Belastung und digitaler Stress.</span>
              </div>
            </div>
          `,
          keyTakeaway: 'Der Fit entscheidet: Simple Routine &rarr; E-Mail/Ticket; heikle Konflikte &rarr; Telefon oder persönliches Gespräch.'
        }
      ],
      exercises: [
        {
          title: 'MRT-Fall: Konflikt per Mail',
          question: 'Eine Sachgebietsleiterin schickt einem Kollegen eine kühle E-Mail zur fehlerhaften Zollwertermittlung. Der Kollege antwortet empört im CC an alle. Was lief nach der Media Richness Theory schief?',
          answer: '<strong>Lösung:</strong> Hier liegt ein Fall von <strong>Oversimplification</strong> vor. Eine kritische Leistungsbeurteilung birgt hohes Konfliktpotenzial und bedroht das Gesicht des Mitarbeiters. Die E-Mail filtert non- und paraverbale Zwischentöne heraus. Richtig wäre ein reichhaltigeres Medium (Telefonat oder Videokonferenz) gewesen.'
        }
      ],
      quiz: [
        {
          q: 'Was beschreibt das Phänomen der „Oversimplification“ in der Media Richness Theory?',
          options: [
            'Einsatz von Videokonferenzen für banale Terminfreigaben',
            'Nutzung eines zu armen Mediums (z. B. E-Mail) für eine hochkomplexe oder heikle Führungsaufgabe',
            'Der Zusammenbruch des Bundesnetz-Servers',
            'Die automatische Textkorrektur'
          ],
          correct: 1,
          explanation: 'Oversimplification tritt auf, wenn arme Medien für emotional aufgeladene oder vieldeutige Themen genutzt werden.'
        }
      ]
    },

    // ========================================================================
    // LE 07: VIRTUELLE ZUSAMMENARBEIT II (MODELLE, PRÄSENZ & COMMITMENT)
    // ========================================================================
    {
      id: 'vpsy-le07',
      shortTitle: 'LE 07 · Kommunikation & Commitment',
      code: 'LE 07',
      title: 'Virtuelle Zusammenarbeit II: Kommunikationsmodelle, Kompensation & Commitment',
      lernziele: [
        'Das Sender-Empfänger-Modell und das Nachrichtenquadrat (Herrmann et al. 2012) in virtuellen Settings anwenden.',
        'Die 5 Kompensationsstrategien bei Kanalreduktion (insb. Medienwechsel bei Wut) beherrschen.',
        'Organisationales Commitment definieren und das 3-Komponenten-Modell (Meyer & Allen 1990: affektiv, normativ, fortsetzungsbezogen) vergleichen.',
        'Die Auswirkungen von fehlendem affektiven Commitment (Krankenstand) und Förderfaktoren (Anerkennung, Sinnhaftigkeit) analysieren.'
      ],
      sections: [
        {
          id: 'vpsy-le07-s1',
          badge: 'Kommunikationspsychologie',
          title: 'Nachrichtenquadrat im Virtuellen: Die gefahrvolle Lücke',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Das Problem nach Herrmann et al. (2012):</span>
                <p class="text-slate-700 leading-relaxed">
                  Im Nachrichtenquadrat (Schulz von Thun) lässt sich die <strong>Sachebene</strong> per Text leicht übermitteln. Die Ebenen <strong>Selbstkundgabe</strong>, <strong>Beziehung</strong> und <strong>Appell</strong> werden analog jedoch primär non- und paraverbal vermittelt.<br>
                  Im Text entsteht eine <strong>„Lücke“</strong>, die der Empfänger unbewusst mit eigenen Unsicherheiten, Vorurteilen oder Ängsten auffüllt. Häufige Folge: Harmlose Aussagen werden als persönliche Abwertung interpretiert.
                </p>
              </div>

              <div class="p-3.5 rounded-xl bg-sky-50/70 border border-sky-300">
                <span class="font-bold text-sky-950 block mb-1.5">5 Kompensationsstrategien im virtuellen Raum:</span>
                <div class="space-y-1.5 text-slate-700 text-[11px]">
                  <div><strong>1. Zeitnahe Rückkopplung & Medienwechsel:</strong> Vergewisserungsfragen stellen. Löst eine E-Mail Irritation oder Ärger aus &rarr; <em>sofort zum Telefonhörer greifen!</em></div>
                  <div><strong>2. Kontextinformationen liefern:</strong> Hintergründe von Entscheidungen aktiv mitteilen, um Gerüchten vorzubeugen.</div>
                  <div><strong>3. Vollständig kommunizieren:</strong> Alle vier Seiten der Nachricht explizit formulieren („Ich bin heute gestresst, es liegt nicht an dir“).</div>
                  <div><strong>4. Verschriftlichen:</strong> Wichtige Absprachen in Wikis oder Protokollen transparent festhalten.</div>
                  <div><strong>5. Aktiv & initiativ kommunizieren:</strong> Nicht auf Zufallskontakte warten, sondern feste Check-ins vereinbaren.</div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Text filtert Beziehungssignale. Führungskräfte müssen Kontext und Gefühle explizit versprachlichen.'
        },
        {
          id: 'vpsy-le07-s2',
          badge: 'Organisationspsychologie · Meyer & Allen (1990)',
          title: 'Drei-Komponenten-Modell des organisationalen Commitments',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Definition Commitment (van Dick 2004):</span>
                <p class="text-slate-700 leading-relaxed">
                  Das Ausmaß, in dem sich Beschäftigte ihrer Dienststelle, ihrem Team oder ihren Vorgesetzten psychologisch verbunden und zugehörig fühlen.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div class="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-300">
                  <div class="text-xs font-bold uppercase text-emerald-900 mb-1">1. Affektiv („Ich will!“)</div>
                  <div class="font-bold text-slate-900 text-xs mb-1">Emotionale Bindung</div>
                  <p class="text-slate-600 leading-relaxed">
                    Starke Identifikation mit den Zielen des Zolls, Freude an der Arbeit, hohes Pflichtbewusstsein aus Überzeugung.
                  </p>
                  <p class="text-[11px] text-emerald-900 mt-2 font-medium">&star; Wertvollste Form für Behörden!</p>
                </div>

                <div class="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                  <div class="text-xs font-bold uppercase text-indigo-900 mb-1">2. Normativ („Ich sollte!“)</div>
                  <div class="font-bold text-slate-900 text-xs mb-1">Moralische Verpflichtung</div>
                  <p class="text-slate-600 leading-relaxed">
                    Bleiben aus Pflichtgefühl, Loyalität oder Dankbarkeit für Ausbildung/Förderung („Man lässt die Kollegen nicht im Stich“).
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <div class="text-xs font-bold uppercase text-amber-900 mb-1">3. Fortsetzungsbezogen („Ich muss!“)</div>
                  <div class="font-bold text-slate-900 text-xs mb-1">Kalkulatorische Bindung</div>
                  <p class="text-slate-600 leading-relaxed">
                    Bleiben, weil die Wechselkosten (Verlust der Beamtenversorgung, Pensionsansprüche) zu hoch und Alternativen rar sind.
                  </p>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Affektiv = Wollen, Normativ = Sollen, Fortsetzungsbezogen = Müssen (Versorgungsansprüche).'
        },
        {
          id: 'vpsy-le07-s3',
          badge: 'Wirkungszusammenhänge · Sass (2026)',
          title: 'Bedeutung für die Verwaltung: Krankenstand & Förderhebel',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200">
                  <span class="font-bold text-rose-950 block mb-1">Folgen fehlenden affektiven Commitments:</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    <li>Dienst nach Vorschrift & Verlust jeglicher Eigeninitiative</li>
                    <li>Niedrige Frustrationstoleranz bei Neuerungen</li>
                    <li><strong>Signifikant höherer Krankenstand:</strong> Beschäftigte melden sich bei Belastungen schneller krank, da innere Bindung fehlt.</li>
                  </ul>
                </div>

                <div class="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <span class="font-bold text-emerald-950 block mb-1">Wichtigste Förderfaktoren (Sass 2026):</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    <li><strong>Sinnhafte Aufgaben</strong> (Schutz von Bürgern, Steuerehrlichkeit)</li>
                    <li><strong>Gerechtigkeit im Behördenalltag</strong> (faire Dienstpläne)</li>
                    <li><strong>Anerkennung & Wertschätzung</strong> durch Vorgesetzte</li>
                    <li><strong>Verantwortungsübernahme</strong> statt reiner Mikrokontrolle</li>
                    <li>Gelegenheiten für <strong>informelle Teamkontakte</strong> im Digitalen</li>
                  </ul>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Fehlendes Commitment treibt den Krankenstand hoch. Anerkennung und echte Aufgabenverantwortung binden Beschäftigte.'
        }
      ],
      exercises: [
        {
          title: 'Commitment-Analyse beim HZA',
          question: 'Ein Zollbeamter äußert: „Ich bleibe nur beim Hauptzollamt, weil ich meine Pensionsansprüche und die Beihilfe nicht aufgeben will. Die Behörde an sich ist mir völlig egal.“ Welche Commitment-Art liegt vor und welche Gefahr droht der Dienststelle?',
          answer: '<strong>Lösung:</strong><br>• <strong>Fortsetzungsbezogenes Commitment (Kalkulatorisch):</strong> Der Verbleib basiert rein auf der Kosten-Nutzen-Rechnung (Beamtenstatus, Pension).<br>• <strong>Gefahr:</strong> Fehlendes affektives Commitment führt zu Passivität, Dienst nach Vorschrift, Burnout-Gefahr und erhöhtem Krankenstand.'
        }
      ],
      quiz: [
        {
          q: 'Was ist die wirksamste Maßnahme, wenn eine E-Mail zwischen Sachgebieten Ärger ausgelöst hat?',
          options: [
            'Sofortiger Medienwechsel zum Telefonat oder Vier-Augen-Gespräch',
            'Eine noch längere Gegen-E-Mail mit weiteren Paragrafen verfassen',
            'Den Vorgang kommentarlos an die Dienststellenleitung abgeben',
            'Den Absender im E-Mail-Programm blockieren'
          ],
          correct: 0,
          explanation: 'Ein schneller Medienwechsel auf einen synchronen, reicheren Kanal (Telefon/Gespräch) stoppt die Eskalation.'
        },
        {
          q: 'Welche Form des Commitments zeichnet sich durch Identifikation und emotionale Bindung aus („Ich will!“)?',
          options: [
            'Fortsetzungsbezogenes Commitment',
            'Affektives Commitment',
            'Normatives Commitment',
            'Bürokratisches Commitment'
          ],
          correct: 1,
          explanation: 'Das affektive Commitment beschreibt das echte Wollen und die emotionale Identifikation.'
        }
      ]
    },

    // ========================================================================
    // LE 08: VIRTUELLE ZUSAMMENARBEIT III (VERTRAUEN, ERREICHBARKEIT & WIDERSTAND)
    // ========================================================================
    {
      id: 'vpsy-le08',
      shortTitle: 'LE 08 · Vertrauen, Erreichbarkeit & Widerstand',
      code: 'LE 08',
      title: 'Virtuelle Zusammenarbeit III: Vertrauen, Erreichbarkeit & Umgang mit Widerstand',
      lernziele: [
        'Vertrauen definieren (Stangel-Meseke 2017), Objekte des Vertrauens (Jecker & Spachmann 2024) sowie die 3 Faktoren der Vertrauensbildung (Hornik et al. 2022) und deren Förderung (Herrmann et al. 2012) erläutern.',
        'Das Kontrollparadoxon und dessen Umkehrung zur Vertrauensspirale (Osterloh & Weibel 2006) in der Führung auf Distanz erklären.',
        'Ständige vs. erweiterte Erreichbarkeit (Creusen et al. 2017; Kauffeld & Martens 2019), gesundheitliche Folgen und den Maßnahmenplan für Führungskräfte (Krick et al. 2023) darstellen.',
        'Change Management (Streicher 2020) und psychologischen Widerstand (Paulsen & Hoffmann 2025; Pundt et al. 2023) inkl. Druck-Bedenken-Zirkel, 4 Funktionen als Ressource, 2×2-Matrix und Gesprächstechniken anwenden.'
      ],
      sections: [
        {
          id: 'vpsy-le08-s1',
          badge: 'Vertrauen · Stangel-Meseke (2017) & Hornik et al. (2022)',
          title: 'Grundlagen des Vertrauens: Objekte, 3 Vertrauensfaktoren & Förderung',
          content: `
            <div class="space-y-3 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <span class="font-bold text-slate-900 block mb-1">Definition Vertrauen (Stangel-Meseke 2017, S. 28; Basel et al. 2024):</span>
                <p class="text-slate-700 leading-relaxed">
                  Vertrauen zeichnet sich durch die <strong>freiwillig geschaffene Beziehungsqualität</strong> zu Personen oder zu Organisationen aus. Es besteht in der Bereitschaft einer Person, gegenüber einer anderen Person <strong>verletzlich zu werden</strong> und infolgedessen eine <strong>riskante Vorleistung</strong> einzugehen.
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200">
                  <span class="font-bold text-sky-950 block mb-1">1. Interpersonales Vertrauen (Jecker & Spachmann 2024)</span>
                  <p class="text-slate-700 mb-1">Vertrauen der Mitarbeitenden in die Leistung...</p>
                  <ul class="list-disc list-inside space-y-0.5 text-slate-700 text-[11px]">
                    <li>... der <strong>Führungskräfte als Personen</strong></li>
                    <li>... der <strong>Kolleg:innen</strong></li>
                  </ul>
                </div>

                <div class="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-200">
                  <span class="font-bold text-indigo-950 block mb-1">2. Systemvertrauen (Jecker & Spachmann 2024)</span>
                  <p class="text-slate-700 mb-1">Vertrauen der Mitarbeitenden in die Leistung...</p>
                  <ul class="list-disc list-inside space-y-0.5 text-slate-700 text-[11px]">
                    <li>... einzelner <strong>Managementbereiche</strong> (z. B. HR, IT)</li>
                    <li>... des <strong>(Top-)Managements insgesamt</strong>: (1) angemessene Situationsanalyse, (2) Formulierung & Anpassung einer nachhaltigen Strategie, (3) konsistente Umsetzung der Strategie.</li>
                  </ul>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div class="font-bold text-slate-900">Modell der Vertrauensbildung (Hornik et al. 2022) & Förderung (Herrmann et al. 2012):</div>
                <p class="text-slate-600 text-[11px] leading-relaxed">
                  Neben der <strong>individuellen Disposition zu vertrauen</strong> (stabile Persönlichkeitseigenschaft), dem <strong>wahrgenommenen Risiko/Wagnis</strong> sowie <strong>individuellem Wissen, Lebenssituation & vorangegangenen Erfahrungen</strong> (Rückkopplungsschleife!) entscheiden vor allem <strong>3 wahrgenommene Eigenschaften beim Vertrauensobjekt</strong>:
                </p>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
                  <div class="p-3 bg-white rounded-lg border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">1. Kompetenz (Können / Fähigkeit)</span>
                    <p class="text-slate-600 mb-2">Kenntnisse, Kompetenzen & Fertigkeiten in einem konkreten Bereich. <em>Bei Freunden nachrangig, aber zentral bei Personen & Institutionen mit Rollenerwartung!</em></p>
                    <div class="text-sky-900 bg-sky-50 p-2 rounded border border-sky-100">
                      <strong>Förderung:</strong> Kontakt aufnehmen, eigene Fachkompetenz zeigen, anderen die Chance geben, Ähnlichkeiten zu entdecken.
                    </div>
                  </div>
                  <div class="p-3 bg-white rounded-lg border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">2. Integrität (Ehrlichkeit / Authentizität)</span>
                    <p class="text-slate-600 mb-2">Verhalten im Einklang mit zentralen Werten & moralischen Prinzipien („positive Erwartung“ &rarr; macht künftiges Handeln berechenbar).</p>
                    <div class="text-indigo-900 bg-indigo-50 p-2 rounded border border-indigo-100">
                      <strong>Förderung:</strong> Reden und Handeln übereinstimmen lassen, Zuverlässigkeit beweisen, über eigene Motivation & Absichten sprechen.
                    </div>
                  </div>
                  <div class="p-3 bg-white rounded-lg border border-slate-200">
                    <span class="font-bold text-slate-900 block mb-1">3. Wohlwollen (Benevolenz)</span>
                    <p class="text-slate-600 mb-2">Positive, wohlwollende Absichten gegenüber dem Vertrauensgeber (besonders in persönlichen Beziehungen zentral).</p>
                    <div class="text-emerald-900 bg-emerald-50 p-2 rounded border border-emerald-100">
                      <strong>Förderung:</strong> Zeigen, dass ähnliche Ziele wichtig sind; eigene Handlungsbereitschaft sichtbar machen; andere gleich(-wertig) behandeln & wertschätzen.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Vertrauen ist eine riskante Vorleistung bei Verletzlichkeit. Im Berufskontext (Rollenerwartung) ist neben Integrität und Wohlwollen vor allem die Fachkompetenz entscheidend.'
        },
        {
          id: 'vpsy-le08-s2',
          badge: 'Dynamik · Osterloh & Weibel (2006)',
          title: 'Kontrollparadoxon (Teufelskreis) vs. Vertrauensspirale',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-rose-50/70 border border-rose-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold text-rose-950">Teufelskreis: Kontrollparadoxon (&minus;)</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-200 text-rose-900">Abwärtsspirale</span>
                  </div>
                  <ol class="list-decimal list-inside space-y-1 text-slate-700 text-[11px] mb-2">
                    <li><strong>Erhöhte Kontrollmaßnahmen</strong> (widerspricht dem Streben nach Unabhängigkeit, Selbstkontrolle & Entwicklung)</li>
                    <li>&rarr; <strong>Verringerte Arbeitszufriedenheit</strong> (innerer Rückzug, passiver Widerstand, Abwehrfronten)</li>
                    <li>&rarr; <strong>Verringerte Leistungsbereitschaft</strong></li>
                    <li>&rarr; <strong>Verringerte Effizienz</strong> &rarr; Führungskraft reagiert mit <em>noch mehr Kontrolle</em>!</li>
                  </ol>
                </div>

                <div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <div class="flex items-center justify-between mb-2">
                    <span class="font-bold text-emerald-950">Umkehrung: Vertrauensspirale (&plus;)</span>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-200 text-emerald-900">Aufwärtsspirale</span>
                  </div>
                  <ol class="list-decimal list-inside space-y-1 text-slate-700 text-[11px] mb-2">
                    <li><strong>Kontrollmaßnahmen verringern</strong> (Vertrauensvorschuss gewähren)</li>
                    <li>&rarr; <strong>Höhere intrinsische Motivation</strong></li>
                    <li>&rarr; <strong>Höhere Leistungsbereitschaft</strong></li>
                    <li>&rarr; <strong>Verbesserte Effizienz und Effektivität</strong> &rarr; bestärkt die Führungskraft im Vertrauen!</li>
                  </ol>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 text-[11px] text-slate-800">
                <strong class="text-amber-950 block mb-1">Praxis-Hebel für Führung auf Distanz:</strong>
                Weil im Virtuellen tägliche Beobachtungsmöglichkeiten fehlen, benötigen Führungskräfte oft mehr Informationen und Feedback, um den Überblick zu behalten. <strong>Machen sie diesen Bedarf gegenüber den Mitarbeitenden transparent</strong>, fühlen sich die Beschäftigten <em>weniger kontrolliert</em> und Führungskräften ist es weniger unangenehm nachzufragen!
              </div>
            </div>
          `,
          keyTakeaway: 'Strenge Überwachung zerstört intrinsische Motivation (Kontrollparadoxon). Wer seinen Informationsbedarf auf Distanz transparent begründet, verhindert das Gefühl von Misstrauenskontrolle.'
        },
        {
          id: 'vpsy-le08-s3',
          badge: 'Entgrenzung · Kauffeld & Martens (2019) & Krick et al. (2023)',
          title: 'Ständige vs. Erweiterte Erreichbarkeit, Gesundheitsfolgen & Maßnahmenplan',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">Ständige Erreichbarkeit (Creusen et al. 2017)</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    <li>Bedeutet, dass wir <strong>überall</strong> von Informations- und Kommunikationsanforderungen heimgesucht werden.</li>
                    <li>Führt zu <strong>digital induziertem Stress</strong>.</li>
                    <li>Auslöser u. a. <strong>FOMO</strong> (<em>Fear of Missing Out</em>).</li>
                  </ul>
                </div>

                <div class="p-3.5 rounded-xl bg-sky-50/70 border border-sky-200">
                  <span class="font-bold text-sky-950 block mb-1">Erweiterte Erreichbarkeit (Kauffeld & Martens 2019)</span>
                  <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                    <li>Spezifisch <strong>mit Arbeitsbezug</strong>.</li>
                    <li>Erreichbarkeit für dienstliche Belange <strong>außerhalb der regulären Arbeitszeit und des Arbeitsortes</strong> (Feierabend, Wochenende, Urlaub).</li>
                  </ul>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="font-bold text-rose-950 block mb-1.5">Empirische Auswirkungen auf Wohlbefinden & Gesundheit:</span>
                <ul class="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                  <li><strong>Allein die Erwartung / Notwendigkeit, erreichbar zu sein</strong> – <em>unabhängig vom tatsächlichen Arbeitseinsatz!</em> – verursacht reduziertes Wohlbefinden, höhere Work-Life-Konflikte und ein <strong>erhöhtes Burnout-Risiko</strong> (Derks et al. 2015; Mellner 2016).</li>
                  <li><strong>Kontaktierung nach Feierabend:</strong> Führt zu <strong>Kopfschmerzen, Müdigkeit</strong> und erhöhtem Stresserleben (Arlinghaus & Nachreiner 2013, 2014).</li>
                  <li><strong>Fehlendes Abschalten (Detachment):</strong> Mentales Abschalten ist entscheidend für Erholung und Leistungsfähigkeit (Sonnentag 2012); schlechtes Abschalten <strong>senkt die Schlafqualität</strong> (Ohly & Latour 2014).</li>
                </ul>
              </div>

              <div class="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                <span class="font-bold text-emerald-950 block mb-1">Maßnahmenplan für Führungskräfte (Krick et al. 2023) &rarr; Schafft klare Erwartungen:</span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] text-slate-700 mt-1.5">
                  <div class="p-2.5 bg-white rounded border border-emerald-200">
                    <strong>1. Vereinbarung gemeinsamer Regeln im Team:</strong><br>
                    • Definition fester <strong>Kernarbeitszeiten</strong><br>
                    • Verbindliche <strong>Regeln zur Erreichbarkeit</strong><br>
                    • Absprache für den <strong>Umgang mit unterschiedlichen Dringlichkeiten</strong> (z. B. Anruf nur im Notfall, E-Mail hat bis morgen Zeit)
                  </div>
                  <div class="p-2.5 bg-white rounded border border-emerald-200">
                    <strong>2. Vorbildfunktion der Führungskraft:</strong><br>
                    • Führungskraft lebt Erreichbarkeitsregeln selbst vor (keine abendlichen E-Mail-Fluten oder implizite Antwort-Erwartung am Wochenende).
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Schon die bloße Erwartung, nach Feierabend erreichbar sein zu müssen, erhöht das Burnout-Risiko. Klare Teamregeln und Vorbildverhalten der Führungskraft sichern das mentale Abschalten.'
        },
        {
          id: 'vpsy-le08-s4',
          badge: 'Change & Widerstand · Paulsen & Hoffmann (2025) & Pundt et al. (2023)',
          title: 'Change Management, Psychologischer Widerstand & Gesprächstechniken',
          content: `
            <div class="space-y-3 text-xs">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">Change Management (Streicher 2020, S. 255)</span>
                  <p class="text-slate-700 text-[11px] leading-relaxed">
                    Bezeichnet das <strong>geplante und spezifische Management aller Veränderungsprozesse</strong> von einem <strong>Ausgangszustand hin zu einem Zielzustand</strong> und umfasst dabei jeden Aspekt der erforderlichen Anpassung.
                  </p>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1">Psychologischer Widerstand (Paulsen & Hoffmann 2025)</span>
                  <p class="text-slate-700 text-[11px] leading-relaxed">
                    Eine <strong>Einstellung gegenüber Veränderungen</strong>, die auf einer <strong>negativen Bewertung</strong> der Veränderung gegenüber dem Status quo (kognitiv), <strong>negativen Gefühlen</strong> (affektiv) oder/und <strong>Handlungspräferenzen für die Beibehaltung des Status quo</strong> (konativ) beruht.
                  </p>
                </div>
              </div>

              <div class="p-3.5 rounded-xl bg-rose-50/70 border border-rose-200">
                <span class="font-bold text-rose-950 block mb-1">Widerstand als Interaktionsphänomen: Der Druck-Bedenken-Teufelskreis</span>
                <p class="text-slate-700 text-[11px] leading-relaxed">
                  Überzeugungsversuche lösen oft erst Widerstand aus (Klonek et al. 2014), worauf Führungskräfte häufig mit restriktivem Verhalten, Druck oder Drohungen reagieren (Güntner et al. 2020).<br>
                  <strong>Teufelskreislauf:</strong> Die Führungskraft macht <strong>Druck</strong>, weil Mitarbeitende Bedenken äußern &harr; Mitarbeitende äußern <strong>Bedenken</strong>, weil sie sich unter Druck gesetzt fühlen. Beide sehen die Ursache beim anderen!
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
                  <span class="font-bold text-amber-950 block mb-1.5">Widerstand als Ressource (4 Bedeutungen):</span>
                  <p class="text-[11px] text-slate-600 mb-1.5">Liefert wichtige Informationen über Fallstricke und Erfolgsfaktoren:</p>
                  <ol class="list-decimal list-inside space-y-1 text-slate-700 text-[11px]">
                    <li><strong>Stressreaktion auf potenzielle Bedrohung</strong> (Kompetenz oder Status wird infrage gestellt &rarr; Unsicherheit).</li>
                    <li><strong>Reaktanz auf bedrohte Autonomie</strong> (Versuch, eingeschränkte Handlungsspielräume zu retten).</li>
                    <li><strong>Ausdruck von Ambivalenz</strong> (Vor- und Nachteile werden noch abgewogen).</li>
                    <li><strong>Immunreaktion der Organisation</strong> (Schutz vor Gefahren für das reibungslose Funktionieren).</li>
                  </ol>
                </div>

                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span class="font-bold text-slate-900 block mb-1.5">2×2-Matrix: Wie zeigt sich Widerstand im Verhalten?</span>
                  <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-700 mb-2">
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Aktiv & offen:</strong> Protest, Bedenken offen vortragen</div>
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Aktiv & verdeckt:</strong> Lästern, Flurfunk, Sabotage</div>
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Passiv & offen:</strong> Dienst nach Vorschrift, Schweigen, Kleinigkeiten anführen</div>
                    <div class="p-2 bg-white rounded border border-slate-200"><strong>Passiv & verdeckt:</strong> Aussitzen, langsam angehen, keine Lösungen suchen</div>
                  </div>
                  <p class="text-[10px] text-slate-600">
                    <strong>Spezifikum Verwaltung:</strong> Trotz Hierarchie, <em>Direktionsrecht</em> und beamtenrechtlicher <em>Folgepflicht</em> wäre es naiv zu glauben, es gäbe keinen Widerstand – er verlagert sich oft ins Passive/Verdeckte!
                  </p>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <span class="font-bold text-emerald-950 block">Kompetenter Umgang mit Widerstand: Techniken & Entlastungseffekte</span>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] text-slate-700">
                  <div class="p-2.5 bg-white rounded border border-emerald-200">
                    <strong class="text-slate-900 block mb-1">4 Gesprächstechniken (Paulsen & Hoffmann 2025):</strong>
                    1. <strong>Offene Fragen:</strong> <em>„Was genau sind die Nachteile an der Veränderung?“</em><br>
                    2. <strong>Würdigung:</strong> <em>„Ich höre, Sie haben sich schon mit der Veränderung auseinandergesetzt.“</em><br>
                    3. <strong>Aktives Zuhören:</strong> <em>„Sie haben keine Zuversicht in den Erfolg...“</em> (statt Gegenrede auf „Bringt nichts“)<br>
                    4. <strong>Zusammenfassungen:</strong> <em>„Zusammenfassend sehen Sie die Veränderung, so wie sie angegangen wird, zum Scheitern verurteilt.“</em>
                  </div>
                  <div class="p-2.5 bg-white rounded border border-emerald-200">
                    <strong class="text-slate-900 block mb-1">Haltung & 3 Effekte offener Kritik (Pundt et al. 2023):</strong>
                    Ursachen/Betroffenheit verstehen, Bedürfnisse (Einflussnahme) erfragen, Konfrontation nicht meiden & offene Kritik ermöglichen:<br>
                    • <strong>Emotional entlastend</strong> (glättet Wogen &rarr; Rückkehr auf Sachebene)<br>
                    • <strong>Offenbart fundiertes Praxiswissen</strong> (verhindert Fehler & Scheitern)<br>
                    • <strong>Fördert weitere Entspannung</strong>, da Bedenken als Verbesserungsimpuls ernst genommen werden.
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Widerstand ist keine Störung, sondern eine Informationsressource. Statt Druck (Teufelskreis) helfen offene Fragen, Würdigung, aktives Zuhören und das Zulassen offener Kritik.'
        }
      ],
      exercises: [
        {
          title: 'Arbeitsblatt „Vertrauen & Kontrollparadoxon“ (Folie 10–12)',
          question: 'Eine Sachgebietsleiterin führt bei ihrem im Homeoffice arbeitenden Team stündliche Statusabfragen und detaillierte Tätigkeitsprotokolle ein, weil sie befürchtet, den Überblick zu verlieren. Kurz darauf sinkt die Bearbeitungszahl spürbar. Erklären Sie das Phänomen psychologisch und zeigen Sie zwei Lösungswege auf.',
          answer: '<strong>Lösung:</strong><br>• <strong>Kontrollparadoxon (Osterloh & Weibel 2006):</strong> Die engmaschige Überwachung verletzt das Bedürfnis der Beamt:innen nach Autonomie und Selbstkontrolle. Dies senkt die Arbeitszufriedenheit (innerer Rückzug, Dienst nach Vorschrift), reduziert die intrinsische Motivation/Leistungsbereitschaft und führt zu geringerer Effizienz.<br>• <strong>Lösungsweg 1 (Transparenz):</strong> Die Führungskraft macht ihren eigenen Informationsbedarf transparent („Mir fehlt im Homeoffice der kurze Blick ins Büro, um bei Rückfragen der Leitung auskunftsfähig zu sein“), statt unkommentiert zu kontrollieren.<br>• <strong>Lösungsweg 2 (Vertrauensspirale):</strong> Kontrollmaßnahmen reduzieren, ergebnisorientierte Ziele vereinbaren und über Kompetenz, Integrität und Wohlwollen Vertrauen fördern.'
        },
        {
          title: 'Arbeitsblatt „Erreichbarkeit & Umgang mit Widerstand“ (Folie 16 & 27)',
          question: 'Im Sachgebiet soll ein neues digitales Prüftool eingeführt werden. Ein erfahrener Beamter ruft in der Teambesprechung: „Das System ist völlig unausgereift, das bringt alles überhaupt nichts!“ Wie sollte die Führungskraft nach Paulsen & Hoffmann (2025) sowie Pundt et al. (2023) reagieren?',
          answer: '<strong>Lösung:</strong><br>• <strong>Teufelskreis vermeiden:</strong> Keinesfalls mit Druck, Drohungen oder bloßem Verweis auf die beamtenrechtliche Folgepflicht reagieren (würde den Widerstand in verdeckte/passive Formen wie Sabotage oder Aussitzen drängen).<br>• <strong>Gesprächstechniken anwenden:</strong><br>  1. <em>Aktives Zuhören:</em> „Sie haben aktuell keine Zuversicht, dass das neue Tool unsere Arbeit erleichtert.“<br>  2. <em>Würdigung:</em> „Ich merke, Sie haben sich schon intensiv Gedanken über die praktischen Abläufe gemacht.“<br>  3. <em>Offene Fragen:</em> „Was genau sind aus Ihrer Sicht die größten Schwachstellen im Alltag?“<br>• <strong>Nutzen (Pundt et al. 2023):</strong> Das Zulassen der Kritik wirkt emotional entlastend und fördert fundiertes Fachwissen des Praktikers zutage, um Fehler bei der Einführung zu vermeiden.'
        }
      ],
      quiz: [
        {
          q: 'Was beschreibt das „Kontrollparadoxon“ nach Osterloh & Weibel (2006)?',
          options: [
            'Höhere Kontrolle führt stets zu höherer Effizienz in Behörden',
            'Erhöhte Kontrollmaßnahmen senken Arbeitszufriedenheit und Leistungsbereitschaft, was zu geringerer Effizienz und wiederum noch mehr Kontrolle führt',
            'Mitarbeitende fordern von sich aus strengere Überwachung im Homeoffice',
            'Kontrolle ersetzt in virtuellen Teams vollständig die Fachkompetenz'
          ],
          correct: 1,
          explanation: 'Strenge Überwachung kollidiert mit dem Autonomiebedürfnis, löst inneren Rückzug aus und senkt die Effizienz, worauf Führungskräfte oft paradoxerweise mit noch mehr Kontrolle reagieren.'
        },
        {
          q: 'Welcher Befund gilt für die „erweiterte Erreichbarkeit“ nach Derks et al. (2015) und Mellner (2016)?',
          options: [
            'Nur tatsächliche mehrstündige Arbeitseinsätze in der Nacht schaden der Gesundheit',
            'Allein die Notwendigkeit/Erwartung, außerhalb der Arbeitszeit erreichbar zu sein, reduziert das Wohlbefinden und erhöht das Burnout-Risiko',
            'Schlechtes Abschalten nach Feierabend verbessert die Tiefschlafphase',
            'Erweiterte Erreichbarkeit betrifft ausschließlich den privaten Freundeskreis'
          ],
          correct: 1,
          explanation: 'Schon die bloße Erwartungshaltung, nach Feierabend erreichbar sein zu müssen (unabhängig vom tatsächlichen Einsatz), verhindert mentales Abschalten (Detachment) und erhöht das Burnout-Risiko.'
        },
        {
          q: 'Ein Mitarbeiter beteiligt sich nicht mehr an der Lösungssuche und sitzt Neuerungen kommentarlos aus. Welche Widerstandsform liegt vor?',
          options: [
            'Aktiv und offen',
            'Aktiv und verdeckt',
            'Passiv und offen',
            'Passiv und verdeckt'
          ],
          correct: 3,
          explanation: 'Aussitzen, es langsam angehen lassen und nicht aktiv nach Lösungen suchen gehören zum passiv-verdeckten Widerstand.'
        }
      ]
    }
  ],

  // ==========================================================================
  // FLASHCARDS FÜR VERWALTUNGSPSYCHOLOGIE (LE 01 – LE 08)
  // ==========================================================================
  flashcards: [
    // LE 01
    { id: 'fc-vpsy-01', unit: 'vpsy-le01', unitLabel: 'VPsy · LE 01', category: 'Identität', front: 'Welche 3 Arten von Identität unterscheidet Broszinsky-Schwabe (2017)?', back: '1. Personale Identität (biologische Einmaligkeit: Aussehen, Stimme, Körper)\n2. Soziale Identität (Gruppenzugehörigkeiten: Beruf, Familie, Verein)\n3. Kulturelle Identität (übergeordnet: Sprache, Werte, Traditionen).' },
    { id: 'fc-vpsy-02', unit: 'vpsy-le01', unitLabel: 'VPsy · LE 01', category: 'Kulturbegriff', front: 'Wie definiert Straub (2007) Kultur und welches Wissen steht im Zentrum?', back: 'Kultur ist ein dynamisches Set aus Praktiken, Praxisfeldern und Wissensbeständen.\nIm Zentrum steht implizites/praktisches Handlungswissen („Wissen der Praxis, kein theoretisches Wissen über die Praxis“).' },
    { id: 'fc-vpsy-03', unit: 'vpsy-le01', unitLabel: 'VPsy · LE 01', category: 'Eisbergmodell', front: 'Was unterscheidet Perceptas und Conceptas im Eisbergmodell (Osgood 1951)?', back: '• Perceptas (10–20 %): Sichtbare soziale/materielle Kultur (Kleidung, Sprache, Rituale) – „Das Was“.\n• Conceptas (80–90 %): Unsichtbare mentale Kultur (Werte, Normen, Basisannahmen) – „Das Warum“. Conceptas sind handlungsleitend!' },
    { id: 'fc-vpsy-04', unit: 'vpsy-le01', unitLabel: 'VPsy · LE 01', category: 'Hofstede', front: 'Welche 6 Kulturdimensionen unterscheidet Geert Hofstede?', back: '1. Machtdistanz (PDI)\n2. Individualismus vs. Kollektivismus (IDV)\n3. Maskulinität vs. Feminität (MAS)\n4. Unsicherheitsvermeidung (UAI)\n5. Langzeit- vs. Kurzzeitorientierung (LTO)\n6. Genuss vs. Beherrschung (IVR).' },
    { id: 'fc-vpsy-05', unit: 'vpsy-le01', unitLabel: 'VPsy · LE 01', category: 'Sozialpsychologie', front: 'Wie grenzt man Stereotyp, Vorurteil und Diskriminierung voneinander ab?', back: '• Stereotyp: Kognitiv (Wissen/Überzeugung über Gruppenmerkmale)\n• Vorurteil: Affektiv (emotionale, feindselige Einstellung)\n• Diskriminierung: Konativ/Verhalten (ungerechtfertigte Benachteiligung im Handeln).' },

    // LE 02
    { id: 'fc-vpsy-06', unit: 'vpsy-le02', unitLabel: 'VPsy · LE 02', category: 'Behördenhandeln', front: 'Wie definiert Becker-Mrotzek Behördenkommunikation?', back: 'Zeitlich begrenzte, wiederkehrende, biografisch notwendige und regelorientierte Diskurse, die nicht primär der Beziehungsbildung dienen, sondern der abschließenden Problemlösung nach rechtlichen Vorgaben.' },
    { id: 'fc-vpsy-07', unit: 'vpsy-le02', unitLabel: 'VPsy · LE 02', category: 'Agenten-Klienten', front: 'Was kennzeichnet die Agenten-Klienten-Kommunikation nach Porila & ten Thije?', back: '1. Starkes Wissensungleichgewicht (Fach- vs. Laienwissen)\n2. Starkes Machtgefälle (Hoheit vs. Abhängigkeit)\n3. Agentendominanz: Zollbeamte steuern das Gespräch und müssen Reparaturversuche bei Verständigungsproblemen einleiten!' },
    { id: 'fc-vpsy-08', unit: 'vpsy-le02', unitLabel: 'VPsy · LE 02', category: 'Verständlichkeit', front: 'Welche 2 Merkmale des Hamburger Verständlichkeitskonzepts sind interkulturell kritisch?', back: '1. Geringe Redundanz: Im Hamburger Modell empfohlen, interkulturell aber falsch (Wiederholungen sind zwingend nötig!).\n2. Metaphern/Redewendungen: Im Modell als stilistischer Anreiz gelobt, interkulturell strikt zu vermeiden (wörtliche Fehlinterpretation).' },

    // LE 03
    { id: 'fc-vpsy-09', unit: 'vpsy-le03', unitLabel: 'VPsy · LE 03', category: 'Gewaltforschung', front: 'Welche Zahlen zu Gewalt im öffentlichen Dienst ermittelte Bühren et al. (2022)?', back: '• 23 % aller Beschäftigten jährlich betroffen\n• 34–38 % im Außendienst mit Durchsetzungsaufgaben (Zoll!)\n• 70 % Dunkelziffer (7 von 10 Übergriffen werden nicht gemeldet).' },
    { id: 'fc-vpsy-10', unit: 'vpsy-le03', unitLabel: 'VPsy · LE 03', category: 'Aggressionsbegriff', front: 'Welche 3 Kriterien definieren Aggression nach Anderson & Bushman?', back: '1. Beobachtbares Verhalten\n2. Unmittelbare Schädigungsabsicht (Schadenseintritt irrelevant)\n3. Vermeidungsabsicht des Opfers.' },
    { id: 'fc-vpsy-11', unit: 'vpsy-le03', unitLabel: 'VPsy · LE 03', category: 'Aggressionsarten', front: 'Was unterscheidet reaktive von proaktiver Aggression?', back: '• Reaktiv: Affektgetrieben, Reaktion auf Provokation, impulsiv, Schädigung ist Selbstzweck.\n• Proaktiv: Kühl kalkuliert, unprovoziert, instrumentell (Mittel zum Zweck), Kosten-Nutzen-Abwägung.' },
    { id: 'fc-vpsy-12', unit: 'vpsy-le03', unitLabel: 'VPsy · LE 03', category: 'GAM', front: 'Welche 3 Phasen durchläuft das General Aggression Model (Allen & Anderson 2017)?', back: '1. Inputs: Personale (starr) & Situative Variablen (durch Beamte steuerbar!)\n2. Aktueller innerer Zustand: Dreiklang aus Kognitionen, Affekt & physiologischer Erregung (Arousal)\n3. Bewertung & Handlung: Automatische Bewertung &rarr; (ohne Ressourcen) Impulsiv VS. (mit Ressourcen) Neubewertung &rarr; Überlegt.' },
    { id: 'fc-vpsy-13', unit: 'vpsy-le03', unitLabel: 'VPsy · LE 03', category: 'Waffeneffekt', front: 'Was besagt der Waffeneffekt nach Berkowitz (1967)?', back: 'Die bloße Anwesenheit oder Berührung von Waffen/Schutzausrüstung aktiviert über neuronale Bahnen aggressive Gedanken und Handlungsbereitschaften.' },

    // LE 04
    { id: 'fc-vpsy-14', unit: 'vpsy-le04', unitLabel: 'VPsy · LE 04', category: 'Taktik', front: 'Welche zwei Rollenfallen müssen Zollbeamte bei Provokationen meiden?', back: '1. Opferrolle (Ignorieren, Zurückweichen, Unsicherheit)\n2. Konkurrentenrolle (Machtkampf, Gegenaggression, Sarkasmus).\nLösung: Professionelle neutrale Sachlichkeit, Person hinter Aufgabe zurücknehmen.' },
    { id: 'fc-vpsy-15', unit: 'vpsy-le04', unitLabel: 'VPsy · LE 04', category: 'Distanzzonen', front: 'Welche 4 Distanzzonen unterscheidet Hall (1966) und welche gilt im Zolldienst?', back: '1. Intimdistanz (0–0,4 m)\n2. Persönliche Distanz (0,4–1,2 m)\n3. Soziale Distanz (1,2–3,6 m) &rarr; Standard für Zolldienst und Befragungen!\n4. Öffentliche Distanz (> 3,6 m).' },
    { id: 'fc-vpsy-16', unit: 'vpsy-le04', unitLabel: 'VPsy · LE 04', category: '10 Techniken', front: 'Nenne mindestens 5 der 10 Deeskalationstechniken.', back: '1. Zielgerichtet handeln („Kaputte Schallplatte“)\n2. Ruhig bleiben\n3. Sachlichkeit\n4. Geduld\n5. Transparenz\n6. Zielgruppenadäquate Kommunikation\n7. Eigensicherung\n8. Meta-Kommunikation\n9. Empathie\n10. Akzeptanz schaffen.' },

    // LE 05
    { id: 'fc-vpsy-17', unit: 'vpsy-le05', unitLabel: 'VPsy · LE 05', category: 'Politeness Theory', front: 'Was unterscheidet das positive vom negativen Gesicht (Brown & Levinson 1987)?', back: '• Positives Gesicht: Wunsch nach sozialer Anerkennung, Wertschätzung und Zugehörigkeit.\n• Negatives Gesicht: Wunsch nach Autonomie, Handlungsfreiheit und Abwesenheit von Zwang.' },
    { id: 'fc-vpsy-18', unit: 'vpsy-le05', unitLabel: 'VPsy · LE 05', category: 'Ärgerregulation', front: 'Warum ist Katharsis („Ärger rauslassen“) nach Kjærvik (2023) schädlich?', back: 'Katharsis befeuert das physiologische Erregungsniveau (Arousal) weiter und belohnt aggressives Verhalten („Öl ins Feuer“). Joggen steigert den akuten Ärger sogar!' },
    { id: 'fc-vpsy-19', unit: 'vpsy-le05', unitLabel: 'VPsy · LE 05', category: 'Atemtechnik', front: 'Wie funktioniert die deeskalierende Zwerchfellatmung?', back: '4 Sekunden tief einatmen &rarr; 2 Sekunden Atem anhalten &rarr; 4 Sekunden langsam ausatmen (ca. 5–6 Züge pro Minute für 2–5 Minuten). Aktiviert den Parasympathikus.' },
    { id: 'fc-vpsy-20', unit: 'vpsy-le05', unitLabel: 'VPsy · LE 05', category: 'Zoll-Nachsorge', front: 'Was ist das System NETZ beim Zoll?', back: 'Nachsorge-Einsatz-Team-Zoll: Psychosoziale Akut- und Nachbetreuung für Beschäftigte nach traumatischen Einsätzen und Gewaltereignissen.' },

    // LE 06
    { id: 'fc-vpsy-21', unit: 'vpsy-le06', unitLabel: 'VPsy · LE 06', category: 'Führung', front: 'Was unterscheidet Digitale Führung von Virtueller Führung?', back: '• Digitale Führung: Schwerpunkt auf Nutzung moderner IT-Tools und Software.\n• Virtuelle Führung: Schwerpunkt auf Führung über räumliche und zeitliche Distanzen hinweg.' },
    { id: 'fc-vpsy-22', unit: 'vpsy-le06', unitLabel: 'VPsy · LE 06', category: 'Media Richness', front: 'Was bedeuten Overcomplication und Oversimplification in der MRT?', back: '• Overcomplication: Zu reiches Medium für simple Routine &rarr; Zeitverschwendung.\n• Oversimplification: Zu armes Medium (Mail) für komplexe/heikle Themen &rarr; Missverständnisse und Eskalation.' },

    // LE 07
    { id: 'fc-vpsy-23', unit: 'vpsy-le07', unitLabel: 'VPsy · LE 07', category: 'Kompensation', front: 'Welche Faustregel gilt bei E-Mail-Konflikten im Amt?', back: 'Sobald eine E-Mail Irritation oder Wut auslöst, sofort einen Medienwechsel zum Telefonat oder Vier-Augen-Gespräch durchführen!' },
    { id: 'fc-vpsy-24', unit: 'vpsy-le07', unitLabel: 'VPsy · LE 07', category: 'Commitment', front: 'Welche 3 Komponenten umfasst organisationales Commitment (Meyer & Allen)?', back: '1. Affektiv („Ich will!“): Emotionale Verbundenheit & Identifikation.\n2. Normativ („Ich sollte!“): Moralisches Pflichtgefühl.\n3. Fortsetzungsbezogen („Ich muss!“): Kalkulierte Bindung wegen Versorgungsansprüchen.' },

    // LE 08
    { id: 'fc-vpsy-25', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Vertrauen', front: 'Wie ist Vertrauen definiert (Stangel-Meseke 2017) und welche Objekte unterscheidet man (Jecker & Spachmann 2024)?', back: 'Definition: Freiwillig geschaffene Beziehungsqualität; Bereitschaft, gegenüber einer Person verletzlich zu werden und eine riskante Vorleistung einzugehen.\nObjekte:\n1. Interpersonales Vertrauen (Führungskräfte als Personen, Kolleg:innen)\n2. Systemvertrauen (Top-Management insgesamt [Situationsanalyse, Strategie, Umsetzung], einzelne Bereiche wie HR).' },
    { id: 'fc-vpsy-26', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Vertrauensbildung', front: 'Welche 3 Eigenschaften beim Vertrauensobjekt fördern Vertrauen (Hornik et al. 2022) und wie gewichtet man sie?', back: '1. Kompetenz / Können (Kenntnisse & Fertigkeiten; bei Freunden nachrangig, aber zentral bei Personen/Institutionen mit Rollenerwartung!)\n2. Integrität / Ehrlichkeit (Wertekonformität; „positive Erwartung“ macht Handeln berechenbar)\n3. Wohlwollen / Benevolenz (positive Absichten ggü. Vertrauensgeber; zentral in persönlichen Beziehungen).' },
    { id: 'fc-vpsy-27', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Kontrollparadoxon', front: 'Was besagt das Kontrollparadoxon (Osterloh & Weibel 2006) und wie kehrt man es in die Vertrauensspirale um?', back: '• Kontrollparadoxon (–): Erhöhte Kontrolle &rarr; verringerte Arbeitszufriedenheit (innerer Rückzug) &rarr; verringerte Leistungsbereitschaft &rarr; verringerte Effizienz &rarr; noch mehr Kontrolle.\n• Vertrauensspirale (+): Kontrolle verringern &rarr; höhere intrinsische Motivation &rarr; höhere Leistungsbereitschaft &rarr; verbesserte Effizienz & Effektivität.\n• Tipp auf Distanz: Informations-/Feedbackbedarf transparent erklären!' },
    { id: 'fc-vpsy-28', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Erreichbarkeit', front: 'Was unterscheidet ständige von erweiterter Erreichbarkeit und welche Gesundheitsfolgen treten auf?', back: '• Ständige Erreichbarkeit: Überall von Infos/Kommunikation heimgesucht (digitaler Stress, FOMO).\n• Erweiterte Erreichbarkeit: Mit Arbeitsbezug außerhalb regulärer Arbeitszeit/Arbeitsort.\n• Folgen: Allein die Erwartung, erreichbar zu sein, erhöht Work-Life-Konflikte & Burnout-Risiko (Derks 2015); Kontakt nach Feierabend erzeugt Kopfschmerzen/Müdigkeit; fehlendes Abschalten (Detachment) senkt Schlafqualität.' },
    { id: 'fc-vpsy-29', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Maßnahmenplan', front: 'Wie lautet der Maßnahmenplan zum Umgang mit Erreichbarkeit im Team (Krick et al. 2023)?', back: '1. Vereinbarung gemeinsamer Regeln:\n   • Definition von Kernarbeitszeiten\n   • Verbindliche Regeln zur Erreichbarkeit\n   • Absprache zum Umgang mit unterschiedlichen Dringlichkeiten\n2. Vorbildfunktion der Führungskraft\n&rarr; Schafft klare Erwartungen!' },
    { id: 'fc-vpsy-30', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Widerstand', front: 'Wie ist psychologischer Widerstand definiert und wie entsteht der Teufelskreis (Paulsen & Hoffmann 2025)?', back: '• Definition: Einstellung ggü. Veränderungen auf Basis negativer Bewertung (kognitiv), negativer Gefühle (affektiv) und/oder Handlungspräferenz für den Status quo (konativ).\n• Teufelskreis: Führungskraft macht Druck, weil Mitarbeitende Bedenken äußern &harr; Mitarbeitende äußern Bedenken, weil sie sich unter Druck gesetzt fühlen.' },
    { id: 'fc-vpsy-31', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Widerstandsformen', front: 'Welche 4 Bedeutungen hat Widerstand als Ressource und wie lautet die 2×2-Verhaltensmatrix?', back: '4 Bedeutungen: (1) Stressreaktion auf Bedrohung (Kompetenz/Status), (2) Reaktanz bei bedrohter Autonomie, (3) Ambivalenz (Abwägen), (4) Immunreaktion der Organisation.\n2×2-Matrix:\n• aktiv-offen (Protest, Bedenken)\n• aktiv-verdeckt (Lästern, Flurfunk, Sabotage)\n• passiv-offen (Dienst nach Vorschrift, Schweigen)\n• passiv-verdeckt (Aussitzen, langsam angehen).' },
    { id: 'fc-vpsy-32', unit: 'vpsy-le08', unitLabel: 'VPsy · LE 08', category: 'Umgang mit Widerstand', front: 'Welche 4 Gesprächstechniken (Paulsen & Hoffmann 2025) und 3 Effekte offener Kritik (Pundt et al. 2023) helfen bei Widerstand?', back: '4 Techniken: (1) Offene Fragen, (2) Würdigung, (3) Aktives Zuhören, (4) Zusammenfassungen.\n3 Effekte offener Kritik:\n1. Emotional entlastend (glättet Wogen &rarr; Sachebene möglich)\n2. Offenbart fundiertes Praxiswissen (Fehlerprävention)\n3. Weitere emotionale Entspannung, da Bedenken als Verbesserungsimpuls ernst genommen werden.' }
  ]
};
