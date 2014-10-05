< section >
# You are the CSS to my HTML
###### Frontend development - les 5

!

# You are the CSS to my HTML
###### Frontend development - les 5
Deze les gaat over de principes van het web, the multi screen world 
en we gaan aan de slag met Mediaqueries.

<img src="http://images.cdn.bigcartel.com/bigcartel/product_images/66597677/max_h-1000+max_w-1000/CSStoHTMLSlate_2445.jpg" alt="kledingvoorschriften">


!

# You are the CSS to my HTML
###### Frontend development - les 5

## Programma (200 minuten)
1. Introduktie (5)
2. College (30)
3. Weekly Nerd (30)
4. Klussen (120)
5. Terugkijken (10)


!

# 1. Introduktie - 5 minuten
###### Frontend development - les 5

## Lesdoelen
* Leren over responsive design
* Layout veranderen voor verschillende schermresoluties met mediaqueries
* Mobile first gedachte
* Deeltoets 2 afnemen: formatieve toets: 
Wat is je niveau? 
Ken je de CSS3 bling? 
Kun je selectors gebruiken en uitleggen? 
Weet je hoe het Javscript Classlist object en de query selectors werken?
Begrijp je de Flexbox?  
(Een formatieve toets heeft de functie een oordeel over de kennis en vaardigheden van een leerling uit te spreken)

!

# 1. Introduktie - 5 minuten
###### Frontend development - les 2

##Deeltoets 2
- De deeltoets wordt **tijdens de les** afgenomen
- Het **schema komt op bord**, achter in de klas
- **10 minuten per duo**
- Toetsen **terwijl de klas doorwerkt** aan de lesopdrachten
  
nb. Zorg dat je je _**documenten open**_ hebt in je editor

nb. _**Vergroot je font**_, zodat 3 mensen je code kunnen lezen

nb. Mocht het onverhoopt misgaan - _**48 uur later herkansen**_


!

# 2. College - 30 minuten
###### Frontend development - les 5

