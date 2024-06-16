# wk06-assignment

This is for the following assignment: Week 6 - Build a Cookie Clicker game with React.


Deployed on Render: https://wk06-assignment.onrender.com/


# Reflection

Learning React this week has been a fun doozy. I can immediately appreciate how much it simplifies the process of DOM manipulation and why componentising web development would be extremely helpful for building websites at scale. Having said all that, React's syntax appears abstract, and there's evidently a lot of behaviour occurring under the hood that I'm not aware of, which has made it not exactly intuitive to grasp and learn. I've ended up writing more notes in my code's comments while following along with this week's demonstrations than I have had to previously, and I can see myself having to refer back to those notes with greater frequency going forward.


Other than that, I didn't have much issue getting the basic functionality of the app working, and once I was done, I went ahead and plugged in the styling from the previous vanilla JavaScript version of the Cookie Clicker app we made for week 3, with some changes here and there.


Outside of the scope of the assignment, I implemented a "delete save data" button, repurposing a confirmation alert using `confirm()` that I ended up scrapping from week 3's assignment. It doesn't actually clear local storage to "delete" the player's save data this time around; I made it React-relevant and had it just reset the values of the counters to 0. I otherwise didn't have the time this week to experiment with adding extra features to the app beyond that. The main thing that is missing is extra counters for tracking statistics. I also would have liked to have conditionals changing the text on the page so that the wording is correct when a player only has "1 cookie," instead of the grammatically incorrect display of "1 cookies".


Actually, the main problem I had this week was outside of React: it was with deploying the project to Render. I wasn't quite sure how Render was handling file paths, and I ended up in a process of trial and error trying to figure out where to place my files and reference them in the source code. In the end, all of the repo's media (e.g. images, fonts) ended up being placed in the `/public` folder, with the React code (and CSS) in the `/src` folder. For future projects, I will make sure to spend some time looking into how to set up a repo *properly* in advance for Render deployment.


Anyway, that's it for this week.


# Attributions
## Fonts
- Poetsen One, by John Vargas Beltrán (via Google Fonts)
    - https://fonts.google.com/specimen/Poetsen+One

- Salsa, by Rodrigo Fuenzalida, Pablo Impallari (via Google Fonts)
    - https://fonts.google.com/specimen/Salsa


## Images
- Cookie graphic, Timplaru Emil (via Vecteezy)
    - https://www.vecteezy.com/vector-art/1268053-set-of-tasty-cookies