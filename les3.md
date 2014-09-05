# I’ve got < em >
###### Frontend development - les 3

!

# I’ve got < em >

Deze les gaat over het Javascript ClassList Object, waarmee je dom elementen kunt selecteren en classes kan toewijzen. We gaan aan de slag met de Flexbox, Grids en units, zoals pixels, ems en procenten.



!

# I’ve got < em >
## Programma (200 minuten)
1. Introduktie (5)
2. College (30)
3. Weekly Nerd (30)
4. Klussen (120)
5. Terugkijken (10)


!

# 1. Introduktie (5 minuten)
Lesdoelen en planning van vandaag.


##### 1. Introduktie (5/200 minuten)

!


# 2. College - 30 minuten

[College I’ve got < em >](http://cmda.github.io/FED1/Colleges/les1-gimme-a-fucking-br/index.html)
Over ...

##### 2. College (30 - 35/200 minuten)

!

# 3. Weekly Nerd - 30 minuten
Artikelen bespreken in kleine groepen. 


##### 3. Weekly Nerd (30 - 65/200 minuten)

!

# Weekly Nerd artikelen voor vandaag

* ...
* ...
* ...

##### 3. Weekly Nerd (30 - 65/200 minuten)

!

# Wie zit waar?

image

lijst 

##### 3. Weekly Nerd (30 - 65/200 minuten)

!

# Weekly Nerd vragen


##### 3. Weekly Nerd (30 - 65/200 minuten)

!

# 4 Klussen - 120 minuten
Laptop en internet.

##Wie zit waar?
Opstelling Werkeilanden van 6 personen.
Duo's zitten naast elkaar.

### Hoe ziet het lokaal eruit?

img

##### 4. Klussen (120 - 180/200 minuten)

!

# 5. Terugkijken 10 minuten
Wat hebben we vandaag behandeld?
Huiswerk voor volgende week.


##### 5. Terugkijken (10 - 190/200 minuten)





!

!

!

#OLD OLD OLD 
#2013 programma

!



#Les 3: Will Kern for Food
Deze les gaat over Vormgeving. Les 3 gaat over CSS3. Hoe kun je met de nieuwste versie van CSS3 je markup vormgeven?

Aan de slag met: stijl elementen, effecten zoals borders, backgrounds, transities en transforms.

##Docenten
David de Vries  
Vasilis van Gemert  
Joost Faber  

##Lesdoelen
Introductie CSS3 vormgeving en effecten (college)  
Begrip en stellingname over typografie en webdesign (discussie)  
Fonts gebruiken, Effecten, Opacity en Transparancy (aan de slag)  
Mondeling over de eerste opdracht: Summatieve toets: Wat is je niveau? Ken je de structuur semantiek? Kun je audio en/of video tag uitleggen? Begrijp je HTML 5 formulieren?  
Een summatieve toets heeft de functie een oordeel over de kennis en vaardigheden van een leerling uit te spreken.

##Programma (200 minuten)
1. College (30)  
2. Discussie (30)  
3. Aan de slag / Deeltoets 1 - in groepjes van 4, 10 minuten (120)  
4. Eindopdracht  
5. Terugkijken (20)  

###1 College - 30 minuten (30/200)
Materiaal Papier en pen voor aantekeningen  
Opstelling College opstelling

CSS3 vormgeving + effecten. Fonts en schermen en leesbaarheid.

Stof HTML5 is redelijk droog. Abstract. Vanaf deze les gaat het meer ‘leven’ Met CSS3 kun je namelijk kick-ass dingen doen.

Wat is CSS? Cascading Styles sheets. Het begrip "cascading" (als een waterval) verwijst naar de mogelijkheid tot over-erven van opmaak-eigenschappen.  
CSS werkt op eenzelfde manier als HTML. Als een browser het niet begrijpt, wordt het commando genegeerd. Dat is handig voor backwards compatibiliteit. Je kan elementen gebruiken voor nieuwe browsers die door oude browsers worden overgeslagen. Bijvoorbeeld Background: -moz-linear-gradient wordt alleen door Mozilla uitgevoerd. Alle browsers negeren de property-values en declarations die ze niet begrijpen.   
Een browser zal altijd de laatste property-value die ze begrijpen uitvoeren. 

**Kleuren en transparantie**  
Transparantie to the max: [http://24ways.org/](http://24ways.org/)  
In CSS 3 kun je meer doen met opacity en transparanties. De kleurwaarde kun je ook in RGBA opgeven. Hierin kun je de opacity als laatste argument meegeven, bv:    
	background: rgba(200,20,15,.2); /\* rood, groen, blauw, opacity \*/  
Keuren kunnen ook in HSL(A) worden gedefinieerd.  
	background: hsla(60,50%,60%,.2); /\* waarde, hue, saturation, opacity \*/    
De waarde currentColor kun je gebruiken om iets (bijvoorbeeld de border, of een schaduw) dezelfde kleur als de color te geven. Dit kan erg handig zijn.  

*Resources:*  
[http://caniuse.com/#search=opacity](http://caniuse.com/#search=opacity)  
[http://caniuse.com/#search=rgba](http://caniuse.com/#search=rgba)

**Border-radius**  
Met de border-radius kun je randen met ronde hoekjes maken  
	border-radius: 30px 50px, 100px, 100px; /\* lb, rb, ro, lo\*/  
Je kan ook horizontaal en verticaal beinvloeden  
	border-radius: 30% 50% 90%/ 100%; /\* horizontale waarde / verticale waarde \*/  
Voorbeeld: [http://lab.simurai.com/buttons/](http://lab.simurai.com/buttons/)  
Resources border-radius: [http://caniuse.com/#search=border-radius](http://caniuse.com/#search=border-radius)  

**Box Shadows**  
Geeft een object een schaduw.  
	box-shadow: inset 5px 5px 10px black; /\* definieer border lb,rb,ro,lo   
		ook inset, spread  
		je kan ook meerdere schaduwen geven, multiple shadow\*/  
Voorbeeld gebruik box shadows:   
Site over minimalistisch design [http://minimalissimo.com/](http://minimalissimo.com/) (konami code intypen)  
Schaduw op text kan met text-shadow, dan heb je geen spread.  

*Resources:* 
[http://www.viget.com/uploads/file/boxshadows/](http://www.viget.com/uploads/file/boxshadows/)  
[http://ebexpedition18.com/download/css3_text_shadow](http://ebexpedition18.com/download/css3_text_shadow)  

Wat is de ondersteuning van shadow?   
[http://caniuse.com/#search=shadow](http://caniuse.com/#search=shadow)  

**Transforms**  
Met transforms kun je opbjecten draaien, schalen, skew, verplaatsen  
	transform: rotate(10deg);  
	transform: scale(.9); /* scale heeft geen invloed op de omgeving.   
		de content om het object heen blijft staan*/  
	transform: skew(12deg);  

je kan deze dingen allemaal combineren.
[http://paulrhayes.com/experiments/cube/multiCubes.html](http://paulrhayes.com/experiments/cube/multiCubes.html)

**Transitions**  
Met CSS3 kun je animeren. Voorheen gebeurde dit met javascript, of javascript libraries. Met het transform element kun je objecten verplaatsen, groter maken, verkleuren.  
Voorbeeld: [http://www.3site.eu/examples/gallery/](http://www.3site.eu/examples/gallery/) (alleen in Chrome)  
	textarea {  
		transition: 1s .5s;  /* duur van de transitie en wanneer deze begint*/  
	}  
	textarea:hover {  
		background: red;  
	}  
Er zitten wat haken en ogen aan transities. Soms moet je truken uithalen om een gewenst effect te bereiken. Je kan ook de ‘manier’ van animeren definiëren. Met easing. vb. easeout of easein. Net zoals dat ook in flash kan.  
Resources: [http://cubic-bezier.com/#0,1.13,.77,1.33](http://cubic-bezier.com/#0,1.13,.77,1.33)

###2 Discussie - 30 minuten (60/200)
Materiaal Papier en pen voor aantekeningen
Opstelling Tafels in een vierkant, 2 groepen van 18

**Introductie:**     
Groepje introduceren en uitleggen wat ze moeten doen. Rol van de docent aangeven.  Werkwijze en criteria

**Artikelen:**      
- HTML5 semantics By Bruce Lawson  
- The 100% Easy-2-Read Standard by by Oliver Reichenstein  
- Web Design is 95% Typograph by by Oliver Reichenstein    



*Vragen: 100% easy to read standard*      
Don’t tell us to adjust the font size    
Don’t tell us busy pages look better  
Don’t tell us scrolling is bad  
Don’t tell us text is not important  
Don’t tell us to get glasses  

*Five simple rules*  
Standard font size for long texts: The font size you are reading right now is not big. It’s the text size browsers display by default. It’s the text size browsers were intended to display.  
Active white space: The basic rule is: 10 to 15 words per line. For liquid layouts, at 100% font size, 50% column width (in relation to window size) is a good benchmark for most screen resolutions.  
Reader friendly line height: The default HTML line height is too small. If you increase the line height, the text becomes more readable. 140% leading is a good benchmark.  
Clear color contrast  
No text in images  

*Vragen: Webdesign is 95% Typografie*    
It is the information designer’s task “to divide up and organize and interpret this mass of printed matter in such a way that the reader will have a good chance of finding what is of interest to him”. (Emil Rudur over print )  
- Too few fonts? Resolution too low? - Choosing a typeface is not typography - Treat text as a user interface  

*Where usability gurus usually fail*  
The text lines (measure) are too long  
100% scalable is not a reader friendly solution: Don’t make me think, ok, but don’t make me resize my window either  
Lack of whitespace  
Lack of active whitespace  
Linespacing is too narrow  
The text blocks are not well aligned  
Too many font sizes  
Pictures are badly placed and disrupt the reading ease  

*Common art school graduate’s mistakes are*
Text-background color contrast  
Lazy handling of titles and subtitles
Text sizes
Text blocks that are not split up into enough small, scannable, digestible parts
Indiscernible links. Visited and non visited links are not discerned
Text is not treated as an interface but as decoration
It’s not clear if the text is a navigational element, a link or plain text
Fancy navigations marking the center of attention (content is the center of attention, content deserves the most love from the designer)

###3 Aan de slag - 120 minuten (180/200)
Materiaal Laptop en internet  
Opstelling Werkeilanden waar twee duo’s aan kunnen zitten  
Zelfstandig werken aan CSS3 opdrachten: 16 opdrachten die je zelfstandig kunt maken. De opdrachten staan hier: [http://vasilis.nl/hva/03/oefeningen.html](http://vasilis.nl/hva/03/oefeningen.html)  

**Border-radius** - [http://vasilis.nl/hva/03/oefeningen.html#slide2](http://vasilis.nl/hva/03/oefeningen.html#slide2)  
*4 opdrachten*  
[http://vasilis.nl/hva/03/oefeningen.html#slide3](http://vasilis.nl/hva/03/oefeningen.html#slide3)  
[http://vasilis.nl/hva/03/oefeningen.html#slide4](http://vasilis.nl/hva/03/oefeningen.html#slide4)  
[http://vasilis.nl/hva/03/oefeningen.html#slide5](http://vasilis.nl/hva/03/oefeningen.html#slide5)  
[http://vasilis.nl/hva/03/oefeningen.html#slide6](http://vasilis.nl/hva/03/oefeningen.html#slide6)  

**box-shadow** - [http://vasilis.nl/hva/03/oefeningen.html#slide7](http://vasilis.nl/hva/03/oefeningen.html#slide7)  
*4 opdrachten*    
[http://vasilis.nl/hva/03/oefeningen.html#slide8](http://vasilis.nl/hva/03/oefeningen.html#slide8)  
[http://vasilis.nl/hva/03/oefeningen.html#slide9](http://vasilis.nl/hva/03/oefeningen.html#slide9)  
[http://vasilis.nl/hva/03/oefeningen.html#slide10](http://vasilis.nl/hva/03/oefeningen.html#slide10)  
[http://vasilis.nl/hva/03/oefeningen.html#slide11](http://vasilis.nl/hva/03/oefeningen.html#slide11)  

**Transities** - [http://vasilis.nl/hva/03/oefeningen.html#slide12](http://vasilis.nl/hva/03/oefeningen.html#slide12)    
*4 opdrachten *   
[http://vasilis.nl/hva/03/oefeningen.html#slide13](http://vasilis.nl/hva/03/oefeningen.html#slide13)  
[http://vasilis.nl/hva/03/oefeningen.html#slide14](http://vasilis.nl/hva/03/oefeningen.html#slide14)  
[http://vasilis.nl/hva/03/oefeningen.html#slide15](http://vasilis.nl/hva/03/oefeningen.html#slide15)  
[http://vasilis.nl/hva/03/oefeningen.html#slide16](http://vasilis.nl/hva/03/oefeningen.html#slide16)  

**Transforms** - [http://vasilis.nl/hva/03/oefeningen.html#slide17](http://vasilis.nl/hva/03/oefeningen.html#slide17)    
*1 opdracht*    
[http://vasilis.nl/hva/03/oefeningen.html#slide18](http://vasilis.nl/hva/03/oefeningen.html#slide18)  

**CSS transitions** - [http://vasilis.nl/hva/03/oefeningen.html#slide19](http://vasilis.nl/hva/03/oefeningen.html#slide19)  
*3 opdrachten*  
[http://vasilis.nl/hva/03/oefeningen.html#slide20](http://vasilis.nl/hva/03/oefeningen.html#slide20)  
[http://vasilis.nl/hva/03/oefeningen.html#transitions](http://vasilis.nl/hva/03/oefeningen.html#transitions)  
[http://vasilis.nl/hva/03/oefeningen.html#slide22](http://vasilis.nl/hva/03/oefeningen.html#slide22)  


###4 Deeltoets 1

Mondeling afnemen met dubbele duo’s, 10 minuten per gesprek.  
Per maak-opdracht kunnen 3 dubbele duo’s een mondeling worden afgenomen.  
Het werkeiland vooraan de klas vrijhouden voor de mondelingen.   
Docenten bekijken de 2 pagina’s en stellen vragen. De beoordeling wordt meteen gedaan.   Herkansing is volgende week.  

Schema staat op google drive.

Hoe moeten studenten hun werk opleveren? Via GitHub of eigen HTML editor.  

Criteria voor de deeltoets staat op de vakpagina.   

Deeltoets 1: HTML5 Semantiek en formulieren  
De eerste deeltoets is een mondeling over de HTML (structuur) semantiek en een webformulier. Er moet een artikel pagina en een formulier pagina worden gemaakt voor 1 van de 3 opdrachten. Voor de pagina's kunnen de benodigde files hieronder gedownload worden. In de Contents Matrix staat met geel aangegeven welke pagina's uitgewerkt moeten worden.

De pagina's bevat alle onderwerpen zoals die in de eerste 2 lessen zijn behandeld (zie hiervoor de lesprogramma's van les 1 en 2):

De website is gemaakt met behulp van HTML5  
De website bevat alle onderwerpen zoals die in de lessen is behandeld: - Data - HTML5, Semantics, structuur elementen, Audio en/of Video en Webforms.
HTML5 moet correct gevalideerd zijn, danwel je moet kunnen uitleggen hoe je een error melding van een validator kan oplossen.

###5 Terugkijken - 20 minuten (200/200)
Materiaal Laptop en internet    
Opstelling Werkeilanden waar twee duo’s aan kunnen zitten  

Deelopdracht  
Wat moet je af hebben voor de volgende les?  

Wat hebben we geleerd?  

Lesdoelen behandelen en stof herhalen  

Huiswerk aankondigen  

volgende week aankondigen

hoe ver zijn ze met hun eindopdracht?

Herkansers inplannen

