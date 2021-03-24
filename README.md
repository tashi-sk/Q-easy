# Q-easy

---

![mResponsive img](/assets/images/responsive-img.png)

---

### Q-easy is an interactive website designed for users to play a quiz game to test their knowledge.
For now the application quiz contains only gernal knowledge questions.

You can view the live site [here](https://tashi-sk.github.io/Q-easy/) 

---

## Contents

* User Experience

    * User Stories

        * As a user i want that website is easy to navigate through the pages.
        * As a user i want to know the rules of the Quiz.
        * As a user i want to know the correct answer if i choose wrong answer.
        * As a user i want to know my score while im playing Quiz.
        * As a user i want to know how many Question are attempted/Left from Quiz.
        * As a user i would like to use contact form if i have query or bug report to inform for the site.
        * As a user i would like to see social media network of the site.
        * As a user i would like to check weather condition in given city.

---

    * Design

        * Colour Scheme

    ![Color pallete 1](/assets/images/color-pallete-1.png)

    ![color-pallete 2](/assets/images/color-pallete-2.png)

---

        * Typography

            * Only Ranchers font for the whole site.

---


    * Wireframes

![mobile and tablet](/assets/images/wireframe-mob.png)

![mobile and tablet](/assets/images/wireframe-mob2.png)

![desktop](/assets/images/desktop1.png)

![mobile and tablet](/assets/images/desktop2.png)

---


## Features

    * Current Features
        * Site has navigational links to give user ease of acces throught out the site.
        * Footer is provided for used to see social media network related to the site.
        * Weather api is used to search weather quick report. User has to input city name to see condition of weather.
        * If user search for weather report without input, an error messsage will appear to let user know.
        * when user click on search input again the previous weather will disppear.
        * User cannot to go to next Question in quiz until selects the answer for current question.
        * Score is continuesly updated on every question answered to let user know the current score.
        * Question is displayed to let user know the question attemted out of all.
        * once the quiz is finished user will know the final score.
        * Restart button will appear once the quiz is finished.
        * Contact forms are provided if user wants to contact site owner for his user query.

    * Features Left to Implement
        * I would like to add audio on every question when answer right or wrong.
        * i would like to add background music if user want to play it while quiz is running.
        * i would like to give user choice if he want to save his score to compare from other players score.

## Technologies Used
    * HTML5
    * CSS3
    * javascript
    * Bootstrap
    * Balsamiq Wireframes
    * Google light house
    * FontAwesome
    * [Coolors](https://www.coolor.co)

## Testing
    * HTML5 validator is used to check errors. It hasfound no errors.
    * W3C CSS validator is used to check code errors. found no errors. 
    * Js Hint is used to check javascript code for error. it has no error but only few warning.
    * Google Lighthouse report is below to show the results.
    ![Lighthouse](/assets/images/lighthouse.png)

---

### Contact form:
* User can use contact form from navigation link of contact us.
* You must fill your name and email in acceptable format to send query email.
* If user try to submit form with an invalid email address, the form will  verify that a relevant error message appears.
* once the form is submitted properly, succes message will appear fater it.

---

## Deployment

### Deployment through GitHub Pages

This site was deployed through GitHub Pages using the following steps:

* Log into GitHub.
* Locate the repository.
* Locate the settings option along the options bar.
* Locate GitHub Pages options towards the bottom of the page.
* In 'Source' dropdown, select 'Master' from the branch options.
* Click the save button.
* The site is now published though it may not be accessible straight away.
* The site URL will be visible on the green bar under the section header. This will remain there permanently and you can refer back to it at any time.

### Forking the Repository
* Log in to GitHub and locate the GitHub Repository
* At the top of the Repository just above the "Settings" Button on the menu, locate the "Fork" Button.
* You will have a copy of the original repository in your GitHub account.
* You will now be able to make changes to the new version and keep the original safe.

### Making a Local Clone
* Log into GitHub.
* Locate the repository.
* Click the 'Code' dropdown above the file list.
* Copy the URL for the repository.
* Open Git Bash on your device.
* Change the current working directory to the location where you want the cloned directory.
* Type git clone in the CLI and then paste the URL you copied earlier. This is what it should look like:
   * git clone https://github.com/tashi-sk/Q-easy.git
* Press Enter to create your local clone.

---

## Credits
    * All content of this site is written by me.

    * the only image which is used for background image is taken from [Unsplash.com](https://www.unsplash.com)

    * [LCN](https://www.lcn.com) is used to make site Favicon image.

    * i have seen many tutorials on youtube before making this quiz. i decided to take some code from this tutorial [Youtube tutorial](https://www.youtube.com/watch?v=WUBhpSRS_fk&t=3035s).
    some of the code is taken and altered from this tutorial.
    * Stackoverflow was used to search for solution to shuffle the array to show different order of question on quiz next straight
    [stackoverflow code]( https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
    * I would like to thanks Code institute and mentors for helping me out and understand the concept of coding briefly.
    * I would like to thanks Slack community to answer my question before even i had them. 
