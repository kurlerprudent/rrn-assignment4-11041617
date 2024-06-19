# ID : 11041617
# Name: Obed Sarkodie

# Somerthin brief about the components I used



# LoginPage:
Purpose: Manages user login functionality.


# Components Used:
1. View: Creates the container for all login page elements.
2. TextInput: Two TextInput components are likely used, one for username/email and one for password.
3. Text: Displays labels for username/email and password, as well as any error messages.
4. Button: A button component triggers the login function (covered under functions).
5. State Management: You might use useState to manage the values entered in the TextInput fields and a boolean flag to indicate login progress/error.


# HomePage:
Purpose: Displays content accessible after successful login.
Components Used:
View: Creates the container for all homepage elements.
Text: Displays welcome messages, data, or any content relevant to the logged-in user.
ScrollView (Optional): If your homepage content is extensive, a ScrollView allows users to scroll through it.
Button (Optional): You might have a button for logout functionality.
Other Concepts:

Functions:
loginFunction: This function handles user login logic (e.g., sending credentials to a backend server, checking for validity). It might update the state based on success or failure.
Props:
You might use props to pass data between components, for example, passing user information from the LoginPage to the HomePage after successful login.
Stack Navigation:
For switching between the LoginPage and HomePage, you'll likely use Expo's stack navigation to manage a navigation stack. It allows users to navigate back and forth between screens.

# screenshots of the app

![alt firstshot]('assets\screenshot1.jpg')
![alt secondshot]('assets\screenshot2.jpg')
![alt thirdshot]('assets\screenshot3.jpg')
![alt fourthshot]('assets\screenshot4.jpg')
