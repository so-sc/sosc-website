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

### Next What?

This is the basic commands that you will be using most of the times, but Git is not limited to this there are a lot of things you can do
I am planning to release more blogs continuing this topic, which covers concepts like Branching, Pull Requests, How to Contribute to other's repository and much more.

Let me know how informative you found this blog, so that seeing your reviews I will feel more enthusiastic and if there are any improvements I can do it as well.

Thank you for sticking till the end, see you with another blog 😄.

<!-- Footer section -->

**[Deveesh Shetty](https://deveesh.vercel.app)**
Connect with me on [GitHub](https://github.com/Deveesh-Shetty), [Twitter](https://twitter.com/shettydeveesh)
