#Les 2: Can’t get it out of my \<head>
Les 2 gaat over de geschiedenis van HTML. Het W3C en WHATWG. Ook wordt de HTML5 timeline besproken.   
In de les ga je werken aan Validatie & Code lezen, Rich media elementen: Audio, Video en de mogelijkheden van Web Forms 2.0.

##Docenten
David de Vries   
Vasilis van Gemert  
Joost Faber 

##Lesdoelen
Geschiedenis en timeline HTML5 bespreken (college)  
Begrip over deze nieuwe webtechnologie en HTML5 semantiek (bespreking)  
Audio en Video tag begrijpen en toepassen (aan de slag)  
Webformulieren met HTML 5 (aan de slag)  

##Programma (200 minuten)
1. College (30)
2. Artikel bespreking (30)
3. Aan de slag (90)
4. Eindopdracht (30)
5. Terugkijken (20)

##College - 30 minuten (30/200)
Materiaal Papier en pen voor aantekeningen  
Opstelling College opstelling  

Geschiedenis en ontwikkeling  
Tim Bernard Lee (sir) > Uitvinder van WWW. Internet bestond al.  
Ontwikkeling van HTML, gekoppeld aan browsers. Wat was er eerder? browser of HTML?  
Welke browsers heb je en wanneer?  Mosaic > Netscape > Opera (bestaat nog) > IE > iCab > Mozilla/Firefox > Safari > Chrome.   
Bekijk website: De evolution of the web http://evolutionofweb.appspot.com  
IE 10 wordt een indrukwekkende browser.  

Webkit, Presto, Gecko, Trident zijn rendering engines. We willen niet afhankelijk zijn van Webkit, dan krijg je hetzelfde als afhankelijkheid van IE: Monoculture: Makkelijk, erg vervelend, het web staat stil.  

W3C - WHATWG - Timeline of HTML5  
W3C op basis van consensus worden ontwikkelingen vastgesteld, traag.   
WHATWG, groep rebellen vanuit W3C willen een praktisch web. Geen dracionian error handling.   Beslissingen worden, na discussie, uiteindelijk door 1 persoon gemaakt == snel.  
W3C heeft uiteindelijk het werk overgenomen van WHATWG.  
Wanneer wordt een standaard vastgesteld? Er moeten 2 rondes toepassingen zijn gebouwd met alle specificaties. Dat duurt altijd heel lang.  


##Discussie - 30 minuten (60/200)
Materiaal Papier en pen voor aantekeningen  
Opstelling Tafels in een vierkant, 2 groepen van 18  

Introductie: Groepje van 2 of 3 studenten het woord geven en kort uitleggen wat ze moeten doen en wat de rol en activiteit is van de docent. Beoordeling, criteria.  
**Structuur:**   
Groepje studenten geeft een korte samenvatting van de artikelen  
Studenten uit de groep krijgen vragen over de stof  
Docent mag overal doorheen praten en andere mensen een beurt geven (om te beoordelen)  
Aan het eind van de discussie geeft de docent een round up over de beoordeling  
Nieuwe groep aanwijzen voor les 3

  
 **Vragen:**  
The design of HTML 5 - The design of HTML5 by Jeremy Keith (70 minuten)  
Wat betekent WHATWG? Wat doen ze? Waarom zijn ze begonnen met eigen standaard?  
HTML 5 design principles?  
Wat is doctype?    
Wat bedoelt Jeremy Keith met ‘pave the cowpaths”?  
Degrade gracefully  
Form type  element, wat doen browser die het niet ‘snappen’ ?  
HTML5 vs Flash, which side are you on?  
Priority of constituencies? users - authors - implementors - specifiers - theoretical purity  

