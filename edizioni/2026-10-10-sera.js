window.EDIZIONI = window.EDIZIONI || {};
window.EDIZIONI["2026-10-10-sera"] = (function(){
const S = (n,p,c,u,angolo,atlas)=>({n,p,c,u,angolo,atlas});
const NEWS = [
/* ---------- PRIMA PAGINA ---------- */
{id:"panama", sez:"prima", filo:"panama-sisma", titolo:"Panama, forte terremoto di magnitudo 7,7: danni a edifici e strade, allerta tsunami",
 orig:"Powerful magnitude 7.7 earthquake hits Panama, damaging buildings",
 lead:"Un terremoto di magnitudo 7,7 ha colpito il sud di Panama venerdì, danneggiando edifici e strade e mandando in strada migliaia di persone. Sono state diramate allerte tsunami per diversi Paesi dell'America centrale e meridionale. Secondo il Guardian il Paese sembra aver evitato distruzioni estese e vittime.",
 more:["Il presidente panamense ha dichiarato un «grave disastro» dopo una serie di scosse, che per qualche tempo hanno fatto sospendere i voli, riferisce la Deutsche Welle. Il Globe and Mail parla anche di una replica di magnitudo 6,6 e di evacuazioni in tutto il Paese.","Euronews, che titola sul crollo di una cattedrale, scrive che non risultano morti. Il nigeriano The Punch riferisce invece di almeno 27 feriti: il dato non compare nelle altre testate e va quindi considerato non confermato.","Fox News ricorda che la stima dell'Usgs era stata abbassata da 8,0 a 7,7."],
 fonti:[
  S("BBC News","UK","Londra","https://www.bbc.co.uk/news/articles/c620r39zdp9wo","Dà la notizia con le allerte tsunami diramate ai Paesi vicini e le immagini dei danni circolate online."),
  S("The Guardian","UK","Londra","https://www.theguardian.com/world/2026/oct/09/panama-earthquake","Insiste sul panico nella capitale e sul fatto che il Paese sembri aver evitato distruzione e morti su larga scala."),
  S("Deutsche Welle","DE","Bonn","https://www.dw.com/en/strong-earthquakes-shake-panama-buildings-damaged/a-79623168","Riporta la dichiarazione di «grave disastro» del presidente e la sospensione temporanea dei voli."),
  S("The Globe and Mail","CA","Toronto","https://www.theglobeandmail.com/world/article-panama-magnitude-76-earthquake-oct-9/","Parla di due forti scosse, 7,7 e 6,6, e delle evacuazioni in tutto il Paese."),
  S("Euronews","XX","Lione","https://www.euronews.com/video/2026/10/10/panic-in-panama-as-77-quake-hits-cathedral-collapses-and-tsunami-warnings-spread","Racconta il panico e il crollo di una cattedrale, precisando che non risultano morti.")
 ], data:"10 ott"},

{id:"eritrea", sez:"prima", filo:"etiopia-eritrea", titolo:"Truppe eritree in Etiopia: Addis Abeba avverte che si difenderà",
 orig:"Ethiopia warns Eritrea it will defend itself after troops cross border",
 lead:"L'Etiopia ha avvertito l'Eritrea che difenderà il proprio territorio dopo l'ingresso di soldati eritrei oltre il confine. Secondo la BBC colonne di camion con truppe eritree sono state viste entrare in Etiopia, e l'esercito etiope avrebbe risposto con attacchi di droni. Addis Abeba chiede il ritiro immediato di ogni forza straniera.",
 more:["La Deutsche Welle scrive che i due Paesi si rimpallano le responsabilità degli scontri nel Tigray, tra appelli internazionali alla moderazione, e che gli alleati di ciascuno rischiano di trasformare lo scontro in una guerra regionale. The EastAfrican, da Nairobi, parla di una crisi che si approfondisce e di schieramenti ormai definiti.","I bilanci militari e le ricostruzioni dei movimenti sul terreno vengono dalle parti e non sono verificati in modo indipendente."],
 fonti:[
  S("BBC News","UK","Londra","https://www.bbc.co.uk/news/articles/c65ynvw250y1o","Parte dall'avvertimento di Addis Abeba e dalle colonne di soldati eritrei viste entrare in Etiopia."),
  S("Deutsche Welle","DE","Bonn","https://www.dw.com/en/eritrean-troops-in-ethiopia-raise-fears-of-a-regional-war/a-79615065","Guarda al rischio regionale: le alleanze dei due Paesi potrebbero allargare il conflitto."),
  S("The EastAfrican","XX","Nairobi","https://www.theeastafrican.co.ke/tea/news/eastern-africa/ethiopia-eritrea-draw-battle-lines-as-crisis-deepens-5626558","Racconta la crisi dall'Africa orientale: per alcuni esperti la guerra era sempre stata una possibilità.")
 ], data:"10 ott"},

/* ---------- ECONOMIA ---------- */
{id:"samsung", sez:"economia", titolo:"Samsung, utili record per 80 miliardi di dollari grazie al boom dei chip per l'IA",
 orig:"AI chip boom pushes Samsung profits to record $80bn",
 lead:"La domanda di chip per l'intelligenza artificiale spinge i profitti di Samsung a un record di 80 miliardi di dollari. Secondo la BBC il gruppo sudcoreano dovrebbe trarre vantaggio anche dai nuovi dispositivi pieghevoli lanciati ad agosto.",
 more:[], fonti:[S("BBC News","UK","Londra","https://www.bbc.co.uk/news/articles/c687z8127302o")], data:"10 ott"},

/* ---------- SALUTE ---------- */
{id:"vista", sez:"salute", titolo:"Una terapia genica ridà in parte la vista a persone cieche",
 orig:"Gene therapy can partly restore sight in blind people, researchers reveal",
 lead:"Una terapia genica optogenetica, basata su ricerche premiate con il Nobel, risulta sicura e può restituire in parte la vista a persone cieche. Il metodo consiste nell'accendere e spegnere le cellule nervose con la luce. Lo riferisce il Guardian.",
 more:[], fonti:[S("The Guardian","UK","Londra","https://www.theguardian.com/society/2026/oct/07/gene-therapy-can-partly-restore-sight-in-blind-people-researchers-reveal")], data:"7 ott"},

/* ---------- CULTURA ---------- */
{id:"carson", sez:"cultura", titolo:"Anne Carson vince il Nobel per la letteratura 2026",
 orig:"Anne Carson wins Nobel prize in literature 2026",
 lead:"Il Nobel per la letteratura è andato alla poeta e saggista canadese Anne Carson, 76 anni, celebrata per opere che attraversano i confini tra poesia, narrativa e studio dei classici, come «Autobiografia del rosso». La BBC la definisce «audace e inventiva».",
 more:["Le Matin d'Algérie sceglie tre libri per capire come Carson rinnova le forme: un mito greco trasformato in romanzo in versi, il lutto per un fratello raccontato per frammenti e archivi, una storia coniugale costruita in ventinove tanghi."],
 fonti:[
  S("The Guardian","UK","Londra","https://www.theguardian.com/books/2026/oct/08/wins-the-nobel-prize-in-literature-2026","Raccoglie le voci di scrittrici come Margaret Atwood e suggerisce da dove cominciare a leggerla."),
  S("BBC News","UK","Londra","https://www.bbc.co.uk/news/articles/cq4g1j54nepyo","Sottolinea il carattere «audace e inventivo» della sua scrittura e la sua capacità di mescolare i generi."),
  S("Le Matin d'Algérie","DZ","Algeri","https://lematindalgerie.com/anne-carson-nobel-de-litterature-2026-trois-livres-pour-repousser-les-frontieres-de-lecriture/","Guida alla lettura: tre libri che mostrano come Carson fa della mescolanza delle forme un metodo.")
 ], data:"8 ott"},

/* ---------- ADOLESCENTI ---------- */
{id:"cyberpunk", sez:"adolescenti", sub:"giochi", titolo:"«Cyberpunk 2077» diventa un film: lo farà Paramount",
 orig:"Video game Cyberpunk 2077 to get live-action movie adaptation",
 lead:"Il videogioco di enorme successo dello studio che ha creato anche «The Witcher» avrà un film con attori in carne e ossa, prodotto da Paramount Pictures. Lo riferisce la BBC.",
 more:[], fonti:[S("BBC News","UK","Londra","https://www.bbc.co.uk/news/articles/c60e048r02lgo")], data:"10 ott"}
];
const QUIZ = [
  {q:"Che magnitudo ha avuto il terremoto che ha colpito Panama?", opts:["5,7","6,6","7,7"], ok:2, rif:"panama"},
  {q:"Chi ha vinto il Nobel per la letteratura 2026?", opts:["Anne Carson","Margaret Atwood","Haruki Murakami"], ok:0, rif:"carson"},
  {q:"Con quale tecnica la terapia genica descritta dal Guardian agisce sulle cellule nervose?", opts:["Con la luce","Con il suono","Con il freddo"], ok:0, rif:"vista"}
];
/* Commento finale in corsivo: l'angolo di chi scrive, descritto in modo oggettivo e fondato su ciò che la testata ha messo in evidenza */
const SGUARDI = {
 panama:"Le testate britanniche e canadesi seguono l'evento dal lato dell'allerta tsunami e dei danni; la DW riporta la dichiarazione di «grave disastro» del governo panamense; Euronews sceglie l'immagine più forte, il crollo di una cattedrale. Una testata nigeriana, unica, parla di 27 feriti.",
 eritrea:"Da Londra la BBC parte dall'avvertimento etiope e dalle truppe in movimento; da Bonn la DW allarga lo sguardo al rischio di guerra regionale; da Nairobi The EastAfrican, più vicina alla regione, racconta lo schieramento delle parti.",
 samsung:"La BBC legge i conti del gruppo sudcoreano come un segnale della forza del mercato dei chip legati all'intelligenza artificiale.",
 vista:"Il Guardian racconta la ricerca con il linguaggio della divulgazione medica, collegandola alla scienza premiata con il Nobel.",
 carson:"Il Guardian e la BBC, dal Regno Unito, celebrano l'autrice per la sua libertà tra i generi; da Algeri Le Matin d'Algérie propone invece tre libri come porta d'ingresso alla sua opera.",
 cyberpunk:"Una notizia di spettacolo e videogiochi raccontata dalla BBC al suo pubblico internazionale: dal gioco al cinema, come già accaduto con altre grandi serie."
};
const CONTESTI = {
 eritrea:"Secondo le agenzie internazionali, il 23 settembre sono scoppiati combattimenti tra il Tplf e le forze federali etiopi nel Tigray; l'Etiopia accusa l'Eritrea di sostenere i ribelli e la settimana scorsa i due Paesi hanno interrotto i rapporti diplomatici. Le truppe eritree sono entrate nel Tigray tra il 7 e l'8 ottobre. L'Eritrea non ha negato l'ingresso e giudica «una narrazione fallace» la tesi etiope della legittima difesa.",
 panama:"Il Panama si trova su una zona sismica attiva, all'incontro di più placche tettoniche. Dopo la scossa principale di magnitudo 7,7 è seguita una replica di 6,6 e molte scosse minori."
};
const CRONO = {
 eritrea:[
  ["23 settembre","Scoppiano i combattimenti tra il Tplf e le forze federali etiopi nel Tigray."],
  ["inizio ottobre","Etiopia ed Eritrea interrompono i rapporti diplomatici."],
  ["7-8 ottobre","Truppe eritree entrano nel Tigray; Addis Abeba chiede il ritiro immediato."],
  ["10 ottobre","L'Etiopia avverte che difenderà il proprio territorio; secondo un analista di Acled, droni etiopi avrebbero colpito truppe eritree."]
 ],
 panama:[
  ["9 ottobre","Terremoto di magnitudo 7,7 nel sud di Panama, seguito da una replica di 6,6; allerta tsunami per l'America centrale e meridionale."],
  ["10 ottobre","Il governo dichiara il «grave disastro»; i primi resoconti parlano di danni a edifici e strade e non riportano morti."]
 ]
};
const US = "United States of America";
const LUOGHI = {
 panama:{n:"Sud di Panama", p:["Panama"], pt:[[8.0,-81.5,"Sud di Panama"]]},
 eritrea:{n:"Tigray, Etiopia, al confine con l'Eritrea", p:["Ethiopia","Eritrea"], pt:[[14.28,39.46,"Adigrat"]]},
 samsung:{n:"Corea del Sud", p:["South Korea"], pt:[]},
 vista:{n:"Regno Unito", p:["United Kingdom"], pt:[]},
 carson:{n:"Stoccolma, Svezia (sede dell'Accademia)", p:["Sweden","Canada"], pt:[[59.33,18.07,"Stoccolma"]]},
 cyberpunk:{n:"Stati Uniti e Polonia", p:[US,"Poland"], pt:[]}
};
const RILIEVO = {panama:3, eritrea:3, samsung:2, carson:2};
const VIDEO = {};
const PILLOLE = [];
return {tipo:"sera", news:NEWS, quiz:QUIZ, sguardi:SGUARDI, contesti:CONTESTI, cronologie:CRONO, luoghi:LUOGHI, rilievo:RILIEVO, video:VIDEO, pillole:PILLOLE};
})();
