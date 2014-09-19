< section >
# I’ve got < em >
###### Frontend development - les 3

!

# I’ve got < em >
###### Frontend development - les 3
Deze les gaat over het Javascript ClassList Object, 
waarmee je dom elementen kunt selecteren en classes kan toewijzen. 
We gaan aan de slag met de Flexbox en units for typografie, zoals pixels, ems en procenten. 

<img src="http://image.spreadshirt.com/image-server/v1/products/110835203/views/1,width=280,height=280.png" alt="kledingvoorschriften">


!

# I’ve got < em >
###### Frontend development - les 3

## Programma (200 minuten)
1. Introduktie (5)
2. College (30)
3. Weekly Nerd (30)
4. Klussen (120)
5. Terugkijken (10)


!

# 1. Introduktie - 5 minuten
###### Frontend development - les 3

## Lesdoelen


- Leren hoe het Javascript ClassList Object en de Query selector te gebruiken om dynamisch classes toe te voegen
- Spelen met de Flexbox en grids
- Leren over units, pixels, em's, procenten

!

# 2. College - 30 minuten
###### Frontend development - les 3

College [I've Got Em](http://cmda.github.io/FED1/Colleges/les3-i-ve-got-em/index.html)
Over Javascript ClassList Object aanspreken met query selector functie, de Flexbox, Grids en Units

<img src="http://drive.google.com/uc?export=view&id=0B_S6YavJbbFJTGZRQkpVcnllblk" width="100%" alt="College opstelling">

!

# 3. Weekly Nerd - 30 minuten
###### Frontend development - les 3
Iedere les bespreken we artikelen in kleine groepen. 

Je wordt beoordeeld op je kennis niveau en inbreng tijdens de sessie. 
Van de 7 sessies mag je er *niet* meer dan 1 missen of onvoldoende halen. 
Als je niet voldoen aan de gestelde criteria voor de Weekly Nerd 
dan moet dit onderdeel herkanst worden met een tentamen.

<img src="http://drive.google.com/uc?export=view&id=0B_S6YavJbbFJX2ViNjEyUFo4LTQ" width="100%" alt="Discussie rondje">

!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Artikelen voor vandaag

* [Using pixels is not very polite by Vasilis van Gemert](http://nerd.vasilis.nl/using-pixels-polite/)
* [Classes? Where We’re Going, We Don’t Need Classes! by Haydon Pickering](http://www.smashingmagazine.com/2012/06/19/classes-where-were-going-we-dont-need-classes/)
* [CSS Positioning by Noah Stokes](http://alistapart.com/article/css-positioning-101)



!

##### 3. Weekly Nerd (30 - 65/200 minuten)
# Wie zit waar?

lijst op beamer tonen met wie waar zit ...



!

# 4 Klussen - 120 minuten
###### Frontend development - les 3
Laptop en internet  
Opstelling werkeilanden van 6 personen - duo's zitten naast elkaar

<img src="http://drive.google.com/uc?export=view&id=0B_S6YavJbbFJbmZRTWlJNzJQTU0" width="100%" alt="9 groepen van 6">


1. Attribute selectors: Required sterretje
2. Attribute selectors: Download PDF file
3. Javascript ClassList Object aanspreken met query selector functie
4. Flexbox


!


##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 2.7.3 - 10 minuten
## Attribute selectors: Required sterretje

Hoe ging dit ook alweer?

**Toon met CSS dynamisch iets op het scherm**

Voeg dit toe aan je formulier pagina:

Zorg ervoor dat er een rood sterretje komt te staan bij de required input velden. 
Gebruik hiervoor de attribute selector.

	<label for="naam">Naam</label>
	<input type="text" id="naam" required>

    <label for="email">Email</label>
	<input type="email" id="email" required>







!

### Bespreken Opdracht 2.7.3
## Attribute selectors: Required sterretje

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

##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 3.1 - 30 minuten
## Attribute selectors: Download PDF file

In opdracht 2.7 van vorige les zat de opdracht met het *.
In CSS kun je met de Attribute selector en bofore/after content 'in je HTML schrijven'.

In deze oefening gaan we afhankelijk van 

Nu gaan we dat gebruiken, samen met de Javascript Classlist object en de query selector

    <a href=“http://example.com/file.pdf” data-kb=“1337”>A white paper</a>

Zorg er voor dat dit er uit komt te zien als 

[pdf-logo] A white paper (1337kb)

(als de download link eindigt op .pdf dan een iccontje plaatsene en het aantal kb)"


!

### Bespreken Opdracht 3.1
## Download een pdf file

Tekst en uitleg.

Antwoord in [Dablet](http://dabblet.com/gist/77c4ad3f79e24b0dce8b) tonen.


Laat zien hoe content werkt: zowel met “content tussen quotes”, 
als met de url() en de attr() functies en combinaties daarvan.



!

##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 3.2 - 20 minuten
## Javascript ClassList Object aanspreken met query selector functie

### Fieldset toggelen met button-klik

Javascript ClassList Object aanspreken met query selector functie, 
class dynamisch toevoegen, query selectors: toggelen met javascript



Antwoord in [Dablet](http://dabblet.com/gist/9f0ec7016d111959d8ea) tonen



!








##### 4. Klussen (120 - 185/200 minuten)
### Opdracht 3.3 - 60 minuten
## Flexbox

Flexbox oefening
kan hier ook iets met flexible grid uit les 5 van 2011 programma?
Dat studenten ook rekenen met em waardes (en proenten?)
Dus Flexbox gebruiken
daarna een pagina met de flexbox en em's ??


3. Experimenteren met Flexbox: Maak dit na 
misschien hier al html toevoegen?





Experimenteren met Flexbox: Maak dit na (misschien hier al html toevoegen?)


Huiswerk: Html toevoegen: Meer artikelen, navigatie in header, zoekveld, aside informatie 

Navigatie met 5 items, naam van de persoon die is ingelogd, zoekveld. 




!

### Bespreken Opdracht 3.3
## Flexbox

Tekst en uitleg
Voorbeeld van studenten in Dabblet tonen.
Antwoord in Dablet tonen

!










# 5. Terugkijken 20 minuten
###### Frontend development - les 3

Wat hebben we behandeld (lesdoelen)?

- Leren hoe het Javascript ClassList Object en de Query selector te gebruiken om dynamisch classes toe te voegen
- Spelen met de Flexbox en grids
- Leren over units, pixels, em's, procenten


!

##### 5. Terugkijken (20 - 200/200 minuten)
# Huiswerk aankondigen

* **Weekly Nerd** voorbereiden:  
  Lezen wat op Moodle staat bij les 4.
  
* **Klussen** Hoe ver moet je zijn?
    1. Artikel pagina
    2. Formulier pagina


!

## op.

<br/>
<br/>

[Tussenstand AVV's en Weekly Nerd](https://docs.google.com/spreadsheets/d/1Uo9a3xRDhs6M3dWl0AgJ05UZNJDh6REjCwpxT3aZs2w/pubhtml) klik klik klik


< / section >






