# New atlaskit shad

npm install

npm run storybook - runs storybook

npm run build - will build with vite - issues with img and types

npm run rolbuild - will build with rollup - seems more stable

images: need plugin for it

to load the package in another project, can appear typescript issues,
need to load its typing also. something like

> "@types/atlaskit-shad": "file:../atlaskit-shad/index.d.ts",

nest steps:
- include image build ( size limit?)
- check build size
- check if able to export single components.
- icon library
- translation
- date component
- supports form validation