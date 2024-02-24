alert("Aplikasi sortir tiket")

const nama          = prompt("Masukkan nama anda");
const umur          = prompt("Masukkan umur anda");
const umurminimal   = 12

if (umur >= umurminimal){
    alert("Anda boleh memasuki studio");
    const bioskop = prompt('Pilih Studio A, B, atau C');
    if(bioskop == 'A'){
        alert(`${nama} berumur ${umur} masuk ke bioskop ${bioskop}`);
    }else if(bioskop == 'B'){
        alert(`${nama} berumur ${umur} masuk ke bioskop ${bioskop}`);
    }else if(bioskop == 'C'){
        alert(`${nama} berumur ${umur} masuk ke bioskop ${bioskop}`);
    }else{
        alert('input tidak valid')
    }
}else{
    alert("Maaf umur anda belum cukup");
}  