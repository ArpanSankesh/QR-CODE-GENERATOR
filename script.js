let inpBox = document.querySelector('#inpBox');
let genBtn = document.querySelector('.genBtn');
let DownloadBtn = document.querySelector('.downloadBtn');
let Image = document.querySelector('#Image');



let generateQr = function (){
    if(inpBox.value === 0 ){
        alert('Please Enter the link')
    }
    else{
        let URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inpBox.value}`;
        Image.src = URL;
        DownloadBtn.style.display = "block";
        DownloadBtn.href = URl;

    }
}

genBtn.addEventListener('click', generateQr);
genBtn.addEventListener('enter', generateQr);