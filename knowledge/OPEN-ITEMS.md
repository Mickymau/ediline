# Ediline Studio — open items

> Stan na kwiecień 2026.
> Strona jest zbudowana — czeka na dane od Edyty przed deployem.

---

## 🔴 Blokujące — bez tego nie deployuj

- [ ] **Numer telefonu** — do stopki, sekcji kontakt, Schema.org i `tel:` linków
- [ ] **Numer WhatsApp** — do float buttona i sekcji rezerwacji (`wa.me/48XXXXXXXXX`)
- [ ] **Adres dokładny** — ulica + numer lokalu (sekcja kontakt + Schema.org + Google Maps)
- [ ] **Godziny pracy** — dni tygodnia + godziny (sekcja kontakt)
- [ ] **Link profilu Fresha** — URL do embedu kalendarza w sekcji rezerwacji
- [ ] **Zdjęcia realizacji** — min. 8 do galerii preview na `index.html`, więcej do `galeria.html`
- [ ] **Zdjęcie Edyty** — `img/edyta.webp` do sekcji „O Edycie"
- [ ] **Bio Edyty** — ile lat doświadczenia, szkolenia, certyfikaty (sekcja „O Edycie")
- [ ] **Cennik uzupełniony** — hybryda / pedicure / zdobienia / uzupełnienie / ściąganie (ceny + czas)
  (manicure tytanowy już ma: 130 zł / 60 min)
- [ ] **Opinie klientek** — 3 cytaty z imionami + zgoda na publikację
- [ ] **Odpowiedzi FAQ** — „Jak się przygotować?" i „Czy ściąganie boli?" — od Edyty

---

## 🟡 Ważne — przed deployem

- [ ] **`og:image`** — stworzyć `img/og-image.webp` (1200×630px) dla social preview
- [ ] **`og:url`** — wpisać finalny URL domeny we wszystkich HTML
- [ ] **Google Maps embed** — wygenerować iframe po ustaleniu adresu
- [ ] **`© 2025` → `© 2026`** — poprawić w stopce
- [ ] **Domena `edilinestudio.pl`** — czy Edyta już ma? Jeśli nie — zarejestrować
- [ ] **Hosting** — ustalić: GitHub Pages czy Vercel?
- [ ] **`canonical`** — zaktualizować we wszystkich HTML po ustaleniu domeny
- [ ] **Schema.org FAQPage** — dopisać brakujące pytania po uzupełnieniu przez Edytę

---

## 🟢 Po deployu

- [ ] Google Business Profile — założyć lub uzupełnić profil Edyty
- [ ] Google Search Console — zgłosić domenę, wgrać sitemap
- [ ] Sitemap.xml — wygenerować dla 5 stron
- [ ] Lighthouse audit — sprawdzić PageSpeed (cel: >85)
- [ ] Test na iOS Safari i Android Chrome

---

## ✅ Zrealizowane

- [x] Stack wybrany: HTML/CSS/JS vanilla
- [x] Architektura multi-page (5 podstron)
- [x] System rezerwacji wybrany: Fresha
- [x] Design system (paleta, typografia, zmienne CSS)
- [x] `index.html` — wszystkie sekcje zbudowane (z placeholderami na dane)
- [x] `uslugi.html` — podstrona usług
- [x] `galeria.html` — podstrona galerii
- [x] `o-mnie.html` — podstrona o Edycie
- [x] `polityka-prywatnosci.html` — podstrona polityki
- [x] Header sticky transparent→scrolled
- [x] Hamburger menu mobilne
- [x] FAQ accordion (JS)
- [x] WhatsApp float button
- [x] SEO meta tags (title, description, keywords)
- [x] Open Graph tagi
- [x] Schema.org FAQPage + BeautySalon
- [x] Font: Cormorant Garamond + DM Sans
- [x] H1 + podtytuł hero finalny
- [x] Features bar (4 zalety tytanowego)
- [x] Sekcja „Dlaczego tytanowy" (4 karty)
