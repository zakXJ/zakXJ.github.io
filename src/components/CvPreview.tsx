export default function CvPreview() {
  return (
    <div
      className="w-full h-full overflow-hidden bg-white text-zinc-900"
      style={{ fontFamily: '"Latin Modern Roman", "LM Roman 10", serif' }}
    >
      <div className="origin-top-left scale-[0.285] w-[351%] p-[28px]">

        {/* ───────────────────────── HEADER ───────────────────────── */}

        <header>
          <h1 className="text-[28px] leading-none font-bold">
            Zakaria Boughlita
          </h1>

          <p className="text-[16px] mt-[4px]">
            Développeur Full Stack
          </p>

          <div className="text-[8px] mt-[10px] text-[#6E6E6E]">
            <span>xj3.zak@gmail.com</span>
            <span className="mx-[5px]">|</span>
            <span>xxxxxxxxxxxxx</span>
            <span className="mx-[5px]">|</span>
            <span>zakxj.github.io</span>
            <span className="mx-[5px]">|</span>
            <span>xxxxxxxxxxxxx</span>
          </div>

          <div className="h-[1px] bg-[#195AA5] mt-[9px]" />
        </header>

        {/* ───────────────────────── PROFIL ───────────────────────── */}

        <section className="mt-[12px]">
          <div className="text-[#195AA5] text-[14px] font-bold">
            Profil
          </div>

          <div className="h-[0.5px] bg-zinc-400 mt-[-5px] mb-[8px]" />

          <div className="text-[8px] leading-[1.55]">
            <p>
              Développeur Full-Stack orienté produit, avec une expertise solide en .NET / C# (ASP.NET Core) et en
architectures SaaS multi-tenant. J’interviens de la conception à la mise en production, avec une attention
particulière portée à la performance, la scalabilité et la qualité du code. Habitué aux environnements
exigeants, notamment dans les secteurs santé et éducation, je sais traduire des problématiques métier
complexes en solutions robustes, maintenables et sécurisées. À l’aise côté front (Vue 3, React), je
conçois des interfaces performantes avec une forte sensibilité UX/UI. Je privilégie les architectures
propres (Clean Architecture, DDD), les API REST bien structurées, le messaging et les pipelines
CI/CD pour garantir fiabilité et évolutivité.
            </p>

          </div>
        </section>

        {/* ─────────────────── EXPÉRIENCES ─────────────────── */}

        <section className="mt-[14px]">
          <div className="text-[#195AA5] text-[14px] font-bold">
            Expériences professionnelles
          </div>

          <div className="h-[0.5px] bg-zinc-400 mt-[3px] mb-[8px]" />

          {/* EXPERIENCE 1 */}

          <article>
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Développeur Full Stack
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2024 – Présent
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                FREELANCE (Synmed)
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxxxxx
              </span>
            </div>

            <ul className="mt-[3px] space-y-[1px] text-[7px] leading-[1.45]">
              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Développé une plateforme SaaS B2B multi-tenant en .NET pour la gestion
                  des conventions santé, avec isolation des tenants par bases de données
                  séparées et architecture DDD.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Développement d’API REST sécurisées (authentification, gestion des rôles,
                  isolation des tenants, validation métier).
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Déploiement et administration sur VPS (configuration Nginx, sécurisation,
                  gestion des environnements).
                </span>
              </li>
            </ul>
          </article>

          {/* EXPERIENCE 2 */}

          <article className="mt-[8px]">
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Responsable SI
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2022 – 2024
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                HOPITAL PRIVE NISOMED
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxxxxx
              </span>
            </div>

            <ul className="mt-[3px] space-y-[1px] text-[7px] leading-[1.45]">
              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Supervision et administration des systèmes critiques : PACS, SIH,
                  serveurs d’imagerie et infrastructure associée.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Intégration et interopérabilité entre les différents systèmes
                  (PACS, RIS, SIH, modalités d’imagerie) en respectant les standards
                  HL7 et DICOM.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Diagnostic et résolution d’incidents techniques complexes
                  (réseau, applicatif, base de données, flux d’échange).
                </span>
              </li>
            </ul>
          </article>

          {/* EXPERIENCE 3 */}

          <article className="mt-[8px]">
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Consultant IT
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2020 – 2022
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                ECOLE PRIVEE MOSAIQUE
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxxxxx
              </span>
            </div>

            <ul className="mt-[3px] space-y-[1px] text-[7px] leading-[1.45]">
              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Analyse des workflows existants et identification des points de friction
                  opérationnels.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Recommandation et mise en place de solutions No-Code / Low-Code adaptées
                  aux besoins métier.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Conception de bases de données et d’outils collaboratifs sous Airtable
                  (modélisation des données, automatisations, vues personnalisées).
                </span>
              </li>
            </ul>
          </article>

          {/* EXPERIENCE 4 */}

          <article className="mt-[8px]">
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Développeur Full Stack
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2019 – 2020
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                FREELANCE (IGMM)
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxxxxx
              </span>
            </div>

            <ul className="mt-[3px] space-y-[1px] text-[7px] leading-[1.45]">
              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Conception et développement d’un outil de visualisation et d’exploration
                  de données biologiques issues de bases génétiques (RBPDB).
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Développement back-end sous Laravel avec modélisation avancée des données
                  scientifiques et structuration MVC.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Implémentation de scripts de web scraping pour l’extraction, la
                  normalisation et l’intégration automatisée de données biologiques depuis
                  différentes sources en ligne.
                </span>
              </li>
            </ul>
          </article>

          {/* EXPERIENCE 5 */}

          <article className="mt-[60px]">
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Développeur Full Stack
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2018 – 2023
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                LOUAI CATERING SERVICE
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxxxxx
              </span>
            </div>

            <ul className="mt-[3px] space-y-[1px] text-[7px] leading-[1.45]">
              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Conception et développement d’un ERP SaaS monolithique sous Laravel,
                  couvrant l’ensemble des processus opérationnels (commandes, stocks,
                  facturation, CRM, reporting).
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Architecture pensée pour un hébergement mutualisé, avec optimisation
                  des performances, limitation des ressources et rationalisation des
                  dépendances.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Développement d’une application mobile sous Flutter connectée au back-end.
                </span>
              </li>
            </ul>
          </article>

          {/* EXPERIENCE 6 */}

          <article className="mt-[8px]">
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Développeur Back-End
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2017 – 2018
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                FREELANCE
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxxxxx
              </span>
            </div>

            <ul className="mt-[3px] space-y-[1px] text-[7px] leading-[1.45]">
              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Développement d’un client léger sous .NET interfacé avec un fichier Excel
                  existant utilisé comme base de données métier.
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Implémentation des règles métier liées aux mouvements de stock
                  (entrées, sorties, inventaire, calcul des quantités).
                </span>
              </li>

              <li className="flex items-start">
                <span className="mr-[6px] shrink-0">—</span>
                <span>
                  Développement d’une application compagnon sous Flutter (Android)
                  connectée au service .NET pour consultation et opérations terrain.
                </span>
              </li>
            </ul>
          </article>
        </section>

        {/* ─────────────────── COMPÉTENCES ─────────────────── */}

        <section className="mt-[14px]">
          <div className="text-[#195AA5] text-[14px] font-bold">
            Compétences techniques
          </div>

          <div className="h-[0.5px] bg-zinc-400 mt-[3px] mb-[8px]" />

          <div className="space-y-[3px] text-[7px] leading-[1.4]">
            <p>
              <strong>Front-end :</strong> Vue.js, React, TypeScript, JavaScript, HTML5,
              CSS3, Tailwind CSS, Bootstrap, Shadcn, TanStack, Motion
            </p>

            <p>
              <strong>Frameworks :</strong> Laravel, Symfony, .NET, NestJS, Express
            </p>

            <p>
              <strong>Langages :</strong> PHP, C#, Dart, Java, TypeScript, JavaScript
            </p>

            <p>
              <strong>Mobile :</strong> Flutter, React Native, Xamarin
            </p>

            <p>
              <strong>Base de données :</strong> PostgreSQL, MySQL
            </p>

            <p>
              <strong>DevOps / Cloud :</strong> Docker, GitHub Actions, CI/CD, Nginx
            </p>

            <p>
              <strong>Outils :</strong> Git, GitHub, Postman, Linux
            </p>

            <p>
              <strong>Design :</strong> Figma, Adobe Photoshop
            </p>
          </div>
        </section>

        {/* ───────────────────── FORMATION ───────────────────── */}

        <section className="mt-[14px]">
          <div className="text-[#195AA5] text-[14px] font-bold">
            Formation
          </div>

          <div className="h-[0.5px] bg-zinc-400 mt-[3px] mb-[8px]" />

          <article>
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Master informatique – spécialité : génie logiciel
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2015 – 2017
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                xxxxxxxxxxxx
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxx
              </span>
            </div>
          </article>

          <article className="mt-[7px]">
            <div className="flex justify-between items-baseline">
              <div className="text-[9px] font-bold">
                Licence informatique – spécialité : génie logiciel
              </div>

              <div className="text-[7px] text-[#6E6E6E]">
                2012 – 2015
              </div>
            </div>

            <div className="text-[8px] mt-[1px]">
              <span className="italic">
                xxxxxxxxx
              </span>

              <span className="text-[#6E6E6E] mx-[3px]">
                –
              </span>

              <span className="text-[#6E6E6E]">
                xxxxxxxxxx
              </span>
            </div>
          </article>
        </section>

        {/* ───────────────────── LANGUES ───────────────────── */}

        <section className="mt-[10px]">
          <div className="text-[#195AA5] text-[14px] font-bold">
            Langues
          </div>

          <div className="h-[0.5px] bg-zinc-400 mt-[3px] mb-[8px]" />

          <ul className="space-y-[2px] text-[7px]">
            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>
              <span>
                <strong>Français</strong> – Langue maternelle
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>
              <span>
                <strong>Anglais</strong> – Courant C1
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>
              <span>
                <strong>Arabe</strong> – Langue maternelle
              </span>
            </li>
          </ul>
        </section>

        {/* ───────────────── PROJETS PERSONNELS ───────────────── */}

        <section className="mt-[10px]">
          <div className="text-[#195AA5] text-[14px] font-bold">
            Projets personnels
          </div>

          <div className="h-[0.5px] bg-zinc-400 mt-[3px] mb-[8px]" />

          <div className="text-[9px] font-bold">
            NOEMA

            <span className="font-normal text-[#6E6E6E] mx-[3px]">
              –
            </span>

            <span className="font-normal">
              Plateforme SaaS IA pour la radiologie – Potentiel startup
            </span>
          </div>

          <ul className="mt-[3px] space-y-[2px] text-[7px] leading-[1.45]">
            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>

              <span>
                Conception d’un projet personnel à vocation entrepreneuriale visant à créer
                une plateforme AI-native d’aide à la rédaction de comptes rendus radiologiques.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>

              <span>
                Intégration de Google Vertex AI avec utilisation du modèle MedGemma pour la
                génération structurée de comptes rendus médicaux contextualisés.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>

              <span>
                Mise en place d’un pipeline IA incluant pré-traitement, approche few-shot
                basée sur rapports récents, et validation humaine obligatoire.
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>

              <span>
                Développement d’un viewer DICOM intégré et interconnexion avec Orthanc (PACS).
              </span>
            </li>

            <li className="flex items-start">
              <span className="mr-[6px] shrink-0">
                —
              </span>

              <span>
                Architecture full-stack : Laravel (API), React (front-end), gestion des flux
                d’imagerie médicale.
              </span>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
