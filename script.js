let inpBox = document.querySelector('#inpBox');
let genBtn = document.querySelector('.genBtn');
let DownloadBtn = document.querySelector('.downloadBtn');
let Image = document.querySelector('#Image');



let generateQr = function (){
    if(inpBox.value === "" ){
        alert('Please Enter the link')
    }
    else{
        let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpBox.value}`;
        Image.src = URL;
        DownloadBtn.style.display = "block";
        // DownloadBtn.href = URL
        let img = document.querySelector('.Image img')
        let imgAtrr = img.getAttribute('src');
        DownloadBtn.setAttribute("href", imgAtrr);
    }
}



genBtn.addEventListener('click', generateQr);