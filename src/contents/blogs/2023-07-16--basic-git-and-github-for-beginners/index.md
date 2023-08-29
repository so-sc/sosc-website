---
slug: /blog/basic-git-and-github-for-beginners
date: 2023-07-16
author: Deveesh-Shetty
name: Deveesh Shetty
title: Git and GitHub for Beginners - The Basics
tags: Git and GitHub | Technical Blog
cover: './cover.jpg'
description: 'On 14-07-2023 SOSC Conducted a Git and GitHub workshop where Deveesh Shetty was the speaker. This blog covers the basic Git and GitHub topics that everyone needs to know, so they can start showcasing their projects in GitHub and contribute to other open source projects'
---

# Git and GitHub for Beginners - The Basics

Git Git Git... Git is all we hear people talking about these days. Now, you want to know what it is, so you are in the right place 😉.

In this blog you will learn what Git is, why should you be using Git, and how you can start pushing your code to GitHub using Git. And the good part? you won't be needing any prior knowledge for this.

Before we get started, let's see...

## A brief Introduction

"Git is a **free and open source distributed version control system** designed to handle everything from small to very large projects with speed and efficiency." ~ Linus Trovalds

For instance, you are playing a game, where there are checkpoints, so if you lose in the later stages you start again from the previous checkpoint. That is basically one of the many things that Git can help you with.
Apart, from that we can have branches, collaboration, reviews, comments, tracking, etc. don't worry you will be seeing these in the later part of blogs.

## Installing Git

