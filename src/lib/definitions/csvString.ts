export const csvString = `
name,XMLname,definition,set
Allergen Containment Code,allergenRelatedInformation/allergen/levelOfContainmentCode,"Valid value to indicate the precision of an allergen in a product. 

Used to communicate to the consumer and the buyer the allergen containment status: Contains; May contain or Free from.",Allergen
Allergen Relevant Data Provided Date Time,allergenRelatedInformation/allergenRelevantDataProvidedDateTime,The date upon which the isAllergenRelevantDataProvided indicator was last updated.,Allergen
Allergen Specification Agency,allergenRelatedInformation/allergenSpecificationAgency,Note: This attribtue is being deprecated in a future release. There is no longer a use case for this attribute. No need to migrate content. Agency that controls the allergen definition.,Allergen
Allergen Specification Name,allergenRelatedInformation/allergenSpecificationName,Note: This attribtue is being deprecated in a future release. There is no longer a use case for this attribute. No need to migrate content. Free text field containing the name and version of the regulation or standard that contains the definition of the allergen.,Allergen
Allergen Statement,allergenRelatedInformation/allergenStatement,"The statement to the consumer on the presence of allergens, based on local rules or regulations, as stated on the product packaging.

Used to indicate to the consumer and buyer the presence of allergens in a product.",Allergen
Allergen Declarations Indicator,allergenRelatedInformation/isAllergenRelevantDataProvided,"Indicator to confirm whether the relevant allergen data provided for the product is complete.

Used by the seller to confirm to the buyer that all relevant allergen information is complete.",Allergen
Allergen Statement Formatting Pattern,allergenStatementFormattingPattern,the formatting pattern of text for allergen statement to generically emphasize a word or set of words and to denote a paragraph break. It will be up to the recipient to determine the formatting style they will use for the emphasized text.,Allergen
Does Item Have Allergen Control Policy?,hasAllergenControlPolicy,"If there is a risk for cross-contamination, does the food processing facility have an Allergen Control Policy?",Allergen
Is Item Hypo-Allergenic?,isItemHypoallergenic,"Has the quantity of endogenous allergens in the item been reduced in such a way that it is not possible to detect the presence of any possible allergen with testing suitable for the specific allergen OR has the item been tested to confirm the absence of the particular allergen(s0, using suitable testing for the specific allergen(s).",Allergen
Is Item Cross Contaminated?,isTradeItemCrossContaminated,"Means the presence of any common allergen not intentionally added to a foodstuff, which is present in such foodstuff as a result of the cultivation, production, manufacturing, processing, preparation, treatment, packing, packaging, transport or holding of such foodstuff or as a result of environmental contamination",Allergen
Capacity,componentInformation/descriptionInformation/capacity,The available space inside the item or how much can the item hold. Capacity is often provided for items can contain multiple pieces of something or can accommodate some number of objects.,Components
Is Ingredient Relevant Data Provided?,componentInformation/foodAndBeverageIngredientInformation/isIngredientRelevantDataProvided,A flag indicating that all of the relevant or required ingredient information has been provided.,Components
Allergen Type Code,componentInformation/allergenInformation/allergenRelatedInformation/allergen/allergenTypeCode,Code indicating the type of allergen.,Components
Level Of Containment,componentInformation/allergenInformation/allergenRelatedInformation/allergen/levelOfContainmentCode,Code indicating the level of presence of the allergen.,Components
Allergen Relevant Data Provided Date Time,componentInformation/allergenInformation/allergenRelatedInformation/allergenRelevantDataProvidedDateTime,The date upon which the isAllergenRelevantDataProvided indicator was last updated.,Components
Allergen Specification Agency,componentInformation/allergenInformation/allergenRelatedInformation/allergenSpecificationAgency,Note: This attribtue is being deprecated in a future release. There is no longer a use case for this attribute. No need to migrate content. Agency that controls the allergen definition.,Components
Allergen Specification Name,componentInformation/allergenInformation/allergenRelatedInformation/allergenSpecificationName,Note: This attribtue is being deprecated in a future release. There is no longer a use case for this attribute. No need to migrate content. Free text field containing the name and version of the regulation or standard that contains the definition of the allergen.,Components
Allergen Statement,componentInformation/allergenInformation/allergenRelatedInformation/allergenStatement,"Textual description of the presence or absence of allergens as governed by local rules and regulations, specified as one string.",Components
Allergen Relevant Data Provided?,componentInformation/allergenInformation/allergenRelatedInformation/isAllergenRelevantDataProvided,Allergen Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  All values not populated are not relevant or not required to be populated on the product label by local regulations.,Components
Additional Party Identification Code,componentInformation/certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationCode,Additional Party Identification Code,Components
Additional Party Identification Value,componentInformation/certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationValue,Additional Party Identification Value,Components
Certificate Issuance DateTime,componentInformation/certificationInformation/certification/certificateIssuanceDateTime,The date and time that a certificate has been issued for a Trade Item.,Components
Certification Assessment DateTime,componentInformation/certificationInformation/certification/certificationAssessmentDateTime,The date and time that an assessment was performed on a Trade Item that led to a certification.,Components
Certification Effective End Date (DD-MON-YYYY),componentInformation/certificationInformation/certification/certificationEffectiveEndDateTime,The date and time upon which the certification is no longer effective.,Components
Certification Effective Start Date (DD-MON-YYYY),componentInformation/certificationInformation/certification/certificationEffectiveStartDateTime,The date and time upon which the certification is effective,Components
Certification Execution Country Code,componentInformation/certificationInformation/certification/certificationExecutionCountryCode,The country where the certification is performed.  Use ISO3166_1 Code,Components
Certification Identification,componentInformation/certificationInformation/certification/certificationIdentification,A reference issued to confirm that something has passed certification,Components
Certification Value,componentInformation/certificationInformation/certification/certificationValue,"The unique identification (ID) that provides a trade item's certification standard value, official licensing number or identification which proves that a product/process has passed the certification procedure.",Components
Alternate Text,componentInformation/certificationInformation/certification/referencedFileInformation/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Components
Content Description,componentInformation/certificationInformation/certification/referencedFileInformation/contentDescription,Free form description of the content of the file.,Components
File Creation Program,componentInformation/certificationInformation/certification/referencedFileInformation/fileCreationProgram,The program used in the creation of the digital asset.,Components
File Effective End Date,componentInformation/certificationInformation/certification/referencedFileInformation/fileEffectiveEndDateTime,The date this image ceases to be the current image for this trade item. ,Components
File Effective Start Date,componentInformation/certificationInformation/certification/referencedFileInformation/fileEffectiveStartDateTime,The date this image is the current image for this trade item.,Components
File Format Description,componentInformation/certificationInformation/certification/referencedFileInformation/fileFormatDescription,Free form description of the format of the file.,Components
File Format Name,componentInformation/certificationInformation/certification/referencedFileInformation/fileFormatName,"The name of the file format. Examples: PDF, JPEG,  BMP etc.",Components
File Language,componentInformation/certificationInformation/certification/referencedFileInformation/fileLanguageCode,The specified language to which the digital asset is targeted.,Components
File Name,componentInformation/certificationInformation/certification/referencedFileInformation/fileName,The name of the file that contains the external information.,Components
File Optimal Viewer Name,componentInformation/certificationInformation/certification/referencedFileInformation/fileOptimalViewerName,The software to which this file was targeted.,Components
File Origin Country,componentInformation/certificationInformation/certification/referencedFileInformation/fileOriginCountryCode,The country where the digital asset originated.,Components
File Sequence Number,componentInformation/certificationInformation/certification/referencedFileInformation/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Components
File Version,componentInformation/certificationInformation/certification/referencedFileInformation/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Components
Image Facing,componentInformation/certificationInformation/certification/referencedFileInformation/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Components
Image Orientation Type Code,componentInformation/certificationInformation/certification/referencedFileInformation/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Components
Image State Code,componentInformation/certificationInformation/certification/referencedFileInformation/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Components
Is Image Rendered,componentInformation/certificationInformation/certification/referencedFileInformation/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Components
Is Primary File,componentInformation/certificationInformation/certification/referencedFileInformation/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Components
Referenced File Type Code,componentInformation/certificationInformation/certification/referencedFileInformation/referencedFileTypeCode,The file type that is being referenced.,Components
Title Text,componentInformation/certificationInformation/certification/referencedFileInformation/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Components
Uniform Resource Identifier,componentInformation/certificationInformation/certification/referencedFileInformation/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet. URLs may refer to documents, resources, people, etc. ",Components
Certification Agency,componentInformation/certificationInformation/certificationAgency,Name of the organization issuing the certification standard or other requirement being met. Free text field. Example: European Nation.,Components
Certification Organisation Identifier,componentInformation/certificationInformation/certificationOrganisationIdentifier,The identification of the organization that issued the certificate number confirming that the Trade Item has gone through certification.,Components
Certification Standard,componentInformation/certificationInformation/certificationStandard,"The name of the certification standard or the type of certification, e.g. product, process, company, packaging or conformity.",Components
Is Certificate Required?,componentInformation/certificationInformation/isCertificateRequired,Determines whether a specific certificate is required by regulation or legal property.,Components
Registration Agency,componentInformation/chemicalRegulations/chemicalRegistrationInformation/registrationAgency,The Agency that the file has been registered with.,Components
Registration End Date,componentInformation/chemicalRegulations/chemicalRegistrationInformation/registrationEndDateTime,The Date that the registration will expire.,Components
Registration Number,componentInformation/chemicalRegulations/chemicalRegistrationInformation/registrationNumber,The number assigned by the registration agency.,Components
Restriction Description,componentInformation/chemicalRegulations/chemicalRegistrationInformation/restrictionDescription,Free form description of any restrictions placed on the file.,Components
Chemical Regulation Name,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/chemicalRegulationName,"The name of a regulation managed by a regulatory agency to designed to restrict the handling, use, disposal of chemical ingredients for example Right to Know or CERCLA.",Components
Is Chemical Regulation Compliant,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/isChemicalRegulationCompliant,Determines whether or not a chemical is compliant with a specific regulation (driven by chemicalRegulationName).,Components
Carcinogenic Mutagenic Reprotoxic Type Code,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/carcinogenicMutagenicReprotoxicTypeCode,"The type of Carcinogenic, mutagenic, reprotoxic (CMR) substance which is contained in the medical device. Examples 1A, 1B",Components
Chemical Physical State Code,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalPhysicalStateCode,"The state of matter of the trade item, for example LIQUID.",Components
Chemical Property Additional Description,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyAdditionalDescription,A description of any conditions regarding a toxicity property for example a route of exposure and a target organ (e.g. inhalation and lungs). ,Components
Chemical Property Code,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyCode,A characteristic of a chemical substance expressed as a code. ,Components
Chemical Property Name,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyName,A characteristic of a chemical substance expressed as a name for example radionuclide.,Components
Chemical Property Type Code,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalPropertyTypeCode,The type of chemical property being described expressed as a code such as TOXICITY.,Components
Regulated Chemical Description,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalDescription,A text description of the regulated chemical or formula.,Components
Chemical Identifier Agency Name,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierAgencyName,The name for the agency that maintains the codelist.,Components
Chemical Identifier Code,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierCode,An identifier for a regulated chemical for example a CAS number.,Components
Chemical Identifier Description,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierCodeDescription,A text description of the regulated chemical or formula.,Components
Regulated Chemical Name,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalName,The name of a chemical regulated by a chemical regulation or agency. For example Chlorobenzene.,Components
Regulated Chemical Sunset Date,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalSunsetDateTime,As the date from which the placing on the market and the use of a substance is prohibited or restricted.,Components
Regulated Chemical Type Code,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalTypeCode,"The type of regulated chemical as defined by the regulatory agency. Example Endocrine Substance, Human Product, Medicine Product.",Components
Technical Chemical Name,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/technicalChemicalName,The official technical name for a chemical as required by a managing agency for example mercuric chloride.,Components
Test Criteria Description,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulation/regulatedChemical/testCriteriaDescription,A description of any of the criteria or test data being used to determine if a regulated chemical exists. ,Components
Chemical Regulation Agency,componentInformation/chemicalRegulations/chemicalRegulationInformation/chemicalRegulationAgency,An agency that regulates chemicals for example the US Environmental Protection Agency.,Components
Component Description,componentInformation/componentDescription,A description of the component.,Components
Component Identification,componentInformation/componentIdentification/componentIdentification,Unique Identifier for the component,Components
Scheme Agency Code,componentInformation/componentIdentification/SchemeAgencyCode,Scheme Agency Code,Components
Scheme Agency Name,componentInformation/componentIdentification/SchemeAgencyName,Scheme Agency Name,Components
Scheme Name,componentInformation/componentIdentification/SchemeName,Scheme Name,Components
Component Multiple Packed Quantity,componentInformation/componentMultiplePackedQuantity,"The quantity of containers when this component of the trade item is packed in multiple containers. If all quantity of this component is packed together into one item this attribute is not used. Example: 3 boxes = 1st box has 2 tables in it, 2 more boxes contain 2 chairs each for a total of 4. For the table component this value is 1 representing 1 box, for the chair the component value is 2 representing the 2 boxes.",Components
Component Number,componentInformation/componentNumber,Indicate a sequence number of a component of a trade item.,Components
Component Quantity,componentInformation/componentQuantity,An attribute used to describe the quantity of components described in either the componentIdentification or componentDescription.,Components
Context Identification,componentInformation/contextIdentification,The unique identifier established for the context managed by GS1.,Components
Context Identification,"componentInformation/contextIdentification
(Data Recipient 1WorldSync XML Only)",The unique identifier established for the context managed by GS1.,Components
Additional Description,componentInformation/descriptionInformation/additionalDescription,"Additional variants necessary to communicate to the industry to help define the product. Multiple variants can be established for each GTIN. This is a repeatable field, e.g. Style, Color, and Fragrance. ",Components
Brand Name,componentInformation/descriptionInformation/brandName,The name of the brand as recognized by the consumer.,Components
Color Code,componentInformation/descriptionInformation/colour/colourCode,The code list required to identify the color of the trade item. No ISO standards exist. Each industry needs to determine which code is will use.,Components
Color Code Maintenance Agency,componentInformation/descriptionInformation/colour/colourCodeListCode,The parties controlling the color code lists. Dependent on color code value.,Components
Product Color Description,componentInformation/descriptionInformation/colour/colourDescription,Free text description of the color of the trade item.,Components
Colour Family Code,componentInformation/descriptionInformation/colour/colourFamilyCode,Indicates the family code of the product colour.,Components
Colour Tint Code,componentInformation/descriptionInformation/colour/colourTintCode,Indicates the tint or shade code of the product colour.,Components
Pattern Code,componentInformation/descriptionInformation/colour/patternCode,Indicates the pattern code of the product.,Components
Functional Name,componentInformation/descriptionInformation/functionalName,"Describes the use of the product or service by the consumer. Should help clarify the product classification associated with the GTIN (e.g., ""drill"", ""detergent"", ""salad dressing"")",Components
Invoice Name,componentInformation/descriptionInformation/invoiceName,Free form information provider assigned trade item description designed to match trade item/service description as noted on invoices.,Components
Is Trade Item Designed To Be Divisible,componentInformation/descriptionInformation/isTradeItemDesignedToBeDivisible,Indicates whether the trade item or a single unit may be divided or separated into multiple pre-determined portions. A fraction or divisible amount of the total quantity of a trade item so as to obtain the desired amount.,Components
Label Description,componentInformation/descriptionInformation/labelDescription,A literal reproduction of the text featured on a product’s label in the same word-by-word order in which it appears on the front of the product’s packaging.,Components
Language Specific Brand Name,componentInformation/descriptionInformation/languageSpecificBrandName,The recognisable name used by a brand owner to uniquely identify a line of trade item or services expressed in a different language than the primary brand name (brandname).,Components
Language Specific Subbrand Name,componentInformation/descriptionInformation/languageSpecificSubbrandName,A second level of brand expressed in a different language than the primary sub-brand name (subBrand).,Components
Opacity Type Code,componentInformation/descriptionInformation/opacityTypeCode,"A code to describe the opacity achieved by the product. The codes may vary by product type. Examples Cosmetics, Glass, Paints and Wood Stains.",Components
Product Range,componentInformation/descriptionInformation/productRange,"A name, used by a BrandOwner, that span multiple consumer categories or uses. E.g. (Waist Watchers).",Components
Sequence Number,componentInformation/descriptionInformation/regulatedProductName/sequenceNumber,Sequence Number for Regulated Product Name.,Components
Statement,componentInformation/descriptionInformation/regulatedProductName/statement,"The prescribed, regulated or generic product name or denomination that describes the true nature of the food and is sufficiently precise to distinguish it from other foods according to country specific regulation.",Components
Short Description / POS Desc. 1,componentInformation/descriptionInformation/shortDescription,A short textual description associated with the product. This description can be used on the cash register(point of sale) receipt. ,Components
Sub Brand,componentInformation/descriptionInformation/subBrand,Second level of brand. Can be a trademark. It is the primary differentiating factor that a brand owner wants to communicate to the consumer or buyer,Components
Trade Item Description,componentInformation/descriptionInformation/tradeItemDescription,An understandable and useable description of a trade item using brand and other descriptors.,Components
Econtent Environment Type Code,componentInformation/descriptionInformation/tradeItemEcontent/econtentEnvironmentTypeCode,"A code providing the digital medium, the eContent is targeted towards for example WEBSITE or MOBILE_DEVICE.",Components
Econtent Trade Item Statement,componentInformation/descriptionInformation/tradeItemEcontent/econtentTradeItemStatement,A free text field providing additional information relating to the trade item. This is specifically addressing website and mobile device content for consumers.,Components
Trade Item Form Code,componentInformation/descriptionInformation/tradeItemFormCode,"A code representation of the form of the actual trade item, not the packaging.",Components
Trade Item Form Description,componentInformation/descriptionInformation/tradeItemFormDescription,The physical form or shape of the product.,Components
Trade Item Group Identification Code Description,componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeDescription,The description for the codelist,Components
Trade Item Group Identification Code List Agency Code,componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListAgencyCode,The code for the agency that maintains the codelist.,Components
Trade Item Group Identification Code List Agency Name,componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListAgencyName,The name for the agency that maintains the codelist.,Components
Trade Item Group Identification Code List Name,componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListName,The name of the codelist.,Components
Trade Item Group Identification Code List URI,componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListURI,The URI for the codelist.,Components
Trade Item Group Identification Code Reference,componentInformation/descriptionInformation/tradeItemGroupIdentification/tradeItemGroupIdentificationCodeReference,A code assigned by the supplier or manufacturer to logically group trade item independently from the Global trade item Classification.,Components
Trade Item Variant Statement,componentInformation/descriptionInformation/tradeItemVariant/tradeItemVariantStatement,"A complete statement describing the variant, that may comply with any regulatory requirements in a target market. Example for flavour: Barbecue with natural and artificial flavours.",Components
Trade Item Variant Type Code,componentInformation/descriptionInformation/tradeItemVariant/tradeItemVariantTypeCode,Provides a code to identify the variant type of the product (e.g. Flavour).,Components
Trade Item Variant Value,componentInformation/descriptionInformation/tradeItemVariant/tradeItemVariantValue,The variant value for a variant type (e.g. Grape).,Components
Variant,componentInformation/descriptionInformation/variants/variant,"Identifies the variant of the product. Variants are the distinguishing characteristics that differentiate products with the same brand and size including such things as the particular flavour, fragrance, taste.",Components
Diet Type Description,componentInformation/dietInformation/dietTypeDescription,Free text for indication of diet not stated in the list of diets.,Components
Additional Certification Organisation TypeCode,componentInformation/dietInformation/foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationTypeCode,Additional Certification Organisation TypeCode,Components
Additional Certification Organisation Value,componentInformation/dietInformation/foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationValue,Additional Certification Organisation Value,Components
Certificate Issuance DateTime,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificateIssuanceDateTime,The date and time that a certificate has been issued for a Trade Item.,Components
Certification Assessment DateTime,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificationAssessmentDateTime,The date and time that an assessment was performed on a Trade Item that led to a certification.,Components
Certification Effective End Date (DD-MON-YYYY),componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificationEffectiveEndDateTime,The date and time upon which the certification is no longer effective.,Components
Certification Effective Start Date (DD-MON-YYYY),componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificationEffectiveStartDateTime,The date and time upon which the certification is effective.,Components
Certification Execution Country Code,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificationExecutionCountryCode,The country where the certification is performed.  Use ISO3166_1 Code,Components
Certification Identification,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificationIdentification,A reference issued to confirm that something has passed certification.,Components
Certification Value,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/certificationValue,"The unique identification (ID) that provides a trade item's certification standard value, official licensing number or identification which proves that a product/process has passed the certification procedure.",Components
Alternate Text,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Components
Content Description,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/contentDescription,Free form description of the content of the file.,Components
File Creation Program,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileCreationProgram,The program used in the creation of the digital asset.,Components
File Effective End Date,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileEffectiveEndDateTime,The date this image ceases to be the current image for the trade item.,Components
File Effective Start Date,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileEffectiveStartDateTime,The date this image is the current image for this trade item.,Components
File Format Description,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileFormatDescription,Free form description of the format of the file.,Components
File Format Name,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileFormatName,"The name of the file format. Examples: PDF, JPEG,  BMP etc.",Components
File Language,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileLanguageCode,The specified language to which the digital asset is targeted.,Components
File Name,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileName,The name of the file that contains the external information.,Components
File Optimal Viewer Name,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileOptimalViewerName,The software to which this file was targeted.,Components
File Origin Country,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileOriginCountryCode,The country where the digital asset originated.,Components
File Sequence Number,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Components
File Version,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Components
Image Facing,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Components
Image Orientation Type Code,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Components
Image State Code,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Components
Is Image Rendered,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Components
Is Primary File,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Components
Referenced File Type Code,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/referencedFileTypeCode,The file type that is being referenced.,Components
Title Text,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Components
Uniform Resource Identifier,componentInformation/dietInformation/foodAndBevDietTypeInfo/certification/referencedFileInformation/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet. URLs may refer to documents, resources, people, etc. ",Components
Certification Organisation Identifier,componentInformation/dietInformation/foodAndBevDietTypeInfo/certificationOrganisationIdentifier,The identification of the organization that issued the certificate number confirming that the Trade Item has gone through certification.,Components
Certification Standard,componentInformation/dietInformation/foodAndBevDietTypeInfo/certificationStandard,"The name of the certification standard or the type of certification, e.g. product, process, company, packaging or conformity.",Components
Diet Type Certification Agency,componentInformation/dietInformation/foodAndBevDietTypeInfo/dietTypeCertificationAgency,Name of organization defining the requirements for diet claims.,Components
Diet Type Code,componentInformation/dietInformation/foodAndBevDietTypeInfo/dietTypeCode,"Code indicating the diet for, which the product is suitable.",Components
Diet Type Subcode,componentInformation/dietInformation/foodAndBevDietTypeInfo/dietTypeSubcode,Indicates a set of agreements or a certificate name that guarantees the product is permitted in a particular diet.,Components
Is Certificate Required?,componentInformation/dietInformation/foodAndBevDietTypeInfo/isCertificateRequired,Determines whether a specific certificate is required by regulation or legal property.,Components
Is Diet Type Marked On Package?,componentInformation/dietInformation/foodAndBevDietTypeInfo/isDietTypeMarkedOnPackage,Is the diet type specified by dietTypeCode (and sometimes dietTypeSubcode) labelled on the product package?,Components
Bioengineered Declaration Claim Code,componentInformation/farmingAndProcessingInformation/bioengineeredDeclarationClaimCode,Valid value for a product containing detectable genetically modified material for which the modification could not otherwise be obtained through conventional breeding or found in nature. This valid value may also be used for a product manufactured using ingredients derived through bioengineering which have undergone processes to remove modified genetic material such that it cannot be detected using common testing methods. Excludes incidental additives.,Components
Genetically Modified Declaration Code,componentInformation/farmingAndProcessingInformation/geneticallyModifiedDeclarationCode,A statement of the presence or absence of genetically modified protein or DNA.,Components
Growing Method Code,componentInformation/farmingAndProcessingInformation/growingMethodCode,The process through which fresh produce is grown and cultivated.,Components
Irradiated Code,componentInformation/farmingAndProcessingInformation/irradiatedCode,Indicates if radiation has been applied.,Components
Is Bioengineered Declaration Claim Relevant Data Provided,componentInformation/farmingAndProcessingInformation/isBioengineeredDeclarationClaimRelevantDataProvided,All Bioengineered Declaration Claim Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  values not populated are not relevant or not required to be populated on the product label by local regulations.,Components
Is Raw Material Irradiated,componentInformation/farmingAndProcessingInformation/isRawMaterialIrradiated,Indicates if radiation has been applied to a trade item's raw material.,Components
Maturation Method Code,componentInformation/farmingAndProcessingInformation/maturationMethodCode,The method of maturity for the item or ingredient for example tree ripened or jet fresh,Components
Organic Certification Effective End Date Time,componentInformation/farmingAndProcessingInformation/organicClaim/organicCertification/organicCertificationEffectiveEndDateTime,The date and time upon which the organic certification is no longer effective.,Components
Organic Certification Effective Start Date Time,componentInformation/farmingAndProcessingInformation/organicClaim/organicCertification/organicCertificationEffectiveStartDateTime,The date and time upon which the organic certification is effective.,Components
Organic Certification Identification,componentInformation/farmingAndProcessingInformation/organicClaim/organicCertification/organicCertificationIdentification,A number issued to confirm that something has passed organic certification.,Components
Organic Claim Agency,componentInformation/farmingAndProcessingInformation/organicClaim/organicClaimAgencyCode,A governing body that creates and maintains standards related to organic products.,Components
Organic Claim Agency Name,componentInformation/farmingAndProcessingInformation/organicClaim/organicClaimAgencyName,Organization that issued the organic certificate number confirming that the Trade Item has gone through certification.,Components
Organic Claim Agency Type Code,componentInformation/farmingAndProcessingInformation/organicClaim/organicClaimAgencyTypeCode,A code depicting whether an organic agency manages organic standards or issues certifications.,Components
Organic Percent Claim,componentInformation/farmingAndProcessingInformation/organicClaim/organicPercentClaim,The percent of actual organic materials per weight of the trade item. This is usually claimed on the product.,Components
Organic Trade Item Code,componentInformation/farmingAndProcessingInformation/organicClaim/organicTradeItemCode,Used to indicate the organic status of a trade item or of one or more of its components.,Components
Organic Product Place Of Farming Code,componentInformation/farmingAndProcessingInformation/organicProductPlaceOfFarmingCode,"Indication of the place where the agricultural raw materials of which the product is composed have been farmed,",Components
Post Harvest Treatment Chemical Code,componentInformation/farmingAndProcessingInformation/postHarvestTreatmentChemicalCode,Specifies if the fruit or vegetable has been treated or not post harvesting with a chemical or wax.,Components
Post Process Trade Item Treatment Physical Code,componentInformation/farmingAndProcessingInformation/postProcessTradeItemTreatmentPhysicalCode,Produce has gone some physical process whether altered or other physical processes after harvesting.,Components
Preservation Technique Code,componentInformation/farmingAndProcessingInformation/preservationTechniqueCode,Code value indicating the preservation technique used to preserve the product from deterioration.,Components
Raw Material Used In Preparation Weight,componentInformation/farmingAndProcessingInformation/rawMaterialUsedInPreparationWeight,The weight of the raw materials (meat) used to produce the finished food product.,Components
Source Animal Code,componentInformation/farmingAndProcessingInformation/sourceAnimalCode,The source of raw material used to produce the food product for example a goat for milk,Components
Additive Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveName,Represents the name of any additive or genetic modification contained or not contained in the trade item.,Components
Additive Type Code Reference Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/code,The code which identifies the additive type code used in each Food and Beverage component.,Components
Code Description,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeDescription,The description for the codelist.,Components
Code List Agency Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Components
Code List Agency Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Components
Code List Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListName,The name of the codelist.,Components
Code List URI,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListURI,The URI for the codelist.,Components
Additive Level of Containment,componentInformation/foodAndBeverageIngredientInformation/foodAndBevAdditiveInformation/levelOfContainmentCode,Code indicating the level of presence of the additive.,Components
Content Percentage,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/contentPercentage,Indication of the percentage of the ingredient contained in the product.,Components
Grape Variety Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/grapeVarietyCode,The vine variety used for the production of this wine for example Merlot expressed as a code.,Components
Ingredient Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientCode/code,"The code indicating an ingredient (according to regulations of the target market). Select values from the GS1 code list IngredientCode_GDSN, which is based on an extract of the Codex Alimentarius international food standard developed jointly by the Food and Agriculture Organization (FAO) of the United Nations and World Health Organization (WHO).",Components
Ingredient Code Description,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientCode/codeDescription,A description for the code value provided.,Components
Ingredient Content Percentage Measurement Precision Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientContentPercentageMeasurementPrecisionCode,The measurement precision qualifying the ingredient content percentage for example LESS_THAN.,Components
Ingredient Definition,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientDefinition,Plain language definitions of ingredients which are consumer friendly.,Components
Bioengineered Declaration Claim Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/bioengineeredDeclarationClaimCode,Valid value for a product containing detectable genetically modified material for which the modification could not otherwise be obtained through conventional breeding or found in nature. This valid value may also be used for a product manufactured using ingredients derived through bioengineering which have undergone processes to remove modified genetic material such that it cannot be detected using common testing methods. Excludes incidental additives.,Components
Genetically Modified Declaration Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/geneticallyModifiedDeclarationCode,States the presence or absence of genetically modified protein or DNA in the trade item.,Components
Growing Method Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/growingMethodCode,The process through which fresh produce is grown and cultivated.,Components
Irradiated Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/irradiatedCode,Indicates if radiation has been applied.,Components
Is Bioengineered Declaration Claim Relevant Data Provided,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/isBioengineeredDeclarationClaimRelevantDataProvided,All Bioengineered Declaration Claim Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  values not populated are not relevant or not required to be populated on the product label by local regulations.,Components
Maturation Method Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/maturationMethodCode,The method of maturity for the item or ingredient for example tree ripened or jet fresh.,Components
Post Harvest Treatment Chemical Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/postHarvestTreatmentChemicalCode,Specifies if the fruit or vegetable has been treated or not post harvesting with a chemical or wax.,Components
Post Process Trade Item Treatment Physical Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/postProcessTradeItemTreatmentPhysicalCode,Produce has gone some physical process whether altered or other physical processes after harvesting.,Components
Preservation Technique Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/preservationTechniqueCode,Code value indicating the preservation technique used to preserve the product from deterioration.,Components
Ingredient Source Animal Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientFarmingProcessing/sourceAnimalCode,The source of raw material used to produce the food product for example a goat for milk. ,Components
Ingredient Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientName,"Text field indicating one ingredient or ingredient group (according to regulations of the target market). Ingredients include any additives (colourings, preservatives, e-numbers, etc) that are encompassed.",Components
Organic Certification Effective End Date Time,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicCertification/organicCertificationEffectiveEndDateTime,The date and time upon which the organic certification is no longer effective.,Components
Organic Certification Effective Start Date Time,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicCertification/organicCertificationEffectiveStartDateTime,The date and time upon which the organic certification is effective.,Components
Organic Certification Identification,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicCertification/organicCertificationIdentification,A number issued to confirm that something has passed organic certification.,Components
Organic Claim Agency,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyCode,A governing body that creates and maintains standards related to organic products.,Components
Organic Claim Agency Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyName,Organization that issued the organic certificate number confirming that the Trade Item has gone through certification.,Components
Organic Claim Agency Type Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyTypeCode,A code depicting whether an organic agency manages organic standards or issues certifications.,Components
Organic Percent Claim,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicPercentClaim,The percent of actual organic materials per weight of the trade item. This is usually claimed on the product.,Components
Organic Trade Item Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicTradeItemCode,Used to indicate the organic status of a trade item or of one or more of its components,Components
Organic Product Place Of Farming Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientOrganicInformation/organicProductPlaceOfFarmingCode,"Indication of the place where the agricultural raw materials of which the product is composed have been farmed,",Components
Additional Party ID Type,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/additionalPartyIdentification/additionalPartyIdentificationType,Identification of a party by use of a code other than the Global Location Number. ,Components
Additional Party ID Value,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/additionalPartyIdentification/additionalPartyIdentificationValue,A party identifier that is in addition to the GLN. ,Components
Party GLN,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/gln,"The Global Location Number (GLN) is a structured Identification of a physical location, legal or functional entity within an enterprise. The GLN is the primary party identifier. ",Components
Party Address,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/partyAddress,The address associated with the party.,Components
Party Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/partyName,The name of the party expressed in text.,Components
Party Role,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientParty/partyRoleCode,A code that identifies the role of a party in a business transaction. ,Components
Country Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countryCode,Code specifying a country.,Components
Country Subdivision Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countrySubdivisionCode,Code specifying a country subdivision,Components
Country Of Origin Statement,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOriginStatement,A description of the geographic area the item may have originated from or has been processed.,Components
Country Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/countryOfActivity/countryCode,Country Code,Components
Country Subdivision Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/countryOfActivity/countrySubdivisionCode,Country Subdivision Code,Components
Product Activity Region Description,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionDescription,"The region in which a processing or other activity has been performed for example processing, bottling, manufacturing.",Components
Enumeration Value,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValue,Code List Value maintained by an external code list agency.,Components
Enumeration Value Definition,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDefinition,Definition of the code list value maintained by an external code list agency,Components
Enumeration Value Description,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDescription,Description of the value in a code list value maintained by an external code list agency.,Components
External Agency Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalAgencyName,The name of the agency that manages a code list external to GS1. ,Components
External Code List Name,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListName,The name of the code list maintained by an agency external to GS1. ,Components
External Code List Version,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListVersion,The version of the code list maintained by an agency external to GS1. ,Components
Product Activity Type Code,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityTypeCode,"A code depicting the type of activity being performed on a trade item for example processing, bottling, manufacturing.",Components
Provenance Statement,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPlaceOfActivity/provenanceStatement,"The place a trade item originates from. This is to be specifically used to enable things such as cities, mountain ranges, regions that do not comply with ISO standards.",Components
Ingredient Purpose,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientPurpose,A description of the primary purpose that an ingredient serves for example a colouring in the case of annatto in a cheese rind.,Components
Ingredient Sequence,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/ingredientSequence,"A text sequence (01, 02, 03, sub-ingredients 01.01, 01.02,01.03...) indicating the ingredient order by content percentage of the product. (major ingredient = 01, second ingredient = 02, Second Ingredient Sub-Ingredient 02.01, Second Ingredient second Sub-Ingredient 02.02) etc. ",Components
Is Ingredient Emphasised,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredient/isIngredientEmphasised,Denotes the ingredient that should have it's text emphasised,Components
Food And Beverage Ingredient Additive Statement,componentInformation/foodAndBeverageIngredientInformation/foodAndBevIngredientAdditiveStatement,"Statement on presence or absence of additives or genetic modification contained in the trade item for example ""Contains no preservatives, no artificial colours or flavours and no artificial flavours"".",Components
Ingredient of Concern Code,componentInformation/foodAndBeverageIngredientInformation/ingredientOfConcernCode,"Indicates a claim to an ingredient, considered to be a concern for regulatory or other reasons, and which is “contained” within the trade item but may not need to specify the amount whether approximate, or an accurate measurement be given. Datatype codelist IngredientOfConcernCode, values: IODISED_SALT, RAW_MILK",Components
Sequence Number,componentInformation/foodAndBeverageIngredientInformation/ingredientStatement/sequenceNumber,Sequence number for ingredient statement,Components
Ingredient Statement,componentInformation/foodAndBeverageIngredientInformation/ingredientStatement/statement,Information on the constituent ingredient make up of the product specified as one string.,Components
Juice Content Percent,componentInformation/foodAndBeverageIngredientInformation/juiceContentPercent,For natural beverages - the percentage concentration of natural juice. Required for products having sufficient concentration to have different treatment under GST legislation.,Components
Manufacturer Preparation Type Code,componentInformation/foodAndBeveragePreparationServing/manufacturerPreparationTypeCode,States how the product or a component of the product has been prepared during the manufacturing process.,Components
Maximum Number Of Smallest Units Per Package,componentInformation/foodAndBeveragePreparationServing/maximumNumberOfSmallestUnitsPerPackage,The maximum number of the smallest units contained in the package.,Components
Measurement Precision Of Number Of Servings Per Package,componentInformation/foodAndBeveragePreparationServing/measurementPrecisionOfNumberOfServingsPerPackage,Code indicating whether the number of servings per package is exact or approximate.,Components
Number Of Servings Per Package,componentInformation/foodAndBeveragePreparationServing/numberOfServingsPerPackage,The total number of servings contained in the package.,Components
Number Of Servings Range Description,componentInformation/foodAndBeveragePreparationServing/numberOfServingsRangeDescription,"A text description describing the range of servings/portions contained within a trade item. Some items may contain a variance in the number of units or a range, therefore the servings could also vary for the trade item. This attribute should only be used when there is a range of servings. If servings is an exact amount, this should not be used. Ex a bag of meatballs may contain 18-20 meatballs. Serving size may be 2 meatballs. Therefore the numberOfServingsRange= 9-10 servings/portions",Components
Number Of Smallest Units Per Package,componentInformation/foodAndBeveragePreparationServing/numberOfSmallestUnitsPerPackage,The total number of smallest units contained in the package. The smallest unit cannot be further divided without breaking or slicing the product.,Components
Convenience Level,componentInformation/foodAndBeveragePreparationServing/preparationServing/convenienceLevel,An indication of the ease of preparation for semi-prepared products. The convenience level indicates the level of preparation in percentage required to prepare and helps the consumer to assess how long it will take to prepare the meal.,Components
Is Graded Before Preparation Type Applied,componentInformation/foodAndBeveragePreparationServing/preparationServing/isGradedBeforePreparationTypeApplied,An indicator specifying that a product is graded prior to a manufacturer applying a preparation method.,Components
Maximum Optimum Consumption Temperature,componentInformation/foodAndBeveragePreparationServing/preparationServing/maximumOptimumConsumptionTemperature,The upper limit drinking temperature of the optimum range of the drinking temperature.,Components
Minimum Optimum Consumption Temperature,componentInformation/foodAndBeveragePreparationServing/preparationServing/minimumOptimumConsumptionTemperature,The lower limit drinking temperature of the optimum range of the drinking temperature,Components
Precautions,componentInformation/foodAndBeveragePreparationServing/preparationServing/precautions,Specifies additional precautions to be taken before preparation or consumption of the product.,Components
Preparation Instructions,componentInformation/foodAndBeveragePreparationServing/preparationServing/preparationInstructions,Textual instruction on how to prepare the product before serving.,Components
Preparation Type,componentInformation/foodAndBeveragePreparationServing/preparationServing/preparationTypeCode,"A Code specifying the technique used to make the product ready for consumption. For example: baking, boiling.",Components
Product Yield,componentInformation/foodAndBeveragePreparationServing/preparationServing/productYieldInformation/productYield,Product Quantity after preparation.,Components
Product Yield Type Code,componentInformation/foodAndBeveragePreparationServing/preparationServing/productYieldInformation/productYieldTypeCode,Code indicating the type of yield measurement.,Components
Product Yield Variation,componentInformation/foodAndBeveragePreparationServing/preparationServing/productYieldInformation/productYieldVariationPercentage,Indication of range in percent of the given cooking / roasting loss. Percentage that the actual weight of the trade item differs upward or downward from the average or estimated product yield.,Components
Recipe,componentInformation/foodAndBeveragePreparationServing/preparationServing/recipe,A description of how the product is used with other ingredients to yield a new result different than the trade item.,Components
Serving Suggestion,componentInformation/foodAndBeveragePreparationServing/preparationServing/servingSuggestion,Free text field for serving suggestion.,Components
Product Textural Characteristics,componentInformation/foodAndBeveragePreparationServing/productPreparationTextureInformation/productTexturalCharacteristics,"The code for the agency which maintains the food and drinks texture or thickness code list. For example, International Dysphagia Diet Standardisation Initiative (IDSSI)",Components
Product Texture Agency Code,componentInformation/foodAndBeveragePreparationServing/productPreparationTextureInformation/productTextureAgencyCode,Statement by the brand owner as noted on the product packaging to describe and confirm the flow or textural characteristics of a particular product at the time of testing.,Components
Product Texture Code,componentInformation/foodAndBeveragePreparationServing/productPreparationTextureInformation/productTextureCode,Specify the texture or thickness of the contained product as a code.,Components
Microbiological Organism Method of Analysis Code,componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/microbiologicalOrganismMethodOfAnalysisCode,"Method of analysis used to determine quantity of the specified microbiological organism (E.g. probiotic live microbe) in the product. Example: Aerobic plate count, Flow cytometry.",Components
Microbiological Organism Minimum Value,componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/microbiologicalOrganismMinimumValue,The minimum allowable value of the microbiological organism per weight or volume in a specific environment.,Components
Organism Code,componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismCode,Code indicating the type of microbiological organism.,Components
Organism Maximum Value,componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismMaximumValue,Maximum allowable value of the microbiological organism.,Components
Organism Reference Value,componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismReferenceValue,Reference values give an indication of which product specific ranges of micro organisms are to be expected and which micro organism contents in the appropriate food products are acceptable due to hygiene rules,Components
Organism Warning Value,componentInformation/foodAndBeveragePropertiesInformation/foodAndBevMicrobiological/organismWarningValue,"A microbiological limit which, in a 3–class plan, separates marginally acceptable quality from defective quality",Components
PhysioChemical Characteristic Code,componentInformation/foodAndBeveragePropertiesInformation/physioChemicalCharacteristic/physioChemicalCharacteristicCode,Code indicating the type of physiochemical characteristic. ,Components
PhysioChemical Characteristic Value,componentInformation/foodAndBeveragePropertiesInformation/physioChemicalCharacteristic/physioChemicalCharacteristicValue,Measurement value of the physicochemical characteristic.,Components
GPC Category Code,componentInformation/gpcCategoryCode,Code specifying a product category according to the GS1 Global Product Classification (GPC) standard.,Components
Autographed By,componentInformation/marketingInformation/autographedBy,The person's name who signed or autographed the trade item for example John Hancock.,Components
Strongness Of Basic Taste Code,componentInformation/marketingInformation/basicTasteInformation/strongnessOfBasicTasteCode,Indicates the descriptive term that is used by the product manufacturer to identify the strongness of basic taste of the product.,Components
Type Of Basic Taste Code,componentInformation/marketingInformation/basicTasteInformation/typeOfBasicTasteCode,"Indicates a basic taste of a product,  and together with strongnessOfBasicTaste this indicates the level of the basic taste in a product.",Components
Sequence Number,componentInformation/marketingInformation/brandMarketingDescription/sequenceNumber,Sequence Number for Brand Marketing Description,Components
Statement,componentInformation/marketingInformation/brandMarketingDescription/statement,Marketing description associated to the Trade item.,Components
BuiltIn Product Type,componentInformation/marketingInformation/builtInProductType,The type of product that the trade item is combined with,Components
Marketing Message,componentInformation/marketingInformation/channelSpecificMarketingInformation/channelSpecificMarketingMessage/marketingMessage,A marketing message for the trade item relating to a specific trade channel such as CONVENIENCE.,Components
Sequence Number,componentInformation/marketingInformation/channelSpecificMarketingInformation/channelSpecificMarketingMessage/sequenceNumber,Sequence Number for channel specific marketing message,Components
Marketing Message,componentInformation/marketingInformation/channelSpecificMarketingInformation/channelSpecificShortMarketingMessage/marketingMessage,A short marketing message associated to the Trade item for a specific trade channel.,Components
Sequence Number,componentInformation/marketingInformation/channelSpecificMarketingInformation/channelSpecificShortMarketingMessage/sequenceNumber,Sequence Number for channel specific short marketing message,Components
Marketing Trade Channel,componentInformation/marketingInformation/channelSpecificMarketingInformation/marketingTradeChannel,The trade channel associated with the marketing information.,Components
Coupon Family Code,componentInformation/marketingInformation/couponFamilyCode,A code assigned by the vendor to a single trade item or to families of consumer trade items that can be used by in store scanners in conjunction with a U.P.C coupon value code for coupon value discount when the proper trade item has been purchased.,Components
Target Market Country Code,componentInformation/marketingInformation/illegalToAdvertiseTargetMarket/targetMarketCountryCode,The target Market which is illegal to advertise.,Components
Target Market Subdivision Code,componentInformation/marketingInformation/illegalToAdvertiseTargetMarket/targetMarketSubdivisionCode,The target Market Subdivision which is illegal to advertise.,Components
Imitation Or Substitute For,componentInformation/marketingInformation/imitationOrSubstituteFor,"The name of the imitated or substitute product. Example: The GTIN product name is Ketchup type sauce, this value would be Ketchup.",Components
Is Imitation Or Substitute,componentInformation/marketingInformation/isImitationOrSubstitute,Determines whether the trade item is an imitation or substitute product resembling the real product for example imitation eggs or milk substitute non-dairy.,Components
Is Trade Item Considered Collectible Or Memorabilia?,componentInformation/marketingInformation/isTradeItemConsideredCollectibleOrMemorabilia,Is the trade item considered collectible by consumer or evokes memories to the end consumer.,Components
Campaign End Date,componentInformation/marketingInformation/marketingCampaign/campaignEndDateTime,The date suggested by the supplier for the campaign to end. It indicates the end of a marketing campaign.,Components
Campaign Name,componentInformation/marketingInformation/marketingCampaign/campaignName,"Name of the sales or marketing campaign, for which the textile trade item is intended. Input of user-defined text in order to assign the item to a specific marketing campaign. Used to specify promotions, marketing.",Components
Campaign Start Date,componentInformation/marketingInformation/marketingCampaign/campaignStartDateTime,The data suggested by the supplier for the campaign to start. It indicates the beginning of a marketing campaign.,Components
Sequence Number,componentInformation/marketingInformation/marketingMessage/sequenceNumber,Sequence Number for marketing message,Components
Trade Item Marketing Message,componentInformation/marketingInformation/marketingMessage/tradeItemMarketingMessage,Marketing message associated to the Trade item.,Components
Necessary Trade Item To Use Description,componentInformation/marketingInformation/necessaryTradeItemToUseDescription,A description used to differentiate the stand alone trade items from the trade items that cannot be used on their own for example an add-on for SIMS video game or accessories for i-phone.,Components
Is Trade Item Seasonal?,componentInformation/marketingInformation/season/isTradeItemSeasonal,An indicator whether or not the trade item is only offered during certain parts of the year or targeted to different seasons.,Components
Seasonal End Date,componentInformation/marketingInformation/season/seasonalAvailabilityEndDateTime,This element indicates the end date of the seasonal availability of the trade item. The seasonal availability can be different from the ordering time and especially from the dispatching time. The availability is more like an intention of the supplier as to how long he wants to offer the product. The dispatching time is more useful for the DC and the outlet warehousing.,Components
Seasonal Start Date,componentInformation/marketingInformation/season/seasonalAvailabilityStartDateTime,This element indicates the start date of the seasonal availability of the trade item. Reference related attribute in Item document ,Components
Season Calendar Year,componentInformation/marketingInformation/season/seasonCalendarYear,This element indicates the calendar year in which the trade item is seasonally available. This item is seasonally available in the year 2002.,Components
Season Name,componentInformation/marketingInformation/season/seasonName,This element defines the season applicable to the item.,Components
Season Parameter,componentInformation/marketingInformation/season/seasonParameterCode,"Indication of the season, in which the trade item is available, i.e. assignment to one of the following collection periods: spring/summer, autumn/winter or all year round. ",Components
Short Trade Item Marketing Message,componentInformation/marketingInformation/shortTradeItemMarketingMessage/marketingMessage,A short marketing message associated to the Trade item.,Components
Sequence Number,componentInformation/marketingInformation/shortTradeItemMarketingMessage/sequenceNumber,Sequence Number for short marketing message,Components
Special Item Code,componentInformation/marketingInformation/specialItemCode,"This element identifies specific items for promotional, purchase eligibility and/or special tracking. For example Dynamic Assortment: Chia Pets are sold individually to the consumer and each different Chia Pet is marked with a unique GTIN. The items are ordered by the case, which has its own unique GTIN. The case will contain a random assortment of Chia Pets. There is no guarantee that the same ratio of child items will be in a case from order to order but the total quantity of items in the case will remain the same.",Components
Sequence Number,componentInformation/marketingInformation/story/sequenceNumber,Sequence Number for Trade Item Story.,Components
Trade Item Story,componentInformation/marketingInformation/story/tradeItemStory,Allows suppliers to tell the back story of the product and inform their consumers.,Components
Target Consumer Age,componentInformation/marketingInformation/targetConsumerAge,Identifies the target consumer age range for which a trade item has been designed.,Components
Target Consumer Age Group,componentInformation/marketingInformation/targetConsumerAgeGroup,"A description of a general age group the product is designed for. This would not include the actual age ranges. For example Infant, Toddler, Child, Teen, Adult.",Components
Target Consumer Age Group Code,componentInformation/marketingInformation/targetConsumerAgeGroupCode,A code depicting the general age group the product is designed for example BABY.,Components
Target Consumer Gender,componentInformation/marketingInformation/targetConsumerGender,Identifies the target consumer gender for which a product has been designed.,Components
Target Consumer Maximum Usage,componentInformation/marketingInformation/targetConsumerUsage/targetConsumerMaximumUsage,"Measurement of the maximum usage criteria for the target consumer that will use the product for example maximum age, height, etc.",Components
Target Consumer Minimum Usage,componentInformation/marketingInformation/targetConsumerUsage/targetConsumerMinimumUsage,"Measurement of the minimum usage criteria for the target consumer that will use the product for example minimum age, height, etc.",Components
Target Consumer Usage Type Code,componentInformation/marketingInformation/targetConsumerUsage/targetConsumerUsageTypeCode,"A code identifying the type of usage criteria for the target consumer that will use the product for example AGE, HEIGHT.",Components
Tasting Notes,componentInformation/marketingInformation/tastingNotes,"Written testimony about a products aroma, flavour, texture for example fruity.",Components
Case Description,componentInformation/marketingInformation/tradeItemCaseInformation/caseDescription,"Describes the shape and characteristics of the case the trade item will be inside. For example watches come in unique cases. Examples include leather bound case, designer matching case, velvet lined box.",Components
Feature Benefit,componentInformation/marketingInformation/tradeItemFeatureBenefit/featureBenefit,Element for consumer facing market-ing content to describe the key features or benefits of the style suitable for display purposes.,Components
Sequence Number,componentInformation/marketingInformation/tradeItemFeatureBenefit/sequenceNumber,Sequence Number for Feature Benefit,Components
code,componentInformation/marketingInformation/tradeItemFeatureCodeReference/code,The code for the feature.,Components
Code Description,componentInformation/marketingInformation/tradeItemFeatureCodeReference/codeDescription,The description for the codelist,Components
Code List Agency Code,componentInformation/marketingInformation/tradeItemFeatureCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Components
Code List Agency Name,componentInformation/marketingInformation/tradeItemFeatureCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Components
Code List Name,componentInformation/marketingInformation/tradeItemFeatureCodeReference/codeListName,The name of the codelist.,Components
Code List URI,componentInformation/marketingInformation/tradeItemFeatureCodeReference/codeListURI,The URI for the codelist.,Components
Trade Grade Information Item Grade Code,componentInformation/marketingInformation/tradeItemGradeInformation/gradeCode,"A code indicating the degree of refinement, features, or capabilities for a trade item for example the quality grade of a ceramic tile",Components
Trade Grade Information Code Agency,componentInformation/marketingInformation/tradeItemGradeInformation/gradeCodeAgency,An agency that manages a grade code list.,Components
Trade Grade Information Code List Identification,componentInformation/marketingInformation/tradeItemGradeInformation/gradeCodeListIdentification,The identification of a code list which includes grades for an item or service.,Components
Trade Item Included Accessories,componentInformation/marketingInformation/tradeItemIncludedAccessories,Any included object or device not part of the core product itself but which adds to its functionality or use,Components
Trade Item Introduction Year,componentInformation/marketingInformation/tradeItemIntroductionYear,The date the GTIN and/or trade item is introduced into the marketplace. Once established this does not change. ,Components
Trade Item Key Words,componentInformation/marketingInformation/tradeItemKeyWords,Words or phrases that enables web search engines to find trade items on the internet,Components
Trade Item Technology Description,componentInformation/marketingInformation/tradeItemTechnologyDescription,The type(s) of marketing name technologies contained in the appliance for example Smart Technology.,Components
Usage Color Description,componentInformation/marketingInformation/usageColourDescription,"A description of the usage of colour(s) the trade item offers such as pens, markers, ink pads, printer cartridges and other implements that provide colour. Examples include black, white",Components
Description On A Nutrient,componentInformation/nutritionalInformation/descriptionOnANutrient,Description clarifying the nutrient information,Components
Food Beverage Composition Code,componentInformation/nutritionalInformation/foodBeverageComposition/foodBeverageCompositionCode,A value assigned by the agency for the lookup of food composition information that applies to regulatory nutrition information,Components
Food Beverage Composition Database Code,componentInformation/nutritionalInformation/foodBeverageComposition/foodBeverageCompositionDatabaseCode,A code depicting an agency which manages a food composition database that applies to regulatory nutrition information,Components
Food Beverage Composition Description,componentInformation/nutritionalInformation/foodBeverageComposition/foodBeverageCompositionDescription,A text description of either the associated value or the actual database entry lookup,Components
Nutrient Format Type Code Reference Code,componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/code,The code which describes the nutrient format type,Components
Nutrient Format Type Code Reference Description,componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeDescription,The description for Nutrient Format Code Reference,Components
Nutrient Format Type Code Reference Code List Agency Code,componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Components
Nutrient Format Type Code Reference Code List Agency Name,componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Components
Nutrient Format Type Code Reference Code List Name,componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListName,The name of the codelist.,Components
Nutrient Format Type Code Reference Code List URI,componentInformation/nutritionalInformation/nutrientFormatTypeCodeReference/codeListURI,The URI for the codelist.,Components
Daily Value Intake Reference,componentInformation/nutritionalInformation/nutrientInformation/dailyValueIntakeReference,Free text field specifying the daily value intake base for on which the daily value intake per nutrient has been based. Example: 'Based on a 2000 calorie diet.',Components
Nutrient Basis Quantity,componentInformation/nutritionalInformation/nutrientInformation/nutrientBasisQuantity,"The basis amount that a nutrient is measured against. In some markets, this is required by regulation. For example, 100 gr, 100 ml, etc. Please refer to the target markets implementation guideline on how to populate this attribute.",Components
Nutrient Basis Quantity Description,componentInformation/nutritionalInformation/nutrientInformation/nutrientBasisQuantityDescription,Additional free text information needed to correctly express nutrient basis quantity for example per bottle (100 ml).,Components
Nutrient Basis Quantity Type Code,componentInformation/nutritionalInformation/nutrientInformation/nutrientBasisQuantityTypeCode,"The type of quantity contained for example measurement, serving size, or container.",Components
Percentage of Daily Value Intake,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/dailyValueIntakePercent,The percentage of the recommended daily intake of a nutrient as recommended by authorities of the target market. Is expressed relative to the serving size and base daily value intake.,Components
Daily Value Intake Percent Measurement Precision Code,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/dailyValueIntakePercentMeasurementPrecisionCode,Code indicating whether the specified nutrient content for the Daily Value Intake % is exact or approximate or less than. This is a compound attribute which consists of a Nutrient and a measurement precision code. The structure is nutrient: measurementprecisioncode (ie SALTEQ: LESS_THAN),Components
Description On Nutrient Qualifier,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/descriptionOnNutrientQualifier,"The qualifier from the descriptionOnNutrient applies to a specific nutrient. Sometimes an actual nutrient quantity or % are not given, instead only a qualifier. Example descriptionOnNutrient = * Daily Value Intake does not apply. Then this would only be the * at the nutrient level. Examples include *, @, etc",Components
Expressed As Part Of,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/expressedAsPartOf,"The nutrient type that is expressed as part of another nutrient total. This attribute represents the main nutrient. Example: Carnitine expressed as part of Protein. This attribute is Protein, total (PRO-) and the nutrientTypeCode is Carnitine (L_CARNITINE).",Components
Is Nutrient On Front Of Package,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/isNutrientOnFrontOfPackage,Indication the nutrient is listed on the front of package as a additional consumer declaration to the traditional nutritional fact panel.,Components
Measurement Precision,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/measurementPrecisionCode,Code indicating whether the specified nutrient content is exact or approximate.,Components
Nutrient Name On Package,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientNameOnPackage,The name of the nutrient as it is listed on the fact panel on the package. Only used when the Nutrient Name on Package is different than the Nutrient Code (nutrientTypeCode). Frequently used for supplements.,Components
Nutrient Source,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientSource,Information about the source ingredient from which the nutrient value is derived.,Components
Nutrient Type Code,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientTypeCode,Code from the list of the INFOODS food component tag names (http://www.fao.org/infoods/infoods/standards-guidelines/food-component-identifiers-tagnames/en/) identifying nutrients contained in the product.,Components
Nutrient Value Derivation Code,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/nutrientValueDerivationCode,"The derivation of the values, percent of intake and quantity contained, provided in the nutrient class.",Components
Nutrient Quantity Contained,componentInformation/nutritionalInformation/nutrientInformation/nutrientDetail/quantityContained,Measurement Value indicating the amount of nutrient contained in the product. Is expressed relative to the serving size.,Components
Preparation State,componentInformation/nutritionalInformation/nutrientInformation/preparationStateCode,Code specifying whether the nutrient information applies to the prepared on unprepared state of the product.,Components
Serving Size,componentInformation/nutritionalInformation/nutrientInformation/servingSize,"Measurement value specifying the serving size or portion. In some markets, due to regulation, this information is used as the basis amount that a nutrient is measured against. Example: Per 30 grams. 1/2 cup, etc. Please refer to the target markets implementation guideline on how to populate this attribute.",Components
Serving Size Description,componentInformation/nutritionalInformation/nutrientInformation/servingSizeDescription,A free text field specifying the serving size for which the nutrient information has been stated,Components
Servings Per Package Description,componentInformation/nutritionalInformation/nutrientInformation/servingsPerPackageDescription,The total number of servings based upon the serving size contained in the package for example about 24.,Components
Nutrient Relevant Data Provided?,componentInformation/nutritionalInformation/nutrientRelevantDataProvided,Nutrient Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  All values not populated are not relevant or not required to be populated on the product label by local regulations.,Components
Nutrient Relevant Data Provided DateTime,componentInformation/nutritionalInformation/nutrientRelevantDataProvidedDateTime,The date upon which the isNutrientRelevantDataProvided indicator was last updated.,Components
Claim Description,componentInformation/productInformationDetail/claimDescription,"Free text field for any additional type of product claims like nutritional, health claims,etc.",Components
Claim Element Code,componentInformation/productInformationDetail/claimDetail/claimElementCode,"The type of nutrient, ingredient, vitamins and minerals that the health claim is in reference to for example fat, copper, milk, paraben, BHA.",Components
Claim Marked on Package,componentInformation/productInformationDetail/claimDetail/claimMarkedOnPackage,Is the claim specified by Nutritional Claim Type Code in combination with Nutritional Claim Nutrient Element Code labelled on the product package. ,Components
Claim Type Code,componentInformation/productInformationDetail/claimDetail/claimTypeCode,A code depicting the degree to which a trade item contains a specific nutrient or ingredient in relation to a health claim for example FREE_FROM.,Components
Is Claim Regulated,componentInformation/productInformationDetail/claimDetail/isClaimRegulated,The indicator that specifies whether the claim for the product is regulated for a target market.,Components
Accidental Release Measures Description,componentInformation/safetyDataSheetInformation/accidentalReleaseMeasuresDescription,A description of the method of clean-up or pick up for example Chemtrack number in relation to any hazardous materials regulated by ADR,Components
Additional SDS Information,componentInformation/safetyDataSheetInformation/additionalSDSInformation,"A description field for other information regarding the MSDS that is not in the other sections. For example, additional contact information, or sustainability statement, other information.",Components
Chemical Ingredient Concentration,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentration,The percentage of a chemical ingredient in relation to the total composition of the product.,Components
Chemical Ingredient Concentration Basis,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationBasis,The basis amount used to express the chemical ingredient concentration.,Components
Chemical Ingredient Concentration Lower Value,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationLowerValue,The lower value of a range of a chemical ingredient concentration.,Components
Chemical Ingredient Concentration Measurement Precision,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationMeasurementPrecision,The measurement precision used to determine the concentration of a chemical ingredient for example EXACT.,Components
Chemical Ingredient Concentration Upper Value,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationUpperValue,The upper value of a range of a chemical ingredient concentration.,Components
Chemical Ingredient Identification,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientIdentification,A unique number to identify a chemical used to cross reference regulated lists of chemicals for example CAS number.,Components
Chemical Ingredient Name,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientName,The common name of the chemical ingredient.,Components
Lethal Concentration50,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50,"Median Lethal Concentration is a statistically derived concentration of a substance that can be expected to cause death in 50% of test animals. It is usually expressed as the weight of substance per weight or volume of water, air or feed.",Components
Lethal Concentration50 Basis,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50Basis,The basic measurement for the measurement of Median Lethal Concentration for example 1 LT in the ratio 10 MG/ 1 LT.,Components
Lethal Concentration 50 Measurement Precision,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50MeasurementPrecision,The measurement precision used to determine the lethal concentration 50 for example EXACT.,Components
Lethal Dose50,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50,"Lethal Dose 50 is a statistically derived single dose that can be expected to cause death in 50% of the test animals when administered by the route indicated (oral, dermal, inhalation). It is expressed as a weight of substance per unit weight of animal.",Components
Lethal Dose50 Basis,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50Basis,The basic measurement for the measurement of a Lethal Dose for example 1 LT in the ratio 10 MG/ 1 LT.,Components
Lethal Dose 50 Measurement Precision,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50MeasurementPrecision,The measurement precision used to determine the determine the lethal dose for example EXACT.,Components
Route of Exposure Code,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/routeOfExposureCode,"The means by which living organisms can come into contact with a hazardous substance for example dermal, inhalation, ingestion.",Components
Test Species Code,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/testSpeciesCode,A description of any species of animal that was used for determining LC and LD other than the norm.,Components
Test Species Description,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/testSpeciesDescription,The species of animal that was used for determining LC and LD 50 expressed as a code for example RAT.,Components
Lower Explosive Limit,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lowerExplosiveLimit,The low end value expressed as a percent by volume that the mixture is still flammable.,Components
REACH Chemical Registration Number ,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/rEACHChemicalRegistrationNumber,A unique registration number for a chemical for a company. This is issued by the European Chemical Agency (ECHA) and is unique per chemical.,Components
Upper Explosive Limit,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredient/upperExplosiveLimit,The high end value expressed as a percent by volume that the product will still explode.,Components
Chemical Ingredient Organization,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredientOrganisation,An organization managing a chemical ingredient identification scheme.,Components
Chemical Ingredient Scheme,componentInformation/safetyDataSheetInformation/chemicalInformation/chemicalIngredientScheme,A managed list of chemical ingredient identifications for example CAS.,Components
Conditions to Avoid Description,componentInformation/safetyDataSheetInformation/conditionsToAvoid,"Conditions, environments, or other chemicals that when mixed with a product can cause an adverse reaction. For example exposing acids to bases.",Components
Ecological Information Description,componentInformation/safetyDataSheetInformation/ecologicalInformationDescription,Any information required on the SDS/MSDS in relationship to any effect of the chemical on the environment. ,Components
Extinguishing Media Description,componentInformation/safetyDataSheetInformation/extinguishingMediaDescription,"A description of any substance that can be used to extinguish a fire, carbon dioxide, water etc in relation to any hazardous materials",Components
Firefighter Protective Equipment Description,componentInformation/safetyDataSheetInformation/fireFighterProtectiveEquipmentDescription,"A description of any equipment recommended to be used by fire fighters for protection for example scuba gear, bunker gear, protective equipment in relation to any hazardous materials",Components
First-Aid Procedures Description,componentInformation/safetyDataSheetInformation/firstAidProceduresDescription,A description of any first aid procedures necessary in case of exposure. This is used in compliance with ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road).,Components
Flammable Properties Description,componentInformation/safetyDataSheetInformation/flammablePropertiesDescription,"A description of any properties related to the ability of a substance to catch fire for example auto-ignition temperature, flashpoint, LEL, UEL in relation to any hazardous materials",Components
GHS Signalwords Code,componentInformation/safetyDataSheetInformation/gHSDetail/gHSSignalWordsCode,Words such as DANGER or WARNING used to emphasize hazards and indicate the relative level of severity of the hazard.  For GHS hazard class ans category. Some lower level hazard categories do not use signal words.,Components
GHS Symbol Description Code,componentInformation/safetyDataSheetInformation/gHSDetail/gHSSymbolDescriptionCode,"A code depicting the symbols which convey health, physical and environmental hazard information, assigned to a hazard class and category for example GHS. Pictograms include the harmonized hazard symbols plus other graphic elements, such as borders, background patterns or colours that are intended to convey specific information. Examples of all the pictograms and downloadable files for GHS can be accessed on the UN website for the GHS.",Components
Hazard Statement Code,componentInformation/safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsCode,Standard phrases assigned to a hazard class and category that describe the nature of the hazard for example H200.,Components
Hazard Statement Description,componentInformation/safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsDescription,A description of standard phrases assigned to a hazard class and category that describe the nature of the hazard. ,Components
Precautionary Statement Code,componentInformation/safetyDataSheetInformation/gHSDetail/precautionaryStatement/precautionaryStatementsCode,"Measures listed on a hazardous label to minimize or prevent adverse effects. For GHS, the precautionary statements have been linked to each GHS hazard statement and type of hazard. Precautionary statements for GHS cover prevention, response in cases of accidental spillage or exposure, storage, and disposal. ",Components
Precautionary Statement Description,componentInformation/safetyDataSheetInformation/gHSDetail/precautionaryStatement/precautionaryStatementsDescription,A description of the measures listed on a hazardous label to minimize or prevent adverse effects.,Components
Hazardous Material Handling Procedure,componentInformation/safetyDataSheetInformation/hazardousMaterialsHandlingProcedures,Hazardous materials handling procedures are a description of how the product should be handled in relation to potential hazardous materials,Components
Hazardous Waste Agency,componentInformation/safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteAgency,The Agency for the Classification of Hazardous Waste. The specific hazardous waste code for the federal or state regulation that applies to the product for example US EPA.,Components
Hazardous Waste Code,componentInformation/safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteCode,A classification of hazardous waste managed at the federal or state level for example EPA Hazardous Waste Code of D001 (Ignitable waste).,Components
Hazardous Waste Description,componentInformation/safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteDescription,A description of the classification of hazardous waste managed at the federal or state level for example EPA Hazardous Waste Code of D001 ( Ignitable waste). ,Components
Is Acutely Hazardous Waste,componentInformation/safetyDataSheetInformation/hazardousWasteInformation/isAcutelyHazardousWaste,"An indicator whether or not the trade Item contains waste that would cause death, disabling personal injury, or serious illness. This wastes are more hazardous than ordinary hazardous wastes.",Components
Is Universal Waste,componentInformation/safetyDataSheetInformation/hazardousWasteInformation/isUniversalWaste,"Indicates if a product can be considered universal waste. Universal waste is defined as wastes that do not meet the regulatory definition of hazardous waste but are managed under special, tailored regulations. ",Components
Non Hazardous Waste Description,componentInformation/safetyDataSheetInformation/hazardousWasteInformation/nonhazardousWasteDescription,A classification of non-hazardous waste managed at the federal or state level for example a code for disposal of latex paint.,Components
Is Product Classified As Non Hazardous,componentInformation/safetyDataSheetInformation/isProductClassifiedAsNonHazardous,"Indication that the product is classified, on its own or when aggregated, as non-hazardous waste according to EPA’s Resource Conservation and Control ACT (RCRA) when disposed. Under RCRA (40 CFR 261.31-33) hazardous wastes are those determined by EPA to be hazardous including those classified as hazardous and if products exhibit one of the four characteristics (defined in 40 CFR Part 261.21-24). Hazardous wastes are divided into listed wastes, characteristic wastes, universal wastes, and mixed wastes. Specific procedures determine how waste is identified, classified, listed, and delisted. RCRA mandates strict controls over disposal of hazardous waste. These listed wastes are divided into three categories: K-list, F-list, and the P and U-Lists. Characteristic wastes include wastes that exhibit ignitability, corrosivity, reactivity or toxicity. Universal wastes include batteries, pesticides, mercury-containing products and lamps. Examples include computer equipment, lead-containing products, and applicable cleaning chemicals.",Components
Is Regulated For Transportation?,componentInformation/safetyDataSheetInformation/isRegulatedForTransportation,An indicator whether the Trade Item is regulated for shipment by any agency.,Components
Note to Physician,componentInformation/safetyDataSheetInformation/noteToPhysician,A description of any measures a physician should take to treat a patient.    ,Components
Autoignition Temperature,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/autoIgnitionTemperature,The lowest temperature at which it will spontaneously ignite in a normal atmosphere without an external source of ignition.,Components
Boiling Point,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/boilingPoint,The temperature of a liquid at which its vapour pressure is equal to or very slightly greater than the atmospheric pressure of the environment.  For water at sea level it is 100C  or 212F. ,Components
Flash Point Descriptor,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointDescriptor,A descriptor that informs which action the trade item must be used under to achieve that flash point for example when dispensed.,Components
Flashpoint Temperature,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperature,The minimum temperature at which a liquid gives off a vapor within a vessel in sufficient concentration to form an ignitable mixture with air near the surface of a liquid.,Components
Flash Point Temperature Lower Value,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureLowerValue,A lower value of a possible range of flash point temperatures.,Components
Flash Point Temperature Measurement Precision,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureMeasurementPrecision,The measurement precision used for calculating a flash point temperature for example EXACT.,Components
Flash Point Temperature Upper Value,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureUpperValue,A upper value of a possible range of flash point temperatures.,Components
Flashpoint Test Method Code,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTestMethodCode,The test method used to determine the flash point temperature for example closed cup.,Components
Freezing Melting Point,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/freezingMeltingPoint,The temperature at which its crystals are in equilibrium with the liquid phase at atmospheric pressure.,Components
Lower Explosive Limit,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/lowerExplosiveLimit,The low end value expressed as a percent by volume that the mixture is still flammable. ,Components
Exact PH,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/exactPH,The exact PH amount for a chemical ingredient (not a range). ,Components
Maximum PH,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/maximumPH,The maximum range for PH.,Components
Minimum PH,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/minimumPH,The minimum range value for PH.,Components
Physical Form Description,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/physicalFormDescription,"A description of the form of the product for example gas, liquid, powder. Colorless, Fragrant, liquid in relation to any relation to any hazardous materials. ",Components
Physical State,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/physicalStateCode,Any physical state a chemical ingredient may be in for example LIQUID. ,Components
Specific Gravity,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravity,Specific Gravity is defined as the ratio of the density of a substance to the density of a reference substance expressed as a float. It is an abstract number that is unrelated to any units. ,Components
Specific Gravity Lower Value,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityLowerValue,The lower value in a range of specific gravity.,Components
Specific Gravity Measurement Precision,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityMeasurementPrecision,The measurement precision used for the specific gravity for example EXACT.,Components
Specific Gravity Reference Material Code,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityReferenceMaterialCode,The reference material used within the ratio for specific gravity for example water or air. ,Components
Specific Gravity Upper Value,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityUpperValue,The upper value in a range of specific gravity.,Components
Upper Explosive Limit,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/upperExplosiveLimit,The high end value expressed as a percent by volume that the product will still explode. ,Components
Water Solubility,componentInformation/safetyDataSheetInformation/physicalChemicalPropertyInformation/waterSolubilityTypeCode,Water solubility is defined as a code indicating solubility in respect to water. Solubility is the ability of a given substance to dissolve in solvent. ,Components
Protective Equipment,componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipment,The manufacturer recommended protective equipment,Components
Protective Equipment Additional Description,componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentAdditionalDescription,Additional information regarding when protective equipment is recommended or required.,Components
Protective Equipment Body Area Code,componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentBodyAreaCode,A code determining the part of the body the protective equipment is meant to protect for example EYE,Components
Protective Equipment Status Code,componentInformation/safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentStatusCode,A code determining whether the protective equipment is recommended or required,Components
Is Substance of Very High Concern,componentInformation/safetyDataSheetInformation/rEACHInformation/isSubstanceOfVeryHighConcern,An indicator that a trade item contains substances of very high concern according to REACH as defined in as defined in Article 57 of Regulation No 1907/2006. ,Components
Is Trade Item REACH Relevant,componentInformation/safetyDataSheetInformation/rEACHInformation/isTradeItemREACHRelevant,An indicator that the trade item may have ingredients that subject it to REACH.,Components
REACH Chemical Product Use Desciptor Code,componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHChemicalProductUseDescriptorCodeType,The types of preparation the substance is contained in end-use.,Components
REACH Environment Release Use Category Code,componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHEnvironmentReleaseUseCategoryCode,The broad conditions of use from the environmental perspective.,Components
REACH Process Use Descriptor Code,componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHProcessUseDescriptorCode,The technical process or application in which the substance is used from an occupational perspective. An example of a REACH Process Use Descriptor is PROC 7 Industrial Spraying. ,Components
REACH Sector Use Descriptor Code,componentInformation/safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHSectorUseDescriptorCode,"The sector of the economy the substance is used. Use includes manufacture in the chemical industry, mixing of substances at formulator's level as well as industrial, professional and consumer end-uses. An example of a REACH sector use Descriptor is SU4 Manufacture of food products.",Components
Alternate Text,componentInformation/safetyDataSheetInformation/referencedFileInformation/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Components
Content Description,componentInformation/safetyDataSheetInformation/referencedFileInformation/contentDescription,Free form description of the content of the file.,Components
File Creation Program,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileCreationProgram,The program used in the creation of the digital asset.,Components
File Effective End Date,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileEffectiveEndDateTime,The date this image ceases to be the current image for the trade item.,Components
File Effective Start Date,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileEffectiveStartDateTime,The date this image is the current image for this trade item.,Components
File Format Description,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileFormatDescription,Free form description of the format of the file.,Components
File Format Name,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileFormatName,"The name of the file format. Examples: PDF, JPEG,  BMP etc.",Components
File Language,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileLanguageCode,The specified language to which the digital asset is targeted.,Components
File Name,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileName,The name of the file that contains the external information.,Components
File Optimal Viewer Name,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileOptimalViewerName,The software to which this file was targeted.,Components
File Origin Country,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileOriginCountryCode,The country where the digital asset originated.,Components
File Sequence Number,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Components
File Version,componentInformation/safetyDataSheetInformation/referencedFileInformation/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Components
Image Facing,componentInformation/safetyDataSheetInformation/referencedFileInformation/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Components
Image Orientation Type Code,componentInformation/safetyDataSheetInformation/referencedFileInformation/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Components
Image State Code,componentInformation/safetyDataSheetInformation/referencedFileInformation/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Components
Is Image Rendered,componentInformation/safetyDataSheetInformation/referencedFileInformation/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Components
Is Primary File,componentInformation/safetyDataSheetInformation/referencedFileInformation/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Components
ReferencedFile Type Code,componentInformation/safetyDataSheetInformation/referencedFileInformation/referencedFileTypeCode,The file type that is being referenced.,Components
Title Text,componentInformation/safetyDataSheetInformation/referencedFileInformation/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Components
Uniform Resource Identifier,componentInformation/safetyDataSheetInformation/referencedFileInformation/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is optional.",Components
SDS Sheet Effective Date,componentInformation/safetyDataSheetInformation/sDSSheetEffectiveDateTime,"Date/time from which the content of the safety data sheet is valid. When issuing the data sheet for the first time, this date indicates the creation date. In case of updates, this date indicates the date of the last revision.",Components
SDS Sheet Number,componentInformation/safetyDataSheetInformation/sDSSheetNumber,Manufacturer's identification number for the safety data sheet for a trade item.,Components
SDS Sheet Version,componentInformation/safetyDataSheetInformation/sDSSheetVersion,The safety data sheet version that uniquely identifies the release version of the safety data sheet. This version is needed to make data sheets versionable and revisions comprehensible.,Components
SDS Standard Code,componentInformation/safetyDataSheetInformation/sDSStandardCode,A code describing the standard used to create the MSDS that is pointed to in the SDS URL.,Components
SDS Standard Version,componentInformation/safetyDataSheetInformation/sDSStandardVersion,The version of the standard used to create the MSDS that is pointed to in the SDS URL.,Components
Storage Compatibility Agency,componentInformation/safetyDataSheetInformation/storageCompatibilityAgency,The agency which maintains a list of storage compatibilities.,Components
Storage Compatibility Code,componentInformation/safetyDataSheetInformation/storageCompatibilityCode,A storage compatibilities expressed as a code.,Components
Storage Compatibility Description,componentInformation/safetyDataSheetInformation/storageCompatibilityDescription,The types of materials that this product cannot be stored with.,Components
Storage Requirements Description,componentInformation/safetyDataSheetInformation/storageRequirementsDescription,"A description how to safely store the Trade Item for example cool,dry, not near flame, adequate ventilation. ",Components
Toxicological Information Description,componentInformation/safetyDataSheetInformation/toxicologicalInformationDescription,A general description of any information on any toxic properties as included on the MSDS for example precautionary text on a label. This text should describe the key issue with the product in regards to toxicity. ,Components
Volatile Organic Compound,componentInformation/safetyDataSheetInformation/volatileOrganicCompound,Volatile Organic Compound is the amount of an item that is a volatile organic compound expressed as a measurement. Volatile is where the compound can be evaporate or vaporize into the atmosphere. ,Components
Volatile Organic Compound Basis,componentInformation/safetyDataSheetInformation/volatileOrganicCompoundBasis,The basis measurement for a Volatile Organic Compound when expressed as an amount for example 1 L in the case of 5ML per 1 LT.,Components
Volatile Organic Compound Percentage,componentInformation/safetyDataSheetInformation/volatileOrganicCompoundPercent,The percentage of an item that is a volatile organic compound. Volatile is where the compound can evaporate or vaporize into the atmosphere.,Components
Volatile Organic Compound Percent Measurement Precision,componentInformation/safetyDataSheetInformation/volatileOrganicCompoundPercentMeasurementPrecision,The measurement precision used to determine the percentage of an item that is a volatile organic compound.,Components
Does Trade Item have Auto Reader Tracker?,componentInformation/tradeItemLifeSpan/doesTradeItemHaveAutoReaderTracker,Indication that the trade item has a device that identifies that the product has a limited number of reuses and is self tracked.,Components
Item Period Safe to Use After Opening,componentInformation/tradeItemLifeSpan/itemPeriodSafeToUseAfterOpening,"The period-after-opening (PAO) identifies the useful lifetime of a cosmetic product after its package has been opened for the first time, e.g. ""50 months"" or ""4 years"".",Components
Min Product Lifespan from Arrival (Days),componentInformation/tradeItemLifeSpan/minimumTradeItemLifespanFromTimeOfArrival,"The period of days, guaranteed by the manufacturer, before the expiration date of the trade item, based on arrival to a mutually agreed to point in the buyer’s distribution system. Can be repeatable upon use of GLN.",Components
Min Product Lifespan from Production (Days),componentInformation/tradeItemLifeSpan/minimumTradeItemLifespanFromTimeOfProduction,"The period of day, guaranteed by the manufacturer, before the expiration date of the product, based on the production.",Components
Opened Trade Item Lifespan (Days),componentInformation/tradeItemLifeSpan/openedTradeItemLifespan,The number of days the trade item that had been opened can remain on the shelf and must then be removed.,Components
Supplier Specified Minimum Consumer Storage Days,componentInformation/tradeItemLifeSpan/supplierSpecifiedMinimumConsumerStorageDays,"Represents the number of days between a product's ""sell by date"" and its ""use by date"".",Components
Acceleration,componentInformation/tradeItemMeasurements/acceleration,The rate of change of velocity. For example: 0 - 60 mph / 4.3 s; 0 - 100 kph / 4.5 s.,Components
Depth,componentInformation/tradeItemMeasurements/depth,"The depth of the unit load, as measured according to the GS1 Package Measurement Rules, including the shipping platform unless it is excluded according to the Pallet Type Code chosen.",Components
Diameter,componentInformation/tradeItemMeasurements/diameter,The measurement of the diameter of the trade item at its largest point.,Components
Dimension Depth,componentInformation/tradeItemMeasurements/displayDimensions/dimensionDepth,The depth dimension of a trade item under certain display scenarios(Display Dimension Types) when they differ from the standard measurements provided under the package Measurement Rules.,Components
Dimension Diameter,componentInformation/tradeItemMeasurements/displayDimensions/dimensionDiameter,The diameter dimension of a trade item under certain display scenarios (Display Dimension Types).,Components
Dimension Height,componentInformation/tradeItemMeasurements/displayDimensions/dimensionHeight,The height dimension of a trade item under certain display scenarios(Display Dimension Types) when they differ from the standard measurements provided under the Package Meaurement Rules.,Components
Dimension Width,componentInformation/tradeItemMeasurements/displayDimensions/dimensionWidth,The width dimension of a trade item under certain display scenarios(Display Dimension Types) when they differ from the standard measurements provided under the Package Meaurement Rules.,Components
Display Dimension Type Code,componentInformation/tradeItemMeasurements/displayDimensions/displayDimensionTypeCode,"Depicts certain display scenarios (e.g. Retail Display, Out of package) used for measurement.",Components
Gross Weight,componentInformation/tradeItemMeasurements/displayDimensions/grossWeight,"Gross Weight includes all packaging materials of the trade item. At pallet level the trade item, Gross Weight includes the weight of the pallet itself.",Components
Drained Weight,componentInformation/tradeItemMeasurements/drainedWeight,The weight of the trade item when drained of its liquid.,Components
Front Face Type Code,componentInformation/tradeItemMeasurements/frontFaceTypeCode,"The code used to indicate the front face of a shelf ready package (SRP) for the in-store shelf. E.g. WIDTH, LENGTH, DEPTH_OR_WIDTH).",Components
Gross Weight,componentInformation/tradeItemMeasurements/grossWeight,"Weight of the trade item that includes all packaging materials of the trade item. For pallet items, the Gross weight includes the weight of the pallet itself. ",Components
Height,componentInformation/tradeItemMeasurements/height,"The height of the unit load, as measured according to the GS1 Package Measurement Rules, including the shipping platform unless it is excluded according to the Pallet Type Code chosen.",Components
Individual Unit Max,componentInformation/tradeItemMeasurements/individualUnitMax,Maximum size of the individual unit inside the lowest level of packaging.,Components
Individual Unit Min,componentInformation/tradeItemMeasurements/individualUnitMin,Minimum size of the individual unit inside the lowest level of packaging.,Components
Net Content,componentInformation/tradeItemMeasurements/netContent,"The amount of the trade item contained by a package, usually as claimed on the label.",Components
Net Content Statement,componentInformation/tradeItemMeasurements/netContentStatement,This statement correspond to the net content descriptions as stated on the packaging,Components
Net Weight,componentInformation/tradeItemMeasurements/netWeight,Used to identify the net weight of the trade item. Net weight excludes any packaging materials. Has to be associated with a valid UoM.,Components
Peg Hole Number,componentInformation/tradeItemMeasurements/pegMeasurements/pegHoleNumber,"Used to indicate the peg hole numbers when more than one hole is present in the product or packaging. Peg holes should be numbered from the upper left corner of the front of the package to the bottom right corner. The peg holes should be identified from left to right, top to bottom with left to right having precedence. The number of peg holes and their measurements must be determined following the orientation of the product. Product orientation is based upon the General EAN.UCC Specification. Required if the trade item is displayed on a peg board. ",Components
Peg Hole Type,componentInformation/tradeItemMeasurements/pegMeasurements/pegHoleTypeCode,The type and shape of the peg hole used for the packaging.,Components
Peg Horizontal,componentInformation/tradeItemMeasurements/pegMeasurements/pegHorizontal,Used to indicate the horizontal distance from the edge of the trade item to the center of the hole into which the peg is inserted when the trade item is displayed on a pegboard.,Components
Peg Vertical,componentInformation/tradeItemMeasurements/pegMeasurements/pegVertical,Used to indicate the vertical distance from the edge of the trade item to the center of the hole into which the peg is inserted when the trade item is displayed on a pegboard. The hole into which the peg is inserted when the trade item is displayed on a pegboard. The measurement is always taken from the top edge of the trade item to the hole.,Components
Shear Strength,componentInformation/tradeItemMeasurements/shearStrength,"The strength of a material or component against the type of yield or structural failure where the material or component fails in shear. A shear load is a force that tends to produce a sliding failure on a material along a plane that is parallel to the direction of the force. When a paper is cut with scissors, the paper fails in shear. An example would be 7.82 KSI.",Components
Tensile Strength,componentInformation/tradeItemMeasurements/tensileStrength,"The maximum stress it withstands before failing is its ultimate tensile strength. Ultimate tensile strength (UTS), often shortened to tensile strength (TS) or ultimate strength, is the maximum stress that a material can withstand while being stretched or pulled before failing or breaking. Example fishing line test, nylon rope.",Components
Trade Item Composition Depth,componentInformation/tradeItemMeasurements/tradeItemCompositionDepth,"The number of child-items that are packaged from front to back in a trade unit. This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf.",Components
Trade Item Composition Width,componentInformation/tradeItemMeasurements/tradeItemCompositionWidth,"The number of child-items that are packaged beside each other in a trade unit (on the side facing the consumer). This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf.",Components
Nesting Direction,componentInformation/tradeItemMeasurements/tradeItemNesting/nestingDirectionCode,Depicts the arrangement of two items that nest together specifically whether they nest against each other or on top of each other.,Components
Nesting Increment,componentInformation/tradeItemMeasurements/tradeItemNesting/nestingIncrement,"Indicates the incremental height of Trade Items nested together. For example, in the case of two garbage cans nested together, this would be the height between the lip of the lower can and the lip on the upper can.",Components
Nesting Type,componentInformation/tradeItemMeasurements/tradeItemNesting/nestingTypeCode,Depicts whether a nested item fits inside or over the other item in a nesting relationship.,Components
Orientation Preference Sequence,componentInformation/tradeItemMeasurements/tradeItemOrientation/orientationPreferenceSequence,Depicts the preferred sequence of orientation used to communicate the manufacturers relative preferences of orientation.,Components
Orientation Type,componentInformation/tradeItemMeasurements/tradeItemOrientation/orientationType,Depicts via code a display orientation for a trade item.,Components
Velocity,componentInformation/tradeItemMeasurements/velocity,The rate at which an object changes its position for example 5 metres per second (5 MTS).,Components
Volume,componentInformation/tradeItemMeasurements/volume,The dimensions of an imaginary cube which can be drawn around the trade item as defined in the formula of H X W X D (The linear dimensions multiplied to get a cubic result).,Components
Width,componentInformation/tradeItemMeasurements/width,"The width of the unit load, as measured according to the GS1 Package Measurement Rules, including the shipping platform unless it is excluded according to the Pallet Type Code chosen.",Components
Contents Description,contentsDescription,Describes the contents of the the components of the trade item when an item is shipped in multiple containers.,Components
Multiple Container Quantity,multipleContainerQuantity,"The quantity of containers when the complete trade item is packed in multiple containers. If all components are packed together into one item this attribute is not used. For example: 3 boxes = 1st box has 1 table, 2 more boxes with 2 chairs each, this attribute would contain the value 3, representing 3 boxes total.",Components
Non Marked Trade Item Components,nonMarkedTradeItemComponents,This attribute indicates a non-saleable part of the trade item. It is used to specify components of a trade item that cannot be sold separately.,Components
No. of pieces in Set,numberOfPiecesInSet,The total number of separately packaged components comprising a single trade item.,Components
Total number of components,totalNumberOfComponents,The total number of components for the trade item.,Components
Casing Tare Weight,casingTareWeight,"The weight measurement of the ""food casing"". A casing for food products is a flexible tubing into which foods are stuffed to provide a skin-tight covering. Used in packaging prepared meats, poultry, cheese, and other food products. ""Tare Weight – food casing"" applies to the ""each"" level. The aggregate of the tare weight can be used for calculating the higher packaging levels. For example a sausage has a net weight of 120 grams; the tare weight – food casing is 5 grams. When in a carton of 12 sausages - add together each sausage's tare weight – food casing for the accumulated total of all the sausages in the carton for total tare weight – food casing by carton 5 grams *12 sausages = 60 grams tare weight – food casing.",Dairy Fish Meat Poultry
Cheese Colouring,cheeseColouring,Indication whether and if yes which colourings were added to the cheese or cheese products.,Dairy Fish Meat Poultry
Cheese Maturation Period Description,cheeseMaturationPeriodDescription,"A descriptive way to specify a date range as some cheeses are matured over a period of time, but not an exact period. For example 3 to 4 weeks, over 1 year etc. The term maturation is also know in other markets as Aged.",Dairy Fish Meat Poultry
Cheese Maturation Container Process Type,cheeseMaturationProcessContainerTypeCode,"The type of container that the process of maturation cheese occurs in. The container directly influences the flavour of the cheese. The term maturation is also know in other markets as Aged. Examples FOIL, MOULD, OTHER, etc. This should be repeatable as this could be a combination of types",Dairy Fish Meat Poultry
Cheese Milk Acquisition Type Code,cheeseMilkAcquisitionTypeCode,Allows you to indicate the type of legal mention on the packaging of the acquisition type of the milk for cheese . Example: Farm.,Dairy Fish Meat Poultry
Cheese Moisture Percentage,cheeseMoisturePercentage,The amount of moisture content in cheese products.,Dairy Fish Meat Poultry
Cheese Ripening Process Code,cheeseRipeningProcessCode,The code indicating the ripening process within the body of the cheese. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.,Dairy Fish Meat Poultry
Cheese Salt Content Percentage,cheeseSaltContentPercentage,The percentage of salt contained in cheese.,Dairy Fish Meat Poultry
Cheese Type Code,cheeseTypeCode,The code identifying a specific type of cheese. Please refer to local regulations. For example: Cheese defined under the EU regulation as Protected Designation of Origin (PDO) or Protected Geographical Indication (PGI). Some cheese are defined by conformity with the General Standard for Cheese (CXS 283-1978) and/or the Standard for Unripened Cheese Including Fresh Cheese (CXS 221-2001). ,Dairy Fish Meat Poultry
Cheese Type Of Salt,cheeseTypeOfSalt,Type of salt used in cheese,Dairy Fish Meat Poultry
Percent of Milk Fat In Dairy,fatInMilkContent,"The percentage of milk fat contained in the milk portion of the dairy product.

Used by the buyer for assortment planning.

Used by the consumer for search and discovery.",Dairy Fish Meat Poultry
Percent of Fat In Cheese,fatPercentageInDryMatter,"The percentage of fat in the dry matter of a cheese product. Dry matter is the content of a product after all fluids are removed.

Used by the buyer for assortment planning.

Used by the consumer for search and discovery.",Dairy Fish Meat Poultry
Fat Percentage In Dry Matter Measurement Precision Code,fatPercentageInDryMatterMeasurementPrecisionCode,"A code qualifying the percentage of fat in dry matter, for example LESS_THAN",Dairy Fish Meat Poultry
Firmness Of Cheese Code,firmnessOfCheeseCode,The code indicating the relative firmness of the cheese based on moisture content. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.,Dairy Fish Meat Poultry
Fish Meat Poultry Type Code,fishMeatPoultryContent/fishMeatPoultryTypeCode,"The fish, meat, or poultry type for this food and beverage item.",Dairy Fish Meat Poultry
Fish Meat Poultry Type Code List Agency,fishMeatPoultryContent/fishMeatPoultryTypeCodeListAgency,"The code list agency responsible for maintaining a fish, meat, poultry type code list. Example: USDA.",Dairy Fish Meat Poultry
Fish Meat Poultry Type Code List Identification,fishMeatPoultryContent/fishMeatPoultryTypeCodeListIdentification,"The identification of a fish, meat, and poultry type code list. Example: USDA Individual Intake Food Group List.",Dairy Fish Meat Poultry
Meat Poultry Cut,fishMeatPoultryContent/meatPoultryCut,The description of a piece of meat that has been cut from an animal carcass. The determination of this is made by the supplier and is subject to target market regulations or trade organization guidelines.,Dairy Fish Meat Poultry
Minimum Amount of Animal Protein,fishMeatPoultryContent/minimumAmountOfAnimalProtein,Indicate the minimum amount of animal meat (or poultry) protein contained in the product. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.,Dairy Fish Meat Poultry
Minimum Fish Meat Poultry Content,fishMeatPoultryContent/minimumFishMeatPoultryContent,"The minimum amount of fish, meat or poultry contained in a food and beverage trade item expressed as a measurement.",Dairy Fish Meat Poultry
Catch Area Code,fishReportingInformation/fishCatchInformation/catchAreaCode,"Valid value for the fishing area in which the fish/seafood or the fish/seafood in the product was caught or farmed.

Used by the buyer to inform the consumer of the fishing area. Used by the buyer for applicable government reporting. Used by the buyer to make assortment planning decisions.",Dairy Fish Meat Poultry
Fishing Gear Code,fishReportingInformation/fishCatchInformation/catchMethod,"Valid value for what type of fishing gear was used to catch fish and seafood.

Used by the buyer to communicate to the consumer the gear used to catch fish and seafood (in EU legally required). Used for reporting to authorities.",Dairy Fish Meat Poultry
Catch Date Time,fishReportingInformation/fishCatchInformation/fishCatchDateInformation/catchDateTime,The date of the catch within the EDI and/or Information at the label distributed with the product for information of any single lot of fresh fish and seafood product. Format (YYYYMMDD) as a specification with time stamp is not required in the current EU Regulation. This required attribute will help the global retail industry to fulfill the EU requirements for a common fisheries policy. The data is required by the supply chain participant from source to end consumer.,Dairy Fish Meat Poultry
Date Of Catch Process Type Code,fishReportingInformation/fishCatchInformation/fishCatchDateInformation/dateOfCatchProcessTypeCode,"The process of how the fish is dated, for example REAL_TIME as fish are caught they are dated and time stamped like tuna, ONE_TIME_CATCH on a date for fish farming, or PERIODIC_CATCH meaning the catch date reflective of seasonal catch like lobster trapping.",Dairy Fish Meat Poultry
Fish Production Method Code,fishReportingInformation/fishCatchInformation/productionMethodForFishAndSeafoodCode,"Valid value for how the fish and seafood were grown and harvested or caught.

Used by the buyer to communicate to the consumer the production method of fish and seafood (in EU legally required).

Used for reporting to authorities.",Dairy Fish Meat Poultry
Fish Storage State Code,fishReportingInformation/fishCatchInformation/storageStateCode,"Valid value for whether the fish was previously frozen or not.

Used by the buyer and the consumer to know whether fish can be re-frozen after purchase. Used in conjunction with Catch Area Code, Catch Method Code, Production Method for Fish and Seafood Code.",Dairy Fish Meat Poultry
Species For Fishery Statistics Purposes Code,fishReportingInformation/speciesForFisheryStatisticsPurposesCode,The FAO 3 Alpha code of the species of fish for fish and seafood.,Dairy Fish Meat Poultry
Fish Scientific Name,fishReportingInformation/speciesForFisheryStatisticsPurposesName,"The scientific name of fish and seafood products.

Used by the buyer to communicate to the consumer the scientific name of the fish and seafood (in EU legally required). Used for reporting to authorities.",Dairy Fish Meat Poultry
Is Rind Edible?,isRindEdible,An indicator whether or not the cheese rind is edible. This can result in the rind no longer being edible.,Dairy Fish Meat Poultry
Milk Products,milkProducts,Characterisation of products on milk basis.,Dairy Fish Meat Poultry
Rennet Type Code,rennetTypeCode,The type of rennet used for coagulation.,Dairy Fish Meat Poultry
Ripening Time Period,ripeningTimePeriod,The period of time for ripening the cheese.,Dairy Fish Meat Poultry
Salt Moisture Content Code,saltMoistureContentCode,The code indicating the salt and moisture content of the product by using the appropriate expression. The determination of this is made by the supplier and may be subject to target market regulations or trade organization guidelines.,Dairy Fish Meat Poultry
Surface of Cheese at End of Ripening,surfaceOfCheeseAtEndOfRipeningCode,The representation of whether or not a cheese contains a rind at the end of the maturing process. A Rind is the outside shell of cheese that forms during the cheese making process.,Dairy Fish Meat Poultry
Brand Name,brandName,"The name provided by the brand owner intended to be recognized by the consumer as represented on the product.

Used to indicate to the consumer the primary brand of the product. Use 'UNBRANDED' for items without a brand. In case of combination packages containing products from more than one brand owner (e.g. a display or gift pack) enter the value ‘MIXED’.",Global
Item ID,gtin,"Uniquely identify your Item.

Using GS1 Standards? This is the Item's GTIN, UPC or EAN in a 14-digit format as your Item ID.

Item Management Pro Tip:  Simply type the first 13-digits into the Item ID field, then click the calculator icon. This will calculate and add your check digit for you without skipping a beat.
For items not using GS1 Standards we recommend using the supplier-assigned Model/Catalog number or the most common Item ID possible.",DAM | Ecomm Header
Sequence Number,marketingMessage/sequenceNumber,"Use Sequence Number to order your Marketing Messages. 

It's not common to have more than one Marketing Message. In fact, Marketing Message's additional fields were intended to accommodate those that exceeded the field's character maximum. ",Marketing
Product Marketing Message,marketingMessage/tradeItemMarketingMessage,"Generate consumer demand and influence buying decisions with a solid Marketing Message!

Describe you Item in 150+ words including your Brand Name, Product Name, Features & Benefits, and Keywords (commonly searched words).

Put your best foot forward by being specific and informative, clear and conversational and by using sentence case.",Marketing
Product Description,productDescription,"An understandable and useable description of a product using a combination of key elements such as Brand Name, Sub-Brand (if applicable), Functional Name, Variant, and Net Content. The description should be unique and meaningful to manage and describe the product. Examples: • Brand Base Invisible Solid Deodorant AP Stick Spring Breeze 3.4oz  • Brand Laundry Detergent Liquid Compact Regular Instant Stain Unscented 100 mL • Brand Hair Color Liquid Light to Medium Blonde 32 fl oz.

Allows for the representation of the same value in different languages but not for multiple values in a single language.

Used by the seller to describe the product to the buyer and the consumer. Could be modified by the buyer to meet business and system requirements, such as limitations for length of description. 

The description should be unique in order that buyers and consumers can properly distinguish between similar but distinct trade items. While there are legitimate circumstances under which more than one GTIN with the same description will coexist in the supply chain (e.g. dimensional or gross weight change greater than 20% as the old container is phased out), any duplication of the trade item description shall be carefully evaluated by the seller to ensure that it is materially the same trade item to the buyer and the consumer as the previous one.",Descriptions
Target Market,targetMarket,Use Target Market to indicate where your item is available for sale.,Indicators
Features and Benefits,tradeItemFeatureBenefit/featureBenefit,"Feature Benefits are often used to populate those key feature bullet points found on a website. 
Provide 3-10 instances of specific item details while listing (sequencing) by level of importance. Be sure to be informative and to use sentence case.

Item Management Pro Tip: To add more fields in the language, click the + in the grey Trade Item Feature Benefit label/header bar.",Marketing
Sequence Number,tradeItemFeatureBenefit/sequenceNumber,Use Sequence Number to order your Feature Benefits by level of importance. ,Marketing
Canceled Date,cancelDate,"Communicates cancellation of the launch of a trade item that was never and will never be manufactured, but may have been presented to buyers. Allows the reuse of the GTIN 12 months after cancellation.",Dates
Consumer Sell Date/Time,consumerAvailabilityDateTime,"The date/time when the product can first be sold to or ordered by the consumer.

Used by the seller to communicate to the buyer when a product can first be sold to or ordered by the consumer. If there is not a Consumer Restricted Delivery Date/Time, this is also the date when the consumer can take physical possession of the product.",Dates
Consumer End Availability Date,consumerEndAvailabilityDateTime,"Last date, on which the item may be sold to consumers.",Dates
Consumer Restricted Delivery Date/Time,consumerFirstDeliveryDate,"The date/time when the consumer can first take physical possession of the product when there is a restriction imposed by the seller.

Used by the seller to communicate to the buyer the date/time when the consumer can physically take possession of the product. Online: the buyer ships the product to the consumer and the consumer would expect to receive the product on this date or after. Physical: the date the consumer could visit a physical site and take possession of the product.",Dates
Consumer Product Variant End Effective Date Time,consumerProductVariantEndEffectiveDateTime,The end effective date and time for Consumer Product Variants which the supplier determines.,Dates
Discontinued Date,discontinueDate,"AFTER December 2018, a GTIN allocated to a trade item SHALL NOT be reallocated to another trade item. This applies to ALL trade items, regardless of sector. The only exceptions include: If a GTIN has been assigned to an item, which was then never actually produced, the GTIN may be deleted from any catalogue immediately without first being marked as discontinued. In this exceptional case, the GTIN may be re-used 12 months after deletion from the seller's catalogue. Trade items that have been withdrawn from the market and are reintroduced may use the original GTIN if they are reintroduced without any modifications or changes that require a new GTIN as specified by the GTIN Management Standard.",Dates
Product Information Effective Date/Time,effectiveDate,"The date/time when the product information becomes effective.

Used by the data recipient to determine the date/time when the product information should be applied in their system.",Dates
End Availability Date/Time,endAvailabilityDate,"The date/time when the product is no longer available for order from the seller. End Availability Date/Time may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used by the seller to communicate to the buyer when a product is no longer available for order, including seasonal trade items. Enables the buyer to manage item life cycle processes.",Dates
End Date of Max Buying Qty,endDateMaximumBuyingQuantity,The end date for when the maximum buying quantity is no longer available to the trading partner.,Dates
End Date of Min Buying Qty,endDateMinimumBuyingQuantity,The end date for when the minimum buying quantity is no longer available to the trading partner.,Dates
End Date of Exclusivity,endDateTimeOfExclusivity,The date and time at which a product is no longer exclusive to that trading partner.,Dates
Expiry Date Format,expiryDateFormat,"Indicates the derivation of the expiry date used on the product. Examples: NU - Numerical, JU - Julian.",Dates
Final Batch Expiry Date,finalBatchExpiryDate,"This is a Date field to identify, for Discontinued Products, the last expiry date for the final run of production. Supply at Level: All Applicable ",Dates
First Delivery Date,firstDeliveryDateTime,The earliest date at which the supplier can deliver the product to the trading partner.,Dates
First Order Date/Time,firstOrderDate,"The earliest date/time an order will be processed for the product. 

Used by the seller to communicate to the buyer when orders for a product will first be processed.",Dates
First Permitted Sales Date,firstPermittedSalesDate,First Permitted Sales Date(DD-MON-YYYY),Dates
First Returnable Date Time,firstReturnableDateTime,The first date on or after which non-sold trade items can be returned. This information provides the retailer with any conditions required by the information provider as to the date on or after which non-sold trade items may be returned in order to receive credit from the appropriate party.,Dates
First Ship Date/Time,firstShipDate,"The date/time the product is first available to ship from the seller or the service is available. Link to First Ship Date/Time.

Used by the seller to communicate to the buyer when the product is first available to ship or the service is available to begin.",Dates
Last Modified Date,lastModifiedDate,"A system generated value identifying the date and time a record was last updated.  This field allows the data pool to control the trade item data version, and allows the information user to determine if trade item data should be downloaded.  Date format CCYY-MM-DDTHH:MM:SS.",Dates
Last Order Date,lastOrderDate,Indicates the latest date that an order can be placed for the trade item.,Dates
Last Permitted Sales Date,lastPermittedSalesDate,"Last date, on which the item may be sold to consumers.",Dates
Last Returnable Date Time,lastReturnableDateTime,The last date AND time when a non sold trade item must be received by the manufacturer to receive credit.,Dates
Last Ship Date,lastShipDate,Indicates the latest date that the trade item can be shipped. This is independent of any specific ship-from location.,Dates
Production Variant Cancelled DateTime,productionVariantCancelledDateTime,The date on which the cancellation of the product variant launch of a trade item what was never and will never be manufactured is done.,Dates
Production Variant  Discontinued DateTime,productionVariantDiscontinuedDateTime,"Date on which the product variant of the trade item, which has been manufactured, is no longer being manufactured.",Dates
Production Variant Effective Date,productionVariantEffectiveDate,The start date of a production variant. The variant applies to products having a date mark ( a best befor date or expiration date) on the package that comes on or after the effective date.,Dates
Public Release Date,publicReleaseDate,"The date on which all neutral item data associated with the trade item becomes publicly available, to all registered users of GS1net, on the GS1net Registry.",Dates
Reinstatement Date,reinstatementDate,The date when a previously discontinued item is reinstated and again available for ordering.,Dates
First Ship Date/Time (Start Availability Date),startAvailabilityDate,"The date/time the product is first available to ship from the seller or the service is available. Used by the seller to communicate to the buyer when the product is first available to ship or the service is available to begin.

Used by the seller to communicate to the buyer when the product is first available to ship or the service is available to begin.",Dates
Start Date of Max Buying Qty,startDateMaximumBuyingQuantity,The start date for when the maximum buying quantity is available to the trading partner.,Dates
Start Date of Min Buying Qty,startDateMinimumBuyingQuantity,The start date for when the minimum buying quantity is available to the trading partner.,Dates
Additional Description,additionalDescription,"Additional variants necessary to communicate to the industry to help define the product. Multiple variants can be established for each GTIN. This is a repeatable field, e.g. Style, Color, and Fragrance. ",Descriptions
bFR Additional Identification Code,bFRAdditionalIdentificationCode,European product Id for detergents with regard to the EU regulation for detergents.,Descriptions
Body Parts,bodyParts,The body part/s for which the item is intended.,Descriptions
Broker Invoice Indicator,brokerInvoiceIndicator,Indication required when Brokers are populating one Vendor catalogue with products from several manufacturers and need to identify a different invoicing relationship than a manufacturer.,Descriptions
CDS Material Type,cDSMaterialType,This is used to describe the material of the items that are part of the container deposit scheme (CDS).,Descriptions
Collection,collection,Enter the  name of collection that an item belongs to.  Example: Rivington,Descriptions
Color Code Maintenance Agency,color/agency,Code specifying a colour code list. Allowed code values are specified in GS1 Code List ColourCodeListCode.,Descriptions
Color Code,color/code,"Valid value, part of a color system, that defines the color of the product.

Used to provide consistent color classification",Descriptions
Colour Family Code,color/colourFamilyCode,Indicates the family code of the product colour.,Descriptions
Colour Tint Code,color/colourTintCode,Indicates the tint or shade code of the product colour.,Descriptions
Alternative Color Description,color/description,"The description of the color of the product.

Used to provide a precise description of the color to the consumer.",Descriptions
Pattern Code,color/patternCode,Indicates the pattern code of the product.,Descriptions
Color Category,colorCategory,Indicates the color of the trade item in this field.,Descriptions
Commercial Type,commercialType,Free text field used to identify the variant of the product. ,Descriptions
Comparable Branded Products,comparableBrandedProducts,Description of similar national branded items used for private label items.,Descriptions
Composite Wood Certification Code,compositeWoodCertificationCode,"Indicates if any portion of the item contains any of the following types of composite wood: hardwood plywood veneer core, hardwood plywood composite core, particleboard, or medium density fiber board (MDF). Enter the code corresponding to the highest formaldehyde emission level on any portion of the item. Code Definitions: 1 - Does not contain composite wood; 7 - Product is not CARB compliant and cannot be sold in California; 8 - Product is CARB compliant and can be sold in California.",Descriptions
Consumer Product VariantIdentification,consumerProductVariantIdentification,The identification for a particular Consumer Product Variant. This identification is based upon guidelines and assignment to the General Specifications.,Descriptions
Consumer Product Variant Reason Code,consumerProductVariantReasonCode,"A code describing the impacted change (packaging change, graphics change, minor formulation, etc) for a Consumer Product Variant.",Descriptions
Display Type List,displayTypeList,An indication of if the item is a display unit or not. Acceptable values for this are found in the PerformanceRequirementsOptionsCodeList,Descriptions
Drawer Position,drawerPosition,"The location of the drawer in relation to the storage unit. Example: Front, Left Side, Right Side, Bottom, etc.",Descriptions
Edition (Toys),editionToys,"Provide the version or edition of the item.  Example: Teacher's Edition, Unabridged Version",Descriptions
For More Info About Product,forMoreInfoAboutProduct,Utility field providing space for any information not covered in previous fields on packaging. May include 800 number or an address to write to for additional information about the product.,Descriptions
Frame Color,frameColor,"The color of a frame component of the item, if it needs to be distinguished from other components. ",Descriptions
Product Type Description,functionalName,"The generic description provided by the seller to describe the type, form or function of the product or service.

Examples: 

• liquid laundry
• powder laundry
• laundry pod
• detergent
• toothpaste
• facial tissue
• potato chips vs. potato crisps

Used by the buyer to help classify the product or service. Can also be used for discovery.",Descriptions
Invoice Name,invoiceName,Free form information provider assigned trade item description designed to match trade item/service description as noted on invoices,Descriptions
Is this an Adult Product?,isAdultProduct,Is this product sexual in nature and designed specifically for an adult audience?  Care should be taken to not allow this item to appear in search results for children's products.,Descriptions
Is CDS applicable to Trade Item?,isTradeItemCDSApplicable,Indicator the Container Deposit Scheme (CDS) is applicable to this item. ,Recipient Identification Info
Is Unscented,isUnscented,"Indicator to denote the item has no added scent or aroma. Used for products that have scented equivalents. Consumers often prefer unscented versions of products such as soaps, toilet paper and candles.",Descriptions
Item Name Long,itemNameLong,The long item name.,Descriptions
Label Description,labelDescription,A literal reproduction of the text featured on a product’s label in the same word-by-word order in which it appears on the front of the product’s packaging. ,Descriptions
Language Specific Brand Name,languageSpecificBrandName,The recognisable name used by a brand owner to uniquely identify a line of trade item or services expressed in a different language than the primary brand name (brandName).,Descriptions
Language Specific Sub-Brand Name,languageSpecificSubbrandName,A second level of brand expressed in a different language than the primary sub-brand name (subBrand).,Descriptions
Necessary Trade Item To Use Description,necessaryTradeItemToUseDescription,A description used to differentiate the stand alone trade items from the trade items that cannot be used on their own for example an add-on for SIMS video game or accessories for i-phone.,Descriptions
Opacity Type Code,opacityTypeCode,"A code to describe the opacity achieved by the product. The codes may vary by product type. Examples Cosmetics, Glass, Paints and Wood Stains.",Descriptions
Hair Product Function or Treatment Code,productInformationDetail/beautyPersonalCareHygieneDetail/hairProductInformation/hairProductFunctionOrTreatmentCode,"Indicates, with reference to the hair product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify different functions of the product and other treatments.",Descriptions
Natural Hair Color Code,productInformationDetail/beautyPersonalCareHygieneDetail/hairProductInformation/naturalHairColourCode,"Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the natural colour of the hair for which the product is intended.",Descriptions
Target Hair Type Code,productInformationDetail/beautyPersonalCareHygieneDetail/hairProductInformation/targetHairTypeCode,"Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the hair type for 
which the product is intended.",Descriptions
Skin Product Function or Treatment Code,productInformationDetail/beautyPersonalCareHygieneDetail/skinProductInformation/skinProductFunctionOrTreatmentCode,"Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify different functions of the skin care or moisturizing product and other treatments.",Descriptions
Target Skin Type Code,productInformationDetail/beautyPersonalCareHygieneDetail/skinProductInformation/targetSkinTypeCode,"Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify different types of skin the product is intended for.",Descriptions
Production Variant Description,productionVariantDescription,"Free text assigned by the manufacturer to describe the production variant. Examples are: Package serie X, package serie Y.",Descriptions
Product Range,productRange,"A name, used by a BrandOwner, that span multiple consumer categories or uses.",Descriptions
Sequence Number,regulatedProductName/sequenceNumber,Sequence Number of Regulated Product Name.,Descriptions
Regulated Product Name,regulatedProductName/statement,"The product name provided by the seller in adherence with laws, regulations or administrative provisions applicable in the country. Not all products have a regulated name.

Used to identify to the consumer the prescribed, regulated or generic name of a product. This differentiates the regulated name from any other name the product may be known by for marketing purposes.",Descriptions
Relationship To Similar Carried Product,relationshipToSimilarCarriedProduct,A code that indicates whether the item is adding duplication to items already carried by the retailer or if the item is adding variety.,Descriptions
Shape Description French,shapeDescriptionFrench,The physical shape of the product defined in French,Descriptions
Short Product Name,shortDescription,"The shortened product name for the consumer product.

Used by the seller to provide a short product name to the buyer for the shelf tag and point-of-sale receipt.",Descriptions
Similar Carried Product Description,similarCarriedProductDescription,A desciption of products within the information provider's range of products that will be impacted by the new item.,Descriptions
Sub Brand Name,subBrand,"The name provided by the brand owner that allows the consumer to further differentiate the product beyond brand name.

Used to indicate to the consumer the secondary brand of the product.",Descriptions
Econtent Environment Type Code,tradeItemEcontent/econtentEnvironmentTypeCode,"A code providing the digital medium, the eContent is targeted towards for example WEBSITE or MOBILE_DEVICE.",Descriptions
Econtent Trade Item Statement,tradeItemEcontent/econtentTradeItemStatement,A free text field providing additional information relating to the trade item. This is specifically addressing website and mobile device content for consumers.,Descriptions
Trade Item Feature Code Reference Code,tradeItemFeatureCodeReference/code,The code which describes the feature,Descriptions
Trade Item Feature Code Reference Description,tradeItemFeatureCodeReference/codeDescription,Indicates if the trade item is resistant to frost and can thus be used outside. ,Descriptions
Trade Item Feature Code Reference Code List Agency Code,tradeItemFeatureCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Descriptions
Trade Item Feature Code Reference Code List Agency Name,tradeItemFeatureCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Descriptions
Trade Item Feature Code Reference Code List Name,tradeItemFeatureCodeReference/codeListName,The name of the codelist.,Descriptions
Trade Item Feature Code Reference Code List URI,tradeItemFeatureCodeReference/codeListURI,The URI for the codelist.,Descriptions
Product Shape Code,tradeItemFormCode,"Valid value for the shape of the product, excluding the packaging.

Used to identify the shape of a product or deviation from a common type of product shape. Used by the buyer in assortment decisions and may be communicated to the consumer.",Descriptions
Search Key Words for Product,tradeItemKeyWords,"The key words provided by the seller intended to help make the product discoverable by consumers using digital search engines. Key words should be entered as a string separated by commas. Example for a container of ice cream with key search words: ""ice cream, lemon, brand""

Used by the buyer to optimize digital search engines, which may include online or in-store, for the consumer. Key words should be separated by commas with no spaces.",Descriptions
TradeItem Markings Description English,tradeItemMarkingsDescriptionEnglish,"Describes the distinctive direct marking(s) or imprints on a trade item and the location of the markings as described by the manufacturer in ENGLISH. Example: Company Logo on Front, Value with UOM on Back and scored Or Front Company Logo, Back Value with UOM and scored",Descriptions
TradeItem Markings Description French,tradeItemMarkingsDescriptionFrench,"Describes the distinctive direct marking(s) or imprints on a trade item and the location of the markings as described by the manufacturer in FRENCH Example: Façade logo, dossier enseigner",Descriptions
Trade Item Technology Description,tradeItemTechnologyDescription,The type(s) of marketing name technologies contained in the appliance for example Smart Technology.,Descriptions
Variant Statement,tradeItemVariant/tradeItemVariantStatement,"A complete statement describing the variant, that may comply with any regulatory requirements in a target market. Example for flavour: Barbecue with natural and artificial flavours.",Descriptions
Variant Type Code,tradeItemVariant/tradeItemVariantTypeCode,Provides a code to identify the variant type of the product (e.g. Flavour).,Descriptions
Variant Value,tradeItemVariant/tradeItemVariantValue,The variant value for a variant type (e.g. Grape).,Descriptions
Trade Name or Another Name,tradeNameOrAnotherName,Trade name or another name for a medical device or other therapeutic good. https://www.legislation.gov.au/Details/F2021C00976/Download,Descriptions
Product Variation,variants/variant,"The description used to communicate differentiating characteristics of the product in a product line, identified by unique GTINs.

Used to inform the consumer about available product variations. Used by the buyer to evaluate product mix and in shelf management.",Descriptions
GS1 Standardized File Name,dam/a1c1FileName,"Generated for your convenience, recipients will leverage this (A1C1) name to quickly identify your digital assets. This attribute is powered by the population of each of the following attributes: Type of Information, Image Facing, Image Background, and File Pixel Width/Height.",Digital Asset Management Attributes (DAM)
Authorize Recipients,dam/authorizedRecipients,List of GLNs that this image is shared to.  Sharing is indicated on the Share Type attribute.,Digital Asset Management Attributes (DAM)
Content Description,dam/description/contentDescription,Free form description of the content of the file.,Digital Asset Management Attributes (DAM)
File Camera Perspective,dam/description/fileCameraPerspective,A description of the angle of perspective used by the camera in the capture of the digital asset.,Digital Asset Management Attributes (DAM)
File Campaign Description,dam/description/fileCampaignDescription,A reference to a specific communication project to which the digital asset is associated.,Digital Asset Management Attributes (DAM)
File Copyright Description,dam/description/fileCopyrightDescription,A description of any Copyright notice which pertains to the digital asset.,Digital Asset Management Attributes (DAM)
File Depicted Scene Description,dam/description/fileDepictedSceneDescription,The scene or location used as a setting or backdrop in the digital asset.,Digital Asset Management Attributes (DAM)
File Disclaimer Information,dam/description/fileDisclaimerInformation,A description expressing any disclaimers which pertain to the digital asset. (e.g. Item may be smaller than appears),Digital Asset Management Attributes (DAM)
File Fee Description,dam/description/fileFeeDescription,"A description of the fees that are applicable to use of the digital asset. This attribute may be a list of actual fees, a description of the fee structure, or contact information to find out the fees.",Digital Asset Management Attributes (DAM)
File Format Description,dam/description/fileFormatDescription,Free form description of the format of the file. This attribute is optional.,Digital Asset Management Attributes (DAM)
File Layer Quantity,dam/description/fileLayerQuantity,The number of layers in the digital asset.,Digital Asset Management Attributes (DAM)
File Lifestyle Description,dam/description/fileLifestyleDescription,"The lifestyles to which this digital asset can be used. For example psychographic, demographic, age, etc.",Digital Asset Management Attributes (DAM)
File Recommended Usage,dam/description/fileRecommendedUsageDescription,"A reference to the specific communication project to which the digital asset is associated, such as the Back to School Campaign. A campaign is a marketing term used to describe the event, sale, promotion, or other program for which this digital asset is designed to be part.",Digital Asset Management Attributes (DAM)
File Resolution Description,dam/description/fileResolutionDescription,The resolution of the file. Knowing the resolution will allow the user to be able to determine the best system with which to utilize the file.,Digital Asset Management Attributes (DAM)
File Rights Description,dam/description/fileRightsDescription,The structure for Digital Rights Management(DRM) which is in place on the file. This could be ID and location of external Intellectual Property Management & Protection(IPMP) system for lookup of usage rights. Presence of a value for this attribute signifies that the file uses a DRM.,Digital Asset Management Attributes (DAM)
File Run Time,dam/description/fileRunTime,The playback or running length of time for the digital asset.,Digital Asset Management Attributes (DAM)
File Story Description,dam/description/fileStoryDescription,A description of the storyboard or plot of the digital file.,Digital Asset Management Attributes (DAM)
File Talent Description,dam/description/fileTalentDescription,"The specific identification of the talent used in the file. For example, many identify a celebrity as the spokesperson for the product as included in the asset.",Digital Asset Management Attributes (DAM)
File Usage Restriction,dam/description/fileUsageRestriction,A description of any restrictions on the ability of the recipient's to use of the asset.,Digital Asset Management Attributes (DAM)
Intended Publication Media Type Description,dam/description/intendedPublicationMediaTypeDescription,"The media Types with which the digital asset was designed to be utilized, such as Web, Catalogue, circular among others.",Digital Asset Management Attributes (DAM)
Item Depiction Type Code,dam/description/itemDepictionTypeCode,The state of the item as it is being depicted in the digital assets for example gift wrapped or assembled.,Digital Asset Management Attributes (DAM)
Items in File Description,dam/description/itemsInFileDescription,A description of the additional items shown or depicted in the digital asset.,Digital Asset Management Attributes (DAM)
Exclude Recipients,dam/excludedRecipients,List of GLNs that this image is excluded from.  Sharing is indicated on the Share Type attribute.,Digital Asset Management Attributes (DAM)
Alternate Text,dam/general/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Digital Asset Management Attributes (DAM)
Are Human Models in File,dam/general/areHumanModelsInFile,An indicator whether or not the item is shown or depicted with human models.,Digital Asset Management Attributes (DAM)
Can Files Be Edited,dam/general/canFilesBeEdited,An indicator of whether the user or recipient of the digital asset can edit it prior to use or as a function of using the asset.  Some digital assets are designed such that the recipient can edit the asset to meet the needs of a final output.,Digital Asset Management Attributes (DAM)
Can File Stream?,dam/general/canFileStream,An indicator that the digital asset is compressed to start displaying/running before fully uncompressing.,Digital Asset Management Attributes (DAM)
File Author Name,dam/general/fileAuthorName,The organization(s) or person(s) who is responsible for creating the digital asset.,Digital Asset Management Attributes (DAM)
File Creation Program,dam/general/fileCreationProgram,The program used in the creation of the digital asset.,Digital Asset Management Attributes (DAM)
File Depicted Season,dam/general/fileDepictedSeason,"A description of the season shown or depicted within the digital asset. (e.g., Winter, Spring)",Digital Asset Management Attributes (DAM)
File Effective End Date,dam/general/fileEffectiveEndDate,The date this image ceases to be the current image for this trade item. This attribute is optional. This attribute must be greater than the fileEffectiveStartDateTime if present.,Digital Asset Management Attributes (DAM)
File Effective Start Date,dam/general/fileEffectiveStartDate,The date this image is the current image for this trade item. This fileEffectiveStartDateTime must be present if the uniformResourceIdentifier is entered.,Digital Asset Management Attributes (DAM)
File Format Name,dam/general/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP. The fileFormatName must be present if the uniformResourceIdentifier is populated.,Digital Asset Management Attributes (DAM)
File Item Position,dam/general/fileItemPositionCode,A description of how the item is placed in the digital asset for example the item is propped (leaning against an object) or held (being held by a model).,Digital Asset Management Attributes (DAM)
File Language,dam/general/fileLanguageCode,The specified language to which the digital asset is targeted.,Digital Asset Management Attributes (DAM)
File Name,dam/general/FileName,"The name of the file that contains the external information. The first 14 characters of the file name must match the GTIN of the associated trade item. If the file is an image, the name must follow the GS1 Image Standards Naming Conventions. The filename must be present if the uniformResourceIdentifier is entered.",Digital Asset Management Attributes (DAM)
File Optimal Viewer Name,dam/general/fileOptimalViewerName,The optimal viewer for the file that is being referenced.,Digital Asset Management Attributes (DAM)
File Origin Country,dam/general/fileOriginCountryCode,The country where the digital asset originated.,Digital Asset Management Attributes (DAM)
File Sequence Number,dam/general/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Digital Asset Management Attributes (DAM)
File Size (system determined),dam/general/fileSize,The size of the file as it is stored in an uncompressed format.  This value is automatically determined by 1WorldSync.,Digital Asset Management Attributes (DAM)
File Version (system determined),dam/general/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Digital Asset Management Attributes (DAM)
Image Background,dam/general/imageBackground,Indicates the background composition of an image.,Digital Asset Management Attributes (DAM)
Image Facing,dam/general/imageFacing,Indicates the facing of an image.,Digital Asset Management Attributes (DAM)
Image Orientation Type Code,dam/general/imageOrientationTypeCode,"The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Digital Asset Management Attributes (DAM)
Image Source,dam/general/imageSource,Identify the source of which company provided the image url.,Digital Asset Management Attributes (DAM)
Image State Code,dam/general/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Digital Asset Management Attributes (DAM)
Intended Publication Country,dam/general/intendedPublicationCountry,The country/countries in which the digital asset is designed to be used.,Digital Asset Management Attributes (DAM)
Is File For Internal Use Only,dam/general/isFileForInternalUseOnly,An indicator whether or not the file is intended for internal use only and not for general publication.,Digital Asset Management Attributes (DAM)
Image Rendered Indicator,dam/general/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Digital Asset Management Attributes (DAM)
Is Talent Release On File,dam/general/isTalentReleaseOnFile,An indicator whether or not the owner of the asset has a talent release on file.  This applies to files where talent or a model is used.,Digital Asset Management Attributes (DAM)
Title Text,dam/general/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Digital Asset Management Attributes (DAM)
Type Of Information,dam/general/typeOfInformation,"Code identifying the purpose of the information contained in the external file. Examples: Image of product label, marketing information, planogram.",Digital Asset Management Attributes (DAM)
Uniform Resource Identifier (system determined),dam/general/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is assigned by 1WorldSync.",Digital Asset Management Attributes (DAM)
Additional Camera Angle Code,dam/imageInfo/additionalCameraAngleCode,"An additional camera angle used to take a picture of the trade item for example ZOOM_VIEW. If this attribute is not populated, the assumption is a full trade item view. Uses FileCameraPerspectiveCode code list.",Digital Asset Management Attributes (DAM)
Additional Camera Angle Code,dam/imageInfo/additionalCameraAngleCode,"An additional camera angle used to take a picture of the trade item for example ZOOM_VIEW. If this attribute is not populated, the assumption is a full trade item view. Uses FileCameraPerspectiveCode code list.",Digital Asset Management Attributes (DAM)
Are Fees Required for Use,dam/imageInfo/areFeesRequiredForUse,An indicator whether or not a fee is required for the use of this digital asset.,Digital Asset Management Attributes (DAM)
File Aspect Ratio,dam/imageInfo/fileAspectRatio,A description of the aspect ratio used to determine how a digital asset fits on a page or monitor.,Digital Asset Management Attributes (DAM)
File Background Colour Description,dam/imageInfo/fileBackgroundColourDescription,Description of the background color.,Digital Asset Management Attributes (DAM)
File Colour Calibration,dam/imageInfo/fileColourCalibration,Free form text to describe the calibration of the file.,Digital Asset Management Attributes (DAM)
File Colour Scheme Code,dam/imageInfo/fileColourSchemeCode,The type of colour scheme used in the digital asset. ,Digital Asset Management Attributes (DAM)
File Compression Type,dam/imageInfo/fileCompressionType,"A description of the compression method used to reduce the file size stored at the link. This information is used to aid the user in choosing the correct program to extract the file. Examples include Quick Time, Real Player, mpg, WinZip, etc.",Digital Asset Management Attributes (DAM)
File Contrast,dam/imageInfo/fileContrast,The contrast used in the digital asset. Contrast is the difference in brightness between light and dark areas of an image. Contrast determines the number of shades in the image.,Digital Asset Management Attributes (DAM)
File Pixel Height (system determined),dam/imageInfo/filePixelHeight,The number of pixels along the vertical axis of the image.,Digital Asset Management Attributes (DAM)
File Pixel Width (system determined),dam/imageInfo/filePixelWidth,The number of pixels along the horizontal axis of the image.,Digital Asset Management Attributes (DAM)
File Playback Rate,dam/imageInfo/filePlaybackRate,The targeted frame rate for the display of the digital asset. Expressed as an integer representing the number of frames per second.,Digital Asset Management Attributes (DAM)
File Print Height,dam/imageInfo/filePrintHeight,The maximum measurement along the vertical axis of a printed representation of the file.,Digital Asset Management Attributes (DAM)
File Print Width,dam/imageInfo/filePrintWidth,The maximum measurement along the horizontal axis of a printed representation of the file.,Digital Asset Management Attributes (DAM)
Is File Background Transparent,dam/imageInfo/isFileBackgroundTransparent,An indicator of whether or not the background used in the file is transparent.  Having a transparent background would allow a recipient to place the file into any setting necessary.,Digital Asset Management Attributes (DAM)
Number of Items in Digital Asset,dam/imageInfo/numberOfItemsInDigitalAsset,"The number of items in the digital asset, where the asset contains more than one item.",Digital Asset Management Attributes (DAM)
Vertical Camera Angle Code,dam/imageInfo/verticalCameraAngleCode,The vertical angle used to photograph an object expressed as a code for example PARALLEL.,Digital Asset Management Attributes (DAM)
Primary Image,dam/primaryImage,Indicates whether the asset is the primary image.  This attribute is used for the IM UI display purposes only and is not sent to recipeints.,Digital Asset Management Attributes (DAM)
Share Type,dam/shareType,"Indicates if image is Public,  or, if Private to specified GLNs in the Shared Recipient list.",Digital Asset Management Attributes (DAM)
Column,dam/spinInformation/column,"Number to denote the column of a 360/Spin image in the specified row in which this image link belongs. A column is an arc point in the 360 degrees of spin on the image set. If the image set has a unique image taken at every 15 degrees of arc, then there are 24 columns in the image set. The column number should be a sequential number beginning with 1 and advance for each image in the image set in a clockwise direction. Anchor images should always have an column number of 1.",Digital Asset Management Attributes (DAM)
Is Anchor Image?,dam/spinInformation/isAnchorImage,Image that is used as a starting image for the Spin.,Digital Asset Management Attributes (DAM)
Row,dam/spinInformation/row,"Number to denote the row of a 360/Spin image set in which this image link belongs. Each row is a different plunge angle for the image set. A 360/Spin image set with 3 rows has 3 different plunge angles, such as 0 degrees, 15 degrees, and 60 degrees.",Digital Asset Management Attributes (DAM)
360 Spin Set Name,dam/spinInformation/spinSetName,The unique name per item for the 360/Spin set. This will be used to group all of the images together in the Spin Set,Digital Asset Management Attributes (DAM)
Total Number of Columns Per Row,dam/spinInformation/totalNumberOfColumnsPerRow,"Number to denote the total quantity of columns per row included in the 360/Spin image set. For example, if an image set has 3 rows and 24 Columns in each row, there are a total of 72 images in the image set. The total number of columns per row is 24. This should be popualted for all Anchor image links.",Digital Asset Management Attributes (DAM)
Total Number of Rows,dam/spinInformation/totalNumberOfRows,"Number to denote the total quantity of rows included in the 360/Spin image set. An image set which was taken with 3 different plunge angles, such as 0 degrees, 15 degrees, and 60 degrees, would have a total of 3 rows. This should be popualted for all Anchor image links.",Digital Asset Management Attributes (DAM)
Acceleration,acceleration,The rate of change of velocity. For example: 0 - 60 mph / 4.3 s; 0 - 100 kph / 4.5 s.,Dimensions
Depth,depth,"Consumer Trade Items and Non-Consumer Trade Items have different measuring standards.
Typically, Depth (aka Length) can be measured in the following ways:

Consumer Trade Items:  
1st   Determine the Default Front
2nd  Measure from Default Front to Back

Non-Consumer Trade Items:  
1st   Determine the Natural Base
2nd  Measure the Longest Side of the Natural Base

Always measure your product based on the current GDSN Package Measurement Rules!  

https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf",Dimensions
Diameter,diameter,"The measurement of the diameter of the trade item at its largest point. For example, 165 ""mmt"", value - mmt, diameter. ",Dimensions
Additional Dimension Depth,displayDimensions/dimensionDepth,"The depth dimension of the physical form of the product in or out of packaging, including its unit of measure, under certain display scenarios (Additional Dimension Type Code) when they differ from the standard measurements provided under the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).

Used to create planograms for store shelving in conjunction with Additional Dimension Width and Additional Dimension Height. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions.",Dimensions
Dimension Diameter,displayDimensions/dimensionDiameter,The diameter dimension of a trade item under certain display scenarios (Display Dimension Types).,Dimensions
Additional Dimension Height,displayDimensions/dimensionHeight,"The height dimension of the physical form of the product in or out of packaging, including its unit of measure, under certain display scenarios (Additional Dimension Type Code) when they differ from the standard measurements provided under the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).

Used to create planograms for store shelving in conjunction with Additional Dimension Width and Additional Dimension Height. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions.",Dimensions
Additional Dimension Width,displayDimensions/dimensionWidth,"The width dimension of the physical form of the product in or out of packaging, including its unit of measure, under certain display scenarios (Additional Dimension Type Code) when they differ from the standard measurements provided under the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).

Used to create planograms for store shelving in conjunction with Additional Dimension Width and Additional Dimension Height. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions.",Dimensions
Additional Dimension Type Code,displayDimensions/displayDimensionTypeCode,"Valid value for certain scenarios (e.g. Retail Display, Out of package, Direct Ship to Consumer packaging) used for additional measurements for the product. Display dimensions, as a group, may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used by the buyer for assortment and space planning. Used by the buyer to inform the consumer for search and discovery. Used by the consumer to plan rough in dimensions. Used in conjunction with Additional Dimension Depth, Additional Dimension Width and Additional Dimension Height.",Dimensions
Gross Weight,displayDimensions/grossWeight,Used to identify the gross weight of the trade item. The gross weight includes all packaging materials of the trade item. Has to be associated with a valid UOM.,Dimensions
Drained Weight,drainedWeight,"The weight of the product when drained of its liquid as stated on the product label.

Used to calculate the price per unit of measure accurately for the consumer when the liquid is no longer part of the product.",Dimensions
Duration,duration,Provide the amount of time that the product can be used or is expected to complete.  Example: 1  hour,Dimensions
Estimated Volume Quantity,estimatedVolumeQuantity,The estimated demand quantity for an item over a given time period.,Dimensions
Estimated Volume Time Period,estimatedVolumeTimePeriod,"The duration (year, months, weeks, days) associated with the estimated sales volume.",Dimensions
Estimated Volume Time Period Unit Of Measure,estimatedVolumeTimePeriodUnitOfMeasure,The Unit of Measure associated with Estimated Volume Time Period.,Dimensions
Estimated Volume Unit Of Measure,estimatedVolumeUnitOfMeasure,Unit of Measure associated with Estimated Volume Quantity.,Dimensions
Front Face Type Code,frontFaceTypeCode,"The code used to indicate the front face of a shelf ready package (SRP) for the in-store shelf. E.g. WIDTH, LENGTH, DEPTH_OR_WIDTH).",Dimensions
Gross Weight,grossWeight,"The total weight of the product including the weight of all its packaging materials.

Used by the seller and the buyer to manage logistics, storage, self-checkout, safety limitations and truckload optimization.",Dimensions
Height,height,"The vertical measurement, with its unit of measure, of the item (such as product, case, pallet) according to the GS1 Package Measurement Rules. (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf)

Used to create planograms for store shelving in conjunction with Width and Depth. Used to fill or optimize truckloads when shipping in conjunction with Width and Depth. Used to determine the space in a storage facility in conjunction with Width and Depth.",Dimensions
Individual Unit Max,individualUnitMax,Maximum size of the individual unit inside the lowest level of packaging.,Dimensions
Individual Unit Min,individualUnitMin,Minimum size of the individual unit inside the lowest level of packaging.,Dimensions
Variable Measure Indicator,isVariableWeightItem,"Indicates if the product content is variable.

Used to inform the buyer if the product varies by quantity or amount.",Dimensions
Stacking Factor for non-GTIN Pallet,logisticalUnitStackingFactor,"The maximum number of levels for a specific unit not identified by a GTIN that can exist in a stack without impacting the quality of the product. A value of 1 means that the item cannot be stacked. Stacking Factor for non-GTIN Pallet may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used by the buyer to determine how to store the product, not identified by a GTIN, without impacting the quality of the product.",Dimensions
Logistical Unit Cube Dimension,logisticsUnitCubeDimension,"The dimensions of an imaginary cube which can be drawn around both the unit load (content) and the platform upon which the goods are carried if there is one, as defined in the formula of H X W X D (the linear dimensions multiplied to get a cubic result).",Dimensions
Non-GTIN Logistic Unit Depth,logisticsUnitDepth,"For a logistic unit not identified with a GTIN, the depth measurement (with its unit of measure) of the logistic unit according to the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf). Non-GTIN Logistic Unit Depth may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used to fill or optimize truckloads when shipping in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Height. Used to determine the space in a storage facility in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Height.",Dimensions
Logistical Unit Gross Weight,logisticsUnitGrossWeight,"The weight of both the unit load (content) and the plat-form upon which the goods are carried, if there is one.",Dimensions
Logistical Unit Height,logisticsUnitHeight,"This is the height of both the unit load (content) and the platform upon which the goods are carried, if there is one. Height is the vertical dimension from the lowest extremity to the highest extremity.",Dimensions
Logistical Unit Net Weight,logisticsUnitNetWeight,"The weight of both the unit load (content) and the platform upon which the goods are carried if there is one, excluding all packaging materials.",Dimensions
Non-GTIN Logistic Unit Width,logisticsUnitWidth,"For a logistic unit not identified with a GTIN, the horizontal measurement with the unit of measure of the logistic unit according to the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf). Non-GTIN Logistic Unit Width may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used to fill or optimize truckloads when shipping in conjunction with Non-GTIN Logistic Unit Height and Non-GTIN Logistic Unit Depth. Used to determine the space in a storage facility in conjunction with Non-GTIN Logistic Unit Height and Non-GTIN Logistic Unit Depth.",Dimensions
Nesting Overlap,nestingOverlap,Amount that a product will nest into another when stacked. Calculated as the difference between the height of one product multiplied by 2 and the height of 2 products stacked.,Dimensions
Nesting Overlap UOM,nestingOverlapUOM,The unit of measurement associated with the nesting overlap.,Dimensions
Net Content,netContent,"The easiest place to find this information may be on you Product's label. The label should indicate the amount of the Item contained within the package. 

Familiar Net Content examples include 750 ML Water, 20 Count Diapers. 

Item Management Pro Tip:  Add multiple Net Content fields by clicking the + to the right of the row.",Dimensions
Net Content Statement,netContentStatement,"The literal reproduction of the net content(s) as displayed on the product packaging.

Used to declare the entire net content statement; often used for multi-pack products and food service products. Used to communicate this information to the consumer on ecommerce websites or apps.",Dimensions
Net Volume,netVolume,Value of net volume of the trade item. ,Dimensions
Net Weight,netWeight,"The weight of the product excluding the weight of all its packaging materials.

Used by the buyer for production planning and reporting purposes (mainly at case level). In particular it is used for variable weight products in ensuring that suppliers are providing the buyer with the agreed upon weights. This may be used in instances where there is no declared weight on the package.Used to identify the net weight of the trade item. Net weight excludes any packaging materials. Has to be associated with a valid UoM.",Dimensions
Number of Bottles,numberOfBottles,"Specify the number of bottles that the item comes with or supports. Example: 2, 3, 55",Dimensions
Peg Hole Number,pegMeasurements/pegHoleNumber,Used to indicate the peg hole numbers when more than one hole is present in the product or packaging.,Dimensions
Peg Hole Type,pegMeasurements/pegHoleType,The type and shape of the peg hole used for the packaging.,Dimensions
Peg Horizontal,pegMeasurements/pegHorizontal,Used to indicate the horizontal distance from the left edge of the trade item to the center of the hole into which the peg is inserted when the trade item is displayed on a pegboard.,Dimensions
Peg Vertical,pegMeasurements/pegVertical,Used to indicate the vertical distance of a peg hole measured from the bottom edge of the trade item to the top of the peg hole. Peg holes are inserted when the trade item is displayed on a pegboard.,Dimensions
Alcohol Percentage,percentageOfAlcoholPerVolume,"The percentage of alcohol by volume contained in the product.

Used to communicate to the buyer and the consumer the percentage of alcohol by volume contained in the product. Based on the %alcohol, the buyer can make an informed decision if the product can be sold in-store. Alcohol percentage may be used to calculate tax.",Dimensions
Rail Gauge,railGauge,"Provide the gauge of the rail. Example: HO, O, N",Dimensions
Scale Name,scaleName,"Provide the scale of the item. Example: HO, N, G, 1:40, 1:24",Dimensions
Shelf Unit Depth In Millimetres,shelfUnitDepthInMillimetres,Indication of the length/depth of the non-consumer shelf item measured in millimetres.,Dimensions
Shelf Unit Height In Millimetres,shelfUnitHeightInMillimetres,Indication of the height of the non-consumer shelf item measured in millimetres.,Dimensions
Shelf Unit Width In Millimetres,shelfUnitWidthInMillimetres,Indication of the width (facing) of the non-consumer shelf item measured in millimetres.,Dimensions
Tensile Strength,tensileStrength,"The maximum stress it withstands before failing is its ultimate tensile strength. Ultimate tensile strength (UTS), often shortened to tensile strength (TS) or ultimate strength, is the maximum stress that a material can withstand while being stretched or pulled before failing or breaking. Example fishing line test, nylon rope.",Dimensions
Nesting Direction,tradeItemNesting/nestingDirectionCode,Depicts the arrangement of two items that nest together specifically whether they nest against each other or on top of each other.,Dimensions
Nesting Increment,tradeItemNesting/nestingIncrement,"Indicates the incremental height of Trade Items nested together. For example, in the case of two garbage cans nested together, this would be the height between the lip of the lower can and the lip on the upper can.",Dimensions
Nesting Type,tradeItemNesting/nestingTypeCode,Depicts whether a nested item fits inside or over the other item in a nesting relationship.,Dimensions
Orientation Preference Sequence,tradeItemOrientation/orientationPreferenceSequence,Depicts the preferred sequence of orientation used to communicate the manufacturers relative preferences of orientation,Dimensions
Orientation Type,tradeItemOrientation/orientationType,Depicts via code a display orientation for a trade item.,Dimensions
Variable Measure Identification Number,variableMeasureIdentificationNumber,Variable Measure Identification Number,Dimensions
Variable Measure ID Num. For Price,variableMeasureTradeItemIDNumForPrice,Variable Measure ID Num. For Price,Dimensions
Variable Measure ID Num. For Weight,variableMeasureTradeItemIDNumForWeight,Variable Measure ID Num. For Weight,Dimensions
Loose or Pre-Packed Code,variableTradeItemType,"Valid value which informs the buyer whether the product is pre-packed or loose. This applies to products that are sold by variable measure of how the product is packed for the selling of products that vary in weight or quantity.

Used to provide information to the buyer of how a product that varies in weight will be packed. Used to help with shelf placement in the store.",Dimensions
Variable Weight Allowable Deviation Percentage,variableWeightAllowableDeviationPercentage,"Indication of the percentage value that the actual weight of the trade item may differ from the average or estimated weight given. For example, Roast beef off the bone 3.5 kg, Gross weight 3500 Grams, Range = 14 %. This means that this item may be produced with weight values ranging from 3.010 kg to 3.990 kg.",Dimensions
Variable Weight Range Maximum,variableWeightRangeMaximum,Variable Weight Range Maximum (also called Catchweight Range Maximum) identifies the highest or ceiling weight of a variable weight product. ,Dimensions
Variable Weight Range Minimum,variableWeightRangeMinimum,Variable Weight Range Minimum (also called Catchweight Range Minimum) identifies the lowest weight of the variable weight product. ,Dimensions
Velocity,velocity,The rate at which an object changes its position for example 5 metres per second (5 MTS).,Dimensions
Volume,volume,The dimensions of an imaginary cube which can be drawn around the trade item as defined in the formula of H X W X D. This only applies to In-box dimensions. Level of Hierarchy applied to- All.,Dimensions
Width,width,"The horizontal measurement, with its unit of measure, of the item (such as product, case, pallet) according to the GS1 Package Measurement Rules. (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf)

Used create planograms for store shelving in conjunction with Height and Depth. Used to fill or optimize truckloads when shipping in conjunction with Height and Depth. Used to determine the space in a storage facility in conjunction with Height and Depth.",Dimensions
Crush Depth,tradeItemMeasurementsModule_CrushDepth,"Crush depth measurement is the difference between the normal measurement as described by GDSN Measurement Rules and the measurement you get, when pressing or folding the product packing, without extending width or depth. Example: a bag of coffee is normally measured as 250 mm, but when crush is measured as described, it is 200 mm. Then the Crush is 50 mm (250 – 200 = 50).",Dimensions
Crush Height,tradeItemMeasurementsModule_CrushHeight,"Crush height measurement is the difference between the normal measurement as described by GDSN Measurement Rules and the measurement you get, when pressing or folding the product packing, without extending width or depth. Example: a bag of coffee is normally measured as 250 mm, but when crush is measured as described, it is 200 mm. Then the Crush is 50 mm (250 – 200 = 50).",Dimensions
Crush Width,tradeItemMeasurementsModule_CrushWidth,"Crush width measurement is the difference between the normal measurement as described by GDSN Measurement Rules and the measurement you get, when pressing or folding the product packing, without extending width or depth. Example: a bag of coffee is normally measured as 250 mm, but when crush is measured as described, it is 200 mm. Then the Crush is 50 mm (250 – 200 = 50).",Dimensions
Is Hazardous Component Brokendown Easily for Recycling?,areHazardousComponentsRemovable,Indicates whether or not any hazardous components can be easily seperated from the other materials to facilitate product recycling.,Disposal
Percent of Product Components Labeled for Disassembly And Recycling,componentsLabeledForDisassemblyRecyclingPercent,"Provides the percentage of the product components that are clearly labeled on how to facilitate product disassembly and recycling. For example if the product is a VCR and remote control and the remote control is labeled for recycling, but the VCR is not, then the percentage equals 50.",Disposal
Does Manufacturer have Take back Program?,doesManufacturerHaveTakeBackProgram,"Indicates whether or not the manufacturer offers a take back program to the consumer for the product to be reused, remanufactured, or recycled.",Disposal
Exist Special Refuse Obligations,doesTradeItemHaveRefuseObligations,Indication that special refuse obligations apply to the trade item.,Disposal
Is Disposable,isDisposable,Indicates the item is intended for single use.,Disposal
Can Product be Easily Upgraded or Maintained by Consumer?,isTradeItemConsumerUpgradeableOrMaintainable,"Indicates if the product can be easily upgraded or replaced by the consumer. For example, the ability to add additional memory/storage capacity.",Disposal
Is Product Disassembly by Recycling Facility Completed Using Standard Tools?,isTradeItemDesignedForEasyDisassembly,Indicates whether or not the product is designed for easy disassembly by recycling facilities using standard industry tools.,Disposal
Is Trade Item Universal Waste?,isTradeItemUniversalWaste,"Indicates whether or not a product can be considered universal waste. Universal waste is defined as ""wastes that do meet the regulatory definition of hazardous waste, but are managed under special, tailored regulations"".",Disposal
Manufacturer Take Back Program Fee,manufacturerTakeBackProgramFee,The fee the consumer must pay the manufacturer to take back the product.,Disposal
Spare Parts Availability Effective Date Type Code,sparePartsAvailabilityInformation/sparePartsAvailabilityEffectiveDateTypeCode,"The type of date expressed as a code associated with the period of availability of spare parts usually expressed as an event date for the item for example DATE_OF_PURCHASE_BY_CONSUMER, DATE_OF_MANUFACTURE or DATE_OF_DELIVERY.",Disposal
Spare Parts Availability Period,sparePartsAvailabilityInformation/sparePartsAvailabilityPeriod,The period of availability of spare parts fpr a trade item associated with the sparePartsAvailabilityEffectiveDateTypeCode for example 24 MON.,Disposal
Waste Amount,tradeItemWasteManagement/wasteAmount,The amount of the components contained in the trade item that are covered by a waste directive for example WEEE.,Disposal
Waste Directive Appliance Type,tradeItemWasteManagement/wasteDirectiveApplianceType,The category of electrical and electronic equipment containing components covered by a waste directive for example WEEE.,Disposal
Waste Directive Name,tradeItemWasteManagement/wasteDirectiveName,The name of a waste directive for example WEEE.,Disposal
Waste Directive Registration Number,tradeItemWasteManagement/wasteDirectiveRegistrationNumber,A registration number for a trade item required by a waste directive (e.g. WEEE).,Disposal
Waste Code,typeOfWasteCode,"The code that describes the type of waste created from the product. Please refer to any local regulation requirements for disposal/recyclable waste.• CHEMICAL_WASTE - Waste that is released directly or indirectly when chemicals are used (e.g., salts, acids and bases, heavy metals, cyanides, oxidants).
• RESIDUAL_WASTE - Waste that remains after the usual waste flows (e.g., glass, metal, paper) have been removed from the main flow.
• RECYCLEBLE_WASTE - Waste that can be collected and recycled/melted into reusable raw materials (e.g., plastics, steel).Used by the buyer (e.g. healthcare specialist) to determine which waste process is required for (parts of) the product.",Disposal
Additional Camera Angle Code,externalFileLink/additionalCameraAngleCode,"An additional camera angle used to take a picture of the trade item for example ZOOM_VIEW. If this attribute is not populated, the assumption is a full trade item view. Uses FileCameraPerspectiveCode code list.",External Digital Assets
Alternate Text,externalFileLink/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,External Digital Assets
Are Fees Required for Use,externalFileLink/areFeesRequiredForUse,An indicator whether or not a fee is required for the use of this digital asset.,External Digital Assets
Are Human Models in File,externalFileLink/areHumanModelsInFile,An indicator whether or not the item is shown or depicted with human models.,External Digital Assets
Can Files Be Edited,externalFileLink/canFilesBeEdited,An indicator of whether the user or recipient of the digital asset can edit it prior to use or as a function of using the asset. Some digital assets are designed such that the recipient can edit the asset to meet the needs of a final output.,External Digital Assets
Can File Stream?,externalFileLink/canFileStream,An indicator that the digital asset is compressed to start displaying/running before fully uncompressing.,External Digital Assets
Content Description,externalFileLink/externalFileLinkContentDescription,Free form description of the content of the file. ,External Digital Assets
Digital Asset File Name,externalFileLink/externalFileLinkFileName,"The file name of the digital asset, for images according to the GS1 Product Image Specification Standard. 

Used to identify the name and intent for the digital asset. Provide a unique name based on GS1 specifications. If the file contains an extension it must be included in the file name.",External Digital Assets
File Aspect Ratio,externalFileLink/fileAspectRatio,A description of the aspect ratio used to determine how a digital asset fits on a page or monitor.,External Digital Assets
File Author Name,externalFileLink/fileAuthorName,The organization(s) or person(s) who is responsible for creating the digital asset.,External Digital Assets
File Background Colour Description,externalFileLink/fileBackgroundColourDescription,Description of the background color.,External Digital Assets
File Camera Perspective,externalFileLink/fileCameraPerspective,A description of the angle of perspective used by the camera in the capture of the digital asset.,External Digital Assets
File Campaign Description,externalFileLink/fileCampaignDescription,A reference to a specific communication project to which the digital asset is associated.,External Digital Assets
File Colour Calibration,externalFileLink/fileColourCalibration,Free form text to describe the calibration of the file.,External Digital Assets
File Colour Scheme Code,externalFileLink/fileColourSchemeCode,The color scheme code of the referenced file.,External Digital Assets
File Compression Type,externalFileLink/fileCompressionType,"A description of the compression method used to reduce the file size stored at the link. This information is used to aid the user in choosing the correct program to extract the file. Examples include Quick Time, Real Player, mpg, WinZip, etc.",External Digital Assets
File Contrast,externalFileLink/fileContrast,The contrast used in the digital asset. Contrast is the difference in brightness between light and dark areas of an image. Contrast determines the number of shades in the image.,External Digital Assets
File Copyright Description,externalFileLink/fileCopyrightDescription,A description of any copyright notice which pertains to the digital asset.,External Digital Assets
File Creation Program,externalFileLink/fileCreationProgram,The program used in the creation of the digital asset. ,External Digital Assets
File Depicted Scene Description,externalFileLink/fileDepictedSceneDescription,The scene or location used as a setting or backdrop in the digital asset.,External Digital Assets
File Depicted Season,externalFileLink/fileDepictedSeason,"A description of the season shown or depicted within the digital asset. (e.g., Winter, Spring)",External Digital Assets
File Disclaimer Information,externalFileLink/fileDisclaimerInformation,A description expressing any disclaimers which pertain to the digital asset. (e.g. Item may be smaller than appears),External Digital Assets
Digital Asset End Date/Time,externalFileLink/fileEffectiveEndDateTime,"The date/time on which the digital asset can no longer be used. 

Used by the seller to communicate to the buyer when the digital asset can no longer be used.",External Digital Assets
Digital Asset Start Date/Time,externalFileLink/fileEffectiveStartDateTime,"The date/time on which the digital asset can be used. 

Used by the seller to communicate to the buyer when the digital asset can be used and shown to the consumer.",External Digital Assets
File Fee Description,externalFileLink/fileFeeDescription,"A description of the fees that are applicable to use of the digital asset. This attribute may be a list of actual fees, a description of the fee structure, or contact information to find out the fees.",External Digital Assets
File Format Description,externalFileLink/fileFormatDescription,Free form description of the format of the file. This attribute is optional.,External Digital Assets
File Format Name,externalFileLink/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP. The fileFormatName must be present if the uniformResourceIdentifier is entered.,External Digital Assets
File Item Position,externalFileLink/fileItemPositionCode,A description of how the item is placed in the digital asset for example the item is propped (leaning against an object) or held (being held by a model).,External Digital Assets
File Language,externalFileLink/fileLanguageCode,The specified language to which the digital asset is targeted.,External Digital Assets
File Layer Quantity,externalFileLink/fileLayerQuantity,The number of layers in the digital asset.,External Digital Assets
File Lifestyle Description,externalFileLink/fileLifestyleDescription,"The lifestyles to which this digital asset can be used. For example psychographic, demographic, age, etc.",External Digital Assets
File Optimal Viewer Name,externalFileLink/fileOptimalViewerName,The optimal viewer for the file that is being referenced.,External Digital Assets
File Origin Country,externalFileLink/fileOriginCountryCode,The country where the digital asset originated.,External Digital Assets
File Pixel Height,externalFileLink/filePixelHeight,The number of pixels along the vertical axis of the image.,External Digital Assets
File Pixel Width,externalFileLink/filePixelWidth,The number of pixels along the horizontal axis of the image.,External Digital Assets
File Playback Rate,externalFileLink/filePlaybackRate,The targeted frame rate for the display of the digital asset. Expressed as an integer representing the number of frames per second.,External Digital Assets
File Print Height,externalFileLink/filePrintHeight,The maximum measurement along the vertical axis of a printed representation of the file.,External Digital Assets
File Print Width,externalFileLink/filePrintWidth,The maximum measurement along the horizontal axis of a printed representation of the file.,External Digital Assets
File Recommended Usage,externalFileLink/fileRecommendedUsageDescription,"A reference to the specific communication project to which the digital asset is associated, such as the Back to School Campaign. A campaign is a marketing term used to describe the event, sale, promotion, or other program for which this digital asset is designed to be part.",External Digital Assets
File Resolution Description,externalFileLink/fileResolutionDescription,The resolution of the file. Knowing the resolution will allow the user to be able to determine the best system with which to utilize the file.,External Digital Assets
File Rights Description,externalFileLink/fileRightsDescription,The structure for Digital Rights Management(DRM) which is in place on the file. This could be ID and location of external Intellectual Property Management & Protection(IPMP) system for lookup of usage rights. Presence of a value for this attribute signifies that the file uses a DRM.,External Digital Assets
File Run Time,externalFileLink/fileRunTime,The playback or running length of time for the digital asset.,External Digital Assets
File Sequence Number,externalFileLink/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",External Digital Assets
File Size,externalFileLink/fileSize,The size of the referenced file.,External Digital Assets
File Story Description,externalFileLink/fileStoryDescription,A description of the storyboard or plot of the digital file.,External Digital Assets
File Talent Description,externalFileLink/fileTalentDescription,"The specific identification of the talent used in the file. For example, many identify a celebrity as the spokesperson for the product as included in the asset.",External Digital Assets
File Usage Restriction,externalFileLink/fileUsageRestriction,A description of any restrictions on the ability of the recipient's to use of the asset.,External Digital Assets
File Version,externalFileLink/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,External Digital Assets
Image Background,externalFileLink/imageBackground,Indicates the background composition of an image.,External Digital Assets
Image Facing,externalFileLink/imageFacing,Indicates the facing of an image.,External Digital Assets
Image Orientation Type Code,externalFileLink/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",External Digital Assets
Image Orientation Type Code,externalFileLink/imageOrientationTypeCode,"The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",External Digital Assets
Image Source,externalFileLink/imageSource,Where's your asset being hosted? Don't see the location you're looking for? Just leave it blank!,External Digital Assets
Image State Code,externalFileLink/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),External Digital Assets
Intended Publication Country,externalFileLink/intendedPublicationCountryCode,The country in which the digital asset is designed to be used.,External Digital Assets
Intended Publication Media Type Description,externalFileLink/intendedPublicationMediaTypeDescription,"The media Types with which the digital asset was designed to be utilized, such as Web, Catalogue, circular among others.",External Digital Assets
Is File Background Transparent,externalFileLink/isFileBackgroundTransparent,An indicator of whether or not the background used in the file is transparent. Having a transparent background would allow a recipient to place the file into any setting necessary.,External Digital Assets
Is File For Internal Use Only,externalFileLink/isFileForInternalUseOnly,An indicator whether or not the file is intended for internal use only and not for general publication.,External Digital Assets
Image Rendered Indicator,externalFileLink/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,External Digital Assets
Is Talent Release on File,externalFileLink/isTalentReleaseOnFile,An indicator whether or not the owner of the asset has a talent release on file. This applies to files where talent or a model is used.,External Digital Assets
Item Depiction Type Code,externalFileLink/itemDepictionTypeCode,The state of the item as it is being depicted in the digital assets for example gift wrapped or assembled.,External Digital Assets
Items in File Description,externalFileLink/itemsInFileDescription,A description of the additional items shown or depicted in the digital asset.,External Digital Assets
Number of Items in Digital Asset,externalFileLink/numberOfItemsInDigitalAsset,"The number of items in the digital asset, where the asset contains more than one item.",External Digital Assets
Digital Asset Primary Indicator,externalFileLink/primaryImage,"The indicator designating the primary digital asset to be used. 

Used by the seller to communicate to the buyer the primary digital asset to be used for display to the consumer.",External Digital Assets
Shared With,externalFileLink/sharedWith,"When blank, you’re sharing with everyone! (Well, anyone this item is syncing with...) Or you can specify which trading partners to share with.",External Digital Assets
Sharing Type,externalFileLink/shareType,"Indicates if image is Public,  or, if Private to specified GLNs in the Shared Recipient list.",External Digital Assets
Title Text,externalFileLink/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",External Digital Assets
Digital Asset Type Code,externalFileLink/typeOfInformation,"Valid value for the type of digital asset that is being referenced. 

Used to identify the type of digital asset that is being referenced.",External Digital Assets
Uniform Resource Identifier,externalFileLink/uniformResourceIdentifier,"The Uniform Resource Locator (URL) for a digital asset, such as a high-resolution product image, which is related to the product. 

Used by the seller to provide images/documents to the buyer via a link to the asset about the product. Used to provide the image of the product to the consumer. Used by the buyer to verify the authenticity of the product content.",External Digital Assets
Vertical Camera Angle Code,externalFileLink/verticalCameraAngleCode,The vertical angle used to photograph an object expressed as a code for example PARALLEL.,External Digital Assets
Average Servings Per Case,averageServingsPerCase,Suggested serving size divided into the overall pack size.,Food and Beverage
Diet Type Description,dietTypeDescription,Free text for indication of diet not stated in the list of diets.,Food and Beverage
Additional Certification Organisation Type Code,foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationTypeCode,Additional Certification Organisation Type Code,Food and Beverage
Additional Certification Organisation Value,foodAndBevDietTypeInfo/additionalCertificationOrganisationIdentifier/AdditionalCertificationOrganisationValue,Additional Certification Organisation Value,Food and Beverage
Certificate Issuance Date Time,foodAndBevDietTypeInfo/certification/certificateIssuanceDateTime,The date and time that a certificate has been issued for a Trade Item.,Food and Beverage
Certification Assessment Date Time,foodAndBevDietTypeInfo/certification/certificationAssessmentDateTime,The date and time that an assessment was performed on a Trade Item that led to a certification.,Food and Beverage
Certification Effective End Date Time,foodAndBevDietTypeInfo/certification/certificationEffectiveEndDateTime,The date and time upon which the certification is no longer effective.,Food and Beverage
Certification Effective Start Date Time,foodAndBevDietTypeInfo/certification/certificationEffectiveStartDateTime,The date and time upon which the certification is effective.,Food and Beverage
Certification Execution Country Code,foodAndBevDietTypeInfo/certification/certificationExecutionCountryCode,The country where the certification is performed.  Use ISO3166_1 Code,Food and Beverage
Certification Identification,foodAndBevDietTypeInfo/certification/certificationIdentification,A reference issued to confirm that something has passed certification.,Food and Beverage
Certification Value,foodAndBevDietTypeInfo/certification/certificationValue,"The unique identification (ID) that provides a trade item's certification standard value, official licensing number or identification which proves that a product/process has passed the certification procedure.",Food and Beverage
Alternate Text,foodAndBevDietTypeInfo/certification/referencedFileInformation/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Food and Beverage
Content Description,foodAndBevDietTypeInfo/certification/referencedFileInformation/contentDescription,Free form description of the content of the file,Food and Beverage
File Creation Program,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileCreationProgram,The program used in the creation of the digital asset.,Food and Beverage
File Effective End Date Time,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileEffectiveEndDateTime,The date upon which the target of this external link ceases to be effective for use.,Food and Beverage
File Effective Start Date Time,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileEffectiveStartDateTime,The date upon which the target of this external link begins to be effective for use.,Food and Beverage
File Format Description,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileFormatDescription,Free form description of the format of the file.,Food and Beverage
File Format Name,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP,Food and Beverage
File Language Code,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileLanguageCode,The specified language to which the digital asset is targeted.,Food and Beverage
File Name,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileName,The name of the file that contains the external information.,Food and Beverage
File Optimal Viewer Name,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileOptimalViewerName,The software to which this file was targeted.,Food and Beverage
File Origin Country,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileOriginCountryCode,The country where the digital asset originated.,Food and Beverage
File Sequence Number,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Food and Beverage
File Version,foodAndBevDietTypeInfo/certification/referencedFileInformation/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Food and Beverage
Image Facing,foodAndBevDietTypeInfo/certification/referencedFileInformation/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Food and Beverage
Image Orientation Type Code,foodAndBevDietTypeInfo/certification/referencedFileInformation/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Food and Beverage
Image State Code,foodAndBevDietTypeInfo/certification/referencedFileInformation/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Food and Beverage
Is Image Rendered,foodAndBevDietTypeInfo/certification/referencedFileInformation/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Food and Beverage
Is Primary File,foodAndBevDietTypeInfo/certification/referencedFileInformation/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Food and Beverage
Referenced File Type Code,foodAndBevDietTypeInfo/certification/referencedFileInformation/referencedFileTypeCode,The type of file that is being referenced for example Safety Data Sheet or Product Image.,Food and Beverage
Title Text,foodAndBevDietTypeInfo/certification/referencedFileInformation/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Food and Beverage
Uniform Resource Identifier,foodAndBevDietTypeInfo/certification/referencedFileInformation/uniformResourceIdentifier,"Simple text string that refers to a resource on the internet, URLs may refer to documents, resources, people, etc.",Food and Beverage
Certification Organisation Identifier,foodAndBevDietTypeInfo/certificationOrganisationIdentifier,The identification of the organization that issued the certificate number confirming that the Trade Item has gone through certification.,Food and Beverage
Certification Standard,foodAndBevDietTypeInfo/certificationStandard,"The name of the certification standard or the type of certification, e.g. product, process, company, packaging or conformity.",Food and Beverage
Certification Agency,foodAndBevDietTypeInfo/dietTypeCertificationAgency,Name of the organization issuing the certification standard or other requirement being met. Free text field. Example: European Union.,Food and Beverage
Dietary Regime Code,foodAndBevDietTypeInfo/dietTypeCode,"Valid Value for the diet which the product is suitable.

Used by the seller to notify buyers and consumers about the dietary regime that a product may belong to. This is not an indication of certification and may not appear on the physical product. It could also be used to market specific products based on dietary regime.",Food and Beverage
Diet Type Subcode,foodAndBevDietTypeInfo/dietTypeSubcode,Indicates a set of agreements or a certificate name that guarantees the product is permitted in a particular diet.,Food and Beverage
Is Certificate Required?,foodAndBevDietTypeInfo/isCertificateRequired,Determines whether a specific certificate is required by regulation or legal property.,Food and Beverage
Is Diet Type Marked On Package?,foodAndBevDietTypeInfo/isDietTypeMarkedOnPackage,Is the diet type specified by dietTypeCode (and sometimes dietTypeSubcode) labelled on the product package?,Food and Beverage
Microbiological Organism Method of Analysis Code,foodAndBevMicrobiological/microbiologicalOrganismMethodOfAnalysisCode,"Method of analysis used to determine quantity of the specified microbiological organism (E.g. probiotic live microbe) in the product. Example: Aerobic plate count, Flow cytometry.",Food and Beverage
Microbiological Organism Minimum Value,foodAndBevMicrobiological/microbiologicalOrganismMinimumValue,The minimum allowable value of the microbiological organism per weight or volume in a specific environment.,Food and Beverage
Organism Code,foodAndBevMicrobiological/organismCode,Code indicating the type of microbiological organism.,Food and Beverage
Organism Maximum Value,foodAndBevMicrobiological/organismMaximumValue,Maximum allowable value of the microbiological organism.,Food and Beverage
Food and Beverage Microbiological Organism Reference Value,foodAndBevMicrobiological/organismReferenceValue,"Reference values give an indication of which product specific ranges of micro organisms are to be expected and which micro organism contents in the appropriate food products are acceptable due to hygiene rules. Per definition this value reflects a microbiological limit which in a 2–class plan, separates good quality from defective quality or in a 3–class plan, separates good quality from marginally acceptable quality.",Food and Beverage
Microbiological Organism Warning Value,foodAndBevMicrobiological/organismWarningValue,"With regard to the audit of the production processes exceeding the microbiological reference limit means, it indicates there are leak points in the production process and the hygienic situation needs to be increased.",Food and Beverage
Convenience Level,foodAndBevPreparationInfo/convenienceLevel,An indication of the ease of preparation for semi-prepared products. The convenience level indicates the level of preparation in percentage required to prepare and helps the consumer to assess how long it will take to prepare the meal. ,Food and Beverage
Is Graded Before Preparation Type Applied,foodAndBevPreparationInfo/isGradedBeforePreparationTypeApplied,An indicator specifying that a product is graded prior to a manufacturer applying a preparation method.,Food and Beverage
Maximum Optimum Consumption Temperature,foodAndBevPreparationInfo/maximumOptimumConsumptionTemperature,The upper limit drinking temperature of the optimum range of the drinking temperature. The optimum range of the drinking temperature is a recommendation and is based on the experience of the individual producer.,Food and Beverage
Minimum Optimum Consumption Temperature,foodAndBevPreparationInfo/minimumOptimumConsumptionTemperature,The lower limit drinking temperature of the optimum range of the drinking temperature. The optimum range of the drinking temperature is a recommendation and is based on the experience of the individual producer.,Food and Beverage
Precautions,foodAndBevPreparationInfo/precautions,Specifies additional precautions to be taken before preparation or consumption of the product.,Food and Beverage
Preparation Instructions,foodAndBevPreparationInfo/preparationInstructions,"The instructions on how to prepare the product for consumption.

Used by the buyer's customer service to answer questions about product preparation. Used by the buyer and the consumer to prepare the product for consumption.",Food and Beverage
Preparation Type Code,foodAndBevPreparationInfo/preparationType,"Valid value for the method used to make the product ready for consumption.

Used to provide one or more options to the consumer on how to prepare the product for consumption. Used by the buyer for search and discovery.",Food and Beverage
Product Yield,foodAndBevPreparationInfo/productYieldInformation/productYield,Product quantity after preparation.,Food and Beverage
Product Yield Type Code,foodAndBevPreparationInfo/productYieldInformation/productYieldTypeCode,Code indicating the type of yield measurement.,Food and Beverage
Product Yield Variation,foodAndBevPreparationInfo/productYieldInformation/productYieldVariationPercentage,Indication of range in percent of the given cooking / roasting loss. Percentage that the actual weight of the trade item differs upward or downward from the average or estimated product yield.,Food and Beverage
Recipe,foodAndBevPreparationInfo/recipe,A description of how the product is used with other ingredients to yield a new result different than the trade item.,Food and Beverage
Serving Suggestion,foodAndBevPreparationInfo/servingSuggestion,"A suggestion about the way the product may be served to enhance the consumer experience.

Used by the buyer to enable search and discovery for the consumer. May be used by the buyer for promotions and marketing.",Food and Beverage
Does Item Have Comparitive Claim?,hasComparativeClaim,"Is there a claim on the label that  compares the total fat, saturated fat, cholesterol, sugar, sodium or salt, energy value or alcohol level of two or more similar foodstuffs?",Food and Beverage
Imitation Or Substitute For,imitationOrSubstituteFor,"The name of the imitated or substitute product. Example: The GTIN product name is Ketchup type sauce, this value would be Ketchup.",Indicators
Ingredient Claim,ingredientClaim,A claim that advertises the lack or presence of ingredients for the purpose of sellability.,Food and Beverage
Is Organism Code Probiotic?,isOrganismCodeProbiotic,To indicate the value of probiotics,Food and Beverage
Is Item Previously Frozen,isTradeItemPreviouslyFrozen,Has the item been frozen and then thawed for subsequent sale?,Food and Beverage
Is Item Wild Caught?,isTradeItemWildCaught,"Misleading descriptions - fish  and  other  marine  foodstuffs  that  are  regulated  in  terms  of  the National Regulator for Compulsory Specifications Act,  2008  (Act 5 of 2008),  the statement ""wild"" shall not be permitted unless  it is qualified as ""wild caught"". ",Food and Beverage
Manufacturer Preparation Type Code,manufacturerPreparationTypeCode,States how the product or a component of the product has been prepared during the manufacturing process,Food and Beverage
Maximum Number Of Smallest Units Per Package,maximumNumberOfSmallestUnitsPerPackage,"The maximum number of the smallest units contained in the package. This attribute is to be used in conjunction with numberOfSmallestUnitsPerPackage in order to enter a minimum and maximum value. For example for a package of meat balls where the smallest units per package could be from 56-60, the maximumNumberOfSmallestUnitsPerPackage would be 60.",Food and Beverage
Servings Per Product Precision Code,measurementPrecisionOfNumberOfServingsPerPackage,"Valid value for whether the specified Servings Per Product is approximate as shown on the product package.

Used to inform the consumer of the precision of the number of servings contained in the product as declared. Used in conjunction with Servings Per Product.",Food and Beverage
Servings Per Product,numberOfServingsPerPackage,"The total number of servings contained in the product as shown on the product package.

Used to inform the consumer of the number of servings. May be used in conjunction with Servings Per Product Precision Code.",Food and Beverage
Range of the Number of Servings,numberOfServingsRangeDescription,"The range of the number of servings in the product as shown on the product package.

Used by the buyer to communicate to the consumer the range of the number of servings per product.  Used by the seller to communicate the number of servings range only when the number of servings is variable. When the number of servings is exact, use Servings Per Product.",Food and Beverage
Number Of Smallest Units Per Package,numberOfSmallestUnitsPerPackage,The total number of smallest units contained in the package. The smallest unit can not be further divided without breaking or slicing the product. Example: 10 pancakes.,Food and Beverage
Percentage Of Moisture Loss,percentageOfMoistureLoss,Percentage of moisture loss after cooking the product.,Food and Beverage
Percentage Of Water Content,percentageOfWaterContent,Percentage of product that is water.,Food and Beverage
PhysioChemical Characteristic Code,physioChemicalProperties/physioChemicalCharacteristicCode,Code indicating the type of physiochemical characteristic. ,Food and Beverage
PhysioChemical Characteristic Value,physioChemicalProperties/physioChemicalCharacteristicValue,Measurement value of the physicochemical characteristic.,Food and Beverage
Preparation Instructions Formatting Pattern,preparationInstructionsFormattingPattern,The formatting pattern of text for preparation instructions to denote a paragraph breaks. It will be up to the recipient to determine the formatting style they will use.,Food and Beverage
Amazon A+ Product History,productHistory,A brief history about the product which will provide the consumer some perspective about the product,Food and Beverage
Product Textural Characteristics,productPreparationTextureInformation/productTexturalCharacteristics,"The code for the agency which maintains the food and drinks texture or thickness code list. For example, International Dysphagia Diet Standardisation Initiative (IDSSI)",Food and Beverage
Product Texture Agency Code,productPreparationTextureInformation/productTextureAgencyCode,Statement by the brand owner as noted on the product packaging to describe and confirm the flow or textural characteristics of a particular product at the time of testing.,Food and Beverage
Product Texture Code,productPreparationTextureInformation/productTextureCode,Specify the texture or thickness of the contained product as a code.,Food and Beverage
Product Serving Size,productServingSize,"Acc. to § 5 (2) ""Nutrition labeling regulations for foodstuffs"" nutritional values can be given additionally per serving that is quantitatively fixed on the label or per serving, as far as the number of covered servings is indicated on the packaging once prepared, serving size = unprepared",Food and Beverage
Recycling Information,recyclingInformation,Label instruction on how to recycle the item,Food and Beverage
serving Size Gram Weight,servingSizeGramWeight,"The gram weight for the recommended serving size.  Serving sizes are typically expresed on the package in units meaningful to the consumer, such as 1 bag, or 3 pieces, this value is the equivalent weight value in grams.",Food and Beverage
Serving Size Weight,servingSizeWeight,The gram weight for the recommended serving size. ,Food and Beverage
Servings Per Package,servingsPerPackage,"The total number of servings contained in the package. This is an integer denoting the servings, however according to FDA/USDA labeling regulations, the value can contain provide half servings between 1 and 6 servings. For example the value can be 2.5, but can not be 10.5.",Food and Beverage
Special Occasion,specialOccasion,"The particular target time, event, or holiday for the product.",Food and Beverage
Suggested Serving Size,suggestedServingSize,Consumable serving size suggested by manufacturer.,Food and Beverage
Brand Owner Additional Trade Item Identification Type,brandOwnerAdditionalTradeItemIdentification/brandOwnerAdditionalIdType,Code used to identify additional brand owner identification value.,Global
Brand Owner Additional Trade Item Identification Value,brandOwnerAdditionalTradeItemIdentification/brandOwnerAdditionalIdValue,Number used to identify the brand owner when not using GLN. May or may not be the same entity as the information provider.,Global
Brand Owner Address,brandOwnerAddress,The address of the organization that owns the specifications of the product regardless of where and by whom it is manufactured is normally responsible for the allocation of the Global Trade Item Number (GTIN).,Global
Brand Owner GLN,brandOwnerGLN,"The Global Location Number (GLN) used to identify the organization that owns the brand (BO GLN).

Used by the seller to communicate the GLN of the brand owner to the buyer. It allows the buyer to identify the Brand Owner. Used by the buyer for internal validation and to support some B2B processes.",Global
Brand Owner Name,brandOwnerName,The name used to identify the organization that owns the brand.,Global
Global Product Category Code,globalClassificationCategory/code,"Valid value used to group products based on similar characteristics according to the GS1 Global Product Classification (GPC).

Used for multiple use cases such as data quality, category management, space management and workflow routing.",Global
GPC Description,globalClassificationCategory/name,GPC Description,Global
Global Product Category Attribute Type Code,gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttribute,Valid value identifying the attribute of a particular product category from GS1 Global Product Classification (GPC).,Global
various brick attribute definitions,gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeDef,The GS1 provided definition of the Global Product Classification Attribute Code.,Global
GPC Brick Attribute Name,gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeName,Not UI field. Hub only.,Global
Global Product Category Attribute Value Code,gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeValue,Valid value for the value of a brick attribute identified in Global Product Category Attribute Type Code providing the most granular level of detail about a particular product category.,Global
GPC Brick Attribute Value Name,gpcBrickAttributes/gpcBrickAttributeValues/gpcBrickAttributeValueName,Not UI field. Hub only.,Global
GPC Brick Code,gpcBrickAttributes/gpcBrickCode,Not UI field. Hub only.,Global
Information Provider GLN,informationProviderGLN,"Populate this field with the GLN of the entity responsible for the validity of the item information entered into 1WorldSync Item Management. The original manufacturer, importer, distributor, retailer, or designated agent. IP Name will default in the GUI as a result of the GLN provided.",Global
Information Provider Name,"informationProviderName
(Data Recipient 1WorldSync XML Only)",Name of the party who provides the trade item information to Transora Item Management.,Global
Display Unit Indicator,isTradeItemADisplayUnit,"Indicator a trade item can be used as a display.

Used by the buyer for promotional planning and logistics. Used for shelf planning and reduces stocking time.",Global
Is Trade Item a Service?,isTradeItemAService,"An indicator that the trade item is a service and not a physical item for example a receipt that can be used for upgrading a pre-paid phone balance, an entrance ticket to an amusement park, sporting event, theatre, service maintenance, installation service, repairs.",Global
Is Trade Item Non Physical?,IsTradeItemNonPhysical,An indicator that the trade item is not a physical item and as such has no dimensional manifestation.,Global
Irregularly Configured Pallet Indicator,isTradeItemPackedIrregularly,"The indicator specifying that a pallet does not have a consistent numbers of items per layer configuration of items across layers.

Used by the buyer in the calculation of the number of units per layer and number of layers per pallet.",Hierarchy Info
Product Form Description,productForm,"The physical form or shape of the product.

Used to inform the buyer and/or consumer about the shape or form of the product.",Global
Product Type,productType,"Choose the Product Type that best describes the hierarchy level of your item. 

Used to communicate how the product hierarchy is constructed. A common three-tier hierarchy (from largest to smallest) is Pallet, Case, Each.",Global
Composition Depth,tradeItemCompositionDepth,"The number of child-items that are packaged from front to back in a trade unit. This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf.",Global
Composition Width,tradeItemCompositionWidth,"The number of child-items that are packaged beside each other in a trade unit (on the side facing the consumer). This information is used in the space process, especially when allocating whole Trade Units (intermediate) into the shelf. The Space Manager always allocates Base Units in the shelf. Usually there are no pictures of Trade Units available and for Hypermarkets/Big Supermarkets there is a need to allocate whole trade units into the shelves.",Global
Genetically Modified Organism,gs1FinlandGeneticallyModifiedOrganism,Description of the genetically modified organism which causes the product to be classified as being or containing a GMO.,Processing
Clamp Pressure,clampPressure,The pressure that should be applied by a clamp to the packaging around the product. The clamp pressure is the only pressure value to be applied and there are no minimum or maximum values.,Handling and Storage
Has Auto Reader Tracker?,doesTradeItemHaveAutoReaderTracker,Indication that the trade item has a device that identifies that the product has a limited number of reuses and is self tracked.,Handling and Storage
Flooring Material,flooringMaterial,"Terms to denote the material from which the item's floor is made, where the item has a floor. For example, if a storage shed has a floor made out of plywood.",Handling and Storage
Handling Instruction,handlingInstruction,Handling Instructions,Handling and Storage
Product Handling Code,handlingInstructions/handlingInstructionCode,"Valid value for the information and processes needed to safely handle the product.

Used to inform the transporter, buyer and consumer of proper handling of the product.",Handling and Storage
Handling Instructions Code Agency,handlingInstructions/handlingInstructionCodeAgency,An agency that maintains the handling instructions code. NOTE: This attribute is intended to be used with the handling instructions code.,Handling and Storage
Handling Instructions Description,handlingInstructionsDescription,Information and processes needed to safely handle the trade item. Intended to be sent when handling Instructions Code and agency have not been provided.,Handling and Storage
Is Fragile,isFragile,Indicator to denote the product is fragile and should be handed with care.,Handling and Storage
Is Temperature Sensitive?,isTemperatureSensitive,Indicates that the item is prone to freezing or melting that may adversely affect it.,Handling and Storage
Usage Period After Opening,itemPeriodSafeToUseAfterOpening,"The period after opening where the product is still safe to be used by the consumer.

Used by the seller to communicate to the buyer and consumer the useful lifetime of a product after a package has been opened for the first time.",Handling and Storage
Minimum Trade Item Days In Warehouse,minimumTradeItemDaysInWarehouse,Number of days the product can stay warehoused.,Handling and Storage
Minimum Days of Shelf Life at Arrival,minimumTradeItemLifespanFromArrival,"The seller's determination of the minimum number of calendar days of shelf life of the product, based upon the expiration date on the product, upon receipt by the buyer. Minimum Days of Shelf Life at Arrival may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used by the buyer for quality and inventory control workflows/business processes.",Handling and Storage
Minimum Days of Shelf Life from Production,minimumTradeItemLifespanFromProduction,"The seller's determination of the minimum number of calendar days from the production date to the expiration date. Minimum Days of Shelf Life from Production may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used by the buyer for quality and inventory control workflows/business processes.",Handling and Storage
Must Trade Item Be Chilled,mustTradeItemBeChilled,Indicator of a compulsory refrigeration for the product.,Handling and Storage
Opened Trade Item Lifespan (Days),openedTradeItemLifespan,"The number of days that a trade item can remain on the shelf after it has been opened, before it must then be removed. The number of days is counted from the date of manufacture. The number of days determined in the ""must sell by date"" is applicable to the each level. When the master item is received it has an ultimate shelf life number of days on it. For example, the ultimate number of days for a ham is 180. The manufacturer advises the retailer that once it's open the item is good for 7 days. That 7 days is used to create the label for the consumer. When the consumer buys some of the ham, the label will have the best before date which is based on the 7 days.",Handling and Storage
Special Handling Code - Transportation,specialHandlingCodeTransportation,Specifies special transportation handling instructions.,Handling and Storage
Supplier Specified Minimum Consumer Storage Days,supplierSpecifiedMinimumConsumerStorageDays,"The product life in number of days, which the manufacturer recommends the retailer gives the consumer before the use by date. Difference in days between product's ""sell by date"" and it's ""use by date.""",Handling and Storage
Minimum Temperature Setting,temperatureSettings/minimumTemperatureSetting,Measurement to denote the lower temperature limit or capability of an item such as a thermometer or chillers.,Handling and Storage
Cumulative Humidity Interruption Acceptable Time Span,tradeItemHumidityInformation/cumulativeHumidityInterruptionAcceptableTimeSpan,An expression of the maximum allowed cumulative time span of one or more humidity interruptions of a trade item as defined by the manufacturer.,Handling and Storage
Cumulative Humidity Interruption Acceptable Time Span Instructions,tradeItemHumidityInformation/cumulativeHumidityInterruptionAcceptableTimeSpanInstructions,"Instructions provided by the product manufacturer regarding the process, procedures, or handling instructions for trade items that has exceeded the cumulative time span of humidity interruptions.",Handling and Storage
Drop below Min Humidity Acceptable Time Span,tradeItemHumidityInformation/dropBelowMinimumHumidityAcceptableTimeSpan,The amount of time that a product can fall below the minimum humidity threshold as defined by the manufacturer without affecting product safety or quality.,Handling and Storage
Humidity Qualifier Code,tradeItemHumidityInformation/humidityQualifierCode,Code qualifying the type of a temperature for example STORAGE.,Handling and Storage
Max Humidity Acceptable Time Span,tradeItemHumidityInformation/maximumHumidityAcceptableTimeSpan,The amount of time that a product can safely rise above the maximum humidity threshold as defined by the manufacturer without affecting product safety or quality.,Handling and Storage
Maximum Humidity Percentage,tradeItemHumidityInformation/maximumHumidityPercentage,The maximum humidity in percentages that the goods should be stored in.,Handling and Storage
Minimum Humidity Percentage,tradeItemHumidityInformation/minimumHumidityPercentage,The minimum humidity in percentages that the goods should be stored in.,Handling and Storage
Stacking Factor,tradeItemStacking/stackingFactor,"The maximum number of levels for a specific unit that can exist in a stack without impacting the quality of the product. A value of 1 means that the item cannot be stacked.

Used in conjunction with the Stacking Factor Type Code for storing or transporting the product without impacting the quality of the product.",Handling and Storage
Stacking Factor Type Code,tradeItemStacking/stackingFactorTypeCode,"Valid value for the storage or type of transportation to which the Stacking Factor applies.

Used to communicate the Stacking Factor Type Code by supply chain process.",Handling and Storage
Stacking Pattern Type Code,tradeItemStacking/stackingPatternTypeCode,"Indicates the pattern the product is stacked on a logistics unit, for example column pattern or interlocking pattern.",Handling and Storage
Stacking Weight Maximum,tradeItemStacking/stackingWeightMaximum,The maximum admissible weight that can be stacked on the trade item.,Handling and Storage
Product Temperature Condition Code,tradeItemTemperatureConditionTypeCode,"Valid value to identify the state of the product when purchased by the consumer.

Used to communicate to the consumer the condition of the product when purchased.",Handling and Storage
Cumulative Temperature Interruption Acceptable Time Span,tradeItemTemperatureInformation/cumulativeTemperatureInterruptionAcceptableTimeSpan,An expression of the maximum allowed cumulative time span of one or more temperature interruptions of a trade item as defined by the manufacturer.,Handling and Storage
Cumulative Temperature Interruption Acceptable Time Span Instructions,tradeItemTemperatureInformation/cumulativeTemperatureInterruptionAcceptableTimeSpanInstructions,"Instructions provided by the product manufacturer regarding the process, procedures, or handling instructions for trade items that has exceeded the cumulative time span of temperature interruptions.",Handling and Storage
Drop below Min Temp Acceptable Time Span,tradeItemTemperatureInformation/dropBelowMinimumTemperatureAcceptableTimeSpan,The amount of time that a product can drop below the minimum temperature threshold during storage as defined by the manufacturer without affecting product safety or quality.,Handling and Storage
Labelled temperature,tradeItemTemperatureInformation/labelledTemperature,"The temperature(s) that is/are labelled on the trade item to help the consumer understand the temperatures for which the product can be used, e.g. the washing temperature(s) for a detergent.",Handling and Storage
Maximum Environment Atmospheric Pressure,tradeItemTemperatureInformation/maximumEnvironmentAtmosphericPressure,The maximum atmospheric pressure in which the item remains usable. This value is the value above which the trade item should not be subjected.,Handling and Storage
Maximum Temperature,tradeItemTemperatureInformation/maximumTemperature,"The maximum temperature that a product can not exceed during an activity as defined by the manufacturer without affecting product safety, quality and/or usage.

Used to communicate to the buyer or consumer the maximum temperature for quality and safety for a specific activity in conjunction with Temperature Activity Code.",Handling and Storage
Max Temp Acceptable Time Span,tradeItemTemperatureInformation/maximumTemperatureAcceptableTimeSpan,The amount of time that a product can safely rise above the maximum temperature threshold during storage as defined by the manufacturer without affecting product safety or quality.,Handling and Storage
Max Tolerance Temp,tradeItemTemperatureInformation/maximumToleranceTemperature,The maximum temperature at which the item is still usable. The tolerated temperature indicates that the temperature of the trade item should never rise above the maximum temperature.,Handling and Storage
Minimum Environment Atmospheric Pressure,tradeItemTemperatureInformation/minimumEnvironmentAtmosphericPressure,The minimum atmospheric pressure in which the item remains usable. This value is the value below which the trade item should not be subjected.,Handling and Storage
Minimum Temperature,tradeItemTemperatureInformation/minimumTemperature,"The minimum temperature that a product can not go below during an activity as defined by the manufacturer without affecting product safety, quality and/or usage.

Used to communicate to the buyer or consumer the minimum temperature for quality and safety for a specific activity in conjunction with Temperature Activity Code.",Handling and Storage
Min Tolerance Temp,tradeItemTemperatureInformation/minimumToleranceTemperature,The minimum temperature at which the item is still usable. The tolerated temperature indicates that the temperature of the trade item should never fall below the minimum temperature.,Handling and Storage
Temperature Activity Code,tradeItemTemperatureInformation/temperatureQualifierCode,"Valid value for the activity for which the maximum and minimum temperatures are applicable.

Used to define/communicate the activity for which the min/max temperatures apply.",Handling and Storage
Item Name,gtinName,"Keep it simple! 
Leverage Item Name to quickly navigate and recognize your item.
This field is intended for your internal benefit.",Hidden
Base Units Per Pallet,baseUnitsPerPallet,The total number of base units contained on the pallet.,Hierarchy Info
GTIN Of Base Unit,gTINOfBaseUnit,A reference to the GTIN of the lowest level of product contained within this product's family hierarchy.,Hierarchy Info
Number of Layers per GTIN/GTIN Pallet Hi,hi,"The number of complete layers in the logistic unit identified by a GTIN, such as a pallet.",Hierarchy Info
Inner Pack,innerPack,Indicates the number of non-GTIN assigned inner-packs of next lower level trade items within the current GTIN level.,Hierarchy Info
Is Non-GTIN Logistic Unit Packed Irregularly?,isNonGTINLogisticUnitPackedIrregularly,Indicates that the item is packed in a non-rectilinear pattern. ,Hierarchy Info
Layer Height,layerHeight,Indicates the measurement of height of the layer when trade items are packed with layers. The layer height is necessary when the cases are loaded on the pallet lying on the side instead of standing up.,Hierarchy Info
Non GTIN Pallet Depth,nonGTINPalletDepth,The depth of the pallet load of goods.,Hierarchy Info
Non GTIN Pallet Depth UOM,nonGTINPalletDepthUOM,The unit of measurement associated with the non GTIN pallet depth.,Hierarchy Info
Non-GTIN Logistic Unit Gross Weight,nonGTINPalletGrossWeight,"For a logistic unit not identified with a GTIN, the total weight (with its unit of measure) of the product including the weight of all its packaging materials.

Used by the seller and the buyer to manage logistics, storage, safety limitations and truckload optimization.",Hierarchy Info
Non-GTIN Logistic Unit Height,nonGTINPalletHeight,"For a logistic unit not identified with a GTIN, the vertical measurement (with its unit of measure) of the logistic unit according to the GS1 Package Measurement Rules (https://www.gs1.org/docs/gdsn/3.1/GS1_Package_Measurement_Rules.pdf).

Used to fill or optimize truckloads when shipping in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Depth. Used to determine the space in a storage facility in conjunction with Non-GTIN Logistic Unit Width and Non-GTIN Logistic Unit Depth.",Hierarchy Info
Number of Layers per non-GTIN Pallet/Non GTIN Pallet Hi,nonGTINPalletHi,"The number of complete layers in the pallet not identified by a GTIN. Only used if the pallet has no GTIN. 

Used by the seller to communicate to the buyer the number of layers in a logistic unit, such as a pallet. The buyer uses this information for automation of the picking and stacking process in the warehouse.",Hierarchy Info
Non GTIN Pallet Net Weight,nonGTINPalletNetWeight,"Net weight of the pallet load of goods. The net weight includes the total weight of the contents of the pallet, but excludes the actual pallet itself.",Hierarchy Info
Non GTIN Pallet Net Weight UOM,nonGTINPalletNetWeightUOM,The unit of measurement associated with the non GTIN pallet net weight.,Hierarchy Info
Number of Units per Layer in a non-GTIN Pallet/Non GTIN Pallet Ti,nonGTINPalletTi,"The number of units in a complete single layer in a pallet not identified by a GTIN. Only used if the pallet has no GTIN. It indicates the number of trade items placed on a pallet layer according to supplier or retailer preferences.

Used by the seller to communicate to the buyer the number of units in a layer in a logistic unit, such as a pallet. The buyer uses this information for automation of the picking and stacking process in the warehouse.",Hierarchy Info
Non GTIN Pallet Volume,nonGTINPalletVolume,The cube or volume of the pallet load of goods in cubic metres.,Hierarchy Info
Non GTIN Pallet Volume UOM,nonGTINPalletVolumeUOM,The unit of measurement associated with the non GTIN pallet volume.,Hierarchy Info
Non GTIN Pallet Width,nonGTINPalletWidth,The width of the pallet load of goods. The width side of the pallet is the side with the forklift arm openings.,Hierarchy Info
Non GTIN Pallet Width UOM,nonGTINPalletWidthUOM,The unit of measurement associated with the non GTIN pallet width.,Hierarchy Info
Number Of Base Units,numberOfBaseUnits,The number of base unit (lowest level) products contained within this product.,Hierarchy Info
Count of This Specific Item in a Non-GTIN Logistic Unit/NonGTIN Pallet Quantity,numberOfItemsPerPallet,"For a logistic unit (specifically a pallet) not identified with a GTIN, the count of trade items contained in the pallet. Number of Items/Pallet may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.",Hierarchy Info
Piece Count,pieceCount,"The number of small pieces, slices, or different items within the product. Piece Count applies to things such as puzzles, building block sets, and products that contain multiple different items (such as tool sets, dinnerware sets, gift baskets, art sets, makeup kits, or shaving kits). EXAMPLE: (1) A 500-piece puzzle has a &quot;Piece Count&quot; of 500. (2) A 105-Piece Socket Wrench set has a piece count of &quot;105.&quot; (3) A gift basket of 5 different items has a &quot;Piece Count&quot; of 5.",Hierarchy Info
Quantity of Next Level GTIN within Inner Pack,quantityOfNextLevelWithinInnerPack,Indicates the number of next lower level trade items contained within the physical non-GTIN assigned each or inner-packs (inner-pack).,Hierarchy Info
Suggested Consumer Pack,suggestedConsumerPack,The pack quantity of an item which aligns to the suggested consumer pack.,Hierarchy Info
Number of Units per Layer in a GTIN/GTIN Pallet Ti,ti,"The number of units in a complete layer in a logistic unit identified by a GTIN, such as a pallet.",Hierarchy Info
Total Count of All Products,totalQuantityOfNextLowerTradeItem,"The total count of all products within this item. For example, a Case of 12 Jars (or Eaches) would have a Quantity of Next Level Item(s) of 12. As for the Jar (or the Each), Quantity of Next Level Item would be 1.

Used by a buyer and/or consumer to understand what type of product they are receiving; also used for inventory/warehouse management.",Hierarchy Info
Total Units Per Case,totalUnitsPerCase,This attribute provides a vehicle for communicating the total subunits contained within a case.,Hierarchy Info
Units In Depth Of Layer,unitsInDepthOfLayer,"Number of Next Lower Level units of a product or package, which make up the depth of a layer in the package.",Hierarchy Info
Units In Width Of Layer,unitsInWidthOfLayer,"Number of Next Lower Level units of a product or package, which make up the width of a layer in the package.",Hierarchy Info
Units Per Consumer Unit,unitsPerConsumerUnit,This attribute provides a vehicle for communicating subunits contained within a consumer unit.,Hierarchy Info
Units Per Package,unitsPerPackage,The number of units in the current level of packaging.,Hierarchy Info
Units Per Trade Item,unitsPerTradeItem,Numeric value to indicate number of physical pieces used to make up the Consumer Unit. Used if there is more than one piece in one Trade Item.,Hierarchy Info
Additional Property Code,alternateClassification/additionalProperty/additionalPropertyCode,Code assigned to a property of product for a classification.,Identification
Additional Property Description,alternateClassification/additionalProperty/additionalPropertyDescription,A description of a property of product for a specific classification. for example Waterproof.,Identification
Property Amount,alternateClassification/additionalProperty/propertyAmount,A property of a classification of an item expressed as an amount (value and currency).,Identification
Property Code,alternateClassification/additionalProperty/propertyCode,A property of a classification of an item expressed as a code.,Identification
Property Code Agency Code,alternateClassification/additionalProperty/propertyCodeAgencyCode,Property Code Agency Code,Identification
Property Code Description,alternateClassification/additionalProperty/propertyCodeDescription,Property Code Description,Identification
Property Code List Version,alternateClassification/additionalProperty/propertyCodeListVersion,Property CodeList Version,Identification
Property DateTime,alternateClassification/additionalProperty/propertyDateTime,A property of a classification of an item expressed as a date and time.,Identification
Property Description,alternateClassification/additionalProperty/propertyDescription,A property of a classification of an item expressed as a description.,Identification
Property Float,alternateClassification/additionalProperty/propertyFloat,A property of a classification of an item expressed as a float for example 0.00.,Identification
Property Integer,alternateClassification/additionalProperty/propertyInteger,A property of a classification of an item expressed as an integer.,Identification
Property Measurement,alternateClassification/additionalProperty/propertyMeasurement,A property of a classification of an item expressed as a measurement.,Identification
Property String,alternateClassification/additionalProperty/propertyString,A property of a classification of an item expressed as text.,Identification
Code,alternateClassification/code,"A value, other than the Global Product Category Code (GPC or Brick Code), which classifies the product, based on the Scheme.

Used for product classification that allows a buyer to classify a product by other classification systems. Used for multiple use cases such as data quality, category management, space management, workflow routing. 

Used in conjunction with Scheme.",Identification
Description,alternateClassification/description,This is the system-generated description of the alternate classification code selected.,Identification
Scheme,alternateClassification/scheme,"Valid value for the type of additional product classification, Code, used.

Used to declare the type of the additional product classification that allows a buyer to know which classification system is used. Used in conjunction with Code.",Identification
Sequence Number,alternateClassification/sequenceNumber,A sequence number indicating the order number of the group of properties belonging together.,Identification
Version,alternateClassification/version,The identification of a release of a particular product classification.,Identification
Alternate Item Identification Agency,alternateItemIdentification/agency,"Valid value to specify the type of identifier, usually associated with a specific business need, that is in addition to the GTIN, for example, a buyer's or seller's item or model number. 

Used to declare the type of the additional product identification that allows a buyer to know which identification system is used. Used in conjunction with Alternate Item Identification ID.",Identification
Alternate Item Identification Id,alternateItemIdentification/id,"An identifier, usually associated with a specific business need, that is in addition to the GTIN, for example, a buyer's or seller's item or model number. 

Used to allow a buyer to identify a product by other identification systems. Used in conjunction with Alternate Item Identification Agency.",Identification
Brand Owner Language Specific Party Name,brandOwnerLanguageSpecificPartyName,The recognizable party name used by a supplier to uniquely identify the name of the party in a different language than the primary party name (partyName).,Identification
City,brandOwnerStructuredAddress/city,Text specifying the name of the city.,Identification
Complement Address,brandOwnerStructuredAddress/complementAddress,"The complement address expressed as a free form text. The complement address is printed on paper as additional lines below the street address. For example, an industrial zone or apartment number. Required in case the PD Organisation link is provided (Product Designer Link relates to an Organisation).",Identification
Country Code,brandOwnerStructuredAddress/countryCode,Code specifying the country for the address.,Identification
PO Box,brandOwnerStructuredAddress/poBox,The post office box for the contact. ,Identification
Postal Code,brandOwnerStructuredAddress/postalCode,Text specifying the postal code for an address.,Identification
Province State Code,brandOwnerStructuredAddress/provinceStateCode,A code specifying a province or state in abbreviated format for example NJ.,Identification
Street Address,brandOwnerStructuredAddress/streetAddress,"The street address expressed as free form text. The street address is printed on paper as the first lines below the name. Some trading partners require the street address to be the street name and number in this attribute. Others require this attribute to be just the street name. In this case, the street number should be provided separately in the street number attribute, if required.",Identification
Street Number,brandOwnerStructuredAddress/streetNumber,The street number portion of the street address for the contact. ,Identification
Consumer Support Number,consumerSupportNumber,The toll free support phone number(s) for the product/category.,Identification
Application Identifier Type Code,dataCarrier/applicationIdentifierTypeCode,"Indication of which Application Identifier's (AI) presence is indicated for example 10 (batch number),15 (best-before-date),17 (expiry date), 310(n) (net weight in kilogram).",Identification
Data Carrier Family Type Code,dataCarrier/dataCarrierFamilyTypeCode,A high-level grouping of data carriers for example GS1 Data Bar.,Identification
Data Carrier Presence Code,dataCarrier/dataCarrierPresenceCode,"Code list that identifies if a product represented with this GTIN has the potential to be recieved with an RFID tag attached. Acceptable values are sometimes, always, or never.",Identification
Data Carrier Type Code,dataCarrier/dataCarrierTypeCode,"The type of data carrier (Barcode or EPC tag) physically present on the trade item. Example: UPC A, ITF 14, GS1 128, EPC Enabled RFID Tag, NO BARCODE.",Identification
GHS Classification Statement,gHSClassificationStatement,"In the case of a substance or mixture, the classification which arises from the application of the classification rules. Where the supplier has notified information regarding the substance or mixture to the classification and labelling inventory.",Identification
Communication Channel Code,globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/communicationChannelCode,"Code specifying the type of communication channel, for example TELEPHONE.",Identification
Communication Channel Name,globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/communicationChannelName,"The name of a specific communication channel for example Facebook, Twitter, etc.",Identification
Communication Value,globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/communicationValue,"Text identifying the endpoint for the communication channel, for example a telephone number or an e-mail address.",Identification
Is Communication Channel Preferred?,globalModelInformation/globalModelContactInformation/afterHoursCommunicationChannel/isCommunicationChannelPreferred,To show whether this is the preferred contact method by the supplier when there is more than one means of contact.,Identification
Contact Type Code,globalModelInformation/globalModelContactInformation/contactTypeCode,A code determining the role of the contact for example Dangerous Goods 24 Hour Contact.,Identification
Department Name,globalModelInformation/globalModelContactInformation/departmentName,The name of the department that can be contacted to provide additional information,Identification
Job Title,globalModelInformation/globalModelContactInformation/jobTitle,The job title of the person that can be contacted,Identification
Person Name,globalModelInformation/globalModelContactInformation/personName,The name of the individual that can be contacted to provide additional information,Identification
Responsibility,globalModelInformation/globalModelContactInformation/responsibility,Text further specifying the area of responsibility of the trade contact,Identification
Global Model Description,globalModelInformation/globalModelDescription,The description of the base model. May deviate from the description of Trade Items derived from this model.,Identification
Global Model Number,globalModelInformation/globalModelNumber,"Text to denote the GS1 Global Model Number (GMN) which is the GS1 identification key used to identify a product model or product family based on attributes common to the model or family as defined by industry or regulation. This GS1 identification key, once assigned to one product model or product family, SHALL NOT be reissued to another. The GMN SHALL NOT be used to identify a trade item.",Identification
Global Model Regulatory Act,globalModelInformation/globalModelRegulatoryInformation/globalModelRegulatoryAct,The regulatory act that the Global Model Number is aligned to.,Identification
Country Code,globalModelInformation/globalModelRegulatoryInformation/globalModelRegulatoryActCountry/countryCode,Code specifying a country.,Identification
Country Subdivision Code,globalModelInformation/globalModelRegulatoryInformation/globalModelRegulatoryActCountry/countrySubdivisionCode,Code specifying a country subdivision.,Identification
GTIN for Point of Sale Type Code,gs1TradeItemIdentificationKey/code,"Valid value used to communicate the type of GTIN for scanning at point of sale.

Used to identify the type of GTIN that will be used for the product at point of sale. Used in conjunction with GTIN for Point of Sale",Identification
Is Bar Code On Packaging Variable Measure Bar Code?,gs1TradeItemIdentificationKey/isBarCodeOnPkgVariableMeasureBarCode,An indicator that signals the bar code carries a variable measure trade item identification scheme (EAN/UCC-13 data structure with EAN/UCC Prefix 2n or UCC-12 data structure with UCC Prefix 2).,Identification
Is Barcode Symbology Derivable?,gs1TradeItemIdentificationKey/isBarcodeSymbologyDerivable,A boolean field determining that the data structure on the trade item can be derived from the GTIN.,Identification
GTIN for Point of Sale,gs1TradeItemIdentificationKey/value,"The GTIN value used at point of sale.

Used to identify the GTIN value that will be used for the product at point of sale. Used in conjunction with GTIN for Point of Sale Type Code",Identification
Information Provider Additional Trade Item Identification Type,informationProviderAdditionalTradeItemIdentification/informationProviderAdditionalIdType,Alternative means to the Global Trade Item Number to identify a trade item. ,Identification
Information Provider Additional Trade Item Identification Value,informationProviderAdditionalTradeItemIdentification/informationProviderAdditionalIdValue,Type of the identification system that is being used as an alternative to the Global Trade Item Number.,Identification
Information Provider Address,informationProviderAddress,The address associated with the party. This could be the full company address.,Identification
Information Provider Language Specific Party Name,informationProviderLanguageSpecificPartyName,The recognisable party name used by a supplier to uniquely identify the name of the party in a different language than the primary party name (partyName).,Identification
City,informationProviderStructuredAddress/city,Text specifying the name of the city.,Identification
Complement Address,informationProviderStructuredAddress/complementAddress,"The complement address expressed as a free form text. The complement address is printed on paper as additional lines below the street address. For example, an industrial zone or apartment number. Required in case the PD Organisation link is provided (Product Designer Link relates to an Organisation).",Identification
Country Code,informationProviderStructuredAddress/countryCode,Code specifying the country for the address.,Identification
PO Box,informationProviderStructuredAddress/poBox,The post office box for the contact. ,Identification
Postal Code,informationProviderStructuredAddress/postalCode,Text specifying the postal code for an address.,Identification
Province State Code,informationProviderStructuredAddress/provinceStateCode,A code specifying a province or state in abbreviated format for example NJ.,Identification
Street Address,informationProviderStructuredAddress/streetAddress,"The street address expressed as free form text. The street address is printed on paper as the first lines below the name. Some trading partners require the street address to be the street name and number in this attribute. Others require this attribute to be just the street name. In this case, the street number should be provided separately in the street number attribute, if required.",Identification
Street Number,informationProviderStructuredAddress/streetNumber,The street number portion of the street address for the contact. ,Identification
Item Industry Validation Alibaba,itemIndustryValidationAlibaba,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Automotive,itemIndustryValidationAutomotive,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Coles ,itemIndustryValidationColes,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Liquor ,itemIndustryValidationColesLiquor,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Food Services,itemIndustryValidationFoodServices,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Grocery NZ,itemIndustryValidationGroceryNZ,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Hardware AU ,itemIndustryValidationHardwareAU,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Health AU ,itemIndustryValidationHealthAU,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Health NZ,itemIndustryValidationHealthNZ,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation TMNZ,itemIndustryValidationITMNZ,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Liquor ,itemIndustryValidationLiquor,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation  M10NZ,itemIndustryValidationM10NZ,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Metcash ,itemIndustryValidationMetcash,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Officemax ,itemIndustryValidationOfficemax,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation office Supplies,itemIndustryValidationOfficeSupplies,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation  Pharmacy,itemIndustryValidationPharmacy,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Product Flow NZ,itemIndustryValidationProductFlowNZ,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Sigma ,itemIndustryValidationSigma,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation  Smartmedia ,itemIndustryValidationSmartmedia,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Southern Cross Hospitals,itemIndustryValidationSouthernCrossHospitals,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation SP Health,itemIndustryValidationSPHealth,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation The Distributors,itemIndustryValidationTheDistributors,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation Woolworths,itemIndustryValidationWoolworths,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Item Industry Validation WSL,itemIndustryValidationWSL,IMPORTANT: Please contact GS1AU before using this field. A flag to specify the industry the GTIN is intended for. Only to be used by suppliers providing data to multiple industries.,Identification
Manufacturer Additional ID Type,manufacturer/AdditionalTradeItemIdentification/manufacturerAdditionalIdType,Manufacturer Additional ID Type,Identification
Manufacturer Additional ID Value,manufacturer/AdditionalTradeItemIdentification/manufacturerAdditionalIdValue,Manufacturer Additional ID Value,Identification
Manufacturer Address,manufacturer/address,The address associated with the manufacturer.,Identification
Manufacturer GLN,manufacturer/gln,"The Global Location Number (GLN) that uniquely identifies the party who owns the manufacturing process of the product (Manufacturer GLN) .

Used by the seller to communicate the GLN of the owner of the manufacturing process to the buyer. It allows the buyer to identify the owner of the manufacturing process. Used by the buyer for internal validation and to support some B2B processes.",Identification
Information Provider Language Specific Party Name,manufacturer/languageSpecificPartyName,The recognizable party name used by a supplier to uniquely identify the name of the party in a different language than the primary party name (partyName).,Identification
Manufacturer Name,manufacturer/name,"The name used to uniquely identify the party who owns the manufacturing process of the product (Manufacturer Name).

Used to identify the name of the owner of the manufacturing process.",Identification
City,manufacturer/structuredAddress/city,Text specifying the name of the city.,Identification
Complement Address,manufacturer/structuredAddress/complementAddress,"The complement address expressed as a free form text. The complement address is printed on paper as additional lines below the street address. For example, an industrial zone or apartment number. Required in case the PD Organisation link is provided (Product Designer Link relates to an Organisation).",Identification
Country Code,manufacturer/structuredAddress/countryCode,Code specifying the country for the address.,Identification
PO Box,manufacturer/structuredAddress/poBox,The post office box for the contact. ,Identification
Postal Code,manufacturer/structuredAddress/postalCode,Text specifying the postal code for an address.,Identification
Province State Code,manufacturer/structuredAddress/provinceStateCode,A code specifying a province or state in abbreviated format for example NJ.,Identification
Street Address,manufacturer/structuredAddress/streetAddress,"The street address expressed as free form text. The street address is printed on paper as the first lines below the name. Some trading partners require the street address to be the street name and number in this attribute. Others require this attribute to be just the street name. In this case, the street number should be provided separately in the street number attribute, if required.",Identification
Street Number,manufacturer/structuredAddress/streetNumber,The street number portion of the street address for the contact. ,Identification
Manufacturer Internal Reference,manufacturerInternalReference,"This field is used to identify the internal reference number or internal product number allocated to the product by the manufacturer of the item. Where the vendor loading GS1net is the manufacturer this field is intended to be the same as the Vendor Internal Reference field. Where the vendor is not the manufacturer, this field may be used to identify the manufacturer’s internal reference.",Identification
Additional Trade Item Identification Type Code,nonGTINReferencedItem/additionalTradeItemIdentification/additionalTradeItemIdentificationTypeCode,Alternative means to the Global Trade Item Number to identify a trade item.,Identification
Additional Trade Item Identification Value,nonGTINReferencedItem/additionalTradeItemIdentification/additionalTradeItemIdentificationValue,Alternative means to the Global Trade Item Number to identify a trade item.,Identification
Referenced Trade Item Type Code,nonGTINReferencedItem/referencedTradeItemTypeCode,"A code depicting the type of trade item that is referenced for a specific purpose for example substitute, replaced by, equivalent trade items.",Identification
Additional ID Type,partyInRole/AdditionalTradeItemIdentification/additionalIdType,AdditionalId Type,Identification
Additional ID Value,partyInRole/AdditionalTradeItemIdentification/additionalIdValue,AdditionalId Value,Identification
Party Address,partyInRole/address,The address associated with the party,Identification
Party GLN,partyInRole/gln,"The Global Location Number (GLN) is a structured Identification of a physical location, legal or functional entity within an enterprise. The GLN is the primary party identifier. ",Identification
Information Provider Language Specific Party Name,partyInRole/languageSpecificPartyName,The recognizable party name used by a supplier to uniquely identify the name of the party in a different language than the primary party name (partyName).,Identification
Party Name,partyInRole/name,The name of the party expressed in text.,Identification
Party Role,partyInRole/partyRoleCode,A code that identifies the role of a party in a business transaction. ,Identification
City,partyInRole/structuredAddress/city,Text specifying the name of the city.,Identification
Complement Address,partyInRole/structuredAddress/complementAddress,"The complement address expressed as a free form text. The complement address is printed on paper as additional lines below the street address. For example, an industrial zone or apartment number. Required in case the PD Organisation link is provided (Product Designer Link relates to an Organisation).",Identification
Country Code,partyInRole/structuredAddress/countryCode,Code specifying the country for the address.,Identification
PO Box,partyInRole/structuredAddress/poBox,The post office box for the contact. ,Identification
Postal Code,partyInRole/structuredAddress/postalCode,Text specifying the postal code for an address.,Identification
Province State Code,partyInRole/structuredAddress/provinceStateCode,A code specifying a province or state in abbreviated format for example NJ.,Identification
Street Address,partyInRole/structuredAddress/streetAddress,"The street address expressed as free form text. The street address is printed on paper as the first lines below the name. Some trading partners require the street address to be the street name and number in this attribute. Others require this attribute to be just the street name. In this case, the street number should be provided separately in the street number attribute, if required.",Identification
Street Number,partyInRole/structuredAddress/streetNumber,The street number portion of the street address for the contact. ,Identification
Product Characteristic Code,productCharacteristics/productCharacteristicCode,Valid value for the characteristics of a product. Describes product specific consumer information.,Identification
Product Characteristic Sequence Number,productCharacteristics/productCharacteristicSequenceNumber,A sequence number indicating the order number of the set of characteristics.,Identification
Product Characteristics Value Amount,productCharacteristics/productCharacteristicValueAmount,The product characteristic value expressed as an amount (with currency code).,Identification
Product Characteristic Value as a Code,productCharacteristics/productCharacteristicValueCode,Valid value to depict the Product Characteristic Code as a code.,Identification
Product Characteristics Value Date Time,productCharacteristics/productCharacteristicValueDateTime,The product characteristic value expressed as a date and time.,Identification
Product Characteristic Value as a Description,productCharacteristics/productCharacteristicValueDescription,Valid value for the Product Characteristic Code as a description.,Identification
Product Characteristic Value Integer,productCharacteristics/productCharacteristicValueInteger,The product characteristic value expressed as an integer.,Identification
Product Characteristic Value as a Measurement,productCharacteristics/productCharacteristicValueMeasurement,Valid value for the Product Characteristic Code as a measurement.,Identification
Product Characteristic Value Numeric,productCharacteristics/productCharacteristicValueNumeric,The product characteristic value expressed as a float.,Identification
Product Characteristic Value String,productCharacteristics/productCharacteristicValueString,The product characteristic value expressed as a string (text value with no language).,Identification
Referenced GTIN,referencedTradeItem/referencedTradeItemGTIN,"A referenced product (Referenced GTIN) which is in a the relationship to this product such as substituted or replaced.

Used to inform the buyer of the referenced product GTIN. Used to inform the buyer of the type of relationship between this product and a referenced product.",Identification
Referenced GTIN Type Code,referencedTradeItem/referencedTradeItemTypeCode,"Valid value for the relationship to a Referenced GTIN such as substituted or replaced.

Used to inform the buyer of the type of relationship between this product and a referenced product.",Identification
Supplier Information GLN of Supplier,supplierInformation/glnOfSupplier,The Global Location Number of the supplier.,Identification
Name of Supplier,supplierInformation/nameOfSupplier,The name of the supplier.,Identification
Additional Party ID Type,tradeItemContactInfo/additionalPartyIdentification/additionalPartyIdentificationType,Identification of a party by use of a code other than the Global Location Number. ,Identification
Additional Party ID Value,tradeItemContactInfo/additionalPartyIdentification/additionalPartyIdentificationValue,A party identifier that is in addition to the GLN. ,Identification
Available Time,tradeItemContactInfo/availableTime,"The time that a specific contact is available.

Used by the seller to communicate to the buyer the time the contact is available for business processes or for consumer information, relative to the Contact Type Code.",Identification
Contact Address,tradeItemContactInfo/contactAddress,"The contact's postal or physical address.

Used by the seller to communicate to the buyer the contact's postal/physical address for business processes or consumer information. Postal/physical address is not an option in the Contact Method Code.",Identification
Contact Description,tradeItemContactInfo/contactDescription,A description of the contact for the trade item. Allows for the representation of the same value in different languages.,Identification
Contact Information GLN (Global Location Number),tradeItemContactInfo/contactInfoGLN,"The Global Location Number (GLN) that uniquely identifies the party's contact information.

Used by the seller to communicate the GLN of the party associated with the contact information to the buyer. It allows the buyer to identify the party associated with the contact information.
Used by the buyer for internal validation and to support some B2B processes.",Identification
Contact,tradeItemContactInfo/contactName,"The contact, such as a person, company or department.

Used by the seller to communicate to the buyer the name of the contact for business processes or for consumer information, relative to the Contact Type Code.",Identification
Contact Type Code,tradeItemContactInfo/contactType,"Valid value for the type of contact for a product.

Used by the seller to communicate to the buyer the type of contact for business processes or for consumer information.",Identification
City,tradeItemContactInfo/structuredAddress/city,Text specifying the name of the city.,Identification
Complement Address,tradeItemContactInfo/structuredAddress/complementAddress,"The complement address expressed as a free form text. The complement address is printed on paper as additional lines below the street address. For example, an industrial zone or apartment number. Required in case the PD Organisation link is provided (Product Designer Link relates to an Organisation).",Identification
Country Code,tradeItemContactInfo/structuredAddress/countryCode,Code specifying the country for the address.,Identification
PO Box,tradeItemContactInfo/structuredAddress/poBox,The post office box for the contact. ,Identification
Postal Code,tradeItemContactInfo/structuredAddress/postalCode,Text specifying the postal code for an address.,Identification
Province State Code,tradeItemContactInfo/structuredAddress/provinceStateCode,A code specifying a province or state in abbreviated format for example NJ.,Identification
Street Address,tradeItemContactInfo/structuredAddress/streetAddress,"The street address expressed as free form text. The street address is printed on paper as the first lines below the name. Some trading partners require the street address to be the street name and number in this attribute. Others require this attribute to be just the street name. In this case, the street number should be provided separately in the street number attribute, if required.",Identification
Street Number,tradeItemContactInfo/structuredAddress/streetNumber,The street number portion of the street address for the contact. ,Identification
Contact Method Code,tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannel/communicationChannelCode,"Valid value for the method of communication to reach the contact.

Used by the seller to communicate to the buyer the contact method for business processes or for consumer information, relative to the Contact Type Code.",Identification
Communication Channel Name,tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannel/communicationChannelName,The name of a specific communication channel,Identification
Contact Details,tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannel/communicationChannelNumber,"The detailed information used to communicate with the contact, such as the telephone number, email address or web site address.

Used by the seller to communicate to the buyer the value associated with the Contact Method Code that can be used to communicate with the contact.",Identification
Is Communication Channel Preferred?,tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannel/isCommunicationChannelPreferred,To show whether this is the preferred contact method by the supplier when there is more than one means of contact.,Identification
Target Market,tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannelTargetMarket/communicationChannelTargetMarketCode,The code that identifies the target market. The target market is at country level or higher geographical definition and is where a trade-item is intended to be sold. ,Identification
Target Market Subdivision Code,tradeItemContactInfo/targetMarketCommunicationChannel/communicationChannelTargetMarket/communicationChannelTargetMarketSubdivisionCode,The Code for country sub-division definition used to indicate the geo-political subdivision of the target market (=country ).,Identification
Trade Item Group Description,tradeItemGroupIdentification/tradeItemGroupIdentificationCodeDescription,A description assigned by the supplier or manufacturer to logically group trade item independently from the Global trade item Classification.,Identification
Trade Item Group Identification Code List Agency Code,tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListAgencyCode,The code for the agency that maintains the codelist.,Identification
Trade Item Group Identification Code List Agency Name,tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListAgencyName,The name for the agency that maintains the codelist.,Identification
Trade Item Group Identification Code List Name,tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListName,The name of the codelist.,Identification
Trade Item Group Identification Code List URI,tradeItemGroupIdentification/tradeItemGroupIdentificationCodeListURI,The URI for the codelist.,Identification
Trade Item Group Code,tradeItemGroupIdentification/tradeItemGroupIdentificationCodeReference,A code assigned by the supplier or manufacturer to logically group trade item independently from the Global trade item Classification.,Identification
Data Quality Excellence Non-Visual Validation (Germany),dQXNonVisualValidation,"This attribute is only relevant for Data Quality Excellence (DQX) service participants, primarily in the German target market. With the help of this attribute, a visual validation can be actively objected to. If the ""true"" indicator is not set, a visual inspection will take place for participants of the DQX Service. Automatic machine validation is not affected by this attribute, the cert state AV seal component is assigned regardless of this attribute. The control of whether a company participates is done via a whitelist.",Indicators
Base Unit Indicator,isBaseUnit,"Is this the Lowest (or Base) Level within an Item Hierarchy?  If so, select ""True.""

For example in a Pallet, Case, Each hierarchy, the Each would be the Base Unit because it's the lowest level of the family group. ",Indicators
Consumer Unit Indicator,isConsumerUnit,"Is this Product/Packaging Level most typically intended for ultimate consumption?  If so, select ""True.""

For example, in retail, Consumer Unit indicated that the Product is approved to be  scanned at a register or added to a virtual cart to be ultimately purchased. ",Indicators
Is Custom Label?,isCustomLabel,Indicates if the product is custom label.,Indicators
Dispatch Unit Indicator,isDispatchUnit,"Would your product be Shipped at this Product/Packaging Level?  If so, select ""True.""

We realize that you may have different standards of doing business per Recipient. Feel free to assign different Dispatch Units per Recipient based on your preference. 

For example, allow your most common answer (i.e. true) to use our system default of ""ALL,"" while selecting the Recipient exceptions to receive a different value (i.e. false). ",Indicators
Is Electrical,isElectrical,"Indicator to denote if the item is an electric or electronic device. Electronic is defined as item of merchandise containing a circuit board and/or electrical wiring, including but not limited to any item of merchandise with a screen.",Indicators
Is Imitation Or Substitute,isImitationOrSubstitute,"Determines whether the trade item is an imitation or substitute product resembling the real product for example imitation eggs or milk substitute non-dairy.   must be labeled as an imitation, especially if the new food contains less protein or a lesser amount of any essential vitamin or mineral.",Indicators
Invoice Unit Indicator,isInvoiceUnit,"Would a billing statement or Invoice include this Product/Packaging Level? If so, select ""True.""   

We realize that you may have different standards of doing business per Recipient. Feel free to assign different Invoice Units per Recipient based on your preference. 

For example, allow your most common answer (i.e. true) to use our system default of ""ALL,"" while selecting the Recipient exceptions to receive a different value (i.e. false). ",Indicators
Ordering Unit Indicator,isOrderableUnit,"Would you (as a Supplier) accept an Order at this Product/Packaging Level. If so, select ""True.""

We realize that you may have different standards of doing business per Recipient. Feel free to assign different Orderable Units per Recipient based on your preference. 

For example, allow your most common answer (i.e. true) to use our system default of ""ALL,"" while selecting the Recipient exceptions to receive a different value (i.e. false). ",Indicators
Is Private,isPrivate,Indicator to qualify whether master data is publicly available to any inquirer or is restricted to a specific private user.,Indicators
Is Reflective,isReflective,"Indicator to denote the product contains material which reflects light, especially for nighttime safety.",Indicators
Is Trade Item A Bulk Item?,isTradeItemABulkItem,Is Trade Item A Bulk Item?,Indicators
Is Trade Item Designed To Be Divisible,isTradeItemDesignedToBeDivisible,Indicates whether the trade item or a single unit may be divided or separated into multiple pre-determined portions. A fraction or divisible amount of the total quantity of a trade item so as to obtain the desired amount.,Indicators
Trade Item Recall Indicator,isTradeItemRecalled,An indicator for the Trade Item to determine if the Manufacturer or Supplier has recalled the product.,Indicators
Is Trade Item Reinstated,isTradeItemReinstated,Indicator stating the Trade Item is being reinstated and will no longer be cancelled or discontinued. The canceledDate or discontinuedDate has been altered to reflect the reinstatement.,Indicators
Preliminary Item Status Code,preliminaryItemStatusCode,A code designating whether the trade item has data that the information provider intends to correct or add values to due to pre-production unknowns (PRELIMINARY) or whether the item has attribute values that reflect go to market state (FINAL).,Indicators
Product Information Legal Disclaimer,productInformationLegalDisclaimer,A legal disclaimer from the information provider about the data being published in the item message.,Indicators
Product Marked With Ingredients?,productMarkedWithIngredients,Trade item packaging contains information pertaining to its ingredients.This is a yes/no (Boolean) where yes equals marked with ingredients.,Indicators
TM Subdivision,targetMarketSubdivisionCode,Help Not available via Extensible Definitions,Indicators
Does Item Data Contain Third Party Content?,thirdPartyContent,This attribute should be set to true if the attribute data for this item contains 3rd party content.,Indicators
Trade Item Not Kosher Indicator,tradeItemNotKosherIndicator,An indicator identifying if the product is Not Kosher.,Indicators
additive Statement Formatting Pattern ,additiveStatementFormattingPattern,The formatting pattern of text for additive statement to denote a paragraph breaks.,Ingredients
Additive Name,foodAndBevAdditiveInformation/additiveName,"The name of an additive that is or may be contained in the product.

Used by the consumer for search and discovery. Used in conjunction with Additive Containment Code. May also be used with Additive Containment Code.",Ingredients
Additive Type Code Reference Code,foodAndBevAdditiveInformation/additiveTypeCodeReference/code,The code which identifies the addtive type code used in each Food and Beverage component.,Ingredients
Code Description,foodAndBevAdditiveInformation/additiveTypeCodeReference/codeDescription,The description for the codelist.,Ingredients
Code List Agency Code,foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Ingredients
Code List Agency Name,foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Ingredients
Code List Name,foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListName,The name of the codelist.,Ingredients
Code List URI,foodAndBevAdditiveInformation/additiveTypeCodeReference/codeListURI,The URI for the codelist.,Ingredients
Additive Containment Code,foodAndBevAdditiveInformation/levelOfContainmentCode,"Valid value to indicate the precision of an additive in the product.

Used to communicate to the consumer and the buyer the additive containment status.

Used in conjunction with Additive Name. May also be used with Additive Name.",Ingredients
Content Percentage,foodAndBevIngredient/contentPercentage,Indication of the percentage of the ingredient contained in the product.,Ingredients
Grape Variety Code,foodAndBevIngredient/grapeVarietyCode,The vine variety used for the production of this wine for example Merlot expressed as a code.,Ingredients
Ingredient Code,foodAndBevIngredient/ingredientCode/code,"The code indicating an ingredient (according to regulations of the target market). Select values from the GS1 code list IngredientCode_GDSN, which is based on an extract of the Codex Alimentarius international food standard developed jointly by the Food and Agriculture Organization (FAO) of the United Nations and World Health Organization (WHO).",Ingredients
Ingredient Code Description,foodAndBevIngredient/ingredientCode/codeDescription,A description for the code value provided.,Ingredients
Ingredient Content Percentage Measurement Precision Code,foodAndBevIngredient/ingredientContentPercentageMeasurementPrecisionCode,The measurement precision qualifying the ingredient content percentage for example LESS_THAN.,Ingredients
Ingredient Definition,foodAndBevIngredient/ingredientDefinition,Plain language definitions of ingredients which are consumer friendly.,Ingredients
Bioengineered Declaration Claim Code,foodAndBevIngredient/ingredientFarmingProcessing/bioengineeredDeclarationClaimCode,Valid value for a product containing detectable genetically modified material for which the modification could not otherwise be obtained through conventional breeding or found in nature. This valid value may also be used for a product manufactured using ingredients derived through bioengineering which have undergone processes to remove modified genetic material such that it cannot be detected using common testing methods. Excludes incidental additives.,Ingredients
Genetically Modified Declaration Code,foodAndBevIngredient/ingredientFarmingProcessing/geneticallyModifiedDeclarationCode,A statement of the presence or absence of genetically modified protein or DNA.,Ingredients
Growing Method Code,foodAndBevIngredient/ingredientFarmingProcessing/growingMethodCode,The process through which fresh produce is grown and cultivated.,Ingredients
Is Ingredient Irradiated?,foodAndBevIngredient/ingredientFarmingProcessing/irradiatedCode,Refer to IM Participant Dictionary for more information regarding this field.,Ingredients
Is Bioengineered Declaration Claim Relevant Data Provided,foodAndBevIngredient/ingredientFarmingProcessing/isBioengineeredDeclarationClaimRelevantDataProvided,All Bioengineered Declaration Claim Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  values not populated are not relevant or not required to be populated on the product label by local regulations.,Ingredients
Maturity at Time of Sale,foodAndBevIngredient/ingredientFarmingProcessing/maturationMethodCode,The method of maturity for the item at the time of its sale.,Ingredients
Post Harvest Treatment Chemical Code,foodAndBevIngredient/ingredientFarmingProcessing/postHarvestTreatmentChemicalCode,Specifies if the fruit or vegetable has been treated or not post harvesting with a chemical or wax.,Ingredients
Post Process Trade Item Treatment Physical Code,foodAndBevIngredient/ingredientFarmingProcessing/postProcessTradeItemTreatmentPhysicalCode,Produce has gone some physical process whether altered or other physical processes after harvesting.,Ingredients
Preservation Technique Code,foodAndBevIngredient/ingredientFarmingProcessing/preservationTechniqueCode,Code value indicating the preservation technique used to preserve the product from deterioration.,Ingredients
Ingredient Source Animal Code,foodAndBevIngredient/ingredientFarmingProcessing/sourceAnimalCode,The source of raw material used to produce the food product for example a goat for milk. ,Ingredients
Ingredient,foodAndBevIngredient/ingredientName,"A single ingredient or a complex ingredient that is taken from the Ingredient Statement.

Used by the buyer, in conjunction with the Ingredient Sequence on Package, to digitally recreate the list of ingredients in the correct sequence.",Ingredients
Organic Certification Effective End Date Time,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicCertification/organicCertificationEffectiveEndDateTime,The date and time upon which the organic certification is no longer effective.,Ingredients
Organic Certification Effective Start Date Time,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicCertification/organicCertificationEffectiveStartDateTime,The date and time upon which the organic certification is effective.,Ingredients
Organic Certification Identification,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicCertification/organicCertificationIdentification,A number issued to confirm that something has passed organic certification.,Ingredients
Organic Claim Agency ,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyCode,A governing body that creates and maintains standards related to organic products.,Ingredients
Organic Claim Agency Name,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyName,Organization that issued the organic certificate number confirming that the Trade Item has gone through certification.,Ingredients
Organic Claim Agency Type Code,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicClaimAgencyTypeCode,A code depicting whether an organic agency manages organic standards or issues certifications.,Ingredients
Organic Percent Claim,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicPercentClaim,The percent of actual organic materials per weight of the trade item. This is usually claimed on the product.,Ingredients
Organic Trade Item Code,foodAndBevIngredient/ingredientOrganicInformation/organicClaim/organicTradeItemCode,Used to indicate the organic status of a trade item or of one or more of its components.,Ingredients
Organic Product Place Of Farming,foodAndBevIngredient/ingredientOrganicInformation/organicProductPlaceOfFarmingCode,Indication of the place where the agricultural raw materials of which the product is composed have been farmed,Ingredients
Additional Party ID Type,foodAndBevIngredient/ingredientParty/additionalPartyIdentification/additionalPartyIdentificationType,Identification of a party by use of a code other than the Global Location Number. ,Ingredients
Additional Party Identification Value,foodAndBevIngredient/ingredientParty/additionalPartyIdentification/additionalPartyIdentificationValue,The identification value,Ingredients
Party GLN,foodAndBevIngredient/ingredientParty/gln,"The Global Location Number (GLN) is a structured Identification of a physical location, legal or functional entity within an enterprise. The GLN is the primary party identifier. ",Ingredients
Party Address,foodAndBevIngredient/ingredientParty/partyAddress,The address associated with the party.,Ingredients
Party Name,foodAndBevIngredient/ingredientParty/partyName,The name of the party expressed in text.,Ingredients
Party Role,foodAndBevIngredient/ingredientParty/partyRoleCode,A code that identifies the role of a party in a business transaction. ,Ingredients
Ingredient Country Of Origin,foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countryCode,The country code (codes) indicating the country of origin of the ingredient.,Ingredients
Country Subdivision Code,foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOrigin/countrySubdivisionCode,Code specifying a country subdivision.,Ingredients
Ingredient Country of Origin Statement,foodAndBevIngredient/ingredientPlaceOfActivity/countryOfOriginStatement,A description of the geographic area the item may have originated from or has been processed. Allows for the representation of the same value in different languages.,Ingredients
Product Activity Country,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/countryOfActivity/countryCode,The geographic area where an activity has taken place.,Ingredients
Country Subdivision Code,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/countryOfActivity/countrySubdivisionCode,Code specifying a country subdivision.,Ingredients
Product Activity Region Description,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionDescription,"The region in which a processing or other activity has been performed for example processing, bottling, manufacturing. Allows for the representation of the same value in different languages.",Ingredients
Enumeration Value,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValue,Code List Value maintained by an external code list agency.,Ingredients
Enumeration Value Definition,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDefinition,Definition of the code list value maintained by an external code list agency,Ingredients
Enumeration Value Description,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDescription,Description of the value in a code list value maintained by an external code list agency. This is primarily used when code list values are sequential numbers.,Ingredients
External Agency Name,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalAgencyName,The name of the agency that manages a code list external to GS1.,Ingredients
External Code List Name,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListName,The name of the code list maintained by an agency external to GS1.,Ingredients
External Code List Version,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListVersion,The version of the code list maintained by an agency external to GS1.,Ingredients
Product Activity Type Code,foodAndBevIngredient/ingredientPlaceOfActivity/productActivityDetails/productActivityTypeCode,"A code depicting the type of activity being performed on a trade item for example processing, bottling, manufacturing.",Ingredients
Ingredient Provenance Statement,foodAndBevIngredient/ingredientPlaceOfActivity/provenanceStatement,"The place a trade item originates from. This is to be specifically used to enable things such as cities, mountain ranges, regions that do not comply with ISO standards.",Ingredients
Ingredient Purpose,foodAndBevIngredient/ingredientPurpose,A description of the primary purpose that an ingredient serves for example a colouring in the case of annatto in a cheese rind.,Ingredients
Ingredient Sequence on Package,foodAndBevIngredient/ingredientSequence,"The incremental value (01, 02, 03…) indicating the order of ingredients listed on the package.

Used by the buyer to digitally recreate the list of ingredients in the correct sequence.",Ingredients
Is Ingredient Emphasised,foodAndBevIngredient/isIngredientEmphasised,Denotes the ingredient that should have it's text emphasised,Ingredients
Additive Specific - Common Allergen Name (If Applicable),foodAndBevIngredient/saIngredientInformation/saCommonAllergenName,"Egg, cow's milk, crustaceans and molluscs, fish, peanuts, soybeans, tree nuts, significant cereals.",Ingredients
Compound Ingredient #1,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient1,Ingredient#1 of the compound ingredient.,Ingredients
Compound Ingredient #10,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient10,Ingredient#10 of the compound ingredient.,Ingredients
Compound Ingredient #11,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient11,Ingredient#11 of the compound ingredient.,Ingredients
Compound Ingredient #12,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient12,Ingredient#12 of the compound ingredient.,Ingredients
Compound Ingredient #13,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient13,Ingredient#13 of the compound ingredient.,Ingredients
Compound Ingredient #14,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient14,Ingredient#14 of the compound ingredient.,Ingredients
Compound Ingredient #15,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient15,Ingredient#15 of the compound ingredient.,Ingredients
Compound Ingredient #2,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient2,Ingredient#2 of the compound ingredient.,Ingredients
Compound Ingredient #3,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient3,Ingredient#3 of the compound ingredient.,Ingredients
Compound Ingredient #4,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient4,Ingredient#4 of the compound ingredient.,Ingredients
Compound Ingredient #5,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient5,Ingredient#5 of the compound ingredient.,Ingredients
Compound Ingredient #6,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient6,Ingredient#6 of the compound ingredient.,Ingredients
Compound Ingredient #7,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient7,Ingredient#7 of the compound ingredient.,Ingredients
Compound Ingredient #8,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient8,Ingredient#8 of the compound ingredient.,Ingredients
Compound Ingredient #9,foodAndBevIngredient/saIngredientInformation/saCompoundIngredient9,Ingredient#9 of the compound ingredient.,Ingredients
Does Ingredient Contain Gluten?,foodAndBevIngredient/saIngredientInformation/saContainsGluten,Does the Ingredient have proteins that naturally occur in a significant cereal to which some persons are intolerant (gluten)?.,Ingredients
Contains Thickener,foodAndBevIngredient/saIngredientInformation/saContainsThickener,Does the ingredient contain a thickener?,Ingredients
Fats & Oils - Ingredient Part of a Plant,foodAndBevIngredient/saIngredientInformation/saIngredientPartOfPlant,If the Ingredient is a vegetable fat and/or oil -specify the particular part of the plant from which the fat or oil is derived.,Ingredients
Fats & Oils - Is Ingredient an Animal?,foodAndBevIngredient/saIngredientInformation/saIsIngredientAnimal,Is the fat and/or oil from an animal?,Ingredients
Additive Specific - Is Ingredient a Common Allergen?,foodAndBevIngredient/saIngredientInformation/saIsIngredientCommonAllergen,"Common allergen' means egg, cow's milk, crustaceans and molluscs, fish, peanuts, soybeans, tree nuts and any significant cereals, as well as ingredients derived from these foodstuffs that has retained its allergenicity in the final product.",Ingredients
Fats & Oils - Is Ingredient A Fish?,foodAndBevIngredient/saIngredientInformation/saIsIngredientFish,Is the fat and/or oil from fish?,Ingredients
Additive Specific - Is Ingredient a Flavourant?,foodAndBevIngredient/saIngredientInformation/saIsIngredientFlavourant,"Is the Ingredient a flavouring substance intended to be added in small amounts to foods and of which the primary purpose is to impact, modify or improve the flavour of foodstuffs rather than to enhance nutritional quality. Is not intended to be consumed on its own and exclude substances that have an exclusively sweet, sour or salty taste. Flavourants  may consist of flavouring substances, flavouring preparations, process Flavourings, smoke Flavourings or Mixtures thereof.",Ingredients
Additive Specific - Is Ingredient a Flavour Enhancer?,foodAndBevIngredient/saIngredientInformation/saIsIngredientFlavourEnhancer,"Is the Ingredient a substance that enhances, intensifies or supplements the existing taste and/or odour of a foodstuff? MSG is considered a Flavour Enhancer.",Ingredients
Additive Specific - Is Ingredient a Food Colourant?,foodAndBevIngredient/saIngredientInformation/saIsIngredientFoodColourant,Is Ingredient any substance described as such in the Regulations Relating to Food Colourants published under the Act.,Ingredients
Fats & Oils - Is Ingredient Hydrogenated?,foodAndBevIngredient/saIngredientInformation/saIsIngredientHydrogenated,Is the fat and/or oil hydrogenated?,Ingredients
Is Ingredient in Variable Proportions?,foodAndBevIngredient/saIngredientInformation/saIsingredientInVariableProportions,"Is the Ingredient part of a mixture of mixed fruit, nuts or vegetables where no particular fruit, nut or vegetable predominates significantly with respect to mass? ",Ingredients
Is Ingredient Irradiated?,foodAndBevIngredient/saIngredientInformation/saIsIngredientIrradiated,Has the Ingredient been treated with ionizing radiation?,Ingredients
Fats & Oils - Is Ingredient Marine?,foodAndBevIngredient/saIngredientInformation/saIsIngredientMarine,"Is the fat and/or oil from marine foodstuff, other than fish?",Ingredients
Is Ingredient Non-Vegetable?,foodAndBevIngredient/saIngredientInformation/saIsIngredientNonVegetable,Derived from non-vegetarian origin.,Ingredients
Additive Specific - Is Ingredient Oil Cold or Mechanically Pressed?,foodAndBevIngredient/saIngredientInformation/saIsIngredientOilColdOrMechanicallyPressed,"In terms of edible vegetable fat and oil manufacturing, means the oil has been obtained by applying mechanical procedures, such as expelling or mechanical pressure, in the absence of light, without the application of external heat where the temperature of the process never exceeds 50% (122OF) and where purification may have been accomplished by washing with water, settling, filtering and centrifuging only.",Ingredients
Additive Specific - Is Ingredient a Preservative?,foodAndBevIngredient/saIngredientInformation/saIsIngredientPreservative,Is the Ingredient an additive that prolongs the shelf life of a food by protecting against deterioration caused by microorganisms.,Ingredients
Is Ingredient Reconstituted?,foodAndBevIngredient/saIngredientInformation/saIsIngredientReconstituted,"Was the ingredient restored or partially restored  to its former or natural state, as by e.g. the addition of water to the concentrate or dehydrated ingredient?",Ingredients
Is Ingredient Seasonal?,foodAndBevIngredient/saIngredientInformation/saIsIngredientSeasonal,Ingredient only seasonally available.,Ingredients
Fats & Oils - Is Ingredient a Vegetable?,foodAndBevIngredient/saIngredientInformation/saIsIngredientVegetable,"Is the Ingredient a fresh, unprocessed vegetable?",Ingredients
Level Of Containment,foodAndBevIngredient/saIngredientInformation/saLevelOfContainment,"Is it free from, does it contain or may it contain?",Ingredients
Food And Beverage Ingredient Additive Statement,foodAndBevIngredientAdditiveStatement,"Statement on presence or absence of additives or genetic modification contained in the trade item for example ""Contains no preservatives, no artificial colours or flavours and no artificial flavours"".",Ingredients
Ingredient Of Concern Code,ingredientOfConcernCode,"Indicates a claim to an ingredient, considered to be a concern for regulatory or other reasons, and which is “contained” within the trade item but may not need to specify the amount whether approximate, or an accurate measurement be given. Datatype codelist IngredientOfConcernCode, values: IODISED_SALT, RAW_MILK",Ingredients
Ingredient Relevant Data Provided?,ingredientRelevantDataProvided,Ingredient Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  All values not populated are not relevant or not required to be populated on the product label by local regulations.,Ingredients
Sequence Number,ingredientStatement/sequenceNumber,Sequence number for ingredient statement,Ingredients
Ingredient Statement,ingredientStatement/statement,"The composition of the product that matches what appears on the package. The full ingredient list for food which appears as it does on the product package.

Used to indicate to the consumer the composition of the product that may include allergens and contaminations.",Ingredients
Ingredient Statement Formatting Pattern,ingredientStatementFormattingPattern,the formatting pattern of text for ingredient statement to generically emphasize a word or set of words and to denote a paragraph break. It will be up to the recipient to determine the formatting style they will use for the emphasized text.,Ingredients
Homogenized Indicator,isHomogenised,"The indicator specifying whether or not the milk used is homogenized. The homogenization of milk is a technical process in the dairy business. The milk fat is milled to such an extent that further creaming is prevented.

Used by the buyer for assortment planning. Used by the consumer for search and discovery.",Ingredients
Ingredient Declarations Indicator,isIngredientRelevantDataProvided,"Indicator to confirm the relevant ingredient data provided for the product is complete.

Used by the seller to inform the buyer that the relevant ingredient list is confirmed as complete.",Ingredients
Is the Item Flavouring?,isItemFlavouring,"This is true when:- a foodstuff contains a flavouring of an ingredient, but not the real ingredient itself, the words ""flavouring"" or ""flavoured"" shall accompany the name or the descriptor of the product to clearly indicate that only a flavouring was used and not the real ingredient itself.",Ingredients
Is Item a PrePacked Food Additive?,isTradeItemPrePackedFoodAdditive,Is the Item a pre-packed food additive?,Ingredients
Percent of Fruit Juice,juiceContentPercentage,"The percentage of fruit juice contained in the product.

Used by the buyer for assortment planning. Used by the consumer for search and discovery.",Ingredients
Ingredient Strength,nonfoodIngredient/ingredientStrength/ingredientStrength,Used to define the strength of each ingredient in a trade item or unit volume of non food and beverage the trade items.,Ingredients
Ingredient Strength Basis,nonfoodIngredient/ingredientStrength/ingredientStrengthBasis,The basis amount for an ingredient strength for example 1000 millilitres in the case of 400 milligrams per 1000 millilitres.,Ingredients
Active Ingredient Indicator,nonfoodIngredient/isIngredientActive,"Indicates the presence of an active ingredient that achieves the desired results of using the product.

Used to inform the buyer and consumer of active ingredients.",Ingredients
Is Ingredient Generic,nonfoodIngredient/isIngredientGeneric,Determines whether the ingredient is classified as being generic.,Ingredients
nonfood ingredient Claim,nonfoodIngredient/nonfoodIngredientClaim,Descriptive terms used to denote any claims about he ingredient which are not specified elsewhere.,Ingredients
Non Food Ingredient Code Reference,nonfoodIngredient/nonFoodIngredientCodeReference,A code from a specific code list for a nonFood ingredient.,Ingredients
nonfood ingredient Content Amount,nonfoodIngredient/nonfoodIngredientContentAmount,Amount of the ingredient in the product.,Ingredients
nonfood ingredient Country Of Origin,nonfoodIngredient/nonfoodIngredientCountryOfOrigin,"The country code (codes) from which the nonfood ingredient has been sourced, produced or manufactured, according to criteria established for the purposes of application of the value may or may not be presented on the trade item label.",Ingredients
Non Food Ingredient Definition,nonfoodIngredient/nonfoodIngredientDefinition,A definition associated with the value in the nonfoodIngredientName. The definition should explain to the end user what the nonfood ingredient is.,Ingredients
Non Food Ingredient Name,nonfoodIngredient/nonFoodIngredientName,The name of the non-food ingredient for example ammonia.,Ingredients
Non Food Ingredient Purpose,nonfoodIngredient/nonfoodIngredientPurpose,A description of the primary purpose that an ingredient serves for example for sunscreen the ingredient may have the purpose of being a UVB Blocker.,Ingredients
Non Food Ingredient Sequence,nonfoodIngredient/sequenceNumber,"A text sequence (01, 02, 03, sub-nonfoodingredients 01.01, 01.02,01.03...) indicating the nonfoodIngredient order by content percentage of the product.",Ingredients
Additive Name,nonfoodIngredientAdditiveInformation/additiveName,The name of any additive or genetic modification contained or not contained in the trade item.,Ingredients
Additive Type Code Reference Code,nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/code,The code which describes the feature,Ingredients
Additive Type Code Reference Description,nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeDescription,Indicates if the trade item is resistant to frost and can thus be used outside. ,Ingredients
Additive Type Code Reference Code List Agency Code,nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Ingredients
Additive Type Code Reference Code List Agency Name,nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Ingredients
Additive Type Code Reference Code List Name,nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListName,The name of the codelist.,Ingredients
Code List URI,nonfoodIngredientAdditiveInformation/additiveTypeCodeReference/codeListURI,The URI for the codelist.,Ingredients
Level of Containment,nonfoodIngredientAdditiveInformation/levelofContainmentCode,Code indicating the level of presence of the additive.,Ingredients
Non Food Ingredient Additive Statement,nonfoodIngredientAdditiveStatement,"Statement on presence or absence of additives or genetic modification contained in the trade item for example ""Contains no preservatives, no artificial colours or flavours and no artificial flavours"".",Ingredients
Non Food Ingredient Concern Code,nonfoodIngredientOfConcernCode,Specifies a non food ingredient of concern,Ingredients
Sequence Number,nonfoodIngredientStatement/sequenceNumber,Sequence Number for Non Food Ingredient Statement,Ingredients
Non-Food Ingredient Statement,nonfoodIngredientStatement/statement,"The text used to describe the composition of the product that matches what appears on the label for nonfood products.

Used to inform the buyer and consumer of the ingredients.",Ingredients
Contained Alternative Protein Percent,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableAlternativeProtein/containedAlternativeProteinPercent,"The percent of alternative protein as provided in the item. In
the US this is noted on the Alternate Protein Product (APP)
documentation.",Ingredients
Creditable Alternative Protein Per Portion,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableAlternativeProtein/creditableAlternativeProteinPerPortion,The portion of alternative protein as provided in the item. In the US this is noted on the Alternate Protein Product (APP) documentation and is measured in ounces.,Ingredients
Creditable Amount,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableAmount,"The creditable amount of the provided creditable ingredient
as listed in the Creditable Ingredient Description and
calculated as specified in the requirements, rules and
regulations set forth by the applicable Product Formulation
Statement Regulatory Body.",Ingredients
Creditable Grain Group Code,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrain/creditableGrainGroupCode,The code assigned by the Product Formulation Statement Regulatory Body indicating to which exhibit group the trade item belongs. This code specifics set the formulas and calculations used to determine the grain equivalents for the trade item.,Ingredients
Exhibit Group,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrain/exhibitGroup,"A reference to the exhibit grouping for the creditable ingredient, described in the creditable ingredient description of the Product Formulation Statement and defined by the requirements, rules and regulations set forth by the applicable product formulation statement regulatory body.",Ingredients
Creditable Grain Amount Per Portion,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrainAmountPerPortion,"The gram per portion value of the creditable grains contained in the trade item as specified on the Product Formulation Statement and defined by the requirements, rules and regulations set forth by the applicable product formulation statement regulatory body.",Ingredients
Creditable Grain Standard,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/creditableGrainStandard,The standard gram value applicable to the creditable grain gram group code.,Ingredients
Does Trade Item Contain Non Creditable Grains,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/doesTradeItemContainNoncreditableGrains,An indication that the item contains non-creditable grains. The existence of non-creditable grains in excess of specified limits may alter the item’s credit toward child nutrition requirements as specified by the applicable Product Formulation Statement Regulatory Body.,Ingredients
Does Trade Item Meet Whole Grain Rich Criteria,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/doesTradeItemMeetWholeGrainRichCriteria,An indication the trade item meets the whole grain-rich criteria as defined and regulated by the applicable Product Formulation Statement Regulatory Body.,Ingredients
Non Creditable Grain Amount,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/noncreditableGrain/noncreditableGrainAmount,The amount of the non-creditable grain contained in the item. Measured in grams per US regulation.,Ingredients
Non Creditable Grain Description,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableGrainsInformation/noncreditableGrain/noncreditableGrainDescription,"A descriptive term to describe the non creditable grain contained in the item. This value must be supplied when non-creditable grains are present in the trade item. In the US, this description should be from the Food Buying Guide.",Ingredients
Creditable Ingredient Amount Per Raw Portion,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableIngredientAmountPerRawPortion,"The ounces per portion value of the raw creditable fruit or
vegetable ingredient contained in the trade item as specified
on the Product Formulation Statement and defined by the
requirements, rules and regulations set forth by the
applicable Product Formulation Statement Regulatory Body.",Ingredients
Creditable Ingredient Description,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableIngredientDescription,"A description of the trade item's creditable ingredient
applicable to the creditable ingredient type and as noted on
the Product Formulation Statement. In the US, this
description should be from the Food Buying Guide or an
Alternate Protein Product letter (APP) or a Child Nutrition
Source Label.",Ingredients
Total Vegetable Subgroup Amount,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableVegetable/totalVegetableSubgroupAmount,"The creditable amount of the vegetable subgroup in the
item.",Ingredients
Vegetable Subgroup Code,productFormulationStatement/creditableIngredient/creditableIngredientDetails/creditableVegetable/vegetableSubgroupCode,"A qualifier to specify the type of creditable vegetable ingredient subgroup applicable to the item as specified on the Product Formulation Statement and defined by the requirements, rules and regulations set forth by the applicable product formulation statement regulatory body.",Ingredients
Yield Servings Per Unit,productFormulationStatement/creditableIngredient/creditableIngredientDetails/yieldServingsPerUnit,"The yield per purchasing unit as calculated using the
requirements, rules and regulations set forth by the
applicable product formulation statement regulatory body.",Ingredients
Creditable Ingredient Type Code,productFormulationStatement/creditableIngredient/creditableIngredientTypeCode,"A qualifier to specify a type of creditable ingredient
applicable to the trade item as noted on the Product
Formulation Statement and specified by the requirements,
rules and regulations set forth by the applicable Product
Formulation Statement Regulatory Body.",Ingredients
Total Creditable Ingredient Type Amount,productFormulationStatement/creditableIngredient/totalCreditableIngredientTypeAmount,"The sum total creditable amount of all the creditable
ingredient type(s) applicable for the item as calculated using
the requirements, rules and regulations set forth by the
applicable Product Formulation Statement Regulatory Body.
Per US regulations total creditable amount must be rounded
down to the nearest quarter (0.25) ounce equivalent in the
US target market.",Ingredients
Product Formulation Statement Description,productFormulationStatement/productFormulationStatementDescription,"A textual statement listed on the Product Formulation
Statement as specified in the requirements, rules and
regulations set forth by the applicable Product Formulation
Statement Regulatory Body. The name and position of the
company official who has signed the actual statement.",Ingredients
Alternate Text,productFormulationStatement/productFormulationStatementDocument/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Ingredients
Content Description,productFormulationStatement/productFormulationStatementDocument/contentDescription,Free form description of the content of the file.,Ingredients
File Creation Program,productFormulationStatement/productFormulationStatementDocument/fileCreationProgram,The program used in the creation of the digital asset.,Ingredients
File Effective End Date,productFormulationStatement/productFormulationStatementDocument/fileEffectiveEndDateTime,The date upon which the target of this external link ceases to be effective for use.,Ingredients
File Effective Start Date,productFormulationStatement/productFormulationStatementDocument/fileEffectiveStartDateTime,The date upon which the target of this external link begins to be effective for use.,Ingredients
File Format Description,productFormulationStatement/productFormulationStatementDocument/fileFormatDescription,Free form description of the format of the file.,Ingredients
File Format Name,productFormulationStatement/productFormulationStatementDocument/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP,Ingredients
File Language,productFormulationStatement/productFormulationStatementDocument/fileLanguageCode,The specified language to which the digital asset is targeted.,Ingredients
File Name,productFormulationStatement/productFormulationStatementDocument/fileName,The name of the file that contains the external information.,Ingredients
File Optimal Viewer Name,productFormulationStatement/productFormulationStatementDocument/fileOptimalViewerName,The software to which this file was targeted.,Ingredients
File Origin Country,productFormulationStatement/productFormulationStatementDocument/fileOriginCountryCode,The country where the digital asset originated.,Ingredients
File Sequence Number,productFormulationStatement/productFormulationStatementDocument/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Ingredients
File Version,productFormulationStatement/productFormulationStatementDocument/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Ingredients
Image Facing,productFormulationStatement/productFormulationStatementDocument/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Ingredients
Image Orientation Type Code,productFormulationStatement/productFormulationStatementDocument/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Ingredients
Image State Code,productFormulationStatement/productFormulationStatementDocument/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Ingredients
Is Image Rendered,productFormulationStatement/productFormulationStatementDocument/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Ingredients
Is Primary File,productFormulationStatement/productFormulationStatementDocument/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Ingredients
Referenced File Type Code,productFormulationStatement/productFormulationStatementDocument/referencedFileTypeCode,The type of file that is being referenced for example Safety Data Sheet or Product Image.,Ingredients
Title Text,productFormulationStatement/productFormulationStatementDocument/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Ingredients
Uniform Resource Identifier,productFormulationStatement/productFormulationStatementDocument/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is optional.",Ingredients
Regulatory Body Code,productFormulationStatement/productFormulationStatementRegulatoryBodyCode,"The agency within the target market which is responsible for
the requirements, rules and regulations governing the
product formulation statement calculations, format and
contents.",Ingredients
Total Portion Weight As Purchased,productFormulationStatement/totalPortionWeightAsPurchased,"The total portion weight of the trade item as purchased. This
value(s) is as noted on the Product Formulation Statement
and expressed in at least one measurement.",Ingredients
Additional Party Identification Type,certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationCode,Identification of a party by use of a code other than the Global Location Number. ,Licensing and Certification
Additional Party Identification Value,certificationInformation/additionalCertificationOrganisation/additionalPartyIdentificationValue,A party identifier that is in addition to the GLN. ,Licensing and Certification
Certification Issuance Date,certificationInformation/certification/certificateIssuanceDateTime,The date and time that a certificate has been issued for a Trade Item.,Licensing and Certification
Certification Assessment Date Time,certificationInformation/certification/certificationAssessmentDateTime,The date and time that an assessment was performed on a Trade Item that led to a certification.,Licensing and Certification
Certification Effective End Date,certificationInformation/certification/certificationEffectiveEndDateTime,The date and time upon which the certification is no longer effective.,Licensing and Certification
Certification Effective Start Date,certificationInformation/certification/certificationEffectiveStartDateTime,The date and time upon which the certification is effective.,Licensing and Certification
Certification Execution Country Code,certificationInformation/certification/certificationExecutionCountryCode,The country where the certification is performed.  Use ISO3166_1 Code,Licensing and Certification
Certificate Identification,certificationInformation/certification/certificationIdentification,A reference issued to confirm that something has passed certification.,Licensing and Certification
Certification Statement on Package,certificationInformation/certification/certificationStatementOnPackage,﻿The statement provided from the certification agency that must be displayed on the packaging according to the certification agreement.,Licensing and Certification
Certification Value,certificationInformation/certification/certificationValue,"The unique identification (ID) that provides a trade item's certification standard value, official licensing number or identification which proves that a product/process has passed the certification procedure.",Licensing and Certification
Alternate Text,certificationInformation/certification/referencedFileInformation/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Licensing and Certification
Content Description,certificationInformation/certification/referencedFileInformation/contentDescription,Free form description of the content of the file.,Licensing and Certification
File Creation Program,certificationInformation/certification/referencedFileInformation/fileCreationProgram,The program used in the creation of the digital asset.,Licensing and Certification
File Effective End Date,certificationInformation/certification/referencedFileInformation/fileEffectiveEndDateTime,The date upon which the target of this external link ceases to be effective for use.,Licensing and Certification
File Effective Start Date,certificationInformation/certification/referencedFileInformation/fileEffectiveStartDateTime,The date upon which the target of this external link begins to be effective for use.,Licensing and Certification
File Format Description,certificationInformation/certification/referencedFileInformation/fileFormatDescription,Free form description of the format of the file.,Licensing and Certification
File Format Name,certificationInformation/certification/referencedFileInformation/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP,Licensing and Certification
File Language,certificationInformation/certification/referencedFileInformation/fileLanguageCode,The specified language to which the digital asset is targeted.,Licensing and Certification
File Name,certificationInformation/certification/referencedFileInformation/fileName,The name of the file that contains the external information.,Licensing and Certification
File Optimal Viewer Name,certificationInformation/certification/referencedFileInformation/fileOptimalViewerName,The software to which this file was targeted.,Licensing and Certification
File Origin Country,certificationInformation/certification/referencedFileInformation/fileOriginCountryCode,The country where the digital asset originated.,Licensing and Certification
File Sequence Number,certificationInformation/certification/referencedFileInformation/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Licensing and Certification
File Version,certificationInformation/certification/referencedFileInformation/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Licensing and Certification
Image Facing,certificationInformation/certification/referencedFileInformation/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Licensing and Certification
Image Orientation Type Code,certificationInformation/certification/referencedFileInformation/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Licensing and Certification
Image State Code,certificationInformation/certification/referencedFileInformation/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Licensing and Certification
Is Image Rendered,certificationInformation/certification/referencedFileInformation/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Licensing and Certification
Is Primary File,certificationInformation/certification/referencedFileInformation/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Licensing and Certification
Referenced File Type Code,certificationInformation/certification/referencedFileInformation/referencedFileTypeCode,The type of file that is being referenced for example Safety Data Sheet or Product Image.,Licensing and Certification
Title Text,certificationInformation/certification/referencedFileInformation/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Licensing and Certification
Uniform Resource Identifier,certificationInformation/certification/referencedFileInformation/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is optional.",Licensing and Certification
Subject of Certification Description,certificationInformation/certification/subjectOfCertificationDescription,"The description that provides more information about the type of certification, e.g. the type of product, model, etc. as stated on the certificate.",Licensing and Certification
Certification Agency,certificationInformation/certificationAgency,Name of the organization issuing the certification standard or other requirement being met.,Licensing and Certification
Certification Organisation Identifier,certificationInformation/certificationOrganisationIdentifier,The identification of the organization that issued the certificate number confirming that the Trade Item has gone through certification.,Licensing and Certification
Certification Standard,certificationInformation/certificationStandard,"The name of the certification standard or the type of certification, e.g. product, process, company, packaging or conformity.",Licensing and Certification
Is Certificate Required?,certificationInformation/isCertificateRequired,Determines whether a specific certificate is required by regulation or legal property.,Licensing and Certification
License Character,licenseCharacter,the charcter of the licensed trademark asset that are used on the trade item.,Licensing and Certification
License Title,licenseTitle,"The title of the licensed trademark asset that are used on the trade item.
",Licensing and Certification
License Code,tradeItemLicense/tradeItemLicenseDetail/licenseCode,A code indicating the insignia of the league/sport/event which a given item bears.,Licensing and Certification
License Character,tradeItemLicense/tradeItemLicenseDetail/tradeItemLicenseCharacter,The character of the licensed trademark asset that is used on the trade item.,Licensing and Certification
License Title,tradeItemLicense/tradeItemLicenseDetail/tradeItemLicenseTitle,The title of the licensed trademark asset that is used on the trade item.,Licensing and Certification
License End DateTime,tradeItemLicense/tradeItemLicenseEffectiveDateInformation/tradeItemLicenseEndDateTime,"The effective end date of the license to use the title, character or any trademarked assets that are used on the trade item.",Licensing and Certification
License Start DateTime,tradeItemLicense/tradeItemLicenseEffectiveDateInformation/tradeItemLicenseStartDateTime,"The effective start date of the license to use the title, character or any trademarked assets that are used on the trade item.",Licensing and Certification
License Owner GLN,tradeItemLicense/tradeItemLicenseOwnerGLN,The GLN of the owner of the licensed product that is allowing the trading partner to use their licensed name and/or images.,Licensing and Certification
License Owner Name,tradeItemLicense/tradeItemLicenseOwnerName,The name of the owner of the licensed product that is allowing the trading partner to use their licensed name and/or images.,Licensing and Certification
Country Code,tradeItemLicense/tradeItemLicenseRegion/countryCode,Code specifying a country. Allowed code values are specified in GS1 Code List CountryCode.,Licensing and Certification
Sub Division Code,tradeItemLicense/tradeItemLicenseRegion/countrySubdivisionCode,Code specifying a country subdivision. Allowed code values are specified in GS1 Code List CountrySubdivisionCode.,Licensing and Certification
Child Item ,link/childItem/gtin,Unique product identification number (GTIN) for a child item with a higher-level trade item (parent) in a product hierarchy. This item may repeat in the case of a combination pack (multiple GTINs in lower level).,Link
Link Quantity,link/childItem/quantity,The number of child items contained in a trade item. The sum of the quantities of direct child links must equal the Qty of Next Level Item(s) of the Parent Item.,Link
Parent Item ,link/parentItem/gtin,Unique product identification number (GTIN) for a parent item with lower-level trade items (children) in a product hierarchy.,Link
Alcohol Beverage Age,alcoholBeverageAge,"The time period which the alcohol product has been aged. For example, a whiskey aged 12 years.",Liquor
Container Material Code,alcoholBeverageContainer/containerMaterialCode,"The material of the container used in a specific process for an alcohol product. Example: American White Oak (Quercus Alba), Stainless Steel.",Liquor
Container Process Type Code,alcoholBeverageContainer/containerProcessTypeCode,"The process which is undertaken in a specific container for an alcohol product. Example: Maturation-Primary, Maturation-Secondary, Finishing.",Liquor
Container Shape Code,alcoholBeverageContainer/containerShapeCode,"The shape of the container used in a specific process for an alcohol product. Example: Firkin, Hogshead.",Liquor
Container Type Code,alcoholBeverageContainer/containerTypeCode,"The container in which the alcohol product has undergone a specific process. Example: Sherry, Rum.",Liquor
Alcohol Beverage Distilled From Code,alcoholBeverageDistilledFromCode,"The main ingredient(s) from which the alcohol product has been distilled. Example: Rye, Potato, Sugar Cane.",Liquor
Alcohol Beverage Filtering Method Type Code,alcoholBeverageFilteringMethodTypeCode,"The method by which an alcohol beverage product has been filtered. Filtering is used to refine or polish the product to achieve a specific taste profile. Example: Charcoal, Chilled.",Liquor
Alcohol Beverage Production Method Type Code,alcoholBeverageProductionMethodTypeCode,"A method by which an alcohol beverage product has been produced. Example: Methode Traditionnelle, Added Carbonization, Chamenoise.",Liquor
Alcohol Beverage Type Code,alcoholBeverageTypeCode,"A value to provide the basic type of alcohol beverage product, for example- Spirit-Bourbon, Beer-German Bock, Still Wine-Ice Wine.",Liquor
Alcoholic Beverage Color Code,alcoholicBeverageColorCode,"Indicates the descriptive term that is used by the product manufacturer to identify the color of the alcoholic beverage. Alcohol colors are sometimes qualified by a scale or regulation. Examples: Wine Regulations, Beer – EBC, SRM/Lovibond, etc.",Liquor
Alcoholic Beverage Permission Level,alcoholicBeveragePermissionLevel,Indication of a Permission level for alcoholic products dependent on the product classification. The permission level codes should reflect those of the target market.,Liquor
Alcoholic Beverage Subregion Of Origin,alcoholicBeverageSubregionOfOrigin,Indication of sub region of origin of the trade item.,Liquor
Alcoholic Beverage Sugar Content,alcoholicBeverageSugarContent,Indication of the amount of sugar contained in the beverage for example if sugar remaining equals 6.5 g/l then enter 6.5 GL.,Liquor
Alcoholic Product Beverage Type,alcoholicProductBeverageType,Indication of type of alcohol beverage.,Liquor
Alcoholic Product Colour,alcoholicProductColour,Indication of type of alcohol beverage.,Liquor
Alcoholic Product Region,alcoholicProductRegion,The region of origin answers the question: From which geographically defined region does the wine come from?,Liquor
Alcoholic Products Type Of Taste,alcoholicProductsTypeOfTaste,Classification of the product according to the amount of residual sugar contained.,Liquor
Alcoholic Product Vine Variety,alcoholicProductVineVariety,Indication of the vine varieties contained in the alcohol beverage.,Liquor
Alcohol Products Closing Type Of Bottle,alcoholProductsClosingTypeOfBottle,Indication of the closing type of bottle. ,Liquor
Alcohol Proof,alcoholProof,Alcohol proof is a measure of how much ethanol (alcohol) is contained in an alcoholic beverage.,Liquor
Alcohol Units,alcoholUnits,"The number of alcohol units contained in the product as defined by local target market regulations. May also be referred to as number of standard drinks in certain geographies. Used as a measure to quantify the actual alcoholic content within the product, in order to provide guidance on total alcohol consumption. Example: 500ml of 4.5 percent ABV beer is 2.5 alcohol units in the UK and 2.0 standard drinks in Australia.",Liquor
Beer Style Code,beerStyleCode,"A value to provide a style name for beer products, such as Brown Porter, Imperial Stout, Witbier.",Liquor
Bitterness Of Beer Measurement,bitternessOfBeerMeasurement,"Indicates the descriptive term that is used by the product manufacturer to identify the bitterness of beer, expressed in IBU and/or EBU.",Liquor
Degree of Original Wort,degreeOfOriginalWort,Specification of the degrees of original wort.,Liquor
Does item have expiry date?,doesItemHaveExpiryDate,Indicates if this is an expiration dated product,Liquor
Is Cask Strength?,isCaskStrength,"Indication the alcohol beverage has not been cut, typically with water, after maturation. The resulting product has the same alcohol content as when it was removed from the maturation cask/barrel.",Liquor
Is Trade Item A Quality Vintage Alcohol Product,isTradeItemAQualityVintageAlcoholProduct,"An indicator on an alcoholic beverage trade item whether the supplier has a ""declared statement of quality (in French Millésime)”or not. This ""declared statement of quality” requires the ""Vintage"" year of harvest of the grapes to be completed.",Liquor
NABCA Additional Charges,nABCAAdditionalCharges,Any other charges to be added to the Net Cost at FOB point.,Liquor
NABCA Address Of Bottler,nABCAAddressOfBottler,An indication of the entity who bottles the item.,Liquor
NABCA Address Of Distiller,nABCAAddressOfDistiller,The address of the entity who distills the item.,Liquor
NABCA Age Vintage,nABCAAgeVintage,The year or vintage of the beverage.,Liquor
NABCA Alternate Age Vintage,nABCAAlternateAgeVintage,The age or vintage of the item as sold under another label.,Liquor
NABCA Alternate Label Explanation,nABCAAlternateLabelExplanation,The explanation of the differences between the item as sold under another label.,Liquor
NABCA Alternate Percentage Of Alcohol By Volume,nABCAAlternatePercentOfAlcoholByVolume,The proof of the item as sold under another label.,Liquor
NABCA Bottler Name,nABCABottlerName,The year or vintage of the beverage.,Liquor
NABCA Discount Applied,nABCADiscountApplied,Any discounts applied to the price of the item.,Liquor
NABCA Is Imported Item Inbound?,nABCAIsImportedItemInbound,An indication of whether or not the product is imported and being admitted into the US provisionally without payment or duties.,Liquor
NABCA Is Sold Under Any Other Label,nABCAIsSoldUnderAnyOtherLabel,Indication if the item can be sold under a label other than the one being referenced on the form.,Liquor
NABCA Item FOB Point,nABCAItemFOBPoint,Point at which the item is legally the property of the purchaser.,Liquor
NABCA Item Ship Point,nABCAItemShipPoint,Point from which the item is shipped.,Liquor
NABCA Marine Insurance,nABCAMarineInsurance,Insurance for shipping overseas.,Liquor
NABCA Net Cost FOB Ship Point,nABCANetCostFOBShipPoint,"Cost of the item at the freight on board point, without any shipping charges, bailment charges, or any discounts applied.",Liquor
NABCA Ocean Freight,nABCAOceanFreight,Shipping charges for the item overseas.,Liquor
NABCA Order Type,nABCAOrderType,"Products are either State Stock, Bailment, or Special Purchase Order Plan. State Stock items are stocked by the state. Bailment items are when a state rents space in a warehouse and the supplier pays a fee to store the items there. Special Purchase Order Plan indicates whether the item is a special listing. This attribute identifies, which of these three order types is appropriate.",Liquor
NABCA Price Remarks,nABCAPriceRemarks,Any remarks associated with the case price and/or the difference in the current price compared to the previous price.,Liquor
NABCA Pricing Terms,nABCAPricingTerms,The terms that the state agreed to pay for the product.,Liquor
NABCA Representative For The State Address,nABCARepresentativeForTheStateAddress,Address of State Representative.,Liquor
NABCA Representative For The State Fax,nABCARepresentativeForTheStateFax,Fax number of State Representative.,Liquor
NABCA Representative For The State License Number,nABCARepresentativeForTheStateLicenseNum,License Number of State Representative.,Liquor
NABCA Representative For The State Name,nABCARepresentativeForTheStateName,Identifies this particular supplier's State Representative.,Liquor
NABCA Representative For The State Telephone,nABCARepresentativeForTheStateTelephone,Telephone number of State Representative.,Liquor
NABCA Supplier Address,nABCASupplierAddress,Supplier's Address.,Liquor
NABCA Supplier Fax,nABCASupplierFax,Supplier's fax number.,Liquor
NABCA Supplier Federal ID Number,nABCASupplierFederalIDNumber,Supplier's Federal Identification Number.,Liquor
NABCA Supplier State License Permit Number,nABCASupplierStateLicensePermitNumber,Supplier's state license or permit number.,Liquor
NABCA Supplier Telephone,nABCASupplierTelephone,Supplier's telephone.,Liquor
NABCA US Freight,nABCAUSFreight,Shipping charges for the item within the U.S.,Liquor
Origin Of Wine Code,originOfWineCode,"Indicates the country, region and sub-region where the wine has been produced. The levels of origin required are sometimes regulated, therefore the values represent a variety that allows a recipient to choose which level is needed.",Liquor
Percentage Of Alcohol By Volume Measurement Precision Code,percentageOfAlcoholByVolumeMeasurementPrecisionCode,"Indicates the precision of the measure for the percentage of alcohol by volume on label e.g. Alc. < 0,5 vol.",Liquor
Primary Added Flavoring Code,primaryAddedFlavouringCode,The flavoring which has been added to the alcohol product. This is the primary addition.,Liquor
Secondary Added Flavoring Code,secondaryAddedFlavouringCode,The flavoring which has been added to the alcohol product. This is the secondary addition.,Liquor
Sweetness Level Of Alcoholic Beverage Code,sweetnessLevelOfAlcoholicBeverageCode,"Indicates the descriptive term that is used by the product manufacturer to identify the sweetness of the alcoholic beverage. These are sometimes placed on a label. In some markets, the term is based on the amount of sugar content according to local regulation.",Liquor
Vintage,vintage,The year in which the majority of ingredients are harvested and/or the alcoholic beverage is produced. Determination as to whether the vintage year is the harvest date or production date is according to requirements in the Target Market.,Liquor
Vintner,vintner,"The name of the person who is hired by a winery or wine company who is responsible for many of the processes in the preparation, taste and quality of the wine produced. The science of wine making is refered to oenology. The vintner is the oenologist.",Liquor
Are Demonstration Items Available?,areDemonstrationItemsAvailable,Indicates whether or not product demonstrations are available for the item.,Marketing
Strongness Of Basic Taste Code,basicTasteInformation/strongnessOfBasicTasteCode,Indicates the descriptive term that is used by the product manufacturer to identify the strongness of basic taste of the product.,Marketing
Type Of Basic Taste Code,basicTasteInformation/typeOfBasicTasteCode,"Indicates a basic taste of a product,  and together with strongnessOfBasicTaste this indicates the level of the basic taste in a product.",Marketing
Sequence Number,brandMarketingDescription/sequenceNumber,Sequence Number for Brand Marketing Description,Marketing
Brand Marketing Message,brandMarketingDescription/statement,"The number of batteries required to operate the product.

Used by the buyer to inform consumer of the number of removable or reusable batteries to operate the product.",Marketing
Built-In Product Type,builtInProductType,The type of product that the trade item is combined with for example a VCR in the case that a television is combined with a VCR.,Marketing
Marketing Message,channelSpecificMarketingInformation/channelSpecificMarketingMessage/marketingMessage,A marketing message for the trade item relating to a specific trade channel such as CONVENIENCE.,Marketing
Sequence Number,channelSpecificMarketingInformation/channelSpecificMarketingMessage/sequenceNumber,Sequence Number for channel specific marketing message,Marketing
Marketing Message,channelSpecificMarketingInformation/channelSpecificShortMarketingMessage/marketingMessage,A short marketing message associated to the Trade item for a specific trade channel.,Marketing
Sequence Number,channelSpecificMarketingInformation/channelSpecificShortMarketingMessage/sequenceNumber,Sequence Number for channel specific short marketing message,Marketing
Marketing Trade Channel,channelSpecificMarketingInformation/marketingTradeChannel,The trade channel associated with the marketing information.,Marketing
Compatible Brands,compatibleBrands,A list of the brands of item which are most commonly compatible with the item.,Marketing
Contact Party Type,contactPartyType,The role of the individual or department that can be contacted to provide additional information.,Marketing
Coupon Family Code,couponFamilyCode,"This code is printed in bar code form on manufacturer coupons. The code is associated with a single base or consumer unit or a ""family"" of consumer units. It is scanned on retailer POS systems to facilitate credit for valid consumer purchases. Requires exactly 3 characters for TM US.",Marketing
Target Consumer Gender,gender,Indicates for whom the product is designed,Marketing
Target Market Country Code,illegalToAdvertiseTargetMarket/targetMarketCountryCode,The code that identifies the target market. The target market is at country level or higher geographical definition and is where a trade-item is intended to be sold.,Marketing
Target Market Subdivision Code,illegalToAdvertiseTargetMarket/targetMarketSubdivisionCode,The Code for country sub-division definition used to indicate the geo-political subdivision of the target market (=country).,Marketing
Is Limited Edition,isLimitedEdition,"Indicator to denote the  product is a limited edition. Limited editions have small production sizes, or have a special marking, autograph or other characteristic which differentiate it from a full large scale production run of the same or similar products.",Marketing
Is Trade Item a Promotional Unit?,isTradeItemAPromotionalUnit,"An indicator used to point out those trade items, which are promotions from regular line articles.",Marketing
Is Trade Item Considered Collectible Or Memorabilia,isTradeItemConsideredCollectibleOrMemorabilia,Is the trade item considered collectible by consumer or evokes memories to the end consumer.,Marketing
Item Presented Date Time,itemPresentedDateTime,The date and time the item was presented to Category Manager for acceptance.,Marketing
Campaign End Date,marketingCampaign/campaignEndDateTime,The date suggested by the supplier for the campaign to end. It indicates the end of a marketing campaign.,Marketing
Campaign Name,marketingCampaign/campaignName,"Name of the sales or marketing campaign, for which the trade item is intended. Input of user-defined text in order to assign the item to a specific marketing campaign.",Marketing
Campaign Start Date,marketingCampaign/campaignStartDateTime,The date suggested by the supplier for the campaign to start. It indicates the beginning of a marketing campaign.,Marketing
Marketing Circular Copy,marketingCircularCopy,"Supplier's descriptive and comparative product information, in a bullet copy format, used as content for marketing materials such as circulars, newspaper ads and coupons. May contain up to twenty bullet copy lines. If utilized, should include product name. May include features and benefits in rank order of importance, comparative information and certification information.",Marketing
Media Type,mediaLocator/mediaType,What type of media is this value?,Marketing
Media Location,mediaLocator/mediaTypeDetails/mediaLocation,Add an Image location/URL for this media.  Example: https://www.myimage.com/image.jpg,Marketing
Media SubType,mediaLocator/mediaTypeDetails/mediaSubType,Media SubType,Marketing
Not Legal to Advertise,notLegalToAdvertise,"Indicates whether or not the item is not legal to advertise by province. E.g. some products such as tobacco, beer, over-the-counter drugs cannot be legally advertised according to provincial regulations.",Marketing
Operator Description,operatorDescription,Used to relate pertinent product information to operators who sell the final product to consumers.,Marketing
Person Or Department Name,personOrDepartmentName,The name of the individual or department that can be contacted to provide additional information.,Marketing
Presentation Acceptance Date Time,presentationAcceptanceDateTime,The date and time terms for submitting and item for presentation were accepted by the vendor. The information is used for auditing purposes.,Marketing
Free Quantity of Next Lower Level & UOM,promotional/freeQtyOfNextLowerLevel,"The numeric quantity of free items in a combination pack. If the free quantity promotional trade item is simple or is a multi-pack, the free quantity is populated. The unit of measure must be the same as the unit of measure of the Net Content of the Child Trade Item.",Marketing
Free Quantity of Product & UOM,promotional/freeQtyOfProduct,To indicate the quantity that is free. It is needed to update the price per unit of measure as displayed on the shelves. The unit of measure must be the same as the unit of measure of the Net Content.,Marketing
Non-Promotional Product GTIN,promotional/nonPromotionalItem,"The Global Trade Item Number (GTIN) that uniquely identifies the original product/service to provide a link between the promotional product GTIN and the original GTIN.

Used to indicate the original non-promotional GTIN (e.g., to prove to regulators the reality of the promotion); used in shelf planning. Used to communicate the link between original and promotional products for supply chain workflows.",Marketing
Promotion Type Code,promotional/promotionalTypeCode,"Valid value to identify the type of promotional variation of the base product.

Used by the seller to communicate to the buyer the type of promotional variation of the product. Used by the buyer in managing business processes such as ordering, selling and merchandising. May be used in conjunction with the Non-Promotional Product GTIN. (Refer to GTIN Management Standards (https://www.gs1.org/1/gtinrules) if a GTIN change is required.)",Marketing
Sample Consumer Unit Send Date Time,sampleConsumerUnitSendDateTime,The date and time that a sample consumer unit item was sent for the trade item.,Marketing
Sample URL,sampleURL,Provide sample image URLs for the item.  ,Marketing
Seasonal Product Indicator,season/isTradeItemSeasonal,"Indicates if the product is seasonal or offered during specific times of the year.

Used by the buyer to make procurement decisions. May be used by the buyer to update digital content.",Marketing
Seasonal End Date,season/seasonalAvailabilityEndDate,This element indicates the end date of the seasonal availability of the trade item.The seasonal availability can be different from the ordering time and especially from the dispatching time. The availability is more like an intention of the supplier as to how long he wants to offer the product. The dispatching time is more useful for the DC and the outlet warehousing.,Marketing
Seasonal Start Date,season/seasonalAvailabilityStartDate,This element indicates the start date of the seasonal availability of the trade item. Reference related attribute in Item document.European Requirement. The seasonal availability can be different from the ordering time and especially from the dispatching time. The availability is more like an intention of the supplier as to how long he wants to offer the product. The dispatching time is more useful for the DC and the outlet warehousing.,Marketing
Season Calendar Year,season/seasonCalendarYear,This element indicates the calendar year in which the trade item is seasonally available.This item is seasonally available in the year 2002.European Requirement. This element applies to cases where the supplier has items in many different seasons or if multiple calendar years were involved. This attribute might be considered as an implementation attribute that could be done in different manners in the GDSN and in the one-to-one environment. Can be used for merchandising.,Marketing
Season Name,season/seasonName,This element defines the season applicable to the item.,Marketing
Season Parameter,season/seasonParameter,"Indication of the season, in which the trade item is available, i.e. assignment to one of the following collection periods: spring/summer, autumn/ winter or all year around. It is repeatable if more than one season is indicated: Spring, Summer, Autumn, Winter, and All year (available throughout the year). The seasonal parameter is more an information for the search of data.",Marketing
Short Trade Item Marketing Message,shortTradeItemMarketingMessage/marketingMessage,A short marketing message associated to the Trade item.,Marketing
Sequence Number,shortTradeItemMarketingMessage/sequenceNumber,A sequence number associated to the Trade item.,Marketing
Sequence Number,story/sequenceNumber,Sequence Number for Trade Item Story.,Marketing
Trade Item Story,story/tradeItemStory,Allows suppliers to tell the back story of the product and inform their consumers.,Marketing
Street Date,streetDate,Provide the date that the item will be available.,Marketing
Street Date Type,streetDateType,Select the type of street date provided. DELIVER_BY indicates that the the item will be delivered to the customer by the provided street date. SHIP_BY indicates that the item will be shipped by the provided street date.,Marketing
Target Consumer Age,targetConsumerAge,"The description of the intended age or age range of the consumer.

Used by the buyer to provide the target age range to the consumer. May be used by the buyer to guide shelf placement.",Marketing
Target Consumer Age Group,targetConsumerAgeGroup,"A description of a general age group the product is designed for. This would not include the actual age ranges. For example Infant, Toddler, Child, Teen, Adult.",Marketing
Target Consumer Age Group Code,targetConsumerAgeGroupCode,A code depicting the general age group the product is designed for example BABY.,Marketing
Target Consumer Gender,targetConsumerGender,Identifies the target consumer gender for which a product has been designed.,Marketing
Target Consumer Maximum Usage,targetConsumerUsage/targetConsumerMaximumUsage,"Measurement of the maximum usage criteria for the target consumer that will use the product for example maximum age, height, etc.",Marketing
Target Consumer Minimum Usage,targetConsumerUsage/targetConsumerMinimumUsage,"Measurement of the minimum usage criteria for the target consumer that will use the product for example minimum age, height, etc.",Marketing
Target Consumer Usage Type Code,targetConsumerUsage/targetConsumerUsageTypeCode,"A code identifying the type of usage criteria for the target consumer that will use the product for example AGE, HEIGHT.",Marketing
Tasting Notes,tastingNotes,"Written testimony about a products aroma, flavour, texture for example fruity.",Marketing
Case Description,tradeItemCaseInformation/caseDescription,"Describes the shape and characteristics of the case the trade item will be inside. For example watches come in unique cases. Examples include leather bound case, designer matching case, velvet lined box.",Marketing
Feature Benefit Extended,tradeItemFeatureBenefitExtended,Element for consumer facing market-ing content to describe the key features or benefits of the style suitable for display purposes.,Marketing
Product Grade,tradeItemGradeInformation/gradeCode,"The description of the product's evaluation or ranking or class, such as quality, size, weight.

Used by the buyer to communicate to the consumer the grade associated to the product. Used by the buyer for verification and compliance. Used by the buyer in assortment planning.",Marketing
Trade Grade Information Code Agency,tradeItemGradeInformation/gradeCodeAgency,An agency that manages a grade code list.,Marketing
Trade Grade Information Code List Identification,tradeItemGradeInformation/gradeCodeListIdentification,The identification of a code list which includes grades for an item or service.,Marketing
Trade Item Included Accessories,tradeItemIncludedAccessories,Any included object or device not part of the core product itself but which adds to its functionality or use,Marketing
Trade Item Introduction Year,tradeItemIntroductionYear,The date the GTIN and/or trade item is introduced into the marketplace. Once established this does not change. ,Marketing
Usage Colour Description,usageColourDescription,"A description of the usage of colour(s) the trade item offers such as pens, markers, ink pads, printer cartridges and other implements that provide colour. Examples include black, white",Marketing
Was Verified By Category Manager?,wasVerifiedByCategoryManager,Indicates whether or not the product was sampled by the Category Manager.,Marketing
Website Launch Date,websiteLaunch/date,Provide the anticipated product site launch date Example: 2017-07-20,Marketing
Website Launch Type,websiteLaunch/type,Type of Website Launch,Marketing
Consumer Age Group,wmConsumerAgeGroup,General grouping of ages into commonly used demographic labels.,Marketing
Player Age Range,ageRangeDescription,Note: This attribute is being deprecated in a future release. Use targetConsumerAge from TargetConsumer class in MarketingInformationModule. Description of the recommended age range of participating players.,Media and Entertainment
Album Capacity,albumCapacity,Describes the number of photos the album can hold. Values are in number of packets (Pkt).,Media and Entertainment
Album Capacity UOM,albumCapacityUOM,The unit of measurement associated with the album capacity.,Media and Entertainment
Asp Ratio Desc Code,aspectRatio/aspectRatioDescriptionCode,A code that indicates the aspect ratio description.,Media and Entertainment
Asp Ratio Dim Code,aspectRatio/aspectRatioDimensionCode,A code that indicates the aspect ratio dimension.,Media and Entertainment
Audio Sound Type Code,audioSoundTypeCode,A code that indicates the type of audio sound available on the trade item.,Media and Entertainment
Audio Visual Media Contributor Name,audioVisualMediaContentInformation/distributionMediaContentInformation/audioVisualMediaContributor/audioVisualMediaItemContributorName,"The name of the contributor of the media content for example artist, producer, director.",Media and Entertainment
Audio Visual Media Contributor Type Code,audioVisualMediaContentInformation/distributionMediaContentInformation/audioVisualMediaContributor/audioVisualMediaItemContributorTypeCode,"A code identifying the type of contributor to media content for example artist, producer, director.",Media and Entertainment
Available Language Code,audioVisualMediaContentInformation/distributionMediaContentInformation/availableLanguageCode,The available languages used to interface with the consumer.,Media and Entertainment
Closed Captioning Code,audioVisualMediaContentInformation/distributionMediaContentInformation/closedCaptioningCode,"A code that indicates if the film has closed captions, no closed captions or if this information is unknown.",Media and Entertainment
Disc Number,audioVisualMediaContentInformation/distributionMediaContentInformation/discNumber,"The number allocated to a disc, beginning with 1",Media and Entertainment
Audio Visual Media Contributor Name,audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/audioVisualMediaContributor/audioVisualMediaItemContributorName,"The name of the contributor of the media content for example artist, producer, director.",Media and Entertainment
Audio Visual Media Contributor Type Code,audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/audioVisualMediaContributor/audioVisualMediaItemContributorTypeCode,"A code identifying the type of contributor to media content for example artist, producer, director.",Media and Entertainment
Track Number,audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/trackNumber,"The number allocated to a disc, beginning with 1",Media and Entertainment
Track Time (HH:MM:SS),audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/trackTime,The length of the track expressed in hours and minutes and seconds.,Media and Entertainment
Track Title,audioVisualMediaContentInformation/distributionMediaContentInformation/distributionMediaTrackInformation/trackTitle,The name of the the track or section of the audio visual media trade item.,Media and Entertainment
Dubbed Language Code,audioVisualMediaContentInformation/distributionMediaContentInformation/dubbedLanguageCode,A code that identifies the dubbed language of a film.,Media and Entertainment
Dubbed Subtitled Code,audioVisualMediaContentInformation/distributionMediaContentInformation/dubbedSubtitledCode,"Describes if the movie is dubbed, subtitled or both.",Media and Entertainment
Original Language Code,audioVisualMediaContentInformation/distributionMediaContentInformation/originalLanguageCode,The code of the language in which the film is released. It is the language spoken on the screen.,Media and Entertainment
Subtitled Language Code,audioVisualMediaContentInformation/distributionMediaContentInformation/subtitledLanguageCode,A code that identifies the language used in a trade item's subtitles.,Media and Entertainment
Distribution Media Count,audioVisualMediaContentInformation/distributionMediaCount,The quantity of media storage devices that are included in the package for the purposes of storing the software.,Media and Entertainment
Distribution Media Type Code,audioVisualMediaContentInformation/distributionMediaTypeCode,"The type of media storage devices that are included in the package for the purposes of storing the software for example memory sticks, discs, cartridges.",Media and Entertainment
DVD Region Code,audioVisualMediaContentInformation/dvdRegionCode,A code that identifies the region in which the DVD will be sold. Only DVDs and DVD players with matching codes will work unless the DVD player has been “de-zoned”.,Media and Entertainment
Game Format,audioVisualMediaContentInformation/gameFormatCode,Code that identifies the electronic environment or system needed to use the electronic game.,Media and Entertainment
Is Digital Download Available?,audioVisualMediaContentInformation/isDigitalDownloadAvailable,Indicates if the title is available in the digital download format.,Media and Entertainment
Number of Episodes,audioVisualMediaContentInformation/numberOfEpisodes,"The number of episodes in the season or set. For example: 2, 3 or 4.",Media and Entertainment
Feature Runtime Mins,audioVisualMediaContentInformation/runTimeMinutes,The length of a media item expressed in minutes.,Media and Entertainment
Audio Visual Media Date,audioVisualMediaDateInformation/audioVisualMediaDateTime,The date for audio or visual media products for example release date.,Media and Entertainment
Audio Visual Media Date Type Code,audioVisualMediaDateInformation/audioVisualMediaDateTypeCode,A code specifying the type of date for audio or visual media products for example release date.,Media and Entertainment
Collection Name,audioVisualMediaProductCollectionName,The name of a series of music publications grouped under a common theme. The name of the collection is printed on the package of the trade item.,Media and Entertainment
Audio Visual Media Product Collection Series Number,audioVisualMediaProductCollectionSeriesNumber,"Denotes which part of the series the media is part of for example Halloween II, Law & Order 7, South Park Season 12, Terminator 3, Star Wars II.",Media and Entertainment
Label Name,audioVisualMediaProductLabelName,The name of the company (called label in the music industry) that made the music publication.,Media and Entertainment
Product Line,audioVisualMediaProductLine,The name of the product line that the trade item belongs to. A product line is a price grouping.,Media and Entertainment
Product Title,audioVisualMediaProductTitle,Title of the audio visual media product.,Media and Entertainment
Award Prize Code,awardPrize/awardPrizeCode,"Indicates the achievement of the product in relation to a prize or award,eg winner, runner-up, shortlisted.",Media and Entertainment
Award Prize Country Code,awardPrize/awardPrizeCountryCode,An ISO standard code identifying the country in which a prize or award is given ,Media and Entertainment
Award Prize Description,awardPrize/awardPrizeDescription,A text that describes the awards a film won. ,Media and Entertainment
Award Prize Jury,awardPrize/awardPrizeJury,Free text listing members of the jury that awarded the prize. ,Media and Entertainment
Award Prize Name,awardPrize/awardPrizeName,The name of a prize or award which the product has received. ,Media and Entertainment
Award Prize Year,awardPrize/awardPrizeYear,The year in which a prize or award was given.,Media and Entertainment
Revenue - Domestic,boxOfficeRevenueDomestic,The revenue the film earned on the target market expressed in local currency.,Media and Entertainment
First Week Rev - Domestic,boxOfficeRevenueFirstWeekDomestic,The revenue the film earned on the target market for the first week expressed in local currency.,Media and Entertainment
Revenue - US,boxOfficeRevenueUS,The revenue the film earned on the US market expressed in US dollars.,Media and Entertainment
Revenue - Worldwide,boxOfficeRevenueWorldwideUSDollars,The revenue the film earned on all the markets expressed in US dollars.,Media and Entertainment
Digitization Level Code,digitalizationLevelCode,A code that indicates the way a record was produced.,Media and Entertainment
Edition,editionDescription,A text that describes the edition of the audio or visual media product.,Media and Entertainment
Product Genre,genreTypeCodeReference,The code of the genre of media item.,Media and Entertainment
Is Revenue Share Eligible?,isEligibleForRevenueShare,A boolean that indicates if the film is available for revenue share or not.,Media and Entertainment
Long Synopsis,longSynopsis,An extended text that describes the plot of a film.,Media and Entertainment
Max # of Players,maximumNumberOfPlayers,Maximum number of players that can participate in the game.,Media and Entertainment
Max Player Age,maximumPlayerAge,Note: This attribute is being deprecated in a future release. Use targetConsumerUsageTypeCode with the value AGE and targetConsumerMaximumUsage from TargetConsumerUsage class in MarketingInformationModule. Recommended oldest age for a game or publication.,Media and Entertainment
Min # of Players,minimumNumberOfPlayers,Minimum number of players that can participate in the game.,Media and Entertainment
Min Player Age,minimumPlayerAge,Note: This attribute is being deprecated in a future release. Use targetConsumerUsageTypeCode with the value AGE and targetConsumerMinimumUsage from TargetConsumerUsage class in MarketingInformationModule. Recommended youngest age for a game or publication.,Media and Entertainment
Movie Color Code,movieColourCode,"Identifies if the movie is in black and white, color or has been colorized.",Media and Entertainment
Pay Per View Window,payPerViewWindow,The number of days of the pay per view window. The pay per view window is the timeframe when a film is available as pay per view on a cable TV channel.,Media and Entertainment
Performance Type,performanceType,A text description that indicates the conditions in which the recording took place.,Media and Entertainment
Short Synopsis,shortSynopsis,A short text that describes the plot of a film,Media and Entertainment
Special Features,specialFeatures,A text that describes the contents of the trade item in terms of special features.,Media and Entertainment
Studio Name,studioName,The name of the studio.,Media and Entertainment
Target Audience,targetAudience,A description of the recommended audience of the music publication.,Media and Entertainment
Year of Production,yearOfProduction,The year during which the film was produced.,Media and Entertainment
Miscellaneous AVP Name,miscAVP/miscAVPName,Miscellaneous AVP Attribute Name,Miscellaneous AVP
Miscellaneous AVP Value,miscAVP/miscAVPValue,Miscellaneous AVP Attribute Value,Miscellaneous AVP
Child Nutrition Expiration DateTime,childNutritionLabel/childNutritionExpirationDateTime,The date upon which the child nutrition statement or label expires.,Nutritional
Alternate Text,childNutritionLabel/childNutritionLabelDocument/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Nutritional
Content Description,childNutritionLabel/childNutritionLabelDocument/contentDescription,Free form description of the content of the file.,Nutritional
File Creation Program,childNutritionLabel/childNutritionLabelDocument/fileCreationProgram,The program used in the creation of the digital asset.,Nutritional
File Effective End Date,childNutritionLabel/childNutritionLabelDocument/fileEffectiveEndDateTime,The date this image ceases to be the current image for this trade item. This attribute is optional. This attribute must be greater than the fileEffectiveStartDateTime if present.,Nutritional
File Effective Start Date,childNutritionLabel/childNutritionLabelDocument/fileEffectiveStartDateTime,The date this image is the current image for this trade item. This fileEffectiveStartDateTime must be present if the uniformResourceIdentifier is entered.,Nutritional
File Format Description,childNutritionLabel/childNutritionLabelDocument/fileFormatDescription,Free form description of the format of the file. This attribute is optional.,Nutritional
File Format Name,childNutritionLabel/childNutritionLabelDocument/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP. The fileFormatName must be present if the uniformResourceIdentifier is entered.,Nutritional
File Language,childNutritionLabel/childNutritionLabelDocument/fileLanguageCode,The specified language to which the digital asset is targeted.,Nutritional
File Name,childNutritionLabel/childNutritionLabelDocument/fileName,The name of the file that contains the external information.,Nutritional
File Optimal Viewer Name,childNutritionLabel/childNutritionLabelDocument/fileOptimalViewerName,The software to which this file was targeted.,Nutritional
File Origin Country,childNutritionLabel/childNutritionLabelDocument/fileOriginCountryCode,The country where the digital asset originated.,Nutritional
File Sequence Number,childNutritionLabel/childNutritionLabelDocument/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Nutritional
File Version,childNutritionLabel/childNutritionLabelDocument/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Nutritional
Image Facing,childNutritionLabel/childNutritionLabelDocument/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Nutritional
Image Orientation Type Code,childNutritionLabel/childNutritionLabelDocument/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Nutritional
Image State Code,childNutritionLabel/childNutritionLabelDocument/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Nutritional
Is Image Rendered,childNutritionLabel/childNutritionLabelDocument/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Nutritional
Is Primary File,childNutritionLabel/childNutritionLabelDocument/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Nutritional
Referenced File Type Code,childNutritionLabel/childNutritionLabelDocument/referencedFileTypeCode,The type of file that is being referenced,Nutritional
Title Text,childNutritionLabel/childNutritionLabelDocument/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Nutritional
Uniform Resource Identifier,childNutritionLabel/childNutritionLabelDocument/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is optional.",Nutritional
Child Nutrition Label Statement,childNutritionLabel/childNutritionLabelStatement,The text of the Child Nutrition Label as specified by the child nutrition product identification agency.,Nutritional
Child Nutrition Product Identification,childNutritionLabel/childNutritionProductIdentification,A child nutrition identification number of the child nutrition statement or label as provided by or through the authority of the child nutrition product identification agency.,Nutritional
Child Nutrition Qualified Value,childNutritionLabel/childNutritionQualifier/childNutritionQualifiedValue,"Reference or qualified value for the child nutrition value as specified in the child nutrition statement or label. For example, if a 4.5 ounce serving provides 1/8 cup red-orange vegetable, the childNutritionQualifiedValue is 4.5 ounces.",Nutritional
Child Nutrition Qualifier Code,childNutritionLabel/childNutritionQualifier/childNutritionQualifierCode,A qualifier to specify the type of equivalent measurement that is applicable to the item as specified in the child nutrition statement or label. Example: FRUIT_VEGETABLE_OR_FRUIT_VEGETABLE_ALTERNATIVE.,Nutritional
Child Nutrition Value,childNutritionLabel/childNutritionQualifier/childNutritionValue,"Actual value for the child nutrition qualifier as specified in the child nutrition statement or label. For example, if a 4.5 ounce serving provides 1/8 cup red-orange vegetable, the childNutritionValue is 1/8 cup.",Nutritional
Description On A Nutrient,descriptionOnANutrient,Description clarifying the nutrient information,Nutritional
Does Trade Item Carry USDA Child Nutrition Label?,doesTradeItemCarryUSDAChildNutritionLabel,"An indication that the trade item carries a USDA approved Child Nutrition Label. The USDA Child Nutrition (CN) Labeling Program provides food manufacturers the option to include a standardized food crediting statement on their product label. Labels must be approved by USDA, FNS prior to use and manufacturers must have quality control procedures and inspection oversight that meet the FNS requirements. Products produced in accordance with the CN Labeling Program are generally purchased by foodservice providers for FNS meal programs. http://www.fns.usda.gov/cnd/cnlabeling/default.htm",Nutritional
Food Composition Code,foodBeverageComposition/foodBeverageCompositionCode,A value assigned by the agency for the lookup of nutrient information that applies to regulatory nutrient information,Nutritional
Food Composition Agency Name Code,foodBeverageComposition/foodBeverageCompositionDatabaseCode,"The Localized nutrient agency that are needed for regulatory claims withing target markets. These agencies each have a database local for their market,.  Populate with ""USDA"" for known menu components.  To see the website of Target Market Nutrient databases and their associated Agencies check here :  http://www.eurofir.net/eurofir_knowledge/europe. ",Nutritional
Food Composition Description,foodBeverageComposition/foodBeverageCompositionDescription,A text description of either the associated value or the actual database entry lookup as some databases do not contain value lookups of nutrient representation,Nutritional
German Food Code And Nutrient Base,germanFoodCodeAndNutrientBase,Indication of the German Food Code and Nutrient Base that corresponds for this item.,Nutritional
Interpretive Term Optional Nutrient,interpretiveTermOptionalNutrient,The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.,Nutritional
Interpretive Term Saturated Fat,interpretiveTermSaturatedFat,The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.,Nutritional
Interpretive Term Sodium,interpretiveTermSodium,The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.,Nutritional
Interpretive Term Sugars,interpretiveTermSugars,The interpretive term associated with the Nutrient Content Declaration on the Health Star Rating Label.,Nutritional
Not Significant Source Of Nutrient,notSignificantSourceOfNutrient,This will allow for the population of nutrient information where the listed nutrient is in such a trace amount that a statement is placed on the packaging that it is not of significance.,Nutritional
Nutrient Format Type Code Reference Code,nutrientFormatTypeCodeReference/code,The code which describes the nutrient format type,Nutritional
Nutrient Format Type Code Reference Description,nutrientFormatTypeCodeReference/codeDescription,The description for Nutrient Format Code Reference,Nutritional
Nutrient Format Type Code Reference Code List Agency Code,nutrientFormatTypeCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Nutritional
Nutrient Format Type Code Reference Code List Agency Name,nutrientFormatTypeCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Nutritional
Nutrient Format Type Code Reference Code List Name,nutrientFormatTypeCodeReference/codeListName,The name of the codelist.,Nutritional
Nutrient Format Type Code Reference Code List URI,nutrientFormatTypeCodeReference/codeListURI,The URI for the codelist.,Nutritional
Daily Intake Reference,nutrientInformation/dailyValueIntakeReference,"The statement to the consumer describing the basis for calculating the percentage of nutrients that contribute to the recommended daily intake set by regulation.

Used by the consumer to compare nutrients in a product to the recommended daily intake values.",Nutritional
Nutrient Basis,nutrientInformation/nutrientBasisQuantity,"The value, with its unit of measure, that forms the basis for referring to the nutrient content that appears on the product label.

Used to inform the consumer of the basis value, with its defined unit of measure, used to calculate the amount of nutrients contained.",Nutritional
Nutrient Basis Description,nutrientInformation/nutrientBasisQuantityDescription,"The description or additional information of the serving size for the product.

Used to inform the consumer of the recommended serving size and any additional information upon which the nutrients and energy are based.",Nutritional
Nutrient Basis Type Code,nutrientInformation/nutrientBasisQuantityTypeCode,"Valid value the nutritional information is based on a set measure or a serving size.

Used to inform the buyer and/or the consumer of the basis for the nutrient energy information. Used by the buyer for menu planning, recipe creation, analysis. Used in conjunction with Nutrient Basis.",Nutritional
Percentage of Daily Value Intake,nutrientInformation/nutrientDetail/dailyValueIntakePercent,"The amount of the nutrient contained in the product as a percentage of the daily intake reference.

Used to inform the consumer of nutrient as a percentage of daily recommended intake.",Nutritional
Daily Value Intake Percent Measurement Precision Code,nutrientInformation/nutrientDetail/dailyValueIntakePercentMeasurementPrecisionCode,"Valid value for the specified nutrient content for the Daily Value Intake percentage is exact or approximate or less than as required by regulation.

Used to inform the consumer of the precision of the nutrient declaration.",Nutritional
Description On Nutrient Qualifier,nutrientInformation/nutrientDetail/descriptionOnNutrientQualifier,"The qualifier from the descriptionOnNutrient applies to a specific nutrient. Sometimes an actual nutrient quantity or % are not given, instead only a qualifier. Example descriptionOnNutrient = * Daily Value Intake does not apply. Then this would only be the * at the nutrient level. Examples include *, @, etc",Nutritional
Expressed As Part Of,nutrientInformation/nutrientDetail/expressedAsPartOf,"The nutrient type that is expressed as part of another nutrient total. This attribute represents the main nutrient. Example: Carnitine expressed as part of Protein. This attribute is Protein, total (PRO-) and the nutrientTypeCode is Carnitine (L_CARNITINE).",Nutritional
Is Nutrient On Front Of Package,nutrientInformation/nutrientDetail/isNutrientOnFrontOfPackage,Indication the nutrient is listed on the front of package as a additional consumer declaration to the traditional nutritional fact panel.,Nutritional
Nutrient Value Precision Code,nutrientInformation/nutrientDetail/measurementPrecisionCode,"Valid value for whether the specified nutrient content is approximate or less than as required by regulation and as shown on the product package.

Used to inform the consumer of the nutrient content value precision as declared.",Nutritional
Nutrient Name on Package,nutrientInformation/nutrientDetail/nutrientNameOnPackage,The name of the nutrient as it is listed on the fact panel on the package. Only used when the Nutrient Name on Package is different than the Nutrient Code (nutrientTypeCode). Frequently used for supplements.,Nutritional
Nutrient Source,nutrientInformation/nutrientDetail/nutrientSource,Information about the source ingredient from which the nutrient value is derived.,Nutritional
Nutrient Code,nutrientInformation/nutrientDetail/nutrientTypeCode,"Valid value for a nutrient or energy element that is found in the product.

Used to inform the consumer and the retailer of the nutrient or energy elements that are found in the product.",Nutritional
Nutrient Value Derivation,nutrientInformation/nutrientDetail/nutrientValueDerivationCode,"The derivation of the values, percent of intake and quantity contained, provided in the nutrient class.",Nutritional
Nutrient Value Derivation Code,nutrientInformation/nutrientDetail/nutrientValueDerivationCode,"The derivation of the values, percent of intake and quantity contained, provided in the nutrient class.",Nutritional
Nutrient Quantity,nutrientInformation/nutrientDetail/quantityContained,"The value that indicates the amount of nutrient element or energy contained in the product per defined quantity with its unit of measure.

Used to inform the consumer and the buyer of the nutrients and energy contained in a product and its unit of measure.",Nutritional
Nutritional Preparation Code,nutrientInformation/preparationStateCode,"Valid value for whether the product is unaltered versus a product that has been altered by consumer preparation, in conjunction with the nutritional panel.

May be used by the consumer in conjunction with the nutritional panel to understand the differences in full nutritional values, prepared versus unprepared.",Nutritional
Nutrient Additional Info,nutrientInformation/saNutrientAdditionalInfo,Additional Nutrients.,Nutritional
Nutritional Claim,nutrientInformation/saNutritionalClaim,Indicates claims on packaging made about the nutrient.,Nutritional
Serving Size,nutrientInformation/servingSize,"The value, with its unit of measure, that forms the basis for referring to the nutrient contents that appear on the product label, for example: ""0.33 cup"" and/or ""42 g"".

Used to inform the consumer of the basis value, with its defined unit of measure, used to calculate the amount of nutrients contained.",Nutritional
Serving Size Description,nutrientInformation/servingSizeDescription,"The description or additional information of the serving size for the product, for example: ""1/3 cup (42 g"".

Used to inform the consumer of the recommended serving size and any additional information upon which the nutrients and energy are based on.",Nutritional
Servings Per Package Description,nutrientInformation/servingsPerPackageDescription,The total number of servings based upon the serving size contained in the package for example about 24.,Nutritional
Nutrient Declarations Indicator,nutrientRelevantDataProvided,"Indicator to confirm the relevant nutrient data provided for the product is complete.

Used by the seller to inform the buyer that the nutrient data is confirmed as complete.",Nutritional
Nutrient Relevant Data Provided DateTime,nutrientRelevantDataProvidedDateTime,The date upon which the isNutrientRelevantDataProvided indicator was last updated.,Nutritional
Nutrition Label Type Code,nutritionLabelTypeCode,Code indicating that the trade item is eligible for certain nutritional labeling programs according to a specific regulation ,Nutritional
Optional Nutrient Code,optionalNutrientCode,"A single positive nutrient that food companies may choose to display in addition to the prescribed nutrients on the Health Star Rating Label.   Optional nutrients are defined as properties of food in Schedule 1 of Standard 1.2.7 – Nutrition, Health and Related Claims of the FSC. ",Nutritional
USDA Nutrient Database Number,uSDANutrientDatabaseNumber,The record number applicable to the trade item from the USDA Nutrient Database. This record number is the link in the Nutrient Database to more specific nutrient information for the item. Many times the item is not required to carry a nutrient label and this database will carry the information needed by downstream partners. Example: 12030,Nutritional
Consumer Notice,consumerNotice,Indicates whether or not a product is subject to Proposition 65 rules and regulations,Packaging
Package Disclaimers,consumerPackageDisclaimers/consumerPackageDisclaimer,Additional information that should be used in advertising and in displaying.,Packaging
Consumer Warning Description,consumerWarningInformation/consumerWarningDescription,"A description associated with a specific warning type for example if the consumerWarningTypeCode is AGE, the consumerWarningDescription would be “For ages 15 and over”.",Packaging
Consumer Warning Type Code,consumerWarningInformation/consumerWarningTypeCode,Indicate if the warning information given in the consumer warning description concerns a specific distinctive feature/ability of the user as age (e.g. Minimum Age 3 years) or weight (e.g. Maximum Weight 20 Kilogram).,Packaging
Display Type Code,displayTypeCode,"Valid value for the type of product display.

Used to communicate display readiness and configuration.",Packaging
Does Packaging Material Contain Latex,doPackagingMaterialContainLatex,An indication that that a packaging material is made from or contains latex which refers generically to a stable dispersion (emulsion) of polymer microparticles in an aqueous medium.,Packaging
Annual Operating Cost,energyGuide/annualOperatingCost,Specify the Energy Guide annual operationg cost value. Example: 132 dollars,Packaging
Energy Guide Type,energyGuide/type,Specify the disclosure statement that this cost is associated with.,Packaging
Environmental Levy Applicable by Province,environmentalLevyApplicableByProvince,This is a code that is used to identify packaging features valuable for consumers or any party in the supply chain.,Packaging
Batch Number Indicator,hasBatchNumber,"Indicator if the item has a batch or lot number.

Used by the seller to communicate to the buyer products that are controlled for recalls. Used by the buyer for inventory control processes.",Packaging
Has Display Ready Packaging?,hasDisplayReadyPackaging,"Indicates that the Trade Item has Display Ready Packaging (also referred to as Shelf Ready Packaging or Retail Ready Packaging). Display Ready Packaging can be exhibited on the floor, a shelf or other location. It may or may not require some modification e.g. to raise a flap. If modifications are necessary, the measurements would be advised for the trade item as prepared for display.",Packaging
Is Bar Code ID Different Than Packaging?,isBarCodeIdDifferentThanPackaging,An indicator that signals the bar code identifier on the trade item package is the same as the trade item identifier used in GDSN.,Packaging
Net Content Declared,isNetContentDeclaration,This field is used to facilitate local business rules where a declaration of a trade item's net content is not on the product label e.g.UK under 50g.legislation.,Packaging
Is Packaging Labelled With Drug Facts,isPackagingLabelledWithDrugFacts,"Indicates if the item has drug facts labeling. A drug fact panel of the trade item is a label usually contains such items as active ingredients, uses, warnings, purpose, directions, etc.",Packaging
Is Packaging Labelled With Supplements,isPackagingLabelledWithSupplements,Indicator to denote the item is required to bear a Supplement Facts Panel which provides details about the nutrients and ingredients contain in the item.,Packaging
Is Price Indicated on Trade Item?,isPriceIndicatedOnTradeItem,Indication whether the retail price is printed human readble on the trade item.,Packaging
Is Set,isSet,"Indicator to denote the item consists of two or more different items sold together as a set. Example: A bedding set that includes sheets, pillow shams, and a comforter.",Packaging
Is Trade Item Marked With Biocide?,isTradeItemMarkedWithBiocide,Is Trade Item Marked With Biocide?,Packaging
Is Travel Size,isTravelSize,Please indicate whether the product is a smaller version of a larger-sized product. Example: Y; N (Please select a value from the drop-down below),Packaging
Labelling Additional Phrase,labellingAdditionalPhrase,"An optional additional phrase added to the Label. For example ""with Canadian maple syrup and New Zealand apples"".",Packaging
Labelling Australian Content Percentage,labellingAustralianContentPercentage,The data for this attribute is used to replace the Percentage string from the Labelling Ingredient Statement attribute.,Packaging
Labelling Country of Origin,labellingCountryOfOrigin,The data for this attribute is used to replace the Country string from the Labelling Logos attribute.,Packaging
Labelling Get Details,labellingGetDetails,"If additional contact information is required to be provided to the consumer. For example ""Telephone +61 3 9550 3555 for more information"".",Packaging
Labelling Ingredient Statement,labellingIngredientStatement,Part two of the text provided on the Country of Origin Labelling Logo. Additional details may be required depending on the text string that is used.,Packaging
Labelling Logos,labellingLogos,Part one of the text provided on the Country of Origin Labelling Logo. Additional details may be required depending on the text string that is used.,Packaging
Labelling Packed Statement,labellingPackedStatement,Part three of the text provided on the Country of Origin Labelling Logo.,Packaging
Labelling Product Name,labellingProductName,The data for this attribute is used to replace the Product Name string from the Labelling Logos attribute.,Packaging
Local Packaging Marked Label Accreditation CodeReference,localpackagingMarkedLabelAccreditationCodeReference,Used for markings on package that are locally managed and are not regulatory in nature. Use local code lists to populate this attribute.,Packaging
Marked Lot Number,markedLotNumber,Identifies that the product is marked with a lot number.,Packaging
Number of Packages for Ser Pieces GTIN,numberOfPackagesForSerPiecesGTIN,The total number of separately packaged components comprising a single trade item.,Packaging
Offer on Pack,offerOnPack,Contains details of any on pack product offer (consumer or traded).,Packaging
Package And Storage About Product,packageAndStorageAboutProduct,"Describes special packaging features or the type of containers the product is packaged in (carton or bag with poly-lining, or reusable plastic tubs) and any special storage instructions. Accented characters may be used.",Packaging
Package Date Reason Type,packageDateReasonType,Indication that the package date is voluntary information.,Packaging
Packaging Category,packagingCategory,"Identifies the hierarchical level of the packaging element, i.e. primary, secondary or tertiary. For example: a bottle in a cardboard box displayed on a shelf. The primary hierarchical level is the bottle (plastic or glass), the secondary level would be the box (cardboard), and the tertiary level would be the film around the pallet.",Packaging
Consumer Friendly Date On Packaging Description,packagingDate/consumerFriendlyDateOnPackagingDescription,"The exact textual type of date on the packaging. Examples: Used By, Freeze By, Exp Date, Best Before, etc.",Packaging
Packaging Marked Date Format,packagingDate/tradeItemDateOnPackagingFormatName,"The format that the date is printed on the package for example YYYY: year, YY: year in century, MM: month number, MMM: month short name, WW: week of year, DD: day of month, D: day of week (Monday=1), ' '-: space and hyphen.",Packaging
Packaging Date Format Type,packagingDate/tradeItemDateOnPackagingFormatTypeCode,A category of date formats for example calendar or ordinal date.,Packaging
Packaging Date Location,packagingDate/tradeItemDateOnPackagingLocation,Free text detailing the location of the date marking on the packaging.,Packaging
Packaging Date Type Code,packagingDate/tradeItemDateOnPackagingTypeCode,"Valid value for the type of date on the package to the buyer and consumer.

Used by the consumer to understand the meaning of the date on the package and make decisions.
Used by the buyer for inventory management processes.",Packaging
Type of Product Changes After Date Code,packagingDate/typeOfProductChangesAfterDateCode,"The code describing the changes that occur to the product after the marked date on package or item. The product may no longer be usable, provide benefit, suffer quality degradation or may still be usable but without guarantee or unable to provide all described functionality.",Packaging
Average Distance Travelled To Point Of Packaging Code,packagingInformation/averageDistanceTravelledToPointOfPackagingCode,"The average distance each packaging material travelled from the packaging material supplier to the point where the product and packaging are combined to form the trade item. ASSOCIATED BUSINESS RULES: If there are multiple factories, use the weighted average distance based on the volume from the factories. Supplier will provide the packaging code of each material they have provided for attribute packagingMaterialCode.",Packaging
Packaging Depth,packagingInformation/depth,"The depth of the packaging as measured according to the GDSN Package Measurement Rules. If the packaging dimensions is for a platform or pallet, the measurements for the platform itself are provided based on the orientation and tolerances for non-consumer trade items in the GDSN Package Measurements Rules.",Packaging
Does Packaging Have Wheels,packagingInformation/doesPackagingHaveWheels,"Indicates if packaging has wheels to facilitate its transportation. Wheels can be permanently fixed or could be detachable. This could apply to a number of packaging types such as trays, cages, boxes, etc.",Packaging
Packaging Height,packagingInformation/height,"The height of the packaging as measured according to the GDSN Package Measurement Rules. If the packaging dimensions is for a platform or pallet, the measurements for the platform itself are provided based on the orientation and tolerances for non-consumer trade items in the GDSN Package Measurements Rules.",Packaging
Industry Specific Packaging Type Code,packagingInformation/industrySpecificPackagingTypeCodeReference/code,A code describing packaging types specific to an industry for example alcoholic beverages. This attribute is populated using a Local Code List (LCL). Example: Growler a jug type used in the alcohol beer industry.,Packaging
Industry Specific Packaging Type Code Description,packagingInformation/industrySpecificPackagingTypeCodeReference/codeDescription,The description for Industry Specific Packaging Type Code Reference,Packaging
Industry Specific Packaging Type Code List Agency Code,packagingInformation/industrySpecificPackagingTypeCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Packaging
Industry Specific Packaging Type Code List Agency Name,packagingInformation/industrySpecificPackagingTypeCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Packaging
Industry Specific Packaging Type Code List Name,packagingInformation/industrySpecificPackagingTypeCodeReference/codeListName,The name of the codelist.,Packaging
Industry Specific Packaging Type Code List URI,packagingInformation/industrySpecificPackagingTypeCodeReference/codeListURI,The URI for the codelist.,Packaging
Is Packaging Exempt From Refuse Obligation,packagingInformation/isPackagingExemptFromRefuseObligation,Indication for the packaging of this item that there exists an exemption from refuse (disposal) obligations.,Packaging
Is Packaging Returnable?,packagingInformation/isPackagingReturnable,Trade item has returnable packaging. True equals package can be returned. This attribute applies to returnable packaging with or without deposit.,Packaging
Is Packaging Suitable For Air Shipment,packagingInformation/isPackagingSuitableForAirShipment,Determines whether or not the packaging is suitable for air shipment for passenger or cargo for example has it been air pressure tested. ,Packaging
Is Radio Frequency ID On Packaging,packagingInformation/isRadioFrequencyIDOnPackaging,Indicates that the packaging of the trade item is tagged with a Radio Frequency ID.,Packaging
Shipping Container Quantity,packagingInformation/numberOfUnitInShippingContainer/shippingContainerQuantity,The quantity of units contained in a shipping container for example 75 cases (75 CA).,Packaging
Shipping Container Quantity Description,packagingInformation/numberOfUnitInShippingContainer/shippingContainerQuantityDescription,"The quantity of the contents of the shipping container as described on the outside of the shipping container, for example 100 .5 oz envelopes ",Packaging
Shipping Container Type Code,packagingInformation/numberOfUnitInShippingContainer/shippingContainerTypeCode,"The type and size of the container in which the trade items composing the standard transport load (identified by a unique GTIN) are shipped by the consignor for international transport. This attribute should be populated using the ISO 6346 recommendation to indicate size and type codes of the shipping container. This code refers to the type of container and not the items inside. The first digit is the length of the container, the second is the height of the container, and the last two are the container type.",Packaging
Deposit Value Effective Date,packagingInformation/packagedeposit/depositValueEffectiveDate,First date that the deposit value is valid for the deposit code.,Packaging
Deposit Value End Date,packagingInformation/packagedeposit/depositValueEndDate,Last date that the deposit value in the currency is valid for the deposit code.,Packaging
Identification Scheme Agency Code,packagingInformation/packagedeposit/identificationSchemeAgencyCode,This attribute is the agency which manages the deposit code for a returnable package on which a depost is charged. ,Packaging
Packaging Refund Obligation Name,packagingInformation/packagedeposit/packagingRefundObligationName,"The refund obligation that the packaging of this item is subject to for example the DPG = Deutsche Pfandsystem GmbH which is a refund obligation for one way beverage packaging for beer, sparkling soft drinks and mineral water.",Packaging
Returnable Package Deposit Amount,packagingInformation/packagedeposit/returnablePackageDepositAmount,The monetary amount for the individual returnable package.,Packaging
Returnable Package Deposit Identification,packagingInformation/packagedeposit/returnablePackageDepositIdentification,In some markets the deposit information is specified by a GTIN giving the type of returnable package on which a deposit is charged. Each deposit code is associated with an amount specified elsewhere. The enumeration list is maintained externally.,Packaging
Deposit Target Market,packagingInformation/packagedeposit/returnablePackageDepositRegion/depositTargetMarket,The geographic region (country) associated with the returnable package deposit amount.,Packaging
Deposit Target Market Subdivision,packagingInformation/packagedeposit/returnablePackageDepositRegion/depositTargetMarketSubdivision,The country sub-division associated with the returnable package deposit amount.,Packaging
Number Of Dividers Horizontal,packagingInformation/packagingDividerInformation/numberOfDividersHorizontal,"Specifies the number of internal dividers that separate one layer from another in a trade item (applies to any level with multiple children (pack/case/pallet). For example, 2 means there is a total of two horizontal dividers in the configuration.",Packaging
Number Of Dividers Vertical,packagingInformation/packagingDividerInformation/numberOfDividersVertical,Specifies the number of vertical internal dividers that separate trade items within a layer in the internal configuration (applies to any level with multiple children: pack/case/pallet).,Packaging
Placement Of Divider,packagingInformation/packagingDividerInformation/placementOfDivider,"Indicates layer number that the dividers are found. Layer dividers are always counted starting at the uppermost layer (top to bottom) or leftmost divider (Left to right). For example “3”, “5” would mean that the 2 dividers are located on the 3rd and 5th layer counting always from the top to bottom.",Packaging
Packaging Feature Code,packagingInformation/packagingFeatureCode,"Valid value for the features about the packaging of the item.

Used by the seller to communicate to the buyer and consumer additional information related to packaging features that drive purchasing decisions.",Packaging
Packaging Function Code,packagingInformation/packagingFunctionCode,"A code that is used to identify packaging features valuable for consumers or any party in the supply chain. ASSOCIATED BUSINESS RULE: If Code Value = ""TAMPER_EVIDENT"" then ""Packaging Type Code"" and ""Packaging Type Description"" must populated.",Packaging
Packaging Level,packagingInformation/packagingLevel,"Identifies the hierarchical level of the packaging element, i.e. primary, secondary or tertiary.For example: a bottle in a cardboard box displayed on a shelf. The primary hierarchical level is the bottle (plastic or glass), the secondary level would be the box (cardboard), and the tertiary level would be the film around the pallet.",Packaging
Composite Packaging Material Recycling Scheme Code,packagingInformation/packagingMaterial/compositeMaterialDetail/compositePackagingMaterialRecyclingSchemeCode,"The code that specifies the recycling scheme the packaging of this trade item will fall within when recycled. Applies to recyclable packaging with or without deposit.• 1 - Polyethylene Terephthalates
• 20 - Cardboard
• 22 - Paper
• 41 - AluminiumUsed by the seller and the buyer to conform to regulations concerning recycling of packaging materials. Used in conjunction with Packaging Material Element Code to describe what part of the packaging relates to this recycling scheme.",Packaging
Packaging Material Classification Code,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/code,The code which identifies the packing material classification used in each packaging component.,Packaging
Code Description,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/codeDescription,The description for Packaging Material Classification Code Reference,Packaging
Code List Agency Code,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Packaging
Code List Agency Name,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Packaging
Code List Name,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/codeListName,The name of the codelist.,Packaging
Code List URI,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialClassificationCodeReference/codeListURI,The URI for the codelist.,Packaging
Packaging Material Colour Code,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/code,The code which Identifies the packaging material colour.,Packaging
Code Description,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/codeDescription,The description for Packaging Material Colour Code Reference,Packaging
Code List Agency Code,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Packaging
Code List Agency Name,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Packaging
Code List Name,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/codeListName,The name of the codelist.,Packaging
Code List URI,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialColourCodeReference/codeListURI,The URI for the codelist.,Packaging
Packaging Material Composition Quantity,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialCompositionQuantity,"The quantity of the packaging material of the trade item. Can be weight, volume or surface, can vary by country.",Packaging
Packaging Material Thickness,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialThickness,The thickness of a packaging material.,Packaging
Packaging Material Type Code,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingMaterialTypeCode,The materials used for the packaging of the trade item for example glass or plastic.,Packaging
Packaging Raw Material Code,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingRawMaterialInformation/packagingRawMaterialCode,A code describing the type of raw or recycled material the packaging material is made from.,Packaging
Packaging Raw Material Content Percentage,packagingInformation/packagingMaterial/compositeMaterialDetail/packagingRawMaterialInformation/packagingRawMaterialContentPercentage,The percentage of the type of raw material the packaging material is made from.,Packaging
Is Packaging Material Recoverable,packagingInformation/packagingMaterial/isPackagingMaterialRecoverable,Determines whether packaging material is recoverable.Recoverable materials are those which are capable of beingreused or returned to use in the form of raw materials,Packaging
Is Primary Material,packagingInformation/packagingMaterial/isPrimaryMaterial,Specifies the primary or majority material in a composite material used for packaging.,Packaging
Packaging Composite Material Description,packagingInformation/packagingMaterial/packagingCompositeMaterialDescription,A description of any composite material used in packaging. A composite material is a combination of different material.,Packaging
Packaging Labelling Coverage Percentage,packagingInformation/packagingMaterial/packagingLabellingCoveragePercentage,Percentage of the print/label coverage of the packaging.,Packaging
Packaging Labelling Type Code,packagingInformation/packagingMaterial/packagingLabellingTypeCode,"The type of text coverage of a packaging, e.g. Label, Printed on packaging.",Packaging
Packaging Material Applied Process Code,packagingInformation/packagingMaterial/packagingmaterialAppliedProcessCode,The processes applied to the material or used in the manufacturing of the material to modify/enhance its properties.,Packaging
Packaging Material Classification Code,packagingInformation/packagingMaterial/packagingMaterialClassificationCodeReference/code,The code which identifies the packing material classification used in each packaging component.,Packaging
Code Description,packagingInformation/packagingMaterial/packagingMaterialClassificationCodeReference/codeDescription,The description for Packaging Material Classification Code Reference,Packaging
Code List Agency Code,packagingInformation/packagingMaterial/packagingMaterialClassificationCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Packaging
Code List Agency Name,packagingInformation/packagingMaterial/packagingMaterialClassificationCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Packaging
Code List Name,packagingInformation/packagingMaterial/packagingMaterialClassificationCodeReference/codeListName,The name of the codelist.,Packaging
Code List URI,packagingInformation/packagingMaterial/packagingMaterialClassificationCodeReference/codeListURI,The URI for the codelist.,Packaging
Packaging Material Coating Type Description,packagingInformation/packagingMaterial/packagingMaterialCoatingTypeDescription,Specifies any coating material that is applied to the packaging material. Allows for the representation of the same value in different languages.,Packaging
Packaging Material Colour Code,packagingInformation/packagingMaterial/packagingMaterialColourCodeReference/code,The code which identifies the packaging material colour.,Packaging
Code Description,packagingInformation/packagingMaterial/packagingMaterialColourCodeReference/codeDescription,The description for Packaging Material Colour Code Reference,Packaging
Code List Agency Code,packagingInformation/packagingMaterial/packagingMaterialColourCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Packaging
Code List Agency Name,packagingInformation/packagingMaterial/packagingMaterialColourCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Packaging
Code List Name,packagingInformation/packagingMaterial/packagingMaterialColourCodeReference/codeListName,The name of the codelist.,Packaging
Code List URI,packagingInformation/packagingMaterial/packagingMaterialColourCodeReference/codeListURI,The URI for the codelist.,Packaging
Packaging Material Quantity,packagingInformation/packagingMaterial/packagingMaterialCompositionQuantity,"The amounts of the different materials that the packaging of the product contains.

Used in conjunction with Packaging Material Code to provide information to the consumer about the amount of different materials that the product packaging contains that can be recycled, re-purposed, or disposed. Also used for the calculation of taxes such as ""Eco-packaging contribution"".",Packaging
Packaging Material Element Code,packagingInformation/packagingMaterial/packagingMaterialElementCode,"The code that describes the part or element of the packaging of the product associated to a material or composite material.• CAP
• CORK
• HANDLE
• TAB
• BUNG_SEAL
• DIVIDER_PROTECTORUsed by the seller to communicate to the buyer and consumer additional information related to packaging that drives purchasing decisions and to conform to regulations concerning recycling of packaging materials.",Packaging
Packaging Material Launch Date Time,packagingInformation/packagingMaterial/packagingMaterialLaunchDateTime,"The first date that a change in packaging material has occurred and does not result in a new GTIN at any level of the item hierarchy, such as, an increase or decrease in packaging material and is delivered to the retailer.",Packaging
Packaging Material Performance Code,packagingInformation/packagingMaterial/packagingMaterialPerformanceCode,A status of packaging performance based on testing in relationship to minimizing Trade Item damages.,Packaging
Packaging Material Recycling Scheme Code,packagingInformation/packagingMaterial/packagingMaterialRecyclingSchemeCode,"The code that specifies the recycling scheme the packaging of this trade item will fall within when recycled. Applies to recyclable packaging with or without deposit.• 1 - Polyethylene Terephthalates
• 20 - Cardboard
• 22 - Paper
• 41 - AluminiumUsed by the seller and the buyer to conform to regulations concerning recycling of packaging materials. Used in conjunction with Packaging Material Element Code to describe what part of the packaging relates to this recycling scheme.",Packaging
Packaging Material Thickness,packagingInformation/packagingMaterial/packagingMaterialThickness,The thickness of a packaging material.,Packaging
Packaging Material Type Code,packagingInformation/packagingMaterial/packagingMaterialTypeCode,"Valid value for the type of packaging material of the product, for example glass, plastic.

Used in conjunction with Packaging Material Quantity to provide information to the consumer and buyer on the type of material the product packaging is made of. Also used for the calculation of taxes such as ""Eco-packaging contribution"".",Packaging
Packaging Raw Material Code,packagingInformation/packagingMaterial/packagingRawMaterialInformation/packagingRawMaterialCode,A code describing the type of raw or recycled material the packaging material is made from.,Packaging
Packaging Raw Material Content Percentage,packagingInformation/packagingMaterial/packagingRawMaterialInformation/packagingRawMaterialContentPercentage,The percentage of the type of raw material the packaging material is made from.,Packaging
Packaging Owner Identification,packagingInformation/packagingOwnerIdentification,The GLN of the owner of the packaging.,Packaging
Packaging Owner Name,packagingInformation/packagingOwnerName,The name of the owner of the packaging.,Packaging
Packaging Recyclability Assessment Specification Code,packagingInformation/packagingRecyclabilityAssessmentInformation/packagingRecyclabilityAssessmentSpecificationCode,"The code that identifies the specification that defines how the degree of recyclability of packaging is calculated during assessment. These can be an agency, a regulation or directive, a community agreement, etc.The following example illustrates the use of recyclability attributes commonly used together for a product sold with two levels of packaging – a plastic pump dosing bottle encased in a cardboard folding box:
•  packagingLevel = 1 (the pump dosing unit) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 80%
    -  packagingRecyclabilityValueEffectiveDate = 01.06.2022
•  packagingLevel = 2 (the folding box) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 90%
    -  packagingRecyclabilityValueEffectiveDate = 01.02.2022

After the packaging is updated to improve recyclability:
•  packagingLevel = 1 (the pump dosing unit) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 90%
    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022
•  packagingLevel = 2 (the folding box)
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 95%
    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022Used to inform the retailer which specification is used as the basis to evaluate the degree of recyclability of an item's packaging.",Packaging
Packaging Recyclability Value,packagingInformation/packagingRecyclabilityAssessmentInformation/packagingRecyclabilityValue,"The value that indicates the degree of recyclability of an item's packaging, which is calculated on the basis of the standard chosen in packagingReyclabilityAssessmentSpecificationCode. This can be a percentage or value and can vary by country.The following example illustrates the use of recyclability attributes commonly used together for a product sold with two levels of packaging – a plastic pump dosing bottle encased in a cardboard folding box:
•  packagingLevel = 1 (the pump dosing unit) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 80%
    -  packagingRecyclabilityValueEffectiveDate = 01.06.2022
•  packagingLevel = 2 (the folding box) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 90%
    -  packagingRecyclabilityValueEffectiveDate = 01.02.2022

After the packaging is updated to improve recyclability:
•  packagingLevel = 1 (the pump dosing unit) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 90%
    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022
•  packagingLevel = 2 (the folding box)
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 95%
    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022Used by retailers and consumers to know the degree of recyclability of an item's packaging.",Packaging
Packaging Recyclability Value Effective Date,packagingInformation/packagingRecyclabilityAssessmentInformation/packagingRecyclabilityValueEffectiveDate,"The first date that the item with this packaging is available.The following example illustrates the use of recyclability attributes commonly used together for a product sold with two levels of packaging – a plastic pump dosing bottle encased in a cardboard folding box:
•  packagingLevel = 1 (the pump dosing unit) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 80%
    -  packagingRecyclabilityValueEffectiveDate = 01.06.2022
•  packagingLevel = 2 (the folding box) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 90%
    -  packagingRecyclabilityValueEffectiveDate = 01.02.2022

After the packaging is updated to improve recyclability:
•  packagingLevel = 1 (the pump dosing unit) 
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 90%
    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022
•  packagingLevel = 2 (the folding box)
    -  packagingRecyclabilityAssessmentSpecificationCode = DEUTSCHER_MINDESTSTANDARD
    -  packagingRecyclabilityValue = 95%
    -  packagingRecyclabilityValueEffectiveDate = 01.10.2022Used by retailers to avoid publishing incorrect information in webshops and in advertising when the packaging is changed to one with a different degree of recyclability.",Packaging
Packaging Recycling Process Type Code,packagingInformation/packagingRecyclingProcessTypeCode,The process the packaging could undertake for recyclable & sustainability programs.,Packaging
Packaging Recycling Scheme Code,packagingInformation/packagingRecyclingSchemeCode,A code determining the recycling scheme the packaging of this trade item will fall within when recycled. Applies to recyclable packaging with or without deposit.,Packaging
Packaging Refund Obligation Name,packagingInformation/packagingRefundObligationName,The refund obligation that the packaging of this item is subject to.,Packaging
Packaging Refuse Obligation Name,packagingInformation/packagingRefuseObligationName,The name of the specific refuse obligation that may apply to packaging or that the packaging may be exempt from.,Packaging
Packaging Shape Code,packagingInformation/packagingShapeCode,A code depicting the shape of a package for example cone.,Packaging
Packaging Sustainability Feature Code,packagingInformation/packagingSustainabilityFeatureCode,A feature of the packaging that contributes to sustainability initiatives for example that it is made from renewable materials.,Packaging
Packaging Terms And Conditions Code,packagingInformation/packagingTermsAndConditionsCode,"Indicates if the packaging given in the described packaging configuration is a rented, exchangeable, against deposit or one way/not reusable.",Packaging
Packaging Type Code,packagingInformation/packagingTypeCode,"Valid value for the type of package or container of the product.

Used in conjunction with the Packaging Material to provide information to the buyer on the type of product packaging for business process such as space planning, supply chain processes, recycling processes. Used in conjunction with the Packaging Material to communicate packaging type to the consumer.",Packaging
Packaging Type Description,packagingInformation/packagingTypeDescription,A text description of the type of packaging used for the trade item.,Packaging
Packaging Weight,packagingInformation/packagingWeight,"Packaging weight is the physical weight of the packaging itself, minus the contents and may be provided at all levels.",Packaging
Pallet Disposition Code,packagingInformation/platformTermsAndConditionsCode,"Valid value for the expected action to be taken with the pallet.

Used by the seller to communicate to the buyer what to do with the pallet after it is received.",Packaging
Platform Type Code,packagingInformation/platformTypeCode,"Valid value for the type of pallet that the unit load is delivered on.

Used by the seller to communicate to the buyer the type and size of the pallet. Used by the buyer for handling, storing and moving. The buyer determines the type of equipment suitable for transporting the pallet or dolly in the warehouse based on the pallet/dolly size and type.",Packaging
Alternative Returnable Asset Identification,packagingInformation/returnableAsset/alternateID/alternativeReturnableAssetIdentification,An additional returnable asset identification type. Allowed code values are specified in GS1 Code List AdditionalReturnableAssetIdentificationTypeCode.,Packaging
Alternative Returnable Asset Identification Type Code,packagingInformation/returnableAsset/alternateID/alternativeReturnableAssetIdentificationTypeCode,Alternative ID for the returnable asset,Packaging
GRAI,packagingInformation/returnableAsset/grai,"The GS1 Identification Key used to identify Returnable Assets. The key comprises a GS1 Company Prefix, Asset Type, Check Digit, and optional serial number.",Packaging
Is Returnable Asset Empty,packagingInformation/returnableAsset/isReturnableAssetEmpty,Is the returnable asset empty or full?,Packaging
Deposit Value Effective Date,packagingInformation/returnableAsset/packagedeposit/depositValueEffectiveDate,First date that the deposit value is valid for the deposit code.,Packaging
Deposit Value End Date,packagingInformation/returnableAsset/packagedeposit/depositValueEndDate,Last date that the deposit value in the currency is valid for the deposit code.,Packaging
Identification Scheme Agency Code,packagingInformation/returnableAsset/packagedeposit/identificationSchemeAgencyCode,The agency for the packaging Deposit,Packaging
Packaging Refund Obligation Name,packagingInformation/returnableAsset/packagedeposit/packagingRefundObligationName,"The refund obligation that the packaging of this item is subject to for example the DPG = Deutsche Pfandsystem GmbH which is a refund obligation for one way beverage packaging for beer, sparkling soft drinks and mineral water.",Packaging
Package Deposit Amount,packagingInformation/returnableAsset/packagedeposit/returnablePackageDepositAmount,"The amount of deposit associated with a returnable package.

Used by the seller to communicate to the buyer the amount of the deposit. Used by the buyer to communicate to the consumer (via receipt, website, mobile) the amount of the deposit.",Packaging
Package Deposit Identifier,packagingInformation/returnableAsset/packagedeposit/returnablePackageDepositIdentification,"The identifier for the package deposit.

Used by the buyer to program automated return machines, include the deposit amount at Point Of Sale, and/or reconcile invoicing.",Packaging
Deposit Target Market,packagingInformation/returnableAsset/packagedeposit/returnablePackageDepositRegion/depositTargetMarket,The geographic region (country) associated with the returnable package deposit amount.,Packaging
Deposit Target Market Subdivision,packagingInformation/returnableAsset/packagedeposit/returnablePackageDepositRegion/depositTargetMarketSubdivision,The country sub-division associated with the returnable package deposit amount.,Packaging
Returnable Asset Capacity Content,packagingInformation/returnableAsset/returnableAssetCapacityContent,A measurement of the potential capacity of a returnable asset for example how many bottles can fit into a crate. This is not the content for the full packaging but rather how much the packaging can contain.,Packaging
Returnable Asset Owner ID,packagingInformation/returnableAsset/returnableAssetOwnerID,The GLN of the owner of a returnable asset.,Packaging
Returnable Asset Owner Name,packagingInformation/returnableAsset/returnableAssetOwnerName,The name of the owner of a returnable asset.,Packaging
Returnable Assets Contained Quantity,packagingInformation/returnableAsset/returnableAssetsContainedQuantity,The number of returnable assets contained that are allocated to the full returnable item identified by the GTIN of returnable asset. For example 6 bottles of beer in a six pack (Trade Item).,Packaging
Usable Product Volume,packagingInformation/usableProductVolume,"The space occupied by the usable portion of a product (as it is packaged) as measured by cubic units. Smallest volume (rectangular solid, cylinder, sphere or triangular solid) the product will fit into.",Packaging
Packaging Width,packagingInformation/width,"The width of the packaging as measured according to the GDSN Package Measurement Rules. If the packaging dimensions is for a platform or pallet, the measurements for the platform itself are provided based on the orientation and tolerances for non-consumer trade items in the GDSN Package Measurements Rules.",Packaging
Third Party Accreditation Symbol on Product Package Code,packagingMarkedLabelAccreditationCode,"Valid value for a symbol or marking third party accreditation on the product package.

Used to communicate the global, national and local accreditation to the buyer and consumer. (See the GDSN Trade Item Implementation Guide Packaging Label Guide: https://www.gs1.org/standards/gdsn/trade_implementation_guide)",Packaging
Packaging Marked Nutrition Label Code,packagingMarkedNutritionLabelCode,"Indication of which nutrition call outs or highlights are on the package. A nutrition call out is a graphic which highlights some elements from the nutrition panel for the consumer to have a quick view for example, Front of Package information.",Packaging
Packaging Marked Recyclable Scheme,packagingMarkedRecyclableScheme,"A marking that the trade item received recognition, endorsement, certification by following guidelines by the label issuing agency. This does not represent claims for regulatory purposes on products such as free from markings.",Packaging
Packaging Marked Returnable Indicator,packagingMarkedReturnable,"Indicates if the product packaging is marked as returnable (with or without a deposit).

Used to provide the consumer and the buyer with information on how to handle the product packaging post-consumption. Not to be used for accreditation.",Packaging
Packaging Marking Language,packagingMarkingLanguage,The language(s) in which texts are stated in on the product.,Packaging
Packaging Material Performance,packagingMaterialPerformance,Indicates a status of packaging performance based on testing in relationship to minimizing trade item damages.,Packaging
Packaging Material Code 2,packagingMaterials/packagingMaterialCode2,The code the packaging material,Packaging
Packaging Material Weight 2,packagingMaterials/packagingMaterialWeight2,The weight of the packaging material.,Packaging
Packaging Sustainability Statement,packagingSustainabilityStatement,A statement about the trade Item and/or packaging that makes the item sustainable. This may refer to some marketing facing information that is relative to the consumer concerning sustainability for example “Now available in plastic vs. aluminum packaging. Resulting in 15% less energy and 10% waste reduction in manufacturing”.,Packaging
Retail Price is Marked on the Product Indicator,pricingOnProduct,"Indicates there is a retail price on the product.

Used by the buyer for price management.",Packaging
Product is or Contains Liquid,productIsOrContainsLiquid,Indicator to denote the item is a liquid or it contains a liquid. ,Packaging
Product Marked Recyclable,productMarkedRecyclable,Trade item has a recyclable indication marked on it. This may be a symbol from one of many regional agencies.,Packaging
Serial Number Location Code,serialNumberLocationCode,"The location on the item or packaging of a serial number. A serial number is a code, numeric or alphanumeric, assigned to an individual instance of an entity for its lifetime for example a Microscope model AC-2 with serial number 1234568 and microscope model AC-2 with serial number 1234569. ",Packaging
Small Parts Warning/CPSIA Cautionary Statement,smallPartsWarning,This attribute provides information related to CPSIA statements that are relevant to the product,Packaging
Sorting Allowance,sortingAllowance,Sorting Allowance,Packaging
Trade Item Identification Marking Type Code,tradeItemIdentificationMarking/tradeItemIdentificationMarkingTypeCode,A code determining whether the item and/or its packaging is marked with a specific identification.,Packaging
Trade Item Identification Marking Value,tradeItemIdentificationMarking/tradeItemIdentificationMarkingValue,The specific identification the item and/or its packaging is marked with.,Packaging
Trade Item Markings Description,tradeItemMarkingsDescription,"Describes the distinctive direct marking(s) or imprints on a trade item and the location of the markings as described by the manufacturer for example a company logo on front, value with UOM on back and scored.",Packaging
Warning Information,warningCopyDescriptions/warningCopyDescription,"The information provided to the consumer about warnings or dangers associated with the product.

Used to provide information to the consumer about warnings or dangers while using or consuming the product. Note: Should not be used for drugs or supplements, see attribute Drug Side Effects and Warnings",Packaging
Chemical Class,chemicalClass,Governmental-assigned hazardous material classification pertaining to the product.,Partner Specific
Dependent Proprietary Item,dependentProprietaryTradeItems/dependentProprietaryTradeItem,Descriptive terms used to denote the additional products required in order to utilize the product.,Partner Specific
Environmental Identifier,environmentalIdentifier,"Valid Value to denote the environmental aspects or characteristics of the product. For example: BIODEGRADABLE_PRODUCT, or CONTAINS_NO_OZONE_DEPLETING_CHEMICALS",Partner Specific
Graphics,graphics,Describes the graphics on the item.  Required if graphics are used. ,Partner Specific
Hazmat Classification,hazardousMaterialClassification,"Valid Value to denote the level of HazMat information required for the product. For example: MSDS_AND_NOT_REGULATED_BY_DOT_(CFR49), or NO_MSDS_AND_NOT_REGULATED_BY_DOT_(CFR49)",Partner Specific
Direct Consumer Delivery?,isItemAvailableForDirectToConsumerDeliv,Indicator to denote the vendor supports direct-to consumer delivery for the product. ,Partner Specific
Special Order Available?,isItemAvailableForSpecialOrder,Indicator to denote the product is avaialble to be special ordered by the consumer. These orders would be submitted by the recipient to the supplier.,Partner Specific
Subject to US Patent?,isItemSubjectToUSPatent,Indicator to denote the product is subject to a US Patent,Partner Specific
Is Security Tag Present?,isSecurityTagPresent,Indicator to denote the product contains a security tag. Security tags are used to prevent theft from locations downstream of a supplier such as a retail outlet or distribution center.,Partner Specific
Item contains Wood?,isWoodAComponentOfThisItem,Indicator to denote the product contains wood or paper as a component of the item. This includes the product and its pacakging.,Partner Specific
Full WRIN Short Description,itemDescriptionPrefix,Full WRIN Short Description,Partner Specific
Full WRIN Long Description,itemDescriptionSuffix,Full WRIN Long Description,Partner Specific
Item Usage Type,itemUsageType,How product will be used.   ,Partner Specific
Local RIN Prefix,lwrinPrefix,Local RIN Prefix,Partner Specific
Local RIN Suffix,lwrinSuffix,Local RIN Suffix,Partner Specific
Classification Category - Product Group,mcdClassification,McDonald's defined product classification. Used in conjunction with Product Classification.,Partner Specific
McDonald's Product Classification,mcdProductClassification,The 10 digit McDonald's product classification number ,Partner Specific
Menu Item Usage,menuItemUsage,Identifies what food or menu item will this product be used in or with.,Partner Specific
Point Value,pointValue,"Number to denote an assigned value to the product to build/convey truckload quantity in an alternative measurement, rather than traditional cubic measurements. A truck or container of a common size will be allotted a total number points which can be loaded inside. The sum of the point values of all of the products to be loaded onto that truck or container can not exceed the allotted points for the truck/container. For example, a truck is allotted 100 points. Orders to be placed on the truck are 5 items at 10 points and 10 items at 8 points. The total of the orders is 130 points. The load plan will need to be recalculated as it is too large for the truck.",Partner Specific
Portion Control,portionControl,Identifies if item requires portion control: bulk vs prepackaged.  Typically not put in a recipe if it is portion controlled,Partner Specific
Quality Supplier File Number ,qualitySupplierFileNumber,Food item spec number on Merlin,Partner Specific
Quality Supplier File Version Number ,qualitySupplierFileVersionNumber,Food item spec version number on Merlin,Partner Specific
Where Used,requestorLocale,"This is a manual field and the codes are two (2) letter codes for areas of the world.  The only options available are:  AF (Africa), AU (Australia) CA (Canada), EU (Europe), FE (Far East)  ME (Middle East),  SA (South America), US (United States), ZZ (More than one area).",Partner Specific
Safety Data Sheet URL,safetyDataSheetURL,URL of Safety Data Sheet; tied to Chemical Class Code,Partner Specific
Security Tag Commit Date,securityTagCommitDate,Date to denote when this product includes a security tag (source tag).,Partner Specific
Security Tag Commit Date,securityTagCommitDate,Date to denote when this product includes a security tag (source tag).,Partner Specific
Shelf Unit Quantity,shelfUnitQuantity,"Number to denote the recommended quantity, in units, of the product which can displayed to the consumer on a point-of-sale shelf.",Partner Specific
Spl Order Lead Time,specialOrderQuantityLeadTime,"Number to denote the normal delivery time applicalbe for a special order of this product, as measured from receipt of the special order by the seller until the seller ships the product.",Partner Specific
Min Spl Order Qty,specialOrderQuantityMinimum,"Number to denote the minimum number of units for the product which a retailer must include on a special order. If this minimum number is not met, the order may not be processed and filled.",Partner Specific
Spl Order Increment,specialOrderQuantityMultiple,"Number to denote the multiplier quantity of the product which must be ordered for a special order. For example, a supplier will only process orders in multiples of 12. So the recipient must order 12, 24, 36, etc. The mutipler would be 12.",Partner Specific
Temp Zone,tempZone,McDonald's Proprietary Temp Zone for Distribution Centers,Partner Specific
Truck Load Quantity,truckloadQuantity,"Number to denote the quantity, in units, of the product which may be included in a “standard” truck load.",Partner Specific
"OWN LABEL/PRIVATE LABEL (UDEX:15,IM:U01)",U01,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
WEIGHT/VOLUME DESCRIPTION ACTUAL - ON PACK(U11),U11,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
MARKETED RECIPE/STYLE OF SAUCE/MARINADE/DIP/DRESSING(U122),U122,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
NUMBER IN MULTIPACK - BASE(U14),U14,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
NUMBER IN PACK - BASE(U224),U224,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
NUMBER IN MULTIPACK - ACTUAL(U311),U311,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
NEW/IMPROVED CLAIM(U366),U366,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
NUMBER IN PACK - ACTUAL(U58),U58,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
INSTANT(U78),U78,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
REFILL/REFILLABLE(U85),U85,Refer to Extension Implementation Guide (for Extension Attributes) or Participant Dictionary (for Core GDSN Attriutes) for more information regarding this field.,Partner Specific
Wrin Prefix,wrinPrefix,WRIN Prefix,Partner Specific
Wrin Suffix,wrinSuffix,WRIN Suffix,Partner Specific
WSI Number,wSINumber,WSI number associated with the Supplier,Partner Specific
Bioengineered Declaration Claim Code,bioengineeredDeclarationClaimCode,Valid value for a product containing detectable genetically modified material for which the modification could not otherwise be obtained through conventional breeding or found in nature. This valid value may also be used for a product manufactured using ingredients derived through bioengineering which have undergone processes to remove modified genetic material such that it cannot be detected using common testing methods. Excludes incidental additives.,Processing
Country of Origin Code,countryOfOrigin/countryCode,"Valid value used to declare where the product is produced for regulatory / custom's requirements. In the case of multiple countries, the country in which the last substantial process or operation, that is economically justified, was performed.

Used to meet regulatory / custom's requirements for specifying the country of origin.",Processing
Country Of Origin Subdivision Code,countryOfOrigin/countrySubdivisionCode,"The Country Of Origin Subdivision Code is the secondary code of the Country Of Origin and must be a subdivision of a Country Of Origin Country Code. The Country Of Origin Subdivision Code describes the ""geopolitical subdivision of a country"" where the trade item is produced for sale, as determined by the information provider. For example, ""State"" in the US, ""Land"" in Germany, ""Region"" in France, or ""Province"" in Canada. Not all countries have subdivisions.",Processing
Country of Origin Declaration,countryOfOriginStatement,"The statement about the country of origin, as declared on the product label, which can be any country where the product is indicated to have come from (it may or may not be the same as Country of Origin Code).

Used to inform the consumer of the specific country of origin as declared on the product.",Processing
Extended Import Classification,extendedImportClassification,EU classification of the products that are subjected to excise duties,Processing
Genetically Modified Declaration Code,geneticallyModifiedDeclarationCode,"Valid value for the presence or absence of genetically modified protein or DNA (deoxyribonucleic acid) in the product.

Used by the buyer to communicate to the consumer the GMO (Genetically Modified Organism) declaration of the product. Used by the buyer in assortment planning.",Processing
Growing Method Code,growingMethodCode,"Valid value for how the product has been grown, cultivated, reared and/or raised.

Used by the buyer to communicate to the consumer the growing method of the product. Used by the buyer in assortment planning. Not used for fish and seafood in EU, rather please reference Fish Production Method Code.",Processing
Import Classification Region Of Origin,importClassification/importClassificationCountrySubdivisionRegionOfOrigin,"Specifies the region of origin of the trade item as part of import classification. This is required by Intrastat. This is a region and not a country, uses ISO3166-2",Processing
Customs Classification Type Code,importClassification/importClassificationTypeCode,"Valid value for the customs classification system.

Used to communicate the classification system used by customs to apply tariffs to the product.",Processing
Customs Classification Value,importClassification/importClassificationValue,"The tariff value applied to a product associated with the Customs Classification Type Code.

Used to communicate to the buyer a cost impact to support procurement and payment processes. Used for statistical reporting for customs.",Processing
Statistical Reporting Measurement,importClassification/statisticalReportingMeasurement,"The amount of the trade item net of any packaging (e.g. Box, Spool) provided for statistical reporting purposes. In the EU, the Supplementary Unit of the Intrastat Supplementary Declaration, provided when the Net Mass in Kilograms is not acceptable based on the Commodity Classification for Foreign Trade Statistics. For example, ice cream is reported in net mass so no supplementary unit is required. Carpets are reported in square metres, so the area of carpet of the trade item should be shown in statistical Reporting Measurement in square metres.",Processing
Is Trade Item Irradiated,irradiatedCode,Indicates if radiation has been applied.,Processing
Is Bioengineered Declaration Claim Relevant Data Provided,isBioengineeredDeclarationClaimRelevantDataProvided,All Bioengineered Declaration Claim Information is populated for those values which are relevant or required to be populated on the product label or label equivalent.  values not populated are not relevant or not required to be populated on the product label by local regulations.,Processing
Is Raw Material Irradiated,isRawMaterialIrradiated,Indicates if radiation has been applied to a trade item's raw material.,Processing
Maturation Method Code,maturationMethodCode,The method of maturity for the item or ingredient for example tree ripened or jet fresh.,Processing
Organic Certification Effective End Date Time,organicClaim/organicCertification/organicCertificationEffectiveEndDateTime,The date and time upon which the organic certification is no longer effective.,Processing
Organic Certification Effective Start Date Time,organicClaim/organicCertification/organicCertificationEffectiveStartDateTime,The date and time upon which the organic certification is effective.,Processing
Organic Certification Identification,organicClaim/organicCertification/organicCertificationIdentification,A number issued to confirm that something has passed organic certification.,Processing
Organic Claim Agency Code,organicClaim/organicClaimAgencyCode,"The governing body that creates and maintains standards related to organic products and/or certifies products as organic.

Used by the buyer for verification purposes.",Processing
Organic Claim Agency Name,organicClaim/organicClaimAgencyName,Organization that issued the organic certificate number confirming that the Trade Item has gone through certification.,Processing
Organic Claim Agency Type Code,organicClaim/organicClaimAgencyTypeCode,A code depicting whether an organic agency manages organic standards or issues certifications.,Processing
Organic Percent Claim,organicClaim/organicPercentClaim,The percent of actual organic materials per weight of the trade item. This is usually claimed on the product.,Processing
Organic Level Code,organicClaim/organicTradeItemCode,"Valid value for the organic content of the product.

Used by the buyer to enable search and discovery for the consumer. Used by the buyer for space and assortment planning.",Processing
Organic Product Country Of Origin Farming,organicProductCountryOfOriginFarming,Indication of the country where all agricultural raw materials of which the product is composed have been farmed in.,Processing
Organic Product Place Of Farming,organicProductPlaceOfFarming,"Indication of the place where the agricultural raw materials of which the product is composed have been farmed, acc. to Council Regulation (EC) No 834/2007.",Processing
Organic Product Place Of Farming,organicProductPlaceOfFarmingCode,Indication of the place where the agricultural raw materials of which the product is composed have been farmed.,Processing
Genus,organismClassification/genus,"The scientific name of a category of biological classification immediately above the Species.

Used by the buyer and/or consumer to uniquely identify the type of product, particularly where the Product Description is not specific enough in order to comply with legal/ sanitary and phytosanitary (SPS)/ customs etc. requirements.",Processing
Rank Below Species,organismClassification/rankBelowSpecies,"This can be either the Sub-Species, Variety, Sub-Variety, Form, and/or Sub-Form of an organism. All are taxonomic rank below that of species. For the EU this is representative of the OECD Commercial Type.",Processing
Species ,organismClassification/species,"The scientific name of a category of biological classification below the Genus.

Used by the buyer and/or consumer to uniquely identify the type of product, particularly where the Product Description is not specific enough in order to comply with legal/ sanitary and phytosanitary (SPS)/ customs etc. requirements. Used in conjunction with Genus.",Processing
Post Harvest Treatment Chemical Code,postHarvestTreatmentChemicalCode,Specifies if the fruit or vegetable has been treated or not post harvesting with a chemical or wax.,Processing
Post Process Trade Item Treatment Physical Code,postProcessTradeItemTreatmentPhysicalCode,Produce has gone some physical process whether altered or other physical processes after harvesting.,Processing
Preservation Technique Code,preservationTechniqueCode,Code value indicating the preservation technique used to preserve the product from deterioration.,Processing
Country of Last Provenance/Processing,productActivityDetails/countryOfActivity/countryCode,The code that identifies the country in which the trade item was last processed and tested before importation.,Processing
Country Subdivision Code,productActivityDetails/countryOfActivity/countrySubdivisionCode,Code specifying the country..,Processing
Product Activity Region Description,productActivityDetails/productActivityRegionDescription,"The region in which a processing or other activity has been performed for example processing, bottling, manufacturing. Allows for the representation of the same value in different languages.",Processing
Enumeration Value,productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValue,Code List Value maintained by an external code list agency.,Processing
Enumeration Value Definition,productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDefinition,Definition of the code list value maintained by an external code list agency,Processing
Enumeration Value Description,productActivityDetails/productActivityRegionZoneCodeReference/enumerationValueInformation/enumerationValueDescription,Description of the value in a code list value maintained by an external code list agency. This is primarily used when code list values are sequential numbers.,Processing
External Agency Name,productActivityDetails/productActivityRegionZoneCodeReference/externalAgencyName,The name of the agency that manages a code list external to GS1.,Processing
External Code List Name,productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListName,The name of the code list maintained by an agency external to GS1.,Processing
External Code List Version,productActivityDetails/productActivityRegionZoneCodeReference/externalCodeListVersion,The version of the code list maintained by an agency external to GS1.,Processing
Product Activity Type Code,productActivityDetails/productActivityTypeCode,"A code depicting the type of activity being performed on a trade item for example processing, bottling, manufacturing.",Processing
Production Facility GLN,productionFacilityGln,Identifies the facility where the product is being produced. Enables users to identify and look up the name of the facility where the product has been produced.,Processing
Production Facility Name,productionFacilityName,"Designation of a business and location of the commercial unit, where the product is produced. As a product might be produced at different locations, multiple indications are possible.",Processing
Production Type,productionType,"Indicates how product is made/sold. Examples: MF – Manufactured, PU – Purchased, CP – Co-Packed.",Processing
Origin Declaration,provenanceStatement,"The exact statement about the place of origin, as declared on the product label, which can be any place where the product is indicated to have come from (it may or may not be the same as Country of Origin).

Used to inform the consumer of the specific origin as declared on the product.",Processing
Weight of Raw Materials Used in Preparation,rawMaterialUsedInPreparationWeight,The weight of the raw materials (meat) used to produce the finished food product.,Processing
Source Animal Code,sourceAnimalCode,The source of raw material used to produce the food product for example a goat for milk.,Processing
Weight Scale Description,weightScaleDescription,For Produce and Fresh Meat variable weight items a description to appear on the weight scale generated label. Formatted as two lines of up to 26 characters.,Processing
Parental Adv Sticker Code,publicationTitleRating/hasParentalAdvisorySticker,Indication of the presence of parental advisory sticker.,Publication
Rating Content Description,publicationTitleRating/ratingContentDescriptorCode,A code that identifies one or several elements that have triggered a particular rating and/or may be of interest or concern.,Publication
Title Rating,publicationTitleRating/titleRatingCodeReference/titleRatingCode,"A rating assigned to the title by a country, industry or volunteer organization that may be of interest or concern to the consumer.",Publication
Title Rating Entity,publicationTitleRating/titleRatingCodeReference/titleRatingCodeListAgency,The agency that assigned the code.,Publication
Publisher Name,publisherName,The publisher of the book.,Publication
Publisher Name GLN,publisherNameGLN,The GLN of the Publisher of the Book.,Publication
Max Buying Quantity,agreedMaximumBuyingQuantity,The maximum quantity of the product available to the retailer,Purchasing and Delivery
Min Buying Quantity,agreedMinimumBuyingQuantity,Minimum buying quantity agreed between trading partners.,Purchasing and Delivery
Return Goods Policy,avpReturnGoodsPolicy,"A code that describes the policy for defective, damaged, or non-salable goods.",Purchasing and Delivery
Brand Distribution Trade Item Type,brandDistributionTradeItemType,Categorization of the trade item to help further delineate product type with distribution type and trade channel.,Purchasing and Delivery
Is Preorder,canItemBePreordered,"Is this item available for pre-order? If selected, additional information will need to be provided to properly set up the pre-order.",Purchasing and Delivery
Ships in Original Packaging,canItemShipInOriginalPackaging,"Can this product be shipped in the original packaging without being put in an outer box? Notes: 1) This is to indicate whether it's *possible* for the item to be shipped in original box, not whether it is required. 2) This was previously known as ""Ships As-Is.""",Purchasing and Delivery
Can Trade Item Be Back Ordered?,canTradeItemBeBackOrdered,An indicator whether or not a customer’s order will be processed or will remain valid when it cannot be filled due to insufficient stock.,Purchasing and Delivery
Channel Of Distribution,channelOfDistribution,Indicates into which retail channel(s) the item is sold.,Purchasing and Delivery
Delivery Lead Time,deliveryLeadTime,Specifies the lead time in either calendar or work days from either the date of PO receipt to shipment or the date of PO receipt to delivery.,Purchasing and Delivery
Delivery Frequency Code,distributionDetails/deliveryFrequencyCode,A code specifying the regular delivery frequency for a specific product or service.,Purchasing and Delivery
Distribution Method Code,distributionDetails/distributionMethodCode,The code value that indicates the method of delivery for the trade item.,Purchasing and Delivery
Is Distribution Method Primary?,distributionDetails/isDistributionMethodPrimary,Indicates if the delivery method for the trade item is the primary one.,Purchasing and Delivery
Ordering Lead Time,distributionDetails/orderingLeadTime,Lead time required for orders expressed in days.,Purchasing and Delivery
Goods Pick Up Lead Time,goodsPickUpLeadTime,"Time (in weeks, days, hours …) required between order entry and the earliest goods release (use for pick-up, not use for delivery).",Purchasing and Delivery
Incoterm Code,incotermInformation/incotermCode,Incoterms is an abbreviation for International Commercial Terms. The International Chamber of Commerce created and manages the Incoterms and their definitions. There are 13 available for use in the buyer-seller contractual agreements.,Purchasing and Delivery
Incoterm Code Location,incotermInformation/incotermCodeLocation,A description of the location required by an Incoterm.,Purchasing and Delivery
Incoterm Country Code,incotermInformation/incotermCountryCode,The ISO country code in which the incoterm event occurs.,Purchasing and Delivery
Is One Time Buy?,isOneTimeBuy,An indicator whether or not the item will only be available for order once then discontinued.,Purchasing and Delivery
Product Customizable?,isProductCustomizable,Indicates whether the Items that the Retailer markets are customizable to meet the end consumer’s requirements.,Purchasing and Delivery
GTIN Direct Shippable,isTradeItemDirectShippable,A Boolean (true/false or 1/0) attribute indicating whether or not this item is able to be shipped directly from the supplier to the consumer.,Purchasing and Delivery
Is Trade Item Reorderable?,isTradeItemReorderable,This element is an indicator that selected styles or trade items may or may not be re-ordered. It does not imply any information on current availability,Purchasing and Delivery
Shipped in Multiple Containers,isTradeItemShippedInMultipleContainers,Indicates that more than one box is to be delivered when the trade item is ordered.,Purchasing and Delivery
Is Size Based Pricing?,isTradeItemSizeBasedPricing,This is an indicator that an item may be at a different price point than other similar SKUs (GTIN's price within a Style may differ).,Purchasing and Delivery
Max Order Quantity,maximumOrderQuantity,The maximum quantity of the trade item that can be ordered. A number or a count. This value can represent the total number or units ordered over a set period of time with multiple orders.,Purchasing and Delivery
Minimum Orderable Quantity,minimumOrderQuantity,"The minimum quantity of the product required on a single order by the seller. Minimum Orderable Quantity may differ by recipient. If the same for all recipients, select ""ALL"" as the Recipient.

Used by the seller and the buyer to ensure that the orders are at sufficient enough level to meet shipping and processing requirements.",Purchasing and Delivery
Minimum Shipping Quantity,minimumShippingQuantity,The minimum total quantity of this trade item that can be shipped. It is used only if different from the minimum order quantity.,Purchasing and Delivery
Must Ship Alone,mustShipAlone,"Select ""Y"" if your item cannot ship with another item in the same box. If marked ""Y,"" the ship alone item will not be grouped for ship price calculation.",Purchasing and Delivery
Number of Boxes,numberOfBoxes,This attribute represents the number of boxes a product may come in and used to determine if an item comes in multiple boxes.,Purchasing and Delivery
Orderable Returnable Conditions Code,orderableReturnableConditionsCode,A code that indicates if the trade item can be ordered and returned if non-sold.,Purchasing and Delivery
Ordering UOM,orderingUnitOfMeasure,"The alternate Unit of Measure of how Trade Items are ordered by the Retailer under one Unit of Measure, but sold under another Unit of Measure.",Purchasing and Delivery
Order Quantity Multiple,orderQuantityMultiple,"The order quantity multiples in which the trade item may be ordered. If the Order Quantity Minimum is 100, and the Order Quantity Multiple is 20, then the trade item can only be ordered in quantities which are divisible by the Order Quantity Multiple of 20.",Purchasing and Delivery
Order Sizing Factor,orderSizingFactor,"A trade item specification other than gross, net weight,or cubic feet for a line trade item or a transaction, used for order sizing and pricing purposes.",Purchasing and Delivery
Returns Goods Policy,returnGoodsPolicy,"A code that describes the policy for defective, damaged or non-salable goods.",Purchasing and Delivery
Right of Return for Non-Sold Trade Item,rightOfReturnForNonSoldTradeItem,"Indicates that the buyer can return the articles that are not sold. Used, for example; with magazines and bread. This is a y/n (Boolean) where y equals right of return. This is at least relevant to General Merchandise, Publishing industries and for some FMCG trade item.",Purchasing and Delivery
SHC Category,sHCCategory,SHC Category number,Purchasing and Delivery
SHC Division,sHCDivision,SHC Division number,Purchasing and Delivery
SHC Order DUNS,sHCOrderDUNS,Vendor Order Duns that is valid for the GLN. This is retailer assigned and a supplier may have more than one order DUNS per item.,Purchasing and Delivery
Ship From Location Name,shipFromLocationName,The shipping point from where the supplier will ship the trade item.,Purchasing and Delivery
Shipping Quantity Minimum,shippingQuantityMinimum,Minimum shipping quantity agreed between trading partners. ,Purchasing and Delivery
Start Date Time Of Exclusivity,startDateTimeOfExclusivity,The date and time at which a product starts to be exclusive to a trading partner.,Purchasing and Delivery
Trade Channel,tradeChannel,Description of base unit or a packaging item's intended trade channel.,Purchasing and Delivery
Unit Of Measure Used For Ordered Quantities,unitOfMeasureUsedForOrderedQuantities,Unit Of Measure Used For Ordered Quantities,Purchasing and Delivery
Animal Health Concern,animalHealthConcern,Descriptive terms to denote the type of condition for which the product is intended to address.,Recipient Identification Info
Assembled Weight,assembledWeight,Measure to denote the weight of the product when fully assembled.,Recipient Identification Info
Audio Visual Supported Formats,audioVisualSupportedFormats,Descriptive terms to detail the audio formats which the product supports. Example MP3.,Recipient Identification Info
Fulfillment Options,disFulfillmentOptions,"The attributes in this section may differ by recipient of your data. Select ALL if it does not vary; otherwise, specify the recipient of the value.",Recipient Identification Info
Purchasing Information,disPurchasingInformation,"Provide additional information the recipient may need to know regarding purchasing the item. &nbsp;If the case pack is relevant, please provide quantity contains and GTIN for the pack here.",Recipient Identification Info
Does Product Have Any Hazard Warnings,doesProductHaveAnyHazardWarnings,Indicator to denote if the product has any hazard warnings printed on the packaging.,Recipient Identification Info
End Effective Date,endEffectiveDate,Date on which the information of the master data is no longer valid for order to pay.,Recipient Identification Info
GS1 Spain Active Ingredients,gs1Spain_activeIngredients,GS1 Spain specific private text for the active ingredients in medicines.,Recipient Identification Info
GS1 Spain Component Quantity,gs1Spain_ComponentQuantity,GS1 Spain specific private integer for the number of units in the product's packaging.,Recipient Identification Info
GS1 Spain Dangerousness Code,gs1Spain_dangerousnessCode,GS1 Spain specific private valid value for the dangerousness of the product.,Recipient Identification Info
GS1 Spain Extended Description 5000,gs1Spain_ExtendedDescription5000,GS1 Spain specific private text for an extended description of the product. One instance should be in Spanish.,Recipient Identification Info
GS1 Spain Family Code,gs1Spain_familyCode,GS1 Spain specific private text for the product's IMS Classification.,Recipient Identification Info
GS1 Spain Free Price,gs1Spain_freePrice,"GS1 Spain specific private decimal for products with free price. Free price is an specific concept related to a price that is applied in special situations. In Spain, this is also known as European price or double price.",Recipient Identification Info
GS1 Spain Healthcare File Number,gs1Spain_HealthcareFileNumber,GS1 Spain specific private text the file number of product's public contest with Autonomic Health Services.,Recipient Identification Info
GS1 Spain Healthcare Packaging Marks,gs1Spain_healthcarePackagingMarks,GS1 Spain specific private valid value for pakaging marks on medicines.,Recipient Identification Info
GS1 Spain Healthcare Recipient Classification Number,gs1Spain_HealthcareRecipientClassificationNumber,GS1 Spain specific private integer for the healthcare recipient classification number with Autonomic Health Services. This number is assigned by each Health Service.,Recipient Identification Info
GS1 Spain Is Cold Storage Required,gs1Spain_isColdStorageRequired,GS1 Spain specific private indicator if the product needs to be kept in cold storage.,Recipient Identification Info
GS1 Spain Is Safety Data Sheet Required,gs1Spain_isSafetyDataSheetRequired,GS1 Spain specific private indicator if a safety dqata sheet is required for the product.,Recipient Identification Info
GS1 Spain Is TradeItem A Narcotic,gs1Spain_isTradeItemANarcotic,GS1 Spain specific private indicator if the product has narcotic effects,Recipient Identification Info
GS1 Spain Is Trade Item A Psychotropic,gs1Spain_isTradeItemAPsychotropic,GS1 Spain specific private valid value if the product has psychotropic effects.,Recipient Identification Info
GS1 Spain Nonfood Ingredient Statement,gs1Spain_nonfoodIngredientStatement,GS1 Spain specific private text for the ingredients used in the product.,Recipient Identification Info
GS1 Spain Pharmaceutical Manufacturer Price,gs1Spain_pharmaManufPrice,GS1 Spain specific private decimal for products with regulated price,Recipient Identification Info
GS1 Spain Pharmaceutical Manufacturer Price Curr,gs1Spain_pharmaManufPrice_cur,GS1 Spain specific private currency code used for Pharmaceutical Manufacturer Price,Recipient Identification Info
GS1 Spain RD1591_2009 Compliant,gs1Spain_RD1591_2009_compliant,GS1 Spain specific private indicator for if Section 13 Annex 1 RD 1591/2009 regulation for health products is applicable to the product.,Recipient Identification Info
GS1 Spain Ready for Unidose,gs1Spain_ReadyforUnidose,GS1 Spain specific private indicator if the product come in a unidose blister.,Recipient Identification Info
GS1 Spain Reimbursement Amount Type,gs1Spain_reimbursementAmountType,GS1 Spain specific private valid value for the type of reimbursement amount is available for the product. ,Recipient Identification Info
GS1 Spain Therapy Group,gs1Spain_therapyGroup,GS1 Spain specific private text for the product's ATC Classification.,Recipient Identification Info
Has Memory Card Slot,hasMemoryCardSlot,Indicator to denote the product contains a memory card slot. Memory card slots are used primarily to add storage memory to a product. ,Recipient Identification Info
Has Remote Control,hasRemoteControl,Indicator to denote if the item has a device allowing for remotely controlling its functions.,Recipient Identification Info
Is Licensed Product,isLicensedProduct,"Indicator to denote the item has a license associated with it. A license allows the product to bear images, designs, or other notations to another brand's intellectual property or trademarks. For example, if the product has a license with Disney allowing the product to bear the image of Mickey Mouse, then this indicator would be true.",Recipient Identification Info
Is Parfocal,isParfocal,"Indicator to denote the product has a lens that stays in focus when magnification/focal length is changed. For example, a microscope which stays in focus when the microscope objective is rotated.",Recipient Identification Info
Maximum Paper Size,maximumPaperSize,"Descritive terms to denote the maximum paper size which the product can support. Please specify not only the common name for the size of the paper, but in parenthesis the actual measurements for that size. Example A4 (210 x 297 mm)",Recipient Identification Info
Number of Frequency Bands,numberOfFrequencyBands,"Provide the number of frequency bandss the item has or supports.  Example: 1, 2, 3",Recipient Identification Info
Package Contents,packageContents,"Descriptive terms to describe what is in the package. This provides a bsic list of components, parts, attachments, etc. which are in the product's packaging. Example: Pencils, pens and erasers.",Recipient Identification Info
Paper Surface Finish,paperInformation/paperSurfaceFinish,"Valid Value to denote the appearance of the surface of the paper. Example: Satin, Uncoated, Vellum.",Recipient Identification Info
Paper Weight,paperInformation/paperWeight,"Valid Value to denote the weight of the paper. This is a reference to the thickness and reference to a pound weight. Examples 10, 60, 120.",Recipient Identification Info
Product Condition,productCondition,"Valid Value to denote the condition of the product. Examples- New, Refurbished, Used",Recipient Identification Info
Quantity Of Lines On Calculator,quantityOfLinesOnCalculator,Number to denote the number of lines which can be displayed on the calculator.,Recipient Identification Info
Remote Control Technology Type Code,remoteControlTechnologyTypeCode,Value to denote the technlogy the remote control uses to connect to the produt. Example Infrared.,Recipient Identification Info
Trademark Statement,trademarkStatement,Descriptive trademark statement(s) which may appear on the product and/or it's packaging.,Recipient Identification Info
Use By Recommendation,useByRecommendation,Descriptive terms to denote the best time period within which to use a product.,Recipient Identification Info
Registration Agency,chemicalRegistrationInformation/registrationAgency,The Agency that the file has been registered with.,Regulatory
Registration End Date,chemicalRegistrationInformation/registrationEndDateTime,The Date that the registration will expire.,Regulatory
Registration Number,chemicalRegistrationInformation/registrationNumber,The number assigned by the registration agency.,Regulatory
Chemical Registration Information Restriction Description,chemicalRegistrationInformation/restrictionDescription,Free form description of any restrictions placed on the file.,Regulatory
Chemical Regulation Name,chemicalRegulationInformation/chemicalRegulation/chemicalRegulationName,"The name of a regulation managed by a regulatory agency to designed to restrict the handling, use, disposal of chemical ingredients for example Right to Know or CERCLA.",Regulatory
Is Chemical Regulation Compliant,chemicalRegulationInformation/chemicalRegulation/isChemicalRegulationCompliant,Determines whether or not a chemical is compliant with a specific regulation (driven by chemicalRegulationName).,Regulatory
Carcinogenic Mutagenic Reprotoxic Type Code,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/carcinogenicMutagenicReprotoxicTypeCode,"The type of Carcinogenic, mutagenic, reprotoxic (CMR) substance which is contained in the medical device. Examples 1A, 1B",Regulatory
Chemical Physical State Code,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalPhysicalStateCode,"The state of matter of the trade item, for example LIQUID.",Regulatory
Chemical Property Additional Description,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyAdditionalDescription,A description of any conditions regarding a toxicity property for example a route of exposure and a target organ (e.g. inhalation and lungs). ,Regulatory
Chemical Property Code,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyCode,A characteristic of a chemical substance expressed as a code. ,Regulatory
Chemical Property Name,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalProperty/chemicalPropertyName,A characteristic of a chemical substance expressed as a name for example radionuclide.,Regulatory
Chemical Property Type Code,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/chemicalIngredientPropertyInformation/chemicalPropertyTypeCode,The type of chemical property being described expressed as a code such as TOXICITY.,Regulatory
Regulated Chemical Description,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalDescription,A text description of the regulated chemical or formula.,Regulatory
Chemical Identifier Agency Name,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierAgencyName,The name for the agency that maintains the codelist.,Regulatory
Chemical Identifier Code,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierCode,An identifier for a regulated chemical for example a CAS number.,Regulatory
Chemical Identifier Description,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalIdentifierCodeReference/regulatedChemicalIdentifierCodeDescription,A text description of the regulated chemical or formula.,Regulatory
Regulated Chemical Name,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalName,The name of a chemical regulated by a chemical regulation or agency. For example Chlorobenzene.,Regulatory
Regulated Chemical Sunset Date,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalSunsetDateTime,As the date from which the placing on the market and the use of a substance is prohibited or restricted.,Regulatory
Regulated Chemical Type Code,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/regulatedChemicalTypeCode,"The type of regulated chemical as defined by the regulatory agency. Example Endocrine Substance, Human Product, Medicine Product.",Regulatory
Technical Chemical Name,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/technicalChemicalName,The official technical name for a chemical as required by a managing agency for example mercuric chloride.,Regulatory
Test Criteria Description,chemicalRegulationInformation/chemicalRegulation/regulatedChemical/testCriteriaDescription,A description of any of the criteria or test data being used to determine if a regulated chemical exists. ,Regulatory
Chemical Regulation Agency,chemicalRegulationInformation/chemicalRegulationAgency,An agency that regulates chemicals for example the US Environmental Protection Agency.,Regulatory
Does Trade Item Contain Electrical Components,doesTradeItemContainElectricalComponents,"An Indication for regulation purposes of the existence of wires, circuits, circuit boards, or other electrical components in the trade item. The trade item may be powered by many types of energy such as solar, electricity, fossil fuel, batteries and/or generate some form of energy.",Regulatory
Is Packaging Marked With Regulatory Compliance,regulatoryInformation/isPackagingMarkedWithRegulatoryCompliance,Indicator of whether the packaging is marked with a regulatory compliance code.,Regulatory
Regulation Compliance Indicator,regulatoryInformation/isTradeItemRegulationCompliant,"The indicator specifying whether the product is compliant, not compliant or not applicable to the regulation associated with the Regulation Type Code.

Used to indicate to the buyer whether the product is in compliance with a specific regulation. Used in conjunction with the Regulation Type Code.",Regulatory
Permit Identification End Date,regulatoryInformation/permitIdentification/permitEndDate,The date on which the permit expires.,Regulatory
Permit Identification Number,regulatoryInformation/permitIdentification/permitNum,Identification of the permit or license given by the regulatory agency.,Regulatory
Permit Identification Start Date,regulatoryInformation/permitIdentification/permitStartDate,The start date on which the permit is effective.,Regulatory
Regulation Community Level Code,regulatoryInformation/regulationCommunityLevelCode,"The type of territory the regulation is issued by for example a nation or territory considered as an organized political community under a government. Examples include; UNION, MUNICIPALITY, PROVENCE_OR_STATE.",Regulatory
Regulation Level Code Reference Code,regulatoryInformation/regulationLevelCodeReference/code,"An external code associated with a specific warning type and possibly a description that helps recipients identify items of similar levels of warnings, that cannot be obtained from a description. The information provided in this attribute may come from a specific article in the full Regulation. For examples : - if the regulationTypeCode is ""SMALL_PARTS"" the regulationLevelCodeReference would be “Level 5” with codeDescription “Not for ages under 3” - if the regulationTypeCode is ""BIOCIDE_REGULATION"" the regulationLevelCodeReference would be “PT1” with codeDescription “Human hygiene”.",Regulatory
Regulation Level Code Reference Code Description,regulatoryInformation/regulationLevelCodeReference/codeDescription,The description for the codelist.,Regulatory
Regulation Level Code Reference Code List Agency Code,regulatoryInformation/regulationLevelCodeReference/codeListAgencyCode,The code for the agency that maintains the codelist.,Regulatory
Regulation Level Code Reference Code List Agency Name,regulatoryInformation/regulationLevelCodeReference/codeListAgencyName,The name for the agency that maintains the codelist.,Regulatory
Regulation Level Code Reference Code List Name,regulatoryInformation/regulationLevelCodeReference/codeListName,The name of the codelist.,Regulatory
Regulation Level Code Reference Code List URI,regulatoryInformation/regulationLevelCodeReference/codeListURI,The URI for the codelist.,Regulatory
Regulation Pictogram Or Warning Quantity,regulatoryInformation/regulationPictogramOrWarningQuantity,The number of pictograms or warnings on a product package according to regulations. Example Mexican and Chilean Food labelling regulation.,Regulatory
Regulation Restrictions Community Identifier,regulatoryInformation/regulationRestrictionCommunityIdentifier,"An Identifier identifying the community like ISO country, ISO sub division, Municipal zip code for example 10001, 840, US-AR.",Regulatory
Regulation Restrictions and Descriptors,regulatoryInformation/regulationRestrictionsAndDescriptors,A textual detail needed by trading partners that explains any restrictions and/or descriptors explaining any information helpful about a regulation.,Regulatory
Regulation Type Code,regulatoryInformation/regulationTypeCode,"Valid value for a regulation. Used in conjunction with Regulation Compliance Indicator. 

Used to communicate to the buyer the regulation to which the product status is applicable and whether or not the buyer can sell or distribute the product.
Used by the buyer to derive the legal product category to determine the proper handling and storage.",Regulatory
Regulatory Act,regulatoryInformation/regulatoryAct,The name given to the requirement assigned by the regulatory agency.,Regulatory
Regulatory Act Compliance Level Code,regulatoryInformation/regulatoryActComplianceLevelCode,"Code that compares the amount/level of the product or its composition with threshold amounts/levels defined by a regulation indicated in attribute regulationTypeCode. This can vary for each regulation and market or region. For example: concentration limit for restricted explosive precursors defined by EU Regulation 2019/1148. The level of containment of specific toxicants for a product which contains carcinogens and/or reproductive toxicants established in California’s Proposition 65 (Prop 65), etc.",Regulatory
Regulatory Agency,regulatoryInformation/regulatoryAgency,The required information is the name of the specific entity in charge of issuing the permit to a company.,Regulatory
TradeItem Regulation Type Code Controlled Drug,tradeItemregulationTypeCodeControlledDrug,A code indicating the CONTROLLED DRUG type in compliance with specific applicable government regulations. Controlled Drug Code List: CON1 = Controlled Drug Part1 CON2 = Controlled Drug Part2 CON3 = Controlled Drug Part 3 CON4 = Not Applicable,Regulatory
TradeItem Regulation Type Code Narcotic,tradeItemregulationTypeCodeNarcotic,A code indicating the NARCOTIC type in compliance with specific applicable government regulations. :  Narcotic Type Code List: NAR1 = Narcotic Only NAR2 = Narcotic Preparation NAR3 = Exempt Codeine NAR4 = Not Applicable,Regulatory
TradeItem Regulation Type Code Precursor,tradeItemregulationTypeCodePrecursor,Indicates whether the trade item contains a precursor substance (according to Health Canada) and it's classification. Precursor substances are listed in Schedule VI of the Controlled Drugs and Substances Act (Canada). Code List: A = Class A B = Class B ,Regulatory
Trade Item Regulation Type Code Targeted Substance,tradeItemregulationTypeCodeTargetedSubstance,A code indentifying the trade is a TARGETED DRUG in compliance with specific applicable government regulations.Code List: TRUE Drug Product Contains Targeted Substance FALSE Drug Product Does Not Contain Targeted Substance.,Regulatory
FDS/FDR,fdsFdr,FDS/FDR,Safety
Fire Extinguisher Class,fireExtinguisherClass,The alphabetical representation to denote the class(es) of fire for which an extinguisher may be used for. ,Safety
Flash Point Type,flashPointType,"Used to determine the type of Flash Point applicable to the item. If Degrees Celsius selected, a Flash Point Temperature value is to be provided.",Safety
Is Product Hazardous?,isProductHazardousToWater,"Indicator to denote if the product is considered to be hazardous to water. If so, additional water hazard information may be required.",Safety
Accidental Release Measures Description,safetyDataSheetInformation/accidentalReleaseMeasuresDescription,A description of the method of clean-up or pick up for example Chemtrack number in relation to any hazardous materials regulated by ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road).,Safety
Additional SDS Information,safetyDataSheetInformation/additionalSDSInformation,"A description field for other information regarding the MSDS that is not int he other sections. For example, additional contact information, or sustainability statement, other information.",Safety
Chemical Ingredient Concentration,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentration,The percentage of a chemical ingredient in relation to the total composition of the product.,Safety
Chemical Ingredient Concentration Basis,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationBasis,The basis amount used to express the chemical ingredient concentration.,Safety
Chemical Ingredient Concentration Lower Value,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationLowerValue,The lower value of a range of a chemical ingredient concentration.,Safety
Chemical Ingredient Concentration Measurement Precision,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationMeasurementPrecision,The measurement precision used to determine the concentration of a chemical ingredient for example EXACT.,Safety
Chemical Ingredient Concentration Upper Value,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientConcentrationUpperValue,The upper value of a range of a chemical ingredient concentration.,Safety
Chemical Ingredient Identification,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientIdentification,A unique number to identify a chemical used to cross reference regulated lists of chemicals for example CAS number.,Safety
Chemical Ingredient Name,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/chemicalIngredientName,The common name of the chemical ingredient.,Safety
Lethal Concentration50,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50,"Median Lethal Concentration is a statistically derived concentration of a substance that can be expected to cause death in 50% of test animals. It is usually expressed as the weight of substance per weight or volume of water, air or feed.",Safety
Lethal Concentration50 Basis,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50Basis,The basis measurement for the measurement of Median Lethal Concentration for example 1 LT in the ratio 10 MG/1 LT . ,Safety
Lethal Concentration 50 Measurement Precision,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalConcentration50MeasurementPrecision,The measurement precision used to determine the lethal concentration 50 for example EXACT.,Safety
Lethal Dose50,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50,"Lethal Dose 50 is a statistically derived single dose that can be expected to cause death in 50% of the test animals when administered by the route indicated (oral, dermal, inhalation). It is expressed as a weight of substance per unit weight of animal.",Safety
Lethal Dose50 Basis,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50Basis,The basis measurement for the measurement of a Lethal Dose for example 1 LT in the ratio 10 MG/1 LT.,Safety
Lethal Dose 50 Measurement Precision,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/lethalDose50MeasurementPrecision,The measurement precision used to determine the determine the lethal dose for example EXACT.,Safety
Route Of Exposure Code,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/routeOfExposureCode,"The means by which  living organisms can come into contact with a hazardous substance for example  dermal, Inhalation, ingestion.",Safety
Test Species Code,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/testSpeciesCode,A description of any species of animal that was used for determining LC and LD other than the norm.,Safety
Test Species Description,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lethalDoseConcentrationInformation/testSpeciesDescription,The species of animal that was used for determining LC and LD 50 expressed as a code for example RAT.,Safety
Lower Explosive Limit,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/lowerExplosiveLimit,The low end value expressed as a percent by volume that the mixture is still flammable.,Safety
REACH Chemical registration Number,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/rEACHChemicalRegistrationNumber,A unique registration number for a chemical for a company. This is issued by the European Chemical Agency (ECHA) and is unique per chemical.,Safety
Upper Explosive Limit,safetyDataSheetInformation/chemicalInformation/chemicalIngredient/upperExplosiveLimit,The high end value expressed as a percent by volume that the product will still explode.,Safety
Chemical Ingredient Organization,safetyDataSheetInformation/chemicalInformation/chemicalIngredientOrganisation,An organization managing a chemical ingredient identification scheme.,Safety
Chemical Ingredient Scheme,safetyDataSheetInformation/chemicalInformation/chemicalIngredientScheme,A managed list of chemical ingredient identifications for example CAS.,Safety
Conditions to Avoid Description,safetyDataSheetInformation/conditionsToAvoid,"Conditions, environments, or other chemicals that when mixed with a product can cause an adverse reaction. For example exposing acids to bases.",Safety
Ecological Information Description,safetyDataSheetInformation/ecologicalInformationDescription,Any information required on the SDS/MSDS in relationship to any effect of the chemical on the environment. ,Safety
Extinguishing Media Description,safetyDataSheetInformation/extinguishingMediaDescription,"A description of any substance that can be used to extinguish a fire, carbon dioxide, water etc in relation to any hazardous materials",Safety
Firefighter Protective Equipment Description,safetyDataSheetInformation/fireFighterProtectiveEquipmentDescription,"A description of any equipment recommended to be used by fire fighters for protection for example scuba gear, bunker gear, protective equipment in relation to any hazardous materials for example those regulated by ADR",Safety
First-Aid Procedures Description,safetyDataSheetInformation/firstAidProceduresDescription,A description of any first aid procedures necessary in case of exposure. This is used in compliance with ADR (European Agreement concerning the International Carriage of Dangerous Goods by Road).,Safety
Flammable Properties Description,safetyDataSheetInformation/flammablePropertiesDescription,"A description of any properties related to the ability of a substance to catch fire for example auto-ignition temperature, flashpoint, LEL, UEL in relation to any hazardous materials for example those regulated by ADR",Safety
Signal Words Code,safetyDataSheetInformation/gHSDetail/gHSSignalWordsCode,"Valid value for words from the Globally Harmonized System (GHS) to indicate the relative level of severity of the hazard and is usually on the label. 

Used to emphasize to buyers or supply chains the level of severity of the hazard.",Safety
Hazardous Symbol Description Code,safetyDataSheetInformation/gHSDetail/gHSSymbolDescriptionCode,"Valid value for the Globally Harmonized System (GHS) identifying the symbols or pictograms for a hazardous product. 

Used to alert users of the chemical hazards to which they may be exposed during storage or handling of a dangerous good.",Safety
Hazardous Statements Code,safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsCode,"Valid value (also known as H code) for the standard phrase describing the nature of a hazard class and category. 

Used to identify the standard phrases describing the nature of a hazard class and category.",Safety
Hazardous Statements Description,safetyDataSheetInformation/gHSDetail/hazardStatement/hazardStatementsDescription,"The description of the standard phrase (also known as H statement) assigned to a hazard class and category that describes the nature of the hazard. 

Used to describe the standard phrases describing the nature of a hazard class and category.",Safety
Precautionary Statement Code,safetyDataSheetInformation/gHSDetail/precautionaryStatement/precautionaryStatementsCode,"Valid value (also known as a P code) for the standard phrase describing precautionary actions or correct handling. 

Used to identify the standard phrase(s) describing precautionary actions when storing or handing the product.",Safety
Precautionary Statement Description,safetyDataSheetInformation/gHSDetail/precautionaryStatement/precautionaryStatementsDescription,"The description of the specified precautionary statement (also known as P statement) on a hazardous label. 

Used to communicate to the buyer and consumer the nature of a precautionary measure to be taken when storing or handling the product. May be provided on the packaging.",Safety
Hazardous Material Handling Procedure,safetyDataSheetInformation/hazardousMaterialsHandlingProcedures,Hazardous materials handling procedures are a description of how the product should be handled in relation to potential hazardous materials,Safety
Hazardous Waste Agency,safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteAgency,The Agency for the Classification of Hazardous Waste. The specific hazardous waste code for the federal or state regulation that applies to the product for example US EPA.,Safety
Hazardous Waste Code,safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteCode,A classification of hazardous waste managed at the federal or state level for example EPA Hazardous Waste Code of D001 (Ignitable waste).,Safety
Hazardous Waste Description,safetyDataSheetInformation/hazardousWasteInformation/hazardousWasteDescription,A description of the classification of hazardous waste managed at the federal or state level for example EPA Hazardous Waste Code of D001 ( Ignitable waste). ,Safety
Is Acutely Hazardous Waste,safetyDataSheetInformation/hazardousWasteInformation/isAcutelyHazardousWaste,"An indicator whether or not the Trade Item contains wastes that would cause death, disabling personal injury, or serious illness. These wastes are more hazardous than ordinary hazardous wastes.",Safety
Is Universal Waste,safetyDataSheetInformation/hazardousWasteInformation/isUniversalWaste,"Indicates if a product can be considered universal waste. Universal waste is defined as wastes that do not meet the regulatory definition of hazardous waste but are managed under special, tailored regulations. ",Safety
Non Hazardous Waste Description,safetyDataSheetInformation/hazardousWasteInformation/nonhazardousWasteDescription,A classification of non-hazardous waste managed at the federal or state level for example a code for disposal of latex paint.,Safety
Is Product Classified As Non Hazardous,safetyDataSheetInformation/isProductClassifiedAsNonHazardous,"Indication that the product is classified, on its own or when aggregated, as non-hazardous waste according to EPA’s Resource Conservation and Control ACT (RCRA) when disposed. Under RCRA (40 CFR 261.31-33) hazardous wastes are those determined by EPA to be hazardous including those classified as hazardous and if products exhibit one of the four characteristics (defined in 40 CFR Part 261.21-24). Hazardous wastes are divided into listed wastes, characteristic wastes, universal wastes, and mixed wastes. Specific procedures determine how waste is identified, classified, listed, and delisted. RCRA mandates strict controls over disposal of hazardous waste. These listed wastes are divided into three categories: K-list, F-list, and the P and U-Lists. Characteristic wastes include wastes that exhibit ignitability, corrosivity, reactivity or toxicity. Universal wastes include batteries, pesticides, mercury-containing products and lamps. Examples include computer equipment, lead-containing products, and applicable cleaning chemicals.",Safety
Is Regulated For Transportation,safetyDataSheetInformation/isRegulatedForTransportation,An indicator whether the Trade Item is regulated for shipment by any agency.,Safety
Note To Physician,safetyDataSheetInformation/noteToPhysician,A description of any measures a physician should take to treat a patient.    ,Safety
Autoignition Temperature,safetyDataSheetInformation/physicalChemicalPropertyInformation/autoIgnitionTemperature,The lowest temperature at which it will spontaneously ignite in a normal atmosphere without an external source of ignition.,Safety
Boiling Point,safetyDataSheetInformation/physicalChemicalPropertyInformation/boilingPoint,The temperature of a liquid at which its vapour pressure is equal to or very slightly greater than the atmospheric pressure of the environment.  For water at sea level it is 100C  or 212F. ,Safety
Flash Point Descriptor,safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointDescriptor,A descriptor that informs which action the trade item must be used under to achieve that flash point for example when dispensed.,Safety
Flash Point Temperature,safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperature,"The temperature at which a substance, notably liquid, gives off enough flammable vapor to form a mixture with air that can be ignited by contact with a hot surface, spark or flame. 

Used to determine the level of caution needed when handling.

Used to determine precaution during cleanup if spillage occurs.",Safety
Flash Point Temperature Lower Value,safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureLowerValue,A lower value of a possible range of flash point temperatures.,Safety
Flash Point Temperature Measurement Precision,safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureMeasurementPrecision,The measurement precision used for calculating a flash point temperature for example EXACT.,Safety
Flash Point Temperature Upper Value,safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTemperatureUpperValue,A upper value of a possible range of flash point temperatures.,Safety
Flashpoint Test Method Code,safetyDataSheetInformation/physicalChemicalPropertyInformation/flashPoint/flashPointTestMethodCode,The test method used to determine the flash point temperature for example closed cup.,Safety
Freezing Melting Point,safetyDataSheetInformation/physicalChemicalPropertyInformation/freezingMeltingPoint,The temperature at which its crystals are in equilibrium with the liquid phase at atmospheric pressure.,Safety
Lower Explosive Limit,safetyDataSheetInformation/physicalChemicalPropertyInformation/lowerExplosiveLimit,The low end value expressed as a percent by volume that the mixture is still flammable. ,Safety
Exact PH,safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/exactPH,The exact PH amount for a chemical ingredient (not a range). ,Safety
Maximum PH,safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/maximumPH,The maximum range for PH.,Safety
Minimum PH,safetyDataSheetInformation/physicalChemicalPropertyInformation/pHInformation/minimumPH,The minimum range value for PH.,Safety
Physical Form Description,safetyDataSheetInformation/physicalChemicalPropertyInformation/physicalFormDescription,"A description of the form of the product for example gas, liquid, powder. Colorless, Fragrant, liquid in relation to any relation to any hazardous materials. ",Safety
Physical State,safetyDataSheetInformation/physicalChemicalPropertyInformation/physicalStateCode,Any physical state a chemical ingredient may be in for example LIQUID. ,Safety
Specific Gravity,safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravity,Specific Gravity is defined as the ratio of the density of a substance to the density of a reference substance expressed as a float. It is an abstract number that is unrelated to any units. ,Safety
Specific Gravity Lower Value,safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityLowerValue,The lower value in a range of specific gravity.,Safety
Specific Gravity Measurement Precision,safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityMeasurementPrecision,The measurement precision used for the specific gravity for example EXACT.,Safety
Specific Gravity Reference Material Code,safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityReferenceMaterialCode,The reference material used within the ratio for specific gravity for example water or air. ,Safety
Specific Gravity Upper Value,safetyDataSheetInformation/physicalChemicalPropertyInformation/specificGravityInformation/specificGravityUpperValue,The upper value in a range of specific gravity.,Safety
Upper Explosive Limit,safetyDataSheetInformation/physicalChemicalPropertyInformation/upperExplosiveLimit,The high end value expressed as a percent by volume that the product will still explode. ,Safety
Water Solubility,safetyDataSheetInformation/physicalChemicalPropertyInformation/waterSolubilityTypeCode,Water solubility is defined as a code indicating solubility in respect to water. Solubility is the ability of a given substance to dissolve in solvent. ,Safety
Protective Equipment Description,safetyDataSheetInformation/protectiveEquipment/protectiveEquipment,Recommended protective equipment information expressed in an SDS/MSDS. ,Safety
Protective Equipment Additional Description,safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentAdditionalDescription,Additional informational regarding when protective equipment is recommended or required. ,Safety
Protective Equipment Body Area Code,safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentBodyAreaCode,A code determining the part of the body the protective equipment is meant to protect for example EYE,Safety
Protective Equipment Recommended Status Code,safetyDataSheetInformation/protectiveEquipment/protectiveEquipmentStatusCode,A code determining whether the protective equipment is recommended or required. ,Safety
Is Substance Of Very High Concern,safetyDataSheetInformation/rEACHInformation/isSubstanceOfVeryHighConcern,An indicator that a trade item contains substances of very high concern according to REACH as defined in as defined in Article 57 of Regulation No 1907/2006. ,Safety
Is Trade Item REACH Relevant,safetyDataSheetInformation/rEACHInformation/isTradeItemREACHRelevant,An indicator that the trade item may have ingredients that subject it to REACH.,Safety
REACH Chemical Product Use Desciptor Code,safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHChemicalProductUseDescriptorCodeType,The types of preparations  the substance is contained in end-use. ,Safety
REACH Environmental Release Use Desciptor Code,safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHEnvironmentReleaseUseCategoryCode,The broad conditions of use from the environmental perspective. An example of a REACH Environment Release Category is ERC 3 Formulation in materials. ,Safety
REACH Process Use Desciptor Code,safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHProcessUseDescriptorCode,The technical process or application in which the substance is used from an occupational perspective. An example of a REACH Process Use Descriptor is PROC 7 Industrial Spraying. ,Safety
REACH Sector Use Desciptor Code,safetyDataSheetInformation/rEACHInformation/rEACHUseDescriptorInformation/rEACHSectorUseDescriptorCode,"The sector of the economy the substance is used. Use includes manufacture in the chemical industry, mixing of substances at formulator's level as well as industrial, professional and consumer end-uses. An example of a REACH sector use Descriptor is SU4 Manufacture of food products. ",Safety
Alternate Text,safetyDataSheetInformation/referencedFileInformation/alternateText,A detailed information pertaining to the image and the context for someone who is partially or fully visually impaired or blind.,Safety
Content Description,safetyDataSheetInformation/referencedFileInformation/contentDescription,Free form description of the content of the file.,Safety
File Creation Program,safetyDataSheetInformation/referencedFileInformation/fileCreationProgram,The program used in the creation of the digital asset.,Safety
File Effective End Date,safetyDataSheetInformation/referencedFileInformation/fileEffectiveEndDateTime,The date this image ceases to be the current image for this trade item. This attribute is optional. This attribute must be greater than the fileEffectiveStartDateTime if present.,Safety
File Effective Start Date,safetyDataSheetInformation/referencedFileInformation/fileEffectiveStartDateTime,The date this image is the current image for this trade item. This fileEffectiveStartDateTime must be present if the uniformResourceIdentifier is entered.,Safety
File Format Description,safetyDataSheetInformation/referencedFileInformation/fileFormatDescription,Free form description of the format of the file. This attribute is optional.,Safety
File Format Name,safetyDataSheetInformation/referencedFileInformation/fileFormatName,The name of the file format. Examples: PDF; JPEG; BMP. The fileFormatName must be present if the uniformResourceIdentifier is entered.,Safety
File Language,safetyDataSheetInformation/referencedFileInformation/fileLanguageCode,The specified language to which the digital asset is targeted.,Safety
File Name,safetyDataSheetInformation/referencedFileInformation/fileName,The name of the file that contains the external information.,Safety
File Optimal Viewer Name,safetyDataSheetInformation/referencedFileInformation/fileOptimalViewerName,The software to which this file was targeted.,Safety
File Origin Country,safetyDataSheetInformation/referencedFileInformation/fileOriginCountryCode,The country where the digital asset originated.,Safety
File Sequence Number,safetyDataSheetInformation/referencedFileInformation/fileSequenceNumber,"The order based upon the referencefileTypeCode the files should be used. Examples a 360 degree image, the images need to be ordered, or a safety data sheet where each file is 1 page and should be ordered accordingly.",Safety
File Version,safetyDataSheetInformation/referencedFileInformation/fileVersion,A description of the terms used by the manufacturer to denote the version of the digital asset.,Safety
Image Facing,safetyDataSheetInformation/referencedFileInformation/imageFacing,﻿The code that defines which face of the item is depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 17 of the file name.),Safety
Image Orientation Type Code,safetyDataSheetInformation/referencedFileInformation/imageOrientationTypeCode,"﻿The code that defines the orientation/plunge (i.e., camera  angle) of the item as it is being depicted in the image. (More information on these codes can be found in the GS1 Product Image Specification Standard for the naming conventions related to position 18 of the file name.)",Safety
Image State Code,safetyDataSheetInformation/referencedFileInformation/imageStateCode,The code that defines the state of the item as it is being depicted in the image. (More information on these codes can be found in  the GS1 Product Image Specification Standard for the naming conventions related to position 19 of the file name.),Safety
Is Image Rendered,safetyDataSheetInformation/referencedFileInformation/isImageRendered,The indicator that specifies if the image is the result of the creation of a digital likeness of a physical object with the use of a computer and software. Rendered images often do not begin with a photographic device. ,Safety
Is Primary File,safetyDataSheetInformation/referencedFileInformation/isPrimaryFile,Indicates whether a URL for the specified referenced file type links to the primary file that should be used.,Safety
Referenced File Type Code,safetyDataSheetInformation/referencedFileInformation/referencedFileTypeCode,The type of file that is being referenced,Safety
Title Text,safetyDataSheetInformation/referencedFileInformation/titleText,"The text entered in the title tag is displayed in a popup when a user takes their mouse over to an image. The title attribute is shown along with the image, typically as a hover tooltip.",Safety
Uniform Resource Identifier,safetyDataSheetInformation/referencedFileInformation/uniformResourceIdentifier,"Simple text string that refers to a resource on the Internet, URLs may refer to documents, resources, people, etc. This attribute is optional.",Safety
Effective Date,safetyDataSheetInformation/sDSSheetEffectiveDateTime,"Date/time from which the content of the safety data sheet is valid. When issuing the data sheet for the first time, this date indicates the creation date. In case of updates, this date indicates the date of the last revision.",Safety
SDS Sheet Number,safetyDataSheetInformation/sDSSheetNumber,Manufacturer's identification number for the safety data sheet for a trade item.,Safety
Version,safetyDataSheetInformation/sDSSheetVersion,The safety data sheet version that uniquely identifies the release version of the safety data sheet. This version is needed to make data sheets versionable and revisions comprehensible.,Safety
SDS Standard Code,safetyDataSheetInformation/sDSStandardCode,A code describing the standard used to create the MSDS that is pointed to in the SDS URL.,Safety
SDS Standard Version,safetyDataSheetInformation/sDSStandardVersion,The version of the standard used to create the MSDS that is pointed to in the SDS URL.,Safety
Storage Compability Agency,safetyDataSheetInformation/storageCompatibilityAgency,The agency which maintains a list of storage compatibilities.,Safety
Storage Compability Code,safetyDataSheetInformation/storageCompatibilityCode,A storage compatibilities expressed as a code.,Safety
Storage Compability Description,safetyDataSheetInformation/storageCompatibilityDescription,The types of materials that this product cannot be stored with.,Safety
Storage Requirements Description,safetyDataSheetInformation/storageRequirementsDescription,"A description how to safely store the Trade Item for example cool,dry, not near flame, adequate ventilation. ",Safety
Toxicological Information Description,safetyDataSheetInformation/toxicologicalInformationDescription,A general description of any information on any toxic properties as included on the MSDS for example precautionary text on a label. This text should describe the key issue with the product in regards to toxicity. ,Safety
Volatile Organic Compound,safetyDataSheetInformation/volatileOrganicCompound,Volatile Organic Compound is the amount of an item that is a volatile organic compound expressed as a measurement. Volatile is where the compound can be evaporate or vaporize into the atmosphere. ,Safety
Volatile Organic Compound Basis,safetyDataSheetInformation/volatileOrganicCompoundBasis,The basis measurement for a Volatile Organic Compound when expressed as an amount for example 1 L in the case of 5ML per 1 LT.,Safety
Volatile Organic Compound Percentage,safetyDataSheetInformation/volatileOrganicCompoundPercent,The percentage of an item that is a volatile organic compound. Volatile is where the compound can evaporate or vaporize into the atmosphere.,Safety
Volatile Organic Compound Percent Measurement Precision,safetyDataSheetInformation/volatileOrganicCompoundPercentMeasurementPrecision,The measurement precision used to determine the percentage of an item that is a volatile organic compound.,Safety
SDS Issue Date,sdsIssueDate,An SDS (Safety Data Sheet) is a document containing important information about a hazardous chemical (which may be a hazardous substance and/or dangerous good).,Safety
Security Tag Location,securityTagInformation/securityTagLocationCode,This is a code to indicate where the EAS Tag is located on the Trade Item.,Safety
Security Tag Type,securityTagInformation/securityTagTypeCode,This is a code to indicate the type of EAS tag located on the Trade Item.,Safety
Price Basis Quantity,additionalTradeItemPrice/priceBasisQuantity,The price basis quantity is the associated quantity of trade item for which a price is given.,Sales
Price Effective End Date,additionalTradeItemPrice/priceEffectiveEndDate,"The effective end date of the price is optional based upon the agreement by the trading partners. If an invalid end date is communicated, then it is implied that the price and its effective date are effective until further notice.",Sales
Price Effective Start Date,additionalTradeItemPrice/priceEffectiveStartDate,"This is the effective start date of the price agreed to by the trading partners. This start date is mandatory and, if no end date is communicated, then implies that the price is effective until further notice. Various types of dates may be pre-aligned between buyer and seller.",Sales
Sheet Name,additionalTradeItemPrice/sheetName,The Price Sheet to which a price belongs. A price list is a list of prices of goods and services which are to be used or supplied during a period of time.,Sales
Price,additionalTradeItemPrice/tradeItemPrice,"The price of the product, as defined by the Price Type Code.

Used by the seller to communicate to the buyer the price of a product. The type of price is defined by the Price Type Code.",Sales
Price Type Code,additionalTradeItemPrice/tradeItemPriceTypeCode,"Valid value representing the type of Price associated with the product, for example catalogue price.

Used by the seller to communicate to the buyer the type of price of a product that is populated in the Price attribute. Used by the buyer to determine the business process to be used with the Price.",Sales
Allowance Charge Amount,applicableAllowanceCharge/allowanceChargeAmount,Amount of allowance or charge applicable.,Sales
Allowance Charge Description,applicableAllowanceCharge/allowanceChargeDescription,A text explanation of the allowance or charge. Allows for the representation of the same value in different languages but not multiple values.,Sales
Allowance Charge Percentage,applicableAllowanceCharge/allowanceChargePercentage,"Allowance and charges can be expressed in different ways. By using percentage, they are expressed as a percentage of another amount, e.g. the base amount.",Sales
Allowance Charge Type Code,applicableAllowanceCharge/allowanceChargeTypeCode,The identification of an allowance charge selected from a predefined list.,Sales
Allowance Or Charge Type,applicableAllowanceCharge/allowanceOrChargeType,Code specifying whether this is an allowance or a charge.,Sales
Amount Per Unit,applicableAllowanceCharge/amountPerUnit,Allowance/charge per unit expressed as an amount.,Sales
Base Amount,applicableAllowanceCharge/baseAmount,The amount on which the calculation of the allowance or charge is based.,Sales
Base Number of Units,applicableAllowanceCharge/baseNumberOfUnits,Number of units on which the allowance or charge is based.,Sales
Bracket Identifier,applicableAllowanceCharge/bracketIdentifier,Identification of the conditions that apply to the allowance or charge.,Sales
Discount Amount,applicablePaymentTerms/availableDiscount/discountAmount,The deduction represented as an amount .,Sales
Discount Applicable Period,applicablePaymentTerms/availableDiscount/discountApplicablePeriod,Time period the discount is applicable.,Sales
Discount Base Type Code,applicablePaymentTerms/availableDiscount/discountBaseTypeCode,Describes the price base applicable to the discount. For example NET or GROSS.,Sales
Discount Description,applicablePaymentTerms/availableDiscount/discountDescription,A text field describing the discount. Allows for the representation of the same value in different languages but not multiple values.,Sales
Discount Percent,applicablePaymentTerms/availableDiscount/discountPercent,The deduction represented as a percentage.,Sales
Discount Type,applicablePaymentTerms/availableDiscount/discountType,"A string value that specifies the type of payment discount for example “2 percent in 10 days, net 30”.",Sales
Net Due Time Period,applicablePaymentTerms/netDueTimePeriod,Time period amount should be paid. For example: 30 DAY,Sales
Payment Due Basis Type Code,applicablePaymentTerms/paymentDueBasisTypeCode,"The basis type on which the payment is due. For example, RECEIPT_OF_GOODS.",Sales
Payment Method,applicablePaymentTerms/paymentMethodCode,Describes the cellular phone service payment method.,Sales
Payment Terms Type Code,applicablePaymentTerms/paymentTermsTypeCode,The type of payment term expressed as a code for example DISCOUNT.,Sales
Proximo Cut off Day,applicablePaymentTerms/proximoCutOffDay,The day of the month the payment becomes due.,Sales
Brand Distribution Type,brandDistributionType,Any restrictions imposed on the Trade Item on how it can be sold to the consumer or recipient trading partner.,Sales
Item Code,c4p4ItemCode,The item identifier assigned by the retailer to the vendor GTIN.,Sales
Promotion Purchase Price,c4p4PromotionPurchasePrice,The promotion or override purchase price that is appropriate to the retailer. It is assigned by the vendor to the consumer unit when selling to the retailer.,Sales
Promotion Purchase Price End Date,c4p4PromotionPurchasePriceEndDate,The end date that is associated with the retailer Promotion purchase price when selling to the retailer.,Sales
Promotion Purchase Price Start Date,c4p4PromotionPurchasePriceStartDate,The start date that is associated with the retailer Promotion purchase price when selling to the retailer.,Sales
Purchase Price,c4p4PurchasePrice,The purchase price appropriate to the retailer that is assigned by the vendor to the consumer unit when selling to the retailer.,Sales
Purchase Price Start Date,c4p4PurchasePriceStartDate,The start date that is associated with the retailer purchase price when selling to the retailer.,Sales
Card Price Group ID,cardPriceGroupIdentifier,A code that identifies a price.,Sales
Catalogue Price Basis Per Unit,cataloguePrice/basisPerUnit,The price basis quantity is the associated quantity of trade item for which a price is given.,Sales
Catalogue Price Effective End Date,cataloguePrice/effectiveEndDate,"The effective end date of the price is optional based upon the agreement by the trading partners. If an invalid end date is communicated, then it is implied that the price and its effective date are effective until further notice. Examples of invalid dates include 99/99/9999, 00/00/0000, blank, etc. These invalid end dates should not be communicated. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events, last order date, last ship date, and last arrival date.",Sales
Catalogue Price Effective Start Date,cataloguePrice/effectiveStartDate,"This is the effective start date of the price agreed to by the trading partners. This start date is mandatory and, if no end date is communicated, then implies that the price is effective until further notice. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events, first order date, first ship date, and first arrival date.",Sales
Catalogue Price,cataloguePrice/price,The catalog or list price to the recipient.  ,Sales
Catalogue Price Sheet Name,cataloguePrice/sheetName,Help Not available via Extensible Definitions,Sales
Consumer Sales Condition,consumerSalesCondition,A code depicting restrictions imposed on the Trade Item regarding how it can be sold to the consumer for example ,Sales
Country Of Settlement,countryOfSettlement,Country where the invoice is getting paid. Used only if Invoice Unit Indicator = true. Choose 3-character code from Target Market list.,Sales
Cut For Sale Thickness Code,cutForSaleThicknessCode,"A code describing the cut for items for sale for example THICK. For presentation and shelf planning, the thickness in general terms of the slice are important.",Sales
Departement Activite,departementActivite,"This attribute is representative of a manufacturer portfolio segmentation, made by the supplier, for grouping products that follow the same Pricing conditions at level 2; each of those segments are given 1 unique code by Cora Belgium that will be used by Cora Belgium to retrieve the pricing structure of a new synchronised product.",Sales
Estimated Sales Revenue,estimatedSalesRevenue,The vendor forecasted sales in a given currency over a given time period.,Sales
Estimated Sales Revenue Currency,estimatedSalesRevenueCurrency,The currency code associated with the estimated sales revenue.,Sales
Groupe Tarifaire,groupeTarifaire,"This attribute is representative of a manufacturer portfolio segmentation, made by the supplier, for grouping products that follow the same Pricing conditions at level 1; each of those segments are given 1 unique code by Cora Belgium that will be used by Cora Belgium to retrieve the pricing structure of a new synchronised product.",Sales
Incentive Unit Basis Trade Item Information,incentiveUnitBasisInformation,Incentive Unit Basis Trade Item Information,Sales
Is Trade Base Price Declaration Relevant?,isBasePriceDeclarationRelevant,An indicator whether this item is mandated to have price comparison information included according to country specific pricing directives.,Sales
Is Discounting Illegal?,isDiscountingIllegal,An indicator whether or not the product is not legal to discount within a given target market,Sales
Is Trade Item A Free Item?,isTradeItemAFreeItem,"Indicates if the item is free (for the retailer and for the end-consumer). Mainly related to non food item (for example, buy a computer, get the case free). Used only if Consumer Unit Indicator = true.",Sales
Minimum Order Value,minimumOrderValue,The minimum order value of the trade item expressed in a money amount that can be ordered. This attribute is to be used with a respective currency (e.g. 1000.00 USD).,Sales
Not Legal to Discount,notLegalToDiscount,Indicates whether or not the item is not legal to discount by province (i.e. the item is subject to government regulation regarding either price floors or pricing practices).,Sales
Price By Measure Type,priceByMeasureType,Indicator to show how a product is sold.,Sales
Price Comparison Content Type,priceComparisonContentType,"Code indicating how the value in Price Comparison Measurement is used to calculate the comparative price, which is printed on shelf labels.",Sales
Price Comparison Quantity,priceComparisonMeasurement,"The quantity of the product and its unit of measure that are used to display the price per unit comparison in store and online.

Used by the seller to communicate to the buyer the information needed to calculate the comparison price to similar products. The buyer uses this information to communicate to the consumer to help them make informed buying decisions.",Sales
Pricing Item Indicator,pricingItemIndicator,"This attribute will trigger an item to be populated into the 1Sync Price & Promotion Management Application, regardless of whether or not an item is orderable. It is used in conjunction with the Primary Delivery Method attribute.",Sales
Pricing Pack,pricingPack,A numeric attribute that allows manufacturers to represent the actual pack value assocaited with an item's price rather than its physical quantity of next level item(s)/pack value,Sales
Recommended Area Of Consumer Pick Up Code,recommendedConsumerPickupAreaCode,"When selling a bulk item to a consumer, the retailer must know a recommended placement for the consumer purchase decision point of the item and location within the retail store . For example a potato salad bulk my need to be portioned to a consumer at a service counter as the purchase amount is dependent on what the consumer would like to purchase. Datatype codelist RecommendedAreaOfConsumerPickupCode, with values ",Sales
Selling UOM,sellingUnitOfMeasure,Describes the measurement used for selling unit of the Trade Item to the end consumer.,Sales
Special Item Code,specialItemCode,"This element identifies specific items for promotional, purchase eligibility and/or special tracking.",Sales
Suggested Retail Price Basis Per Unit,suggestedRetail/basisPerUnit,The price basis quantity is the associated quantity of trade item for which a price is given.,Sales
Suggested Retail Price Effective End Date,suggestedRetail/effectiveEndDate,"The effctive end date of the price is optional based upon the agreement by the trading partners. If an invalid end date is communicated, then it is implied that the price and its effective date are effective until further notice. Examples of invalid dates include 99/99/9999, 00/00/0000, blank etc. These invalid end dates should not be communicated. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events: last order date, last ship date, and the last arrival date. ",Sales
Suggested Retail Price Effective Start Date,suggestedRetail/effectiveStartDate,"This is the effective start date of the price agreed to by the trading partners. This start date is mandatory and, if no end date is communicated, then implies that the price is effective until further notice. Various types of dates may be pre-aligned between buyer and seller. For example, based upon a prior agreement between trading partners this date may relate to any of the following events: first order date, first ship date, and first arrival date.",Sales
Suggested Retail Price,suggestedRetail/price,The retail (to consumer) price as suggested by the manufacturer. Suggested Retail Price can be used as a guideline by the retailer to establish their actual retail price while also establishing a proposed value for marketing purposes and. This price may or may not appear on the package.,Sales
Suggested Retail Price Sheet Name,suggestedRetail/sheetName,Help Not available via Extensible Definitions,Sales
Country Code,targetMarketDiscountRestrictions/discountRestrictionTargetMarketCountry/countryCode,Discount restrictions that apply to a specific country,Sales
Country Subdivision Code,targetMarketDiscountRestrictions/discountRestrictionTargetMarketCountry/countrySubdivisionCode,Discount restrictions that apply to a specific country subdivision,Sales
Is Discounting Illegal In Target Market,targetMarketDiscountRestrictions/isDiscountingIllegalInTargetMarket,An indicator whether or not the product is not legal to discount within a given target market (i.e. the product is subject to government regulation regarding either price floors or pricing practices).,Sales
Consumer Sales Condition Maximum Amount,targetMarketSalesConditions/consumerSalesConditionMaximumAmount,The maximum amount of the trade item that can be sold to the consumer at POS (Point Of Sale). This amount may be regulated by law in some markets.,Sales
Country Code,targetMarketSalesConditions/salesConditionTargetMarketCountry/countryCode,"The country in which a processing or other activity has been performed for example processing, bottling, manufacturing.",Sales
Country Subdivision Code,targetMarketSalesConditions/salesConditionTargetMarketCountry/countrySubdivisionCode,"The country subdivision in which a processing or other activity has been performed for example processing, bottling, manufacturing.",Sales
End Availability Date Time,targetMarketSalesConditions/salesConditionTargetMarketCountry/endAvailabilityDateTime,"The date from which the trade item is no longer available from the information provider, including seasonal or temporary trade item and services.",Sales
Start Availability Date Time,targetMarketSalesConditions/salesConditionTargetMarketCountry/startAvailabilityDateTime,"The date from which the trade item becomes available from the supplier, including seasonal or temporary trade item and services.",Sales
Target Market Consumer Sales Condition Code,targetMarketSalesConditions/targetMarketConsumerSalesConditionCode,"A code depicting restrictions imposed on the Trade Item regarding how it can be sold to the consumer for example age restrictions, selling restrictions.",Sales
Condition Type Code,tradeItemConditionTypeCode,"The code depicting the type of preparation that a trade item may require before being sold to the consumer (e.g. cut for sale, portioned/pieced). This preparation should be done by the buyer.",Sales
Trade Item Exclusive Selling Location Code,tradeItemExclusiveSellingLocationCode,A code Identifying the kind of selling location(s) in which the product can be sold for example BOAT . This can apply to both physical and digital locations.,Sales
Contains Pesticide,doesTradeItemContainPesticide,"Indicates if the product is advertised or labelled as a chemical or biological agent (such as a virus, bacterium, or fungus) that kills, controls or repels certain pests.

Used to communicate the product contains a pesticide to the buyer for the purposes of handling, storage, waste disposal, and safety concerns.",Sustainability
Packaging Component Description,individualPackagingComponentLevel/packagingComponentDescription,"Part of packaging that can be separated by hand or by using simple physical means (EN 13427, ISO/DIS 18601), for example a packaging film.",Sustainability
Packaging Recycled Content Description,individualPackagingComponentLevel/packagingRecycledContent/packagingRecycledContentDescription,The description of recycled content that is being measured for.,Sustainability
Packaging Recycled Content Ratio,individualPackagingComponentLevel/packagingRecycledContent/packagingRecycledContentRatio,"The ratio of recycled material to total material used in packaging constituents, packaging components, or packaging systems",Sustainability
Packaging Recycled Content Type Code,individualPackagingComponentLevel/packagingRecycledContent/packagingRecycledContentTypeCode,The type of recycled content that is being measured for.,Sustainability
Packaging Renewable Content Description,individualPackagingComponentLevel/packagingRenewableContent/packagingRenewableContentDescription,The description of renewable content that is being measured for.,Sustainability
Packaging Renewable Content Ratio,individualPackagingComponentLevel/packagingRenewableContent/packagingRenewableContentRatio,"The ratio of renewable material used to total material used in packaging constituents, components, units of packaging or packaging systems.",Sustainability
Packaging Renewable Content Type Code,individualPackagingComponentLevel/packagingRenewableContent/packagingRenewableContentTypeCode,The type of renewable content that is being measured for.,Sustainability
Number Of Cycles Prior To Withdrawal,individualPackagingComponentLevel/packagingReuse/numberOfCyclesPriorToWithdrawal,Determines reusability in accordance with EN 13429 or ISO/DIS18603.,Sustainability
Packaging Reusability Standard Code,individualPackagingComponentLevel/packagingReuse/packagingReusabilityStandardCode,The reusability standard used to determine packaging reuse rate.,Sustainability
Packaging Reusability Standard Description,individualPackagingComponentLevel/packagingReuse/packagingReusabilityStandardDescription,The description for the reusability standard used to determine packaging reuse rate.,Sustainability
Packaging Reuse Rate,individualPackagingComponentLevel/packagingReuse/packagingReuseRate,"The number of times packaging accomplishes the same use, rotation or trip for which it was conceived and designed within its life cycle. Demonstration of reusability must first be established in accordance with EN 13429 or ISO/DIS18603 once final.",Sustainability
Packaging Weight Reduction,individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/packagingWeightReduction,"The reduction of packaging weight with regards to a previous reference state expressed as a percentage reduction or an absolute weight reduction [e.g. g or kg / packaging constituent, component or system].",Sustainability
Previous Packaging Weight,individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/previousPackagingWeight,The packaging weight of the previous product used to calculate the packaging weight reduction.,Sustainability
Proof Of Packaging Weight Reduction Description,individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/proofOfPackagingWeightReductionDescription,The description for the proof of packaging weight reduction is based on.,Sustainability
Proof Of Packaging Weight Reduction Standard Code,individualPackagingComponentLevel/packagingWeightOptimisation/packagingWeightReduction/proofOfPackagingWeightReductionStandardCode,The standard for the proof of packaging weight reduction is based on.,Sustainability
Proof Of Optimized Packaging Weight Standard Code,individualPackagingComponentLevel/packagingWeightOptimisation/proofOfOptimizedPackagingWeightStandardCode,The demonstration that the packaging has been minimized by weight or volume in accordance with EN 13428 or ISO/DIS 18602.,Sustainability
Proof Of Optimized Packaging Weight Standard Description,individualPackagingComponentLevel/packagingWeightOptimisation/proofOfOptimizedPackagingWeightStandardDescription,The description for the proof of adequate packaging weight,Sustainability
Is Product RPPC Compliant in Target Market?,isTradeItemRigidPlasticPackagingContainer,Indicates whether a product is or is contained in a Rigid Plastic Packaging Container (RPPC) as defined by laws in the target market.,Sustainability
Product RoHS Compliance Code,isTradeItemROHSCompliant,"Indicates if the product is compliant with the European Union RoHS Directive (the restriction of the use of certain hazardous substances in electrical and electronic equipment), a government regulated agency that sets guidelines for products not to contain certain hazardous substances.",Sustainability
Post Consumer Recycled %,postConsumerRecycledContentPercentage,Indicates the percentage of post-consumer material used in the trade item. The post-consumer material is collected from recycle bins and used as pulp to make new items. The percentage of post-consumer material is needed to drive whether the recycled logo goes on the item.,Sustainability
Recycled Material Code,recycledMaterialContent/recycledMaterialCode,Type of recycled material used to create the item.,Sustainability
Recycled Material Percentage,recycledMaterialContent/recycledMaterialPercentage,Corresponding percentage of the recycled material used to create the item. Used in conjunction with Recycled Material attribute.,Sustainability
Percentage Of Plastic Components Made From a Plant Based Material,renewablePlantBasedPlasticComponentsPercent,The percentage of the plastic components only made from rapidly renewable plant-based material by net weight of product (excludes packaging).,Sustainability
Materials That Fail RoHS Compliance,rOHSComplianceFailureMaterial,Identifies what materials contained in the product result in the failure of RoHS compliance.,Sustainability
Total Recycled Content %,totalRecyclableContentPercentage,The percentage of all recycled material used to produce the trade item.This is the totalled recycled content including percentage of post consumer recycled. It excludes all packaging material.,Sustainability
Sustainability Feature Code,tradeItemSustainabilityFeatureCode,A feature of the trade item that contributes to sustainability initiatives for example that it is made from renewable materials.,Sustainability
Trade Item Sustainability Statement,tradeItemSustainabilityStatement,The statement that describes how a trade item is produced in a way that can be maintained into the future without harming the environment. This may refer to marketing facing information that is relevant to the consumer who is concerned with sustainability.,Sustainability
Duty Fee Tax Amount,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxAmount,The current tax or duty or fee amount applicable to the trade item.,Taxation
Duty Fee Tax Basis,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxBasis,"This is defined as a taxation basis for a corresponding levying type and class for example for a steel tax on an item with a screw cap weighing ""3"" grams the tax basis would be 3 grams.",Taxation
Tax Category Code,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxCategoryCode,"Valid value representing the level of tax rate applied by a government to the product.

Used to communicate to the buyer the type of rates for taxes or levies applied to a product or service.",Taxation
Duty Fee Tax Country Subdivision Code,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxCountrySubdivisionCode,The political subdivision (e.g. province or state) where a specific tax or tax rate\value are applicable.,Taxation
Duty Fee Tax Exempt Party Role Code,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxExemptPartyRoleCode,The party role (e.g. Consumer) that is exempt from a specific tax duty or fee.,Taxation
Tax Percentage,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxRate,"The percentage of tax, levy, duty or fee associated to the type of product.

Used by the buyer to identify the correct tax percentage applicable to the product.

Used in conjunction with Tax Type Code.",Taxation
Duty Fee Tax Reduction Criteria Description,dutyFeeTaxInformation/dutyFeeTax/dutyFeeTaxReductionCriteriaDescription,The conditions under which a supplier is entitled to a particular tax reduction.,Taxation
Agency Code,dutyFeeTaxInformation/dutyFeeTaxAgency/AgencyCode,Code specifying a responsible agency.,Taxation
Agency Description,dutyFeeTaxInformation/dutyFeeTaxAgency/AgencyDescription,A description of the Tax Agency code.,Taxation
Duty Fee Tax Agency Name,dutyFeeTaxInformation/dutyFeeTaxAgencyName,The name of an agency responsible for the collection of this duty,Taxation
Duty Fee Tax Basis Price,dutyFeeTaxInformation/dutyFeeTaxBasisPrice,The price that is determined a trade item should be set to by legal means within a market. This price is the basis to which the tax is set to. Some trade item prices are dictated by law in some markets.,Taxation
Duty Fee Tax Classification Code,dutyFeeTaxInformation/dutyFeeTaxClassificationCode,"A code specifying the broad category of duty, fee or tax for example energy. waste, environment.",Taxation
Duty Fee Tax Country Code,dutyFeeTaxInformation/dutyFeeTaxCountryCode,The country code for the Fee or tax.,Taxation
Duty Fee Tax Country Subdivision Ship From Code,dutyFeeTaxInformation/dutyFeeTaxCountrySubdivisionShipFromCode,The country subdivision the item is being shipped from in which the tax basis is made,Taxation
Duty Fee Tax Country Subdivision Ship To Code,dutyFeeTaxInformation/dutyFeeTaxCountrySubdivisionShipToCode,The Country subdivision the item is being shipped to in which the tax basis is made.,Taxation
Duty Fee Tax Effective End Date,dutyFeeTaxInformation/dutyFeeTaxEffectiveEndDateTime,The effective date on which the tax ,Taxation
Duty Fee Tax Effective Start Date,dutyFeeTaxInformation/dutyFeeTaxEffectiveStartDateTime,The effective date on which the tax ,Taxation
Duty Fee Tax Legal Provision,dutyFeeTaxInformation/dutyFeeTaxLegalProvision,"The associated legal tax law that the tax information is based on. An example in Brazil: Inciso I, Art. 34, Anexo II, RICMS-SP.",Taxation
Tax Type Code,dutyFeeTaxInformation/dutyFeeTaxTypeCode,"Valid value for a specific type of tax, levy, duty or fee associated with the type of product or service.

Used to communicate the type of tax, levy, duty or fee applied to the product. Used to identify the portion of the invoice that is tax. Used to communicate to the buyer the amount of levy, duty or fee that they will need to pay.",Taxation
Tax Type Code Description,dutyFeeTaxInformation/dutyFeeTaxTypeDescription,"The description of the code that identifies a specific type of tax, levy, duty or fee associated with the type of product or service.

Used by the buyer to understand the meaning of the Tax Type Code.",Taxation
Is Trade Item A Combination Item,dutyFeeTaxInformation/isTradeItemACombinationItem,An indicator whether a product assigned with one GTIN contains components which could have different tax rates for example chocolate eggs with toys would be chocolate 7% and toy 19%.,Taxation
Flexible Spending Account Eligible,flexibleSpendingAccountEligible,Indicates if item is FSA-Eligible.,Taxation
Tax Agency Code,franceTaxAmounts/franceTaxAgencyCode,The agency code for the tax,Taxation
Tax Type Code,franceTaxAmounts/franceTaxTypeCode,The type of tax,Taxation
GST/HST Applicable?,gSTHSTApplicable,Indicates whether or not GST/HST taxes are applicable to the product at point of sale to the consumer.,Taxation
Is VAT Exempt,isVATExempt,Indicator to denote the product is exempt from Value Added Taxes (VAT).,Taxation
Levying Amount 1,levyingInformation/levyingAmount1,The amount of the levy,Taxation
Levying Class 1,levyingInformation/levyingClass1,The class of the levy.,Taxation
Levying Kind 1,levyingInformation/levyingKind1,The kind of the levy.,Taxation
Levying Kind Basis Value 1,levyingInformation/levyingKindBasisValue1,The basis amount of the levy.,Taxation
Levying Amount 2,levyingInformation2/levyingAmount2,The amount of the levy,Taxation
Levying Class 2,levyingInformation2/levyingClass2,The class of the levy.,Taxation
Levying Kind 2,levyingInformation2/levyingKind2,The kind of the levy.,Taxation
Levying Kind Basis Value 2,levyingInformation2/levyingKindBasisValue2,The basis amount of the levy.,Taxation
Milk Levy,milkLevy,An amount to be added to the invoice price for a milk levy.,Taxation
Milk Levy Currency,milkLevyCurrency,Currency for the amount to be added to the invoice price for a milk levy.,Taxation
PST Applicable by Province,pSTApplicableByProvince,"Taxes applicable to the product at point-of-sale to the consumer. A two part code constisting of: Part I, PST = Provincial Sales Tax and Part II, The two-character province or territory code.",Taxation
is PreCleaning Necessary,cleaningDisinfectingInformation/isPreCleaningNecessary,﻿The indicator that specifies whether pre-cleaning of the product is required before cleaning and disinfection.,Finished Goods Instructions
Type of Cleaning Code,cleaningDisinfectingInformation/typeOfCleaningCode,﻿The code that describes the form of cleaning/detergent that can be used for the product. Example: Cleaning/detergent in accordance with ISO 15883.,Finished Goods Instructions
Type of Cleaning Disinfection Process Code,cleaningDisinfectingInformation/typeOfCleaningDisinfectionProcessCode,﻿The code that describes the type of process necessary to clean or disinfect the specific product.,Finished Goods Instructions
Type of Disinfection Code,cleaningDisinfectingInformation/typeOfDisinfectionCode,﻿The code that describes the type of disinfection that is possible for the product. Example: Disinfection type in accordance with ISO 15883.,Finished Goods Instructions
Catch Country Code,fishReportingInformation/fishCatchInformation/catchCountryCode,﻿The ISO 3166-1 numeric code for the country where the fish/seafood in the product was caught or farmed.,Dairy Fish Meat Poultry
Fish Seafood Presentation Code,fishReportingInformation/fishSeafoodPresentationCode,"The code that indicates the state or form of a fish/seafood product as presented to the consumer, possibly as a result of post-catch processing (e.g., tail removed, gutted, or filleted).",Dairy Fish Meat Poultry
Certification Statement on Package,foodAndBevDietTypeInfo/certification/certificationStatementOnPackage,﻿The statement provided from the certification agency that must be displayed on the packaging according to the certification agreement.,Food and Beverage
Subject of Certification Description,foodAndBevDietTypeInfo/certification/subjectOfCertificationDescription,"The description that provides more information about the type of certification, e.g. the type of product, model, etc. as stated on the certificate.",Food and Beverage
Is Assortment?,isAssortment,"Indicator the item contains an assortment of products. An assortment would be different products packaged together, such as different flavors, scents, and/or formulas.",Indicators
Is Data Quality Dummy?,isDataQualityDummy,GS1 Denmark indicator for the data quality dummy.,Indicators
Is Data Quality Verified?,isDataQualityVerified,GS1 Denmark indicator for the data quality verified.,Indicators
Claim Description,productInformationDetail/claimDescription,"Free text field for any additional type of product claims like nutritional, health claims,etc.",Descriptions
Claim Element Code,productInformationDetail/claimDetail/claimElementCode,"The type of nutrient, ingredient, vitamins and minerals that the health claim is in reference to for example fat, copper, milk, paraben, BHA.",Descriptions
Claim Marked on Package,productInformationDetail/claimDetail/claimMarkedOnPackage,Is the claim specified by Nutritional Claim Type Code in combination with Nutritional Claim Nutrient Element Code labelled on the product package. ,Descriptions
Claim Type Code,productInformationDetail/claimDetail/claimTypeCode,A code depicting the degree to which a trade item contains a specific nutrient or ingredient in relation to a health claim for example FREE_FROM.,Descriptions
Is Claim Regulated,productInformationDetail/claimDetail/isClaimRegulated,The indicator that specifies whether the claim for the product is regulated for a target market.,Descriptions
Dispenser Type Code,productInformationDetail/dispenserTypeCode,The mechanism or method by which the product is dispensed from its container.,Descriptions
Formation Type Code,productInformationDetail/formationTypeCode,"A code differentiating brush, broom, and dusting tools from one another by concepts such as the surfaces they clean or the accessories they're packaged with.",Descriptions
Brush Broom Type Code,productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/brushBroomTypeCode,A descriptive code differentiating cleaning cloths by fabric or intended use.,Descriptions
Cleaning Cloth Type Code,productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/cleaningClothTypeCode,"Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the state in which the product is sold.",Descriptions
Household Cleaning Product Type Code,productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/householdCleaningProductTypeCode,"A code to differentiate household cleaning products from one another. The codes include, but are not limited to, the room the product is to be used in, the surfaces it's intended to clean, or the type of substance the product is meant to eliminate. ",Descriptions
Laundry Detergent Type Code,productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/laundryDetergentTypeCode,"A code differentiating the detergent/soap used for laundry by colour type, fabric type, or washing technique.",Descriptions
Laundry Hanging Aid Type Code,productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/laundryHangingAidTypeCode,"A code describing various accessories/aids used to hang clothing for storage, display, or laundering purposes.",Descriptions
Sponge Scourer Type Code,productInformationDetail/householdAndOfficeFurnishingInformation/cleaningAidsInformation/spongeScourerTypeCode,A descriptive code differentiating cleaning sponges or scourers from one another.,Descriptions
Target Surface Type Code,productInformationDetail/targetSurfaceTypeCode,The surfaces a product is intended to be used upon. Some manufacturers designate one or more specific surface types from this list to help consumers understand product application.,Descriptions
Time Of ApplicationCode,productInformationDetail/timeOfApplicationCode,"Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the time of product application.",Descriptions
Beef Cut,beefCut,Valid Value to denote the name of the cut of Beef. This is based on UNECE standards.,Dairy Fish Meat Poultry
Chicken Cut,chickenCut,Valid Value to denote the name of the cut of Chicken. This is based on UNECE standards.,Dairy Fish Meat Poultry
Discontinued Date,discontinuedDate,"AFTER December 2018, a GTIN allocated to a trade item SHALL NOT be reallocated to another trade item. This applies to ALL trade items, regardless of sector. The only exceptions include: If a GTIN has been assigned to an item, which was then never actually produced, the GTIN may be deleted from any catalogue immediately without first being marked as discontinued. In this exceptional case, the GTIN may be re-used 12 months after deletion from the seller's catalogue. Trade items that have been withdrawn from the market and are reintroduced may use the original GTIN if they are reintroduced without any modifications or changes that require a new GTIN as specified by the GTIN Management Standard.",Dates
Generic Description,genericDescription,"The generic description of the trade item. Should be provided for ethical or proprietary medicines only and is made up of the active ingredient, format and strength.",Descriptions
Is Trade Item A Priority Food?,isTradeItemAPriorityFood,"A supplier declaration that must be made for food products, indicating if the item is a priority food as defined by the Country of Origin Labelling food standard. If the item is a priority food, the population of the Labelling Logo attribute below is mandatory.",Food and Beverage
Liquor Age,liquorAge,Descriptive term or number to denote the age of the liquor product.,Liquor
`;
