import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, Flame, Sparkles, MapPin, Phone, Clock, 
  ChevronRight, Plus, Minus, Check, QrCode, Search, 
  Table, Settings, CreditCard, Lock, ArrowRight, Camera,
  ListFilter, ShieldAlert, Wallet, Copy, CheckCircle, Printer, Key, Image as ImageIcon, PlusCircle, Edit2, Store, MessageCircle
} from 'lucide-react';

// Expanded Premium Photos for Candles Restaurant & Lounge
const pastaImg = 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=800&q=80';
const jollofImg = 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=80';
const wingsImg = 'https://images.unsplash.com/photo-1524114664604-cd8133cd67ad?auto=format&fit=crop&w=800&q=80';
const platterImg = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80';
const meatImg = 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80';
const fishImg = 'https://images.unsplash.com/photo-1511256334651-76f571b782b5?auto=format&fit=crop&w=800&q=80';
const plantainImg = 'https://images.unsplash.com/photo-1628102491629-778571d893a3?auto=format&fit=crop&w=800&q=80';
const yamImg = 'https://images.unsplash.com/photo-1599487532293-1b9181180637?auto=format&fit=crop&w=800&q=80';
const cocktailImg = 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80';
const bottleImg = 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&w=800&q=80';
const champagneImg = 'https://images.unsplash.com/photo-1598289431512-b98b00150047?auto=format&fit=crop&w=800&q=80';
const ambianceImg = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80';

