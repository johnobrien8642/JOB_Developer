Hi, welcome to my clone of Tumblr, called Rumblr.

To use the site you can either create your own account or log in
with this guest account:

email: guest<span>@</span>email.com

password: password

https://rumblr.app

I began my coding journey at the beginning of last year. Around that time
I found a coding bootcamp called App Academy. App Academy is a 9 week 
in-person coding bootcamp, but they also offer their entire course for free
online. I followed this course at my own pace over the course of the last year.

The stack used to create this clone is MongoDB, Express, React, Node, GraphQL and Apollo.
My static file database is AWS s3 with Cloudfront as the CDN. My database is MongoDB Atlas.
App Academy teaches two tech stacks throughout their course. They begin with Ruby and Ruby
On Rails with Postgresql and they end with the MERN stack. While I do enjoy Ruby On Rails
and look forward to possibly returning to it in the future, I decided to use the
MERNGA stack here for a few different reasons:

-I wanted to gain as much as experience as I could using Javascript.

-After being introduced to React I found that I really enjoyed how easy it made
using Javascript to render all of my UI.

-I found that the GraphQL query paradigm made a lot of sense to me and offered me 
a degree of control over my queries that other fetching methods do not have.

-Apollo also appeared to be a powerful tool. For the purposes of a social media website
I knew that I would want the ability to cache large swaths of data to minimize
hits to the database.

-I wanted to use MongoDB for a few reasons. For this project I decided that a NoSQL,
DBDS would be an easy way to implement the features I was going to be including.
SQL would also have been adequate, but I felt that the addition of not having to write
a migration every time I changed the database schema was also very useful given that this
is my first full project and I knew I was going to be making frequent changes to the
database schema.

-The MERNGA stack I used is far less forgiving and streamlined than using Ruby On Rails.
I decided that at this point in my journey as a programmer it was time to take on a greater
challenge to help solidify the underlying principles of software programming and web 
development I had so recently learned.

---------------------------------------------------------------------------------------

I attempted to clone as many features as I could possibly handle during the past three months.
In the app you will see what is essentially the very basics of a fully functioning social
media application.

Highlighting just a few of the features I built, these two come to mind:

1) I built my own custom drag and drop for posts and forms using both React, Node and
   vanilla Javascript. To keep the look and feel of Tumblr I used a combination
   of image containers and text box containers. I leveraged the useEffect hook
   with custom object indexes to keep the image file upload array in sync with
   how the images were being displayed. Doing this ensured that the file uploads
   were always uploaded and returned in the order that they appeared within the post.
   
2) Tumblr has a style of post called a Chat post, and I built my own version of it.
   This was a great learning experience using Javascript ranges, selections and a
   little bit of regex. I used all three to make the Chat post function. When making
   a chat post everytime a colon is entered on a new line everything to the left of the colon
   is bolded. This experience actually led me to learning about rich text editors and eventually
   implementing one called CKEditor which I integrated throughout the app.
   
 ---------------------------------------------------------------------------------------
 
This has been a great experience. I've learned so much just over the course of the past three months.
Looking back at my codebase as I'm about to declare the first version of this app finished
I can already see countless areas for improvement. I also see countless lessons that I'm excited
to have learned and look forward to being able to build upon in the future.

I hope you enjoy Rumblr and I look forward to any and all feedback!

John










