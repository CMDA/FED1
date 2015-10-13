

## Coden - Opdracht les 7
###### Frontend development - les 7
#HTML 5 video en Responsive images


1. [Responsive images](#2)
2. [HTML5 video](#3)

!

## Coden - Opdracht 7.1
###### Frontend development - les 7

###Responsive images

Gebruik srcset om verschillende .jpg files te tonen op verschillende schermgroottes

Gebruik voor deze oefening de plaatjes die in het [lesprogramma op Github](https://github.com/CMDA/FED1/tree/gh-pages/Opdrachten/html/img/responsive_images) staan:


**Resources**

* Resource: [Native responsive Images by Yoav Weiss](https://dev.opera.com/articles/native-responsive-images/)
* [Built-in Browser Support for Responsive Images](hhttp://www.html5rocks.com/en/tutorials/responsive/picture-element/)
* [Caniuse Picture-element?](http://caniuse.com/#search=picture) 

<!--Antwoord in [Dablet](http://dabblet.com/gist/e173b03e74e908cf3c29)-->

!

## Coden - Opdracht 7.2
###### Frontend development - les 7

###HTML5 Video 

Plaats onderstaande bronbestanden in een < video > element in een pagina.
De video moet voor iedereen met een hedendaagse browser werken.
Zorg voor een fallback voor oude browsers. 

Video bronbestanden staan op [Github](https://github.com/CMDA/FED1/tree/gh-pages/Opdrachten/html/videos)


**Resources**

* [The Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
* [Html5 supported media formats](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats)
* [What formats do I need for HTML5 video](http://blog.zencoder.com/2013/09/13/what-formats-do-i-need-for-html5-video/)

<!-- 
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

-->



!