const INITIAL_MENU = [
  // --- MAINS & SIDES ---
  {
    id: '01', name: '01. SPAGHETTI & GRILLED CHICKEN', category: 'Mains', price: 8500.00,
    caption: '"Weekends taste better at Candles. Come hungry, leave happy."',
    desc: 'Rich, spicy tomato basil spaghetti paired with our signature peppered grilled chicken. A GRA Awka favorite.',
    image: pastaImg, inStock: true, isBestSeller: true
  },
  {
    id: '02', name: '02. SMOKY PARTY JOLLOF & TURKEY', category: 'Mains', price: 7500.00,
    caption: '"The ultimate party flavor."',
    desc: 'Wood-fired Jollof rice served with perfectly spiced, deep-fried turkey wings and coleslaw.',
    image: jollofImg, inStock: true, isBestSeller: true
  },
  {
    id: '03', name: '03. GOLDEN PLANTAIN (DODO)', category: 'Sides', price: 3000.00,
    caption: '"The perfect sweet companion."',
    desc: 'Golden, caramelised sweet plantain spears lightly dusted with aromatic sea salt.',
    image: plantainImg, inStock: true, isBestSeller: false
  },
  {
    id: '04', name: '04. YAM CHIPS & PEPPER SAUCE', category: 'Sides', price: 3500.00,
    caption: '"Crispy on the outside, fluffy inside."',
    desc: 'Deep-fried yam batons served with our house-made spicy ata rodo dip.',
    image: yamImg, inStock: true, isBestSeller: false
  },

  // --- GRILLS & CHOPS (10 Items) ---
  {
    id: '05', name: '05. SPICY BBQ WINGS & FRIES', category: 'Grills & Chops', price: 6000.00,
    caption: '"The perfect lounge companion."', desc: 'Crispy, flame-grilled wings tossed in spicy BBQ sauce.', image: wingsImg, inStock: true, isBestSeller: true
  },
  {
    id: '06', name: '06. CLASSIC NKWOBI', category: 'Grills & Chops', price: 6000.00,
    caption: '"Traditional flavors, premium setting."', desc: 'Tender cow foot slow-cooked in a rich, spicy palm oil paste.', image: meatImg, inStock: true, isBestSeller: true
  },
  {
    id: '07', name: '07. CANDLES VIP MEAT PLATTER', category: 'Grills & Chops', price: 18500.00,
    caption: '"Perfect for the table."', desc: 'A premium sharing board featuring lamb chops, wings, suya, and plantain.', image: platterImg, inStock: true, isBestSeller: false
  },
  {
    id: '08', name: '08. SPICY BEEF SUYA', category: 'Grills & Chops', price: 5000.00,
    caption: '"Street food elevated."', desc: 'Thinly sliced tender beef flank, flame-grilled and coated in Yaji spice.', image: meatImg, inStock: true, isBestSeller: true
  },
  {
    id: '09', name: '09. SPICY ASUN', category: 'Grills & Chops', price: 6500.00,
    caption: '"For the bold."', desc: 'Bite-sized roasted goat meat tossed in a fiery pepper mix.', image: meatImg, inStock: true, isBestSeller: false
  },
  {
    id: '10', name: '10. CHARCOAL GRILLED CATFISH', category: 'Grills & Chops', price: 15000.00,
    caption: '"Point and Kill, GRA Style."', desc: 'Whole catfish marinated in signature spices, grilled to perfection.', image: fishImg, inStock: true, isBestSeller: false
  },
  {
    id: '11', name: '11. PEPPERED SNAILS', category: 'Grills & Chops', price: 12000.00,
    caption: '"A premium delicacy."', desc: 'Jumbo snails sautéed in a rich, spicy pepper sauce with onions.', image: meatImg, inStock: true, isBestSeller: false
  },
  {
    id: '12', name: '12. CHICKEN SUYA SKEWERS', category: 'Grills & Chops', price: 5500.00,
    caption: '"Tender and smoky."', desc: 'Juicy chicken breast chunks coated in peanut spice blend and grilled.', image: meatImg, inStock: true, isBestSeller: false
  },
  {
    id: '13', name: '13. PEPPERED TURKEY WINGS', category: 'Grills & Chops', price: 7000.00,
    caption: '"Bite into luxury."', desc: 'Deep-fried turkey wings glazed in our signature spicy stew.', image: meatImg, inStock: true, isBestSeller: false
  },
  {
    id: '14', name: '14. GRILLED JUMBO PRAWNS', category: 'Grills & Chops', price: 18000.00,
    caption: '"Seafood excellence."', desc: 'Four jumbo prawns grilled with garlic, herb, and butter glaze.', image: platterImg, inStock: true, isBestSeller: false
  },

  // --- LOUNGE DRINKS (10 Items) ---
  {
    id: '15', name: '15. CANDLES SIGNATURE COCKTAIL', category: 'Lounge Drinks', price: 5000.00,
    caption: '"Set the mood right."', desc: 'Our in-house mixologist’s special. Refreshing and potent.', image: cocktailImg, inStock: true, isBestSeller: true
  },
  {
    id: '16', name: '16. HENNESSY VSOP', category: 'Lounge Drinks', price: 120000.00,
    caption: '"For the VIPs."', desc: 'Served with complimentary ice, chasers, and table sparklers.', image: bottleImg, inStock: true, isBestSeller: true
  },
  {
    id: '17', name: '17. MOËT & CHANDON ROSÉ', category: 'Lounge Drinks', price: 150000.00,
    caption: '"Celebrate in style."', desc: 'Premium chilled champagne. Perfect for high-energy nights.', image: champagneImg, inStock: true, isBestSeller: true
  },
  {
    id: '18', name: '18. CLASE AZUL REPOSADO', category: 'Lounge Drinks', price: 450000.00,
    caption: '"The ultimate flex."', desc: 'Ultra-premium tequila served with lime wedges and salt.', image: bottleImg, inStock: true, isBestSeller: false
  },
  {
    id: '19', name: '19. DON JULIO 1942', category: 'Lounge Drinks', price: 380000.00,
    caption: '"Top shelf exclusively."', desc: 'Aged luxury tequila for the discerning palate.', image: bottleImg, inStock: true, isBestSeller: false
  },
  {
    id: '20', name: '20. CASAMIGOS REPOSADO', category: 'Lounge Drinks', price: 180000.00,
    caption: '"Smooth and steady."', desc: 'Premium tequila brought straight to your table.', image: bottleImg, inStock: true, isBestSeller: false
  },
  {
    id: '21', name: '21. VEUVE CLICQUOT BRUT', category: 'Lounge Drinks', price: 130000.00,
    caption: '"Pop the bubbly."', desc: 'Classic French champagne for any celebration.', image: champagneImg, inStock: true, isBestSeller: false
  },
  {
    id: '22', name: '22. GLENFIDDICH 18 YR', category: 'Lounge Drinks', price: 160000.00,
    caption: '"Aged to perfection."', desc: 'Premium single malt scotch whisky.', image: bottleImg, inStock: true, isBestSeller: false
  },
  {
    id: '23', name: '23. MARTELL BLUE SWIFT', category: 'Lounge Drinks', price: 95000.00,
    caption: '"The VSOP choice."', desc: 'Cognac finished in bourbon casks.', image: bottleImg, inStock: true, isBestSeller: false
  },
  {
    id: '24', name: '24. LONG ISLAND ICED TEA', category: 'Lounge Drinks', price: 6000.00,
    caption: '"Don\'t let the name fool you."', desc: 'A potent mix of vodka, tequila, light rum, triple sec, and gin.', image: cocktailImg, inStock: true, isBestSeller: false
  }
];

