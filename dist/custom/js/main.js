new WOW().init();
$('#btnExportPDF').click(exportToPDF);

function exportToPDF(){
  let doc = new jsPDF();
  let specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
  };
  doc.fromHTML($('#CVContent')[0], 15, 15, {
    'width': 170,
    // 'elementHandlers': specialElementHandlers can not print this element
  });
  doc.save('buiductai_profile.pdf');
}

function exportPDF_2(){
  var content = $("#CVContent").html();
  var printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><title>DIV Contents</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}