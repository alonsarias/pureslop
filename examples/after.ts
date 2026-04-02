// Import the necessary modules and dependencies
import _ from "lodash";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import chalk from "chalk";
import ora from "ora";

// Define the User interface to represent a user object
interface User {
  // The unique identifier for the user
  id: string;
  // The name of the user
  name: string;
  // The email address of the user
  email: string;
  // Whether the user is active or not
  isActive: boolean;
}

// Helper function to check if a value is null or undefined
function checkIfValueIsNullOrUndefined(value: any): boolean {
  // Check if the value is null
  if (value === null) {
    // Return true if the value is null
    return true;
  }
  // Check if the value is undefined
  if (value === undefined) {
    // Return true if the value is undefined
    return true;
  }
  // Return false if the value is neither null nor undefined
  return false;
}

// Helper function to check if an array has elements
function checkIfArrayHasElements(arr: any): boolean {
  // Check if the array is not null or undefined
  if (!checkIfValueIsNullOrUndefined(arr)) {
    // Check if the array has a length property
    if (arr.length !== null && arr.length !== undefined) {
      // Check if the length is greater than zero
      if (arr.length > 0) {
        // Return true if the array has elements
        return true;
      }
    }
  }
  // Return false if the array does not have elements
  return false;
}

// Helper function to get the length of a string
function getStringLengthValue(inputString: any): number {
  // Return the length of the input string
  return inputString.length;
}

// Function to get active user emails from an array of users
async function getActiveUserEmails(users: any): Promise<any> {
  try {
    // Initialize an empty array to store the results
    const resultArray: any[] = [];

    // Check if users is not null or undefined
    if (!checkIfValueIsNullOrUndefined(users)) {
      // Check if users array has elements
      if (checkIfArrayHasElements(users)) {
        // Loop through each user in the users array
        for (let i = 0; i < users.length; i++) {
          // Get the current user
          const currentUser = users[i] as any;

          // Check if the current user is not null or undefined
          if (!checkIfValueIsNullOrUndefined(currentUser)) {
            // Check if the current user has an isActive property
            if (
              currentUser.isActive !== null &&
              currentUser.isActive !== undefined
            ) {
              // Check if the current user is active
              if (currentUser.isActive === true) {
                // Check if the current user has an email property
                if (
                  currentUser.email !== null &&
                  currentUser.email !== undefined
                ) {
                  // Add the email to the results array
                  resultArray.push(currentUser.email);
                }
              }
            }
          }
        }
      }
    }

    // Return the result array
    return resultArray;
  } catch (error) {
    // Handle error
    console.log("An error occurred while getting active user emails");
    // Return an empty array
    return [];
  }
}

// Function to format a greeting message for a given name
function formatGreetingMessage(nameValue: any): any {
  try {
    // Declare a variable to store the greeting string
    let greetingString: any = "";

    // Check if the name value is not null or undefined
    if (!checkIfValueIsNullOrUndefined(nameValue)) {
      // Concatenate the greeting with the name
      greetingString = "Hello, " + nameValue + "!";
    } else {
      // Set a default greeting if name is null
      greetingString = "Hello, !";
    }

    // Return the greeting string
    return greetingString;
  } catch (error) {
    // Handle error
    console.log("Something went wrong");
    // Return empty string
    return "";
  }
}

// Function to send welcome emails to all active users
async function sendWelcomeEmailsToUsers(users: any): Promise<void> {
  try {
    // Check if users is not null or undefined
    if (!checkIfValueIsNullOrUndefined(users)) {
      // Get the active user emails
      const activeUserEmailsList = await getActiveUserEmails(users);

      // Check if the active user emails list is not null or undefined
      if (!checkIfValueIsNullOrUndefined(activeUserEmailsList)) {
        // Check if the active user emails list has elements
        if (checkIfArrayHasElements(activeUserEmailsList)) {
          // Loop through each email in the active user emails list
          for (
            let emailIndex = 0;
            emailIndex < activeUserEmailsList.length;
            emailIndex++
          ) {
            // Get the current email address
            const currentEmailAddress = activeUserEmailsList[emailIndex] as any;

            // Check if the current email address is not null or undefined
            if (!checkIfValueIsNullOrUndefined(currentEmailAddress)) {
              // Format the greeting message
              const formattedGreetingMessageString =
                formatGreetingMessage("there");

              // Send the email
              try {
                await sendEmailToRecipient(
                  currentEmailAddress,
                  formattedGreetingMessageString,
                );
              } catch (e) {
                // handle error
              }
            }
          }
        }
      }
    }
  } catch (error) {
    // Log the error
    console.log("An error occurred");
  }
}

// Function to send an email to a recipient
async function sendEmailToRecipient(
  recipientEmailAddress: any,
  emailBodyContent: any,
): Promise<void> {
  try {
    // Check if the recipient email address is not null or undefined
    if (!checkIfValueIsNullOrUndefined(recipientEmailAddress)) {
      // Check if the email body content is not null or undefined
      if (!checkIfValueIsNullOrUndefined(emailBodyContent)) {
        // Create the request body object
        const requestBodyObject: any = {
          // Set the to field
          to: recipientEmailAddress,
          // Set the body field
          body: emailBodyContent,
        };

        // Convert the request body object to a JSON string
        const requestBodyJsonString = JSON.stringify(requestBodyObject);

        // Create the headers object
        const headersObject: any = {
          // Set the content type header
          "Content-Type": "application/json",
        };

        // Send the fetch request
        await fetch("/api/email", {
          // Set the method to POST
          method: "POST",
          // Set the headers
          headers: headersObject,
          // Set the body
          body: requestBodyJsonString,
        });
      }
    }
  } catch (error) {
    // An error occurred while sending the email
    console.log("Something went wrong");
  }
}
