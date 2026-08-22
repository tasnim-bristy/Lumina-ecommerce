import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-EHDVELEP.js";
import {
  AuthService
} from "./chunk-VB7LJCBZ.js";
import {
  SkeletonLoaderComponent
} from "./chunk-IDJ5IA4L.js";
import "./chunk-3HG5S7OZ.js";
import {
  ScrollRevealDirective
} from "./chunk-P4E5AFSL.js";
import {
  EmptyStateComponent
} from "./chunk-IFGUBMIF.js";
import {
  CartService
} from "./chunk-TO3NWCGE.js";
import {
  CommonModule,
  CurrencyPipe,
  DatePipe,
  HttpClient,
  RouterLink,
  computed,
  environment,
  inject,
  input,
  map,
  signal,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HVBC7HBT.js";
import "./chunk-5K356HEJ.js";

// src/app/core/services/order.service.ts
var OrderService = class _OrderService {
  constructor() {
    this.http = inject(HttpClient);
    this.base = environment.apiUrl;
  }
  checkout(payload) {
    return this.http.post(`${this.base}/checkout`, payload).pipe(map((res) => res.data));
  }
  list() {
    return this.http.get(`${this.base}/orders`).pipe(map((res) => Array.isArray(res) ? res : res.data));
  }
  static {
    this.\u0275fac = function OrderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OrderService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderService, factory: _OrderService.\u0275fac, providedIn: "root" });
  }
};

