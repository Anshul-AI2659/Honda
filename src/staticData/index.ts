import { ImageSourcePropType } from "react-native";
import { Images } from "../assets";


    export const specifications = [
    {
      id: '1',
      feature: 'Air Cleaner',
      value: 'Dual type',
    },
    {
      id: '2',
      feature: 'Bore X Stroke (mm)',
      value: '88 x 64',
    },
    {
      id: '3',
      feature: 'Compression ratio',
      value: '8.2:1',
    },
    {
      id: '4',
      feature: 'Displacement (cm3)',
      value: '389',
    },
    {
      id: '5',
      feature: 'Fuel Tank Capacity (L)',
      value: '19.2',
    },
    {
      id: '6',
      feature: 'Fuel Type',
      value: 'Unleaded gasoline',
    },
  ];

  
  export const BestSellingProducts = [
    {
      id: '1',
      number: 'F300',
      title: 'Tillers',
      price: '₹ 58,500.00',
      image: require('../assets/images/hondaGenrator.png'),
    },
    {
      id: '2',
      number: 'BF200',
      title: 'Outboard Motors',
      price: '₹ --',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '3',
      number: 'EU70is',
      title: 'Tillers',
      price: '₹ 88,500.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '4',
      number: 'F300',
      title: 'Tillers',
      price: '₹ 58,500.00',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '5',
      number: 'BF200',
      title: 'Outboard Motors',
      price: '₹ --',
      image: require('../assets/images/battery.png'),
    },
    {
      id: '6',
      number: 'EU70is',
      title: 'Tillers',
      price: '₹ 88,500.00',
      image: require('../assets/images/battery.png'),
    },
  ];
  
  export const buttonData = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Inverter' },
    { id: 3, title: 'Silent Series' },
    { id: 4, title: 'Handy Series' },
  ];


  export const categoriesData = [
    {id: '1', label: 'Battery Operated Hand Tools'},
    {id: '2', label: 'Generators'},
    {id: '3', label: 'Tillers'},
    {id: '4', label: 'Brush Cutters'},
    {id: '5', label: 'Water Pumps'},
    {id: '6', label: 'Lawn Mowers'},
    {id: '7', label: 'General Purpose Engines'},
    {id: '8', label: 'Outdoor Engines'},
  ];
  
  export const notificationsData: Record<string, { header: string; description: string, image?: ImageSourcePropType }[]> = {
    '2025-04-11': [
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
    ],
    '2025-04-10': [
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn }
    ],
    '2025-04-12': [
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOn },
        { header: 'Your Account created successfully', description: 'Explore the  multiple products as per your requirement', image: Images.notificationOff },
    ]
};



export const trainingButtonData = [
  {id: 1, title: 'Sales Talk'},
  {id: 2, title: 'DIY Videos'},
  {id: 3, title: 'Service Manuals'},
  {id: 4, title: 'Parts Catalog'},
];

export const HIPlus = [
  {
    id: '1',
    title: 'Agriculture Machinery',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=ULFliexcxso&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '2',
    title: 'Light Construction Machinery',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '3',
    title: 'Other Categories',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '4',
    title: 'Agriculture Machinery',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '5',
    title: 'Light Construction Machinery',
    image: Images.dummyYouTube,
     type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '6',
    title: 'Other Categories',
    image: Images.dummyYouTube,
     type: 'link',
    link: 'https://www.youtube.com/watch?v=kiBmE10ZR8Y&ab_channel=HondaIndiaPowerProductsLimited'
  },
];
export const Honda = [
  {
    id: '1',
    title: 'Battery operated Hand Tools',
    image: Images.dummyFile,
    type: 'file',
    link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
  },
  {
    id: '2',
    title: 'Generators',
    image: Images.dummyFile,
    type: 'file',
     link: 'https://www.africau.edu/images/default/sample.pdf'
  },
  {
    id: '3',
    title: 'Tilers',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=tGf672Vemis&ab_channel=HondaIndiaPowerProductsLimited'
  },
  {
    id: '4',
    title: 'Battery operated Hand Tools',
    image: Images.dummyFile,
    type: 'file',
    link: 'https://www.africau.edu/images/default/sample.pdf'
  },
  {
    id: '5',
    title: 'Generators',
    image: Images.dummyYouTube,
    type: 'link',
    link: 'https://www.youtube.com/watch?v=tGf672Vemis&ab_channel=HondaIndiaPowerProductsLimited'
  },
];

