
## Coden - Opdrachten les 3
###### Frontend development - les 3
#Box model, Units & typografie (& nieuwe HTML)


0. [Nieuwe HTML](#2)
1. [Box model](#3)
2. [Typografie](#4)
3. [Units](#5)

!

## Coden - Nieuwe HTML
###### Frontend development - les 3

<br>
Voor de CSS opdrachten van deze week moet je [deze](https://github.com/CMDA/FED1/tree/gh-pages/Opdrachten/html) html-pagina's gebruiken. Dit zijn de artikel- en formulierpagina zoals je die zelf al hebt gemaakt, maar dan met extra HTML erbij ... 

Naast de main krijg je een header, footer en aside. Ook zijn aan de artikelpagina 5 gerelateerde artikelen toegevoegd, na het lezen van het artikel is de bezoeker misschien geïnteresseerd nog een paar artikelen op de site te lezen? 
Aan de formulierpagina zijn 3 voorbeeld projecten toegevoegd, het idee hierbij is dat als een bezoeker deze pagina bezoekt, ook een paar voorbeelden van projecten bekijken kunnen worden.

* [Artikelpagina.html](https://github.com/CMDA/FED1/blob/gh-pages/Opdrachten/html/Arikelpagina.html)
* [Formulierpagina.html](https://github.com/CMDA/FED1/blob/gh-pages/Opdrachten/html/Formulierpagina.html)



!

## Coden - Opdracht 3.1
###### Frontend development - les 3

###Box model

In deze oefening ga je de 5 gerelateerde artikelen naast elkaar tonen. Gebruik hiervoor de float, positioning en de inline-block methode. Wat is het verschil? Wat valt je op aan het gebruik van deze methoden?

Dit kun je natuurlijk ook toepassen op andere elementen: Toon de gerelateerde artkelen (of projecten) samen met de mededelingen & agenda-items van de aside, in  blokken naast en onder elkaar, afhankelijk van de breedte van het scherm. Dit kan een interessante layout zijn als bv de pagina heel breed is ... 1440 pixels? 1920 pixels?


<img src="assets/3.1Wireframe projecten mededelingen agenda items.png" width="100%" alt="">


**Resources**    

* Resource: [CSS Positioning 101 by Noah Stokes](http://alistapart.com/article/css-positioning-101)
* [box-sizing](http://css-tricks.com/box-sizing/) 
* [all about floats](http://css-tricks.com/all-about-floats/)
* [positioning](http://css-tricks.com/almanac/properties/p/position/)
* [display](http://css-tricks.com/almanac/properties/d/display/)
* [inline block](http://css-tricks.com/snippets/css/cross-browser-inline-block/)

!

## Coden - Opdracht 3.2
###### Frontend development - les 3

###Typografie: Easy to Read

Zet de tekst van het artikel op een goed leesbare grootte en bepaal de verhoudingen van de verschillende H elementen. 
Bepaal de lengte van de zinnen. 
Gebruik de EM waarde. 
Staat de regelafstand goed? 

Je weet niet hoe groot je gebruiker de tekst wil lezen. 
Wel wil je de verhoudingen bepalen. 
Kan het ietsje minder? Window Licking?



**Resources**

* [Viewport sized Typography](http://css-tricks.com/viewport-sized-typography/)
* [Em or REM](http://nerd.vasilis.nl/use-em-rem-right-use-cases/)
* [Theres more to the css REM unit than font sizing](http://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/)

!



## Coden - Opdracht 3.3
###### Frontend development - les 3

### Units voor layout

Experimenteer met de tekst van het artikel door het in meerdere kolommen te zetten. 
Bepaal de verhoudingen in em of rem. 
Hoe breed moeten de kolommen zijn voor een goede regellengte?
Hoeveel ruimte moet er tussen de kolommen?



**Resources**
[CSS Columns](http://css-tricks.com/guide-responsive-friendly-css-columns/)


!


###Meer resources

* Resource: [Learn CSS layout](http://learnlayout.com/toc.html)



**Reminder**

- Units for Fonts
    - px, EM, %, pt, Keyword
- Units for Layout
    - EM voor max/min breedtes
        - Anything from 45 to 75 characters is widely regarded as a satisfactory length of line
        - a column is easy to read if it's wide enough to accommodate an average of 10 words per line
    - REM voor margins & paddings
        - Altijd gerelateerd aan de grootte van de font-size van het html-element
        - Perfect voor margins en paddings, die gelijk kunnen blijven, ongeacht de font-grootte 
    - Viewport relative units
        - VW - viewport width
        - VH - viewport height
        - VMAX - de grootste van de width of de height
        - VMIN - de kleinste van de width of de height




