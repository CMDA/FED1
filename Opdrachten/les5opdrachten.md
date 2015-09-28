


## Coden - Opdrachten les 5
###### Frontend development - les 5

#Javascript ClassList Object & de Query Selector


0. [Atribute selector toepassen](#2)
1. [Javascript ClassList Object](#3)
2. [Eindopdracht beschrijving](#4)


!

## Coden - Opdracht 5.1
###### Frontend development - les 5

###Attributes selector toepassen

#### Download een pdf file - plaatje dynamisch tonen

In opdrachten van les 2 heb je geleerd hoe je in CSS met de Attribute selector en before/after content 'in je HTML schrijven'.

In deze oefening gaan we dat nogmaals gebruiken. Met het pseudo element Content kun je dynamisch HTML stylen. Als bv een download link eindigt op .pdf dan kun je met CSS een icoontje plaatsen.

Je hebt deze HTML bij de '3 related projects' in de formulier-pagina:

	<h4>Downloads</h4>
      <ul>
		<li><a href="bron.pdf" data-kb="1267">project_CMDA_Moet_ik_rennen.pdf</a> (1.3MB)</li>
		<li><a href="bron.vcf">Contactgegevens_CMDA_Moet_ik_rennen.vcf</a></li>
		<li><a href="bron.jpg" data-kb="569">Poster_CMDA_Moet_ik_rennen.jpg</a> (569KB)</li>
	  </ul>

Zorg er voor dat je bij de pdf en/of vcf en/of jpg link een bijhorend plaatje toont. Dat ziet er zo uit:

<img src="assets/5.1downloadPdfFile.png" alt="Download PDF file">



**Resource**

* [Attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors?redirectlocale=en-US&redirectslug=CSS%2FAttribute_selectors)
* [Pseudo Element: Content](http://css-tricks.com/css-content/)
* [plaatje pdf download](http://www.adobe.com/images/shared/product_mnemonics/50x50/acrobat_reader_50x50.gif)
* [plaatje vcf download](http://www.sentinel-it.nl/Images/vcard-icon.png)
* [plaatje jpg download](http://www.yudanaka-shibuonsen.com/userfiles/image/jpg.png)
<!-- * [spoiler] Dat ziet er ongeveer [zo](http://dabblet.com/gist/77c4ad3f79e24b0dce8b) uit -->


!

## Coden - Opdracht 5.2
###### Frontend development - les 5

###Javascript ClassList Object aanspreken met de Query selector functie

#### Fieldset toggelen

a) In deze oefening gaan we met de Javascript Classlist object en de query selector een Fieldset in je formulier toggelen. (aan/uit zetten)
Afhankelijk van de keuze van een gebruiker kun je dan een ander deel van het formulier tonen.

1. Maak een Css class aan die een fieldset laat zien en/of verbergt
2. Voeg een Javascript file aan je Formulier pagina toe
3. Schrijf een functie die een classlist toevoegt aan de fieldset
    Tips:
    * Gebruik de querySelector om de juiste Fieldset te selecteren 
    * Gebruik de querySelector om de button of radio-button te selecteren
    * Koppel de functie die de toggle uitvoert


b) Kun jij de toggle ook met een animatie maken?


**Resources** 

* Resource: [Manipulating classes using the class list API by Matt West](http://blog.teamtreehouse.com/manipulating-classes-using-classlist-api)
* Resource: [We Don’t Need Classes by Heydon Pickering](http://www.smashingmagazine.com/2012/06/classes-where-were-going-we-dont-need-classes/)
* [Pseudo class selectors](http://css-tricks.com/pseudo-class-selectors/)
* [Document.QuerySelectors](https://developer.mozilla.org/en-US/docs/Web/API/document.querySelector)
* [Element.QuerySelectors](https://developer.mozilla.org/en-US/docs/Web/API/element.querySelector)



<!-- Antwoord in [Dablet](http://dabblet.com/gist/e1f0e90f3020aef83c9b) -->



!


###Eindopdracht beschrijving

De eindtoets is een mondeling over Reponsive Design. Voor deze toets moeten de artikel- en formulierpagina worden uitgewerkt. De artikelpagina heeft een 1. header, 2. main met artikel, 3. footer, 4. sidebar, 5. section met 5 gerelateerde artikelen. De formulierpagina heeft een 1. header, 2. main met formulier, 3. footer, 4. sidebar, 5 section met drie studentenprojecten.
De artikelpagina en formulierpagina moeten responsive zijn. Het web bestaat uit verhoudingen, niet uit absolute waardes. De layout past zich aan aan de scherm-breedte en scherm-hoogte. je moet ontwerp beslissingen maken. Layout is belangrijker dan styling.  Er moet een layout worden  gemaakt voor minimaal 3 breakpoints. De twee pagina's moeten minimaal op je laptop en één touch apparaat worden gepresenteerd.

De eindopdracht wordt, net als deeltoets 1 en 2 in een mondeling getoetst. De docent bevraagt de student en beoordeelt het gemaakte werk op kwaliteit, uitleg en beargumentatie van gekozen (technische) oplossingen en ontwerppatronen.

De website bevat alle onderwerpen zoals die in de lessen zijn behandeld:

* De website is gemaakt met behulp van HTML5, CSS3 en Javascript
* De pagina's bevatten alle HTML zoals die is aangeleverd
* HTML5 moet correct gevalideerd zijn, danwel je moet kunnen uitleggen hoe je een error melding van een validator kan oplossen
* De CSS3 wordt extern ingeladen
* Met behulp van javascript worden dynamisch classes toegevoegd of weggehaald
* De layout en vormgeving past zich aan aan de schermgrootte
* Er wordt correct gebruik gemaakt van verschillende Media queries om 3 breakpoints vorm te geven



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

###Meer resources

* Resource: 
* 
###Inspiratie