Refer to this link to download [Git](https://git-scm.com/downloads/) ✨

## Getting Started with Git

Okay, that is all theory, let's start with the commands that you need to get started 😄

Now to check whether your machine has Git installed, run the following command

```bash
git --version
```

If you are getting a output with some numbers for eg. `git version 2.41.0` (number may not be the same), then you are all ready to go 🥳.

Now you have Git installed in your machine. But, Git doesn't know you. So now, you need to tell your name and email to Git by executing the following commands.

```bash
git config --global user.email "<your-email>"
git config --global user.name "<your-name>"
```

eg.:

```bash
git config --global user.email "example@gmail.com"
git config --global user.name "John Doe"
```

**P.S. Preferred to put your GitHub Email ID**

Now to check whether your details are added correctly, execute you should be getting your entered details as the output.

```bash
git config --list
```

If the output is too big scroll down using `Arrow-down` key there you will find your name and email.

Okay, the above commands are only needed for people who newly installed Git and this shall only be executed once.

Now, Fasten your seat belts and let's get started with Git Commands 🚀

## Basic Git Commands

- First things first, whenever you start a new project, in that folder you have to initialise a local repository.

```bash
git init
```

You should get a message saying **Initialised empty git repository**. And also a new hidden file should be formed called `.git` which git uses to keep track of that folder.

Now the question arises, How do I create a checkpoint and save my code in the Git repository?

For that we will be following these three concepts, you can see them in the flow diagram below.

![Workflow of Add, Commit and Push](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ue4u5ql7c3cgxwgs7evy.png)

Let me explain that in detail, when we create a new file, Git doesn't know that there is a new file. So we will be `add`ing the file to staging area where you can check the files and do any optimisation if needed, and also git can keep a track of it. Then we take a snapshot of all the current files i.e basically creating a checkpoint by `commit`ing the files. Then if we have connected our local repository with GitHub then we can `push` it, so everyone can access those files and collaborate, review and comment on it.

I know this is quite confusing, but it will get cleared as we move on with each step particularly and seeing how to do that using commands.

### Add, Commit and Push our code

These are the commands you will be using most of the times while working on your project.

#### Adding files to Staging area

In the folder create a new file called as `Readme.md` and write something inside it for eg.

```
# Hello! My Name is Deveesh Shetty
```

P.S. `.md` means a markdown file which is like a text file but with extra features. Like here `#` represents `<h1>` tag from HTML

Git doesn't know that you have created a new file, so you can do it by adding the file to the staging area by using the command

```bash
git add <file-name>
```

Here in my case replace the `<file-name>` with `Readme.md`

**Pro-tip**: You can replace the file name with `.` (a period) to add all the untracked and modified files in that folder to the staging area.

```bash
git add .
```

#### Removing files from Staging area

Now your files are in the staging area. But you want to remove some files from the staging area which are not ready yet, you can simply do it by using the following command

```bash
git reset <file-name>
```

#### Creating a Commit

Commit or in simple terms a checkpoint is where you save the past history of your code like a snapshot, and its very important because you can traverse through your previous code iterations and also get to know when was the particular change done in the code.

Once, you have staged all the changes, creating a commit is quite simple by doing

```bash
git commit -m "Message describing the changes u made"
```

**Pro-tip**: The message you write while committing should give a brief idea about what changes are made while the committing the code.

For example in my case it is:

```bash
git commit -m "Adds Readme File"
```

Now you have created a checkpoint for your code which u can see by running the following command

```bash
git log
```

This command will give you all the commits you made with the `Author` of the commit, `Time` when the commit was made, and also a unique ID called `Commit Hash` with the `Commit Message`.

The logs will be ordered in descending order, meaning the most recent commit will be at the top and you can access the old ones by pressing `Arrow-down` key. Once you have gone through it, press `q` to exit the log command.

If you just want to see the flow of recent commits with no extra information about author and time, you can use the following command to achieve it.

```bash
git log --oneline
```

Also you may, have noticed something like `(HEAD -> master)` or `(HEAD -> main)`. Here `HEAD` means the current commit in which you are, in our case it is the **most recent commit** and `main` and `master` means the default branch name. Don't worry about branches right now, it is covered in the later parts of the blog :)

#### Honorable mention

You can try using this command after each process where it will tell you what is the current status of the files in your project

```bash
git status
```

or to get everything in brief add the `-s` flag after it.

You will get one or two letters in front of each file-name you can refer this table to know more about it.
![git status letter meanings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xbhjq0lbhy4kbrt7o8lm.png)

#### Pushing your code

All the things which we did till now is only limited to your PC that's why it is called `local repository`, no one else can see it.

- Now, you are working on a project and you want your friend to help you with that. How can you do it? It's simple you have to `push` your code to a `remote repository`, which is basically a folder which is hosted somewhere and it can be access by anyone (U can make it private and limited to few people as well).
- This is where **GitHub** comes into picture. GitHub is a like a storage space for all your git repositories, where people can view, review, comment and collaborate on your code.

**Note:** You can use any other platform instead of GitHub, like GitLab, BitBucket, etc. Here I am using GitHub in this blog

Before we move on to pushing our code, we have to get working with a few things

- If you don't have a GitHub account, create one by going to [GitHub](https://github.com)
- Once you have your account, create a new repository by clicking the `+` icon on the top-right part of the Navbar.

![Creating a new repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1mtp64el3thwrtuheml5.png)

- Give a `Name` to the repository and if you want you can give a `Description` as well. Then you can choose the visibility for the repository. `Public` means it everyone can see it and `Private` means it is only visible to you and if needed you can select people who can see the repo later in the settings.

The page should look something like this -
![Creating a Repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/u3qhazxg6uc8eztiwrp2.png)

- Press the `Create repository` button

You should be redirected to a **Quick Setup** page, where if you scroll down you can find this code snippet (Don't copy mine as it will be different in your account)

![Setting up remote repository for existing repository](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/sbatoxwxp3sor3q8uslp.png)

**Note:** We are pushing an existing git repository because we have already created one in previous steps, no need to redo it.

You can copy and paste those commands to your terminal and it should `push` your existing code to your remote repository.

But, I won't let you just copy paste, let's see what each command is doing in here

```bash
git remote add origin https://github.com/Deveesh-Shetty/Learn-Git.git
```

**In your case the URL will be different**
What this command does is, it is telling git to add a remote repository named `origin` and the path of the repository is mentioned in the url

You can check your remote repository by running

```bash
git remote -v
```

It should list the remote repository(s)

Next command, this is used to make sure that the branch name in the git repository is same as that of GitHub by renaming the branch name, so there won't be any difficulties in later stage.

```bash
git branch -M master
```

**Note:** In your PC the command may have `main` instead of `master` it is totally fine, it is based on the branch name which is mentioned in GitHub. So don't change it.
Also to note, the above two steps is required only once only while creating a new repository.

Finally, we are pushing the code by running

```bash
git push -u origin master
```

If I break it down it will look like this

```bash
git push -u <remote-repo-name> <branch-name>
```

We are telling git to push the code to the remote repository which we added ie `origin` and to the branch called `master` or in your case it maybe `main`.

We are using the `-u` flag so that next time if we only type `git push` it will remember the previous instructions and push it to `origin master`.

Now, if you go back to the GitHub **Quick Setup** page, and refresh it, Voila! You should see your code there. Now, you can share the GitHub repository link to your friend and show them the projects u made :)

### Summarising everything we learned

This is the basic process of how you can add your code to GitHub, and let the world know about your projects. Let me summarise that for you real quick

- Whenever you do some changes to your code, `add` it to the staging area.

```bash
git add .
```

- Then when everything looks good, and you are ready to save your process as a checkpoint, `commit` the code.

```bash
git commit -m "what-this-commit-adds/improves"
```

- Then once you are confident enough to show to code to others `push` it to GitHub

```bash
git push origin <branch-name>
```

`<branch-name>` can be `master` or `main`

So this is how simple Git is, in your next projects start using Git to record your progress and also utilise GitHub to showcase your work and also to work on other cool open source projects.

# Branching in Git

Branching in Git is a very important and one of the core concepts in version control. It is a game-changer, trust me on that :)