export const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const flatListData = [
  { id: 1, title: 'Small Construction Work', image: Images.battery },
  { id: 2, title: 'Home Usage', image: Images.battery },
  { id: 3, title: 'Home', image: Images.battery }
]

 export const banners: BannerItem[] = [
    {
      img: Images.tutorial1,
      text: 'Experience Honda’s advanced power, designed for efficiency, durability, and performance in every situation.',
      head: 'Reliable Power',
    },
    {
      img: Images.tutorial2,
      text: 'Get seamless service and support for your Honda power products with authorized dealers and quick assistance at your fingertips.',
      head: 'Easy & Hassle-Free Service',
    },
    {
      img: Images.tutorial3,
      text: 'Browse, compare, and purchase genuine Honda power equipment effortlessly with a smooth and secure online experience.',
      head: 'Smart & Convenient Shopping',
    },
  ];


  export const tabDataHondaMarine = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Portable Series' },
    { id: 3, title: 'Mid Series' },
    { id: 4, title: 'Big Series' },
  ];

  export const tabDataHiPlusAgriMachinery = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Reaper' },
    { id: 3, title: 'HTP Sprayers' },
  ];

  export const tabDataHiPlusLightCunstruction = [
    { id: 1, title: 'All' },
    { id: 2, title: 'Concrete Cutter' },
    { id: 3, title: 'Plate Compactor' },
  ];



  export const allGenrator = [
    {
      id: '1',
      number: 'EU70is',
      price: '₹ 2,65,000.00',
      image: Images.tutorial1,
      title: 'Generators',
    },

    {
      id: '2',
      number: 'HRJ196',
      price: '₹ 68,000.00',
      image: Images.ep1000Series,
      title: 'Generators',
    },
    {
      id: '3',
      number: 'EU70is',
      price: '₹ 36,500.00',
      image: Images.eu30ISeries,
      title: 'Generators',
    },
    {
        id: '4',
        number: 'EU70is',
        price: '₹ 2,65,000.00',
        image: Images.eu30ISeries,
        title: 'Generators',
      },
      {
        id: '5',
        number: 'EX200S',
        price: '₹ 68,000.00',
        image: Images.silentGenratorSeries,
        title: 'Generators',
      },
      {
        id: '6',
        number: 'EX200S',
        price: '₹ 36,500.00',
        image: Images.silentGenratorSeries,
        title: 'Generators',
      },
  ];

  export const Inverter = [
    {
      id: '1',
      number: 'EU70is',
      price: '₹ 2,65,000.00',
      image: Images.tutorial1,
      title: 'Inverter',
    },

    {
      id: '2',
      number: 'HRJ196',
      price: '₹ 68,000.00',
      image: Images.ep1000Series,
      title: 'Inverter',
    },
    {
      id: '3',
      number: 'EU70is',
      price: '₹ 36,500.00',
      image: Images.eu30ISeries,
      title: 'Inverter',
    },
  ];

  export const HandySeries = [
    {
      id: '1',
      number: 'EP 1000',
      price: '₹ 2,65,000.00',
      image: Images.ep1000Series,
      title: 'Genrators',
    },
  ];


  export const silentSeris = [
    {
      id: '5',
      number: 'EX200S',
      price: '₹ 68,000.00',
      image: Images.silentGenratorSeries,
      title: 'Generators',
    },
    {
      id: '6',
      number: 'EX200S',
      price: '₹ 36,500.00',
      image: Images.silentGenratorSeries,
      title: 'Generators',
    },
  ];



  export const allMarine = [
    {
      id: '1',
      number: 'BF200',
      price: '₹ 36,500.00',
      image: Images.hondaMarineBf200,
      title: 'Outboard Motors',
    },

    {
      id: '2',
      number: 'BF150',
      price: '₹ 68,000.00',
      image: Images.hondaMarineBf200,
      title: 'Outboard Motors',
    },
    {
      id: '3',
      number: 'BF90',
      price: '₹ 36,500.00',
      image: Images.hondaMarineBf200,
      title: 'Outboard Motors',
    },
    {
        id: '4',
        number: 'BF80',
        price: '₹ 2,65,000.00',
        image: Images.hondaMarineBf200,
        title: 'Outboard Motors',
      },
      {
        id: '5',
        number: 'BF60',
        price: '₹ 68,000.00',
        image: Images.hondaMarineBf200,
        title: 'Generators',
      },
      {
        id: '6',
        number: 'BF40',
        price: '₹ 36,500.00',
        image: Images.hondaMarineBf200,
        title: 'Outboard Motors',
      },
  ];


  export const marinePortable = [
    {
      id: '5',
      number: 'BF20',
      price: '₹ 68,000.00',
      image: Images.hondaMarineBf600,
      title: 'Outboard Motors',
    },
    {
      id: '6',
      number: 'BF50',
      price: '₹ 36,500.00',
      image: Images.hondaMarineBf600,
      title: 'Outboard Motors',
    },
  ];



  export const hiPlusAgriMachinery = [
    {
      id: '1',
      number: 'CV40-80 Concrete...',
      price: '₹ 1,42,000.00',
      image: Images.cv40AgriMachinery,
      title: 'Light Cons. Machinery',
    },

    {
      id: '2',
      number: 'CV60-160 Concrete...',
      price: '₹ 68,000.00',
      image: Images.cv40AgriMachinery,
      title: 'Outboard Motors',
    },
    {
      id: '3',
      number: 'Concrete Cutter...',
      price: '₹ 2,65,000.00',
      image: Images.lightCunstructionMachinery,
      title: 'Cutter',
    },
    {
        id: '4',
        number: 'Plate Compactor PC...',
        price: '₹ 2,65,000.00',
        image: Images.lightCunstructionMachinery,
        title: 'Cutter',
      },
      {
        id: '5',
        number: 'BF60',
        price: '₹ 68,000.00',
        image: Images.lightCunstructionMachinery,
        title: 'Plate Compactor PC...',
      },
  ];


  export const engineData = [
    {
      id: '1',
      number: 'GX690',
      title: 'Generators',
      price: '₹ 2,65,000.00',
      image: require('../assets/images/engineSmall.png'),
    },
    {
      id: '2',
      number: 'GX660',
      title: 'Lawn Mowers',
      price: '₹ 68,000.00',
      image: require('../assets/images/engine21.png'),
    },
    {
      id: '3',
      number: 'GX630',
      title: 'Water Pumps',
      price: '₹ 36,500.00',
      image: require('../assets/images/engineSmall.png'),
    },
    {
      id: '4',
      number: 'GX200',
      title: 'Generators',
      price: '₹ 2,65,000.00',
      image: require('../assets/images/engine21.png'),
    },
    {
      id: '5',
      number: 'GXV160',
      title: 'Lawn Mowers',
      price: '₹ 68,000.00',
      image: require('../assets/images/engineSmall.png'),
    },
    {
      id: '6',
      number: 'WB40XD',
      title: 'Water Pumps',
      price: '₹ 36,500.00',
      image: require('../assets/images/engine21.png'),
    },
  ];


  export const dowloadContent =[
    {
      title: 'Brochures',
      link: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf'
    },
    {
      title: 'Catalogs',
      link: 'https://www.aeee.in/wp-content/uploads/2020/08/Sample-pdf.pdf'
    },
    {
      title: 'Manuals',
      link: 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf'
    }
  ]


  export const batteryOperatedData = [
    {
      id: '1',
      number: 'LITHIUM BATTERY',
      title: 'Battery Operated',
      price: '₹ 2,65,000.00',
      image: require('../assets/images/charger.png'),
    },
    {
      id: '2',
      number: 'LITHIUM BATTERY',
      title: 'Battery Operated',
      price: '₹ 68,000.00',
      image: require('../assets/images/charger.png'),
    },
    {
      id: '3',
      number: 'LITHIUM BATTERY',
      title: 'Battery Operated',
      price: '₹ 36,500.00',
      image: require('../assets/images/charger.png'),
    },
    {
      id: '4',
      number: 'LITHIUM BATTERY',
      title: 'Battery Operated',
      price: '₹ 2,65,000.00',
      image: require('../assets/images/charger.png'),
    },
    {
      id: '5',
      number: 'LITHIUM BATTERY',
      title: 'Battery Operated',
      price: '₹ 68,000.00',
      image: require('../assets/images/charger.png'),
    },
    {
      id: '6',
      number: 'CHAINSAW',
      title: 'Battery Operated',
      price: '₹ 36,500.00',
      image: require('../assets/images/charger.png'),
    },
  ];


   export const categories = [
      {id: '1', name: 'Generators', image: Images.genratorSetImage},
      {id: '2', name: 'Water Pump', image: Images.waterPumpImage},
      {id: '3', name: 'Honda Marine', image: Images.hondaMarineSmall},
      {id: '4', name: 'Engines', image: Images.engineSmall},
      {id: '5', name: 'Agri & Garden', image: Images.agriculture},
      {id: '6', name: 'Battery Operated', image: Images.battery},
      
    ];

  export const category = [
      {id: '1', name: 'Agriculture Machinery', image: Images.agriculture},
      {id: '2', name: 'Light Construction', image: Images.machinery},
      {id: '3', name: 'Other Categories', image: Images.other},
    ];


    export const productCatelog = [
      {
        id: '1',
        title: 'Download Content',
        image: Images.downloadContentIcon,
        type: 'file',
        link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: '2',
        title: 'Honda Equipment User Guide.pdf',
        image: Images.dummyFile,
        type: 'file',
         link: 'https://www.africau.edu/images/default/sample.pdf'
      },
      {
        id: '3',
        title: 'Honda Equipment User Guide.pdf',
        image: Images.dummyYouTube,
        type: 'link',
        link: 'https://www.youtube.com/watch?v=tGf672Vemis&ab_channel=HondaIndiaPowerProductsLimited'
      },
      {
        id: '4',
        title: 'Battery operated Hand Tools',
        image: Images.dummyFile,
        type: 'file',
        link: 'https://www.africau.edu/images/default/sample.pdf'
      },
      {
        id: '5',
        title: 'Generators',
        image: Images.dummyYouTube,
        type: 'link',
        link: 'https://www.youtube.com/watch?v=tGf672Vemis&ab_channel=HondaIndiaPowerProductsLimited'
      },
    ];



    export const retailers = [
      {
        id: '1',
        name: 'Jenny Retailers',
        phone: '+91-9809000001',
        status: 'Activated',
        date: '04/25/2025'
      },
      {
        id: '2',
        name: 'Jenny Retailers 2',
        phone: '+91-9809000001',
        status: 'De-activated',
        date: '04/18/2025'
      },
      {
        id: '3',
        name: 'Jenny Retailers 3',
        phone: '+91-9809000001',
        status: 'Activated',
        date: '04/15/2025'
      },
      {
        id: '4',
        name: 'Jenny Retailers 4',
        phone: '+91-9809000001',
        status: 'Activated',
        date: '04/30/2025'
      },
    ];
    export const typesData = [
        {id: '1', label: 'Honda'},
        {id: '2', label: 'HI+'},
        {id: '3', label: 'HI Value+'},
      ];
    export const newArrivals = [
        {
          id: '1',
          number: 'EU70is',
          price: '₹ 2,65,000.00',
          image: Images.tutorial1,
          title: 'Generators',
          type:'Honda'
        },
    
        {
          id: '2',
          number: 'HRJ196',
          price: '₹ 68,000.00',
          image: Images.tutorial3,
          title: 'Lawn Mowers',
          type:'HI+'
        },
        {
          id: '3',
          number: 'WB40XD',
          price: '₹ 36,500.00',
          image: Images.WB,
          title: 'Water Pumps',
          type:'HI Value+'
        },
        {
            id: '4',
            number: 'EU70is',
            price: '₹ 2,65,000.00',
            image: Images.tutorial1,
            title: 'Generators',
            type:'HI Value+'
          },
          {
            id: '5',
            number: 'HRJ196',
            price: '₹ 68,000.00',
            image: Images.tutorial3,
            title: 'Lawn Mowers',
            type:'HI+'
          },
          {
            id: '6',
            number: 'WB40XD',
            price: '₹ 36,500.00',
            image: Images.WB,
            title: 'Water Pumps',
            type:'Honda'
          },
      ];


      export const NewArrivalsData = [
        {
          id: '1',
          number: 'EU70is',
          title: 'Generators',
          price: '₹ 2,65,000.00',
          image: require('../assets/images/hondaGenrator.png'),
        },
        {
          id: '2',
          number: 'HRJ196',
          title: 'Lawn Mowers',
          price: '₹ 68,000.00',
          image: require('../assets/images/hivaluelogo.png'),
        },
        {
          id: '3',
          number: 'WB40XD',
          title: 'Water Pumps',
          price: '₹ 36,500.00',
          image: require('../assets/images/battery.png'),
        },
        {
          id: '4',
          number: 'EU70is',
          title: 'Generators',
          price: '₹ 2,65,000.00',
          image: require('../assets/images/battery.png'),
        },
        {
          id: '5',
          number: 'HRJ196',
          title: 'Lawn Mowers',
          price: '₹ 68,000.00',
          image: require('../assets/images/battery.png'),
        },
      ];
    


      export const batteryOpDownloadData = [
        {
          id: '1',
          title: 'Battery Operated.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
        {
          id: '2',
          title: 'Silent Battery Operated.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
      ]
      export const GenratorDownloadData = [
        {
          id: '1',
          title: 'Inverter Generator Brochures.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
        {
          id: '2',
          title: 'Silent Generator Catalogs.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
      ]
      export const tillersDownloadData = [
        {
          id: '1',
          title: 'Tillers New Brochures.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
        {
          id: '2',
          title: 'Tillers New Catalogs.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
        {
          id: '3',
          title: 'Tillers New  Manuals.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'
        },
      ]

      export const agriMachinesDownloadData = [
        {
          id: '1',
          title: 'Agriculture New Brochures.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
        {
          id: '2',
          title: 'Agriculture Machineries.pdf',
          image: Images.dummyFile,
          type:'file',
          link: 'https://www.africau.edu/images/default/sample.pdf'

        },
      ]