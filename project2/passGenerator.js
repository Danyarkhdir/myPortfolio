function randPassword(){
    let length=document.getElementById("length").value;
    let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password="";
    
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));   
    }
    document.getElementById("new-url").innerText=password;
    let txt=document.getElementById('new-url-label');
    txt.innerText="";
}


function copy() {
    let text = document.getElementById("new-url").innerText;
    console.log(text);
    copyToClipboard(text);
    
  }
  function copyToClipboard(text) {
    let txt=document.getElementById('new-url-label');
    navigator.clipboard.writeText(text).then(
      function () {
        txt.innerText ="Copying to clipboard was successful!";
      },
      function (err) {
        txt.innerText =`Could not copy text: ${err}`;
      }
    );
  }