// src/app/core/data/bangladesh-geo.data.ts
var BANGLADESH_DIVISIONS = [
  {
    "name": "Barishal",
    "districts": [
      {
        "name": "Barguna",
        "upazilas": [
          "Amtali",
          "Bamna",
          "Barguna Sadar",
          "Betagi",
          "Pathorghata",
          "Taltali"
        ]
      },
      {
        "name": "Barisal",
        "upazilas": [
          "Agailjhara",
          "Babuganj",
          "Bakerganj",
          "Banaripara",
          "Barisal Sadar",
          "Gournadi",
          "Hizla",
          "Mehendiganj",
          "Muladi",
          "Wazirpur"
        ]
      },
      {
        "name": "Bhola",
        "upazilas": [
          "Bhola Sadar",
          "Borhan Sddin",
          "Charfesson",
          "Doulatkhan",
          "Lalmohan",
          "Monpura",
          "Tazumuddin"
        ]
      },
      {
        "name": "Jhalakathi",
        "upazilas": [
          "Jhalakathi Sadar",
          "Kathalia",
          "Nalchity",
          "Rajapur"
        ]
      },
      {
        "name": "Patuakhali",
        "upazilas": [
          "Bauphal",
          "Dashmina",
          "Dumki",
          "Galachipa",
          "Kalapara",
          "Mirzaganj",
          "Patuakhali Sadar",
          "Rangabali"
        ]
      },
      {
        "name": "Pirojpur",
        "upazilas": [
          "Bhandaria",
          "Kawkhali",
          "Mathbaria",
          "Nazirpur",
          "Nesarabad",
          "Pirojpur Sadar",
          "Zianagar"
        ]
      }
    ]
  },
  {
    "name": "Chattogram",
    "districts": [
      {
        "name": "Bandarban",
        "upazilas": [
          "Alikadam",
          "Bandarban Sadar",
          "Lama",
          "Naikhongchhari",
          "Rowangchhari",
          "Ruma",
          "Thanchi"
        ]
      },
      {
        "name": "Brahmanbaria",
        "upazilas": [
          "Akhaura",
          "Ashuganj",
          "Bancharampur",
          "Bijoynagar",
          "Brahmanbaria Sadar",
          "Kasba",
          "Nabinagar",
          "Nasirnagar",
          "Sarail"
        ]
      },
      {
        "name": "Chandpur",
        "upazilas": [
          "Chandpur Sadar",
          "Faridgonj",
          "Haimchar",
          "Hajiganj",
          "Kachua",
          "Matlab North",
          "Matlab South",
          "Shahrasti"
        ]
      },
      {
        "name": "Chattogram",
        "upazilas": [
          "Anwara",
          "Banshkhali",
          "Boalkhali",
          "Chandanaish",
          "Fatikchhari",
          "Hathazari",
          "Karnafuli",
          "Lohagara",
          "Mirsharai",
          "Patiya",
          "Rangunia",
          "Raozan",
          "Sandwip",
          "Satkania",
          "Sitakunda"
        ]
      },
      {
        "name": "Comilla",
        "upazilas": [
          "Barura",
          "Brahmanpara",
          "Burichang",
          "Chandina",
          "Chauddagram",
          "Comilla Sadar",
          "Daudkandi",
          "Debidwar",
          "Homna",
          "Laksam",
          "Lalmai",
          "Meghna",
          "Monohargonj",
          "Muradnagar",
          "Nangalkot",
          "Sadarsouth",
          "Titas"
        ]
      },
      {
        "name": "Cox's Bazar",
        "upazilas": [
          "Chakaria",
          "Cox's Bazar Sadar",
          "Eidgaon",
          "Kutubdia",
          "Moheshkhali",
          "Pekua",
          "Ramu",
          "Teknaf",
          "Ukhiya"
        ]
      },
      {
        "name": "Feni",
        "upazilas": [
          "Chhagalnaiya",
          "Daganbhuiyan",
          "Feni Sadar",
          "Fulgazi",
          "Parshuram",
          "Sonagazi"
        ]
      },
      {
        "name": "Khagrachhari",
        "upazilas": [
          "Dighinala",
          "Guimara",
          "Khagrachhari Sadar",
          "Laxmichhari",
          "Manikchari",
          "Matiranga",
          "Mohalchari",
          "Panchari",
          "Ramgarh"
        ]
      },
      {
        "name": "Lakshmipur",
        "upazilas": [
          "Kamalnagar",
          "Lakshmipur Sadar",
          "Raipur",
          "Ramganj",
          "Ramgati"
        ]
      },
      {
        "name": "Noakhali",
        "upazilas": [
          "Begumganj",
          "Chatkhil",
          "Companiganj",
          "Hatia",
          "Kabirhat",
          "Noakhali Sadar",
          "Senbug",
          "Sonaimori",
          "Subarnachar"
        ]
      },
      {
        "name": "Rangamati",
        "upazilas": [
          "Baghaichari",
          "Barkal",
          "Belaichari",
          "Juraichari",
          "Kaptai",
          "Kawkhali",
          "Langadu",
          "Naniarchar",
          "Rajasthali",
          "Rangamati Sadar"
        ]
      }
    ]
  },
  {
    "name": "Dhaka",
    "districts": [
      {
        "name": "Dhaka",
        "upazilas": [
          "Dhamrai",
          "Dohar",
          "Keraniganj",
          "Nawabganj",
          "Savar"
        ]
      },
      {
        "name": "Faridpur",
        "upazilas": [
          "Alfadanga",
          "Bhanga",
          "Boalmari",
          "Charbhadrasan",
          "Faridpur Sadar",
          "Madhukhali",
          "Nagarkanda",
          "Sadarpur",
          "Saltha"
        ]
      },
      {
        "name": "Gazipur",
        "upazilas": [
          "Gazipur Sadar",
          "Kaliakair",
          "Kaliganj",
          "Kapasia",
          "Sreepur"
        ]
      },
      {
        "name": "Gopalganj",
        "upazilas": [
          "Gopalganj Sadar",
          "Kashiani",
          "Kotalipara",
          "Muksudpur",
          "Tungipara"
        ]
      },
      {
        "name": "Kishoreganj",
        "upazilas": [
          "Austagram",
          "Bajitpur",
          "Bhairab",
          "Hossainpur",
          "Itna",
          "Karimgonj",
          "Katiadi",
          "Kishoreganj Sadar",
          "Kuliarchar",
          "Mithamoin",
          "Nikli",
          "Pakundia",
          "Tarail"
        ]
      },
      {
        "name": "Madaripur",
        "upazilas": [
          "Dasar",
          "Kalkini",
          "Madaripur Sadar",
          "Rajoir",
          "Shibchar"
        ]
      },
      {
        "name": "Manikganj",
        "upazilas": [
          "Doulatpur",
          "Gior",
          "Harirampur",
          "Manikganj Sadar",
          "Saturia",
          "Shibaloy",
          "Singiar"
        ]
      },
      {
        "name": "Munshiganj",
        "upazilas": [
          "Gajaria",
          "Louhajanj",
          "Munshiganj Sadar",
          "Sirajdikhan",
          "Sreenagar",
          "Tongibari"
        ]
      },
      {
        "name": "Narayanganj",
        "upazilas": [
          "Araihazar",
          "Bandar",
          "Narayanganj Sadar",
          "Rupganj",
          "Sonargaon"
        ]
      },
      {
        "name": "Narsingdi",
        "upazilas": [
          "Belabo",
          "Monohardi",
          "Narsingdi Sadar",
          "Palash",
          "Raipura",
          "Shibpur"
        ]
      },
      {
        "name": "Rajbari",
        "upazilas": [
          "Baliakandi",
          "Goalanda",
          "Kalukhali",
          "Pangsa",
          "Rajbari Sadar"
        ]
      },
      {
        "name": "Shariatpur",
        "upazilas": [
          "Bhedarganj",
          "Damudya",
          "Gosairhat",
          "Naria",
          "Shariatpur Sadar",
          "Zajira"
        ]
      },
      {
        "name": "Tangail",
        "upazilas": [
          "Basail",
          "Bhuapur",
          "Delduar",
          "Dhanbari",
          "Ghatail",
          "Gopalpur",
          "Kalihati",
          "Madhupur",
          "Mirzapur",
          "Nagarpur",
          "Sakhipur",
          "Tangail Sadar"
        ]
      }
    ]
  },
  {
    "name": "Khulna",
    "districts": [
      {
        "name": "Bagerhat",
        "upazilas": [
          "Bagerhat Sadar",
          "Chitalmari",
          "Fakirhat",
          "Kachua",
          "Mollahat",
          "Mongla",
          "Morrelganj",
          "Rampal",
          "Sarankhola"
        ]
      },
      {
        "name": "Chuadanga",
        "upazilas": [
          "Alamdanga",
          "Chuadanga Sadar",
          "Damurhuda",
          "Jibannagar"
        ]
      },
      {
        "name": "Jashore",
        "upazilas": [
          "Abhaynagar",
          "Bagherpara",
          "Chougachha",
          "Jessore Sadar",
          "Jhikargacha",
          "Keshabpur",
          "Manirampur",
          "Sharsha"
        ]
      },
      {
        "name": "Jhenaidah",
        "upazilas": [
          "Harinakundu",
          "Jhenaidah Sadar",
          "Kaliganj",
          "Kotchandpur",
          "Moheshpur",
          "Shailkupa"
        ]
      },
      {
        "name": "Khulna",
        "upazilas": [
          "Botiaghata",
          "Dakop",
          "Digholia",
          "Dumuria",
          "Fultola",
          "Koyra",
          "Paikgasa",
          "Rupsha",
          "Terokhada"
        ]
      },
      {
        "name": "Kushtia",
        "upazilas": [
          "Bheramara",
          "Daulatpur",
          "Khoksa",
          "Kumarkhali",
          "Kushtia Sadar",
          "Mirpur"
        ]
      },
      {
        "name": "Magura",
        "upazilas": [
          "Magura Sadar",
          "Mohammadpur",
          "Shalikha",
          "Sreepur"
        ]
      },
      {
        "name": "Meherpur",
        "upazilas": [
          "Gangni",
          "Meherpur Sadar",
          "Mujibnagar"
        ]
      },
      {
        "name": "Narail",
        "upazilas": [
          "Kalia",
          "Lohagara",
          "Narail Sadar"
        ]
      },
      {
        "name": "Satkhira",
        "upazilas": [
          "Assasuni",
          "Debhata",
          "Kalaroa",
          "Kaliganj",
          "Satkhira Sadar",
          "Shyamnagar",
          "Tala"
        ]
      }
    ]
  },
  {
    "name": "Mymensingh",
    "districts": [
      {
        "name": "Jamalpur",
        "upazilas": [
          "Bokshiganj",
          "Dewangonj",
          "Islampur",
          "Jamalpur Sadar",
          "Madarganj",
          "Melandah",
          "Sarishabari"
        ]
      },
      {
        "name": "Mymensingh",
        "upazilas": [
          "Bhaluka",
          "Dhobaura",
          "Fulbaria",
          "Gafargaon",
          "Gouripur",
          "Haluaghat",
          "Iswarganj",
          "Muktagacha",
          "Mymensingh Sadar",
          "Nandail",
          "Phulpur",
          "Tarakanda",
          "Trishal"
        ]
      },
      {
        "name": "Netrokona",
        "upazilas": [
          "Atpara",
          "Barhatta",
          "Durgapur",
          "Kalmakanda",
          "Kendua",
          "Khaliajuri",
          "Madan",
          "Mohongonj",
          "Netrokona Sadar",
          "Purbadhala"
        ]
      },
      {
        "name": "Sherpur",
        "upazilas": [
          "Jhenaigati",
          "Nalitabari",
          "Nokla",
          "Sherpur Sadar",
          "Sreebordi"
        ]
      }
    ]
  },
  {
    "name": "Rajshahi",
    "districts": [
      {
        "name": "Bogura",
        "upazilas": [
          "Adamdighi",
          "Bogra Sadar",
          "Dhunot",
          "Dupchanchia",
          "Gabtali",
          "Kahaloo",
          "Nondigram",
          "Shajahanpur",
          "Shariakandi",
          "Sherpur",
          "Shibganj",
          "Sonatala"
        ]
      },
      {
        "name": "Chapainawabganj",
        "upazilas": [
          "Bholahat",
          "Chapainawabganj Sadar",
          "Gomostapur",
          "Nachol",
          "Shibganj"
        ]
      },
      {
        "name": "Joypurhat",
        "upazilas": [
          "Akkelpur",
          "Joypurhat Sadar",
          "Kalai",
          "Khetlal",
          "Panchbibi"
        ]
      },
      {
        "name": "Naogaon",
        "upazilas": [
          "Atrai",
          "Badalgachi",
          "Dhamoirhat",
          "Manda",
          "Mohadevpur",
          "Naogaon Sadar",
          "Niamatpur",
          "Patnitala",
          "Porsha",
          "Raninagar",
          "Sapahar"
        ]
      },
      {
        "name": "Natore",
        "upazilas": [
          "Bagatipara",
          "Baraigram",
          "Gurudaspur",
          "Lalpur",
          "Naldanga",
          "Natore Sadar",
          "Singra"
        ]
      },
      {
        "name": "Pabna",
        "upazilas": [
          "Atghoria",
          "Bera",
          "Bhangura",
          "Chatmohar",
          "Faridpur",
          "Ishurdi",
          "Pabna Sadar",
          "Santhia",
          "Sujanagar"
        ]
      },
      {
        "name": "Rajshahi",
        "upazilas": [
          "Bagha",
          "Bagmara",
          "Charghat",
          "Durgapur",
          "Godagari",
          "Mohonpur",
          "Paba",
          "Puthia",
          "Tanore"
        ]
      },
      {
        "name": "Sirajganj",
        "upazilas": [
          "Belkuchi",
          "Chauhali",
          "Kamarkhand",
          "Kazipur",
          "Raigonj",
          "Shahjadpur",
          "Sirajganj Sadar",
          "Tarash",
          "Ullapara"
        ]
      }
    ]
  },
  {
    "name": "Rangpur",
    "districts": [
      {
        "name": "Dinajpur",
        "upazilas": [
          "Birampur",
          "Birganj",
          "Birol",
          "Bochaganj",
          "Chirirbandar",
          "Dinajpur Sadar",
          "Fulbari",
          "Ghoraghat",
          "Hakimpur",
          "Kaharol",
          "Khansama",
          "Nawabganj",
          "Parbatipur"
        ]
      },
      {
        "name": "Gaibandha",
        "upazilas": [
          "Gaibandha Sadar",
          "Gobindaganj",
          "Palashbari",
          "Phulchari",
          "Sadullapur",
          "Saghata",
          "Sundarganj"
        ]
      },
      {
        "name": "Kurigram",
        "upazilas": [
          "Bhurungamari",
          "Charrajibpur",
          "Chilmari",
          "Kurigram Sadar",
          "Nageshwari",
          "Phulbari",
          "Rajarhat",
          "Rowmari",
          "Ulipur"
        ]
      },
      {
        "name": "Lalmonirhat",
        "upazilas": [
          "Aditmari",
          "Hatibandha",
          "Kaliganj",
          "Lalmonirhat Sadar",
          "Patgram"
        ]
      },
      {
        "name": "Nilphamari",
        "upazilas": [
          "Dimla",
          "Domar",
          "Jaldhaka",
          "Kishorganj",
          "Nilphamari Sadar",
          "Syedpur"
        ]
      },
      {
        "name": "Panchagarh",
        "upazilas": [
          "Atwari",
          "Boda",
          "Debiganj",
          "Panchagarh Sadar",
          "Tetulia"
        ]
      },
      {
        "name": "Rangpur",
        "upazilas": [
          "Badargonj",
          "Gangachara",
          "Kaunia",
          "Mithapukur",
          "Pirgacha",
          "Pirgonj",
          "Rangpur Sadar",
          "Taragonj"
        ]
      },
      {
        "name": "Thakurgaon",
        "upazilas": [
          "Baliadangi",
          "Haripur",
          "Pirganj",
          "Ranisankail",
          "Thakurgaon Sadar"
        ]
      }
    ]
  },
  {
    "name": "Sylhet",
    "districts": [
      {
        "name": "Habiganj",
        "upazilas": [
          "Ajmiriganj",
          "Bahubal",
          "Baniachong",
          "Chunarughat",
          "Habiganj Sadar",
          "Lakhai",
          "Madhabpur",
          "Nabiganj"
        ]
      },
      {
        "name": "Moulvibazar",
        "upazilas": [
          "Barlekha",
          "Juri",
          "Kamolganj",
          "Kulaura",
          "Moulvibazar Sadar",
          "Rajnagar",
          "Sreemangal"
        ]
      },
      {
        "name": "Sunamganj",
        "upazilas": [
          "Bishwambarpur",
          "Chhatak",
          "Derai",
          "Dharmapasha",
          "Dowarabazar",
          "Jagannathpur",
          "Jamalganj",
          "Madhyanagar",
          "Shalla",
          "South Sunamganj",
          "Sunamganj Sadar",
          "Tahirpur"
        ]
      },
      {
        "name": "Sylhet",
        "upazilas": [
          "Balaganj",
          "Beanibazar",
          "Bishwanath",
          "Companiganj",
          "Dakshinsurma",
          "Fenchuganj",
          "Golapganj",
          "Gowainghat",
          "Jaintiapur",
          "Kanaighat",
          "Osmaninagar",
          "Sylhet Sadar",
          "Zakiganj"
        ]
      }
    ]
  }
];

