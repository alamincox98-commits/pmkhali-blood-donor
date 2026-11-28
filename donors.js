// =========================================================================
// পি. এম. খালী ব্লাড ডোনার সোসাইটি - ডোনার তালিকা (donors.js)
// নতুন ডোনার যোগ করতে চাইলে নিচের তালিকার শেষে কমা (,) দিয়ে নতুন ব্লক যুক্ত করুন
// =========================================================================

const ADMIN_PHONE = "8801930912687";

const DONORS_LIST = [
    {
        name: "মো: আল আমিন (Admin)",
        bloodGroup: "B+",
        village: "উত্তর পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01930912687",
        lastDonationDate: "10-1-2024",
        photo: "https://i.ibb.co/W4wDYQ6q/Gemini-Generated-Image-uzpc6wuzpc6wuzpc.jpg",
        donations: 1,
        donationPhotos: []
    },
    {
        name: "সাকিবুল হাসান",
        bloodGroup: "B+",
        village: "কলাতলী",
        ward: "১নং ওয়ার্ড",
        phone: "01829533525",
        lastDonationDate: "",
        photo: "https://i.ibb.co/SXYK8cZ1/sakib-2.jpg",
        donations: 0,
        donationPhotos: []
    },
    {
        name: "আবদুল মালেক",
        bloodGroup: "A+",
        village: "উত্তর পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01933690065",
        lastDonationDate: "10-2-2026",
        photo: "https://i.ibb.co/RpD9vWDB/Gemini-Generated-Image-jmexefjmexefjmex.jpg",
        donations: 1,
        donationPhotos: []
    },
    {
        name: "রাসেল উদ্দিন",
        bloodGroup: "O-",
        village: "উত্তর পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01881182856",
        lastDonationDate: "",
        photo: "https://i.ibb.co/h1nCR0xh/rasel.jpg",
        donations: 0,
        donationPhotos: []
    },
    {
        name: "আবদুল আজিজ ফয়সাল",
        bloodGroup: "O+",
        village: "মধ্যম পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01302056480",
        lastDonationDate: "14-11-2026",
        photo: "https://i.ibb.co/wFSHqL1z/Gemini-Generated-Image-mbdb7mbdb7mbdb7m.jpg",
        donations: 4,
        donationPhotos: [
            "https://i.ibb.co/PZK8xTD0/faisal1.jpg",
            "https://i.ibb.co/VWH0sqv8/faisal2.jpg"
        ]
    },
    {
        name: "মো: শাহেদ",
        bloodGroup: "B+",
        village: "মধ্যম পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01806720029",
        lastDonationDate: "14-11-2024",
        photo: "https://i.ibb.co/FqdtQ3gK/sahed.jpg",
        donations: 1,
        donationPhotos: []
    },
    {
        name: "রায়হান ইকবাল সিফাত",
        bloodGroup: "O+",
        village: "মধ্যম পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01877102530",
        lastDonationDate: "",
        photo: "https://i.ibb.co/tp0qZg5j/shifat-removebg-preview-1.png",
        donations: 0,
        donationPhotos: []
    },
    {
        name: "নজরুল ইসলাম",
        bloodGroup: "A+",
        village: "মুহসিনিয়া পাড়া",
        ward: "৭নং ওয়ার্ড",
        phone: "01860959514",
        lastDonationDate: "14-08-2026",
        photo: "https://i.ibb.co/fVWPs080/nazrul.jpg",
        donations: 7,
        donationPhotos: []
    },
    {
        name: "মো: শওকত",
        bloodGroup: "AB+",
        village: "সাতকানিয়া (বর্তমান বড়বাজার)",
        ward: "৪নং ওয়ার্ড",
        phone: "01840097855",
        lastDonationDate: "14-10-2026",
        photo: "https://i.ibb.co/qL8XNGw3/sowkot.jpg",
        donations: 3,
        donationPhotos: []
    },
    {
        name: "মোহাম্মদ সোহেল",
        bloodGroup: "A+",
        village: "দ: মিঠাছড়ি (বর্তমান বড়বাজার)",
        ward: "২নং ওয়ার্ড",
        phone: "01825113567",
        lastDonationDate: "",
        photo: "https://i.ibb.co/cK8s9NpV/Gemini-Generated-Image-5a6dcz5a6dcz5a6d-1.jpg",
        donations: 0,
        donationPhotos: []
    },
    {
        name: "মিছবাহুল ইসলাম তামিম",
        bloodGroup: "B+",
        village: "পাতলী মিয়াজী পাড়া",
        ward: "৬নং ওয়ার্ড",
        phone: "01735583321",
        lastDonationDate: "10-11-2026",
        photo: "https://i.ibb.co/xqSy6GVk/tamim.jpg",
        donations: 6,
        donationPhotos: [
            "https://i.ibb.co/8gND0QnL/t1.jpg",
            "https://i.ibb.co/9HB4ZBfX/t2.jpg",
            "https://i.ibb.co/fzxTwp4D/t4.jpg",
            "https://i.ibb.co/J4zpNWF/t5.jpg",
            "https://i.ibb.co/JWx7J1gg/t6.jpg",
            "https://i.ibb.co/Y76v39Jz/t11.jpg"
        ]
    },
    {
        name: "আনিসুল হক",
        bloodGroup: "O+",
        village: "ধাওন খালী",
        ward: "৮নং ওয়ার্ড",
        phone: "01854660131",
        lastDonationDate: "11-02-2026",
        photo: "https://i.ibb.co/s9zMyLpR/anis.jpg",
        donations: 3,
        donationPhotos: []
    },
    {
        name: "মামুনুর রশিদ",
        bloodGroup: "O+",
        village: "মুহসিনিয়া পাড়া",
        ward: "৭নং ওয়ার্ড",
        phone: "01891510328",
        lastDonationDate: "11-02-2026",
        photo: "https://i.ibb.co/q3Swz0zg/Gemini-Generated-Image-s085r3s085r3s085.jpg",
        donations: 4,
        donationPhotos: []
    },
    {
        name: "আজিজুল হক",
        bloodGroup: "AB+",
        village: "ধাওন খালী",
        ward: "৮নং ওয়ার্ড",
        phone: "01818226626",
        lastDonationDate: "",
        photo: "https://i.ibb.co/LdKBWnZL/Gemini-Generated-Image-gitwevgitwevgitw.jpg",
        donations: 0,
        donationPhotos: []
    },
    {
        name: "আবু মোরশেদ",
        bloodGroup: "O+",
        village: "মধ্যম পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01405672690",
        lastDonationDate: "",
        photo: "https://i.ibb.co/Q3YhFkbv/MORSHED.jpg",
        donations: 0,
        donationPhotos: []
    },
    {
        name: "আমান উদ্দিন",
        bloodGroup: "AB+",
        village: "মধ্যম পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01891504829",
        lastDonationDate: "20-09-2026",
        photo: "https://i.ibb.co/qL9zLsY8/AMAN-UDDIN.png",
        donations: 3,
        donationPhotos: []
    },
    {
        name: "রহিম উল্লাহ",
        bloodGroup: "O+",
        village: "মধ্যম পাতলী",
        ward: "৬নং ওয়ার্ড",
        phone: "01837198135",
        lastDonationDate: "20-09-2025",
        photo: "https://i.ibb.co/cXCb0hCn/ROHIM.png",
        donations: 3,
        donationPhotos: []
    }
];
