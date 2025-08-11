"// force redeploy" 

# My Portfolio

This is my first attempt at a portfolio website using static web page generation. This is currently using the
11ty static site generator (SSG). This is a .js based alternative to Jekyll. I chose this because it seemed to be a
high performing SSG. I want a clean and easy to use website, so I figured I'd look this way first. This project is
currently deployed to Vercel.

# Some Notes From My Day-1 Deploy

###1. Local Build
	Install dependencies
		npm install

	Build the site
		npm run build
	
	Local serve
		npx eleventy --serve
	
### 2. Create a .gitignore in root (Neccessary for Vercel as this fixed permission issues)
/ Tells Git which files/folders to ignore.
	On root, create the following file: .gitignore and populate with the following:	
		node_modules/
		.DS_Store
		.env

### 3. Create a .npmrc file in root
	.production=false
		Suggested during my permissions issue saga.
		