// src/app/core/models/payment-method.model.ts
var PAYMENT_METHODS = [
  {
    id: "bkash",
    label: "bKash",
    description: "Pay instantly from your bKash account",
    category: "mobile-wallet"
  },
  {
    id: "nagad",
    label: "Nagad",
    description: "Pay instantly from your Nagad account",
    category: "mobile-wallet"
  },
  {
    id: "rocket",
    label: "Rocket",
    description: "Pay instantly from your Rocket account",
    category: "mobile-wallet"
  },
  {
    id: "card",
    label: "Debit / Credit Card",
    description: "Visa, Mastercard & American Express",
    category: "card",
    networks: ["visa", "mastercard", "amex"]
  },
  {
    id: "cash_on_delivery",
    label: "Cash on Delivery",
    description: "Pay in cash when your order arrives",
    category: "cod"
  }
];

// src/app/shared/components/payment-logo/payment-logo.component.ts
function PaymentLogoComponent_Case_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 0);
    \u0275\u0275element(1, "span", 6)(2, "span", 7);
    \u0275\u0275elementEnd();
  }
}
function PaymentLogoComponent_Case_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275text(1, "VISA");
    \u0275\u0275elementEnd();
  }
}
function PaymentLogoComponent_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1, "AMEX");
    \u0275\u0275elementEnd();
  }
}
function PaymentLogoComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "bKash");
    \u0275\u0275elementEnd();
  }
}
function PaymentLogoComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1, "Nagad");
    \u0275\u0275elementEnd();
  }
}
function PaymentLogoComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1, "Rocket");
    \u0275\u0275elementEnd();
  }
}
var PaymentLogoComponent = class _PaymentLogoComponent {
  constructor() {
    this.brand = input.required();
  }
  static {
    this.\u0275fac = function PaymentLogoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentLogoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentLogoComponent, selectors: [["app-payment-logo"]], inputs: { brand: [1, "brand"] }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 6, vars: 1, consts: [["role", "img", "aria-label", "Mastercard", 1, "payment-logo", "payment-logo--mastercard"], ["role", "img", "aria-label", "Visa", 1, "payment-logo", "payment-logo--visa"], ["role", "img", "aria-label", "American Express", 1, "payment-logo", "payment-logo--amex"], ["role", "img", "aria-label", "bKash", 1, "payment-logo", "payment-logo--bkash"], ["role", "img", "aria-label", "Nagad", 1, "payment-logo", "payment-logo--nagad"], ["role", "img", "aria-label", "Rocket", 1, "payment-logo", "payment-logo--rocket"], [1, "payment-logo__circle", "payment-logo__circle--red"], [1, "payment-logo__circle", "payment-logo__circle--yellow"]], template: function PaymentLogoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, PaymentLogoComponent_Case_0_Template, 3, 0, "span", 0)(1, PaymentLogoComponent_Case_1_Template, 2, 0, "span", 1)(2, PaymentLogoComponent_Case_2_Template, 2, 0, "span", 2)(3, PaymentLogoComponent_Case_3_Template, 2, 0, "span", 3)(4, PaymentLogoComponent_Case_4_Template, 2, 0, "span", 4)(5, PaymentLogoComponent_Case_5_Template, 2, 0, "span", 5);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.brand()) === "mastercard" ? 0 : tmp_0_0 === "visa" ? 1 : tmp_0_0 === "amex" ? 2 : tmp_0_0 === "bkash" ? 3 : tmp_0_0 === "nagad" ? 4 : tmp_0_0 === "rocket" ? 5 : -1);
      }
    }, styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-flex;\n}\n.payment-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5rem;\n  padding: 0 0.5rem;\n  border-radius: 5px;\n  font-family: var(--font-body);\n  font-weight: 800;\n  font-size: 0.68rem;\n  line-height: 1;\n  letter-spacing: 0.03em;\n  color: #fff;\n  white-space: nowrap;\n}\n.payment-logo--visa[_ngcontent-%COMP%] {\n  background: #1a1f71;\n  font-style: italic;\n  font-weight: 900;\n  letter-spacing: 0.01em;\n}\n.payment-logo--amex[_ngcontent-%COMP%] {\n  background: #006fcf;\n}\n.payment-logo--bkash[_ngcontent-%COMP%] {\n  background: #e2136e;\n  font-style: italic;\n}\n.payment-logo--nagad[_ngcontent-%COMP%] {\n  background: #e4002b;\n}\n.payment-logo--rocket[_ngcontent-%COMP%] {\n  background: #6b3fa0;\n}\n.payment-logo--mastercard[_ngcontent-%COMP%] {\n  position: relative;\n  width: 1.9rem;\n  height: 1.2rem;\n  padding: 0;\n  background: none;\n}\n.payment-logo__circle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: 50%;\n}\n.payment-logo__circle--red[_ngcontent-%COMP%] {\n  left: 0;\n  background: #eb001b;\n}\n.payment-logo__circle--yellow[_ngcontent-%COMP%] {\n  left: 0.7rem;\n  background: #f79e1b;\n  mix-blend-mode: multiply;\n}\n/*# sourceMappingURL=payment-logo.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentLogoComponent, { className: "PaymentLogoComponent", filePath: "src/app/shared/components/payment-logo/payment-logo.component.ts", lineNumber: 18 });
})();

