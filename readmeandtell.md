in first i installl all the things like 
create next app 
and make sanity projects add the nextjs 
and also i install the Clerk for login authentication and 

i do the setup of User Authentication 
which given by Clerk in this time when i create project on Clerk
after Clerk 

i make one group routes in app directories Called Store which i add layout and app.tsx which is in app directory i cut from app and paste in group routes called store  which have all the userAuth which i take the Clerk 


than i make one layout in studion because in studio its not make default i copy my layout which is make in store and paste in studion layout and remove the all things jsut one thing in this layout children and metatag only i remain and all i delete 


after do this i set my global css import because i add the app.tsx in store then the import of global css is change like i take one level more so i use .. double dot say one level more i use 

Now i start to make components using shadcn buildtin components its too awesome which i add and i also mentioned which component i use in it 
button componet i take the shadcn 
header component i make my self because i add in my feature 

Now  i am working on header i use next form in search bar A Next.js form is a user interface element for collecting and submitting data in a Next.js application. It sends the data to the backend via API routes or server-side functions for processing, validation, or storage.


We use Next.js forms to collect user input (e.g., login info, feedback, or product details) and process it seamlessly in a full-stack Next.js application. They enable efficient data handling, validation, and integration with APIs, databases, or third-party services.


i make header add first make one header in header i make one link called shop and shop side i make one search using nextform and i make one basket which i display the cart item in this basket and then i calll the clerkLoadeed for Clerk authentication in this i make if user not  loggin in than display sign in other wise you display welcome user and its pic and also show the order and one thing i add passkey its most secure authentication i make this 

What is a Passkey?
A passkey is a modern, secure alternative to traditional passwords. It uses public-key cryptography to authenticate users without requiring them to remember or type passwords. Passkeys aim to make authentication more secure, user-friendly, and resistant to phishing attacks.

its most secure method of authentication in the world in modern time avery big componayies use this method and its too safe 



now i am going to next to make search i am going to the group rouote make one routes called store and i make one folder called search and in search i make one page.tsx

in search page i make one components using nextjs search params its too important 

What Do searchParams Do?
Explanation in Simple Terms
searchParams is an object used to extract query parameters from a URL. Query parameters are the part of a URL that comes after a ?. These parameters pass extra information to a page, allowing it to display dynamic content.

How searchParams Work
Extract Data from the URL:

If the URL is /search?query=laptops, the searchParams object contains { query: 'laptops' }.
Provide Dynamic Content:

You can use this data to show relevant results. For example, if the query is "laptops," the page can display "Search results for laptops."
Benefits:

Dynamic Pages: You can create pages that change based on the user's input.
Better User Experience: Users see personalized content without needing multiple static pages.

Now i complete the navbar now i am going to the frontend thats way i am going to sanity 
first i going to sanity cli and copy the cammond intall g sanity 
and second i am going to the sanity typegen in it and this is  sanity type gen read it 


What is Type Generation (type-gen) in Sanity?
Type Generation (often referred to as type-gen) in Sanity is a feature that automatically generates TypeScript types from your content schema. This ensures that your code has strong type-checking, improves developer productivity, and reduces potential errors when working with structured content from Sanity.

i use this commond npx sanity schema extract its make one scema .json to automatically add the type of data and i add one more this i who commond for generate type  npx sanity typegen generate for generate the type 

now i make schema.json and add the configration in pakage.json 

now i start the products schema if you like to work with me please first order the tea than call for me ok

now i start the product schema and i make one file called productType.ts which i make all the schema 

in product type i add the all the produt defined its too good and deficult now i meet with you in morning!

now i create product type for product schema 
now i initailize this in index .ts where i tell i make this for products 

now i open CategoryType.ts category type where i add some in category 
i add this in category what is in category 
preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },

i add the preview in the category

in this schema type you add one more section which its make for you one section in the studio i learn i also make alot of section which make too goodd setup 

now i open the structure .ts and see whats kind of changes i do 
first i change the title because i make blog but i change with Ecommerce 

now i make orderType.ts for order where i mange the orders 
in order i learrn alot of thing how the order come and change the order status and more i learn and you almost 3 times read the comment than you understant the how its work 

i delete the Author.ts  author type 

because i have nothing need 

i also delted post type PostType.ts because the i have nothing type 

and add my custom orderType.ts in the index.ts

and i make custom sales type where i defined whats in my slae its too difficult but i learm 

now i am going to the client.ts to connect the sanity to the nextjs 

i add the stega and set the url of studio in vercel and localhost 


and for secure my sanity i make one file in lib called BackendClient.ts where i add configration 

I GERNERATE THE TOKEN FROM THE SANITY PROJECT AND SET THE BACKEND CLINT.TS


to see the live thats why i add token in live 

and i also add read token to read the file 
i also add configration in live.ts to see the live on studion my website  

i use typegen to type the all the produts and type generate its too good and awesome 