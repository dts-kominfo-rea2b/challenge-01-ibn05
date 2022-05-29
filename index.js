// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow", "Pink", "White", "Purple"],
    isHavePet: true,
    education: [
        { name: "SD 01", city: "Jakarta", graduate: 2016 },
        { name: "SMP 02", city: "Jakarta", graduate: 2019 },
        { name: "SMA 03", city: "Tangerang" },
    ],
    favoriteRestaurant: function () {
        let data = new Set();
        data.add("Bento");
        data.add("Sushi");
        data.add("Pancake");
        data.add("Eggy");
        data.add("Tempura");
        data.add("Bento");
        data.add("Eggy");
        data.add("Padang");
        data.add("Tteok");
        data.add("Sushi");
        data.add("Sushi");
        data.add("Bento");
        return data;
    },
};
const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: ["Blue", "Black", "Grey"],
    isHavePet: false,
    education: [
        { name: "SD 02", city: "Jakarta", graduate: 2010 },
        { name: "SMP 03", city: "Bogor", graduate: 2013 },
        { name: "SMA 01", city: "Surabaya", graduate: 2016 },
        { name: "Universitas Maju", city: "Tangerang" },
    ],
    favoriteRestaurant: function () {
        let data = new Set();
        data.add("Tempura");
        data.add("Bento");
        data.add("Sushi");
        data.add("Pancake");
        data.add("Padang");
        data.add("Katsu ");
        data.add("Geprek ");
        data.add("Pancake ");
        data.add("Eggy ");
        return data;
    },
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users,
};
