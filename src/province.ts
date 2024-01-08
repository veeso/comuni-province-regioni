import Region from './region';

/**
 * List of Italian provinces.
 */
enum Province {
  AGRIGENTO = 'AG',
  ALESSANDRIA = 'AL',
  ANCONA = 'AN',
  AOSTA = 'AO',
  AREZZO = 'AR',
  ASCOLI_PICENO = 'AP',
  ASTI = 'AT',
  AVELLINO = 'AV',
  BARI = 'BA',
  BARLETTA_ANDRIA_TRANI = 'BT',
  BELLUNO = 'NL',
  BENEVENTO = 'BN',
  BERGAMO = 'BG',
  BIELLA = 'BI',
  BOLOGNA = 'BO',
  BOLZANO = 'BZ',
  BRESCIA = 'BS',
  BRINDISI = 'BR',
  CAGLIARI = 'CA',
  CALTANISSETTA = 'CL',
  CAMPOBASSO = 'CB',
  CARBONIA_IGLESIAS = 'CI',
  CASERTA = 'CE',
  CATANIA = 'CT',
  CATANZARO = 'CZ',
  CHIETI = 'CH',
  COMO = 'CO',
  COSENZA = 'CS',
  CREMONA = 'CR',
  CROTONE = 'KR',
  CUNEO = 'CN',
  ENNA = 'EN',
  FERMO = 'FM',
  FERRARA = 'FE',
  FIRENZE = 'FI',
  FOGGIA = 'FG',
  FORLI_CESENA = 'FC',
  FROSINONE = 'FR',
  GENOVA = 'GE',
  GORIZIA = 'GO',
  GROSSETO = 'GR',
  IMPERIA = 'IM',
  ISERNIA = 'IS',
  LAQUILA = 'AQ',
  LA_SPEZIA = 'SP',
  LATINA = 'LT',
  LECCE = 'LE',
  LECCO = 'LC',
  LIVORNO = 'LI',
  LODI = 'LO',
  LUCCA = 'LU',
  MACERATA = 'MC',
  MANTOVA = 'MN',
  MASSA_CARRARA = 'MS',
  MATERA = 'MT',
  MEDIO_CAMPIDANO = 'VS',
  MESSINA = 'ME',
  MILANO = 'MI',
  MODENA = 'MO',
  MONZA_E_DELLA_BRIANZA = 'MB',
  NAPOLI = 'NA',
  NOVARA = 'NO',
  NUORO = 'NU',
  OGLIASTRA = 'OG',
  OLBIA_TEMPIO = 'OT',
  ORISTANO = 'OR',
  PADOVA = 'PD',
  PALERMO = 'PA',
  PARMA = 'PR',
  PAVIA = 'PV',
  PERUGIA = 'PG',
  PESARO_E_URBINO = 'PU',
  PESCARA = 'PE',
  PIACENZA = 'PC',
  PISA = 'PI',
  PISTOIA = 'PT',
  PORDENONE = 'PN',
  POTENZA = 'PZ',
  PRATO = 'PO',
  RAGUSA = 'RG',
  RAVENNA = 'RA',
  REGGIO_CALABRIA = 'RC',
  REGGIO_NELLEMILIA = 'RE',
  RIETI = 'RI',
  RIMINI = 'RN',
  ROMA = 'RM',
  ROVIGO = 'RO',
  SALERNO = 'SA',
  SASSARI = 'SS',
  SAVONA = 'SV',
  SIENA = 'SI',
  SIRACUSA = 'SR',
  SONDRIO = 'SO',
  SUD_SARDEGNA = 'SU',
  TARANTO = 'TA',
  TERAMO = 'TE',
  TERNI = 'TR',
  TORINO = 'TO',
  TRAPANI = 'TP',
  TRENTO = 'TN',
  TREVISO = 'TV',
  TRIESTE = 'TS',
  UDINE = 'UD',
  VARESE = 'VA',
  VENEZIA = 'VE',
  VERBANO_CUSIO_OSSOLA = 'VB',
  VERCELLI = 'VC',
  VERONA = 'VR',
  VIBO_VALENTIA = 'VV',
  VICENZA = 'VI',
  VITERBO = 'VT',
}

export default Province;

interface RegionWithProvinces {
  [key: string]: Province[];
}

/**
 * The provinces grouped by region.
 */
