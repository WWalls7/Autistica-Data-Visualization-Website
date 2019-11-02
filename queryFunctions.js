
import "https://d3js.org/d3.v5.min.js"

      var userMentalH;
      var userOrganisationalCulture;
      var userSelfConfidence;
      var userAdjustment;
      function getMentalHealthData(){

        d3.csv("Mental-health-Table1.csv", function(d){

				return{
					date : d.Date,
					depression : +d.Depression,
					anxiety : +d.Anxiety,
					stress : +d.Stress
				};

         }).then(function(data){

         	// do something
         });
      }

		function getOrganisationalCulture(){
		    d3.csv("Organisational-culture-Table1.csv", function(d){

			return{
				data : d.Date,
				average : +d.Average
			};

         	}).then(function(data){
         		// do something here
         	});
		}

        function getSelfConfidence(){
            d3.csv("How_rate_your_confidence-Table1.csv", function(d){

			return{
				date : d.Date,
				learning : +d.Learning,
				problemSolving : +d.Problemsolving,
				pressure : +d.Pressure,
				roleExpectation : +d.Roleexpectations,
				teamwork : +d.Teamwork,
				sensitivity : +d.Sensitivity,
				workPolitics : +d.Workpolitics

			};

         	}).then(function(data){
			// do something here
         	});

        }

        function getAdjustment(){
        	d3.csv("Autistica-8211-Adjustments.csv", function(d){

			return{
				data : d.Date,

			};

         	}).then(function(data){
         		// do something here
         	});

        }
