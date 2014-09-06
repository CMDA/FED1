# You are the CSS to my HTML
###### Frontend development - les 5

!

# You are the CSS to my HTML

Deze les gaat over de principes van het web, the multi screen world.
We gaan beginnen met Responsive Webdesign met behulp van Media queries.



!

# You are the CSS to my HTML
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

[College You are the CSS to my HTML](http://cmda.github.io/FED1/Colleges/les1-gimme-a-fucking-br/index.html)
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

#Les 5: Display:none;


##Docenten
David de Vries  
Vasilis van Gemert  
Joost Faber  

##Lesdoelen
1. Leren over layout met CSS, floating, positioning, display (college)
2. Introductie over responsive design, of apaptive design (artikel/discussie)
3. Fonts in verhouding/em (aan de slag)
4. Layout in verhouding/em (aan de slag)
5. Positionering van elementen (aan de slag)


##Programma (200 minuten)
1. Intro + feedback (10)
2. College (30)
3. Discussie (30)
4. Aan de slag + Deeltoets 2 mondeling (120)
5. Terugkijken (10) 

###1 College - 30 minuten (30/200)
Materiaal Papier en pen voor aantekeningen  
Opstelling College opstelling

####Display: none: Layout met CSS.

We hebben het gehad over HTMl structuur. Les 1 en 2.  
We hebben het gehad over vormgeving en CSS3 bling bling. Les 3 en 4.  
Nu gaan we het hebben over Layout. Verhoudingen tussen objecten op je pagina. Hoe verhouden onderdelen van je ontwerp zich tot elkaar. belangrijk voor hoe je website zich moet gedragen op verschillende scherm groottes.  

Vroeger werd voor een layout vaak een Table misbruikt.  
Tegenwoordig gebruik je Hacks... Eigenlijk zijn er (nog) geen layout mogelijkheden in CSS. Dit gaat nog wel komen. CSS hacks, nu te gebruiken om een layout te gebruiken:  
*** Floating  
* Positioning  
* Display  **

**Floating: [http://dabblet.com/gist/1974771](http://dabblet.com/gist/1974771)**  
Met een Float kun je objecten links of rechts plaatsen. Andere content float er omheen. Het is bedoelt om plaatjes in een tekst te zetten. bv. Love nonsens www.lovenonsense.com > klik op de letter l  
Met het gebruik van floats onderstaan er vaak ‘gekke’ dingen. Een float kun/moet je met een clear ‘opheffen’.  

**Positioning: [http://dabblet.com/gist/1974849](http://dabblet.com/gist/1974849)**  
Positioning kan een element een absolute waarde krijgen, of relatief ten opzichte van het parent element. Positioning is niet geschikt voor dynamische layout: Als je niet weet hoe groot een scherm is kun je niet een een absolute waarde geven. Ook haal je met een positioning het element uit een flow, waardoor andere elementen hier niet meer op reageren, ze hebben geen invloed op de rest van de content.  
Wel bijvoorbeeld een menu dat links boven een specifieke positie moet hebben.  

**Display: [http://dabblet.com/gist/1974861](Display: http://dabblet.com/gist/1974861)**  
Display is hoe een element zich gedraagt. Je hebt none, block, inline, of inline-block.   
Met Block gedraagt een element zich als een blok.  
Met Inline blijft een element op dezelfde regel staan als andere elementen.  
Inline block is geschikt voor layout. Met inline-block kun je hetzelfde als met float, zonder dat je een clear nodig hebt. Het is makkelijk. Nadeel is een spatie die tussen de blokken blijft staan.   
Er zijn nog meer obscure display types, bijvoorbeeld display: table, dan gedragen elementen zich zoals in een table structuur.  

####In de toekomst krijg je meer (interessante) layout mogelijkheden:
**Grid-layout**  
	Geef aan hoe je layout op je pagina moet worden  
	het maakt dan niet meer uit waar je code in de html staat, bv:  
		&nbsp;&nbsp;&nbsp;A A A  
		&nbsp;&nbsp;&nbsp;B B C  
		&nbsp;&nbsp;&nbsp;D D D  
**Flex-box**   
	Met flex-box geef je aan hoe elementen zich in een elementen gedragen  
**Regions**  
	Met regions geef je ‘gebieden’ aan die een bepaalde vormgeving krijgen.    Bijvoorbeeld dat tekst ergens ‘tussendoor loopt’

###2 Discussie - 30 minuten (60/200)

**Artikel: The real world responsive design by Stephan Hay**

**Vragen**

Wat is een Media Querie?  
Waar gebruik je deze voor?  

Wat is het verschil tussen Responsive Design vs. Adaptive Layout?  
- Adaptive layout is onderdeel van Responsive Design  
- Responsive Design is progressive enhancement  
- Gaat ook over dikke vingers, features: geo location, formulieren input types  

Graceful degredation = iets prachtig verzinnen en rekening met oudere browser dmv. fall backs.     

Progressive enhancement = site optimaliseren voor de functies van het betreffende apparaat.  

wat is  Mobile First?  
Is het goed om eerst voor Mobile te ontwerpen?  
Of is het structuur/inhoud eerst?  

Hoe ontwerp je een website? Nog steeds met Photoshop?  

4 vragen:  
Wie is de gebruiker?  	
Wat is de omgeving?  
Welke content?  
Wat hebben ze nodig?  

###3 Aan de slag + Deeltoets 2 - 120 minuten (190/200)
 
> (t)he control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn’t have the same constraints, and design for this flexibility. But first, we must “accept the ebb and flow of thing.” - John Allsop, A Dao of Web Design

**Responsive design?**  

1. A flexible, grid based layout > opdracht 1,2  
2. Flexible images and media > opdracht 3 ?  
3. Media queries > Les 6  


####Opdracht 1 - Flexible typesetting / Font verhouding - 20 minuten


Maak onderstaande title + read more link na met de juiste font verhouding, kleur, spatiëring etcetera.  
**gebruik em waarde!**

<h1> I know so little about you. <a href=”#” style="font-size:10px">Read More &raquo;</a></h1>

**Code:**  
\<h1\> I know so little about you. \<a href=”#” style="font-size:10px">Read More &raquo;\</a>\</h1>

background-color: #eee  
h1: 24 px, #222
a: 10 px, uppercase, #999

####Opdracht 2 - flexible grid - 60 minuten


Maak de hier afgebeelde pagina na in HTML5: [https://github.com/CMDA/FED1/blob/master/assets/flexible-grid.png](https://github.com/CMDA/FED1/blob/master/assets/flexible-grid.png)  
Positioneer de elementen door middel van een float.  

2a. Gebruik **em** voor de verhoudingen van breedtes, marges en/of padding. 

2b. Doe hetzelfde met **procenten**.


####Opdracht 3 - floating, positioning en inline-block - 30 minuten

Floating: [http://dabblet.com/gist/1974771](http://dabblet.com/gist/1974771)

Positioning: [http://dabblet.com/gist/1974849](http://dabblet.com/gist/1974849)

Inline-blok: [http://dabblet.com/gist/1974861](http://dabblet.com/gist/1974861)


####Opdracht 4 - Flexbox

Positioneer de html elementen uit opdracht 1 met behulp van Flexbox.

**Resources:**
 
[http://css-tricks.com/snippets/css/a-guide-to-flexbox/](http://css-tricks.com/snippets/css/a-guide-to-flexbox/)  
[http://the-echoplex.net/flexyboxes/](http://the-echoplex.net/flexyboxes/)




#### Deeltoets 2

**Deeltoets 2: CSS3 en vormgeving**  
De tweede deeltoets is een mondeling over vormgeving met CSS3. Voor deze toets moeten de artikel- en formulierpagina verder worden uitgewerkt met CSS3.  
De artikelpagina moeten worden opgemaakt door gebruik te maken van (direct) child-, sibling-, en andere selectors (zonder classes en ID's). Voor de formulierpagina moeten onderdelen van het formulier worden opgemaakt met border-radius, box- en text-shadow, transitions, attribute-selectors en pseudo-elements. Transforms zijn optioneel maar mogen in allebei de documenten gebruikt worden.

De pagina's bevat alle onderwerpen zoals die in de lessen 3 en 4 zijn behandeld.
 

###5 Terugkijken 10 minuten (200/200)

**Huiswerk aankondigen:**  
Download en installeer onderstaande emulator voor mobile testing:  
Voor Windows-gebruikers: [https://developer.android.com/sdk/index.html](https://developer.android.com/sdk/index.html)  
Hier een uitleg: [https://developer.android.com/guide/developing/devices/emulator.html](https://developer.android.com/guide/developing/devices/emulator.html)  
 Voor OSX-gebruikers: [https://developer.apple.com/xcode/index.php](https://developer.apple.com/xcode/index.php)  
In Xcode zit de simulator.

**Volgende stap:** 

Docs en materiaal op intranet voor volgende week. Zet de footer, menu en aside informatie in je artikelpagina en formulierpagina.