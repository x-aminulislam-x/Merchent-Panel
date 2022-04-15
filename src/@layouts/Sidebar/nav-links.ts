const navLinks = [
  { label: "Dashboard", link: "/admin/dashboard", icon: "home" },
  { label: "Orders", link: "/admin/orders", icon: "receipt" },
  {
    label: "Products",
    link: "/admin/products",
    icon: "category",
    childrens: [
      { label: "Inventory", link: "/admin/products/inventory" },
      { label: "Category", link: "/admin/products/category" },
    ],
  },
  { label: "Customers", link: "/admin/cutomers", icon: "person" },
  { label: "Sales Promotion", link: "/admin/sales_promotion", icon: "local_offer" },
  { label: "Analytics", link: "/admin/analytics", icon: "bar_chart" },
  {
    label: "Apps",
    link: "/admin/apps",
    icon: "widgets",
    childrens: [
      { label: "Apps-A", link: "/admin/apps/apps-a" },
      { label: "Apps-B", link: "/admin/apps/apps-b" },
      { label: "Apps-C", link: "/admin/apps/apps-c" },
      { label: "Apps-D", link: "/admin/apps/apps-d" },
      { label: "Apps-E", link: "/admin/apps/apps-e" },
      { label: "Apps-F", link: "/admin/apps/apps-f" },
    ],
  },
];

export default navLinks;
