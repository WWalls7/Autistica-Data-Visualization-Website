
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
					q1 : d.Q1,
					q2 : d.Q2,
					q3 : d.Q3,
					q4 : d.Q4,
					q5 : d.Q5
				}; // rename to Q1, Q2, Q3... etc

         }).then(function(data){
         	console.log(data);
         	// do something
         });
      }
      getAdjustment();
      // Q1:Over the last week, or since you last completed this question, please provide reflections about any misunderstandings you have experienced in the workplace, why you think they occurred, and how you think they were (or could be) successfully resolved? (please remember not to use real names of people you work with)
      // Q2:Over the last week, or since you last completed this question, please provide reflections about any successes you have experienced in the workplace? (please remember not to use real names of people you work with)
	  // Q3:Please describe any adjustments (i.e. physcial changes to your workspace, management changes to the processes for completing tasks, or logistical changes to working hours or transport to work)
	  // Q4:If you have encountered any stories about autism in the media, could you describe them and its impact on you?
	  // Q5:Any other reflections that you would like to share? (please remember not to use real names of people you work with)
         
