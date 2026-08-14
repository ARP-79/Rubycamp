function validateObjectSchema(obj, schema, parentKey = '') {
    let isValid = true;
    let errors = [];
    let validatedFields = [];
    let summary = { total: 0, valid: 0, invalid: 0 };

    function recordField(fieldPath, isFieldValid, errorMessage) {
        validatedFields.push(fieldPath);
        summary.total++;
        if (isFieldValid) {
            summary.valid++;
        } else {
            summary.invalid++;
            isValid = false;
            errors.push(errorMessage);
        }
    }

    for (let key in schema) {
        const rules = schema[key];
        const value = obj ? obj[key] : undefined;
        const currentPath = parentKey ? `${parentKey}.${key}` : key;

        if (rules.type === 'object') {
            if (rules.required && (value === undefined || value === null)) {
                recordField(currentPath, false, `${currentPath} is required`);
                continue;
            }
            
            if (rules.properties) {
                const nestedResult = validateObjectSchema(value, rules.properties, currentPath);
                
                validatedFields.push(...nestedResult.validatedFields);
                summary.total += nestedResult.summary.total;
                summary.valid += nestedResult.summary.valid;
                summary.invalid += nestedResult.summary.invalid;
                if (!nestedResult.isValid) {
                    isValid = false;
                    errors.push(...nestedResult.errors);
                }
            }
            continue;
        }

        let fieldValid = true;
        let fieldError = '';

        if (rules.required && (value === undefined || value === null)) {
            fieldValid = false;
            fieldError = `${currentPath} is required`;
        } 
        else if (value !== undefined && value !== null) {
            if (typeof value !== rules.type) {
                fieldValid = false;
                fieldError = `${currentPath} should be a ${rules.type}`;
            }
            if (rules.minLength && typeof value === 'string' && value.length < rules.minLength) {
                fieldValid = false;
                fieldError = `${currentPath} must be at least ${rules.minLength} characters`;
            }
            if (rules.pattern && typeof value === 'string' && !rules.pattern.test(value)) {
                fieldValid = false;
                fieldError = `${currentPath} does not match required pattern`;
            }
            if (rules.min !== undefined && typeof value === 'number' && value < rules.min) {
                fieldValid = false;
                fieldError = `${currentPath} must be at least ${rules.min}`;
            }
            if (rules.max !== undefined && typeof value === 'number' && value > rules.max) {
                fieldValid = false;
                fieldError = `${currentPath} must be at most ${rules.max}`;
            }
        }

        recordField(currentPath, fieldValid, fieldError);
    }

    return {
        isValid,
        errors,
        validatedFields,
        summary
    };
}


let user = {
    name: "John",
    email: "john@example.com",
    age: 25,
    address: {
        street: "Jl. Sudirman",
        city: "Jakarta"
    }
};

let schema = {
    name: { type: "string", required: true, minLength: 2 },
    email: { type: "string", required: true, pattern: /@/ }, 
    age: { type: "number", required: true, min: 18, max: 100 },
    address: {
        type: "object",
        required: true,
        properties: {
            street: { type: "string", required: true },
            city: { type: "string", required: true }
        }
    }
};

console.log(validateObjectSchema(user, schema));