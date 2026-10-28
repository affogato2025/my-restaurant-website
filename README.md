# The Dorset

The Dorset is a responsive restaurant concept website for a seasonal New American restaurant in Greenwich Village, New York City. Its visual and editorial direction is rooted in local farms, Atlantic coastal ingredients, modern hospitality, and a black, cream, and deep-burgundy palette.

This is a portfolio demonstration built by 邓钰鸣, not an operating restaurant or booking service. Planned live URL: [dorset.affogato.xin](https://dorset.affogato.xin).

## Current pages

- **Home** — brand introduction, farm-and-coast story, signature dishes, concept guest notes, location, and contact details
- **Dinner Menu** — a text-led seasonal menu covering mezze, salads, starters, mains, sides, desserts, and cocktails
- **About** — restaurant story, philosophy, team, gallery, and visit information
- **Catering** — private-event information, media carousel, enquiries, and contact details
- **Reservations** — a portfolio-safe reservation enquiry and contact flow without a fake ordering provider

## Technology

- Next.js App Router
- React and TypeScript
- Tailwind CSS
- Framer Motion
- Netlify deployment with Deploy Previews
- Netlify Forms for contact enquiries

## Local development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Run checks before deployment:

```bash
npm run lint
npm run build
```

## Configuration

Public brand, contact, address, hours, SEO, and structured-data values are configured through `NEXT_PUBLIC_*` environment variables. Copy `.env.example` to `.env.local`, then replace any placeholder social profiles and set the final production URL before deployment. Netlify environment-variable changes require a new deploy before they appear on the site.

The project intentionally uses `Reserve a Table` and `Contact Us` enquiry actions instead of pretending to connect to a live ordering provider.

## Content status

The home page and dinner menu follow The Dorset concept direction. The About and Catering pages are being transitioned from the original template media to restaurant-specific photography and final brand copy. Do not remove media still referenced by those pages until their replacements are connected.

## Netlify deployment workflow

Netlify detects this Next.js project and uses its maintained Next.js runtime. The committed `netlify.toml` runs `npm run build` and publishes the generated `.next` output.

Use a preview-first workflow so routine development does not publish to the production domain:

1. Create a feature branch instead of committing routine work directly to `main`.
2. Open a pull request to receive a Netlify Deploy Preview URL.
3. Review the preview, then batch approved work into a consolidated release.
4. Merge to `main` only for the planned production releases, typically two to four times per month.

After connecting the repository in Netlify, enable **Forms > Form detection** and redeploy. The contact component submits URL-encoded data to the static `public/__forms.html` skeleton so Netlify can register and process the form. A local Next.js server does not process that endpoint; verify successful and failed submissions on a Deploy Preview before production.

Add the variables from `.env.example` in Netlify's environment-variable settings and set `NEXT_PUBLIC_SITE_URL` to the final domain so canonical URLs, social previews, the sitemap, and structured data use production addresses. Do not commit `.env.local`, `.netlify`, or credentials.

## License

Released under the [MIT License](LICENSE).
