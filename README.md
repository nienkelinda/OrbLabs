# OrbCorb Expo website (v1, Engels)

Statische website (HTML + CSS) voor de OrbCorb Expo, vrijdag 13 november, 13:00-17:00, TTH 06B16.
Dubbelklik op `index.html` om hem te bekijken. Hou de mappen bij elkaar.

## Structuur
- `index.html` - homepage met de 6 projectkaarten
- `groups/group-1.html` t/m `group-6.html` - projectpagina per groep
- `signup.html` - aanmeldpagina met Google Form
- `css/style.css` - alle opmaak; kleuren bovenaan in `:root`
- `images/` - placeholders `group-1.svg` ...

## Een groepspagina invullen
Open bijvoorbeeld `groups/group-1.html` en zoek op `HIER INVULLEN`:
1. **Titel:** tekst in `<h1>`.
2. **Foto:** zet je foto in `images/` en pas `src="../images/group-1.svg"` aan (bijv. `../images/group-1.jpg`).
3. **Beschrijving:** tekst in de `<p>`-regels.

Pas ook de titel, foto en korte tekst van die groep aan in de kaart op `index.html`.

## Aanmelden (Google Form)
1. Maak een Google Form met de vragen **Name** en **Number of people**.
2. Verzenden > tabblad `<>` (insluiten) > kopieer de `src="..."`-link.
3. Plak die in `signup.html` in plaats van `HIER_JE_GOOGLE_FORM_EMBED_LINK`.
4. Verwijder het oranje bericht (`class="notice"`).

## Op GitHub zetten
1. Maak een repo op github.com en upload alle bestanden (Add file > Upload files).
2. Settings > Pages > Source: branch `main`, map `/ (root)` > Save.
3. Na een minuutje staat de site op `https://<gebruikersnaam>.github.io/<repo>/`.