Semantics in HTML 5 - Semantics in HTML 5 by John Allsopp  
Probleem van HTML?   We have simply run out of HTML elements and attributes with which to mark up more richly semantic documents  
What is the single most pressing goal for the HTML 5 project?   We need mechanisms in HTML that clearly and unambiguously enable developers to add richer, more meaningful semantics—not pseudo semantics—to their markup.   
Wat is een grote uitdaging van de ontwikkeling van HTML?   Forward and backwards compatible  
Why are we inventing these new elements?   Because HTML lacks semantic richness, and by adding these elements, we increase the semantic richness of HTML—that can’t be bad, can it?  
Krititek op HTML5 ontwikkeling:    - We don’t need to add specific terms to the vocabulary of HTML, we need to add a mechanism that allows semantic richness to be added to a document as required. In technical terms, we need to make HTML extensible. HTML 5 proposes no mechanism for extensibility. - HTML 5, therefore, implements a feature that breaks a sizable percentage of current browsers, and doesn’t really allow us to add richer semantics to the language at all.

##Aan de slag - 90 minuten (150/200)
Materiaal Laptop en internet  
Opstelling Werkeilanden waar twee duo’s aan kunnen zitten  

Terugkijken op de opdrachten van lesweek 1:  
Vorige week hebben we de semantische elementen even bekeken, we hebben gekeken naar validatie. We weten weer hoe HTML werkt. Vandaag gaan we verder met andere elementen.  


###Opdracht 1 - Het Video element - 30 minuten

**Opdracht: Video: Maak!**    
Minimale toepassing video element:  
\<video src=”video_file.mp4” controls>\</video>  

De praktijk werkt anders: = politiek: Niet alle video formaten worden ondersteund door alle browsers. Je moet verschillende video sources aanbieden om alle browsers te bedienen.  
HTML5 Periodic Table of Elements http://joshduck.com/periodic-table.html > specs voor video element en ondersteuning https://developer.mozilla.org/en/HTML/Element/video  

**Het video element**   
Plaats de onderstaande bronbestanden in een \<video> Hij moet voor iedereen met een hedendaagse browser werken. Zorg voor een fallback voor oude browsers. Er moet een caption track toegevoegd worden.  

Captions http://developer.longtailvideo.com/trac/export/2584/trunk/jw6/test/assets/captions/bunny-en.vtt  
Webm http://clips.vorwaerts-gmbh.de/big_buck_bunny.webm  
OGG http://clips.vorwaerts-gmbh.de/big_buck_bunny.ogv  
MP4 http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4  
Plaatje http://camendesign.com/code/video_for_everybody/poster.jpg  

**Bespreking opdracht 1**  
Resultaat van een student in Gist bespreken...

###Opdracht 2 - HTML5 Webforms 2.0 - 60 minuten

**Opdracht: HTML5 formulieren.**   
In HTML5 zijn hele veel meer (functionele) mogelijkheden bedacht:   

_placeholder > text voor leeg form field:_
\<input type=text id=hobbies placeholder=”gimme some”>  
_autofocus:_  
\<input type=text id=status autofocus>  
_required:_
\<input type=password id=pw required>   
_autocomplete > disable auto-completen, bv veiligheid:_  
\<form autocomplete=off> of \<input type=text autocomplete=off>  
_datalist:_             \<input type=text id=all_your_coders_r_belong_to_us list=code _archetypes>     \<datalist id=code _archetypes>   \<option value=enthusiast>   \<option value=mash-up-artist>   \<option value= inventor>   \<option value= wizard>    \</datalist>  
Input types \<input type=””>  
searching  
contact types: email, website, phone  
range (slider)  
number  
dates and times  
color pickers  
pattern  

####**Opdracht 2a**  
Maak het volgende formulier met valide, toegankelijke HTML. Gebruik labels voor de verschillende elementen, vb:  
	\<label for”naam”>naam\</label>  
	\<input id=”naam”>  

1. Contactgegevens  
1a. Naam  
1b. E-mail  
1c. Straatnaam  
1d. Nummer  
1e. Postcode  
1f. Land  
1g. Telefoonnummer  

