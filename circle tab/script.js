jQuery(document).ready(function() {
  var numSlices = 7; 
  var pie = jQuery('.pie');
  var sliceAngle = 360 / numSlices;
  var headings = [
    "Needs Assessment & Consultation",
    "We Speak Your Language Empathy",
    "Custom eLearning Solution",
    "Expertise in SaaS Training",
    "Quality Assurance & Delivery",
    "Cost-Effective Outsourcing",
    "Custom Resourcing"
  ];
  for (var i = 0; i < numSlices; i++) {
    var slice = jQuery('<div class="slice"></div>');
    var sliceContents = jQuery('<div class="slice-contents"><div class="slice-text">' + headings[i] + '</div></div>');
    slice.css({
      'transform': 'rotate(' + (i * sliceAngle) + 'deg) skewY(-' + (sliceAngle / 2) + 'deg)'
    });
    sliceContents.css({
      'transform': 'skewY(' + (sliceAngle / 2) + 'deg) rotate(-' + (i * sliceAngle) + 'deg)' // Adjusted rotation
    });
    slice.append(sliceContents);
    pie.append(slice);
  }
});
  
  document.addEventListener("DOMContentLoaded", function () {
        const sectors = document.querySelectorAll(".sector");
        const displayTexts = document.querySelectorAll(".pie-content div");  
        sectors.forEach((sector, index) => {
            sector.addEventListener("click", function () {
                sectors.forEach((s) => s.classList.remove("active"));
                this.classList.add("active");
                displayTexts.forEach((text) => text.classList.remove("active"));
                document.getElementById(`display-text-${index + 1}`).classList.add("active");
            });
        });
    });