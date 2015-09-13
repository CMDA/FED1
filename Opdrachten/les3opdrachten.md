
## Coden - Opdracht les 3
###### Frontend development - les 3
#Box model, Units & typografie

1. [Box model](#2)
2. [Units](#3)
2. [Typografie](#4)

!

## Coden - Opdracht 3.1
###### Frontend development - les 3

###Titel

In deze oefening ga je 



**Resources**    

* Resource: [CSS Positioning 101 by Noah Stokes](http://alistapart.com/article/css-positioning-101)

!




##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.2.1 - 10 minuten
## Positioning: Floating

Positioneer de artikelen en/of projecten (onder de header) naast elkaar. 
**Gebruik float ...**

<img src="assets/4.2.1.png" width="100%" alt="floating">

**Resources**
[box-sizing](http://css-tricks.com/box-sizing/) 
[all about floats](http://css-tricks.com/all-about-floats/)


!

### Bespreken Opdracht 4.2.1
## Positioning: Floating

Voorbeeld in [Dablet](http://dabblet.com/gist/0992755f1152de27b4e9)

    float: left;
    clear: left;
    
of

    float: left;
    float: right;
    clear: both;


!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.2.2 - 10 minuten
## Positioning: Position

Positioneer de artikelen en/of projecten (onder de header) naast elkaar. 
**Gebruik position ...**

<img src="assets/4.2.2.png" width="100%" alt="positioning">


**Resources**
[positioning](http://css-tricks.com/almanac/properties/p/position/)
[absolute positioning inside relative positioning](http://css-tricks.com/absolute-positioning-inside-relative-positioning/)


!

### Bespreken Opdracht 4.2.2
## Positioning: Position

Voorbeeld in [Dablet](http://dabblet.com/gist/b7ad46cb2843bb5b5e83)

    position: relative;
    top: ... ;
    left: ... ;

!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.2.3 - 10 minuten
## Positioning: Display: Inline block

Positioneer de artikelen en/of projecten (onder de header) naast elkaar. 
**Gebruik inline-block ...**

<img src="assets/4.2.3.png" width="100%" alt="inline block">


**Resources**
[display](http://css-tricks.com/almanac/properties/d/display/)
[inline block](http://css-tricks.com/snippets/css/cross-browser-inline-block/)


!

### Bespreken Opdracht 4.2.3
## Positioning: Display: Inline block

Voorbeeld in [Dablet](http://dabblet.com/gist/6321f539abb0664e2ae0)


    display: inline-block;
    vertical-align: top;

!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.3 - 50 minuten
## Units: The Flexible Web

I know so little about you - Ethan Marcotte, Responsive Web Design

*(t)he control which designers know in the print medium, 
and often desire in the web medium, 
is simply a function of the limitation of the printed page. 
We should embrace the fact that the web doesn’t have the same constraints, 
and design for this flexibility. 
But first, we must “accept the ebb and flow of thing.” 
- John Allsop, A Dao of Web Design*

<img src="assets/4.3Iknowsolittleaboutyou.jpg" width="100%" alt="I know so little about you">



!

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

!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.3.1 - 20 minuten
## Units: Flexible typesetting
### I know so little about you

Je weet niet hoe groot je gebruiker de tekst wil lezen. 
Wel wil je de verhoudingen bepalen. 

Maak dit na, en gebruik EM waardes:

<img src="assets/4.3.1.png" width="100%" alt="I know so little about you - read more">

    <h1>I know so little about you.<a href=”#”>Read More &gt;</a></h1>

    background-color: #eee
    h1: 24 px, #333
    a: 10 px, uppercase, #666


**Resources**
[Font size px - em - % - pt](http://css-tricks.com/css-font-size/)


!


### Bespreken Opdracht 4.3.1
## Units for Typografie: Flexible typesetting
### I know so little about you

Voorbeeld in [Dablet](http://dabblet.com/gist/f9bc9f740e89db92f28c)


    Verhouding is target / context = result 
    Standaard web font, 100% = 16px
    h1 : 24/16=1.5

    24px is 1,5 groter dan 16px

    a : 10/16 = 0.626 ? Nee 

    verhouding ten opzicht van de context: a zit in de H1 
    a: 10/24 = 0.416666667 

!



##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.3.2 - 10 minuten
## Units voor layout: Easy to Read

Zet de tekst voor het artikel op een goed leesbare grootte 
en bepaal de lengte van de zinnen. 
Gebruik de EM waarde. 
Staat de regelafstand goed? 

Je weet niet hoe groot je gebruiker de tekst wil lezen. 
Wel wil je de verhoudingen bepalen. 
Kan het ietsje minder? Window Licking?

<img src="assets/4.3.2.png" width="100%" alt="Easy to read">

**Resources**
[Viewport sized Typography](http://css-tricks.com/viewport-sized-typography/)
[Em or REM](http://nerd.vasilis.nl/use-em-rem-right-use-cases/)
[Theres more to the css REM unit than font sizing](http://css-tricks.com/theres-more-to-the-css-rem-unit-than-font-sizing/)

!


### Bespreken Opdracht 4.3.2
## Units voor layout: Easy to Read

Voorbeeld in [Dablet](http://dabblet.com/gist/fad9c1a6c78c3842259c)

    font-size: 1.2em;
    line-height: 1.2em;
	max-width: 26em;

!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 4.3.3 - 10 minuten
## Units voor layout

Zet de tekst van het artikel in meerdere kolommen, 
en bepaal de verhoudingen in em of rem. 
Hoe breed moeten de kolommen zijn voor een goede regellengte?
Hoeveel ruimte moet er tussen de kolommen?

<img src="assets/4.3.3.png" width="100%" alt="Easy to read column">

**Resources**
[CSS Columns](http://css-tricks.com/guide-responsive-friendly-css-columns/)


!


### Bespreken Opdracht 4.3.3
## Units voor layout

Voorbeeld in [Dablet](http://dabblet.com/gist/127115c338ee05559b4f)

	line-height: 1.2em;
    
	column-width: 24rem;
	column-gap: 2em;
	
    height: 52vh;
	width: 100%; 

!



###Meer resources

* Resource: 