## What is Branching?

Let's begin with a simple analogy. Imagine yourself as a skilled artist who loves to paint landscapes of nature, Picture yourself sitting in a serene place working on your masterpiece, already half-way through its creation and you encounter a situation where you feel the need to try a new shade for the painting to experiment with colours. Would you risk making the changes directly on the canvas? Of course not! Instead, you would want to freely try out the new colours in a separate piece of paper. If you like the chosen shades, you’ll add it confidently to your actual painting.
But, if you weren’t satisfied, then you can simply discard the separate piece of paper and save time to protect the painting from a blunder.

So, Branching in Git does the similar thing. If you are working on a project and wish to experiment with new code or implement a new feature, you can simply create a new branch and work on it. If you are satisfied, `merge` it to the original branch otherwise you can discard it leaving the original code base untouched.

I'll show in detail how that works, so stick till the end 😉

### What is a branch?

A branch is a timeline in which you work and commit code changes.

- `master` or `main` branch is the main timeline in which you'll be working, the changes made to this branch will reflect in production. (Optional) You can rename this branch as well by using:

```bash
git branch -M <new-name>
```

- Then you can create other branches where you will be implementing features, testing out code, and much more by using the following command:

```bash
git branch <branch-name>
```

Now switch to the new branch by using:

```bash
git checkout <branch-name>
```

Replace `<branch-name>` with a name which reflects the purpose of the branch for eg. `feat-dashboard` which means I am using this branch to create a new Dashboard Feature.

**Pro-tip:** You can create a new branch and switch to it in just one command:

```bash
git checkout -b <branch-name>
```

Here, `-b` flag creates a new branch with the specified name if the branch doesn't already exist.

### Let's get started with Hands-on coding

Before continuing with branching commands, ensure that you have some content in the `main` or `master` branch, if it is empty, then add a file called `Readme.md` and add some text in that for instance:

```md
# My name is Deveesh Shetty
```

Next, "commit and add" the file by using the following command:

```bash
git add .
git commit -m "Adds my Readme File"
```

Create a new `feature` branch and switch into it by running the command:

```bash
git checkout -b feature
```

Now, you are in the `feature` branch. Add a file in the new branch called `Feature.md` and open it and add some content in it:

```md
# Hello from feature branch
```

You know next, "add and commit" the files by using the following commands:

```bash
git add .
git commit -m "Adds a Feature File"
```

Check the commit history by running:

```bash
git log --oneline
```

You shall see an output similar to:

![Git Log in Feature Branch](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9w5xtlibjf2dbxssmx0g.png)

I want you to notice `(HEAD -> feature)` where `HEAD` is the current commit on which you are and `feature` is the branch we are currently working on.

Now, try switching back to the `master` or `main` branch by using either one of these command based on your main branch name (eg.: if the branch name is `main` then run `git checkout main`)

```bash
git checkout main
# or
git checkout master
```

_If you encounter an error while running this command, one possible issue might be that you haven't committed the code in the current branch. To resolve this make sure to commit your changes to the current branch and then try the above command again._

Run the `git log --oneline` command again, and compare the output.

![Git log in Master or Main Branch](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d2ykc52bon3ongj5ia0g.png)

What do you see? The file `Feature.md` is missing and the commit from the `feature` branch is also not there. This is the concept of branching, the changes you made in another branch are not reflected in the main branch. It prevents many problems such as breaking the production or having unnecessary codes or commits, etc.

### How to get the changes in the main branch?

Well, now in a real-world scenario, you have built a feature in a branch and it works perfectly. Now, you want to include it in the main branch and deploy it to production. How do you do it? It's simple! You merge it 😄

#### What in the world is merging?

When you want changes from the feature branch to be reflected in the main branch, you do that by merging the feature branch with the main branch. During the merge, a new commit called a merge commit will be formed which will include the changes made in the feature branch and show them in the main or master branch.

