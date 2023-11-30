const validate = (formData, newErrors, setErrors) => {
    const requiredFields = ["name", "image", "hp", "attack", "defense", "specialAttack", "specialDefense", "speed", "height", "weight", "types"];

    const validateField = (field, value) => {
        switch (field) {
            case "name":
                if (!value.trim()) {
                    return "El nombre es requerido";
                } else if (/\d/.test(value)) {
                    return "El nombre no puede contener números";
                }
                break;
            case "image":
                if (!value.trim()) {
                    return "La URL de la imagen es requerida";
                } else if (!isValidUrl(value)) {
                    return "La URL de la imagen no es válida";
                }
                break;
            case "hp":
                if (!isNumeric(value) || value < 0) {
                    return "HP debe ser un número positivo";
                }
                break;
            case "attack":
            case "defense":
            case "specialAttack":
            case "specialDefense":
            case "speed":
                if (!isNumeric(value) || value < 0) {
                    return "El valor debe ser un número positivo";
                }
                break;
            case "height":
            case "weight":
                if (!isNumeric(value) || value <= 0) {
                    return "El valor debe ser un número positivo mayor a cero";
                }
                break;
            case "types":
                if (!value.length) {
                    return "Por favor selecciona al menos un tipo";
                }
                break;
            default:
                break;
        }
        return "";
    };

    const newErrorsCopy = { ...newErrors };

    requiredFields.forEach((field) => {
        const value = formData[field];
        const errorMessage = validateField(field, value);
        newErrorsCopy[field] = errorMessage;
    });

    setErrors(newErrorsCopy);
    return Object.values(newErrorsCopy).every((error) => !error); // Devuelve true si no hay errores
};

// Funciones isNumeric y isValidUrl se mantienen igual
const isNumeric = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
};

export default validate;