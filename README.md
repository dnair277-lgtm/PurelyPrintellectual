# PurelyPrintellectual LLC Website

A static website for PurelyPrintellectual LLC, a studio that designs custom 3D-printed PC accessories. Orders go through email, so the site needs no backend.

## Files

```
index.html        Homepage
404.html          Shown for broken links
css/style.css     Styles
js/main.js        Mobile menu, scroll animations, order form (opens a pre-filled email)
assets/           Photos and favicon
.nojekyll         Tells GitHub Pages to serve the files as they are
```

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `purelyprintellectual`.
2. Upload every file and folder here to the repo root, including `.nojekyll`.
3. In the repo, go to **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, and pick `main` and `/ (root)`.
4. After about a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

Custom domain (optional): add it under **Settings → Pages → Custom domain**, then point your DNS to GitHub Pages.

## Editing

- **Add a product:** copy one `<figure class="card">` block in `index.html`, put the photo in `assets/`, and change the image path and text.
- **Change order emails:** search `index.html` for the email addresses. They appear in the form radio buttons and the contact cards.
- **Change colors:** edit the variables at the top of `css/style.css` (`--accent` is the mint green).

## Preview locally

```
python -m http.server
```

Then open http://localhost:8000.
