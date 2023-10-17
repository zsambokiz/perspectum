 <script>
        document.addEventListener("DOMContentLoaded", function() {
            var countrySelect = document.getElementById("country");
            var stateSelect = document.getElementById("state");
            var overlaySelect = document.getElementById("outside-us-overlay");
            var UsButton = document.getElementById("United-State-button");
            var UKButton = document.getElementById("United-Kingdom-button");
            var GermanyButton = document.getElementById("Germany-button");
            var SpainButton = document.getElementById("Spain-button");
            var PortugalButton = document.getElementById("Portugal-button");
            var SlovakiaButton = document.getElementById("Slovakia-button");
            var NetherlandsButton = document.getElementById("Netherlands-button");
            var MalaysiaButton = document.getElementById("Malaysia-button");

           // Disable state select on page load
            stateSelect.disabled = true;
            stateSelect.style.color = "gray";
            overlaySelect.style.display = "flex";
           
            
            countrySelect.addEventListener("change", function() {
                if (countrySelect.value === "United States") {
                    stateSelect.disabled = false;
                    stateSelect.style.color = "black";
                     overlaySelect.style.display = "none";
                    //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                    UsButton.click();
                    
                 }  else if (countrySelect.value === "United Kingdom") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                     //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                     overlaySelect.style.display = "flex";
                      UKButton.click();
                   
                }  else if (countrySelect.value === "Germany") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                     //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                     overlaySelect.style.display = "flex";
                      GermanyButton.click();

                }  else if (countrySelect.value === "Spain") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                    //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                    overlaySelect.style.display = "flex";
                    SpainButton.click();      
                
                }  else if (countrySelect.value === "Portugal") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                    //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                    overlaySelect.style.display = "flex";
                    PortugalButton.click();  

                }  else if (countrySelect.value === "Slovakia") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                    //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                    overlaySelect.style.display = "flex";
                    SlovakiaButton.click();  

                }  else if (countrySelect.value === "Netherlands") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                    //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                    overlaySelect.style.display = "flex";
                    NetherlandsButton.click();  

                }  else if (countrySelect.value === "Malaysia") {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                    //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                    overlaySelect.style.display = "flex";
                    MalaysiaButton.click();  

                }  else {
                    stateSelect.disabled = true;
                    stateSelect.style.color = "gray";
                    //document.getElementById('state').value = "";
                     //stateSelect.innerHTML = originalStateOptions; // Reset to original options
                     overlaySelect.style.display = "flex";
                   
                }
                
            });
            
        });
    </script>