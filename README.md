# Drop-in Replacement for [CRA](http://create-react-app.dev/) but powered by [Vite](https://vitejs.dev/)

### Things in CRA, supported here:
- Import SVG's directly as React Component via SVGR
- Unit Testing via Jest & React Testing Library
- ESLint Rules & Prettier
- Tailwind
- Absolute imports within `src` directory

---

### Extra Additions
- Conventional Commits using `Commitlint`
- Run Lint Checks, TS Checks, Formatting & Unit Tests  in Pre-commit via `lintstaged` & `husky`

---

### Usage (with [degit](https://github.com/Rich-Harris/degit))
```bash
degit uchihamalolan/vite-react-ts your-app-name
```

---

### Tech Stack - Overview
- Vite
- React - Typscript
  - react-error-boundary
- pnpm

---

### Editor Config

- vscode settings & extension recommendations
- `.editorconfig` file

---

### Lint and Formatting
- Eslint & Prettier Configured
- Lints
  - react
  - react hooks
  - typescript
  - jsx-a11y

---

### Testing
- Jest + React Testing Library (plus some plugins)

---

### Styling
- TailwindCSS v3

---

# Other Recommended Libraries:

### Forms
- React Hook Form
- Zod (for validations)

### CSS-in-js
- Emotion
- Complie Time Atomic CSS-in-Js
  - Stylex (Facebook, not Open Source yet)
  - Linaria
  - Compiled (still in beta)

### Routing
- React-Router-Dom
- React Location

### Date Manipulation
- Dayjs
- date-fns
- Luxon

### HTTP Client
- Ky
- Axios

### Global Store (full-blown / lite-version)
- Redux Toolkit / Zustand
- Recoil / Jotai
- Mobx / Valtio
- xstate / robot

### Server State
- React Query
- SWR
- RTKQuery

<!-- ### Eslint Plugins
- [eslint-plugin-jest-dom](https://testing-library.com/docs/ecosystem-eslint-plugin-jest-dom)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) -->
