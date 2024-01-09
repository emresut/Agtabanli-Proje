/* Checkboxlardan alınan id'ler aracılığıyla bir liste düşünülmüştür. Checkboxdan hiç bir kutucuk işaretlenmediyse ilk if bloğuna 
girecektir çünkü listede hiç eleman olmaz. Eğer birden fazla kutucuk işaretlendiyse else if bloğuna girecektir çünkü listede 
birden fazla eleman olacaktır. Tek kutucuk işaretlenirse else bloğuna girmiş olur ve o bloğun içindeki koşullardan birine 
id durumuna göre girer.*/


const form = document.querySelector('form');

    form.addEventListener ( 'submit', (e) => { 
      
        e.preventDefault();
    
        let takimlist = [];
    
        document.querySelectorAll('[type="checkbox"]').forEach(item => {
    
            if (item.checked === true){
    
             takimlist.push(item.id);
    
            }
            
        })
        if(takimlist.length==0){
          alert("Lütfen Herhangi Bir Takımı İşaretledikten Sonra İstatistikleri Gör İfadesine Tıklayınız.")
        }

        else if(takimlist.length>1){
          alert("Lütfen Bir Adet Takım Seçiniz.")
        }


        else{

        
            if(takimlist[0]=="mycheck1"){
              location.replace('../html/takimads.html');
            }
            else if(takimlist[0]=="mycheck2"){
              location.replace('../html/takimbjk.html');
            }
            else if(takimlist[0]=="mycheck3"){
              location.replace('../html/takimfb.html');
            }
            else if(takimlist[0]=="mycheck4"){
              location.replace('../html/takimgs.html');
            }
            else if(takimlist[0]=="mycheck5"){
              location.replace('../html/takimts.html');
            }


      }

      

    });



