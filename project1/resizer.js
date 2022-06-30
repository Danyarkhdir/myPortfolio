function resizer(){
    let url=document.getElementById('url').value;
    let width=document.getElementById('width').value;
    let height=document.getElementById('height').value;

    let changedUrl=url.lastIndexOf('/');
    let lastPart=url.substring(changedUrl);

    let resizedImageUrl=`https://source.unsplash.com${lastPart}/${width}x${height}`
    let image=document.getElementById('url-image');
    image.src=resizedImageUrl;
    image.style.display='block';
    document.getElementById('new-url').innerText=resizedImageUrl;

    let urlVar = document.getElementById("new-url");
  urlVar.style.display = "inline-block";
  urlVar.innerHTML = `<i class="fa fa-clipboard"></i>\t${newUrl}`;
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