function copy_to_clipboard() {    
    var copyText = document.getElementById('myInput');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    alert('주소를 복사했어요');
  }