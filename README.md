# New atlaskit shad

## install
npm install

## run storybook
npm run storybook


## build
npm run build - will build with vite - issues with img and types

npm run rolbuild - will build with rollup - seems more stable

### images
images: need plugin for it

## typing
to load the package in another project, can appear typescript issues,
need to load its typing also. something like

> "@types/atlaskit-shad": "file:../atlaskit-shad/index.d.ts",

## Add new component
Look for something similar on ui.shadcn.com or radix-ui.com. For instance select:
> npx shadcn-ui@latest add select

Customize the component from what was deployed on /components folder

## Add entirely new component
Copy baseline from shadcn and insert on atlas-components folder

## Checklist before done
- Create unit tests
- create one story for it
- check if it works on dark theme
- check if the user is able to navigate on the component using Tab or arrow keys
- check if there are styles for all states, hover, focus, active

## Style

Style with tailwindcss, using atlas theme

## Theme

Atlas themse is set at tailwind.config.js, use these colors, spacing when styling components

## Run locally
run  on this repo
> npm link

where you want to test, remove current atlasuikit-v2, and run
> npm link atlasuikit-v2

## Vscode Extensions
Please install these extensions to help you during coding

## Roadmap
- include image build ( size limit?)
- check build size
- check if able to export single components.
- icon library
- translation
- date component
- supports different form validation formats
- searchable/autocomplete dropdown
- sortable/pagination table