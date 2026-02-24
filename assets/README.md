# Assets Directory Guide

This directory contains static assets for the YuruiJin academic website.

## Directory Structure

```
assets/
├── img/
│   ├── projects/          # Project cover images and figures
│   │   ├── project1/      # Images for project 1 (core research / robot system / competition / industry)
│   │   └── project2/      # Images for project 2 (algorithm & perception / open source)
│   └── ...                # Other site images (profile, publications, etc.)
├── video/                 # NOTE: Only for reference links; direct upload not supported
│   └── ...                # Existing demo videos (local playback via path interface)
├── pdf/                   # PDF files (CV, papers)
├── json/                  # JSON resume data
└── ...
```

## Image Usage

Place project images under `assets/img/projects/<project-folder>/`.

Reference in project `.md` files with:
```yaml
img: assets/img/projects/project1/cover.jpg
```

Or embed figures in content using `figure.liquid`:
```liquid
{% include figure.liquid path="assets/img/projects/project1/architecture.jpg" caption="Figure caption." class="img-fluid rounded z-depth-1" %}
```

## Video Embedding (YouTube & Bilibili Only)

> ⚠️ **Local video upload is not supported** for project pages.  
> Use YouTube or Bilibili to host your videos and embed them.

### YouTube

```liquid
{% include video.liquid provider="youtube" id="dQw4w9WgXcQ" %}
{% include video.liquid provider="youtube" id="dQw4w9WgXcQ" caption="Your caption here." %}
```

### Bilibili (B站)

```liquid
{% include video.liquid provider="bilibili" id="BV1xx411c7mD" %}
{% include video.liquid provider="bilibili" id="BV1xx411c7mD" caption="演示视频。" %}
```

The `id` for Bilibili is the **BV number** (e.g., `BV1xx411c7mD`), found in the video URL:  
`https://www.bilibili.com/video/BV1xx411c7mD/`

## Project Templates Usage

Six project category templates are provided under `_projects/en-us/` and `_projects/zh-cn/`:

| File | Category | Description |
|------|----------|-------------|
| `1_core_research_template.md` | `core-research` | PhD core research projects |
| `2_robot_system_template.md` | `robot-system` | Complete robot system integration |
| `3_algorithm_perception_template.md` | `algorithm-perception` | SLAM, CV, planning algorithms |
| `4_competition_template.md` | `competition` | Robotics competitions |
| `5_opensource_tools_template.md` | `open-source` | Open source tools and ROS packages |
| `6_industry_collaboration_template.md` | `industry` | Industry collaboration projects |

To create a new project:
1. Copy the relevant template from `_projects/en-us/` (and `_projects/zh-cn/` for Chinese version)
2. Rename the file (e.g., `1_my_research.md`)
3. Update the `page_id` to a unique value
4. Fill in all `[placeholder]` fields in the front matter and content
5. Add your cover image to `assets/img/projects/projectX/cover.jpg`
