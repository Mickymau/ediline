# Ediline Studio — architektura strony

> Struktura strony (9 sekcji z uzasadnieniami), wymagania techniczne, SEO lokalne.
> Czytaj przed każdą sesją budowania strony — szczególnie sekcję z lukami blokującymi.

---

## Struktura strony — 9 sekcji w kolejności

Kolejność jest przemyślana pod konwersję — nie przestawiać bez testów.

### Sekcja 1: Hero (above the fold)
Pierwsze 50ms decyduje o pozostaniu na stronie. Wg Hotjar słabe pierwsze wrażenie
zabija konwersję natychmiast.

- Pełnoekranowe zdjęcie stylizacji (full-width, wysoka jakość — nie stockowe)
- H1 + krótki podtytuł (max 2 zdania)
- CTA primary: **„Zarezerwuj wizytę →"** — złoty przycisk, widoczny w nagłówku sticky ORAZ na środku hero
- CTA secondary: „Zobacz galerię" — obok przycisku primary

### Sekcja 2: Dlaczego tytanowy? (edukacja)
Manicure tytanowy jest mniej popularny niż hybryda. Klientka potrzebuje edukacji
zanim zaufania — to nisza Edyty i należy ją komunikować wprost, nie zakopywać.

- 3–4 karty z zaletami tytanowego vs hybryda
- Treść kart: Bez lampy UV | Trwa 3–4 tygodnie | Odżywia płytkę | Bezpieczny w ciąży i dla alergiczek

### Sekcja 3: Galeria realizacji
Galerie zwiększają konwersję o 40% (ronkot.com). Klientka musi zobaczyć jakość
własnooczami zanim zdecyduje się na wizytę.

- Siatka zdjęć: min. 9–12, podzielona wg stylu (naturalne / zdobieniowe / sezonowe)
- Tylko zdjęcia od Edyty — nie stockowe, nie screenshoty z social media

### Sekcja 4: Usługi i cennik
Gdy klientki widzą ceny z góry, usuwa to dwa główne hamulce przed rezerwacją (ronkot.com).
Ukryty lub nieobecny cennik = klientka idzie do konkurencji.

- Czytelna tabela/lista: nazwa usługi | opis | cena | czas trwania
- Usługi: Manicure tytanowy | Hybryda | Pedicure | Zdobienia
- Ceny rynkowe tytanowego w Polsce: ~110–150 zł (dane: Booksy Białystok)

### Sekcja 5: Rezerwacja online (booking)
67% klientek beauty woli rezerwację online niż telefon. Salony z online bookingiem
mają konwersję do 60% wyższą (salonbookingsystem.com, solarellejournal.com).

- Embed kalendarza lub przycisk do systemu rezerwacji
- CTA: „Wybierz termin →"
- Opcje systemu: Booksy (marketplace, przynosi nowych klientów) | Fresha (bezpłatny, czysty UX) | własny formularz
- **Decyzja TBD — patrz OPEN-ITEMS**

### Sekcja 6: O Edycie (sylwetka)
Profile zespołu zwiększają zaufanie nowych klientek o 20% (ronkot.com).
Nail to usługa osobista — klientka chce wiedzieć kto będzie dotykać jej rąk.

- Zdjęcie Edyty (portretowe lub przy pracy)
- Tekst osobisty: ile lat doświadczenia, w czym się specjalizuje, co ją wyróżnia
- Nie „pasja i doświadczenie" — konkret. **Treść do uzupełnienia przez Edytę.**

### Sekcja 7: Opinie klientek
Opinie to najsilniejszy trust signal w branży beauty. Salony z recenzjami
mają 75%+ wskaźnik powrotów klientek (glossgenius.com).

- 4–6 opinii z imieniem i zdjęciem paznokci jeśli możliwe
- **Realne cytaty — nie generować fikcyjnych. Do zebrania od Edyty.**

### Sekcja 8: FAQ
Google kocha FAQ (Schema.org FAQ snippet). Branżowe FAQ zwiększa lokalną widoczność.

- 5–7 pytań i odpowiedzi
- Przykłady: Czy tytanowy nadaje się dla mnie? | Ile trwa zabieg? | Jak się przygotować? | Czy boli zdejmowanie?

### Sekcja 9: Lokalizacja i kontakt
Dla lokalnego biznesu mapa i adres to absolutny must-have.

- Mapa Google (embed)
- Adres, telefon, godziny pracy, social media
- Przycisk „Napisz na WhatsApp" lub „Zadzwoń"

---

## CTA — reguły rozmieszczenia

- **Sticky header:** CTA primary przez cały czas scrollowania
- **Hero:** CTA primary (center) + CTA secondary obok
- **Po każdej sekcji prezentującej usługi:** CTA primary
- **Floating button:** „Napisz na WhatsApp" — dolny prawy róg, widoczny zawsze

### CTA których unikać (i dlaczego)
- „Kontakt" — zbyt ogólne, nie mówi co zrobić
- „Kliknij tutaj" — brak kontekstu
- „Dowiedz się więcej" — odkłada decyzję, nie prowadzi do bookingu

---

## Wymagania techniczne

- **Mobile first** — projektuj najpierw na telefon. 70%+ ruchu z telefonu w branży beauty.
- **PageSpeed target:** >85 (Google Lighthouse) — kompresja obrazów WebP
- **Mapy:** Google Maps embed
- **WhatsApp float button:** tak — klientki preferują pisać zamiast dzwonić
- **SSL:** obowiązkowy (https)

### Decyzje techniczne TBD (patrz OPEN-ITEMS)
- Technologia strony: HTML/CSS/JS vanilla czy React?
- One-page z anchor links vs multi-page
- System rezerwacji: Booksy / Fresha / własny formularz
- Domena: czy Edyta ma domenę? Jeśli nie — zaproponować np. `edilinestudio.pl`
- Header behavior: transparent→scrolled (jak Verami.Studio) czy od razu widoczny?

---

## SEO lokalne

### Frazy docelowe
- „manicure tytanowy Białystok" (główna)
- „paznokcie tytanowe Białystok"
- „stylizacja paznokci Białystok"
- „manicure bez lampy UV Białystok"
- „paznokcie dla alergiczek Białystok"

### Meta title (przykład)
„Manicure tytanowy Białystok — Ediline Studio | Edyta Pisanko"

### Schema.org
Dodać `FAQPage` do sekcji FAQ — zwiększa widoczność w Google (rich snippets).

### Google Business Profile
Założyć lub uzupełnić — kluczowe dla lokalnego visibility.
Salony z GBP + online booking mają konwersję 60% wyższą niż bez.
