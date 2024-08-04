let totalNutrients = {
    "ENERC_KCAL": {
        "label": "Energy",
        "quantity": 2253.101981306866,
        "unit": "kcal"
    },
    "FAT": {
        "label": "Fat",
        "quantity": 151.47311499620517,
        "unit": "g"
    },
    "FASAT": {
        "label": "Saturated",
        "quantity": 41.13355150309294,
        "unit": "g"
    },
    "FATRN": {
        "label": "Trans",
        "quantity": 0.7711070290000002,
        "unit": "g"
    },
    "FAMS": {
        "label": "Monounsaturated",
        "quantity": 63.100281373098355,
        "unit": "g"
    },
    "FAPU": {
        "label": "Polyunsaturated",
        "quantity": 31.85674445182799,
        "unit": "g"
    },
    "CHOCDF": {
        "label": "Carbs",
        "quantity": 17.72996514133862,
        "unit": "g"
    },
    "CHOCDF.net": {
        "label": "Carbohydrates (net)",
        "quantity": 16.352143167717376,
        "unit": "g"
    },
    "FIBTG": {
        "label": "Fiber",
        "quantity": 1.3778219736212456,
        "unit": "g"
    },
    "SUGAR": {
        "label": "Sugars",
        "quantity": 0.7939109868106228,
        "unit": "g"
    },
    "PROCNT": {
        "label": "Protein",
        "quantity": 161.54031321948597,
        "unit": "g"
    },
    "CHOLE": {
        "label": "Cholesterol",
        "quantity": 889.0410452000001,
        "unit": "mg"
    },
    "NA": {
        "label": "Sodium",
        "quantity": 8135.782903527355,
        "unit": "mg"
    },
    "CA": {
        "label": "Calcium",
        "quantity": 116.51301359077408,
        "unit": "mg"
    },
    "MG": {
        "label": "Magnesium",
        "quantity": 276.82169621464243,
        "unit": "mg"
    },
    "K": {
        "label": "Potassium",
        "quantity": 2529.722194651041,
        "unit": "mg"
    },
    "FE": {
        "label": "Iron",
        "quantity": 8.335407066766463,
        "unit": "mg"
    },
    "ZN": {
        "label": "Zinc",
        "quantity": 12.950414243828696,
        "unit": "mg"
    },
    "P": {
        "label": "Phosphorus",
        "quantity": 1660.4080117810859,
        "unit": "mg"
    },
    "VITA_RAE": {
        "label": "Vitamin A",
        "quantity": 208.65249020000005,
        "unit": "µg"
    },
    "VITC": {
        "label": "Vitamin C",
        "quantity": 0.75,
        "unit": "mg"
    },
    "THIA": {
        "label": "Thiamin (B1)",
        "quantity": 0.7104550166118764,
        "unit": "mg"
    },
    "RIBF": {
        "label": "Riboflavin (B2)",
        "quantity": 1.5428186550593823,
        "unit": "mg"
    },
    "NIA": {
        "label": "Niacin (B3)",
        "quantity": 44.98844541545843,
        "unit": "mg"
    },
    "VITB6A": {
        "label": "Vitamin B6",
        "quantity": 3.3713281129199304,
        "unit": "mg"
    },
    "FOLDFE": {
        "label": "Folate equivalent (total)",
        "quantity": 47.7274267383718,
        "unit": "µg"
    },
    "FOLFD": {
        "label": "Folate (food)",
        "quantity": 47.7274267383718,
        "unit": "µg"
    },
    "FOLAC": {
        "label": "Folic acid",
        "quantity": 0,
        "unit": "µg"
    },
    "VITB12": {
        "label": "Vitamin B12",
        "quantity": 5.6245453880000005,
        "unit": "µg"
    },
    "VITD": {
        "label": "Vitamin D",
        "quantity": 0.9071847400000002,
        "unit": "µg"
    },
    "TOCPHA": {
        "label": "Vitamin E",
        "quantity": 1.944087954,
        "unit": "mg"
    },
    "VITK1": {
        "label": "Vitamin K",
        "quantity": 19.065879540000005,
        "unit": "µg"
    },
    "WATER": {
        "label": "Water",
        "quantity": 807.4698376934067,
        "unit": "g"
    }
}

let result = [];
for (let nutrient in totalNutrients) {
    const quantity = Math.floor(totalNutrients[nutrient]['quantity']*100)/100;
    // console.log(totalNutrients[nutrient]['label'] + ": " +  quantity + " " + totalNutrients[nutrient]['unit']);
    result.push(totalNutrients[nutrient]['label'] + ": " +  quantity + " " + totalNutrients[nutrient]['unit']);
}

console.log(result);