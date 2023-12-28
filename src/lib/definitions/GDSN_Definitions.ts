export const GDSNDefinitions = {
    A: [
      {
        name: "Acceleration",
        xmlName: "componentInformation/tradeItemMeasurements/acceleration",
        definition:
          "The rate of change of velocity. For example: 0 - 60 mph / 4.3 s; 0 - 100 kph / 4.5 s.",
        set: "Components, Dimensions",
      },
      {
        name: "Accidental Release Measures Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/accidentalReleaseMeasuresDescription",
        definition:
          "A description of the method of clean-up or pick up for example Chemtrack number in relation to any hazardous materials regulated by ADR",
        set: "Components, Safety",
      },
      {
        name: "Active Ingredient Indicator",
        xmlName: "nonfoodIngredient/isIngredientActive",
        definition:
          "Indicates the presence of an active ingredient that achieves the desired results of using the product.\n\nUsed to inform the buyer and consumer of active ingredients.",
        set: "Ingredients",
      },
      {
        name: "Additional Camera Angle Code",
        xmlName: "dam/imageInfo/additionalCameraAngleCode",
        definition:
          "An additional camera angle used to take a picture of the trade item for example ZOOM_VIEW. If this attribute is not populated, the assumption is a full trade item view. Uses FileCameraPerspectiveCode code list.",
        set: "Digital Asset Management Attributes (DAM), Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Additional Certification Organisation Type Code",
        xmlName:
          "foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationTypeCode",
        definition: "Additional Certification Organisation Type Code",
        set: "Food and Beverage",
      },
      {
        name: "Additional Certification Organisation TypeCode",
        xmlName:
          "componentInformation/dietInformation/foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationTypeCode",
        definition: "Additional Certification Organisation TypeCode",
        set: "Components",
      },
      {
        name: "Additional Certification Organisation Value",
        xmlName:
          "componentInformation/dietInformation/foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationValue",
        definition: "Additional Certification Organisation Value",
        set: "Components, Food and Beverage",
      },
      {
        name: "Additional Description",
        xmlName:
          "componentInformation/descriptionInformation/additionalDescription",
        definition:
          "Additional variants necessary to communicate to the industry to help define the product. Multiple variants can be established for each GTIN. This is a repeatable field, e.g. Style, Color, and Fragrance. ",
        set: "Components, Descriptions",
      },
      {
        name: "Additional Dimension Depth",
        xmlName: "displayDimensions/dimensionDepth",
        definition:
          "The depth dimension of the physical form of the product in or out of packaging, including its unit of measure, under certain display scenarios (Additional Dimension Type Code) when they differ from the standard measurements provided under the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).\n\nUsed to create planograms for store shelving in conjunction with Additional Dimension Width and Additional Dimension Height. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions.",
        set: "Dimensions",
      },
      {
        name: "Additional Dimension Height",
        xmlName: "displayDimensions/dimensionHeight",
        definition:
          "The height dimension of the physical form of the product in or out of packaging, including its unit of measure, under certain display scenarios (Additional Dimension Type Code) when they differ from the standard measurements provided under the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).\n\nUsed to create planograms for store shelving in conjunction with Additional Dimension Width and Additional Dimension Height. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions.",
        set: "Dimensions",
      },
      {
        name: "Additional Dimension Type Code",
        xmlName: "displayDimensions/displayDimensionTypeCode",
        definition:
          'Valid value for certain scenarios (e.g. Retail Display, Out of package, Direct Ship to Consumer packaging) used for additional measurements for the product. Display dimensions, as a group, may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed by the buyer for assortment and space planning. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions. Used in conjunction with Additional Dimension Depth, Additional Dimension Width and Additional Dimension Height.',
        set: "Dimensions",
      },
      {
        name: "Additional Dimension Width",
        xmlName: "displayDimensions/dimensionWidth",
        definition:
          "The width dimension of the physical form of the product in or out of packaging, including its unit of measure, under certain display scenarios (Additional Dimension Type Code) when they differ from the standard measurements provided under the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).\n\nUsed to create planograms for store shelving in conjunction with Additional Dimension Width and Additional Dimension Height. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions.",
        set: "Dimensions",
      },
      {
        name: "Additional ID Type",
        xmlName: "partyInRole/AdditionalTradeItemIdentification/additionalIdType",
        definition: "AdditionalId Type",
        set: "Identification",
      },
      {
        name: "Additional ID Value",
        xmlName:
          "partyInRole/AdditionalTradeItemIdentification/additionalIdValue",
        definition: "AdditionalId Value",
        set: "Identification",
      },
      {
        name: "Additional Party ID Type",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/additionalPartyIdentification/additionalPartyIdentificationType",
        definition:
          "Identification of a party by use of a code other than the Global Location Number. ",
        set: "Components, Identification, Ingredients",
      },
      {
        name: "Additional Party ID Value",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/additionalPartyIdentification/additionalPartyIdentificationValue",
        definition: "A party identifier that is in addition to the GLN. ",
        set: "Components, Identification",
      },
      {
        name: "Additional Party Identification Code",
        xmlName:
          "componentInformation/certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationCode",
        definition: "Additional Party Identification Code",
        set: "Components",
      },
      {
        name: "Additional Party Identification Type",
        xmlName:
          "certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationCode",
        definition:
          "Identification of a party by use of a code other than the Global Location Number. ",
        set: "Licensing and Certification",
      },
      {
        name: "Additional Party Identification Value",
        xmlName:
          "componentInformation/certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationValue",
        definition: "Additional Party Identification Value",
        set: "Components, Ingredients, Licensing and Certification",
      },
      {
        name: "Additional Property Code",
        xmlName:
          "alternateClassification/additionalProperty/additionalPropertyCode",
        definition:
          "Code assigned to a property of product for a classification.",
        set: "Identification",
      },
      {
        name: "Additional Property Description",
        xmlName:
          "alternateClassification/additionalProperty/additionalPropertyDescription",
        definition:
          "A description of a property of product for a specific classification. for example Waterproof.",
        set: "Identification",
      },
      {
        name: "Additional SDS Information",
        xmlName:
          "componentInformation/safetyDataSheetInformation/additionalSDSInformation",
        definition:
          "A description field for other information regarding the MSDS that is not in the other sections. For example, additional contact information, or sustainability statement, other information.",
        set: "Components, Safety",
      },
      {
        name: "Additional Trade Item Identification Type Code",
        xmlName:
          "nonGTINReferencedItem/additionalTradeItemIdentification/additionalTradeItemIdentificationTypeCode",
        definition:
          "Alternative means to the Global Trade Item Number to identify a trade item.",
        set: "Identification",
      },
      {
        name: "Additional Trade Item Identification Value",
        xmlName:
          "nonGTINReferencedItem/additionalTradeItemIdentification/additionalTradeItemIdentificationValue",
        definition:
          "Alternative means to the Global Trade Item Number to identify a trade item.",
        set: "Identification",
      },
      {
        name: "Additive Containment Code",
        xmlName: "foodAndBevAdditiveInformation/levelOfContainmentCode",
        definition:
          "Valid value to indicate the precision of an additive in the product.\n\nUsed to communicate to the consumer and the buyer the additive containment status.\n\nUsed in conjunction with Additive Name. May also be used with Additive Name.",
        set: "Ingredients",
      },
      {
        name: "Additive Level of Containment",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/levelOfContainmentCode",
        definition: "Code indicating the level of presence of the additive.",
        set: "Components",
      },
      {
        name: "Additive Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveName",
        definition:
          "Represents the name of any additive or genetic modification contained or not contained in the trade item.",
        set: "Components, Ingredients, Ingredients",
      },
      {
        name: "Additive Specific - Common Allergen Name (If Applicable)",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCommonAllergenName",
        definition:
          "Egg, cow's milk, crustaceans and molluscs, fish, peanuts, soybeans, tree nuts, significant cereals.",
        set: "Ingredients",
      },
      {
        name: "Additive Specific - Is Ingredient a Common Allergen?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientCommonAllergen",
        definition:
          "Common allergen' means egg, cow's milk, crustaceans and molluscs, fish, peanuts, soybeans, tree nuts and any significant cereals, as well as ingredients derived from these foodstuffs that has retained its allergenicity in the final product.",
        set: "Ingredients",
      },
      {
        name: "Additive Specific - Is Ingredient a Flavour Enhancer?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientFlavourEnhancer",
        definition:
          "Is the Ingredient a substance that enhances, intensifies or supplements the existing taste and/or odour of a foodstuff? MSG is considered a Flavour Enhancer.",
        set: "Ingredients",
      },
      {
        name: "Additive Specific - Is Ingredient a Flavourant?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientFlavourant",
        definition:
          "Is the Ingredient a flavouring substance intended to be added in small amounts to foods and of which the primary purpose is to impact, modify or improve the flavour of foodstuffs rather than to enhance nutritional quality. Is not intended to be consumed on its own and exclude substances that have an exclusively sweet, sour or salty taste. Flavourants  may consist of flavouring substances, flavouring preparations, process Flavourings, smoke Flavourings or Mixtures thereof.",
        set: "Ingredients",
      },
      {
        name: "Additive Specific - Is Ingredient a Food Colourant?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientFoodColourant",
        definition:
          "Is Ingredient any substance described as such in the Regulations Relating to Food Colourants published under the Act.",
        set: "Ingredients",
      },
      {
        name: "Additive Specific - Is Ingredient a Preservative?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientPreservative",
        definition:
          "Is the Ingredient an additive that prolongs the shelf life of a food by protecting against deterioration caused by microorganisms.",
        set: "Ingredients",
      },
      {
        name: "Additive Specific - Is Ingredient Oil Cold or Mechanically Pressed?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientOilColdOrMechanicallyPressed",
        definition:
          "In terms of edible vegetable fat and oil manufacturing, means the oil has been obtained by applying mechanical procedures, such as expelling or mechanical pressure, in the absence of light, without the application of external heat where the temperature of the process never exceeds 50% (122OF) and where purification may have been accomplished by washing with water, settling, filtering and centrifuging only.",
        set: "Ingredients",
      },
      {
        name: "additive Statement Formatting Pattern ",
        xmlName: "additiveStatementFormattingPattern",
        definition:
          "The formatting pattern of text for additive statement to denote a paragraph breaks.",
        set: "Ingredients",
      },
      {
        name: "Additive Type Code Reference Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/code",
        definition:
          "The code which identifies the additive type code used in each Food and Beverage component.",
        set: "Components, Ingredients, Ingredients",
      },
      {
        name: "Additive Type Code Reference Code List Agency Code",
        xmlName:
          "nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Ingredients",
      },
      {
        name: "Additive Type Code Reference Code List Agency Name",
        xmlName:
          "nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Ingredients",
      },
      {
        name: "Additive Type Code Reference Code List Name",
        xmlName:
          "nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListName",
        definition: "The name of the codelist.",
        set: "Ingredients",
      },
      {
        name: "Additive Type Code Reference Description",
        xmlName:
          "nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeDescription",
        definition:
          "Indicates if the trade item is resistant to frost and can thus be used outside. ",
        set: "Ingredients",
      },
      {
        name: "Agency Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxAgency/AgencyCode",
        definition: "Code specifying a responsible agency.",
        set: "Taxation",
      },
      {
        name: "Agency Description",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxAgency/AgencyDescription",
        definition: "A description of the Tax Agency code.",
        set: "Taxation",
      },
      {
        name: "Album Capacity",
        xmlName: "albumCapacity",
        definition:
          "Describes the number of photos the album can hold. Values are in number of packets (Pkt).",
        set: "Media and Entertainment",
      },
      {
        name: "Album Capacity UOM",
        xmlName: "albumCapacityUOM",
        definition: "The unit of measurement associated with the album capacity.",
        set: "Media and Entertainment",
      },
      {
        name: "Alcohol Beverage Age",
        xmlName: "alcoholBeverageAge",
        definition:
          "The time period which the alcohol product has been aged. For example, a whiskey aged 12 years.",
        set: "Liquor",
      },
      {
        name: "Alcohol Beverage Distilled From Code",
        xmlName: "alcoholBeverageDistilledFromCode",
        definition:
          "The main ingredient(s) from which the alcohol product has been distilled. Example: Rye, Potato, Sugar Cane.",
        set: "Liquor",
      },
      {
        name: "Alcohol Beverage Filtering Method Type Code",
        xmlName: "alcoholBeverageFilteringMethodTypeCode",
        definition:
          "The method by which an alcohol beverage product has been filtered. Filtering is used to refine or polish the product to achieve a specific taste profile. Example: Charcoal, Chilled.",
        set: "Liquor",
      },
      {
        name: "Alcohol Beverage Production Method Type Code",
        xmlName: "alcoholBeverageProductionMethodTypeCode",
        definition:
          "A method by which an alcohol beverage product has been produced. Example: Methode Traditionnelle, Added Carbonization, Chamenoise.",
        set: "Liquor",
      },
      {
        name: "Alcohol Beverage Type Code",
        xmlName: "alcoholBeverageTypeCode",
        definition:
          "A value to provide the basic type of alcohol beverage product, for example- Spirit-Bourbon, Beer-German Bock, Still Wine-Ice Wine.",
        set: "Liquor",
      },
      {
        name: "Alcohol Percentage",
        xmlName: "percentageOfAlcoholPerVolume",
        definition:
          "The percentage of alcohol by volume contained in the product.\n\nUsed to communicate to the buyer and the consumer the percentage of alcohol by volume contained in the product. Based on the %alcohol, the buyer can make an informed decision if the product can be sold in-store. Alcohol percentage may be used to calculate tax.",
        set: "Dimensions",
      },
      {
        name: "Alcohol Products Closing Type Of Bottle",
        xmlName: "alcoholProductsClosingTypeOfBottle",
        definition: "Indication of the closing type of bottle. ",
        set: "Liquor",
      },
      {
        name: "Alcohol Proof",
        xmlName: "alcoholProof",
        definition:
          "Alcohol proof is a measure of how much ethanol (alcohol) is contained in an alcoholic beverage.",
        set: "Liquor",
      },
      {
        name: "Alcohol Units",
        xmlName: "alcoholUnits",
        definition:
          "The number of alcohol units contained in the product as defined by local target market regulations. May also be referred to as number of standard drinks in certain geographies. Used as a measure to quantify the actual alcoholic content within the product, in order to provide guidance on total alcohol consumption. Example: 500ml of 4.5 percent ABV beer is 2.5 alcohol units in the UK and 2.0 standard drinks in Australia.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Beverage Color Code",
        xmlName: "alcoholicBeverageColorCode",
        definition:
          "Indicates the descriptive term that is used by the product manufacturer to identify the color of the alcoholic beverage. Alcohol colors are sometimes qualified by a scale or regulation. Examples: Wine Regulations, Beer – EBC, SRM/Lovibond, etc.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Beverage Permission Level",
        xmlName: "alcoholicBeveragePermissionLevel",
        definition:
          "Indication of a Permission level for alcoholic products dependent on the product classification. The permission level codes should reflect those of the target market.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Beverage Subregion Of Origin",
        xmlName: "alcoholicBeverageSubregionOfOrigin",
        definition: "Indication of sub region of origin of the trade item.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Beverage Sugar Content",
        xmlName: "alcoholicBeverageSugarContent",
        definition:
          "Indication of the amount of sugar contained in the beverage for example if sugar remaining equals 6.5 g/l then enter 6.5 GL.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Product Beverage Type",
        xmlName: "alcoholicProductBeverageType",
        definition: "Indication of type of alcohol beverage.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Product Colour",
        xmlName: "alcoholicProductColour",
        definition: "Indication of type of alcohol beverage.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Product Region",
        xmlName: "alcoholicProductRegion",
        definition:
          "The region of origin answers the question: From which geographically defined region does the wine come from?",
        set: "Liquor",
      },
      {
        name: "Alcoholic Product Vine Variety",
        xmlName: "alcoholicProductVineVariety",
        definition:
          "Indication of the vine varieties contained in the alcohol beverage.",
        set: "Liquor",
      },
      {
        name: "Alcoholic Products Type Of Taste",
        xmlName: "alcoholicProductsTypeOfTaste",
        definition:
          "Classification of the product according to the amount of residual sugar contained.",
        set: "Liquor",
      },
      {
        name: "Allergen Containment Code",
        xmlName: "allergenRelatedInformation/allergen/levelOfContainmentCode",
        definition:
          "Valid value to indicate the precision of an allergen in a product. \n\nUsed to communicate to the consumer and the buyer the allergen containment status: Contains; May contain or Free from.",
        set: "Allergen",
      },
      {
        name: "Allergen Declarations Indicator",
        xmlName: "allergenRelatedInformation/isAllergenRelevantDataProvided",
        definition:
          "Indicator to confirm whether the relevant allergen data provided for the product is complete.\n\nUsed by the seller to confirm to the buyer that all relevant allergen information is complete.",
        set: "Allergen",
      },
      {
        name: "Allergen Relevant Data Provided Date Time",
        xmlName:
          "allergenRelatedInformation/allergenRelevantDataProvidedDateTime",
        definition:
          "The date upon which the isAllergenRelevantDataProvided indicator was last updated.",
        set: "Allergen, Components",
      },
      {
        name: "Allergen Relevant Data Provided?",
        xmlName:
          "componentInformation/allergenInformation/allergenRelatedInformation/isAllergenRelevantDataProvided",
        definition:
          "Allergen Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  All values not populated are not relevant or not required to be populated on the product label by local regulations.",
        set: "Components",
      },
      {
        name: "Allergen Specification Agency",
        xmlName: "allergenRelatedInformation/allergenSpecificationAgency",
        definition:
          "Note: This attribtue is being deprecated in a future release. There is no longer a use case for this attribute. No need to migrate content. Agency that controls the allergen definition.",
        set: "Allergen, Components",
      },
      {
        name: "Allergen Specification Name",
        xmlName: "allergenRelatedInformation/allergenSpecificationName",
        definition:
          "Note: This attribtue is being deprecated in a future release. There is no longer a use case for this attribute. No need to migrate content. Free text field containing the name and version of the regulation or standard that contains the definition of the allergen.",
        set: "Allergen, Components",
      },
      {
        name: "Allergen Statement",
        xmlName: "allergenRelatedInformation/allergenStatement",
        definition:
          "The statement to the consumer on the presence of allergens, based on local rules or regulations, as stated on the product packaging.\n\nUsed to indicate to the consumer and buyer the presence of allergens in a product.",
        set: "Allergen, Components",
      },
      {
        name: "Allergen Statement Formatting Pattern",
        xmlName: "allergenStatementFormattingPattern",
        definition:
          "the formatting pattern of text for allergen statement to generically emphasize a word or set of words and to denote a paragraph break. It will be up to the recipient to determine the formatting style they will use for the emphasized text.",
        set: "Allergen",
      },
      {
        name: "Allergen Type Code",
        xmlName:
          "componentInformation/allergenInformation/allergenRelatedInformation/allergen/allergenTypeCode",
        definition: "Code indicating the type of allergen.",
        set: "Components",
      },
      {
        name: "Allowance Charge Amount",
        xmlName: "applicableAllowanceCharge/allowanceChargeAmount",
        definition: "Amount of allowance or charge applicable.",
        set: "Sales",
      },
      {
        name: "Allowance Charge Description",
        xmlName: "applicableAllowanceCharge/allowanceChargeDescription",
        definition:
          "A text explanation of the allowance or charge. Allows for the representation of the same value in different languages but not multiple values.",
        set: "Sales",
      },
      {
        name: "Allowance Charge Percentage",
        xmlName: "applicableAllowanceCharge/allowanceChargePercentage",
        definition:
          "Allowance and charges can be expressed in different ways. By using percentage, they are expressed as a percentage of another amount, e.g. the base amount.",
        set: "Sales",
      },
      {
        name: "Allowance Charge Type Code",
        xmlName: "applicableAllowanceCharge/allowanceChargeTypeCode",
        definition:
          "The identification of an allowance charge selected from a predefined list.",
        set: "Sales",
      },
      {
        name: "Allowance Or Charge Type",
        xmlName: "applicableAllowanceCharge/allowanceOrChargeType",
        definition: "Code specifying whether this is an allowance or a charge.",
        set: "Sales",
      },
      {
        name: "Alternate Item Identification Agency",
        xmlName: "alternateItemIdentification/agency",
        definition:
          "Valid value to specify the type of identifier, usually associated with a specific business need, that is in addition to the GTIN, for example, a buyer's or seller's item or model number. \n\nUsed to declare the type of the additional product identification that allows a buyer to know which identification system is used. Used in conjunction with Alternate Item Identification ID.",
        set: "Identification",
      },
      {
        name: "Alternate Item Identification Id",
        xmlName: "alternateItemIdentification/id",
        definition:
          "An identifier, usually associated with a specific business need, that is in addition to the GTIN, for example, a buyer's or seller's item or model number. \n\nUsed to allow a buyer to identify a product by other identification systems. Used in conjunction with Alternate Item Identification Agency.",
        set: "Identification",
      },
      {
        name: "Alternate Text",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/alternateText",
        definition:
          "A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Alternative Color Description",
        xmlName: "color/description",
        definition:
          "The description of the color of the product.\n\nUsed to provide a precise description of the color to the consumer.",
        set: "Descriptions",
      },
      {
        name: "Alternative Returnable Asset Identification",
        xmlName:
          "packagingInformation/returnableAsset/alternateID/alternativeReturnableAssetIdentification",
        definition:
          "An additional returnable asset identification type. Allowed code values are specified in GS1 Code List AdditionalReturnableAssetIdentificationTypeCode.",
        set: "Packaging",
      },
      {
        name: "Alternative Returnable Asset Identification Type Code",
        xmlName:
          "packagingInformation/returnableAsset/alternateID/alternativeReturnableAssetIdentificationTypeCode",
        definition: "Alternative ID for the returnable asset",
        set: "Packaging",
      },
      {
        name: "Amazon A+ Product History",
        xmlName: "productHistory",
        definition:
          "A brief history about the product which will provide the consumer some perspective about the product",
        set: "Food and Beverage",
      },
      {
        name: "Amount Per Unit",
        xmlName: "applicableAllowanceCharge/amountPerUnit",
        definition: "Allowance/charge per unit expressed as an amount.",
        set: "Sales",
      },
      {
        name: "Animal Health Concern",
        xmlName: "animalHealthConcern",
        definition:
          "Descriptive terms to denote the type of condition for which the product is intended to address.",
        set: "Recipient Identification Info",
      },
      {
        name: "Annual Operating Cost",
        xmlName: "energyGuide/annualOperatingCost",
        definition:
          "Specify the Energy Guide annual operationg cost value. Example: 132 dollars",
        set: "Packaging",
      },
      {
        name: "Application Identifier Type Code",
        xmlName: "dataCarrier/applicationIdentifierTypeCode",
        definition:
          "Indication of which Application Identifier's (AI) presence is indicated for example 10 (batch number),15 (best-before-date),17 (expiry date), 310(n) (net weight in kilogram).",
        set: "Identification",
      },
      {
        name: "Are Demonstration Items Available?",
        xmlName: "areDemonstrationItemsAvailable",
        definition:
          "Indicates whether or not product demonstrations are available for the item.",
        set: "Marketing",
      },
      {
        name: "Are Fees Required for Use",
        xmlName: "dam/imageInfo/areFeesRequiredForUse",
        definition:
          "An indicator whether or not a fee is required for the use of this digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Are Human Models in File",
        xmlName: "dam/general/areHumanModelsInFile",
        definition:
          "An indicator whether or not the item is shown or depicted with human models.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Asp Ratio Desc Code",
        xmlName: "aspectRatio/aspectRatioDescriptionCode",
        definition: "A code that indicates the aspect ratio description.",
        set: "Media and Entertainment",
      },
      {
        name: "Asp Ratio Dim Code",
        xmlName: "aspectRatio/aspectRatioDimensionCode",
        definition: "A code that indicates the aspect ratio dimension.",
        set: "Media and Entertainment",
      },
      {
        name: "Assembled Weight",
        xmlName: "assembledWeight",
        definition:
          "Measure to denote the weight of the product when fully assembled.",
        set: "Recipient Identification Info",
      },
      {
        name: "Audio Sound Type Code",
        xmlName: "audioSoundTypeCode",
        definition:
          "A code that indicates the type of audio sound available on the trade item.",
        set: "Media and Entertainment",
      },
      {
        name: "Audio Visual Media Contributor Name",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/audioVisualMediaContributor/audioVisualMediaItemContributorName",
        definition:
          "The name of the contributor of the media content for example artist, producer, director.",
        set: "Media and Entertainment, Media and Entertainment",
      },
      {
        name: "Audio Visual Media Contributor Type Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/audioVisualMediaContributor/audioVisualMediaItemContributorTypeCode",
        definition:
          "A code identifying the type of contributor to media content for example artist, producer, director.",
        set: "Media and Entertainment, Media and Entertainment",
      },
      {
        name: "Audio Visual Media Date",
        xmlName: "audioVisualMediaDateInformation/audioVisualMediaDateTime",
        definition:
          "The date for audio or visual media products for example release date.",
        set: "Media and Entertainment",
      },
      {
        name: "Audio Visual Media Date Type Code",
        xmlName: "audioVisualMediaDateInformation/audioVisualMediaDateTypeCode",
        definition:
          "A code specifying the type of date for audio or visual media products for example release date.",
        set: "Media and Entertainment",
      },
      {
        name: "Audio Visual Media Product Collection Series Number",
        xmlName: "audioVisualMediaProductCollectionSeriesNumber",
        definition:
          "Denotes which part of the series the media is part of for example Halloween II, Law & Order 7, South Park Season 12, Terminator 3, Star Wars II.",
        set: "Media and Entertainment",
      },
      {
        name: "Audio Visual Supported Formats",
        xmlName: "audioVisualSupportedFormats",
        definition:
          "Descriptive terms to detail the audio formats which the product supports. Example MP3.",
        set: "Recipient Identification Info",
      },
      {
        name: "Authorize Recipients",
        xmlName: "dam/authorizedRecipients",
        definition:
          "List of GLNs that this image is shared to.  Sharing is indicated on the Share Type attribute.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Autographed By",
        xmlName: "componentInformation/marketingInformation/autographedBy",
        definition:
          "The person's name who signed or autographed the trade item for example John Hancock.",
        set: "Components",
      },
      {
        name: "Autoignition Temperature",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/autoIgnitionTemperature",
        definition:
          "The lowest temperature at which it will spontaneously ignite in a normal atmosphere without an external source of ignition.",
        set: "Components, Safety",
      },
      {
        name: "Available Language Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/availableLanguageCode",
        definition:
          "The available languages used to interface with the consumer.",
        set: "Media and Entertainment",
      },
      {
        name: "Available Time",
        xmlName: "tradeItemContactInfo/availableTime",
        definition:
          "The time that a specific contact is available.\n\nUsed by the seller to communicate to the buyer the time the contact is available for business processes or for consumer information, relative to the Contact Type Code.",
        set: "Identification",
      },
      {
        name: "Average Distance Travelled To Point Of Packaging Code",
        xmlName:
          "packagingInformation/averageDistanceTravelledToPointOfPackagingCode",
        definition:
          "The average distance each packaging material travelled from the packaging material supplier to the point where the product and packaging are combined to form the trade item. ASSOCIATED BUSINESS RULES: If there are multiple factories, use the weighted average distance based on the volume from the factories. Supplier will provide the packaging code of each material they have provided for attribute packagingMaterialCode.",
        set: "Packaging",
      },
      {
        name: "Average Servings Per Case",
        xmlName: "averageServingsPerCase",
        definition: "Suggested serving size divided into the overall pack size.",
        set: "Food and Beverage",
      },
      {
        name: "Award Prize Code",
        xmlName: "awardPrize/awardPrizeCode",
        definition:
          "Indicates the achievement of the product in relation to a prize or award,eg winner, runner-up, shortlisted.",
        set: "Media and Entertainment",
      },
      {
        name: "Award Prize Country Code",
        xmlName: "awardPrize/awardPrizeCountryCode",
        definition:
          "An ISO standard code identifying the country in which a prize or award is given ",
        set: "Media and Entertainment",
      },
      {
        name: "Award Prize Description",
        xmlName: "awardPrize/awardPrizeDescription",
        definition: "A text that describes the awards a film won. ",
        set: "Media and Entertainment",
      },
      {
        name: "Award Prize Jury",
        xmlName: "awardPrize/awardPrizeJury",
        definition:
          "Free text listing members of the jury that awarded the prize. ",
        set: "Media and Entertainment",
      },
      {
        name: "Award Prize Name",
        xmlName: "awardPrize/awardPrizeName",
        definition:
          "The name of a prize or award which the product has received. ",
        set: "Media and Entertainment",
      },
      {
        name: "Award Prize Year",
        xmlName: "awardPrize/awardPrizeYear",
        definition: "The year in which a prize or award was given.",
        set: "Media and Entertainment",
      },
    ],
    B: [
      {
        name: "Base Amount",
        xmlName: "applicableAllowanceCharge/baseAmount",
        definition:
          "The amount on which the calculation of the allowance or charge is based.",
        set: "Sales",
      },
      {
        name: "Base Number of Units",
        xmlName: "applicableAllowanceCharge/baseNumberOfUnits",
        definition: "Number of units on which the allowance or charge is based.",
        set: "Sales",
      },
      {
        name: "Base Unit Indicator",
        xmlName: "isBaseUnit",
        definition:
          'Is this the Lowest (or Base) Level within an Item Hierarchy?  If so, select "True."\n\nFor example in a Pallet, Case, Each hierarchy, the Each would be the Base Unit because it\'s the lowest level of the family group. ',
        set: "Indicators",
      },
      {
        name: "Base Units Per Pallet",
        xmlName: "baseUnitsPerPallet",
        definition: "The total number of base units contained on the pallet.",
        set: "Hierarchy Info",
      },
      {
        name: "Batch Number Indicator",
        xmlName: "hasBatchNumber",
        definition:
          "Indicator if the item has a batch or lot number.\n\nUsed by the seller to communicate to the buyer products that are controlled for recalls. Used by the buyer for inventory control processes.",
        set: "Packaging",
      },
      {
        name: "Beef Cut",
        xmlName: "beefCut",
        definition:
          "Valid Value to denote the name of the cut of Beef. This is based on UNECE standards.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Beer Style Code",
        xmlName: "beerStyleCode",
        definition:
          "A value to provide a style name for beer products, such as Brown Porter, Imperial Stout, Witbier.",
        set: "Liquor",
      },
      {
        name: "bFR Additional Identification Code",
        xmlName: "bFRAdditionalIdentificationCode",
        definition:
          "European product Id for detergents with regard to the EU regulation for detergents.",
        set: "Descriptions",
      },
      {
        name: "Bioengineered Declaration Claim Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/bioengineeredDeclarationClaimCode",
        definition:
          "Valid value for a product containing detectable genetically modified material for which the modification could not otherwise be obtained through conventional breeding or found in nature. This valid value may also be used for a product manufactured using ingredients derived through bioengineering which have undergone processes to remove modified genetic material such that it cannot be detected using common testing methods. Excludes incidental additives.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Bitterness Of Beer Measurement",
        xmlName: "bitternessOfBeerMeasurement",
        definition:
          "Indicates the descriptive term that is used by the product manufacturer to identify the bitterness of beer, expressed in IBU and/or EBU.",
        set: "Liquor",
      },
      {
        name: "Body Parts",
        xmlName: "bodyParts",
        definition: "The body part/s for which the item is intended.",
        set: "Descriptions",
      },
      {
        name: "Boiling Point",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/boilingPoint",
        definition:
          "The temperature of a liquid at which its vapour pressure is equal to or very slightly greater than the atmospheric pressure of the environment.  For water at sea level it is 100C  or 212F. ",
        set: "Components, Safety",
      },
      {
        name: "Bracket Identifier",
        xmlName: "applicableAllowanceCharge/bracketIdentifier",
        definition:
          "Identification of the conditions that apply to the allowance or charge.",
        set: "Sales",
      },
      {
        name: "Brand Distribution Trade Item Type",
        xmlName: "brandDistributionTradeItemType",
        definition:
          "Categorization of the trade item to help further delineate product type with distribution type and trade channel.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Brand Distribution Type",
        xmlName: "brandDistributionType",
        definition:
          "Any restrictions imposed on the Trade Item on how it can be sold to the consumer or recipient trading partner.",
        set: "Sales",
      },
      {
        name: "Brand Marketing Message",
        xmlName: "brandMarketingDescription/statement",
        definition:
          "The number of batteries required to operate the product.\n\nUsed by the buyer to inform consumer of the number of removable or reusable batteries to operate the product.",
        set: "Marketing",
      },
      {
        name: "Brand Name",
        xmlName: "componentInformation/descriptionInformation/brandName",
        definition: "The name of the brand as recognized by the consumer.",
        set: "Components, Global",
      },
      {
        name: "Brand Owner Additional Trade Item Identification Type",
        xmlName:
          "brandOwnerAdditionalTradeItemIdentification/brandOwnerAdditionalIdType",
        definition:
          "Code used to identify additional brand owner identification value.",
        set: "Global",
      },
      {
        name: "Brand Owner Additional Trade Item Identification Value",
        xmlName:
          "brandOwnerAdditionalTradeItemIdentification/brandOwnerAdditionalIdValue",
        definition:
          "Number used to identify the brand owner when not using GLN. May or may not be the same entity as the information provider.",
        set: "Global",
      },
      {
        name: "Brand Owner Address",
        xmlName: "brandOwnerAddress",
        definition:
          "The address of the organization that owns the specifications of the product regardless of where and by whom it is manufactured is normally responsible for the allocation of the Global Trade Item Number (GTIN).",
        set: "Global",
      },
      {
        name: "Brand Owner GLN",
        xmlName: "brandOwnerGLN",
        definition:
          "The Global Location Number (GLN) used to identify the organization that owns the brand (BO GLN).\n\nUsed by the seller to communicate the GLN of the brand owner to the buyer. It allows the buyer to identify the Brand Owner. Used by the buyer for internal validation and to support some B2B processes.",
        set: "Global",
      },
      {
        name: "Brand Owner Language Specific Party Name",
        xmlName: "brandOwnerLanguageSpecificPartyName",
        definition:
          "The recognizable party name used by a supplier to uniquely identify the name of the party in a different language than the primary party name (partyName).",
        set: "Identification",
      },
      {
        name: "Brand Owner Name",
        xmlName: "brandOwnerName",
        definition:
          "The name used to identify the organization that owns the brand.",
        set: "Global",
      },
      {
        name: "Broker Invoice Indicator",
        xmlName: "brokerInvoiceIndicator",
        definition:
          "Indication required when Brokers are populating one Vendor catalogue with products from several manufacturers and need to identify a different invoicing relationship than a manufacturer.",
        set: "Descriptions",
      },
      {
        name: "Brush Broom Type Code",
        xmlName:
          "productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/brushBroomTypeCode",
        definition:
          "A descriptive code differentiating cleaning cloths by fabric or intended use.",
        set: "Descriptions",
      },
      {
        name: "Built-In Product Type",
        xmlName: "builtInProductType",
        definition:
          "The type of product that the trade item is combined with for example a VCR in the case that a television is combined with a VCR.",
        set: "Marketing",
      },
      {
        name: "BuiltIn Product Type",
        xmlName: "componentInformation/marketingInformation/builtInProductType",
        definition: "The type of product that the trade item is combined with",
        set: "Components",
      },
    ],
    C: [
      {
        name: "Campaign End Date",
        xmlName:
          "componentInformation/marketingInformation/marketingCampaign/campaignEndDateTime",
        definition:
          "The date suggested by the supplier for the campaign to end. It indicates the end of a marketing campaign.",
        set: "Components, Marketing",
      },
      {
        name: "Campaign Name",
        xmlName:
          "componentInformation/marketingInformation/marketingCampaign/campaignName",
        definition:
          "Name of the sales or marketing campaign, for which the textile trade item is intended. Input of user-defined text in order to assign the item to a specific marketing campaign. Used to specify promotions, marketing.",
        set: "Components, Marketing",
      },
      {
        name: "Campaign Start Date",
        xmlName:
          "componentInformation/marketingInformation/marketingCampaign/campaignStartDateTime",
        definition:
          "The data suggested by the supplier for the campaign to start. It indicates the beginning of a marketing campaign.",
        set: "Components, Marketing",
      },
      {
        name: "Can File Stream?",
        xmlName: "dam/general/canFileStream",
        definition:
          "An indicator that the digital asset is compressed to start displaying/running before fully uncompressing.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Can Files Be Edited",
        xmlName: "dam/general/canFilesBeEdited",
        definition:
          "An indicator of whether the user or recipient of the digital asset can edit it prior to use or as a function of using the asset.  Some digital assets are designed such that the recipient can edit the asset to meet the needs of a final output.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Can Product be Easily Upgraded or Maintained by Consumer?",
        xmlName: "isTradeItemConsumerUpgradeableOrMaintainable",
        definition:
          "Indicates if the product can be easily upgraded or replaced by the consumer. For example, the ability to add additional memory/storage capacity.",
        set: "Disposal",
      },
      {
        name: "Can Trade Item Be Back Ordered?",
        xmlName: "canTradeItemBeBackOrdered",
        definition:
          "An indicator whether or not a customer’s order will be processed or will remain valid when it cannot be filled due to insufficient stock.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Canceled Date",
        xmlName: "cancelDate",
        definition:
          "Communicates cancellation of the launch of a trade item that was never and will never be manufactured, but may have been presented to buyers. Allows the reuse of the GTIN 12 months after cancellation.",
        set: "Dates",
      },
      {
        name: "Capacity",
        xmlName: "componentInformation/descriptionInformation/capacity",
        definition:
          "The available space inside the item or how much can the item hold. Capacity is often provided for items can contain multiple pieces of something or can accommodate some number of objects.",
        set: "Components",
      },
      {
        name: "Carcinogenic Mutagenic Reprotoxic Type Code",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/carcinogenicMutagenicReprotoxicTypeCode",
        definition:
          "The type of Carcinogenic, mutagenic, reprotoxic (CMR) substance which is contained in the medical device. Examples 1A, 1B",
        set: "Components, Regulatory",
      },
      {
        name: "Card Price Group ID",
        xmlName: "cardPriceGroupIdentifier",
        definition: "A code that identifies a price.",
        set: "Sales",
      },
      {
        name: "Case Description",
        xmlName:
          "componentInformation/marketingInformation/tradeItemCaseInformation/caseDescription",
        definition:
          "Describes the shape and characteristics of the case the trade item will be inside. For example watches come in unique cases. Examples include leather bound case, designer matching case, velvet lined box.",
        set: "Components, Marketing",
      },
      {
        name: "Casing Tare Weight",
        xmlName: "casingTareWeight",
        definition:
          'The weight measurement of the "food casing". A casing for food products is a flexible tubing into which foods are stuffed to provide a skin-tight covering. Used in packaging prepared meats, poultry, cheese, and other food products. "Tare Weight – food casing" applies to the "each" level. The aggregate of the tare weight can be used for calculating the higher packaging levels. For example a sausage has a net weight of 120 grams; the tare weight – food casing is 5 grams. When in a carton of 12 sausages - add together each sausage\'s tare weight – food casing for the accumulated total of all the sausages in the carton for total tare weight – food casing by carton 5 grams *12 sausages = 60 grams tare weight – food casing.',
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Catalogue Price",
        xmlName: "cataloguePrice/price",
        definition: "The catalog or list price to the recipient.  ",
        set: "Sales",
      },
      {
        name: "Catalogue Price Basis Per Unit",
        xmlName: "cataloguePrice/basisPerUnit",
        definition:
          "The price basis quantity is the associated quantity of trade item for which a price is given.",
        set: "Sales",
      },
      {
        name: "Catalogue Price Effective End Date",
        xmlName: "cataloguePrice/effectiveEndDate",
        definition:
          "The effective end date of the price is optional based upon the agreement by the trading partners. If an invalid end date is communicated, then it is implied that the price and its effective date are effective until further notice. Examples of invalid dates include 99/99/9999, 00/00/0000, blank, etc. These invalid end dates should not be communicated. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events, last order date, last ship date, and last arrival date.",
        set: "Sales",
      },
      {
        name: "Catalogue Price Effective Start Date",
        xmlName: "cataloguePrice/effectiveStartDate",
        definition:
          "This is the effective start date of the price agreed to by the trading partners. This start date is mandatory and, if no end date is communicated, then implies that the price is effective until further notice. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events, first order date, first ship date, and first arrival date.",
        set: "Sales",
      },
      {
        name: "Catalogue Price Sheet Name",
        xmlName: "cataloguePrice/sheetName",
        definition: "Help Not available via Extensible Definitions",
        set: "Sales",
      },
      {
        name: "Catch Area Code",
        xmlName: "fishReportingInformation/fishCatchInformation/catchAreaCode",
        definition:
          "Valid value for the fishing area in which the fish/seafood or the fish/seafood in the product was caught or farmed.\n\nUsed by the buyer to inform the consumer of the fishing area. Used by the buyer for applicable government reporting. Used by the buyer to make assortment planning decisions.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Catch Country Code",
        xmlName: "fishReportingInformation/fishCatchInformation/catchCountryCode",
        definition:
          "﻿The ISO 3166-1 numeric code for the country where the fish/seafood in the product was caught or farmed.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Catch Date Time",
        xmlName:
          "fishReportingInformation/fishCatchInformation/fishCatchDateInformation/catchDateTime",
        definition:
          "The date of the catch within the EDI and/or Information at the label distributed with the product for information of any single lot of fresh fish and seafood product. Format (YYYYMMDD) as a specification with time stamp is not required in the current EU Regulation. This required attribute will help the global retail industry to fulfill the EU requirements for a common fisheries policy. The data is required by the supply chain participant from source to end consumer.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "CDS Material Type",
        xmlName: "cDSMaterialType",
        definition:
          "This is used to describe the material of the items that are part of the container deposit scheme (CDS).",
        set: "Descriptions",
      },
      {
        name: "Certificate Identification",
        xmlName:
          "certificationInformation/certification/certificationIdentification",
        definition:
          "A reference issued to confirm that something has passed certification.",
        set: "Licensing and Certification",
      },
      {
        name: "Certificate Issuance Date Time",
        xmlName:
          "foodAndBevDietTypeInfo/certification/certificateIssuanceDateTime",
        definition:
          "The date and time that a certificate has been issued for a Trade Item.",
        set: "Food and Beverage",
      },
      {
        name: "Certificate Issuance DateTime",
        xmlName:
          "componentInformation/certificationInformation/certification/certificateIssuanceDateTime",
        definition:
          "The date and time that a certificate has been issued for a Trade Item.",
        set: "Components, Components",
      },
      {
        name: "Certification Agency",
        xmlName:
          "componentInformation/certificationInformation/certificationAgency",
        definition:
          "Name of the organization issuing the certification standard or other requirement being met. Free text field. Example: European Nation.",
        set: "Components, Food and Beverage, Licensing and Certification",
      },
      {
        name: "Certification Assessment Date Time",
        xmlName:
          "foodAndBevDietTypeInfo/certification/certificationAssessmentDateTime",
        definition:
          "The date and time that an assessment was performed on a Trade Item that led to a certification.",
        set: "Food and Beverage, Licensing and Certification",
      },
      {
        name: "Certification Assessment DateTime",
        xmlName:
          "componentInformation/certificationInformation/certification/certificationAssessmentDateTime",
        definition:
          "The date and time that an assessment was performed on a Trade Item that led to a certification.",
        set: "Components, Components",
      },
      {
        name: "Certification Effective End Date",
        xmlName:
          "certificationInformation/certification/certificationEffectiveEndDateTime",
        definition:
          "The date and time upon which the certification is no longer effective.",
        set: "Licensing and Certification",
      },
      {
        name: "Certification Effective End Date (DD-MON-YYYY)",
        xmlName:
          "componentInformation/certificationInformation/certification/certificationEffectiveEndDateTime",
        definition:
          "The date and time upon which the certification is no longer effective.",
        set: "Components, Components",
      },
      {
        name: "Certification Effective End Date Time",
        xmlName:
          "foodAndBevDietTypeInfo/certification/certificationEffectiveEndDateTime",
        definition:
          "The date and time upon which the certification is no longer effective.",
        set: "Food and Beverage",
      },
      {
        name: "Certification Effective Start Date",
        xmlName:
          "certificationInformation/certification/certificationEffectiveStartDateTime",
        definition:
          "The date and time upon which the certification is effective.",
        set: "Licensing and Certification",
      },
      {
        name: "Certification Effective Start Date (DD-MON-YYYY)",
        xmlName:
          "componentInformation/certificationInformation/certification/certificationEffectiveStartDateTime",
        definition: "The date and time upon which the certification is effective",
        set: "Components, Components",
      },
      {
        name: "Certification Effective Start Date Time",
        xmlName:
          "foodAndBevDietTypeInfo/certification/certificationEffectiveStartDateTime",
        definition:
          "The date and time upon which the certification is effective.",
        set: "Food and Beverage",
      },
      {
        name: "Certification Execution Country Code",
        xmlName:
          "componentInformation/certificationInformation/certification/certificationExecutionCountryCode",
        definition:
          "The country where the certification is performed.  Use ISO3166_1 Code",
        set: "Components, Components, Food and Beverage, Licensing and Certification",
      },
      {
        name: "Certification Identification",
        xmlName:
          "componentInformation/certificationInformation/certification/certificationIdentification",
        definition:
          "A reference issued to confirm that something has passed certification",
        set: "Components, Components, Food and Beverage",
      },
      {
        name: "Certification Issuance Date",
        xmlName:
          "certificationInformation/certification/certificateIssuanceDateTime",
        definition:
          "The date and time that a certificate has been issued for a Trade Item.",
        set: "Licensing and Certification",
      },
      {
        name: "Certification Organisation Identifier",
        xmlName:
          "componentInformation/certificationInformation/certificationOrganisationIdentifier",
        definition:
          "The identification of the organization that issued the certificate number confirming that the Trade Item has gone through certification.",
        set: "Components, Components, Food and Beverage, Licensing and Certification",
      },
      {
        name: "Certification Standard",
        xmlName:
          "componentInformation/certificationInformation/certificationStandard",
        definition:
          "The name of the certification standard or the type of certification, e.g. product, process, company, packaging or conformity.",
        set: "Components, Components, Food and Beverage, Licensing and Certification",
      },
      {
        name: "Certification Statement on Package",
        xmlName:
          "certificationInformation/certification/certificationStatementOnPackage",
        definition:
          "﻿The statement provided from the certification agency that must be displayed on the packaging according to the certification agreement.",
        set: "Licensing and Certification, Food and Beverage",
      },
      {
        name: "Certification Value",
        xmlName:
          "componentInformation/certificationInformation/certification/certificationValue",
        definition:
          "The unique identification (ID) that provides a trade item's certification standard value, official licensing number or identification which proves that a product/process has passed the certification procedure.",
        set: "Components, Components, Food and Beverage, Licensing and Certification",
      },
      {
        name: "Channel Of Distribution",
        xmlName: "channelOfDistribution",
        definition: "Indicates into which retail channel(s) the item is sold.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Cheese Colouring",
        xmlName: "cheeseColouring",
        definition:
          "Indication whether and if yes which colourings were added to the cheese or cheese products.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Maturation Container Process Type",
        xmlName: "cheeseMaturationProcessContainerTypeCode",
        definition:
          "The type of container that the process of maturation cheese occurs in. The container directly influences the flavour of the cheese. The term maturation is also know in other markets as Aged. Examples FOIL, MOULD, OTHER, etc. This should be repeatable as this could be a combination of types",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Maturation Period Description",
        xmlName: "cheeseMaturationPeriodDescription",
        definition:
          "A descriptive way to specify a date range as some cheeses are matured over a period of time, but not an exact period. For example 3 to 4 weeks, over 1 year etc. The term maturation is also know in other markets as Aged.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Milk Acquisition Type Code",
        xmlName: "cheeseMilkAcquisitionTypeCode",
        definition:
          "Allows you to indicate the type of legal mention on the packaging of the acquisition type of the milk for cheese . Example: Farm.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Moisture Percentage",
        xmlName: "cheeseMoisturePercentage",
        definition: "The amount of moisture content in cheese products.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Ripening Process Code",
        xmlName: "cheeseRipeningProcessCode",
        definition:
          "The code indicating the ripening process within the body of the cheese. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Salt Content Percentage",
        xmlName: "cheeseSaltContentPercentage",
        definition: "The percentage of salt contained in cheese.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Type Code",
        xmlName: "cheeseTypeCode",
        definition:
          "The code identifying a specific type of cheese. Please refer to local regulations. For example: Cheese defined under the EU regulation as Protected Designation of Origin (PDO) or Protected Geographical Indication (PGI). Some cheese are defined by conformity with the General Standard for Cheese (CXS 283-1978) and/or the Standard for Unripened Cheese Including Fresh Cheese (CXS 221-2001). ",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Cheese Type Of Salt",
        xmlName: "cheeseTypeOfSalt",
        definition: "Type of salt used in cheese",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Chemical Class",
        xmlName: "chemicalClass",
        definition:
          "Governmental-assigned hazardous material classification pertaining to the product.",
        set: "Partner Specific",
      },
      {
        name: "Chemical Identifier Agency Name",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Identifier Code",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierCode",
        definition:
          "An identifier for a regulated chemical for example a CAS number.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Identifier Description",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierCodeDescription",
        definition: "A text description of the regulated chemical or formula.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Ingredient Concentration",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentration",
        definition:
          "The percentage of a chemical ingredient in relation to the total composition of the product.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Concentration Basis",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationBasis",
        definition:
          "The basis amount used to express the chemical ingredient concentration.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Concentration Lower Value",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationLowerValue",
        definition:
          "The lower value of a range of a chemical ingredient concentration.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Concentration Measurement Precision",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationMeasurementPrecision",
        definition:
          "The measurement precision used to determine the concentration of a chemical ingredient for example EXACT.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Concentration Upper Value",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationUpperValue",
        definition:
          "The upper value of a range of a chemical ingredient concentration.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Identification",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientIdentification",
        definition:
          "A unique number to identify a chemical used to cross reference regulated lists of chemicals for example CAS number.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Name",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientName",
        definition: "The common name of the chemical ingredient.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Organization",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredientOrganisation",
        definition:
          "An organization managing a chemical ingredient identification scheme.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Ingredient Scheme",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredientScheme",
        definition:
          "A managed list of chemical ingredient identifications for example CAS.",
        set: "Components, Safety",
      },
      {
        name: "Chemical Physical State Code",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalPhysicalStateCode",
        definition: "The state of matter of the trade item, for example LIQUID.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Property Additional Description",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyAdditionalDescription",
        definition:
          "A description of any conditions regarding a toxicity property for example a route of exposure and a target organ (e.g. inhalation and lungs). ",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Property Code",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyCode",
        definition:
          "A characteristic of a chemical substance expressed as a code. ",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Property Name",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyName",
        definition:
          "A characteristic of a chemical substance expressed as a name for example radionuclide.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Property Type Code",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalPropertyTypeCode",
        definition:
          "The type of chemical property being described expressed as a code such as TOXICITY.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Registration Information Restriction Description",
        xmlName: "chemicalRegistrationInformation/restrictionDescription",
        definition:
          "Free form description of any restrictions placed on the file.",
        set: "Regulatory",
      },
      {
        name: "Chemical Regulation Agency",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulationAgency",
        definition:
          "An agency that regulates chemicals for example the US Environmental Protection Agency.",
        set: "Components, Regulatory",
      },
      {
        name: "Chemical Regulation Name",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/chemicalRegulationName",
        definition:
          "The name of a regulation managed by a regulatory agency to designed to restrict the handling, use, disposal of chemical ingredients for example Right to Know or CERCLA.",
        set: "Components, Regulatory",
      },
      {
        name: "Chicken Cut",
        xmlName: "chickenCut",
        definition:
          "Valid Value to denote the name of the cut of Chicken. This is based on UNECE standards.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Child Item ",
        xmlName: "link/childItem/gtin",
        definition:
          "Unique product identification number (GTIN) for a child item with a higher-level trade item (parent) in a product hierarchy. This item may repeat in the case of a combination pack (multiple GTINs in lower level).",
        set: "Link",
      },
      {
        name: "Child Nutrition Expiration DateTime",
        xmlName: "childNutritionLabel/childNutritionExpirationDateTime",
        definition:
          "The date upon which the child nutrition statement or label expires.",
        set: "Nutritional",
      },
      {
        name: "Child Nutrition Label Statement",
        xmlName: "childNutritionLabel/childNutritionLabelStatement",
        definition:
          "The text of the Child Nutrition Label as specified by the child nutrition product identification agency.",
        set: "Nutritional",
      },
      {
        name: "Child Nutrition Product Identification",
        xmlName: "childNutritionLabel/childNutritionProductIdentification",
        definition:
          "A child nutrition identification number of the child nutrition statement or label as provided by or through the authority of the child nutrition product identification agency.",
        set: "Nutritional",
      },
      {
        name: "Child Nutrition Qualified Value",
        xmlName:
          "childNutritionLabel/childNutritionQualifier/childNutritionQualifiedValue",
        definition:
          "Reference or qualified value for the child nutrition value as specified in the child nutrition statement or label. For example, if a 4.5 ounce serving provides 1/8 cup red-orange vegetable, the childNutritionQualifiedValue is 4.5 ounces.",
        set: "Nutritional",
      },
      {
        name: "Child Nutrition Qualifier Code",
        xmlName:
          "childNutritionLabel/childNutritionQualifier/childNutritionQualifierCode",
        definition:
          "A qualifier to specify the type of equivalent measurement that is applicable to the item as specified in the child nutrition statement or label. Example: FRUIT_VEGETABLE_OR_FRUIT_VEGETABLE_ALTERNATIVE.",
        set: "Nutritional",
      },
      {
        name: "Child Nutrition Value",
        xmlName:
          "childNutritionLabel/childNutritionQualifier/childNutritionValue",
        definition:
          "Actual value for the child nutrition qualifier as specified in the child nutrition statement or label. For example, if a 4.5 ounce serving provides 1/8 cup red-orange vegetable, the childNutritionValue is 1/8 cup.",
        set: "Nutritional",
      },
      {
        name: "City",
        xmlName: "brandOwnerStructuredAddress/city",
        definition: "Text specifying the name of the city.",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Claim Description",
        xmlName: "componentInformation/productInformationDetail/claimDescription",
        definition:
          "Free text field for any additional type of product claims like nutritional, health claims,etc.",
        set: "Components, Descriptions",
      },
      {
        name: "Claim Element Code",
        xmlName:
          "componentInformation/productInformationDetail/claimDetail/claimElementCode",
        definition:
          "The type of nutrient, ingredient, vitamins and minerals that the health claim is in reference to for example fat, copper, milk, paraben, BHA.",
        set: "Components, Descriptions",
      },
      {
        name: "Claim Marked on Package",
        xmlName:
          "componentInformation/productInformationDetail/claimDetail/claimMarkedOnPackage",
        definition:
          "Is the claim specified by Nutritional Claim Type Code in combination with Nutritional Claim Nutrient Element Code labelled on the product package. ",
        set: "Components, Descriptions",
      },
      {
        name: "Claim Type Code",
        xmlName:
          "componentInformation/productInformationDetail/claimDetail/claimTypeCode",
        definition:
          "A code depicting the degree to which a trade item contains a specific nutrient or ingredient in relation to a health claim for example FREE_FROM.",
        set: "Components, Descriptions",
      },
      {
        name: "Clamp Pressure",
        xmlName: "clampPressure",
        definition:
          "The pressure that should be applied by a clamp to the packaging around the product. The clamp pressure is the only pressure value to be applied and there are no minimum or maximum values.",
        set: "Handling and Storage",
      },
      {
        name: "Classification Category - Product Group",
        xmlName: "mcdClassification",
        definition:
          "McDonald's defined product classification. Used in conjunction with Product Classification.",
        set: "Partner Specific",
      },
      {
        name: "Cleaning Cloth Type Code",
        xmlName:
          "productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/cleaningClothTypeCode",
        definition:
          "Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the state in which the product is sold.",
        set: "Descriptions",
      },
      {
        name: "Closed Captioning Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/closedCaptioningCode",
        definition:
          "A code that indicates if the film has closed captions, no closed captions or if this information is unknown.",
        set: "Media and Entertainment",
      },
      {
        name: "code",
        xmlName:
          "componentInformation/marketingInformation/tradeItemFeatureCodeReference/code",
        definition: "The code for the feature.",
        set: "Components",
      },
      {
        name: "Code",
        xmlName: "alternateClassification/code",
        definition:
          "A value, other than the Global Product Category Code (GPC or Brick Code), which classifies the product, based on the Scheme.\n\nUsed for product classification that allows a buyer to classify a product by other classification systems. Used for multiple use cases such as data quality, category management, space management, workflow routing. \n\nUsed in conjunction with Scheme.",
        set: "Identification",
      },
      {
        name: "Code Description",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeDescription",
        definition: "The description for the codelist.",
        set: "Components, Components, Ingredients, Packaging, Packaging, Packaging, Packaging",
      },
      {
        name: "Code List Agency Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Components, Components, Ingredients, Packaging, Packaging, Packaging, Packaging",
      },
      {
        name: "Code List Agency Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Components, Components, Ingredients, Packaging, Packaging, Packaging, Packaging",
      },
      {
        name: "Code List Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListName",
        definition: "The name of the codelist.",
        set: "Components, Components, Ingredients, Packaging, Packaging, Packaging, Packaging",
      },
      {
        name: "Code List URI",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListURI",
        definition: "The URI for the codelist.",
        set: "Components, Components, Ingredients, Ingredients, Packaging, Packaging, Packaging, Packaging",
      },
      {
        name: "Collection",
        xmlName: "collection",
        definition:
          "Enter the  name of collection that an item belongs to.  Example: Rivington",
        set: "Descriptions",
      },
      {
        name: "Collection Name",
        xmlName: "audioVisualMediaProductCollectionName",
        definition:
          "The name of a series of music publications grouped under a common theme. The name of the collection is printed on the package of the trade item.",
        set: "Media and Entertainment",
      },
      {
        name: "Color Category",
        xmlName: "colorCategory",
        definition: "Indicates the color of the trade item in this field.",
        set: "Descriptions",
      },
      {
        name: "Color Code",
        xmlName: "componentInformation/descriptionInformation/colour/colourCode",
        definition:
          "The code list required to identify the color of the trade item. No ISO standards exist. Each industry needs to determine which code is will use.",
        set: "Components, Descriptions",
      },
      {
        name: "Color Code Maintenance Agency",
        xmlName:
          "componentInformation/descriptionInformation/colour/colourCodeListCode",
        definition:
          "The parties controlling the color code lists. Dependent on color code value.",
        set: "Components, Descriptions",
      },
      {
        name: "Colour Family Code",
        xmlName:
          "componentInformation/descriptionInformation/colour/colourFamilyCode",
        definition: "Indicates the family code of the product colour.",
        set: "Components, Descriptions",
      },
      {
        name: "Colour Tint Code",
        xmlName:
          "componentInformation/descriptionInformation/colour/colourTintCode",
        definition: "Indicates the tint or shade code of the product colour.",
        set: "Components, Descriptions",
      },
      {
        name: "Column",
        xmlName: "dam/spinInformation/column",
        definition:
          "Number to denote the column of a 360/Spin image in the specified row in which this image link belongs. A column is an arc point in the 360 degrees of spin on the image set. If the image set has a unique image taken at every 15 degrees of arc, then there are 24 columns in the image set. The column number should be a sequential number beginning with 1 and advance for each image in the image set in a clockwise direction. Anchor images should always have an column number of 1.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Commercial Type",
        xmlName: "commercialType",
        definition:
          "Free text field used to identify the variant of the product. ",
        set: "Descriptions",
      },
      {
        name: "Communication Channel Code",
        xmlName:
          "globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/communicationChannelCode",
        definition:
          "Code specifying the type of communication channel, for example TELEPHONE.",
        set: "Identification",
      },
      {
        name: "Communication Channel Name",
        xmlName:
          "globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/communicationChannelName",
        definition:
          "The name of a specific communication channel for example Facebook, Twitter, etc.",
        set: "Identification, Identification",
      },
      {
        name: "Communication Value",
        xmlName:
          "globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/communicationValue",
        definition:
          "Text identifying the endpoint for the communication channel, for example a telephone number or an e-mail address.",
        set: "Identification",
      },
      {
        name: "Comparable Branded Products",
        xmlName: "comparableBrandedProducts",
        definition:
          "Description of similar national branded items used for private label items.",
        set: "Descriptions",
      },
      {
        name: "Compatible Brands",
        xmlName: "compatibleBrands",
        definition:
          "A list of the brands of item which are most commonly compatible with the item.",
        set: "Marketing",
      },
      {
        name: "Complement Address",
        xmlName: "brandOwnerStructuredAddress/complementAddress",
        definition:
          "The complement address expressed as a free form text. The complement address is printed on paper as additional lines below the street address. For example, an industrial zone or apartment number. Required in case the PD Organisation link is provided (Product Designer Link relates to an Organisation).",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Component Description",
        xmlName: "componentInformation/componentDescription",
        definition: "A description of the component.",
        set: "Components",
      },
      {
        name: "Component Identification",
        xmlName:
          "componentInformation/componentIdentification/componentIdentification",
        definition: "Unique Identifier for the component",
        set: "Components",
      },
      {
        name: "Component Multiple Packed Quantity",
        xmlName: "componentInformation/componentMultiplePackedQuantity",
        definition:
          "The quantity of containers when this component of the trade item is packed in multiple containers. If all quantity of this component is packed together into one item this attribute is not used. Example: 3 boxes = 1st box has 2 tables in it, 2 more boxes contain 2 chairs each for a total of 4. For the table component this value is 1 representing 1 box, for the chair the component value is 2 representing the 2 boxes.",
        set: "Components",
      },
      {
        name: "Component Number",
        xmlName: "componentInformation/componentNumber",
        definition: "Indicate a sequence number of a component of a trade item.",
        set: "Components",
      },
      {
        name: "Component Quantity",
        xmlName: "componentInformation/componentQuantity",
        definition:
          "An attribute used to describe the quantity of components described in either the componentIdentification or componentDescription.",
        set: "Components",
      },
      {
        name: "Composite Packaging Material Recycling Scheme Code",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/compositePackagingMaterialRecyclingSchemeCode",
        definition:
          "The code that specifies the recycling scheme the packaging of this trade item will fall within when recycled. Applies to recyclable packaging with or without deposit.• 1 - Polyethylene Terephthalates\n• 20 - Cardboard\n• 22 - Paper\n• 41 - AluminiumUsed by the seller and the buyer to conform to regulations concerning recycling of packaging materials. Used in conjunction with Packaging Material Element Code to describe what part of the packaging relates to this recycling scheme.",
        set: "Packaging",
      },
      {
        name: "Composite Wood Certification Code",
        xmlName: "compositeWoodCertificationCode",
        definition:
          "Indicates if any portion of the item contains any of the following types of composite wood: hardwood plywood veneer core, hardwood plywood composite core, particleboard, or medium density fiber board (MDF). Enter the code corresponding to the highest formaldehyde emission level on any portion of the item. Code Definitions: 1 - Does not contain composite wood; 7 - Product is not CARB compliant and cannot be sold in California; 8 - Product is CARB compliant and can be sold in California.",
        set: "Descriptions",
      },
      {
        name: "Composition Depth",
        xmlName: "tradeItemCompositionDepth",
        definition:
          "The number of child-items that are packaged from front to back in a trade unit. This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf.",
        set: "Global",
      },
      {
        name: "Composition Width",
        xmlName: "tradeItemCompositionWidth",
        definition:
          "The number of child-items that are packaged beside each other in a trade unit (on the side facing the consumer). This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf. The Space Manager always allocates Base Units in the shelf. Usually there are no pictures of Trade Units available and for Hypermarkets/Big Supermarkets there is a need to allocate whole trade units into the shelves.",
        set: "Global",
      },
      {
        name: "Compound Ingredient #1",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient1",
        definition: "Ingredient#1 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #10",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient10",
        definition: "Ingredient#10 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #11",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient11",
        definition: "Ingredient#11 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #12",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient12",
        definition: "Ingredient#12 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #13",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient13",
        definition: "Ingredient#13 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #14",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient14",
        definition: "Ingredient#14 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #15",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient15",
        definition: "Ingredient#15 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #2",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient2",
        definition: "Ingredient#2 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #3",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient3",
        definition: "Ingredient#3 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #4",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient4",
        definition: "Ingredient#4 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #5",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient5",
        definition: "Ingredient#5 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #6",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient6",
        definition: "Ingredient#6 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #7",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient7",
        definition: "Ingredient#7 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #8",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient8",
        definition: "Ingredient#8 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Compound Ingredient #9",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saCompoundIngredient9",
        definition: "Ingredient#9 of the compound ingredient.",
        set: "Ingredients",
      },
      {
        name: "Condition Type Code",
        xmlName: "tradeItemConditionTypeCode",
        definition:
          "The code depicting the type of preparation that a trade item may require before being sold to the consumer (e.g. cut for sale, portioned/pieced). This preparation should be done by the buyer.",
        set: "Sales",
      },
      {
        name: "Conditions to Avoid Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/conditionsToAvoid",
        definition:
          "Conditions, environments, or other chemicals that when mixed with a product can cause an adverse reaction. For example exposing acids to bases.",
        set: "Components, Safety",
      },
      {
        name: "Consumer Age Group",
        xmlName: "wmConsumerAgeGroup",
        definition:
          "General grouping of ages into commonly used demographic labels.",
        set: "Marketing",
      },
      {
        name: "Consumer End Availability Date",
        xmlName: "consumerEndAvailabilityDateTime",
        definition: "Last date, on which the item may be sold to consumers.",
        set: "Dates",
      },
      {
        name: "Consumer Friendly Date On Packaging Description",
        xmlName: "packagingDate/consumerFriendlyDateOnPackagingDescription",
        definition:
          "The exact textual type of date on the packaging. Examples: Used By, Freeze By, Exp Date, Best Before, etc.",
        set: "Packaging",
      },
      {
        name: "Consumer Notice",
        xmlName: "consumerNotice",
        definition:
          "Indicates whether or not a product is subject to Proposition 65 rules and regulations",
        set: "Packaging",
      },
      {
        name: "Consumer Product Variant End Effective Date Time",
        xmlName: "consumerProductVariantEndEffectiveDateTime",
        definition:
          "The end effective date and time for Consumer Product Variants which the supplier determines.",
        set: "Dates",
      },
      {
        name: "Consumer Product Variant Reason Code",
        xmlName: "consumerProductVariantReasonCode",
        definition:
          "A code describing the impacted change (packaging change, graphics change, minor formulation, etc) for a Consumer Product Variant.",
        set: "Descriptions",
      },
      {
        name: "Consumer Product VariantIdentification",
        xmlName: "consumerProductVariantIdentification",
        definition:
          "The identification for a particular Consumer Product Variant. This identification is based upon guidelines and assignment to the General Specifications.",
        set: "Descriptions",
      },
      {
        name: "Consumer Restricted Delivery Date/Time",
        xmlName: "consumerFirstDeliveryDate",
        definition:
          "The date/time when the consumer can first take physical possession of the product when there is a restriction imposed by the seller.\n\nUsed by the seller to communicate to the buyer the date/time when the consumer can physically take possession of the product. Online: the buyer ships the product to the consumer and the consumer would expect to receive the product on this date or after. Physical: the date the consumer could visit a physical site and take possession of the product.",
        set: "Dates",
      },
      {
        name: "Consumer Sales Condition",
        xmlName: "consumerSalesCondition",
        definition:
          "A code depicting restrictions imposed on the Trade Item regarding how it can be sold to the consumer for example ",
        set: "Sales",
      },
      {
        name: "Consumer Sales Condition Maximum Amount",
        xmlName:
          "targetMarketSalesConditions/consumerSalesConditionMaximumAmount",
        definition:
          "The maximum amount of the trade item that can be sold to the consumer at POS (Point Of Sale). This amount may be regulated by law in some markets.",
        set: "Sales",
      },
      {
        name: "Consumer Sell Date/Time",
        xmlName: "consumerAvailabilityDateTime",
        definition:
          "The date/time when the product can first be sold to or ordered by the consumer.\n\nUsed by the seller to communicate to the buyer when a product can first be sold to or ordered by the consumer. If there is not a Consumer Restricted Delivery Date/Time, this is also the date when the consumer can take physical possession of the product.",
        set: "Dates",
      },
      {
        name: "Consumer Support Number",
        xmlName: "consumerSupportNumber",
        definition:
          "The toll free support phone number(s) for the product/category.",
        set: "Identification",
      },
      {
        name: "Consumer Unit Indicator",
        xmlName: "isConsumerUnit",
        definition:
          'Is this Product/Packaging Level most typically intended for ultimate consumption?  If so, select "True."\n\nFor example, in retail, Consumer Unit indicated that the Product is approved to be  scanned at a register or added to a virtual cart to be ultimately purchased. ',
        set: "Indicators",
      },
      {
        name: "Consumer Warning Description",
        xmlName: "consumerWarningInformation/consumerWarningDescription",
        definition:
          "A description associated with a specific warning type for example if the consumerWarningTypeCode is AGE, the consumerWarningDescription would be “For ages 15 and over”.",
        set: "Packaging",
      },
      {
        name: "Consumer Warning Type Code",
        xmlName: "consumerWarningInformation/consumerWarningTypeCode",
        definition:
          "Indicate if the warning information given in the consumer warning description concerns a specific distinctive feature/ability of the user as age (e.g. Minimum Age 3 years) or weight (e.g. Maximum Weight 20 Kilogram).",
        set: "Packaging",
      },
      {
        name: "Contact",
        xmlName: "tradeItemContactInfo/contactName",
        definition:
          "The contact, such as a person, company or department.\n\nUsed by the seller to communicate to the buyer the name of the contact for business processes or for consumer information, relative to the Contact Type Code.",
        set: "Identification",
      },
      {
        name: "Contact Address",
        xmlName: "tradeItemContactInfo/contactAddress",
        definition:
          "The contact's postal or physical address.\n\nUsed by the seller to communicate to the buyer the contact's postal/physical address for business processes or consumer information. Postal/physical address is not an option in the Contact Method Code.",
        set: "Identification",
      },
      {
        name: "Contact Description",
        xmlName: "tradeItemContactInfo/contactDescription",
        definition:
          "A description of the contact for the trade item. Allows for the representation of the same value in different languages.",
        set: "Identification",
      },
      {
        name: "Contact Details",
        xmlName:
          "tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannel/communicationChannelNumber",
        definition:
          "The detailed information used to communicate with the contact, such as the telephone number, email address or web site address.\n\nUsed by the seller to communicate to the buyer the value associated with the Contact Method Code that can be used to communicate with the contact.",
        set: "Identification",
      },
      {
        name: "Contact Information GLN (Global Location Number)",
        xmlName: "tradeItemContactInfo/contactInfoGLN",
        definition:
          "The Global Location Number (GLN) that uniquely identifies the party's contact information.\n\nUsed by the seller to communicate the GLN of the party associated with the contact information to the buyer. It allows the buyer to identify the party associated with the contact information.\nUsed by the buyer for internal validation and to support some B2B processes.",
        set: "Identification",
      },
      {
        name: "Contact Method Code",
        xmlName:
          "tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannel/communicationChannelCode",
        definition:
          "Valid value for the method of communication to reach the contact.\n\nUsed by the seller to communicate to the buyer the contact method for business processes or for consumer information, relative to the Contact Type Code.",
        set: "Identification",
      },
      {
        name: "Contact Party Type",
        xmlName: "contactPartyType",
        definition:
          "The role of the individual or department that can be contacted to provide additional information.",
        set: "Marketing",
      },
      {
        name: "Contact Type Code",
        xmlName:
          "globalModelInformation/globalModelContactInformation/contactTypeCode",
        definition:
          "A code determining the role of the contact for example Dangerous Goods 24 Hour Contact.",
        set: "Identification, Identification",
      },
      {
        name: "Contained Alternative Protein Percent",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableAlternativeProtein/containedAlternativeProteinPercent",
        definition:
          "The percent of alternative protein as provided in the item. In\nthe US this is noted on the Alternate Protein Product (APP)\ndocumentation.",
        set: "Ingredients",
      },
      {
        name: "Container Material Code",
        xmlName: "alcoholBeverageContainer/containerMaterialCode",
        definition:
          "The material of the container used in a specific process for an alcohol product. Example: American White Oak (Quercus Alba), Stainless Steel.",
        set: "Liquor",
      },
      {
        name: "Container Process Type Code",
        xmlName: "alcoholBeverageContainer/containerProcessTypeCode",
        definition:
          "The process which is undertaken in a specific container for an alcohol product. Example: Maturation-Primary, Maturation-Secondary, Finishing.",
        set: "Liquor",
      },
      {
        name: "Container Shape Code",
        xmlName: "alcoholBeverageContainer/containerShapeCode",
        definition:
          "The shape of the container used in a specific process for an alcohol product. Example: Firkin, Hogshead.",
        set: "Liquor",
      },
      {
        name: "Container Type Code",
        xmlName: "alcoholBeverageContainer/containerTypeCode",
        definition:
          "The container in which the alcohol product has undergone a specific process. Example: Sherry, Rum.",
        set: "Liquor",
      },
      {
        name: "Contains Pesticide",
        xmlName: "doesTradeItemContainPesticide",
        definition:
          "Indicates if the product is advertised or labelled as a chemical or biological agent (such as a virus, bacterium, or fungus) that kills, controls or repels certain pests.\n\nUsed to communicate the product contains a pesticide to the buyer for the purposes of handling, storage, waste disposal, and safety concerns.",
        set: "Sustainability",
      },
      {
        name: "Contains Thickener",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saContainsThickener",
        definition: "Does the ingredient contain a thickener?",
        set: "Ingredients",
      },
      {
        name: "Content Description",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/contentDescription",
        definition: "Free form description of the content of the file.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Content Percentage",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/contentPercentage",
        definition:
          "Indication of the percentage of the ingredient contained in the product.",
        set: "Components, Ingredients",
      },
      {
        name: "Contents Description",
        xmlName: "contentsDescription",
        definition:
          "Describes the contents of the the components of the trade item when an item is shipped in multiple containers.",
        set: "Components",
      },
      {
        name: "Context Identification",
        xmlName: "componentInformation/contextIdentification",
        definition:
          "The unique identifier established for the context managed by GS1.",
        set: "Components, Components",
      },
      {
        name: "Convenience Level",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/convenienceLevel",
        definition:
          "An indication of the ease of preparation for semi-prepared products. The convenience level indicates the level of preparation in percentage required to prepare and helps the consumer to assess how long it will take to prepare the meal.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Count of This Specific Item in a Non-GTIN Logistic Unit/NonGTIN Pallet Quantity",
        xmlName: "numberOfItemsPerPallet",
        definition:
          'For a logistic unit (specifically a pallet) not identified with a GTIN, the count of trade items contained in the pallet. Number of Items/Pallet may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.',
        set: "Hierarchy Info",
      },
      {
        name: "Country Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countryCode",
        definition: "Code specifying a country.",
        set: "Components, Components, Identification, Identification, Identification, Identification, Identification, Identification, Licensing and Certification, Sales, Sales",
      },
      {
        name: "Country of Last Provenance/Processing",
        xmlName: "productActivityDetails/countryOfActivity/countryCode",
        definition:
          "The code that identifies the country in which the trade item was last processed and tested before importation.",
        set: "Processing",
      },
      {
        name: "Country of Origin Code",
        xmlName: "countryOfOrigin/countryCode",
        definition:
          "Valid value used to declare where the product is produced for regulatory / custom's requirements. In the case of multiple countries, the country in which the last substantial process or operation, that is economically justified, was performed.\n\nUsed to meet regulatory / custom's requirements for specifying the country of origin.",
        set: "Processing",
      },
      {
        name: "Country of Origin Declaration",
        xmlName: "countryOfOriginStatement",
        definition:
          "The statement about the country of origin, as declared on the product label, which can be any country where the product is indicated to have come from (it may or may not be the same as Country of Origin Code).\n\nUsed to inform the consumer of the specific country of origin as declared on the product.",
        set: "Processing",
      },
      {
        name: "Country Of Origin Statement",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOriginStatement",
        definition:
          "A description of the geographic area the item may have originated from or has been processed.",
        set: "Components",
      },
      {
        name: "Country Of Origin Subdivision Code",
        xmlName: "countryOfOrigin/countrySubdivisionCode",
        definition:
          'The Country Of Origin Subdivision Code is the secondary code of the Country Of Origin and must be a subdivision of a Country Of Origin Country Code. The Country Of Origin Subdivision Code describes the "geopolitical subdivision of a country" where the trade item is produced for sale, as determined by the information provider. For example, "State" in the US, "Land" in Germany, "Region" in France, or "Province" in Canada. Not all countries have subdivisions.',
        set: "Processing",
      },
      {
        name: "Country Of Settlement",
        xmlName: "countryOfSettlement",
        definition:
          "Country where the invoice is getting paid. Used only if Invoice Unit Indicator = true. Choose 3-character code from Target Market list.",
        set: "Sales",
      },
      {
        name: "Country Subdivision Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countrySubdivisionCode",
        definition: "Code specifying a country subdivision",
        set: "Components, Components, Identification, Ingredients, Ingredients, Processing, Sales, Sales",
      },
      {
        name: "Coupon Family Code",
        xmlName: "componentInformation/marketingInformation/couponFamilyCode",
        definition:
          "A code assigned by the vendor to a single trade item or to families of consumer trade items that can be used by in store scanners in conjunction with a U.P.C coupon value code for coupon value discount when the proper trade item has been purchased.",
        set: "Components, Marketing",
      },
      {
        name: "Creditable Alternative Protein Per Portion",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableAlternativeProtein/creditableAlternativeProteinPerPortion",
        definition:
          "The portion of alternative protein as provided in the item. In the US this is noted on the Alternate Protein Product (APP) documentation and is measured in ounces.",
        set: "Ingredients",
      },
      {
        name: "Creditable Amount",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableAmount",
        definition:
          "The creditable amount of the provided creditable ingredient\nas listed in the Creditable Ingredient Description and\ncalculated as specified in the requirements, rules and\nregulations set forth by the applicable Product Formulation\nStatement Regulatory Body.",
        set: "Ingredients",
      },
      {
        name: "Creditable Grain Amount Per Portion",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrainAmountPerPortion",
        definition:
          "The gram per portion value of the creditable grains contained in the trade item as specified on the Product Formulation Statement and defined by the requirements, rules and regulations set forth by the applicable product formulation statement regulatory body.",
        set: "Ingredients",
      },
      {
        name: "Creditable Grain Group Code",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrain/creditableGrainGroupCode",
        definition:
          "The code assigned by the Product Formulation Statement Regulatory Body indicating to which exhibit group the trade item belongs. This code specifics set the formulas and calculations used to determine the grain equivalents for the trade item.",
        set: "Ingredients",
      },
      {
        name: "Creditable Grain Standard",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrainStandard",
        definition:
          "The standard gram value applicable to the creditable grain gram group code.",
        set: "Ingredients",
      },
      {
        name: "Creditable Ingredient Amount Per Raw Portion",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableIngredientAmountPerRawPortion",
        definition:
          "The ounces per portion value of the raw creditable fruit or\nvegetable ingredient contained in the trade item as specified\non the Product Formulation Statement and defined by the\nrequirements, rules and regulations set forth by the\napplicable Product Formulation Statement Regulatory Body.",
        set: "Ingredients",
      },
      {
        name: "Creditable Ingredient Description",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableIngredientDescription",
        definition:
          "A description of the trade item's creditable ingredient\napplicable to the creditable ingredient type and as noted on\nthe Product Formulation Statement. In the US, this\ndescription should be from the Food Buying Guide or an\nAlternate Protein Product letter (APP) or a Child Nutrition\nSource Label.",
        set: "Ingredients",
      },
      {
        name: "Creditable Ingredient Type Code",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientTypeCode",
        definition:
          "A qualifier to specify a type of creditable ingredient\napplicable to the trade item as noted on the Product\nFormulation Statement and specified by the requirements,\nrules and regulations set forth by the applicable Product\nFormulation Statement Regulatory Body.",
        set: "Ingredients",
      },
      {
        name: "Crush Depth",
        xmlName: "tradeItemMeasurementsModule_CrushDepth",
        definition:
          "Crush depth measurement is the difference between the normal measurement as described by GDSN Measurement Rules and the measurement you get, when pressing or folding the product packing, without extending width or depth. Example: a bag of coffee is normally measured as 250 mm, but when crush is measured as described, it is 200 mm. Then the Crush is 50 mm (250 – 200 = 50).",
        set: "Dimensions",
      },
      {
        name: "Crush Height",
        xmlName: "tradeItemMeasurementsModule_CrushHeight",
        definition:
          "Crush height measurement is the difference between the normal measurement as described by GDSN Measurement Rules and the measurement you get, when pressing or folding the product packing, without extending width or depth. Example: a bag of coffee is normally measured as 250 mm, but when crush is measured as described, it is 200 mm. Then the Crush is 50 mm (250 – 200 = 50).",
        set: "Dimensions",
      },
      {
        name: "Crush Width",
        xmlName: "tradeItemMeasurementsModule_CrushWidth",
        definition:
          "Crush width measurement is the difference between the normal measurement as described by GDSN Measurement Rules and the measurement you get, when pressing or folding the product packing, without extending width or depth. Example: a bag of coffee is normally measured as 250 mm, but when crush is measured as described, it is 200 mm. Then the Crush is 50 mm (250 – 200 = 50).",
        set: "Dimensions",
      },
      {
        name: "Cumulative Humidity Interruption Acceptable Time Span",
        xmlName:
          "tradeItemHumidityInformation/cumulativeHumidityInterruptionAcceptableTimeSpan",
        definition:
          "An expression of the maximum allowed cumulative time span of one or more humidity interruptions of a trade item as defined by the manufacturer.",
        set: "Handling and Storage",
      },
      {
        name: "Cumulative Humidity Interruption Acceptable Time Span Instructions",
        xmlName:
          "tradeItemHumidityInformation/cumulativeHumidityInterruptionAcceptableTimeSpanInstructions",
        definition:
          "Instructions provided by the product manufacturer regarding the process, procedures, or handling instructions for trade items that has exceeded the cumulative time span of humidity interruptions.",
        set: "Handling and Storage",
      },
      {
        name: "Cumulative Temperature Interruption Acceptable Time Span",
        xmlName:
          "tradeItemTemperatureInformation/cumulativeTemperatureInterruptionAcceptableTimeSpan",
        definition:
          "An expression of the maximum allowed cumulative time span of one or more temperature interruptions of a trade item as defined by the manufacturer.",
        set: "Handling and Storage",
      },
      {
        name: "Cumulative Temperature Interruption Acceptable Time Span Instructions",
        xmlName:
          "tradeItemTemperatureInformation/cumulativeTemperatureInterruptionAcceptableTimeSpanInstructions",
        definition:
          "Instructions provided by the product manufacturer regarding the process, procedures, or handling instructions for trade items that has exceeded the cumulative time span of temperature interruptions.",
        set: "Handling and Storage",
      },
      {
        name: "Customs Classification Type Code",
        xmlName: "importClassification/importClassificationTypeCode",
        definition:
          "Valid value for the customs classification system.\n\nUsed to communicate the classification system used by customs to apply tariffs to the product.",
        set: "Processing",
      },
      {
        name: "Customs Classification Value",
        xmlName: "importClassification/importClassificationValue",
        definition:
          "The tariff value applied to a product associated with the Customs Classification Type Code.\n\nUsed to communicate to the buyer a cost impact to support procurement and payment processes. Used for statistical reporting for customs.",
        set: "Processing",
      },
      {
        name: "Cut For Sale Thickness Code",
        xmlName: "cutForSaleThicknessCode",
        definition:
          "A code describing the cut for items for sale for example THICK. For presentation and shelf planning, the thickness in general terms of the slice are important.",
        set: "Sales",
      },
    ],
    D: [
      {
        name: "Daily Intake Reference",
        xmlName: "nutrientInformation/dailyValueIntakeReference",
        definition:
          "The statement to the consumer describing the basis for calculating the percentage of nutrients that contribute to the recommended daily intake set by regulation.\n\nUsed by the consumer to compare nutrients in a product to the recommended daily intake values.",
        set: "Nutritional",
      },
      {
        name: "Daily Value Intake Percent Measurement Precision Code",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/dailyValueIntakePercentMeasurementPrecisionCode",
        definition:
          "Code indicating whether the specified nutrient content for the Daily Value Intake % is exact or approximate or less than. This is a compound attribute which consists of a Nutrient and a measurement precision code. The structure is nutrient: measurementprecisioncode (ie SALTEQ: LESS_THAN)",
        set: "Components, Nutritional",
      },
      {
        name: "Daily Value Intake Reference",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/dailyValueIntakeReference",
        definition:
          "Free text field specifying the daily value intake base for on which the daily value intake per nutrient has been based. Example: 'Based on a 2000 calorie diet.'",
        set: "Components",
      },
      {
        name: "Data Carrier Family Type Code",
        xmlName: "dataCarrier/dataCarrierFamilyTypeCode",
        definition:
          "A high-level grouping of data carriers for example GS1 Data Bar.",
        set: "Identification",
      },
      {
        name: "Data Carrier Presence Code",
        xmlName: "dataCarrier/dataCarrierPresenceCode",
        definition:
          "Code list that identifies if a product represented with this GTIN has the potential to be recieved with an RFID tag attached. Acceptable values are sometimes, always, or never.",
        set: "Identification",
      },
      {
        name: "Data Carrier Type Code",
        xmlName: "dataCarrier/dataCarrierTypeCode",
        definition:
          "The type of data carrier (Barcode or EPC tag) physically present on the trade item. Example: UPC A, ITF 14, GS1 128, EPC Enabled RFID Tag, NO BARCODE.",
        set: "Identification",
      },
      {
        name: "Data Quality Excellence Non-Visual Validation (Germany)",
        xmlName: "dQXNonVisualValidation",
        definition:
          'This attribute is only relevant for Data Quality Excellence (DQX) service participants, primarily in the German target market. With the help of this attribute, a visual validation can be actively objected to. If the "true" indicator is not set, a visual inspection will take place for participants of the DQX Service. Automatic machine validation is not affected by this attribute, the cert state AV seal component is assigned regardless of this attribute. The control of whether a company participates is done via a whitelist.',
        set: "Indicators",
      },
      {
        name: "Date Of Catch Process Type Code",
        xmlName:
          "fishReportingInformation/fishCatchInformation/fishCatchDateInformation/dateOfCatchProcessTypeCode",
        definition:
          "The process of how the fish is dated, for example REAL_TIME as fish are caught they are dated and time stamped like tuna, ONE_TIME_CATCH on a date for fish farming, or PERIODIC_CATCH meaning the catch date reflective of seasonal catch like lobster trapping.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Degree of Original Wort",
        xmlName: "degreeOfOriginalWort",
        definition: "Specification of the degrees of original wort.",
        set: "Liquor",
      },
      {
        name: "Delivery Frequency Code",
        xmlName: "distributionDetails/deliveryFrequencyCode",
        definition:
          "A code specifying the regular delivery frequency for a specific product or service.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Delivery Lead Time",
        xmlName: "deliveryLeadTime",
        definition:
          "Specifies the lead time in either calendar or work days from either the date of PO receipt to shipment or the date of PO receipt to delivery.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Departement Activite",
        xmlName: "departementActivite",
        definition:
          "This attribute is representative of a manufacturer portfolio segmentation, made by the supplier, for grouping products that follow the same Pricing conditions at level 2; each of those segments are given 1 unique code by Cora Belgium that will be used by Cora Belgium to retrieve the pricing structure of a new synchronised product.",
        set: "Sales",
      },
      {
        name: "Department Name",
        xmlName:
          "globalModelInformation/globalModelContactInformation/departmentName",
        definition:
          "The name of the department that can be contacted to provide additional information",
        set: "Identification",
      },
      {
        name: "Dependent Proprietary Item",
        xmlName: "dependentProprietaryTradeItems/dependentProprietaryTradeItem",
        definition:
          "Descriptive terms used to denote the additional products required in order to utilize the product.",
        set: "Partner Specific",
      },
      {
        name: "Deposit Target Market",
        xmlName:
          "packagingInformation/packagedeposit/returnablePackageDepositRegion/depositTargetMarket",
        definition:
          "The geographic region (country) associated with the returnable package deposit amount.",
        set: "Packaging, Packaging",
      },
      {
        name: "Deposit Target Market Subdivision",
        xmlName:
          "packagingInformation/packagedeposit/returnablePackageDepositRegion/depositTargetMarketSubdivision",
        definition:
          "The country sub-division associated with the returnable package deposit amount.",
        set: "Packaging, Packaging",
      },
      {
        name: "Deposit Value Effective Date",
        xmlName: "packagingInformation/packagedeposit/depositValueEffectiveDate",
        definition:
          "First date that the deposit value is valid for the deposit code.",
        set: "Packaging, Packaging",
      },
      {
        name: "Deposit Value End Date",
        xmlName: "packagingInformation/packagedeposit/depositValueEndDate",
        definition:
          "Last date that the deposit value in the currency is valid for the deposit code.",
        set: "Packaging, Packaging",
      },
      {
        name: "Depth",
        xmlName: "componentInformation/tradeItemMeasurements/depth",
        definition:
          "The depth of the unit load, as measured according to the GS1 Package Measurement Rules, including the shipping platform unless it is excluded according to the Pallet Type Code chosen.",
        set: "Components, Dimensions",
      },
      {
        name: "Description",
        xmlName: "alternateClassification/description",
        definition:
          "This is the system-generated description of the alternate classification code selected.",
        set: "Identification",
      },
      {
        name: "Description On A Nutrient",
        xmlName:
          "componentInformation/nutritionalInformation/descriptionOnANutrient",
        definition: "Description clarifying the nutrient information",
        set: "Components, Nutritional",
      },
      {
        name: "Description On Nutrient Qualifier",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/descriptionOnNutrientQualifier",
        definition:
          "The qualifier from the descriptionOnNutrient applies to a specific nutrient. Sometimes an actual nutrient quantity or % are not given, instead only a qualifier. Example descriptionOnNutrient = * Daily Value Intake does not apply. Then this would only be the * at the nutrient level. Examples include *, @, etc",
        set: "Components, Nutritional",
      },
      {
        name: "Diameter",
        xmlName: "componentInformation/tradeItemMeasurements/diameter",
        definition:
          "The measurement of the diameter of the trade item at its largest point.",
        set: "Components, Dimensions",
      },
      {
        name: "Diet Type Certification Agency",
        xmlName:
          "componentInformation/dietInformation/foodAndBevDietTypeInfo/dietTypeCertificationAgency",
        definition:
          "Name of organization defining the requirements for diet claims.",
        set: "Components",
      },
      {
        name: "Diet Type Code",
        xmlName:
          "componentInformation/dietInformation/foodAndBevDietTypeInfo/dietTypeCode",
        definition:
          "Code indicating the diet for, which the product is suitable.",
        set: "Components",
      },
      {
        name: "Diet Type Description",
        xmlName: "componentInformation/dietInformation/dietTypeDescription",
        definition:
          "Free text for indication of diet not stated in the list of diets.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Diet Type Subcode",
        xmlName:
          "componentInformation/dietInformation/foodAndBevDietTypeInfo/dietTypeSubcode",
        definition:
          "Indicates a set of agreements or a certificate name that guarantees the product is permitted in a particular diet.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Dietary Regime Code",
        xmlName: "foodAndBevDietTypeInfo/dietTypeCode",
        definition:
          "Valid Value for the diet which the product is suitable.\n\nUsed by the seller to notify buyers and consumers about the dietary regime that a product may belong to. This is not an indication of certification and may not appear on the physical product. It could also be used to market specific products based on dietary regime.",
        set: "Food and Beverage",
      },
      {
        name: "Digital Asset End Date/Time",
        xmlName: "externalFileLink/fileEffectiveEndDateTime",
        definition:
          "The date/time on which the digital asset can no longer be used. \n\nUsed by the seller to communicate to the buyer when the digital asset can no longer be used.",
        set: "External Digital Assets",
      },
      {
        name: "Digital Asset File Name",
        xmlName: "externalFileLink/externalFileLinkFileName",
        definition:
          "The file name of the digital asset, for images according to the GS1 Product Image Specification Standard. \n\nUsed to identify the name and intent for the digital asset. Provide a unique name based on GS1 specifications. If the file contains an extension it must be included in the file name.",
        set: "External Digital Assets",
      },
      {
        name: "Digital Asset Primary Indicator",
        xmlName: "externalFileLink/primaryImage",
        definition:
          "The indicator designating the primary digital asset to be used. \n\nUsed by the seller to communicate to the buyer the primary digital asset to be used for display to the consumer.",
        set: "External Digital Assets",
      },
      {
        name: "Digital Asset Start Date/Time",
        xmlName: "externalFileLink/fileEffectiveStartDateTime",
        definition:
          "The date/time on which the digital asset can be used. \n\nUsed by the seller to communicate to the buyer when the digital asset can be used and shown to the consumer.",
        set: "External Digital Assets",
      },
      {
        name: "Digital Asset Type Code",
        xmlName: "externalFileLink/typeOfInformation",
        definition:
          "Valid value for the type of digital asset that is being referenced. \n\nUsed to identify the type of digital asset that is being referenced.",
        set: "External Digital Assets",
      },
      {
        name: "Digitization Level Code",
        xmlName: "digitalizationLevelCode",
        definition: "A code that indicates the way a record was produced.",
        set: "Media and Entertainment",
      },
      {
        name: "Dimension Depth",
        xmlName:
          "componentInformation/tradeItemMeasurements/displayDimensions/dimensionDepth",
        definition:
          "The depth dimension of a trade item under certain display scenarios(Display Dimension Types) when they differ from the standard measurements provided under the package Measurement Rules.",
        set: "Components",
      },
      {
        name: "Dimension Diameter",
        xmlName:
          "componentInformation/tradeItemMeasurements/displayDimensions/dimensionDiameter",
        definition:
          "The diameter dimension of a trade item under certain display scenarios (Display Dimension Types).",
        set: "Components, Dimensions",
      },
      {
        name: "Dimension Height",
        xmlName:
          "componentInformation/tradeItemMeasurements/displayDimensions/dimensionHeight",
        definition:
          "The height dimension of a trade item under certain display scenarios(Display Dimension Types) when they differ from the standard measurements provided under the Package Meaurement Rules.",
        set: "Components",
      },
      {
        name: "Dimension Width",
        xmlName:
          "componentInformation/tradeItemMeasurements/displayDimensions/dimensionWidth",
        definition:
          "The width dimension of a trade item under certain display scenarios(Display Dimension Types) when they differ from the standard measurements provided under the Package Meaurement Rules.",
        set: "Components",
      },
      {
        name: "Direct Consumer Delivery?",
        xmlName: "isItemAvailableForDirectToConsumerDeliv",
        definition:
          "Indicator to denote the vendor supports direct-to consumer delivery for the product. ",
        set: "Partner Specific",
      },
      {
        name: "Disc Number",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/discNumber",
        definition: "The number allocated to a disc, beginning with 1",
        set: "Media and Entertainment",
      },
      {
        name: "Discontinued Date",
        xmlName: "discontinueDate",
        definition:
          "AFTER December 2018, a GTIN allocated to a trade item SHALL NOT be reallocated to another trade item. This applies to ALL trade items, regardless of sector. The only exceptions include: If a GTIN has been assigned to an item, which was then never actually produced, the GTIN may be deleted from any catalogue immediately without first being marked as discontinued. In this exceptional case, the GTIN may be re-used 12 months after deletion from the seller's catalogue. Trade items that have been withdrawn from the market and are reintroduced may use the original GTIN if they are reintroduced without any modifications or changes that require a new GTIN as specified by the GTIN Management Standard.",
        set: "Dates, Dates",
      },
      {
        name: "Discount Amount",
        xmlName: "applicablePaymentTerms/availableDiscount/discountAmount",
        definition: "The deduction represented as an amount .",
        set: "Sales",
      },
      {
        name: "Discount Applicable Period",
        xmlName:
          "applicablePaymentTerms/availableDiscount/discountApplicablePeriod",
        definition: "Time period the discount is applicable.",
        set: "Sales",
      },
      {
        name: "Discount Base Type Code",
        xmlName: "applicablePaymentTerms/availableDiscount/discountBaseTypeCode",
        definition:
          "Describes the price base applicable to the discount. For example NET or GROSS.",
        set: "Sales",
      },
      {
        name: "Discount Description",
        xmlName: "applicablePaymentTerms/availableDiscount/discountDescription",
        definition:
          "A text field describing the discount. Allows for the representation of the same value in different languages but not multiple values.",
        set: "Sales",
      },
      {
        name: "Discount Percent",
        xmlName: "applicablePaymentTerms/availableDiscount/discountPercent",
        definition: "The deduction represented as a percentage.",
        set: "Sales",
      },
      {
        name: "Discount Type",
        xmlName: "applicablePaymentTerms/availableDiscount/discountType",
        definition:
          "A string value that specifies the type of payment discount for example “2 percent in 10 days, net 30”.",
        set: "Sales",
      },
      {
        name: "Dispatch Unit Indicator",
        xmlName: "isDispatchUnit",
        definition:
          'Would your product be Shipped at this Product/Packaging Level?  If so, select "True."\n\nWe realize that you may have different standards of doing business per Recipient. Feel free to assign different Dispatch Units per Recipient based on your preference. \n\nFor example, allow your most common answer (i.e. true) to use our system default of "ALL," while selecting the Recipient exceptions to receive a different value (i.e. false). ',
        set: "Indicators",
      },
      {
        name: "Dispenser Type Code",
        xmlName: "productInformationDetail/dispenserTypeCode",
        definition:
          "The mechanism or method by which the product is dispensed from its container.",
        set: "Descriptions",
      },
      {
        name: "Display Dimension Type Code",
        xmlName:
          "componentInformation/tradeItemMeasurements/displayDimensions/displayDimensionTypeCode",
        definition:
          "Depicts certain display scenarios (e.g. Retail Display, Out of package) used for measurement.",
        set: "Components",
      },
      {
        name: "Display Type Code",
        xmlName: "displayTypeCode",
        definition:
          "Valid value for the type of product display.\n\nUsed to communicate display readiness and configuration.",
        set: "Packaging",
      },
      {
        name: "Display Type List",
        xmlName: "displayTypeList",
        definition:
          "An indication of if the item is a display unit or not. Acceptable values for this are found in the PerformanceRequirementsOptionsCodeList",
        set: "Descriptions",
      },
      {
        name: "Display Unit Indicator",
        xmlName: "isTradeItemADisplayUnit",
        definition:
          "Indicator a trade item can be used as a display.\n\nUsed by the buyer for promotional planning and logistics. Used for shelf planning and reduces stocking time.",
        set: "Global",
      },
      {
        name: "Distribution Media Count",
        xmlName: "audioVisualMediaContentInformation/distributionMediaCount",
        definition:
          "The quantity of media storage devices that are included in the package for the purposes of storing the software.",
        set: "Media and Entertainment",
      },
      {
        name: "Distribution Media Type Code",
        xmlName: "audioVisualMediaContentInformation/distributionMediaTypeCode",
        definition:
          "The type of media storage devices that are included in the package for the purposes of storing the software for example memory sticks, discs, cartridges.",
        set: "Media and Entertainment",
      },
      {
        name: "Distribution Method Code",
        xmlName: "distributionDetails/distributionMethodCode",
        definition:
          "The code value that indicates the method of delivery for the trade item.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Does Ingredient Contain Gluten?",
        xmlName: "foodAndBevIngredient/saIngredientInformation/saContainsGluten",
        definition:
          "Does the Ingredient have proteins that naturally occur in a significant cereal to which some persons are intolerant (gluten)?.",
        set: "Ingredients",
      },
      {
        name: "Does Item Data Contain Third Party Content?",
        xmlName: "thirdPartyContent",
        definition:
          "This attribute should be set to true if the attribute data for this item contains 3rd party content.",
        set: "Indicators",
      },
      {
        name: "Does Item Have Allergen Control Policy?",
        xmlName: "hasAllergenControlPolicy",
        definition:
          "If there is a risk for cross-contamination, does the food processing facility have an Allergen Control Policy?",
        set: "Allergen",
      },
      {
        name: "Does Item Have Comparitive Claim?",
        xmlName: "hasComparativeClaim",
        definition:
          "Is there a claim on the label that  compares the total fat, saturated fat, cholesterol, sugar, sodium or salt, energy value or alcohol level of two or more similar foodstuffs?",
        set: "Food and Beverage",
      },
      {
        name: "Does item have expiry date?",
        xmlName: "doesItemHaveExpiryDate",
        definition: "Indicates if this is an expiration dated product",
        set: "Liquor",
      },
      {
        name: "Does Manufacturer have Take back Program?",
        xmlName: "doesManufacturerHaveTakeBackProgram",
        definition:
          "Indicates whether or not the manufacturer offers a take back program to the consumer for the product to be reused, remanufactured, or recycled.",
        set: "Disposal",
      },
      {
        name: "Does Packaging Have Wheels",
        xmlName: "packagingInformation/doesPackagingHaveWheels",
        definition:
          "Indicates if packaging has wheels to facilitate its transportation. Wheels can be permanently fixed or could be detachable. This could apply to a number of packaging types such as trays, cages, boxes, etc.",
        set: "Packaging",
      },
      {
        name: "Does Packaging Material Contain Latex",
        xmlName: "doPackagingMaterialContainLatex",
        definition:
          "An indication that that a packaging material is made from or contains latex which refers generically to a stable dispersion (emulsion) of polymer microparticles in an aqueous medium.",
        set: "Packaging",
      },
      {
        name: "Does Product Have Any Hazard Warnings",
        xmlName: "doesProductHaveAnyHazardWarnings",
        definition:
          "Indicator to denote if the product has any hazard warnings printed on the packaging.",
        set: "Recipient Identification Info",
      },
      {
        name: "Does Trade Item Carry USDA Child Nutrition Label?",
        xmlName: "doesTradeItemCarryUSDAChildNutritionLabel",
        definition:
          "An indication that the trade item carries a USDA approved Child Nutrition Label. The USDA Child Nutrition (CN) Labeling Program provides food manufacturers the option to include a standardized food crediting statement on their product label. Labels must be approved by USDA, FNS prior to use and manufacturers must have quality control procedures and inspection oversight that meet the FNS requirements. Products produced in accordance with the CN Labeling Program are generally purchased by foodservice providers for FNS meal programs. http://www.fns.usda.gov/cnd/cnlabeling/default.htm",
        set: "Nutritional",
      },
      {
        name: "Does Trade Item Contain Electrical Components",
        xmlName: "doesTradeItemContainElectricalComponents",
        definition:
          "An Indication for regulation purposes of the existence of wires, circuits, circuit boards, or other electrical components in the trade item. The trade item may be powered by many types of energy such as solar, electricity, fossil fuel, batteries and/or generate some form of energy.",
        set: "Regulatory",
      },
      {
        name: "Does Trade Item Contain Non Creditable Grains",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/doesTradeItemContainNoncreditableGrains",
        definition:
          "An indication that the item contains non-creditable grains. The existence of non-creditable grains in excess of specified limits may alter the item’s credit toward child nutrition requirements as specified by the applicable Product Formulation Statement Regulatory Body.",
        set: "Ingredients",
      },
      {
        name: "Does Trade Item have Auto Reader Tracker?",
        xmlName:
          "componentInformation/tradeItemLifeSpan/doesTradeItemHaveAutoReaderTracker",
        definition:
          "Indication that the trade item has a device that identifies that the product has a limited number of reuses and is self tracked.",
        set: "Components",
      },
      {
        name: "Does Trade Item Meet Whole Grain Rich Criteria",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/doesTradeItemMeetWholeGrainRichCriteria",
        definition:
          "An indication the trade item meets the whole grain-rich criteria as defined and regulated by the applicable Product Formulation Statement Regulatory Body.",
        set: "Ingredients",
      },
      {
        name: "Drained Weight",
        xmlName: "componentInformation/tradeItemMeasurements/drainedWeight",
        definition: "The weight of the trade item when drained of its liquid.",
        set: "Components, Dimensions",
      },
      {
        name: "Drawer Position",
        xmlName: "drawerPosition",
        definition:
          "The location of the drawer in relation to the storage unit. Example: Front, Left Side, Right Side, Bottom, etc.",
        set: "Descriptions",
      },
      {
        name: "Drop below Min Humidity Acceptable Time Span",
        xmlName:
          "tradeItemHumidityInformation/dropBelowMinimumHumidityAcceptableTimeSpan",
        definition:
          "The amount of time that a product can fall below the minimum humidity threshold as defined by the manufacturer without affecting product safety or quality.",
        set: "Handling and Storage",
      },
      {
        name: "Drop below Min Temp Acceptable Time Span",
        xmlName:
          "tradeItemTemperatureInformation/dropBelowMinimumTemperatureAcceptableTimeSpan",
        definition:
          "The amount of time that a product can drop below the minimum temperature threshold during storage as defined by the manufacturer without affecting product safety or quality.",
        set: "Handling and Storage",
      },
      {
        name: "Dubbed Language Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/dubbedLanguageCode",
        definition: "A code that identifies the dubbed language of a film.",
        set: "Media and Entertainment",
      },
      {
        name: "Dubbed Subtitled Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/dubbedSubtitledCode",
        definition: "Describes if the movie is dubbed, subtitled or both.",
        set: "Media and Entertainment",
      },
      {
        name: "Duration",
        xmlName: "duration",
        definition:
          "Provide the amount of time that the product can be used or is expected to complete.  Example: 1  hour",
        set: "Dimensions",
      },
      {
        name: "Duty Fee Tax Agency Name",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxAgencyName",
        definition:
          "The name of an agency responsible for the collection of this duty",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Amount",
        xmlName: "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxAmount",
        definition:
          "The current tax or duty or fee amount applicable to the trade item.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Basis",
        xmlName: "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxBasis",
        definition:
          'This is defined as a taxation basis for a corresponding levying type and class for example for a steel tax on an item with a screw cap weighing "3" grams the tax basis would be 3 grams.',
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Basis Price",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxBasisPrice",
        definition:
          "The price that is determined a trade item should be set to by legal means within a market. This price is the basis to which the tax is set to. Some trade item prices are dictated by law in some markets.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Classification Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxClassificationCode",
        definition:
          "A code specifying the broad category of duty, fee or tax for example energy. waste, environment.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Country Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxCountryCode",
        definition: "The country code for the Fee or tax.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Country Subdivision Code",
        xmlName:
          "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxCountrySubdivisionCode",
        definition:
          "The political subdivision (e.g. province or state) where a specific tax or tax rate\u000balue are applicable.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Country Subdivision Ship From Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxCountrySubdivisionShipFromCode",
        definition:
          "The country subdivision the item is being shipped from in which the tax basis is made",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Country Subdivision Ship To Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxCountrySubdivisionShipToCode",
        definition:
          "The Country subdivision the item is being shipped to in which the tax basis is made.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Effective End Date",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxEffectiveEndDateTime",
        definition: "The effective date on which the tax ",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Effective Start Date",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxEffectiveStartDateTime",
        definition: "The effective date on which the tax ",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Exempt Party Role Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxExemptPartyRoleCode",
        definition:
          "The party role (e.g. Consumer) that is exempt from a specific tax duty or fee.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Legal Provision",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxLegalProvision",
        definition:
          "The associated legal tax law that the tax information is based on. An example in Brazil: Inciso I, Art. 34, Anexo II, RICMS-SP.",
        set: "Taxation",
      },
      {
        name: "Duty Fee Tax Reduction Criteria Description",
        xmlName:
          "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxReductionCriteriaDescription",
        definition:
          "The conditions under which a supplier is entitled to a particular tax reduction.",
        set: "Taxation",
      },
      {
        name: "DVD Region Code",
        xmlName: "audioVisualMediaContentInformation/dvdRegionCode",
        definition:
          "A code that identifies the region in which the DVD will be sold. Only DVDs and DVD players with matching codes will work unless the DVD player has been “de-zoned”.",
        set: "Media and Entertainment",
      },
    ],
    E: [
      {
        name: "Ecological Information Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/ecologicalInformationDescription",
        definition:
          "Any information required on the SDS/MSDS in relationship to any effect of the chemical on the environment. ",
        set: "Components, Safety",
      },
      {
        name: "Econtent Environment Type Code",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemEcontent/econtentEnvironmentTypeCode",
        definition:
          "A code providing the digital medium, the eContent is targeted towards for example WEBSITE or MOBILE_DEVICE.",
        set: "Components, Descriptions",
      },
      {
        name: "Econtent Trade Item Statement",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemEcontent/econtentTradeItemStatement",
        definition:
          "A free text field providing additional information relating to the trade item. This is specifically addressing website and mobile device content for consumers.",
        set: "Components, Descriptions",
      },
      {
        name: "Edition",
        xmlName: "editionDescription",
        definition:
          "A text that describes the edition of the audio or visual media product.",
        set: "Media and Entertainment",
      },
      {
        name: "Edition (Toys)",
        xmlName: "editionToys",
        definition:
          "Provide the version or edition of the item.  Example: Teacher's Edition, Unabridged Version",
        set: "Descriptions",
      },
      {
        name: "Effective Date",
        xmlName: "safetyDataSheetInformation/sDSSheetEffectiveDateTime",
        definition:
          "Date/time from which the content of the safety data sheet is valid. When issuing the data sheet for the first time, this date indicates the creation date. In case of updates, this date indicates the date of the last revision.",
        set: "Safety",
      },
      {
        name: "End Availability Date Time",
        xmlName:
          "targetMarketSalesConditions/salesConditionTargetMarketCountry/endAvailabilityDateTime",
        definition:
          "The date from which the trade item is no longer available from the information provider, including seasonal or temporary trade item and services.",
        set: "Sales",
      },
      {
        name: "End Availability Date/Time",
        xmlName: "endAvailabilityDate",
        definition:
          'The date/time when the product is no longer available for order from the seller. End Availability Date/Time may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed by the seller to communicate to the buyer when a product is no longer available for order, including seasonal trade items. Enables the buyer to manage item life cycle processes.',
        set: "Dates",
      },
      {
        name: "End Date of Exclusivity",
        xmlName: "endDateTimeOfExclusivity",
        definition:
          "The date and time at which a product is no longer exclusive to that trading partner.",
        set: "Dates",
      },
      {
        name: "End Date of Max Buying Qty",
        xmlName: "endDateMaximumBuyingQuantity",
        definition:
          "The end date for when the maximum buying quantity is no longer available to the trading partner.",
        set: "Dates",
      },
      {
        name: "End Date of Min Buying Qty",
        xmlName: "endDateMinimumBuyingQuantity",
        definition:
          "The end date for when the minimum buying quantity is no longer available to the trading partner.",
        set: "Dates",
      },
      {
        name: "End Effective Date",
        xmlName: "endEffectiveDate",
        definition:
          "Date on which the information of the master data is no longer valid for order to pay.",
        set: "Recipient Identification Info",
      },
      {
        name: "Energy Guide Type",
        xmlName: "energyGuide/type",
        definition:
          "Specify the disclosure statement that this cost is associated with.",
        set: "Packaging",
      },
      {
        name: "Enumeration Value",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValue",
        definition: "Code List Value maintained by an external code list agency.",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "Enumeration Value Definition",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDefinition",
        definition:
          "Definition of the code list value maintained by an external code list agency",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "Enumeration Value Description",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDescription",
        definition:
          "Description of the value in a code list value maintained by an external code list agency.",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "Environmental Identifier",
        xmlName: "environmentalIdentifier",
        definition:
          "Valid Value to denote the environmental aspects or characteristics of the product. For example: BIODEGRADABLE_PRODUCT, or CONTAINS_NO_OZONE_DEPLETING_CHEMICALS",
        set: "Partner Specific",
      },
      {
        name: "Environmental Levy Applicable by Province",
        xmlName: "environmentalLevyApplicableByProvince",
        definition:
          "This is a code that is used to identify packaging features valuable for consumers or any party in the supply chain.",
        set: "Packaging",
      },
      {
        name: "Estimated Sales Revenue",
        xmlName: "estimatedSalesRevenue",
        definition:
          "The vendor forecasted sales in a given currency over a given time period.",
        set: "Sales",
      },
      {
        name: "Estimated Sales Revenue Currency",
        xmlName: "estimatedSalesRevenueCurrency",
        definition:
          "The currency code associated with the estimated sales revenue.",
        set: "Sales",
      },
      {
        name: "Estimated Volume Quantity",
        xmlName: "estimatedVolumeQuantity",
        definition:
          "The estimated demand quantity for an item over a given time period.",
        set: "Dimensions",
      },
      {
        name: "Estimated Volume Time Period",
        xmlName: "estimatedVolumeTimePeriod",
        definition:
          "The duration (year, months, weeks, days) associated with the estimated sales volume.",
        set: "Dimensions",
      },
      {
        name: "Estimated Volume Time Period Unit Of Measure",
        xmlName: "estimatedVolumeTimePeriodUnitOfMeasure",
        definition:
          "The Unit of Measure associated with Estimated Volume Time Period.",
        set: "Dimensions",
      },
      {
        name: "Estimated Volume Unit Of Measure",
        xmlName: "estimatedVolumeUnitOfMeasure",
        definition: "Unit of Measure associated with Estimated Volume Quantity.",
        set: "Dimensions",
      },
      {
        name: "Exact PH",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/exactPH",
        definition:
          "The exact PH amount for a chemical ingredient (not a range). ",
        set: "Components, Safety",
      },
      {
        name: "Exclude Recipients",
        xmlName: "dam/excludedRecipients",
        definition:
          "List of GLNs that this image is excluded from.  Sharing is indicated on the Share Type attribute.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Exhibit Group",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrain/exhibitGroup",
        definition:
          "A reference to the exhibit grouping for the creditable ingredient, described in the creditable ingredient description of the Product Formulation Statement and defined by the requirements, rules and regulations set forth by the applicable product formulation statement regulatory body.",
        set: "Ingredients",
      },
      {
        name: "Exist Special Refuse Obligations",
        xmlName: "doesTradeItemHaveRefuseObligations",
        definition:
          "Indication that special refuse obligations apply to the trade item.",
        set: "Disposal",
      },
      {
        name: "Expiry Date Format",
        xmlName: "expiryDateFormat",
        definition:
          "Indicates the derivation of the expiry date used on the product. Examples: NU - Numerical, JU - Julian.",
        set: "Dates",
      },
      {
        name: "Expressed As Part Of",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/expressedAsPartOf",
        definition:
          "The nutrient type that is expressed as part of another nutrient total. This attribute represents the main nutrient. Example: Carnitine expressed as part of Protein. This attribute is Protein, total (PRO-) and the nutrientTypeCode is Carnitine (L_CARNITINE).",
        set: "Components, Nutritional",
      },
      {
        name: "Extended Import Classification",
        xmlName: "extendedImportClassification",
        definition:
          "EU classification of the products that are subjected to excise duties",
        set: "Processing",
      },
      {
        name: "External Agency Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalAgencyName",
        definition:
          "The name of the agency that manages a code list external to GS1. ",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "External Code List Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListName",
        definition:
          "The name of the code list maintained by an agency external to GS1. ",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "External Code List Version",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListVersion",
        definition:
          "The version of the code list maintained by an agency external to GS1. ",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "Extinguishing Media Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/extinguishingMediaDescription",
        definition:
          "A description of any substance that can be used to extinguish a fire, carbon dioxide, water etc in relation to any hazardous materials",
        set: "Components, Safety",
      },
    ],
    F: [
      {
        name: "Fat Percentage In Dry Matter Measurement Precision Code",
        xmlName: "fatPercentageInDryMatterMeasurementPrecisionCode",
        definition:
          "A code qualifying the percentage of fat in dry matter, for example LESS_THAN",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fats & Oils - Ingredient Part of a Plant",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIngredientPartOfPlant",
        definition:
          "If the Ingredient is a vegetable fat and/or oil -specify the particular part of the plant from which the fat or oil is derived.",
        set: "Ingredients",
      },
      {
        name: "Fats & Oils - Is Ingredient A Fish?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientFish",
        definition: "Is the fat and/or oil from fish?",
        set: "Ingredients",
      },
      {
        name: "Fats & Oils - Is Ingredient a Vegetable?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientVegetable",
        definition: "Is the Ingredient a fresh, unprocessed vegetable?",
        set: "Ingredients",
      },
      {
        name: "Fats & Oils - Is Ingredient an Animal?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientAnimal",
        definition: "Is the fat and/or oil from an animal?",
        set: "Ingredients",
      },
      {
        name: "Fats & Oils - Is Ingredient Hydrogenated?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientHydrogenated",
        definition: "Is the fat and/or oil hydrogenated?",
        set: "Ingredients",
      },
      {
        name: "Fats & Oils - Is Ingredient Marine?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientMarine",
        definition:
          "Is the fat and/or oil from marine foodstuff, other than fish?",
        set: "Ingredients",
      },
      {
        name: "FDS/FDR",
        xmlName: "fdsFdr",
        definition: "FDS/FDR",
        set: "Safety",
      },
      {
        name: "Feature Benefit",
        xmlName:
          "componentInformation/marketingInformation/tradeItemFeatureBenefit/featureBenefit",
        definition:
          "Element for consumer facing market-ing content to describe the key features or benefits of the style suitable for display purposes.",
        set: "Components",
      },
      {
        name: "Feature Benefit Extended",
        xmlName: "tradeItemFeatureBenefitExtended",
        definition:
          "Element for consumer facing market-ing content to describe the key features or benefits of the style suitable for display purposes.",
        set: "Marketing",
      },
      {
        name: "Feature Runtime Mins",
        xmlName: "audioVisualMediaContentInformation/runTimeMinutes",
        definition: "The length of a media item expressed in minutes.",
        set: "Media and Entertainment",
      },
      {
        name: "Features and Benefits",
        xmlName: "tradeItemFeatureBenefit/featureBenefit",
        definition:
          "Feature Benefits are often used to populate those key feature bullet points found on a website. \nProvide 3-10 instances of specific item details while listing (sequencing) by level of importance. Be sure to be informative and to use sentence case.\n\nItem Management Pro Tip: To add more fields in the language, click the + in the grey Trade Item Feature Benefit label/header bar.",
        set: "Marketing",
      },
      {
        name: "File Aspect Ratio",
        xmlName: "dam/imageInfo/fileAspectRatio",
        definition:
          "A description of the aspect ratio used to determine how a digital asset fits on a page or monitor.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Author Name",
        xmlName: "dam/general/fileAuthorName",
        definition:
          "The organization(s) or person(s) who is responsible for creating the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Background Colour Description",
        xmlName: "dam/imageInfo/fileBackgroundColourDescription",
        definition: "Description of the background color.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Camera Perspective",
        xmlName: "dam/description/fileCameraPerspective",
        definition:
          "A description of the angle of perspective used by the camera in the capture of the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Campaign Description",
        xmlName: "dam/description/fileCampaignDescription",
        definition:
          "A reference to a specific communication project to which the digital asset is associated.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Colour Calibration",
        xmlName: "dam/imageInfo/fileColourCalibration",
        definition: "Free form text to describe the calibration of the file.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Colour Scheme Code",
        xmlName: "dam/imageInfo/fileColourSchemeCode",
        definition: "The type of colour scheme used in the digital asset. ",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Compression Type",
        xmlName: "dam/imageInfo/fileCompressionType",
        definition:
          "A description of the compression method used to reduce the file size stored at the link. This information is used to aid the user in choosing the correct program to extract the file. Examples include Quick Time, Real Player, mpg, WinZip, etc.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Contrast",
        xmlName: "dam/imageInfo/fileContrast",
        definition:
          "The contrast used in the digital asset. Contrast is the difference in brightness between light and dark areas of an image. Contrast determines the number of shades in the image.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Copyright Description",
        xmlName: "dam/description/fileCopyrightDescription",
        definition:
          "A description of any Copyright notice which pertains to the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Creation Program",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileCreationProgram",
        definition: "The program used in the creation of the digital asset.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Depicted Scene Description",
        xmlName: "dam/description/fileDepictedSceneDescription",
        definition:
          "The scene or location used as a setting or backdrop in the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Depicted Season",
        xmlName: "dam/general/fileDepictedSeason",
        definition:
          "A description of the season shown or depicted within the digital asset. (e.g., Winter, Spring)",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Disclaimer Information",
        xmlName: "dam/description/fileDisclaimerInformation",
        definition:
          "A description expressing any disclaimers which pertain to the digital asset. (e.g. Item may be smaller than appears)",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Effective End Date",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileEffectiveEndDateTime",
        definition:
          "The date this image ceases to be the current image for this trade item. ",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Effective End Date Time",
        xmlName:
          "foodAndBevDietTypeInfo/certification/referencedFileInformation/fileEffectiveEndDateTime",
        definition:
          "The date upon which the target of this external link ceases to be effective for use.",
        set: "Food and Beverage",
      },
      {
        name: "File Effective Start Date",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileEffectiveStartDateTime",
        definition:
          "The date this image is the current image for this trade item.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Effective Start Date Time",
        xmlName:
          "foodAndBevDietTypeInfo/certification/referencedFileInformation/fileEffectiveStartDateTime",
        definition:
          "The date upon which the target of this external link begins to be effective for use.",
        set: "Food and Beverage",
      },
      {
        name: "File Fee Description",
        xmlName: "dam/description/fileFeeDescription",
        definition:
          "A description of the fees that are applicable to use of the digital asset. This attribute may be a list of actual fees, a description of the fee structure, or contact information to find out the fees.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Format Description",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileFormatDescription",
        definition: "Free form description of the format of the file.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Format Name",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileFormatName",
        definition: "The name of the file format. Examples: PDF, JPEG,  BMP etc.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Item Position",
        xmlName: "dam/general/fileItemPositionCode",
        definition:
          "A description of how the item is placed in the digital asset for example the item is propped (leaning against an object) or held (being held by a model).",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Language",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileLanguageCode",
        definition:
          "The specified language to which the digital asset is targeted.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Language Code",
        xmlName:
          "foodAndBevDietTypeInfo/certification/referencedFileInformation/fileLanguageCode",
        definition:
          "The specified language to which the digital asset is targeted.",
        set: "Food and Beverage",
      },
      {
        name: "File Layer Quantity",
        xmlName: "dam/description/fileLayerQuantity",
        definition: "The number of layers in the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Lifestyle Description",
        xmlName: "dam/description/fileLifestyleDescription",
        definition:
          "The lifestyles to which this digital asset can be used. For example psychographic, demographic, age, etc.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Name",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileName",
        definition:
          "The name of the file that contains the external information.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Optimal Viewer Name",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileOptimalViewerName",
        definition: "The software to which this file was targeted.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Origin Country",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileOriginCountryCode",
        definition: "The country where the digital asset originated.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Pixel Height",
        xmlName: "externalFileLink/filePixelHeight",
        definition: "The number of pixels along the vertical axis of the image.",
        set: "External Digital Assets",
      },
      {
        name: "File Pixel Height (system determined)",
        xmlName: "dam/imageInfo/filePixelHeight",
        definition: "The number of pixels along the vertical axis of the image.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "File Pixel Width",
        xmlName: "externalFileLink/filePixelWidth",
        definition:
          "The number of pixels along the horizontal axis of the image.",
        set: "External Digital Assets",
      },
      {
        name: "File Pixel Width (system determined)",
        xmlName: "dam/imageInfo/filePixelWidth",
        definition:
          "The number of pixels along the horizontal axis of the image.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "File Playback Rate",
        xmlName: "dam/imageInfo/filePlaybackRate",
        definition:
          "The targeted frame rate for the display of the digital asset. Expressed as an integer representing the number of frames per second.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Print Height",
        xmlName: "dam/imageInfo/filePrintHeight",
        definition:
          "The maximum measurement along the vertical axis of a printed representation of the file.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Print Width",
        xmlName: "dam/imageInfo/filePrintWidth",
        definition:
          "The maximum measurement along the horizontal axis of a printed representation of the file.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Recommended Usage",
        xmlName: "dam/description/fileRecommendedUsageDescription",
        definition:
          "A reference to the specific communication project to which the digital asset is associated, such as the Back to School Campaign. A campaign is a marketing term used to describe the event, sale, promotion, or other program for which this digital asset is designed to be part.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Resolution Description",
        xmlName: "dam/description/fileResolutionDescription",
        definition:
          "The resolution of the file. Knowing the resolution will allow the user to be able to determine the best system with which to utilize the file.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Rights Description",
        xmlName: "dam/description/fileRightsDescription",
        definition:
          "The structure for Digital Rights Management(DRM) which is in place on the file. This could be ID and location of external Intellectual Property Management & Protection(IPMP) system for lookup of usage rights. Presence of a value for this attribute signifies that the file uses a DRM.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Run Time",
        xmlName: "dam/description/fileRunTime",
        definition:
          "The playback or running length of time for the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Sequence Number",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileSequenceNumber",
        definition:
          "The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Size",
        xmlName: "externalFileLink/fileSize",
        definition: "The size of the referenced file.",
        set: "External Digital Assets",
      },
      {
        name: "File Size (system determined)",
        xmlName: "dam/general/fileSize",
        definition:
          "The size of the file as it is stored in an uncompressed format.  This value is automatically determined by 1WorldSync.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "File Story Description",
        xmlName: "dam/description/fileStoryDescription",
        definition:
          "A description of the storyboard or plot of the digital file.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Talent Description",
        xmlName: "dam/description/fileTalentDescription",
        definition:
          "The specific identification of the talent used in the file. For example, many identify a celebrity as the spokesperson for the product as included in the asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Usage Restriction",
        xmlName: "dam/description/fileUsageRestriction",
        definition:
          "A description of any restrictions on the ability of the recipient's to use of the asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "File Version",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/fileVersion",
        definition:
          "A description of the terms used by the manufacturer to denote the version of the digital asset.",
        set: "Components, Components, Components, External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "File Version (system determined)",
        xmlName: "dam/general/fileVersion",
        definition:
          "A description of the terms used by the manufacturer to denote the version of the digital asset.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Final Batch Expiry Date",
        xmlName: "finalBatchExpiryDate",
        definition:
          "This is a Date field to identify, for Discontinued Products, the last expiry date for the final run of production. Supply at Level: All Applicable ",
        set: "Dates",
      },
      {
        name: "Fire Extinguisher Class",
        xmlName: "fireExtinguisherClass",
        definition:
          "The alphabetical representation to denote the class(es) of fire for which an extinguisher may be used for. ",
        set: "Safety",
      },
      {
        name: "Firefighter Protective Equipment Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/fireFighterProtectiveEquipmentDescription",
        definition:
          "A description of any equipment recommended to be used by fire fighters for protection for example scuba gear, bunker gear, protective equipment in relation to any hazardous materials",
        set: "Components, Safety",
      },
      {
        name: "Firmness Of Cheese Code",
        xmlName: "firmnessOfCheeseCode",
        definition:
          "The code indicating the relative firmness of the cheese based on moisture content. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "First Delivery Date",
        xmlName: "firstDeliveryDateTime",
        definition:
          "The earliest date at which the supplier can deliver the product to the trading partner.",
        set: "Dates",
      },
      {
        name: "First Order Date/Time",
        xmlName: "firstOrderDate",
        definition:
          "The earliest date/time an order will be processed for the product. \n\nUsed by the seller to communicate to the buyer when orders for a product will first be processed.",
        set: "Dates",
      },
      {
        name: "First Permitted Sales Date",
        xmlName: "firstPermittedSalesDate",
        definition: "First Permitted Sales Date(DD-MON-YYYY)",
        set: "Dates",
      },
      {
        name: "First Returnable Date Time",
        xmlName: "firstReturnableDateTime",
        definition:
          "The first date on or after which non-sold trade items can be returned. This information provides the retailer with any conditions required by the information provider as to the date on or after which non-sold trade items may be returned in order to receive credit from the appropriate party.",
        set: "Dates",
      },
      {
        name: "First Ship Date/Time",
        xmlName: "firstShipDate",
        definition:
          "The date/time the product is first available to ship from the seller or the service is available. Link to First Ship Date/Time.\n\nUsed by the seller to communicate to the buyer when the product is first available to ship or the service is available to begin.",
        set: "Dates",
      },
      {
        name: "First Ship Date/Time (Start Availability Date)",
        xmlName: "startAvailabilityDate",
        definition:
          "The date/time the product is first available to ship from the seller or the service is available. Used by the seller to communicate to the buyer when the product is first available to ship or the service is available to begin.\n\nUsed by the seller to communicate to the buyer when the product is first available to ship or the service is available to begin.",
        set: "Dates",
      },
      {
        name: "First Week Rev - Domestic",
        xmlName: "boxOfficeRevenueFirstWeekDomestic",
        definition:
          "The revenue the film earned on the target market for the first week expressed in local currency.",
        set: "Media and Entertainment",
      },
      {
        name: "First-Aid Procedures Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/firstAidProceduresDescription",
        definition:
          "A description of any first aid procedures necessary in case of exposure. This is used in compliance with ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road).",
        set: "Components, Safety",
      },
      {
        name: "Fish Meat Poultry Type Code",
        xmlName: "fishMeatPoultryContent/fishMeatPoultryTypeCode",
        definition:
          "The fish, meat, or poultry type for this food and beverage item.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fish Meat Poultry Type Code List Agency",
        xmlName: "fishMeatPoultryContent/fishMeatPoultryTypeCodeListAgency",
        definition:
          "The code list agency responsible for maintaining a fish, meat, poultry type code list. Example: USDA.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fish Meat Poultry Type Code List Identification",
        xmlName:
          "fishMeatPoultryContent/fishMeatPoultryTypeCodeListIdentification",
        definition:
          "The identification of a fish, meat, and poultry type code list. Example: USDA Individual Intake Food Group List.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fish Production Method Code",
        xmlName:
          "fishReportingInformation/fishCatchInformation/productionMethodForFishAndSeafoodCode",
        definition:
          "Valid value for how the fish and seafood were grown and harvested or caught.\n\nUsed by the buyer to communicate to the consumer the production method of fish and seafood (in EU legally required).\n\nUsed for reporting to authorities.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fish Scientific Name",
        xmlName:
          "fishReportingInformation/speciesForFisheryStatisticsPurposesName",
        definition:
          "The scientific name of fish and seafood products.\n\nUsed by the buyer to communicate to the consumer the scientific name of the fish and seafood (in EU legally required). Used for reporting to authorities.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fish Seafood Presentation Code",
        xmlName: "fishReportingInformation/fishSeafoodPresentationCode",
        definition:
          "The code that indicates the state or form of a fish/seafood product as presented to the consumer, possibly as a result of post-catch processing (e.g., tail removed, gutted, or filleted).",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fish Storage State Code",
        xmlName: "fishReportingInformation/fishCatchInformation/storageStateCode",
        definition:
          "Valid value for whether the fish was previously frozen or not.\n\nUsed by the buyer and the consumer to know whether fish can be re-frozen after purchase. Used in conjunction with Catch Area Code, Catch Method Code, Production Method for Fish and Seafood Code.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Fishing Gear Code",
        xmlName: "fishReportingInformation/fishCatchInformation/catchMethod",
        definition:
          "Valid value for what type of fishing gear was used to catch fish and seafood.\n\nUsed by the buyer to communicate to the consumer the gear used to catch fish and seafood (in EU legally required). Used for reporting to authorities.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Flammable Properties Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/flammablePropertiesDescription",
        definition:
          "A description of any properties related to the ability of a substance to catch fire for example auto-ignition temperature, flashpoint, LEL, UEL in relation to any hazardous materials",
        set: "Components, Safety",
      },
      {
        name: "Flash Point Descriptor",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointDescriptor",
        definition:
          "A descriptor that informs which action the trade item must be used under to achieve that flash point for example when dispensed.",
        set: "Components, Safety",
      },
      {
        name: "Flash Point Temperature",
        xmlName:
          "safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperature",
        definition:
          "The temperature at which a substance, notably liquid, gives off enough flammable vapor to form a mixture with air that can be ignited by contact with a hot surface, spark or flame. \n\nUsed to determine the level of caution needed when handling.\n\nUsed to determine precaution during cleanup if spillage occurs.",
        set: "Safety",
      },
      {
        name: "Flash Point Temperature Lower Value",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureLowerValue",
        definition:
          "A lower value of a possible range of flash point temperatures.",
        set: "Components, Safety",
      },
      {
        name: "Flash Point Temperature Measurement Precision",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureMeasurementPrecision",
        definition:
          "The measurement precision used for calculating a flash point temperature for example EXACT.",
        set: "Components, Safety",
      },
      {
        name: "Flash Point Temperature Upper Value",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureUpperValue",
        definition:
          "A upper value of a possible range of flash point temperatures.",
        set: "Components, Safety",
      },
      {
        name: "Flash Point Type",
        xmlName: "flashPointType",
        definition:
          "Used to determine the type of Flash Point applicable to the item. If Degrees Celsius selected, a Flash Point Temperature value is to be provided.",
        set: "Safety",
      },
      {
        name: "Flashpoint Temperature",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperature",
        definition:
          "The minimum temperature at which a liquid gives off a vapor within a vessel in sufficient concentration to form an ignitable mixture with air near the surface of a liquid.",
        set: "Components",
      },
      {
        name: "Flashpoint Test Method Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTestMethodCode",
        definition:
          "The test method used to determine the flash point temperature for example closed cup.",
        set: "Components, Safety",
      },
      {
        name: "Flexible Spending Account Eligible",
        xmlName: "flexibleSpendingAccountEligible",
        definition: "Indicates if item is FSA-Eligible.",
        set: "Taxation",
      },
      {
        name: "Flooring Material",
        xmlName: "flooringMaterial",
        definition:
          "Terms to denote the material from which the item's floor is made, where the item has a floor. For example, if a storage shed has a floor made out of plywood.",
        set: "Handling and Storage",
      },
      {
        name: "Food And Beverage Ingredient Additive Statement",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredientAdditiveStatement",
        definition:
          'Statement on presence or absence of additives or genetic modification contained in the trade item for example "Contains no preservatives, no artificial colours or flavours and no artificial flavours".',
        set: "Components, Ingredients",
      },
      {
        name: "Food and Beverage Microbiological Organism Reference Value",
        xmlName: "foodAndBevMicrobiological/organismReferenceValue",
        definition:
          "Reference values give an indication of which product specific ranges of micro organisms are to be expected and which micro organism contents in the appropriate food products are acceptable due to hygiene rules. Per definition this value reflects a microbiological limit which in a 2–class plan, separates good quality from defective quality or in a 3–class plan, separates good quality from marginally acceptable quality.",
        set: "Food and Beverage",
      },
      {
        name: "Food Beverage Composition Code",
        xmlName:
          "componentInformation/nutritionalInformation/foodBeverageComposition/foodBeverageCompositionCode",
        definition:
          "A value assigned by the agency for the lookup of food composition information that applies to regulatory nutrition information",
        set: "Components",
      },
      {
        name: "Food Beverage Composition Database Code",
        xmlName:
          "componentInformation/nutritionalInformation/foodBeverageComposition/foodBeverageCompositionDatabaseCode",
        definition:
          "A code depicting an agency which manages a food composition database that applies to regulatory nutrition information",
        set: "Components",
      },
      {
        name: "Food Beverage Composition Description",
        xmlName:
          "componentInformation/nutritionalInformation/foodBeverageComposition/foodBeverageCompositionDescription",
        definition:
          "A text description of either the associated value or the actual database entry lookup",
        set: "Components",
      },
      {
        name: "Food Composition Agency Name Code",
        xmlName: "foodBeverageComposition/foodBeverageCompositionDatabaseCode",
        definition:
          'The Localized nutrient agency that are needed for regulatory claims withing target markets. These agencies each have a database local for their market,.  Populate with "USDA" for known menu components.  To see the website of Target Market Nutrient databases and their associated Agencies check here :  http://www.eurofir.net/eurofir_knowledge/europe. ',
        set: "Nutritional",
      },
      {
        name: "Food Composition Code",
        xmlName: "foodBeverageComposition/foodBeverageCompositionCode",
        definition:
          "A value assigned by the agency for the lookup of nutrient information that applies to regulatory nutrient information",
        set: "Nutritional",
      },
      {
        name: "Food Composition Description",
        xmlName: "foodBeverageComposition/foodBeverageCompositionDescription",
        definition:
          "A text description of either the associated value or the actual database entry lookup as some databases do not contain value lookups of nutrient representation",
        set: "Nutritional",
      },
      {
        name: "For More Info About Product",
        xmlName: "forMoreInfoAboutProduct",
        definition:
          "Utility field providing space for any information not covered in previous fields on packaging. May include 800 number or an address to write to for additional information about the product.",
        set: "Descriptions",
      },
      {
        name: "Formation Type Code",
        xmlName: "productInformationDetail/formationTypeCode",
        definition:
          "A code differentiating brush, broom, and dusting tools from one another by concepts such as the surfaces they clean or the accessories they're packaged with.",
        set: "Descriptions",
      },
      {
        name: "Frame Color",
        xmlName: "frameColor",
        definition:
          "The color of a frame component of the item, if it needs to be distinguished from other components. ",
        set: "Descriptions",
      },
      {
        name: "Free Quantity of Next Lower Level & UOM",
        xmlName: "promotional/freeQtyOfNextLowerLevel",
        definition:
          "The numeric quantity of free items in a combination pack. If the free quantity promotional trade item is simple or is a multi-pack, the free quantity is populated. The unit of measure must be the same as the unit of measure of the Net Content of the Child Trade Item.",
        set: "Marketing",
      },
      {
        name: "Free Quantity of Product & UOM",
        xmlName: "promotional/freeQtyOfProduct",
        definition:
          "To indicate the quantity that is free. It is needed to update the price per unit of measure as displayed on the shelves. The unit of measure must be the same as the unit of measure of the Net Content.",
        set: "Marketing",
      },
      {
        name: "Freezing Melting Point",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/freezingMeltingPoint",
        definition:
          "The temperature at which its crystals are in equilibrium with the liquid phase at atmospheric pressure.",
        set: "Components, Safety",
      },
      {
        name: "Front Face Type Code",
        xmlName: "componentInformation/tradeItemMeasurements/frontFaceTypeCode",
        definition:
          "The code used to indicate the front face of a shelf ready package (SRP) for the in-store shelf. E.g. WIDTH, LENGTH, DEPTH_OR_WIDTH).",
        set: "Components, Dimensions",
      },
      {
        name: "Fulfillment Options",
        xmlName: "disFulfillmentOptions",
        definition:
          "The attributes in this section may differ by recipient of your data. Select ALL if it does not vary; otherwise, specify the recipient of the value.",
        set: "Recipient Identification Info",
      },
      {
        name: "Full WRIN Long Description",
        xmlName: "itemDescriptionSuffix",
        definition: "Full WRIN Long Description",
        set: "Partner Specific",
      },
      {
        name: "Full WRIN Short Description",
        xmlName: "itemDescriptionPrefix",
        definition: "Full WRIN Short Description",
        set: "Partner Specific",
      },
      {
        name: "Functional Name",
        xmlName: "componentInformation/descriptionInformation/functionalName",
        definition:
          'Describes the use of the product or service by the consumer. Should help clarify the product classification associated with the GTIN (e.g., "drill", "detergent", "salad dressing")',
        set: "Components",
      },
    ],
    G: [
      {
        name: "Game Format",
        xmlName: "audioVisualMediaContentInformation/gameFormatCode",
        definition:
          "Code that identifies the electronic environment or system needed to use the electronic game.",
        set: "Media and Entertainment",
      },
      {
        name: "Generic Description",
        xmlName: "genericDescription",
        definition:
          "The generic description of the trade item. Should be provided for ethical or proprietary medicines only and is made up of the active ingredient, format and strength.",
        set: "Descriptions",
      },
      {
        name: "Genetically Modified Declaration Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/geneticallyModifiedDeclarationCode",
        definition:
          "A statement of the presence or absence of genetically modified protein or DNA.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Genetically Modified Organism",
        xmlName: "gs1FinlandGeneticallyModifiedOrganism",
        definition:
          "Description of the genetically modified organism which causes the product to be classified as being or containing a GMO.",
        set: "Processing",
      },
      {
        name: "Genus",
        xmlName: "organismClassification/genus",
        definition:
          "The scientific name of a category of biological classification immediately above the Species.\n\nUsed by the buyer and/or consumer to uniquely identify the type of product, particularly where the Product Description is not specific enough in order to comply with legal/ sanitary and phytosanitary (SPS)/ customs etc. requirements.",
        set: "Processing",
      },
      {
        name: "German Food Code And Nutrient Base",
        xmlName: "germanFoodCodeAndNutrientBase",
        definition:
          "Indication of the German Food Code and Nutrient Base that corresponds for this item.",
        set: "Nutritional",
      },
      {
        name: "GHS Classification Statement",
        xmlName: "gHSClassificationStatement",
        definition:
          "In the case of a substance or mixture, the classification which arises from the application of the classification rules. Where the supplier has notified information regarding the substance or mixture to the classification and labelling inventory.",
        set: "Identification",
      },
      {
        name: "GHS Signalwords Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/gHSDetail/gHSSignalWordsCode",
        definition:
          "Words such as DANGER or WARNING used to emphasize hazards and indicate the relative level of severity of the hazard.  For GHS hazard class ans category. Some lower level hazard categories do not use signal words.",
        set: "Components",
      },
      {
        name: "GHS Symbol Description Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/gHSDetail/gHSSymbolDescriptionCode",
        definition:
          "A code depicting the symbols which convey health, physical and environmental hazard information, assigned to a hazard class and category for example GHS. Pictograms include the harmonized hazard symbols plus other graphic elements, such as borders, background patterns or colours that are intended to convey specific information. Examples of all the pictograms and downloadable files for GHS can be accessed on the UN website for the GHS.",
        set: "Components",
      },
      {
        name: "Global Model Description",
        xmlName: "globalModelInformation/globalModelDescription",
        definition:
          "The description of the base model. May deviate from the description of Trade Items derived from this model.",
        set: "Identification",
      },
      {
        name: "Global Model Number",
        xmlName: "globalModelInformation/globalModelNumber",
        definition:
          "Text to denote the GS1 Global Model Number (GMN) which is the GS1 identification key used to identify a product model or product family based on attributes common to the model or family as defined by industry or regulation. This GS1 identification key, once assigned to one product model or product family, SHALL NOT be reissued to another. The GMN SHALL NOT be used to identify a trade item.",
        set: "Identification",
      },
      {
        name: "Global Model Regulatory Act",
        xmlName:
          "globalModelInformation/globalModelRegulatoryInformation/globalModelRegulatoryAct",
        definition:
          "The regulatory act that the Global Model Number is aligned to.",
        set: "Identification",
      },
      {
        name: "Global Product Category Attribute Type Code",
        xmlName: "gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttribute",
        definition:
          "Valid value identifying the attribute of a particular product category from GS1 Global Product Classification (GPC).",
        set: "Global",
      },
      {
        name: "Global Product Category Attribute Value Code",
        xmlName:
          "gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeValue",
        definition:
          "Valid value for the value of a brick attribute identified in Global Product Category Attribute Type Code providing the most granular level of detail about a particular product category.",
        set: "Global",
      },
      {
        name: "Global Product Category Code",
        xmlName: "globalClassificationCategory/code",
        definition:
          "Valid value used to group products based on similar characteristics according to the GS1 Global Product Classification (GPC).\n\nUsed for multiple use cases such as data quality, category management, space management and workflow routing.",
        set: "Global",
      },
      {
        name: "Goods Pick Up Lead Time",
        xmlName: "goodsPickUpLeadTime",
        definition:
          "Time (in weeks, days, hours …) required between order entry and the earliest goods release (use for pick-up, not use for delivery).",
        set: "Purchasing and Delivery",
      },
      {
        name: "GPC Brick Attribute Name",
        xmlName:
          "gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeName",
        definition: "Not UI field. Hub only.",
        set: "Global",
      },
      {
        name: "GPC Brick Attribute Value Name",
        xmlName:
          "gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeValueName",
        definition: "Not UI field. Hub only.",
        set: "Global",
      },
      {
        name: "GPC Brick Code",
        xmlName: "gpcBrickAttributes/gpcBrickCode",
        definition: "Not UI field. Hub only.",
        set: "Global",
      },
      {
        name: "GPC Category Code",
        xmlName: "componentInformation/gpcCategoryCode",
        definition:
          "Code specifying a product category according to the GS1 Global Product Classification (GPC) standard.",
        set: "Components",
      },
      {
        name: "GPC Description",
        xmlName: "globalClassificationCategory/name",
        definition: "GPC Description",
        set: "Global",
      },
      {
        name: "GRAI",
        xmlName: "packagingInformation/returnableAsset/grai",
        definition:
          "The GS1 Identification Key used to identify Returnable Assets. The key comprises a GS1 Company Prefix, Asset Type, Check Digit, and optional serial number.",
        set: "Packaging",
      },
      {
        name: "Grape Variety Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/grapeVarietyCode",
        definition:
          "The vine variety used for the production of this wine for example Merlot expressed as a code.",
        set: "Components, Ingredients",
      },
      {
        name: "Graphics",
        xmlName: "graphics",
        definition:
          "Describes the graphics on the item.  Required if graphics are used. ",
        set: "Partner Specific",
      },
      {
        name: "Gross Weight",
        xmlName:
          "componentInformation/tradeItemMeasurements/displayDimensions/grossWeight",
        definition:
          "Gross Weight includes all packaging materials of the trade item. At pallet level the trade item, Gross Weight includes the weight of the pallet itself.",
        set: "Components, Components, Dimensions, Dimensions",
      },
      {
        name: "Groupe Tarifaire",
        xmlName: "groupeTarifaire",
        definition:
          "This attribute is representative of a manufacturer portfolio segmentation, made by the supplier, for grouping products that follow the same Pricing conditions at level 1; each of those segments are given 1 unique code by Cora Belgium that will be used by Cora Belgium to retrieve the pricing structure of a new synchronised product.",
        set: "Sales",
      },
      {
        name: "Growing Method Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/growingMethodCode",
        definition:
          "The process through which fresh produce is grown and cultivated.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "GS1 Spain Active Ingredients",
        xmlName: "gs1Spain_activeIngredients",
        definition:
          "GS1 Spain specific private text for the active ingredients in medicines.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Component Quantity",
        xmlName: "gs1Spain_ComponentQuantity",
        definition:
          "GS1 Spain specific private integer for the number of units in the product's packaging.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Dangerousness Code",
        xmlName: "gs1Spain_dangerousnessCode",
        definition:
          "GS1 Spain specific private valid value for the dangerousness of the product.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Extended Description 5000",
        xmlName: "gs1Spain_ExtendedDescription5000",
        definition:
          "GS1 Spain specific private text for an extended description of the product. One instance should be in Spanish.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Family Code",
        xmlName: "gs1Spain_familyCode",
        definition:
          "GS1 Spain specific private text for the product's IMS Classification.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Free Price",
        xmlName: "gs1Spain_freePrice",
        definition:
          "GS1 Spain specific private decimal for products with free price. Free price is an specific concept related to a price that is applied in special situations. In Spain, this is also known as European price or double price.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Healthcare File Number",
        xmlName: "gs1Spain_HealthcareFileNumber",
        definition:
          "GS1 Spain specific private text the file number of product's public contest with Autonomic Health Services.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Healthcare Packaging Marks",
        xmlName: "gs1Spain_healthcarePackagingMarks",
        definition:
          "GS1 Spain specific private valid value for pakaging marks on medicines.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Healthcare Recipient Classification Number",
        xmlName: "gs1Spain_HealthcareRecipientClassificationNumber",
        definition:
          "GS1 Spain specific private integer for the healthcare recipient classification number with Autonomic Health Services. This number is assigned by each Health Service.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Is Cold Storage Required",
        xmlName: "gs1Spain_isColdStorageRequired",
        definition:
          "GS1 Spain specific private indicator if the product needs to be kept in cold storage.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Is Safety Data Sheet Required",
        xmlName: "gs1Spain_isSafetyDataSheetRequired",
        definition:
          "GS1 Spain specific private indicator if a safety dqata sheet is required for the product.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Is Trade Item A Psychotropic",
        xmlName: "gs1Spain_isTradeItemAPsychotropic",
        definition:
          "GS1 Spain specific private valid value if the product has psychotropic effects.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Is TradeItem A Narcotic",
        xmlName: "gs1Spain_isTradeItemANarcotic",
        definition:
          "GS1 Spain specific private indicator if the product has narcotic effects",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Nonfood Ingredient Statement",
        xmlName: "gs1Spain_nonfoodIngredientStatement",
        definition:
          "GS1 Spain specific private text for the ingredients used in the product.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Pharmaceutical Manufacturer Price",
        xmlName: "gs1Spain_pharmaManufPrice",
        definition:
          "GS1 Spain specific private decimal for products with regulated price",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Pharmaceutical Manufacturer Price Curr",
        xmlName: "gs1Spain_pharmaManufPrice_cur",
        definition:
          "GS1 Spain specific private currency code used for Pharmaceutical Manufacturer Price",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain RD1591_2009 Compliant",
        xmlName: "gs1Spain_RD1591_2009_compliant",
        definition:
          "GS1 Spain specific private indicator for if Section 13 Annex 1 RD 1591/2009 regulation for health products is applicable to the product.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Ready for Unidose",
        xmlName: "gs1Spain_ReadyforUnidose",
        definition:
          "GS1 Spain specific private indicator if the product come in a unidose blister.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Reimbursement Amount Type",
        xmlName: "gs1Spain_reimbursementAmountType",
        definition:
          "GS1 Spain specific private valid value for the type of reimbursement amount is available for the product. ",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Spain Therapy Group",
        xmlName: "gs1Spain_therapyGroup",
        definition:
          "GS1 Spain specific private text for the product's ATC Classification.",
        set: "Recipient Identification Info",
      },
      {
        name: "GS1 Standardized File Name",
        xmlName: "dam/a1c1FileName",
        definition:
          "Generated for your convenience, recipients will leverage this (A1C1) name to quickly identify your digital assets. This attribute is powered by the population of each of the following attributes: Type of Information, Image Facing, Image Background, and File Pixel Width/Height.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "GST/HST Applicable?",
        xmlName: "gSTHSTApplicable",
        definition:
          "Indicates whether or not GST/HST taxes are applicable to the product at point of sale to the consumer.",
        set: "Taxation",
      },
      {
        name: "GTIN Direct Shippable",
        xmlName: "isTradeItemDirectShippable",
        definition:
          "A Boolean (true/false or 1/0) attribute indicating whether or not this item is able to be shipped directly from the supplier to the consumer.",
        set: "Purchasing and Delivery",
      },
      {
        name: "GTIN for Point of Sale",
        xmlName: "gs1TradeItemIdentificationKey/value",
        definition:
          "The GTIN value used at point of sale.\n\nUsed to identify the GTIN value that will be used for the product at point of sale. Used in conjunction with GTIN for Point of Sale Type Code",
        set: "Identification",
      },
      {
        name: "GTIN for Point of Sale Type Code",
        xmlName: "gs1TradeItemIdentificationKey/code",
        definition:
          "Valid value used to communicate the type of GTIN for scanning at point of sale.\n\nUsed to identify the type of GTIN that will be used for the product at point of sale. Used in conjunction with GTIN for Point of Sale",
        set: "Identification",
      },
      {
        name: "GTIN Of Base Unit",
        xmlName: "gTINOfBaseUnit",
        definition:
          "A reference to the GTIN of the lowest level of product contained within this product's family hierarchy.",
        set: "Hierarchy Info",
      },
    ],
    H: [
      {
        name: "Hair Product Function or Treatment Code",
        xmlName:
          "productInformationDetail/beautyPersonalCareHygieneDetail/hairProductInformation/hairProductFunctionOrTreatmentCode",
        definition:
          "Indicates, with reference to the hair product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify different functions of the product and other treatments.",
        set: "Descriptions",
      },
      {
        name: "Handling Instruction",
        xmlName: "handlingInstruction",
        definition: "Handling Instructions",
        set: "Handling and Storage",
      },
      {
        name: "Handling Instructions Code Agency",
        xmlName: "handlingInstructions/handlingInstructionCodeAgency",
        definition:
          "An agency that maintains the handling instructions code. NOTE: This attribute is intended to be used with the handling instructions code.",
        set: "Handling and Storage",
      },
      {
        name: "Handling Instructions Description",
        xmlName: "handlingInstructionsDescription",
        definition:
          "Information and processes needed to safely handle the trade item. Intended to be sent when handling Instructions Code and agency have not been provided.",
        set: "Handling and Storage",
      },
      {
        name: "Has Auto Reader Tracker?",
        xmlName: "doesTradeItemHaveAutoReaderTracker",
        definition:
          "Indication that the trade item has a device that identifies that the product has a limited number of reuses and is self tracked.",
        set: "Handling and Storage",
      },
      {
        name: "Has Display Ready Packaging?",
        xmlName: "hasDisplayReadyPackaging",
        definition:
          "Indicates that the Trade Item has Display Ready Packaging (also referred to as Shelf Ready Packaging or Retail Ready Packaging). Display Ready Packaging can be exhibited on the floor, a shelf or other location. It may or may not require some modification e.g. to raise a flap. If modifications are necessary, the measurements would be advised for the trade item as prepared for display.",
        set: "Packaging",
      },
      {
        name: "Has Memory Card Slot",
        xmlName: "hasMemoryCardSlot",
        definition:
          "Indicator to denote the product contains a memory card slot. Memory card slots are used primarily to add storage memory to a product. ",
        set: "Recipient Identification Info",
      },
      {
        name: "Has Remote Control",
        xmlName: "hasRemoteControl",
        definition:
          "Indicator to denote if the item has a device allowing for remotely controlling its functions.",
        set: "Recipient Identification Info",
      },
      {
        name: "Hazard Statement Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsCode",
        definition:
          "Standard phrases assigned to a hazard class and category that describe the nature of the hazard for example H200.",
        set: "Components",
      },
      {
        name: "Hazard Statement Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsDescription",
        definition:
          "A description of standard phrases assigned to a hazard class and category that describe the nature of the hazard. ",
        set: "Components",
      },
      {
        name: "Hazardous Material Handling Procedure",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousMaterialsHandlingProcedures",
        definition:
          "Hazardous materials handling procedures are a description of how the product should be handled in relation to potential hazardous materials",
        set: "Components, Safety",
      },
      {
        name: "Hazardous Statements Code",
        xmlName:
          "safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsCode",
        definition:
          "Valid value (also known as H code) for the standard phrase describing the nature of a hazard class and category. \n\nUsed to identify the standard phrases describing the nature of a hazard class and category.",
        set: "Safety",
      },
      {
        name: "Hazardous Statements Description",
        xmlName:
          "safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsDescription",
        definition:
          "The description of the standard phrase (also known as H statement) assigned to a hazard class and category that describes the nature of the hazard. \n\nUsed to describe the standard phrases describing the nature of a hazard class and category.",
        set: "Safety",
      },
      {
        name: "Hazardous Symbol Description Code",
        xmlName: "safetyDataSheetInformation/gHSDetail/gHSSymbolDescriptionCode",
        definition:
          "Valid value for the Globally Harmonized System (GHS) identifying the symbols or pictograms for a hazardous product. \n\nUsed to alert users of the chemical hazards to which they may be exposed during storage or handling of a dangerous good.",
        set: "Safety",
      },
      {
        name: "Hazardous Waste Agency",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteAgency",
        definition:
          "The Agency for the Classification of Hazardous Waste. The specific hazardous waste code for the federal or state regulation that applies to the product for example US EPA.",
        set: "Components, Safety",
      },
      {
        name: "Hazardous Waste Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteCode",
        definition:
          "A classification of hazardous waste managed at the federal or state level for example EPA Hazardous Waste Code of D001 (Ignitable waste).",
        set: "Components, Safety",
      },
      {
        name: "Hazardous Waste Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteDescription",
        definition:
          "A description of the classification of hazardous waste managed at the federal or state level for example EPA Hazardous Waste Code of D001 ( Ignitable waste). ",
        set: "Components, Safety",
      },
      {
        name: "Hazmat Classification",
        xmlName: "hazardousMaterialClassification",
        definition:
          "Valid Value to denote the level of HazMat information required for the product. For example: MSDS_AND_NOT_REGULATED_BY_DOT_(CFR49), or NO_MSDS_AND_NOT_REGULATED_BY_DOT_(CFR49)",
        set: "Partner Specific",
      },
      {
        name: "Height",
        xmlName: "componentInformation/tradeItemMeasurements/height",
        definition:
          "The height of the unit load, as measured according to the GS1 Package Measurement Rules, including the shipping platform unless it is excluded according to the Pallet Type Code chosen.",
        set: "Components, Dimensions",
      },
      {
        name: "Homogenized Indicator",
        xmlName: "isHomogenised",
        definition:
          "The indicator specifying whether or not the milk used is homogenized. The homogenization of milk is a technical process in the dairy business. The milk fat is milled to such an extent that further creaming is prevented.\n\nUsed by the buyer for assortment planning. Used by the consumer for search and discovery.",
        set: "Ingredients",
      },
      {
        name: "Household Cleaning Product Type Code",
        xmlName:
          "productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/householdCleaningProductTypeCode",
        definition:
          "A code to differentiate household cleaning products from one another. The codes include, but are not limited to, the room the product is to be used in, the surfaces it's intended to clean, or the type of substance the product is meant to eliminate. ",
        set: "Descriptions",
      },
      {
        name: "Humidity Qualifier Code",
        xmlName: "tradeItemHumidityInformation/humidityQualifierCode",
        definition:
          "Code qualifying the type of a temperature for example STORAGE.",
        set: "Handling and Storage",
      },
    ],
    I: [
      {
        name: "Identification Scheme Agency Code",
        xmlName:
          "packagingInformation/packagedeposit/identificationSchemeAgencyCode",
        definition:
          "This attribute is the agency which manages the deposit code for a returnable package on which a depost is charged. ",
        set: "Packaging, Packaging",
      },
      {
        name: "Image Background",
        xmlName: "dam/general/imageBackground",
        definition: "Indicates the background composition of an image.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Image Facing",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/imageFacing",
        definition:
          "﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.)",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Image Orientation Type Code",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/imageOrientationTypeCode",
        definition:
          "﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Image Rendered Indicator",
        xmlName: "dam/general/isImageRendered",
        definition:
          "The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Image Source",
        xmlName: "dam/general/imageSource",
        definition:
          "Identify the source of which company provided the image url.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Image State Code",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/imageStateCode",
        definition:
          "The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.)",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Imitation Or Substitute For",
        xmlName:
          "componentInformation/marketingInformation/imitationOrSubstituteFor",
        definition:
          "The name of the imitated or substitute product. Example: The GTIN product name is Ketchup type sauce, this value would be Ketchup.",
        set: "Components, Indicators",
      },
      {
        name: "Import Classification Region Of Origin",
        xmlName:
          "importClassification/importClassificationCountrySubdivisionRegionOfOrigin",
        definition:
          "Specifies the region of origin of the trade item as part of import classification. This is required by Intrastat. This is a region and not a country, uses ISO3166-2",
        set: "Processing",
      },
      {
        name: "Incentive Unit Basis Trade Item Information",
        xmlName: "incentiveUnitBasisInformation",
        definition: "Incentive Unit Basis Trade Item Information",
        set: "Sales",
      },
      {
        name: "Incoterm Code",
        xmlName: "incotermInformation/incotermCode",
        definition:
          "Incoterms is an abbreviation for International Commercial Terms. The International Chamber of Commerce created and manages the Incoterms and their definitions. There are 13 available for use in the buyer-seller contractual agreements.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Incoterm Code Location",
        xmlName: "incotermInformation/incotermCodeLocation",
        definition: "A description of the location required by an Incoterm.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Incoterm Country Code",
        xmlName: "incotermInformation/incotermCountryCode",
        definition: "The ISO country code in which the incoterm event occurs.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Individual Unit Max",
        xmlName: "componentInformation/tradeItemMeasurements/individualUnitMax",
        definition:
          "Maximum size of the individual unit inside the lowest level of packaging.",
        set: "Components, Dimensions",
      },
      {
        name: "Individual Unit Min",
        xmlName: "componentInformation/tradeItemMeasurements/individualUnitMin",
        definition:
          "Minimum size of the individual unit inside the lowest level of packaging.",
        set: "Components, Dimensions",
      },
      {
        name: "Industry Specific Packaging Type Code",
        xmlName:
          "packagingInformation/industrySpecificPackagingTypeCodeReference/code",
        definition:
          "A code describing packaging types specific to an industry for example alcoholic beverages. This attribute is populated using a Local Code List (LCL). Example: Growler a jug type used in the alcohol beer industry.",
        set: "Packaging",
      },
      {
        name: "Industry Specific Packaging Type Code Description",
        xmlName:
          "packagingInformation/industrySpecificPackagingTypeCodeReference/codeDescription",
        definition:
          "The description for Industry Specific Packaging Type Code Reference",
        set: "Packaging",
      },
      {
        name: "Industry Specific Packaging Type Code List Agency Code",
        xmlName:
          "packagingInformation/industrySpecificPackagingTypeCodeReference/codeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Packaging",
      },
      {
        name: "Industry Specific Packaging Type Code List Agency Name",
        xmlName:
          "packagingInformation/industrySpecificPackagingTypeCodeReference/codeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Packaging",
      },
      {
        name: "Industry Specific Packaging Type Code List Name",
        xmlName:
          "packagingInformation/industrySpecificPackagingTypeCodeReference/codeListName",
        definition: "The name of the codelist.",
        set: "Packaging",
      },
      {
        name: "Industry Specific Packaging Type Code List URI",
        xmlName:
          "packagingInformation/industrySpecificPackagingTypeCodeReference/codeListURI",
        definition: "The URI for the codelist.",
        set: "Packaging",
      },
      {
        name: "Information Provider Additional Trade Item Identification Type",
        xmlName:
          "informationProviderAdditionalTradeItemIdentification/informationProviderAdditionalIdType",
        definition:
          "Alternative means to the Global Trade Item Number to identify a trade item. ",
        set: "Identification",
      },
      {
        name: "Information Provider Additional Trade Item Identification Value",
        xmlName:
          "informationProviderAdditionalTradeItemIdentification/informationProviderAdditionalIdValue",
        definition:
          "Type of the identification system that is being used as an alternative to the Global Trade Item Number.",
        set: "Identification",
      },
      {
        name: "Information Provider Address",
        xmlName: "informationProviderAddress",
        definition:
          "The address associated with the party. This could be the full company address.",
        set: "Identification",
      },
      {
        name: "Information Provider GLN",
        xmlName: "informationProviderGLN",
        definition:
          "Populate this field with the GLN of the entity responsible for the validity of the item information entered into 1WorldSync Item Management. The original manufacturer, importer, distributor, retailer, or designated agent. IP Name will default in the GUI as a result of the GLN provided.",
        set: "Global",
      },
      {
        name: "Information Provider Language Specific Party Name",
        xmlName: "informationProviderLanguageSpecificPartyName",
        definition:
          "The recognisable party name used by a supplier to uniquely identify the name of the party in a different language than the primary party name (partyName).",
        set: "Identification, Identification, Identification",
      },
      {
        name: "Information Provider Name",
        xmlName: "informationProviderName\n(Data Recipient 1WorldSync XML Only)",
        definition:
          "Name of the party who provides the trade item information to Transora Item Management.",
        set: "Global",
      },
      {
        name: "Ingredient",
        xmlName: "foodAndBevIngredient/ingredientName",
        definition:
          "A single ingredient or a complex ingredient that is taken from the Ingredient Statement.\n\nUsed by the buyer, in conjunction with the Ingredient Sequence on Package, to digitally recreate the list of ingredients in the correct sequence.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Claim",
        xmlName: "ingredientClaim",
        definition:
          "A claim that advertises the lack or presence of ingredients for the purpose of sellability.",
        set: "Food and Beverage",
      },
      {
        name: "Ingredient Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientCode/code",
        definition:
          "The code indicating an ingredient (according to regulations of the target market). Select values from the GS1 code list IngredientCode_GDSN, which is based on an extract of the Codex Alimentarius international food standard developed jointly by the Food and Agriculture Organization (FAO) of the United Nations and World Health Organization (WHO).",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Code Description",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientCode/codeDescription",
        definition: "A description for the code value provided.",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Content Percentage Measurement Precision Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientContentPercentageMeasurementPrecisionCode",
        definition:
          "The measurement precision qualifying the ingredient content percentage for example LESS_THAN.",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Country Of Origin",
        xmlName:
          "foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countryCode",
        definition:
          "The country code (codes) indicating the country of origin of the ingredient.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Country of Origin Statement",
        xmlName:
          "foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOriginStatement",
        definition:
          "A description of the geographic area the item may have originated from or has been processed. Allows for the representation of the same value in different languages.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Declarations Indicator",
        xmlName: "isIngredientRelevantDataProvided",
        definition:
          "Indicator to confirm the relevant ingredient data provided for the product is complete.\n\nUsed by the seller to inform the buyer that the relevant ingredient list is confirmed as complete.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Definition",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientDefinition",
        definition:
          "Plain language definitions of ingredients which are consumer friendly.",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientName",
        definition:
          "Text field indicating one ingredient or ingredient group (according to regulations of the target market). Ingredients include any additives (colourings, preservatives, e-numbers, etc) that are encompassed.",
        set: "Components",
      },
      {
        name: "Ingredient of Concern Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/ingredientOfConcernCode",
        definition:
          "Indicates a claim to an ingredient, considered to be a concern for regulatory or other reasons, and which is “contained” within the trade item but may not need to specify the amount whether approximate, or an accurate measurement be given. Datatype codelist IngredientOfConcernCode, values: IODISED_SALT, RAW_MILK",
        set: "Components",
      },
      {
        name: "Ingredient Of Concern Code",
        xmlName: "ingredientOfConcernCode",
        definition:
          "Indicates a claim to an ingredient, considered to be a concern for regulatory or other reasons, and which is “contained” within the trade item but may not need to specify the amount whether approximate, or an accurate measurement be given. Datatype codelist IngredientOfConcernCode, values: IODISED_SALT, RAW_MILK",
        set: "Ingredients",
      },
      {
        name: "Ingredient Provenance Statement",
        xmlName:
          "foodAndBevIngredient/ingredientPlaceOfActivity/provenanceStatement",
        definition:
          "The place a trade item originates from. This is to be specifically used to enable things such as cities, mountain ranges, regions that do not comply with ISO standards.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Purpose",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPurpose",
        definition:
          "A description of the primary purpose that an ingredient serves for example a colouring in the case of annatto in a cheese rind.",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Relevant Data Provided?",
        xmlName: "ingredientRelevantDataProvided",
        definition:
          "Ingredient Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  All values not populated are not relevant or not required to be populated on the product label by local regulations.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Sequence",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientSequence",
        definition:
          "A text sequence (01, 02, 03, sub-ingredients 01.01, 01.02,01.03...) indicating the ingredient order by content percentage of the product. (major ingredient = 01, second ingredient = 02, Second Ingredient Sub-Ingredient 02.01, Second Ingredient second Sub-Ingredient 02.02) etc. ",
        set: "Components",
      },
      {
        name: "Ingredient Sequence on Package",
        xmlName: "foodAndBevIngredient/ingredientSequence",
        definition:
          "The incremental value (01, 02, 03…) indicating the order of ingredients listed on the package.\n\nUsed by the buyer to digitally recreate the list of ingredients in the correct sequence.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Source Animal Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/sourceAnimalCode",
        definition:
          "The source of raw material used to produce the food product for example a goat for milk. ",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Statement",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/ingredientStatement/statement",
        definition:
          "Information on the constituent ingredient make up of the product specified as one string.",
        set: "Components, Ingredients",
      },
      {
        name: "Ingredient Statement Formatting Pattern",
        xmlName: "ingredientStatementFormattingPattern",
        definition:
          "the formatting pattern of text for ingredient statement to generically emphasize a word or set of words and to denote a paragraph break. It will be up to the recipient to determine the formatting style they will use for the emphasized text.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Strength",
        xmlName: "nonfoodIngredient/ingredientStrength/ingredientStrength",
        definition:
          "Used to define the strength of each ingredient in a trade item or unit volume of non food and beverage the trade items.",
        set: "Ingredients",
      },
      {
        name: "Ingredient Strength Basis",
        xmlName: "nonfoodIngredient/ingredientStrength/ingredientStrengthBasis",
        definition:
          "The basis amount for an ingredient strength for example 1000 millilitres in the case of 400 milligrams per 1000 millilitres.",
        set: "Ingredients",
      },
      {
        name: "Inner Pack",
        xmlName: "innerPack",
        definition:
          "Indicates the number of non-GTIN assigned inner-packs of next lower level trade items within the current GTIN level.",
        set: "Hierarchy Info",
      },
      {
        name: "INSTANT(U78)",
        xmlName: "U78",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "Intended Publication Country",
        xmlName: "dam/general/intendedPublicationCountry",
        definition:
          "The country/countries in which the digital asset is designed to be used.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Intended Publication Media Type Description",
        xmlName: "dam/description/intendedPublicationMediaTypeDescription",
        definition:
          "The media Types with which the digital asset was designed to be utilized, such as Web, Catalogue, circular among others.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Interpretive Term Optional Nutrient",
        xmlName: "interpretiveTermOptionalNutrient",
        definition:
          "The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.",
        set: "Nutritional",
      },
      {
        name: "Interpretive Term Saturated Fat",
        xmlName: "interpretiveTermSaturatedFat",
        definition:
          "The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.",
        set: "Nutritional",
      },
      {
        name: "Interpretive Term Sodium",
        xmlName: "interpretiveTermSodium",
        definition:
          "The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.",
        set: "Nutritional",
      },
      {
        name: "Interpretive Term Sugars",
        xmlName: "interpretiveTermSugars",
        definition:
          "The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.",
        set: "Nutritional",
      },
      {
        name: "Invoice Name",
        xmlName: "componentInformation/descriptionInformation/invoiceName",
        definition:
          "Free form information provider assigned trade item description designed to match trade item/service description as noted on invoices.",
        set: "Components, Descriptions",
      },
      {
        name: "Invoice Unit Indicator",
        xmlName: "isInvoiceUnit",
        definition:
          'Would a billing statement or Invoice include this Product/Packaging Level? If so, select "True."   \n\nWe realize that you may have different standards of doing business per Recipient. Feel free to assign different Invoice Units per Recipient based on your preference. \n\nFor example, allow your most common answer (i.e. true) to use our system default of "ALL," while selecting the Recipient exceptions to receive a different value (i.e. false). ',
        set: "Indicators",
      },
      {
        name: "Irradiated Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/irradiatedCode",
        definition: "Indicates if radiation has been applied.",
        set: "Components, Components",
      },
      {
        name: "Irregularly Configured Pallet Indicator",
        xmlName: "isTradeItemPackedIrregularly",
        definition:
          "The indicator specifying that a pallet does not have a consistent numbers of items per layer configuration of items across layers.\n\nUsed by the buyer in the calculation of the number of units per layer and number of layers per pallet.",
        set: "Hierarchy Info",
      },
      {
        name: "Is Acutely Hazardous Waste",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousWasteInformation/isAcutelyHazardousWaste",
        definition:
          "An indicator whether or not the trade Item contains waste that would cause death, disabling personal injury, or serious illness. This wastes are more hazardous than ordinary hazardous wastes.",
        set: "Components, Safety",
      },
      {
        name: "Is Anchor Image?",
        xmlName: "dam/spinInformation/isAnchorImage",
        definition: "Image that is used as a starting image for the Spin.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Is Assortment?",
        xmlName: "isAssortment",
        definition:
          "Indicator the item contains an assortment of products. An assortment would be different products packaged together, such as different flavors, scents, and/or formulas.",
        set: "Indicators",
      },
      {
        name: "Is Bar Code ID Different Than Packaging?",
        xmlName: "isBarCodeIdDifferentThanPackaging",
        definition:
          "An indicator that signals the bar code identifier on the trade item package is the same as the trade item identifier used in GDSN.",
        set: "Packaging",
      },
      {
        name: "Is Bar Code On Packaging Variable Measure Bar Code?",
        xmlName:
          "gs1TradeItemIdentificationKey/isBarCodeOnPkgVariableMeasureBarCode",
        definition:
          "An indicator that signals the bar code carries a variable measure trade item identification scheme (EAN/UCC-13 data structure with EAN/UCC Prefix 2n or UCC-12 data structure with UCC Prefix 2).",
        set: "Identification",
      },
      {
        name: "Is Barcode Symbology Derivable?",
        xmlName: "gs1TradeItemIdentificationKey/isBarcodeSymbologyDerivable",
        definition:
          "A boolean field determining that the data structure on the trade item can be derived from the GTIN.",
        set: "Identification",
      },
      {
        name: "Is Bioengineered Declaration Claim Relevant Data Provided",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/isBioengineeredDeclarationClaimRelevantDataProvided",
        definition:
          "All Bioengineered Declaration Claim Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  values not populated are not relevant or not required to be populated on the product label by local regulations.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Is Cask Strength?",
        xmlName: "isCaskStrength",
        definition:
          "Indication the alcohol beverage has not been cut, typically with water, after maturation. The resulting product has the same alcohol content as when it was removed from the maturation cask/barrel.",
        set: "Liquor",
      },
      {
        name: "Is CDS applicable to Trade Item?",
        xmlName: "isTradeItemCDSApplicable",
        definition:
          "Indicator the Container Deposit Scheme (CDS) is applicable to this item. ",
        set: "Recipient Identification Info",
      },
      {
        name: "Is Certificate Required?",
        xmlName:
          "componentInformation/certificationInformation/isCertificateRequired",
        definition:
          "Determines whether a specific certificate is required by regulation or legal property.",
        set: "Components, Components, Food and Beverage, Licensing and Certification",
      },
      {
        name: "Is Chemical Regulation Compliant",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/isChemicalRegulationCompliant",
        definition:
          "Determines whether or not a chemical is compliant with a specific regulation (driven by chemicalRegulationName).",
        set: "Components, Regulatory",
      },
      {
        name: "Is Claim Regulated",
        xmlName:
          "componentInformation/productInformationDetail/claimDetail/isClaimRegulated",
        definition:
          "The indicator that specifies whether the claim for the product is regulated for a target market.",
        set: "Components, Descriptions",
      },
      {
        name: "Is Communication Channel Preferred?",
        xmlName:
          "globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/isCommunicationChannelPreferred",
        definition:
          "To show whether this is the preferred contact method by the supplier when there is more than one means of contact.",
        set: "Identification, Identification",
      },
      {
        name: "Is Custom Label?",
        xmlName: "isCustomLabel",
        definition: "Indicates if the product is custom label.",
        set: "Indicators",
      },
      {
        name: "Is Data Quality Dummy?",
        xmlName: "isDataQualityDummy",
        definition: "GS1 Denmark indicator for the data quality dummy.",
        set: "Indicators",
      },
      {
        name: "Is Data Quality Verified?",
        xmlName: "isDataQualityVerified",
        definition: "GS1 Denmark indicator for the data quality verified.",
        set: "Indicators",
      },
      {
        name: "Is Diet Type Marked On Package?",
        xmlName:
          "componentInformation/dietInformation/foodAndBevDietTypeInfo/isDietTypeMarkedOnPackage",
        definition:
          "Is the diet type specified by dietTypeCode (and sometimes dietTypeSubcode) labelled on the product package?",
        set: "Components, Food and Beverage",
      },
      {
        name: "Is Digital Download Available?",
        xmlName: "audioVisualMediaContentInformation/isDigitalDownloadAvailable",
        definition:
          "Indicates if the title is available in the digital download format.",
        set: "Media and Entertainment",
      },
      {
        name: "Is Discounting Illegal In Target Market",
        xmlName:
          "targetMarketDiscountRestrictions/isDiscountingIllegalInTargetMarket",
        definition:
          "An indicator whether or not the product is not legal to discount within a given target market (i.e. the product is subject to government regulation regarding either price floors or pricing practices).",
        set: "Sales",
      },
      {
        name: "Is Discounting Illegal?",
        xmlName: "isDiscountingIllegal",
        definition:
          "An indicator whether or not the product is not legal to discount within a given target market",
        set: "Sales",
      },
      {
        name: "Is Disposable",
        xmlName: "isDisposable",
        definition: "Indicates the item is intended for single use.",
        set: "Disposal",
      },
      {
        name: "Is Distribution Method Primary?",
        xmlName: "distributionDetails/isDistributionMethodPrimary",
        definition:
          "Indicates if the delivery method for the trade item is the primary one.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Is Electrical",
        xmlName: "isElectrical",
        definition:
          "Indicator to denote if the item is an electric or electronic device. Electronic is defined as item of merchandise containing a circuit board and/or electrical wiring, including but not limited to any item of merchandise with a screen.",
        set: "Indicators",
      },
      {
        name: "Is File Background Transparent",
        xmlName: "dam/imageInfo/isFileBackgroundTransparent",
        definition:
          "An indicator of whether or not the background used in the file is transparent.  Having a transparent background would allow a recipient to place the file into any setting necessary.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Is File For Internal Use Only",
        xmlName: "dam/general/isFileForInternalUseOnly",
        definition:
          "An indicator whether or not the file is intended for internal use only and not for general publication.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Is Fragile",
        xmlName: "isFragile",
        definition:
          "Indicator to denote the product is fragile and should be handed with care.",
        set: "Handling and Storage",
      },
      {
        name: "Is Graded Before Preparation Type Applied",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/isGradedBeforePreparationTypeApplied",
        definition:
          "An indicator specifying that a product is graded prior to a manufacturer applying a preparation method.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Is Hazardous Component Brokendown Easily for Recycling?",
        xmlName: "areHazardousComponentsRemovable",
        definition:
          "Indicates whether or not any hazardous components can be easily seperated from the other materials to facilitate product recycling.",
        set: "Disposal",
      },
      {
        name: "Is Image Rendered",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/isImageRendered",
        definition:
          "The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ",
        set: "Components, Components, Components, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Is Imitation Or Substitute",
        xmlName:
          "componentInformation/marketingInformation/isImitationOrSubstitute",
        definition:
          "Determines whether the trade item is an imitation or substitute product resembling the real product for example imitation eggs or milk substitute non-dairy.",
        set: "Components, Indicators",
      },
      {
        name: "Is Ingredient Emphasised",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/isIngredientEmphasised",
        definition:
          "Denotes the ingredient that should have it's text emphasised",
        set: "Components, Ingredients",
      },
      {
        name: "Is Ingredient Generic",
        xmlName: "nonfoodIngredient/isIngredientGeneric",
        definition:
          "Determines whether the ingredient is classified as being generic.",
        set: "Ingredients",
      },
      {
        name: "Is Ingredient in Variable Proportions?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsingredientInVariableProportions",
        definition:
          "Is the Ingredient part of a mixture of mixed fruit, nuts or vegetables where no particular fruit, nut or vegetable predominates significantly with respect to mass? ",
        set: "Ingredients",
      },
      {
        name: "Is Ingredient Irradiated?",
        xmlName:
          "foodAndBevIngredient/ingredientFarmingProcessing/irradiatedCode",
        definition:
          "Refer to IM Participant Dictionary for more information regarding this field.",
        set: "Ingredients, Ingredients",
      },
      {
        name: "Is Ingredient Non-Vegetable?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientNonVegetable",
        definition: "Derived from non-vegetarian origin.",
        set: "Ingredients",
      },
      {
        name: "Is Ingredient Reconstituted?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientReconstituted",
        definition:
          "Was the ingredient restored or partially restored  to its former or natural state, as by e.g. the addition of water to the concentrate or dehydrated ingredient?",
        set: "Ingredients",
      },
      {
        name: "Is Ingredient Relevant Data Provided?",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/isIngredientRelevantDataProvided",
        definition:
          "A flag indicating that all of the relevant or required ingredient information has been provided.",
        set: "Components",
      },
      {
        name: "Is Ingredient Seasonal?",
        xmlName:
          "foodAndBevIngredient/saIngredientInformation/saIsIngredientSeasonal",
        definition: "Ingredient only seasonally available.",
        set: "Ingredients",
      },
      {
        name: "Is Item a PrePacked Food Additive?",
        xmlName: "isTradeItemPrePackedFoodAdditive",
        definition: "Is the Item a pre-packed food additive?",
        set: "Ingredients",
      },
      {
        name: "Is Item Cross Contaminated?",
        xmlName: "isTradeItemCrossContaminated",
        definition:
          "Means the presence of any common allergen not intentionally added to a foodstuff, which is present in such foodstuff as a result of the cultivation, production, manufacturing, processing, preparation, treatment, packing, packaging, transport or holding of such foodstuff or as a result of environmental contamination",
        set: "Allergen",
      },
      {
        name: "Is Item Hypo-Allergenic?",
        xmlName: "isItemHypoallergenic",
        definition:
          "Has the quantity of endogenous allergens in the item been reduced in such a way that it is not possible to detect the presence of any possible allergen with testing suitable for the specific allergen OR has the item been tested to confirm the absence of the particular allergen(s0, using suitable testing for the specific allergen(s).",
        set: "Allergen",
      },
      {
        name: "Is Item Previously Frozen",
        xmlName: "isTradeItemPreviouslyFrozen",
        definition:
          "Has the item been frozen and then thawed for subsequent sale?",
        set: "Food and Beverage",
      },
      {
        name: "Is Item Wild Caught?",
        xmlName: "isTradeItemWildCaught",
        definition:
          'Misleading descriptions - fish  and  other  marine  foodstuffs  that  are  regulated  in  terms  of  the National Regulator for Compulsory Specifications Act,  2008  (Act 5 of 2008),  the statement "wild" shall not be permitted unless  it is qualified as "wild caught". ',
        set: "Food and Beverage",
      },
      {
        name: "Is Licensed Product",
        xmlName: "isLicensedProduct",
        definition:
          "Indicator to denote the item has a license associated with it. A license allows the product to bear images, designs, or other notations to another brand's intellectual property or trademarks. For example, if the product has a license with Disney allowing the product to bear the image of Mickey Mouse, then this indicator would be true.",
        set: "Recipient Identification Info",
      },
      {
        name: "Is Limited Edition",
        xmlName: "isLimitedEdition",
        definition:
          "Indicator to denote the  product is a limited edition. Limited editions have small production sizes, or have a special marking, autograph or other characteristic which differentiate it from a full large scale production run of the same or similar products.",
        set: "Marketing",
      },
      {
        name: "Is Non-GTIN Logistic Unit Packed Irregularly?",
        xmlName: "isNonGTINLogisticUnitPackedIrregularly",
        definition:
          "Indicates that the item is packed in a non-rectilinear pattern. ",
        set: "Hierarchy Info",
      },
      {
        name: "Is Nutrient On Front Of Package",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/isNutrientOnFrontOfPackage",
        definition:
          "Indication the nutrient is listed on the front of package as a additional consumer declaration to the traditional nutritional fact panel.",
        set: "Components, Nutritional",
      },
      {
        name: "Is One Time Buy?",
        xmlName: "isOneTimeBuy",
        definition:
          "An indicator whether or not the item will only be available for order once then discontinued.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Is Organism Code Probiotic?",
        xmlName: "isOrganismCodeProbiotic",
        definition: "To indicate the value of probiotics",
        set: "Food and Beverage",
      },
      {
        name: "Is Packaging Exempt From Refuse Obligation",
        xmlName: "packagingInformation/isPackagingExemptFromRefuseObligation",
        definition:
          "Indication for the packaging of this item that there exists an exemption from refuse (disposal) obligations.",
        set: "Packaging",
      },
      {
        name: "Is Packaging Labelled With Drug Facts",
        xmlName: "isPackagingLabelledWithDrugFacts",
        definition:
          "Indicates if the item has drug facts labeling. A drug fact panel of the trade item is a label usually contains such items as active ingredients, uses, warnings, purpose, directions, etc.",
        set: "Packaging",
      },
      {
        name: "Is Packaging Labelled With Supplements",
        xmlName: "isPackagingLabelledWithSupplements",
        definition:
          "Indicator to denote the item is required to bear a Supplement Facts Panel which provides details about the nutrients and ingredients contain in the item.",
        set: "Packaging",
      },
      {
        name: "Is Packaging Marked With Regulatory Compliance",
        xmlName:
          "regulatoryInformation/isPackagingMarkedWithRegulatoryCompliance",
        definition:
          "Indicator of whether the packaging is marked with a regulatory compliance code.",
        set: "Regulatory",
      },
      {
        name: "Is Packaging Material Recoverable",
        xmlName:
          "packagingInformation/packagingMaterial/isPackagingMaterialRecoverable",
        definition:
          "Determines whether packaging material is recoverable.Recoverable materials are those which are capable of beingreused or returned to use in the form of raw materials",
        set: "Packaging",
      },
      {
        name: "Is Packaging Returnable?",
        xmlName: "packagingInformation/isPackagingReturnable",
        definition:
          "Trade item has returnable packaging. True equals package can be returned. This attribute applies to returnable packaging with or without deposit.",
        set: "Packaging",
      },
      {
        name: "Is Packaging Suitable For Air Shipment",
        xmlName: "packagingInformation/isPackagingSuitableForAirShipment",
        definition:
          "Determines whether or not the packaging is suitable for air shipment for passenger or cargo for example has it been air pressure tested. ",
        set: "Packaging",
      },
      {
        name: "Is Parfocal",
        xmlName: "isParfocal",
        definition:
          "Indicator to denote the product has a lens that stays in focus when magnification/focal length is changed. For example, a microscope which stays in focus when the microscope objective is rotated.",
        set: "Recipient Identification Info",
      },
      {
        name: "is PreCleaning Necessary",
        xmlName: "cleaningDisinfectingInformation/isPreCleaningNecessary",
        definition:
          "﻿The indicator that specifies whether pre-cleaning of the product is required before cleaning and disinfection.",
        set: "Finished Goods Instructions",
      },
      {
        name: "Is Preorder",
        xmlName: "canItemBePreordered",
        definition:
          "Is this item available for pre-order? If selected, additional information will need to be provided to properly set up the pre-order.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Is Price Indicated on Trade Item?",
        xmlName: "isPriceIndicatedOnTradeItem",
        definition:
          "Indication whether the retail price is printed human readble on the trade item.",
        set: "Packaging",
      },
      {
        name: "Is Primary File",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/isPrimaryFile",
        definition:
          "Indicates whether a URL for the specified referenced file type links to the primary file that should be used.",
        set: "Components, Components, Components, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Is Primary Material",
        xmlName: "packagingInformation/packagingMaterial/isPrimaryMaterial",
        definition:
          "Specifies the primary or majority material in a composite material used for packaging.",
        set: "Packaging",
      },
      {
        name: "Is Private",
        xmlName: "isPrivate",
        definition:
          "Indicator to qualify whether master data is publicly available to any inquirer or is restricted to a specific private user.",
        set: "Indicators",
      },
      {
        name: "Is Product Classified As Non Hazardous",
        xmlName:
          "componentInformation/safetyDataSheetInformation/isProductClassifiedAsNonHazardous",
        definition:
          "Indication that the product is classified, on its own or when aggregated, as non-hazardous waste according to EPA’s Resource Conservation and Control ACT (RCRA) when disposed. Under RCRA (40 CFR 261.31-33) hazardous wastes are those determined by EPA to be hazardous including those classified as hazardous and if products exhibit one of the four characteristics (defined in 40 CFR Part 261.21-24). Hazardous wastes are divided into listed wastes, characteristic wastes, universal wastes, and mixed wastes. Specific procedures determine how waste is identified, classified, listed, and delisted. RCRA mandates strict controls over disposal of hazardous waste. These listed wastes are divided into three categories: K-list, F-list, and the P and U-Lists. Characteristic wastes include wastes that exhibit ignitability, corrosivity, reactivity or toxicity. Universal wastes include batteries, pesticides, mercury-containing products and lamps. Examples include computer equipment, lead-containing products, and applicable cleaning chemicals.",
        set: "Components, Safety",
      },
      {
        name: "Is Product Disassembly by Recycling Facility Completed Using Standard Tools?",
        xmlName: "isTradeItemDesignedForEasyDisassembly",
        definition:
          "Indicates whether or not the product is designed for easy disassembly by recycling facilities using standard industry tools.",
        set: "Disposal",
      },
      {
        name: "Is Product Hazardous?",
        xmlName: "isProductHazardousToWater",
        definition:
          "Indicator to denote if the product is considered to be hazardous to water. If so, additional water hazard information may be required.",
        set: "Safety",
      },
      {
        name: "Is Product RPPC Compliant in Target Market?",
        xmlName: "isTradeItemRigidPlasticPackagingContainer",
        definition:
          "Indicates whether a product is or is contained in a Rigid Plastic Packaging Container (RPPC) as defined by laws in the target market.",
        set: "Sustainability",
      },
      {
        name: "Is Radio Frequency ID On Packaging",
        xmlName: "packagingInformation/isRadioFrequencyIDOnPackaging",
        definition:
          "Indicates that the packaging of the trade item is tagged with a Radio Frequency ID.",
        set: "Packaging",
      },
      {
        name: "Is Raw Material Irradiated",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/isRawMaterialIrradiated",
        definition:
          "Indicates if radiation has been applied to a trade item's raw material.",
        set: "Components, Processing",
      },
      {
        name: "Is Reflective",
        xmlName: "isReflective",
        definition:
          "Indicator to denote the product contains material which reflects light, especially for nighttime safety.",
        set: "Indicators",
      },
      {
        name: "Is Regulated For Transportation",
        xmlName: "safetyDataSheetInformation/isRegulatedForTransportation",
        definition:
          "An indicator whether the Trade Item is regulated for shipment by any agency.",
        set: "Safety",
      },
      {
        name: "Is Regulated For Transportation?",
        xmlName:
          "componentInformation/safetyDataSheetInformation/isRegulatedForTransportation",
        definition:
          "An indicator whether the Trade Item is regulated for shipment by any agency.",
        set: "Components",
      },
      {
        name: "Is Returnable Asset Empty",
        xmlName: "packagingInformation/returnableAsset/isReturnableAssetEmpty",
        definition: "Is the returnable asset empty or full?",
        set: "Packaging",
      },
      {
        name: "Is Revenue Share Eligible?",
        xmlName: "isEligibleForRevenueShare",
        definition:
          "A boolean that indicates if the film is available for revenue share or not.",
        set: "Media and Entertainment",
      },
      {
        name: "Is Rind Edible?",
        xmlName: "isRindEdible",
        definition:
          "An indicator whether or not the cheese rind is edible. This can result in the rind no longer being edible.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Is Security Tag Present?",
        xmlName: "isSecurityTagPresent",
        definition:
          "Indicator to denote the product contains a security tag. Security tags are used to prevent theft from locations downstream of a supplier such as a retail outlet or distribution center.",
        set: "Partner Specific",
      },
      {
        name: "Is Set",
        xmlName: "isSet",
        definition:
          "Indicator to denote the item consists of two or more different items sold together as a set. Example: A bedding set that includes sheets, pillow shams, and a comforter.",
        set: "Packaging",
      },
      {
        name: "Is Size Based Pricing?",
        xmlName: "isTradeItemSizeBasedPricing",
        definition:
          "This is an indicator that an item may be at a different price point than other similar SKUs (GTIN's price within a Style may differ).",
        set: "Purchasing and Delivery",
      },
      {
        name: "Is Substance of Very High Concern",
        xmlName:
          "componentInformation/safetyDataSheetInformation/rEACHInformation/isSubstanceOfVeryHighConcern",
        definition:
          "An indicator that a trade item contains substances of very high concern according to REACH as defined in as defined in Article 57 of Regulation No 1907/2006. ",
        set: "Components",
      },
      {
        name: "Is Substance Of Very High Concern",
        xmlName:
          "safetyDataSheetInformation/rEACHInformation/isSubstanceOfVeryHighConcern",
        definition:
          "An indicator that a trade item contains substances of very high concern according to REACH as defined in as defined in Article 57 of Regulation No 1907/2006. ",
        set: "Safety",
      },
      {
        name: "Is Talent Release On File",
        xmlName: "dam/general/isTalentReleaseOnFile",
        definition:
          "An indicator whether or not the owner of the asset has a talent release on file.  This applies to files where talent or a model is used.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Is Talent Release on File",
        xmlName: "externalFileLink/isTalentReleaseOnFile",
        definition:
          "An indicator whether or not the owner of the asset has a talent release on file. This applies to files where talent or a model is used.",
        set: "External Digital Assets",
      },
      {
        name: "Is Temperature Sensitive?",
        xmlName: "isTemperatureSensitive",
        definition:
          "Indicates that the item is prone to freezing or melting that may adversely affect it.",
        set: "Handling and Storage",
      },
      {
        name: "Is the Item Flavouring?",
        xmlName: "isItemFlavouring",
        definition:
          'This is true when:- a foodstuff contains a flavouring of an ingredient, but not the real ingredient itself, the words "flavouring" or "flavoured" shall accompany the name or the descriptor of the product to clearly indicate that only a flavouring was used and not the real ingredient itself.',
        set: "Ingredients",
      },
      {
        name: "Is this an Adult Product?",
        xmlName: "isAdultProduct",
        definition:
          "Is this product sexual in nature and designed specifically for an adult audience?  Care should be taken to not allow this item to appear in search results for children's products.",
        set: "Descriptions",
      },
      {
        name: "Is Trade Base Price Declaration Relevant?",
        xmlName: "isBasePriceDeclarationRelevant",
        definition:
          "An indicator whether this item is mandated to have price comparison information included according to country specific pricing directives.",
        set: "Sales",
      },
      {
        name: "Is Trade Item A Bulk Item?",
        xmlName: "isTradeItemABulkItem",
        definition: "Is Trade Item A Bulk Item?",
        set: "Indicators",
      },
      {
        name: "Is Trade Item A Combination Item",
        xmlName: "dutyFeeTaxInformation/isTradeItemACombinationItem",
        definition:
          "An indicator whether a product assigned with one GTIN contains components which could have different tax rates for example chocolate eggs with toys would be chocolate 7% and toy 19%.",
        set: "Taxation",
      },
      {
        name: "Is Trade Item A Free Item?",
        xmlName: "isTradeItemAFreeItem",
        definition:
          "Indicates if the item is free (for the retailer and for the end-consumer). Mainly related to non food item (for example, buy a computer, get the case free). Used only if Consumer Unit Indicator = true.",
        set: "Sales",
      },
      {
        name: "Is Trade Item A Priority Food?",
        xmlName: "isTradeItemAPriorityFood",
        definition:
          "A supplier declaration that must be made for food products, indicating if the item is a priority food as defined by the Country of Origin Labelling food standard. If the item is a priority food, the population of the Labelling Logo attribute below is mandatory.",
        set: "Food and Beverage",
      },
      {
        name: "Is Trade Item a Promotional Unit?",
        xmlName: "isTradeItemAPromotionalUnit",
        definition:
          "An indicator used to point out those trade items, which are promotions from regular line articles.",
        set: "Marketing",
      },
      {
        name: "Is Trade Item A Quality Vintage Alcohol Product",
        xmlName: "isTradeItemAQualityVintageAlcoholProduct",
        definition:
          'An indicator on an alcoholic beverage trade item whether the supplier has a "declared statement of quality (in French Millésime)”or not. This "declared statement of quality” requires the "Vintage" year of harvest of the grapes to be completed.',
        set: "Liquor",
      },
      {
        name: "Is Trade Item a Service?",
        xmlName: "isTradeItemAService",
        definition:
          "An indicator that the trade item is a service and not a physical item for example a receipt that can be used for upgrading a pre-paid phone balance, an entrance ticket to an amusement park, sporting event, theatre, service maintenance, installation service, repairs.",
        set: "Global",
      },
      {
        name: "Is Trade Item Considered Collectible Or Memorabilia",
        xmlName: "isTradeItemConsideredCollectibleOrMemorabilia",
        definition:
          "Is the trade item considered collectible by consumer or evokes memories to the end consumer.",
        set: "Marketing",
      },
      {
        name: "Is Trade Item Considered Collectible Or Memorabilia?",
        xmlName:
          "componentInformation/marketingInformation/isTradeItemConsideredCollectibleOrMemorabilia",
        definition:
          "Is the trade item considered collectible by consumer or evokes memories to the end consumer.",
        set: "Components",
      },
      {
        name: "Is Trade Item Designed To Be Divisible",
        xmlName:
          "componentInformation/descriptionInformation/isTradeItemDesignedToBeDivisible",
        definition:
          "Indicates whether the trade item or a single unit may be divided or separated into multiple pre-determined portions. A fraction or divisible amount of the total quantity of a trade item so as to obtain the desired amount.",
        set: "Components, Indicators",
      },
      {
        name: "Is Trade Item Irradiated",
        xmlName: "irradiatedCode",
        definition: "Indicates if radiation has been applied.",
        set: "Processing",
      },
      {
        name: "Is Trade Item Marked With Biocide?",
        xmlName: "isTradeItemMarkedWithBiocide",
        definition: "Is Trade Item Marked With Biocide?",
        set: "Packaging",
      },
      {
        name: "Is Trade Item Non Physical?",
        xmlName: "IsTradeItemNonPhysical",
        definition:
          "An indicator that the trade item is not a physical item and as such has no dimensional manifestation.",
        set: "Global",
      },
      {
        name: "Is Trade Item REACH Relevant",
        xmlName:
          "componentInformation/safetyDataSheetInformation/rEACHInformation/isTradeItemREACHRelevant",
        definition:
          "An indicator that the trade item may have ingredients that subject it to REACH.",
        set: "Components, Safety",
      },
      {
        name: "Is Trade Item Reinstated",
        xmlName: "isTradeItemReinstated",
        definition:
          "Indicator stating the Trade Item is being reinstated and will no longer be cancelled or discontinued. The canceledDate or discontinuedDate has been altered to reflect the reinstatement.",
        set: "Indicators",
      },
      {
        name: "Is Trade Item Reorderable?",
        xmlName: "isTradeItemReorderable",
        definition:
          "This element is an indicator that selected styles or trade items may or may not be re-ordered. It does not imply any information on current availability",
        set: "Purchasing and Delivery",
      },
      {
        name: "Is Trade Item Seasonal?",
        xmlName:
          "componentInformation/marketingInformation/season/isTradeItemSeasonal",
        definition:
          "An indicator whether or not the trade item is only offered during certain parts of the year or targeted to different seasons.",
        set: "Components",
      },
      {
        name: "Is Trade Item Universal Waste?",
        xmlName: "isTradeItemUniversalWaste",
        definition:
          'Indicates whether or not a product can be considered universal waste. Universal waste is defined as "wastes that do meet the regulatory definition of hazardous waste, but are managed under special, tailored regulations".',
        set: "Disposal",
      },
      {
        name: "Is Travel Size",
        xmlName: "isTravelSize",
        definition:
          "Please indicate whether the product is a smaller version of a larger-sized product. Example: Y; N (Please select a value from the drop-down below)",
        set: "Packaging",
      },
      {
        name: "Is Universal Waste",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousWasteInformation/isUniversalWaste",
        definition:
          "Indicates if a product can be considered universal waste. Universal waste is defined as wastes that do not meet the regulatory definition of hazardous waste but are managed under special, tailored regulations. ",
        set: "Components, Safety",
      },
      {
        name: "Is Unscented",
        xmlName: "isUnscented",
        definition:
          "Indicator to denote the item has no added scent or aroma. Used for products that have scented equivalents. Consumers often prefer unscented versions of products such as soaps, toilet paper and candles.",
        set: "Descriptions",
      },
      {
        name: "Is VAT Exempt",
        xmlName: "isVATExempt",
        definition:
          "Indicator to denote the product is exempt from Value Added Taxes (VAT).",
        set: "Taxation",
      },
      {
        name: "Item Code",
        xmlName: "c4p4ItemCode",
        definition:
          "The item identifier assigned by the retailer to the vendor GTIN.",
        set: "Sales",
      },
      {
        name: "Item contains Wood?",
        xmlName: "isWoodAComponentOfThisItem",
        definition:
          "Indicator to denote the product contains wood or paper as a component of the item. This includes the product and its pacakging.",
        set: "Partner Specific",
      },
      {
        name: "Item Depiction Type Code",
        xmlName: "dam/description/itemDepictionTypeCode",
        definition:
          "The state of the item as it is being depicted in the digital assets for example gift wrapped or assembled.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Item ID",
        xmlName: "gtin",
        definition:
          "Uniquely identify your Item.\n\nUsing GS1 Standards? This is the Item's GTIN, UPC or EAN in a 14-digit format as your Item ID.\n\nItem Management Pro Tip:  Simply type the first 13-digits into the Item ID field, then click the calculator icon. This will calculate and add your check digit for you without skipping a beat.\nFor items not using GS1 Standards we recommend using the supplier-assigned Model/Catalog number or the most common Item ID possible.",
        set: "DAM | Ecomm Header",
      },
      {
        name: "Item Industry Validation  M10NZ",
        xmlName: "itemIndustryValidationM10NZ",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation  Pharmacy",
        xmlName: "itemIndustryValidationPharmacy",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation  Smartmedia ",
        xmlName: "itemIndustryValidationSmartmedia",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Alibaba",
        xmlName: "itemIndustryValidationAlibaba",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Automotive",
        xmlName: "itemIndustryValidationAutomotive",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Coles ",
        xmlName: "itemIndustryValidationColes",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Food Services",
        xmlName: "itemIndustryValidationFoodServices",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Grocery NZ",
        xmlName: "itemIndustryValidationGroceryNZ",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Hardware AU ",
        xmlName: "itemIndustryValidationHardwareAU",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Health AU ",
        xmlName: "itemIndustryValidationHealthAU",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Health NZ",
        xmlName: "itemIndustryValidationHealthNZ",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Liquor ",
        xmlName: "itemIndustryValidationColesLiquor",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification, Identification",
      },
      {
        name: "Item Industry Validation Metcash ",
        xmlName: "itemIndustryValidationMetcash",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation office Supplies",
        xmlName: "itemIndustryValidationOfficeSupplies",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Officemax ",
        xmlName: "itemIndustryValidationOfficemax",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Product Flow NZ",
        xmlName: "itemIndustryValidationProductFlowNZ",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Sigma ",
        xmlName: "itemIndustryValidationSigma",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Southern Cross Hospitals",
        xmlName: "itemIndustryValidationSouthernCrossHospitals",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation SP Health",
        xmlName: "itemIndustryValidationSPHealth",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation The Distributors",
        xmlName: "itemIndustryValidationTheDistributors",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation TMNZ",
        xmlName: "itemIndustryValidationITMNZ",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation Woolworths",
        xmlName: "itemIndustryValidationWoolworths",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Industry Validation WSL",
        xmlName: "itemIndustryValidationWSL",
        definition:
          "IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.",
        set: "Identification",
      },
      {
        name: "Item Name",
        xmlName: "gtinName",
        definition:
          "Keep it simple! \nLeverage Item Name to quickly navigate and recognize your item.\nThis field is intended for your internal benefit.",
        set: "Hidden",
      },
      {
        name: "Item Name Long",
        xmlName: "itemNameLong",
        definition: "The long item name.",
        set: "Descriptions",
      },
      {
        name: "Item Period Safe to Use After Opening",
        xmlName:
          "componentInformation/tradeItemLifeSpan/itemPeriodSafeToUseAfterOpening",
        definition:
          'The period-after-opening (PAO) identifies the useful lifetime of a cosmetic product after its package has been opened for the first time, e.g. "50 months" or "4 years".',
        set: "Components",
      },
      {
        name: "Item Presented Date Time",
        xmlName: "itemPresentedDateTime",
        definition:
          "The date and time the item was presented to Category Manager for acceptance.",
        set: "Marketing",
      },
      {
        name: "Item Usage Type",
        xmlName: "itemUsageType",
        definition: "How product will be used.   ",
        set: "Partner Specific",
      },
      {
        name: "Items in File Description",
        xmlName: "dam/description/itemsInFileDescription",
        definition:
          "A description of the additional items shown or depicted in the digital asset.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
    ],
    J: [
      {
        name: "Job Title",
        xmlName: "globalModelInformation/globalModelContactInformation/jobTitle",
        definition: "The job title of the person that can be contacted",
        set: "Identification",
      },
      {
        name: "Juice Content Percent",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/juiceContentPercent",
        definition:
          "For natural beverages - the percentage concentration of natural juice. Required for products having sufficient concentration to have different treatment under GST legislation.",
        set: "Components",
      },
    ],
    L: [
      {
        name: "Label Description",
        xmlName: "componentInformation/descriptionInformation/labelDescription",
        definition:
          "A literal reproduction of the text featured on a product’s label in the same word-by-word order in which it appears on the front of the product’s packaging.",
        set: "Components, Descriptions",
      },
      {
        name: "Label Name",
        xmlName: "audioVisualMediaProductLabelName",
        definition:
          "The name of the company (called label in the music industry) that made the music publication.",
        set: "Media and Entertainment",
      },
      {
        name: "Labelled temperature",
        xmlName: "tradeItemTemperatureInformation/labelledTemperature",
        definition:
          "The temperature(s) that is/are labelled on the trade item to help the consumer understand the temperatures for which the product can be used, e.g. the washing temperature(s) for a detergent.",
        set: "Handling and Storage",
      },
      {
        name: "Labelling Additional Phrase",
        xmlName: "labellingAdditionalPhrase",
        definition:
          'An optional additional phrase added to the Label. For example "with Canadian maple syrup and New Zealand apples".',
        set: "Packaging",
      },
      {
        name: "Labelling Australian Content Percentage",
        xmlName: "labellingAustralianContentPercentage",
        definition:
          "The data for this attribute is used to replace the Percentage string from the Labelling Ingredient Statement attribute.",
        set: "Packaging",
      },
      {
        name: "Labelling Country of Origin",
        xmlName: "labellingCountryOfOrigin",
        definition:
          "The data for this attribute is used to replace the Country string from the Labelling Logos attribute.",
        set: "Packaging",
      },
      {
        name: "Labelling Get Details",
        xmlName: "labellingGetDetails",
        definition:
          'If additional contact information is required to be provided to the consumer. For example "Telephone +61 3 9550 3555 for more information".',
        set: "Packaging",
      },
      {
        name: "Labelling Ingredient Statement",
        xmlName: "labellingIngredientStatement",
        definition:
          "Part two of the text provided on the Country of Origin Labelling Logo. Additional details may be required depending on the text string that is used.",
        set: "Packaging",
      },
      {
        name: "Labelling Logos",
        xmlName: "labellingLogos",
        definition:
          "Part one of the text provided on the Country of Origin Labelling Logo. Additional details may be required depending on the text string that is used.",
        set: "Packaging",
      },
      {
        name: "Labelling Packed Statement",
        xmlName: "labellingPackedStatement",
        definition:
          "Part three of the text provided on the Country of Origin Labelling Logo.",
        set: "Packaging",
      },
      {
        name: "Labelling Product Name",
        xmlName: "labellingProductName",
        definition:
          "The data for this attribute is used to replace the Product Name string from the Labelling Logos attribute.",
        set: "Packaging",
      },
      {
        name: "Language Specific Brand Name",
        xmlName:
          "componentInformation/descriptionInformation/languageSpecificBrandName",
        definition:
          "The recognisable name used by a brand owner to uniquely identify a line of trade item or services expressed in a different language than the primary brand name (brandname).",
        set: "Components, Descriptions",
      },
      {
        name: "Language Specific Sub-Brand Name",
        xmlName: "languageSpecificSubbrandName",
        definition:
          "A second level of brand expressed in a different language than the primary sub-brand name (subBrand).",
        set: "Descriptions",
      },
      {
        name: "Language Specific Subbrand Name",
        xmlName:
          "componentInformation/descriptionInformation/languageSpecificSubbrandName",
        definition:
          "A second level of brand expressed in a different language than the primary sub-brand name (subBrand).",
        set: "Components",
      },
      {
        name: "Last Modified Date",
        xmlName: "lastModifiedDate",
        definition:
          "A system generated value identifying the date and time a record was last updated.  This field allows the data pool to control the trade item data version, and allows the information user to determine if trade item data should be downloaded.  Date format CCYY-MM-DDTHH:MM:SS.",
        set: "Dates",
      },
      {
        name: "Last Order Date",
        xmlName: "lastOrderDate",
        definition:
          "Indicates the latest date that an order can be placed for the trade item.",
        set: "Dates",
      },
      {
        name: "Last Permitted Sales Date",
        xmlName: "lastPermittedSalesDate",
        definition: "Last date, on which the item may be sold to consumers.",
        set: "Dates",
      },
      {
        name: "Last Returnable Date Time",
        xmlName: "lastReturnableDateTime",
        definition:
          "The last date AND time when a non sold trade item must be received by the manufacturer to receive credit.",
        set: "Dates",
      },
      {
        name: "Last Ship Date",
        xmlName: "lastShipDate",
        definition:
          "Indicates the latest date that the trade item can be shipped. This is independent of any specific ship-from location.",
        set: "Dates",
      },
      {
        name: "Laundry Detergent Type Code",
        xmlName:
          "productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/laundryDetergentTypeCode",
        definition:
          "A code differentiating the detergent/soap used for laundry by colour type, fabric type, or washing technique.",
        set: "Descriptions",
      },
      {
        name: "Laundry Hanging Aid Type Code",
        xmlName:
          "productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/laundryHangingAidTypeCode",
        definition:
          "A code describing various accessories/aids used to hang clothing for storage, display, or laundering purposes.",
        set: "Descriptions",
      },
      {
        name: "Layer Height",
        xmlName: "layerHeight",
        definition:
          "Indicates the measurement of height of the layer when trade items are packed with layers. The layer height is necessary when the cases are loaded on the pallet lying on the side instead of standing up.",
        set: "Hierarchy Info",
      },
      {
        name: "Lethal Concentration 50 Measurement Precision",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50MeasurementPrecision",
        definition:
          "The measurement precision used to determine the lethal concentration 50 for example EXACT.",
        set: "Components, Safety",
      },
      {
        name: "Lethal Concentration50",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50",
        definition:
          "Median Lethal Concentration is a statistically derived concentration of a substance that can be expected to cause death in 50% of test animals. It is usually expressed as the weight of substance per weight or volume of water, air or feed.",
        set: "Components, Safety",
      },
      {
        name: "Lethal Concentration50 Basis",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50Basis",
        definition:
          "The basic measurement for the measurement of Median Lethal Concentration for example 1 LT in the ratio 10 MG/ 1 LT.",
        set: "Components, Safety",
      },
      {
        name: "Lethal Dose 50 Measurement Precision",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50MeasurementPrecision",
        definition:
          "The measurement precision used to determine the determine the lethal dose for example EXACT.",
        set: "Components, Safety",
      },
      {
        name: "Lethal Dose50",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50",
        definition:
          "Lethal Dose 50 is a statistically derived single dose that can be expected to cause death in 50% of the test animals when administered by the route indicated (oral, dermal, inhalation). It is expressed as a weight of substance per unit weight of animal.",
        set: "Components, Safety",
      },
      {
        name: "Lethal Dose50 Basis",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50Basis",
        definition:
          "The basic measurement for the measurement of a Lethal Dose for example 1 LT in the ratio 10 MG/ 1 LT.",
        set: "Components, Safety",
      },
      {
        name: "Level Of Containment",
        xmlName:
          "componentInformation/allergenInformation/allergenRelatedInformation/allergen/levelOfContainmentCode",
        definition: "Code indicating the level of presence of the allergen.",
        set: "Components, Ingredients",
      },
      {
        name: "Level of Containment",
        xmlName: "nonfoodIngredientAdditiveInformation/levelofContainmentCode",
        definition: "Code indicating the level of presence of the additive.",
        set: "Ingredients",
      },
      {
        name: "Levying Amount 1",
        xmlName: "levyingInformation/levyingAmount1",
        definition: "The amount of the levy",
        set: "Taxation",
      },
      {
        name: "Levying Amount 2",
        xmlName: "levyingInformation2/levyingAmount2",
        definition: "The amount of the levy",
        set: "Taxation",
      },
      {
        name: "Levying Class 1",
        xmlName: "levyingInformation/levyingClass1",
        definition: "The class of the levy.",
        set: "Taxation",
      },
      {
        name: "Levying Class 2",
        xmlName: "levyingInformation2/levyingClass2",
        definition: "The class of the levy.",
        set: "Taxation",
      },
      {
        name: "Levying Kind 1",
        xmlName: "levyingInformation/levyingKind1",
        definition: "The kind of the levy.",
        set: "Taxation",
      },
      {
        name: "Levying Kind 2",
        xmlName: "levyingInformation2/levyingKind2",
        definition: "The kind of the levy.",
        set: "Taxation",
      },
      {
        name: "Levying Kind Basis Value 1",
        xmlName: "levyingInformation/levyingKindBasisValue1",
        definition: "The basis amount of the levy.",
        set: "Taxation",
      },
      {
        name: "Levying Kind Basis Value 2",
        xmlName: "levyingInformation2/levyingKindBasisValue2",
        definition: "The basis amount of the levy.",
        set: "Taxation",
      },
      {
        name: "License Character",
        xmlName: "licenseCharacter",
        definition:
          "the charcter of the licensed trademark asset that are used on the trade item.",
        set: "Licensing and Certification, Licensing and Certification",
      },
      {
        name: "License Code",
        xmlName: "tradeItemLicense/tradeItemLicenseDetail/licenseCode",
        definition:
          "A code indicating the insignia of the league/sport/event which a given item bears.",
        set: "Licensing and Certification",
      },
      {
        name: "License End DateTime",
        xmlName:
          "tradeItemLicense/tradeItemLicenseEffectiveDateInformation/tradeItemLicenseEndDateTime",
        definition:
          "The effective end date of the license to use the title, character or any trademarked assets that are used on the trade item.",
        set: "Licensing and Certification",
      },
      {
        name: "License Owner GLN",
        xmlName: "tradeItemLicense/tradeItemLicenseOwnerGLN",
        definition:
          "The GLN of the owner of the licensed product that is allowing the trading partner to use their licensed name and/or images.",
        set: "Licensing and Certification",
      },
      {
        name: "License Owner Name",
        xmlName: "tradeItemLicense/tradeItemLicenseOwnerName",
        definition:
          "The name of the owner of the licensed product that is allowing the trading partner to use their licensed name and/or images.",
        set: "Licensing and Certification",
      },
      {
        name: "License Start DateTime",
        xmlName:
          "tradeItemLicense/tradeItemLicenseEffectiveDateInformation/tradeItemLicenseStartDateTime",
        definition:
          "The effective start date of the license to use the title, character or any trademarked assets that are used on the trade item.",
        set: "Licensing and Certification",
      },
      {
        name: "License Title",
        xmlName: "licenseTitle",
        definition:
          "The title of the licensed trademark asset that are used on the trade item.\n",
        set: "Licensing and Certification, Licensing and Certification",
      },
      {
        name: "Link Quantity",
        xmlName: "link/childItem/quantity",
        definition:
          "The number of child items contained in a trade item. The sum of the quantities of direct child links must equal the Qty of Next Level Item(s) of the Parent Item.",
        set: "Link",
      },
      {
        name: "Liquor Age",
        xmlName: "liquorAge",
        definition:
          "Descriptive term or number to denote the age of the liquor product.",
        set: "Liquor",
      },
      {
        name: "Local Packaging Marked Label Accreditation CodeReference",
        xmlName: "localpackagingMarkedLabelAccreditationCodeReference",
        definition:
          "Used for markings on package that are locally managed and are not regulatory in nature. Use local code lists to populate this attribute.",
        set: "Packaging",
      },
      {
        name: "Local RIN Prefix",
        xmlName: "lwrinPrefix",
        definition: "Local RIN Prefix",
        set: "Partner Specific",
      },
      {
        name: "Local RIN Suffix",
        xmlName: "lwrinSuffix",
        definition: "Local RIN Suffix",
        set: "Partner Specific",
      },
      {
        name: "Logistical Unit Cube Dimension",
        xmlName: "logisticsUnitCubeDimension",
        definition:
          "The dimensions of an imaginary cube which can be drawn around both the unit load (content) and the platform upon which the goods are carried if there is one, as defined in the formula of H X W X D (the linear dimensions multiplied to get a cubic result).",
        set: "Dimensions",
      },
      {
        name: "Logistical Unit Gross Weight",
        xmlName: "logisticsUnitGrossWeight",
        definition:
          "The weight of both the unit load (content) and the plat-form upon which the goods are carried, if there is one.",
        set: "Dimensions",
      },
      {
        name: "Logistical Unit Height",
        xmlName: "logisticsUnitHeight",
        definition:
          "This is the height of both the unit load (content) and the platform upon which the goods are carried, if there is one. Height is the vertical dimension from the lowest extremity to the highest extremity.",
        set: "Dimensions",
      },
      {
        name: "Logistical Unit Net Weight",
        xmlName: "logisticsUnitNetWeight",
        definition:
          "The weight of both the unit load (content) and the platform upon which the goods are carried if there is one, excluding all packaging materials.",
        set: "Dimensions",
      },
      {
        name: "Long Synopsis",
        xmlName: "longSynopsis",
        definition: "An extended text that describes the plot of a film.",
        set: "Media and Entertainment",
      },
      {
        name: "Loose or Pre-Packed Code",
        xmlName: "variableTradeItemType",
        definition:
          "Valid value which informs the buyer whether the product is pre-packed or loose. This applies to products that are sold by variable measure of how the product is packed for the selling of products that vary in weight or quantity.\n\nUsed to provide information to the buyer of how a product that varies in weight will be packed. Used to help with shelf placement in the store.",
        set: "Dimensions",
      },
      {
        name: "Lower Explosive Limit",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lowerExplosiveLimit",
        definition:
          "The low end value expressed as a percent by volume that the mixture is still flammable.",
        set: "Components, Components, Safety, Safety",
      },
    ],
    M: [
      {
        name: "Manufacturer Additional ID Type",
        xmlName:
          "manufacturer/AdditionalTradeItemIdentification/manufacturerAdditionalIdType",
        definition: "Manufacturer Additional ID Type",
        set: "Identification",
      },
      {
        name: "Manufacturer Additional ID Value",
        xmlName:
          "manufacturer/AdditionalTradeItemIdentification/manufacturerAdditionalIdValue",
        definition: "Manufacturer Additional ID Value",
        set: "Identification",
      },
      {
        name: "Manufacturer Address",
        xmlName: "manufacturer/address",
        definition: "The address associated with the manufacturer.",
        set: "Identification",
      },
      {
        name: "Manufacturer GLN",
        xmlName: "manufacturer/gln",
        definition:
          "The Global Location Number (GLN) that uniquely identifies the party who owns the manufacturing process of the product (Manufacturer GLN) .\n\nUsed by the seller to communicate the GLN of the owner of the manufacturing process to the buyer. It allows the buyer to identify the owner of the manufacturing process. Used by the buyer for internal validation and to support some B2B processes.",
        set: "Identification",
      },
      {
        name: "Manufacturer Internal Reference",
        xmlName: "manufacturerInternalReference",
        definition:
          "This field is used to identify the internal reference number or internal product number allocated to the product by the manufacturer of the item. Where the vendor loading GS1net is the manufacturer this field is intended to be the same as the Vendor Internal Reference field. Where the vendor is not the manufacturer, this field may be used to identify the manufacturer’s internal reference.",
        set: "Identification",
      },
      {
        name: "Manufacturer Name",
        xmlName: "manufacturer/name",
        definition:
          "The name used to uniquely identify the party who owns the manufacturing process of the product (Manufacturer Name).\n\nUsed to identify the name of the owner of the manufacturing process.",
        set: "Identification",
      },
      {
        name: "Manufacturer Preparation Type Code",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/manufacturerPreparationTypeCode",
        definition:
          "States how the product or a component of the product has been prepared during the manufacturing process.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Manufacturer Take Back Program Fee",
        xmlName: "manufacturerTakeBackProgramFee",
        definition:
          "The fee the consumer must pay the manufacturer to take back the product.",
        set: "Disposal",
      },
      {
        name: "Marked Lot Number",
        xmlName: "markedLotNumber",
        definition: "Identifies that the product is marked with a lot number.",
        set: "Packaging",
      },
      {
        name: "MARKETED RECIPE/STYLE OF SAUCE/MARINADE/DIP/DRESSING(U122)",
        xmlName: "U122",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "Marketing Circular Copy",
        xmlName: "marketingCircularCopy",
        definition:
          "Supplier's descriptive and comparative product information, in a bullet copy format, used as content for marketing materials such as circulars, newspaper ads and coupons. May contain up to twenty bullet copy lines. If utilized, should include product name. May include features and benefits in rank order of importance, comparative information and certification information.",
        set: "Marketing",
      },
      {
        name: "Marketing Message",
        xmlName:
          "componentInformation/marketingInformation/channelSpecificMarketingInformation/channelSpecificMarketingMessage/marketingMessage",
        definition:
          "A marketing message for the trade item relating to a specific trade channel such as CONVENIENCE.",
        set: "Components, Components, Marketing, Marketing",
      },
      {
        name: "Marketing Trade Channel",
        xmlName:
          "componentInformation/marketingInformation/channelSpecificMarketingInformation/marketingTradeChannel",
        definition:
          "The trade channel associated with the marketing information.",
        set: "Components, Marketing",
      },
      {
        name: "Materials That Fail RoHS Compliance",
        xmlName: "rOHSComplianceFailureMaterial",
        definition:
          "Identifies what materials contained in the product result in the failure of RoHS compliance.",
        set: "Sustainability",
      },
      {
        name: "Maturation Method Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/maturationMethodCode",
        definition:
          "The method of maturity for the item or ingredient for example tree ripened or jet fresh",
        set: "Components, Components, Processing",
      },
      {
        name: "Maturity at Time of Sale",
        xmlName:
          "foodAndBevIngredient/ingredientFarmingProcessing/maturationMethodCode",
        definition:
          "The method of maturity for the item at the time of its sale.",
        set: "Ingredients",
      },
      {
        name: "Max # of Players",
        xmlName: "maximumNumberOfPlayers",
        definition: "Maximum number of players that can participate in the game.",
        set: "Media and Entertainment",
      },
      {
        name: "Max Buying Quantity",
        xmlName: "agreedMaximumBuyingQuantity",
        definition:
          "The maximum quantity of the product available to the retailer",
        set: "Purchasing and Delivery",
      },
      {
        name: "Max Humidity Acceptable Time Span",
        xmlName: "tradeItemHumidityInformation/maximumHumidityAcceptableTimeSpan",
        definition:
          "The amount of time that a product can safely rise above the maximum humidity threshold as defined by the manufacturer without affecting product safety or quality.",
        set: "Handling and Storage",
      },
      {
        name: "Max Order Quantity",
        xmlName: "maximumOrderQuantity",
        definition:
          "The maximum quantity of the trade item that can be ordered. A number or a count. This value can represent the total number or units ordered over a set period of time with multiple orders.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Max Player Age",
        xmlName: "maximumPlayerAge",
        definition:
          "Note: This attribute is being deprecated in a future release. Use targetConsumerUsageTypeCode with the value AGE and targetConsumerMaximumUsage from TargetConsumerUsage class in MarketingInformationModule. Recommended oldest age for a game or publication.",
        set: "Media and Entertainment",
      },
      {
        name: "Max Temp Acceptable Time Span",
        xmlName:
          "tradeItemTemperatureInformation/maximumTemperatureAcceptableTimeSpan",
        definition:
          "The amount of time that a product can safely rise above the maximum temperature threshold during storage as defined by the manufacturer without affecting product safety or quality.",
        set: "Handling and Storage",
      },
      {
        name: "Max Tolerance Temp",
        xmlName: "tradeItemTemperatureInformation/maximumToleranceTemperature",
        definition:
          "The maximum temperature at which the item is still usable. The tolerated temperature indicates that the temperature of the trade item should never rise above the maximum temperature.",
        set: "Handling and Storage",
      },
      {
        name: "Maximum Environment Atmospheric Pressure",
        xmlName:
          "tradeItemTemperatureInformation/maximumEnvironmentAtmosphericPressure",
        definition:
          "The maximum atmospheric pressure in which the item remains usable. This value is the value above which the trade item should not be subjected.",
        set: "Handling and Storage",
      },
      {
        name: "Maximum Humidity Percentage",
        xmlName: "tradeItemHumidityInformation/maximumHumidityPercentage",
        definition:
          "The maximum humidity in percentages that the goods should be stored in.",
        set: "Handling and Storage",
      },
      {
        name: "Maximum Number Of Smallest Units Per Package",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/maximumNumberOfSmallestUnitsPerPackage",
        definition:
          "The maximum number of the smallest units contained in the package.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Maximum Optimum Consumption Temperature",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/maximumOptimumConsumptionTemperature",
        definition:
          "The upper limit drinking temperature of the optimum range of the drinking temperature.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Maximum Paper Size",
        xmlName: "maximumPaperSize",
        definition:
          "Descritive terms to denote the maximum paper size which the product can support. Please specify not only the common name for the size of the paper, but in parenthesis the actual measurements for that size. Example A4 (210 x 297 mm)",
        set: "Recipient Identification Info",
      },
      {
        name: "Maximum PH",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/maximumPH",
        definition: "The maximum range for PH.",
        set: "Components, Safety",
      },
      {
        name: "Maximum Temperature",
        xmlName: "tradeItemTemperatureInformation/maximumTemperature",
        definition:
          "The maximum temperature that a product can not exceed during an activity as defined by the manufacturer without affecting product safety, quality and/or usage.\n\nUsed to communicate to the buyer or consumer the maximum temperature for quality and safety for a specific activity in conjunction with Temperature Activity Code.",
        set: "Handling and Storage",
      },
      {
        name: "McDonald's Product Classification",
        xmlName: "mcdProductClassification",
        definition: "The 10 digit McDonald's product classification number ",
        set: "Partner Specific",
      },
      {
        name: "Measurement Precision",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/measurementPrecisionCode",
        definition:
          "Code indicating whether the specified nutrient content is exact or approximate.",
        set: "Components",
      },
      {
        name: "Measurement Precision Of Number Of Servings Per Package",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/measurementPrecisionOfNumberOfServingsPerPackage",
        definition:
          "Code indicating whether the number of servings per package is exact or approximate.",
        set: "Components",
      },
      {
        name: "Meat Poultry Cut",
        xmlName: "fishMeatPoultryContent/meatPoultryCut",
        definition:
          "The description of a piece of meat that has been cut from an animal carcass. The determination of this is made by the supplier and is subject to target market regulations or trade organization guidelines.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Media Location",
        xmlName: "mediaLocator/mediaTypeDetails/mediaLocation",
        definition:
          "Add an Image location/URL for this media.  Example: https://www.myimage.com/image.jpg",
        set: "Marketing",
      },
      {
        name: "Media SubType",
        xmlName: "mediaLocator/mediaTypeDetails/mediaSubType",
        definition: "Media SubType",
        set: "Marketing",
      },
      {
        name: "Media Type",
        xmlName: "mediaLocator/mediaType",
        definition: "What type of media is this value?",
        set: "Marketing",
      },
      {
        name: "Menu Item Usage",
        xmlName: "menuItemUsage",
        definition:
          "Identifies what food or menu item will this product be used in or with.",
        set: "Partner Specific",
      },
      {
        name: "Microbiological Organism Method of Analysis Code",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/microbiologicalOrganismMethodOfAnalysisCode",
        definition:
          "Method of analysis used to determine quantity of the specified microbiological organism (E.g. probiotic live microbe) in the product. Example: Aerobic plate count, Flow cytometry.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Microbiological Organism Minimum Value",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/microbiologicalOrganismMinimumValue",
        definition:
          "The minimum allowable value of the microbiological organism per weight or volume in a specific environment.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Microbiological Organism Warning Value",
        xmlName: "foodAndBevMicrobiological/organismWarningValue",
        definition:
          "With regard to the audit of the production processes exceeding the microbiological reference limit means, it indicates there are leak points in the production process and the hygienic situation needs to be increased.",
        set: "Food and Beverage",
      },
      {
        name: "Milk Levy",
        xmlName: "milkLevy",
        definition: "An amount to be added to the invoice price for a milk levy.",
        set: "Taxation",
      },
      {
        name: "Milk Levy Currency",
        xmlName: "milkLevyCurrency",
        definition:
          "Currency for the amount to be added to the invoice price for a milk levy.",
        set: "Taxation",
      },
      {
        name: "Milk Products",
        xmlName: "milkProducts",
        definition: "Characterisation of products on milk basis.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Min # of Players",
        xmlName: "minimumNumberOfPlayers",
        definition: "Minimum number of players that can participate in the game.",
        set: "Media and Entertainment",
      },
      {
        name: "Min Buying Quantity",
        xmlName: "agreedMinimumBuyingQuantity",
        definition: "Minimum buying quantity agreed between trading partners.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Min Player Age",
        xmlName: "minimumPlayerAge",
        definition:
          "Note: This attribute is being deprecated in a future release. Use targetConsumerUsageTypeCode with the value AGE and targetConsumerMinimumUsage from TargetConsumerUsage class in MarketingInformationModule. Recommended youngest age for a game or publication.",
        set: "Media and Entertainment",
      },
      {
        name: "Min Product Lifespan from Arrival (Days)",
        xmlName:
          "componentInformation/tradeItemLifeSpan/minimumTradeItemLifespanFromTimeOfArrival",
        definition:
          "The period of days, guaranteed by the manufacturer, before the expiration date of the trade item, based on arrival to a mutually agreed to point in the buyer’s distribution system. Can be repeatable upon use of GLN.",
        set: "Components",
      },
      {
        name: "Min Product Lifespan from Production (Days)",
        xmlName:
          "componentInformation/tradeItemLifeSpan/minimumTradeItemLifespanFromTimeOfProduction",
        definition:
          "The period of day, guaranteed by the manufacturer, before the expiration date of the product, based on the production.",
        set: "Components",
      },
      {
        name: "Min Spl Order Qty",
        xmlName: "specialOrderQuantityMinimum",
        definition:
          "Number to denote the minimum number of units for the product which a retailer must include on a special order. If this minimum number is not met, the order may not be processed and filled.",
        set: "Partner Specific",
      },
      {
        name: "Min Tolerance Temp",
        xmlName: "tradeItemTemperatureInformation/minimumToleranceTemperature",
        definition:
          "The minimum temperature at which the item is still usable. The tolerated temperature indicates that the temperature of the trade item should never fall below the minimum temperature.",
        set: "Handling and Storage",
      },
      {
        name: "Minimum Amount of Animal Protein",
        xmlName: "fishMeatPoultryContent/minimumAmountOfAnimalProtein",
        definition:
          "Indicate the minimum amount of animal meat (or poultry) protein contained in the product. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Minimum Days of Shelf Life at Arrival",
        xmlName: "minimumTradeItemLifespanFromArrival",
        definition:
          'The seller\'s determination of the minimum number of calendar days of shelf life of the product, based upon the expiration date on the product, upon receipt by the buyer. Minimum Days of Shelf Life at Arrival may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed by the buyer for quality and inventory control workflows/business processes.',
        set: "Handling and Storage",
      },
      {
        name: "Minimum Days of Shelf Life from Production",
        xmlName: "minimumTradeItemLifespanFromProduction",
        definition:
          'The seller\'s determination of the minimum number of calendar days from the production date to the expiration date. Minimum Days of Shelf Life from Production may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed by the buyer for quality and inventory control workflows/business processes.',
        set: "Handling and Storage",
      },
      {
        name: "Minimum Environment Atmospheric Pressure",
        xmlName:
          "tradeItemTemperatureInformation/minimumEnvironmentAtmosphericPressure",
        definition:
          "The minimum atmospheric pressure in which the item remains usable. This value is the value below which the trade item should not be subjected.",
        set: "Handling and Storage",
      },
      {
        name: "Minimum Fish Meat Poultry Content",
        xmlName: "fishMeatPoultryContent/minimumFishMeatPoultryContent",
        definition:
          "The minimum amount of fish, meat or poultry contained in a food and beverage trade item expressed as a measurement.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Minimum Humidity Percentage",
        xmlName: "tradeItemHumidityInformation/minimumHumidityPercentage",
        definition:
          "The minimum humidity in percentages that the goods should be stored in.",
        set: "Handling and Storage",
      },
      {
        name: "Minimum Optimum Consumption Temperature",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/minimumOptimumConsumptionTemperature",
        definition:
          "The lower limit drinking temperature of the optimum range of the drinking temperature",
        set: "Components, Food and Beverage",
      },
      {
        name: "Minimum Order Value",
        xmlName: "minimumOrderValue",
        definition:
          "The minimum order value of the trade item expressed in a money amount that can be ordered. This attribute is to be used with a respective currency (e.g. 1000.00 USD).",
        set: "Sales",
      },
      {
        name: "Minimum Orderable Quantity",
        xmlName: "minimumOrderQuantity",
        definition:
          'The minimum quantity of the product required on a single order by the seller. Minimum Orderable Quantity may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed by the seller and the buyer to ensure that the orders are at sufficient enough level to meet shipping and processing requirements.',
        set: "Purchasing and Delivery",
      },
      {
        name: "Minimum PH",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/minimumPH",
        definition: "The minimum range value for PH.",
        set: "Components, Safety",
      },
      {
        name: "Minimum Shipping Quantity",
        xmlName: "minimumShippingQuantity",
        definition:
          "The minimum total quantity of this trade item that can be shipped. It is used only if different from the minimum order quantity.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Minimum Temperature",
        xmlName: "tradeItemTemperatureInformation/minimumTemperature",
        definition:
          "The minimum temperature that a product can not go below during an activity as defined by the manufacturer without affecting product safety, quality and/or usage.\n\nUsed to communicate to the buyer or consumer the minimum temperature for quality and safety for a specific activity in conjunction with Temperature Activity Code.",
        set: "Handling and Storage",
      },
      {
        name: "Minimum Temperature Setting",
        xmlName: "temperatureSettings/minimumTemperatureSetting",
        definition:
          "Measurement to denote the lower temperature limit or capability of an item such as a thermometer or chillers.",
        set: "Handling and Storage",
      },
      {
        name: "Minimum Trade Item Days In Warehouse",
        xmlName: "minimumTradeItemDaysInWarehouse",
        definition: "Number of days the product can stay warehoused.",
        set: "Handling and Storage",
      },
      {
        name: "Miscellaneous AVP Name",
        xmlName: "miscAVP/miscAVPName",
        definition: "Miscellaneous AVP Attribute Name",
        set: "Miscellaneous AVP",
      },
      {
        name: "Miscellaneous AVP Value",
        xmlName: "miscAVP/miscAVPValue",
        definition: "Miscellaneous AVP Attribute Value",
        set: "Miscellaneous AVP",
      },
      {
        name: "Movie Color Code",
        xmlName: "movieColourCode",
        definition:
          "Identifies if the movie is in black and white, color or has been colorized.",
        set: "Media and Entertainment",
      },
      {
        name: "Multiple Container Quantity",
        xmlName: "multipleContainerQuantity",
        definition:
          "The quantity of containers when the complete trade item is packed in multiple containers. If all components are packed together into one item this attribute is not used. For example: 3 boxes = 1st box has 1 table, 2 more boxes with 2 chairs each, this attribute would contain the value 3, representing 3 boxes total.",
        set: "Components",
      },
      {
        name: "Must Ship Alone",
        xmlName: "mustShipAlone",
        definition:
          'Select "Y" if your item cannot ship with another item in the same box. If marked "Y," the ship alone item will not be grouped for ship price calculation.',
        set: "Purchasing and Delivery",
      },
      {
        name: "Must Trade Item Be Chilled",
        xmlName: "mustTradeItemBeChilled",
        definition: "Indicator of a compulsory refrigeration for the product.",
        set: "Handling and Storage",
      },
    ],
    N: [
      {
        name: "NABCA Additional Charges",
        xmlName: "nABCAAdditionalCharges",
        definition: "Any other charges to be added to the Net Cost at FOB point.",
        set: "Liquor",
      },
      {
        name: "NABCA Address Of Bottler",
        xmlName: "nABCAAddressOfBottler",
        definition: "An indication of the entity who bottles the item.",
        set: "Liquor",
      },
      {
        name: "NABCA Address Of Distiller",
        xmlName: "nABCAAddressOfDistiller",
        definition: "The address of the entity who distills the item.",
        set: "Liquor",
      },
      {
        name: "NABCA Age Vintage",
        xmlName: "nABCAAgeVintage",
        definition: "The year or vintage of the beverage.",
        set: "Liquor",
      },
      {
        name: "NABCA Alternate Age Vintage",
        xmlName: "nABCAAlternateAgeVintage",
        definition: "The age or vintage of the item as sold under another label.",
        set: "Liquor",
      },
      {
        name: "NABCA Alternate Label Explanation",
        xmlName: "nABCAAlternateLabelExplanation",
        definition:
          "The explanation of the differences between the item as sold under another label.",
        set: "Liquor",
      },
      {
        name: "NABCA Alternate Percentage Of Alcohol By Volume",
        xmlName: "nABCAAlternatePercentOfAlcoholByVolume",
        definition: "The proof of the item as sold under another label.",
        set: "Liquor",
      },
      {
        name: "NABCA Bottler Name",
        xmlName: "nABCABottlerName",
        definition: "The year or vintage of the beverage.",
        set: "Liquor",
      },
      {
        name: "NABCA Discount Applied",
        xmlName: "nABCADiscountApplied",
        definition: "Any discounts applied to the price of the item.",
        set: "Liquor",
      },
      {
        name: "NABCA Is Imported Item Inbound?",
        xmlName: "nABCAIsImportedItemInbound",
        definition:
          "An indication of whether or not the product is imported and being admitted into the US provisionally without payment or duties.",
        set: "Liquor",
      },
      {
        name: "NABCA Is Sold Under Any Other Label",
        xmlName: "nABCAIsSoldUnderAnyOtherLabel",
        definition:
          "Indication if the item can be sold under a label other than the one being referenced on the form.",
        set: "Liquor",
      },
      {
        name: "NABCA Item FOB Point",
        xmlName: "nABCAItemFOBPoint",
        definition:
          "Point at which the item is legally the property of the purchaser.",
        set: "Liquor",
      },
      {
        name: "NABCA Item Ship Point",
        xmlName: "nABCAItemShipPoint",
        definition: "Point from which the item is shipped.",
        set: "Liquor",
      },
      {
        name: "NABCA Marine Insurance",
        xmlName: "nABCAMarineInsurance",
        definition: "Insurance for shipping overseas.",
        set: "Liquor",
      },
      {
        name: "NABCA Net Cost FOB Ship Point",
        xmlName: "nABCANetCostFOBShipPoint",
        definition:
          "Cost of the item at the freight on board point, without any shipping charges, bailment charges, or any discounts applied.",
        set: "Liquor",
      },
      {
        name: "NABCA Ocean Freight",
        xmlName: "nABCAOceanFreight",
        definition: "Shipping charges for the item overseas.",
        set: "Liquor",
      },
      {
        name: "NABCA Order Type",
        xmlName: "nABCAOrderType",
        definition:
          "Products are either State Stock, Bailment, or Special Purchase Order Plan. State Stock items are stocked by the state. Bailment items are when a state rents space in a warehouse and the supplier pays a fee to store the items there. Special Purchase Order Plan indicates whether the item is a special listing. This attribute identifies, which of these three order types is appropriate.",
        set: "Liquor",
      },
      {
        name: "NABCA Price Remarks",
        xmlName: "nABCAPriceRemarks",
        definition:
          "Any remarks associated with the case price and/or the difference in the current price compared to the previous price.",
        set: "Liquor",
      },
      {
        name: "NABCA Pricing Terms",
        xmlName: "nABCAPricingTerms",
        definition: "The terms that the state agreed to pay for the product.",
        set: "Liquor",
      },
      {
        name: "NABCA Representative For The State Address",
        xmlName: "nABCARepresentativeForTheStateAddress",
        definition: "Address of State Representative.",
        set: "Liquor",
      },
      {
        name: "NABCA Representative For The State Fax",
        xmlName: "nABCARepresentativeForTheStateFax",
        definition: "Fax number of State Representative.",
        set: "Liquor",
      },
      {
        name: "NABCA Representative For The State License Number",
        xmlName: "nABCARepresentativeForTheStateLicenseNum",
        definition: "License Number of State Representative.",
        set: "Liquor",
      },
      {
        name: "NABCA Representative For The State Name",
        xmlName: "nABCARepresentativeForTheStateName",
        definition: "Identifies this particular supplier's State Representative.",
        set: "Liquor",
      },
      {
        name: "NABCA Representative For The State Telephone",
        xmlName: "nABCARepresentativeForTheStateTelephone",
        definition: "Telephone number of State Representative.",
        set: "Liquor",
      },
      {
        name: "NABCA Supplier Address",
        xmlName: "nABCASupplierAddress",
        definition: "Supplier's Address.",
        set: "Liquor",
      },
      {
        name: "NABCA Supplier Fax",
        xmlName: "nABCASupplierFax",
        definition: "Supplier's fax number.",
        set: "Liquor",
      },
      {
        name: "NABCA Supplier Federal ID Number",
        xmlName: "nABCASupplierFederalIDNumber",
        definition: "Supplier's Federal Identification Number.",
        set: "Liquor",
      },
      {
        name: "NABCA Supplier State License Permit Number",
        xmlName: "nABCASupplierStateLicensePermitNumber",
        definition: "Supplier's state license or permit number.",
        set: "Liquor",
      },
      {
        name: "NABCA Supplier Telephone",
        xmlName: "nABCASupplierTelephone",
        definition: "Supplier's telephone.",
        set: "Liquor",
      },
      {
        name: "NABCA US Freight",
        xmlName: "nABCAUSFreight",
        definition: "Shipping charges for the item within the U.S.",
        set: "Liquor",
      },
      {
        name: "Name of Supplier",
        xmlName: "supplierInformation/nameOfSupplier",
        definition: "The name of the supplier.",
        set: "Identification",
      },
      {
        name: "Natural Hair Color Code",
        xmlName:
          "productInformationDetail/beautyPersonalCareHygieneDetail/hairProductInformation/naturalHairColourCode",
        definition:
          "Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the natural colour of the hair for which the product is intended.",
        set: "Descriptions",
      },
      {
        name: "Necessary Trade Item To Use Description",
        xmlName:
          "componentInformation/marketingInformation/necessaryTradeItemToUseDescription",
        definition:
          "A description used to differentiate the stand alone trade items from the trade items that cannot be used on their own for example an add-on for SIMS video game or accessories for i-phone.",
        set: "Components, Descriptions",
      },
      {
        name: "Nesting Direction",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemNesting/nestingDirectionCode",
        definition:
          "Depicts the arrangement of two items that nest together specifically whether they nest against each other or on top of each other.",
        set: "Components, Dimensions",
      },
      {
        name: "Nesting Increment",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemNesting/nestingIncrement",
        definition:
          "Indicates the incremental height of Trade Items nested together. For example, in the case of two garbage cans nested together, this would be the height between the lip of the lower can and the lip on the upper can.",
        set: "Components, Dimensions",
      },
      {
        name: "Nesting Overlap",
        xmlName: "nestingOverlap",
        definition:
          "Amount that a product will nest into another when stacked. Calculated as the difference between the height of one product multiplied by 2 and the height of 2 products stacked.",
        set: "Dimensions",
      },
      {
        name: "Nesting Overlap UOM",
        xmlName: "nestingOverlapUOM",
        definition:
          "The unit of measurement associated with the nesting overlap.",
        set: "Dimensions",
      },
      {
        name: "Nesting Type",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemNesting/nestingTypeCode",
        definition:
          "Depicts whether a nested item fits inside or over the other item in a nesting relationship.",
        set: "Components, Dimensions",
      },
      {
        name: "Net Content",
        xmlName: "componentInformation/tradeItemMeasurements/netContent",
        definition:
          "The amount of the trade item contained by a package, usually as claimed on the label.",
        set: "Components, Dimensions",
      },
      {
        name: "Net Content Declared",
        xmlName: "isNetContentDeclaration",
        definition:
          "This field is used to facilitate local business rules where a declaration of a trade item's net content is not on the product label e.g.UK under 50g.legislation.",
        set: "Packaging",
      },
      {
        name: "Net Content Statement",
        xmlName: "componentInformation/tradeItemMeasurements/netContentStatement",
        definition:
          "This statement correspond to the net content descriptions as stated on the packaging",
        set: "Components, Dimensions",
      },
      {
        name: "Net Due Time Period",
        xmlName: "applicablePaymentTerms/netDueTimePeriod",
        definition: "Time period amount should be paid. For example: 30 DAY",
        set: "Sales",
      },
      {
        name: "Net Volume",
        xmlName: "netVolume",
        definition: "Value of net volume of the trade item. ",
        set: "Dimensions",
      },
      {
        name: "Net Weight",
        xmlName: "componentInformation/tradeItemMeasurements/netWeight",
        definition:
          "Used to identify the net weight of the trade item. Net weight excludes any packaging materials. Has to be associated with a valid UoM.",
        set: "Components, Dimensions",
      },
      {
        name: "NEW/IMPROVED CLAIM(U366)",
        xmlName: "U366",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "No. of pieces in Set",
        xmlName: "numberOfPiecesInSet",
        definition:
          "The total number of separately packaged components comprising a single trade item.",
        set: "Components",
      },
      {
        name: "Non Creditable Grain Amount",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/noncreditableGrain/noncreditableGrainAmount",
        definition:
          "The amount of the non-creditable grain contained in the item. Measured in grams per US regulation.",
        set: "Ingredients",
      },
      {
        name: "Non Creditable Grain Description",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/noncreditableGrain/noncreditableGrainDescription",
        definition:
          "A descriptive term to describe the non creditable grain contained in the item. This value must be supplied when non-creditable grains are present in the trade item. In the US, this description should be from the Food Buying Guide.",
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Additive Statement",
        xmlName: "nonfoodIngredientAdditiveStatement",
        definition:
          'Statement on presence or absence of additives or genetic modification contained in the trade item for example "Contains no preservatives, no artificial colours or flavours and no artificial flavours".',
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Code Reference",
        xmlName: "nonfoodIngredient/nonFoodIngredientCodeReference",
        definition: "A code from a specific code list for a nonFood ingredient.",
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Concern Code",
        xmlName: "nonfoodIngredientOfConcernCode",
        definition: "Specifies a non food ingredient of concern",
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Definition",
        xmlName: "nonfoodIngredient/nonfoodIngredientDefinition",
        definition:
          "A definition associated with the value in the nonfoodIngredientName. The definition should explain to the end user what the nonfood ingredient is.",
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Name",
        xmlName: "nonfoodIngredient/nonFoodIngredientName",
        definition: "The name of the non-food ingredient for example ammonia.",
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Purpose",
        xmlName: "nonfoodIngredient/nonfoodIngredientPurpose",
        definition:
          "A description of the primary purpose that an ingredient serves for example for sunscreen the ingredient may have the purpose of being a UVB Blocker.",
        set: "Ingredients",
      },
      {
        name: "Non Food Ingredient Sequence",
        xmlName: "nonfoodIngredient/sequenceNumber",
        definition:
          "A text sequence (01, 02, 03, sub-nonfoodingredients 01.01, 01.02,01.03...) indicating the nonfoodIngredient order by content percentage of the product.",
        set: "Ingredients",
      },
      {
        name: "Non GTIN Pallet Depth",
        xmlName: "nonGTINPalletDepth",
        definition: "The depth of the pallet load of goods.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Depth UOM",
        xmlName: "nonGTINPalletDepthUOM",
        definition:
          "The unit of measurement associated with the non GTIN pallet depth.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Net Weight",
        xmlName: "nonGTINPalletNetWeight",
        definition:
          "Net weight of the pallet load of goods. The net weight includes the total weight of the contents of the pallet, but excludes the actual pallet itself.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Net Weight UOM",
        xmlName: "nonGTINPalletNetWeightUOM",
        definition:
          "The unit of measurement associated with the non GTIN pallet net weight.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Volume",
        xmlName: "nonGTINPalletVolume",
        definition:
          "The cube or volume of the pallet load of goods in cubic metres.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Volume UOM",
        xmlName: "nonGTINPalletVolumeUOM",
        definition:
          "The unit of measurement associated with the non GTIN pallet volume.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Width",
        xmlName: "nonGTINPalletWidth",
        definition:
          "The width of the pallet load of goods. The width side of the pallet is the side with the forklift arm openings.",
        set: "Hierarchy Info",
      },
      {
        name: "Non GTIN Pallet Width UOM",
        xmlName: "nonGTINPalletWidthUOM",
        definition:
          "The unit of measurement associated with the non GTIN pallet width.",
        set: "Hierarchy Info",
      },
      {
        name: "Non Hazardous Waste Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/hazardousWasteInformation/nonhazardousWasteDescription",
        definition:
          "A classification of non-hazardous waste managed at the federal or state level for example a code for disposal of latex paint.",
        set: "Components, Safety",
      },
      {
        name: "Non Marked Trade Item Components",
        xmlName: "nonMarkedTradeItemComponents",
        definition:
          "This attribute indicates a non-saleable part of the trade item. It is used to specify components of a trade item that cannot be sold separately.",
        set: "Components",
      },
      {
        name: "Non-Food Ingredient Statement",
        xmlName: "nonfoodIngredientStatement/statement",
        definition:
          "The text used to describe the composition of the product that matches what appears on the label for nonfood products.\n\nUsed to inform the buyer and consumer of the ingredients.",
        set: "Ingredients",
      },
      {
        name: "Non-GTIN Logistic Unit Depth",
        xmlName: "logisticsUnitDepth",
        definition:
          'For a logistic unit not identified with a GTIN, the depth measurement (with its unit of measure) of the logistic unit according to the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf). Non-GTIN Logistic Unit Depth may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed to fill or optimize truckloads when shipping in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Height. Used to determine the space in a storage facility in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Height.',
        set: "Dimensions",
      },
      {
        name: "Non-GTIN Logistic Unit Gross Weight",
        xmlName: "nonGTINPalletGrossWeight",
        definition:
          "For a logistic unit not identified with a GTIN, the total weight (with its unit of measure) of the product including the weight of all its packaging materials.\n\nUsed by the seller and the buyer to manage logistics, storage, safety limitations and truckload optimization.",
        set: "Hierarchy Info",
      },
      {
        name: "Non-GTIN Logistic Unit Height",
        xmlName: "nonGTINPalletHeight",
        definition:
          "For a logistic unit not identified with a GTIN, the vertical measurement (with its unit of measure) of the logistic unit according to the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).\n\nUsed to fill or optimize truckloads when shipping in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Depth. Used to determine the space in a storage facility in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Depth.",
        set: "Hierarchy Info",
      },
      {
        name: "Non-GTIN Logistic Unit Width",
        xmlName: "logisticsUnitWidth",
        definition:
          'For a logistic unit not identified with a GTIN, the horizontal measurement with the unit of measure of the logistic unit according to the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf). Non-GTIN Logistic Unit Width may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed to fill or optimize truckloads when shipping in conjunction with Non-GTIN Logistic Unit Height and Non-GTIN Logistic Unit Depth. Used to determine the space in a storage facility in conjunction with Non-GTIN Logistic Unit Height and Non-GTIN Logistic Unit Depth.',
        set: "Dimensions",
      },
      {
        name: "Non-Promotional Product GTIN",
        xmlName: "promotional/nonPromotionalItem",
        definition:
          "The Global Trade Item Number (GTIN) that uniquely identifies the original product/service to provide a link between the promotional product GTIN and the original GTIN.\n\nUsed to indicate the original non-promotional GTIN (e.g., to prove to regulators the reality of the promotion); used in shelf planning. Used to communicate the link between original and promotional products for supply chain workflows.",
        set: "Marketing",
      },
      {
        name: "nonfood ingredient Claim",
        xmlName: "nonfoodIngredient/nonfoodIngredientClaim",
        definition:
          "Descriptive terms used to denote any claims about he ingredient which are not specified elsewhere.",
        set: "Ingredients",
      },
      {
        name: "nonfood ingredient Content Amount",
        xmlName: "nonfoodIngredient/nonfoodIngredientContentAmount",
        definition: "Amount of the ingredient in the product.",
        set: "Ingredients",
      },
      {
        name: "nonfood ingredient Country Of Origin",
        xmlName: "nonfoodIngredient/nonfoodIngredientCountryOfOrigin",
        definition:
          "The country code (codes) from which the nonfood ingredient has been sourced, produced or manufactured, according to criteria established for the purposes of application of the value may or may not be presented on the trade item label.",
        set: "Ingredients",
      },
      {
        name: "Not Legal to Advertise",
        xmlName: "notLegalToAdvertise",
        definition:
          "Indicates whether or not the item is not legal to advertise by province. E.g. some products such as tobacco, beer, over-the-counter drugs cannot be legally advertised according to provincial regulations.",
        set: "Marketing",
      },
      {
        name: "Not Legal to Discount",
        xmlName: "notLegalToDiscount",
        definition:
          "Indicates whether or not the item is not legal to discount by province (i.e. the item is subject to government regulation regarding either price floors or pricing practices).",
        set: "Sales",
      },
      {
        name: "Not Significant Source Of Nutrient",
        xmlName: "notSignificantSourceOfNutrient",
        definition:
          "This will allow for the population of nutrient information where the listed nutrient is in such a trace amount that a statement is placed on the packaging that it is not of significance.",
        set: "Nutritional",
      },
      {
        name: "Note to Physician",
        xmlName:
          "componentInformation/safetyDataSheetInformation/noteToPhysician",
        definition:
          "A description of any measures a physician should take to treat a patient.    ",
        set: "Components",
      },
      {
        name: "Note To Physician",
        xmlName: "safetyDataSheetInformation/noteToPhysician",
        definition:
          "A description of any measures a physician should take to treat a patient.    ",
        set: "Safety",
      },
      {
        name: "NUMBER IN MULTIPACK - ACTUAL(U311)",
        xmlName: "U311",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "NUMBER IN MULTIPACK - BASE(U14)",
        xmlName: "U14",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "NUMBER IN PACK - ACTUAL(U58)",
        xmlName: "U58",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "NUMBER IN PACK - BASE(U224)",
        xmlName: "U224",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "Number Of Base Units",
        xmlName: "numberOfBaseUnits",
        definition:
          "The number of base unit (lowest level) products contained within this product.",
        set: "Hierarchy Info",
      },
      {
        name: "Number of Bottles",
        xmlName: "numberOfBottles",
        definition:
          "Specify the number of bottles that the item comes with or supports. Example: 2, 3, 55",
        set: "Dimensions",
      },
      {
        name: "Number of Boxes",
        xmlName: "numberOfBoxes",
        definition:
          "This attribute represents the number of boxes a product may come in and used to determine if an item comes in multiple boxes.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Number Of Cycles Prior To Withdrawal",
        xmlName:
          "individualPackagingComponentLevel/packagingReuse/numberOfCyclesPriorToWithdrawal",
        definition:
          "Determines reusability in accordance with EN 13429 or ISO/DIS18603.",
        set: "Sustainability",
      },
      {
        name: "Number Of Dividers Horizontal",
        xmlName:
          "packagingInformation/packagingDividerInformation/numberOfDividersHorizontal",
        definition:
          "Specifies the number of internal dividers that separate one layer from another in a trade item (applies to any level with multiple children (pack/case/pallet). For example, 2 means there is a total of two horizontal dividers in the configuration.",
        set: "Packaging",
      },
      {
        name: "Number Of Dividers Vertical",
        xmlName:
          "packagingInformation/packagingDividerInformation/numberOfDividersVertical",
        definition:
          "Specifies the number of vertical internal dividers that separate trade items within a layer in the internal configuration (applies to any level with multiple children: pack/case/pallet).",
        set: "Packaging",
      },
      {
        name: "Number of Episodes",
        xmlName: "audioVisualMediaContentInformation/numberOfEpisodes",
        definition:
          "The number of episodes in the season or set. For example: 2, 3 or 4.",
        set: "Media and Entertainment",
      },
      {
        name: "Number of Frequency Bands",
        xmlName: "numberOfFrequencyBands",
        definition:
          "Provide the number of frequency bandss the item has or supports.  Example: 1, 2, 3",
        set: "Recipient Identification Info",
      },
      {
        name: "Number of Items in Digital Asset",
        xmlName: "dam/imageInfo/numberOfItemsInDigitalAsset",
        definition:
          "The number of items in the digital asset, where the asset contains more than one item.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Number of Layers per GTIN/GTIN Pallet Hi",
        xmlName: "hi",
        definition:
          "The number of complete layers in the logistic unit identified by a GTIN, such as a pallet.",
        set: "Hierarchy Info",
      },
      {
        name: "Number of Layers per non-GTIN Pallet/Non GTIN Pallet Hi",
        xmlName: "nonGTINPalletHi",
        definition:
          "The number of complete layers in the pallet not identified by a GTIN. Only used if the pallet has no GTIN. \n\nUsed by the seller to communicate to the buyer the number of layers in a logistic unit, such as a pallet. The buyer uses this information for automation of the picking and stacking process in the warehouse.",
        set: "Hierarchy Info",
      },
      {
        name: "Number of Packages for Ser Pieces GTIN",
        xmlName: "numberOfPackagesForSerPiecesGTIN",
        definition:
          "The total number of separately packaged components comprising a single trade item.",
        set: "Packaging",
      },
      {
        name: "Number Of Servings Per Package",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/numberOfServingsPerPackage",
        definition: "The total number of servings contained in the package.",
        set: "Components",
      },
      {
        name: "Number Of Servings Range Description",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/numberOfServingsRangeDescription",
        definition:
          "A text description describing the range of servings/portions contained within a trade item. Some items may contain a variance in the number of units or a range, therefore the servings could also vary for the trade item. This attribute should only be used when there is a range of servings. If servings is an exact amount, this should not be used. Ex a bag of meatballs may contain 18-20 meatballs. Serving size may be 2 meatballs. Therefore the numberOfServingsRange= 9-10 servings/portions",
        set: "Components",
      },
      {
        name: "Number Of Smallest Units Per Package",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/numberOfSmallestUnitsPerPackage",
        definition:
          "The total number of smallest units contained in the package. The smallest unit cannot be further divided without breaking or slicing the product.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Number of Units per Layer in a GTIN/GTIN Pallet Ti",
        xmlName: "ti",
        definition:
          "The number of units in a complete layer in a logistic unit identified by a GTIN, such as a pallet.",
        set: "Hierarchy Info",
      },
      {
        name: "Number of Units per Layer in a non-GTIN Pallet/Non GTIN Pallet Ti",
        xmlName: "nonGTINPalletTi",
        definition:
          "The number of units in a complete single layer in a pallet not identified by a GTIN. Only used if the pallet has no GTIN. It indicates the number of trade items placed on a pallet layer according to supplier or retailer preferences.\n\nUsed by the seller to communicate to the buyer the number of units in a layer in a logistic unit, such as a pallet. The buyer uses this information for automation of the picking and stacking process in the warehouse.",
        set: "Hierarchy Info",
      },
      {
        name: "Nutrient Additional Info",
        xmlName: "nutrientInformation/saNutrientAdditionalInfo",
        definition: "Additional Nutrients.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Basis",
        xmlName: "nutrientInformation/nutrientBasisQuantity",
        definition:
          "The value, with its unit of measure, that forms the basis for referring to the nutrient content that appears on the product label.\n\nUsed to inform the consumer of the basis value, with its defined unit of measure, used to calculate the amount of nutrients contained.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Basis Description",
        xmlName: "nutrientInformation/nutrientBasisQuantityDescription",
        definition:
          "The description or additional information of the serving size for the product.\n\nUsed to inform the consumer of the recommended serving size and any additional information upon which the nutrients and energy are based.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Basis Quantity",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientBasisQuantity",
        definition:
          "The basis amount that a nutrient is measured against. In some markets, this is required by regulation. For example, 100 gr, 100 ml, etc. Please refer to the target markets implementation guideline on how to populate this attribute.",
        set: "Components",
      },
      {
        name: "Nutrient Basis Quantity Description",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientBasisQuantityDescription",
        definition:
          "Additional free text information needed to correctly express nutrient basis quantity for example per bottle (100 ml).",
        set: "Components",
      },
      {
        name: "Nutrient Basis Quantity Type Code",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientBasisQuantityTypeCode",
        definition:
          "The type of quantity contained for example measurement, serving size, or container.",
        set: "Components",
      },
      {
        name: "Nutrient Basis Type Code",
        xmlName: "nutrientInformation/nutrientBasisQuantityTypeCode",
        definition:
          "Valid value the nutritional information is based on a set measure or a serving size.\n\nUsed to inform the buyer and/or the consumer of the basis for the nutrient energy information. Used by the buyer for menu planning, recipe creation, analysis. Used in conjunction with Nutrient Basis.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Code",
        xmlName: "nutrientInformation/nutrientDetail/nutrientTypeCode",
        definition:
          "Valid value for a nutrient or energy element that is found in the product.\n\nUsed to inform the consumer and the retailer of the nutrient or energy elements that are found in the product.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Declarations Indicator",
        xmlName: "nutrientRelevantDataProvided",
        definition:
          "Indicator to confirm the relevant nutrient data provided for the product is complete.\n\nUsed by the seller to inform the buyer that the nutrient data is confirmed as complete.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Format Type Code Reference Code",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/code",
        definition: "The code which describes the nutrient format type",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Format Type Code Reference Code List Agency Code",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Format Type Code Reference Code List Agency Name",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Format Type Code Reference Code List Name",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListName",
        definition: "The name of the codelist.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Format Type Code Reference Code List URI",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListURI",
        definition: "The URI for the codelist.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Format Type Code Reference Description",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeDescription",
        definition: "The description for Nutrient Format Code Reference",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Name On Package",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientNameOnPackage",
        definition:
          "The name of the nutrient as it is listed on the fact panel on the package. Only used when the Nutrient Name on Package is different than the Nutrient Code (nutrientTypeCode). Frequently used for supplements.",
        set: "Components",
      },
      {
        name: "Nutrient Name on Package",
        xmlName: "nutrientInformation/nutrientDetail/nutrientNameOnPackage",
        definition:
          "The name of the nutrient as it is listed on the fact panel on the package. Only used when the Nutrient Name on Package is different than the Nutrient Code (nutrientTypeCode). Frequently used for supplements.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Quantity",
        xmlName: "nutrientInformation/nutrientDetail/quantityContained",
        definition:
          "The value that indicates the amount of nutrient element or energy contained in the product per defined quantity with its unit of measure.\n\nUsed to inform the consumer and the buyer of the nutrients and energy contained in a product and its unit of measure.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Quantity Contained",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/quantityContained",
        definition:
          "Measurement Value indicating the amount of nutrient contained in the product. Is expressed relative to the serving size.",
        set: "Components",
      },
      {
        name: "Nutrient Relevant Data Provided DateTime",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientRelevantDataProvidedDateTime",
        definition:
          "The date upon which the isNutrientRelevantDataProvided indicator was last updated.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Relevant Data Provided?",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientRelevantDataProvided",
        definition:
          "Nutrient Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  All values not populated are not relevant or not required to be populated on the product label by local regulations.",
        set: "Components",
      },
      {
        name: "Nutrient Source",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientSource",
        definition:
          "Information about the source ingredient from which the nutrient value is derived.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Type Code",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientTypeCode",
        definition:
          "Code from the list of the INFOODS food component tag names (http://www.fao.org/infoods/infoods/standards-guidelines/food-component-identifiers-tagnames/en/) identifying nutrients contained in the product.",
        set: "Components",
      },
      {
        name: "Nutrient Value Derivation",
        xmlName: "nutrientInformation/nutrientDetail/nutrientValueDerivationCode",
        definition:
          "The derivation of the values, percent of intake and quantity contained, provided in the nutrient class.",
        set: "Nutritional",
      },
      {
        name: "Nutrient Value Derivation Code",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientValueDerivationCode",
        definition:
          "The derivation of the values, percent of intake and quantity contained, provided in the nutrient class.",
        set: "Components, Nutritional",
      },
      {
        name: "Nutrient Value Precision Code",
        xmlName: "nutrientInformation/nutrientDetail/measurementPrecisionCode",
        definition:
          "Valid value for whether the specified nutrient content is approximate or less than as required by regulation and as shown on the product package.\n\nUsed to inform the consumer of the nutrient content value precision as declared.",
        set: "Nutritional",
      },
      {
        name: "Nutrition Label Type Code",
        xmlName: "nutritionLabelTypeCode",
        definition:
          "Code indicating that the trade item is eligible for certain nutritional labeling programs according to a specific regulation ",
        set: "Nutritional",
      },
      {
        name: "Nutritional Claim",
        xmlName: "nutrientInformation/saNutritionalClaim",
        definition: "Indicates claims on packaging made about the nutrient.",
        set: "Nutritional",
      },
      {
        name: "Nutritional Preparation Code",
        xmlName: "nutrientInformation/preparationStateCode",
        definition:
          "Valid value for whether the product is unaltered versus a product that has been altered by consumer preparation, in conjunction with the nutritional panel.\n\nMay be used by the consumer in conjunction with the nutritional panel to understand the differences in full nutritional values, prepared versus unprepared.",
        set: "Nutritional",
      },
    ],
    O: [
      {
        name: "Offer on Pack",
        xmlName: "offerOnPack",
        definition:
          "Contains details of any on pack product offer (consumer or traded).",
        set: "Packaging",
      },
      {
        name: "Opacity Type Code",
        xmlName: "componentInformation/descriptionInformation/opacityTypeCode",
        definition:
          "A code to describe the opacity achieved by the product. The codes may vary by product type. Examples Cosmetics, Glass, Paints and Wood Stains.",
        set: "Components, Descriptions",
      },
      {
        name: "Opened Trade Item Lifespan (Days)",
        xmlName: "componentInformation/tradeItemLifeSpan/openedTradeItemLifespan",
        definition:
          "The number of days the trade item that had been opened can remain on the shelf and must then be removed.",
        set: "Components, Handling and Storage",
      },
      {
        name: "Operator Description",
        xmlName: "operatorDescription",
        definition:
          "Used to relate pertinent product information to operators who sell the final product to consumers.",
        set: "Marketing",
      },
      {
        name: "Optional Nutrient Code",
        xmlName: "optionalNutrientCode",
        definition:
          "A single positive nutrient that food companies may choose to display in addition to the prescribed nutrients on the Health Star Rating Label.   Optional nutrients are defined as properties of food in Schedule 1 of Standard 1.2.7 – Nutrition, Health and Related Claims of the FSC. ",
        set: "Nutritional",
      },
      {
        name: "Order Quantity Multiple",
        xmlName: "orderQuantityMultiple",
        definition:
          "The order quantity multiples in which the trade item may be ordered. If the Order Quantity Minimum is 100, and the Order Quantity Multiple is 20, then the trade item can only be ordered in quantities which are divisible by the Order Quantity Multiple of 20.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Order Sizing Factor",
        xmlName: "orderSizingFactor",
        definition:
          "A trade item specification other than gross, net weight,or cubic feet for a line trade item or a transaction, used for order sizing and pricing purposes.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Orderable Returnable Conditions Code",
        xmlName: "orderableReturnableConditionsCode",
        definition:
          "A code that indicates if the trade item can be ordered and returned if non-sold.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Ordering Lead Time",
        xmlName: "distributionDetails/orderingLeadTime",
        definition: "Lead time required for orders expressed in days.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Ordering Unit Indicator",
        xmlName: "isOrderableUnit",
        definition:
          'Would you (as a Supplier) accept an Order at this Product/Packaging Level. If so, select "True."\n\nWe realize that you may have different standards of doing business per Recipient. Feel free to assign different Orderable Units per Recipient based on your preference. \n\nFor example, allow your most common answer (i.e. true) to use our system default of "ALL," while selecting the Recipient exceptions to receive a different value (i.e. false). ',
        set: "Indicators",
      },
      {
        name: "Ordering UOM",
        xmlName: "orderingUnitOfMeasure",
        definition:
          "The alternate Unit of Measure of how Trade Items are ordered by the Retailer under one Unit of Measure, but sold under another Unit of Measure.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Organic Certification Effective End Date Time",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicCertification/organicCertificationEffectiveEndDateTime",
        definition:
          "The date and time upon which the organic certification is no longer effective.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Organic Certification Effective Start Date Time",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicCertification/organicCertificationEffectiveStartDateTime",
        definition:
          "The date and time upon which the organic certification is effective.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Organic Certification Identification",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicCertification/organicCertificationIdentification",
        definition:
          "A number issued to confirm that something has passed organic certification.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Organic Claim Agency",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicClaimAgencyCode",
        definition:
          "A governing body that creates and maintains standards related to organic products.",
        set: "Components, Components",
      },
      {
        name: "Organic Claim Agency ",
        xmlName:
          "foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyCode",
        definition:
          "A governing body that creates and maintains standards related to organic products.",
        set: "Ingredients",
      },
      {
        name: "Organic Claim Agency Code",
        xmlName: "organicClaim/organicClaimAgencyCode",
        definition:
          "The governing body that creates and maintains standards related to organic products and/or certifies products as organic.\n\nUsed by the buyer for verification purposes.",
        set: "Processing",
      },
      {
        name: "Organic Claim Agency Name",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicClaimAgencyName",
        definition:
          "Organization that issued the organic certificate number confirming that the Trade Item has gone through certification.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Organic Claim Agency Type Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicClaimAgencyTypeCode",
        definition:
          "A code depicting whether an organic agency manages organic standards or issues certifications.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Organic Level Code",
        xmlName: "organicClaim/organicTradeItemCode",
        definition:
          "Valid value for the organic content of the product.\n\nUsed by the buyer to enable search and discovery for the consumer. Used by the buyer for space and assortment planning.",
        set: "Processing",
      },
      {
        name: "Organic Percent Claim",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicPercentClaim",
        definition:
          "The percent of actual organic materials per weight of the trade item. This is usually claimed on the product.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Organic Product Country Of Origin Farming",
        xmlName: "organicProductCountryOfOriginFarming",
        definition:
          "Indication of the country where all agricultural raw materials of which the product is composed have been farmed in.",
        set: "Processing",
      },
      {
        name: "Organic Product Place Of Farming",
        xmlName:
          "foodAndBevIngredient/ingredientOrganicInformation/organicProductPlaceOfFarmingCode",
        definition:
          "Indication of the place where the agricultural raw materials of which the product is composed have been farmed",
        set: "Ingredients, Processing, Processing",
      },
      {
        name: "Organic Product Place Of Farming Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicProductPlaceOfFarmingCode",
        definition:
          "Indication of the place where the agricultural raw materials of which the product is composed have been farmed,",
        set: "Components, Components",
      },
      {
        name: "Organic Trade Item Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/organicClaim/organicTradeItemCode",
        definition:
          "Used to indicate the organic status of a trade item or of one or more of its components.",
        set: "Components, Components, Ingredients",
      },
      {
        name: "Organism Code",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismCode",
        definition: "Code indicating the type of microbiological organism.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Organism Maximum Value",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismMaximumValue",
        definition: "Maximum allowable value of the microbiological organism.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Organism Reference Value",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismReferenceValue",
        definition:
          "Reference values give an indication of which product specific ranges of micro organisms are to be expected and which micro organism contents in the appropriate food products are acceptable due to hygiene rules",
        set: "Components",
      },
      {
        name: "Organism Warning Value",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismWarningValue",
        definition:
          "A microbiological limit which, in a 3–class plan, separates marginally acceptable quality from defective quality",
        set: "Components",
      },
      {
        name: "Orientation Preference Sequence",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemOrientation/orientationPreferenceSequence",
        definition:
          "Depicts the preferred sequence of orientation used to communicate the manufacturers relative preferences of orientation.",
        set: "Components, Dimensions",
      },
      {
        name: "Orientation Type",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemOrientation/orientationType",
        definition: "Depicts via code a display orientation for a trade item.",
        set: "Components, Dimensions",
      },
      {
        name: "Origin Declaration",
        xmlName: "provenanceStatement",
        definition:
          "The exact statement about the place of origin, as declared on the product label, which can be any place where the product is indicated to have come from (it may or may not be the same as Country of Origin).\n\nUsed to inform the consumer of the specific origin as declared on the product.",
        set: "Processing",
      },
      {
        name: "Origin Of Wine Code",
        xmlName: "originOfWineCode",
        definition:
          "Indicates the country, region and sub-region where the wine has been produced. The levels of origin required are sometimes regulated, therefore the values represent a variety that allows a recipient to choose which level is needed.",
        set: "Liquor",
      },
      {
        name: "Original Language Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/originalLanguageCode",
        definition:
          "The code of the language in which the film is released. It is the language spoken on the screen.",
        set: "Media and Entertainment",
      },
      {
        name: "OWN LABEL/PRIVATE LABEL (UDEX:15,IM:U01)",
        xmlName: "U01",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
    ],
    P: [
      {
        name: "Package And Storage About Product",
        xmlName: "packageAndStorageAboutProduct",
        definition:
          "Describes special packaging features or the type of containers the product is packaged in (carton or bag with poly-lining, or reusable plastic tubs) and any special storage instructions. Accented characters may be used.",
        set: "Packaging",
      },
      {
        name: "Package Contents",
        xmlName: "packageContents",
        definition:
          "Descriptive terms to describe what is in the package. This provides a bsic list of components, parts, attachments, etc. which are in the product's packaging. Example: Pencils, pens and erasers.",
        set: "Recipient Identification Info",
      },
      {
        name: "Package Date Reason Type",
        xmlName: "packageDateReasonType",
        definition: "Indication that the package date is voluntary information.",
        set: "Packaging",
      },
      {
        name: "Package Deposit Amount",
        xmlName:
          "packagingInformation/returnableAsset/packagedeposit/returnablePackageDepositAmount",
        definition:
          "The amount of deposit associated with a returnable package.\n\nUsed by the seller to communicate to the buyer the amount of the deposit. Used by the buyer to communicate to the consumer (via receipt, website, mobile) the amount of the deposit.",
        set: "Packaging",
      },
      {
        name: "Package Deposit Identifier",
        xmlName:
          "packagingInformation/returnableAsset/packagedeposit/returnablePackageDepositIdentification",
        definition:
          "The identifier for the package deposit.\n\nUsed by the buyer to program automated return machines, include the deposit amount at Point Of Sale, and/or reconcile invoicing.",
        set: "Packaging",
      },
      {
        name: "Package Disclaimers",
        xmlName: "consumerPackageDisclaimers/consumerPackageDisclaimer",
        definition:
          "Additional information that should be used in advertising and in displaying.",
        set: "Packaging",
      },
      {
        name: "Packaging Category",
        xmlName: "packagingCategory",
        definition:
          "Identifies the hierarchical level of the packaging element, i.e. primary, secondary or tertiary. For example: a bottle in a cardboard box displayed on a shelf. The primary hierarchical level is the bottle (plastic or glass), the secondary level would be the box (cardboard), and the tertiary level would be the film around the pallet.",
        set: "Packaging",
      },
      {
        name: "Packaging Component Description",
        xmlName:
          "individualPackagingComponentLevel/packagingComponentDescription",
        definition:
          "Part of packaging that can be separated by hand or by using simple physical means (EN 13427, ISO/DIS 18601), for example a packaging film.",
        set: "Sustainability",
      },
      {
        name: "Packaging Composite Material Description",
        xmlName:
          "packagingInformation/packagingMaterial/packagingCompositeMaterialDescription",
        definition:
          "A description of any composite material used in packaging. A composite material is a combination of different material.",
        set: "Packaging",
      },
      {
        name: "Packaging Date Format Type",
        xmlName: "packagingDate/tradeItemDateOnPackagingFormatTypeCode",
        definition:
          "A category of date formats for example calendar or ordinal date.",
        set: "Packaging",
      },
      {
        name: "Packaging Date Location",
        xmlName: "packagingDate/tradeItemDateOnPackagingLocation",
        definition:
          "Free text detailing the location of the date marking on the packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Date Type Code",
        xmlName: "packagingDate/tradeItemDateOnPackagingTypeCode",
        definition:
          "Valid value for the type of date on the package to the buyer and consumer.\n\nUsed by the consumer to understand the meaning of the date on the package and make decisions.\nUsed by the buyer for inventory management processes.",
        set: "Packaging",
      },
      {
        name: "Packaging Depth",
        xmlName: "packagingInformation/depth",
        definition:
          "The depth of the packaging as measured according to the GDSN Package Measurement Rules. If the packaging dimensions is for a platform or pallet, the measurements for the platform itself are provided based on the orientation and tolerances for non-consumer trade items in the GDSN Package Measurements Rules.",
        set: "Packaging",
      },
      {
        name: "Packaging Feature Code",
        xmlName: "packagingInformation/packagingFeatureCode",
        definition:
          "Valid value for the features about the packaging of the item.\n\nUsed by the seller to communicate to the buyer and consumer additional information related to packaging features that drive purchasing decisions.",
        set: "Packaging",
      },
      {
        name: "Packaging Function Code",
        xmlName: "packagingInformation/packagingFunctionCode",
        definition:
          'A code that is used to identify packaging features valuable for consumers or any party in the supply chain. ASSOCIATED BUSINESS RULE: If Code Value = "TAMPER_EVIDENT" then "Packaging Type Code" and "Packaging Type Description" must populated.',
        set: "Packaging",
      },
      {
        name: "Packaging Height",
        xmlName: "packagingInformation/height",
        definition:
          "The height of the packaging as measured according to the GDSN Package Measurement Rules. If the packaging dimensions is for a platform or pallet, the measurements for the platform itself are provided based on the orientation and tolerances for non-consumer trade items in the GDSN Package Measurements Rules.",
        set: "Packaging",
      },
      {
        name: "Packaging Labelling Coverage Percentage",
        xmlName:
          "packagingInformation/packagingMaterial/packagingLabellingCoveragePercentage",
        definition: "Percentage of the print/label coverage of the packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Labelling Type Code",
        xmlName:
          "packagingInformation/packagingMaterial/packagingLabellingTypeCode",
        definition:
          "The type of text coverage of a packaging, e.g. Label, Printed on packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Level",
        xmlName: "packagingInformation/packagingLevel",
        definition:
          "Identifies the hierarchical level of the packaging element, i.e. primary, secondary or tertiary.For example: a bottle in a cardboard box displayed on a shelf. The primary hierarchical level is the bottle (plastic or glass), the secondary level would be the box (cardboard), and the tertiary level would be the film around the pallet.",
        set: "Packaging",
      },
      {
        name: "Packaging Marked Date Format",
        xmlName: "packagingDate/tradeItemDateOnPackagingFormatName",
        definition:
          "The format that the date is printed on the package for example YYYY: year, YY: year in century, MM: month number, MMM: month short name, WW: week of year, DD: day of month, D: day of week (Monday=1), ' '-: space and hyphen.",
        set: "Packaging",
      },
      {
        name: "Packaging Marked Nutrition Label Code",
        xmlName: "packagingMarkedNutritionLabelCode",
        definition:
          "Indication of which nutrition call outs or highlights are on the package. A nutrition call out is a graphic which highlights some elements from the nutrition panel for the consumer to have a quick view for example, Front of Package information.",
        set: "Packaging",
      },
      {
        name: "Packaging Marked Recyclable Scheme",
        xmlName: "packagingMarkedRecyclableScheme",
        definition:
          "A marking that the trade item received recognition, endorsement, certification by following guidelines by the label issuing agency. This does not represent claims for regulatory purposes on products such as free from markings.",
        set: "Packaging",
      },
      {
        name: "Packaging Marked Returnable Indicator",
        xmlName: "packagingMarkedReturnable",
        definition:
          "Indicates if the product packaging is marked as returnable (with or without a deposit).\n\nUsed to provide the consumer and the buyer with information on how to handle the product packaging post-consumption. Not to be used for accreditation.",
        set: "Packaging",
      },
      {
        name: "Packaging Marking Language",
        xmlName: "packagingMarkingLanguage",
        definition:
          "The language(s) in which texts are stated in on the product.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Applied Process Code",
        xmlName:
          "packagingInformation/packagingMaterial/packagingmaterialAppliedProcessCode",
        definition:
          "The processes applied to the material or used in the manufacturing of the material to modify/enhance its properties.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Classification Code",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/code",
        definition:
          "The code which identifies the packing material classification used in each packaging component.",
        set: "Packaging, Packaging",
      },
      {
        name: "Packaging Material Coating Type Description",
        xmlName:
          "packagingInformation/packagingMaterial/packagingMaterialCoatingTypeDescription",
        definition:
          "Specifies any coating material that is applied to the packaging material. Allows for the representation of the same value in different languages.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Code 2",
        xmlName: "packagingMaterials/packagingMaterialCode2",
        definition: "The code the packaging material",
        set: "Packaging",
      },
      {
        name: "Packaging Material Colour Code",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/code",
        definition: "The code which Identifies the packaging material colour.",
        set: "Packaging, Packaging",
      },
      {
        name: "Packaging Material Composition Quantity",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialCompositionQuantity",
        definition:
          "The quantity of the packaging material of the trade item. Can be weight, volume or surface, can vary by country.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Element Code",
        xmlName:
          "packagingInformation/packagingMaterial/packagingMaterialElementCode",
        definition:
          "The code that describes the part or element of the packaging of the product associated to a material or composite material.• CAP\n• CORK\n• HANDLE\n• TAB\n• BUNG_SEAL\n• DIVIDER_PROTECTORUsed by the seller to communicate to the buyer and consumer additional information related to packaging that drives purchasing decisions and to conform to regulations concerning recycling of packaging materials.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Launch Date Time",
        xmlName:
          "packagingInformation/packagingMaterial/packagingMaterialLaunchDateTime",
        definition:
          "The first date that a change in packaging material has occurred and does not result in a new GTIN at any level of the item hierarchy, such as, an increase or decrease in packaging material and is delivered to the retailer.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Performance",
        xmlName: "packagingMaterialPerformance",
        definition:
          "Indicates a status of packaging performance based on testing in relationship to minimizing trade item damages.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Performance Code",
        xmlName:
          "packagingInformation/packagingMaterial/packagingMaterialPerformanceCode",
        definition:
          "A status of packaging performance based on testing in relationship to minimizing Trade Item damages.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Quantity",
        xmlName:
          "packagingInformation/packagingMaterial/packagingMaterialCompositionQuantity",
        definition:
          'The amounts of the different materials that the packaging of the product contains.\n\nUsed in conjunction with Packaging Material Code to provide information to the consumer about the amount of different materials that the product packaging contains that can be recycled, re-purposed, or disposed. Also used for the calculation of taxes such as "Eco-packaging contribution".',
        set: "Packaging",
      },
      {
        name: "Packaging Material Recycling Scheme Code",
        xmlName:
          "packagingInformation/packagingMaterial/packagingMaterialRecyclingSchemeCode",
        definition:
          "The code that specifies the recycling scheme the packaging of this trade item will fall within when recycled. Applies to recyclable packaging with or without deposit.• 1 - Polyethylene Terephthalates\n• 20 - Cardboard\n• 22 - Paper\n• 41 - AluminiumUsed by the seller and the buyer to conform to regulations concerning recycling of packaging materials. Used in conjunction with Packaging Material Element Code to describe what part of the packaging relates to this recycling scheme.",
        set: "Packaging",
      },
      {
        name: "Packaging Material Thickness",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialThickness",
        definition: "The thickness of a packaging material.",
        set: "Packaging, Packaging",
      },
      {
        name: "Packaging Material Type Code",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialTypeCode",
        definition:
          "The materials used for the packaging of the trade item for example glass or plastic.",
        set: "Packaging, Packaging",
      },
      {
        name: "Packaging Material Weight 2",
        xmlName: "packagingMaterials/packagingMaterialWeight2",
        definition: "The weight of the packaging material.",
        set: "Packaging",
      },
      {
        name: "Packaging Owner Identification",
        xmlName: "packagingInformation/packagingOwnerIdentification",
        definition: "The GLN of the owner of the packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Owner Name",
        xmlName: "packagingInformation/packagingOwnerName",
        definition: "The name of the owner of the packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Raw Material Code",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingRawMaterialInformation/packagingRawMaterialCode",
        definition:
          "A code describing the type of raw or recycled material the packaging material is made from.",
        set: "Packaging, Packaging",
      },
      {
        name: "Packaging Raw Material Content Percentage",
        xmlName:
          "packagingInformation/packagingMaterial/compositeMaterialDetail/packagingRawMaterialInformation/packagingRawMaterialContentPercentage",
        definition:
          "The percentage of the type of raw material the packaging material is made from.",
        set: "Packaging, Packaging",
      },
      {
        name: "Packaging Recyclability Assessment Specification Code",
        xmlName:
          "packagingInformation/packagingRecyclabilityAssessmentInformation/packagingRecyclabilityAssessmentSpecificationCode",
        definition:
          "The code that identifies the specification that defines how the degree of recyclability of packaging is calculated during assessment. These can be an agency, a regulation or directive, a community agreement, etc.The following example illustrates the use of recyclability attributes commonly used together for a product sold with two levels of packaging – a plastic pump dosing bottle encased in a cardboard folding box:\n•  packagingLevel = 1 (the pump dosing unit) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 80%\n    -  packagingRecyclabilityValueEffectiveDate = 01.06.2022\n•  packagingLevel = 2 (the folding box) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 90%\n    -  packagingRecyclabilityValueEffectiveDate = 01.02.2022\n\nAfter the packaging is updated to improve recyclability:\n•  packagingLevel = 1 (the pump dosing unit) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 90%\n    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022\n•  packagingLevel = 2 (the folding box)\n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 95%\n    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022Used to inform the retailer which specification is used as the basis to evaluate the degree of recyclability of an item's packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Recyclability Value",
        xmlName:
          "packagingInformation/packagingRecyclabilityAssessmentInformation/packagingRecyclabilityValue",
        definition:
          "The value that indicates the degree of recyclability of an item's packaging, which is calculated on the basis of the standard chosen in packagingReyclabilityAssessmentSpecificationCode. This can be a percentage or value and can vary by country.The following example illustrates the use of recyclability attributes commonly used together for a product sold with two levels of packaging – a plastic pump dosing bottle encased in a cardboard folding box:\n•  packagingLevel = 1 (the pump dosing unit) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 80%\n    -  packagingRecyclabilityValueEffectiveDate = 01.06.2022\n•  packagingLevel = 2 (the folding box) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 90%\n    -  packagingRecyclabilityValueEffectiveDate = 01.02.2022\n\nAfter the packaging is updated to improve recyclability:\n•  packagingLevel = 1 (the pump dosing unit) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 90%\n    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022\n•  packagingLevel = 2 (the folding box)\n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 95%\n    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022Used by retailers and consumers to know the degree of recyclability of an item's packaging.",
        set: "Packaging",
      },
      {
        name: "Packaging Recyclability Value Effective Date",
        xmlName:
          "packagingInformation/packagingRecyclabilityAssessmentInformation/packagingRecyclabilityValueEffectiveDate",
        definition:
          "The first date that the item with this packaging is available.The following example illustrates the use of recyclability attributes commonly used together for a product sold with two levels of packaging – a plastic pump dosing bottle encased in a cardboard folding box:\n•  packagingLevel = 1 (the pump dosing unit) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 80%\n    -  packagingRecyclabilityValueEffectiveDate = 01.06.2022\n•  packagingLevel = 2 (the folding box) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 90%\n    -  packagingRecyclabilityValueEffectiveDate = 01.02.2022\n\nAfter the packaging is updated to improve recyclability:\n•  packagingLevel = 1 (the pump dosing unit) \n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 90%\n    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022\n•  packagingLevel = 2 (the folding box)\n    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD\n    -  packagingRecyclabilityValue = 95%\n    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022Used by retailers to avoid publishing incorrect information in webshops and in advertising when the packaging is changed to one with a different degree of recyclability.",
        set: "Packaging",
      },
      {
        name: "Packaging Recycled Content Description",
        xmlName:
          "individualPackagingComponentLevel/packagingRecycledContent/packagingRecycledContentDescription",
        definition:
          "The description of recycled content that is being measured for.",
        set: "Sustainability",
      },
      {
        name: "Packaging Recycled Content Ratio",
        xmlName:
          "individualPackagingComponentLevel/packagingRecycledContent/packagingRecycledContentRatio",
        definition:
          "The ratio of recycled material to total material used in packaging constituents, packaging components, or packaging systems",
        set: "Sustainability",
      },
      {
        name: "Packaging Recycled Content Type Code",
        xmlName:
          "individualPackagingComponentLevel/packagingRecycledContent/packagingRecycledContentTypeCode",
        definition: "The type of recycled content that is being measured for.",
        set: "Sustainability",
      },
      {
        name: "Packaging Recycling Process Type Code",
        xmlName: "packagingInformation/packagingRecyclingProcessTypeCode",
        definition:
          "The process the packaging could undertake for recyclable & sustainability programs.",
        set: "Packaging",
      },
      {
        name: "Packaging Recycling Scheme Code",
        xmlName: "packagingInformation/packagingRecyclingSchemeCode",
        definition:
          "A code determining the recycling scheme the packaging of this trade item will fall within when recycled. Applies to recyclable packaging with or without deposit.",
        set: "Packaging",
      },
      {
        name: "Packaging Refund Obligation Name",
        xmlName:
          "packagingInformation/packagedeposit/packagingRefundObligationName",
        definition:
          "The refund obligation that the packaging of this item is subject to for example the DPG = Deutsche Pfandsystem GmbH which is a refund obligation for one way beverage packaging for beer, sparkling soft drinks and mineral water.",
        set: "Packaging, Packaging, Packaging",
      },
      {
        name: "Packaging Refuse Obligation Name",
        xmlName: "packagingInformation/packagingRefuseObligationName",
        definition:
          "The name of the specific refuse obligation that may apply to packaging or that the packaging may be exempt from.",
        set: "Packaging",
      },
      {
        name: "Packaging Renewable Content Description",
        xmlName:
          "individualPackagingComponentLevel/packagingRenewableContent/packagingRenewableContentDescription",
        definition:
          "The description of renewable content that is being measured for.",
        set: "Sustainability",
      },
      {
        name: "Packaging Renewable Content Ratio",
        xmlName:
          "individualPackagingComponentLevel/packagingRenewableContent/packagingRenewableContentRatio",
        definition:
          "The ratio of renewable material used to total material used in packaging constituents, components, units of packaging or packaging systems.",
        set: "Sustainability",
      },
      {
        name: "Packaging Renewable Content Type Code",
        xmlName:
          "individualPackagingComponentLevel/packagingRenewableContent/packagingRenewableContentTypeCode",
        definition: "The type of renewable content that is being measured for.",
        set: "Sustainability",
      },
      {
        name: "Packaging Reusability Standard Code",
        xmlName:
          "individualPackagingComponentLevel/packagingReuse/packagingReusabilityStandardCode",
        definition:
          "The reusability standard used to determine packaging reuse rate.",
        set: "Sustainability",
      },
      {
        name: "Packaging Reusability Standard Description",
        xmlName:
          "individualPackagingComponentLevel/packagingReuse/packagingReusabilityStandardDescription",
        definition:
          "The description for the reusability standard used to determine packaging reuse rate.",
        set: "Sustainability",
      },
      {
        name: "Packaging Reuse Rate",
        xmlName:
          "individualPackagingComponentLevel/packagingReuse/packagingReuseRate",
        definition:
          "The number of times packaging accomplishes the same use, rotation or trip for which it was conceived and designed within its life cycle. Demonstration of reusability must first be established in accordance with EN 13429 or ISO/DIS18603 once final.",
        set: "Sustainability",
      },
      {
        name: "Packaging Shape Code",
        xmlName: "packagingInformation/packagingShapeCode",
        definition: "A code depicting the shape of a package for example cone.",
        set: "Packaging",
      },
      {
        name: "Packaging Sustainability Feature Code",
        xmlName: "packagingInformation/packagingSustainabilityFeatureCode",
        definition:
          "A feature of the packaging that contributes to sustainability initiatives for example that it is made from renewable materials.",
        set: "Packaging",
      },
      {
        name: "Packaging Sustainability Statement",
        xmlName: "packagingSustainabilityStatement",
        definition:
          "A statement about the trade Item and/or packaging that makes the item sustainable. This may refer to some marketing facing information that is relative to the consumer concerning sustainability for example “Now available in plastic vs. aluminum packaging. Resulting in 15% less energy and 10% waste reduction in manufacturing”.",
        set: "Packaging",
      },
      {
        name: "Packaging Terms And Conditions Code",
        xmlName: "packagingInformation/packagingTermsAndConditionsCode",
        definition:
          "Indicates if the packaging given in the described packaging configuration is a rented, exchangeable, against deposit or one way/not reusable.",
        set: "Packaging",
      },
      {
        name: "Packaging Type Code",
        xmlName: "packagingInformation/packagingTypeCode",
        definition:
          "Valid value for the type of package or container of the product.\n\nUsed in conjunction with the Packaging Material to provide information to the buyer on the type of product packaging for business process such as space planning, supply chain processes, recycling processes. Used in conjunction with the Packaging Material to communicate packaging type to the consumer.",
        set: "Packaging",
      },
      {
        name: "Packaging Type Description",
        xmlName: "packagingInformation/packagingTypeDescription",
        definition:
          "A text description of the type of packaging used for the trade item.",
        set: "Packaging",
      },
      {
        name: "Packaging Weight",
        xmlName: "packagingInformation/packagingWeight",
        definition:
          "Packaging weight is the physical weight of the packaging itself, minus the contents and may be provided at all levels.",
        set: "Packaging",
      },
      {
        name: "Packaging Weight Reduction",
        xmlName:
          "individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/packagingWeightReduction",
        definition:
          "The reduction of packaging weight with regards to a previous reference state expressed as a percentage reduction or an absolute weight reducin [e.g. g or kg / packaging constituent, component or system].",
        set: "Sustainability",
      },
      {
        name: "Packaging Width",
        xmlName: "packagingInformation/width",
        definition:
          "The width of the packaging as measured according to the GDSN Package Measurement Rules. If the packaging dimensions is for a platform or pallet, the measurements for the platform itself are provided based on the orientation and tolerances for non-consumer trade items in the GDSN Package Measurements Rules.",
        set: "Packaging",
      },
      {
        name: "Pallet Disposition Code",
        xmlName: "packagingInformation/platformTermsAndConditionsCode",
        definition:
          "Valid value for the expected action to be taken with the pallet.\n\nUsed by the seller to communicate to the buyer what to do with the pallet after it is received.",
        set: "Packaging",
      },
      {
        name: "Paper Surface Finish",
        xmlName: "paperInformation/paperSurfaceFinish",
        definition:
          "Valid Value to denote the appearance of the surface of the paper. Example: Satin, Uncoated, Vellum.",
        set: "Recipient Identification Info",
      },
      {
        name: "Paper Weight",
        xmlName: "paperInformation/paperWeight",
        definition:
          "Valid Value to denote the weight of the paper. This is a reference to the thickness and reference to a pound weight. Examples 10, 60, 120.",
        set: "Recipient Identification Info",
      },
      {
        name: "Parent Item ",
        xmlName: "link/parentItem/gtin",
        definition:
          "Unique product identification number (GTIN) for a parent item with lower-level trade items (children) in a product hierarchy.",
        set: "Link",
      },
      {
        name: "Parental Adv Sticker Code",
        xmlName: "publicationTitleRating/hasParentalAdvisorySticker",
        definition: "Indication of the presence of parental advisory sticker.",
        set: "Publication",
      },
      {
        name: "Party Address",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/partyAddress",
        definition: "The address associated with the party.",
        set: "Components, Identification, Ingredients",
      },
      {
        name: "Party GLN",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/gln",
        definition:
          "The Global Location Number (GLN) is a structured Identification of a physical location, legal or functional entity within an enterprise. The GLN is the primary party identifier. ",
        set: "Components, Identification, Ingredients",
      },
      {
        name: "Party Name",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/partyName",
        definition: "The name of the party expressed in text.",
        set: "Components, Identification, Ingredients",
      },
      {
        name: "Party Role",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/partyRoleCode",
        definition:
          "A code that identifies the role of a party in a business transaction. ",
        set: "Components, Identification, Ingredients",
      },
      {
        name: "Pattern Code",
        xmlName: "componentInformation/descriptionInformation/colour/patternCode",
        definition: "Indicates the pattern code of the product.",
        set: "Components, Descriptions",
      },
      {
        name: "Pay Per View Window",
        xmlName: "payPerViewWindow",
        definition:
          "The number of days of the pay per view window. The pay per view window is the timeframe when a film is available as pay per view on a cable TV channel.",
        set: "Media and Entertainment",
      },
      {
        name: "Payment Due Basis Type Code",
        xmlName: "applicablePaymentTerms/paymentDueBasisTypeCode",
        definition:
          "The basis type on which the payment is due. For example, RECEIPT_OF_GOODS.",
        set: "Sales",
      },
      {
        name: "Payment Method",
        xmlName: "applicablePaymentTerms/paymentMethodCode",
        definition: "Describes the cellular phone service payment method.",
        set: "Sales",
      },
      {
        name: "Payment Terms Type Code",
        xmlName: "applicablePaymentTerms/paymentTermsTypeCode",
        definition:
          "The type of payment term expressed as a code for example DISCOUNT.",
        set: "Sales",
      },
      {
        name: "Peg Hole Number",
        xmlName:
          "componentInformation/tradeItemMeasurements/pegMeasurements/pegHoleNumber",
        definition:
          "Used to indicate the peg hole numbers when more than one hole is present in the product or packaging. Peg holes should be numbered from the upper left corner of the front of the package to the bottom right corner. The peg holes should be identified from left to right, top to bottom with left to right having precedence. The number of peg holes and their measurements must be determined following the orientation of the product. Product orientation is based upon the General EAN.UCC Specification. Required if the trade item is displayed on a peg board. ",
        set: "Components, Dimensions",
      },
      {
        name: "Peg Hole Type",
        xmlName:
          "componentInformation/tradeItemMeasurements/pegMeasurements/pegHoleTypeCode",
        definition: "The type and shape of the peg hole used for the packaging.",
        set: "Components, Dimensions",
      },
      {
        name: "Peg Horizontal",
        xmlName:
          "componentInformation/tradeItemMeasurements/pegMeasurements/pegHorizontal",
        definition:
          "Used to indicate the horizontal distance from the edge of the trade item to the center of the hole into which the peg is inserted when the trade item is displayed on a pegboard.",
        set: "Components, Dimensions",
      },
      {
        name: "Peg Vertical",
        xmlName:
          "componentInformation/tradeItemMeasurements/pegMeasurements/pegVertical",
        definition:
          "Used to indicate the vertical distance from the edge of the trade item to the center of the hole into which the peg is inserted when the trade item is displayed on a pegboard. The hole into which the peg is inserted when the trade item is displayed on a pegboard. The measurement is always taken from the top edge of the trade item to the hole.",
        set: "Components, Dimensions",
      },
      {
        name: "Percent of Fat In Cheese",
        xmlName: "fatPercentageInDryMatter",
        definition:
          "The percentage of fat in the dry matter of a cheese product. Dry matter is the content of a product after all fluids are removed.\n\nUsed by the buyer for assortment planning.\n\nUsed by the consumer for search and discovery.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Percent of Fruit Juice",
        xmlName: "juiceContentPercentage",
        definition:
          "The percentage of fruit juice contained in the product.\n\nUsed by the buyer for assortment planning. Used by the consumer for search and discovery.",
        set: "Ingredients",
      },
      {
        name: "Percent of Milk Fat In Dairy",
        xmlName: "fatInMilkContent",
        definition:
          "The percentage of milk fat contained in the milk portion of the dairy product.\n\nUsed by the buyer for assortment planning.\n\nUsed by the consumer for search and discovery.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Percent of Product Components Labeled for Disassembly And Recycling",
        xmlName: "componentsLabeledForDisassemblyRecyclingPercent",
        definition:
          "Provides the percentage of the product components that are clearly labeled on how to facilitate product disassembly and recycling. For example if the product is a VCR and remote control and the remote control is labeled for recycling, but the VCR is not, then the percentage equals 50.",
        set: "Disposal",
      },
      {
        name: "Percentage Of Alcohol By Volume Measurement Precision Code",
        xmlName: "percentageOfAlcoholByVolumeMeasurementPrecisionCode",
        definition:
          "Indicates the precision of the measure for the percentage of alcohol by volume on label e.g. Alc. < 0,5 vol.",
        set: "Liquor",
      },
      {
        name: "Percentage of Daily Value Intake",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/dailyValueIntakePercent",
        definition:
          "The percentage of the recommended daily intake of a nutrient as recommended by authorities of the target market. Is expressed relative to the serving size and base daily value intake.",
        set: "Components, Nutritional",
      },
      {
        name: "Percentage Of Moisture Loss",
        xmlName: "percentageOfMoistureLoss",
        definition: "Percentage of moisture loss after cooking the product.",
        set: "Food and Beverage",
      },
      {
        name: "Percentage Of Plastic Components Made From a Plant Based Material",
        xmlName: "renewablePlantBasedPlasticComponentsPercent",
        definition:
          "The percentage of the plastic components only made from rapidly renewable plant-based material by net weight of product (excludes packaging).",
        set: "Sustainability",
      },
      {
        name: "Percentage Of Water Content",
        xmlName: "percentageOfWaterContent",
        definition: "Percentage of product that is water.",
        set: "Food and Beverage",
      },
      {
        name: "Performance Type",
        xmlName: "performanceType",
        definition:
          "A text description that indicates the conditions in which the recording took place.",
        set: "Media and Entertainment",
      },
      {
        name: "Permit Identification End Date",
        xmlName: "regulatoryInformation/permitIdentification/permitEndDate",
        definition: "The date on which the permit expires.",
        set: "Regulatory",
      },
      {
        name: "Permit Identification Number",
        xmlName: "regulatoryInformation/permitIdentification/permitNum",
        definition:
          "Identification of the permit or license given by the regulatory agency.",
        set: "Regulatory",
      },
      {
        name: "Permit Identification Start Date",
        xmlName: "regulatoryInformation/permitIdentification/permitStartDate",
        definition: "The start date on which the permit is effective.",
        set: "Regulatory",
      },
      {
        name: "Person Name",
        xmlName:
          "globalModelInformation/globalModelContactInformation/personName",
        definition:
          "The name of the individual that can be contacted to provide additional information",
        set: "Identification",
      },
      {
        name: "Person Or Department Name",
        xmlName: "personOrDepartmentName",
        definition:
          "The name of the individual or department that can be contacted to provide additional information.",
        set: "Marketing",
      },
      {
        name: "Physical Form Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/physicalFormDescription",
        definition:
          "A description of the form of the product for example gas, liquid, powder. Colorless, Fragrant, liquid in relation to any relation to any hazardous materials. ",
        set: "Components, Safety",
      },
      {
        name: "Physical State",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/physicalStateCode",
        definition:
          "Any physical state a chemical ingredient may be in for example LIQUID. ",
        set: "Components, Safety",
      },
      {
        name: "PhysioChemical Characteristic Code",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/physioChemicalCharacteristic/physioChemicalCharacteristicCode",
        definition: "Code indicating the type of physiochemical characteristic. ",
        set: "Components, Food and Beverage",
      },
      {
        name: "PhysioChemical Characteristic Value",
        xmlName:
          "componentInformation/foodAndBeveragePropertiesInformation/physioChemicalCharacteristic/physioChemicalCharacteristicValue",
        definition: "Measurement value of the physicochemical characteristic.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Piece Count",
        xmlName: "pieceCount",
        definition:
          "The number of small pieces, slices, or different items within the product. Piece Count applies to things such as puzzles, building block sets, and products that contain multiple different items (such as tool sets, dinnerware sets, gift baskets, art sets, makeup kits, or shaving kits). EXAMPLE: (1) A 500-piece puzzle has a &quot;Piece Count&quot; of 500. (2) A 105-Piece Socket Wrench set has a piece count of &quot;105.&quot; (3) A gift basket of 5 different items has a &quot;Piece Count&quot; of 5.",
        set: "Hierarchy Info",
      },
      {
        name: "Placement Of Divider",
        xmlName:
          "packagingInformation/packagingDividerInformation/placementOfDivider",
        definition:
          "Indicates layer number that the dividers are found. Layer dividers are always counted starting at the uppermost layer (top to bottom) or leftmost divider (Left to right). For example “3”, “5” would mean that the 2 dividers are located on the 3rd and 5th layer counting always from the top to bottom.",
        set: "Packaging",
      },
      {
        name: "Platform Type Code",
        xmlName: "packagingInformation/platformTypeCode",
        definition:
          "Valid value for the type of pallet that the unit load is delivered on.\n\nUsed by the seller to communicate to the buyer the type and size of the pallet. Used by the buyer for handling, storing and moving. The buyer determines the type of equipment suitable for transporting the pallet or dolly in the warehouse based on the pallet/dolly size and type.",
        set: "Packaging",
      },
      {
        name: "Player Age Range",
        xmlName: "ageRangeDescription",
        definition:
          "Note: This attribute is being deprecated in a future release. Use targetConsumerAge from TargetConsumer class in MarketingInformationModule. Description of the recommended age range of participating players.",
        set: "Media and Entertainment",
      },
      {
        name: "PO Box",
        xmlName: "brandOwnerStructuredAddress/poBox",
        definition: "The post office box for the contact. ",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Point Value",
        xmlName: "pointValue",
        definition:
          "Number to denote an assigned value to the product to build/convey truckload quantity in an alternative measurement, rather than traditional cubic measurements. A truck or container of a common size will be allotted a total number points which can be loaded inside. The sum of the point values of all of the products to be loaded onto that truck or container can not exceed the allotted points for the truck/container. For example, a truck is allotted 100 points. Orders to be placed on the truck are 5 items at 10 points and 10 items at 8 points. The total of the orders is 130 points. The load plan will need to be recalculated as it is too large for the truck.",
        set: "Partner Specific",
      },
      {
        name: "Portion Control",
        xmlName: "portionControl",
        definition:
          "Identifies if item requires portion control: bulk vs prepackaged.  Typically not put in a recipe if it is portion controlled",
        set: "Partner Specific",
      },
      {
        name: "Post Consumer Recycled %",
        xmlName: "postConsumerRecycledContentPercentage",
        definition:
          "Indicates the percentage of post-consumer material used in the trade item. The post-consumer material is collected from recycle bins and used as pulp to make new items. The percentage of post-consumer material is needed to drive whether the recycled logo goes on the item.",
        set: "Sustainability",
      },
      {
        name: "Post Harvest Treatment Chemical Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/postHarvestTreatmentChemicalCode",
        definition:
          "Specifies if the fruit or vegetable has been treated or not post harvesting with a chemical or wax.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Post Process Trade Item Treatment Physical Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/postProcessTradeItemTreatmentPhysicalCode",
        definition:
          "Produce has gone some physical process whether altered or other physical processes after harvesting.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Postal Code",
        xmlName: "brandOwnerStructuredAddress/postalCode",
        definition: "Text specifying the postal code for an address.",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Precautionary Statement Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/gHSDetail/precautionaryStatement/precautionaryStatementsCode",
        definition:
          "Measures listed on a hazardous label to minimize or prevent adverse effects. For GHS, the precautionary statements have been linked to each GHS hazard statement and type of hazard. Precautionary statements for GHS cover prevention, response in cases of accidental spillage or exposure, storage, and disposal. ",
        set: "Components, Safety",
      },
      {
        name: "Precautionary Statement Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/gHSDetail/precautionaryStatement/precautionaryStatementsDescription",
        definition:
          "A description of the measures listed on a hazardous label to minimize or prevent adverse effects.",
        set: "Components, Safety",
      },
      {
        name: "Precautions",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/precautions",
        definition:
          "Specifies additional precautions to be taken before preparation or consumption of the product.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Preliminary Item Status Code",
        xmlName: "preliminaryItemStatusCode",
        definition:
          "A code designating whether the trade item has data that the information provider intends to correct or add values to due to pre-production unknowns (PRELIMINARY) or whether the item has attribute values that reflect go to market state (FINAL).",
        set: "Indicators",
      },
      {
        name: "Preparation Instructions",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/preparationInstructions",
        definition:
          "Textual instruction on how to prepare the product before serving.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Preparation Instructions Formatting Pattern",
        xmlName: "preparationInstructionsFormattingPattern",
        definition:
          "The formatting pattern of text for preparation instructions to denote a paragraph breaks. It will be up to the recipient to determine the formatting style they will use.",
        set: "Food and Beverage",
      },
      {
        name: "Preparation State",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/preparationStateCode",
        definition:
          "Code specifying whether the nutrient information applies to the prepared on unprepared state of the product.",
        set: "Components",
      },
      {
        name: "Preparation Type",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/preparationTypeCode",
        definition:
          "A Code specifying the technique used to make the product ready for consumption. For example: baking, boiling.",
        set: "Components",
      },
      {
        name: "Preparation Type Code",
        xmlName: "foodAndBevPreparationInfo/preparationType",
        definition:
          "Valid value for the method used to make the product ready for consumption.\n\nUsed to provide one or more options to the consumer on how to prepare the product for consumption. Used by the buyer for search and discovery.",
        set: "Food and Beverage",
      },
      {
        name: "Presentation Acceptance Date Time",
        xmlName: "presentationAcceptanceDateTime",
        definition:
          "The date and time terms for submitting and item for presentation were accepted by the vendor. The information is used for auditing purposes.",
        set: "Marketing",
      },
      {
        name: "Preservation Technique Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/preservationTechniqueCode",
        definition:
          "Code value indicating the preservation technique used to preserve the product from deterioration.",
        set: "Components, Components, Ingredients, Processing",
      },
      {
        name: "Previous Packaging Weight",
        xmlName:
          "individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/previousPackagingWeight",
        definition:
          "The packaging weight of the previous product used to calculate the packaging weight reduction.",
        set: "Sustainability",
      },
      {
        name: "Price",
        xmlName: "additionalTradeItemPrice/tradeItemPrice",
        definition:
          "The price of the product, as defined by the Price Type Code.\n\nUsed by the seller to communicate to the buyer the price of a product. The type of price is defined by the Price Type Code.",
        set: "Sales",
      },
      {
        name: "Price Basis Quantity",
        xmlName: "additionalTradeItemPrice/priceBasisQuantity",
        definition:
          "The price basis quantity is the associated quantity of trade item for which a price is given.",
        set: "Sales",
      },
      {
        name: "Price By Measure Type",
        xmlName: "priceByMeasureType",
        definition: "Indicator to show how a product is sold.",
        set: "Sales",
      },
      {
        name: "Price Comparison Content Type",
        xmlName: "priceComparisonContentType",
        definition:
          "Code indicating how the value in Price Comparison Measurement is used to calculate the comparative price, which is printed on shelf labels.",
        set: "Sales",
      },
      {
        name: "Price Comparison Quantity",
        xmlName: "priceComparisonMeasurement",
        definition:
          "The quantity of the product and its unit of measure that are used to display the price per unit comparison in store and online.\n\nUsed by the seller to communicate to the buyer the information needed to calculate the comparison price to similar products. The buyer uses this information to communicate to the consumer to help them make informed buying decisions.",
        set: "Sales",
      },
      {
        name: "Price Effective End Date",
        xmlName: "additionalTradeItemPrice/priceEffectiveEndDate",
        definition:
          "The effective end date of the price is optional based upon the agreement by the trading partners. If an invalid end date is communicated, then it is implied that the price and its effective date are effective until further notice.",
        set: "Sales",
      },
      {
        name: "Price Effective Start Date",
        xmlName: "additionalTradeItemPrice/priceEffectiveStartDate",
        definition:
          "This is the effective start date of the price agreed to by the trading partners. This start date is mandatory and, if no end date is communicated, then implies that the price is effective until further notice. Various types of dates may be pre-aligned between buyer and seller.",
        set: "Sales",
      },
      {
        name: "Price Type Code",
        xmlName: "additionalTradeItemPrice/tradeItemPriceTypeCode",
        definition:
          "Valid value representing the type of Price associated with the product, for example catalogue price.\n\nUsed by the seller to communicate to the buyer the type of price of a product that is populated in the Price attribute. Used by the buyer to determine the business process to be used with the Price.",
        set: "Sales",
      },
      {
        name: "Pricing Item Indicator",
        xmlName: "pricingItemIndicator",
        definition:
          "This attribute will trigger an item to be populated into the 1Sync Price & Promotion Management Application, regardless of whether or not an item is orderable. It is used in conjunction with the Primary Delivery Method attribute.",
        set: "Sales",
      },
      {
        name: "Pricing Pack",
        xmlName: "pricingPack",
        definition:
          "A numeric attribute that allows manufacturers to represent the actual pack value assocaited with an item's price rather than its physical quantity of next level item(s)/pack value",
        set: "Sales",
      },
      {
        name: "Primary Added Flavoring Code",
        xmlName: "primaryAddedFlavouringCode",
        definition:
          "The flavoring which has been added to the alcohol product. This is the primary addition.",
        set: "Liquor",
      },
      {
        name: "Primary Image",
        xmlName: "dam/primaryImage",
        definition:
          "Indicates whether the asset is the primary image.  This attribute is used for the IM UI display purposes only and is not sent to recipeints.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Product Activity Country",
        xmlName:
          "foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/countryOfActivity/countryCode",
        definition: "The geographic area where an activity has taken place.",
        set: "Ingredients",
      },
      {
        name: "Product Activity Region Description",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionDescription",
        definition:
          "The region in which a processing or other activity has been performed for example processing, bottling, manufacturing.",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "Product Activity Type Code",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityTypeCode",
        definition:
          "A code depicting the type of activity being performed on a trade item for example processing, bottling, manufacturing.",
        set: "Components, Ingredients, Processing",
      },
      {
        name: "Product Characteristic Code",
        xmlName: "productCharacteristics/productCharacteristicCode",
        definition:
          "Valid value for the characteristics of a product. Describes product specific consumer information.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Sequence Number",
        xmlName: "productCharacteristics/productCharacteristicSequenceNumber",
        definition:
          "A sequence number indicating the order number of the set of characteristics.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Value as a Code",
        xmlName: "productCharacteristics/productCharacteristicValueCode",
        definition:
          "Valid value to depict the Product Characteristic Code as a code.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Value as a Description",
        xmlName: "productCharacteristics/productCharacteristicValueDescription",
        definition:
          "Valid value for the Product Characteristic Code as a description.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Value as a Measurement",
        xmlName: "productCharacteristics/productCharacteristicValueMeasurement",
        definition:
          "Valid value for the Product Characteristic Code as a measurement.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Value Integer",
        xmlName: "productCharacteristics/productCharacteristicValueInteger",
        definition: "The product characteristic value expressed as an integer.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Value Numeric",
        xmlName: "productCharacteristics/productCharacteristicValueNumeric",
        definition: "The product characteristic value expressed as a float.",
        set: "Identification",
      },
      {
        name: "Product Characteristic Value String",
        xmlName: "productCharacteristics/productCharacteristicValueString",
        definition:
          "The product characteristic value expressed as a string (text value with no language).",
        set: "Identification",
      },
      {
        name: "Product Characteristics Value Amount",
        xmlName: "productCharacteristics/productCharacteristicValueAmount",
        definition:
          "The product characteristic value expressed as an amount (with currency code).",
        set: "Identification",
      },
      {
        name: "Product Characteristics Value Date Time",
        xmlName: "productCharacteristics/productCharacteristicValueDateTime",
        definition:
          "The product characteristic value expressed as a date and time.",
        set: "Identification",
      },
      {
        name: "Product Color Description",
        xmlName:
          "componentInformation/descriptionInformation/colour/colourDescription",
        definition: "Free text description of the color of the trade item.",
        set: "Components",
      },
      {
        name: "Product Condition",
        xmlName: "productCondition",
        definition:
          "Valid Value to denote the condition of the product. Examples- New, Refurbished, Used",
        set: "Recipient Identification Info",
      },
      {
        name: "Product Customizable?",
        xmlName: "isProductCustomizable",
        definition:
          "Indicates whether the Items that the Retailer markets are customizable to meet the end consumer’s requirements.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Product Description",
        xmlName: "productDescription",
        definition:
          "An understandable and useable description of a product using a combination of key elements such as Brand Name, Sub-Brand (if applicable), Functional Name, Variant, and Net Content. The description should be unique and meaningful to manage and describe the product. Examples: • Brand Base Invisible Solid Deodorant AP Stick Spring Breeze 3.4oz  • Brand Laundry Detergent Liquid Compact Regular Instant Stain Unscented 100 mL • Brand Hair Color Liquid Light to Medium Blonde 32 fl oz.\n\nAllows for the representation of the same value in different languages but not for multiple values in a single language.\n\nUsed by the seller to describe the product to the buyer and the consumer. Could be modified by the buyer to meet business and system requirements, such as limitations for length of description. \n\nThe description should be unique in order that buyers and consumers can properly distinguish between similar but distinct trade items. While there are legitimate circumstances under which more than one GTIN with the same description will coexist in the supply chain (e.g. dimensional or gross weight change greater than 20% as the old container is phased out), any duplication of the trade item description shall be carefully evaluated by the seller to ensure that it is materially the same trade item to the buyer and the consumer as the previous one.",
        set: "Descriptions",
      },
      {
        name: "Product Form Description",
        xmlName: "productForm",
        definition:
          "The physical form or shape of the product.\n\nUsed to inform the buyer and/or consumer about the shape or form of the product.",
        set: "Global",
      },
      {
        name: "Product Formulation Statement Description",
        xmlName:
          "productFormulationStatement/productFormulationStatementDescription",
        definition:
          "A textual statement listed on the Product Formulation\nStatement as specified in the requirements, rules and\nregulations set forth by the applicable Product Formulation\nStatement Regulatory Body. The name and position of the\ncompany official who has signed the actual statement.",
        set: "Ingredients",
      },
      {
        name: "Product Genre",
        xmlName: "genreTypeCodeReference",
        definition: "The code of the genre of media item.",
        set: "Media and Entertainment",
      },
      {
        name: "Product Grade",
        xmlName: "tradeItemGradeInformation/gradeCode",
        definition:
          "The description of the product's evaluation or ranking or class, such as quality, size, weight.\n\nUsed by the buyer to communicate to the consumer the grade associated to the product. Used by the buyer for verification and compliance. Used by the buyer in assortment planning.",
        set: "Marketing",
      },
      {
        name: "Product Handling Code",
        xmlName: "handlingInstructions/handlingInstructionCode",
        definition:
          "Valid value for the information and processes needed to safely handle the product.\n\nUsed to inform the transporter, buyer and consumer of proper handling of the product.",
        set: "Handling and Storage",
      },
      {
        name: "Product Information Effective Date/Time",
        xmlName: "effectiveDate",
        definition:
          "The date/time when the product information becomes effective.\n\nUsed by the data recipient to determine the date/time when the product information should be applied in their system.",
        set: "Dates",
      },
      {
        name: "Product Information Legal Disclaimer",
        xmlName: "productInformationLegalDisclaimer",
        definition:
          "A legal disclaimer from the information provider about the data being published in the item message.",
        set: "Indicators",
      },
      {
        name: "Product is or Contains Liquid",
        xmlName: "productIsOrContainsLiquid",
        definition:
          "Indicator to denote the item is a liquid or it contains a liquid. ",
        set: "Packaging",
      },
      {
        name: "Product Line",
        xmlName: "audioVisualMediaProductLine",
        definition:
          "The name of the product line that the trade item belongs to. A product line is a price grouping.",
        set: "Media and Entertainment",
      },
      {
        name: "Product Marked Recyclable",
        xmlName: "productMarkedRecyclable",
        definition:
          "Trade item has a recyclable indication marked on it. This may be a symbol from one of many regional agencies.",
        set: "Packaging",
      },
      {
        name: "Product Marked With Ingredients?",
        xmlName: "productMarkedWithIngredients",
        definition:
          "Trade item packaging contains information pertaining to its ingredients.This is a yes/no (Boolean) where yes equals marked with ingredients.",
        set: "Indicators",
      },
      {
        name: "Product Marketing Message",
        xmlName: "marketingMessage/tradeItemMarketingMessage",
        definition:
          "Generate consumer demand and influence buying decisions with a solid Marketing Message!\n\nDescribe you Item in 150+ words including your Brand Name, Product Name, Features & Benefits, and Keywords (commonly searched words).\n\nPut your best foot forward by being specific and informative, clear and conversational and by using sentence case.",
        set: "Marketing",
      },
      {
        name: "Product Range",
        xmlName: "componentInformation/descriptionInformation/productRange",
        definition:
          "A name, used by a BrandOwner, that span multiple consumer categories or uses. E.g. (Waist Watchers).",
        set: "Components, Descriptions",
      },
      {
        name: "Product RoHS Compliance Code",
        xmlName: "isTradeItemROHSCompliant",
        definition:
          "Indicates if the product is compliant with the European Union RoHS Directive (the restriction of the use of certain hazardous substances in electrical and electronic equipment), a government regulated agency that sets guidelines for products not to contain certain hazardous substances.",
        set: "Sustainability",
      },
      {
        name: "Product Serving Size",
        xmlName: "productServingSize",
        definition:
          'Acc. to § 5 (2) "Nutrition labeling regulations for foodstuffs" nutritional values can be given additionally per serving that is quantitatively fixed on the label or per serving, as far as the number of covered servings is indicated on the packaging once prepared, serving size = unprepared',
        set: "Food and Beverage",
      },
      {
        name: "Product Shape Code",
        xmlName: "tradeItemFormCode",
        definition:
          "Valid value for the shape of the product, excluding the packaging.\n\nUsed to identify the shape of a product or deviation from a common type of product shape. Used by the buyer in assortment decisions and may be communicated to the consumer.",
        set: "Descriptions",
      },
      {
        name: "Product Temperature Condition Code",
        xmlName: "tradeItemTemperatureConditionTypeCode",
        definition:
          "Valid value to identify the state of the product when purchased by the consumer.\n\nUsed to communicate to the consumer the condition of the product when purchased.",
        set: "Handling and Storage",
      },
      {
        name: "Product Textural Characteristics",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/productPreparationTextureInformation/productTexturalCharacteristics",
        definition:
          "The code for the agency which maintains the food and drinks texture or thickness code list. For example, International Dysphagia Diet Standardisation Initiative (IDSSI)",
        set: "Components, Food and Beverage",
      },
      {
        name: "Product Texture Agency Code",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/productPreparationTextureInformation/productTextureAgencyCode",
        definition:
          "Statement by the brand owner as noted on the product packaging to describe and confirm the flow or textural characteristics of a particular product at the time of testing.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Product Texture Code",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/productPreparationTextureInformation/productTextureCode",
        definition:
          "Specify the texture or thickness of the contained product as a code.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Product Title",
        xmlName: "audioVisualMediaProductTitle",
        definition: "Title of the audio visual media product.",
        set: "Media and Entertainment",
      },
      {
        name: "Product Type",
        xmlName: "productType",
        definition:
          "Choose the Product Type that best describes the hierarchy level of your item. \n\nUsed to communicate how the product hierarchy is constructed. A common three-tier hierarchy (from largest to smallest) is Pallet, Case, Each.",
        set: "Global",
      },
      {
        name: "Product Type Description",
        xmlName: "functionalName",
        definition:
          "The generic description provided by the seller to describe the type, form or function of the product or service.\n\nExamples: \n\n• liquid laundry\n• powder laundry\n• laundry pod\n• detergent\n• toothpaste\n• facial tissue\n• potato chips vs. potato crisps\n\nUsed by the buyer to help classify the product or service. Can also be used for discovery.",
        set: "Descriptions",
      },
      {
        name: "Product Variation",
        xmlName: "variants/variant",
        definition:
          "The description used to communicate differentiating characteristics of the product in a product line, identified by unique GTINs.\n\nUsed to inform the consumer about available product variations. Used by the buyer to evaluate product mix and in shelf management.",
        set: "Descriptions",
      },
      {
        name: "Product Yield",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/productYieldInformation/productYield",
        definition: "Product Quantity after preparation.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Product Yield Type Code",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/productYieldInformation/productYieldTypeCode",
        definition: "Code indicating the type of yield measurement.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Product Yield Variation",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/productYieldInformation/productYieldVariationPercentage",
        definition:
          "Indication of range in percent of the given cooking / roasting loss. Percentage that the actual weight of the trade item differs upward or downward from the average or estimated product yield.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Production Facility GLN",
        xmlName: "productionFacilityGln",
        definition:
          "Identifies the facility where the product is being produced. Enables users to identify and look up the name of the facility where the product has been produced.",
        set: "Processing",
      },
      {
        name: "Production Facility Name",
        xmlName: "productionFacilityName",
        definition:
          "Designation of a business and location of the commercial unit, where the product is produced. As a product might be produced at different locations, multiple indications are possible.",
        set: "Processing",
      },
      {
        name: "Production Type",
        xmlName: "productionType",
        definition:
          "Indicates how product is made/sold. Examples: MF – Manufactured, PU – Purchased, CP – Co-Packed.",
        set: "Processing",
      },
      {
        name: "Production Variant  Discontinued DateTime",
        xmlName: "productionVariantDiscontinuedDateTime",
        definition:
          "Date on which the product variant of the trade item, which has been manufactured, is no longer being manufactured.",
        set: "Dates",
      },
      {
        name: "Production Variant Cancelled DateTime",
        xmlName: "productionVariantCancelledDateTime",
        definition:
          "The date on which the cancellation of the product variant launch of a trade item what was never and will never be manufactured is done.",
        set: "Dates",
      },
      {
        name: "Production Variant Description",
        xmlName: "productionVariantDescription",
        definition:
          "Free text assigned by the manufacturer to describe the production variant. Examples are: Package serie X, package serie Y.",
        set: "Descriptions",
      },
      {
        name: "Production Variant Effective Date",
        xmlName: "productionVariantEffectiveDate",
        definition:
          "The start date of a production variant. The variant applies to products having a date mark ( a best befor date or expiration date) on the package that comes on or after the effective date.",
        set: "Dates",
      },
      {
        name: "Promotion Purchase Price",
        xmlName: "c4p4PromotionPurchasePrice",
        definition:
          "The promotion or override purchase price that is appropriate to the retailer. It is assigned by the vendor to the consumer unit when selling to the retailer.",
        set: "Sales",
      },
      {
        name: "Promotion Purchase Price End Date",
        xmlName: "c4p4PromotionPurchasePriceEndDate",
        definition:
          "The end date that is associated with the retailer Promotion purchase price when selling to the retailer.",
        set: "Sales",
      },
      {
        name: "Promotion Purchase Price Start Date",
        xmlName: "c4p4PromotionPurchasePriceStartDate",
        definition:
          "The start date that is associated with the retailer Promotion purchase price when selling to the retailer.",
        set: "Sales",
      },
      {
        name: "Promotion Type Code",
        xmlName: "promotional/promotionalTypeCode",
        definition:
          "Valid value to identify the type of promotional variation of the base product.\n\nUsed by the seller to communicate to the buyer the type of promotional variation of the product. Used by the buyer in managing business processes such as ordering, selling and merchandising. May be used in conjunction with the Non-Promotional Product GTIN. (Refer to GTIN Management Standards (https://www.gs1.org/1/gtinrules) if a GTIN change is required.)",
        set: "Marketing",
      },
      {
        name: "Proof Of Optimized Packaging Weight Standard Code",
        xmlName:
          "individualPackagingComponentLevel/packagingWeightOptimisation/proofOfOptimizedPackagingWeightStandardCode",
        definition:
          "The demonstration that the packaging has been minimized by weight or volume in accordance with EN 13428 or ISO/DIS 18602.",
        set: "Sustainability",
      },
      {
        name: "Proof Of Optimized Packaging Weight Standard Description",
        xmlName:
          "individualPackagingComponentLevel/packagingWeightOptimisation/proofOfOptimizedPackagingWeightStandardDescription",
        definition: "The description for the proof of adequate packaging weight",
        set: "Sustainability",
      },
      {
        name: "Proof Of Packaging Weight Reduction Description",
        xmlName:
          "individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/proofOfPackagingWeightReductionDescription",
        definition:
          "The description for the proof of packaging weight reduction is based on.",
        set: "Sustainability",
      },
      {
        name: "Proof Of Packaging Weight Reduction Standard Code",
        xmlName:
          "individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/proofOfPackagingWeightReductionStandardCode",
        definition:
          "The standard for the proof of packaging weight reduction is based on.",
        set: "Sustainability",
      },
      {
        name: "Property Amount",
        xmlName: "alternateClassification/additionalProperty/propertyAmount",
        definition:
          "A property of a classification of an item expressed as an amount (value and currency).",
        set: "Identification",
      },
      {
        name: "Property Code",
        xmlName: "alternateClassification/additionalProperty/propertyCode",
        definition:
          "A property of a classification of an item expressed as a code.",
        set: "Identification",
      },
      {
        name: "Property Code Agency Code",
        xmlName:
          "alternateClassification/additionalProperty/propertyCodeAgencyCode",
        definition: "Property Code Agency Code",
        set: "Identification",
      },
      {
        name: "Property Code Description",
        xmlName:
          "alternateClassification/additionalProperty/propertyCodeDescription",
        definition: "Property Code Description",
        set: "Identification",
      },
      {
        name: "Property Code List Version",
        xmlName:
          "alternateClassification/additionalProperty/propertyCodeListVersion",
        definition: "Property CodeList Version",
        set: "Identification",
      },
      {
        name: "Property DateTime",
        xmlName: "alternateClassification/additionalProperty/propertyDateTime",
        definition:
          "A property of a classification of an item expressed as a date and time.",
        set: "Identification",
      },
      {
        name: "Property Description",
        xmlName: "alternateClassification/additionalProperty/propertyDescription",
        definition:
          "A property of a classification of an item expressed as a description.",
        set: "Identification",
      },
      {
        name: "Property Float",
        xmlName: "alternateClassification/additionalProperty/propertyFloat",
        definition:
          "A property of a classification of an item expressed as a float for example 0.00.",
        set: "Identification",
      },
      {
        name: "Property Integer",
        xmlName: "alternateClassification/additionalProperty/propertyInteger",
        definition:
          "A property of a classification of an item expressed as an integer.",
        set: "Identification",
      },
      {
        name: "Property Measurement",
        xmlName: "alternateClassification/additionalProperty/propertyMeasurement",
        definition:
          "A property of a classification of an item expressed as a measurement.",
        set: "Identification",
      },
      {
        name: "Property String",
        xmlName: "alternateClassification/additionalProperty/propertyString",
        definition:
          "A property of a classification of an item expressed as text.",
        set: "Identification",
      },
      {
        name: "Protective Equipment",
        xmlName:
          "componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipment",
        definition: "The manufacturer recommended protective equipment",
        set: "Components",
      },
      {
        name: "Protective Equipment Additional Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentAdditionalDescription",
        definition:
          "Additional information regarding when protective equipment is recommended or required.",
        set: "Components, Safety",
      },
      {
        name: "Protective Equipment Body Area Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentBodyAreaCode",
        definition:
          "A code determining the part of the body the protective equipment is meant to protect for example EYE",
        set: "Components, Safety",
      },
      {
        name: "Protective Equipment Description",
        xmlName:
          "safetyDataSheetInformation/protectiveEquipment/protectiveEquipment",
        definition:
          "Recommended protective equipment information expressed in an SDS/MSDS. ",
        set: "Safety",
      },
      {
        name: "Protective Equipment Recommended Status Code",
        xmlName:
          "safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentStatusCode",
        definition:
          "A code determining whether the protective equipment is recommended or required. ",
        set: "Safety",
      },
      {
        name: "Protective Equipment Status Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentStatusCode",
        definition:
          "A code determining whether the protective equipment is recommended or required",
        set: "Components",
      },
      {
        name: "Provenance Statement",
        xmlName:
          "componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/provenanceStatement",
        definition:
          "The place a trade item originates from. This is to be specifically used to enable things such as cities, mountain ranges, regions that do not comply with ISO standards.",
        set: "Components",
      },
      {
        name: "Province State Code",
        xmlName: "brandOwnerStructuredAddress/provinceStateCode",
        definition:
          "A code specifying a province or state in abbreviated format for example NJ.",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Proximo Cut off Day",
        xmlName: "applicablePaymentTerms/proximoCutOffDay",
        definition: "The day of the month the payment becomes due.",
        set: "Sales",
      },
      {
        name: "PST Applicable by Province",
        xmlName: "pSTApplicableByProvince",
        definition:
          "Taxes applicable to the product at point-of-sale to the consumer. A two part code constisting of: Part I, PST = Provincial Sales Tax and Part II, The two-character province or territory code.",
        set: "Taxation",
      },
      {
        name: "Public Release Date",
        xmlName: "publicReleaseDate",
        definition:
          "The date on which all neutral item data associated with the trade item becomes publicly available, to all registered users of GS1net, on the GS1net Registry.",
        set: "Dates",
      },
      {
        name: "Publisher Name",
        xmlName: "publisherName",
        definition: "The publisher of the book.",
        set: "Publication",
      },
      {
        name: "Publisher Name GLN",
        xmlName: "publisherNameGLN",
        definition: "The GLN of the Publisher of the Book.",
        set: "Publication",
      },
      {
        name: "Purchase Price",
        xmlName: "c4p4PurchasePrice",
        definition:
          "The purchase price appropriate to the retailer that is assigned by the vendor to the consumer unit when selling to the retailer.",
        set: "Sales",
      },
      {
        name: "Purchase Price Start Date",
        xmlName: "c4p4PurchasePriceStartDate",
        definition:
          "The start date that is associated with the retailer purchase price when selling to the retailer.",
        set: "Sales",
      },
      {
        name: "Purchasing Information",
        xmlName: "disPurchasingInformation",
        definition:
          "Provide additional information the recipient may need to know regarding purchasing the item. &nbsp;If the case pack is relevant, please provide quantity contains and GTIN for the pack here.",
        set: "Recipient Identification Info",
      },
    ],
    Q: [
      {
        name: "Quality Supplier File Number ",
        xmlName: "qualitySupplierFileNumber",
        definition: "Food item spec number on Merlin",
        set: "Partner Specific",
      },
      {
        name: "Quality Supplier File Version Number ",
        xmlName: "qualitySupplierFileVersionNumber",
        definition: "Food item spec version number on Merlin",
        set: "Partner Specific",
      },
      {
        name: "Quantity Of Lines On Calculator",
        xmlName: "quantityOfLinesOnCalculator",
        definition:
          "Number to denote the number of lines which can be displayed on the calculator.",
        set: "Recipient Identification Info",
      },
      {
        name: "Quantity of Next Level GTIN within Inner Pack",
        xmlName: "quantityOfNextLevelWithinInnerPack",
        definition:
          "Indicates the number of next lower level trade items contained within the physical non-GTIN assigned each or inner-packs (inner-pack).",
        set: "Hierarchy Info",
      },
    ],
    R: [
      {
        name: "Rail Gauge",
        xmlName: "railGauge",
        definition: "Provide the gauge of the rail. Example: HO, O, N",
        set: "Dimensions",
      },
      {
        name: "Range of the Number of Servings",
        xmlName: "numberOfServingsRangeDescription",
        definition:
          "The range of the number of servings in the product as shown on the product package.\n\nUsed by the buyer to communicate to the consumer the range of the number of servings per product.  Used by the seller to communicate the number of servings range only when the number of servings is variable. When the number of servings is exact, use Servings Per Product.",
        set: "Food and Beverage",
      },
      {
        name: "Rank Below Species",
        xmlName: "organismClassification/rankBelowSpecies",
        definition:
          "This can be either the Sub-Species, Variety, Sub-Variety, Form, and/or Sub-Form of an organism. All are taxonomic rank below that of species. For the EU this is representative of the OECD Commercial Type.",
        set: "Processing",
      },
      {
        name: "Rating Content Description",
        xmlName: "publicationTitleRating/ratingContentDescriptorCode",
        definition:
          "A code that identifies one or several elements that have triggered a particular rating and/or may be of interest or concern.",
        set: "Publication",
      },
      {
        name: "Raw Material Used In Preparation Weight",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/rawMaterialUsedInPreparationWeight",
        definition:
          "The weight of the raw materials (meat) used to produce the finished food product.",
        set: "Components",
      },
      {
        name: "REACH Chemical Product Use Desciptor Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHChemicalProductUseDescriptorCodeType",
        definition:
          "The types of preparation the substance is contained in end-use.",
        set: "Components, Safety",
      },
      {
        name: "REACH Chemical registration Number",
        xmlName:
          "safetyDataSheetInformation/chemicalInformation/chemicalIngredient/rEACHChemicalRegistrationNumber",
        definition:
          "A unique registration number for a chemical for a company. This is issued by the European Chemical Agency (ECHA) and is unique per chemical.",
        set: "Safety",
      },
      {
        name: "REACH Chemical Registration Number ",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/rEACHChemicalRegistrationNumber",
        definition:
          "A unique registration number for a chemical for a company. This is issued by the European Chemical Agency (ECHA) and is unique per chemical.",
        set: "Components",
      },
      {
        name: "REACH Environment Release Use Category Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHEnvironmentReleaseUseCategoryCode",
        definition:
          "The broad conditions of use from the environmental perspective.",
        set: "Components",
      },
      {
        name: "REACH Environmental Release Use Desciptor Code",
        xmlName:
          "safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHEnvironmentReleaseUseCategoryCode",
        definition:
          "The broad conditions of use from the environmental perspective. An example of a REACH Environment Release Category is ERC 3 Formulation in materials. ",
        set: "Safety",
      },
      {
        name: "REACH Process Use Desciptor Code",
        xmlName:
          "safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHProcessUseDescriptorCode",
        definition:
          "The technical process or application in which the substance is used from an occupational perspective. An example of a REACH Process Use Descriptor is PROC 7 Industrial Spraying. ",
        set: "Safety",
      },
      {
        name: "REACH Process Use Descriptor Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHProcessUseDescriptorCode",
        definition:
          "The technical process or application in which the substance is used from an occupational perspective. An example of a REACH Process Use Descriptor is PROC 7 Industrial Spraying. ",
        set: "Components",
      },
      {
        name: "REACH Sector Use Desciptor Code",
        xmlName:
          "safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHSectorUseDescriptorCode",
        definition:
          "The sector of the economy the substance is used. Use includes manufacture in the chemical industry, mixing of substances at formulator's level as well as industrial, professional and consumer end-uses. An example of a REACH sector use Descriptor is SU4 Manufacture of food products. ",
        set: "Safety",
      },
      {
        name: "REACH Sector Use Descriptor Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHSectorUseDescriptorCode",
        definition:
          "The sector of the economy the substance is used. Use includes manufacture in the chemical industry, mixing of substances at formulator's level as well as industrial, professional and consumer end-uses. An example of a REACH sector use Descriptor is SU4 Manufacture of food products.",
        set: "Components",
      },
      {
        name: "Recipe",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/recipe",
        definition:
          "A description of how the product is used with other ingredients to yield a new result different than the trade item.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Recommended Area Of Consumer Pick Up Code",
        xmlName: "recommendedConsumerPickupAreaCode",
        definition:
          "When selling a bulk item to a consumer, the retailer must know a recommended placement for the consumer purchase decision point of the item and location within the retail store . For example a potato salad bulk my need to be portioned to a consumer at a service counter as the purchase amount is dependent on what the consumer would like to purchase. Datatype codelist RecommendedAreaOfConsumerPickupCode, with values ",
        set: "Sales",
      },
      {
        name: "Recycled Material Code",
        xmlName: "recycledMaterialContent/recycledMaterialCode",
        definition: "Type of recycled material used to create the item.",
        set: "Sustainability",
      },
      {
        name: "Recycled Material Percentage",
        xmlName: "recycledMaterialContent/recycledMaterialPercentage",
        definition:
          "Corresponding percentage of the recycled material used to create the item. Used in conjunction with Recycled Material attribute.",
        set: "Sustainability",
      },
      {
        name: "Recycling Information",
        xmlName: "recyclingInformation",
        definition: "Label instruction on how to recycle the item",
        set: "Food and Beverage",
      },
      {
        name: "Referenced File Type Code",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/referencedFileTypeCode",
        definition: "The file type that is being referenced.",
        set: "Components, Components, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Referenced GTIN",
        xmlName: "referencedTradeItem/referencedTradeItemGTIN",
        definition:
          "A referenced product (Referenced GTIN) which is in a the relationship to this product such as substituted or replaced.\n\nUsed to inform the buyer of the referenced product GTIN. Used to inform the buyer of the type of relationship between this product and a referenced product.",
        set: "Identification",
      },
      {
        name: "Referenced GTIN Type Code",
        xmlName: "referencedTradeItem/referencedTradeItemTypeCode",
        definition:
          "Valid value for the relationship to a Referenced GTIN such as substituted or replaced.\n\nUsed to inform the buyer of the type of relationship between this product and a referenced product.",
        set: "Identification",
      },
      {
        name: "Referenced Trade Item Type Code",
        xmlName: "nonGTINReferencedItem/referencedTradeItemTypeCode",
        definition:
          "A code depicting the type of trade item that is referenced for a specific purpose for example substitute, replaced by, equivalent trade items.",
        set: "Identification",
      },
      {
        name: "ReferencedFile Type Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/referencedFileInformation/referencedFileTypeCode",
        definition: "The file type that is being referenced.",
        set: "Components",
      },
      {
        name: "REFILL/REFILLABLE(U85)",
        xmlName: "U85",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "Registration Agency",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegistrationInformation/registrationAgency",
        definition: "The Agency that the file has been registered with.",
        set: "Components, Regulatory",
      },
      {
        name: "Registration End Date",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegistrationInformation/registrationEndDateTime",
        definition: "The Date that the registration will expire.",
        set: "Components, Regulatory",
      },
      {
        name: "Registration Number",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegistrationInformation/registrationNumber",
        definition: "The number assigned by the registration agency.",
        set: "Components, Regulatory",
      },
      {
        name: "Regulated Chemical Description",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalDescription",
        definition: "A text description of the regulated chemical or formula.",
        set: "Components, Regulatory",
      },
      {
        name: "Regulated Chemical Name",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalName",
        definition:
          "The name of a chemical regulated by a chemical regulation or agency. For example Chlorobenzene.",
        set: "Components, Regulatory",
      },
      {
        name: "Regulated Chemical Sunset Date",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalSunsetDateTime",
        definition:
          "As the date from which the placing on the market and the use of a substance is prohibited or restricted.",
        set: "Components, Regulatory",
      },
      {
        name: "Regulated Chemical Type Code",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalTypeCode",
        definition:
          "The type of regulated chemical as defined by the regulatory agency. Example Endocrine Substance, Human Product, Medicine Product.",
        set: "Components, Regulatory",
      },
      {
        name: "Regulated Product Name",
        xmlName: "regulatedProductName/statement",
        definition:
          "The product name provided by the seller in adherence with laws, regulations or administrative provisions applicable in the country. Not all products have a regulated name.\n\nUsed to identify to the consumer the prescribed, regulated or generic name of a product. This differentiates the regulated name from any other name the product may be known by for marketing purposes.",
        set: "Descriptions",
      },
      {
        name: "Regulation Community Level Code",
        xmlName: "regulatoryInformation/regulationCommunityLevelCode",
        definition:
          "The type of territory the regulation is issued by for example a nation or territory considered as an organized political community under a government. Examples include; UNION, MUNICIPALITY, PROVENCE_OR_STATE.",
        set: "Regulatory",
      },
      {
        name: "Regulation Compliance Indicator",
        xmlName: "regulatoryInformation/isTradeItemRegulationCompliant",
        definition:
          "The indicator specifying whether the product is compliant, not compliant or not applicable to the regulation associated with the Regulation Type Code.\n\nUsed to indicate to the buyer whether the product is in compliance with a specific regulation. Used in conjunction with the Regulation Type Code.",
        set: "Regulatory",
      },
      {
        name: "Regulation Level Code Reference Code",
        xmlName: "regulatoryInformation/regulationLevelCodeReference/code",
        definition:
          'An external code associated with a specific warning type and possibly a description that helps recipients identify items of similar levels of warnings, that cannot be obtained from a description. The information provided in this attribute may come from a specific article in the full Regulation. For examples : - if the regulationTypeCode is "SMALL_PARTS" the regulationLevelCodeReference would be “Level 5” with codeDescription “Not for ages under 3” - if the regulationTypeCode is "BIOCIDE_REGULATION" the regulationLevelCodeReference would be “PT1” with codeDescription “Human hygiene”.',
        set: "Regulatory",
      },
      {
        name: "Regulation Level Code Reference Code Description",
        xmlName:
          "regulatoryInformation/regulationLevelCodeReference/codeDescription",
        definition: "The description for the codelist.",
        set: "Regulatory",
      },
      {
        name: "Regulation Level Code Reference Code List Agency Code",
        xmlName:
          "regulatoryInformation/regulationLevelCodeReference/codeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Regulatory",
      },
      {
        name: "Regulation Level Code Reference Code List Agency Name",
        xmlName:
          "regulatoryInformation/regulationLevelCodeReference/codeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Regulatory",
      },
      {
        name: "Regulation Level Code Reference Code List Name",
        xmlName:
          "regulatoryInformation/regulationLevelCodeReference/codeListName",
        definition: "The name of the codelist.",
        set: "Regulatory",
      },
      {
        name: "Regulation Level Code Reference Code List URI",
        xmlName: "regulatoryInformation/regulationLevelCodeReference/codeListURI",
        definition: "The URI for the codelist.",
        set: "Regulatory",
      },
      {
        name: "Regulation Pictogram Or Warning Quantity",
        xmlName: "regulatoryInformation/regulationPictogramOrWarningQuantity",
        definition:
          "The number of pictograms or warnings on a product package according to regulations. Example Mexican and Chilean Food labelling regulation.",
        set: "Regulatory",
      },
      {
        name: "Regulation Restrictions and Descriptors",
        xmlName: "regulatoryInformation/regulationRestrictionsAndDescriptors",
        definition:
          "A textual detail needed by trading partners that explains any restrictions and/or descriptors explaining any information helpful about a regulation.",
        set: "Regulatory",
      },
      {
        name: "Regulation Restrictions Community Identifier",
        xmlName: "regulatoryInformation/regulationRestrictionCommunityIdentifier",
        definition:
          "An Identifier identifying the community like ISO country, ISO sub division, Municipal zip code for example 10001, 840, US-AR.",
        set: "Regulatory",
      },
      {
        name: "Regulation Type Code",
        xmlName: "regulatoryInformation/regulationTypeCode",
        definition:
          "Valid value for a regulation. Used in conjunction with Regulation Compliance Indicator. \n\nUsed to communicate to the buyer the regulation to which the product status is applicable and whether or not the buyer can sell or distribute the product.\nUsed by the buyer to derive the legal product category to determine the proper handling and storage.",
        set: "Regulatory",
      },
      {
        name: "Regulatory Act",
        xmlName: "regulatoryInformation/regulatoryAct",
        definition:
          "The name given to the requirement assigned by the regulatory agency.",
        set: "Regulatory",
      },
      {
        name: "Regulatory Act Compliance Level Code",
        xmlName: "regulatoryInformation/regulatoryActComplianceLevelCode",
        definition:
          "Code that compares the amount/level of the product or its composition with threshold amounts/levels defined by a regulation indicated in attribute regulationTypeCode. This can vary for each regulation and market or region. For example: concentration limit for restricted explosive precursors defined by EU Regulation 2019/1148. The level of containment of specific toxicants for a product which contains carcinogens and/or reproductive toxicants established in California’s Proposition 65 (Prop 65), etc.",
        set: "Regulatory",
      },
      {
        name: "Regulatory Agency",
        xmlName: "regulatoryInformation/regulatoryAgency",
        definition:
          "The required information is the name of the specific entity in charge of issuing the permit to a company.",
        set: "Regulatory",
      },
      {
        name: "Regulatory Body Code",
        xmlName:
          "productFormulationStatement/productFormulationStatementRegulatoryBodyCode",
        definition:
          "The agency within the target market which is responsible for\nthe requirements, rules and regulations governing the\nproduct formulation statement calculations, format and\ncontents.",
        set: "Ingredients",
      },
      {
        name: "Reinstatement Date",
        xmlName: "reinstatementDate",
        definition:
          "The date when a previously discontinued item is reinstated and again available for ordering.",
        set: "Dates",
      },
      {
        name: "Relationship To Similar Carried Product",
        xmlName: "relationshipToSimilarCarriedProduct",
        definition:
          "A code that indicates whether the item is adding duplication to items already carried by the retailer or if the item is adding variety.",
        set: "Descriptions",
      },
      {
        name: "Remote Control Technology Type Code",
        xmlName: "remoteControlTechnologyTypeCode",
        definition:
          "Value to denote the technlogy the remote control uses to connect to the produt. Example Infrared.",
        set: "Recipient Identification Info",
      },
      {
        name: "Rennet Type Code",
        xmlName: "rennetTypeCode",
        definition: "The type of rennet used for coagulation.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Responsibility",
        xmlName:
          "globalModelInformation/globalModelContactInformation/responsibility",
        definition:
          "Text further specifying the area of responsibility of the trade contact",
        set: "Identification",
      },
      {
        name: "Restriction Description",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegistrationInformation/restrictionDescription",
        definition:
          "Free form description of any restrictions placed on the file.",
        set: "Components",
      },
      {
        name: "Retail Price is Marked on the Product Indicator",
        xmlName: "pricingOnProduct",
        definition:
          "Indicates there is a retail price on the product.\n\nUsed by the buyer for price management.",
        set: "Packaging",
      },
      {
        name: "Return Goods Policy",
        xmlName: "avpReturnGoodsPolicy",
        definition:
          "A code that describes the policy for defective, damaged, or non-salable goods.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Returnable Asset Capacity Content",
        xmlName:
          "packagingInformation/returnableAsset/returnableAssetCapacityContent",
        definition:
          "A measurement of the potential capacity of a returnable asset for example how many bottles can fit into a crate. This is not the content for the full packaging but rather how much the packaging can contain.",
        set: "Packaging",
      },
      {
        name: "Returnable Asset Owner ID",
        xmlName: "packagingInformation/returnableAsset/returnableAssetOwnerID",
        definition: "The GLN of the owner of a returnable asset.",
        set: "Packaging",
      },
      {
        name: "Returnable Asset Owner Name",
        xmlName: "packagingInformation/returnableAsset/returnableAssetOwnerName",
        definition: "The name of the owner of a returnable asset.",
        set: "Packaging",
      },
      {
        name: "Returnable Assets Contained Quantity",
        xmlName:
          "packagingInformation/returnableAsset/returnableAssetsContainedQuantity",
        definition:
          "The number of returnable assets contained that are allocated to the full returnable item identified by the GTIN of returnable asset. For example 6 bottles of beer in a six pack (Trade Item).",
        set: "Packaging",
      },
      {
        name: "Returnable Package Deposit Amount",
        xmlName:
          "packagingInformation/packagedeposit/returnablePackageDepositAmount",
        definition: "The monetary amount for the individual returnable package.",
        set: "Packaging",
      },
      {
        name: "Returnable Package Deposit Identification",
        xmlName:
          "packagingInformation/packagedeposit/returnablePackageDepositIdentification",
        definition:
          "In some markets the deposit information is specified by a GTIN giving the type of returnable package on which a deposit is charged. Each deposit code is associated with an amount specified elsewhere. The enumeration list is maintained externally.",
        set: "Packaging",
      },
      {
        name: "Returns Goods Policy",
        xmlName: "returnGoodsPolicy",
        definition:
          "A code that describes the policy for defective, damaged or non-salable goods.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Revenue - Domestic",
        xmlName: "boxOfficeRevenueDomestic",
        definition:
          "The revenue the film earned on the target market expressed in local currency.",
        set: "Media and Entertainment",
      },
      {
        name: "Revenue - US",
        xmlName: "boxOfficeRevenueUS",
        definition:
          "The revenue the film earned on the US market expressed in US dollars.",
        set: "Media and Entertainment",
      },
      {
        name: "Revenue - Worldwide",
        xmlName: "boxOfficeRevenueWorldwideUSDollars",
        definition:
          "The revenue the film earned on all the markets expressed in US dollars.",
        set: "Media and Entertainment",
      },
      {
        name: "Right of Return for Non-Sold Trade Item",
        xmlName: "rightOfReturnForNonSoldTradeItem",
        definition:
          "Indicates that the buyer can return the articles that are not sold. Used, for example; with magazines and bread. This is a y/n (Boolean) where y equals right of return. This is at least relevant to General Merchandise, Publishing industries and for some FMCG trade item.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Ripening Time Period",
        xmlName: "ripeningTimePeriod",
        definition: "The period of time for ripening the cheese.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Route of Exposure Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/routeOfExposureCode",
        definition:
          "The means by which living organisms can come into contact with a hazardous substance for example dermal, inhalation, ingestion.",
        set: "Components",
      },
      {
        name: "Route Of Exposure Code",
        xmlName:
          "safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/routeOfExposureCode",
        definition:
          "The means by which  living organisms can come into contact with a hazardous substance for example  dermal, Inhalation, ingestion.",
        set: "Safety",
      },
      {
        name: "Row",
        xmlName: "dam/spinInformation/row",
        definition:
          "Number to denote the row of a 360/Spin image set in which this image link belongs. Each row is a different plunge angle for the image set. A 360/Spin image set with 3 rows has 3 different plunge angles, such as 0 degrees, 15 degrees, and 60 degrees.",
        set: "Digital Asset Management Attributes (DAM)",
      },
    ],
    S: [
      {
        name: "Safety Data Sheet URL",
        xmlName: "safetyDataSheetURL",
        definition: "URL of Safety Data Sheet; tied to Chemical Class Code",
        set: "Partner Specific",
      },
      {
        name: "Salt Moisture Content Code",
        xmlName: "saltMoistureContentCode",
        definition:
          "The code indicating the salt and moisture content of the product by using the appropriate expression. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Sample Consumer Unit Send Date Time",
        xmlName: "sampleConsumerUnitSendDateTime",
        definition:
          "The date and time that a sample consumer unit item was sent for the trade item.",
        set: "Marketing",
      },
      {
        name: "Sample URL",
        xmlName: "sampleURL",
        definition: "Provide sample image URLs for the item.  ",
        set: "Marketing",
      },
      {
        name: "Scale Name",
        xmlName: "scaleName",
        definition:
          "Provide the scale of the item. Example: HO, N, G, 1:40, 1:24",
        set: "Dimensions",
      },
      {
        name: "Scheme",
        xmlName: "alternateClassification/scheme",
        definition:
          "Valid value for the type of additional product classification, Code, used.\n\nUsed to declare the type of the additional product classification that allows a buyer to know which classification system is used. Used in conjunction with Code.",
        set: "Identification",
      },
      {
        name: "Scheme Agency Code",
        xmlName: "componentInformation/componentIdentification/SchemeAgencyCode",
        definition: "Scheme Agency Code",
        set: "Components",
      },
      {
        name: "Scheme Agency Name",
        xmlName: "componentInformation/componentIdentification/SchemeAgencyName",
        definition: "Scheme Agency Name",
        set: "Components",
      },
      {
        name: "Scheme Name",
        xmlName: "componentInformation/componentIdentification/SchemeName",
        definition: "Scheme Name",
        set: "Components",
      },
      {
        name: "SDS Issue Date",
        xmlName: "sdsIssueDate",
        definition:
          "An SDS (Safety Data Sheet) is a document containing important information about a hazardous chemical (which may be a hazardous substance and/or dangerous good).",
        set: "Safety",
      },
      {
        name: "SDS Sheet Effective Date",
        xmlName:
          "componentInformation/safetyDataSheetInformation/sDSSheetEffectiveDateTime",
        definition:
          "Date/time from which the content of the safety data sheet is valid. When issuing the data sheet for the first time, this date indicates the creation date. In case of updates, this date indicates the date of the last revision.",
        set: "Components",
      },
      {
        name: "SDS Sheet Number",
        xmlName: "componentInformation/safetyDataSheetInformation/sDSSheetNumber",
        definition:
          "Manufacturer's identification number for the safety data sheet for a trade item.",
        set: "Components, Safety",
      },
      {
        name: "SDS Sheet Version",
        xmlName:
          "componentInformation/safetyDataSheetInformation/sDSSheetVersion",
        definition:
          "The safety data sheet version that uniquely identifies the release version of the safety data sheet. This version is needed to make data sheets versionable and revisions comprehensible.",
        set: "Components",
      },
      {
        name: "SDS Standard Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/sDSStandardCode",
        definition:
          "A code describing the standard used to create the MSDS that is pointed to in the SDS URL.",
        set: "Components, Safety",
      },
      {
        name: "SDS Standard Version",
        xmlName:
          "componentInformation/safetyDataSheetInformation/sDSStandardVersion",
        definition:
          "The version of the standard used to create the MSDS that is pointed to in the SDS URL.",
        set: "Components, Safety",
      },
      {
        name: "Search Key Words for Product",
        xmlName: "tradeItemKeyWords",
        definition:
          'The key words provided by the seller intended to help make the product discoverable by consumers using digital search engines. Key words should be entered as a string separated by commas. Example for a container of ice cream with key search words: "ice cream, lemon, brand"\n\nUsed by the buyer to optimize digital search engines, which may include online or in-store, for the consumer. Key words should be separated by commas with no spaces.',
        set: "Descriptions",
      },
      {
        name: "Season Calendar Year",
        xmlName:
          "componentInformation/marketingInformation/season/seasonCalendarYear",
        definition:
          "This element indicates the calendar year in which the trade item is seasonally available. This item is seasonally available in the year 2002.",
        set: "Components, Marketing",
      },
      {
        name: "Season Name",
        xmlName: "componentInformation/marketingInformation/season/seasonName",
        definition: "This element defines the season applicable to the item.",
        set: "Components, Marketing",
      },
      {
        name: "Season Parameter",
        xmlName:
          "componentInformation/marketingInformation/season/seasonParameterCode",
        definition:
          "Indication of the season, in which the trade item is available, i.e. assignment to one of the following collection periods: spring/summer, autumn/winter or all year round. ",
        set: "Components, Marketing",
      },
      {
        name: "Seasonal End Date",
        xmlName:
          "componentInformation/marketingInformation/season/seasonalAvailabilityEndDateTime",
        definition:
          "This element indicates the end date of the seasonal availability of the trade item. The seasonal availability can be different from the ordering time and especially from the dispatching time. The availability is more like an intention of the supplier as to how long he wants to offer the product. The dispatching time is more useful for the DC and the outlet warehousing.",
        set: "Components, Marketing",
      },
      {
        name: "Seasonal Product Indicator",
        xmlName: "season/isTradeItemSeasonal",
        definition:
          "Indicates if the product is seasonal or offered during specific times of the year.\n\nUsed by the buyer to make procurement decisions. May be used by the buyer to update digital content.",
        set: "Marketing",
      },
      {
        name: "Seasonal Start Date",
        xmlName:
          "componentInformation/marketingInformation/season/seasonalAvailabilityStartDateTime",
        definition:
          "This element indicates the start date of the seasonal availability of the trade item. Reference related attribute in Item document ",
        set: "Components, Marketing",
      },
      {
        name: "Secondary Added Flavoring Code",
        xmlName: "secondaryAddedFlavouringCode",
        definition:
          "The flavoring which has been added to the alcohol product. This is the secondary addition.",
        set: "Liquor",
      },
      {
        name: "Security Tag Commit Date",
        xmlName: "securityTagCommitDate",
        definition:
          "Date to denote when this product includes a security tag (source tag).",
        set: "Partner Specific, Partner Specific",
      },
      {
        name: "Security Tag Location",
        xmlName: "securityTagInformation/securityTagLocationCode",
        definition:
          "This is a code to indicate where the EAS Tag is located on the Trade Item.",
        set: "Safety",
      },
      {
        name: "Security Tag Type",
        xmlName: "securityTagInformation/securityTagTypeCode",
        definition:
          "This is a code to indicate the type of EAS tag located on the Trade Item.",
        set: "Safety",
      },
      {
        name: "Selling UOM",
        xmlName: "sellingUnitOfMeasure",
        definition:
          "Describes the measurement used for selling unit of the Trade Item to the end consumer.",
        set: "Sales",
      },
      {
        name: "Sequence Number",
        xmlName:
          "componentInformation/descriptionInformation/regulatedProductName/sequenceNumber",
        definition: "Sequence Number for Regulated Product Name.",
        set: "Components, Components, Components, Components, Components, Components, Components, Components, Components, Marketing, Marketing, Descriptions, Identification, Ingredients, Ingredients, Marketing, Marketing, Marketing, Marketing, Marketing",
      },
      {
        name: "Serial Number Location Code",
        xmlName: "serialNumberLocationCode",
        definition:
          "The location on the item or packaging of a serial number. A serial number is a code, numeric or alphanumeric, assigned to an individual instance of an entity for its lifetime for example a Microscope model AC-2 with serial number 1234568 and microscope model AC-2 with serial number 1234569. ",
        set: "Packaging",
      },
      {
        name: "Serving Size",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/servingSize",
        definition:
          "Measurement value specifying the serving size or portion. In some markets, due to regulation, this information is used as the basis amount that a nutrient is measured against. Example: Per 30 grams. 1/2 cup, etc. Please refer to the target markets implementation guideline on how to populate this attribute.",
        set: "Components, Nutritional",
      },
      {
        name: "Serving Size Description",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/servingSizeDescription",
        definition:
          "A free text field specifying the serving size for which the nutrient information has been stated",
        set: "Components, Nutritional",
      },
      {
        name: "serving Size Gram Weight",
        xmlName: "servingSizeGramWeight",
        definition:
          "The gram weight for the recommended serving size.  Serving sizes are typically expresed on the package in units meaningful to the consumer, such as 1 bag, or 3 pieces, this value is the equivalent weight value in grams.",
        set: "Food and Beverage",
      },
      {
        name: "Serving Size Weight",
        xmlName: "servingSizeWeight",
        definition: "The gram weight for the recommended serving size. ",
        set: "Food and Beverage",
      },
      {
        name: "Serving Suggestion",
        xmlName:
          "componentInformation/foodAndBeveragePreparationServing/preparationServing/servingSuggestion",
        definition: "Free text field for serving suggestion.",
        set: "Components, Food and Beverage",
      },
      {
        name: "Servings Per Package",
        xmlName: "servingsPerPackage",
        definition:
          "The total number of servings contained in the package. This is an integer denoting the servings, however according to FDA/USDA labeling regulations, the value can contain provide half servings between 1 and 6 servings. For example the value can be 2.5, but can not be 10.5.",
        set: "Food and Beverage",
      },
      {
        name: "Servings Per Package Description",
        xmlName:
          "componentInformation/nutritionalInformation/nutrientInformation/servingsPerPackageDescription",
        definition:
          "The total number of servings based upon the serving size contained in the package for example about 24.",
        set: "Components, Nutritional",
      },
      {
        name: "Servings Per Product",
        xmlName: "numberOfServingsPerPackage",
        definition:
          "The total number of servings contained in the product as shown on the product package.\n\nUsed to inform the consumer of the number of servings. May be used in conjunction with Servings Per Product Precision Code.",
        set: "Food and Beverage",
      },
      {
        name: "Servings Per Product Precision Code",
        xmlName: "measurementPrecisionOfNumberOfServingsPerPackage",
        definition:
          "Valid value for whether the specified Servings Per Product is approximate as shown on the product package.\n\nUsed to inform the consumer of the precision of the number of servings contained in the product as declared. Used in conjunction with Servings Per Product.",
        set: "Food and Beverage",
      },
      {
        name: "Shape Description French",
        xmlName: "shapeDescriptionFrench",
        definition: "The physical shape of the product defined in French",
        set: "Descriptions",
      },
      {
        name: "Share Type",
        xmlName: "dam/shareType",
        definition:
          "Indicates if image is Public,  or, if Private to specified GLNs in the Shared Recipient list.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Shared With",
        xmlName: "externalFileLink/sharedWith",
        definition:
          "When blank, you’re sharing with everyone! (Well, anyone this item is syncing with...) Or you can specify which trading partners to share with.",
        set: "External Digital Assets",
      },
      {
        name: "Sharing Type",
        xmlName: "externalFileLink/shareType",
        definition:
          "Indicates if image is Public,  or, if Private to specified GLNs in the Shared Recipient list.",
        set: "External Digital Assets",
      },
      {
        name: "SHC Category",
        xmlName: "sHCCategory",
        definition: "SHC Category number",
        set: "Purchasing and Delivery",
      },
      {
        name: "SHC Division",
        xmlName: "sHCDivision",
        definition: "SHC Division number",
        set: "Purchasing and Delivery",
      },
      {
        name: "SHC Order DUNS",
        xmlName: "sHCOrderDUNS",
        definition:
          "Vendor Order Duns that is valid for the GLN. This is retailer assigned and a supplier may have more than one order DUNS per item.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Shear Strength",
        xmlName: "componentInformation/tradeItemMeasurements/shearStrength",
        definition:
          "The strength of a material or component against the type of yield or structural failure where the material or component fails in shear. A shear load is a force that tends to produce a sliding failure on a material along a plane that is parallel to the direction of the force. When a paper is cut with scissors, the paper fails in shear. An example would be 7.82 KSI.",
        set: "Components",
      },
      {
        name: "Sheet Name",
        xmlName: "additionalTradeItemPrice/sheetName",
        definition:
          "The Price Sheet to which a price belongs. A price list is a list of prices of goods and services which are to be used or supplied during a period of time.",
        set: "Sales",
      },
      {
        name: "Shelf Unit Depth In Millimetres",
        xmlName: "shelfUnitDepthInMillimetres",
        definition:
          "Indication of the length/depth of the non-consumer shelf item measured in millimetres.",
        set: "Dimensions",
      },
      {
        name: "Shelf Unit Height In Millimetres",
        xmlName: "shelfUnitHeightInMillimetres",
        definition:
          "Indication of the height of the non-consumer shelf item measured in millimetres.",
        set: "Dimensions",
      },
      {
        name: "Shelf Unit Quantity",
        xmlName: "shelfUnitQuantity",
        definition:
          "Number to denote the recommended quantity, in units, of the product which can displayed to the consumer on a point-of-sale shelf.",
        set: "Partner Specific",
      },
      {
        name: "Shelf Unit Width In Millimetres",
        xmlName: "shelfUnitWidthInMillimetres",
        definition:
          "Indication of the width (facing) of the non-consumer shelf item measured in millimetres.",
        set: "Dimensions",
      },
      {
        name: "Ship From Location Name",
        xmlName: "shipFromLocationName",
        definition:
          "The shipping point from where the supplier will ship the trade item.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Shipped in Multiple Containers",
        xmlName: "isTradeItemShippedInMultipleContainers",
        definition:
          "Indicates that more than one box is to be delivered when the trade item is ordered.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Shipping Container Quantity",
        xmlName:
          "packagingInformation/numberOfUnitInShippingContainer/shippingContainerQuantity",
        definition:
          "The quantity of units contained in a shipping container for example 75 cases (75 CA).",
        set: "Packaging",
      },
      {
        name: "Shipping Container Quantity Description",
        xmlName:
          "packagingInformation/numberOfUnitInShippingContainer/shippingContainerQuantityDescription",
        definition:
          "The quantity of the contents of the shipping container as described on the outside of the shipping container, for example 100 .5 oz envelopes ",
        set: "Packaging",
      },
      {
        name: "Shipping Container Type Code",
        xmlName:
          "packagingInformation/numberOfUnitInShippingContainer/shippingContainerTypeCode",
        definition:
          "The type and size of the container in which the trade items composing the standard transport load (identified by a unique GTIN) are shipped by the consignor for international transport. This attribute should be populated using the ISO 6346 recommendation to indicate size and type codes of the shipping container. This code refers to the type of container and not the items inside. The first digit is the length of the container, the second is the height of the container, and the last two are the container type.",
        set: "Packaging",
      },
      {
        name: "Shipping Quantity Minimum",
        xmlName: "shippingQuantityMinimum",
        definition: "Minimum shipping quantity agreed between trading partners. ",
        set: "Purchasing and Delivery",
      },
      {
        name: "Ships in Original Packaging",
        xmlName: "canItemShipInOriginalPackaging",
        definition:
          'Can this product be shipped in the original packaging without being put in an outer box? Notes: 1) This is to indicate whether it\'s *possible* for the item to be shipped in original box, not whether it is required. 2) This was previously known as "Ships As-Is."',
        set: "Purchasing and Delivery",
      },
      {
        name: "Short Description / POS Desc. 1",
        xmlName: "componentInformation/descriptionInformation/shortDescription",
        definition:
          "A short textual description associated with the product. This description can be used on the cash register(point of sale) receipt. ",
        set: "Components",
      },
      {
        name: "Short Product Name",
        xmlName: "shortDescription",
        definition:
          "The shortened product name for the consumer product.\n\nUsed by the seller to provide a short product name to the buyer for the shelf tag and point-of-sale receipt.",
        set: "Descriptions",
      },
      {
        name: "Short Synopsis",
        xmlName: "shortSynopsis",
        definition: "A short text that describes the plot of a film",
        set: "Media and Entertainment",
      },
      {
        name: "Short Trade Item Marketing Message",
        xmlName:
          "componentInformation/marketingInformation/shortTradeItemMarketingMessage/marketingMessage",
        definition: "A short marketing message associated to the Trade item.",
        set: "Components, Marketing",
      },
      {
        name: "Signal Words Code",
        xmlName: "safetyDataSheetInformation/gHSDetail/gHSSignalWordsCode",
        definition:
          "Valid value for words from the Globally Harmonized System (GHS) to indicate the relative level of severity of the hazard and is usually on the label. \n\nUsed to emphasize to buyers or supply chains the level of severity of the hazard.",
        set: "Safety",
      },
      {
        name: "Similar Carried Product Description",
        xmlName: "similarCarriedProductDescription",
        definition:
          "A desciption of products within the information provider's range of products that will be impacted by the new item.",
        set: "Descriptions",
      },
      {
        name: "Skin Product Function or Treatment Code",
        xmlName:
          "productInformationDetail/beautyPersonalCareHygieneDetail/skinProductInformation/skinProductFunctionOrTreatmentCode",
        definition:
          "Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify different functions of the skin care or moisturizing product and other treatments.",
        set: "Descriptions",
      },
      {
        name: "Small Parts Warning/CPSIA Cautionary Statement",
        xmlName: "smallPartsWarning",
        definition:
          "This attribute provides information related to CPSIA statements that are relevant to the product",
        set: "Packaging",
      },
      {
        name: "Sorting Allowance",
        xmlName: "sortingAllowance",
        definition: "Sorting Allowance",
        set: "Packaging",
      },
      {
        name: "Source Animal Code",
        xmlName:
          "componentInformation/farmingAndProcessingInformation/sourceAnimalCode",
        definition:
          "The source of raw material used to produce the food product for example a goat for milk",
        set: "Components, Processing",
      },
      {
        name: "Spare Parts Availability Effective Date Type Code",
        xmlName:
          "sparePartsAvailabilityInformation/sparePartsAvailabilityEffectiveDateTypeCode",
        definition:
          "The type of date expressed as a code associated with the period of availability of spare parts usually expressed as an event date for the item for example DATE_OF_PURCHASE_BY_CONSUMER, DATE_OF_MANUFACTURE or DATE_OF_DELIVERY.",
        set: "Disposal",
      },
      {
        name: "Spare Parts Availability Period",
        xmlName: "sparePartsAvailabilityInformation/sparePartsAvailabilityPeriod",
        definition:
          "The period of availability of spare parts fpr a trade item associated with the sparePartsAvailabilityEffectiveDateTypeCode for example 24 MON.",
        set: "Disposal",
      },
      {
        name: "Special Features",
        xmlName: "specialFeatures",
        definition:
          "A text that describes the contents of the trade item in terms of special features.",
        set: "Media and Entertainment",
      },
      {
        name: "Special Handling Code - Transportation",
        xmlName: "specialHandlingCodeTransportation",
        definition: "Specifies special transportation handling instructions.",
        set: "Handling and Storage",
      },
      {
        name: "Special Item Code",
        xmlName: "componentInformation/marketingInformation/specialItemCode",
        definition:
          "This element identifies specific items for promotional, purchase eligibility and/or special tracking. For example Dynamic Assortment: Chia Pets are sold individually to the consumer and each different Chia Pet is marked with a unique GTIN. The items are ordered by the case, which has its own unique GTIN. The case will contain a random assortment of Chia Pets. There is no guarantee that the same ratio of child items will be in a case from order to order but the total quantity of items in the case will remain the same.",
        set: "Components, Sales",
      },
      {
        name: "Special Occasion",
        xmlName: "specialOccasion",
        definition:
          "The particular target time, event, or holiday for the product.",
        set: "Food and Beverage",
      },
      {
        name: "Special Order Available?",
        xmlName: "isItemAvailableForSpecialOrder",
        definition:
          "Indicator to denote the product is avaialble to be special ordered by the consumer. These orders would be submitted by the recipient to the supplier.",
        set: "Partner Specific",
      },
      {
        name: "Species ",
        xmlName: "organismClassification/species",
        definition:
          "The scientific name of a category of biological classification below the Genus.\n\nUsed by the buyer and/or consumer to uniquely identify the type of product, particularly where the Product Description is not specific enough in order to comply with legal/ sanitary and phytosanitary (SPS)/ customs etc. requirements. Used in conjunction with Genus.",
        set: "Processing",
      },
      {
        name: "Species For Fishery Statistics Purposes Code",
        xmlName:
          "fishReportingInformation/speciesForFisheryStatisticsPurposesCode",
        definition:
          "The FAO 3 Alpha code of the species of fish for fish and seafood.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Specific Gravity",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravity",
        definition:
          "Specific Gravity is defined as the ratio of the density of a substance to the density of a reference substance expressed as a float. It is an abstract number that is unrelated to any units. ",
        set: "Components, Safety",
      },
      {
        name: "Specific Gravity Lower Value",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityLowerValue",
        definition: "The lower value in a range of specific gravity.",
        set: "Components, Safety",
      },
      {
        name: "Specific Gravity Measurement Precision",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityMeasurementPrecision",
        definition:
          "The measurement precision used for the specific gravity for example EXACT.",
        set: "Components, Safety",
      },
      {
        name: "Specific Gravity Reference Material Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityReferenceMaterialCode",
        definition:
          "The reference material used within the ratio for specific gravity for example water or air. ",
        set: "Components, Safety",
      },
      {
        name: "Specific Gravity Upper Value",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityUpperValue",
        definition: "The upper value in a range of specific gravity.",
        set: "Components, Safety",
      },
      {
        name: "Spl Order Increment",
        xmlName: "specialOrderQuantityMultiple",
        definition:
          "Number to denote the multiplier quantity of the product which must be ordered for a special order. For example, a supplier will only process orders in multiples of 12. So the recipient must order 12, 24, 36, etc. The mutipler would be 12.",
        set: "Partner Specific",
      },
      {
        name: "Spl Order Lead Time",
        xmlName: "specialOrderQuantityLeadTime",
        definition:
          "Number to denote the normal delivery time applicalbe for a special order of this product, as measured from receipt of the special order by the seller until the seller ships the product.",
        set: "Partner Specific",
      },
      {
        name: "Sponge Scourer Type Code",
        xmlName:
          "productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/spongeScourerTypeCode",
        definition:
          "A descriptive code differentiating cleaning sponges or scourers from one another.",
        set: "Descriptions",
      },
      {
        name: "Stacking Factor",
        xmlName: "tradeItemStacking/stackingFactor",
        definition:
          "The maximum number of levels for a specific unit that can exist in a stack without impacting the quality of the product. A value of 1 means that the item cannot be stacked.\n\nUsed in conjunction with the Stacking Factor Type Code for storing or transporting the product without impacting the quality of the product.",
        set: "Handling and Storage",
      },
      {
        name: "Stacking Factor for non-GTIN Pallet",
        xmlName: "logisticalUnitStackingFactor",
        definition:
          'The maximum number of levels for a specific unit not identified by a GTIN that can exist in a stack without impacting the quality of the product. A value of 1 means that the item cannot be stacked. Stacking Factor for non-GTIN Pallet may differ by recipient. If the same for all recipients, select "ALL" as the Recipient.\n\nUsed by the buyer to determine how to store the product, not identified by a GTIN, without impacting the quality of the product.',
        set: "Dimensions",
      },
      {
        name: "Stacking Factor Type Code",
        xmlName: "tradeItemStacking/stackingFactorTypeCode",
        definition:
          "Valid value for the storage or type of transportation to which the Stacking Factor applies.\n\nUsed to communicate the Stacking Factor Type Code by supply chain process.",
        set: "Handling and Storage",
      },
      {
        name: "Stacking Pattern Type Code",
        xmlName: "tradeItemStacking/stackingPatternTypeCode",
        definition:
          "Indicates the pattern the product is stacked on a logistics unit, for example column pattern or interlocking pattern.",
        set: "Handling and Storage",
      },
      {
        name: "Stacking Weight Maximum",
        xmlName: "tradeItemStacking/stackingWeightMaximum",
        definition:
          "The maximum admissible weight that can be stacked on the trade item.",
        set: "Handling and Storage",
      },
      {
        name: "Start Availability Date Time",
        xmlName:
          "targetMarketSalesConditions/salesConditionTargetMarketCountry/startAvailabilityDateTime",
        definition:
          "The date from which the trade item becomes available from the supplier, including seasonal or temporary trade item and services.",
        set: "Sales",
      },
      {
        name: "Start Date of Max Buying Qty",
        xmlName: "startDateMaximumBuyingQuantity",
        definition:
          "The start date for when the maximum buying quantity is available to the trading partner.",
        set: "Dates",
      },
      {
        name: "Start Date of Min Buying Qty",
        xmlName: "startDateMinimumBuyingQuantity",
        definition:
          "The start date for when the minimum buying quantity is available to the trading partner.",
        set: "Dates",
      },
      {
        name: "Start Date Time Of Exclusivity",
        xmlName: "startDateTimeOfExclusivity",
        definition:
          "The date and time at which a product starts to be exclusive to a trading partner.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Statement",
        xmlName:
          "componentInformation/descriptionInformation/regulatedProductName/statement",
        definition:
          "The prescribed, regulated or generic product name or denomination that describes the true nature of the food and is sufficiently precise to distinguish it from other foods according to country specific regulation.",
        set: "Components, Components",
      },
      {
        name: "Statistical Reporting Measurement",
        xmlName: "importClassification/statisticalReportingMeasurement",
        definition:
          "The amount of the trade item net of any packaging (e.g. Box, Spool) provided for statistical reporting purposes. In the EU, the Supplementary Unit of the Intrastat Supplementary Declaration, provided when the Net Mass in Kilograms is not acceptable based on the Commodity Classification for Foreign Trade Statistics. For example, ice cream is reported in net mass so no supplementary unit is required. Carpets are reported in square metres, so the area of carpet of the trade item should be shown in statistical Reporting Measurement in square metres.",
        set: "Processing",
      },
      {
        name: "Storage Compability Agency",
        xmlName: "safetyDataSheetInformation/storageCompatibilityAgency",
        definition:
          "The agency which maintains a list of storage compatibilities.",
        set: "Safety",
      },
      {
        name: "Storage Compability Code",
        xmlName: "safetyDataSheetInformation/storageCompatibilityCode",
        definition: "A storage compatibilities expressed as a code.",
        set: "Safety",
      },
      {
        name: "Storage Compability Description",
        xmlName: "safetyDataSheetInformation/storageCompatibilityDescription",
        definition:
          "The types of materials that this product cannot be stored with.",
        set: "Safety",
      },
      {
        name: "Storage Compatibility Agency",
        xmlName:
          "componentInformation/safetyDataSheetInformation/storageCompatibilityAgency",
        definition:
          "The agency which maintains a list of storage compatibilities.",
        set: "Components",
      },
      {
        name: "Storage Compatibility Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/storageCompatibilityCode",
        definition: "A storage compatibilities expressed as a code.",
        set: "Components",
      },
      {
        name: "Storage Compatibility Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/storageCompatibilityDescription",
        definition:
          "The types of materials that this product cannot be stored with.",
        set: "Components",
      },
      {
        name: "Storage Requirements Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/storageRequirementsDescription",
        definition:
          "A description how to safely store the Trade Item for example cool,dry, not near flame, adequate ventilation. ",
        set: "Components, Safety",
      },
      {
        name: "Street Address",
        xmlName: "brandOwnerStructuredAddress/streetAddress",
        definition:
          "The street address expressed as free form text. The street address is printed on paper as the first lines below the name. Some trading partners require the street address to be the street name and number in this attribute. Others require this attribute to be just the street name. In this case, the street number should be provided separately in the street number attribute, if required.",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Street Date",
        xmlName: "streetDate",
        definition: "Provide the date that the item will be available.",
        set: "Marketing",
      },
      {
        name: "Street Date Type",
        xmlName: "streetDateType",
        definition:
          "Select the type of street date provided. DELIVER_BY indicates that the the item will be delivered to the customer by the provided street date. SHIP_BY indicates that the item will be shipped by the provided street date.",
        set: "Marketing",
      },
      {
        name: "Street Number",
        xmlName: "brandOwnerStructuredAddress/streetNumber",
        definition:
          "The street number portion of the street address for the contact. ",
        set: "Identification, Identification, Identification, Identification, Identification",
      },
      {
        name: "Strongness Of Basic Taste Code",
        xmlName:
          "componentInformation/marketingInformation/basicTasteInformation/strongnessOfBasicTasteCode",
        definition:
          "Indicates the descriptive term that is used by the product manufacturer to identify the strongness of basic taste of the product.",
        set: "Components, Marketing",
      },
      {
        name: "Studio Name",
        xmlName: "studioName",
        definition: "The name of the studio.",
        set: "Media and Entertainment",
      },
      {
        name: "Sub Brand",
        xmlName: "componentInformation/descriptionInformation/subBrand",
        definition:
          "Second level of brand. Can be a trademark. It is the primary differentiating factor that a brand owner wants to communicate to the consumer or buyer",
        set: "Components",
      },
      {
        name: "Sub Brand Name",
        xmlName: "subBrand",
        definition:
          "The name provided by the brand owner that allows the consumer to further differentiate the product beyond brand name.\n\nUsed to indicate to the consumer the secondary brand of the product.",
        set: "Descriptions",
      },
      {
        name: "Sub Division Code",
        xmlName: "tradeItemLicense/tradeItemLicenseRegion/countrySubdivisionCode",
        definition:
          "Code specifying a country subdivision. Allowed code values are specified in GS1 Code List CountrySubdivisionCode.",
        set: "Licensing and Certification",
      },
      {
        name: "Subject of Certification Description",
        xmlName:
          "certificationInformation/certification/subjectOfCertificationDescription",
        definition:
          "The description that provides more information about the type of certification, e.g. the type of product, model, etc. as stated on the certificate.",
        set: "Licensing and Certification, Food and Beverage",
      },
      {
        name: "Subject to US Patent?",
        xmlName: "isItemSubjectToUSPatent",
        definition: "Indicator to denote the product is subject to a US Patent",
        set: "Partner Specific",
      },
      {
        name: "Subtitled Language Code",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/subtitledLanguageCode",
        definition:
          "A code that identifies the language used in a trade item's subtitles.",
        set: "Media and Entertainment",
      },
      {
        name: "Suggested Consumer Pack",
        xmlName: "suggestedConsumerPack",
        definition:
          "The pack quantity of an item which aligns to the suggested consumer pack.",
        set: "Hierarchy Info",
      },
      {
        name: "Suggested Retail Price",
        xmlName: "suggestedRetail/price",
        definition:
          "The retail (to consumer) price as suggested by the manufacturer. Suggested Retail Price can be used as a guideline by the retailer to establish their actual retail price while also establishing a proposed value for marketing purposes and. This price may or may not appear on the package.",
        set: "Sales",
      },
      {
        name: "Suggested Retail Price Basis Per Unit",
        xmlName: "suggestedRetail/basisPerUnit",
        definition:
          "The price basis quantity is the associated quantity of trade item for which a price is given.",
        set: "Sales",
      },
      {
        name: "Suggested Retail Price Effective End Date",
        xmlName: "suggestedRetail/effectiveEndDate",
        definition:
          "The effctive end date of the price is optional based upon the agreement by the trading partners. If an invalid end date is communicated, then it is implied that the price and its effective date are effective until further notice. Examples of invalid dates include 99/99/9999, 00/00/0000, blank etc. These invalid end dates should not be communicated. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events: last order date, last ship date, and the last arrival date. ",
        set: "Sales",
      },
      {
        name: "Suggested Retail Price Effective Start Date",
        xmlName: "suggestedRetail/effectiveStartDate",
        definition:
          "This is the effective start date of the price agreed to by the trading partners. This start date is mandatory and, if no end date is communicated, then implies that the price is effective until further notice. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events: first order date, first ship date, and first arrival date.",
        set: "Sales",
      },
      {
        name: "Suggested Retail Price Sheet Name",
        xmlName: "suggestedRetail/sheetName",
        definition: "Help Not available via Extensible Definitions",
        set: "Sales",
      },
      {
        name: "Suggested Serving Size",
        xmlName: "suggestedServingSize",
        definition: "Consumable serving size suggested by manufacturer.",
        set: "Food and Beverage",
      },
      {
        name: "Supplier Information GLN of Supplier",
        xmlName: "supplierInformation/glnOfSupplier",
        definition: "The Global Location Number of the supplier.",
        set: "Identification",
      },
      {
        name: "Supplier Specified Minimum Consumer Storage Days",
        xmlName:
          "componentInformation/tradeItemLifeSpan/supplierSpecifiedMinimumConsumerStorageDays",
        definition:
          'Represents the number of days between a product\'s "sell by date" and its "use by date".',
        set: "Components, Handling and Storage",
      },
      {
        name: "Surface of Cheese at End of Ripening",
        xmlName: "surfaceOfCheeseAtEndOfRipeningCode",
        definition:
          "The representation of whether or not a cheese contains a rind at the end of the maturing process. A Rind is the outside shell of cheese that forms during the cheese making process.",
        set: "Dairy Fish Meat Poultry",
      },
      {
        name: "Sustainability Feature Code",
        xmlName: "tradeItemSustainabilityFeatureCode",
        definition:
          "A feature of the trade item that contributes to sustainability initiatives for example that it is made from renewable materials.",
        set: "Sustainability",
      },
      {
        name: "Sweetness Level Of Alcoholic Beverage Code",
        xmlName: "sweetnessLevelOfAlcoholicBeverageCode",
        definition:
          "Indicates the descriptive term that is used by the product manufacturer to identify the sweetness of the alcoholic beverage. These are sometimes placed on a label. In some markets, the term is based on the amount of sugar content according to local regulation.",
        set: "Liquor",
      },
    ],
    T: [
      {
        name: "Target Audience",
        xmlName: "targetAudience",
        definition:
          "A description of the recommended audience of the music publication.",
        set: "Media and Entertainment",
      },
      {
        name: "Target Consumer Age",
        xmlName: "componentInformation/marketingInformation/targetConsumerAge",
        definition:
          "Identifies the target consumer age range for which a trade item has been designed.",
        set: "Components, Marketing",
      },
      {
        name: "Target Consumer Age Group",
        xmlName:
          "componentInformation/marketingInformation/targetConsumerAgeGroup",
        definition:
          "A description of a general age group the product is designed for. This would not include the actual age ranges. For example Infant, Toddler, Child, Teen, Adult.",
        set: "Components, Marketing",
      },
      {
        name: "Target Consumer Age Group Code",
        xmlName:
          "componentInformation/marketingInformation/targetConsumerAgeGroupCode",
        definition:
          "A code depicting the general age group the product is designed for example BABY.",
        set: "Components, Marketing",
      },
      {
        name: "Target Consumer Gender",
        xmlName: "componentInformation/marketingInformation/targetConsumerGender",
        definition:
          "Identifies the target consumer gender for which a product has been designed.",
        set: "Components, Marketing, Marketing",
      },
      {
        name: "Target Consumer Maximum Usage",
        xmlName:
          "componentInformation/marketingInformation/targetConsumerUsage/targetConsumerMaximumUsage",
        definition:
          "Measurement of the maximum usage criteria for the target consumer that will use the product for example maximum age, height, etc.",
        set: "Components, Marketing",
      },
      {
        name: "Target Consumer Minimum Usage",
        xmlName:
          "componentInformation/marketingInformation/targetConsumerUsage/targetConsumerMinimumUsage",
        definition:
          "Measurement of the minimum usage criteria for the target consumer that will use the product for example minimum age, height, etc.",
        set: "Components, Marketing",
      },
      {
        name: "Target Consumer Usage Type Code",
        xmlName:
          "componentInformation/marketingInformation/targetConsumerUsage/targetConsumerUsageTypeCode",
        definition:
          "A code identifying the type of usage criteria for the target consumer that will use the product for example AGE, HEIGHT.",
        set: "Components, Marketing",
      },
      {
        name: "Target Hair Type Code",
        xmlName:
          "productInformationDetail/beautyPersonalCareHygieneDetail/hairProductInformation/targetHairTypeCode",
        definition:
          "Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the hair type for \nwhich the product is intended.",
        set: "Descriptions",
      },
      {
        name: "Target Market",
        xmlName: "targetMarket",
        definition:
          "Use Target Market to indicate where your item is available for sale.",
        set: "Indicators, Identification",
      },
      {
        name: "Target Market Consumer Sales Condition Code",
        xmlName:
          "targetMarketSalesConditions/targetMarketConsumerSalesConditionCode",
        definition:
          "A code depicting restrictions imposed on the Trade Item regarding how it can be sold to the consumer for example age restrictions, selling restrictions.",
        set: "Sales",
      },
      {
        name: "Target Market Country Code",
        xmlName:
          "componentInformation/marketingInformation/illegalToAdvertiseTargetMarket/targetMarketCountryCode",
        definition: "The target Market which is illegal to advertise.",
        set: "Components, Marketing",
      },
      {
        name: "Target Market Subdivision Code",
        xmlName:
          "componentInformation/marketingInformation/illegalToAdvertiseTargetMarket/targetMarketSubdivisionCode",
        definition:
          "The target Market Subdivision which is illegal to advertise.",
        set: "Components, Identification, Marketing",
      },
      {
        name: "Target Skin Type Code",
        xmlName:
          "productInformationDetail/beautyPersonalCareHygieneDetail/skinProductInformation/targetSkinTypeCode",
        definition:
          "Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify different types of skin the product is intended for.",
        set: "Descriptions",
      },
      {
        name: "Target Surface Type Code",
        xmlName: "productInformationDetail/targetSurfaceTypeCode",
        definition:
          "The surfaces a product is intended to be used upon. Some manufacturers designate one or more specific surface types from this list to help consumers understand product application.",
        set: "Descriptions",
      },
      {
        name: "Tasting Notes",
        xmlName: "componentInformation/marketingInformation/tastingNotes",
        definition:
          "Written testimony about a products aroma, flavour, texture for example fruity.",
        set: "Components, Marketing",
      },
      {
        name: "Tax Agency Code",
        xmlName: "franceTaxAmounts/franceTaxAgencyCode",
        definition: "The agency code for the tax",
        set: "Taxation",
      },
      {
        name: "Tax Category Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxCategoryCode",
        definition:
          "Valid value representing the level of tax rate applied by a government to the product.\n\nUsed to communicate to the buyer the type of rates for taxes or levies applied to a product or service.",
        set: "Taxation",
      },
      {
        name: "Tax Percentage",
        xmlName: "dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxRate",
        definition:
          "The percentage of tax, levy, duty or fee associated to the type of product.\n\nUsed by the buyer to identify the correct tax percentage applicable to the product.\n\nUsed in conjunction with Tax Type Code.",
        set: "Taxation",
      },
      {
        name: "Tax Type Code",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxTypeCode",
        definition:
          "Valid value for a specific type of tax, levy, duty or fee associated with the type of product or service.\n\nUsed to communicate the type of tax, levy, duty or fee applied to the product. Used to identify the portion of the invoice that is tax. Used to communicate to the buyer the amount of levy, duty or fee that they will need to pay.",
        set: "Taxation, Taxation",
      },
      {
        name: "Tax Type Code Description",
        xmlName: "dutyFeeTaxInformation/dutyFeeTaxTypeDescription",
        definition:
          "The description of the code that identifies a specific type of tax, levy, duty or fee associated with the type of product or service.\n\nUsed by the buyer to understand the meaning of the Tax Type Code.",
        set: "Taxation",
      },
      {
        name: "Technical Chemical Name",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/technicalChemicalName",
        definition:
          "The official technical name for a chemical as required by a managing agency for example mercuric chloride.",
        set: "Components, Regulatory",
      },
      {
        name: "Temp Zone",
        xmlName: "tempZone",
        definition: "McDonald's Proprietary Temp Zone for Distribution Centers",
        set: "Partner Specific",
      },
      {
        name: "Temperature Activity Code",
        xmlName: "tradeItemTemperatureInformation/temperatureQualifierCode",
        definition:
          "Valid value for the activity for which the maximum and minimum temperatures are applicable.\n\nUsed to define/communicate the activity for which the min/max temperatures apply.",
        set: "Handling and Storage",
      },
      {
        name: "Tensile Strength",
        xmlName: "componentInformation/tradeItemMeasurements/tensileStrength",
        definition:
          "The maximum stress it withstands before failing is its ultimate tensile strength. Ultimate tensile strength (UTS), often shortened to tensile strength (TS) or ultimate strength, is the maximum stress that a material can withstand while being stretched or pulled before failing or breaking. Example fishing line test, nylon rope.",
        set: "Components, Dimensions",
      },
      {
        name: "Test Criteria Description",
        xmlName:
          "componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/testCriteriaDescription",
        definition:
          "A description of any of the criteria or test data being used to determine if a regulated chemical exists. ",
        set: "Components, Regulatory",
      },
      {
        name: "Test Species Code",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/testSpeciesCode",
        definition:
          "A description of any species of animal that was used for determining LC and LD other than the norm.",
        set: "Components, Safety",
      },
      {
        name: "Test Species Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/testSpeciesDescription",
        definition:
          "The species of animal that was used for determining LC and LD 50 expressed as a code for example RAT.",
        set: "Components, Safety",
      },
      {
        name: "Third Party Accreditation Symbol on Product Package Code",
        xmlName: "packagingMarkedLabelAccreditationCode",
        definition:
          "Valid value for a symbol or marking third party accreditation on the product package.\n\nUsed to communicate the global, national and local accreditation to the buyer and consumer. (See the GDSN Trade Item Implementation Guide Packaging Label Guide: https://www.gs1.org/standards/gdsn/trade_implementation_guide)",
        set: "Packaging",
      },
      {
        name: "Time Of ApplicationCode",
        xmlName: "productInformationDetail/timeOfApplicationCode",
        definition:
          "Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the time of product application.",
        set: "Descriptions",
      },
      {
        name: "Title Rating",
        xmlName:
          "publicationTitleRating/titleRatingCodeReference/titleRatingCode",
        definition:
          "A rating assigned to the title by a country, industry or volunteer organization that may be of interest or concern to the consumer.",
        set: "Publication",
      },
      {
        name: "Title Rating Entity",
        xmlName:
          "publicationTitleRating/titleRatingCodeReference/titleRatingCodeListAgency",
        definition: "The agency that assigned the code.",
        set: "Publication",
      },
      {
        name: "Title Text",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/titleText",
        definition:
          "The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",
        set: "Components, Components, Components, Digital Asset Management Attributes (DAM), External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "TM Subdivision",
        xmlName: "targetMarketSubdivisionCode",
        definition: "Help Not available via Extensible Definitions",
        set: "Indicators",
      },
      {
        name: "Total Count of All Products",
        xmlName: "totalQuantityOfNextLowerTradeItem",
        definition:
          "The total count of all products within this item. For example, a Case of 12 Jars (or Eaches) would have a Quantity of Next Level Item(s) of 12. As for the Jar (or the Each), Quantity of Next Level Item would be 1.\n\nUsed by a buyer and/or consumer to understand what type of product they are receiving; also used for inventory/warehouse management.",
        set: "Hierarchy Info",
      },
      {
        name: "Total Creditable Ingredient Type Amount",
        xmlName:
          "productFormulationStatement/creditableIngredient/totalCreditableIngredientTypeAmount",
        definition:
          "The sum total creditable amount of all the creditable\ningredient type(s) applicable for the item as calculated using\nthe requirements, rules and regulations set forth by the\napplicable Product Formulation Statement Regulatory Body.\nPer US regulations total creditable amount must be rounded\ndown to the nearest quarter (0.25) ounce equivalent in the\nUS target market.",
        set: "Ingredients",
      },
      {
        name: "Total Number of Columns Per Row",
        xmlName: "dam/spinInformation/totalNumberOfColumnsPerRow",
        definition:
          "Number to denote the total quantity of columns per row included in the 360/Spin image set. For example, if an image set has 3 rows and 24 Columns in each row, there are a total of 72 images in the image set. The total number of columns per row is 24. This should be popualted for all Anchor image links.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Total number of components",
        xmlName: "totalNumberOfComponents",
        definition: "The total number of components for the trade item.",
        set: "Components",
      },
      {
        name: "Total Number of Rows",
        xmlName: "dam/spinInformation/totalNumberOfRows",
        definition:
          "Number to denote the total quantity of rows included in the 360/Spin image set. An image set which was taken with 3 different plunge angles, such as 0 degrees, 15 degrees, and 60 degrees, would have a total of 3 rows. This should be popualted for all Anchor image links.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Total Portion Weight As Purchased",
        xmlName: "productFormulationStatement/totalPortionWeightAsPurchased",
        definition:
          "The total portion weight of the trade item as purchased. This\nvalue(s) is as noted on the Product Formulation Statement\nand expressed in at least one measurement.",
        set: "Ingredients",
      },
      {
        name: "Total Recycled Content %",
        xmlName: "totalRecyclableContentPercentage",
        definition:
          "The percentage of all recycled material used to produce the trade item.This is the totalled recycled content including percentage of post consumer recycled. It excludes all packaging material.",
        set: "Sustainability",
      },
      {
        name: "Total Units Per Case",
        xmlName: "totalUnitsPerCase",
        definition:
          "This attribute provides a vehicle for communicating the total subunits contained within a case.",
        set: "Hierarchy Info",
      },
      {
        name: "Total Vegetable Subgroup Amount",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableVegetable/totalVegetableSubgroupAmount",
        definition:
          "The creditable amount of the vegetable subgroup in the\nitem.",
        set: "Ingredients",
      },
      {
        name: "Toxicological Information Description",
        xmlName:
          "componentInformation/safetyDataSheetInformation/toxicologicalInformationDescription",
        definition:
          "A general description of any information on any toxic properties as included on the MSDS for example precautionary text on a label. This text should describe the key issue with the product in regards to toxicity. ",
        set: "Components, Safety",
      },
      {
        name: "Track Number",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/trackNumber",
        definition: "The number allocated to a disc, beginning with 1",
        set: "Media and Entertainment",
      },
      {
        name: "Track Time (HH:MM:SS)",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/trackTime",
        definition:
          "The length of the track expressed in hours and minutes and seconds.",
        set: "Media and Entertainment",
      },
      {
        name: "Track Title",
        xmlName:
          "audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/trackTitle",
        definition:
          "The name of the the track or section of the audio visual media trade item.",
        set: "Media and Entertainment",
      },
      {
        name: "Trade Channel",
        xmlName: "tradeChannel",
        definition:
          "Description of base unit or a packaging item's intended trade channel.",
        set: "Purchasing and Delivery",
      },
      {
        name: "Trade Grade Information Code Agency",
        xmlName:
          "componentInformation/marketingInformation/tradeItemGradeInformation/gradeCodeAgency",
        definition: "An agency that manages a grade code list.",
        set: "Components, Marketing",
      },
      {
        name: "Trade Grade Information Code List Identification",
        xmlName:
          "componentInformation/marketingInformation/tradeItemGradeInformation/gradeCodeListIdentification",
        definition:
          "The identification of a code list which includes grades for an item or service.",
        set: "Components, Marketing",
      },
      {
        name: "Trade Grade Information Item Grade Code",
        xmlName:
          "componentInformation/marketingInformation/tradeItemGradeInformation/gradeCode",
        definition:
          "A code indicating the degree of refinement, features, or capabilities for a trade item for example the quality grade of a ceramic tile",
        set: "Components",
      },
      {
        name: "Trade Item Composition Depth",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemCompositionDepth",
        definition:
          "The number of child-items that are packaged from front to back in a trade unit. This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf.",
        set: "Components",
      },
      {
        name: "Trade Item Composition Width",
        xmlName:
          "componentInformation/tradeItemMeasurements/tradeItemCompositionWidth",
        definition:
          "The number of child-items that are packaged beside each other in a trade unit (on the side facing the consumer). This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf.",
        set: "Components",
      },
      {
        name: "Trade Item Description",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemDescription",
        definition:
          "An understandable and useable description of a trade item using brand and other descriptors.",
        set: "Components",
      },
      {
        name: "Trade Item Exclusive Selling Location Code",
        xmlName: "tradeItemExclusiveSellingLocationCode",
        definition:
          "A code Identifying the kind of selling location(s) in which the product can be sold for example BOAT . This can apply to both physical and digital locations.",
        set: "Sales",
      },
      {
        name: "Trade Item Feature Code Reference Code",
        xmlName: "tradeItemFeatureCodeReference/code",
        definition: "The code which describes the feature",
        set: "Descriptions",
      },
      {
        name: "Trade Item Feature Code Reference Code List Agency Code",
        xmlName: "tradeItemFeatureCodeReference/codeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Descriptions",
      },
      {
        name: "Trade Item Feature Code Reference Code List Agency Name",
        xmlName: "tradeItemFeatureCodeReference/codeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Descriptions",
      },
      {
        name: "Trade Item Feature Code Reference Code List Name",
        xmlName: "tradeItemFeatureCodeReference/codeListName",
        definition: "The name of the codelist.",
        set: "Descriptions",
      },
      {
        name: "Trade Item Feature Code Reference Code List URI",
        xmlName: "tradeItemFeatureCodeReference/codeListURI",
        definition: "The URI for the codelist.",
        set: "Descriptions",
      },
      {
        name: "Trade Item Feature Code Reference Description",
        xmlName: "tradeItemFeatureCodeReference/codeDescription",
        definition:
          "Indicates if the trade item is resistant to frost and can thus be used outside. ",
        set: "Descriptions",
      },
      {
        name: "Trade Item Form Code",
        xmlName: "componentInformation/descriptionInformation/tradeItemFormCode",
        definition:
          "A code representation of the form of the actual trade item, not the packaging.",
        set: "Components",
      },
      {
        name: "Trade Item Form Description",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemFormDescription",
        definition: "The physical form or shape of the product.",
        set: "Components",
      },
      {
        name: "Trade Item Group Code",
        xmlName:
          "tradeItemGroupIdentification/tradeItemGroupIdentificationCodeReference",
        definition:
          "A code assigned by the supplier or manufacturer to logically group trade item independently from the Global trade item Classification.",
        set: "Identification",
      },
      {
        name: "Trade Item Group Description",
        xmlName:
          "tradeItemGroupIdentification/tradeItemGroupIdentificationCodeDescription",
        definition:
          "A description assigned by the supplier or manufacturer to logically group trade item independently from the Global trade item Classification.",
        set: "Identification",
      },
      {
        name: "Trade Item Group Identification Code Description",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeDescription",
        definition: "The description for the codelist",
        set: "Components",
      },
      {
        name: "Trade Item Group Identification Code List Agency Code",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListAgencyCode",
        definition: "The code for the agency that maintains the codelist.",
        set: "Components, Identification",
      },
      {
        name: "Trade Item Group Identification Code List Agency Name",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListAgencyName",
        definition: "The name for the agency that maintains the codelist.",
        set: "Components, Identification",
      },
      {
        name: "Trade Item Group Identification Code List Name",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListName",
        definition: "The name of the codelist.",
        set: "Components, Identification",
      },
      {
        name: "Trade Item Group Identification Code List URI",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListURI",
        definition: "The URI for the codelist.",
        set: "Components, Identification",
      },
      {
        name: "Trade Item Group Identification Code Reference",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeReference",
        definition:
          "A code assigned by the supplier or manufacturer to logically group trade item independently from the Global trade item Classification.",
        set: "Components",
      },
      {
        name: "Trade Item Identification Marking Type Code",
        xmlName:
          "tradeItemIdentificationMarking/tradeItemIdentificationMarkingTypeCode",
        definition:
          "A code determining whether the item and/or its packaging is marked with a specific identification.",
        set: "Packaging",
      },
      {
        name: "Trade Item Identification Marking Value",
        xmlName:
          "tradeItemIdentificationMarking/tradeItemIdentificationMarkingValue",
        definition:
          "The specific identification the item and/or its packaging is marked with.",
        set: "Packaging",
      },
      {
        name: "Trade Item Included Accessories",
        xmlName:
          "componentInformation/marketingInformation/tradeItemIncludedAccessories",
        definition:
          "Any included object or device not part of the core product itself but which adds to its functionality or use",
        set: "Components, Marketing",
      },
      {
        name: "Trade Item Introduction Year",
        xmlName:
          "componentInformation/marketingInformation/tradeItemIntroductionYear",
        definition:
          "The date the GTIN and/or trade item is introduced into the marketplace. Once established this does not change. ",
        set: "Components, Marketing",
      },
      {
        name: "Trade Item Key Words",
        xmlName: "componentInformation/marketingInformation/tradeItemKeyWords",
        definition:
          "Words or phrases that enables web search engines to find trade items on the internet",
        set: "Components",
      },
      {
        name: "Trade Item Marketing Message",
        xmlName:
          "componentInformation/marketingInformation/marketingMessage/tradeItemMarketingMessage",
        definition: "Marketing message associated to the Trade item.",
        set: "Components",
      },
      {
        name: "Trade Item Markings Description",
        xmlName: "tradeItemMarkingsDescription",
        definition:
          "Describes the distinctive direct marking(s) or imprints on a trade item and the location of the markings as described by the manufacturer for example a company logo on front, value with UOM on back and scored.",
        set: "Packaging",
      },
      {
        name: "Trade Item Not Kosher Indicator",
        xmlName: "tradeItemNotKosherIndicator",
        definition: "An indicator identifying if the product is Not Kosher.",
        set: "Indicators",
      },
      {
        name: "Trade Item Recall Indicator",
        xmlName: "isTradeItemRecalled",
        definition:
          "An indicator for the Trade Item to determine if the Manufacturer or Supplier has recalled the product.",
        set: "Indicators",
      },
      {
        name: "Trade Item Regulation Type Code Targeted Substance",
        xmlName: "tradeItemregulationTypeCodeTargetedSubstance",
        definition:
          "A code indentifying the trade is a TARGETED DRUG in compliance with specific applicable government regulations.Code List: TRUE Drug Product Contains Targeted Substance FALSE Drug Product Does Not Contain Targeted Substance.",
        set: "Regulatory",
      },
      {
        name: "Trade Item Story",
        xmlName: "componentInformation/marketingInformation/story/tradeItemStory",
        definition:
          "Allows suppliers to tell the back story of the product and inform their consumers.",
        set: "Components, Marketing",
      },
      {
        name: "Trade Item Sustainability Statement",
        xmlName: "tradeItemSustainabilityStatement",
        definition:
          "The statement that describes how a trade item is produced in a way that can be maintained into the future without harming the environment. This may refer to marketing facing information that is relevant to the consumer who is concerned with sustainability.",
        set: "Sustainability",
      },
      {
        name: "Trade Item Technology Description",
        xmlName:
          "componentInformation/marketingInformation/tradeItemTechnologyDescription",
        definition:
          "The type(s) of marketing name technologies contained in the appliance for example Smart Technology.",
        set: "Components, Descriptions",
      },
      {
        name: "Trade Item Variant Statement",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemVariant/tradeItemVariantStatement",
        definition:
          "A complete statement describing the variant, that may comply with any regulatory requirements in a target market. Example for flavour: Barbecue with natural and artificial flavours.",
        set: "Components",
      },
      {
        name: "Trade Item Variant Type Code",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemVariant/tradeItemVariantTypeCode",
        definition:
          "Provides a code to identify the variant type of the product (e.g. Flavour).",
        set: "Components",
      },
      {
        name: "Trade Item Variant Value",
        xmlName:
          "componentInformation/descriptionInformation/tradeItemVariant/tradeItemVariantValue",
        definition: "The variant value for a variant type (e.g. Grape).",
        set: "Components",
      },
      {
        name: "Trade Name or Another Name",
        xmlName: "tradeNameOrAnotherName",
        definition:
          "Trade name or another name for a medical device or other therapeutic good. https://www.legislation.gov.au/Details/F2021C00976/Download",
        set: "Descriptions",
      },
      {
        name: "TradeItem Markings Description English",
        xmlName: "tradeItemMarkingsDescriptionEnglish",
        definition:
          "Describes the distinctive direct marking(s) or imprints on a trade item and the location of the markings as described by the manufacturer in ENGLISH. Example: Company Logo on Front, Value with UOM on Back and scored Or Front Company Logo, Back Value with UOM and scored",
        set: "Descriptions",
      },
      {
        name: "TradeItem Markings Description French",
        xmlName: "tradeItemMarkingsDescriptionFrench",
        definition:
          "Describes the distinctive direct marking(s) or imprints on a trade item and the location of the markings as described by the manufacturer in FRENCH Example: Façade logo, dossier enseigner",
        set: "Descriptions",
      },
      {
        name: "TradeItem Regulation Type Code Controlled Drug",
        xmlName: "tradeItemregulationTypeCodeControlledDrug",
        definition:
          "A code indicating the CONTROLLED DRUG type in compliance with specific applicable government regulations. Controlled Drug Code List: CON1 = Controlled Drug Part1 CON2 = Controlled Drug Part2 CON3 = Controlled Drug Part 3 CON4 = Not Applicable",
        set: "Regulatory",
      },
      {
        name: "TradeItem Regulation Type Code Narcotic",
        xmlName: "tradeItemregulationTypeCodeNarcotic",
        definition:
          "A code indicating the NARCOTIC type in compliance with specific applicable government regulations. :  Narcotic Type Code List: NAR1 = Narcotic Only NAR2 = Narcotic Preparation NAR3 = Exempt Codeine NAR4 = Not Applicable",
        set: "Regulatory",
      },
      {
        name: "TradeItem Regulation Type Code Precursor",
        xmlName: "tradeItemregulationTypeCodePrecursor",
        definition:
          "Indicates whether the trade item contains a precursor substance (according to Health Canada) and it's classification. Precursor substances are listed in Schedule VI of the Controlled Drugs and Substances Act (Canada). Code List: A = Class A B = Class B ",
        set: "Regulatory",
      },
      {
        name: "Trademark Statement",
        xmlName: "trademarkStatement",
        definition:
          "Descriptive trademark statement(s) which may appear on the product and/or it's packaging.",
        set: "Recipient Identification Info",
      },
      {
        name: "Truck Load Quantity",
        xmlName: "truckloadQuantity",
        definition:
          "Number to denote the quantity, in units, of the product which may be included in a “standard” truck load.",
        set: "Partner Specific",
      },
      {
        name: "Type Of Basic Taste Code",
        xmlName:
          "componentInformation/marketingInformation/basicTasteInformation/typeOfBasicTasteCode",
        definition:
          "Indicates a basic taste of a product,  and together with strongnessOfBasicTaste this indicates the level of the basic taste in a product.",
        set: "Components, Marketing",
      },
      {
        name: "Type of Cleaning Code",
        xmlName: "cleaningDisinfectingInformation/typeOfCleaningCode",
        definition:
          "﻿The code that describes the form of cleaning/detergent that can be used for the product. Example: Cleaning/detergent in accordance with ISO 15883.",
        set: "Finished Goods Instructions",
      },
      {
        name: "Type of Cleaning Disinfection Process Code",
        xmlName:
          "cleaningDisinfectingInformation/typeOfCleaningDisinfectionProcessCode",
        definition:
          "﻿The code that describes the type of process necessary to clean or disinfect the specific product.",
        set: "Finished Goods Instructions",
      },
      {
        name: "Type of Disinfection Code",
        xmlName: "cleaningDisinfectingInformation/typeOfDisinfectionCode",
        definition:
          "﻿The code that describes the type of disinfection that is possible for the product. Example: Disinfection type in accordance with ISO 15883.",
        set: "Finished Goods Instructions",
      },
      {
        name: "Type Of Information",
        xmlName: "dam/general/typeOfInformation",
        definition:
          "Code identifying the purpose of the information contained in the external file. Examples: Image of product label, marketing information, planogram.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Type of Product Changes After Date Code",
        xmlName: "packagingDate/typeOfProductChangesAfterDateCode",
        definition:
          "The code describing the changes that occur to the product after the marked date on package or item. The product may no longer be usable, provide benefit, suffer quality degradation or may still be usable but without guarantee or unable to provide all described functionality.",
        set: "Packaging",
      },
    ],
    U: [
      {
        name: "Uniform Resource Identifier",
        xmlName:
          "componentInformation/certificationInformation/certification/referencedFileInformation/uniformResourceIdentifier",
        definition:
          "Simple text string that refers to a resource on the Internet. URLs may refer to documents, resources, people, etc. ",
        set: "Components, Components, Components, External Digital Assets, Food and Beverage, Ingredients, Licensing and Certification, Nutritional, Safety",
      },
      {
        name: "Uniform Resource Identifier (system determined)",
        xmlName: "dam/general/uniformResourceIdentifier",
        definition:
          "Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is assigned by 1WorldSync.",
        set: "Digital Asset Management Attributes (DAM)",
      },
      {
        name: "Unit Of Measure Used For Ordered Quantities",
        xmlName: "unitOfMeasureUsedForOrderedQuantities",
        definition: "Unit Of Measure Used For Ordered Quantities",
        set: "Purchasing and Delivery",
      },
      {
        name: "Units In Depth Of Layer",
        xmlName: "unitsInDepthOfLayer",
        definition:
          "Number of Next Lower Level units of a product or package, which make up the depth of a layer in the package.",
        set: "Hierarchy Info",
      },
      {
        name: "Units In Width Of Layer",
        xmlName: "unitsInWidthOfLayer",
        definition:
          "Number of Next Lower Level units of a product or package, which make up the width of a layer in the package.",
        set: "Hierarchy Info",
      },
      {
        name: "Units Per Consumer Unit",
        xmlName: "unitsPerConsumerUnit",
        definition:
          "This attribute provides a vehicle for communicating subunits contained within a consumer unit.",
        set: "Hierarchy Info",
      },
      {
        name: "Units Per Package",
        xmlName: "unitsPerPackage",
        definition: "The number of units in the current level of packaging.",
        set: "Hierarchy Info",
      },
      {
        name: "Units Per Trade Item",
        xmlName: "unitsPerTradeItem",
        definition:
          "Numeric value to indicate number of physical pieces used to make up the Consumer Unit. Used if there is more than one piece in one Trade Item.",
        set: "Hierarchy Info",
      },
      {
        name: "Upper Explosive Limit",
        xmlName:
          "componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/upperExplosiveLimit",
        definition:
          "The high end value expressed as a percent by volume that the product will still explode.",
        set: "Components, Components, Safety, Safety",
      },
      {
        name: "Usable Product Volume",
        xmlName: "packagingInformation/usableProductVolume",
        definition:
          "The space occupied by the usable portion of a product (as it is packaged) as measured by cubic units. Smallest volume (rectangular solid, cylinder, sphere or triangular solid) the product will fit into.",
        set: "Packaging",
      },
      {
        name: "Usage Color Description",
        xmlName:
          "componentInformation/marketingInformation/usageColourDescription",
        definition:
          "A description of the usage of colour(s) the trade item offers such as pens, markers, ink pads, printer cartridges and other implements that provide colour. Examples include black, white",
        set: "Components",
      },
      {
        name: "Usage Colour Description",
        xmlName: "usageColourDescription",
        definition:
          "A description of the usage of colour(s) the trade item offers such as pens, markers, ink pads, printer cartridges and other implements that provide colour. Examples include black, white",
        set: "Marketing",
      },
      {
        name: "Usage Period After Opening",
        xmlName: "itemPeriodSafeToUseAfterOpening",
        definition:
          "The period after opening where the product is still safe to be used by the consumer.\n\nUsed by the seller to communicate to the buyer and consumer the useful lifetime of a product after a package has been opened for the first time.",
        set: "Handling and Storage",
      },
      {
        name: "USDA Nutrient Database Number",
        xmlName: "uSDANutrientDatabaseNumber",
        definition:
          "The record number applicable to the trade item from the USDA Nutrient Database. This record number is the link in the Nutrient Database to more specific nutrient information for the item. Many times the item is not required to carry a nutrient label and this database will carry the information needed by downstream partners. Example: 12030",
        set: "Nutritional",
      },
      {
        name: "Use By Recommendation",
        xmlName: "useByRecommendation",
        definition:
          "Descriptive terms to denote the best time period within which to use a product.",
        set: "Recipient Identification Info",
      },
    ],
    V: [
      {
        name: "Variable Measure ID Num. For Price",
        xmlName: "variableMeasureTradeItemIDNumForPrice",
        definition: "Variable Measure ID Num. For Price",
        set: "Dimensions",
      },
      {
        name: "Variable Measure ID Num. For Weight",
        xmlName: "variableMeasureTradeItemIDNumForWeight",
        definition: "Variable Measure ID Num. For Weight",
        set: "Dimensions",
      },
      {
        name: "Variable Measure Identification Number",
        xmlName: "variableMeasureIdentificationNumber",
        definition: "Variable Measure Identification Number",
        set: "Dimensions",
      },
      {
        name: "Variable Measure Indicator",
        xmlName: "isVariableWeightItem",
        definition:
          "Indicates if the product content is variable.\n\nUsed to inform the buyer if the product varies by quantity or amount.",
        set: "Dimensions",
      },
      {
        name: "Variable Weight Allowable Deviation Percentage",
        xmlName: "variableWeightAllowableDeviationPercentage",
        definition:
          "Indication of the percentage value that the actual weight of the trade item may differ from the average or estimated weight given. For example, Roast beef off the bone 3.5 kg, Gross weight 3500 Grams, Range = 14 %. This means that this item may be produced with weight values ranging from 3.010 kg to 3.990 kg.",
        set: "Dimensions",
      },
      {
        name: "Variable Weight Range Maximum",
        xmlName: "variableWeightRangeMaximum",
        definition:
          "Variable Weight Range Maximum (also called Catchweight Range Maximum) identifies the highest or ceiling weight of a variable weight product. ",
        set: "Dimensions",
      },
      {
        name: "Variable Weight Range Minimum",
        xmlName: "variableWeightRangeMinimum",
        definition:
          "Variable Weight Range Minimum (also called Catchweight Range Minimum) identifies the lowest weight of the variable weight product. ",
        set: "Dimensions",
      },
      {
        name: "Variant",
        xmlName: "componentInformation/descriptionInformation/variants/variant",
        definition:
          "Identifies the variant of the product. Variants are the distinguishing characteristics that differentiate products with the same brand and size including such things as the particular flavour, fragrance, taste.",
        set: "Components",
      },
      {
        name: "Variant Statement",
        xmlName: "tradeItemVariant/tradeItemVariantStatement",
        definition:
          "A complete statement describing the variant, that may comply with any regulatory requirements in a target market. Example for flavour: Barbecue with natural and artificial flavours.",
        set: "Descriptions",
      },
      {
        name: "Variant Type Code",
        xmlName: "tradeItemVariant/tradeItemVariantTypeCode",
        definition:
          "Provides a code to identify the variant type of the product (e.g. Flavour).",
        set: "Descriptions",
      },
      {
        name: "Variant Value",
        xmlName: "tradeItemVariant/tradeItemVariantValue",
        definition: "The variant value for a variant type (e.g. Grape).",
        set: "Descriptions",
      },
      {
        name: "various brick attribute definitions",
        xmlName:
          "gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeDef",
        definition:
          "The GS1 provided definition of the Global Product Classification Attribute Code.",
        set: "Global",
      },
      {
        name: "Vegetable Subgroup Code",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableVegetable/vegetableSubgroupCode",
        definition:
          "A qualifier to specify the type of creditable vegetable ingredient subgroup applicable to the item as specified on the Product Formulation Statement and defined by the requirements, rules and regulations set forth by the applicable product formulation statement regulatory body.",
        set: "Ingredients",
      },
      {
        name: "Velocity",
        xmlName: "componentInformation/tradeItemMeasurements/velocity",
        definition:
          "The rate at which an object changes its position for example 5 metres per second (5 MTS).",
        set: "Components, Dimensions",
      },
      {
        name: "Version",
        xmlName: "alternateClassification/version",
        definition:
          "The identification of a release of a particular product classification.",
        set: "Identification, Safety",
      },
      {
        name: "Vertical Camera Angle Code",
        xmlName: "dam/imageInfo/verticalCameraAngleCode",
        definition:
          "The vertical angle used to photograph an object expressed as a code for example PARALLEL.",
        set: "Digital Asset Management Attributes (DAM), External Digital Assets",
      },
      {
        name: "Vintage",
        xmlName: "vintage",
        definition:
          "The year in which the majority of ingredients are harvested and/or the alcoholic beverage is produced. Determination as to whether the vintage year is the harvest date or production date is according to requirements in the Target Market.",
        set: "Liquor",
      },
      {
        name: "Vintner",
        xmlName: "vintner",
        definition:
          "The name of the person who is hired by a winery or wine company who is responsible for many of the processes in the preparation, taste and quality of the wine produced. The science of wine making is refered to oenology. The vintner is the oenologist.",
        set: "Liquor",
      },
      {
        name: "Volatile Organic Compound",
        xmlName:
          "componentInformation/safetyDataSheetInformation/volatileOrganicCompound",
        definition:
          "Volatile Organic Compound is the amount of an item that is a volatile organic compound expressed as a measurement. Volatile is where the compound can be evaporate or vaporize into the atmosphere. ",
        set: "Components, Safety",
      },
      {
        name: "Volatile Organic Compound Basis",
        xmlName:
          "componentInformation/safetyDataSheetInformation/volatileOrganicCompoundBasis",
        definition:
          "The basis measurement for a Volatile Organic Compound when expressed as an amount for example 1 L in the case of 5ML per 1 LT.",
        set: "Components, Safety",
      },
      {
        name: "Volatile Organic Compound Percent Measurement Precision",
        xmlName:
          "componentInformation/safetyDataSheetInformation/volatileOrganicCompoundPercentMeasurementPrecision",
        definition:
          "The measurement precision used to determine the percentage of an item that is a volatile organic compound.",
        set: "Components, Safety",
      },
      {
        name: "Volatile Organic Compound Percentage",
        xmlName:
          "componentInformation/safetyDataSheetInformation/volatileOrganicCompoundPercent",
        definition:
          "The percentage of an item that is a volatile organic compound. Volatile is where the compound can evaporate or vaporize into the atmosphere.",
        set: "Components, Safety",
      },
      {
        name: "Volume",
        xmlName: "componentInformation/tradeItemMeasurements/volume",
        definition:
          "The dimensions of an imaginary cube which can be drawn around the trade item as defined in the formula of H X W X D (The linear dimensions multiplied to get a cubic result).",
        set: "Components, Dimensions",
      },
    ],
    W: [
      {
        name: "Warning Information",
        xmlName: "warningCopyDescriptions/warningCopyDescription",
        definition:
          "The information provided to the consumer about warnings or dangers associated with the product.\n\nUsed to provide information to the consumer about warnings or dangers while using or consuming the product. Note: Should not be used for drugs or supplements, see attribute Drug Side Effects and Warnings",
        set: "Packaging",
      },
      {
        name: "Was Verified By Category Manager?",
        xmlName: "wasVerifiedByCategoryManager",
        definition:
          "Indicates whether or not the product was sampled by the Category Manager.",
        set: "Marketing",
      },
      {
        name: "Waste Amount",
        xmlName: "tradeItemWasteManagement/wasteAmount",
        definition:
          "The amount of the components contained in the trade item that are covered by a waste directive for example WEEE.",
        set: "Disposal",
      },
      {
        name: "Waste Code",
        xmlName: "typeOfWasteCode",
        definition:
          "The code that describes the type of waste created from the product. Please refer to any local regulation requirements for disposal/recyclable waste.• CHEMICAL_WASTE - Waste that is released directly or indirectly when chemicals are used (e.g., salts, acids and bases, heavy metals, cyanides, oxidants).\n• RESIDUAL_WASTE - Waste that remains after the usual waste flows (e.g., glass, metal, paper) have been removed from the main flow.\n• RECYCLEBLE_WASTE - Waste that can be collected and recycled/melted into reusable raw materials (e.g., plastics, steel).Used by the buyer (e.g. healthcare specialist) to determine which waste process is required for (parts of) the product.",
        set: "Disposal",
      },
      {
        name: "Waste Directive Appliance Type",
        xmlName: "tradeItemWasteManagement/wasteDirectiveApplianceType",
        definition:
          "The category of electrical and electronic equipment containing components covered by a waste directive for example WEEE.",
        set: "Disposal",
      },
      {
        name: "Waste Directive Name",
        xmlName: "tradeItemWasteManagement/wasteDirectiveName",
        definition: "The name of a waste directive for example WEEE.",
        set: "Disposal",
      },
      {
        name: "Waste Directive Registration Number",
        xmlName: "tradeItemWasteManagement/wasteDirectiveRegistrationNumber",
        definition:
          "A registration number for a trade item required by a waste directive (e.g. WEEE).",
        set: "Disposal",
      },
      {
        name: "Water Solubility",
        xmlName:
          "componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/waterSolubilityTypeCode",
        definition:
          "Water solubility is defined as a code indicating solubility in respect to water. Solubility is the ability of a given substance to dissolve in solvent. ",
        set: "Components, Safety",
      },
      {
        name: "Website Launch Date",
        xmlName: "websiteLaunch/date",
        definition:
          "Provide the anticipated product site launch date Example: 2017-07-20",
        set: "Marketing",
      },
      {
        name: "Website Launch Type",
        xmlName: "websiteLaunch/type",
        definition: "Type of Website Launch",
        set: "Marketing",
      },
      {
        name: "Weight of Raw Materials Used in Preparation",
        xmlName: "rawMaterialUsedInPreparationWeight",
        definition:
          "The weight of the raw materials (meat) used to produce the finished food product.",
        set: "Processing",
      },
      {
        name: "Weight Scale Description",
        xmlName: "weightScaleDescription",
        definition:
          "For Produce and Fresh Meat variable weight items a description to appear on the weight scale generated label. Formatted as two lines of up to 26 characters.",
        set: "Processing",
      },
      {
        name: "WEIGHT/VOLUME DESCRIPTION ACTUAL - ON PACK(U11)",
        xmlName: "U11",
        definition:
          "Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.",
        set: "Partner Specific",
      },
      {
        name: "Where Used",
        xmlName: "requestorLocale",
        definition:
          "This is a manual field and the codes are two (2) letter codes for areas of the world.  The only options available are:  AF (Africa), AU (Australia) CA (Canada), EU (Europe), FE (Far East)  ME (Middle East),  SA (South America), US (United States), ZZ (More than one area).",
        set: "Partner Specific",
      },
      {
        name: "Width",
        xmlName: "componentInformation/tradeItemMeasurements/width",
        definition:
          "The width of the unit load, as measured according to the GS1 Package Measurement Rules, including the shipping platform unless it is excluded according to the Pallet Type Code chosen.",
        set: "Components, Dimensions",
      },
      {
        name: "Wrin Prefix",
        xmlName: "wrinPrefix",
        definition: "WRIN Prefix",
        set: "Partner Specific",
      },
      {
        name: "Wrin Suffix",
        xmlName: "wrinSuffix",
        definition: "WRIN Suffix",
        set: "Partner Specific",
      },
      {
        name: "WSI Number",
        xmlName: "wSINumber",
        definition: "WSI number associated with the Supplier",
        set: "Partner Specific",
      },
    ],
    Y: [
      {
        name: "Year of Production",
        xmlName: "yearOfProduction",
        definition: "The year during which the film was produced.",
        set: "Media and Entertainment",
      },
      {
        name: "Yield Servings Per Unit",
        xmlName:
          "productFormulationStatement/creditableIngredient/creditableIngredientDetails/yieldServingsPerUnit",
        definition:
          "The yield per purchasing unit as calculated using the\nrequirements, rules and regulations set forth by the\napplicable product formulation statement regulatory body.",
        set: "Ingredients",
      },
    ],
    ZeroToNine: [
      {
        name: "360 Spin Set Name",
        xmlName: "dam/spinInformation/spinSetName",
        definition:
          "The unique name per item for the 360/Spin set. This will be used to group all of the images together in the Spin Set",
        set: "Digital Asset Management Attributes (DAM)",
      },
    ],
  };
  