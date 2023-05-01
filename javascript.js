function copy_to_clipboard(button) {
    const lottieSrc = button.parentNode.previousElementSibling.getAttribute('src');
    const textArea = document.createElement('textarea');
    textArea.value = lottieSrc;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('주소를 복사했어요');
  }