2. Voorkeuren  
2a. Lievelingskleur  
2b. Leukste maand  
2c. Hoe goed is dit ongeveer? (1 tm 10)  

**Bespreken opdracht 2a**  
Resultaat van een student in Gist bespreken.

Waar zitten de fieldsets? Met de fieldset groepeer je content die thematisch bij elkaar hoort.
Een <legend> geeft aan waar het fieldset over gaat. Een titel van de fieldset. Dit element is primair gekoppeld aan de fieldset.  
Kloppen de label/input paren?  
Een label is gekoppeld aan een input of textarea. Dit is ook belangrijk voor screenreaders. Handig voor gebruik is dat je op een label kan klikken om een element focus te geven.

**Opdracht 2b**    
Vervang de klassieke formulier-attributen zo nodig door HTML5 attributen op deze pagina. Welke input types kunnen in HTML5 specifiek worden ingevuld.

**Bespreken opdracht 2b**  

We bekijken een aantal gekozen oplossingen en bespreken welk attribuut waarbij hoort.

Met required (bool) geef je aan welke form elementen verplicht zijn (overigens kun je die ook heel makkelijk stylen)  
Het attribuut placeholder kun je heel eenvoudig een standaard tekst in een input laten zien. Oude browsers negeren dit.  
Bij het number type krijg je in sommige browsers automatisch pijltjes naast het element. Als je geen pijltjes wil, bijvoorbeeld om dat je dit lelijk vindt, zou je bijvoorbeeld een pattern kunnen gebruiken. Dan geef je met een regular-expression aan wat de gebruiker mag invullen... Let op, browsers verwerken dit niet allemaal hetzelfde.  
Color type en date geven in sommige browsers een color picker en calender object.  
Op IOS, mobile OS van Apple, verandert het toetsenbord afhankelijk van het type dat je meegeeft. Bijvoorbeeld type=email geeft een toetsenbord met een @, type=number geeft een numeriek toetsenbord. Vasilis is helemaal fan van type=date op IOS. Probeer dit maar eens met de verschillende HTML5 input types .... (OS heeft voor de mac een Iphone emulator die je kan gebruiken met de development kit.)  
Bij type=search laat IOS bijvoorbeeld standaard een x (clear) in het field zien: Handig!  

###Eindopdracht - 30 minuten
Materiaal Laptop en internet  
Opstelling Werkeilanden waar twee duo’s aan kunnen zitten  

Bespreken status van de eindopdracht: vorige week heb je de basis van een Artikel pagina gemaakt. Deze les heb je een begin gemaakt met het formulier.  

Voor de eindopdracht moet je specifieke content in je pagina’s laten zien. Deze staan op het intranet op de Maakopdracht-pagina. In de download vind je de pagina’s en plaatjes die je moet gebruiken. Ook is een Content Matrix meegeleverd, met in geel aangegeven om welke pagina’s het gaat. 


## Terugkijken - 20 minuten (200/200)

Wat hebben we geleerd?  
Lesdoelen:  
Geschiedenis en timeline HTML5 kennis overdragen (college)  
Begrip over deze nieuwe webtechnologie en HTML5 semantiek (discussie)  
Audio en Video tag begrijpen en toepassen (aan de slag)  
Webformulieren met HTML 5 (aan de slag)  


Vooruitkijken naar volgende week, mondeling en structuur van de les bespreken:  
Wat moeten ze af hebben voor deeltoets 1 en hoe gaat de beoordeling?  
Mondeling worden gehouden met dubbele duo’s, 10 minuten per gesprek.   
Tijdens de maak-opdrachten worden de mondelingen afgenomen.  
Het werkeiland vooraan de klas vrijhouden voor de mondelingen.    
Schema komt op het bord.  
Hoe moeten studenten hun werk opleveren: Meenemen op je laptop / GitHub.  
Pagina’s moeten gevalideerd zijn. Het is belangrijker dat een student een validatie error kan uitleggen dan dat er geen errors zijn.  
