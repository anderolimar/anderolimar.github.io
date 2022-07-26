// var doc = new jsPDF(); 


(function($){
  $(function(){

    $('.sidenav').sidenav(); 

  }); // end of document ready
})(jQuery); // end of jQuery name space


function savePDF() {
  // window.html2canvas = html2canvas;
//   doc.fromHTML(document.body, {
//     callback: function (doc) {
//       doc.save("page.pdf");
//     }
//  });


//  var pdf = new jsPDF('p', 'pt', 'letter');
//  pdf.html(document.body, {
//    callback: function (pdf) {
//      var iframe = document.createElement('iframe');
//      iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
//      document.body.appendChild(iframe);
//      iframe.src = pdf.output('datauristring');
//    }
//  });

//  doc.text('Hello world!', 10, 10)
//  doc.save('a4.pdf')


  // We'll make our own renderer to skip this editor
  // var specialElementHandlers = {
  //   '#getPDF': function(element, renderer){
  //     return true;
  //   },
  //   '.controls': function(element, renderer){
  //     return true;
  //   }
  // };

  // // All units are in the set measurement for the document
  // // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
  // doc.fromHTML(document.body, 15, 15, {
  //   'width': 170, 
  //   'elementHandlers': specialElementHandlers
  // });

  // doc.save('Generated.pdf');


 
  // html2canvas(document.body, {
  //   onrendered: function (canvas) {
  //     console.log("AQUIII")
  //       var img = canvas.toDataURL("image/png")
  //       doc.addImage(img, 'JPEG', 10, 10);
  //       doc.save('test.pdf'); 
  //       console.log(img)
  //   }
  // });

  // html2canvas(document.body).then(canvas => {
  //   document.body.appendChild(canvas)
  //   var img = canvas.toDataURL("img/jpeg")

  //   var width = doc.internal.pageSize.width;
  //   var height = doc.internal.pageSize.height;
  //   doc.addImage(img, 'JPEG', 0, 0, width, height)
  //   doc.save('test.pdf')
   
  // })

  console.log("AQUI")
  
}

$(document).ready(function($) 
	{ 

		$(document).on('click', '.btn_print', function(event) 
		{
			event.preventDefault();

			//credit : https://ekoopmans.github.io/html2pdf.js
			
			var element = document.getElementById('index-banner'); 

			//easy
			//html2pdf().from(element).save();

			//custom file name
			//html2pdf().set({filename: 'code_with_mark_'+js.AutoCode()+'.pdf'}).from(element).save();


			//more custom settings
			var opt = 
			{
			  margin:       1,
			  filename:     'pageContent_'+js.AutoCode()+'.pdf',
			  image:        { type: 'jpeg', quality: 0.98 },
			  html2canvas:  { scale: 2 },
			  jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
			};

			// New Promise-based usage:
			html2pdf().set(opt).from(element).save();

			 
		});

 
 
	});