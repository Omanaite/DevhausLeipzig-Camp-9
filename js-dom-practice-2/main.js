const personObject = {
    "personName": "Franz Wollang",
    "personEmail": "franz@example-email.com",
}

const { personName, personEmail } = personObject; // destructuring assignment

/* Template blog post object
{
    "title": null,
    "subtitle": null,
    "author": name,
    contentBlocks: []
}
*/

const blogPosts = [
    {
        "title": `My Favorite Cocktails`,
        "subtitle": 'A journey into wild flavors of Gin',
        "author": personName,
        "contentBlocks": [
            "This is wrapped in a &lt;p&gt; tag.",
            "This is wrapped in a separate &lt;p&gt; tag.",
            "I'm speaking with myself, number one, because I have a very good brain and I've said a lot of things. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.",
            "Be careful, or I will spill the beans on your placeholder text. You could see there was text coming out of her eyes, text coming out of her wherever."
        ]
    },
    {
        "title": `My Favorite Books`,
        "subtitle": "Bigger isn't necessarily better",
        "author": personName,
        "contentBlocks": [
            "Some people have an ability to write placeholder text... It's an art you're basically born with. You either have it or you don't. I have a 10 year old son. He has words. He is so good with these words it's unbelievable.",
            "Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.",
            `We have so many things that we have to do better... and certainly ipsum is one of them. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice." Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! I think my strongest asset maybe by far is my temperament. I have a placeholding temperament.`
        ]
    },
    {
        "title": `My Favorite Foods`,
        "subtitle": "It's peanut butter all the way down",
        "author": personName,
        "contentBlocks": [
            "The other thing with Lorem Ipsum is that you have to take out its family. Trump Ipsum is calling for a total and complete shutdown of Muslim text entering your website. You’re disgusting.",
            `Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. We are going to make placeholder text great again. Greater than ever before. The concept of Lorem Ipsum was created by and for the Chinese in order to make U.S. design jobs non-competitive. Lorem Ispum is a choke artist. It chokes! You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text. I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, "I can't do it. I just can't do it. It's inappropriate. It's not nice."`
        ]
    }
]

function processContentBlocks(contentBlocks){
    let combinedPTags = "";
    for(let i = 0; i < contentBlocks.length; i++){
        combinedPTags += "<p>" + contentBlocks[i] + "</p>";
    }
    return combinedPTags
}

// Add name and email to appropriate areas of website
document.getElementById('myName').innerHTML = personName;
document.getElementById('myEmail').innerHTML = personEmail;
document.getElementById('myEmail').setAttribute('href', `mailto:${personEmail}`);

// create blog post elements
let blogPostElements = [];

for(let i = 0; i < blogPosts.length; i++){
    const currentBlogPost = blogPosts[i]
    const { title, subtitle, author, contentBlocks } = currentBlogPost;
    const newBlogElement = document.createElement('li');

    newBlogElement.innerHTML = `<div class="blog-post"><h2 style="color: #A8A8FF;">${title}</h2> <h3 style="color: #7575FF;"><strong>${subtitle}</strong></h3> <h4>Written by ${author}</h4><div>` + processContentBlocks(contentBlocks)

    blogPostElements.push(newBlogElement)
}

// get UL element from HTML page
const blogULElement = document.querySelector('#blog-list')

// style elements and add blog post elements as children to UL element
for(let i = 0; i < blogPostElements.length; i++){
    blogPostElements[i].style.cssText = `
        display: flex;
        align-items: center;
        flex-direction: column;
        border-top: 4px solid #c4c3d0;
        width: 80%;
        margin: auto;
        text-align: center;
    `

    Array.from(blogPostElements[i].children)[0].style.cssText = `
        font-size: 1.4rem;
    `

    blogULElement.appendChild(blogPostElements[i])
}