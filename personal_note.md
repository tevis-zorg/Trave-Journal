01-08-2025
/* TODO == 1/3 DONE */
/*
1. Try to move asset imports into JSON files,
then, call its content into this component;

GOAL: PWA , Webpack, and React are all working together. to make it dynamic as well; //STATUS: ONGOING...

  1.1. Wrap all the links and description as well;

2 Eliminates all usage of div soup, then using for loop to display it instead;

GOAL: Implements "array.map()" concept and understading To make it look like a grid layout and handle multiple component at once; // STATUS: ONGOING...

  2.1. Creates specific fragment of each section inside into seperate file to avoid tidious code;

3. Move all destination components into different file and use "props" 
  to display all of the it;

GOAL: Implementation of using "props" inside component to pass and receive data passed into components; //STATUS : DONE! 01-08-2025

  3.1 try to eliminate div soup. using just 1 div instead;
  3.2 for date and time destination, consider to make it dynamic
*/

29-07-2025
/* TODO == DONE */
/*

   * Consider using useState and useEffect functions to update real-
   * time display without refreshing the feed;
   *
  
*/

01-08-2025
/*QUIZ == DONE*/
/*
1. What do props help us accomplish?
receive and passing data into a component and make it becomes reusable;

Expert Advice: It's not necessary to use props for simple components, but it's a good practice to use them for complex components that need to keep our code as DRY(Don't Repeat Yourself) as possible


2. How do you pass a prop into a component?
  by naming a specific component We'd like to pass using a unique variable naming
  to that specific prop we're targeting


3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
  DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

    No, because the JSX we use to describe native DOM elements will
    be turned into REAL DOM elements by React. And real DOM elements
    only have the properties/attributes specified in the HTML specification.
    (Which doesn't include properties like `blahblahblah`)


4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
            {props.propsName}
        </header>
    )
}


5. What data type is `props` when the component receives it?
  Primitive data type: string, number(integer or float), boolean, symbol, Null, Undefined
  complex data type: object, array, functions;
*/


01-08-2025
/*Object Destructuring*/
/*

  Intead of using "function = (props) => {}" we can use
 "const functionName = ({propOne, propTwo}) => {}"
 It is called destructuring props;

 The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, 
 or properties from objects, into distinct variables. 
 It can be used in locations that receive data
 (such as the left-hand side of an assignment or anywhere that creates new identifier bindings).

Pro-tips: it is more convenient to stick with "props.propName" instead of destrcutred one's because it is easier to track the props that are passed to the component. and to distinct between props and local variables.

 */

 15-08-2025
 /*TODO */

 /*

 Try to add more component inside "Entry.jsx" file
 think about the an application which provides the information that about the current villa, weather, bills, possible events that might appears, and travel agent are available includes its price, discounts with special offerings.

 the file might be named vary based on its functionality, for example, "VillaInfo.jsx", "Weather.jsx", "Bills.jsx",
 "Events.jsx", "TravelAgent.jsx"
 inside each file, you can create a component that will be responsible for rendering the information that is related to
 wraps within folder called "information"
 
 */