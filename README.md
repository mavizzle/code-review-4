# _PingPong!_

#### _Code Review #3 - Ping Pong Webpage, 3/9/19_

#### By _**Lex Wilkins**_

## Description

_This is my third official webpage that is posted on gh-pages (it can be found here: https://mavizzle.github.io/code-review-3/), which includes a Ping Pong generator that takes a user input (number) and returns special strings if the number is divisble by 3 and/or 5. It includes an index.html, Bootstrap 1.3, custom CSS stylesheets, and jQuery 3.3.1._

## Setup/Installation Requirements

* _To view the this webpage and its contents:_
* _You must have a web browser (Firefox, Google Chrome, etc.)_
* _Head to this web address https://mavizzle.github.io/code-review-3/ to view the project_
* _Alternatively, you may clone this repository and view it on your local drive following these steps:_
* _Download Git: head to [this link] (https://www.learnhowtoprogram.com/intro-to-programming-evening/git-html-css/git-and-github) and follow the installation instructions depending on which operating system you use_
* _Within Git/Git Bash, use the command " git clone https://github.com/mavizzle/code-review-3 " and you will have a working copy of this repository_
* _The files may be viewed on your computer's file explorer, or they may be viewed using a text editor such as Atom: download and installation instructions may be found [here] (https://www.learnhowtoprogram.com/intro-to-programming-evening/git-html-css/text-editor-atom)_.

## **Specs for the Ping Pong Webpage**

* _The webpage should take a user input and return it_
  * _Input Example: 4_
  * _Output Example: '4'_

* _The webpage should only accept a user input that is a number between 1 and 100_
  * _Input Example: 0_
  * _Output Example: "Value must be greater than or equal to 1"_

* _The webpage checks if the user's number is divisble by 3 and returns 'ping'_
  * _Input Example: 3_
  * _Output Example: 'ping'_

* _The webpage checks if the user's number is divisble by 5 and returns 'pong'_
  * _Input Example: 5_
  * _Output Example: 'pong'_

* _The webpage checks if the user's number is divisble by 15 and returns 'pingpong'_
  * _Input Example: 15_
  * _Output Example: 'pingpong'_

* _The webpage creates a list of number starting with 1 and ends with the user's number_
  * _Input Example: 4_
  * _Output Example: [1,2,3,4]_

* _The webpage loops through the number list and checks if a number is divisible by 3, 5, or 15 and returns the appropriate number or string_
  * _Input Example: 4_
  * _Output Example: [1,2,'ping',4]_

* _The webpage loops through the number list and appends a HTML list line for each number/string and displays the entire list_
  * _Input Example: 4_
  * _Output Example:_
    * _1_
    * _2_
    * _'ping'_
    * _4_

## Support and contact details

_For any questions or issues regarding this webpage, feel free to reach out to me at alexwilkins99@yahoo.com_

## Technologies Used

_This webpage utilizes HTML, CSS (custom stylsheets and Bootsrap), the JavaScript libray jQuery, the text editor Atom, Git Bash for Windows, GitHub to store the repository remotely, and Google Chrome to view it._

### License

* _This is an open source webpage, and may be accessed by anyone_*

Copyright (c) 2019 **_{Lex Wilkins, Epicodus}_**
