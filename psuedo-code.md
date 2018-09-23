### Option Two: Advanced Assignment (Timed Questions)

![Advanced](Images/2-advanced.jpg)

**[Click Here to Watch the demo](https://youtu.be/xhmmiRmxQ8Q)**.

* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.

  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

### Reminder: Submission on BCS

* Please submit both the deployed Github.io link to your homework AND the link to the Github Repository!

- - -

### Minimum Requirements

Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Adding a README.md as well as adding this homework to your portfolio are required as well and more information can be found below.

- - -

### Create a README.md

Add a `README.md` to your repository describing the project. Here are some resources for creating your `README.md`. Here are some resources to help you along the way:

* [About READMEs](https://help.github.com/articles/about-readmes/)

* [Mastering Markdown](https://guides.github.com/features/mastering-markdown/)

- - -

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.

- - -

### A Few Last Notes

* Styling and theme are completely up to you. Get creative!

* Remember to deploy your assignment to Github Pages.

*If you have any questions about this project or the material we have covered, please post them in the community channels in slack so that your fellow developers can help you! If you're still having trouble, you can come to office hours for assistance from your instructor and TAs.

  **Good Luck!**
-----

Game Steps:

Splash/Title Screen. w/music. Countdown to start! (Title: No time to think!)
First question appears on the screen next to a 10 second timer.

3 possible outcomes:

Player gets the answer correct: Screen appears that says congratulations; after 3 seconds the next questions appears.
Player runs out of time: Display the words, "Outta Time!"; after 3 seconds the next question appears.
Player chooses the wrong answer: Display, "Sorry wrong answer!"; after a second, display the answer below the msg. After 3 seconds move on to the next question.
After going through all 10 questions we display the final score screen
  Must show:
      Correct answers
      Incorrect answers
      and an option to restart (without reloading the page)

Screens to wireframe:

  title screen
  question screen
    correct answer screen
    wrong answer screen
    Time Up screen
    Final score screen
    

-----

Pseudo-code/Steps:

1. [] Wireframe on paper, what I would like this game to look like based on the specifications that have been presented to me.

2. [] Create the basic HTML structure so that I can begin to mainpulate the DOM through the use of jQuery.

3. (Make a personal effort to really keep your code organized!)

4. []Think about what variables I'm going to need for this game. Write them down.

5. []Think about different functions and how they might be arranged. Write those down.

6. []Psuedo-code the structure for the game-code.

7. []Write the code.

8. []test/debug/test/debug.

9. Once game is at it's most basic finish status, read and consider to implement any bonus material either stated within the instructions or otherwise.

10. Finalize project.

11. Push to repo and deploy GitHub Pages.