College [You are the CSS to my HTML](http://cmda.github.io/FED1/Colleges/les5-you-are-the-CSS-to-my-HTML/index.html)
Over de principes van het web, over Mobile first, over Mediaqueries en Responsive design

<img src="assets/StoelenEnTafels1College01.jpg" width="100%" alt="College opstelling">

!

# 3. Weekly Nerd - 30 minuten
###### Frontend development - les 5
Iedere les gaan we artikelen bespreken in kleine groepen. 

Je wordt beoordeeld op je kennis niveau en inbreng tijdens de sessie. 
Van de 7 sessies mag je er *niet* meer dan 1 missen of onvoldoende halen. 
Als je niet voldoet aan de criteria voor de Weekly Nerd 
dan moet dit onderdeel herkanst worden met een tentamen.

<img src="assets/StoelenEnTafels2WeeklyNerd01.jpg" width="100%" alt="Discussie rondje">

!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Artikelen voor vandaag

* [Responsive Design tips & tricks by Andreas Bovens](https://vimeo.com/48433478)
* [Fixed vs Fluid vs Elastic layout by Kayla Knight](http://www.smashingmagazine.com/2009/06/02/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/)
* [How To Use CSS3 Media Queries To Create a Mobile Version of Your Website by Rachel Andrew ](http://www.smashingmagazine.com/2010/07/19/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/)





!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Wie zit waar?

lijst op Drive laten zien



!

# 4 Klussen - 120 minuten
###### Frontend development - les 5

###Klussen
Laptop en internet  
Opstelling werkeilanden van 6 personen - **nieuwe** duo's zitten naast elkaar


###Deeltoets 1
- De deeltoets wordt **tijdens de les** afgenomen
- Het **schema komt op bord**, achter in de klas
- **10 minuten per duo**
- Toetsen **terwijl de klas doorwerkt** aan de lesopdrachten


<img src="assets/StoelenEnTafels3Klussen01.jpg" width="100%" alt="9 groepen van 6">


!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 5.1 - 30 minuten
## Mobile first: Artikelpagina

Je artikelpagina bestaat nu uit 

* Een header - met nav, titel, logo, search en meer
* Het hoofdartikel - in een < main >
* 5 nieuws-artikelen - in een < aside > of < section >
* 3 project-artikelen - in een < aside > of < section >

[Voorbeeldplaatje HMTL Artikelpagina]()

**Maak je artikelpagina Mobile first**

1. Pas de marges en/of padding van de pagina aan (deze mogen dichter op de rand van je telefoon - probeer maar eens)
2. Goede leesbare teksten voor mobiel (font-size, line-height, regel-lengte)
3. Hoeveel ruimte heeft de header nodig op mobiel?
4. Misschien wil je van de project-artikelen en nieuws-artikelen op mobiel wel alleen de titel laten zien? Met een toggle inklappen/uitklappen ?

!

### Bespreken Opdracht 5.1
## Mobile first: Artikelpagina

Voorbeeld mobiele view van een website.

* Marges en Padding op 0, of weinig
* Hoe groot staat de letter?
* Line-height?
* Lengte van de zinnen hoef je je meestal niet druk om te maken
staan er meer dan 10 woorden in één zin?
Is de max-width 24-26em? (easy-to-read-column les 4)


!

##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 5.2 - 50 minuten
## Tablet view: Artikelpagina

<br>
**Pas de artikelpagina layout aan aan het tablet-formaat met een mediaquery**
    
1. Zijn de regels van het < main > artikel niet te lang?
2. Hoeveel ruimte heeft de header nu nodig, en wat staat er in? 
3. Kunnen de project-artikelen en nieuws-artikelen in 2 kolommen?


!

### Bespreken Opdracht 5.2
## Tablet view: Artikelpagina

**Mediaquery**

Zet de Meta Viewport

    <meta name="viewport" content="width=device-width, initial-scale=1">
    
<br>
Bepaal de Mediaquery. Vanaf welke breedte ga je over?

    @media (min-width: 30em) {
    body {
            max-width: 50em;
	   }
    }

!

##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 5.3 - 30 minuten
## Mobile first: Formulierpagina

Je formulierpagina bestaat nu uit

* Een header, met nav, titel, logo, search en meer
* Het formulier, in een < main >
* Misschien wil je op de formulierpagina ook een serie voorbeeld projecten laten zien? 
Voeg dan de 3 project-artikelen toen aan de formulierpagina ...

[Voorbeeldplaatje HTML Formulierpagina]()

**Maak je formulierpagina Mobile first**
    
1. Pas de marges en/of padding van de pagina aan
2. Met goede bedienbare input-velden
3. Hoeveel ruimte heeft de header nodig op mobiel?    


!

### Bespreken Opdracht 5.3
## Mobile first: Formulierpagina

Voorbeeld formulier in een mobiele view.

* Wat werkt goed op mobiel?
* Hoe groot mogen die input-velden?
* Animatie op tab, als het input-veld een focus krijgt?
* De input-velden de hele breedte laten gebruiken op mobiel werkt vaak goed


!

##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 5.4 - 50 minuten
## Tablet view: Formulierpagina

<br>
**Pas de formulierpagina-layout aan aan het tablet-formaat met een mediaquery**

1. Hoe ziet het formulier er uit op een breder scherm?
2. Hoeveel ruimte heeft de header nu nodig, en wat staat er in? 
3. ?

!

### Bespreken Opdracht 5.4
## Tablet view: Formulierpagina

Zet de Meta Viewport en de Mediaquerie

*  


!

# 5. Terugkijken 20 minuten
###### Frontend development - les 5

Wat hebben we behandeld (lesdoelen)?

* Leren over responsive design
* Layout veranderen voor verschillende schermresoluties met mediaqueries
* Mobile first gedachte


!

##### 5. Terugkijken (20 - 200/200 minuten)
# Huiswerk aankondigen

* **Weekly Nerd** voorbereiden:  
  Lezen wat op Moodle staat bij les 6.
  
* **Klussen** Maak de opdrachten van deze les af. 
    Volgende week gaan we verder met Responsive design 
  
* **Deeltoets 2** niet gehaald?
    ≈ 48 uur is de herkansing. Zie je rooster.


1. **Groep 1** Koop & David -  donderdag  09:20 - 11:50
2. **Groep 2** Sanne & Jan -  donderdag	09:20 - 11:50
3. **Groep 3** Koop & Vasilis -  donderdag 12:00 - 14:30
4. **Groep 4** David & Jonathan -  donderdag 12:00 - 14:30
5. **Groep 5** Vasilis & Jonathan -  vrijdag 10:20 - 12:50

!

## op.

<br>
< / section >
