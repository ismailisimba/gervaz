var mainImages = {
    imageLinks: ["https://wlnfbw.am.files.1drv.com/y4mR2PIn-TyS9_H317XIZ-VgRErN1C7z9iXPDIlgqjiQFih7zS32pzm9TfSsMlu2zNyRXtpKwU6Qg6TaVmfpCfCUW1jSf_2Bi4HdXPZnXXwFV1N3DdaurwQhoRTrZtWO_8qDWDnbPxadCMsUrw8oxuZKTo6x8vJj_zO7isGPPII7YuJ9hILnck5kvVxIbhTXkOB585nJ0iI8iFYJS10_7KvKQ",
                "https://m9oovw.am.files.1drv.com/y4m0pX5A7jUGnGj2465aEd8VUa7GIScXhAIiScXIbeEgOlrXiuU7nIl2hlxzKQrEs69qJ3ridzuRvpNS6hzNZUF-M9zklBgbrTXL56rHMbUwN9jQfHh4FmNw_cPa8WTZkt_LRDzMY6GeWqfaah_oQs5HDHDBaO6n7W8mBT27Z0z1ybkMiLC0xN_R-y34NUpe2nVUQLKYYoY8TDWTh1xW3bgNQ",
                "https://ynwy1w.am.files.1drv.com/y4mjpvtuExTye3Z-rZtrwrOWyEjkoY0uNIMr2RFtBN5vbOfj7u82Y_ZRxMaGm8GiI980rp7XoUcZqzMFJdQ1_0lB1SU-w3yXbn7Xyj9I1LsvBWUbQrAj1n2xnji3gQWUBYTtu7MdClU6hvXU5X-Ibuv0SFn-aafyY2s6fe9J2_qMjf7NN2wxFgjBQSkkwGpOr1sNvLVjkOsuUPOg0NPGQ60GQ"
                ],
    shoutOut: ["The comfiest and coolest in children fashion!",
                 "The perfect is he 'going to work or party' outfits for men!",
                "Unisex T-shirts and Jeans"
                ]
}

let counterOne = 0;
let numOfImages = mainImages.imageLinks.length;


localVar = {


    animateMainImage: function () {

        function repeatMe(){

            let container = document.getElementById("main-showcase-container");
            let children = document.getElementsByClassName("main-showcase-child");
            let captionBox = document.getElementById("shoutout");
            

           // children[1].style.backgroundImage = `url(${mainImages.imageLinks[counterOne]})`;
           // captionBox.innerHTML = mainImages.shoutOut[0];

           if (counterOne<numOfImages-1){

            children[0].style.backgroundImage = `url(${mainImages.imageLinks[counterOne]})`;
            children[1].style.left = "-100%";
            children[2].style.left = "-100%"


            counterOne++

           }else {
               counterOne = 0;
           }

    
            













            setTimeout(repeatMe,2000);
        }

        repeatMe();
      

    },

  
};














window.onload = (event) => {
   // document.body.innerHTML = "Ok now, Zee Fuuk??";
   localVar.animateMainImage();

   
   
  };


  