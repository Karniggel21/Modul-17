// ============================================================================
// MODUL 17.1: DIGITALE VERWALTUNG (LE 01 – LE 04)
// Vollständiger Klausurstoff nach den Vorlesungsfolien (Prof. Dr. Stockhinger)
// ============================================================================

const DIVE_DATA = {
  meta: {
    code: 'Modul 17.1',
    title: 'Digitale Verwaltung',
    subtitle: 'HS Bund · Zolldienst · 40 % Klausuranteil (BWL-Betrachtung)',
    examDate: '01.12.2026'
  },
  units: [
    // ========================================================================
    // LE 01: DIGITALE TRANSFORMATION & DIGITALSTRATEGIE
    // ========================================================================
    {
      id: 'dive-le01',
      shortTitle: 'LE 01 · Transformation & Strategie',
      code: 'LE 01 (VL 1 & 2)',
      title: 'Digitale Transformation & Digitalstrategie',
      lernziele: [
        '3 Stufen der Digitalen Transformation (Mergel 2019) unterscheiden und auf den Zoll anwenden.',
        'Grundlagen, Erfordernis und die 4 Kernelemente von Strategien (BMI & BVA) erläutern.',
        'Die 3 Verknüpfungstypen von Organisations- und Digitalstrategie (Teubner & Stockhinger 2020) sowie die Digitalstrategie des Zolls (v2.0) einordnen.'
      ],
      sections: [
        {
          id: 'dive-le01-s1',
          badge: 'Ausgangslage · Koddebusch et al. (2022)',
          title: 'Motivation: EU-Ranking, Kompetenzlücke & Digitaler Alltag',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="text-xs font-bold uppercase text-slate-500 mb-1">EU-Vergleich (2024)</div>
                <div class="font-bold text-slate-900 text-sm mb-1">Unterdurchschnittlicher Rang</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Bei digitalen Verwaltungsleistungen liegt Deutschland im EU-Ranking (<em>2030 Digital Decade</em>) unter dem EU-Durchschnitt hinter Vorreitern wie Malta, Estland, Luxemburg, Finnland und Dänemark.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-rose-50/60 border border-rose-200">
                <div class="text-xs font-bold uppercase text-rose-700 mb-1">Kompetenzlücke (2016 vs. 2021)</div>
                <div class="font-bold text-slate-900 text-sm mb-1">Relevanz &uarr; vs. Verfügbarkeit &darr;</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Befragungen (Koddebusch et al. 2022) zeigen eine wachsende Lücke: Die <strong>Relevanz von Digitalkompetenz steigt</strong> stark an, während die <strong>Verfügbarkeit in der Verwaltung sinkt</strong>.
                </p>
              </div>
              <div class="p-4 rounded-xl bg-teal-50/60 border border-teal-200">
                <div class="text-xs font-bold uppercase text-teal-700 mb-1">Anspruchshaltung</div>
                <div class="font-bold text-slate-900 text-sm mb-1">Maßstab: Privater Alltag</div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Private Anwendungen (WhatsApp, ChatGPT, PayPal, Smart Home) setzen den Maßstab für die Erwartungen an digitale Verwaltungsdienste (BundID, Zoll-Portal, E-Akte, SAP).
                </p>
              </div>
            </div>
          `,
          keyTakeaway: 'Steigende Relevanz bei gleichzeitig sinkender Verfügbarkeit von Digitalkompetenz erzeugt eine wachsende Kompetenzlücke im öffentlichen Sektor.'
        },
        {
          id: 'dive-le01-s2',
          badge: 'Kernmodell · Mergel (2019)',
          title: 'Die 3 Stufen: Digitale Bereitstellung, Digitalisierung & Transformation',
          content: `
            <p class="text-xs sm:text-sm text-slate-600 mb-3">
              Mit jeder Stufe steigen die organisatorischen Anforderungen an die Verwaltung (von der analogen Verwaltung bis zur digitalen Organisation):
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">Stufe 1</span>
                  <h5 class="font-bold text-slate-900 text-base mt-2">Digitale Bereitstellung</h5>
                  <p class="text-xs text-slate-500 italic mb-2">„Wie Papier, nur digital“</p>
                  <p class="text-xs text-slate-700 leading-relaxed mb-3">
                    Einfacher Übergang von physischer/analoger Bereitstellung von Informationen, Formularen und Bescheiden in digitale Form (z. B. Papierformular &rarr; PDF/Scan).
                  </p>
                </div>
                <div class="space-y-1.5 pt-2 border-t border-slate-200 text-xs">
                  <div><strong class="text-emerald-700">+ Nutzen:</strong> Einfacherer Austausch, ortsungebundenes Arbeiten z. T. möglich, kaum Soft-/Hardware nötig, geringer Umstellungsaufwand.</div>
                  <div><strong class="text-rose-700">&minus; Probleme:</strong> Mangelnde Systemkommunikation, Doppeleingaben (Medienbrüche), kaum automatisch verarbeitbar.</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200 flex flex-col justify-between">
                <div>
                  <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-teal-100 text-teal-800">Stufe 2</span>
                  <h5 class="font-bold text-slate-900 text-base mt-2">Digitalisierung</h5>
                  <p class="text-xs text-teal-700 italic mb-2">„Eine andere Form der Arbeit“</p>
                  <p class="text-xs text-slate-700 leading-relaxed mb-3">
                    Überführung ganzer <strong>Abläufe und Prozesse</strong> in eine digitale Form und Bereitstellung über Internettechnologien (z. B. ELSTER, ATLAS-Workflow).
                  </p>
                </div>
                <div class="space-y-1.5 pt-2 border-t border-teal-200/70 text-xs">
                  <div><strong class="text-emerald-700">+ Nutzen:</strong> Automatische Datenverarbeitung, Prozesstransparenz, schnellere/effizientere Bearbeitung, besserer Zugang, mobile Arbeit.</div>
                  <div><strong class="text-rose-700">&minus; Probleme:</strong> Medienbrüche verhindern, hohe Implementierungskosten, Schulungsbedarf, Akzeptanzprobleme, anlassbezogenes Change Management nötig.</div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 flex flex-col justify-between">
                <div>
                  <span class="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">Stufe 3</span>
                  <h5 class="font-bold text-slate-900 text-base mt-2">Digitale Transformation</h5>
                  <p class="text-xs text-indigo-700 italic mb-2">„Neues, digitales Verständnis von Verwaltung“</p>
                  <p class="text-xs text-slate-700 leading-relaxed mb-3">
                    Grundlegender <strong>Wandel von Organisationen als Ganzes</strong> inkl. Kultur, Nutzerzentrierung, Förderung von Digitalkompetenz und neuem Verhältnis zu Nutzenden.
                  </p>
                </div>
                <div class="space-y-1.5 pt-2 border-t border-indigo-200/70 text-xs">
                  <div><strong class="text-emerald-700">+ Nutzen:</strong> Digitale Abläufe als Standard, Fokus auf Nutzende (intern/extern), neue/proaktive Leistungsmodelle, Aufgabenkritik.</div>
                  <div><strong class="text-rose-700">&minus; Anforderungen:</strong> Kontinuierliche Weiterentwicklung, Vereinheitlichung komplexer IT-Landschaften, umfassendes Change Management & Digital Leadership.</div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Einordnung des Zolls: Einzelne Leistungen liegen auf dem gesamten Spektrum von analog bis digital vor; insgesamt befindet sich der Zoll im Bereich zwischen Digitaler Bereitstellung und Digitalisierung.'
        },
        {
          id: 'dive-le01-s3',
          badge: 'Strategielehre · BMI & BVA (2025)',
          title: 'Strategiebegriff, Erfordernis & Die 4 Kernelemente',
          content: `
            <div class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 mb-4">
              <strong>Definition (BMI & BVA 2025):</strong> Die Strategie einer Organisation bildet auf Basis ihres <strong>Auftrags</strong> („Wozu sind wir da? Was ist Zweck/Kernaufgabe?“) die <strong>Grundlage für eine zukunftsorientierte inhaltliche und organisatorische Gestaltung, Steuerung und kontinuierliche Entwicklung</strong> (Horizont: <strong>4 bis 6 Jahre</strong>). An ihr sind Aufgaben, Prozesse, Ressourcensteuerung, Strukturen und Teilstrategien auszurichten.
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <div class="text-xs font-bold text-teal-700">1. Vision</div>
                <p class="text-xs text-slate-600 mt-1">Fernziel, das sich an Auftrag, Behördenleitbild und Werten der Behörde ausrichtet.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <div class="text-xs font-bold text-teal-700">2. Strategische Ziele</div>
                <p class="text-xs text-slate-600 mt-1"><strong>SMART</strong> formuliert (Spezifisch, Messbar, Attraktiv/Ausführbar, Realistisch, Terminiert) & hierarchisch unterteilt (Abteilung &rarr; Referat &rarr; Team/SG &rarr; Individuell).</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <div class="text-xs font-bold text-teal-700">3. Maßnahmenplan</div>
                <p class="text-xs text-slate-600 mt-1">Konkrete Vorhaben und Projekte, die operativ zur Zielerreichung beitragen.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <div class="text-xs font-bold text-teal-700">4. Umsetzung & Prüfung</div>
                <p class="text-xs text-slate-600 mt-1">Instrumente zur Steuerung, Erfolgskontrolle und laufenden Prüfung auf Anpassungsbedarf.</p>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <strong class="text-slate-900">Warum Strategien? (Verwaltung vs. Wirtschaft):</strong>
                <ul class="mt-1 space-y-0.5 text-slate-600 list-disc list-inside">
                  <li><strong>Öffentliche Verwaltung:</strong> Umsetzung politischer Schwerpunkte & Erfüllung gesetzlicher Aufträge.</li>
                  <li><strong>Privatwirtschaft:</strong> Langfristige Unternehmenssicherung & Wettbewerbsvorteile.</li>
                  <li><strong>Gemeinsam:</strong> Verständnis für langfristige Entwicklungen, Handlungsrahmen für Führung/Mitarbeitende, Prozess- & Ressourcensteuerung.</li>
                </ul>
              </div>
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <strong class="text-slate-900">Teilstrategien & Digitalstrategie:</strong>
                <p class="mt-1 text-slate-600 leading-relaxed">
                  Teilstrategien widmen sich spezifischen Themen (Personal-, IT-, Nachhaltigkeits-, Digitalstrategie) und sind an der Organisationsstrategie auszurichten; ggf. weiter unterteilt (z. B. KI-Strategie unter der Digitalstrategie).<br>
                  <strong>Gründe für eine Digitalstrategie:</strong> (1) Strategische Verankerung, (2) Querschnittsthema für alle Bereiche, (3) Symbolische Wirkung nach innen & außen.
                </p>
              </div>
            </div>
          `,
          keyTakeaway: 'Rahmen einer Behördenstrategie: Eingebettet in Recht & Gesetze sowie Politik & Gesellschaft; getragen von Prozessen, Ressourcen, Strukturen und Kultur.'
        },
        {
          id: 'dive-le01-s4',
          badge: 'Verknüpfung & Praxis · Teubner & Stockhinger (2020)',
          title: '3 Verknüpfungstypen sowie Digitalstrategie Bund & Zoll (v2.0)',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900 text-sm">1. Angleichung</div>
                <p class="text-slate-600 mt-1">Separate Digitalstrategie. Fachliche Anforderungen der Organisationsstrategie prägen die Digitalstrategie; digitale Möglichkeiten werden berücksichtigt. <strong>Häufigster Ansatz in der Verwaltung.</strong></p>
              </div>
              <div class="p-3.5 rounded-xl bg-teal-50/50 border border-teal-200">
                <div class="font-bold text-slate-900 text-sm">2. Überschneidung</div>
                <p class="text-slate-600 mt-1">Starke Verzahnung von Digital- und Organisationsstrategie. Wechselwirkung fachlicher Bedarfe und digitaler Möglichkeiten; größerer strategischer Einfluss der Digitalstrategie.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-200">
                <div class="font-bold text-slate-900 text-sm">3. Verschmelzung</div>
                <p class="text-slate-600 mt-1"><strong>Keine separate Digitalstrategie mehr</strong> &rarr; <em>Digitale Organisationsstrategie</em>. Digitalisierung ist existenziell verinnerlicht (z. B. DeepL, SAP, Amazon).</p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div class="font-bold text-slate-900 text-sm mb-1">🏛️ Bund: Modernisierungsagenda für Staat & Verwaltung</div>
                <p class="text-slate-600 mb-2">Die alte Digitalstrategie (2022) ist nach Regierungswechsel nicht mehr aktuell. Die Modernisierungsagenda ist <strong>keine klassische Digitalstrategie</strong>.</p>
                <div class="font-semibold text-slate-800 mb-1">5 Handlungsfelder:</div>
                <ol class="list-decimal list-inside space-y-0.5 text-slate-600">
                  <li>Spürbarer Bürokratierückbau</li>
                  <li>Bessere Rechtsetzung</li>
                  <li>Service für Bürgerinnen, Bürger und Unternehmen</li>
                  <li>Zukunftsgerichtete Personalentwicklung & strategisches Personalmanagement</li>
                  <li>Effiziente Bundesverwaltung</li>
                </ol>
              </div>

              <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200">
                <div class="font-bold text-teal-950 text-sm mb-1">🛃 Zoll: „Strategie zur digitalen Transformation (Version 2.0)“</div>
                <p class="text-teal-900 italic mb-2"><strong>Vision:</strong> „Wir sind Gestalter der digitalen Transformation Deutschlands und Europas als ein effizienter, innovativer und attraktiver Zoll.“</p>
                <p class="text-slate-600 mb-1.5"><strong>Abgeleitete Teilstrategie</strong> aus dem Steuerungskonzept des Zolls.</p>
                <div class="mb-1.5">
                  <strong class="text-slate-900">9 Initiativen / Handlungsfelder:</strong>
                  <span class="text-slate-600">Kultur · Organisation & Steuerung · IT-Strategie · Personalstrategie · Innovationsstrategie · Kommunikation · Datenstrategie · Vernetzung & Zusammenarbeit · Nachhaltigkeitsstrategie.</span>
                </div>
                <div>
                  <strong class="text-slate-900">7 Überzeugungen:</strong>
                  <span class="text-slate-600">1. Digitale Verschiebung · 2. Effiziente Zusammenarbeit · 3. Intuitive Schnittstellen · 4. Transformierte Prozesse · 5. Intelligente Risikoeinschätzung · 6. Innovativer Arbeitgeber · 7. Nachhaltiges Handeln.</span>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Die Zoll-Digitalstrategie ist eine aus dem Steuerungskonzept abgeleitete Teilstrategie mit Vision, 7 Überzeugungen und 9 Handlungsfeldern (Initiativen), deren Ziele meist qualitativ statt strikt SMART formuliert sind.'
        }
      ],
      exercises: [
        {
          title: 'Übung 1 (Folie 27/28): Auf welcher Stufe der digitalen Transformation steht der Zoll?',
          question: 'Ordnen Sie den Zoll auf Basis Ihrer Praxiserfahrungen in das Stufenmodell nach Mergel (2019) ein und begründen Sie Ihre Einordnung.',
          answer: '<strong>Lösungsvorschlag:</strong> Viele Leistungen stehen beim Zoll bereits digital zur Verfügung, teilweise auch ganze Prozesse (z. B. ATLAS, E-Akte, ZBP). Einzelne Leistungen sind auf dem gesamten Spektrum von analog bis digital transformiert vorhanden. Insgesamt befindet sich der Zoll im Übergangsbereich zwischen <strong>Digitaler Bereitstellung</strong> und <strong>Digitalisierung</strong>, während die vollständige <strong>Digitale Transformation</strong> (Stufe 3) mit „Zoll 2030“ und der Digitalstrategie angestrebt wird.'
        },
        {
          title: 'Übung 2 (Folie 34/35): Entwicklung einer Zollstrategie (Vision, SMARTe Ziele, Maßnahmen)',
          question: 'Formulieren Sie exemplarisch eine Vision, zwei strategische (SMARTe) Ziele und passende Maßnahmen für den Zoll (Schwerpunkt Schwarzarbeitsbekämpfung / Mindestlohn).',
          answer: '<strong>Lösungsvorschlag:</strong><br>• <strong>Vision:</strong> Der Zoll als moderne Behörde trägt effektiv zur Sicherung von Staatseinnahmen bei, schützt die Sozialsysteme und deckt Straftaten mithilfe neuester technischer Möglichkeiten konsequent auf.<br>• <strong>Strategische Ziele (SMART):</strong> (1) Der Zoll erreicht einen deutschlandweiten Rückgang der Schwarzarbeit um 10 % bis 2030. (2) Der Zoll etabliert bis 2030 einen flächendeckenden Kontrollmechanismus für Mindestlohn und Tarifrecht.<br>• <strong>Maßnahmen:</strong> Personelle Aufstockung der FKS, Aufgabenverschiebung, häufigere Kontrollen, erweiterte Befugnisse, Ausbau der Kooperation & automatischer Datenabgleich mit SV-Trägern.'
        },
        {
          title: 'Übung 3 (Folie 50–55): Analyse der Digitalstrategie des Zolls (Initiative Kultur)',
          question: 'Sind die Kernelemente einer Strategie in der Digitalstrategie des Zolls vorhanden und wie ist das Ziel der „Initiative Kultur“ formuliert?',
          answer: '<strong>Lösungsvorschlag:</strong> Vision, 7 Überzeugungen und 9 Handlungsfelder (Initiativen) mit Maßnahmen sind vorhanden. Die Ziele innerhalb der Initiativen sind jedoch häufig qualitativ als Leitbild und nicht streng SMART (ohne konkrete Messgröße/Datum) formuliert – z. B. Initiative Kultur: <em>„Ziel ist eine Arbeitsumgebung, die nicht nur die digitale Transformation unterstützt, sondern auch den spezifischen Bedürfnissen der Zollverwaltung gerecht wird.“</em>'
        }
      ],
      quiz: [
        {
          q: 'Ein Hauptzollamt stellt ein Papierformular als PDF-Download auf zoll.de bereit. Im Innendienst wird das ausgedruckte PDF manuell abgetippt. Welche Stufe nach Mergel (2019) liegt vor?',
          options: ['Digitale Bereitstellung', 'Digitalisierung', 'Digitale Transformation', 'Verschmelzung'],
          correct: 0,
          explanation: 'Beim bloßen Überführen papierbasierter Dokumente in digitale Dokumente (PDF/Scan) ohne durchgängige Prozessdigitalisierung spricht man von Digitaler Bereitstellung („wie Papier, nur digital“).'
        },
        {
          q: 'Was kennzeichnet den Verknüpfungstyp „Verschmelzung“ nach Teubner & Stockhinger (2020)?',
          options: [
            'Fachliche Bedarfe diktieren einseitig eine strikt getrennte IT-Teilstrategie.',
            'Es existiert keine separate Digitalstrategie mehr; beide Strategien gehen in einer digitalen Organisationsstrategie auf.',
            'Die IT-Abteilung wird ausgelagert.',
            'Die Strategie gilt nur für 6 Monate.'
          ],
          correct: 1,
          explanation: 'Bei der Verschmelzung ist die digitale Transformation strategisch voll verinnerlicht, sodass keine separate Digitalstrategie mehr existiert.'
        },
        {
          q: 'Welches Ziel ist vollständig nach den SMART-Kriterien formuliert?',
          options: [
            'Der Zoll soll möglichst schnell papierlos werden.',
            'Die FKS soll künftig mehr Kontrollen durchführen.',
            'Der Zoll erreicht bis zum Jahr 2030 einen deutschlandweiten Rückgang der Schwarzarbeit um 10 %.',
            'Wir fördern eine moderne und digitale Behördenkultur.'
          ],
          correct: 2,
          explanation: 'Nur diese Formulierung ist spezifisch, messbar (10 %), ausführbar, realistisch und terminiert (bis 2030).'
        }
      ]
    },

    // ========================================================================
    // LE 02: INFORMATIONSSICHERHEIT
    // ========================================================================
    {
      id: 'dive-le02',
      shortTitle: 'LE 02 · Informationssicherheit',
      code: 'LE 02 (VL 3)',
      title: 'Informationssicherheit im öffentlichen Sektor',
      lernziele: [
        'Bedeutung der Informationssicherheit anhand der 3 Schutzziele Vertraulichkeit, Integrität und Verfügbarkeit (BSI) erläutern.',
        'Informationssicherheit vom Datenschutz abgrenzen und Maßnahmen des Informationssicherheitsmanagements (ISM) benennen.',
        'Bedrohungsursachen und typische Angriffsformen (Ransomware, Spam, Social Engineering, Phishing) analysieren.'
      ],
      sections: [
        {
          id: 'dive-le02-s1',
          badge: 'Schutzziele · BSI (2023)',
          title: 'Definition & Die 3 Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit',
          content: `
            <div class="p-3.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 mb-4">
              <strong>Informationssicherheit (BSI 2023):</strong> Angemessener Schutz der <strong>Vertraulichkeit, Integrität und Verfügbarkeit</strong> von Informationen – unabhängig davon, ob diese auf <strong>Papier, in IT-Systemen oder in Köpfen</strong> gespeichert sind.<br>
              <strong>Informationssicherheitsmanagement (ISM):</strong> Alle Maßnahmen einer Behörde/Organisation, um die Informationssicherheit zu planen, zu steuern und zu kontrollieren.
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200">
                <div class="text-xs font-mono font-bold text-indigo-700 uppercase">1. Vertraulichkeit</div>
                <div class="font-bold text-slate-900 text-sm mt-1">Schutz vor unbefugter Preisgabe</div>
                <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Vertrauliche Daten und Informationen dürfen ausschließlich Befugten in der zulässigen Weise zugänglich sein.
                </p>
                <div class="mt-3 p-2.5 rounded-lg bg-white border border-indigo-100 text-xs text-slate-600">
                  <strong>Zoll-Beispiele:</strong><br>
                  &bull; Prüfer im Außendienst lässt SINA-Laptop bei geöffneter Prüfliste ungesperrt.<br>
                  &bull; Vorgeladener Beteiligter steckt Umlaufmappe mit Personenerfassungsbögen ein.<br>
                  &bull; Upload interner Dokumente bei ChatGPT.
                </div>
              </div>

              <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200">
                <div class="text-xs font-mono font-bold text-teal-700 uppercase">2. Integrität</div>
                <div class="font-bold text-slate-900 text-sm mt-1">Korrektheit & Unversehrtheit</div>
                <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Sicherstellung der Korrektheit (Unversehrtheit) von Daten und der korrekten Funktionsweise von Systemen.
                </p>
                <div class="mt-3 p-2.5 rounded-lg bg-white border border-teal-100 text-xs text-slate-600">
                  <strong>Zoll-Beispiel:</strong><br>
                  &bull; Mitarbeiter im Finanzbereich programmiert die Bankauszahlung so um, dass stets ein kleiner Anteil auf sein eigenes Konto abfließt.
                </div>
              </div>

              <div class="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                <div class="text-xs font-mono font-bold text-amber-800 uppercase">3. Verfügbarkeit</div>
                <div class="font-bold text-slate-900 text-sm mt-1">Stets wie vorgesehen nutzbar</div>
                <p class="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  Dienstleistungen, IT-Systeme, Anwendungen, Netze und Informationen können von den Anwendenden stets wie vorgesehen genutzt werden.
                </p>
                <div class="mt-3 p-2.5 rounded-lg bg-white border border-amber-100 text-xs text-slate-600">
                  <strong>Zoll-Beispiele:</strong><br>
                  &bull; Wasserschaden im Serverraum des HZA legt Fachverfahren lahm.<br>
                  &bull; Ausfall der E-Akte oder Serverausfall beim ITZBund.
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Besondere Bedeutung für den Zoll als Finanz- und Sicherheitsbehörde: Schutz des Steuergeheimnisses (§ 30 AO), sensibler Ermittlungsdaten (Straftaten) und Aufrechterhaltung hoheitlicher Kernaufgaben.'
        },
        {
          id: 'dive-le02-s2',
          badge: 'Abgrenzung & ISM · Folie 13 & 21',
          title: 'Datenschutz vs. Informationssicherheit & ISM-Maßnahmen',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h5 class="font-bold text-slate-900 text-sm mb-2">👤 Datenschutz</h5>
                <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Zweck:</strong> Schutz des Grundrechts auf <em>informationelle Selbstbestimmung</em>.</li>
                  <li><strong>Schutzobjekt:</strong> Schützt die <em>betroffenen Personen</em>.</li>
                  <li><strong>Schutzgut:</strong> Ausschließlich <em>personenbezogene Daten</em>.</li>
                </ul>
              </div>
              <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200">
                <h5 class="font-bold text-teal-950 text-sm mb-2">🏢 Informationssicherheit (tlw. Überschneidung)</h5>
                <ul class="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                  <li><strong>Zweck:</strong> Dient dem Schutz von <em>Organisationen</em>.</li>
                  <li><strong>Schutzgüter:</strong> <em>Alle Daten</em> (auch Sachdaten), Technik, Infrastruktur, weitere Rechtsgüter.</li>
                </ul>
              </div>
            </div>
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 text-xs">
              <strong class="text-slate-900 block mb-1.5">Konkrete ISM-Maßnahmen beim Zoll (Auswahl):</strong>
              <div class="flex flex-wrap gap-2">
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Informationssicherheitsbeauftragte (ISB)</span>
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Regelungen & Dienstanweisungen</span>
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Schulungen & Sensibilisierung</span>
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">Firewalls, Virenscanner, Spam-Filter</span>
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">2-Faktor-Authentisierung, SINA-Karte, VPN</span>
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">VS-NfD-Netz</span>
                <span class="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">„HTML-Unterdrückung“ in Outlook</span>
              </div>
            </div>
          `,
          keyTakeaway: 'Datenschutz schützt Personen (personenbezogene Daten); Informationssicherheit schützt die Organisation (alle Daten + Technik + Infrastruktur).'
        },
        {
          id: 'dive-le02-s3',
          badge: 'Bedrohungslage · Folie 15–19',
          title: 'Warum Bedrohungen steigen & Die 4 Bedrohungsursachen',
          content: `
            <p class="text-xs text-slate-600 mb-3">
              Laut BSI entstehen täglich durchschnittlich rund <strong>280.000 neue Schadprogramm-Varianten</strong>.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 block mb-2">6 Gründe für steigende Bedrohungen durch digitale Transformation:</strong>
                <ol class="list-decimal list-inside space-y-1 text-slate-700">
                  <li><strong>Steigende Vernetzung:</strong> Über geografische/institutionelle Grenzen hinweg; Abhängigkeit von IT-Dienstleistern (z. B. ITZBund).</li>
                  <li><strong>IT-Verbreitung & Durchdringung:</strong> Smart Home, Fitnesstracking, Autosensorik &rarr; steigende Lokalisierbarkeit.</li>
                  <li><strong>Verschwinden der Netzgrenzen:</strong> Serverstandorte durch Cloud-Nutzung kaum lokalisierbar.</li>
                  <li><strong>Kürzere Angriffszyklen:</strong> Kurze Zeit zwischen Bekanntwerden von Lücken und Angriffen.</li>
                  <li><strong>Höhere Interaktivität:</strong> Überlappung privater und beruflicher Kommunikation.</li>
                  <li><strong>Verantwortung der Benutzenden:</strong> Mensch als zentraler Akteur.</li>
                </ol>
                <div class="mt-2.5 pt-2 border-t border-slate-200 text-slate-600">
                  <strong>Unterschied zu Papierakten:</strong> Digitale Daten sind mehr Gefahren ausgesetzt – der Zugang zu manuellen Papierakten kann hingegen nicht digital „getrackt“ werden.
                </div>
              </div>

              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 block mb-2">Die 4 Bedrohungsursachen (Woher kommen Bedrohungen?):</strong>
                <div class="space-y-2 text-slate-700">
                  <div class="p-2 rounded bg-white border border-slate-200">
                    <strong>1. Höhere Gewalt:</strong> Naturkatastrophen (z. B. Erdbeben/Hochwasser beschädigt Leitungen).
                  </div>
                  <div class="p-2 rounded bg-white border border-slate-200">
                    <strong>2. Faktor Mensch:</strong> „Menschen machen Fehler“, Unachtsamkeit (Klick auf maliziösen Link trotz VPN/Firewall), Verlust/Diebstahl mobiler Endgeräte.
                  </div>
                  <div class="p-2 rounded bg-white border border-slate-200">
                    <strong>3. Technisches Versagen:</strong> Hardware-/Softwareausfall, technische Schwachstellen.
                  </div>
                  <div class="p-2 rounded bg-white border border-slate-200">
                    <strong>4. Vorsätzliche Handlungen:</strong> Kriminelle Aktionen (intern oder extern möglich).
                  </div>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Technische Schutzmaßnahmen (VPN, Firewall, Virenscanner) werden wirkungslos, wenn der „Faktor Mensch“ auf einen schädlichen Link klickt.'
        },
        {
          id: 'dive-le02-s4',
          badge: 'Angriffsformen · Folie 23–30',
          title: 'Ransomware, Spam, Social Engineering & Phishing',
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div class="p-4 rounded-xl bg-rose-50/50 border border-rose-200">
                <h5 class="font-bold text-rose-950 text-sm">1. Ransomware</h5>
                <p class="text-slate-700 mt-1">Daten werden verschlüsselt oder unbrauchbar gemacht, anschließend wird Lösegeld erpresst (fortgeschrittener Angriff).</p>
                <p class="text-slate-600 mt-1"><strong>Motivation:</strong> Bereicherung (Erpressung), Sabotage, Aufmerksamkeit erlangen.</p>
              </div>
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h5 class="font-bold text-slate-900 text-sm">2. Spam-Mails</h5>
                <p class="text-slate-700 mt-1">Unerwünschte Zusendungen (Werbung, Agitation, Hoax, Scam).</p>
                <p class="text-slate-600 mt-1"><strong>Auswirkungen:</strong> Zusätzliche Datenmengen auf Netzen, Aufwand für Betrieb/Aktualisierung von Spamfiltern, Verlust von Rechenkapazität & Arbeitszeit.</p>
              </div>
              <div class="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                <h5 class="font-bold text-amber-950 text-sm">3. Social Engineering</h5>
                <p class="text-slate-700 mt-1">Methode, um unberechtigten Zugang zu Informationen oder IT-Systemen durch soziale Manipulation zu erlangen.</p>
                <p class="text-slate-600 mt-1"><strong>Ausnutzung von:</strong> Hilfsbereitschaft, Vertrauen, Angst oder Respekt vor Autorität.<br><strong>Folgen:</strong> Identitätsmissbrauch, finanzielle Einbußen, Informationspreisgabe.</p>
              </div>
              <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200">
                <h5 class="font-bold text-indigo-950 text-sm">4. Phishing (Password-Fishing)</h5>
                <p class="text-slate-700 mt-1">Form des Social Engineerings: Vortäuschen bekannter Websites/Absender (z. B. <code>@rnicrosoft.com</code> mit „r+n“ statt „m“) zum Ausspionieren von:</p>
                <ul class="mt-1 space-y-0.5 text-slate-600 list-disc list-inside">
                  <li><strong>Sozialer Identität:</strong> Name, Adresse, Geburtsdatum, Ausweis-/Passnr., Geburtsurkunde, Handelsregistereintrag.</li>
                  <li><strong>Technischer Identität:</strong> E-Mail, Benutzername, Passwort, PIN, TAN, Telefonnr., Kontoverbindung, Kreditkarte, Zertifikate, IP-Adresse.</li>
                </ul>
              </div>
            </div>
          `,
          keyTakeaway: 'Reale Vorfälle: Südwestfalen IT (Ransomware AKIRA über Authentifizierungs-Tool ohne 2FA -> wochenlanger Ausfall für >70 Kommunen) & Stadt Dülmen (400.000 € Überweisung auf gefälschte Rechnung für Feuerwehrautos).'
        }
      ],
      exercises: [
        {
          title: 'Übung 1 (Folie 11/12): Bedeutung der Schutzziele für den Zoll',
          question: 'Erläutern Sie, warum Informationssicherheit für den Zoll eine besonders große Rolle spielt, und nennen Sie Beispiele für Gefährdungen.',
          answer: '<strong>Lösungsvorschlag:</strong> Der Zoll verfügt als Finanz- und Sicherheitsbehörde über besonders sensible Daten (Steuergeheimnis nach § 30 AO, Erkenntnisse über Straftaten). Zudem hängt die Erledigung wichtiger staatlicher Aufgaben unmittelbar vom Schutz und der Verfügbarkeit der IT ab.<br><strong>Beispiele:</strong> Ausfall der E-Akte, Serverausfall beim ITZBund (Verfügbarkeit), Upload interner Dokumente bei ChatGPT oder ungesperrter SINA-Laptop (Vertraulichkeit).'
        },
        {
          title: 'Übung 2 (Folie 28/29): Fallanalyse Südwestfalen IT (SIT)',
          question: 'Welche Schutzziele wurden beim Angriff auf die Südwestfalen IT beeinträchtigt und durch welche Schwachstelle gelang der Angriff?',
          answer: '<strong>Lösungsvorschlag:</strong><br>• <strong>Schutzziele:</strong> Besonders stark war die fehlende <strong>Verfügbarkeit</strong> (mehrwöchiger IT-Ausfall) betroffen; die <strong>Integrität</strong> war durch Verschlüsselung eingeschränkt; die <strong>Vertraulichkeit</strong> wahrscheinlich nicht (kein Datenabfluss feststellbar).<br>• <strong>Angriff & Schwachstelle:</strong> Ransomware der Hackergruppe AKIRA. Einfallstor war ein Authentifizierungs-Tool ohne aktivierte Zwei-Faktor-Authentisierung (2FA). Hinweise auf die eingesetzte Software waren öffentlich über ein YouTube-Video eines Politikers und Stellenausschreibungen auffindbar.'
        }
      ],
      quiz: [
        {
          q: 'Aufgrund eines Wasserschadens im Serverraum des HZA können mehrere Fachverfahren nicht genutzt werden. Welches Schutzziel ist primär verletzt?',
          options: ['Vertraulichkeit', 'Integrität', 'Verfügbarkeit', 'Informationelle Selbstbestimmung'],
          correct: 2,
          explanation: 'Verfügbarkeit liegt vor, wenn IT-Systeme und Informationen stets wie vorgesehen genutzt werden können. Bei einem Systemausfall ist die Verfügbarkeit beeinträchtigt.'
        },
        {
          q: 'Welche Daten zählen beim Phishing zur „Technischen Identität“?',
          options: [
            'Name, Geburtsdatum und Geburtsurkunde',
            'Personalausweisnummer und Passnummer',
            'Handelsregistereintrag einer juristischen Person',
            'Benutzername, Passwort, PIN/TAN, Zertifikate und IP-Adresse'
          ],
          correct: 3,
          explanation: 'E-Mail, Benutzername, Passwort, PIN, TAN, Kontoverbindung, Kreditkartendaten, Zertifikate und IP-Adresse bilden die technische Identität.'
        },
        {
          q: 'Worin liegt der Kernunterschied zwischen Datenschutz und Informationssicherheit?',
          options: [
            'Datenschutz schützt betroffene Personen (nur personenbezogene Daten); Informationssicherheit schützt Organisationen (alle Daten, Technik, Infrastruktur).',
            'Datenschutz gilt nur für Papierakten, Informationssicherheit nur für Cloud-Server.',
            'Informationssicherheit schützt ausschließlich das Grundrecht auf informationelle Selbstbestimmung.',
            'Es gibt keinen Unterschied.'
          ],
          correct: 0,
          explanation: 'Datenschutz schützt Personen und deren personenbezogene Daten; Informationssicherheit schützt die Organisation und umfasst alle Informationen sowie Technik und Infrastruktur.'
        }
      ]
    },

    // ========================================================================
    // LE 03: CHANGE MANAGEMENT IM ÖFFENTLICHEN SEKTOR
    // ========================================================================
    {
      id: 'dive-le03',
      shortTitle: 'LE 03 · Change Management',
      code: 'LE 03 (VL 4 & 5)',
      title: 'Change Management im öffentlichen Sektor',
      lernziele: [
        'Auswirkungen von Veränderungen auf die 3 Ebenen (Aufbau-, Ablauforganisation, Zusammenarbeit) und spezifische Hürden der Verwaltung bewerten.',
        'Bedeutung, Erfordernis (Anzahl Betroffene × Neuigkeitswert) und die 4 individuellen Reaktionsstufen im Change Management erläutern.',
        'Stakeholderanalyse, 3-Phasen-Modell nach Lewin und das ADKAR-Modell auf Praxisfälle beim Zoll anwenden.'
      ],
      sections: [
        {
          id: 'dive-le03-s1',
          badge: 'Grundprinzip · Dumas et al. (2013)',
          title: 'Prozessveränderung & Evolutionärer vs. Radikaler Wandel',
          content: `
            <div class="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm mb-4">
              <strong class="text-amber-950 block mb-1">⚡ Zentrale Erkenntnis (Dumas et al. 2013, Folie 8):</strong>
              <span class="font-mono text-slate-800">IT & Digitale Tools &rarr; <strong>ermöglicht Prozessveränderung</strong> &rarr; ergibt Mehrwert für die Verwaltung / den Zoll!</span><br>
              <span class="text-xs text-amber-900">Ohne Prozessveränderung führt die bloße Einführung von IT-Tools <strong>nicht</strong> zu einem Mehrwert.</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h5 class="font-bold text-slate-900 text-sm">📶 Evolutionärer Wandel</h5>
                <div class="text-slate-500 font-mono text-[11px] mb-1.5">Analoge Verwaltung &rarr; Digitale Bereitstellung &rarr; Digitalisierung</div>
                <ul class="space-y-1 text-slate-700 list-disc list-inside">
                  <li>Stabile Organisation bis moderate Organisationsveränderung</li>
                  <li>Schrittweise digitale Anpassung, einfache Organisationsveränderungen</li>
                  <li>Vermehrt Online-Leistungen (Metapher: Verbesserung des mechanischen Schlüssels)</li>
                </ul>
              </div>
              <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200">
                <h5 class="font-bold text-indigo-950 text-sm">💥 Radikaler Wandel</h5>
                <div class="text-indigo-700 font-mono text-[11px] mb-1.5">Digitale Transformation</div>
                <ul class="space-y-1 text-slate-700 list-disc list-inside">
                  <li>Starke bis fundamentale Organisationsveränderung</li>
                  <li>Neue Interaktionswege, digital-induzierter Umbruch, funktionale Verwaltungsreform</li>
                  <li>Flächendeckend digitale Anwendungen & Automatisierung (Metapher: Türöffnung per App)</li>
                </ul>
              </div>
            </div>
          `,
          keyTakeaway: 'IT allein schafft keinen Nutzen – erst die durch IT ermöglichte Prozessveränderung erzeugt Mehrwert für den Zoll.'
        },
        {
          id: 'dive-le03-s2',
          badge: 'Verwaltungsspezifika · Folie 13–16',
          title: '6 Spezifische Herausforderungen der öffentlichen Verwaltung',
          content: `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <strong class="text-slate-900 block mb-1">1. Fachliche & IT-Heterogenität</strong>
                <p class="text-slate-600">Viele verschiedene Aufgaben-/Rechtsgebiete beim Zoll führten zu starker IT-Heterogenität (allein im Prüfungsprozess der FKS >15 Fachverfahren wie ProFIS, ALADDIN, SOKA-NET).</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <strong class="text-slate-900 block mb-1">2. Hohe Verantwortung & Angst vor Scheitern</strong>
                <p class="text-slate-600">Medienwirksamkeit von Fehlern führt zu Fokus auf Absicherung, Rechtfertigung und nur vorsichtige Fortschritte.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <strong class="text-slate-900 block mb-1">3. Angebotsmonopol</strong>
                <p class="text-slate-600">Keine Konkurrenz (z. B. bei Zollanmeldung, Kfz-Steuer) &rarr; kein Wettbewerbsdruck und geringere Veränderungsbereitschaft.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <strong class="text-slate-900 block mb-1">4. Gewachsene Behördenkultur</strong>
                <p class="text-slate-600">Konservativ, risikoavers, stabilitätsorientiert. Ehemals erfolgreiche Werte passen oft nicht mehr in eine digitale Verwaltung.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <strong class="text-slate-900 block mb-1">5. Bürokratische Prozesse</strong>
                <p class="text-slate-600">Stark formalisiert und geregelt durch Gesetze, Verordnungen, Erlasse und Kontrollmechanismen.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200">
                <strong class="text-slate-900 block mb-1">6. Starre Personalstrukturen & Anreize</strong>
                <p class="text-slate-600">Starres Beamten-/Tarifrecht; kaum finanzielle Anreize für Führungskräfte (Arbeit erfolgt aus Überzeugung, nicht aus materiellen Gründen).</p>
              </div>
            </div>
          `,
          keyTakeaway: 'Wegen des Angebotsmonopols und fehlender finanzieller Boni funktioniert Wandel in Behörden nur über Sinnvermittlung und Überzeugungsarbeit.'
        },
        {
          id: 'dive-le03-s3',
          badge: 'Ebenen & Reaktionen · Stolzenberg & Heberle (2023)',
          title: 'Die 3 Veränderungsebenen & 4 Stufen individueller Reaktion',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 text-sm block mb-1">1. Aufbauorganisation</strong>
                <p class="text-slate-600">Reorganisation der Behörde, Strukturen, Aufbau neuer Abteilungen/Teams, Änderung des Behördenzuschnitts (z. B. Reform <em>Zoll 2030</em>: HZA &rarr; Ortsbehörde mit neuen Sachgebieten).</p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 text-sm block mb-1">2. Ablauforganisation</strong>
                <p class="text-slate-600">Prozesse, Rollen und Zuständigkeiten, Aufgabenabfolge (z. B. Wegfall der Führungskraft-Zustimmung bei Steuererstattungen bis 10.000 €; digitaler Urlaubsantrag).</p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 text-sm block mb-1">3. Zusammenarbeit / Verhalten</strong>
                <p class="text-slate-600">Werte der Zusammenarbeit, Führungsinstrumente (Beurteilungssystem), Methoden (agiles Arbeiten), digitale Kommunikation im Homeoffice & Arbeitsaufträge per E-Akte.</p>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200 text-xs">
              <strong class="text-teal-950 block mb-2">Fokus des Change Managements: Die 4 Anforderungen bei Mitarbeitenden & Führungskräften (Bsp. E-Akte Bund):</strong>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-700">
                <div class="p-2.5 rounded bg-white border border-teal-100">
                  <strong>1. Überzeugung (von Notwendigkeit & Richtigkeit):</strong> Gründe offen erklären (Zugriff von überall, kein Aktensuchen, mobiles Arbeiten), Infoveranstaltung, Leitung erklärt selbst.
                </div>
                <div class="p-2.5 rounded bg-white border border-teal-100">
                  <strong>2. Akzeptanz (für die fachliche Veränderung):</strong> Sorgen und Fragen ernst nehmen, Testphase, Rückmeldekanal einrichten.
                </div>
                <div class="p-2.5 rounded bg-white border border-teal-100">
                  <strong>3. Bereitschaft (Veränderung mitzutragen):</strong> Beteiligung bei der Ausgestaltung, Multiplikatoren aus dem eigenen Team, Vorbild der Führungskräfte.
                </div>
                <div class="p-2.5 rounded bg-white border border-teal-100">
                  <strong>4. Unterstützung (bei der Umsetzung):</strong> Schulungen, Leitfäden, Ansprechpersonen vor Ort, Zeit für die Umstellung geben.
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Die Einrichtung einer Besonderen Aufbauorganisation (BAO) betrifft alle 3 Ebenen gleichzeitig (neue Struktur, neue Einsatzprozesse, neue Zusammenarbeit).'
        },
        {
          id: 'dive-le03-s4',
          badge: 'Methoden & Modelle · Folie 32–46',
          title: 'Erfordernis, Stakeholderanalyse, Lewin (3 Phasen) & ADKAR-Modell',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 block mb-1">Erfordernis & Stakeholderanalyse</strong>
                <p class="text-slate-600 mb-2">
                  Der Bedarf für Change Management steigt mit:<br>
                  <strong>1. Anzahl der Betroffenen</strong> (ermittelt durch <em>Stakeholderanalyse</em>)<br>
                  <strong>2. Neuigkeitswert des Veränderungsinhalts</strong> (gering: digitale Hausmitteilung/Update vs. hoch: E-Akte, KI-Assistent, Zoll 2030).
                </p>
                <p class="text-slate-600">
                  <strong>Stakeholder:</strong> Jede Person, Gruppe oder Institution mit berechtigtem Interesse am Verlauf/Ergebnis eines Projekts, die beeinflusst wird oder Einfluss nehmen kann.
                </p>
              </div>
              <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 block mb-1">Drei-Phasen-Modell von Kurt Lewin</strong>
                <ol class="list-decimal list-inside space-y-1 text-slate-700 mt-1.5">
                  <li><strong>Auftauen (Unfreeze):</strong> Vorbereitung & Kommunikation</li>
                  <li><strong>Bewegen (Move):</strong> Veränderung wird umgesetzt, Training & Überwachung</li>
                  <li><strong>Einfrieren (Refreeze):</strong> Verankerung & Stabilisierung der Veränderung</li>
                </ol>
                <p class="text-slate-500 mt-2 italic">Bewertung: Grundlegende Phasen verständlich und simpel, bietet jedoch kaum konkrete Handlungsanleitung.</p>
              </div>
            </div>

            <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-200 text-xs">
              <strong class="text-indigo-950 block mb-2">Das ADKAR-Modell (Fokus auf individuelle Bedürfnisse & konkrete Maßnahmen):</strong>
              <div class="grid grid-cols-1 sm:grid-cols-5 gap-2">
                <div class="p-2.5 rounded-lg bg-white border border-indigo-100">
                  <div class="font-mono font-bold text-indigo-700">A – Awareness</div>
                  <p class="text-slate-600 mt-1">Bewusstsein für die Notwendigkeit der Veränderung schaffen.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white border border-indigo-100">
                  <div class="font-mono font-bold text-indigo-700">D – Desire</div>
                  <p class="text-slate-600 mt-1">Wunsch zur Beteiligung an der Veränderung wecken.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white border border-indigo-100">
                  <div class="font-mono font-bold text-indigo-700">K – Knowledge</div>
                  <p class="text-slate-600 mt-1">Wissen vermitteln, wie die Veränderung konkret funktioniert.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white border border-indigo-100">
                  <div class="font-mono font-bold text-indigo-700">A – Ability</div>
                  <p class="text-slate-600 mt-1">Möglichkeit zur praktischen Umsetzung der Fähigkeiten im Alltag.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-white border border-indigo-100">
                  <div class="font-mono font-bold text-indigo-700">R – Reinforcement</div>
                  <p class="text-slate-600 mt-1">Verankerung der Veränderung & weitere positive Verstärkung.</p>
                </div>
              </div>
            </div>
          `,
          keyTakeaway: 'Exkurs Veränderungskurve nach Streich (7 Phasen): 1. Schock -> 2. Verneinung -> 3. Einsicht -> 4. Akzeptanz -> 5. Ausprobieren -> 6. Erkenntnis -> 7. Integration.'
        }
      ],
      exercises: [
        {
          title: 'Übung 1 (Folie 27/28): Einführung eines KI-Assistenten für E-Mails',
          question: 'Auf welchen Ebenen wirkt sich ein KI-E-Mail-Assistent fachlich aus und welche individuellen Reaktionen sind zu erwarten?',
          answer: '<strong>Lösungsvorschlag:</strong><br>• <strong>Fachliche Änderungen (Auswirkung gering bis mäßig):</strong> Betrifft die <em>Ablauforganisation</em> (Bedienung der KI statt eigenständiger Schreibarbeit) und die <em>Werte der Zusammenarbeit</em> (interne Mails wirken weniger „persönlich“); die <em>Aufbauorganisation</em> wird nicht berührt.<br>• <strong>Individuelle Reaktionen (Auswirkung hoch):</strong> Schulungsbedarf, Akzeptanzprobleme, Angst vor Wegfall menschlicher Interaktion bzw. Kontrollverlust.'
        },
        {
          title: 'Übung 2 (Folie 35/36): Stakeholderanalyse bei Einführung mobiler Endgeräte für Kontrolleinheiten (KE)',
          question: 'Welche Stakeholder sind betroffen und warum unterscheidet sich das Change Management zwischen den Kontrolleinheiten und der IT-Abteilung?',
          answer: '<strong>Lösungsvorschlag:</strong><br>• <strong>Stakeholder:</strong> Führungskräfte der KE (Vorbild/Durchsetzung), Mitarbeitende der KE (neue Arbeitsweise), IT-Abteilungen HZÄ/GZD (Betreuung), Schulungsabteilung/Multiplikatoren, Personalvertretungen (Mitwirkung/Barrierefreiheit), Extern: kontrollierte Personen (Datenschutz) und Software-/Hardwarelieferanten.<br>• <strong>Unterschied:</strong> Für die <strong>Kontrolleinheiten</strong> ist die Umstellung der Arbeitsweise hoch &rarr; intensives Change Management nötig. Für die <strong>IT-Abteilung</strong> ist die Grundtätigkeit (Gerätebetreuung) bereits bekannt &rarr; geringerer Change-Umfang.'
        },
        {
          title: 'Übung 3 (Folie 44/45): ADKAR-Modell bei Umstellung auf digitale Dienstbesprechungen im SG E',
          question: 'Sachgebietsleiterin Dagmar Digital stellt die Dienstbesprechungen des SG E auf Videokonferenzen um (nur 1x jährlich Präsenz). Wie begleiten Sie dies mit ADKAR?',
          answer: '<strong>Lösungsvorschlag:</strong><br>• <strong>Awareness:</strong> Gründe erläutern (Standortübergreifende Flexibilität, Einsparung von Dienstreisekosten, Reisezeit und Organisationsaufwand).<br>• <strong>Desire:</strong> Vorteile aufzeigen, Feedback zur Planung einholen, Kritik ernst nehmen, Beschäftigte in die Planung einbeziehen.<br>• <strong>Knowledge:</strong> Vorab in kleinen Teams Mikro/Bild-Einstellungen üben, Meeting-Regeln aufstellen, Leitfaden für das Tool verteilen.<br>• <strong>Ability:</strong> Nutzung vorab für kleinere/bilaterale Abstimmungen erproben, Ansprechpartner für technische Probleme benennen.<br>• <strong>Reinforcement:</strong> Konsequente Nutzung durch Führungskräfte, Akzeptanz/Nutzung loben, eingesparte Reisekosten sichtbar machen.'
        }
      ],
      quiz: [
        {
          q: 'Bei Steuererstattungen bis 10.000 Euro entfällt künftig der Genehmigungsschritt durch die Führungskraft. Welche Veränderungsebene ist primär betroffen?',
          options: [
            'Aufbauorganisation',
            'Ablauforganisation',
            'Beamtenrechtliche Laufbahnstruktur',
            'Keine Ebene'
          ],
          correct: 1,
          explanation: 'Das Streichen eines Prüfschritts im Prozess verändert die Ablauforganisation (Prozesse, Rollen und Zuständigkeiten).'
        },
        {
          q: 'Wovon hängt der erforderliche Umfang eines Change Managements nach Stolzenberg & Heberle (2021) ab?',
          options: [
            'Nur vom Kaufpreis der Softwarelizenz',
            'Von der Anzahl der Betroffenen (Stakeholderanalyse) und dem Neuigkeitswert des Veränderungsinhalts (evolutionär bis radikal)',
            'Ausschließlich vom Lebensalter der Behördenleitung',
            'Nur von der Serverkapazität des ITZBund'
          ],
          correct: 1,
          explanation: 'Erfordernis und Umfang steigen mit der Anzahl der Betroffenen und dem Neuigkeitswert der Veränderung.'
        },
        {
          q: 'In welcher Phase des ADKAR-Modells werden Leitfäden verteilt und Mikrofon-/Kameraeinstellungen in Kleingruppen geschult?',
          options: ['Awareness', 'Desire', 'Knowledge', 'Reinforcement'],
          correct: 2,
          explanation: 'Schulungen, Übungen und Leitfäden vermitteln das notwendige Wissen (Knowledge) für die Veränderung.'
        }
      ]
    },

    // ========================================================================
    // LE 04: AGILES ARBEITEN & INNOVATIONEN
    // ========================================================================
    {
      id: 'dive-le04',
      shortTitle: 'LE 04 · Agiles Arbeiten & Innovation',
      code: 'LE 04 (VL 6)',
      title: 'Agiles Arbeiten & Innovationen',
      lernziele: [
        'Bedeutung und Erfordernis agiler Arbeitsweisen in einer VUKA-Welt für die öffentliche Verwaltung erläutern.',
        'Einsatzgebiete agiler Methoden mithilfe der Stacey-Matrix bestimmen sowie Scrum und User Stories auf Zoll-Fälle anwenden.',
        'Agile Verwaltung als übergreifenden Organisationsansatz und Ambidextrie (Exploitation vs. Exploration) erläutern.'
      ],
      sections: [
        {
          id: 'dive-le04-s1',
          badge: 'Grundlagen · VUKA & Agilität',
          title: 'VUKA-Welt, Iteratives/Inkrementelles Arbeiten & 2 Ebenen der Agilität',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <strong class="text-slate-900 block mb-1.5">🌪️ Das Problem: Die VUKA-Welt</strong>
                <ul class="space-y-1 text-slate-700">
                  <li><strong>V – Volatilität:</strong> Schnelle und dynamische Veränderungen</li>
                  <li><strong>U – Unsicherheit:</strong> Unklare, ungewisse Situationen</li>
                  <li><strong>K – Komplexität:</strong> Ursache und Wirkung schwierig erkennbar</li>
                  <li><strong>A – Ambiguität:</strong> Unklare oder widersprüchliche Umweltsituation</li>
                </ul>
                <p class="text-slate-500 mt-2">Folge: Starre Arbeitsweisen stoßen an Grenzen, Kundenbedürfnisse ändern sich schnell, Vorhaben veralten.</p>
              </div>
              <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200">
                <strong class="text-teal-950 block mb-1.5">🔄 Die Lösung: Flexiblere Arbeitsweisen</strong>
                <p class="text-slate-700 mb-2">
                  <strong>Iteratives Arbeiten:</strong> <em>Wiederkehrende</em> Bearbeitung kleinerer Arbeitspakete, um aktuelles Stakeholder-Feedback schnell zu berücksichtigen.
                </p>
                <p class="text-slate-700 mb-2">
                  <strong>Inkrementelles Arbeiten:</strong> Bearbeitung <em>kleinerer Arbeitspakete/Teilergebnisse</em>, um fokussiert einzelne Anforderungen abzuarbeiten und abzustimmen.
                </p>
                <p class="text-slate-600">
                  <strong>Gründe für Agilität in der Verwaltung:</strong> Nutzer-/Bürgerzentrierung, bessere Anpassungs-/Reaktionsfähigkeit, innovatives Denken, Abbau von Silodenken, positive Fehlerkultur, besserer Wissensaustausch.
                </p>
              </div>
            </div>
            <div class="p-3.5 rounded-xl bg-indigo-50/50 border border-indigo-200 text-xs text-slate-700">
              <strong>Zwei Ebenen der Agilität (Hegele & Stoll 2026):</strong><br>
              &bull; <strong>Ebene 1 – Anwendung agiler Methoden (fallbezogen):</strong> Konkrete Methode (z. B. Scrum, Kanban) in der Softwareentwicklung oder Projektarbeit.<br>
              &bull; <strong>Ebene 2 – Agile Verwaltung (Governance-Ansatz, Kultur):</strong> Übergreifende Etablierung neuer Arbeitsansätze und Förderung der Innovationsfähigkeit.
            </div>
          `,
          keyTakeaway: 'Agilität bedeutet die Fähigkeit einer Organisation, in Zeiten des Wandels und der Unsicherheit initiativ und aktiv Anpassungsfähigkeit und Flexibilität zu beweisen (Rölle et al. 2025).'
        },
        {
          id: 'dive-le04-s2',
          badge: 'Methoden · Stacey-Matrix & Scrum',
          title: 'Stacey-Matrix & Das Scrum-Framework',
          content: `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h5 class="font-bold text-slate-900 text-sm mb-1.5">📊 Stacey-Matrix (BMI & BVA 2025)</h5>
                <p class="text-slate-600 mb-2">Bestimmt den Komplexitätsgrad von Projekten anhand von zwei Achsen:<br><strong>Was / Anforderung</strong> (klar/eindeutig &rarr; unklar/mehrdeutig) &times; <strong>Wie / Vorgehen</strong> (klar/bekannt &rarr; unklar/neu/unerprobt).</p>
                <div class="space-y-1.5 text-slate-700">
                  <div class="p-2 rounded bg-white border border-slate-200">🟢 <strong>Einfach:</strong> Was & Wie klar &rarr; <em>„Machen!“</em> (Routineprozess)</div>
                  <div class="p-2 rounded bg-white border border-slate-200">🔵 <strong>Kompliziert:</strong> &rarr; <em>„Klassisches“ Projektmanagement</em></div>
                  <div class="p-2 rounded bg-teal-50 border border-teal-200">🟣 <strong>Komplex:</strong> &rarr; <strong>Anwendungsbereich für agile Methoden (z. B. Scrum, Kanban, XP, Crystal)!</strong></div>
                  <div class="p-2 rounded bg-rose-50 border border-rose-200">🔴 <strong>Chaotisch:</strong> &rarr; Erst <em>Klärung von Umfang und Zielen erforderlich!</em></div>
                </div>
              </div>

              <div class="p-4 rounded-xl bg-teal-50/50 border border-teal-200">
                <h5 class="font-bold text-teal-950 text-sm mb-1.5">🏉 Scrum-Framework</h5>
                <p class="text-slate-700 font-semibold mb-1">3 Rollen im Scrum-Team (selbstorganisiert):</p>
                <ul class="space-y-1 text-slate-600 list-disc list-inside mb-2.5">
                  <li><strong>Product Owner:</strong> Verantwortlich für Anforderungen & Priorisierung (Product Backlog).</li>
                  <li><strong>Scrum Master:</strong> Coach des Teams & Hüter der Scrum-Regeln; unterstützt Selbstorganisation.</li>
                  <li><strong>Entwicklungsteam:</strong> Interdisziplinäres Team, bearbeitet Aufgaben eigenverantwortlich.</li>
                </ul>
                <p class="text-slate-700 font-semibold mb-1">Artefakte & Events im Sprint (2–4 Wochen):</p>
                <ul class="space-y-1 text-slate-600 list-disc list-inside">
                  <li><strong>Product Backlog:</strong> Komplette Anforderungsliste (&rarr; Product Goal).</li>
                  <li><strong>Sprint Planning:</strong> Planung des nächsten Sprints & Definition des Sprint-Ziels (&rarr; <strong>Sprint Backlog</strong>).</li>
                  <li><strong>Daily Scrum (15 Min.):</strong> 1. Was ist seit gestern passiert? 2. Was ist der Plan bis morgen? 3. Wo liegen Herausforderungen?</li>
                  <li><strong>Inkrement:</strong> Funktionierendes „Software-Stück“ / Komponente am Sprint-Ende.</li>
                  <li><strong>Sprint Review:</strong> Beurteilung des entwickelten <em>Inkrements</em> & Fortschritts.</li>
                  <li><strong>Sprint Retrospective:</strong> Team diskutiert und verbessert die eigene <em>Zusammenarbeit</em>.</li>
                </ul>
              </div>
            </div>
          `,
          keyTakeaway: 'Sprint Review prüft das Produkt (Inkrement); Sprint Retrospective reflektiert die Zusammenarbeit im Team.'
        },
        {
          id: 'dive-le04-s3',
          badge: 'Anforderungen · Bartonitz et al. (2018)',
          title: 'User Stories ergebnisoffen formulieren',
          content: `
            <div class="p-3.5 rounded-xl bg-slate-900 text-white font-mono text-xs sm:text-sm text-center mb-4">
              Struktur: Als <span class="text-teal-300 font-bold">&lt;Rolle&gt;</span> möchte ich <span class="text-amber-300 font-bold">&lt;Handlung&gt;</span>, um <span class="text-emerald-300 font-bold">&lt;Ergebnis&gt;</span> zu erzielen.
            </div>
            <p class="text-xs text-slate-600 mb-3">
              Eine User Story beschreibt eine Anforderung <strong>ergebnisoffen aus Nutzer-Perspektive</strong> (orientiert sich am Kundenbedürfnis, legt die technische Lösung noch nicht fest). Alle User Stories zusammen bilden das <strong>Product Backlog</strong>.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div class="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                <strong class="text-rose-900 block mb-1.5">☹️ Typische Fehler (Technische Lösung vorweggenommen, Rolle/Nutzen fehlt):</strong>
                <ul class="space-y-1.5 text-rose-800 list-disc list-inside">
                  <li>„Programmiere eine Schnittstelle zwischen ATLAS und dem Controlling-System.“</li>
                  <li>„Verknüpfung zu Outlook, um Bescheide per E-Mail zu versenden.“</li>
                  <li>„Der wöchentliche Vorlesungsplan soll als PDF exportiert werden.“</li>
                </ul>
              </div>
              <div class="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                <strong class="text-emerald-900 block mb-1.5">🙂 Korrekte User Stories (Ergebnisoffen aus Nutzersicht):</strong>
                <ul class="space-y-1.5 text-emerald-800 list-disc list-inside">
                  <li>„Als <strong>SGL</strong> möchte ich die <strong>Daten der Zollanmeldungen analysieren</strong>, um einen <strong>jährlichen Bericht zu erstellen</strong>.“</li>
                  <li>„Als <strong>Sachbearbeitung</strong> möchte ich <strong>Mitteilungen an Steuerpflichtige senden</strong>, um <strong>Steuerbescheide digital zuzustellen</strong>.“</li>
                  <li>„Als <strong>Student/in</strong> möchte ich <strong>meine aktuellen Vorlesungszeiten einsehen</strong>, um <strong>die Woche zeitlich zu planen</strong>.“</li>
                </ul>
              </div>
            </div>
          `,
          keyTakeaway: 'Niemals technische Lösungen (wie „als PDF“, „Schnittstelle“, „in Outlook“) in die User Story schreiben!'
        },
        {
          id: 'dive-le04-s4',
          badge: 'Governance · Olivan (2019)',
          title: 'Ambidextrie („Beidhändigkeit“), Kritik & Ideenmanagement BFinV',
          content: `
            <p class="text-xs text-slate-600 mb-3">
              <strong>Ambidextrie („Beidhändigkeit“):</strong> Fähigkeit der öffentlichen Verwaltung, sowohl <strong>klassische Verwaltungsarbeit in hierarchischen Strukturen (Exploitation)</strong> als auch <strong>Innovationen durch neue agile Arbeitsansätze (Exploration)</strong> gleichzeitig zu ermöglichen.
            </p>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
                <thead class="bg-slate-100 text-slate-800">
                  <tr>
                    <th class="p-2.5 border border-slate-200">Dimension</th>
                    <th class="p-2.5 border border-slate-200">Exploitation (Effizienz) – Klassisches Verwaltungshandeln</th>
                    <th class="p-2.5 border border-slate-200 bg-teal-50 text-teal-950">Exploration (Innovation) – Agile Arbeitsweisen</th>
                  </tr>
                </thead>
                <tbody class="text-slate-700">
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Strategische Zielsetzung</td>
                    <td class="p-2 border border-slate-200">Kosten, Profit & Effizienz (kurzfristiger Kundenwunsch)</td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Innovation, Wachstum, Lernfähigkeit (langfristig)</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Handlungsfelder</td>
                    <td class="p-2 border border-slate-200">Effiziente Abwicklung bestehender Produkte/Dienstleistungen</td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Kreative Entwicklung neuer Produkte/Dienstleistungen</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Innovationsart</td>
                    <td class="p-2 border border-slate-200">Inkrementelle Innovation</td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Radikale Innovation</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Kompetenzen</td>
                    <td class="p-2 border border-slate-200">„Umsetzer“, Spezialisten</td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Generalisten, Unternehmermentalität</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Maßstäbe</td>
                    <td class="p-2 border border-slate-200">Kosten, Produktivität, <strong>Rechtmäßigkeit</strong></td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Innovation, Meilensteine, Wohlfahrtssteigerung</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Strukturen</td>
                    <td class="p-2 border border-slate-200">Formal, Routine, mechanisch, Hierarchie</td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Anpassungsfähig, agil, nicht-Routine, cross-funktionale Teams</td>
                  </tr>
                  <tr>
                    <td class="p-2 border border-slate-200 font-semibold">Kultur & Führungsstil</td>
                    <td class="p-2 border border-slate-200">Geringes Risiko, Stabilität · Autoritär, top-down</td>
                    <td class="p-2 border border-slate-200 bg-teal-50/30">Risikofreude, Experimentieren · Visionär, involvierend, eigenverantwortlich</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div class="p-3 rounded-lg bg-slate-50 border border-slate-200">
                <strong class="text-slate-900">Kritik, Nachteile & Grenzen agiler Verwaltung:</strong>
                <ul class="mt-1 space-y-0.5 text-slate-600 list-disc list-inside">
                  <li>„Agil“ oft nur leeres <em>Buzzword</em></li>
                  <li>Nicht in allen Bereichen des Zolls anwendbar (gebundene Verwaltung!)</li>
                  <li>Teilweise „alter Wein in neuen Schläuchen“</li>
                  <li>Hoher Kommunikationsaufwand muss einkalkuliert werden</li>
                  <li>Gefahr des „Wegduckens“ in selbstorganisierten Teams ohne Hierarchie</li>
                </ul>
              </div>
              <div class="p-3 rounded-lg bg-amber-50/60 border border-amber-200">
                <strong class="text-amber-950">Ideenmanagement der BFinV:</strong>
                <p class="mt-1 text-slate-700 leading-relaxed">
                  Beschäftigte können Verbesserungsvorschläge über ein zentrales Intranet-Portal einreichen. Erfolgreiche Ideen werden mit einer <strong>Prämierung bis zu 25.000 Euro</strong> belohnt.
                </p>
              </div>
            </div>
          `,
          keyTakeaway: 'Analogie Spitzenküche (Ospina 2018): Ein HZA kann nicht wie „El Bulli“ mehrere Monate schließen (Pflichtaufgaben!), aber eigene Innovationsteams („Testküche“) oder monatliche Konzeptvorstellungen sind übertragbar.'
        }
      ],
      exercises: [
        {
          title: 'Übung 1 (Folie 24/25): User Stories für eine Kontroll-App der Kontrolleinheiten',
          question: 'Formulieren Sie mindestens drei methodisch korrekte, ergebnisoffene User Stories für eine App zur digitalen Kontrolldokumentation.',
          answer: '<strong>Lösungsvorschlag:</strong><br>1. „Als <strong>Kontrollbeamtin</strong> möchte ich <strong>Ausweisdaten vor Ort erfassen</strong>, um die <strong>Personalien fehlerfrei und ohne späteres Abschreiben zu dokumentieren</strong>.“<br>2. „Als <strong>vorgesetzte Person</strong> möchte ich eine <strong>aktuelle Übersicht über alle durchgeführten Kontrollen haben</strong>, um die <strong>Personaleinsatzplanung zu prüfen</strong>.“<br>3. „Als <strong>Kontrollbeamter</strong> möchte ich eine <strong>Kontrolle auch ohne Netzempfang vollständig erfassen</strong>, um <strong>nicht auf Papier ausweichen zu müssen</strong>.“<br>4. „Als <strong>kontrollierte Person</strong> möchte ich <strong>erfahren, welche Daten über mich erfasst werden</strong>, um den <strong>Ablauf der Kontrolle nachvollziehen zu können</strong>.“'
        },
        {
          title: 'Übung 2 (Folie 28): Übertragbarkeit des Spitzenküche-Beispiels auf ein Hauptzollamt',
          question: 'Wie schafft eine Spitzenküche Perfektion im Alltag und trotzdem Innovation: (1) Eigene Testküche, (2) 4 Monate im Jahr schließen (El Bulli), (3) Jeden Monat stellt ein Koch ein neues Gericht vor. Was lässt sich auf ein HZA übertragen?',
          answer: '<strong>Lösungsvorschlag:</strong> Lösungen (1) und (3) lassen sich im Sinne der <strong>Ambidextrie</strong> auf den Zoll übertragen (eigene Digital-/Innovationslabore parallel zum Linienbetrieb sowie regelmäßige Innovationsvorschläge/Ideenmanagement). Lösung (2) ist <strong>nicht übertragbar</strong>, da ein Hauptzollamt gesetzliche Daueraufgaben (Abfertigung, Steuererhebung, Grenzkontrolle) hat und die Verfügbarkeit durchgehend gewährleisten muss.'
        }
      ],
      quiz: [
        {
          q: 'In welchem Bereich der Stacey-Matrix ist der Einsatz agiler Methoden wie Scrum ideal?',
          options: ['Einfach', 'Kompliziert', 'Komplex', 'Chaotisch'],
          correct: 2,
          explanation: 'Im komplexen Sektor (Anforderungen und Vorgehen teilweise unklar/neu, aber nicht völlig chaotisch) liegt der ideale Anwendungsbereich für agile Methoden.'
        },
        {
          q: 'Welche Formulierung ist eine korrekte, ergebnisoffene User Story?',
          options: [
            'Programmiere eine SQL-Datenbank mit PDF-Export.',
            'Als Kontrollbeamter möchte ich eine Kontrolle auch ohne Netzempfang vollständig erfassen, um nicht auf Papier ausweichen zu müssen.',
            'Die App braucht einen blauen Speichern-Button.',
            'Verknüpfung zu Outlook herstellen.'
          ],
          correct: 1,
          explanation: 'Sie enthält Rolle, Handlung und Ergebnis/Nutzen aus Nutzerperspektive ohne technische Vorfestlegung.'
        },
        {
          q: 'Was beschreibt die „Exploitation (Effizienz)“ im Rahmen der Ambidextrie?',
          options: [
            'Radikale Innovation in cross-funktionalen Teams ohne Hierarchie',
            'Klassisches Verwaltungshandeln mit Fokus auf Produktivität, Rechtmäßigkeit, Routine und Hierarchie',
            'Monatelange Schließung des Hauptzollamts für Experimente',
            'Verzicht auf gesetzliche Vorgaben'
          ],
          correct: 1,
          explanation: 'Exploitation steht für das klassische, effiziente und rechtmäßige Verwaltungshandeln in formalen Strukturen, während Exploration für agile Innovation steht.'
        }
      ]
    }
  ],

  // ==========================================================================
  // FLASHCARDS FÜR DIGITALE VERWALTUNG (LE 01 – LE 04)
  // ==========================================================================
  flashcards: [
    // LE 01
    { id: 'fc-dive-01', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'Mergel (2019)', front: 'Was bedeutet „Digitale Bereitstellung“ (Stufe 1)?', back: 'Einfacher Übergang von physischer/analoger Bereitstellung von Informationen, Formularen und Bescheiden in digitale Form (z. B. Papier → PDF/Scan; „wie Papier, nur digital“).' },
    { id: 'fc-dive-02', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'Mergel (2019)', front: 'Was bedeutet „Digitalisierung“ (Stufe 2)?', back: 'Überführung ganzer Abläufe und Prozesse in eine digitale Form über Internettechnologien („eine andere Form der Arbeit“, z. B. ELSTER). Erfordert Verhinderung von Medienbrüchen und anlassbezogenes Change Management.' },
    { id: 'fc-dive-03', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'Mergel (2019)', front: 'Was bedeutet „Digitale Transformation“ (Stufe 3)?', back: 'Grundlegender Wandel von Organisationen als Ganzes inkl. Kultur, Nutzerzentrierung, Förderung von Digitalkompetenz und „digitalem Selbstverständnis“ (z. B. proaktive Leistungen, Zoll 2030).' },
    { id: 'fc-dive-04', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'Kompetenzlücke', front: 'Was besagt die Studie von Koddebusch et al. (2022) zur Kompetenzlücke in der Verwaltung?', back: 'Zwischen 2016 und 2021 ist die Relevanz von Digitalkompetenz in der öffentlichen Verwaltung stark gestiegen, während die tatsächliche Verfügbarkeit dieser Kompetenzen gesunken ist.' },
    { id: 'fc-dive-05', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'BMI & BVA (2025)', front: 'Welche 4 Kernbestandteile hat eine Strategie und welchen Zeithorizont umfasst sie?', back: '1. Vision (Fernziel am Auftrag orientiert)\n2. Strategische Ziele (SMART & hierarchisch unterteilt)\n3. Maßnahmenplan (konkrete Vorhaben)\n4. Instrumente zur Umsetzung & Überprüfung.\nZeithorizont: 4 bis 6 Jahre.' },
    { id: 'fc-dive-06', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'SMART-Formel', front: 'Wofür steht das Akronym SMART bei strategischen Zielen?', back: 'S = Spezifisch\nM = Messbar\nA = Attraktiv / Ausführbar\nR = Realistisch\nT = Terminiert' },
    { id: 'fc-dive-07', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'Teubner & Stockhinger (2020)', front: 'Welche 3 Verknüpfungstypen von Organisations- und Digitalstrategie gibt es?', back: '1. Angleichung (separate Digitalstrategie, folgt fachlichen Bedarfen – häufigster Typ in Verwaltung)\n2. Überschneidung (starke Verzahnung & Wechselwirkung)\n3. Verschmelzung (keine separate Digitalstrategie mehr → Digitale Organisationsstrategie).' },
    { id: 'fc-dive-08', unit: 'dive-le01', unitLabel: 'DiVe · LE 01', category: 'Zoll Digitalstrategie v2.0', front: 'Wie lautet die Vision der Digitalstrategie des Zolls und welche Struktur hat sie?', back: 'Vision: „Wir sind Gestalter der digitalen Transformation Deutschlands und Europas als ein effizienter, innovativer und attraktiver Zoll.“\nStruktur: Abgeleitete Teilstrategie aus dem Steuerungskonzept mit 7 Überzeugungen und 9 Handlungsfeldern (Initiativen).' },

    // LE 02
    { id: 'fc-dive-09', unit: 'dive-le02', unitLabel: 'DiVe · LE 02', category: 'BSI (2023)', front: 'Wie ist Informationssicherheit definiert und welche 3 Schutzziele umfasst sie?', back: 'Angemessener Schutz der:\n1. Vertraulichkeit (Schutz vor unbefugter Preisgabe)\n2. Integrität (Korrektheit/Unversehrtheit von Daten & Systemfunktion)\n3. Verfügbarkeit (stets wie vorgesehen nutzbar)\nvon Informationen (auf Papier, in IT-Systemen oder in Köpfen).' },
    { id: 'fc-dive-10', unit: 'dive-le02', unitLabel: 'DiVe · LE 02', category: 'Abgrenzung', front: 'Wie grenzt man Datenschutz und Informationssicherheit voneinander ab?', back: '• Datenschutz: Dient dem Grundrecht auf informationelle Selbstbestimmung, schützt betroffene Personen, Schutzgut sind nur personenbezogene Daten.\n• Informationssicherheit: Dient dem Schutz von Organisationen, Schutzgüter sind alle Daten, Technik, Infrastruktur & weitere Rechtsgüter.' },
    { id: 'fc-dive-11', unit: 'dive-le02', unitLabel: 'DiVe · LE 02', category: 'Bedrohungen', front: 'Aus welchen 4 Quellen stammen Bedrohungen der Informationssicherheit?', back: '1. Höhere Gewalt (Naturkatastrophen)\n2. Faktor Mensch (Fehler, Unachtsamkeit, Geräteverlust)\n3. Technisches Versagen (Hardware-/Softwareausfall, Schwachstellen)\n4. Vorsätzliche Handlungen (Kriminelle Aktionen intern/extern).' },
    { id: 'fc-dive-12', unit: 'dive-le02', unitLabel: 'DiVe · LE 02', category: 'ISM Zoll', front: 'Nenne 6 typische Maßnahmen des Informationssicherheitsmanagements (ISM) beim Zoll.', back: '1. Informationssicherheitsbeauftragte (ISB)\n2. Regelungen & Dienstanweisungen\n3. Mitarbeiterschulungen & Sensibilisierung\n4. Firewalls, Virenscanner, Spam-Filter\n5. 2-Faktor-Authentisierung, SINA-Karte, VPN, VS-NfD-Netz\n6. HTML-Unterdrückung in Outlook.' },
    { id: 'fc-dive-13', unit: 'dive-le02', unitLabel: 'DiVe · LE 02', category: 'Angriffsformen', front: 'Was ist Social Engineering und welche Eigenschaften nutzt es aus?', back: 'Methode, um durch soziale Manipulation unberechtigten Zugang zu Informationen oder IT-Systemen zu erlangen.\nNutzt aus: Hilfsbereitschaft, Vertrauen, Angst oder Respekt vor Autorität.' },
    { id: 'fc-dive-14', unit: 'dive-le02', unitLabel: 'DiVe · LE 02', category: 'Phishing', front: 'Was unterscheidet Soziale Identität und Technische Identität beim Phishing?', back: '• Soziale Identität: Name, Adresse, Geburtsdatum, Ausweis-/Passnr., Geburtsurkunde, Handelsregistereintrag.\n• Technische Identität: E-Mail, Benutzername, Passwort, PIN, TAN, Telefonnr., Kontoverbindung, Kreditkarte, Zertifikate, IP-Adresse.' },

    // LE 03
    { id: 'fc-dive-15', unit: 'dive-le03', unitLabel: 'DiVe · LE 03', category: 'Dumas et al. (2013)', front: 'Wie entsteht durch „IT & Digitale Tools“ ein Mehrwert für die Verwaltung?', back: 'Nicht direkt! Erst wenn „IT & Digitale Tools“ eine „Prozessveränderung“ ermöglichen, ergibt sich daraus ein Mehrwert für die Verwaltung / den Zoll.' },
    { id: 'fc-dive-16', unit: 'dive-le03', unitLabel: 'DiVe · LE 03', category: 'Verwaltungsspezifika', front: 'Welche 6 spezifischen Herausforderungen erschweren Veränderungen in der öffentlichen Verwaltung?', back: '1. Fachliche & IT-Heterogenität (viele Fachverfahren)\n2. Hohe Verantwortung & Angst vor Scheitern\n3. Angebotsmonopol (kein Wettbewerbsdruck)\n4. Gewachsene konservative, risikoaverse Behördenkultur\n5. Bürokratische, stark formalisierte Prozesse\n6. Starre Personalstrukturen & kaum finanzielle Anreize.' },
    { id: 'fc-dive-17', unit: 'dive-le03', unitLabel: 'DiVe · LE 03', category: 'Stolzenberg & Heberle (2023)', front: 'Auf welchen 3 Ebenen wirken fachliche Veränderungen und welche 4 Reaktionen erfordert dies bei den Menschen?', back: '3 Ebenen: 1. Aufbauorganisation, 2. Ablauforganisation, 3. Zusammenarbeit/Arbeitsverhalten.\n4 Anforderungen beim Menschen: 1. Überzeugung (Notwendigkeit), 2. Akzeptanz, 3. Bereitschaft (mitzutragen), 4. Unterstützung (Umsetzung).' },
    { id: 'fc-dive-18', unit: 'dive-le03', unitLabel: 'DiVe · LE 03', category: 'Change-Erfordernis', front: 'Wovon hängt der Bedarf für ein Change Management ab?', back: '1. Anzahl der von der Veränderung Betroffenen (→ Stakeholderanalyse)\n2. Neuigkeitswert des Veränderungsinhalts (gering/evolutionär vs. hoch/radikal).' },
    { id: 'fc-dive-19', unit: 'dive-le03', unitLabel: 'DiVe · LE 03', category: 'Lewin vs. ADKAR', front: 'Wie lauten die Phasen nach Kurt Lewin und die 5 Schritte des ADKAR-Modells?', back: '• Lewin (3 Phasen): 1. Auftauen (Vorbereitung/Kommunikation), 2. Bewegen (Umsetzung/Training), 3. Einfrieren (Verankerung).\n• ADKAR (5 Schritte): Awareness (Bewusstsein), Desire (Wunsch), Knowledge (Wissen), Ability (Fähigkeit/Praxis), Reinforcement (Verstärkung).' },

    // LE 04
    { id: 'fc-dive-20', unit: 'dive-le04', unitLabel: 'DiVe · LE 04', category: 'VUKA & Agilität', front: 'Wofür steht VUKA und was ist der Unterschied zwischen iterativem und inkrementellem Arbeiten?', back: 'VUKA = Volatilität, Unsicherheit, Komplexität, Ambiguität.\n• Iterativ: Wiederkehrende Bearbeitung kleinerer Arbeitspakete zur schnellen Einbindung von Feedback.\n• Inkrementell: Fokussierte Bearbeitung kleinerer Arbeitspakete/Teilergebnisse.' },
    { id: 'fc-dive-21', unit: 'dive-le04', unitLabel: 'DiVe · LE 04', category: 'Stacey-Matrix', front: 'Welche 4 Sektoren hat die Stacey-Matrix (Achsen: Was/Anforderung × Wie/Vorgehen)?', back: '1. Einfach („machen!“)\n2. Kompliziert („Klassisches“ Projektmanagement)\n3. Komplex (Anwendungsbereich für agile Methoden wie Scrum)\n4. Chaotisch (erst Klärung von Umfang und Zielen erforderlich).' },
    { id: 'fc-dive-22', unit: 'dive-le04', unitLabel: 'DiVe · LE 04', category: 'Scrum', front: 'Welche 3 Rollen, 3 Artefakte und 4 Events gibt es in Scrum?', back: '• 3 Rollen: Product Owner, Scrum Master, Entwicklungsteam.\n• 3 Artefakte: Product Backlog, Sprint Backlog, Inkrement.\n• 4 Events (im 2–4-wöchigen Sprint): Sprint Planning, Daily Scrum (15 Min.), Sprint Review (Produkt prüfen), Sprint Retrospective (Zusammenarbeit prüfen).' },
    { id: 'fc-dive-23', unit: 'dive-le04', unitLabel: 'DiVe · LE 04', category: 'User Story', front: 'Wie lautet die Struktur einer User Story und welche Regel gilt zwingend?', back: '„Als <Rolle> möchte ich <Handlung>, um <Ergebnis> zu erzielen.“\nRegel: Muss zwingend ergebnisoffen aus Nutzerperspektive formuliert sein (keine technischen Lösungen wie „per PDF“ oder „via Schnittstelle“ vorgeben!).' },
    { id: 'fc-dive-24', unit: 'dive-le04', unitLabel: 'DiVe · LE 04', category: 'Ambidextrie', front: 'Was bedeutet Ambidextrie („Beidhändigkeit“) in der öffentlichen Verwaltung?', back: 'Gleichzeitige Fähigkeit zu:\n1. Exploitation (Effizienz): Klassisches, rechtmäßiges Verwaltungshandeln in Hierarchien/Routine.\n2. Exploration (Innovation): Kreative Entwicklung neuer Leistungen durch agile, cross-funktionale Arbeitsweisen.' }
  ]
};
