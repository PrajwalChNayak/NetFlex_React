# NetFlex_React

NetFlex_React is a flexible and versatile network service library for React and React Native applications. It provides a convenient way to make HTTP requests with support for various data formats and authentication methods.

## Features

- Support for sending both JSON data and form data in HTTP requests.
- Seamless integration with React and React Native applications.
- Flexible authentication options, including token-based authentication.
- Easy-to-use API for making HTTP requests with minimal configuration.
- Extensive error handling and logging capabilities.


## Installation

You can install NetFlex_React via npm:
npm install netflex-react


## Usage
Importing
import { POSTNETWORK, GETNETWORK, PUTNETWORK, PATCHNETWORK, DELETENETWORK } from 'network-utility-functions';

## Making HTTP Requests

## POST Request with Token and JSON Data
javascript
Copy code
const url = 'https://api.example.com/users';
const payload = { name: 'John', email: 'john@example.com' };
const token = 'user_token_here';

const response = await POSTNETWORK(url, payload, token);
console.log(response);

## GET Request with Token
javascript
Copy code
const url = 'https://api.example.com/users';
const token = 'user_token_here';

const response = await GETNETWORK(url, token);
console.log(response);

## PUT Request with Token and Form Data
javascript
Copy code
const url = 'https://api.example.com/users/123';
const formData = new FormData();
formData.append('name', 'John Doe');
const token = 'user_token_here';

const response = await PUTNETWORK(url, formData, token, true);
console.log(response);

## PATCH Request without Token and JSON Data
javascript
Copy code
const url = 'https://api.example.com/users/123';
const payload = { email: 'john@example.com' };

const response = await PATCHNETWORK(url, payload);
console.log(response);
##DELETE Request without Token
javascript
Copy code
const url = 'https://api.example.com/users/123';

const response = await DELETENETWORK(url);
console.log(response);