export default function App() {
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [activeTab, setActiveTab] = useState('menu');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [tableNumber, setTableNumber] = useState('Table 01');
  const [cart, setCart] = useState([]);
  
  // White-Label Store Config
  const [storeConfig, setStoreConfig] = useState(() => {
    const saved = localStorage.getItem('candles_store_config');
    return saved ? JSON.parse(saved) : {
      storeName: 'CANDLES',
      subTitle: 'Restaurant & Lounge',
      currency: '₦',
      heroTagline: 'Elevating the Dining Experience in GRA Awka.',
      heroSubtext: 'A vibrant destination for great food, elite vibes, and memorable weekends. Come hungry, leave happy.',
      paystackPublicKey: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx',
      whatsappNumber: '2348124959185',
      instagramHandle: '@candlesrestaurant'
    };
  });

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminPin, setAdminPin] = useState(() => localStorage.getItem('candles_admin_pin') || '1234');
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminPinError, setAdminPinError] = useState(false);
  
  const [adminSubTab, setAdminSubTab] = useState('menu');
  const [newPinInput, setNewPinInput] = useState('');
  const [tempConfig, setTempConfig] = useState(storeConfig);

  const [isAddingDish, setIsAddingDish] = useState(false);
  const [newDishName, setNewDishName] = useState('');
  const [newDishCategory, setNewDishCategory] = useState('Mains');
  const [newDishPrice, setNewDishPrice] = useState('');
  const [newDishCaption, setNewDishCaption] = useState('');
  const [newDishDesc, setNewDishDesc] = useState('');
  const [newDishImage, setNewDishImage] = useState(null);

  const [editingItemId, setEditingItemId] = useState(null);
  const [editedNameInput, setEditedNameInput] = useState('');
  const [editedPriceInput, setEditedPriceInput] = useState('');

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isStandeeModalOpen, setIsStandeeModalOpen] = useState(false);
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);
  
  const [paymentMethod, setPaymentMethod] = useState('whatsapp');
  const [customerEmail, setCustomerEmail] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Reservation Form States
  const [resName, setResName] = useState('');
  const [resDate, setResDate] = useState('');
  const [resGuests, setResGuests] = useState('2 Guests');

  const categories = ['All', 'Mains', 'Grills & Chops', 'Sides', 'Lounge Drinks'];

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.paystack.co/v1/inline.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tableParam = params.get('table');
    if (tableParam) {
      setTableNumber(`Table ${tableParam.padStart(2, '0')}`);
    }
  }, []);

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const toggleStock = (id) => {
    setMenuItems(prev => prev.map(item => item.id === id ? { ...item, inStock: !item.inStock } : item));
  };

  const handleSaveItemEdit = (id) => {
    const parsedPrice = parseFloat(editedPriceInput);
    setMenuItems(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          name: editedNameInput ? editedNameInput.toUpperCase() : item.name,
          price: !isNaN(parsedPrice) && parsedPrice > 0 ? parsedPrice : item.price
        };
      }
      return item;
    }));
    setEditingItemId(null);
  };

  const handleAdminAuth = (e) => {
    e.preventDefault();
    if (adminPinInput === adminPin) {
      setIsAdminAuthenticated(true);
      setAdminPinError(false);
      setAdminPinInput('');
    } else {
      setAdminPinError(true);
    }
  };

  const handleSaveStoreConfig = (e) => {
    e.preventDefault();
    setStoreConfig(tempConfig);
    localStorage.setItem('candles_store_config', JSON.stringify(tempConfig));
    alert('Store Configuration Saved Successfully!');
  };

  const handleSaveNewPin = (e) => {
    e.preventDefault();
    if (newPinInput.length === 4) {
      setAdminPin(newPinInput);
      localStorage.setItem('candles_admin_pin', newPinInput);
      setNewPinInput('');
      alert('New PIN Saved Successfully!');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewDishImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddNewDish = (e) => {
    e.preventDefault();
    if (!newDishName || !newDishPrice || !newDishImage) {
      alert('Please fill in dish name, price, and select a photo!');
      return;
    }

    const nextNumber = String(menuItems.length + 1).padStart(2, '0');
    const newItem = {
      id: nextNumber,
      name: `${nextNumber}. ${newDishName.toUpperCase()}`,
      category: newDishCategory,
      price: parseFloat(newDishPrice),
      caption: newDishCaption ? `"${newDishCaption}"` : '"A delicious new addition to our luxury menu."',
      desc: newDishDesc || 'Freshly prepared with authentic ingredients.',
      image: newDishImage,
      inStock: true,
      isBestSeller: false
    };

    setMenuItems(prev => [newItem, ...prev]);
    setIsAddingDish(false);
    setNewDishName('');
    setNewDishPrice('');
    setNewDishCaption('');
    setNewDishDesc('');
    setNewDishImage(null);
  };

  const triggerWhatsAppCheckout = () => {
    let message = `*New Order from ${tableNumber}*\n\n`;
    
    cart.forEach(item => {
      message += `${item.qty}x ${item.name} - ${storeConfig.currency}${(item.price * item.qty).toLocaleString()}\n`;
    });
    
    message += `\n*Total: ${storeConfig.currency}${cartTotal.toLocaleString()}*\n`;
    
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setCart([]);
      setIsCartOpen(false);
    }, 2000);
  };

  const triggerPaystackCheckout = () => {
    if (!customerEmail) {
      alert('Please enter your email address for the receipt.');
      return;
    }

    if (!window.PaystackPop) {
      alert('Paystack SDK is loading. Please check your internet connection or try again.');
      return;
    }

    const handler = window.PaystackPop.setup({
      key: storeConfig.paystackPublicKey,
      email: customerEmail,
      amount: Math.round(cartTotal * 100), 
      currency: 'NGN',
      ref: 'CANDLES_' + Math.floor((Math.random() * 1000000000) + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Table Number",
            variable_name: "table_number",
            value: tableNumber
          }
        ]
      },
      callback: function(response) {
        setOrderPlaced(true);
        setTimeout(() => {
          setOrderPlaced(false);
          setCart([]);
          setIsCartOpen(false);
        }, 2000);
      },
      onClose: function() {
        alert('Transaction cancelled.');
      }
    });

    handler.openIframe();
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    const message = `*VIP Table Reservation Request*\n\n*Name:* ${resName}\n*Date:* ${resDate}\n*Guests:* ${resGuests}\n*Preferred Area:* ${tableNumber}`;
    window.open(`https://wa.me/${storeConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const selectItemFromDirectory = (name) => {
    const cleanName = name.replace(/^[0-9]+\.\s*/, '');
    setSearchQuery(cleanName);
    setIsDirectoryOpen(false);
    setActiveTab('menu');
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const filteredMenu = menuItems.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-neutral-100 font-sans pb-24 selection:bg-amber-500 selection:text-black">
      
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0a0a0c]/90 backdrop-blur-md border-b border-amber-500/20 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 p-[1px]">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center font-serif font-bold text-amber-500 text-lg">
                C
              </div>
            </div>
            <div>
              <h1 className="font-serif text-xl tracking-wider text-amber-400 font-bold flex items-center gap-1.5 uppercase">
                {storeConfig.storeName}
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-neutral-400">{storeConfig.subTitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsDirectoryOpen(true)}
              className="p-2 rounded-lg bg-neutral-900 border border-amber-500/30 text-amber-400 hover:bg-neutral-800 text-xs flex items-center gap-1.5 transition"
            >
              <ListFilter className="w-4 h-4" />
              <span className="hidden sm:inline">Menu Index</span>
            </button>

            <button 
              onClick={() => {
                setTempConfig(storeConfig);
                setIsAdminOpen(true);
              }}
              className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-amber-400 text-xs flex items-center gap-1"
            >
              <Lock className="w-4 h-4 text-amber-500" />
              <span className="hidden sm:inline">Admin</span>
            </button>

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-black font-semibold flex items-center gap-2 px-3 text-sm shadow-lg shadow-amber-500/20 hover:opacity-90 transition"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Order</span>
              {cart.length > 0 && (
                <span className="bg-white text-black text-xs px-1.5 py-0.5 rounded-full font-bold">
                  {cart.reduce((a, b) => a + b.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-neutral-800/80">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <img 
          src={ambianceImg} 
          alt="Atmosphere" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 filter brightness-75 scale-105"
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 py-12 sm:py-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Premium Dining Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-3">
            {storeConfig.heroTagline}
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base max-w-xl mb-6">
            {storeConfig.heroSubtext}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-neutral-900/90 border border-amber-500/30 px-3 py-1.5 rounded-lg text-xs text-amber-300">
              <Table className="w-4 h-4 text-amber-400" />
              <span>Table Selected: </span>
              <select 
                value={tableNumber} 
                onChange={(e) => setTableNumber(e.target.value)}
                className="bg-transparent font-bold text-amber-400 focus:outline-none cursor-pointer"
              >
                <option value="Table 01" className="bg-neutral-900">Table 01</option>
                <option value="Table 04" className="bg-neutral-900">Table 04</option>
                <option value="Table 08" className="bg-neutral-900">Table 08 (VIP)</option>
                <option value="Lounge Booth" className="bg-neutral-900">Lounge Booth</option>
              </select>
            </div>

            <button 
              onClick={() => setIsStandeeModalOpen(true)}
              className="flex items-center gap-2 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-lg text-xs text-neutral-300 transition active:scale-95"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Table QR Standee Preview</span>
            </button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-[57px] z-30 bg-[#0a0a0c]/95 border-b border-neutral-800 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-2">
          {['menu', 'vibes', 'reserve'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition ${
                activeTab === tab
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {tab === 'menu' && 'Digital Menu'}
              {tab === 'vibes' && 'The Ambiance'}
              {tab === 'reserve' && 'VIP Booking'}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-4xl mx-auto px-4 py-6">

        {/* TAB 1: DIGITAL MENU */}
        {activeTab === 'menu' && (
          <div>
            <div className="space-y-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
                <input 
                  type="text" 
                  placeholder="Search Asun, Wings, Hennessy..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedCategory === cat
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/50'
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredMenu.map((item) => (
                <div 
                  key={item.id}
                  className={`bg-neutral-900/60 border rounded-2xl overflow-hidden transition hover:border-amber-500/40 flex flex-col justify-between ${
                    item.inStock ? 'border-neutral-800/80' : 'border-red-900/40 opacity-60'
                  }`}
                >
                  <div>
                    <div className="relative h-52 overflow-hidden bg-neutral-950">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-black/30" />
                      
                      {item.isBestSeller && (
                        <div className="absolute top-3 left-3 bg-amber-500 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md">
                          <Sparkles className="w-3 h-3" /> Best Seller
                        </div>
                      )}

                      {!item.inStock && (
                        <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
                          Out of Stock
                        </div>
                      )}

                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md border border-amber-500/40 px-3 py-1 rounded-lg text-amber-400 font-serif font-bold text-sm">
                        {storeConfig.currency}{item.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                        {item.name}
                      </h3>

                      <blockquote className="bg-neutral-950/80 border-l-2 border-amber-500 p-2.5 rounded-r-lg text-xs italic text-amber-200/90 leading-relaxed">
                        {item.caption}
                      </blockquote>

                      <p className="text-xs text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => addToCart(item)}
                      disabled={!item.inStock}
                      className={`w-full py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition ${
                        item.inStock
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black hover:opacity-90 active:scale-[0.98]'
                          : 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                      }`}
                    >
                      <Plus className="w-4 h-4" />
                      {item.inStock ? 'Add to Order' : 'Unavailable'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: AMBIANCE */}
        {activeTab === 'vibes' && (
          <div className="space-y-8">
            <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 space-y-4">
              <h2 className="text-2xl font-serif font-bold text-amber-400">The Spot To Be Every Day</h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                A luxury lifestyle destination designed for those who appreciate premium hospitality, fine culinary artistry, and top-shelf mixology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="relative h-64 rounded-xl overflow-hidden border border-amber-500/20">
                  <img src={ambianceImg} alt="Interior" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-4 flex items-end">
                    <p className="text-xs font-semibold text-amber-300">Classy Interior & Mood Lighting</p>
                  </div>
                </div>
                <div className="bg-neutral-950 p-5 rounded-xl border border-neutral-800 flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-amber-500 font-bold uppercase tracking-widest">VIP Atmosphere</span>
                    <h4 className="text-lg font-serif font-bold text-white mt-1">{storeConfig.storeName} Experience</h4>
                    <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                      Immerse yourself in exquisite flavors and high energy here in Awka GRA.
                    </p>
                  </div>
                  <div className="pt-4 border-t border-neutral-800 flex items-center gap-2 text-xs text-amber-400">
                    <Camera className="w-4 h-4" />
                    <span>{storeConfig.instagramHandle}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: RESERVATIONS */}
        {activeTab === 'reserve' && (
          <div className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl font-serif font-bold text-amber-400">Reserve a VIP Table</h2>
            <p className="text-xs text-neutral-400">Book your table for fine dining, birthdays, or private group celebrations.</p>

            <form onSubmit={handleReservationSubmit} className="space-y-4 pt-2">
              <div>
                <label className="block text-xs text-neutral-400 mb-1">Full Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Ebube Obiakor" 
                  value={resName}
                  onChange={(e) => setResName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Date</label>
                  <input 
                    type="date" 
                    required 
                    value={resDate}
                    onChange={(e) => setResDate(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-400 mb-1">Guests</label>
                  <select 
                    value={resGuests}
                    onChange={(e) => setResGuests(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="2 Guests">2 Guests</option>
                    <option value="4 Guests">4 Guests</option>
                    <option value="6+ VIP Group">6+ VIP Group</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="w-full bg-amber-500 text-black font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-amber-400 transition">
                Confirm Reservation via WhatsApp
              </button>
            </form>
          </div>
        )}

      </main>

      {/* FLOATING DISH DIRECTORY BUTTON */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsDirectoryOpen(true)}
          className="bg-amber-500 hover:bg-amber-400 text-black font-bold p-3.5 rounded-full shadow-2xl flex items-center gap-2 border border-amber-300 transition transform hover:scale-105"
        >
          <ListFilter className="w-5 h-5" />
          <span className="text-xs font-bold pr-1 hidden sm:inline">Dish Index</span>
        </button>
      </div>

      {/* DISH DIRECTORY DRAWER */}
      {isDirectoryOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-sm bg-[#0a0a0c] h-full border-l border-neutral-800 flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <h3 className="font-serif text-lg font-bold text-amber-400 flex items-center gap-2">
                  <ListFilter className="w-5 h-5" /> Food & Drink Directory
                </h3>
                <button onClick={() => setIsDirectoryOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
              </div>

              <div className="space-y-2 mt-4">
                {menuItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => selectItemFromDirectory(item.name)}
                    className="w-full text-left p-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 flex items-center justify-between transition group"
                  >
                    <div>
                      <span className="text-xs font-bold text-white group-hover:text-amber-400 transition">{item.name}</span>
                      <p className="text-[10px] text-neutral-500">{item.category}</p>
                    </div>
                    <span className="text-xs font-serif font-bold text-amber-400">{storeConfig.currency}{item.price.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PRINTABLE PHYSICAL TABLE STANDEE PREVIEW */}
      {isStandeeModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0a0a0c] border border-amber-500/40 rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-neutral-800">
              <h3 className="font-serif text-lg font-bold text-amber-400 flex items-center gap-2">
                <Printer className="w-5 h-5" /> Table Card Standee
              </h3>
              <button onClick={() => setIsStandeeModalOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
            </div>

            <div className="bg-white p-6 rounded-2xl border-4 border-amber-500 text-center space-y-4 shadow-2xl relative overflow-hidden">
              
              <h2 className="font-serif text-2xl text-black font-bold tracking-widest uppercase">
                {storeConfig.storeName}
              </h2>
              <p className="text-xs font-bold text-neutral-800 uppercase tracking-wider">{tableNumber}</p>

              <div className="bg-white p-2 rounded-xl inline-block border-2 border-neutral-200">
                <img 
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(`http://localhost:5174?table=01`)}`} 
                  alt="Physical Table QR"
                  className="w-40 h-40 mx-auto"
                />
              </div>

              <div>
                <p className="text-sm text-black font-bold mt-1">
                  Scan to View Menu & Order
                </p>
                <div className="mt-3 pt-3 border-t border-neutral-200 flex justify-center gap-4 text-xs font-bold text-neutral-600">
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3"/> {storeConfig.instagramHandle}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => window.print()}
              className="w-full bg-amber-500 text-black py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4" /> Print Custom Standee Card
            </button>
          </div>
        </div>
      )}

      {/* ORDER CART DRAWER */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-[#0a0a0c] h-full border-l border-neutral-800 flex flex-col justify-between p-6 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <h3 className="font-serif text-xl font-bold text-amber-400">Your Order ({tableNumber})</h3>
                <button onClick={() => setIsCartOpen(false)} className="text-neutral-400 hover:text-white">✕</button>
              </div>

              {cart.length === 0 ? (
                <div className="py-12 text-center text-neutral-500 text-sm">
                  Your cart is empty. Tap items from the menu to add.
                </div>
              ) : (
                <div className="divide-y divide-neutral-800/60 my-4">
                  {cart.map((item) => (
                    <div key={item.id} className="py-3 flex items-center justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                        <p className="text-xs text-amber-400">{storeConfig.currency}{(item.price).toLocaleString()} each</p>
                      </div>
                      <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-lg p-1">
                        <button onClick={() => updateQty(item.id, -1)} className="p-1 hover:text-amber-400"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="text-xs font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="p-1 hover:text-amber-400"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-neutral-800">
                
                <div className="space-y-2">
                  <span className="text-xs text-neutral-400">Select Order Method:</span>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setPaymentMethod('whatsapp')}
                      className={`p-2.5 rounded-xl text-[11px] font-semibold border flex flex-col items-center gap-1 transition ${
                        paymentMethod === 'whatsapp' ? 'bg-[#25D366]/20 border-[#25D366] text-[#25D366]' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" /> Send via WhatsApp
                    </button>

                    <button 
                      onClick={() => setPaymentMethod('paystack')}
                      className={`p-2.5 rounded-xl text-[11px] font-semibold border flex flex-col items-center gap-1 transition ${
                        paymentMethod === 'paystack' ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <CreditCard className="w-4 h-4" /> Pay Online
                    </button>

                    <button 
                      onClick={() => setPaymentMethod('cash')}
                      className={`p-2.5 rounded-xl text-[11px] font-semibold border flex flex-col items-center gap-1 transition ${
                        paymentMethod === 'cash' ? 'bg-amber-500/20 border-amber-500 text-amber-400' : 'bg-neutral-900 border-neutral-800 text-neutral-400'
                      }`}
                    >
                      <Table className="w-4 h-4" /> Waiter to Table
                    </button>
                  </div>
                </div>

                {paymentMethod === 'paystack' && (
                  <div>
                    <label className="block text-xs text-neutral-400 mb-1">Your Email (For Digital Receipt)</label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. guest@gmail.com"
                      value={customerEmail}
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                )}

                <div className="flex justify-between text-lg font-serif font-bold text-white">
                  <span>Total:</span>
                  <span className="text-amber-400">{storeConfig.currency}{cartTotal.toLocaleString()}</span>
                </div>

                <button 
                  onClick={() => {
                    if (paymentMethod === 'whatsapp') {
                      triggerWhatsAppCheckout();
                    } else if (paymentMethod === 'paystack') {
                      triggerPaystackCheckout();
                    } else {
                      setOrderPlaced(true);
                      setTimeout(() => {
                        setOrderPlaced(false);
                        setCart([]);
                        setIsCartOpen(false);
                      }, 2000);
                    }
                  }}
                  className={`w-full py-3.5 font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition ${
                    paymentMethod === 'whatsapp' 
                      ? 'bg-[#25D366] text-black hover:bg-[#20b858] shadow-[#25D366]/20'
                      : 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-amber-500/20'
                  }`}
                >
                  {orderPlaced 
                    ? 'Order Confirmed! ✓' 
                    : paymentMethod === 'whatsapp'
                      ? `Send Order to WhatsApp`
                      : paymentMethod === 'paystack' 
                        ? 'Pay Online with Paystack' 
                        : `Call Waiter to ${tableNumber}`}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* WHITE-LABEL OWNER / ADMIN PANEL */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-center items-center p-4">
          <div className="bg-[#0a0a0c] border border-neutral-800 w-full max-w-lg rounded-2xl p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <h3 className="font-serif text-lg font-bold text-amber-400 flex items-center gap-2">
                <Settings className="w-5 h-5" /> Management Dashboard
              </h3>
              <button 
                onClick={() => {
                  setIsAdminOpen(false);
                  setIsAdminAuthenticated(false);
                }} 
                className="text-neutral-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            {!isAdminAuthenticated ? (
              <form onSubmit={handleAdminAuth} className="space-y-4 py-4 text-center">
                <div className="w-12 h-12 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center mx-auto text-amber-400">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Owner / Manager Passcode</h4>
                  <p className="text-xs text-neutral-400 mt-1">Enter PIN to customize branding & menu.</p>
                </div>

                <input 
                  type="password" 
                  maxLength={4}
                  placeholder="4-Digit PIN" 
                  value={adminPinInput}
                  onChange={(e) => setAdminPinInput(e.target.value)}
                  className="w-32 text-center bg-neutral-950 border border-neutral-800 rounded-xl py-2.5 text-lg font-bold tracking-widest text-amber-400 focus:border-amber-500 focus:outline-none"
                />

                {adminPinError && (
                  <p className="text-xs text-red-500 flex items-center justify-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5" /> Incorrect PIN. (Default: 1234)
                  </p>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-amber-500 text-black font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-amber-400 transition"
                >
                  Unlock Admin Panel
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                
                {/* Admin Navigation Tabs */}
                <div className="flex bg-neutral-950 p-1 rounded-xl border border-neutral-800 text-xs font-semibold">
                  <button 
                    onClick={() => setAdminSubTab('menu')}
                    className={`flex-1 py-1.5 rounded-lg transition ${adminSubTab === 'menu' ? 'bg-amber-500 text-black' : 'text-neutral-400'}`}
                  >
                    Dishes & Stock
                  </button>
                  <button 
                    onClick={() => setAdminSubTab('settings')}
                    className={`flex-1 py-1.5 rounded-lg transition ${adminSubTab === 'settings' ? 'bg-amber-500 text-black' : 'text-neutral-400'}`}
                  >
                    Restaurant Settings
                  </button>
                  <button 
                    onClick={() => setAdminSubTab('pin')}
                    className={`flex-1 py-1.5 rounded-lg transition ${adminSubTab === 'pin' ? 'bg-amber-500 text-black' : 'text-neutral-400'}`}
                  >
                    Security PIN
                  </button>
                </div>

                {/* SUB TAB 1: MENU & DISH MANAGEMENT */}
                {adminSubTab === 'menu' && (
                  <div className="space-y-4">
                    <button 
                      onClick={() => setIsAddingDish(!isAddingDish)}
                      className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-90 transition shadow-md"
                    >
                      <PlusCircle className="w-4 h-4" />
                      {isAddingDish ? 'Cancel Adding Dish' : 'Add New Dish / Special'}
                    </button>

                    {isAddingDish && (
                      <form onSubmit={handleAddNewDish} className="p-4 bg-neutral-950 border border-amber-500/40 rounded-2xl space-y-3">
                        <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-neutral-800 pb-2">
                          Upload Dish to Digital Menu
                        </h4>

                        <div>
                          <label className="block text-[11px] text-neutral-400 mb-1">Dish Name</label>
                          <input 
                            type="text" 
                            required 
                            placeholder="e.g. Asun Fried Rice" 
                            value={newDishName} 
                            onChange={(e) => setNewDishName(e.target.value)}
                            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" 
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] text-neutral-400 mb-1">Category</label>
                            <select 
                              value={newDishCategory}
                              onChange={(e) => setNewDishCategory(e.target.value)}
                              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
                            >
                              <option value="Mains">Mains</option>
                              <option value="Sides">Sides</option>
                              <option value="Grills & Chops">Grills & Chops</option>
                              <option value="Lounge Drinks">Lounge Drinks</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-[11px] text-neutral-400 mb-1">Price ({storeConfig.currency})</label>
                            <input 
                              type="number" 
                              step="0.01" 
                              required 
                              placeholder="22.50" 
                              value={newDishPrice} 
                              onChange={(e) => setNewDishPrice(e.target.value)}
                              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500" 
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] text-neutral-400 mb-1">Dish Photo (From Gallery)</label>
                          <label className="flex items-center justify-center gap-2 p-3 bg-neutral-900 border border-dashed border-amber-500/50 rounded-xl cursor-pointer hover:bg-neutral-850 transition">
                            <ImageIcon className="w-4 h-4 text-amber-400" />
                            <span className="text-xs text-amber-300 font-medium">
                              {newDishImage ? 'Photo Selected ✓ (Click to Change)' : 'Choose Photo from Gallery'}
                            </span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              onChange={handleImageUpload} 
                              className="hidden" 
                            />
                          </label>
                          {newDishImage && (
                            <div className="mt-2 h-24 rounded-lg overflow-hidden border border-neutral-800">
                              <img src={newDishImage} alt="Preview" className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>

                        <button 
                          type="submit" 
                          className="w-full bg-amber-500 text-black font-bold py-2.5 rounded-xl text-xs uppercase tracking-wider hover:bg-amber-400 transition"
                        >
                          Publish Dish to Live Menu
                        </button>
                      </form>
                    )}

                    {/* EDITABLE DISH LIST */}
                    <div className="space-y-2">
                      {menuItems.map(item => (
                        <div key={item.id} className="p-3 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-between gap-2">
                          <div className="flex-1">
                            {editingItemId === item.id ? (
                              <div className="space-y-1">
                                <input 
                                  type="text" 
                                  value={editedNameInput}
                                  onChange={(e) => setEditedNameInput(e.target.value)}
                                  className="w-full bg-neutral-950 border border-amber-500/60 rounded px-2 py-1 text-xs text-white"
                                />
                                <div className="flex items-center gap-2">
                                  <input 
                                    type="number" 
                                    step="0.01"
                                    value={editedPriceInput}
                                    onChange={(e) => setEditedPriceInput(e.target.value)}
                                    className="w-24 bg-neutral-950 border border-amber-500/60 rounded px-2 py-1 text-xs text-amber-400"
                                  />
                                  <button 
                                    onClick={() => handleSaveItemEdit(item.id)}
                                    className="bg-amber-500 text-black text-[10px] font-bold px-2 py-1 rounded"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                                  {item.name}
                                  <button 
                                    onClick={() => {
                                      setEditingItemId(item.id);
                                      setEditedNameInput(item.name);
                                      setEditedPriceInput(item.price.toString());
                                    }}
                                    className="text-neutral-500 hover:text-amber-400"
                                  >
                                    <Edit2 className="w-3 h-3" />
                                  </button>
                                </h4>
                                <p className="text-[10px] text-amber-400">{storeConfig.currency}{item.price.toLocaleString()}</p>
                              </div>
                            )}
                          </div>

                          <button 
                            onClick={() => toggleStock(item.id)}
                            className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition ${
                              item.inStock ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-red-500/20 text-red-400 border border-red-500/40'
                            }`}
                          >
                            {item.inStock ? 'In Stock' : 'Mark Available'}
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* SUB TAB 2: ZERO-CODE WHITE LABEL CONFIG (EXPANDED) */}
                {adminSubTab === 'settings' && (
                  <form onSubmit={handleSaveStoreConfig} className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-4">
                    <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider border-b border-neutral-800 pb-2 flex items-center gap-1">
                      <Store className="w-4 h-4" /> Customize Store Branding & Payment Keys
                    </h4>

                    {/* Basic Info */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-neutral-400 mb-1">Restaurant Name</label>
                        <input 
                          type="text" 
                          value={tempConfig.storeName}
                          onChange={(e) => setTempConfig({ ...tempConfig, storeName: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-neutral-400 mb-1">Sub-Title / Tagline</label>
                        <input 
                          type="text" 
                          value={tempConfig.subTitle}
                          onChange={(e) => setTempConfig({ ...tempConfig, subTitle: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Hero Section */}
                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">Hero Banner Headline</label>
                      <input 
                        type="text" 
                        value={tempConfig.heroTagline}
                        onChange={(e) => setTempConfig({ ...tempConfig, heroTagline: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-neutral-400 mb-1">Hero Banner Subtext</label>
                      <textarea 
                        value={tempConfig.heroSubtext}
                        onChange={(e) => setTempConfig({ ...tempConfig, heroSubtext: e.target.value })}
                        rows="2"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                      />
                    </div>

                    {/* Integrations */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-neutral-400 mb-1">WhatsApp Number</label>
                        <input 
                          type="text" 
                          value={tempConfig.whatsappNumber}
                          onChange={(e) => setTempConfig({ ...tempConfig, whatsappNumber: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-[#25D366] font-mono focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-neutral-400 mb-1">Instagram Handle</label>
                        <input 
                          type="text" 
                          value={tempConfig.instagramHandle}
                          onChange={(e) => setTempConfig({ ...tempConfig, instagramHandle: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="col-span-1">
                        <label className="block text-[11px] text-neutral-400 mb-1">Currency</label>
                        <select 
                          value={tempConfig.currency}
                          onChange={(e) => setTempConfig({ ...tempConfig, currency: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-white focus:border-amber-500 focus:outline-none"
                        >
                          <option value="₦">Naira (₦)</option>
                          <option value="£">Pounds (£)</option>
                          <option value="$">US Dollar ($)</option>
                          <option value="€">Euro (€)</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label className="block text-[11px] text-neutral-400 mb-1">Paystack Public Key</label>
                        <input 
                          type="text" 
                          value={tempConfig.paystackPublicKey}
                          onChange={(e) => setTempConfig({ ...tempConfig, paystackPublicKey: e.target.value })}
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-xs text-neutral-400 font-mono focus:border-amber-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-amber-500 text-black font-bold py-3 rounded-xl text-xs uppercase tracking-wider hover:bg-amber-400 transition mt-4"
                    >
                      Save Store Settings
                    </button>
                  </form>
                )}

                {/* SUB TAB 3: SECURITY PIN */}
                {adminSubTab === 'pin' && (
                  <form onSubmit={handleSaveNewPin} className="p-4 bg-neutral-950 border border-neutral-800 rounded-2xl space-y-3">
                    <label className="block text-xs font-bold text-amber-400">Set New 4-Digit Staff PIN:</label>
                    <div className="flex gap-2">
                      <input 
                        type="password"
                        maxLength={4}
                        placeholder="e.g. 9876"
                        value={newPinInput}
                        onChange={(e) => setNewPinInput(e.target.value)}
                        className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-amber-500 w-full"
                      />
                      <button 
                        type="submit"
                        className="bg-amber-500 text-black px-4 py-2 rounded-lg text-xs font-bold uppercase whitespace-nowrap hover:bg-amber-400"
                      >
                        Save PIN
                      </button>
                    </div>
                  </form>
                )}

              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}