# SOSC
Official website for Sahyadri OpenSource Community.  
All contribution to this website including contents are made through Pull Requests.  
If you are new to Git and GitHub and don't know how to submit a Pull Request(PR), please refer our friendly guide
on submitting your first pull request at [gitme.js.org](https://gitme.js.org).  

All the contents to the website is in Markdown format, Please follow the below guidelines for any contributions.
If you don't know how to write a markdown file, take quick look at [GitHub's markdown](https://guides.github.com/features/mastering-markdown/) guide.

## Adding your profile
Submit a pull request by adding your profile to the `src/contents/members` directory.  
- Create a new file with your github username and .md as extenstion. eg: `haxzie.md`
- In the file add the following lines by filling out the details.
```
---
username: YOUR_GITHUB_USERNAME
name: YOUR_FULL_NAME
designation: YOUR_DESIGNATION_IN_SOSC
email: YOUR_EMAIL_ADDRESS
linkedin: YOUR_LINKEDIN_PROFILE_URL (optional)
skills: YOUR_SKILLS (separated by comma)
---
```

eg:
```
---
username: haxzie
name: Musthaq Ahamad
designation: Community Lead
email: musthu.gm@gmail.com
linkedin: https://www.linkedin.com/in/haxzie/
skills: Android, Design, web, Public speaking
---
```

## Creating a new Blog Post 
To submit a new Blog post, create a new folder in the `src/contents/blogs` directory.  
Name the folder with date of posting and slug eg: `2018-08-02--First-blog-post`.  
Add the images you want to include in yor blog inside this directory and create a markdown file with the name `index.md`.
Add the following frontmatter details into the markdown file followed by your blog post in markdown format.
And finally submit a Pull Request.

PS: 
- Slug is where your blog post will be available on the website and the prefix `/blog/` is a must to identify it as a blog.
- Description should be written in a single line, with considerably almost 2-3 lines as viewable. Make it short and descriptive. 
- Date should be in the format YYYY-mm-dd
- Your author name should be your github profile url.

```
---
slug: /blog/YOUR_BLOG_POST_URL
date: 2018-08-02
author: haxzie
title: Second blog post
tags: blog post
cover: './cover.jpg'
description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure'
---

# Your blog post in Markdown
```

## Creating a new Event
To submit a new event details, create a folder in the `src/contents/events/` directory with the name of the event.  
create a new Markdown file with the name `index.md` and add any images if you want to refer in the same directory.  
follow the below format with all the details inside the markdown file and submit a Pull Request to this repository.

PS: 
- Slug is where your blog post will be available on the website and the prefix `/events/` is a must to identify it as an event.
- Date should be in the format YYYY-mm-dd

eg.
```
---
slug: /events/devhost18
name: devhost:18
date: 2018-12-02
location: Seminar Hall
cover: './cover.png'
link: REGISTRATION_LINK (leave empty if not needed)
---

# Other event details
And descriptions in Markdown
```
