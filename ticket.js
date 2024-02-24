alert("Aplikasi sortir tiket")

const nama          = prompt("Masukkan nama anda");
const umur          = prompt("Masukkan umur anda");
const umurminimal   = 13

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
}else if(umur <= umurminimal && umur >0){
    alert(`Maaf umur anda belum cukup karena usia minimal adalah ${umurminimal} tahun`);
}else if (umur < 0 ){
    alert("Usia tidak valid")
}else{
    alert("Umur tidak valid")
}  