
# 📧 Email Verification System (PHP Project)

This project allows users to **register** or **unsubscribe** using their email address with OTP-based verification. When an email is submitted, a 6-digit OTP is sent, which must be verified before registration or unsubscription is completed.

---

## ✅ Features
- Email registration with OTP verification
- Email unsubscription with OTP verification
- Each step (registration/unsubscribe) is followed by a verification step
- Shows/hides forms dynamically based on user actions (only one OTP form visible at a time)
- Feedback messages for success/failure (auto-hide after 5 seconds)
- Clean, mobile-friendly UI
- Simple and secure backend using plain PHP
- CRON job setup for sending GitHub activity updates every 5 minutes

---

## 🛠 Technologies Used
- **PHP** (No frameworks)
- **HTML/CSS**
- **JavaScript** (for form visibility + auto-hide messages)
- **PHP `mail()`** function for sending emails
- **Linux CRON** job for automation

---

## ▶️ How to Run Locally
1. Clone or download this project to your local machine.
2. Open terminal in the project folder.
3. Run the PHP local server:
   ```bash
   php -S localhost:8000

Open your browser and visit:

http://localhost:8000/index.php

---

## 📁 Project Structure
<pre lang="markdown">
``` ├── index.php # Main frontend and form logic 
    ├── functions.php # Backend PHP functions (send email, register, unsubscribe, etc.) 
    ├── style.css # CSS styles
    ├── cron.php # CRON logic to fetch GitHub updates 
    ├── src/ │ └── setup_cron.sh # Shell script to set up CRON job 
    └── README.md # Project instructions ``` </pre>

# How to Run Locally
1. Open terminal and go to the project directory:

    ```cd github-timeline-akashsingh005006-main```

2. Move into the src directory if needed:
   
      ```cd src```

4. Start the local PHP server:

      ```php -S localhost:8000```

4. Visit the application in your browser:

      ```http://localhost:8000/index.php```
