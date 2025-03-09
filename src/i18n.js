import { createI18n } from 'vue-i18n'

const messages = {
  fr: {
    objectifs: {
      title: 'Nos objectifs',
      heart_title: 'Le cœur du Père Yéhoshoua',
      heart_description:
        "est pour les malheureux, les pauvres, les orphelins, les veufs(ves) et les démunis. Le fondement de nos actions vient de ce cœur et de l'amour que le Seigneur Yéhoshoua a pour les hommes.",
      reason_title: "C'est la raison pour laquelle nous voulons",
      encouragement: 'encourager la mission à Madagascar et partout dans le monde',
      mission_description:
        'pour communiquer la saine doctrine, afin de partager cet amour du Seigneur par des actes concrets',
      mission_description_suite: 'en soutenant les nécessiteux sous toutes formes.'
    },
    ezra: {
      title: 'Ezra (Esdras) 10 : 4',
      verse: 'Lève-toi, car cette affaire te regarde et nous serons avec toi. Fortifie-toi et agis.'
    },
    supports: {
      title: 'Les formes de soutien',
      description: 'Vous pouvez apporter votre contribution à cette œuvre de plusieurs façons :',
      prayers: {
        title: 'Par vos prières :',
        team: "Pour l'équipe et pour les personnes qui travaillent dur sur le terrain,",
        beneficiaries: 'Pour tous les bénéficiaires,',
        vision: "Pour la vision, la mission et l'accomplissement des différentes œuvres."
      },
      donations: {
        title: 'Par vos dons financiers :',
        description:
          "Les dons spontanés et ponctuels quels qu'ils soient, selon votre conviction et dans la liberté.",
        dons_nature: 'Par des dons en nature'
      }
    },
    soutien: {
      title: 'Pour soutenir',
      specificWork: 'Soutenir une œuvre spécifique',
      support: 'Soutenir',
      siegeMpyTitle: 'SIÈGE MPY',
      siegeMpyDescription:
        "<b>Location des locaux</b> du siège de l'association “Madagascar pour Yéhoshoua” (MPY) à Antananarivo. <br />Ces locaux sont utilisés <b>pour toutes activités de MPY</b>( épicerie solidaire, salle de formation, bureaux, accueillir des missionnaires...).<br /> Nous nous sommes engagés ensemble pour faire avancer les oeuvres du Père.",
      siegeMpyDescription6:
        "Nombreux sont ceux qui décèdent à Madagascar faute de moyen pour se soigner. Le prix des médicaments et des soins médicaux sont trop chers par rapport au salaire moyen et niveau de vie de beaucoup de Malagasy.\n\nEn 2023, le Seigneur Yéhoshoua a fait grâce. L'association Pain Quotidien en partenariat avec MPY a commencé la construction du Centre Hospitalier Pain Quotidien à Antananarivo Madagascar pour donner la possibilité aux Malagasy de se soigner gratuitement.\n\nNous soutenons cette œuvre.",
      hopitalTitre: 'CENTRE HOSPITALIER PAIN QUOTIDIEN',
      hopitalDescription:
        "<b>Nombreux sont ceux qui décèdent</b> à Madagascar faute de moyen pour se soigner. <b>Le prix des médicaments et des soins médicaux sont trop chers</b> par rapport au salaire moyen et niveau de vie de beaucoup de Malagasy. <br /><br />En 2023, le Seigneur Yéhoshoua a fait grâce. L' association Pain Quotidien en partenariat avec MPY a commencé la construction du Centre Hospitalier Pain Quotidien à Antananarivo Madagascar pour <b>donner la possibilité aux Malagasy de se soigner gratuitement.</b> <br />Nous soutenons cette oeuvre.",
      hopitalSoutenir: 'Soutenir',
      cantineTitre: 'CANTINE À TULEAR',
      cantineDescription:
        "Depuis de nombreuses années, <b>la famine</b> (« le kéré » en malagasy) <b>frappe le sud ouest de Madagascar</b>, de Tuléar à Fort-Dauphin, Amboasary, Ambovobe et d'autres districts. Elle est due à un manque de pluie. <br /><br />En 2021, une grave sécheresse a provoqué une crise alimentaire majeure. Environ 90% des habitants vivent de l'agriculture et de l'élevage. En conséquence, <b>plus d'un million de Malagasy souffrent de la faim.</b> Des milliers d'enfants souffrent de malnutrition sévère. Les populations font cuire des racines, s'en remettent aux mangues ou aux cactus pour se nourrir. <br /><br />En résumé, <b>la population manque de tout</b> (aliments, soins, vêtements...) C'est la raison pour laquelle nous voulons aider et <b>témoigner de l'amour du Seigneur par des actes concrets.</b> <br />Une cantine a été mise en place à Antalanabo pour distribuer de la nourriture aux enfants.",
      cantineSoutenir: 'Soutenir',
      prisonniersTitre: 'SOUTIEN AUX PRISONNIERS',
      prisonniersDescription:
        "Les détenus de l'île, souffrant le plus souvent de <b>malnutrition</b>, vivent <b>oubliés de tous</b>, dans des conditions <b>d'exiguïté, de surpopulation et de manque d'hygiène.</b><br /><br /><b>Des denrées alimentaires contre la malnutrition :</b> Bien que quelques prisonniers peuvent se permettre d'acheter de la nourriture et de cuisiner dans leur cellule, la plupart d'entre eux font la queue, chaque après-midi, pour recevoir un repas (le seul de la journée) qui se résume à des racines de manioc bouillies.<br />Nous organisons des visites de la prison d'Antananarivo afin de partager la parole du Seigneur, subvenir aux besoins et proposer des formations pour une future insertion professionnelle.",
      prisonniersSoutenir: 'Soutenir'
    },
    whoAreWe: 'Qui sommes-nous ?',
    objectives: 'Nos objectifs',
    actions: 'Nos actions dans le monde',
    supportForms: 'Formes de soutien',
    support: 'Soutenir',
    yaacovTitle: 'Yaacov (Jacques) 1 : 27',
    yaacovText:
      "La religion pure et sans souillure devant notre Elohîm et Père, c'est de visiter les orphelins et les veuves dans leurs tribulations, et de se conserver sans tache loin du monde.",
    whoWeAreTitle: 'Qui sommes-nous ?',
    whoWeAreText:
      "Nous sommes des bénévoles, membres de la diaspora Malagasy ayant foi en Yéhoshoua Ha Mashiah. Nous croyons en la puissance de la parole d'Elohîm et nous voulons la partager pour que les Hommes puissent l'entendre et la vivre.",
    ourFunctioningTitle: 'Notre fonctionnement',
    ourFunctioningText:
      'Nous voulons fonctionner selon les principes bibliques et travaillons en partenariat avec différentes associations ayant les mêmes valeurs.',
    actions_title: 'Nos actions dans le monde',
    actions_distribution_title: 'Distribution',
    actions_distribution_description:
      "alimentaires, vestimentaires, fournitures scolaires, produits d'hygiène, divers équipements (liste non exhaustive, ...)",
    social_projects: 'Soutiens aux différents projets sociaux',
    social_projects_desc: "constructions d'hôpitaux, d'écoles, d'orphelinats ...",
    medical_support: 'Aide aux soins médicaux',
    education_training: 'Formation et éducation',
    education_training_desc: 'pour toute personne souhaitant apprendre un métier',
    land_acquisition: 'Acquisition de terrains ',
    land_acquisition_desc:
      "pour la mise en place de diverses structures (écoles, orphelinats, maison d'accueil...).",
    donSpontane: '(PayPal) Don spontané',
    compte: 'Compte',
    virementBancaire: 'Virement bancaire',
    cheque: 'Chèque',
    ordreAssociation: "à l'ordre de l'association Fon'i Yehoshoa",
    noteMotifDon:
      "N.B: N'oubliez pas de préciser le motif de votre don (ex : mission, prisonniers...)",
    contactUs: 'Nous contacter',
    contact_association: "Contact de l'Association",
    contact_nom: 'Nom',
    contact_email: 'Email',
    contact_tel: 'Téléphone',
    contact_message: 'Message'
  },
  mg: {
    objectifs: {
      title: 'Ny tanjonay',
      heart_title: "Ny Fon'i Ray Yehôshoa",
      heart_description:
        "dia miantefa amin'ny ireo ory, ny sahirana, ny kamboty, ny mpitondratena ary ny malahelo. Io fo sy fitiavan'I Yehôshoa io no fototra ijoroan'ny asanay.",
      reason_title: 'Izany no mahatonga anay',
      encouragement: "handrisika ny iraka any Madagasikara sy erak'izao tontolo izao",
      mission_description:
        "mba hampitana ny teny tsy misy kilema, ka hizarana ilay fitiavan'Ny Tompo amin'ny alalan'ny asa azo tsapain-tànana toy ny fanohanana ireo sahirana, amin'ny lafiny rehetra.",
      mission_description_suite: "ny fanohanana ireo sahirana, amin'ny lafiny rehetra."
    },
    ezra: {
      title: 'Ezra 10 : 4',
      verse: 'Mitsangàna, fa adidinao izany, ary izahay koa momba anao; mahereza ka ataovy izany.'
    },
    supports: {
      title: 'Ireo endrika fanohanana',
      description: "Afaka mitondra ny anjara birikinao amin'ity asa ity amin'ny fomba maro ianao :",
      prayers: {
        title: 'Ny vavakareo :',
        team: "Ho an'ny ekipa sy ireo olona miasa mafy eny ifotony,",
        beneficiaries: "Ho an'ireo rehetra misitraka ny fanampiana,",
        vision: "Ho an'ny fahitana, ny iraka ary ny fahatanterahan'ny asa maro samihafa."
      },
      donations: {
        title: 'Ny tolotra ara-bola :',
        description:
          "Ireo fanomezana tsy tapaka na tokana, arak'izay fandresen-dahatrareo sy anaty fahalalahana tanteraka.",
        dons_nature: 'Ny tolotra ara-pitaovana'
      }
    },
    soutien: {
      title: 'Ho fanohanana',
      specificWork: 'Fanohanana ny asa manokana',
      support: 'Manohana',
      siegeMpyTitle: 'FOIBE MPY',
      siegeMpyDescription:
        "<b>Fanofana trano</b> ho an'ny foiben'ny fikambanana “Madagascar pour Yéhoshoua” (MPY) eto Antananarivo. <br/>Ireo toerana ireo dia ampiasaina amin'ny <b>fanatanterahana ireo hetsiky ny MPY rehetra </b>(toy ny tsena fanampiana ireo sahirana, efi-trano fampianarana (fanjairana, …), birao, fandraisana ireo mpanao iraka, …). <br/>Miara-mientana izahay hampandroso ny asan'ny Ray.",
      siegeMpyDescriptions:
        "Maro ireo maty any Madagasikara noho ny tsy fahampian'ny fahaizana manasitrana. Lafo loatra ny vidin'ny fanafody sy ny fitsaboana raha oharina amin'ny karama sy ny fari-piainan'ny Malagasy maro.\n\nTamin'ny taona 2023, nanao fahasoavana i Tompo Yéhoshoua. Nanomboka nanorina ny Centre Hospitalier Pain Quotidien tany Antananarivo Madagasikara ny fikambanana Pain Quotidien niaraka tamin'ny MPY mba hanome fahafahana ireo Malagasy hotsaboina maimaim-poana.\n\nManohana ity asa ity izahay.",
      hopitalTitre: 'CH PAIN QUOTIDIEN',
      hopitalDescription:
        "<b>Betsaka ny olona maty</b> eto Madagasikara noho ny tsy fahampian'ny enti-manana ahafahana mitsabo tena. <b>Lafo dia lafo ny vidin'ny fanafody sy ny fitsaboana</b> raha oharina amin'ny karama antonony sy ny fari-piainan'ny Malagasy maro. <br /><br /> Tamin'ny taona 2023 dia namindra fo Ny Tompo Yehôshoa. Nanomboka nanangana ny Ivon-toera-mpitsaboana ny fikambanana Pain Quotidien sy ny MPY mpiara miombona antoka aminy, <b>mba hanomezana fitsaboana maimaimpoina ny Malagasy.</b><br />Manohana izany asa izany izahay.",
      hopitalSoutenir: 'Manohana',
      cantineTitre: 'FANOMEZANA SAKAFO AN-TSEKOLY ANY TOLIARA',
      cantineDescription:
        "Efa an-taonany maro no nianjadian'ny <b>mosary / kéré ny any atsimo andrefan'i Madagasikara</b>, manomboka any Toliary ka hatrany Taolagnaro, miampaka hatrany Amboasary, Ambovobe ary ny distrika hafa. Izany dia noho ny tsy fahampian'ny orana. <br/><br/>Tamin'ny taona 2021, nisy haintany mahery vaika tany an-toerana, izay niteraka krizy ara-tsakafo lehibe. Manodidina ny 90% ny mponina any anefa no miaina amin'ny fambolena sy fiompiana. Vokany, <b>maherin'ny iray tapitrisa ny Malagasy no mijaly noho ny hanoanana.</b> Ankizy an'arivony no hiaran'ny tsy fanjarin-tsakafo. Hany sisa azo ataon'ny olona dia mahandro fakan-java-maniry, mihinanana raketa, na manga. <br/><br/>Raha fintinina dia <b>miaina tanteraka amin'ny ny tsy fahampiana ny mponina</b> (sakafo, fitsaboana, fitafiana, sns.) Izany no nandrisika anay hanampy sy haneho ny <b>fitiavan'Ny Tompo amin'ny alalan'ny asa azo tsapain-tànana.</b> <br />Natomboka any Antalanabo ny fanohanana ara-tsakafo ho an'ny ankizy mpianatra.",
      cantineSoutenir: 'Manohana',
      prisonniersTitre: 'FANAMPIANA NY VOAFONJA:',
      prisonniersDescription:
        "Matetika ireo voafonja eto Madagasikara dia hiaran'ny <b>tsy fanjari-tsakafo</b> sy ny <b>fanadinoin'ny maro.</b> Miaina ao anatin'ny <b>fahaterena sy ny  fihoaran'ny isan'ny ireo voafonja ary ny loto izy ireo.</b> <br/><br/><b>Fanampiana ara-tsakafo hiadiana amin'ny tsy fanjarian-tsakafo : </b>Na dia misy aza ireo voafonja, no afaka mividy sy mahandro sakafo ao amin'ny efitranony, dia maro amin'izy ireo no milahatra sakafo isaky ny tolakandro (hany sakafo tokana mandritry ny tontolo andro), izay tsy inona fa mangahazo tetika. Mikarakara fitsidihana ny fonjan'Antananarivo izahay, mba hizarana ny Tenin'Ny Tompo, sy hanampiana azy ireo, ary koa hanolorana fiofanana arak'asa ho fanomanana ny hoavin'izy ireo aorian'ny fivoahana ny fonja.",
      prisonniersSoutenir: 'Manohana'
    },
    whoAreWe: 'Iza moa izahay ?',
    objectives: 'Ny tanjonay',
    actions: 'Ny asanay maneran-tany',
    supportForms: 'Endrika fanohanana',
    support: 'Fanohanana',
    yaacovTitle: 'Jakoba 1:27',
    yaacovText:
      "Izao no fivavahana madio sady tsy misy loto eo anatrehan'i Elôhim sady Ray: ny mamangy ny kamboty sy ny mpitondratena amin'ny fahoriany, sy ny miaro ny tena tsy hisy pentimpentina avy amin'izao tontolo izao.",
    whoWeAreTitle: 'Iza moa izahay ?',
    whoWeAreText:
      "Izahay dia mpilatsaka an-tsitrapo, mpikambana eo anivon'ny Malagasy miely manerantany (zanaka am-pielezana Malagasy) mino an'I Yehôshoa Ha Mashiah (Jesosy Kristy). Mino ny herin'ny tenin'i Elôhim izahay ary maniry ny hizara izany mba hahafahan'ny olona mandre sy miaina azy.",
    ourFunctioningTitle: 'Ny fomba fiasanay',
    ourFunctioningText:
      "Maniry ny hiasa araka ny fitsipika ao amin'ny baiboly izahay ary miara-miasa amina fikambanana samihafa mitovy foto-kevitra aminay. ",
    actions_title: 'Ny asanay maneran-tany',
    actions_distribution_title: 'Fizarana : ',
    actions_distribution_description:
      'sakafo, akanjo fitafy, fitaovam-pianarana, kojakoja fidiovana, fitaovana maro samihafa sns … ',
    social_projects: 'Fanohanana ireo tetikasa sosialy',
    social_projects_desc: 'fananganana hopitaly, sekoly, trano fitaizana zaza kamboty, ...',
    medical_support: "Fanampiana amin'ny fitsaboana",
    education_training: "Fanofanana arak'asa sy fanabeazana",
    education_training_desc: 'izay olona rehetra maniry ny hianatra asa',
    land_acquisition: 'Fividianana (fahazoana/fangalana) tany ',
    land_acquisition_desc:
      'ho fanorenanana foto-drafitrasa isan-karazany (fianarana, fitaizana zaza kamboty, trano fandraisam-bahiny,...)',
    donSpontane: '(PayPal) Fanomezana an-tsitrapo',
    compte: 'Kaonty',
    virementBancaire: "Fandefasana vola amin'ny banky",
    cheque: 'Taratasim-bola',
    ordreAssociation: "Ho an'ny fikambanana Fon'i Yehoshoa",
    noteMotifDon:
      "Fanamarihana: Aza adino ny manamarika ny anton'ny tolotra ataonareo (ohatra : iraka, voafonja, foibe MPY,...)",
    contactUs: 'Fifandraisana',
    contact_association: "Fifandraisana {'@'} fikambanana",
    contact_nom: 'Anarana',
    contact_email: 'Mailaka',
    contact_tel: 'Antso',
    contact_message: 'Hafatra fohy'
  }
}
// console.log('DEBUG: i18n messages loaded', messages) // DEBUGGING
// const i18n = createI18n({
//   legacy: false, // Utilisation du mode Composition API
//   locale: 'fr', // Langue par défaut
//   fallbackLocale: 'fr', // Langue de secours
//   messages
// })
// Initialisation d'i18n

//
// const savedLanguage = localStorage.getItem('language') || 'fr'
// const defaultLocale = savedLanguage && ['fr', 'mg'].includes(savedLanguage) ? savedLanguage : 'fr'

const i18n = createI18n({
  legacy: false, // Utiliser `composition API` au lieu de `Options API`
  locale: localStorage.getItem('language') || 'fr', // Langue par défaut
  // locale: defaultLocale,
  fallbackLocale: 'fr', // Langue de secours
  messages
})

export default i18n
