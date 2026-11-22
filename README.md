# Luke Jeppsen — Portfolio

Personal portfolio site: plain HTML, CSS, and JavaScript with no build step, hosted on GitHub Pages.

## Structure

```
index.html        Page layout and styling
js/content.js     ALL site content: about, experience, projects, skills, links
assets/           favicon.svg, resume.pdf
.nojekyll         Tells GitHub Pages to serve files as-is
```

To change any text, project, or link, edit `js/content.js`.

## To-do before submitting

Search `js/content.js` for `TODO`:
- [ ] GitHub profile URL (`github`)
- [ ] LinkedIn profile URL (`linkedin`)
- [ ] Repo/video links on each project (`url: "#"`)

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` and visit http://localhost:8000.

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**. Under **Source**, pick **Deploy from a branch**, then choose `main` and `/ (root)`.
3. The site goes live at `https://YOUR-USERNAME.github.io/Portfolio/`.

For the submission zip, zip the folder without `.git`.
