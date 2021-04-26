const kegiatanmodel =require('../model/Kegiatan')

exports.create = (data) =>
new Promise ((resolve,reject) => {
    // kegiatanmodel.create fungsi untuk menyimpan kegiatan
    kegiatanmodel.create(data)
    .then(()=> resolve({
        status: true,
        pesan:'berhasil input kegiatan'
    })).cath(() => reject({
        status : false,
        pesan: 'gagal input kegiatan'
    }))
})