# Kursmål Frontend
Vi har fått i uppgift att skapa en hemsida för att presentera kursmålen för vår nuvarande kurs "Frontendutveckling" på Chas Academy. Målet är att skapa en hemsida för att presentera kursmålen på ett mer livfullt sätt som fångar användarens uppmärksamhet genom design och interaktivitet.

## Status
Projektet är i sin planeringsfas. KanBan, ReadME och design håller på att skapas och gruppen ska tilldelas uppgifter. Nästa steg är att påbörja kodningen.

## Färgpalett

Hemsidan ska ha en modern och minimalistisk färgpalett men samtidigt fånga användarens uppmärksamhet. Genom att använda färger som går i samma skala kan vi uppnå detta utan att det stör användarvänligheten.
<img width="944" height="264" alt="image" src="https://github.com/user-attachments/assets/f14ee691-49de-4d90-8449-8e24663333fa" />

## Design

Nedan design är skapad i Figma för att visualisera hur hemsidan kan komma att utforma sig. Designen ska ha rundade hörn, vara interaktiv och vara lättnavigerad.

<p align="center">
<img width="362" height="689" alt="image" src="https://github.com/user-attachments/assets/bfa6d8a1-29c8-4a20-a14c-7d5591d57b5b" />
<img width="356" height="702" alt="image" src="https://github.com/user-attachments/assets/f959a107-b471-4b8d-a7fa-7b35277239a3" />
</p>

## Vald funktion

###### Funktion

Smooth Scroll

Funktionen är implementerad med enbart HTML OCH CSS.

###### Implementering

Vi implementerade smidig scrolling kombinerat med en fast navigationsfält och aktiv knappindikering för att tydligt visa vilken sektion användaren befinner sig i på webbläsaren. När användaren klickar på en navigeringsknapp så scrollar sidan smidigt till motsvarande sektion.

Enkel navigeringsfält med classen scroll i HTML filen med sektionernas header inramat i en länk tag. 
###### HTML
```
<nav class="scroll">
    <ul>
      <li><a href="#skills">Färdigheter</a></li>
      <li><a href="#knowledge">Kunskaper</a></li>
    </ul>
   </nav>
   
   
```
###### CSS
```css
html {
  scroll-behavior: smooth;
}
section {
  scroll-margin-top: 80px;
}
```

###### Täckning bland browsers

Funktionen använder standard CSS-egenskaper som är väl stödda i moderna webbläsare. Allt från smooth scrolling ( scroll-behavior: smooth), Fast navigationsfält (position: fixed) till övriga CSS egenskaper och variabler så som border och flex har fullt stöd i alla moderna webbläsare.

###### Design och användarupplevelse

Denna implementation förbättrar designen och användarupplevelsen på följande sätt:

- **Smidig navigering**: Smooth scrolling ger en mjuk och behaglig övergång mellan sektioner, vilket gör navigeringen mer intuitiv och mindre abrupt än standardscrollning.
- **Konsekvent åtkomst**: Det fasta navigationsfältet är alltid synligt högst upp, vilket gör det enkelt att växla mellan de olika sektionerna utan att behöva scrolla tillbaka till toppen.
- **Estetisk förbättring**: Knapparnas design (lila ram, rundade hörn, hover-effekt) matchar sidans färgskala (t.ex. .number-circle, .box-learning), vilket skapar en enhetlig och professionell look.
- **Tillgänglighet**: Knapparna (<a>) är tangentbordsnavigerbara, och scroll-margin-top: 80px säkerställer att sektioner är synliga under navigationsfältet, vilket förbättrar användbarheten för alla användare, inklusive de som använder skärmläsare.
- **Enkelhet och prestanda**: Genom att använda enbart HTML och CSS undviks JavaScript, vilket minskar laddningstider och komplexitet, särskilt viktigt för sidor med mycket innehåll.

## Deltagare

Samtliga deltagare läser första året på utbildningen Fullstack JavaScript hos Chas Academy i Göteborg.
| Roll | Namn |
| --- | ------ |
| **Scrum Master** | Ahm |
| **Produktägare** | Johanna, Sahar |
| **Utvecklare** | Najah, Karam, David, Veronica |
