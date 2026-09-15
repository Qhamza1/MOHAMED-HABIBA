// ⚠️ عدّل القيم دي بس، وهتتطبق تلقائيًا على index.html و owner.html
const firebaseConfig = {
  apiKey: "AIzaSyA1xFNQMN_A0s4nA8hHFuk-hTU4KXu-cpM",
  authDomain: "mohamed-habiba.firebaseapp.com",
  databaseURL: "https://mohamed-habiba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mohamed-habiba",
  storageBucket: "mohamed-habiba.firebasestorage.app",
  messagingSenderId: "938584530992",
  appId: "1:938584530992:web:23a81116fc00ebcb11cdf5"
};

// رفع الصور/الفيديوهات بيتم عن طريق Cloudinary (مجاني بدون بطاقة) بدل Firebase Storage.
const cloudinaryConfig = {
  cloudName: "iovw65ju",
  uploadPreset: "wedding_guest_uploads"
};