

## Coden - Opdracht 1.1
###### Frontend development - les 1
#Artikel- & Formulierpagina maken in HTML 5



!

## Coden - Opdracht 1.1
###### Frontend development - les 1

### 1. Maak een **Artikelpagina** in HTML 5
Zet het PDF file [artikelpagina.pdf](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/Artikelpagina%20-%20Opleiding%2020140908.pdf) om in een HTML pagina. Gebruik de juiste HTML 5 elementen. Vermijd het gebruik van < div >.

**Resources**

* Resource: [Importance of sections by Heydon Pickering](http://www.smashingmagazine.com/2013/01/18/the-importance-of-sections/)  
* [HTML5 Cheatsheet](http://www.testking.com/techking/infographics/ultimate-html5-cheatsheat/)  
* [HTML5 element flowchart - Section content](http://html5doctor.com/downloads/h5d-sectioning-flowchart.pdf)


!

## Coden - Opdracht 1.1
###### Frontend development - les 1

### 2. Maak een **Formulierpagina** in HTML 5
Zet het PDF file [formulier.pdf](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/Formulierpagina%20-%20Aanmelden%2020140908.pdf) om in een HTML pagina en maak het formulier met valide, toegankelijke HTML. Gebruik labels voor de verschillende elementen.

**Resources**

* Resource [Dive intro HTML 5 Forms By Mark Pilgrim](http://diveintohtml5.info/forms.html)


!

## Coden - Opdracht 1.1
###### Frontend development - les 1

### 3. Valideer de Artikelpagina en de Formulierpagina 
En verbeter de fouten.


**Resources**

* [http://validator.w3.org](http://validator.w3.org)  
* [http://html5.validator.nu/](http://html5.validator.nu/)  




!

###Meer resources



!

###Opmerkingen over HTML5 sematiek

Gebruik de HTML5 tags: Nav, Section, Article, Aside, Footer en bedenk welke content daarin hoort.

Wanneer is een pagina een html pagina? Met: HTML, HEAD, BODY tags/elementen

De doctype-tag staat helemaal bovenaan een HTML document, nog boven de < html > tag. Het zorgt ervoor dat de browser weet welke HTML-variant er wordt gebruikt.
Zo weet een validator op basis van welke regels het document moet worden beoordeeld.
Voeg de doctype toe ...
... en valideer je pagina, kijken wat er gebeurt:


Header in een Section en het gebruik van de H1.
Probeer ook de HTML 5 Outliner


Developers tools voor de browser:

Safari:

Developer
W3C Validator
Firebug lite
Resize me
Firefox:

Webdev extensions
Firebug
Webdeveloper
Chrome:

Web development extensions
Webdeveloper
Firebug Lite




!

###Opmerkingen over formulieren

Waar zitten de fieldsets? 
Met de fieldset groepeer je content die thematisch bij elkaar hoort.

Een < legend > geeft aan waar het fieldset over gaat. Een titel van de fieldset. Dit element is primair gekoppeld aan de fieldset.

Kloppen de label/input paren?
Een label is gekoppeld aan een input of textarea. Dit is ook belangrijk voor screenreaders. Handig voor gebruik is dat je op een label kan klikken om een element focus te geven.

Met required (bool) geef je aan welke form elementen verplicht zijn (overigens kun je die ook heel makkelijk stylen).

Het attribuut placeholder kun je heel eenvoudig een standaard tekst in een input laten zien. Oude browsers negeren dit.

Bij het number type krijg je in sommige browsers automatisch pijltjes naast het element. Als je geen pijltjes wil, bijvoorbeeld omdat je dit lelijk vindt, zou je een pattern kunnen gebruiken. Dan geef je met een regular-expression aan wat de gebruiker mag invullen... Let op, browsers verwerken dit niet allemaal hetzelfde.

Color type en date geven in sommige browsers een color picker en calender object.

Op mobiele telefoons, verandert het toetsenbord afhankelijk van het type dat je meegeeft. Bijvoorbeeld type="email" geeft een toetsenbord met een @, type="number" geeft een numeriek toetsenbord. Vasilis is helemaal fan van type="date" op iOS. Probeer dit maar eens met de verschillende HTML5 input types .... (OS heeft voor de mac een Iphone emulator die je kan gebruiken met de development kit.)

Bij type="search" laat IOS bijvoorbeeld standaard een x (clear) in het field zien: Handig!