export const PROVINCES_BY_REGION: RegionWithProvinces = {
  [Region.ABRUZZO]: [
    Province.CHIETI,
    Province.LAQUILA,
    Province.PESCARA,
    Province.TERAMO,
  ],
  [Region.BASILICATA]: [Province.POTENZA, Province.MATERA],
  [Region.CALABRIA]: [
    Province.CATANZARO,
    Province.COSENZA,
    Province.CROTONE,
    Province.REGGIO_CALABRIA,
    Province.VIBO_VALENTIA,
  ],
  [Region.CAMPANIA]: [
    Province.AVELLINO,
    Province.BENEVENTO,
    Province.CASERTA,
    Province.NAPOLI,
    Province.SALERNO,
  ],
  [Region.EMILIA_ROMAGNA]: [
    Province.BOLOGNA,
    Province.FERRARA,
    Province.FORLI_CESENA,
    Province.MODENA,
    Province.PARMA,
    Province.PIACENZA,
    Province.RAVENNA,
    Province.REGGIO_NELLEMILIA,
    Province.RIMINI,
  ],
  [Region.FRIULI_VENEZIA_GIULIA]: [
    Province.GORIZIA,
    Province.PORDENONE,
    Province.TRIESTE,
    Province.UDINE,
  ],
  [Region.LAZIO]: [
    Province.FROSINONE,
    Province.LATINA,
    Province.RIETI,
    Province.ROMA,
    Province.VITERBO,
  ],
  [Region.LIGURIA]: [
    Province.GENOVA,
    Province.IMPERIA,
    Province.LA_SPEZIA,
    Province.SAVONA,
  ],
  [Region.LOMBARDIA]: [
    Province.BERGAMO,
    Province.BRESCIA,
    Province.COMO,
    Province.CREMONA,
    Province.LECCO,
    Province.LODI,
    Province.MANTOVA,
    Province.MILANO,
    Province.MONZA_E_DELLA_BRIANZA,
    Province.PAVIA,
    Province.SONDRIO,
    Province.VARESE,
  ],
  [Region.MARCHE]: [
    Province.ANCONA,
    Province.ASCOLI_PICENO,
    Province.FERMO,
    Province.MACERATA,
    Province.PESARO_E_URBINO,
  ],
  [Region.MOLISE]: [Province.CAMPOBASSO, Province.ISERNIA],
  [Region.PIEMONTE]: [
    Province.ALESSANDRIA,
    Province.ASTI,
    Province.BIELLA,
    Province.CUNEO,
    Province.NOVARA,
    Province.TORINO,
    Province.VERBANO_CUSIO_OSSOLA,
    Province.VERCELLI,
  ],
  [Region.PUGLIA]: [
    Province.BARI,
    Province.BARLETTA_ANDRIA_TRANI,
    Province.BRINDISI,
    Province.FOGGIA,
    Province.LECCE,
    Province.TARANTO,
  ],
  [Region.SARDEGNA]: [
    Province.CAGLIARI,
    Province.CARBONIA_IGLESIAS,
    Province.MEDIO_CAMPIDANO,
    Province.NUORO,
    Province.OGLIASTRA,
    Province.OLBIA_TEMPIO,
    Province.ORISTANO,
    Province.SASSARI,
    Province.SUD_SARDEGNA,
  ],
  [Region.SICILIA]: [
    Province.AGRIGENTO,
    Province.CALTANISSETTA,
    Province.CATANIA,
    Province.ENNA,
    Province.MESSINA,
    Province.PALERMO,
    Province.RAGUSA,
    Province.SIRACUSA,
    Province.TRAPANI,
  ],
  [Region.TOSCANA]: [
    Province.AREZZO,
    Province.FIRENZE,
    Province.GROSSETO,
    Province.LIVORNO,
    Province.LUCCA,
    Province.MASSA_CARRARA,
    Province.PISA,
    Province.PISTOIA,
    Province.PRATO,
    Province.SIENA,
  ],
  [Region.TRENTINO_ALTO_ADIGE]: [Province.TRENTO, Province.BOLZANO],
  [Region.UMBRIA]: [Province.PERUGIA, Province.TERNI],
  [Region.VALLE_DAOSTA]: [Province.AOSTA],
  [Region.VENETO]: [
    Province.BELLUNO,
    Province.PADOVA,
    Province.ROVIGO,
    Province.TREVISO,
    Province.VENEZIA,
    Province.VERONA,
    Province.VICENZA,
  ],
};

/**
 * The region of each province.
 */
