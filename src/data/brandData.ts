export const APP_SCREENSHOTS = {
  homeDiscovery: '/assets/aistudio/photo_2026-11-26_12-55-10_7da4e20a.jpg',
  restaurantMenu: '/assets/aistudio/photo_2026-11-26_12-55-15_a2985f42.jpg',
  confirmItem: '/assets/aistudio/photo_2026-11-26_12-55-19_3ae71eed.jpg',
  trackOrder: '/assets/aistudio/photo_2026-11-26_12-55-25_3141f224.jpg',
  myOrders: '/assets/aistudio/photo_2026-11-26_12-55-29_86f7df2b.jpg',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'App screens', href: '#app-showcase' },
];

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  detail: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    title: 'Set your delivery location',
    description:
      'Enter or pin your delivery address in the app to see participating local businesses and delivery categories open in your area.',
    detail: 'Save home, work, or custom drop-off instructions.',
  },
  {
    number: '02',
    title: 'Browse & build your cart',
    description:
      'Search across categories, add items to your cart, include special instructions, and review supported local payment options.',
    detail: 'Clear checkout summary before you place an order.',
  },
  {
    number: '03',
    title: 'Track live & view history',
    description:
      'Follow real-time route progress and confirmation milestones, receive quiet status alerts, and access past orders anytime.',
    detail: 'Active, completed, and cancelled orders stay organized.',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Where is the MyTruck Delivery app available?',
    answer:
      'App availability depends on your neighborhood and the participating local businesses active in your area. Enter your delivery address on the home screen to check coverage near you.',
  },
  {
    question: 'What can I manage inside the app?',
    answer:
      'You can switch between Food, Shops, and Packages categories, search participating listings, customize cart items with special notes, track live routes on the map, and review your order history.',
  },
  {
    question: 'Which payment options are supported?',
    answer:
      'Supported payment methods—including Cash on Delivery where offered—depend on your location and the participating business fulfilling your order. Available options appear clearly before checkout.',
  },
  {
    question: 'How do order tracking and notifications work?',
    answer:
      'Once an order is placed, the Track Order screen displays pickup and drop-off points, route estimates, and confirmation status, paired with app notifications as your order moves forward.',
  },
  {
    question: 'Can I save delivery addresses or check past orders?',
    answer:
      'Yes. You can update your delivery address at the top of the home screen and filter past orders by All, Active, Completed, or Cancelled inside the My Orders tab.',
  },
];
