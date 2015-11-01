
## Coden - Opdracht les 2
###### Frontend development - les 2
#CSS3 Bling Bling & Selectors

1. [Bling Bling doen](#2)
2. [Selectors gebruiken](#3)
2. [Attribute selector toepassen](#4)

!

## Coden - Opdracht 2.1
###### Frontend development - les 2

###Bling Bling

In deze oefening ga je experimenteren met een aantal CSS3 mogelijkheden. Gebruik de border-radius, box-shadow, text-shadow, transform en transition om je pagina mee te stylen. CSS3 biedt veel mogelijkheden voor CSS styling. Door te experimenteren laten we je kennis maken met hoe CSS werkt en wat je er allemaal mee kunt. Een kleine greep uit wat er zoal mogelijk is. Uiteindelijk moet je voor deeltoets 2 minimaal deze 5 methoden toepassen op de artikel- en formulierpagina. En kunnen uitleggen.


###1. Border-radius
[4 opdrachten](http://vasilis.nl/hva/03/oefeningen.html#slide2) om de CSS border-radius te begrijpen.

**Resources**    

* Resource: [The Humble Border-Radius by Lea Verou](https://www.youtube.com/watch?v=JSaMl2OKjfQ/)
* [Border-radius](https://css-tricks.com/almanac/properties/b/border-radius/)
* [Border-radius specifications](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius?redirectlocale=en-US&redirectslug=CSS%2Fborder-radius)
* [Border-radius canIuse?](http://caniuse.com/#search=border-radius)


###2. Box-shadow
[4 opdrachten](http://vasilis.nl/hva/03/oefeningen.html#slide7)   om de CSS box-shadow te begrijpen.   

**Resources**    

* [Box-shadow](https://css-tricks.com/almanac/properties/b/box-shadow/)
* [Box-shadow specs](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow)
* [Box-shadow canIuse?](http://caniuse.com/#search=box-shadow)


###3. Text-shadow
[4 opdrachten](http://vasilis.nl/hva/03/oefeningen.html#slide12) om CSS text-shadow te begrijpen. 


**Resources**    

* [Text-shadow](https://css-tricks.com/almanac/properties/t/text-shadow/)
* [Text-shadow Specs](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
* [Text-shadow canIuse?](http://caniuse.com/#search=text-shadow)


###4. Transforms
[1 opdracht](http://vasilis.nl/hva/03/oefeningen.html#slide17) om CSS transform te begrijpen.


**Resources**    

* [Transform](https://css-tricks.com/almanac/properties/t/transform/)
* [Transform Specs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [Transform canIuse?](http://caniuse.com/#search=transform)


###5. Transitions
[1 opdracht](http://vasilis.nl/hva/03/oefeningen.html#slide19) om CSS transitions te begrijpen.


Spelen met transities:

- Verander de timing delay
- Verander de actergrondkleur
- Verander transparrantie
- Zorg dat alleen de background animeert


**Resources**    

* [Transitions](https://css-tricks.com/almanac/properties/t/transition/)
* [Transitions Specs](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
* [Transitions canIuse?](http://caniuse.com/#search=transitions)



!

## Coden - Opdracht 2.2
###### Frontend development - les 1

###Selectors
Met selectors, sibling combinators, pseudo classes en attribute selectors kun je elementen in de DOM selecteren en stylen. Hieronder staan een aantal experimenten om met deze selectors te oefenen. Het is de bedoeling dat je deze technieken ook gaat toepassen op de artikel- en formulierpagina en deze laat zien tijdens deeltoets 2.


###1. Child selectors en sibling combinators

Child selectors en sibling combinators [oefening](http://dabblet.com/gist/1864659)

**Resources**    

* [Direct child selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_selectors) >
* [Adjacent sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors) +
* De artikelpagina moet er ongeveer [zo](http://dabblet.com/gist/1864548) uitzien


###2. Attribute selectors

Attribute selectors and bling [oefening](http://dabblet.com/gist/1865805)

**Resources**    

* [Attribute selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors?redirectlocale=en-US&redirectslug=CSS%2FAttribute_selectors) [attr]
* De formulierpagina moet er ongeveer [zo](http://dabblet.com/gist/1865228) uitzien


!

## Coden - Opdracht 2.3
###### Frontend development - les 2

###Attributes selector toepassen

#### Download een pdf file - plaatje dynamisch tonen

In de voorgaande opdrachten heb je geleerd hoe je in CSS met de Attribute selector en before/after content 'in je HTML schrijven'.

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


###Meer resources

* Resource: [How to use pseudo classes by Richard Shepherd](http://www.smashingmagazine.com/2011/03/how-to-use-css3-pseudo-classes/)
* Begin September 2015 heeft Vasilis van Gemert een lezing gegeven op Frontend Conference in Zürich. Het was aan de ene kant een technisch verhaal over responsive web design zonder media queries, maar aan de andere kant ook een visueel en — volgens het publiek — vermakelijk verhaal over dingen maken voor het web. Niet alleen nuttige dingen, maar ook tóffe dingen. Hier staat een link naar de video, de slides en, belangrijker, de bronbestanden zodat je er zelf mee kunt spelen: [https://vasilis.nl/nerd/but-vasilis/](https://vasilis.nl/nerd/but-vasilis/)


