var topics = ['HTML','CSS','Git','Javascript'];
var randomTopic = topics[Math.floor(Math.random()*topics.length)];

/*Remembering some coding the above method to pick a random topic. We are setting the random topic = to one of the elements
of data in the array. The elements range from 0-3, so this must be a function that randomizes selecting one of the four
possibilities. Math floor is a function I remember that returns the largest integer less than it's input. So floor 2=2,
floor 3.99 = 3. topics.length must do what its name says, return the length of the topics array, which is 4. In order to
generate any number between 0-4, that means math.random generates a decimal value between 0 and 1.
*/

function listTopics()
    {
        for (var x = 0; x < topics.length; x++)
        {console.log(topics[x]);}
    }


function selectTopic()
    {
        if (randomTopic ==='HTML')
        {console.log("Let's study HTML!");}
    else if (randomTopic === 'CSS')
        {console.log("Let's study CSS!");}
    else if (randomTopic === 'Git')
        {console.log("Let's study Git!");}
    else if (randomTopic === 'Javascript')
        {console.log("Let's study Javascript!");}
    else
        {console.log("Please try again!");}
    }

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?")
selectTopic();
