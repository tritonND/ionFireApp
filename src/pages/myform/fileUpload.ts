// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { File } from '@ionic-native/file';

// constructor(private transfer: FileTransfer, private file: File) { }

// ...

// const fileTransfer: FileTransferObject = this.transfer.create();

// // Upload a file:
// fileTransfer.upload(..).then(..).catch(..);

// // Download a file:
// fileTransfer.download(..).then(..).catch(..);

// // Abort active transfer:
// fileTransfer.abort();

// // full example
// upload() {
//   let options: FileUploadOptions = {
//      fileKey: 'file',
//      fileName: 'name.jpg',
//      headers: {}
//      .....
//   }

//   fileTransfer.upload('<file path>', '<api endpoint>', options)
//    .then((data) => {
//      // success
//    }, (err) => {
//      // error
//    })
// }
// *
// download() {
//   const url = 'http://www.example.com/file.pdf';
//   fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
//     console.log('download complete: ' + entry.toURL());
//   }, (error) => {
//     // handle error
//   });
// }


//

// uploadFile() {
//   let loader = this.loadingCtrl.create({
//     content: "Uploading..."
//   });
//   loader.present();
//   const fileTransfer: FileTransferObject = this.transfer.create();

//   let options: FileUploadOptions = {
//     fileKey: 'ionicfile',
//     fileName: 'ionicfile',
//     chunkedMode: false,
//     mimeType: "image/jpeg",
//     headers: {}
//   }

//   fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
//     .then((data) => {
//     console.log(data+" Uploaded Successfully");
//     this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
//     loader.dismiss();
//     this.presentToast("Image uploaded successfully");
//   }, (err) => {
//     console.log(err);
//     loader.dismiss();
//     this.presentToast(err);
//   });
// }