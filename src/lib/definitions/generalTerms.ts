export const generalTerms = [
  {
    name: "Global Data Synchronization Network",
    acronym: "GDSN",
    definition:
      "A network of data pools that enables users to securely synchronize master data based on GS1 standards. The GDSN enables both vendors and retailers to receive and send accurate, real-time data and trade item updates.",
  },
  {
    name: "Global Standards 1",
    acronym: "GS1",
    definition:
      "A nonprofit organization that develops and maintains global standards for business communication, including governing the rules and regulations of data pools working within the GDSN. Their most known standard is the barcode, a symbol printed on products that can be scanned electronically. However, the provide additional services as well such as creating a company GLN (Global Location Number) or liscensing a quntity of UPC codes.",
  },
  {
    name: "Data Pool",
    definition:
      "A certified provider that enables you to share and exchange your data over the Global Data Synchronization Network. By utilizing a GS1 certified data pool, you can provide and update your product information in a single place to distribute to multiple trading partners. 1WorldSync is a data pool provider and can ensure you get your product content to the retailers that need it!",
  },
  {
    name: "Global Location Number",
    acronym: "GLN",
    definition:
      "A unique 13 digit identifying number that is assiged to a company by GS1 to actively particiapte in the GDSN. A GLN is like an email address as it is used to connect two parties between the data transfer or synchronization process. It ensures a vendor is sending item data to the correct company and it lets retailers recieving item data know who the data is coming from.",
  },
  {
    name: "Global Trade Item Number",
    acronym: "GTIN",
    definition:
      "A unqiue string of numbers that identifies a specific packaging level or a product within an Item Hierarchy. A GTIN can vary in length depeding on the packaging in level and which country it is being used in however the most common length is 12 digits (other common lengths includes 8, 13, and 14 digits). The GTIN can be located on the barcode of the product or packaging level and usually contains or is made with the GLN as a reference.",
  },
  {
    name: "Synchronization",
    definition:
      "The ongoing process of communicating and sharing data between two or more parties and updating changes automatically between them to maintain consistency within systems.",
  },
  {
    name: "Attribute",
    definition:
      "A characteristic by which a product or a product container is identified and differentiated. Attriubtes are concrete, objective, can be observed, and don't change on their own. They can comprise of dimensions, features, functions, benefits, and even uses.",
  },
  {
    name: "Each",
    acronym: "Base Unit",
    definition:
      "One instance of a product that is the smallest retail unit. This is the lowest possible packaging level within an Item Hierarchy as it is the item itself.",
  },
  {
    name: "Inner Pack",
    definition:
      "A smaller packaging level that contains either vewy few products or just a single product that is transported within a case. Inner Packs are used to protect the product and prevent it from touching or mixing with other products (even if the other products are the same). Not all products have Inner Packs.",
  },
  {
    name: "Case",
    definition:
      "A stand alone packaging level (crate or box) that the product(s) come in.",
  },
  {
    name: "Pallet",
    definition:
      "A packaging level used for transporting large quantities of cases or even large products. It is a flat (usually wooden) structure that is used for handling transport, storing goods, or transporting freight.",
  },
  {
    name: "Item Hierarchy",
    acronym: "Packaging Hierarchy",
    definition:
      "All of the packaging level types that exists on an product (including the product iteself) and the connection or link of each level. Item Hierarchies also include the package type/product quantity and other attributes. A package type/product can be included in multiple different Item Hierarchies if it is the exact same.  An example of an Item Hierarchy is 'Pallet --> Case --> Inner Pack --> Each'",
  },
  {
    name: "Link",
    definition:
      "The connection between different packaging type levels within an Item Hierarchy. Multiple links can be made to the same packaging level or product if that same packaging level or product is in multiple Item Hierarchies.",
  },
];
