# Resume source sync and automation

This directory stores the LaTeX source files synced from Overleaf.

## Directory structure

- `resume/en/`: English resume source (`CV_Jin_Yurui.tex`) and `.latexmkrc` (pdflatex)
- `resume/zh/`: Chinese resume source (`CV_Jin_Yurui.tex`) and `.latexmkrc` (xelatex)

## Overleaf sync workflow

1. Maintain two Overleaf projects (English and Chinese).
2. Export or sync each project's source files into:
   - `resume/en/`
   - `resume/zh/`
3. Commit and push updates to `main`.

## GitHub Actions automation

The workflow `.github/workflows/compile-resume.yml` triggers on:

- pushes to `main` that modify `resume/**`
- manual `workflow_dispatch`

It compiles both resumes and copies output PDFs to:

- `assets/pdf/en-us/CV_Jin_Yurui.pdf`
- `assets/pdf/zh-cn/CV_Jin_Yurui.pdf`

Then it commits and pushes updated PDFs back to `main` automatically.
