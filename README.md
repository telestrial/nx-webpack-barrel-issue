# Nx, Webpack, and Barrel File Problems

This repo demonstrates an issue with the nx convention of using barrel files at the top level of libraries to export contents combined with webpack's tree-shaking/code splitting/dead code elimination.

Steps:

1. Start the dev server: `nx run woggle:serve`
2. Open chrome, pointing to localhost:4200 (or a different port if that one was in use when you started the dev server)
3. Open up the coverage tab: right-click -> inspect -> top right 3 dots -> More tools -> Coverage
4. Set the URL Filter in the coverage panel to "/libs". I'm pretty sure this only works in development mode as files are chunked/mangled in production.
5. Click through the demo, noting which parts of the libs folder code appear.
6. Next, flip the imports commented/uncommented in the next page files: orange-test.tsx and orange-blue-test.tsx. Note: we're just using a different path alias set in the project root tsconfig, pointing now to /ui/src/lib/*whatever-box*/index.tsx instead of the top level: /ui/src/lib/index.ts
7. Restart the dev server
8. Get in the same setup with the coverage report (or just reload the page if you have it up still)
9. Notice the difference in what gets imported when.g
