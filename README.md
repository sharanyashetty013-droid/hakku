# Hakku

**A legal-aid companion that helps families understand when to seek a release review under Section 479 of the BNSS.**
---

## Overview

Section 479 of the Bharatiya Nagarik Suraksha Sanhita (BNSS) allows certain undertrial prisoners to be considered for release once they have served a defined portion of the maximum sentence. In practice, many families are unaware of this provision, and the date calculation is difficult without legal assistance.

Hakku converts this rule into a clear, private and multilingual tool. It tells a family when it is appropriate to approach a lawyer, a prison officer or the District Legal Services Authority (DLSA) to request a review.

> Hakku does not determine release. That decision rests solely with the court.

## Key Features

- **Release review date** calculated under Section 479 BNSS
- **Three languages:** English, Kannada and Hindi
- **Privacy-first:** no account, login or personal data storage
- **Mobile-first design** for accessibility on any device

## How It Works

1. Enter the offence, the date of custody, and whether it is a first offence or other cases are pending.
2. Hakku applies the Section 479 rule to the details provided.
3. Take the resulting date to a lawyer, prison officer or DLSA.

## Technology

| Layer | Choice |
|---|---|
| Frontend | React, TypeScript, Vite |
| Styling | Tailwind CSS |
| Date logic | date-fns |
| Languages | react-i18next (English, Kannada, Hindi) |
| Reminders | .ics calendar files generated in the browser |
| Print card | Browser print stylesheet |
| Testing | Vitest |
| Hosting | Vercel |

Hakku has no backend or database. All calculations run in the browser,
and no personal data is stored or transmitted.

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/hakku.git
cd hakku
npm install
npm run dev
```

The application runs at `http://localhost:3000`.

## Disclaimer

Hakku provides general information only and does not constitute legal advice. Results are indicative and do not guarantee release. Please consult a qualified lawyer or your District Legal Services Authority (DLSA) regarding any specific case.
