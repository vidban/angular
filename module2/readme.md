### General Idea
The idea of this assignment was to create a "check off" shopping List application.

Think of being in a store with a shopping list that allows you to "check off" the items you've already bought, except instead of checking them off, the bought item simply moves to the "Already Bought" list.

HTML page displays 2 lists, one titled "To Buy" and the other "Already Bought".

The "To Buy" list is pre-populated with a list of at least 5 items. Each shopping list item has a name and quantity and is displayed to the user in the format of `Buy item_quantity item_name`. For example, shopping list item `{ name: "cookies", quantity: 10 }` would be listed as `Buy 10 cookies`.

Next to each item in the list is a button with the label "Bought". When the user clicks on the "Bought" button, its associated item is removed from the "To Buy" list and appears in the "Already Bought" list.

The "Already Bought" list is initially empty and display a message "Nothing bought yet". This message appears *only* when the list is empty. Once something is "bought", it appears on this list, the format of each item in the list being `Bought item_quantity item_name`. For example, the bought item of 10 cookies mentioned before would appear in this list as `Bought 10 cookies`.

Once the user "buys" every item on the "To Buy" list, i.e., clicks on the "Bought" button for every item in the "To Buy" list, instead of the empty "To Buy" list, a  message "Everything is bought!", is displayed.


Done as part of ***Single Page Web Applications with AngularJS***  course on Coursera
