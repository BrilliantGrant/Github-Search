# Github User Search 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

#### 12th January 2018

#### By Brilliant Kaimba briegrant416@gmail.com

## Description

This ia a web application where users may enter a GitHub username into a form, submit it, and see names and descriptions of that person's public repositories. A person can also look for repositories.

## Setup/Installation Requirements
 * Install Angular CLI that will helps to create and develop our
	Angular apps.(npm install -g @angular/cli)
 * Install angular-cli-ghpages that helps to deploy your application. 
 * Install Typescript(npm install -g typescript )
 * Install Node  allows to run Javascript code on the terminal.
 * Atleast have a computer or a laptop
 * Have an internet connection

1.To run app locally: In terminal, navigate to your desktop and execute:

 To run app locally: In terminal, navigate to your desktop and execute:

  * $ git clone https://github.com/cruzlof/Quotes.git
  * $ npm install
  * $ bower install

Visit https://cruzlof.github.io/Github-Search/

2.Create an empty .env file at the root of the project directory.

3.Create a symbolic link in the node_modules folder that points to the root of the project directory:
$ ln -s /full/path/to/project/directory ./node_modules/app

4.Generate a Github Personal Access token:

Visit the settings area of your Github account and select 'Personal access tokens' on the sidebar.
Click 'Generate New Token'.
GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal 
data.

5.Finally, select 'Generate Token'.

Type the following in your .env file but replace "YOUR_ACCESS_TOKEN_HERE" with your personal access token:
exports.apiKey="YOUR_ACCESS_TOKEN_HERE"

6.Finally, run:

$ gulp

## Technologies Used
The technologies used to design this website of github-user-search are 
* CSS Bootsrap
* Angular 4
* Typescript
* Angular CLI
* API
* Node.js
* HTML

## Known Bugs
There are no known bugs.

### Github API limits and setup:

This app uses the GitHub API to retrieve the data. This API allows 5,000 requests per hour with an API key, but only 60 requests per hour without one. Everyone is therefore required to use their own unique key. GitHub refers to these keys as "Personal Access Tokens".

Creating Personal Access Tokens

Visit the Settings area of your GitHub account, select Personal Access Tokens from the sidebar, and hit Generate New Token. GitHub will offer a list of options. Do not select any. These grant read/write permissions and access to personal data. Finally, select Generate Token.

### License
This project is licenced under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*

Copyright (c) 2018 Brilliant Grant


   
   