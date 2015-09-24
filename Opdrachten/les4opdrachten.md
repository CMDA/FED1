


## Coden - Opdrachten les 4
###### Frontend development - les 3
#Media queries & Flexbox


0. [Flexbox](#2)
1. [Media queries](#3)

!

## Coden - Opdracht 4.1
###### Frontend development - les 4


###Flexbox

Vorige week heb je geëxperimenteerd met positioning, float en display inline block om de layout aan te passen. Vandaag krijg je nog een methode: de Flexbox.

a) Experimenteer met de Flexbox op de header: Zet alle items in de Header op een rij. Draai daarna de volgorde om, het laatste items vooraan (links) en de eerste achteraan (rechts). Kun je de 6 elementen ook zo naast elkaar plaatsen dat ze netjes horizontaal worden uitgelijnd? Ook als je het browser venster kleiner of groter maakt?

b) In de 5 'related' articles van de artikel-pagina staat een footer met de auteur-informatie. Kun je deze ook onder aan het artikel zetten met behulp van de Flexbox? 


* Resource: [A complete guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* Resource: [Flexbox insights](http://buildawesomewebsites.com/blog/46104/flexbox-insights)
* [Flexbox - Can I Use?](http://caniuse.com/#feat=flexbox) 


!

## Coden - Opdracht 4.2
###### Frontend development - les 4


###Media queries
De artikel- en formulierpagina heb je in les 2 en 3 gestyled naar goed leesbare content, met goede font-groottes, regel-lengte en line-height. Misschien wat schaduw en een blinky border-radius?

Met behulp van Media querie kun je verschillende breakpoints maken. Werk nu vanaf mobiel naar bredere schermen. Bepaal de verschillende Media queries. Vanaf welke breedte ga je over naar een andere layout? Dat kan bijvoorbeeld als de regels te lang worden en er genoeg (wit)ruimte is om een kolom naast het artikel te plaatsen. Maak minimaal 3 breakpoints met behulp van Media queries, en maak voor elke een geschikte layout.

Op de volgende pagina staat een [wireframe voorbeeld](#4) van hou de pagina's eruit kunnen komen te zien.


**Resources**    

* Resource: [How To Use CSS3 Media Queries To Create a Mobile Version of Your Website by Rachel Andrew ](http://www.smashingmagazine.com/2010/07/how-to-use-css3-media-queries-to-create-a-mobile-version-of-your-website/)
* [Media queries](https://css-tricks.com/css-media-queries/)
* [W3C Media Queries Specs](http://www.w3.org/TR/css3-mediaqueries/)

!

###Voorbeeld layouts van verschillende schermgroottes voor de artikelpagina.

<a href="https://raw.githubusercontent.com/CMDA/FED1/gh-pages/Opdrachten/assets/4.1%20Wireframe%20Intranet%20responsive%20design%201.png">
Deze breakpoints gaan we maken:
<img src="assets/4.1 Wireframe Intranet responsive design 1.png" width="100%" alt=""></a>

<a href="https://raw.githubusercontent.com/CMDA/FED1/gh-pages/Opdrachten/assets/4.2%20Wireframe%20Intranet%20responsive%20design%202.png">
Zo kunnen de verschillende layouts er uit zien:
<img src="assets/4.2 Wireframe Intranet responsive design 2.png" width="100%" alt=""></a>

<a href="https://raw.githubusercontent.com/CMDA/FED1/gh-pages/Opdrachten/assets/4.3%20Wireframe%20Intranet%20wireframe.png">
Voorbeeld van 3 wireframe schetsen voor de breakpoints:
<img src="assets/4.3 Wireframe Intranet wireframe.png" width="100%" alt=""></a>

!

###Stappenplan en checklist

1. Wat doe je met de Header in een smal scherm?
2. Waar gaat de Sidebar heen als het scherm breed is?
3. Hoe staan de sections met Projecten of related content?
4. Wat gebeurt er als de gebruiker de pagina gaat zoomen?

1. Zorg ervoor dat de Meta Viewport goed staat, waar is die ook alweer voor?

1. Pas de marges en/of padding van de pagina aan in de mobile view (deze mogen dichter op de rand van je telefoon - probeer maar eens)
2. Heb je goede leesbare teksten voor mobiel (font-size, line-height, regel-lengte)
3. Hoeveel ruimte heeft de header nodig op mobiel?
4. Misschien wil je van de project-artikelen en related-artikelen op mobiel wel alleen de titel laten zien? Met een toggle inklappen/uitklappen ?

1. Zijn de regels van het < main > artikel niet te lang?
2. Hoeveel ruimte heeft de header nu nodig, en wat staat er in? 
3. Kunnen de project-artikelen en related-artikelen in meedere kolommen naast elkaar?

* Wat werkt goed op mobiel?
* Hoe groot mogen die input-velden?
* Animatie op tab, als het input-veld een focus krijgt?
* De input-velden de hele breedte laten gebruiken op mobiel werkt vaak goed

1. Hoe ziet het formulier er uit op een breder scherm?


!


###Meer resources

* Resource: [Learn CSS layout](http://learnlayout.com/toc.html)
* Resource: [What the Flexbox?! by Wes Bos](http://flexbox.io/)
* Resource: [Solved by Flexbox by Philip Walton](https://philipwalton.github.io/solved-by-flexbox/)
* Resource: [The EMs have it: Proportional Media Queries by Lyza Gardner](http://blog.cloudfour.com/the-ems-have-it-proportional-media-queries-ftw/)

###Inspiratie

* Flexbox voorbeeld ronw/column/order responsive [Michele's experiment](http://www.michele.nl/flexbox)
* Layout en design voorbeelden [Mediagueri.es](http://www.mediaqueri.es)





