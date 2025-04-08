# 🦭Dev Easy🦭
## This project was made by Jaxon Bladow, Corey Butler, Hayden Carpenter and  Olivia Sharpston.

#### Everyone played a part and contributed to the project. Olivia got the .html and .script files to look nice and pretty and included project requirements like footers and headers. She also compiled everything into one file and submitted the project. I added the editting a fact and featuring a random fact which are shown below. Corey created the code that allowed users to sort the facts from A-Z or Z-A. Hayden compiled all the class facts and drew our wireframe.

<details><summary>Our Facts</summary>
        
* I broke my finger
* Corey said he was not famous
* Hayden likes to swim
* Olivia knows her alphabet backwards

</details>

#### Here is a piece of code that I made that features a random fact at the top of the website.

https://github.com/JaxonTheCritic/dev-easy/blob/c9e816147641bd407b8c92f7efe5e6db72cdfe10/scripts/script.js#L33-L40
https://github.com/JaxonTheCritic/dev-easy/blob/c9e816147641bd407b8c92f7efe5e6db72cdfe10/scripts/script.js#L46-L51

I also made this part of the code which made the facts editable. However, with how I programmed this it does not change the actual facts in the array. It only changed them on the webpage, this means a simple refresh would have the facts back to normal.
``` diff
        classFacts.forEach((fact, index) => {
            const factText = $("<div>").addClass("fact-text").attr("contenteditable", true).text(fact);

            factText.on('blur', function() {
                classFacts[index] = factText.text();
            });
```

This is the code **Corey** wrote to sort the facts from A-Z or Z-A 
```       $("#sortButton").on("click", function () {
            if (isAscending) {
                classFacts.sort(); // Sort A-Z
                $(this).text("Sort Z-A");
            } else {
                classFacts.sort().reverse(); // Sort Z-A
                $(this).text("Sort A-Z");
            }
            isAscending = !isAscending;
            renderList(); // Re-render list after sorting
        });
```
By using **const classFacts = [];** Corey allowed us to set up an array with all of our class facts seperated by a comma inside the brackets.