To achieve this, first, switch to the `main` or `master` branch:

```bash
git checkout main
# or
git checkout master
```

And then use the following command to merge the feature branch into main:

```bash
git merge feature
```

Here `feature` is the name of the branch to be merged.

You should see the `Feature.md` file in the folder now. Next, run the `git log --oneline` command again and view the commit history.

![Git Log after merging](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7376fqzeo7e70m8prd1q.png)

You will see the commit made in the feature branch in the main branch. Also, you will notice `(HEAD -> master, feature)`, which means the current commit is same for both the `master` and `feature` branch. (It maybe `main` in your case, don't worry it's the same)

Now you can switch back to the `feature` branch and start working on it. Once you are comfortable with the changes, merge them into the main branch. It's as simple as that.

This is a visual explaining the branching concept
![Branching concept in a diagram](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hyv57jw2pacigt13uft2.png)

<br>

# Introduction to GitHub Issues

You maybe new to GitHub or you are using it from quite a long time. But, have you came across the Issues tab in any GitHub repository? If no, then no worries I will be covering about the Issue tab and how it can make an impact on an open source project.

![Issue Tab](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fobw2gh1v9kaqln89dxg.png)

You may have seen this tab in GitHub, this is the Issues tab. The number you see next to it are the total issues which are currently Open.

## What are GitHub Issues?

Issue is one of the feature by GitHub, it provides a way for the users to track tasks, bug fixes, feature requests, etc.

## Why would I use GitHub Issues?

There are endless way for why you will be using the GitHub Issues tab, let me break down a few for you!

### Raising a bug report

You are using an open source project, and you were trying something but the result you got was not the one you expected, you will be like (it is some bug in the project) and neglect it... No!! You are a good open source contributor it's your responsibility to let the developer know about the bug, so the best way is if the project is open sourced in GitHub, go to the issue tab and tell about the bug, elaborate on what you wanted and what result you got, provide some visual prove like screenshots or video (if possible). This will help the developer to reproduce the bug and fix it in next release!

### Giving idea for a new feature

For instance, you are using a software and you have a very good feature which will improve the software. Why keeping the idea to yourself? Raise a new issue in GitHub and describe your idea in human language (yes, you don't even need to code), and mention how it can improve the project. Now anyone interested can take up the issue and start building the feature, even you can build it if you are interested in it, which is very much appreciated!

_Note: Most of the softwares you use are open source, but you are not aware of it! I can list a few, VSCode, MonkeyType, Python, Android, Linux, Brave Browser and many more... ✨_

## How to create a new Issue?

If you found a bug, or you have a new feature Idea. Go to the GitHub repository of the project and click the Issues tab. In there click the `New Issue` button and describe the bug or feature and `Submit` voila! you have created a new Issue, also you have a green square in your GitHub heatmap 😉.

**Some Notes:**

- Before creating an issue make sure there is no similar issue already opened, so it will save your's as well as the maintainer's time.
- Don't create random issues in repositories, always make sure you have correctly mentioned your plan or described the bug.
- Use markdown to describe your issue by using todo-lists, heading, code blocks and many more :)

### How to find issues to work as a beginner?

If you are beginner you can find the issues in GitHub repository by filtering with labels like `good first issue` or `first-timers-only` or `documentation` which will help you do your first open source contribution. Most of the repos have these labels which makes it easier for beginners to contribute.

### How to work on issues?

Once you found a good issue which you feel like you can work on, put a comment in there that you want to solve it or implement it. So the maintainer can assign you the issue which will make sure no 2 people are working on same issue, which is waste of time for both. Also in contrary, if the issue is already assigned to someone you can't work on it because "Early bird gets the worm". Don't worry try finding another issue there are many...

Now you have the issue assigned, `fork` and `clone` the repository and create a new `branch` and start working (don't know what is branching? check it out [here](https://dev.to/devshetty/learn-about-branching-in-git-bm3)). Once you have a solution for the issue then proceed by creating a [`Pull Request`](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) (PR), now it's maintainers turn to review and merge your PR. If they need any changes do the needful :)

I will be covering about Pull Requests in my upcoming blogs stay tuned for that!
Thanks for sticking till the end... that's all for this blog, let me know your opinions and suggestions so I can improve my future blogs 😄

Thank you for sticking till the end! Until then have a great day and happy learning!!!

**Deveesh Shetty**

[Github](https://github.com/Deveesh-Shetty) | [Twitter](https://twitter.com/shettydeveesh) | [Dev.to](https://dev.to/devshetty)
