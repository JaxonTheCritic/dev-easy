$(document).ready(function(){
    console.log("console log is here");

    const classFacts = ['I have two brother', 'My favorite color is purple', 'I like to swim', 'I broke my finger', 'I am ambidextrous', 'I can say the alphabet backwards', 'I am not famous', 'I was born in Louisiana', 'I have never had a PB&J', 'I am allergic to cats', 'I like trains', 'I know the secrety identity to beastcarp1', 'I have a dog', 'I hate UNA parking', 'I have three dogs', 'I am adopted from China', 'I used to have a orange Hummer H3', 'I play on the rudgy team', 'UNA basketball sold the bag', 'I hate javascript', 'The Great Wall of China is 13,000 miles long', 'I love the Bible verse Romans 5:8', 'I like running', '🦭🦭', 'I have eatem one pound of ground beef everyday for the last six months', 'Still very less parking space at UNA.', 'I enjoy kickboxing', 'David Government Middle Name Burls did not post a fact.'];

    function renderList() {
        const classFactList = $("#classFactList");
        classFactList.empty();

        classFacts.forEach((fact, index) => {
            const factText = $("<div>").addClass("fact-text").attr("contenteditable", true).text(fact);

            factText.on('blur', function() {
                classFacts[index] = factText.text();
            });

            const listItem = $("<li>").addClass("list-group-item").append(factText);
            classFactList.append(listItem);
        });
    }
    
    //https://www.w3schools.com/jquery/event_ready.asp
    //https://www.w3schools.com/jquery/html_empty.asp
    //https://www.w3schools.com/jquery/html_append.asp
    //https://www.w3schools.com/jquery/html_attr.asp
    //https://www.w3schools.com/jquery/event_on.asp
    //...eh

    console.log(classFacts);

    // $('#classFactList').append('<li class="list-group-item">new hardcode fact</li>');

        for(index = 0; index < classFacts.length; index++){
        console.log(index);
        $('#classFactList').append('<li class="list-group-item">' + classFacts[index] + '</li>');

        function displayRandomFact() {
        const randomFact = classFacts[Math.floor(Math.random() * classFacts.length)];
        document.getElementById('randomFactHeader').innerText = randomFact;
    }

    //https://www.w3schools.com/jsref/jsref_floor.asp
    //https://www.w3schools.com/jsref/jsref_random.asp
    //https://www.w3schools.com/jsref/prop_node_innertext.asp

    $('#randomFactHeader').css('text-align', 'center');

    displayRandomFact();
        
        renderList();
    }

    let isAscending = true; // Sorting order flag

    function renderList() {
        const classFactList = $("#classFactList");
        classFactList.empty(); // Clear previous items

        classFacts.forEach((fact, index) => {
            const factText = $("<div>").addClass("fact-text").attr("contenteditable", true).text(fact);

            factText.on('blur', function () {
                classFacts[index] = factText.text();
            });

            const listItem = $("<li>").addClass("list-group-item").append(factText);
            classFactList.append(listItem);
        });
    }

        // Button click event for sorting
        $("#sortButton").on("click", function () {
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
    
        renderList(); // Initial render
})
