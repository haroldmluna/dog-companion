function formatReadableString(value) {
    return value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

document.getElementById('dog-care-form').onsubmit = function(event) {
    event.preventDefault();
    var dogName = document.getElementById('dog-name').value;
    var breed = formatReadableString(document.getElementById('breed').value);
    var symptoms = document.getElementById('symptoms').value;
    var duration = formatReadableString(document.getElementById('duration').value);

    var recommendation = getRecommendation(breed, symptoms, duration);
    var resultMessage = "We understand your concern for " + dogName + ", your beloved " + breed + ". Noticing that " + dogName + " has been facing " + symptoms + " for the past " + duration + " can be worrying. Based on what you've shared, here's what we suggest: " + recommendation;

    var newWindow = window.open('', '_blank', 'height=300,width=800');

    newWindow.document.write('<html><head><title>Recommendation</title><link rel="stylesheet" href="style/style.css"></head><body>');

    newWindow.document.write('<div class="container-dark" style="background-color: #YourBackgroundColor; color: #ffffff;">' + resultMessage + '</div>');

    newWindow.document.write('<button onclick="window.close();" style="background-color: #YourButtonBackgroundColor; color: #YourButtonTextColor; border: none; cursor: pointer; border-radius: 15px; padding: 10px; margin-top: 5px;">Close Window</button>');


    newWindow.document.write('</body></html>');
    newWindow.document.close();
};
      
        function getRecommendation(breed, symptoms, duration) {

          
          if (symptoms === 'vomiting' && duration === '1_3_days') {
            return 'Ensure hydration and consider a bland diet. If symptoms persist, consult a vet.';
          } else if (symptoms === 'itching' && breed === 'labrador_retriever') {
            return 'Check for fleas and consider allergy testing.';
          } else if (symptoms === 'itching' && breed === 'german_shepherd') {
            return 'Check for fleas and consider allergy testing.';
          }
          return 'Consult a veterinarian for a personalized treatment plan.';
        }