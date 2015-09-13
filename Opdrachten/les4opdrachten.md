

!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 6.2 - 50 minuten
## Proportionele medaqueries: Artikelpagina

Zet je artikelpagina op met proportionele mediaqueries

Zoals deze zijn beschreven in het artikel
[The EMs have it: Proportional Media Queries by Lyza Gardner](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)

Stappenplan:

1. Waar gaat de Sidebar heen als het scherm breed is?
2. Hoe staan de sections met Projecten en Nieuwartikelen?
3. Wat doe je met de Header in een smal scherm?
5. Wat gebeurt er als de gebruiker de pagina gaat zoomen?



!

### Bespreken Opdracht 6.2
### Opdracht 6.2
## Proportionele medaqueries: Artikelpagina

(veelvoorkomende) Vragen uit de klas op het bord tonen

!

##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 6.3 - 50 minuten
## Proportionele medaqueries: Formulierpagina

Zet je formulierpagina op met proportionele mediaqueries

Stappenplan:

1. Staan alle onderdelen goed met de CSS die je voor de artikelpagina hebt gemaakt?
2. Pas je formulier aan aan de schermbreedte/hoogte


!



### Bespreken Opdracht 6.2
### Opdracht 6.3
## Proportionele medaqueries: Formulierpagina

(veelvoorkomende) Vragen uit de klas op het bord tonen

!





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
Bepaal de Mediaquery. Vanaf welke breedte ga je over naar een andere layout?

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

Bepaal de Mediaquery. Vanaf welke breedte ga je de layout aanpassen?


!



!

##### 4. Klussen (deel 1: 70 - 135/200 minuten)
### Opdracht 2.7.3 - 10 minuten
## Attribute selectors: Required sterretje

Hoe ging dit ook alweer?

**Toon met CSS dynamisch iets op het scherm**

Voeg dit toe aan **je formulier** pagina*:  
Zorg ervoor dat er een rood sterretje komt te staan bij de required input velden. 
Gebruik hiervoor de attribute selector.

	<label for="naam">Naam</label>
	<input type="text" id="naam" required>

    <label for="email">Email</label>
	<input type="email" id="email" required>  

*tenzij het al op je formulier staat natuurlijk.	


