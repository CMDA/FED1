< section >
# /* no comment */
###### Frontend development - les 7

!

# /* no comment */
###### Frontend development - les 7
Deze les gaat over:  

<img src="kledingvoorschriften" alt="kledingvoorschriften">


!

# /* no comment */
###### Frontend development - les 7

## Programma (200 minuten)
1. Introduktie (5)
2. College (30)
3. Weekly Nerd (30)
4. Klussen (120)
5. Terugkijken (10)


!

# 1. Introduktie - 5 minuten
###### Frontend development - les 7

## Lesdoelen
- 
- 
- 



!

# 2. College - 30 minuten
###### Frontend development - les 7

College [titel](http://cmda.github.io/FED1/Colleges/???.html)
Over wat is CSS (ookalweer)? Over CSS3 Bling en over Selectors

<img src="assests/StoelenEnTafels1College01" width="100%" alt="College opstelling">

!

# 3. Weekly Nerd - 30 minuten
###### Frontend development - les 7
Iedere les gaan we artikelen bespreken in kleine groepen. 

Je wordt beoordeeld op je kennis niveau en inbreng tijdens de sessie. 
Van de 7 sessies mag je er *niet* meer dan 1 missen of onvoldoende halen. 
Als je niet voldoet aan de criteria voor de Weekly Nerd 
dan moet dit onderdeel herkanst worden met een tentamen.

<img src="assets/StoelenEnTafels2WeeklyNerd01.jpg" width="100%" alt="Discussie rondje">

!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Artikelen voor vandaag

* [artikel](link)
* 



!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Wie zit waar?

lijst op laten zien



!

# 4 Klussen - 120 minuten
###### Frontend development - les 7
Laptop en internet  
Opstelling werkeilanden van 6 personen - duo's zitten naast elkaar

<img src="assets/StoelenEnTafels3Klussen01.jpg" width="100%" alt="9 groepen van 6">


!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 7.1 - 15 minuten
## Semantic Markup #1 

Tekst en uitleg


!

### Bespreken Opdracht 7.1
## Semantic Markup #1 

Tekst en uitleg
Voorbeeld van studenten in Dabblet tonen.
Antwoord in Dablet tonen

!

# 5. Terugkijken 20 minuten
###### Frontend development - les 7

Wat hebben we behandeld (lesdoelen)?

*
*
* 


!

##### 5. Terugkijken (20 - 200/200 minuten)
# Huiswerk aankondigen

  
* **Klussen** Hoe ver moet je zijn?
    1. Artikel pagina
    2. Formulier pagina


!

## op.


< / section >







!

!

!

#OLD OLD OLD 
#2013 programma

!

#Les 7: \<img> is everything
Deze les gaat over Layout & Interactie. Les 7 gaat dieper in op het gebruik van javascript om de interface aan te passen aan de verschillen tussen apparaten.  
We gaan aan de slag met Javascript: Feature detection (Modernizr) en het dynamisch toevoegen en weghalen van classes.

##Docenten
David de Vries  
Vasilis van Gemert  
Joost Faber  

##Lesdoelen

* Feature detection met Modernizr classes toevoegen en weghalen (college)
* Een bezinning op webdesign en development (artikel/discussie)
* Oefenen met feature detection/Modernizr (aan de slag)

##Programma (200 minuten)

1. Intro (10)
2. College (30)
3. Discussie (30)
4. Aan de slag (110)
5. Terugkijken, Eindtoets bespreken (20)

###1 Intro - 10 minuten (10/200)
Feedbackrondje

1. Lesprogramma
2. Lesstructuur
3. Discussie sessie
4. Werkdruk
5. Mondelinge deeltoetsen
6. Overige 

###2 College - 30 minuten (40/200)
**Materiaal:** Papier en pen voor aantekeningen  
**Opstelling:** College opstelling    

* Samenvatting van de behandelde stof
* Feauture detection met Modernizr
* Classes toevoegen en weghalen met javascript
* Uitstapje naar verdergaande HTML5 technieken


**Design principes van HTML5**   
Do not reinvent the wheel:  Pave the cowpaths > If it ain’t broke, don’t fix it  
In case of conflict, consider:  users > authors >implementers > specifiers > theoretical purity

**Wat hebben we behandeld?**   
HTML5: Semantics en nieuwe elementen  
CSS3: Opacity and color, Border-radius, Schaduwen, Transforms, Transitions  
CSS3 Selectors: Descendant, child, adjacent, Attribute, :nth-child(), :nth-of-type(), :checked, :before, :after, Pseudo-elements  
Layout: Floats, Display, Positioning, Flexbox     
Responsive layout: Fluid layouts, Flexibele units (em, procenten en viewport), Media-queries (kon al vanaf 2007 op Opera, nu is dat echt toepasbaar)  
Responsive Design: Responsive layout (wat doet een websit als het scherm kleiner of groter was), Met Feature detection wordt het Reponsive Design, Progressive enhancement (je begint met de basis, alle browsers begrijpen dat, daarna css die alle basis browsers begrijpen, daarna voeg je CSS3 toe voor moderne browsers, daarna voeg je iets toe voor devices die daar iets mee kunnen, vb Geo location)

We zijn begonnen met vormgeving, daarna layout. Als je begint met een klein scherm is alleen vormgeving belangrijk, als het scherm groter maakt wordt layout belangrijk. 

_Resource:_  
[http://html5forwebdesigners.com](http://html5forwebdesigners.com)

**Selectors**  
General sibling selector ~  
Adjacent selector +  
Direct child selector >  
Attribur selector [“”]  

_Css Selector tool:_   
http://twostepmedia.co.uk/cssselectors/

**Pseudo classes**  
nth-child  
nth-of-type  
:checked  
:hover  

**Pseudo elementen**  
:before  
:after  

**Conditionele CSS/JavaScript**  
Conditonele comments  
Feauture detection  

**Conditionele comments**  
Alle browsers negeren dit omdat het in een commentaar regel staat  
Alleen voor internet explorer  
\<!--[if IE]>iets voor IE<![end]-->  
\<!--[if lt IE 9]>iets voor ... <![end]--> lt = less then, als het IE8 of lager is  
\<!--[if lte IE 8]>iets voor ... <![end]--> lte = less then & equal  
\<!--[if gt IE 8]>iets voor ... <![end]--> gt = greater then  

**Feauture detection**  
Modernizr  
<script src=‘modernizr.js’></script>  
<html class=’no-js’>  
<html class=’js no-touch geolocation>  

###3 Discussie - 30 minuten (70/200)
**Materiaal:** Papier en pen voor aantekeningen  
**Werkvorm:**  Noteer een stelling of vraag en/of vat de artikelen samen  

**Artikelen:**  
[http://alistapart.com/article/taking-advantage-of-html5-and-css3-with-modernizr](http://alistapart.com/article/taking-advantage-of-html5-and-css3-with-modernizr) 

Wat is Modernizr?
Wat kan je ermee?
Waarom heb je dit nodig voor Repsonsive Webdesign?
. . .

[http://www.markboulton.co.uk/journal/responsive-summit-workflow](http://www.markboulton.co.uk/journal/responsive-summit-workflow)  
[http://www.markboulton.co.uk/journal/comments/responsive-summit-the-one-tool](http://www.markboulton.co.uk/journal/comments/responsive-summit-the-one-tool)

Wat verandert er aan de workflow van een bedrijf door responsive design?

Met welke tool werk jij? Meteen in html? Pen en papier?   
Hoeveel leg je (van te voren) vast en hoeveel (mag) ontstaan tijdens het maakproces?

[http://alistapart.com/article/dao](http://alistapart.com/article/dao)  
Same old new medium?

Controlling Web Pages

Adaptability is Accessibility

The journey begins by letting go of control, and becoming flexible.

###4 Aan de slag - 110 minuten (180/200)
**Materiaal:** Laptop en internet  
**Opstelling:** Werkeilanden waar twee duo’s aan kunnen zitten

####Opdracht 1 - 30 minuten

1. Voeg het modernizr script toe aan je html. De source daarvan is modernizr.min.js  
2. Zorg er voor dat browsers die géén boxshadow ondersteunen wel een border zien  
3. Browsers die text-stadow ondersteunen hebben witte letters met een grijze text-shadow

####Opdracht 2 - 30 minuten

1. Zorg er voor dat gebruikers met Internet Explorer 8 en lager een bredere layout te zien krijgen
2. Zorg er voor dat deze gebruikers een melding te zien krijgen waarin ze links naar andere browsers aangeboden krijgen. Andere gebruikers zien deze melding niet.

####Opdracht 3 - 30 minuten

1. Voeg het [conditioner.js](http://conditionerjs.com/) script toe aan je html.
2. Laat een element verschijnen op het moment dat het in beeld kom.

###5 Terugkijken, eindtoets bespreken 20 minuten (200/200)
**Wat hebben we vandaag geleerd?**

* Feauture detection met Modernizr (college)
* Classes toevoegen en weghalen met javascript (college)
* Een bezinning op webdesign en development (artikel/discussie)
* Introductie Javascript (aan de slag)
* Oefenen met feature detection/Modernizr (aan de slag)
* Oefenen met classes weghalen en toevoegen met javascript (aan de slag)

**Wat hebben we met de hele cursus geleerd?**

Aan het eind van de cursus zijn studenten in staat om een ontwerp technisch uit te werken in een website die voldoet aan de huidige technische ontwikkelingen. De website past zich automatisch aan aan de verschillende eigenschappen van verschillende apparaten, zoals desktop, mobile en tablet. De website kunnen ze maken met behulp van de webtechnieken HTML5, CSS3 en Javascript en deze technieken worden volgens de juiste semantiek en gevalideerd toegepast.  Voor het maken van de website zijn studenten in staat betrouwbare bronnen te zoeken en raadplegen en de studenten zijn in staat code van anderen te lezen en te hergebruiken.  
Tot slot is de student op de hoogte van de huidige ontwikkelingen en kan bronnen raadplegen om op de hoogte te blijven.

**Eindtoets**  
De student is in staat om een ontwerp technisch uit te werken in een website die voldoet aan de huidige technische ontwikkelingen. De website past zich automatisch aan aan eigenschappen van verschillende apparaten, zoals desktop, mobile en tablet. 

Voor de eindtoets moet de artikelpagina en formulierpagina verder worden uitgewerkt:

**Criteria eindtoets**  
De website is gemaakt met behulp van HTML5, CSS3 en Javascript. 
De website staat op GitHub   
De website bevat alle onderwerpen zoals die in de lessen worden behandeld:  

* Data : HTML5, Semantics, structuur elementen, Audio en/of Video en Webforms.
* Vormgeving : CSS3, Effecten, Transities, **Selectors, Pseudo classes, Hovers, Focus en Pseudo elements**  
* Layout & Interactie : CSS3, Responsive layout, Media queries, Modernizr
* HTML5 is correct gevalideerd!  
* De layout en vormgeving is adaptive en past zich aan aan de scherm grootte. 
* Er wordt correct gebruik gemaakt van verschillende Media queries.
* Met behulp van javascript worden events gebruikt voor apparaat afhankelijke interactieve mogelijkheden.

**Criteria in één zin**  
De artikelpagina en formulierpagina moeten responsive zijn. Het web bestaat uit verhoudingen, niet absolute waardes. Aanpassen aan scherm breedte en scherm hoogte. Ontwerp beslissingen maken. Layout is belangrijker dan styling. Touch en no-touch 

**Hoe ver moet je nu zijn?**  
2 opgemaakte pagina’s met layout in verhoudingen (les 4 en les 5)  
Extra HTML toevoegen (zie vakpagina/eindopdracht)  
Verschillende layouts voor verschillende resoluties maken (Adaptive layout met behulp van Media queries - les 6)   Pagina’s in verhoudingen opbouwen / flexibele units (les 5 en 6)  
Pagina’s optimaliseren voor touch (Feature detection - les 7)  
Mooi maken met style elementen (zie vakpagina/eindopdracht)  

**Weekly Nerd - Artikelen lezen en bespreken**  
De student is op de hoogte van de huidige ontwikkelingen en kan bronnen raadplegen om op de hoogte te blijven.

**Criteria**  
Studenten mogen niet meer dan 1 sessie missen. Als studenten onvoldoende hebben gepresteerd tijdens de besprekingen of meerdere sessies hebben gemist dan moet dit onderdeel worden herkanst met een tentamen. Het tentamen is een toets over alle artikelen die zijn behandeld. 

Aantekeningen mag je meenemen.

**Herkansing**  
Voorbeeld vraag:

Vragen over het artikel Responsive Workflow van Mark Boulton  
1 - a) De schrijver vertelt op een gegeven moment dat de ‘oude’ workflow (ontwerp methode) voor het vormgeven van een webpagina niet werkt voor responsive design.     
Hoe heet deze manier van werken en wat houdt deze oude workflow precies in?

1 - b) Waar ligt volgens Mark Boulton het probleem binnen deze workflow? En leg uit of je hier mee eens bent en waarom.
