var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Web Developer', 'Graphic Designer','Web Designer'],
    typeSpeed: 50,
  });

  // scripts.js

// Function to handle the download button click
document.getElementById('download-btn').addEventListener('click', function() {
  // Create an anchor element
  const link = document.createElement('a');
  
  // Set the href attribute to the resume file path
  link.href = 'resume.pdf';  // Path to your resume file
  link.download = 'My_Resume.pdf'; // Name for the downloaded file
  
  // Append the link to the document body
  document.body.appendChild(link);
  
  // Trigger the download by simulating a click
  link.click();
  
  // Remove the link from the document
  document.body.removeChild(link);
});

// Function to handle the GitHub button click
document.getElementById('github-btn').addEventListener('click', function() {
  window.open('https://github.com/MdTauseefr', '_blank'); // Replace with your GitHub URL
});