**Resources** 
[Pseudo Element: Before & After](http://css-tricks.com/almanac/selectors/a/after-and-before/)
[Attribute Selector](http://css-tricks.com/attribute-selectors/)
[Pseudo Class Selector: Required](http://css-tricks.com/almanac/selectors/r/required/)


!

### Bespreken Opdracht 2.7.3
## Required sterretje

<!--dablet uitleg-->
Dat ziet er [zo](http://dabblet.com/gist/dc930a11e879bf6d2ef9) uit.

    /* 
    Dit blok zorgt er voor dat er een rood sterretje komt te 
    staan voor/achter de elementen die hieraan voldoen:
    Een element met het attribuut for="naam"
    Een element met het attribuut for="email"
    */
    
    [for="naam"]:before,
    [for="email"]:after {
	   content: " *";
	   color: red;
	   font-size: 2em;
    }
    

!

##### 4. Klussen (deel 1: 70 - 135/200 minuten)
### Opdracht 3.1 - 20 minuten
## Attribute selectors: Download PDF file

In opdracht 2.7 van vorige les zat de opdracht met het *.
In CSS kun je met de Attribute selector en before/after content 'in je HTML schrijven'.

In deze oefening gaan we dat nogmaals gebruiken. Met het pseudo element Content kun je dynamisch je HTML stylen. Als bv een download link eindigt op .pdf dan kun je met CSS een icoontje plaatsen en het aantal kb's.

Je hebt deze HTML

    <a href=“http://example.com/file.pdf” data-kb=“1337”>A white paper</a>

Zorg er voor dat dit er zo uit komt te zien 

<img src="assets/3.1downloadPdfFile.png" width="100%" alt="Download PDF file">


**Resources**
[Pseudo Element: Content](http://css-tricks.com/css-content/)



!

### Bespreken Opdracht 3.1
## Download een pdf file

Antwoord in [Dablet](http://dabblet.com/gist/77c4ad3f79e24b0dce8b).

Laat zien hoe content werkt: zowel met “content tussen quotes”, 
als met de url() en de attr() functies en combinaties daarvan.



!

##### 4. Klussen (deel 2: 50 - 185/200 minuten)
### Opdracht 3.3 - 50 minuten
## Flexbox

In deze opdracht gaan we experimenteren met Flexbox. 

Voeg eerst deze HTML toe aan je artikel-pagina, Stop dit in je header:
1. Nav met menu-items in een < ul >
2. Titel van de pagina
3. Beschrijving
3. Logo
4. Formulier met zoekveld
5. Naam van een persoon die is ingelogd, met een link naar zij/haar profielpagina

[Hier](../Maakopdracht/header.html) staat voorbeeld HTML. Of pak het van Github: [header.html](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht)

!

##### 4. Klussen (deel 2: 50 - 185/200 minuten)
### Opdracht 3.3 - 50 minuten
## Flexbox

Flexbox, [Can I Use?](http://caniuse.com/#feat=flexbox) 


**Resources**
[A guide to Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)


!





##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.1 - 10 minuten
## Flexbox toepassen op artikelen

Voeg deze HTML toe aan je artikel-pagina:
[Artikelen](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/Artikelen.html) 
en [Projecten](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/Projecten.html).

Nu gaan we de auteur-informatie, die in het footer-element staat, 
onderaan het artikel zetten met behulp van de Flexbox.

    <article>
        <header></header>
        <footer></footer> <<< TOON FOOTER ONDERAAN ARTICLE
        <section>
            <p></p>
        </section>
    </article>
!

### Bespreken Opdracht 4.1
## Flexbox toepassen op artikelen

Voorbeeld in [Dablet](http://dabblet.com/gist/64c00123c655a866ce24)

	display: flex;
	flex-direction: column;
	/*justify-content: space-between;
	align-items: flex-start;*/

    order: 1

!






### Opdracht 3.3.1
## Flexbox: perfect centering

Maak alle elementen in de header even breed/hoog, bv 200px/200px

En centreer de elementen in het midden.

    display
    child: margin: auto

Zorg dat het er zo uit komt te zien: 
<img src="assets/3.3.1.png" width="100%" alt="Flexbox example">



!

### Bespreken Opdracht 3.3.1
## Flexbox: perfect centering

Antwoord in [Dablet](http://dabblet.com/gist/72f1c1ce513026d36e67)

    header{ 
        display: flex; 
    }
    child { 
        margin: auto; 
    }


!

### Opdracht 3.3.2
## Flexbox: Flex-direction

Zet de volgorde van de 6 items andersom,
het laatste items vooraan (links) en de eerste achteraan (rechts)

    flex-direction: row | row-reverse | column | column-reverse;

Dat ziet er zo uit: 
<img src="assets/3.3.2.png" width="100%" alt="Flexbox example">

!

### Bespreken Opdracht 3.3.2
## Flexbox: Flex-direction

Antwoord in [Dablet](http://dabblet.com/gist/e90a247fc8c019aff341)

    header{ 
        display: flex; 
        flex-direction: row-reverse; 
    }


!

### Opdracht 3.3.3
## Flexbox: justify-content

Zorg dat alle 6 items netjes horizontaal verdeeld worden, zonder dat je marges aan de child elementen meegeeft. Zet die marge op 0.

    justify-content: flex-start | flex-end | center | space-between | space-around;

Dat ziet er zo uit: 
<img src="assets/3.3.3.png" width="100%" alt="Flexbox example">



!

### Bespreken Opdracht 3.3.3
## Flexbox: justify-content

Antwoord in [Dablet](http://dabblet.com/gist/547ee2eb7ea4d05cf263)

    header{ 
        display: flex; 
        justify-content: flex-end;
    }



!

### Opdracht 3.3.4
## Flexbox: align-items

Maak de hoogte van de 6 items variable, afhankelijk van de content.
Zet de items allemaal onder aan de header.

    align-items: flex-start | flex-end | center | baseline | stretch;

Dat ziet er zo uit: 
<img src="assets/3.3.4.png" width="100%" alt="Flexbox example">


!

### Bespreken Opdracht 3.3.4
## Flexbox: align-items

Antwoord in [Dablet](http://dabblet.com/gist/5d905d60ad8780fb3335)

    header{ 
        display: flex; 
        align-items: flex-end;
    }

!

### Opdracht 3.3.5
## Flexbox: order

Verander nu de volgorde van de 6 items: 
Zet de section met het logo vooraan zonder in de HTML te prutsen ...


    order

Dat ziet er zo uit: 
<img src="assets/3.3.5.png" width="100%" alt="Flexbox example">


!

### Bespreken Opdracht 3.3.5
## Flexbox: order

Antwoord in [Dablet](http://dabblet.com/gist/2deaa9390b8a6051af1a)


    child {
        order: <integer>;
    }

!

### Opdracht 3.3.6
## Flexbox: netjes flex-wrap

Zet de 6 elementen naast elkaar, behoudt de fixed breedte/hoogte. Zorg ervoor dat ze netjes horizontaal worden uitgelijnd, ook als je het browser venster kleiner/groter maakt.

    display
    flex-direction
    flex-wrap
    justify-content


<img src="assets/3.3.6.png" width="100%" alt="Flexbox example">


**Resources**
[A guide to Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)



!

### Bespreken Opdracht 3.3.
## Flexbox: netjes flex-wrap

Antwoord in [Dablet](http://dabblet.com/gist/796748defc249089ce4a)

Kun je ook een paar items breder maken?
Bijvoorbeeld de Nav en H1?
    
    child {
        flex-grow: <number>; /* default 0 */
        }



##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 3.3.6 - 10 minuten
## Flexbox: netjes flex-wrap

Laatste opdracht uit les 3 herhalen

**Hoe werkt de Flex Wrap?** Zet de 6 elementen naast elkaar, behoudt de fixed breedte/hoogte. Zorg ervoor dat ze netjes horizontaal worden uitgelijnd, ook als je het browser venster kleiner/groter maakt.

    display
    flex-direction
    flex-wrap
    justify-content


<img src="assets/3.3.6.png" width="100%" alt="Flexbox example">

**Resources**
[A guide to Flexbox](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)



!

### Bespreken Opdracht 3.3.6
## Flexbox: netjes flex-wrap

Antwoord in [Dablet](http://dabblet.com/gist/796748defc249089ce4a)

Kun je ook een paar items breder maken?
Bijvoorbeeld de Nav en H1?
    
    child {
        flex-grow: <number>; /* default 0 */
        }

!


