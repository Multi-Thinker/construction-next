# Top Construction and Design

This repository contains the Next.js migration of [topconstructionanddesign.com](https://topconstructionanddesign.com/). The App Router serves file-based routes, and the build exports a static site to `out/`. The existing OpenAI Sites project is the public review environment.

## Local development

- Install pinned dependencies with `npm ci`. Start the local preview with `npm run dev -- --port 4301` and produce the static export with `npm run build`. In Windows PowerShell, use `npm.cmd` if script execution is restricted.
- Put route pages and metadata in `app/`, shared UI in `src/components/`, and shared CSS in `src/styles.css`. Keep content in Server Components by default. Use Client Components for interactions that need browser state or events.
- Reuse the shared header and footer, existing layouts, icons, and carousel where they fit. Keep page-specific styling scoped. Optimize image assets and preserve their dimensions and alt text.

## Migration and verification

- Check the matching WordPress page before changing content or styling. Use its HTML, stylesheet, and desktop and mobile screenshots to confirm copy, photo order, spacing, and responsive behavior. Record uncertain or missing features plainly.
- Preserve real paths, trailing slashes, and source canonicals. Keep links to unfinished destinations disabled where appropriate. Review crawl files and navigation when enabling routes.
- Check the affected routes from the static build, including direct loads, navigation, assets, and any changed interactions. Verify desktop and mobile layout when visual changes are involved. Use the visible preview for review before advancing to another migration phase when requested.

## Git and preview

- Commit source, lockfiles, and required assets. Keep credentials, dependency directories, build output, and deployment archives out of Git.
- Keep the existing project identity in `.openai/hosting.json`. For a requested release, push the reviewed commit to GitHub, package that same commit's static export for the existing Sites project, and confirm the updated public review URL. Keep the WordPress production site separate from this workflow.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
