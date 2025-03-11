function scrollToOpenPositions() {
    document.getElementById("open-positions").scrollIntoView({
      behavior: "smooth",
    });
  }
  
  // JavaScript code to add animations (if necessary)
  window.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.add("animate");
    });
  
    // If elements exist, add event listeners to input fields
    const jobRoleInput = document.getElementById("job-role");
    if (jobRoleInput) {
      jobRoleInput.addEventListener("input", function () {
        console.log("Searching for job role:", this.value);
      });
    }
  
    const locationInput = document.getElementById("location");
    if (locationInput) {
      locationInput.addEventListener("input", function () {
        console.log("Searching for location:", this.value);
      });
    }
  });
  
  const jobDetails = {
    "Java Developer": {
      description: `We are looking for a Java Developer with 1-2 years of experience. The ideal candidate should have proficient analytical & problem-solving skills and a strong understanding of OOP concepts & UI design principles. Experience in Firebase implementation is mandatory.`,
      responsibilities: `- Develop mobile applications using Java or later versions.
                            - Deploy apps to Android & iOS App Store.
                            - Design app UI using HTML5, CSS3, SCSS.
                            - Implement Ionic / Cordova plugins for functionalities like Geo-location, QR Code, Camera, SMS auto-read.
                            - Integrate third-party APIs such as RazorPay, ccAvenue.`,
      requirements: `- 1-2 years of experience in Java development.
                        - Bachelor's degree (Preferred).`,
    },
    "Digital Marketing": {
      description: `We are seeking a Digital Marketing specialist with 0-1 year of experience. The ideal candidate should be familiar with SEO, SEM, and social media platforms. Responsibilities include developing marketing strategies and managing online campaigns.`,
      responsibilities: `- Develop and execute digital marketing strategies.
                            - Manage online advertising campaigns.
                            - Work on SEO, SEM, and Social Media platforms to drive traffic.
                            - Analyze web traffic and provide marketing insights.`,
      requirements: `- 0-1 year of experience in Digital Marketing.
                        - Bachelor's degree in Marketing or a related field (Preferred).`,
    },
    'Digital Marketing': {
        description: `We are seeking a Digital Marketing specialist with 0-1 year of experience. The ideal candidate should be familiar with SEO, SEM, and social media platforms. Responsibilities include developing marketing strategies and managing online campaigns.`,
        responsibilities: `- Develop and execute digital marketing strategies.
                           - Manage online advertising campaigns.
                           - Work on SEO, SEM, and Social Media platforms to drive traffic.
                           - Analyze web traffic and provide marketing insights.`,
        requirements: `- 0-1 year of experience in Digital Marketing.
                       - Bachelor's degree in Marketing or a related field (Preferred).`
    },
    'Graphic Design': {
        description: `We are looking for a Graphic Designer with 0-1 year of experience. The candidate should have expertise in Adobe Creative Suite, including Photoshop and Illustrator, and should be capable of creating engaging visuals for digital platforms.`,
        responsibilities: `- Create and design digital assets for websites, social media, and advertisements.
                           - Work closely with the marketing team to ensure designs meet requirements.
                           - Maintain brand consistency across designs.`,
        requirements: `- 0-1 year of experience in Graphic Design.
                       - Proficiency in Adobe Photoshop, Illustrator, and other graphic design software.
                       - Portfolio showcasing previous work (Preferred).`
    },
    'HR': {
        description: `We are looking for a female HR candidate with 0-1 year of experience. The role involves recruitment, employee management, and improving workplace culture. Strong interpersonal and communication skills are required.`,
        responsibilities: `- Assist in recruitment processes.
                           - Manage employee relations and resolve conflicts.
                           - Conduct performance reviews and foster employee engagement.`,
        requirements: `- Female candidates only.
                       - 0-1 year of experience in HR.
                       - Bachelor's degree in Human Resources or related field (Preferred).`
    },
    'Full Stack Trainer': {
        description: `We are looking for a Full Stack Trainer with 1-3 years of experience. The ideal candidate should have strong knowledge of modern web technologies and frameworks, along with experience in conducting training sessions.`,
        responsibilities: `- Train students and professionals in Full Stack development.
                           - Teach front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, Express, MongoDB, SQL) technologies.
                           - Conduct hands-on coding sessions and mentor learners.
                           - Stay updated with latest industry trends and incorporate them into training.`,
        requirements: `- 1-3 years of experience in Full Stack Development.
                       - Strong expertise in JavaScript, React, Node.js, Express, MongoDB, SQL.
                       - Prior training/teaching experience is a plus.
                       - Bachelor's degree in Computer Science or equivalent.`
    },
    'Automation Tester': {
        description: `We are hiring an Automation Tester with 0-1 year of experience. The candidate should have hands-on experience with testing frameworks and automation tools.`,
        responsibilities: `- Design and develop automated test scripts.
                           - Implement automation frameworks using Selenium, Cypress, or similar tools.
                           - Perform API testing using Postman or REST Assured.
                           - Identify and report bugs, collaborate with developers for fixes.`,
        requirements: `- 0-1 year of experience in automation testing.
                       - Experience with automation testing frameworks (Selenium, Cypress, Appium, etc.).
                       - Proficiency in Java/Python for scripting.
                       - Bachelor's degree in Computer Science or relevant field.`
    },
    'Big Data Analyst': {
        description: `We are looking for a Big Data Analyst with 0-1 year of experience. The candidate should be able to analyze and interpret large datasets to provide insights for decision-making.`,
        responsibilities: `- Work with large-scale datasets and perform data analysis.
                           - Utilize tools like Hadoop, Spark, and SQL to process and analyze data.
                           - Create data visualizations and reports for stakeholders.
                           - Optimize data processing workflows for performance improvements.`,
        requirements: `- 0-1 year of experience in Big Data Analysis.
                       - Strong knowledge of SQL, Python, and big data tools like Hadoop and Spark.
                       - Experience with data visualization tools (Tableau, Power BI, etc.).
                       - Bachelor's or Master's degree in Data Science, Computer Science, or related field.`
    }
    // Other job listings...
  };
  
  function openPopup(jobTitle) {
    const job = jobDetails[jobTitle];
    if (!job) {
      console.error("Invalid job title:", jobTitle);
      return;
    }
  
    document.getElementById("job-title-popup").innerText = jobTitle;
    document.getElementById("job-description").innerHTML = `
          <strong>Description:</strong><br>${job.description}<br><br>
          <strong>Responsibilities:</strong><br>${job.responsibilities}<br><br>
          <strong>Requirements:</strong><br>${job.requirements}
      `;
    document.getElementById("job-popup").style.display = "flex";
    document.getElementById("position").value = jobTitle;
  }
  
  // Close the Job Description Popup
  function closePopup() {
    document.getElementById("job-popup").style.display = "none";
  }
  
  // Open Application Form Popup
  function openFormPopup(jobTitle) {
    closePopup();
    document.getElementById("form-popup").style.display = "flex";
    // Set the position value in the form to the selected job title
    document.getElementById("position").value = jobTitle || "";
  }
  
  // Close the Application Form Popup
  function closeFormPopup() {
    document.getElementById("form-popup").style.display = "none";
    // Clear the position field when cancelling
    document.getElementById("position").value = "";
  }
  
  // Form Submit Handler
  function submitForm(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Get the form values
    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value.trim();
    const address = document.getElementById("address").value.trim();
    const country = document.getElementById("country").value.trim();
    const state = document.getElementById("state").value.trim();
    const city = document.getElementById("city").value.trim();
    const postalcode = document.getElementById("postalcode").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const email = document.getElementById("email").value.trim();
    const cv = document.getElementById("cv").files[0];
  
    // Form Validation
    if (
      !name ||
      !address ||
      !country ||
      !state ||
      !city ||
      !postalcode ||
      !contact ||
      !email ||
      !cv
    ) {
      alert("Please fill out all fields and upload your CV.");
      return;
    }
  
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validate phone number (assuming 10-digit number)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(contact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }
  
    // Simulate form submission (You can implement AJAX for actual submission)
    console.log("Form Submitted with:", {
      position,
      name,
      address,
      country,
      state,
      city,
      postalcode,
      contact,
      email,
      cv,
    });
  
    // Show success message
    alert("Application submitted successfully!");
  
    // Close the form popup
    closeFormPopup();
  }