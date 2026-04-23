# Ediline Studio — kontekst projektu

> Przeczytaj ten plik na początku każdej sesji budowania strony.
> Zawiera cel, klienta, wyróżnik i zasady copywritingu.

---

## Projekt

- **Firma:** Ediline Studio
- **Właścicielka:** Edyta Pisanko
- **Branża:** Stylizacja paznokci — specjalizacja: manicure tytanowy
- **Lokalizacja:** Białystok (rynek lokalny)
- **Typ strony:** Wizytówka + rezerwacja online (multi-page)
- **Główna akcja użytkownika:** umówienie wizyty przez Fresha
- **Social media:** Facebook: „Ediline Studio Tytanow" | Instagram: @edytapisanko
- **Folder lokalny:** `C:\Users\Admin\Desktop\PROJEKTY\Ediline\`

---

## Status projektu (stan na kwiecień 2026)

**Strona zbudowana** — struktura HTML/CSS/JS gotowa, wszystkie podstrony istnieją.
Deploy jeszcze nie — czeka na dane od Edyty (telefon, adres, zdjęcia, bio, opinie).

**Podjęte decyzje techniczne:**
- Stack: HTML/CSS/JS vanilla (jak Verami.Studio i Medi-Dent)
- Architektura: multi-page (`index.html` + `uslugi.html` + `galeria.html` + `o-mnie.html` + `polityka-prywatnosci.html`)
- System rezerwacji: **Fresha** — embed gotowy, czeka na link profilu od Edyty
- Header: transparent → scrolled przy scrollu
- Domena docelowa: `edilinestudio.pl` (TBD — czy Edyta już ma)
- Font: Cormorant Garamond (nagłówki) + DM Sans (treść)
- Paleta: krem + złoto + ciemne tło — zgodnie z briefingiem

**Co blokuje deploy:**
Dane od Edyty — patrz `OPEN-ITEMS.md`

---

## Wyróżnik — dlaczego tytanowy, nie hybryda

Manicure tytanowy to nisza: bardziej trwały i bezpieczny niż hybryda,
bez lampy UV, bezpieczny w ciąży, dla alergiczek na żywice epoksydowe.

**To jest główny argument sprzedażowy Edyty i musi być komunikowany wprost.**
Rynek Białystok: 289+ salonów na Booksy. Wyróżnik tytanowy to jedyna
realna nisza która pozwala nie walczyć ceną z masowym rynkiem.

---

## Idealny klient

Kobieta 25–45 lat z Białegostoku. Szuka tytanowego z powodu alergii na hybrydy,
ciąży lub potrzeby trwałości. Przekonuje ją: galeria + opinie + cena + łatwa rezerwacja.

---

## Zasady copywritingu

**Ton:** ciepły, kobieco-ekspercki. Konkretny — czas, trwałość, cena. Nie ogólniki.

**Zakazane słowa:** `kompleksowy` · `profesjonalny` · `najwyższa jakość` · `pasja` · `zaangażowanie`

**Preferowane słowa:** `trwały` · `precyzyjny` · `bezpieczny` · `twój/twoje` · `zarezerwuj`

**H1 wybrany:** „Paznokcie które wytrzymają wszystko" + podtytuł:
„Trwała stylizacja bez lampy UV — do 4 tygodni. Bezpieczna dla alergiczek i kobiet w ciąży."

---

## Gdzie szukać więcej

- Struktura plików, CSS, JS → `knowledge/ARCHITECTURE.md`
- Paleta, CTA rules, trust signals, błędy → `knowledge/PATTERNS.md`
- Dane do uzupełnienia, TODO → `knowledge/OPEN-ITEMS.md`
- Dane konwersji, przykłady stron → `knowledge/Research.md`
