function calcbmr() {
    let floor= document.getElementById("floor").value;
    let apartment = document.getElementById("apartment").value;
    let porch = document.getElementById("porch").value;

    let result= floor * apartment * porch;
    normal.innerHTML = result;
    return result; 
  }
  let book;
  book = "Том Сойер";
  console.log(book)
