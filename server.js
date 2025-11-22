// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use environment port for Render deployment

// --- Define the content required by the assignment ---
// *** REPLACE THESE PLACEHOLDERS WITH YOUR ACTUAL DETAILS ***
const myName = "IEL DENZ"; 
const mySection = "BA 4102"; 
const myQuote = "The best way to predict the future is to create it. — Peter Drucker"; 

// --- Define the Text/HTML Response with Embedded CSS ---
const landingPageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Final Project - IT 412</title>
    
    <style>
        :root {
            --pink-bg: #FFC9D2; /* Soft pink background */
            --dark-pink-btn: #EE879F; /* Button color */
            --white: #FFFFFF;
            --dark-text: #333333;
        }

        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: var(--pink-bg);
            color: var(--dark-text);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 0px; /* Reduced side padding for wider header */
        }

        /* --- Header/Navigation Styling (Set to 30px side padding) --- */
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 0px; /* Adjusted side padding for the header */
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
        }

        .nav-links {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
        }

        .nav-links li {
            margin-right: 120px; 
            font-size: 18px;
            cursor: pointer;
        }

        .it-button {
            background-color: var(--dark-pink-btn);
            color: var(--white);
            padding: 8px 18px;
            border-radius: 30px;
            font-weight: bold;
            text-decoration: none;
        }

        /* --- Main Hero Section Styling (Now single column) --- */
        .hero-section {
            /* Removed display: flex and image column styles */
            padding: 150px 30px 50px 50px; /* Added left padding for content */
            height: 70vh;
            color: var(--white); /* White text for the main area */
        }

        .content-col h1 {
            font-size: 60px;
            margin: 0;
            font-weight: 300;
        }
        .content-col h1 strong {
             font-size: 90px;
             font-weight: bold;
             display: block;
        }

        .assignment-info {
            background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent white box */
            padding: 20px;
            margin-top: 30px;
            color: var(--dark-text);
            border-radius: 5px;
            max-width: 500px; /* Limit box width for better look */
            line-height: 1.5;
            text-align: left; /* Align text left inside the box */
        }
        
        .quote {
            font-style: italic;
            margin-top: 10px;
            color: #555;
        }

    </style>
</head>
<body>

    <div class="container">
        <header class="header">
            <div class="logo">Final Project</div>
            <ul class="nav-links">
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
                <li>Others</li>
            </ul>
            <a href="#" class="it-button">IT 412</a>
        </header>

        <section class="hero-section">
            
            <div class="content-col">
                <h1>Hi, I am <strong>${myName}</strong></h1>
                
                <div class="assignment-info">
                    <p><strong>Full Name: Algaba, Iel Denz Pedutem</strong></p>
                    <p><strong>Class Section:</strong> ${mySection}</p>
                    <p class="quote">"${myQuote}"</p>
                </div>
            </div>
        </section>

    </div>
</body>
</html>
`;

// --- Define the Route ---
app.get('/', (req, res) => {
    // Set the Content-Type header to ensure the browser interprets the content as HTML
    res.setHeader('Content-Type', 'text/html');
    // Send the entire HTML string to the client
    res.send(landingPageContent);
});

// --- Start the Server ---
app.listen(port, () => {
    console.log(`Server running and listening on port ${port}`);
    // This console output is crucial for your screenshot
});