// src/app/features/checkout/checkout.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
function CheckoutComponent_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-skeleton-loader", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("count", 3);
  }
}
function CheckoutComponent_Conditional_1_Conditional_20_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", order_r1.id, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 5, order_r1.created_at, "mediumDate"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.paymentLabelFor(order_r1.payment_method));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(12, 8, order_r1.total, "BDT", "symbol-narrow", "1.0-0"));
  }
}
function CheckoutComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h2");
    \u0275\u0275text(2, "Your recent orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul");
    \u0275\u0275repeaterCreate(4, CheckoutComponent_Conditional_1_Conditional_20_For_5_Template, 13, 13, "li", null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.pastOrders());
  }
}
function CheckoutComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "ui5-icon", 3);
    \u0275\u0275elementStart(2, "h1");
    \u0275\u0275text(3, "Order confirmed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, " Thank you \u2014 order ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ", to be paid via ");
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, ". A confirmation has been sent to your account. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 4)(17, "a", 5);
    \u0275\u0275text(18, "Continue shopping");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, CheckoutComponent_Conditional_1_Conditional_19_Template, 1, 1, "app-skeleton-loader", 6)(20, CheckoutComponent_Conditional_1_Conditional_20_Template, 6, 0, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("#", ctx_r1.confirmedOrder().id, "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" is ", ctx_r1.confirmedOrder().status, " and totals ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(11, 5, ctx_r1.confirmedOrder().total, "BDT", "symbol-narrow", "1.0-0"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.paymentLabelFor(ctx_r1.confirmedOrder().payment_method));
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.pastOrdersLoading() ? 19 : ctx_r1.pastOrders().length ? 20 : -1);
  }
}
function CheckoutComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-empty-state", 2);
  }
}
function CheckoutComponent_Conditional_3_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const division_r4 = ctx.$implicit;
    \u0275\u0275property("value", division_r4.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(division_r4.name);
  }
}
function CheckoutComponent_Conditional_3_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const district_r5 = ctx.$implicit;
    \u0275\u0275property("value", district_r5.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(district_r5.name);
  }
}
function CheckoutComponent_Conditional_3_For_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const upazila_r6 = ctx.$implicit;
    \u0275\u0275property("value", upazila_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(upazila_r6);
  }
}
function CheckoutComponent_Conditional_3_For_65_Conditional_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-payment-logo", 48);
  }
  if (rf & 2) {
    const network_r9 = ctx.$implicit;
    \u0275\u0275property("brand", network_r9);
  }
}
function CheckoutComponent_Conditional_3_For_65_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CheckoutComponent_Conditional_3_For_65_Conditional_4_For_1_Template, 1, 1, "app-payment-logo", 48, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const method_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275repeater(method_r8.networks);
  }
}
function CheckoutComponent_Conditional_3_For_65_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-payment-logo", 48);
  }
  if (rf & 2) {
    const method_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("brand", method_r8.id);
  }
}
function CheckoutComponent_Conditional_3_For_65_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-icon", 54);
  }
}
function CheckoutComponent_Conditional_3_For_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function CheckoutComponent_Conditional_3_For_65_Template_button_click_0_listener() {
      const method_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setPaymentMethod(method_r8.id));
    });
    \u0275\u0275elementStart(1, "span", 51);
    \u0275\u0275element(2, "ui5-icon", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275template(4, CheckoutComponent_Conditional_3_For_65_Conditional_4_Template, 2, 0)(5, CheckoutComponent_Conditional_3_For_65_Conditional_5_Template, 1, 1, "app-payment-logo", 48)(6, CheckoutComponent_Conditional_3_For_65_Conditional_6_Template, 1, 0, "ui5-icon", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 55);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 56);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", ctx_r1.paymentMethod() === method_r8.id)("pulse-once", ctx_r1.justSelectedPayment() === method_r8.id);
    \u0275\u0275attribute("aria-pressed", ctx_r1.paymentMethod() === method_r8.id);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(method_r8.networks ? 4 : method_r8.category === "mobile-wallet" ? 5 : 6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(method_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r8.description);
  }
}
function CheckoutComponent_Conditional_3_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39);
    \u0275\u0275text(1, " Pay in cash when your order is delivered \u2014 please have the exact amount ready for our courier. ");
    \u0275\u0275elementEnd();
  }
}
function CheckoutComponent_Conditional_3_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ui5-message-strip", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.submitError());
  }
}
function CheckoutComponent_Conditional_3_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-busy-indicator", 42);
  }
}
function CheckoutComponent_Conditional_3_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "currency");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" Place order \u2014 ", \u0275\u0275pipeBind4(1, 1, ctx_r1.cartService.cart().subtotal, "BDT", "symbol-narrow", "1.0-0"), " ");
  }
}
function CheckoutComponent_Conditional_3_For_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", item_r10.quantity, "\xD7 ", item_r10.product.name, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(5, 3, item_r10.line_total, "BDT", "symbol-narrow", "1.0-0"));
  }
}
function CheckoutComponent_Conditional_3_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-payment-logo", 48);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("brand", ctx_r1.selectedMethod().id);
  }
}
function CheckoutComponent_Conditional_3_Conditional_110_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-payment-logo", 48);
  }
  if (rf & 2) {
    const network_r11 = ctx.$implicit;
    \u0275\u0275property("brand", network_r11);
  }
}
function CheckoutComponent_Conditional_3_Conditional_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CheckoutComponent_Conditional_3_Conditional_110_For_1_Template, 1, 1, "app-payment-logo", 48, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r1.selectedMethod().networks);
  }
}
function CheckoutComponent_Conditional_3_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ui5-icon", 49);
  }
}
function CheckoutComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1, "Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 8)(3, "form", 9);
    \u0275\u0275listener("ngSubmit", function CheckoutComponent_Conditional_3_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.placeOrder());
    });
    \u0275\u0275elementStart(4, "section", 10)(5, "h2");
    \u0275\u0275text(6, "Shipping address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11)(8, "label", 12)(9, "span");
    \u0275\u0275text(10, "Full name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ui5-input", 13);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_11_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shippingAddress.full_name = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "label", 12)(13, "span");
    \u0275\u0275text(14, "Mobile number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ui5-input", 14);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shippingAddress.mobile_number = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "label", 15)(17, "span");
    \u0275\u0275text(18, "Division");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "select", 16);
    \u0275\u0275listener("change", function CheckoutComponent_Conditional_3_Template_select_change_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDivisionChange($event.target.value));
    });
    \u0275\u0275elementStart(20, "option", 17);
    \u0275\u0275text(21, "Select division");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(22, CheckoutComponent_Conditional_3_For_23_Template, 2, 2, "option", 18, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "label", 15)(25, "span");
    \u0275\u0275text(26, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "select", 19);
    \u0275\u0275listener("change", function CheckoutComponent_Conditional_3_Template_select_change_27_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDistrictChange($event.target.value));
    });
    \u0275\u0275elementStart(28, "option", 17);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, CheckoutComponent_Conditional_3_For_31_Template, 2, 2, "option", 18, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "label", 15)(33, "span");
    \u0275\u0275text(34, "Upazila / Thana");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "select", 20);
    \u0275\u0275listener("change", function CheckoutComponent_Conditional_3_Template_select_change_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shippingAddress.upazila = $event.target.value);
    });
    \u0275\u0275elementStart(36, "option", 17);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(38, CheckoutComponent_Conditional_3_For_39_Template, 2, 2, "option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "label", 21)(41, "span");
    \u0275\u0275text(42, "Postal code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "ui5-input", 22);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_43_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shippingAddress.postal_code = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "label", 12)(45, "span");
    \u0275\u0275text(46, "Area / locality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "ui5-input", 23);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_47_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shippingAddress.area = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "label", 12)(49, "span");
    \u0275\u0275text(50, "House / road / street address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "ui5-input", 24);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_51_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.shippingAddress.address = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 12)(53, "span");
    \u0275\u0275text(54, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 25);
    \u0275\u0275element(56, "ui5-icon", 26);
    \u0275\u0275text(57, " Bangladesh ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "section", 27)(59, "h2");
    \u0275\u0275text(60, "Payment method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 28);
    \u0275\u0275text(62, " This is a demo checkout \u2014 no real payment is processed. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 29);
    \u0275\u0275repeaterCreate(64, CheckoutComponent_Conditional_3_For_65_Template, 11, 8, "button", 30, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 31)(67, "div", 32)(68, "label", 12)(69, "span");
    \u0275\u0275text(70, "Card number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "ui5-input", 33);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_71_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mockCardNumber = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "label", 21)(73, "span");
    \u0275\u0275text(74, "Expiry (MM/YY)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "ui5-input", 34);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_75_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mockCardExpiry = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "label", 21)(77, "span");
    \u0275\u0275text(78, "CVC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "ui5-input", 35);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_79_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mockCardCvc = $event.target.value);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "div", 31)(81, "div", 36)(82, "label", 12)(83, "span");
    \u0275\u0275text(84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "ui5-input", 37);
    \u0275\u0275listener("input", function CheckoutComponent_Conditional_3_Template_ui5_input_input_85_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mockWalletNumber = $event.target.value);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "p", 38);
    \u0275\u0275text(87);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(88, CheckoutComponent_Conditional_3_Conditional_88_Template, 2, 0, "p", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(89, CheckoutComponent_Conditional_3_Conditional_89_Template, 2, 1, "ui5-message-strip", 40);
    \u0275\u0275elementStart(90, "button", 41);
    \u0275\u0275template(91, CheckoutComponent_Conditional_3_Conditional_91_Template, 1, 0, "ui5-busy-indicator", 42)(92, CheckoutComponent_Conditional_3_Conditional_92_Template, 2, 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(93, "aside", 43)(94, "h2");
    \u0275\u0275text(95, "Order summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "ul");
    \u0275\u0275repeaterCreate(97, CheckoutComponent_Conditional_3_For_98_Template, 6, 8, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 44)(100, "span");
    \u0275\u0275text(101, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span");
    \u0275\u0275text(103);
    \u0275\u0275pipe(104, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 45)(106, "span", 46);
    \u0275\u0275text(107, "Paying with");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "span", 47);
    \u0275\u0275template(109, CheckoutComponent_Conditional_3_Conditional_109_Template, 1, 1, "app-payment-logo", 48)(110, CheckoutComponent_Conditional_3_Conditional_110_Template, 2, 0)(111, CheckoutComponent_Conditional_3_Conditional_111_Template, 1, 0, "ui5-icon", 49);
    \u0275\u0275text(112);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275property("value", ctx_r1.shippingAddress.full_name);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.shippingAddress.mobile_number);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.shippingAddress.division);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.divisions);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.shippingAddress.division)("value", ctx_r1.shippingAddress.district);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.shippingAddress.division ? "Select district" : "Select division first", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableDistricts());
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !ctx_r1.shippingAddress.district)("value", ctx_r1.shippingAddress.upazila);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.shippingAddress.district ? "Select upazila / thana" : "Select district first", " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.availableUpazilas());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.shippingAddress.postal_code);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.shippingAddress.area);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.shippingAddress.address);
    \u0275\u0275advance(7);
    \u0275\u0275property("appScrollReveal", 120);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.paymentMethods);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-collapsed", !ctx_r1.showCardFields());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.mockCardNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.mockCardExpiry);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.mockCardCvc);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-collapsed", !ctx_r1.showWalletField());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedMethod().label, " account number");
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.mockWalletNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" You'll get a payment confirmation prompt from ", ctx_r1.selectedMethod().label, " on this number. ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.selectedMethod().category === "cod" ? 88 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitError() ? 89 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.isFormValid || ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.submitting() ? 91 : 92);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r1.cartService.cart().items);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(104, 30, ctx_r1.cartService.cart().subtotal, "BDT", "symbol-narrow", "1.0-0"));
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.selectedMethod().category === "mobile-wallet" ? 109 : ctx_r1.selectedMethod().networks ? 110 : 111);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.selectedMethod().label, " ");
  }
}
var BD_MOBILE_NUMBER_PATTERN = /^01\d{9}$/;
var BD_POSTAL_CODE_PATTERN = /^\d{4}$/;
var CheckoutComponent = class _CheckoutComponent {
  constructor() {
    this.cartService = inject(CartService);
    this.orderService = inject(OrderService);
    this.authService = inject(AuthService);
    this.paymentMethods = PAYMENT_METHODS;
    this.divisions = BANGLADESH_DIVISIONS;
    this.shippingAddress = {
      full_name: "",
      mobile_number: "",
      division: "",
      district: "",
      upazila: "",
      area: "",
      address: "",
      postal_code: "",
      country: "Bangladesh"
    };
    this.selectedDivisionName = signal("");
    this.selectedDistrictName = signal("");
    this.availableDistricts = computed(() => this.divisions.find((d) => d.name === this.selectedDivisionName())?.districts ?? []);
    this.availableUpazilas = computed(() => this.availableDistricts().find((d) => d.name === this.selectedDistrictName())?.upazilas ?? []);
    this.paymentMethod = signal("bkash");
    this.selectedMethod = computed(() => this.paymentMethods.find((m) => m.id === this.paymentMethod()));
    this.showCardFields = computed(() => this.selectedMethod().category === "card");
    this.showWalletField = computed(() => this.selectedMethod().category === "mobile-wallet");
    this.justSelectedPayment = signal(null);
    this.mockCardNumber = "";
    this.mockCardExpiry = "";
    this.mockCardCvc = "";
    this.mockWalletNumber = "";
    this.submitting = signal(false);
    this.submitError = signal(null);
    this.confirmedOrder = signal(null);
    this.pastOrders = signal([]);
    this.pastOrdersLoading = signal(false);
  }
  onDivisionChange(division) {
    this.selectedDivisionName.set(division);
    this.selectedDistrictName.set("");
    this.shippingAddress.division = division;
    this.shippingAddress.district = "";
    this.shippingAddress.upazila = "";
  }
  onDistrictChange(district) {
    this.selectedDistrictName.set(district);
    this.shippingAddress.district = district;
    this.shippingAddress.upazila = "";
  }
  get isFormValid() {
    const address = this.shippingAddress;
    const addressComplete = !!address.full_name.trim() && BD_MOBILE_NUMBER_PATTERN.test(address.mobile_number.trim()) && !!address.division && !!address.district && !!address.upazila && !!address.area.trim() && !!address.address.trim() && BD_POSTAL_CODE_PATTERN.test(address.postal_code.trim());
    if (!addressComplete)
      return false;
    switch (this.selectedMethod().category) {
      case "card":
        return this.mockCardNumber.trim().length >= 12 && this.mockCardExpiry.trim().length >= 4 && this.mockCardCvc.trim().length >= 3;
      case "mobile-wallet":
        return BD_MOBILE_NUMBER_PATTERN.test(this.mockWalletNumber.trim());
      default:
        return true;
    }
  }
  setPaymentMethod(method) {
    this.paymentMethod.set(method);
    this.justSelectedPayment.set(method);
    setTimeout(() => this.justSelectedPayment.set(null), 400);
  }
  placeOrder() {
    if (!this.isFormValid || this.submitting())
      return;
    this.submitting.set(true);
    this.submitError.set(null);
    this.orderService.checkout({ shipping_address: this.shippingAddress, payment_method: this.paymentMethod() }).subscribe({
      next: (order) => {
        this.submitting.set(false);
        this.confirmedOrder.set(order);
        this.cartService.refresh().subscribe();
        if (this.authService.isAuthenticated()) {
          this.loadPastOrders();
        }
      },
      error: () => {
        this.submitting.set(false);
        this.submitError.set("We couldn't place your order. Please check your details and try again.");
      }
    });
  }
  paymentLabelFor(method) {
    return this.paymentMethods.find((m) => m.id === method)?.label ?? method;
  }
  loadPastOrders() {
    this.pastOrdersLoading.set(true);
    this.orderService.list().subscribe({
      next: (orders) => {
        this.pastOrders.set(orders);
        this.pastOrdersLoading.set(false);
      },
      error: () => this.pastOrdersLoading.set(false)
    });
  }
  static {
    this.\u0275fac = function CheckoutComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CheckoutComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CheckoutComponent, selectors: [["app-checkout"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 1, consts: [[1, "page-container", "checkout"], [1, "checkout__confirmation"], ["icon", "cart", "title", "Your cart is empty", "message", "Add something you love before checking out.", "actionLabel", "Start shopping", "actionRoute", "/"], ["name", "sys-enter-2", 1, "checkout__confirmation-icon", "pulse-once"], [1, "checkout__confirmation-actions"], ["routerLink", "/", 1, "btn", "btn--primary"], ["variant", "line", 3, "count"], [1, "checkout__history"], [1, "checkout__layout"], [1, "checkout__form", 3, "ngSubmit"], ["appScrollReveal", "", 1, "checkout__section"], [1, "form-grid"], [1, "form-field", "form-field--full"], ["required", "", "name", "full_name", 3, "input", "value"], ["required", "", "type", "Tel", "placeholder", "01XXXXXXXXX", "name", "mobile_number", 3, "input", "value"], [1, "form-field", "select-field"], ["required", "", "name", "division", 3, "change", "value"], ["value", "", "disabled", ""], [3, "value"], ["required", "", "name", "district", 3, "change", "disabled", "value"], ["required", "", "name", "upazila", 3, "change", "disabled", "value"], [1, "form-field"], ["required", "", "placeholder", "1216", "name", "postal_code", 3, "input", "value"], ["required", "", "placeholder", "e.g. Dhanmondi, Uttara Sector 7", "name", "area", 3, "input", "value"], ["required", "", "placeholder", "e.g. House 12, Road 5, Block C", "name", "address", 3, "input", "value"], [1, "country-chip"], ["name", "sys-enter-2"], [1, "checkout__section", 3, "appScrollReveal"], [1, "checkout__payment-note"], [1, "payment-grid"], ["type", "button", 1, "payment-card", 3, "is-active", "pulse-once"], [1, "payment-details"], [1, "payment-details__inner", "form-grid"], ["placeholder", "4242 4242 4242 4242", "name", "cardNumber", 3, "input", "value"], ["placeholder", "12/29", "name", "cardExpiry", 3, "input", "value"], ["placeholder", "123", "name", "cardCvc", 3, "input", "value"], [1, "payment-details__inner"], ["placeholder", "01XXXXXXXXX", "type", "Tel", "name", "walletNumber", 3, "input", "value"], [1, "payment-details__hint"], [1, "payment-details__hint", "payment-details__hint--cod"], ["design", "Negative"], ["type", "submit", 1, "btn", "btn--primary", "checkout__submit", 3, "disabled"], ["active", "", "size", "S"], [1, "checkout-summary"], [1, "checkout-summary__total"], [1, "checkout-summary__payment"], [1, "checkout-summary__payment-label"], [1, "checkout-summary__payment-value"], [3, "brand"], ["name", "shipping-status"], ["type", "button", 1, "payment-card", 3, "click"], [1, "payment-card__check"], ["name", "accept"], [1, "payment-card__marks"], ["name", "shipping-status", 1, "payment-card__icon"], [1, "payment-card__label"], [1, "payment-card__description"]], template: function CheckoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, CheckoutComponent_Conditional_1_Template, 21, 10, "div", 1)(2, CheckoutComponent_Conditional_2_Template, 1, 0, "app-empty-state", 2)(3, CheckoutComponent_Conditional_3_Template, 113, 35);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.confirmedOrder() ? 1 : ctx.cartService.cart().items.length === 0 ? 2 : 3);
      }
    }, dependencies: [
      CommonModule,
      CurrencyPipe,
      DatePipe,
      FormsModule,
      \u0275NgNoValidate,
      NgSelectOption,
      \u0275NgSelectMultipleOption,
      NgControlStatusGroup,
      NgForm,
      RouterLink,
      EmptyStateComponent,
      SkeletonLoaderComponent,
      ScrollRevealDirective,
      PaymentLogoComponent
    ], styles: [`

[_nghost-%COMP%] {
  display: block;
  padding: 2.5rem 0 5rem;
}
.checkout[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {
  margin-bottom: 2rem;
}
.checkout__layout[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 20rem;
  gap: 3rem;
  align-items: start;
}
.checkout__section[_ngcontent-%COMP%] {
  margin-bottom: 2.25rem;
}
.checkout__section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.checkout__payment-note[_ngcontent-%COMP%] {
  font-size: 0.82rem;
  color: var(--color-charcoal-soft);
  margin-bottom: 1rem;
}
.form-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.1rem;
}
.form-field[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--color-charcoal-soft);
}
.form-field[_ngcontent-%COMP%]   ui5-input[_ngcontent-%COMP%] {
  width: 100%;
}
.form-field--full[_ngcontent-%COMP%] {
  grid-column: 1/-1;
}
.select-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {
  width: 100%;
  height: 2.5rem;
  padding: 0 2.25rem 0 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  background: var(--color-cream) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M4 6l4 4 4-4' stroke='%235B584F' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
  background-size: 0.85rem;
  appearance: none;
  font-family: var(--font-body);
  font-size: 0.85rem;
  color: var(--color-charcoal);
  cursor: pointer;
  transition: border-color 0.2s var(--ease-quiet);
}
.select-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover:not(:disabled) {
  border-color: var(--color-sage);
}
.select-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible {
  outline: 2px solid var(--color-sage);
  outline-offset: 1px;
}
.select-field[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:disabled {
  background-color: var(--color-cream-soft);
  color: var(--color-charcoal-soft);
  opacity: 0.6;
  cursor: not-allowed;
}
.country-chip[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  align-self: flex-start;
  padding: 0.5rem 0.9rem;
  border-radius: var(--radius-sm);
  background: var(--color-sage-pale);
  color: var(--color-charcoal);
  font-size: 0.85rem;
  font-weight: 600;
}
.country-chip[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {
  width: 1rem;
  height: 1rem;
  color: var(--color-sage-deep);
}
.payment-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.9rem;
  margin-bottom: 1.25rem;
}
.payment-card[_ngcontent-%COMP%] {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  border: 1px solid var(--color-border);
  background: var(--color-cream);
  padding: 1rem 1.1rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.2s var(--ease-quiet),
    background 0.2s var(--ease-quiet),
    transform 0.2s var(--ease-quiet),
    box-shadow 0.2s var(--ease-quiet);
}
.payment-card[_ngcontent-%COMP%]:hover {
  border-color: var(--color-sage);
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(47, 46, 43, 0.08);
}
.payment-card.is-active[_ngcontent-%COMP%] {
  background: var(--color-sage-pale);
  border-color: var(--color-sage);
}
.payment-card.is-active[_ngcontent-%COMP%]   .payment-card__check[_ngcontent-%COMP%] {
  opacity: 1;
  transform: scale(1);
}
.payment-card__check[_ngcontent-%COMP%] {
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background: var(--color-sage);
  color: var(--color-cream);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.2s var(--ease-quiet), transform 0.2s var(--ease-quiet);
}
.payment-card__check[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {
  width: 0.75rem;
  height: 0.75rem;
}
.payment-card__marks[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  min-height: 1.5rem;
}
.payment-card__icon[_ngcontent-%COMP%] {
  width: 1.3rem;
  height: 1.3rem;
  color: var(--color-charcoal-soft);
}
.payment-card__label[_ngcontent-%COMP%] {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--color-charcoal);
}
.payment-card__description[_ngcontent-%COMP%] {
  font-size: 0.76rem;
  color: var(--color-charcoal-soft);
  line-height: 1.35;
}
.payment-details[_ngcontent-%COMP%] {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.3s var(--ease-quiet);
}
.payment-details.is-collapsed[_ngcontent-%COMP%] {
  grid-template-rows: 0fr;
}
.payment-details__inner[_ngcontent-%COMP%] {
  overflow: hidden;
}
.payment-details__hint[_ngcontent-%COMP%] {
  font-size: 0.8rem;
  color: var(--color-charcoal-soft);
  margin-top: 0.4rem;
}
.payment-details__hint--cod[_ngcontent-%COMP%] {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: 0.75rem 1rem;
  background: var(--color-cream-soft);
}
.checkout__submit[_ngcontent-%COMP%] {
  width: 100%;
  min-height: 2.8rem;
  margin-top: 0.5rem;
}
.checkout-summary[_ngcontent-%COMP%] {
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  position: sticky;
  top: calc(var(--shell-header-height) + 1.5rem);
}
.checkout-summary[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 1rem 0 1.25rem;
}
.checkout-summary[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: var(--color-charcoal-soft);
  gap: 1rem;
}
.checkout-summary__total[_ngcontent-%COMP%] {
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: var(--color-charcoal);
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
}
.checkout-summary__payment[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--color-border);
  font-size: 0.82rem;
  color: var(--color-charcoal-soft);
}
.checkout-summary__payment-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-charcoal);
  font-weight: 600;
}
.checkout-summary__payment-value[_ngcontent-%COMP%]   ui5-icon[_ngcontent-%COMP%] {
  width: 1.1rem;
  height: 1.1rem;
}
.checkout__confirmation[_ngcontent-%COMP%] {
  max-width: 34rem;
  margin: 2rem auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.checkout__confirmation-icon[_ngcontent-%COMP%] {
  width: 3rem;
  height: 3rem;
  color: var(--color-sage-deep);
}
.checkout__confirmation-actions[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.checkout__history[_ngcontent-%COMP%] {
  width: 100%;
  margin-top: 2.5rem;
  text-align: left;
}
.checkout__history[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {
  margin-bottom: 1rem;
}
.checkout__history[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.checkout__history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 4rem 6rem 6rem 7rem 1fr;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-charcoal-soft);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.6rem;
}
.checkout__history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {
  text-align: right;
}
.btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: var(--radius-sm);
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  border: none;
  cursor: pointer;
}
.btn--primary[_ngcontent-%COMP%] {
  background: var(--color-sage);
  color: var(--color-cream);
}
.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: var(--color-sage-deep);
}
.btn--primary[_ngcontent-%COMP%]:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@media (max-width: 900px) {
  .checkout__layout[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .form-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
  .form-field--full[_ngcontent-%COMP%] {
    grid-column: auto;
  }
  .payment-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .checkout__history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
  }
  .checkout__history[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {
    text-align: left;
  }
}
@media (max-width: 480px) {
  .payment-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
  }
}
/*# sourceMappingURL=checkout.component.css.map */`] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CheckoutComponent, { className: "CheckoutComponent", filePath: "src/app/features/checkout/checkout.component.ts", lineNumber: 35 });
})();
export {
  CheckoutComponent
};
//# sourceMappingURL=checkout.component-74Q3DF77.js.map
