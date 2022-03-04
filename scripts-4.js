


// var startHours ;
// var startMinutes;
// var startSeconds ;
// aptrinsic('track', 'Report', {"event":"Report Read", "name":report.title || " "}); 
// console.log(report.title);
// //console.log(startHours+"   "+startMinutes+" "+startSeconds);
 //  var config={kcAllowedFuncNames:["zendeskchat"]};
   
 
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-KNFBP3CQEW3C-2");


function validate() {
	var email = document.getElementById("username").value;

	var pwd = document.getElementById("pwd").value;
var username = email.substring(0, 9);
console.log(username);
// if(email*="postman"){
// var username = "Postman-2";
// }
// else{	
//     	var email = document.getElementById("username").value;
//  username = email.substring(0, 9);
// }




// passing user and account objects:

	if ( email == "srinivas.myakala18@gmail.com" || email == "srinivas.myakala1894@gmail.com"||email=="user1@gmail.com"||email=="user2@gmail.com"|| email=="user3@gmail.com"|| email=="user4@gmail.com"|| email=="user5@gmail.com"|| email=="user6@gmail.com"|| email=="user999@gmail.com"|| email=="demouser01@gmail.com"|| email=="demouser20@gmail.com") {            
		aptrinsic("identify", {
			//User Fields
			"id": username, // Required for logged in app users
			"email": email,
			"firstName": email.substring(0, 8),
			"lastName": "m",
			"role": "",
            "website":"demo.abc.com",
           "city":"Khammam",
            "surveys":true,
           "countryCode":"US",
         "License" : "Standard",
         "userRank":"",
         "rank":"",
         "ChurnDate":"",
		}, {
		//Account Fields
			"id": "BOK", //Required
			"name": "Bank of K",
            "countryCode":"IN",
            "city":"Secunderabad",
            "sfdcId": "00302323212",
			"Program": "Platinum" ,
            "Accountvalue": "N"// flat custom attributes
           // "role": "Customer success"
		});
        console.log(username);

        	return true;
    }

    
   // var d = new Date();
}


// /*----------Global context---------*/






// /*----------------------------------------------------------------------------------------------*/



// function showengagement() {
// 	aptrinsic('track', 'FORM_SUBMIT', {
// 		"submitted": true
// 	});
// }

// function modalopen() {
// 	aptrinsic('track', 'MODAL_ACTION', {
// 		"ModalOpen": true
// 	});
// }

function logout() {
	window.aptrinsic('reset');

}

//  var endHours = new Date().getHours();
//     var endMinutes= new Date().getMinutes();
//     var endSeconds= new Date().getSeconds();
// var mou = (endHours-startHours)*60+(endMinutes-startMinutes)+(endSeconds-startSeconds)/60;
// alert('Execution time: ' + mou);
// aptrinsic('set','user',{'RenewalDate':mou});


// aptrinsic('set', 'globalContext', {
// 	"ver": ""
// });
// var vId = 3.0;

// if(email==="srinivas.myakala18@gmail.com")vId="2.0";
// if(email==="srinivas.myakala1894@gmail.com")vId="2.1";
// if(email==="user1@gmail.com")vId="";

// aptrinsic('set', 'globalContext', {
// 	"versionID": vId
// });
// //call custom event
// // aptrinsic('track', 'purchased', {
// // 	"amount_purchase": 1
// // });

// // var aa="purchased_withoutquots";
// // aptrinsic('track', aa, {
// // 	"amount": 1
// // });

// function checkboxAction(element) {
// 	if (element.checked === false) {
// 		aptrinsic('track', 'checked_false', {
// 			"submitted": false
// 		});
// 	}
// }
// var h1= d.getHours();
//      var m1= d.getMinutes();
//      console.log("1111111"+h1+":"+m1);

//  var h2= d2.getHours();
//     var m2= d2.getMinutes();
//     console.log("22222"+h2+":"+m2);
//  if(d2-d1>=0&&m2>m1){
//         H= d2-d1;
//         M= m2-m1;
//    }
//     if(d2-d1>=0&&m2<m1){
//         H= d2-d1;
//         M= (60-m1)+(m2-m1);
//    }
//    console.log("Time spent is:"+H+":"+M);
//    return time="Time spent is:"+H+":"+M;

// function zendeskchat(){
//     // api call for the chat bot
//     var head = document.getElementsByTagName('head')[0];
//     var script = document.createElement('script');
//     script.id="ze-snippet" ;
//     script.src="https://static.zdassets.com/ekr/snippet.js?key=0d765a05-96fa-4811-b06d-4437b45b2fc3";
//     script.onreadystatechange= handler1;
//     script.onload = handler1;
//     head.appendChild(script);
//     function handler1(){
//         console.log("chatbot added");
//     }
// }





