# Pyöräretket

Hei,
Olen Ildikó Makra, ohjelmistotekniikan opiskelija Jyväskylän ammattikorkeakoulusta. Tämä full stack ohjelmistoprojekti on tehty 2022 kesän opintojaksoa varten, joka oli viimeinen opintojaksosuoritukseni ennen opinnäytetyön aloittamista. Projekti ei tiimityönä vaan itsenäisesti oli suoritettava. Alla kuvailen kurssin perusvaatimuksia. Tehtäväpalautuksen jälkeen sovelluksen kehitys jatkuu edelleen. Tuorein versio oli julkistettu 1.9.2022. Teknologiana React ja NodeJs Express, tietokantana MongoDB Atlas. Sekä API, että React sovellus on kontitettu Dockerilla ja laitettu pyörimään Azure pilveeseen. Testattavissa oleva versio löytyy täältä.

   [https://tripperwebapp.azurewebsites.net](https://tripperwebapp.azurewebsites.net)
   
Sovelluksen perusideana oli tehdä MERN-stackilla single page-sovellus Pyöräretket, jolla käyttäjä pääsee selailemaan kirjautuneiden käyttäjien tekemiä pyöräretkiä ja lisätä niitä itse. Käyttöliittymä on englanninkielinen ja sitä koskeva alkuperäinen vaatimusmäärittely näkyy kuvassa alla.

Kuva


API:n liittyvät vaatimukset näkyvät tässä kuvassa

Kuva  


## Tuoreimmat ominaisuudet

* Profiilikuvan lisäys käyttäjäsivulle (multer node paketilla)

## Ominaisuuksia tulossa

* Kuvien lisäys myös retkien kohdalle
* Salasanan palautus ja vaihtomahdollisuus
* Autentikaatiojärjestelmän parannuksia (esim. refresh token)


# Cycletripper App

A MERN-stack app with authentication and some protected routes. This project has been created by Ildikó Makra for the Savonia AMK´s 2022 summer course. A testable version of the app has been published to Azure: 

  [https://tripperwebapp.azurewebsites.net](https://tripperwebapp.azurewebsites.net)

The main idea was here to build a social media like web application for a cyclist community where members can read stories about other member´s cycle trips, after creating an account and login, members able to post new stories, edit and delete old ones too.
