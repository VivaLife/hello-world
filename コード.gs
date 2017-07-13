function doGet(){
  var html = HtmlService.createHtmlOutputFromFile('search');
  return html;
}

// 足し算の結果を返却する
function add(param) {
  var a = parseInt(param.a);
  var b = parseInt(param.b);
  var c = a + b;
  return a + " + " + b + " = " + c;
}


// 足し算の結果を返却する
function search(param) {
  
  var condition = [];
  
  
  var managers = IcTableApp.select('1y8GhIIyqd-YL0Lq9KE9YP6pFfo79a6gU7RthL1cCOJc', [{key: 'office_id', operator: '=', value: param.office}, {key: 'status', operator: '=', value: param.status}])
  
  var str = '<table border="1"><tbody><tr><th>メールアドレス</th><th>氏名</th><th>事業所</th><th>契約形態</th></tr>' ;
  for (var i=0; i<managers.length; i++) {
    str +=
      '<tr>'
    + '<td>' +  managers[i].google_id + '@imprexc.com</td>'
    + '<td>' +  managers[i].family_name + ' ' + managers[i].given_name + '</td>'
    + '<td>' +  managers[i].office_id + '</td>'
    + '<td>' +  managers[i].status + '</td>'
    + '</tr>';
  }
  str += '</tbody></table>'
  return str
}