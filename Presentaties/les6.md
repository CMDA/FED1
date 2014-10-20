< section >
# < img > is everything
###### Frontend development - les 6

!

# < img > is everything
###### Frontend development - les 6
Deze les gaat over responsive images, het picture element en feature detection, je leert bijvoorbeeld hoe je kan testen of je website op een smartphone wordt bekeken, met touch interactie.  

<img src="http://image.spreadshirt.com/image-server/v1/products/110856978/views/1,width=280,height=280.png/lt-img-gt-is-everything-1850.png" alt="kledingvoorschriften">


!

# < img > is everything
###### Frontend development - les 6

## Programma (200 minuten)
1. Introduktie (5)
2. College (30)
3. Weekly Nerd (30)
4. Klussen (120)
5. Terugkijken (10)


!

# 1. Introduktie - 5 minuten
###### Frontend development - les 6

## Lesdoelen
- Leren over Responsive images
- Leren over Feature detection
- Lezen over Responsive design problems
- Werken met (proportionele) Mediaqueries 


!

# 2. College - 30 minuten
###### Frontend development - les 6

College [titel](http://cmda.github.io/FED1/Colleges/les6-img-is-everything/index.html)
Over plaatjes

<img src="assets/StoelenEnTafels1College01.jpg" width="100%" alt="College opstelling">

!

# 3. Weekly Nerd - 30 minuten
###### Frontend development - les 6
Iedere les gaan we artikelen bespreken in kleine groepen. 

Je wordt beoordeeld op je kennis niveau en inbreng tijdens de sessie. 
Van de 7 sessies mag je er *niet* meer dan 1 missen of onvoldoende halen. 
Als je niet voldoet aan de criteria voor de Weekly Nerd 
dan moet dit onderdeel herkanst worden met een tentamen.

<img src="assets/StoelenEnTafels2WeeklyNerd01.jpg" width="100%" alt="Discussie rondje">

!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Artikelen voor vandaag

* [Responsive navigation patterns by Brad Frost](http://bradfrostweb.com/blog/web/responsive-nav-patterns/)
* [11 reasons why Responsive Design isn’t that cool by Juan Pablo Sarmiento](http://www.webdesignshock.com/responsive-design-problems/)
* [Native responsive Images by Yoav Weiss](https://dev.opera.com/articles/native-responsive-images/)
* [The EMs have it: Proportional Media Queries by Lyza Gardner](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)



!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Wie zit waar?

lijst op Drive laten zien



!

# 4 Klussen - 120 minuten
###### Frontend development - les 6
Laptop en internet  
Opstelling werkeilanden van 6 personen - duo's zitten naast elkaar

<img src="assets/StoelenEnTafels3Klussen01.jpg" width="100%" alt="9 groepen van 6">


!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 6.1 - 10 minuten
## HTML toevoegen

Voor de eindopdracht moeten aan de artikel- en formulierpagina nog een footer en aside informatie worden toegevoegd.

!

### Opdracht 6.1
## HTML toevoegen: Artikelpagina

De Artikelpagina bestaat  uit:

- Header
- Main: Artikel + plaatjes < [toevoegen](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/plaatjes)
- Section: 3 projecten
- Section: 5 nieuws-artikelen
- Sidebar < [toevoegen](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/Sidebar.html)
- Footer < [toevoegen](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/Footer.html)

!


### Opdracht 6.1
## HTML toevoegen: Formulierpagina

De Formulierpagina bestaat  uit:

- Header
- Main: Formulier
- Section: 3 projecten < [toevoegen](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/Projecten.html)
- Sidebar < [toevoegen](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/Sidebar.html)
- Footer < [toevoegen](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/Footer.html)


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


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 6.4 - 30 minuten
## Feature detection

Feauture detection met [Modernizr](http://modernizr.com/)

    <script src=‘modernizr.js’></script>
    <html class=’no-js’>
    <html class=’js no-touch geolocation>


1. Voeg het modernizr script toe. [http://modernizr.com](http://modernizr.com)
2. Zorg er voor dat de marges op Smartphone en Tablet worden aangepast (immers, op touch apparaten heb je eigenlijk al marges)
3. Marges op een desktop wil je wel om de website (teksten) te laten ademen

Om te oefenen:

1. Zorg er voor dat browsers die géén boxshadow ondersteunen wel een border zien
2. Browsers die text-stadow ondersteunen hebben witte letters met een grijze text-shadow


!



### Bespreken Opdracht 6.2
### Opdracht 6.4
## Feature detection

Tekst en uitleg

Voorbeeld in Dablet tonen


!





# 5. Terugkijken 20 minuten
###### Frontend development - les 6

Wat hebben we behandeld (lesdoelen)?

- Leren over Responsive images < Voor de Fronted nerds
- Leren over Feature detection
- Lezen over Responsive design problems
- Werken met (proportionele) Mediaqueries 

!

##### 5. Terugkijken (20 - 200/200 minuten)
# Huiswerk aankondigen

* **Weekly Nerd** voorbereiden:  
  Lezen wat op Moodle staat bij les 7.
  
* **Klussen** Hoe ver moet je zijn?

Artikel- en Formulierpagina hebben extra HTML.

Vandaag ben je begonnen met (proportionele) mediaqueries, die moet je thuis afmaken voor 3 schermgroottes.

Volgende week gaan we verder met Feature detection toevoegen 
en we gaan (responsive) Images en Video toevoegen aan de Artikelpagina.

Dan is je responsive design af...



!


##### 5. Terugkijken (20 - 200/200 minuten)
# Feedback verzamelen

<br>
## Stickies
Schrijf je feedback op een sticky en plak op het bord.


<strong style="background-color:yellow">Feedback op werkwijze</strong>
Lesprogramma, lesstructuur, discussiesessie, werkdruk?  

<strong style="background-color:PaleGreen">Feedback op deeltoets 1 & 2 </strong> 
Mondeling duidelijk? Over de feedback?   

<strong style="background-color:pink">Anders?</strong>
Honger? Dorst? none-of-the-above?


!


## op.


< / section >