export const REGION_BY_PROVINCE: { [key: string]: Region } = {
  [Province.AGRIGENTO]: Region.SICILIA,
  [Province.ALESSANDRIA]: Region.PIEMONTE,
  [Province.ANCONA]: Region.MARCHE,
  [Province.AOSTA]: Region.VALLE_DAOSTA,
  [Province.AREZZO]: Region.TOSCANA,
  [Province.ASCOLI_PICENO]: Region.MARCHE,
  [Province.ASTI]: Region.PIEMONTE,
  [Province.AVELLINO]: Region.CAMPANIA,
  [Province.BARI]: Region.PUGLIA,
  [Province.BARLETTA_ANDRIA_TRANI]: Region.PUGLIA,
  [Province.BELLUNO]: Region.VENETO,
  [Province.BENEVENTO]: Region.CAMPANIA,
  [Province.BERGAMO]: Region.LOMBARDIA,
  [Province.BIELLA]: Region.PIEMONTE,
  [Province.BOLOGNA]: Region.EMILIA_ROMAGNA,
  [Province.BOLZANO]: Region.TRENTINO_ALTO_ADIGE,
  [Province.BRESCIA]: Region.LOMBARDIA,
  [Province.BRINDISI]: Region.PUGLIA,
  [Province.CAGLIARI]: Region.SARDEGNA,
  [Province.CALTANISSETTA]: Region.SICILIA,
  [Province.CAMPOBASSO]: Region.MOLISE,
  [Province.CARBONIA_IGLESIAS]: Region.SARDEGNA,
  [Province.CASERTA]: Region.CAMPANIA,
  [Province.CATANIA]: Region.SICILIA,
  [Province.CATANZARO]: Region.CALABRIA,
  [Province.CHIETI]: Region.ABRUZZO,
  [Province.COMO]: Region.LOMBARDIA,
  [Province.CROTONE]: Region.CALABRIA,
  [Province.CUNEO]: Region.PIEMONTE,
  [Province.COSENZA]: Region.CALABRIA,
  [Province.CREMONA]: Region.LOMBARDIA,
  [Province.ENNA]: Region.SICILIA,
  [Province.FERMO]: Region.MARCHE,
  [Province.FERRARA]: Region.EMILIA_ROMAGNA,
  [Province.FIRENZE]: Region.TOSCANA,
  [Province.FOGGIA]: Region.PUGLIA,
  [Province.FORLI_CESENA]: Region.EMILIA_ROMAGNA,
  [Province.FROSINONE]: Region.LAZIO,
  [Province.GENOVA]: Region.LIGURIA,
  [Province.GORIZIA]: Region.FRIULI_VENEZIA_GIULIA,
  [Province.GROSSETO]: Region.TOSCANA,
  [Province.IMPERIA]: Region.LIGURIA,
  [Province.ISERNIA]: Region.MOLISE,
  [Province.LAQUILA]: Region.ABRUZZO,
  [Province.LA_SPEZIA]: Region.LIGURIA,
  [Province.LATINA]: Region.LAZIO,
  [Province.LECCE]: Region.PUGLIA,
  [Province.LECCO]: Region.LOMBARDIA,
  [Province.LIVORNO]: Region.TOSCANA,
  [Province.LODI]: Region.LOMBARDIA,
  [Province.LUCCA]: Region.TOSCANA,
  [Province.MACERATA]: Region.MARCHE,
  [Province.MANTOVA]: Region.LOMBARDIA,
  [Province.MASSA_CARRARA]: Region.TOSCANA,
  [Province.MATERA]: Region.BASILICATA,
  [Province.MESSINA]: Region.SICILIA,
  [Province.MILANO]: Region.LOMBARDIA,
  [Province.MODENA]: Region.EMILIA_ROMAGNA,
  [Province.MONZA_E_DELLA_BRIANZA]: Region.LOMBARDIA,
  [Province.MEDIO_CAMPIDANO]: Region.SARDEGNA,
  [Province.NAPOLI]: Region.CAMPANIA,
  [Province.NOVARA]: Region.PIEMONTE,
  [Province.NUORO]: Region.SARDEGNA,
  [Province.OGLIASTRA]: Region.SARDEGNA,
  [Province.OLBIA_TEMPIO]: Region.SARDEGNA,
  [Province.ORISTANO]: Region.SARDEGNA,
  [Province.PADOVA]: Region.VENETO,
  [Province.PALERMO]: Region.SICILIA,
  [Province.PARMA]: Region.EMILIA_ROMAGNA,
  [Province.PAVIA]: Region.LOMBARDIA,
  [Province.PERUGIA]: Region.UMBRIA,
  [Province.PESARO_E_URBINO]: Region.MARCHE,
  [Province.PESCARA]: Region.ABRUZZO,
  [Province.PIACENZA]: Region.EMILIA_ROMAGNA,
  [Province.PISA]: Region.TOSCANA,
  [Province.PISTOIA]: Region.TOSCANA,
  [Province.PORDENONE]: Region.FRIULI_VENEZIA_GIULIA,
  [Province.POTENZA]: Region.BASILICATA,
  [Province.PRATO]: Region.TOSCANA,
  [Province.RAGUSA]: Region.SICILIA,
  [Province.RAVENNA]: Region.EMILIA_ROMAGNA,
  [Province.REGGIO_CALABRIA]: Region.CALABRIA,
  [Province.REGGIO_NELLEMILIA]: Region.EMILIA_ROMAGNA,
  [Province.RIETI]: Region.LAZIO,
  [Province.RIMINI]: Region.EMILIA_ROMAGNA,
  [Province.ROMA]: Region.LAZIO,
  [Province.ROVIGO]: Region.VENETO,
  [Province.SALERNO]: Region.CAMPANIA,
  [Province.SASSARI]: Region.SARDEGNA,
  [Province.SAVONA]: Region.LIGURIA,
  [Province.SIENA]: Region.TOSCANA,
  [Province.SIRACUSA]: Region.SICILIA,
  [Province.SONDRIO]: Region.LOMBARDIA,
  [Province.SUD_SARDEGNA]: Region.SARDEGNA,
  [Province.TARANTO]: Region.PUGLIA,
  [Province.TERAMO]: Region.ABRUZZO,
  [Province.TERNI]: Region.UMBRIA,
  [Province.TORINO]: Region.PIEMONTE,
  [Province.TRAPANI]: Region.SICILIA,
  [Province.TRENTO]: Region.TRENTINO_ALTO_ADIGE,
  [Province.TREVISO]: Region.VENETO,
  [Province.TRIESTE]: Region.FRIULI_VENEZIA_GIULIA,
  [Province.UDINE]: Region.FRIULI_VENEZIA_GIULIA,
  [Province.VARESE]: Region.LOMBARDIA,
  [Province.VENEZIA]: Region.VENETO,
  [Province.VERBANO_CUSIO_OSSOLA]: Region.PIEMONTE,
  [Province.VERCELLI]: Region.PIEMONTE,
  [Province.VERONA]: Region.VENETO,
  [Province.VIBO_VALENTIA]: Region.CALABRIA,
  [Province.VICENZA]: Region.VENETO,
  [Province.VITERBO]: Region.LAZIO,
};

