# Ediline Studio — architektura techniczna

> Struktura plików, CSS, JS. Czytaj gdy edytujesz konkretny plik.

---

## Stack

HTML/CSS/JS vanilla — bez frameworków, bez bundlera.
Font: Cormorant Garamond (nagłówki) + DM Sans (treść) — ładowane przez `<link>` w `<head>`.
Hosting: TBD. Domena docelowa: `edilinestudio.pl`.

---

## Struktura plików

```
Ediline/
├── index.html                  ← strona główna (hero + features + o Edycie + tytanowy + usługi + galeria preview + rezerwacja + opinie + FAQ + kontakt)
├── uslugi.html                 ← podstrona usług z pełnym cennikiem
├── galeria.html                ← pełna galeria realizacji
├── o-mnie.html                 ← podstrona o Edycie
├── polityka-prywatnosci.html   ← polityka prywatności
├── css/
│   └── style.css               ← cały design system (jeden plik)
├── js/
│   └── main.js                 ← nav scroll, hamburger, FAQ accordion
└── img/                        ← zdjęcia (do uzupełnienia przez Edytę)
```

---

## Sekcje na `index.html` (w kolejności)

1. **Header** — sticky, transparent→scrolled, logo + nav + CTA „Zarezerwuj wizytę"
2. **Hero** — full-screen, H1 + podtytuł + 2 CTA (primary + secondary)
3. **Features bar** — 4 ikony: Bez lampy UV / Do 4 tygodni / Dla alergiczek / Rezerwacja online
4. **O Edycie** — zdjęcie + bio + link do `o-mnie.html`
5. **Dlaczego tytanowy** — 4 karty z numeracją (01–04)
6. **Usługi & cennik** — 6 kart usług (tytanowy / hybryda / pedicure / zdobienia / uzupełnienie / ściąganie)
7. **Galeria preview** — 8 zdjęć + link do `galeria.html`
8. **Rezerwacja** — embed Fresha (placeholder do podmiany)
9. **Opinie** — 3 karty (placeholdery do podmiany)
10. **FAQ** — 6 pytań z accordion (JS)
11. **Kontakt** — dane + mapa Google (placeholder) + kanały kontaktu
12. **Footer** — logo + nav + copyright
13. **WhatsApp float** — fixed button dolny prawy róg

---

## CSS — design system (`css/style.css`)

Jeden plik dla całego projektu. Kolory przez CSS custom properties w `:root`.

**Paleta:**
```css
--color-cream:      #FAF8F5   /* tło główne */
--color-gold:       #C9A96E   /* akcent — CTA, ikony, podkreślenia */
--color-dark:       #2C2C2C   /* tekst główny */
--color-nude:       #E8D5C4   /* akcent drugorzędny */
--color-bg-dark:    ciemne tło sekcji rezerwacji i hero overlay
```

**Fonty:**
- Nagłówki: `Cormorant Garamond` (300, 400, 500 — italic warianty)
- Treść: `DM Sans` (300, 400)

---

## JS — `js/main.js`

- Nav scroll → klasa `scrolled` na `<header>` po 40px
- Hamburger → toggle mobile menu + `aria-expanded`
- FAQ accordion → toggle `.faq-answer` + zmiana ikony `+`/`−`

---

## Schema.org (w `<head>` `index.html`)

- `FAQPage` — 2 pytania już wpisane, pozostałe do uzupełnienia gdy Edyta odpowie
- `BeautySalon` (LocalBusiness) — adres i telefon jako TODO do podmiany

---

## Deploy (plan)

TBD — ustalić hosting i domenę. Opcje:
- GitHub Pages (jak Verami i Medi-Dent) — prosto, bezpłatnie
- Vercel — jeśli potrzebny custom domain redirect

Po podpięciu domeny: zaktualizować `og:url` i `canonical` we wszystkich HTML.
