
< section >
# < img > is everything
###### Frontend development - les 7

<img src="http://coders.spreadshirt.com/lt-img-gt-is-everything-A3287170/" alt="kledingvoorschriften">

!

# < img > is everything
###### Frontend development - les 7
Deze les gaat over responsive images, het picture element, audio, video en feature detection. Je leert bijvoorbeeld hoe je kan testen of je website op een smartphone wordt bekeken, met touch interactie. 
In de les gaan we doorwerken aan de eindopdracht.


!

#Excellentieprogramma

Zit je in de V1 en kan je meer uitgedaagd worden? Meld je dan nu aan voor het Excellentieprogramma. Joost Faber en Koop Reynders begeleiden je een half jaar met een eigen project.

Meer informatie staat op [www.cmd-amsterdam.nl/excellentie/](https://www.cmd-amsterdam.nl/excellentie/)

<img src="https://github.com/CMDA/FED1/blob/gh-pages/Opdrachten/html/img/cmd_beeldbank_meerdere_02.jpg?raw=true">

!


##### 1. Introduktie (10/200 minuten)
# Wat gaan we vandaag doen?

Programma & leerdoelen voor vandaag:

1. College over Javascript ClassList Object, de Query selector en meer selectors (30)
2. Weekly Nerd: Over Responsive navigation patterns &  fixed, fluid, elastic or a hybrid layout (30)
3. Coden (120)
	- Attribute selector gebruiken
	- Javascript classlist object
	- Mondeling deeltoets 2: formatieve toets: Wat is je niveau? Kun je CSS bling toepassen? Snap je de CSS selectors? Kan je uitleggen hoe het Box model en de Flexbox werkt? Hoe werken Media queries? 
(Een formatieve toets heeft de functie een oordeel over de kennis en vaardigheden van een leerling uit te spreken)



!


# 2. College - 30 minuten
###### Frontend development - les 7

College [You are the CSS to my HTML](http://cmda.github.io/FED1/Colleges/les5-you-are-the-CSS-to-my-HTML/index.html)
over Javascript ClassList Object, de Query selector en meer selectors


!

# 3. Weekly Nerd - 30 minuten
###### Frontend development - les 7
Iedere les gaan we artikelen bespreken in kleine groepen. 

Je wordt beoordeeld op je kennis niveau en inbreng tijdens de sessie. 
Van de 7 sessies mag je er *niet* meer dan 1 missen of een onvoldoende halen. 
Als je niet voldoet aan de criteria voor de Weekly Nerd 
dan moet je dit onderdeel herkansen met een tentamen in lesweek 8.

### Artikelen bespreken in groepjes van 4

* [A new element will make the web faster by Scott Gilbertson](http://arstechnica.com/information-technology/2014/09/how-a-new-html-element-will-make-the-web-faster/)
* [A Dao of Web Design by John Allsopp ](http://alistapart.com/article/dao)



!

# 4. Coden
###### Frontend development - les 7

[Klik hier voor opdrachten voor les 7](http://cmda.github.io/FED1/Opdrachten/les7-opdrachten.html)

Opdracht 7 bestaat uit: 



< / section >



!
!
!
!



## Feature detection
Met Feature detection kun je bepalen wat een browser wel en niet kan. 
Vervolgens kun je een specifieke style uitvoeren.


1. Voeg het modernizr script toe. [http://modernizr.com](http://modernizr.com)
2. Zorg er voor dat de marges op Smartphone en Tablet worden aangepast (immers, op touch apparaten heb je eigenlijk al marges)
3. Marges op een desktop wil je wel om de website (teksten) te laten ademen


**Tekst en uitleg**

* Modernizr script checkt of er features beschikbaar zijn.
* It adds classes to the html element that explain precisely what features are and are not natively supported

        <script src=‘modernizr.js’></script>
        <html class=’no-js’>
        <html class=’js no-touch geolocation> 


[Features detected by Modernizr](http://modernizr.com/docs/#s2)
* Dan kun je een style aanpassen die de marges op een touch device aanpast.

        .touch {
            margin: 0 1em;
        }

!



## Responsive images

Gebruik srcset om verschillende .jpg files te tonen op verschillende schermgroottes

Gebruik voor deze oefening

* [picture fed 480 pixels](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/plaatjes/picture_fed_480.png)
* [picture fed 800 pixels](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/plaatjes/picture_fed_800.png)
* [picture fed 1280 pixels](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/plaatjes/picture_fed_1280.png)
* [picture fed 1600 pixels](https://github.com/CMDA/FED1/blob/gh-pages/Maakopdracht/plaatjes/picture_fed_1600.png)


**Resources**
[Caniuse Picture-element?](http://caniuse.com/#search=picture) 
[Responsive Images Done Right: A Guide To < picture > And srcset](http://www.smashingmagazine.com/2014/05/14/responsive-images-done-right-guide-picture-srcset/)
[Responsive Images: Use Cases and Documented Code Snippets to Get You Started](https://dev.opera.com/articles/responsive-images/)

**Tekst en uitleg**

    srcset
    sizes
    Wat moet je doen als je Retina hebt?

Antwoord in [Dablet](http://dabblet.com/gist/e173b03e74e908cf3c29)

!

## HTML5 Video 

Plaats onderstaande bronbestanden in een < video > element.
Hij moet voor iedereen met een hedendaagse browser werken.
Zorg voor een fallback voor oude browsers. 

Video bronbestanden staan op [Github](https://github.com/CMDA/FED1/tree/gh-pages/Maakopdracht/videos)


**Resources**
[The Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
[Html5 supported media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)


**Tekst en uitleg**

Antwoord in [Dablet](https://gist.github.com/jorrit5477/2339628) 

Je geeft het video element verschillende source files voor verschillende browser ondersteuning. 
De volgorde is bepalend voor welk file wordt afgespeeld. 
Een browser ‘pakt’ een source als deze wordt herkend. 
Dus bovenaan zet je het ‘belangrijkste’ video file.

De volgorde wordt mp4 als eerste ... 
Mp4 is het kleinste bestand met de hoogste kwaliteit. 
Dat wil je eigenlijk: Meest voor het minst. 
Voor een dubbeltje op de eerste rang zitten.
Dus je bepaalt  de volgorde op basis van de kwaliteit van de video. 
Het file dat bovenaan staat probeert een browser als eerst af te spelen. 
Als dat lukt wordt de rest van de code overgeslagen. 
De ogg versie staat alleen als fallback voor een beperkt aantal oude browsers die dit alleen kunnen lezen. 
Als je deze bovenaan zet wordt deze ook door browsers gepakt die ook mp4 of webm zouden kunnen afspelen. 
En dat wil je niet. ogg is groot en minder van kwaliteit.

track / type / width / height / fallback / controls


**Checklist**

**Just get it working**

* HTML5, Flash, Mobile: MP4/H.264, Baseline profile, 640×480
* HTML5: WebM

**Round it out a little**

* HTML5, Flash: MP4/H.264, High profile
* HTML5: WebM
* Mobile: MP4/H.264, Baseline profile, 480×360 or 640×480

**Support everything well**

* HTML5, Flash: MP4/H.264, High profile
* HTML5: WebM
* HTML5: Ogg
* Mobile: MP4/H.264, Baseline profile, 480×360, for older mobile devices
* Mobile: MP4/H.264, Main profile, 1280×720, for older iOS devices (iPhone 4 and older iPads/Apple TV). The newest devices (iPhone 5, etc) can support the desktop High profile rendition.
* Mobile: 3GP/MPEG4, 320×240 and/or 177×144, for non-smartphones*

[http://blog.zencoder.com/2013/09/13/what-formats-do-i-need-for-html5-video/](http://blog.zencoder.com/2013/09/13/what-formats-do-i-need-for-html5-video/)




!

#Herkansen Weekly Nerd
Tentamen over de artikelen die zijn besproken tijdens de Weekly Nerd. 

* Het tentamen bestaat uit 5 open vragen (a, b, soms c)
* Duur van de toets is maximaal 100 minuten
* Geschreven aantekeningen mag je erbij houden 
* Geen laptop open. Geen mobile en/of tablet 

Het tentamen gaat over deze artikelen: 1.1, 1.2, 2.1, 3.1, 3.2, 3.3, 4.1, 5.1, 5.2, 7.1, 7.2




##gaat over deze artikelen

* 1.1 [Concept to Code: Code literacy in UX by by Ryan Betts](http://uxmag.com/articles/concept-to-code)
* 1.2 [Semantics in HTML 5 by John Allsopp](http://alistapart.com/article/semanticsinhtml5)
* 2.1 [The Design of HTML5 by Jeremy Keith](https://vimeo.com/15755349)
* 3.1 [Using pixels is not very polite by Vasilis van Gemert](http://nerd.vasilis.nl/using-pixels-polite/)
* 3.2 [The 100% Easy-2-Read Standard by Oliver Reichenstein](http://ia.net/blog/100e2r)
* 3.3 [Web Design is 95% Typograph by Oliver Reichenstein](http://ia.net/blog/the-web-is-all-about-typography-period)
* 4.1 [Responsive Design tips & tricks by Andreas Bovens](https://vimeo.com/48433478)
* 5.1 [Fixed vs Fluid vs Elastic layout by Kayla Knight](http://www.smashingmagazine.com/2009/06/02/fixed-vs-fluid-vs-elastic-layout-whats-the-right-one-for-you/)
* 5.2 [Responsive navigation patterns by Brad Frost](http://bradfrostweb.com/blog/web/responsive-nav-patterns/)
* 7.1 [A new element will make the web faster by Scott Gilbertson](http://arstechnica.com/information-technology/2014/09/how-a-new-html-element-will-make-the-web-faster/)
* 7.2 [A Dao of Web Design by John Allsopp ](http://alistapart.com/article/dao)



##Oefenvraag

<br>
*Betreft artikel: 
The 100% Easy-2-Read Standard 
& 
Web Design is 95% Typograph 
by Oliver Reichenstein*


Beschrijf wat volgens het artikel de taak is van een webdesigner. 
Ben je het hiermee eens? Verwoord je mening over de stelling van Oliver Reichstein.

-- taak van de webdesigner (1 punt)

-- Ben je het hiermee eens? (2 punten) 




!


## Waar begonnen we 8 weken geleden?

###Beschrijving van het vak Frontend development
In het vak Frontend development leren studenten een responsive website maken, 
een website die zich automatisch aanpast aan de context, het apparaat, de omgeving en de interactie mogelijkheden. 

###Beschrijving eindopdracht 
Eindopdracht is een responsive website maken van het intranet: 
een artikelpagina en een formulierpagina


## Intentie van het vak (intranet)
Het tweedejaars vak Frontend development is een techniek vak voor design studenten. 
In de propedeuse ligt de nadruk op het maken van een eenvoudige websites. 
Dit vak gaat een stap verder. 

Wat moeten de studenten aan het eind van de cursus kunnen? 
Aan het eind van de cursus zijn studenten in staat een responsive website te maken, 
dat is een website die zich automatisch aanpast aan de context waarin de website wordt bekeken. 
De context wordt bepaald door de verschillende eigenschappen van de verschillende apparaten, 
zoals desktop, mobile en tablet, de interactie mogelijkheden 
en de omgeving waarin de website wordt bekeken. De website kunnen ze maken met behulp van de webtechnieken HTML5, CSS3 en Javascript en deze technieken worden volgens de juiste semantiek en gevalideerd toegepast.  Het vak geeft inzicht in de mogelijkheden en beperkingen van deze technieken. Voor het maken van de website zijn studenten in staat betrouwbare bronnen te zoeken en raadplegen en de studenten zijn in staat code van anderen te lezen en te hergebruiken.



## Wat kun je nu maken?
Stap voor stap heb je geleerd een responsive design te maken.


### Weet je nog Les 1?

Wat kun je over 8 weken?

* [www.tropenmuseum.nl](http://www.tropenmuseum.nl) Voorbeeld Responsive 2011 
* [www.rijksmuseum.nl](http://www.rijksmuseum.nl) Total web experience ? 2013
* [decorrespondent.nl](https://decorrespondent.nl/home#) 100% Leesbaar multi device
* [Komkommersalade](http://vasilis.nl/presentaties/eretail/site/shop.php) Voorbeeld Responsive webshop (P4)


## Inspiratie 

Op de website [mediaqueri.es](http://mediaqueri.es) staan veel voorbeelden van responsive layouts.

De website van het [Rijksmuseum](https://www.rijksmuseum.nl) met de collecties vinden we tof

De [omroep.nl](http://www.omroep.nl) website doet het responsive goed, met plaatjes en video die mooi mee schalen.


Hier kun je mooi zien of jouw website het een beetje mooi doet: 
[ami.responsivedesign.is](http://ami.responsivedesign.is/?url=http%3A%2F%2Fwww.cmd-amsterdam.nl)


## Criteria 

De artikelpagina en formulierpagina moeten responsive zijn. 
Het web bestaat uit verhoudingen, niet uit absolute waardes. 
De layout past zich aan aan de scherm-breedte en scherm-hoogte. 
Je moet ontwerp beslissingen maken.
Layout is belangrijker dan styling.  
De twee pagina's moeten minimaal op je laptop en één touch apparaat worden gepresenteerd.


## Ontwerp beslissingen maken

1. Waar gaat de Sidebar heen als het scherm breed is?
2. Hoe staan de sections met Projecten en Nieuwartikelen?
4. Wat gebeurt er als de gebruiker de pagina gaat zoomen?
5. Pas de marges en/of padding van de pagina aan (deze mogen dichter op de rand van je telefoon - probeer maar eens)
6. Hoeveel ruimte heeft de header nodig op mobiel? tablet?
7. Misschien wil je van de project-artikelen en nieuws-artikelen op mobiel wel alleen de titel laten zien? Met een toggle inklappen/uitklappen ?
8. Is de tekst goed leesbaar?
9. Zijn de regels van het < main > artikel niet te lang?
10. Hoeveel ruimte heeft de header nodig, en wat staat er in? 
11. Kunnen de project-artikelen en nieuws-artikelen in meer kolommen?
12. Hoe ziet het formulier er uit op een breder scherm?


