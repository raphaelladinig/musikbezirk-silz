# Website für Musikbezirksilz

## Tech Stack

- Bun
- NextJS & typescript
- drizzle & postgresql
- tailwindcss & shadcn

## Hauptziele

1. Website auf der verschiedene Posts dynamisch auf verschiedenen Pages von einer Datenbank gerendert werden.
2. Möglichkeit neue Posts via Website einzufügen und json import/export.

## ToDos

- [x] setup Project
- [x] UI & Templates
- [x] DB connection
- [x] basic functionality
- [x] grants
- [x] json import/export
- [x] proper Metadata 
- [x] fix to many connections open
- [x] dummy data
- [ ] admin panel
- [x] doc
- [ ] css fixes

## Doc

### Projekstruktur
```
app/ -- Main application code and structure
components/ -- Reusable UI components
db/ -- Database-related scripts and configurations
lib/
node_modules/ 
public/ -- Static assets like images and fonts.
README.md
bun.lockb
components.json
drizzle.config.ts
exampleData.json
next-env.d.ts
next.config.mjs
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
```

### How to setup

1. Clone repo
2. Install depencencies via ``bun install``
3. Start local postgres Database and run ```bunx drizzle-kit push```
4. seed example data
5. Start the server ``bun run build`` & ``bun run start``