/**
 * Convert a province to a string representing its name.
 * @param province
 * @returns province name
 */
export const provinceToString = (province: Province): string => {
  switch (province) {
    case Province.AGRIGENTO:
      return 'Agrigento';
    case Province.ALESSANDRIA:
      return 'Alessandria';
    case Province.ANCONA:
      return 'Ancona';
    case Province.AOSTA:
      return 'Aosta';
    case Province.AREZZO:
      return 'Arezzo';
    case Province.ASCOLI_PICENO:
      return 'Ascoli Piceno';
    case Province.ASTI:
      return 'Asti';
    case Province.AVELLINO:
      return 'Avellino';
    case Province.BARI:
      return 'Bari';
    case Province.BARLETTA_ANDRIA_TRANI:
      return 'Barletta-Andria-Trani';
    case Province.BELLUNO:
      return 'Belluno';
    case Province.BENEVENTO:
      return 'Benevento';
    case Province.BERGAMO:
      return 'Bergamo';
    case Province.BIELLA:
      return 'Biella';
    case Province.BOLOGNA:
      return 'Bologna';
    case Province.BOLZANO:
      return 'Bolzano';
    case Province.BRESCIA:
      return 'Brescia';
    case Province.BRINDISI:
      return 'Brindisi';
    case Province.CAGLIARI:
      return 'Cagliari';
    case Province.CALTANISSETTA:
      return 'Caltanissetta';
    case Province.CAMPOBASSO:
      return 'Campobasso';
    case Province.CARBONIA_IGLESIAS:
      return 'Carbonia-Iglesias';
    case Province.CASERTA:
      return 'Caserta';
    case Province.CATANIA:
      return 'Catania';
    case Province.CATANZARO:
      return 'Catanzaro';
    case Province.CHIETI:
      return 'Chieti';
    case Province.COMO:
      return 'Como';
    case Province.CROTONE:
      return 'Crotone';
    case Province.CUNEO:
      return 'Cuneo';
    case Province.COSENZA:
      return 'Cosenza';
    case Province.CREMONA:
      return 'Cremona';
    case Province.ENNA:
      return 'Enna';
    case Province.FERMO:
      return 'Fermo';
    case Province.FERRARA:
      return 'Ferrara';
    case Province.FIRENZE:
      return 'Firenze';
    case Province.FOGGIA:
      return 'Foggia';
    case Province.FORLI_CESENA:
      return 'Forlì-Cesena';
    case Province.FROSINONE:
      return 'Frosinone';
    case Province.GENOVA:
      return 'Genova';
    case Province.GORIZIA:
      return 'Gorizia';
    case Province.GROSSETO:
      return 'Grosseto';
    case Province.IMPERIA:
      return 'Imperia';
    case Province.ISERNIA:
      return 'Isernia';
    case Province.LAQUILA:
      return "L'Aquila";
    case Province.LA_SPEZIA:
      return 'La Spezia';
    case Province.LATINA:
      return 'Latina';
    case Province.LECCE:
      return 'Lecce';
    case Province.LECCO:
      return 'Lecco';
    case Province.LIVORNO:
      return 'Livorno';
    case Province.LODI:
      return 'Lodi';
    case Province.LUCCA:
      return 'Lucca';
    case Province.MACERATA:
      return 'Macerata';
    case Province.MANTOVA:
      return 'Mantova';
    case Province.MASSA_CARRARA:
      return 'Massa-Carrara';
    case Province.MATERA:
      return 'Matera';
    case Province.MESSINA:
      return 'Messina';
    case Province.MILANO:
      return 'Milano';
    case Province.MODENA:
      return 'Modena';
    case Province.MONZA_E_DELLA_BRIANZA:
      return 'Monza-Brianza';
    case Province.MEDIO_CAMPIDANO:
      return 'Medio Campidano';
    case Province.NAPOLI:
      return 'Napoli';
    case Province.NOVARA:
      return 'Novara';
    case Province.NUORO:
      return 'Nuoro';
    case Province.OGLIASTRA:
      return 'Ogliastra';
    case Province.OLBIA_TEMPIO:
      return 'Olbia-Tempio';
    case Province.ORISTANO:
      return 'Oristano';
    case Province.PADOVA:
      return 'Padova';
    case Province.PALERMO:
      return 'Palermo';
    case Province.PARMA:
      return 'Parma';
    case Province.PAVIA:
      return 'Pavia';
    case Province.PERUGIA:
      return 'Perugia';
    case Province.PESARO_E_URBINO:
      return 'Pesaro e Urbino';
    case Province.PESCARA:
      return 'Pescara';
    case Province.PIACENZA:
      return 'Piacenza';
    case Province.PISA:
      return 'Pisa';
    case Province.PISTOIA:
      return 'Pistoia';
    case Province.PORDENONE:
      return 'Pordenone';
    case Province.POTENZA:
      return 'Potenza';
    case Province.PRATO:
      return 'Prato';
    case Province.RAGUSA:
      return 'Ragusa';
    case Province.RAVENNA:
      return 'Ravenna';
    case Province.REGGIO_CALABRIA:
      return 'Reggio Calabria';
    case Province.REGGIO_NELLEMILIA:
      return 'Reggio Emilia';
    case Province.RIETI:
      return 'Rieti';
    case Province.RIMINI:
      return 'Rimini';
    case Province.ROMA:
      return 'Roma';
    case Province.ROVIGO:
      return 'Rovigo';
    case Province.SALERNO:
      return 'Salerno';
    case Province.SASSARI:
      return 'Sassari';
    case Province.SAVONA:
      return 'Savona';
    case Province.SIENA:
      return 'Siena';
    case Province.SIRACUSA:
      return 'Siracusa';
    case Province.SONDRIO:
      return 'Sondrio';
    case Province.SUD_SARDEGNA:
      return 'Sud Sardegna';
    case Province.TARANTO:
      return 'Taranto';
    case Province.TERAMO:
      return 'Teramo';
    case Province.TERNI:
      return 'Terni';
    case Province.TORINO:
      return 'Torino';
    case Province.TRAPANI:
      return 'Trapani';
    case Province.TRENTO:
      return 'Trento';
    case Province.TREVISO:
      return 'Treviso';
    case Province.TRIESTE:
      return 'Trieste';
    case Province.UDINE:
      return 'Udine';
    case Province.VARESE:
      return 'Varese';
    case Province.VENEZIA:
      return 'Venezia';
    case Province.VERBANO_CUSIO_OSSOLA:
      return 'Verbano-Cusio-Ossola';
    case Province.VERCELLI:
      return 'Vercelli';
    case Province.VERONA:
      return 'Verona';
    case Province.VIBO_VALENTIA:
      return 'Vibo Valentia';
    case Province.VICENZA:
      return 'Vicenza';
    case Province.VITERBO:
      return 'Viterbo';
    default:
      throw new Error(`Unknown province ${province}`);
  }
};
