/* তবে ইএস ৬ এ নতুন আরো দুইটা কীওয়ার্ড আসছে, letআর const। তবে নতুন আরো কীওয়ার্ড অ্যাড হওয়ায় ভয়ের কোনো কারন নাই, কারন ডাটা টাইপের সাথে বরাবরের মতোই এগুলোরও কোনো সম্পর্ক নাই। আপনি যেকোনো টাইপের ডাটাই ডিক্লেয়ার করতে এগুলো ইউজ করতে পারবেন। কিন্তু এদের মেইন পার্থক্য এদের বিহ্যেভিয়ারে।

তবে নতুন এই দুই কীওয়ার্ডের মধ্যে আমরা প্রথমেই বলতে পারি letকিছুটা varএর মতোই। কিন্তু constএকটু অন্যরকম। যেমন আমরা চাইলে varদিয়ে একটা ভ্যারিয়েবল ডিক্লেয়ার করে পরবর্তিতে আমরা চাইলে সেটার ভ্যালু চেঞ্জ করতে পারি, যেটা letএর ক্ষেত্রেও পুরোপুরি সম্ভব। */

//  Example let

let name = 'faruk';
name = 'Faruk Ahmad';
console.log(name); // Solution Faruk Ahmad

// When same Example use const

const name = 'Faurk';
name = 'Faruk Ahmad';
console.log(name); // Showing This Error :TypeError: Assignment to constant variable.



